import React, { useState, useEffect } from "react";
import { Space, Table, Tag, ConfigProvider } from "antd";
import { x } from "joi";
import { MdEditNote } from "react-icons/md";
import { fetchWorkers } from "@/services";

const TableMain = ({
  searchText,
  setEditPopupState,
  PopupState,
  EditPopupState,
}) => {
  const handleEdit = (record) => {
    // Display an alert with the value of the "name" key from the record
    setEditPopupState({ visible: true, id: record.fin });
  };


  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Dept",
      dataIndex: "dept",
      key: "dept",
    },
    {
      title: "NRIC/FIN",
      dataIndex: "fin",
      key: "fin",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      render: (dob) => {
        
        return (
          <span>{formatDate(dob)}</span>
        );
      },
    },
    {
      title: "Empno",
      dataIndex: "empno",
      key: "empno",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        
        return (
          <span>{formatDate(date)}</span>
        );
      },
    },
    {
      title: "Job Title",
      dataIndex: "jobt",
      key: "jobt",
    },
    {
      title: "Yrs_pj",
      dataIndex: "ypj",
      key: "ypj",
    },
    {
      title: "Yrs_exp",
      dataIndex: "exp",
      key: "exp",
    },
    {
      title: "Statutory",
      dataIndex: "stat",
      key: "stat",
      render: (stat) => {
        let color = "green";
        if (stat === "false") {
          color = "volcano";
        }
        if (stat === "true") {
          color = "green";
        }
        return (
          <Tag color={color} key={stat}>
            {stat.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Notify",
      dataIndex: "notify",
      key: "notify",
      render: (notify) => {
        let color = "green";
        if (notify === "yes") {
          color = "volcano";
        }
        if (notify === "no") {
          color = "green";
        }
        return (
          <Tag color={color} key={notify}>
            {notify.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "IHDinf",
      dataIndex: "inf",
      key: "inf",
      render: (inf) => {
        let color = "green";
        if (inf === "false") {
          color = "volcano";
        }
        if (inf === "true") {
          color = "green";
        }
        return (
          <Tag color={color} key={inf}>
            {inf.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "IHDiag",
      dataIndex: "diag",
      key: "diag",
      render: (diag) => {
        let color = "green";
        if (diag === "nide-notified") {
          color = "volcano";
        }
        if (diag === "ent") {
          color = "green";
        }
        return (
          <Tag color={color} key={diag}>
            {diag.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Occ_hist",
      dataIndex: "hist",
      key: "hist",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a
          className="bg-[#0094f1] text-white py-3 px-4"
          onClick={() => handleEdit(record)}
        >
          EDIT
        </a>
      ),
    },
  ];

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchWorkers();

      if (searchText) {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    }

    fetchData();
  }, [searchText, PopupState, EditPopupState]);

  return (
    <Table
      scroll={x}
      columns={columns}
      dataSource={filteredData.map((item, index) => ({ ...item, key: index }))}
      virtual={"scrollX"}
    />
  );
};

export default TableMain;
