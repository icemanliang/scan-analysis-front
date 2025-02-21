import { Card, List, Typography, Tabs } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
// import useStyles from './style.style';

const TabList = [
  { label: '缺失TS类型函数分布', key: '1' },
  { label: 'Class类组件分布', key: '2' },
  { label: 'Generator函数分布', key: '3' },
];

const data = [
  { filePath: 'src/component/common/use-rollback-switch.ts', desc: '入参缺失', line: 77 },
  { filePath: 'src/component/example/base-demo/view.tsx', desc: '入参缺失',line: 62 },
  { filePath: 'src/component/inventory/second-inventory/view.tsx', desc: '入参缺失',line: 96 },
  { filePath: 'src/component/query/container-query/package-detail-page.tsx', desc: '返回缺失', line: 103 },
  { filePath: 'src/components/echarts/base-chart.tsx', desc: '入参缺失',line: 80 },
  { filePath: 'src/components/filter-form/index.tsx', desc: '入参缺失',line: 31 },
  { filePath: 'src/pages/dashboard/helpers/option.ts', desc: '返回缺失', line: 137 },
  { filePath: 'src/pages/system/master-data/office/utils/index.ts', desc: '入参缺失',line: 23 },
  { filePath: 'src/shineout/RichEditor/index.tsx', desc: '入参缺失',line: 44 },
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
              <Typography.Text style={{flex:1}}><CopyOutlined /> {item.filePath}</Typography.Text>
              <Typography.Text style={{fontSize:'12px', width:'50px', color:'red'}}>{item.desc}</Typography.Text>
              <Typography.Text style={{fontSize:'12px', width:'40px', marginLeft:'10px', color:'grey'}}>所在行:</Typography.Text>
              <Typography.Text style={{fontSize:'12px', width:'30px', marginLeft:'5px', color:'#f2580b'}}>{item.line}</Typography.Text>
            </List.Item>
          }
        />
      </div>
    </Card>
  );
}
