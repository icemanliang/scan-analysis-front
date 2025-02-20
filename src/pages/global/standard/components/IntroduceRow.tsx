import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Col, DatePicker, Progress, Row, Tooltip } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from '@/components/Charts';
import Trend from '@/components/Trend';

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();

  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

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
          footer={<div style={{display: 'flex', justifyContent: 'space-between'}}><Trend
            flag="up"
            style={{
              marginRight: 16,
              minWidth: 100,
            }}
          >
            周同比
            <span className={styles.trendText}>12%</span>
          </Trend><DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              size="small"
            /></div>}
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
