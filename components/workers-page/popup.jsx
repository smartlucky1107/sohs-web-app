import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { DatePicker, Input, Radio, Select, Button } from "antd";
import axios from "axios";
import { useRouter } from "next/router";

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
      if (
        formData.name === "" ||
        !formData.name ||
        formData.jobt === "" ||
        !formData.jobt ||
        formData.empno === "" ||
        !formData.empno ||
        formData.dob === "" ||
        !formData.dob ||
        formData.date === "" ||
        !formData.date ||
        formData.fin === "" ||
        !formData.fin ||
        formData.ypj === "" ||
        !formData.ypj ||
        formData.exp === "" ||
        !formData.exp ||
        formData.hist === "" ||
        !formData.hist ||
        formData.dept === "" ||
        !formData.dept ||
        formData.inf === "" ||
        !formData.inf ||
        formData.notify === "" ||
        !formData.notify ||
        formData.diag === "" ||
        !formData.diag ||
        formData.stat === "" ||
        !formData.stat ||
        formData.sex === "" ||
        !formData.sex
      ) {
        return alert("All fields are required.");
      }

      const isUnique = await isFinUnique(formData.fin);
      if (!isUnique) {
        // 'fin' value is not unique, handle the case by showing an error message
        alert("FIN already exists. Please enter a unique FIN.");
        return;
      }
      await axios.post("/api/workers/addworker", formData); // Send POST request to API
      // Reset form data or handle success
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
          <Input
            size="large"
            placeholder="Name"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Select
            defaultValue="Job title"
            style={{
              width: "40%",
            }}
            options={[
              { value: "Technician", label: <span>Technician</span> },
              { value: "Senior Technician", label: <span>Senior</span> },
              { value: "Component", label: <span>Component</span> },
            ]}
            onChange={(selectedValue) =>
              handleInputChange("jobt", selectedValue)
            }
          />
          <Input
            size="large"
            type="number"
            placeholder="EMPO"
            onChange={(e) => handleInputChange("empno", e.target.value)}
            style={{
              width: "40%",
            }}
          />
          <DatePicker
            placeholder={"DOB"}
            size={"large"}
            style={{
              width: "40%",
            }}
            onChange={(selectedDate) => handleInputChange("dob", selectedDate)}
          />
          <DatePicker
            placeholder={"Date_Joined"}
            size={"large"}
            style={{
              width: "40%",
            }}
            onChange={(selectedDate) => handleInputChange("date", selectedDate)}
          />
          <Input
            size="large"
            placeholder="NRIC/FIN"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("fin", e.target.value)}
          />
          <Input
            size="large"
            type="number"
            placeholder="Years PJ"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("ypj", e.target.value)}
          />
          <Input
            size="large"
            type="number"
            placeholder="Years Exp"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("exp", e.target.value)}
          />
          <Input
            size="large"
            placeholder="OCC Hist"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("hist", e.target.value)}
          />
          <Select
            defaultValue="Dept"
            style={{
              width: "40%",
            }}
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
          />
          <Select
            defaultValue="IHDinf"
            style={{
              width: "40%",
            }}
            options={[
              { value: "TRUE", label: <span>TRUE</span> },
              { value: "FALSE", label: <span>FALSE</span> },
            ]}
            onChange={(selectedValue) =>
              handleInputChange("inf", selectedValue)
            }
          />
          <Select
            defaultValue="IHDdiag"
            style={{
              width: "40%",
            }}
            options={[
              { value: "NIDE-NOTIFIED", label: <span>NIDE-NOTIFIED</span> },
              { value: "ENT", label: <span>ENT</span> },
            ]}
            onChange={(selectedValue) =>
              handleInputChange("diag", selectedValue)
            }
          />
          <Select
            defaultValue="Statutory"
            style={{
              width: "40%",
            }}
            options={[
              { value: "TRUE", label: <span>TRUE</span> },
              { value: "FALSE", label: <span>FALSE</span> },
            ]}
            onChange={(selectedValue) =>
              handleInputChange("stat", selectedValue)
            }
          />
          <Select
            defaultValue="Notify"
            style={{
              width: "40%",
            }}
            options={[
              { value: "TRUE", label: <span>TRUE</span> },
              { value: "FALSE", label: <span>FALSE</span> },
            ]}
            onChange={(selectedValue) =>
              handleInputChange("notify", selectedValue)
            }
          />
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
