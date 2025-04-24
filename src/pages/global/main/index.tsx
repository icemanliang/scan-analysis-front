import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, DatePicker, Row, List, Typography } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import DepartmentHeader from '@/components/DepartmentHeader';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { forEach, groupBy } from 'lodash';

const pkgData = [
  { pkgName: 'CSS缺陷波及检测', count: '+0.99' },
  { pkgName: 'commit提交合规', count: '+1' },
  { pkgName: 'ES缺陷波及检测', count: '+0.97' },
  { pkgName: '冗余代码影响检测', count: '+0.96' },
  { pkgName: '文件命名缺陷检测', count: '-0.95' },
  { pkgName: '包管理器配置合规', count: '+1' },
  { pkgName: '类组件占比', count: '-0.93' },
  { pkgName: 'Dom API调用收敛', count: '-0.92' },
  { pkgName: 'Generator函数占比', count: '+1.01' }
];

const appScoreData = [
  {
    appName: "基础管理系统",
    score: 4.21,
    type: "Lon"
  },
  {
    appName: "运营管理系统",
    score: 6.45,
    type: "Lon"
  },
  {
    appName: "生产管理系统",
    score: 16.12,
    type: "Lon"
  },
  {
    appName: "分发管理系统",
    score: 4.98,
    type: "Lon"
  },
  {
    appName: "安全管理系统",
    score: 2.29,
    type: "Lon"
  },
  {
    appName: "审核管理系统",
    score: 8.34,
    type: "Lon"
  },
  {
    appName: "推荐管理系统",
    score: 6.21,
    type: "Lon"
  },
  {
    appName: "搜索管理系统",
    score: 4.84,
    type: "Lon"
  },
  {
    appName: "统计管理系统",
    score: 0.12,
    type: "Lon"
  },
  {
    appName: "分析管理系统",
    score: 4.32,
    type: "Lon"
  },
  {
    appName: "审计管理系统",
    score: 6.45,
    type: "Lon"
  },
  {
    appName: "研发管理系统",
    score: 4.24,
    type: "Lon"
  },
  {
    appName: "基础管理系统",
    score: 74,
    type: "Bor"
  },
  {
    appName: "运营管理系统",
    score: 67,
    type: "Bor"
  },
  {
    appName: "生产管理系统",
    score: 52,
    type: "Bor"
  },
  {
    appName: "分发管理系统",
    score: 60,
    type: "Bor"
  },
  {
    appName: "安全管理系统",
    score: 60,
    type: "Bor"
  },
  {
    appName: "审核管理系统",
    score: 50,
    type: "Bor"
  },
  {
    appName: "推荐管理系统",
    score: 50,
    type: "Bor"
  },
  {
    appName: "搜索管理系统",
    score: 50,
    type: "Bor"
  },
  {
    appName: "统计管理系统",
    score: 40,
    type: "Bor"
  },
  {
    appName: "分析管理系统",
    score: 34,
    type: "Bor"
  },
  {
    appName: "审计管理系统",
    score: 30,
    type: "Bor"
  },
  {
    appName: "研发管理系统",
    score: 30,
    type: "Bor"
  }
]

const annotations: any[] = [];
  forEach(groupBy(appScoreData, 'appName'), (values, k) => {
    const value = values.reduce((a, b) => a + b.score, 0);
    annotations.push({
      type: 'text',
      data: [k, value],
      xField: 'appName',
      yField: 'score',
      style: {
        text: `${value}`,
        textBaseline: 'bottom',
        position: 'top',
        textAlign: 'center',
        fontSize: 13
      },
      tooltip: false,
    });
});
// console.log(annotations)

const Columnconfig = {
  height: 280,
  data: appScoreData,
  xField: 'appName',
  yField: 'score',
  stack: true,
  legend: false,
  colorField: 'type',
  scrollbar: {
    x: {
      ratio: 0.5,
    },
  },
  style: {
    maxWidth: 40,
  },
  scale: {
    y: {
      type: 'linear',
      tickCount: 10,
      domain: [0, 90],
    }
  },
  annotations: annotations
};

const sizePieconfig = {
  data: [
    { type: '1-10MB', value: 27 },
    { type: '10-30MB', value: 25 },
    { type: '30-50MB', value: 18 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  label: {
    text: ({ type, value }: any) => {
      return `${type} : ${value}%`;
    },
    fontSize: 12,
    position: 'outside',
  },
  legend: false,
  annotations: [
    {
      type: 'text',
      style: {
        text: '应用体量分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const nodePieconfig = {
  data: [
    { type: 'v22', value: 27 },
    { type: 'v20', value: 25 },
    { type: 'v18', value: 18 },
    { type: 'v16', value: 15 },
    { type: 'v14', value: 10 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  label: {
    text: ({ type, value }: any) => {
      return `${type} : ${value}%`;
    },
    fontSize: 12,
    position: 'outside',
  },
  legend: false,
  annotations: [
    {
      type: 'text',
      style: {
        text: 'Node版本分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const Main: FC = () => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            title={'全应用质量分排名 & 变化明细'}
            extra={<DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              size="small"
            />}
          >
            <Row>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingTop: '10px' }}>
                  <Column {...Columnconfig} />
                </div>
              </Col>
              <Col md={7} sm={24} xs={24}>
                <div style={{ fontSize: '14px', marginBottom: '15px', color: 'grey' }}><span style={{ color: '#000', fontWeight: 'bold' }}>基础管理系统</span> 变化明细 :</div>
                <List
                  style={{ height: 250, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}
                  dataSource={pkgData}
                  renderItem={
                    (item) => <List.Item>
                      <Typography.Text><span style={{ color: '#000', marginRight: '10px' }}></span>{item.pkgName}</Typography.Text>
                      <Typography.Text style={{color: item.count.includes('+') ? 'green' : 'red'}}>{item.count}</Typography.Text>
                    </List.Item>
                  }
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col md={4} sm={12} xs={24}>
          <Card>
            <div className={styles.analysisDesc}>桌面应用</div>
            <div className={styles.analysisNumber}>63</div>
          </Card>
          <Card style={{ marginTop: '24px' }}>
            <div className={styles.analysisDesc}>移动应用</div>
            <div className={styles.analysisNumber}>22</div>
          </Card>
        </Col>
        <Col md={10}>
          <Card>
            <Row>
              <Col md={24} sm={24} xs={24}>
                <Pie {...sizePieconfig} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={10} sm={24} xs={24}>
          <Card>
            <Row>
              <Col md={24} sm={24} xs={24}>
                <Pie {...nodePieconfig} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

    </PageContainer>
  );
};
export default Main;
