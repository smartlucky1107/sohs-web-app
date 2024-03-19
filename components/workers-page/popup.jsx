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
      if (
        props.handleInputChange &&
        (!formData.name || !formData.company_address || !formData.fin)
      ) {
        alert("Name, Company Address and Fin is required");
        return;
      }

      const isUnique = await isFinUnique(formData.fin);
      if (formData.fin !== "" && !isUnique) {
        // 'fin' value is not unique, handle the case by showing an error message
        alert("FIN already exists. Please enter a unique FIN.");
        return;
      }
      if (formData.fin !== "" && !validateNRICFormat(formData.fin)) {
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
            <Input
              size="large"
              type="text"
              onChange={(e) => handleInputChange("jobt", e.target.value)}
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
          <FloatLabel
            label="Previous Result"
            className="w-[40%]"
            value={formData.previous_result}
          >
            <Input
              size="large"
              type="text"
              onChange={(e) =>
                handleInputChange("previous_result", e.target.value)
              }
              value={formData.previous_result}
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
            <Input
              size="large"
              type="text"
              onChange={(e) => handleInputChange("dept", e.target.value)}
              value={formData.dept}
            />
          </FloatLabel>
          <FloatLabel
            label="Company Address"
            className="w-[calc(80%_+_20px)]"
            value={formData.company_address}
          >
            <Select
              value={
                formData.company_address ? formData.company_address : undefined
              }
              onChange={(selectedOption) =>
                handleInputChange("company_address", selectedOption)
              }
              optionFilterProp="children"
              className="w-full"
              dropdownRender={(menu) => (
                <div>
                  <div className="border-b border-dashed mb-2 pb-2">
                    <Input
                      className="w-full"
                      type="text"
                      onChange={(e) =>
                        handleInputChange("company_address", e.target.value)
                      }
                      value={formData.company_address}
                      placeholder="Enter custom address"
                    />
                  </div>
                  {menu}
                </div>
              )}
            >
              {companyAddressLists.map((item, key) => (
                <Select.Option key={key} value={item.value}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
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
