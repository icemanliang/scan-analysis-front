import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
// import useStyles from './style.style';

interface DataType {
  key: string;
  name: string;
  owner: string;
  address: string;
  tags: string[];
}

export default () => {

  const DeleteClick = ()=>{
    Modal.confirm({
      title: '删除任务',
      content: '确定删除该任务吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log('DEL')
      },
    });
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '部门负责人',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: '应用列表',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = 'green';
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
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={
            () => {
              DeleteClick();
            }
          }>删除</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: '市场研究部',
      owner: '章三',
      address: 'New York No. 1 Lake Park',
      tags: ['配置管理平台', '数据分析平台'],
    },
    {
      key: '2',
      name: '财务精算部',
      owner: '李四',
      address: 'London No. 1 Lake Park',
      tags: ['内容运营系统'],
    },
    {
      key: '3',
      name: '游戏运营部',
      owner: '王五',
      address: 'Sydney No. 1 Lake Park',
      tags: ['开放平台系统', '官网系统'],
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
