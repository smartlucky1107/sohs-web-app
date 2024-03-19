import React, { useState } from "react";
import { Table } from "antd";
import { x } from "joi";

const cells = [
  "air_r0_5",
  "air_r1",
  "air_r2",
  "air_r3",
  "air_r4",
  "air_r6",
  "air_r8",

  "bone_r0_5",
  "bone_r1",
  "bone_r2",
  "bone_r3",
  "bone_r4",
  "bone_r6",
  "bone_r8",
];

export const NumberTable = ({
  handleInputChange,
  formData,
  label,
  setLabel,
  setGraphRefresh,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const columns = [
    {
      title: "1",
      dataIndex: "1",
      key: "1",
    },
    {
      title: "2",
      dataIndex: "2",
      key: "2",
    },
    {
      title: "3",
      dataIndex: "3",
      key: "3",
    },
    {
      title: "4",
      dataIndex: "4",
      key: "4",
    },
    {
      title: "5",
      dataIndex: "5",
      key: "5",
    },
  ];
  const data = [
    {
      1: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 0);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          0
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 5);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          5
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 10);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          10
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 15);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          15
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 20);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          20
        </button>
      ),
    },
    {
      1: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 25);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          25
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 30);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          30
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 35);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          35
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 40);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          40
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 45);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          45
        </button>
      ),
    },
    {
      1: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 50);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          50
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 55);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          55
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 60);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          60
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 65);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          65
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 70);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          70
        </button>
      ),
    },
    {
      1: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 75);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          75
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 80);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          80
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 85);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          85
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 90);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          90
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            formData.bone_r6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 95);
            setGraphRefresh(Math.random() * 1000);

            setLabel("");
          }}
        >
          95
        </button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        virtual={"scrollX"}
        scroll={x}
        className="[&_.ant-table-cell]:!p-0 [&_.ant-table-cell]:w-10 [&_.ant-table-cell]:h-10 [&_thead]:hidden"
      />
    </>
  );
};

const RightTable = ({ handleInputChange, formData, setGraphRefresh }) => {
  const [label, setLabel] = useState();

  const columns = [
    {
      title: "FREQ/KHz",
      dataIndex: "freq",
      key: "freq",
    },
    {
      title: "0.5",
      dataIndex: "0.5",
      key: "0.5",
    },
    {
      title: "1.0",
      dataIndex: "one",
      key: "1.0",
    },
    {
      title: "2.0",
      dataIndex: "two",
      key: "2.0",
    },
    {
      title: "3.0",
      dataIndex: "three",
      key: "3.0",
    },
    {
      title: "4.0",
      dataIndex: "four",
      key: "4.0",
    },
    {
      title: "6.0",
      dataIndex: "six",
      key: "6.0",
    },
    {
      title: "8.0",
      dataIndex: "eight",
      key: "8.0",
    },
  ];
  const data = [
    {
      freq: <span class="px-4">Rt AC/db</span>,
      0.5: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r0_5}
            onClick={() => {
              setLabel("air_r0_5");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r0_5", "");
                setGraphRefresh("empty_air_r0_5");
              }
            }}
          />
          {formData.air_r0_5 === "" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      one: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r1}
            onClick={() => {
              setLabel("air_r1");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r1", "");
                setGraphRefresh("empty_air_r1");
              }
            }}
          />

          {(formData.air_r0_5 !== "" && formData.air_r1 === "") ||
          label == "air_r1" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      two: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r2}
            onClick={() => {
              setLabel("air_r2");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r2", "");
                setGraphRefresh("empty_air_r2");
              }
            }}
          />

          {(formData.air_r1 !== "" && formData.air_r2 === "") ||
          label == "air_r2" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      three: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r3}
            onClick={() => {
              setLabel("air_r3");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r3", "");
                setGraphRefresh("empty_air_r3");
              }
            }}
          />

          {(formData.air_r2 !== "" && formData.air_r3 === "") ||
          label == "air_r3" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      four: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r4}
            onClick={() => {
              setLabel("air_r4");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r4", "");
                setGraphRefresh("empty_air_r4");
              }
            }}
          />

          {(formData.air_r3 !== "" && formData.air_r4 === "") ||
          label == "air_r4" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      six: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r6}
            onClick={() => {
              setLabel("air_r6");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r6", "");
                setGraphRefresh("empty_air_r6");
              }
            }}
          />

          {(formData.air_r4 !== "" && formData.air_r6 === "") ||
          label == "air_r6" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      eight: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.air_r8}
            onClick={() => {
              setLabel("air_r8");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_r8", "");
                setGraphRefresh("empty_air_r8");
              }
            }}
          />

          {(formData.air_r6 !== "" && formData.air_r8 === "") ||
          label == "air_r8" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
    },
    {
      freq: <span class="px-4">Rt BC/db</span>,
      0.5: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r0_5}
            onClick={() => {
              setLabel("bone_r0_5");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r0_5", "");
                setGraphRefresh("empty_bone_r0_5");
              }
            }}
          />

          {(formData.air_r8 !== "" && formData.bone_r0_5 === "") ||
          label == "bone_r0_5" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      one: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r1}
            onClick={() => {
              setLabel("bone_r1");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r1", "");
                setGraphRefresh("empty_bone_r1");
              }
            }}
          />

          {(formData.bone_r0_5 !== "" && formData.bone_r1 === "") ||
          label == "bone_r1" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      two: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r2}
            onClick={() => {
              setLabel("bone_r2");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r2", "");
                setGraphRefresh("empty_bone_r2");
              }
            }}
          />

          {(formData.bone_r1 !== "" && formData.bone_r2 === "") ||
          label == "bone_r2" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      three: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r3}
            onClick={() => {
              setLabel("bone_r3");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r3", "");
                setGraphRefresh("empty_bone_r3");
              }
            }}
          />

          {(formData.bone_r2 !== "" && formData.bone_r3 === "") ||
          label == "bone_r3" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      four: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r4}
            onClick={() => {
              setLabel("bone_r4");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r4", "");
                setGraphRefresh("empty_bone_r4");
              }
            }}
          />

          {(formData.bone_r3 !== "" && formData.bone_r4 === "") ||
          label == "bone_r4" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      six: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r6}
            onClick={() => {
              setLabel("bone_r6");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r6", "");
                setGraphRefresh("empty_bone_r6");
              }
            }}
          />

          {(formData.bone_r4 !== "" && formData.bone_r6 === "") ||
          label == "bone_r6" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
      eight: (
        <div className="w-[71px] h-[52px] flex items-center justify-center relative">
          <input
            type="text"
            value={formData.bone_r8}
            onClick={() => {
              setLabel("bone_r8");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_r8", "");
                setGraphRefresh("empty_bone_r8");
              }
            }}
          />

          {(formData.bone_r6 !== "" && formData.bone_r8 === "") ||
          label == "bone_r8" ? (
            <span className="blink absolute top-[50%] -translate-y-[50%]"></span>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        virtual={"scrollX"}
        scroll={x}
        className="[&_td]:!p-0"
      />

      <div className="mt-3">
        <p>Click the value you want to input</p>
        <NumberTable
          handleInputChange={handleInputChange}
          label={label}
          setLabel={setLabel}
          formData={formData}
          setGraphRefresh={setGraphRefresh}
        />
      </div>
    </>
  );
};
export default RightTable;
