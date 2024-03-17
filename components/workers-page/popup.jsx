import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { DatePicker, Input, Radio, Select, Button } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import FloatLabel from "../FloatLabel";
import dayjs from "dayjs";
import { validateNRICFormat } from "@/utils/validateNRICFormat";

const gender = [
  { label: "Male", value: "m" },
  { label: "Female", value: "f" },
];

export default function WorkersPopup(props) {
  const router = useRouter();

  const [loadings, setLoadings] = useState([]);
  const [formData, setFormData] = useState({}); // State to hold form data

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const isFinUnique = async (fin) => {
    try {
      const response = await axios.get(
        `/api/workers/checkFinUnique?fin=${fin}`
      ); // Replace with your API endpoint to check 'fin' uniqueness
      return response.data.isUnique; // Assuming the response contains a boolean indicating uniqueness
    } catch (error) {
      console.error("Failed to check uniqueness of fin:", error);
      return false; // Assuming uniqueness check fails
    }
  };

  const handleSubmit = async () => {
    try {
      // if (
      //   formData.name == "" ||
      //   !formData.name ||
      //   formData.jobt == "" ||
      //   !formData.jobt ||
      //   formData.empno == "" ||
      //   !formData.empno ||
      //   formData.dob == "" ||
      //   !formData.dob ||
      //   formData.date == "" ||
      //   !formData.date ||
      //   formData.fin == "" ||
      //   !formData.fin ||
      //   formData.ypj == "" ||
      //   !formData.ypj ||
      //   formData.exp == "" ||
      //   !formData.exp ||
      //   formData.hist == "" ||
      //   !formData.hist ||
      //   formData.dept == "" ||
      //   !formData.dept ||
      //   formData.inf == "" ||
      //   !formData.inf ||
      //   formData.notify == "" ||
      //   !formData.notify ||
      //   formData.diag == "" ||
      //   !formData.diag ||
      //   formData.stat == "" ||
      //   !formData.stat ||
      //   formData.sex == "" ||
      //   !formData.sex ||
      //   formData.company_address == "" ||
      //   !formData.company_address
      // ) {
      //   return alert("All fields are required.");
      // }

      const isUnique = await isFinUnique(formData.fin);
      if (!isUnique) {
        // 'fin' value is not unique, handle the case by showing an error message
        alert("FIN already exists. Please enter a unique FIN.");
        return;
      }
      if (!validateNRICFormat(formData.fin)) {
        alert("NRIC/FIN is not valid. Please enter a valid NRIC.");
        return;
      }
      await axios.post("/api/workers/addworker", formData); // Send POST request to API

      if (props.handleInputChange) {
        props.handleInputChange("name", formData.name);
        props.handleInputChange("fin", formData.fin);
        props.handleInputChange("dob", formData.dob);
        props.handleInputChange("sex", formData.sex);
        props.handleInputChange("empno", formData.empno);
        props.handleInputChange("date", formData.date);
        props.handleInputChange("jobt", formData.jobt);
        props.handleInputChange("yrs_exposure", formData.exp);
        props.handleInputChange("dept", formData.dept);
        props.handleInputChange("company_address", formData.company_address);
      }

      setFormData({});
      props.setPopupState(0);
    } catch (error) {
      // Handle error
      console.error("Failed to submit data:", error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <section className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.6)]">
      <div className="w-full max-w-[800px] bg-white flex flex-col relative">
        <div
          className="w-full"
          style={{
            backgroundImage: "url(/popup-bg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-white text-xl sm:text-xl w-full h-full bg-[#0094f1a0] py-6 px-3 text-center">
            Write Personal Info
          </h1>
        </div>
        <div className="w-full p-6 flex flex-wrap gap-5 justify-center items-center">
          <FloatLabel label="Name" className="w-[40%]" value={formData.name}>
            <Input
              size="large"
              onChange={(e) => handleInputChange("name", e.target.value)}
              value={formData.name}
            />
          </FloatLabel>
          <FloatLabel
            label="Job title"
            className="w-[40%]"
            value={formData.jobt}
          >
            <Select
              options={[
                { value: "Technician", label: <span>Technician</span> },
                { value: "Senior Technician", label: <span>Senior</span> },
                { value: "Component", label: <span>Component</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("jobt", selectedValue)
              }
              value={formData.jobt}
            />
          </FloatLabel>
          <FloatLabel label="EMPO" className="w-[40%]" value={formData.empno}>
            <Input
              size="large"
              type="number"
              onChange={(e) => handleInputChange("empno", e.target.value)}
              value={formData.empno}
            />
          </FloatLabel>
          <FloatLabel
            label="DOB"
            className="w-[40%]"
            value={formData.dob && dayjs(formData.dob)}
          >
            <DatePicker
              format="DD/MM/YYYY"
              size={"large"}
              onChange={(selectedDate) =>
                handleInputChange("dob", selectedDate)
              }
              value={formData.dob && dayjs(formData.dob)}
              placeholder=""
            />
          </FloatLabel>
          <FloatLabel
            label="Date Joined"
            className="w-[40%]"
            value={formData.date && dayjs(formData.date)}
          >
            <DatePicker
              format="DD/MM/YYYY"
              size={"large"}
              onChange={(selectedDate) =>
                handleInputChange("date", selectedDate)
              }
              value={formData.date && dayjs(formData.date)}
              placeholder=""
            />
          </FloatLabel>
          <FloatLabel label="NRIC/FIN" className="w-[40%]" value={formData.fin}>
            <Input
              size="large"
              onChange={(e) => handleInputChange("fin", e.target.value)}
              value={formData.fin}
            />
          </FloatLabel>
          <FloatLabel label="Years PJ" className="w-[40%]" value={formData.ypj}>
            <Input
              size="large"
              type="number"
              onChange={(e) => handleInputChange("ypj", e.target.value)}
              value={formData.ypj}
            />
          </FloatLabel>
          <FloatLabel
            label="Years Exp"
            className="w-[40%]"
            value={formData.exp}
          >
            <Input
              size="large"
              type="number"
              onChange={(e) => handleInputChange("exp", e.target.value)}
              value={formData.exp}
            />
          </FloatLabel>
          <FloatLabel
            label="OCC Hist"
            className="w-[40%]"
            value={formData.hist}
          >
            <Input
              size="large"
              onChange={(e) => handleInputChange("hist", e.target.value)}
              value={formData.hist}
            />
          </FloatLabel>
          <FloatLabel label="Dept" className="w-[40%]" value={formData.dept}>
            <Select
              options={[
                { value: "FE", label: <span>FE</span> },
                { value: "BE", label: <span>BE</span> },
                { value: "Repair", label: <span>Repair</span> },
                { value: "Accessory", label: <span>Accessory</span> },
                { value: "Component", label: <span>Component</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("dept", selectedValue)
              }
              value={formData.dept}
            />
          </FloatLabel>
          <FloatLabel
            label="Company Address"
            className="w-[calc(80%_+_20px)]"
            value={formData.company_address}
          >
            <Select
              options={[
                { value: "C&P", label: "C&P" },
                { value: "SEO", label: "SEO" },
                { value: "CONCEPT", label: "CONCEPT" },
                { value: "CT", label: "CT" },
                { value: "FOOD", label: "FOOD" },
                { value: "CWT", label: "CWT" },
                { value: "AWOLF", label: "AWOLF" },
                { value: "PRAGAS", label: "PRAGAS" },
                { value: "PROS", label: "PROS" },
              ]}
              value={
                formData.company_address ? formData.company_address : undefined
              }
              onChange={(selectedOption) =>
                handleInputChange("company_address", selectedOption)
              }
              className="w-full"
            />
          </FloatLabel>
          <FloatLabel label="IHDinf" className="w-[40%]" value={formData.inf}>
            <Select
              options={[
                { value: "YES", label: <span>YES</span> },
                { value: "NO", label: <span>NO</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("inf", selectedValue)
              }
              value={formData.inf}
            />
          </FloatLabel>
          <FloatLabel label="IHDdiag" className="w-[40%]" value={formData.diag}>
            <Select
              options={[
                { value: "NIDE-NOTIFIED", label: <span>NIDE-NOTIFIED</span> },
                { value: "ENT", label: <span>ENT</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("diag", selectedValue)
              }
              value={formData.diag}
            />
          </FloatLabel>
          <FloatLabel
            label="Statutory"
            className="w-[40%]"
            value={formData.stat}
          >
            <Select
              options={[
                { value: "YES", label: <span>YES</span> },
                { value: "NO", label: <span>NO</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("stat", selectedValue)
              }
              value={formData.stat}
            />
          </FloatLabel>
          <FloatLabel
            label="Notify"
            className="w-[40%]"
            value={formData.notify}
          >
            <Select
              options={[
                { value: "YES", label: <span>YES</span> },
                { value: "NO", label: <span>NO</span> },
              ]}
              onChange={(selectedValue) =>
                handleInputChange("notify", selectedValue)
              }
              value={formData.notify}
            />
          </FloatLabel>
          <Radio.Group
            options={gender}
            optionType="button"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("sex", e.target.value)}
          />
          <br />
          <br />
          <Button
            style={{ backgroundColor: "#1677ff" }}
            size="large"
            type="primary"
            loading={loadings[0]}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <button
          onClick={() => props.setPopupState(null)}
          className="absolute top-[10px] right-[15px] text-white"
        >
          X
        </button>
      </div>
    </section>
  );
}
