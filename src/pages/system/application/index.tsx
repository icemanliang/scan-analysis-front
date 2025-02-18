import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
import { useRequest } from '@umijs/max';
import { ApplicationItem } from './data.d';
import { queryList } from './service';

export default () => {
  const { data, loading } = useRequest(() => {
    return queryList();
  });
  const appList = data?.data || [];

  // 删除应用
  const DeleteClick = (id: string)=>{
    Modal.confirm({
      title: '删除应用',
      content: '确定删除该应用吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log('DEL', id)
      },
    });
  }

  const columns: TableProps<ApplicationItem>['columns'] = [
    {
      title: '应用名称',
      dataIndex: 'app_name',
      key: 'app_name',
    },
    {
      title: '应用负责人',
      dataIndex: 'app_owner',
      key: 'app_owner',
    },
    {
      title: '应用描述',
      dataIndex: 'app_desc',
      key: 'app_desc',
    },
    {
      title: '应用类型',
      key: 'app_tags',
      dataIndex: 'app_tags',
      render: (_, { app_tags }) => (
        <>
          {app_tags.map((tag) => {
            return (
              <Tag color={'red'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={
            () => {
              DeleteClick(record.id.toString());
            }}>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer
      title={false}
      extra={<Button type="primary">新建</Button>}
    >
      <GridContent>
        <Card bordered={false}>
          <Table<ApplicationItem> columns={columns} dataSource={appList} loading={loading} />
        </Card>
      </GridContent>
    </PageContainer>
  );
};
