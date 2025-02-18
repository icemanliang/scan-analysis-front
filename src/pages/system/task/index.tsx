import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Space, Table, Tag, Button, Modal } from 'antd';
import type { TableProps } from 'antd';
import { queryList } from './service';
import { useRequest } from '@umijs/max';
import type { TaskItem } from './data.d';

export default () => {
  const { data, loading } = useRequest(() => {
    return queryList();
  });
  const taskList = data?.data || [];

  // 废弃任务
  const deleteTask = (id: number) => {
      Modal.confirm({
        title: '废弃任务',
        content: '确定废弃该任务吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          console.log('DEL TASK' , id)
        },
      });
  };

  const columns: TableProps<TaskItem>['columns'] = [
    {
      title: '任务序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '执行密钥',
      dataIndex: 'task_code',
      key: 'task_code',
    },
    {
      title: '应用数',
      dataIndex: 'apps',
      key: 'apps',
      render: (_, { apps }) => apps.length,
    },
    {
      title: '插件数',
      dataIndex: 'plugins',
      key: 'plugins',
      render: (_, { plugins }) => plugins.length,
    },
    {
      title: '执行时间',
      dataIndex: 'task_date',
      key: 'task_date',
      render: (_, { task_date }) => {
        return task_date.split('T')[0]; // 只取T前面的日期部分
      },
    },
    {
      title: ' 任务耗时',
      dataIndex: 'cost_time',
      key: 'cost_time',
      render: (_, { cost_time }) => {
        const totalSeconds = Math.floor(cost_time / 1000); // 先将毫秒转为秒
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;
      },
    },
    {
      title: '任务状态',
      key: 'task_status',
      dataIndex: 'task_status',
      render: (_, { task_status }) => (
        <>
          <Tag color={task_status ===2 ? 'green' : task_status === 1 ? 'blue' : 'red'}>
            {task_status === 2 ? '成功' : task_status === 1 ? '执行中' : '失败'}
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
          <a
            onClick={() => {
              Modal.info({
                title: '任务日志',
                width: 800,
                content: record.task_log.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                )),
              });
            }}
          >
            日志
          </a>
          <a
            onClick={() => {
              deleteTask(record.id);
            }}
          >
            作废
          </a>
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
          <Table<TaskItem> columns={columns} dataSource={taskList} loading={loading} />
        </Card>
      </GridContent>
    </PageContainer>
  );
};
