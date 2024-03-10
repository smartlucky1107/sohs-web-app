import React, { useState, useEffect } from "react";
import { DatePicker, Input, Radio, Select, Button } from "antd";
import moment from "moment";
import axios from "axios";
import { fetchWorkers } from "@/services";

const gender = [
  { label: "Male", value: "m" },
  { label: "Female", value: "f" },
];

export default function WorkersEditPopup(props) {
  const { id } = props.EditPopupState;
  const [loadings, setLoadings] = useState([]);
  const [formData, setFormData] = useState({}); // State to hold form data
  const [workerData, setWorkerData] = useState({});

  useEffect(() => {
    // Fetch data from the JSON file based on the ID received from props
    const fetchData = async () => {
      try {
        const data = await fetchWorkers();
        // Assuming your data is an array of objects with an 'id' property
        const worker = data.find((worker) => worker.fin === id);
        setWorkerData(worker);
        setFormData(worker);
      } catch (error) {
        console.error("Error fetching worker data:", error);
      }
    };

    fetchData();
  }, [id]); // Run the effect whenever the ID changes

  const handleSubmit = async () => {
    try {
      // 'fin' value is not unique, handle the case by showing an error message
      const postData = { ...formData, id };
      await axios.post("/api/workers/editworker", postData); // Send POST request to API
      // Reset form data or handle success
      props.setEditPopupState({
        visible: false,
        id: null,
      });
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
            Edit Personal Info
          </h1>
        </div>
        <div
          className={
            "w-full p-6 flex flex-wrap gap-5 justify-center items-center"
          }
        >
          <Input
            size="large"
            placeholder="Name"
            style={{
              width: "40%",
            }}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Input
            size="large"
            placeholder="fin"
            style={{
              width: "40%",
            }}
            disabled
            value={formData.fin}
            onChange={(e) => handleInputChange("fin", e.target.value)}
            defaultValue={id}
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
            value={formData.jobt}
          />
          <Input
            size="large"
            type="number"
            placeholder="EMPO"
            onChange={(e) => handleInputChange("empno", e.target.value)}
            style={{
              width: "40%",
            }}
            value={formData.empno}
          />
          <DatePicker
            placeholder={"DOB"}
            size={"large"}
            style={{
              width: "40%",
            }}
            onChange={(selectedDate) => handleInputChange("dob", selectedDate)}
            value={moment(formData.dob)}
          />
          <DatePicker
            placeholder={"Date_Joined"}
            size={"large"}
            style={{
              width: "40%",
            }}
            onChange={(selectedDate) => handleInputChange("date", selectedDate)}
            value={moment(formData.date)}
          />
          <Input
            size="large"
            type="number"
            placeholder="Years PJ"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("ypj", e.target.value)}
            value={formData.ypj}
          />
          <Input
            size="large"
            type="number"
            placeholder="Years Exp"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("exp", e.target.value)}
            value={formData.exp}
          />
          <Input
            size="large"
            placeholder="OCC Hist"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("hist", e.target.value)}
            value={formData.hist}
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
            value={formData.dept}
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
            value={formData.inf}
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
            value={formData.diag}
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
            value={formData.stat}
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
            value={formData.notify}
          />
          <Radio.Group
            options={gender}
            optionType="button"
            style={{
              width: "40%",
            }}
            onChange={(e) => handleInputChange("sex", e.target.value)}
            value={formData.sex}
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
          onClick={() => props.setEditPopupState({ visible: false })}
          className="absolute top-[10px] right-[15px] text-white"
        >
          X
        </button>
      </div>
    </section>
  );
}
