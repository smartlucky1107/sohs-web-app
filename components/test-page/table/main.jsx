import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, ConfigProvider } from 'antd';
import { x } from 'joi';
import { MdEditNote } from "react-icons/md";
import data from '@/pages/data/tests/data'


const TableMain = ({ searchText, setEditPopupState }) => {
  
const handleEdit = (record) => {
  // Display an alert with the value of the "name" key from the record
  setEditPopupState({visible: true, id: record.fin});
};


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Dep',
    dataIndex: 'dep',
    key: 'dep',
  },
  {
    title: 'NRIC/FIN',
    dataIndex: 'fin',
    key: 'fin',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Empno',
    dataIndex: 'empno',
    key: 'empno',
  },
  {
    title: 'Date Joined',
    dataIndex: 'date_joined',
    key: 'date_joined',
  },
  {
    title: 'Job Title',
    dataIndex: 'job_title',
    key: 'job_title',
  },
  {
    title: 'Yrs Exp',
    dataIndex: 'yrs_exp',
    key: 'yrs_exp',
  },
  {
    title: 'Statutory',
    dataIndex: 'stat',
    key: 'stat',
    render: (stat) => {
        let color = 'green'
          if (stat === 'FALSE') {
            color = 'volcano';
          }
          if (stat === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={stat}>
              {stat.toUpperCase()}
            </Tag>
        );
    },
  },
  {
    title: 'Notify',
    dataIndex: 'notify',
    key: 'notify',
    render: (notify) => {
        let color = 'green'
          if (notify === 'yes') {
            color = 'volcano';
          }
          if (notify === 'no') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={notify}>
              {notify.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'IHDinf',
    dataIndex: 'inf',
    key: 'inf',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'IHDiag',
    dataIndex: 'diag',
    key: 'diag',
    render: (diag) => {
        let color = 'green'
          if (diag === 'nide-notified') {
            color = 'volcano';
          }
          if (diag === 'ent') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={diag}>
              {diag.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Occ_hist',
    dataIndex: 'hist',
    key: 'hist',
  },
  {
    title: 'Ear Discharge',
    dataIndex: 'edisc',
    key: 'edisc',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Ear Operation',
    dataIndex: 'erop',
    key: 'erop',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Ringing Ears',
    dataIndex: 'rine',
    key: 'rine',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Head or Ear',
    dataIndex: 'hear',
    key: 'hear',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Ear Problem',
    dataIndex: 'earp',
    key: 'earp',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Loud Noise Exposure',
    dataIndex: 'lnexp',
    key: 'lnexp',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Medication',
    dataIndex: 'medic',
    key: 'medic',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Military Service',
    dataIndex: 'milser',
    key: 'milser',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Medical Problem',
    dataIndex: 'medicp',
    key: 'medicp',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Med_hist',
    dataIndex: 'medhist',
    key: 'medhist',
  },
  {
    title: 'Other Info',
    dataIndex: 'othin',
    key: 'othin',
  },
  {
    title: 'Counsel',
    dataIndex: 'counsel',
    key: 'counsel',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Protect',
    dataIndex: 'protect',
    key: 'protect',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Prototype',
    dataIndex: 'proto',
    key: 'proto',
  },
  {
    title: 'Profreq',
    dataIndex: 'profeq',
    key: 'profeq',
  },
  {
    title: 'Demo',
    dataIndex: 'demo',
    key: 'demo',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Cleanfreq',
    dataIndex: 'cleanfreq',
    key: 'cleanfreq',
  },
  {
    title: 'rearex',
    dataIndex: 'rearex',
    key: 'rearex',
  },
  {
    title: 'learex',
    dataIndex: 'learex',
    key: 'learex',
  },
  {
    title: 'air_r1',
    dataIndex: 'air_r1',
    key: 'air_r1',
  },
  {
    title: 'air_r2',
    dataIndex: 'air_r2',
    key: 'air_r2',
  },
  {
    title: 'air_r3',
    dataIndex: 'air_r3',
    key: 'air_r3',
  },
  {
    title: 'air_r4',
    dataIndex: 'air_r4',
    key: 'air_r4',
  },
  {
    title: 'air_r5',
    dataIndex: 'air_r5',
    key: 'air_r5',
  },
  {
    title: 'air_r6',
    dataIndex: 'air_r6',
    key: 'air_r6',
  },
  {
    title: 'air_r7',
    dataIndex: 'air_r7',
    key: 'air_r7',
  },
  {
    title: 'air_r8',
    dataIndex: 'air_r8',
    key: 'air_r8',
  },
  {
    title: 'air_l1',
    dataIndex: 'air_l1',
    key: 'air_l1',
  },
  {
    title: 'air_l2',
    dataIndex: 'air_l2',
    key: 'air_l2',
  },
  {
    title: 'air_l3',
    dataIndex: 'air_l3',
    key: 'air_l3',
  },
  {
    title: 'air_l4',
    dataIndex: 'air_l4',
    key: 'air_l4',
  },
  {
    title: 'air_l5',
    dataIndex: 'air_l5',
    key: 'air_l5',
  },
  {
    title: 'air_l6',
    dataIndex: 'air_l6',
    key: 'air_l6',
  },
  {
    title: 'air_l7',
    dataIndex: 'air_l7',
    key: 'air_l7',
  },
  {
    title: 'air_l8',
    dataIndex: 'air_l8',
    key: 'air_l8',
  },
  {
    title: 'bone_r1',
    dataIndex: 'bone_r1',
    key: 'bone_r1',
  },
  {
    title: 'bone_r2',
    dataIndex: 'bone_r2',
    key: 'bone_r2',
  },
  {
    title: 'bone_r3',
    dataIndex: 'bone_r3',
    key: 'bone_r4',
  },
  {
    title: 'bone_r4',
    dataIndex: 'bone_r4',
    key: 'bone_r4',
  },
  {
    title: 'bone_r5',
    dataIndex: 'bone_r5',
    key: 'bone_r5',
  },
  {
    title: 'bone_r6',
    dataIndex: 'bone_r6',
    key: 'bone_r6',
  },
  {
    title: 'bone_r7',
    dataIndex: 'bone_r7',
    key: 'bone_r7',
  },
  {
    title: 'bone_r8',
    dataIndex: 'bone_r8',
    key: 'bone_r8',
  },
  {
    title: 'bone_l1',
    dataIndex: 'bone_l1',
    key: 'bone_l1',
  },
  {
    title: 'bone_l2',
    dataIndex: 'bone_l2',
    key: 'bone_l2',
  },
  {
    title: 'bone_l3',
    dataIndex: 'bone_l3',
    key: 'bone_l4',
  },
  {
    title: 'bone_l4',
    dataIndex: 'bone_l4',
    key: 'bone_l4',
  },
  {
    title: 'bone_l5',
    dataIndex: 'bone_l5',
    key: 'bone_l5',
  },
  {
    title: 'bone_l6',
    dataIndex: 'bone_l6',
    key: 'bone_l6',
  },
  {
    title: 'bone_l7',
    dataIndex: 'bone_l7',
    key: 'bone_l7',
  },
  {
    title: 'bone_l8',
    dataIndex: 'bone_l8',
    key: 'bone_l8',
  },
  {
    title: 'Tester',
    dataIndex: 'tester',
    key: 'tester',
  },
  {
    title: 'Report',
    dataIndex: 'report',
    key: 'report',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Certify',
    dataIndex: 'certify',
    key: 'certify',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Diagnosis',
    dataIndex: 'diagnosis',
    key: 'diagnosis',
  },
  {
    title: 'Date_Tested',
    dataIndex: 'dtest',
    key: 'dtest',
  },
  {
    title: 'review1yr',
    dataIndex: 'rev1y',
    key: 'rev1y',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'review6mo',
    dataIndex: 'rev6m',
    key: 'rev6m',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'tonotify',
    dataIndex: 'tontfy',
    key: 'tontfy',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Notified',
    dataIndex: 'notfid',
    key: 'notfid',
    render: (inf) => {
        let color = 'green'
          if (inf === 'FALSE') {
            color = 'volcano';
          }
          if (inf === 'TRUE') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={inf}>
              {inf.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Edit Action',
    key: 'edit_action',
    render: (_, record) => (
      <a className="bg-[#0094f1] text-white py-3 px-4" onClick={() => handleEdit(record)}>EDIT</a>
    ),
  },
];

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchText) {
      const filtered = data.filter(item =>
        item.fin.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchText]);
    
    return (
        <Table scroll={x} columns={columns} dataSource={filteredData.map((item, index) => ({ ...item, key: index }))} virtual={'scrollX'}  /> 
    )
}

export default TableMain;