import React, { useState, useEffect } from "react";
import { Space, Table, Tag, ConfigProvider } from "antd";
import { x } from "joi";
import { MdEditNote } from "react-icons/md";
import { fetchWorkers } from "@/services";
import { formatDate } from "@/utils/formatDate";
import axios from "axios";

const TableMain = ({
  searchText,
  setEditPopupState,
  PopupState,
  EditPopupState,
  setData,
}) => {
  const handleEdit = (record) => {
    // Display an alert with the value of the "name" key from the record
    setEditPopupState({ visible: true, id: record.fin });
  };

  const handleDelete = async (_id) => {
    try {
      await axios.post(`/api/workers/deleteworker`, { _id }); // Send POST request to API
      // Reset form data or handle success
      alert("Data deleted successfully");
      location.reload();
    } catch (error) {
      // Handle error
      console.error("Failed to submit data:", error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Company Address",
      dataIndex: "company_address",
      key: "company_address",
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
        return <span>{formatDate(dob)}</span>;
      },
    },
    {
      title: "Empno",
      dataIndex: "empno",
      key: "empno",
    },
    {
      title: "Date_j",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        return <span>{formatDate(date)}</span>;
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
        if (stat === "No" || stat === "false") {
          color = "volcano";
        }
        if (stat === "Yes" || stat === "true") {
          color = "green";
        }
        return (
          stat && (
            <Tag color={color} key={stat}>
              {stat.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Notify",
      dataIndex: "notify",
      key: "notify",
      render: (notify) => {
        let color = "green";
        if (notify === "Yes") {
          color = "volcano";
        }
        if (notify === "No") {
          color = "green";
        }
        return (
          notify && (
            <Tag color={color} key={notify}>
              {notify.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "IHDinf",
      dataIndex: "inf",
      key: "inf",
      render: (inf) => {
        let color = "green";
        if (inf === "No" || inf === "false") {
          color = "volcano";
        }
        if (inf === "Yes" || inf === "true") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
          )
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
          diag && (
            <Tag color={color} key={diag}>
              {diag.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Occ_hist",
      dataIndex: "hist",
      key: "hist",
    },
    {
      title: "Previous Result",
      dataIndex: "previous_result",
      key: "previous_result",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <a
            className="bg-[#0094f1] text-white py-3 px-4"
            onClick={() => handleEdit(record)}
          >
            EDIT
          </a>

          <a
            className="bg-red-500 text-white py-3 px-4"
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </a>
        </>
      ),
    },
  ];

  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let data;
      if (searchText !== "") {
        data = await fetchWorkers(null, { q: searchText });
      } else {
        data = await fetchWorkers();
      }

      setFilteredData(data);
      setData(data);

      setIsLoading(false);
    }

    fetchData();
  }, [searchText, PopupState, EditPopupState]);

  return (
    <Table
      scroll={x}
      columns={columns}
      dataSource={
        filteredData &&
        filteredData.map((item, index) => ({ ...item, key: index }))
      }
      virtual={"scrollX"}
      loading={isLoading}
      locale={filteredData == null && { emptyText: "Loading..." }} // Set custom loading text
    />
  );
};

export default TableMain;
