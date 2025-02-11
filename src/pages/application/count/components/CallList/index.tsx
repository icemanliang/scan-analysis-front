import { Card, Radio, List, Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
// import useStyles from './style.style';

const data = [
  { filePath: 'src/pages/exception-sql/list/components/content.jsx', count: 1 },
  { filePath: 'src/pages/board/comprehensive/components/system-data/index.jsx', count: 2 },
  { filePath: 'src/pages/board/comprehensive/components/system-data/index.jsx', count: 3 },
];

export default function CallList() {
  // const { styles } = useStyles();

  return (
    <Card
      // title="调用分布详情"
      style={{ marginTop: 24 }}
    >
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <Radio.Group defaultValue="all" style={{ width: '100%' }}>
          <Radio.Button value="all">缺失类型函数分布</Radio.Button>
          <Radio.Button value="progress">Class类组件分布</Radio.Button>
          <Radio.Button value="waiting">Generator函数分布</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ height: 370, overflow: 'auto' }}>
        <List
          dataSource={data}
          bordered
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
