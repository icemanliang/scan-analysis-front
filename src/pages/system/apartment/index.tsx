import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
// import useStyles from './style.style';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default () => {

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '部门负责人',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '应用列表',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

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
    </PageContainer>
  );
};
