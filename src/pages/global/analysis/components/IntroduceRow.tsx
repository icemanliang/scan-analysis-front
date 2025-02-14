import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Col, Progress, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from './Charts';

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col md={24}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="全应用文件命名缺陷率走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={'11.5%'}
          contentHeight={46}
        >
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={50}
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
        <ChartCard
          style={{ marginTop: '24px' }}
          bordered={false}
          loading={loading}
          title="全应用Reame合规进度"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={'57%'}
          contentHeight={50}
        >
          <Progress percent={57} size="small" status="active" />
        </ChartCard>
      </Col>
    </Row>
  );
};
export default IntroduceRow;
