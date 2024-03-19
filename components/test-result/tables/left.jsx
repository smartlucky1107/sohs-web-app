import React, { useState } from "react";
import { Table } from "antd";
import { x } from "joi";

const cells = [
  "air_l0_5",
  "air_l1",
  "air_l2",
  "air_l3",
  "air_l4",
  "air_l6",
  "air_l8",

  "bone_l0_5",
  "bone_l1",
  "bone_l2",
  "bone_l3",
  "bone_l4",
  "bone_l6",
  "bone_l8",
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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 0);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 5);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 10);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 15);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 20);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 25);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 30);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 35);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 40);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 45);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 50);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 55);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 60);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 65);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 70);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 75);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 80);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 85);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 90);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            formData.bone_l6 !== ""
              ? undefined
              : setCurrentIndex((prevIndex) =>
                  !label ? (prevIndex + 1) % cells.length : prevIndex
                );
            handleInputChange(label ? label : cells[currentIndex], 95);
            setGraphRefresh(label ? label : cells[currentIndex]);

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
            value={formData.air_l0_5}
            onClick={() => {
              setLabel("air_l0_5");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l0_5", "");
                setGraphRefresh("empty_air_l0_5");
              }
            }}
          />
          {formData.air_l0_5 === "" ? (
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
            value={formData.air_l1}
            onClick={() => {
              setLabel("air_l1");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l1", "");
                setGraphRefresh("empty_air_l1");
              }
            }}
          />

          {(formData.air_l0_5 !== "" && formData.air_l1 === "") ||
          label == "air_l1" ? (
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
            value={formData.air_l2}
            onClick={() => {
              setLabel("air_l2");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l2", "");
                setGraphRefresh("empty_air_l2");
              }
            }}
          />

          {(formData.air_l1 !== "" && formData.air_l2 === "") ||
          label == "air_l2" ? (
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
            value={formData.air_l3}
            onClick={() => {
              setLabel("air_l3");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l3", "");
                setGraphRefresh("empty_air_l3");
              }
            }}
          />

          {(formData.air_l2 !== "" && formData.air_l3 === "") ||
          label == "air_l3" ? (
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
            value={formData.air_l4}
            onClick={() => {
              setLabel("air_l4");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l4", "");
                setGraphRefresh("empty_air_l4");
              }
            }}
          />

          {(formData.air_l3 !== "" && formData.air_l4 === "") ||
          label == "air_l4" ? (
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
            value={formData.air_l6}
            onClick={() => {
              setLabel("air_l6");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l6", "");
                setGraphRefresh("empty_air_l6");
              }
            }}
          />

          {(formData.air_l4 !== "" && formData.air_l6 === "") ||
          label == "air_l6" ? (
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
            value={formData.air_l8}
            onClick={() => {
              setLabel("air_l8");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("air_l8", "");
                setGraphRefresh("empty_air_l8");
              }
            }}
          />

          {(formData.air_l6 !== "" && formData.air_l8 === "") ||
          label == "air_l8" ? (
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
            value={formData.bone_l0_5}
            onClick={() => {
              setLabel("bone_l0_5");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l0_5", "");
                setGraphRefresh("empty_bone_l0_5");
              }
            }}
          />

          {(formData.air_l8 !== "" && formData.bone_l0_5 === "") ||
          label == "bone_l0_5" ? (
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
            value={formData.bone_l1}
            onClick={() => {
              setLabel("bone_l1");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l1", "");
                setGraphRefresh("empty_bone_l1");
              }
            }}
          />

          {(formData.bone_l0_5 !== "" && formData.bone_l1 === "") ||
          label == "bone_l1" ? (
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
            value={formData.bone_l2}
            onClick={() => {
              setLabel("bone_l2");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l2", "");
                setGraphRefresh("empty_bone_l2");
              }
            }}
          />

          {(formData.bone_l1 !== "" && formData.bone_l2 === "") ||
          label == "bone_l2" ? (
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
            value={formData.bone_l3}
            onClick={() => {
              setLabel("bone_l3");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l3", "");
                setGraphRefresh("empty_bone_l3");
              }
            }}
          />

          {(formData.bone_l2 !== "" && formData.bone_l3 === "") ||
          label == "bone_l3" ? (
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
            value={formData.bone_l4}
            onClick={() => {
              setLabel("bone_l4");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l4", "");
                setGraphRefresh("empty_bone_l4");
              }
            }}
          />

          {(formData.bone_l3 !== "" && formData.bone_l4 === "") ||
          label == "bone_l4" ? (
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
            value={formData.bone_l6}
            onClick={() => {
              setLabel("bone_l6");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l6", "");
                setGraphRefresh("empty_bone_l6");
              }
            }}
          />

          {(formData.bone_l4 !== "" && formData.bone_l6 === "") ||
          label == "bone_l6" ? (
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
            value={formData.bone_l8}
            onClick={() => {
              setLabel("bone_l8");
            }}
            className="w-[71px] h-[52px] flex items-center justify-center text-center caret-transparent"
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                handleInputChange("bone_l8", "");
                setGraphRefresh("empty_bone_l8");
              }
            }}
          />

          {(formData.bone_l6 !== "" && formData.bone_l8 === "") ||
          label == "bone_l8" ? (
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
