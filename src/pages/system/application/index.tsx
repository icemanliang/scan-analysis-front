import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
// import useStyles from './style.style';

interface DataType {
  key: string;
  name: string;
  owner: string;
  desc: string;
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
      title: '应用名称',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '应用负责人',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: '应用描述',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '应用类型',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = 'red';
            if (tag === '微前端主应用') {
              color = 'volcano';
            } else if (tag === 'Mot移动端') {
              color = 'blue'
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
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={
            () => {
              DeleteClick();
            }}>删除</a>
        </Space>
      ),
    },
  ];



  const data: DataType[] = [
    {
      key: '1',
      name: '配置管理平台',
      owner: '刘五',
      desc: 'New York No. 1 Lake Park',
      tags: ['微前端', '移动端'],
    },
    {
      key: '2',
      name: '内容运营系统',
      owner: '刘七',
      desc: 'London No. 1 Lake Park',
      tags: ['PC端'],
    },
    {
      key: '3',
      name: '开放平台系统',
      owner: '刘九',
      desc: 'Sydney No. 1 Lake Park',
      tags: ['移动端'],
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
