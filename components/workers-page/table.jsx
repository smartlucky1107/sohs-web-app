import { Input, Button, Modal, Spin, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TableMain from "./table/main";
import Papa from "papaparse";
import axios from "axios";
import { downloadExcelFile, readExcelFile } from "@/utils/excelfile";
import FloatLabel from "../FloatLabel";

const { Search } = Input;

const companyAddressLists = [
  { value: "C&P", label: "C&P" },
  { value: "SEO", label: "SEO" },
  { value: "CONCEPT", label: "CONCEPT" },
  { value: "CT", label: "CT" },
  { value: "FOOD", label: "FOOD" },
  { value: "CWT", label: "CWT" },
  { value: "AWOLF", label: "AWOLF" },
  { value: "PRAGAS", label: "PRAGAS" },
  { value: "PROS", label: "PROS" },
];

function getDateString(date) {
  var dateString = date;

  if (typeof dateString === "string") {
    var dateParts = dateString.split("/");
    var formattedDate = new Date(
      dateParts[2],
      dateParts[0] - 1,
      dateParts[1],
      18,
      0,
      0
    ).toUTCString();
    return formattedDate;
  } else {
    return "";
  }
}

export default function WorkersTable(props) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyAddress, setCompanyAddress] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function importData(formData) {
    try {
      await axios.post("/api/workers/bulk-import", formData); // Send POST request to API
      setIsLoading(false);
      setFile(null);

      location.reload();
    } catch (error) {
      // Handle error
      console.error("Failed to submit data:", error);
    }
  }

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsLoading(true);

    if (file) {
      if (file) {
        readExcelFile(file, (excelData) => {
          let allData = [];

          excelData.map((item) => {
            const formData = {
              name: item.Name,
              jobt: item[Object.keys(item).find((key) => key === "Job Title")],
              empno: item.Empno,
              dob:
                getDateString(item.DOB) != "Invalid Date"
                  ? getDateString(item.DOB)
                  : "",
              date:
                getDateString(item.Date) != "Invalid Date"
                  ? getDateString(item.Date)
                  : "",
              fin: item[Object.keys(item).find((key) => key === "NRIC/FIN")],
              ypj: item.Yrs_pj,
              exp: item.Yrs_exp,
              hist: item.Occ_hist,
              dept: item.Dept,
              company_address:
                item[
                  Object.keys(item).find((key) => key === "Company Address")
                ],
              inf: item.IHDinf,
              notify: item.Notify,
              diag: item.IHDdiag,
              stat: item.Statutory,
              sex: item.Sex,
              company_address: companyAddress,
            };
            allData.push(formData);
          });
          importData(allData);
        });
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const clearData = async () => {
    if (confirm("Are you sure you want to delete all workers?")) {
      try {
        await axios.post("/api/workers/clear"); // Send POST request to API
        location.reload();
      } catch (error) {
        // Handle error
        console.error("Failed to submit data:", error);
      }
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center p-5">
      <div className="w-full flex max-w-[1725px] flex-col gap-3 justify-center items-center">
        <div className="w-full flex justify-between md:items-center sm:flex-col sm:gap-4 ">
          <div className="flex h-full gap-2 bg-[#f5f5f5]">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-full px-5 py-3 rounded bg-[whitesmoke]"
              placeholder="Search ..."
              style={{
                backgroundColor: "#f5f5f5 !important",
                border: "none",
                outline: "none",
              }}
            />
            <button className="rounded py-3 px-5 uppercase text-black">
              <CiSearch />
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => props.setPopupState(1)}
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
            >
              Add Worker
            </button>
            <button
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
              onClick={showModal}
            >
              Import Excel
            </button>
            <button
              className="bg-red-500 py-3 px-5 uppercase text-white"
              onClick={clearData}
            >
              Clear Data
            </button>
          </div>
        </div>

        <TableMain
          searchText={searchText}
          setEditPopupState={props.setEditPopupState}
          PopupState={props.PopupState}
          EditPopupState={props.EditPopupState}
          setData={setData}
        />

        <Modal
          title="Import Excel File"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="[&_.ant-btn-primary]:!bg-[#1677ff]"
        >
          {isLoading ? (
            <Spin tip="Importing..."></Spin>
          ) : (
            <>
              <FloatLabel label="Company Address" value={companyAddress}>
                <Select
                  options={companyAddressLists}
                  value={companyAddress !== "" ? companyAddress : undefined}
                  onChange={(selectedOption) =>
                    setCompanyAddress(selectedOption)
                  }
                  className="w-full"
                />
              </FloatLabel>

              <Input type="file" onChange={handleFileUpload} className="mt-2" />
            </>
          )}
        </Modal>
      </div>
    </section>
  );
}
