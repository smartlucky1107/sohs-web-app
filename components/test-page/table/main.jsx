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
    dataIndex: 'air1',
    key: 'air1',
  },
  {
    title: 'air_r2',
    dataIndex: 'air2',
    key: 'air2',
  },
  {
    title: 'air_r3',
    dataIndex: 'air3',
    key: 'air3',
  },
  {
    title: 'air_r4',
    dataIndex: 'air4',
    key: 'air4',
  },
  {
    title: 'air_r5',
    dataIndex: 'air5',
    key: 'air5',
  },
  {
    title: 'air_r6',
    dataIndex: 'air6',
    key: 'air6',
  },
  {
    title: 'air_r7',
    dataIndex: 'air7',
    key: 'air7',
  },
  {
    title: 'air_r8',
    dataIndex: 'air8',
    key: 'air8',
  },
  {
    title: 'air_r9',
    dataIndex: 'air9',
    key: 'air9',
  },
  {
    title: 'air_r10',
    dataIndex: 'air10',
    key: 'air10',
  },
  {
    title: 'air_r11',
    dataIndex: 'air11',
    key: 'air11',
  },
  {
    title: 'air_r12',
    dataIndex: 'air12',
    key: 'air12',
  },
  {
    title: 'air_r13',
    dataIndex: 'air13',
    key: 'air13',
  },
  {
    title: 'air_r14',
    dataIndex: 'air14',
    key: 'air14',
  },
  {
    title: 'air_r15',
    dataIndex: 'air15',
    key: 'air15',
  },
  {
    title: 'air_r16',
    dataIndex: 'air16',
    key: 'air16',
  },
  {
    title: 'air_r17',
    dataIndex: 'air17',
    key: 'air17',
  },
  {
    title: 'air_r18',
    dataIndex: 'air18',
    key: 'air18',
  },
  {
    title: 'bone_r1',
    dataIndex: 'bone1',
    key: 'bone1',
  },
  {
    title: 'bone_r2',
    dataIndex: 'bone2',
    key: 'bone2',
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
    title: 'Action',
    key: 'action',
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