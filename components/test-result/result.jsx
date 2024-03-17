import { DatePicker, Input, Radio, Select } from "antd";
import AirConduction from "./charts/airconduction";
import BoneConduction from "./charts/boneconduction";
import RightTable from "./tables/right";
import LeftTable from "./tables/left";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { useRouter } from "next/router";
import { fetchWorkers } from "@/services";
import WorkersPopup from "../workers-page/popup";
import { validateNRICFormat } from "@/utils/validateNRICFormat";
import PrintTest from "../PrintTest";

const { Option } = Select;

const gender = [
  { label: "Male", value: "m" },
  { label: "Female", value: "f" },
];

export default function TestsResult({ session }) {
  const router = useRouter();
  const [airconddata, setAirconddata] = useState({
    labels: ["500Hz", "1kHz", "2kHz", "3kHz", "4kHz", "6kHz", "8kHz"],
    values: [59, 80, 81, 56, 55, 40, 68],
    values2: [65, 59, 80, 81, 56, 55, 40, 68],
  });

  const [boneconddata, setBoneconddata] = useState({
    labels: ["500Hz", "1kHz", "2kHz", "3kHz", "4kHz", "6kHz", "8kHz"],
    values: [59, 80, 81, 56, 55, 40],
    values2: [65, 59, 80, 81, 56, 55, 40],
  });

  const [PopupState, setPopupState] = useState(null);
  const [workerNames, setWorkerNames] = useState([]);
  const [filterWorkers, setFilterWorkers] = useState([]);
  const [formData, setFormData] = useState({
    company_address: "",
    name: "",
    fin: "",
    dob: "",
    sex: "",
    empno: "",
    date: "",
    jobt: "",
    yrs_exposure: "",
    dept: "",
    ihd: "",
    excessive_noise: "Yes",
    hearing_protectors: "Yes",

    air_l0_5: "",
    air_l1: "",
    air_l2: "",
    air_l3: "",
    air_l4: "",
    air_l6: "",
    air_l8: "",

    bone_l0_5: "",
    bone_l1: "",
    bone_l2: "",
    bone_l3: "",
    bone_l4: "",
    bone_l6: "",
    bone_l8: "",

    air_r0_5: "",
    air_r1: "",
    air_r2: "",
    air_r3: "",
    air_r4: "",
    air_r6: "",
    air_r8: "",

    bone_r0_5: "",
    bone_r1: "",
    bone_r2: "",
    bone_r3: "",
    bone_r4: "",
    bone_r6: "",
    bone_r8: "",
    name_and_signature: "",
    date_tested: dayjs(),

    // Optional fields
    dwd_right: "",
    dwd_left: "",
    diagnosis: "Normal",
    action_plans: "No Action",
    action_plans_text: "",
    certification: "Yes",
  });
  const [graphRefresh, setGraphRefresh] = useState(true);

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    if (key === "yrs_exposure") {
      setGraphRefresh("yes_refresh");
    }

    if (key === "diagnosis") {
      setFormData((prevData) => ({
        ...prevData,
        ["action_plans_text"]: "",
      }));

      if (value === "Normal") {
        setFormData((prevData) => ({
          ...prevData,
          ["action_plans"]: "No Action",
        }));
      } else if (value === "Slight hearing loss") {
        setFormData((prevData) => ({
          ...prevData,
          ["action_plans"]: "No Action",
        }));
      } else if (value === "Causes other than noise") {
        setFormData((prevData) => ({
          ...prevData,
          ["action_plans"]: "Review (Date)",
          ["action_plans_text"]: "6 months",
        }));
      } else if (value === "NID Suspect") {
        setFormData((prevData) => ({
          ...prevData,
          ["action_plans"]: "Review (Date)",
          ["action_plans_text"]: "6 months",
        }));
      } else if (value === "NID Early") {
        setFormData((prevData) => ({
          ...prevData,
          ["action_plans"]: "Notify OSHD/MOM",
        }));
      }
    }
  };

  useEffect(() => {
    handleInputChange("name_and_signature", session?.user?.name);
  }, [session]);

  useEffect(() => {
    const airValues = [
      formData.air_r0_5,
      formData.air_r1,
      formData.air_r2,
      formData.air_r3,
      formData.air_r4,
      formData.air_r6,
      formData.air_r8,
    ];
    const airValues2 = [
      formData.air_l0_5,
      formData.air_l1,
      formData.air_l2,
      formData.air_l3,
      formData.air_l4,
      formData.air_l6,
      formData.air_l8,
    ];

    setAirconddata((prevData) => ({
      ...prevData,
      values: airValues,
      values2: airValues2,
    }));

    const boneValues = [
      formData.bone_r0_5,
      formData.bone_r1,
      formData.bone_r2,
      formData.bone_r3,
      formData.bone_r4,
      formData.bone_r6,
      formData.bone_r8,
    ];
    const boneValues2 = [
      formData.bone_l0_5,
      formData.bone_l1,
      formData.bone_l2,
      formData.bone_l3,
      formData.bone_l4,
      formData.bone_l6,
      formData.bone_l8,
    ];

    setBoneconddata((prevData) => ({
      ...prevData,
      values: boneValues,
      values2: boneValues2,
    }));
  }, [graphRefresh]);

  useEffect(() => {
    if (
      (formData.air_r0_5 !== "" &&
        formData.air_r0_5 <= 30 &&
        formData.air_r1 !== "" &&
        formData.air_r1 <= 30 &&
        formData.air_r2 !== "" &&
        formData.air_r2 <= 30 &&
        formData.air_r3 !== "" &&
        formData.air_r3 <= 30 &&
        formData.air_r4 !== "" &&
        formData.air_r4 <= 30 &&
        formData.air_r6 !== "" &&
        formData.air_r6 <= 30 &&
        formData.air_r8 !== "" &&
        formData.air_r8 <= 30) ||
      (formData.air_l0_5 !== "" &&
        formData.air_l0_5 <= 30 &&
        formData.air_l1 !== "" &&
        formData.air_l1 <= 30 &&
        formData.air_l2 !== "" &&
        formData.air_l2 <= 30 &&
        formData.air_l3 !== "" &&
        formData.air_l3 <= 30 &&
        formData.air_l4 !== "" &&
        formData.air_l4 <= 30 &&
        formData.air_l6 !== "" &&
        formData.air_l6 <= 30 &&
        formData.air_l8 !== "" &&
        formData.air_l8 <= 30)
    ) {
      handleInputChange("diagnosis", "Normal");
      handleInputChange("action_plans", "No Action");
      handleInputChange("action_plans_text", "");
    } else if (
      formData.air_r4 > 30 &&
      formData.air_l4 > 30 &&
      formData.bone_r4 > 30 &&
      formData.bone_l4 > 30 &&
      formData.yrs_exposure > 5
    ) {
      handleInputChange("diagnosis", "NID Early");
      handleInputChange("action_plans", "Notify OSHD/MOM");
      handleInputChange("action_plans_text", "");
    } else if (
      formData.air_r4 > 30 &&
      formData.air_l4 > 30 &&
      formData.bone_r4 > 30 &&
      formData.bone_l4 > 30 &&
      formData.yrs_exposure < 5
    ) {
      handleInputChange("diagnosis", "NID Suspect");
      handleInputChange("action_plans", "Review (Date)");
      handleInputChange("action_plans_text", "6 months");
    } else if (
      (formData.air_r0_5 > 30 && formData.air_r0_5 < 45) &&
      (formData.air_r1 > 30 && formData.air_r1 < 45) &&
      (formData.air_r2 > 30 && formData.air_r2 < 45) &&
      (formData.air_r3 > 30 && formData.air_r3 < 45) &&
      (formData.air_r4 > 30 && formData.air_r4 < 45) &&
      (formData.air_r6 > 30 && formData.air_r6 < 45) &&
      (formData.air_r8 > 30 && formData.air_r8 < 45) &&
      (formData.air_l2 > 30 && formData.air_l2 < 45) &&
      (formData.air_l3 > 30 && formData.air_l3 < 45) &&
      (formData.air_l4 > 30 && formData.air_l4 < 45) &&
      (formData.air_l6 > 30 && formData.air_l6 < 45) &&
      (formData.air_l8 > 30 && formData.air_l8 < 45) &&
      (formData.air_l1 > 30 && formData.air_l1 < 45) &&
      (formData.air_l0_5 > 30 && formData.air_l0_5 < 45)
    ) {
      handleInputChange("diagnosis", "Slight hearing loss");
      handleInputChange("action_plans", "No Action");
      handleInputChange("action_plans_text", "");
    } else {
      if (formData.air_l0_5 !== "") {
        handleInputChange("diagnosis", "Causes other than noise");
        handleInputChange("action_plans", "Review (Date)");
        handleInputChange("action_plans_text", "6 months");
      }
    }
  }, [graphRefresh]);

  const isFinUnique = async (fin) => {
    try {
      const response = await axios.get(`/api/tests/checkFinUnique?fin=${fin}`); // Replace with your API endpoint to check 'fin' uniqueness
      return response.data.isUnique; // Assuming the response contains a boolean indicating uniqueness
    } catch (error) {
      console.error("Failed to check uniqueness of fin:", error);
      return false; // Assuming uniqueness check fails
    }
  };

  const handleSubmit = async () => {
    try {
      const isExists = await isFinUnique(formData.fin);
      if (isExists) {
        // 'fin' value is not unique, handle the case by showing an error message
        alert("FIN already exists. Please enter a unique FIN.");
        return;
      }
      if (!validateNRICFormat(formData.fin)) {
        alert("NRIC/FIN is not valid. Please enter a valid NRIC.");
        return;
      }
      await axios.post("/api/tests/add-test", formData); // Send POST request to API
      // Reset form data or handle success
      setFormData({});
      // alert("Data submitted successfully");
      router.push("/test");
    } catch (error) {
      // Handle error
      console.error("Failed to submit data:", error);
      alert("Please fill up the required fields");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchWorkers();
      setWorkerNames(data);
      setFilterWorkers(data.slice(0, 10));
    }

    fetchData();
  }, [PopupState]);

  const onNameSearch = (value) => {
    const filtered = workerNames.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered.length > 0) {
      const selectedObject = filtered[0];
      const index = workerNames.indexOf(selectedObject);

      if (index > -1) {
        workerNames.splice(index, 1); // Remove selected object from its current position
        workerNames.unshift(selectedObject); // Add selected object to the beginning of the array
      }
    }

    setFilterWorkers(workerNames.slice(0, 10));
  };

  const onFinSearch = (value) => {
    const filtered = workerNames.filter((item) =>
      item.fin.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered.length > 0) {
      const selectedObject = filtered[0];
      const index = workerNames.indexOf(selectedObject);

      if (index > -1) {
        workerNames.splice(index, 1); // Remove selected object from its current position
        workerNames.unshift(selectedObject); // Add selected object to the beginning of the array
      }
    }

    setFilterWorkers(workerNames.slice(0, 10));
  };

  const onNameSelect = (value) => {
    const worker = workerNames.find((worker) => worker.name === value);

    handleInputChange("fin", worker.fin);
    handleInputChange("dob", worker.dob);
    handleInputChange("sex", worker.sex.toLowerCase());
    handleInputChange("empno", worker.empno);
    handleInputChange("date", worker.date);
    handleInputChange("jobt", worker.jobt);
    handleInputChange("yrs_exposure", worker.exp);
    handleInputChange("dept", worker.dept);
    handleInputChange("company_address", worker.company_address);
  };

  const onFinSelect = (value) => {
    const worker = workerNames.find((worker) => worker.fin === value);

    handleInputChange("name", worker.name);
    handleInputChange("dob", worker.dob);
    handleInputChange("sex", worker.sex.toLowerCase());
    handleInputChange("empno", worker.empno);
    handleInputChange("date", worker.date);
    handleInputChange("jobt", worker.jobt);
    handleInputChange("yrs_exposure", worker.exp);
    handleInputChange("dept", worker.dept);
    handleInputChange("company_address", worker.company_address);
  };

  return (
    <>
      <section className="flex w-full flex-col justify-center items-center py-10 px-4">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-7 ">
          <div className="w-full flex gap-4 lg:flex-nowrap flex-wrap">
            <p className=" lg:text-nowrap">Company Address:</p>
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
              placeholder="Company Address"
              value={
                formData.company_address ? formData.company_address : undefined
              }
              onChange={(selectedOption) =>
                handleInputChange("company_address", selectedOption)
              }
              className="w-full"
            />
          </div>
          <div className="w-full flex justify-start flex-wrap gap-4">
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Name:</p>
              <div>
                {!PopupState ? (
                  <Select
                    className="w-[280px] print-w-130px"
                    showSearch
                    placeholder="Name"
                    optionFilterProp="children"
                    onChange={(selectedValue) =>
                      handleInputChange("name", selectedValue)
                    }
                    value={formData.name ? formData.name : undefined}
                    onSelect={onNameSelect}
                    onSearch={(value) => {
                      onNameSearch(value);
                    }}
                    dropdownRender={(menu) => (
                      <div>
                        {menu}
                        <button
                          type="button"
                          className="bg-[#0094f1] px-3 py-2 text-white text-xs w-full rounded mt-2"
                          onClick={() => {
                            setPopupState(true);
                          }}
                        >
                          Add Worker
                        </button>
                      </div>
                    )}
                  >
                    {filterWorkers.slice(0, 10).map((worker, index) => (
                      <Option value={worker.name} key={index}>
                        {worker.name}
                      </Option>
                    ))}
                  </Select>
                ) : (
                  ""
                )}

                {PopupState && (
                  <div className="[&_section]:!z-[99999999999999]">
                    <WorkersPopup
                      setPopupState={setPopupState}
                      PopupState={PopupState}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">NRIC/FIN:</p>
              {!PopupState && (
                <Select
                  className="w-[183px] print-w-130px"
                  showSearch
                  placeholder="NRIC/FIN"
                  optionFilterProp="children"
                  onChange={(selectedValue) =>
                    handleInputChange("fin", selectedValue)
                  }
                  onSelect={onFinSelect}
                  onSearch={(value) => {
                    onFinSearch(value);
                  }}
                  value={formData.fin ? formData.fin : undefined}
                  dropdownRender={(menu) => (
                    <div>
                      {menu}
                      <button
                        type="button"
                        className="bg-[#0094f1] px-3 py-2 text-white text-xs w-full rounded mt-2"
                        onClick={() => {
                          setPopupState(true);
                        }}
                      >
                        Add Worker
                      </button>
                    </div>
                  )}
                >
                  {filterWorkers.slice(0, 10).map((worker, index) => (
                    <Option value={worker.fin} key={index}>
                      {worker.fin}
                    </Option>
                  ))}
                </Select>
              )}
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">DOB:</p>
              <DatePicker
                format="DD/MM/YYYY"
                className="h-[32px]"
                placeholder="DOB"
                value={formData.dob && dayjs(formData.dob)}
                onChange={(selectedDate) =>
                  handleInputChange("dob", selectedDate)
                }
              />
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Sex:</p>
              <Radio.Group
                options={gender}
                optionType="button"
                onChange={(e) => handleInputChange("sex", e.target.value)}
                value={formData.sex}
              />
            </div>
          </div>
          <div className="w-full flex justify-start flex-wrap gap-4">
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Emp. No.:</p>
              <Input
                placeholder="Emp. No."
                value={formData.empno}
                className="print-w-130px"
                onChange={(e) => handleInputChange("empno", e.target.value)}
              />
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Date Joined:</p>
              <DatePicker
                format="DD/MM/YYYY"
                className="h-[32px]"
                placeholder="Date Joined"
                value={formData.date && dayjs(formData.date)}
                onChange={(selectedDate) =>
                  handleInputChange("date", selectedDate)
                }
              />
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Job Title:</p>
              <Select
                className="w-[122px]"
                options={[
                  { value: "Technician", label: <span>Technician</span> },
                  { value: "Senior Technician", label: <span>Senior</span> },
                  { value: "Component", label: <span>Component</span> },
                ]}
                onChange={(selectedValue) =>
                  handleInputChange("jobt", selectedValue)
                }
                defaultValue="Job Title"
                value={formData.jobt}
              />
            </div>
          </div>
          <div className="w-full flex justify-start flex-wrap gap-4">
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Years of Exposure:</p>
              <Input
                placeholder="Years of exposure"
                value={formData.yrs_exposure}
                onChange={(e) =>
                  handleInputChange("yrs_exposure", e.target.value)
                }
              />
              <p className=" lg:text-nowrap">(including previous jobs)</p>
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">Dept:</p>
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
                defaultValue="Dept"
                value={formData.dept}
                className="w-[183px]"
              />
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">IHD:</p>
              <Input
                placeholder="IHD"
                value={formData.ihd}
                onChange={(e) => handleInputChange("ihd", e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-start flex-wrap gap-4">
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">
                Does the employees wear hearing protector when exposed to
                excessive noise ?
              </p>
              <Radio.Group
                value={formData.excessive_noise}
                onChange={(e) =>
                  handleInputChange("excessive_noise", e.target.value)
                }
              >
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </div>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
              <p className=" lg:text-nowrap">
                Was the employee counselled on the usage of hearing protectors ?
              </p>
              <Radio.Group
                value={formData.hearing_protectors}
                onChange={(e) =>
                  handleInputChange("hearing_protectors", e.target.value)
                }
              >
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1  gap-4">
            <div>
              <p className=" lg:text-nowrap">Right</p>
              <RightTable
                handleInputChange={handleInputChange}
                formData={formData}
                setGraphRefresh={setGraphRefresh}
              />
            </div>
            <div>
              <p className=" lg:text-nowrap">Left</p>
              <LeftTable
                handleInputChange={handleInputChange}
                formData={formData}
                setGraphRefresh={setGraphRefresh}
              />
            </div>
          </div>
          <div className="w-full flex justify-start flex-col flex-wrap gap-4">
            <h3 className="font-bold">
              <span className="mr-6">AC: Air Conduction</span>
              <span className="mr-6">BC:Bone Conduction</span>
            </h3>
            <p>
              Under the above regulations BC should be done when AC is focused
              Abnormal
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-4 lg:flex-nowrap flex-wrap">
                <p className=" lg:text-nowrap">Name of Tester</p>
                <Input
                  placeholder="Name and signature"
                  value={formData.name_and_signature}
                  onChange={(e) =>
                    handleInputChange("name_and_signature", e.target.value)
                  }
                />
              </div>
              <div className="flex gap-4 lg:flex-nowrap flex-wrap max-w-[300px]">
                <p className=" lg:text-nowrap">Date Tested</p>
                <DatePicker
                  format="DD/MM/YYYY"
                  className="h-[32px]"
                  placeholder="Date Tested"
                  value={formData.date_tested && dayjs(formData.date_tested)}
                  onChange={(selectedDate) =>
                    handleInputChange("date_tested", selectedDate)
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-start  gap-4">
            <div>
              <p className=" lg:text-nowrap">Air Conduction Test</p>
              <AirConduction data={airconddata} />
            </div>
            <div>
              <p className=" lg:text-nowrap">Bone Conduction Test</p>
              <BoneConduction data={boneconddata} />
            </div>
          </div>

          <div className="w-full flex justify-start flex-col flex-wrap gap-4">
            <h3 className="font-bold">To be completed DWD:</h3>
            <div className="grid grid-cols-2 lg:w-1/2 gap-5">
              <p>Autoscopic Examination Finding</p>
              <div>
                <div className="flex gap-4 lg:flex-nowrap flex-wrap mb-4">
                  <p className=" lg:text-nowrap">Right</p>
                  <Select
                    options={[
                      { value: "Wax Present", label: <span>Wax Present</span> },
                      {
                        value: "TM Perforatio",
                        label: <span>TM Perforatio</span>,
                      },
                      { value: "Normal", label: <span>Normal</span> },
                      { value: "Scarred TM", label: <span>Scarred TM</span> },
                    ]}
                    onChange={(selectedValue) =>
                      handleInputChange("dwd_right", selectedValue)
                    }
                    placeholder="Right"
                    value={formData.dwd_right ? formData.dwd_right : undefined}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-4 lg:flex-nowrap flex-wrap">
                  <p className=" lg:text-nowrap">Left</p>
                  <Select
                    options={[
                      { value: "Wax Present", label: <span>Wax Present</span> },
                      {
                        value: "TM Perforatio",
                        label: <span>TM Perforatio</span>,
                      },
                      { value: "Normal", label: <span>Normal</span> },
                      { value: "Scarred TM", label: <span>Scarred TM</span> },
                    ]}
                    onChange={(selectedValue) =>
                      handleInputChange("dwd_left", selectedValue)
                    }
                    placeholder="Left"
                    value={formData.dwd_left ? formData.dwd_left : undefined}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-7 font-semibold">
            <div className="flex flex-wrap gap-12">
              <p>Diagnosis:</p>
              <Radio.Group
                className="flex-col flex"
                value={formData.diagnosis}
                onChange={(e) => handleInputChange("diagnosis", e.target.value)}
              >
                <Radio className="my-2" value="Normal">
                  1. Normal
                </Radio>
                <Radio className="my-2" value="Slight hearing loss">
                  2. Slight hearing loss
                </Radio>
                <Radio className="my-2" value="Causes other than noise">
                  3. Causes other than noise
                </Radio>
                <Radio className="my-2" value="NID Suspect">
                  4. NID Suspect
                </Radio>
                <Radio className="my-2" value="NID Early">
                  5. NID Early
                </Radio>
                <Radio className="my-2" value="NID Advance">
                  6. NID Advance
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex flex-wrap gap-12">
              <p>Action Plans:</p>
              <Radio.Group
                className="flex-col flex"
                value={formData.action_plans}
                onChange={(e) => {
                  handleInputChange("action_plans", e.target.value);
                  handleInputChange("action_plans_text", "");
                }}
              >
                <Radio className="my-2" value="Notify OSHD/MOM">
                  1. Notify OSHD/MOM
                </Radio>
                <Radio className="my-2" value="Review (Date)">
                  2.{" "}
                  <div className="inline-flex items-center">
                    Review{" "}
                    <Input
                      placeholder="Right"
                      className="mx-2"
                      value={
                        formData.action_plans == "Review (Date)"
                          ? formData.action_plans_text
                          : ""
                      }
                      onChange={(e) =>
                        handleInputChange("action_plans_text", e.target.value)
                      }
                    />{" "}
                    (Date)
                  </div>{" "}
                </Radio>
                <Radio className="my-2" value="Refer ENT Specialist">
                  3. Refer ENT Specialist
                </Radio>
                <Radio className="my-2" value="No Action">
                  4. No Action
                </Radio>
                <Radio className="my-2" value="Other">
                  5.{" "}
                  <div className="inline-flex items-center">
                    Other{" "}
                    <Input
                      placeholder="Right"
                      value={
                        formData.action_plans == "Other"
                          ? formData.action_plans_text
                          : ""
                      }
                      onChange={(e) =>
                        handleInputChange("action_plans_text", e.target.value)
                      }
                    />
                  </div>
                </Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="w-full flex justify-start flex-wrap gap-4 font-semibold">
            <p className=" lg:text-nowrap">
              Certification of fitness to work in noisy environment
            </p>
            <Radio.Group
              value={formData.certification}
              onChange={(e) =>
                handleInputChange("certification", e.target.value)
              }
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </Radio.Group>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#0094f1] py-3 px-5 uppercase text-white"
          >
            Submit
          </button>
        </div>
      </section>

      <div id="section-to-print">
        <PrintTest
          airconddata={airconddata}
          boneconddata={boneconddata}
          formData={formData}
        />
      </div>
    </>
  );
}
