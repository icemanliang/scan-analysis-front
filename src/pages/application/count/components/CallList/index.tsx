import { Card, List, Typography, Tabs } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
// import useStyles from './style.style';

const TabList = [
  { label: '缺失类型函数分布', key: '1' },
  { label: 'Class类组件分布', key: '2' },
  { label: 'Generator函数分布', key: '3' },
];

const data = [
  { filePath: 'src/pages/exception-sql/list/components/content.jsx', count: 1 },
  { filePath: 'src/pages/board/comprehensive/components/system-data/index.jsx', count: 2 },
  { filePath: 'src/pages/board/comprehensive/components/system-data/index.jsx', count: 3 },
];

export default function CallList() {
  // const { styles } = useStyles();

  return (
    <Card
      style={{ marginTop: 24 }}
    >
      <Tabs
        defaultActiveKey="1"
        centered
        items={TabList}
        renderTabBar={(props, DefaultTabBar) => <DefaultTabBar {...props} />}
      />
      <div style={{ height: 370, overflow: 'auto' }}>
        <List
          dataSource={data}
          renderItem={
            (item) => <List.Item>
              <Typography.Text><CopyOutlined /> {item.filePath}</Typography.Text>
              <Typography.Text>{item.count}</Typography.Text>
            </List.Item>
          }
        />
      </div>
    </Card>
  );
}
