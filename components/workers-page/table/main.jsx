import React from 'react';
import { Space, Table, Tag, ConfigProvider } from 'antd';
import { x } from 'joi';
import { MdEditNote } from "react-icons/md";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Dept',
    dataIndex: 'dept',
    key: 'dept',
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
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Empno',
    dataIndex: 'empno',
    key: 'empno',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Job Title',
    dataIndex: 'jobt',
    key: 'jobt',
  },
  {
    title: 'Yrs_pj',
    dataIndex: 'ypj',
    key: 'ypj',
  },
  {
    title: 'Yrs_Exp',
    dataIndex: 'exp',
    key: 'exp',
  },
  {
    title: 'Statutory',
    dataIndex: 'stat',
    key: 'stat',
    render: (stat) => {
        let color = 'green'
          if (stat === 'false') {
            color = 'volcano';
          }
          if (stat === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={stat}>
              {stat.toUpperCase()}
            </Tag>
        );
    }
    ,
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
          if (inf === 'false') {
            color = 'volcano';
          }
          if (inf === 'true') {
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
    dataIndex: 'discharge',
    key: 'discharge',
    render: (discharge) => {
        let color = 'green'
          if (discharge === 'false') {
            color = 'volcano';
          }
          if (discharge === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={discharge}>
              {discharge.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Ear Operation',
    dataIndex: 'operation',
    key: 'operation',
    render: (operation) => {
        let color = 'green'
          if (operation === 'false') {
            color = 'volcano';
          }
          if (operation === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={operation}>
              {operation.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Ringing Ears',
    dataIndex: 'ringe',
    key: 'ringe',
    render: (ringe) => {
        let color = 'green'
          if (ringe === 'false') {
            color = 'volcano';
          }
          if (ringe === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={ringe}>
              {ringe.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Head or Ear',
    dataIndex: 'hear',
    key: 'hear',
    render: (hear) => {
        let color = 'green'
          if (hear === 'false') {
            color = 'volcano';
          }
          if (hear === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={hear}>
              {hear.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Consult for Ear',
    dataIndex: 'cone',
    key: 'cone',
    render: (cone) => {
        let color = 'green'
          if (cone === 'false') {
            color = 'volcano';
          }
          if (cone === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={cone}>
              {cone.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Loud noise Exposure',
    dataIndex: 'expos',
    key: 'expos',
    render: (expos) => {
        let color = 'green'
          if (expos === 'false') {
            color = 'volcano';
          }
          if (expos === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={expos}>
              {expos.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Medication',
    dataIndex: 'medic',
    key: 'medic',
    render: (medic) => {
        let color = 'green'
          if (medic === 'false') {
            color = 'volcano';
          }
          if (medic === 'true') {
            color = 'green';
          } 
          return (
            <Tag color={color} key={medic}>
              {medic.toUpperCase()}
            </Tag>
        );
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
        <a className="bg-[#0094f1] text-white py-3 px-4">EDIT</a>
    ),
  },
];
const data = [
    {
      fin: 'SXXXX106A',
      empno: '608538',
      exp: '',
      stat: 'true',
      notify: 'yes',
      inf: 'false',
      diag: 'nide-notified',
      hist: '',
      discharge: 'true',
      operation: 'false',
      ringe: 'true',
      hear: 'true',
      cone: 'false',
      expos: 'false',
      medic: 'true',
      name: 'John Doe',
      dept: 'FE',
      sex: 'M',
      dob: '5/9/2005',
      date: '1999',
      jobt: 'TECHNICIAN',
      ypj: '',
    },
    {
      fin: 'SXXXX106A',
      empno: '608538',
      exp: '',
      stat: 'true',
      notify: 'yes',
      inf: 'false',
      diag: 'ent',
      hist: '',
      discharge: 'true',
      operation: 'false',
      ringe: 'true',
      hear: 'true',
      cone: 'false',
      expos: 'false',
      medic: 'true',
      name: 'John Doe',
      dept: 'FE',
      sex: 'M',
      dob: '5/9/2005',
      date: '1999',
      jobt: 'TECHNICIAN',
      ypj: '',
    },
    {
      fin: 'SXXXX106A',
      empno: '608538',
      exp: '',
      stat: 'true',
      notify: 'yes',
      inf: 'false',
      diag: 'nide-notified',
      hist: '',
      discharge: 'true',
      operation: 'false',
      ringe: 'true',
      hear: 'true',
      cone: 'false',
      expos: 'false',
      medic: 'true',
      name: 'John Doe',
      dept: 'FE',
      sex: 'M',
      dob: '5/9/2005',
      date: '1999',
      jobt: 'TECHNICIAN',
      ypj: '',
    },
];

<ConfigProvider
  theme={{
    components: {
      Table: {
        cellFontSize: '10px'
      },
    },
  }}
>

</ConfigProvider>
const TableMain = () => {

    const rowClassName = (record, index) => {
      return index % 2 != 0 ? 'zebra-stripe' : '';
    };
    
    return (
        <Table scroll={x} columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))} virtual={'scrollX'} rowClassName={rowClassName} /> 
    )
}

export default TableMain;