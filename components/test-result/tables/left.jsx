import React, { useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { x } from "joi";

const NumberTable = ({ handleInputChange, label, setIsModalOpen }) => {
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
            handleInputChange(label, 0);
            setIsModalOpen(false);
          }}
        >
          0
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 5);
            setIsModalOpen(false);
          }}
        >
          5
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 10);
            setIsModalOpen(false);
          }}
        >
          10
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 15);
            setIsModalOpen(false);
          }}
        >
          15
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 20);
            setIsModalOpen(false);
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
            handleInputChange(label, 25);
            setIsModalOpen(false);
          }}
        >
          25
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 30);
            setIsModalOpen(false);
          }}
        >
          30
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 35);
            setIsModalOpen(false);
          }}
        >
          35
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 40);
            setIsModalOpen(false);
          }}
        >
          40
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 45);
            setIsModalOpen(false);
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
            handleInputChange(label, 50);
            setIsModalOpen(false);
          }}
        >
          50
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 55);
            setIsModalOpen(false);
          }}
        >
          55
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 60);
            setIsModalOpen(false);
          }}
        >
          60
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 65);
            setIsModalOpen(false);
          }}
        >
          65
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 70);
            setIsModalOpen(false);
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
            handleInputChange(label, 75);
            setIsModalOpen(false);
          }}
        >
          75
        </button>
      ),
      2: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 80);
            setIsModalOpen(false);
          }}
        >
          80
        </button>
      ),
      3: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 85);
            setIsModalOpen(false);
          }}
        >
          85
        </button>
      ),
      4: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 90);
            setIsModalOpen(false);
          }}
        >
          90
        </button>
      ),
      5: (
        <button
          className="w-full h-full"
          onClick={(e) => {
            handleInputChange(label, 95);
            setIsModalOpen(false);
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

const ActionsButton = ({ handleInputChange, label, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal} className="w-[55px] h-[52px]">
        {data}
      </button>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onCancel={handleCancel}
        className="[&_.ant-btn-primary]:!hidden"
      >
        <NumberTable
          handleInputChange={handleInputChange}
          label={label}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

const LeftTable = ({ handleInputChange, formData }) => {
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
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l0_25"
          data={formData.air_l0_25}
        />
      ),
      0.5: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l0_5"
          data={formData.air_l0_5}
        />
      ),
      one: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l1"
          data={formData.air_l1}
        />
      ),
      two: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l2"
          data={formData.air_l2}
        />
      ),
      three: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l3"
          data={formData.air_l3}
        />
      ),
      four: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l4"
          data={formData.air_l4}
        />
      ),
      six: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l6"
          data={formData.air_l6}
        />
      ),
      eight: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="air_l8"
          data={formData.air_l8}
        />
      ),
    },
    {
      freq: <span class="px-4">Rt BC/db</span>,
      0.25: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l0_25"
          data={formData.bone_l0_25}
        />
      ),
      0.5: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l0_5"
          data={formData.bone_l0_5}
        />
      ),
      one: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l1"
          data={formData.bone_l1}
        />
      ),
      two: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l2"
          data={formData.bone_l2}
        />
      ),
      three: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l3"
          data={formData.bone_l3}
        />
      ),
      four: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l4"
          data={formData.bone_l4}
        />
      ),
      six: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l6"
          data={formData.bone_l6}
        />
      ),
      eight: (
        <ActionsButton
          handleInputChange={handleInputChange}
          label="bone_l8"
          data={formData.bone_l8}
        />
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
    </>
  );
};
export default LeftTable;
