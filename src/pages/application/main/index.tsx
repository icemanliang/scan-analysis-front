import { RadialBar, Tiny} from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Divider } from 'antd';
import type { FC } from 'react';
import useStyles from './style.style';
import Detail from './components/Detail';
import ApplicationHeader from '@/components/ApplicationHeader';

const config = {
  data: [
    {
      year: '依赖治理',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '冗余优化',
      value: 6,
      type: 'Lon',
    },
    {
      year: '工程规范',
      value: 7,
      type: 'Lon',
    },
    {
      year: '调用优化',
      value: 9,
      type: 'Lon',
    },
    {
      year: '代码规范',
      value: 13,
      type: 'Lon',
    },
    {
      year: '依赖治理',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '冗余优化',
      value: 6,
      type: 'Bor',
    },
    {
      year: '工程规范',
      value: 7,
      type: 'Bor',
    },
    {
      year: '调用优化',
      value: 9,
      type: 'Bor',
    },
    {
      year: '代码规范',
      value: 13,
      type: 'Bor',
    },
  ],
  xField: 'year',
  yField: 'value',
  stack: true,
  maxAngle: 270,
  colorField: 'type',
  legend: false,
};

const tinyConfig = {
  data: [
    38, 41, 34, 47, 48, 47, 49, 57, 50, 56, 62, 59, 68, 72, 83, 87, 92, 0
  ].map((value, index) => ({ value, index })),
  width: 380,
  height: 80,
  padding: 12,
  xField: 'index',
  yField: 'value',
  annotations: [
    {
      type: 'lineY',
      data: [70],
      style: { arrow: true, stroke: 'red', lineDash: [2, 2] },
      label: {
        text: '目标分值 = 70',
        position: 'left',
        dx: 0,
        style: { textBaseline: 'bottom' },
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
      content={
        <ApplicationHeader/>
      }
    >
      <Row gutter={24}>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="质量分"
              bodyStyle={{
                textAlign: 'center',
                fontSize: 0,
              }}
              bordered={false}
            >
            <div style={{fontSize: '32px', fontWeight: 'bold', marginTop: '20px'}}>47.7</div>
            {/* <Liquid height={360} percent={0.42} /> */}
            <RadialBar {...config} />
            <div style={{fontSize: '14px', color: 'rgba(0,0,0,0.45)', textAlign: 'center', margin: '20px 0px'}}>
              <a href="#">代码规范</a>
              <Divider type="vertical" />
              <a href="#">工程规范</a>
              <Divider type="vertical" />
              <a href="#">指标详解</a>
            </div>
          </Card>
        </Col>
        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <Card title="分值走势" bordered={false}>
            <Tiny.Column {...tinyConfig} />
          </Card>
          <Card title="指标明细" bordered={false} style={{marginTop: '16px', padding: '0px'}}>
            <Detail />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Workplace;
