import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, List, Typography, Progress } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import DepartmentHeader from '@/components/DepartmentHeader';

const pkgData = [
  { pkgName: 'Generator函数占比', count: '+1.01' },
  { pkgName: 'CSS缺陷波及检测', count: '-0.99' },
  { pkgName: 'react', count: '-0.98' },
  { pkgName: 'vue', count: '-0.97' },
  { pkgName: 'angular', count: '+0.96' },
  { pkgName: 'jquery', count: '-0.95' },
  { pkgName: 'bootstrap', count: '+0.12' },
  { pkgName: 'nodejs', count: '-0.93' },
  { pkgName: 'express', count: '-0.92' },
  { pkgName: 'koa', count: '-0.91' },
];

const RoseData = {
  "管理系统": {
    "count": 78,
  },
  "运营系统": {
    "count": 73,
  },
  "生产系统": {
    "count": 68,
  },
  "分发系统": {
    "count": 64,
  },
  "安全系统": {
    "count": 62,
  },
  "审核系统": {
    "count": 58,
  },
  "推荐系统": {
    "count": 56,
  },
  "搜索系统": {
    "count": 54,
  },
  "统计系统": {
    "count": 40,
  },
  "分析系统": {
    "count": 38,
  },
  "审计系统": {
    "count": 36,
  },
  "研发系统": {
    "count": 34,
  },
  "财务系统": {
    "count": 32,
  },
  "商品系统": {
    "count": 30,
  },
};

const Columnconfig = {
  height: 280,
  data: Object.entries(RoseData).map(([key, value]) => ({
    api: key,
    callNum: value.count
  })),
  xField: 'api',
  yField: 'callNum',
  label: {
    text: (originData: any) => {
      return originData.callNum;
    },
    textBaseline: 'bottom',
  },
  scrollbar: {
    x: {
      ratio: 0.5,
    },
  },
  style: {
    maxWidth: 30,
  },
  scale: {
    y: {
      type: 'linear',
      tickCount: 10,
      domain: [0, 90],
    }
  }
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

const Workplace: FC = () => {
  const { styles } = useStyles();

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
      <Row gutter={24}>
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

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card title={'全应用质量分排名'}>
            <Row>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingTop: '10px' }}>
                  <Column {...Columnconfig} />
                </div>
              </Col>
              <Col md={7} sm={24} xs={24}>
                <div style={{ fontSize: '14px', marginBottom: '15px', color: 'grey' }}>变化明细 : <span style={{ color: '#000', fontWeight: 'bold' }}>内容运营系统</span></div>
                <List
                  style={{ height: 250, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}
                  dataSource={pkgData}
                  renderItem={
                    (item, index) => <List.Item>
                      <Typography.Text><span style={{ color: '#000', marginRight: '10px' }}></span>{item.pkgName}</Typography.Text>
                      <Typography.Text>{item.count}</Typography.Text>
                    </List.Item>
                  }
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

    </PageContainer>
  );
};
export default Workplace;
