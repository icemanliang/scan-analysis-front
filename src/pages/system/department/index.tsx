import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
import { useRequest } from '@umijs/max';
import type { DepartmentItem } from './data.d';
import { queryList } from './service';

export default () => {
  const { data, loading } = useRequest(() => {
    return queryList();
  });
  const departmentList = data?.data || [];

  // 删除部门
  const DeleteClick = (id: number)=>{
    Modal.confirm({
      title: '删除部门',
      content: '确定删除该部门吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log('DELETE', id)
      },
    });
  }

  const columns: TableProps<DepartmentItem>['columns'] = [
    {
      title: '部门名称',
      dataIndex: 'dept_name',
      key: 'dept_name',
    },
    {
      title: '部门编码',
      dataIndex: 'dept_code',
      key: 'dept_code',
    },
    {
      title: '应用列表',
      key: 'apps',
      dataIndex: 'apps',
      render: (_, { apps }) => (
        <>
          {apps.map((app: { name: string; value: number }) => {
            let color = 'blue';
            return (
              <Tag color={color} key={app.name}>
                {app.name}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: DepartmentItem) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={
            () => {
              DeleteClick(record.id);
            }
          }>删除</a>
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
          <Table<DepartmentItem> columns={columns} dataSource={departmentList} loading={loading} />
        </Card>
      </GridContent>
    </PageContainer>
  );
};
