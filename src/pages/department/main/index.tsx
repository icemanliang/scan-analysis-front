import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, List, Typography, Tag, Progress } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import type { FC } from 'react';
import { CodepenOutlined } from '@ant-design/icons';
import useStyles from './style.style';
import { min } from 'lodash';

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
  "Message": {
    "count": 78,
  },
  "Spin": {
    "count": 73,
  },
  "Form": {
    "count": 68,
  },
  "Grid": {
    "count": 64,
  },
  "Input": {
    "count": 62,
  },
  "Textarea": {
    "count": 58,
  },
  "Button": {
    "count": 56,
  },
  "Checkbox": {
    "count": 54,
  },
  "Table": {
    "count": 40,
  },
  "Breadcrumb": {
    "count": 38,
  },
  "Radio": {
    "count": 36,
  },
  "CardGroup": {
    "count": 34,
  },
  "Card": {
    "count": 32,
  },
  "Switch": {
    "count": 30,
  },
};

const Columnconfig = {
  height: 270,
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
};

const Pieconfig = {
  data: [
    { type: '22', value: 27 },
    { type: '20', value: 25 },
    { type: '18', value: 18 },
    { type: '16', value: 15 },
    { type: '14', value: 10 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  // label: {
  //   text: 'value',
  //   style: {
  //     fontWeight: 'bold',
  //   },
  // },
  label: {
    text: ({ type, value }) => {
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
    >
      <Row gutter={24}>
        <Col md={5} sm={12} xs={24}>
          <Card>
            <div className={styles.analysisDesc}>应用总数量</div>
            <div className={styles.analysisNumber}>53</div>
          </Card>
          <Card style={{ marginTop: '24px' }}>
            <div className={styles.analysisDesc}>移动端应用</div>
            <div className={styles.analysisNumber}>13</div>
          </Card>
        </Col>
        <Col md={10}>
          <Card>
          <Row>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>PKG配置合规</div>
              <Progress type="circle" percent={65} size={60} style={{ marginTop: '20px' }} />
            </Col>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>提交信息合规</div>
              <Progress type="circle" percent={72} size={60} style={{ marginTop: '20px' }} />
            </Col>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>Husky配置合规</div>
              <Progress type="circle" percent={90} size={60} style={{ marginTop: '20px' }} />
            </Col>
          </Row>
          <Row style={{ marginTop: '24px' }}>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>包管理器合规</div>
              <Progress type="circle" percent={87} size={60} style={{ marginTop: '20px' }} />
            </Col>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>Npmrc配置合规</div>
              <Progress type="circle" percent={100} size={60} style={{ marginTop: '20px' }} />
            </Col>
            <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
              <div className={styles.analysisDesc}>Node版本合规</div>
              <Progress type="circle" percent={78} size={60} style={{ marginTop: '20px' }} />
            </Col>
          </Row>
          </Card>
        </Col>
        <Col md={9} sm={24} xs={24}>
          <Card>
            <Row>
              <Col md={24} sm={24} xs={24}>
                <Pie {...Pieconfig} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card title={'全应用质量分排名'} style={{ marginTop: '24px' }}>
            <Row>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingTop: '10px' }}>
                  <Column {...Columnconfig} />
                </div>
              </Col>
              <Col md={7} sm={24} xs={24}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>分值变化明细</div>
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
