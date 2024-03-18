import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TableMain from "./table/main";
import Link from "next/link";
import { DatePicker, Input, Modal, Spin } from "antd";
import Papa from "papaparse";
import axios from "axios";
import { capitalizeText } from "@/utils/capitalizeText";
import { downloadExcelFile, readExcelFile } from "@/utils/excelfile";

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

export default function TestTable(props) {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [searchData, setSearchData] = useState({
    name: "",
    fin: "",
    company_address: "",
  });
  const searchFields = ["name", "fin", "company_address"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchDataChange = (key, value) => {
    setSearchData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsLoading(true);

    if (file) {
      readExcelFile(file, (excelData) => {
        let allData = [];

        excelData.map((item) => {
          let action_plans = "";
          let action_plans_text = "";
          if (item.Action.includes("Review")) {
            action_plans = "Review (Date)";
            action_plans_text = item.Action.replace(
              "To review in ",
              ""
            ).replace("Review in ", "");
          }

          const formData = {
            name: item.Name,
            dept: item.Dept,
            fin: item[Object.keys(item).find((key) => key === "NRIC/FIN")],
            sex: item.Sex,
            dob: item.DOB != "" ? getDateString(item.DOB) : "",
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
              item[Object.keys(item).find((key) => key === "Military Service")], // new field
            medical_problem:
              item[Object.keys(item).find((key) => key === "Medical Problem")], // new field
            med_hist: item.Med_hist, // new field
            other_info:
              item[Object.keys(item).find((key) => key === "Other info")], // new field
            counsel: item.Counsel, // new field
            protect: item.protect, // new field
            prototype: item.protype, // new field
            profreq: item.profreq, // new field
            prototype: item.prototype, // new field
            demo: item.Demo, // new field
            cleanfreq: item.cleanfreq, // new field
            rearex: item.rearex, // new field
            learex: item.learex, // new field

            air_r0_5: item.air_r2,
            air_r1: item.air_r3,
            air_r2: item.air_r4,
            air_r3: item.air_r5,
            air_r4: item.air_r6,
            air_r6: item.air_r7,
            air_r8: item.air_r8,

            air_l0_5: item.air_l2,
            air_l1: item.air_l3,
            air_l2: item.air_l4,
            air_l3: item.air_l5,
            air_l4: item.air_l6,
            air_l6: item.air_l7,
            air_l8: item.air_l8,

            bone_r0_5: item.bone_r2,
            bone_r1: item.bone_r3,
            bone_r2: item.bone_r4,
            bone_r3: item.bone_r5,
            bone_r4: item.bone_r6,
            bone_r6: item.bone_r7,
            bone_r8: item.bone_r8,

            bone_l0_5: item.bone_l2,
            bone_l1: item.bone_l3,
            bone_l2: item.bone_l4,
            bone_l3: item.bone_l5,
            bone_l4: item.bone_l6,
            bone_l6: item.bone_l7,
            bone_l8: item.bone_l8,

            tester: item.Tester,
            certify: item.certify,
            action_plans: action_plans,
            action_plans_text: action_plans_text,
            diagnosis: item.result,
            date_tested:
              item.Date_tested != "" ? getDateString(item.Date_tested) : "",
            review1yr: item.review1yr,
            review6mo: item.review6mths,
            tonotify: item.tonotify,
            notified: item.Notified,
            previous_result: item.result,
          };
          allData.push(formData);
        });

        importData(allData);
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleExport = () => {
    let Data = [];

    data.map((data) => {
      let review1yr = data.review1yr;
      if (
        (!review1yr &&
          (data.action_plans_text === "1 year" ||
            data.action_plans_text === "1 years" ||
            data.action_plans_text === "1 yrs")) ||
        data.action_plans_text.includes("1 y")
      ) {
        review1yr = "TRUE";
      } else {
        review1yr = "FALSE";
      }

      let review6mths = data.review6mths;
      if (
        (!review6mths &&
          (data.action_plans_text === "6 months" ||
            data.action_plans_text === "6 month" ||
            data.action_plans_text === "6 mo")) ||
        data.action_plans_text.includes("6 mo")
      ) {
        review6mths = "TRUE";
      } else {
        review6mths = "FALSE";
      }

      let Action = data.action_plans.replace(" (Date)", "");
      if (data.action_plans_text) {
        Action = Action + " (" + data.action_plans_text + ") ";
      }

      Data.push({
        Name: data.name,
        Dept: data.dept,
        "NRIC/FIN": data.fin,
        Sex: data.sex,
        DOB: data.dob,
        Empno: data.empno,
        Date_j: data.date,
        Job_Title: data.jobt,
        Yrs_exp: data.yrs_exposure,
        Statutory: data.statutory,
        Notify: data.notify,
        IHDinf: data.IHDinf,
        IHDdiag: data.IHDiag,
        Occ_hist: data.occ_hist,
        "Ear Discharge": data.ear_discharge,
        "Ear operation": data.ear_operation,
        "Ringing ears": data.ringing_ears,
        "Head or ear Injury": data.head_or_ear,
        "Consult Dr for Ear problem": data.ear_problem,
        "Ever Exposed To loud Noise": data.loud_noise_exposure,
        Medication: data.medication,
        "Military Service": data.military_service,
        "Medical Problem": data.medical_problem,
        Med_hist: data.med_hist,
        "Other info": data.other_info,
        Counsel: data.counsel,
        protect: data.protect,
        protype: data.prototype,
        profreq: data.profreq,
        Demo: data.demo,
        cleanfreq: data.cleanfreq,
        rearex: data.rearex,
        learex: data.learex,

        air_r2: data.air_r0_5,
        air_r3: data.air_r1,
        air_r4: data.air_r2,
        air_r5: data.air_r3,
        air_r6: data.air_r4,
        air_r7: data.air_r6,
        air_r8: data.air_r8,

        air_l2: data.air_l0_5,
        air_l3: data.air_l1,
        air_l4: data.air_l2,
        air_l5: data.air_l3,
        air_l6: data.air_l4,
        air_l7: data.air_l6,
        air_l8: data.air_l8,

        bone_r2: data.bone_r0_5,
        bone_r3: data.bone_r1,
        bone_r4: data.bone_r2,
        bone_r5: data.bone_r3,
        bone_r6: data.bone_r4,
        bone_r7: data.bone_r6,
        bone_r8: data.bone_r8,

        bone_l2: data.bone_l0_5,
        bone_l3: data.bone_l1,
        bone_l4: data.bone_l2,
        bone_l5: data.bone_l3,
        bone_l6: data.bone_l4,
        bone_l7: data.bone_l6,
        bone_l8: data.bone_l8,
        Tester: data.tester,
        certify: data.certify,
        Action: Action,
        result: data.diagnosis,
        Date_tested: data.date_tested,
        review1yr: review1yr,
        review6mths: review6mths,
        tonotify: data.tonotify,
        Notified: data.notified,
      });
    });

    downloadExcelFile(Data, "tests.xlsx");
  };

  return (
    <section className="w-full flex flex-col justify-center items-center p-5">
      <div className="w-full flex max-w-[1725px] flex-col gap-3 justify-center items-center">
        <div className="w-full flex justify-between md:items-center sm:flex-col sm:gap-4 ">
          <div className="flex items-center gap-5 flex-wrap lg:w-[70%]">
            {searchFields.map((field) => (
              <div key={field} className="flex h-full gap-2 bg-[#f5f5f5]">
                <input
                  type="text"
                  value={searchData.field}
                  onChange={(e) =>
                    handleSearchDataChange(field, e.target.value)
                  }
                  className="h-full px-5 py-3 rounded bg-[whitesmoke]"
                  placeholder={`Search ${capitalizeText(
                    field.replace("_", " ")
                  )} ...`}
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
            ))}

            <div className="flex items-center gap-3">
              <label>Tested Date: </label>
              <DatePicker.RangePicker
                format="DD/MM/YYYY"
                onChange={handleDateChange}
                className="h-[45px] rounded-none"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
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
              Import Excel
            </button>
            <button
              onClick={handleExport}
              className="bg-[#0094f1] py-3 px-5 uppercase text-white"
            >
              Export Excel
            </button>
          </div>
        </div>

        <TableMain
          searchData={searchData}
          dateRange={dateRange}
          setEditPopupState={props.setEditPopupState}
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
            <Spin tip="Importing...">
              <Input type="file" onChange={handleFileUpload} />
            </Spin>
          ) : (
            <Input type="file" onChange={handleFileUpload} />
          )}
        </Modal>
      </div>
    </section>
  );
}
