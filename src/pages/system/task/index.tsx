import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
import React, { useState } from 'react';
import OperationModal from './components/OperationModal';
// import useStyles from './style.style';

interface DataType {
  number: string;
  token: string;
  application: number;
  plugin: number;
  when: string;
  time: string;
  status: number;
}

export default () => {
  const [done, setDone] = useState<boolean>(false);
  const [open, setVisible] = useState<boolean>(false);

  const showEditModal = () => {
    setVisible(true);
  };
  const deleteItem = () => {
    console.log('del')
  };
  const editAndDelete = (key: string | number) => {
    if (key === 'edit') showEditModal();
    else if (key === 'delete') {
      Modal.confirm({
        title: '废弃任务',
        content: '确定废弃该任务吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => deleteItem(),
      });
    }
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '任务序号',
      dataIndex: 'number',
      key: 'number',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '执行密钥',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '应用数',
      dataIndex: 'application',
      key: 'application',
    },
    {
      title: '插件数',
      dataIndex: 'plugin',
      key: 'plugin',
    },
    {
      title: '执行时间',
      dataIndex: 'when',
      key: 'when',
    },
    {
      title: ' 任务耗时',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '任务状态',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          <Tag color={status ===1 ? 'green' : 'red'}>
              {'成功'}
            </Tag>
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>详情</a>
          <a>日志</a>
          <a onClick={
            () => {
              editAndDelete('delete');
            }}>作废</a>
        </Space>
      ),
    },
  ];



  const data: DataType[] = [
    {
      number: '1',
      token: 'djjdda-dadad-dad',
      application: 45,
      plugin: 9,
      when: '2025-1-20',
      time: '20分30秒',
      status: 1,
    },
    {
      number: '2',
      token: 'jdda-dadad-dad',
      application: 45,
      plugin: 9,
      when: '2025-1-24',
      time: '12分53秒',
      status: 1,
    },
    {
      number: '3',
      token: 'dda-dadad-dad',
      application: 45,
      plugin: 9,
      when: '2025-1-27',
      time: '15分23秒',
      status: 1,
    },
  ];

  const handleDone = () => {
    setDone(false);
    setVisible(false);
  };
  const handleSubmit = () => {
    setDone(true);
  };

  return (
    <PageContainer
      title={false}
      extra={<Button type="primary">新建</Button>}
    >
      <GridContent>
        <Card bordered={false}>
          <Table<DataType> columns={columns} dataSource={data} />
        </Card>
      </GridContent>
      <OperationModal
        done={done}
        open={open}
        current={null}
        onDone={handleDone}
        onSubmit={handleSubmit}
      />
    </PageContainer>
  );
};
