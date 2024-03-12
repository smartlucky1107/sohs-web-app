import React, { useState } from "react";
import { Table } from "antd";
import { x } from "joi";

const cells = [
  "air_l0_25",
  "air_l0_5",
  "air_l1",
  "air_l2",
  "air_l3",
  "air_l4",
  "air_l6",
  "air_l8",
  "bone_l0_25",
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

const RightTable = ({ handleInputChange, formData }) => {
  const [label, setLabel] = useState("air_l0_25");
  const [numberTableDisplayed, setNumberTableDisplayed] = useState(false);

  const columns = [
    {
      title: "FREQ/KHz",
      dataIndex: "freq",
      key: "freq",
    },
    {
      title: "0.25",
      dataIndex: "0.25",
      key: "0.25",
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
      0.25: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l0_25");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l0_25}

          {formData.air_l0_25 === "" ? <span className="blink"></span> : ""}
        </button>
      ),
      0.5: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l0_5");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l0_5}

          {formData.air_l0_25 !== "" && formData.air_l0_5 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      one: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l1");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l1}

          {formData.air_l0_5 !== "" && formData.air_l1 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      two: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l2");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l2}

          {formData.air_l1 !== "" && formData.air_l2 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      three: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l3");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l3}

          {formData.air_l2 !== "" && formData.air_l3 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      four: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l4");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l4}

          {formData.air_l3 !== "" && formData.air_l4 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      six: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l6");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l6}

          {formData.air_l4 !== "" && formData.air_l6 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      eight: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("air_l8");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.air_l8}

          {formData.air_l6 !== "" && formData.air_l8 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
    },
    {
      freq: <span class="px-4">Rt BC/db</span>,
      0.25: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l0_25");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l0_25}

          {formData.air_l8 !== "" && formData.bone_l0_25 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      0.5: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l0_5");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l0_5}

          {formData.bone_l0_25 !== "" && formData.bone_l0_5 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      one: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l1");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l1}

          {formData.bone_l0_5 !== "" && formData.bone_l1 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      two: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l2");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l2}

          {formData.bone_l1 !== "" && formData.bone_l2 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      three: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l3");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l3}

          {formData.bone_l2 !== "" && formData.bone_l3 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      four: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l4");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l4}

          {formData.bone_l3 !== "" && formData.bone_l4 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      six: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l6");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l6}

          {formData.bone_l4 !== "" && formData.bone_l6 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
        </button>
      ),
      eight: (
        <button
          onClick={() => {
            setNumberTableDisplayed(true);
            setLabel("bone_l8");
          }}
          className="w-[55px] h-[52px] flex items-center justify-center"
        >
          {formData.bone_l8}

          {formData.bone_l6 !== "" && formData.bone_l8 === "" ? (
            <span className="blink"></span>
          ) : (
            ""
          )}
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
        className="[&_td]:!p-0"
      />

      {numberTableDisplayed && (
        <div className="mt-3">
          <p>Click the value you want to input</p>
          <NumberTable
            handleInputChange={handleInputChange}
            label={label}
            setLabel={setLabel}
            formData={formData}
          />
        </div>
      )}
    </>
  );
};
export default RightTable;
