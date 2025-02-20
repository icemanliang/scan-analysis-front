import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Col, DatePicker, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from '@/components/Charts';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import Trend from '@/components/Trend';

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

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
