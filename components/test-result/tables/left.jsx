import React from 'react';
import { Space, Table, Tag } from 'antd';
import { x } from 'joi';
const columns = [
  {
    title: 'FREQ/KHz',
    dataIndex: 'freq',
    key: 'freq',
  },
  {
    title: '0.25',
    dataIndex: '0.25',
    key: '0.25',
  },
  {
    title: '0.5',
    dataIndex: '0.5',
    key: '0.5',
  },
  {
    title: '1.0',
    dataIndex: '1.0',
    key: '1.0',
  },
  {
    title: '2.0',
    dataIndex: '2.0',
    key: '2.0',
  },
  {
    title: '3.0',
    dataIndex: '3.0',
    key: '3.0',
  },
  {
    title: '4.0',
    dataIndex: '4.0',
    key: '4.0',
  },
  {
    title: '6.0',
    dataIndex: '6.0',
    key: '6.0',
  },
  {
    title: '8.0',
    dataIndex: '8.0',
    key: '8.0',
  },
];
const data = [
    {
      freq: 'Rt AC/db',
    },
    {
      freq: 'Rt BC/db',
    },
];
const LeftTable = () => <Table columns={columns} dataSource={data} pagination={false} virtual={'scrollX'} scroll={x} />;
export default LeftTable;