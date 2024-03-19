import React, { useState, useEffect } from "react";
import { Space, Table, Tag, ConfigProvider } from "antd";
import { x } from "joi";
import { MdEditNote } from "react-icons/md";
import { fetchTests } from "@/services";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const TableMain = ({ searchData, dateRange, setData }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      render: (text) => <span>{formatDate(text)}</span>,
    },
    {
      title: "Empno",
      dataIndex: "empno",
      key: "empno",
    },
    {
      title: "Date Joined",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{formatDate(text)}</span>,
    },
    {
      title: "Job Title",
      dataIndex: "jobt",
      key: "jobt",
    },
    {
      title: "Yrs Exp",
      dataIndex: "yrs_exposure",
      key: "yrs_exposure",
    },
    {
      title: "Statutory",
      dataIndex: "statutory",
      key: "statutory",
      render: (statutory) => {
        let color = "green";
        if (statutory === "FALSE") {
          color = "volcano";
        }
        if (statutory === "TRUE") {
          color = "green";
        }
        return (
          statutory && (
            <Tag color={color} key={statutory}>
              {statutory?.toUpperCase()}
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
        if (notify === "yes") {
          color = "volcano";
        }
        if (notify === "no") {
          color = "green";
        }
        return (
          notify && (
            <Tag color={color} key={notify}>
              {notify?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "IHDinf",
      dataIndex: "IHDinf",
      key: "IHDinf",
      render: (IHDinf) => {
        let color = "green";
        if (IHDinf === "FALSE") {
          color = "volcano";
        }
        if (IHDinf === "TRUE") {
          color = "green";
        }
        return (
          IHDinf && (
            <Tag color={color} key={IHDinf}>
              {IHDinf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "IHDiag",
      dataIndex: "IHDiag",
      key: "IHDiag",
      render: (IHDiag) => {
        let color = "green";
        if (IHDiag === "nide-notified") {
          color = "volcano";
        }
        if (IHDiag === "ent") {
          color = "green";
        }
        return (
          IHDiag && (
            <Tag color={color} key={IHDiag}>
              {IHDiag?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Occ_hist",
      dataIndex: "occ_hist",
      key: "occ_hist",
    },
    {
      title: "Ear Discharge",
      dataIndex: "ear_discharge",
      key: "ear_discharge",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Ear Operation",
      dataIndex: "ear_operation",
      key: "ear_operation",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Ringing Ears",
      dataIndex: "ringing_ears",
      key: "ringing_ears",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Head or Ear",
      dataIndex: "head_or_ear",
      key: "head_or_ear",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Ear Problem",
      dataIndex: "ear_problem",
      key: "ear_problem",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Loud Noise Exposure",
      dataIndex: "loud_noise_exposure",
      key: "loud_noise_exposure",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Medication",
      dataIndex: "medication",
      key: "medication",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Military Service",
      dataIndex: "military_service",
      key: "military_service",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Medical Problem",
      dataIndex: "medical_problem",
      key: "medical_problem",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Med_hist",
      dataIndex: "med_hist",
      key: "med_hist",
    },
    {
      title: "Other Info",
      dataIndex: "other_info",
      key: "other_info",
    },
    {
      title: "Counsel",
      dataIndex: "counsel",
      key: "counsel",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Protect",
      dataIndex: "protect",
      key: "protect",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Prototype",
      dataIndex: "proto",
      key: "proto",
    },
    {
      title: "Profreq",
      dataIndex: "profeq",
      key: "profeq",
    },
    {
      title: "Demo",
      dataIndex: "demo",
      key: "demo",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Cleanfreq",
      dataIndex: "cleanfreq",
      key: "cleanfreq",
    },
    {
      title: "rearex",
      dataIndex: "rearex",
      key: "rearex",
    },
    {
      title: "learex",
      dataIndex: "learex",
      key: "learex",
    },
    {
      title: "air_r2",
      dataIndex: "air_r0_5",
      key: "air_r2",
    },
    {
      title: "air_r3",
      dataIndex: "air_r1",
      key: "air_r3",
    },
    {
      title: "air_r4",
      dataIndex: "air_r2",
      key: "air_r4",
    },
    {
      title: "air_r5",
      dataIndex: "air_r3",
      key: "air_r5",
    },
    {
      title: "air_r6",
      dataIndex: "air_r4",
      key: "air_r6",
    },
    {
      title: "air_r7",
      dataIndex: "air_r6",
      key: "air_r7",
    },
    {
      title: "air_r8",
      dataIndex: "air_r8",
      key: "air_r8",
    },
    {
      title: "air_l2",
      dataIndex: "air_l0_5",
      key: "air_l2",
    },
    {
      title: "air_l3",
      dataIndex: "air_l1",
      key: "air_l3",
    },
    {
      title: "air_l4",
      dataIndex: "air_l2",
      key: "air_l4",
    },
    {
      title: "air_l5",
      dataIndex: "air_l3",
      key: "air_l5",
    },
    {
      title: "air_l6",
      dataIndex: "air_l4",
      key: "air_l6",
    },
    {
      title: "air_l7",
      dataIndex: "air_l6",
      key: "air_l7",
    },
    {
      title: "air_l8",
      dataIndex: "air_l8",
      key: "air_l8",
    },
    {
      title: "bone_r2",
      dataIndex: "bone_r0_5",
      key: "bone_r2",
    },
    {
      title: "bone_r3",
      dataIndex: "bone_r1",
      key: "bone_r4",
    },
    {
      title: "bone_r4",
      dataIndex: "bone_r2",
      key: "bone_r4",
    },
    {
      title: "bone_r5",
      dataIndex: "bone_r3",
      key: "bone_r5",
    },
    {
      title: "bone_r6",
      dataIndex: "bone_r4",
      key: "bone_r6",
    },
    {
      title: "bone_r7",
      dataIndex: "bone_r6",
      key: "bone_r7",
    },
    {
      title: "bone_r8",
      dataIndex: "bone_r8",
      key: "bone_r8",
    },
    {
      title: "bone_l2",
      dataIndex: "bone_l0_5",
      key: "bone_l2",
    },
    {
      title: "bone_l3",
      dataIndex: "bone_l1",
      key: "bone_l3",
    },
    {
      title: "bone_l4",
      dataIndex: "bone_l2",
      key: "bone_l4",
    },
    {
      title: "bone_l5",
      dataIndex: "bone_l3",
      key: "bone_l5",
    },
    {
      title: "bone_l6",
      dataIndex: "bone_l4",
      key: "bone_l6",
    },
    {
      title: "bone_l7",
      dataIndex: "bone_l6",
      key: "bone_l7",
    },
    {
      title: "bone_l8",
      dataIndex: "bone_l8",
      key: "bone_l8",
    },
    {
      title: "Tester",
      dataIndex: "name_and_signature",
      key: "name_and_signature",
    },
    {
      title: "Report",
      dataIndex: "report",
      key: "report",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Certify",
      dataIndex: "certification",
      key: "certification",
    },
    {
      title: "Action",
      dataIndex: "action_plans",
      key: "action",
      render: (inf, record) => {
        return (
          <span>
            {inf.replace(" (Date)", "") +
              " (" +
              record.action_plans_text +
              ") "}
          </span>
        );
      },
    },
    {
      title: "Diagnosis",
      dataIndex: "diagnosis",
      key: "diagnosis",
    },
    {
      title: "Date_Tested",
      dataIndex: "date_tested",
      key: "date_tested",
      render: (text) => <span>{formatDate(text)}</span>,
    },
    {
      title: "review1yr",
      dataIndex: "review1yr",
      key: "review1yr",
      render: (inf, record) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }

        if (
          (!inf &&
            (record.action_plans_text === "1 year" ||
              record.action_plans_text === "1 years" ||
              record.action_plans_text === "1 yrs")) ||
          record.action_plans_text.includes("1 y")
        ) {
          color = "green";
          inf = "TRUE";
        } else {
          color = "volcano";
          inf = "FALSE";
        }

        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "review6mo",
      dataIndex: "review6mo",
      key: "review6mo",
      render: (inf, record) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }

        if (
          (!inf &&
            (record.action_plans_text === "6 months" ||
              record.action_plans_text === "6 month" ||
              record.action_plans_text === "6 mo")) ||
          record.action_plans_text.includes("6 mo")
        ) {
          color = "green";
          inf = "TRUE";
        } else {
          color = "volcano";
          inf = "FALSE";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "tonotify",
      dataIndex: "tonotify",
      key: "tonotify",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Notified",
      dataIndex: "notified",
      key: "notified",
      render: (inf) => {
        let color = "green";
        if (inf === "FALSE") {
          color = "volcano";
        }
        if (inf === "TRUE") {
          color = "green";
        }
        return (
          inf && (
            <Tag color={color} key={inf}>
              {inf?.toUpperCase()}
            </Tag>
          )
        );
      },
    },
    {
      title: "Edit Action",
      key: "edit_action",
      render: (_, record) => (
        <Link
          className="bg-[#0094f1] text-white py-3 px-4"
          href={"/tests/" + record.fin}
        >
          EDIT
        </Link>
      ),
    },
  ];

  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchTests({
        name: searchData?.name,
        fin: searchData?.fin,
        company_address: searchData?.company_address,
      });

      let filtered = data;

      if (dateRange?.length === 2) {
        filtered = filtered.filter((item) => {
          const itemDate = new Date(item.date_tested);
          return itemDate >= dateRange[0] && itemDate <= dateRange[1];
        });
      }

      setFilteredData(filtered);
      setData(filtered);

      setIsLoading(false);
    }

    fetchData();
  }, [searchData, dateRange]);

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
