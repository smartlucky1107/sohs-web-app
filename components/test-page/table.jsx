import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TableMain from "./table/main";
import Link from "next/link";
import { Input, Modal, Spin } from "antd";
import Papa from "papaparse";
import axios from "axios";

function getDateString(date) {
  var dateString = date;
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
}

export default function TestTable(props) {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function importData(formData) {
    try {
      await axios.post("/api/tests/bulk-import", formData); // Send POST request to API
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
      const reader = new FileReader();

      reader.onload = (event) => {
        const csvData = event.target.result;

        // Inside the reader.onload callback
        const { data, errors, meta } = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });

        if (errors.length === 0) {
          let allData = [];

          data.map((item) => {
            const formData = {
              name: item.Name,
              dept: item.Dept,
              fin: item[Object.keys(item).find((key) => key === "NRIC/FIN")],
              sex: item.Sex,
              dob:
                item.DOB !== ""
                  ? getDateString(item.DOB)
                  : getDateString(item.DOB),
              empno: item.Empno,
              date: item.Date_j,
              jobt: item.Job_Title,
              yrs_exposure: item.Yrs_exp,
              statutory: item.Statutory, // new field
              notify: item.Notify, // new field
              IHDinf: item.IHDinf, // new field
              IHDiag: item.IHDdiag, // new field
              occ_hist: item.Occ_hist, // new field
              ear_discharge:
                item[Object.keys(item).find((key) => key === "Ear Discharge")], // new field
              ear_operation:
                item[Object.keys(item).find((key) => key === "Ear operation")], // new field
              ringing_ears:
                item[Object.keys(item).find((key) => key === "Ringing ears")], // new field
              head_or_ear:
                item[
                  Object.keys(item).find((key) => key === "Head or ear Injury")
                ], // new field
              ear_problem:
                item[
                  Object.keys(item).find(
                    (key) => key === "Consult Dr for Ear problem"
                  )
                ], // new field
              loud_noise_exposure:
                item[
                  Object.keys(item).find(
                    (key) => key === "Ever Exposed To loud Noise"
                  )
                ], // new field
              medication: item.Medication, // new field
              military_service:
                item[
                  Object.keys(item).find((key) => key === "Military Service")
                ], // new field
              medical_problem:
                item[
                  Object.keys(item).find((key) => key === "Medical Problem")
                ], // new field
              med_hist: item.Med_hist, // new field
              other_info:
                item[Object.keys(item).find((key) => key === "Other info")], // new field
              counsel: item.Counsel, // new field
              protect: item.protect, // new field
              prototype: item.protype, // new field
              profreq: item.profreq, // new field
              demo: item.Demo, // new field
              cleanfreq: item.cleanfreq, // new field
              rearex: item.rearex, // new field
              learex: item.learex, // new field

              air_r0_25: item.air_r1,
              air_r0_5: item.air_r2,
              air_r1: item.air_r3,
              air_r2: item.air_r4,
              air_r3: item.air_r5,
              air_r4: item.air_r6,
              air_r6: item.air_r7,
              air_r8: item.air_r8,
              air_l0_25: item.air_l1,
              air_l0_5: item.air_l2,
              air_l1: item.air_l3,
              air_l2: item.air_l4,
              air_l3: item.air_l5,
              air_l4: item.air_l6,
              air_l6: item.air_l7,
              air_l8: item.air_l8,

              bone_r0_25: item.bone_r1,
              bone_r0_5: item.bone_r2,
              bone_r1: item.bone_r3,
              bone_r2: item.bone_r4,
              bone_r3: item.bone_r5,
              bone_r4: item.bone_r6,
              bone_r6: item.bone_r7,
              bone_r8: item.bone_r8,
              bone_l0_25: item.bone_l1,
              bone_l0_5: item.bone_l2,
              bone_l1: item.bone_l3,
              bone_l2: item.bone_l4,
              bone_l3: item.bone_l5,
              bone_l4: item.bone_l6,
              bone_l6: item.bone_l7,
              bone_l8: item.bone_l8,

              tester: item.Tester, // new field
              certify: item.certify,
              action: item.Action,
              diagnosis: item.result,
              date_tested:
                item.Date_tested != "" ? getDateString(item.Date_tested) : "",
              review1yr: item.review1yr, // new field
              review6mo: item.review6mths, // new field
              tonotify: item.tonotify, // new field
              notified: item.Notified, // new field
            };
            allData.push(formData);
          });

          importData(allData);
        } else {
          console.error("Error parsing CSV:", errors);
        }
      };

      reader.readAsText(file);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
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
            <Link
              href="/add-test"
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
            >
              Add Test Result
            </Link>
            <button
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
              onClick={showModal}
            >
              Import CSV
            </button>
          </div>
        </div>

        <TableMain
          searchText={searchText}
          setEditPopupState={props.setEditPopupState}
        />

        <Modal
          title="Import CSV File"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="[&_.ant-btn-primary]:!bg-[#1677ff]"
        >
          {isLoading ? (
            <Spin tip="Importing...">
              <Input type="file" accept=".csv" onChange={handleFileUpload} />
            </Spin>
          ) : (
            <Input type="file" accept=".csv" onChange={handleFileUpload} />
          )}
        </Modal>
      </div>
    </section>
  );
}
