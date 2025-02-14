import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from './Charts';

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col md={12}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="TS文件覆盖率及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={'67.1%'}
          contentHeight={46}
        >
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #175FE4 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}
          />
        </ChartCard>
      </Col>
      <Col md={12}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="TS类型缺失函数数量及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(846).format('0,0')}
          contentHeight={46}
        >
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #975FE4 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}
          />
        </ChartCard>
      </Col>
      <Col md={12} style={{ marginTop: '24px' }}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="Class类组件数量及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(146).format('0,0')}
          contentHeight={46}
        >
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #97EFE4 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}
          />
        </ChartCard>
      </Col>
      <Col md={12} style={{ marginTop: '24px' }}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="Generator函数数量及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(242).format('0,0')}
          contentHeight={46}
        >
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #972F84 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}
          />
        </ChartCard>
      </Col>
    </Row>
  );
};
export default IntroduceRow;
