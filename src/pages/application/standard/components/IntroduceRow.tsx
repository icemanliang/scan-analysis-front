import { InfoCircleOutlined } from '@ant-design/icons';
import { Area, Column } from '@ant-design/plots';
import { Col, DatePicker, Progress, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import { ChartCard } from '@/components/Charts';
import Trend from '@/components/Trend';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

const IntroduceRow = ({ loading, visitData, complexData }: { loading: boolean; visitData: DataItem[]; complexData: DataItem[] }) => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="ES单文件平均缺陷数及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={2.14}
          footer={<div style={{display: 'flex'}}><Trend
            flag="down"
            style={{
              marginRight: 10,
              minWidth: 105,
            }}
          >
            周同比
            <span className={styles.trendText}>7.14%</span>
          </Trend><DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              format={'M/DD'}
              size="small"
            /></div>}
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
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="ES规范缺陷总数及走势"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(1041).format('0,0')}
          footer={<div style={{display: 'flex'}}><Trend
            flag="down"
            style={{
              marginRight: 10,
              minWidth: 105,
            }}
          >
            周同比
            <span className={styles.trendText}>8.21%</span>
            </Trend><DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              format={'M/DD'}
              size="small"
            /></div>}
          contentHeight={46}
        >
          <Column
            xField="x"
            yField="y"
            padding={-20}
            axis={false}
            height={46}
            data={visitData}
            scale={{ x: { paddingInner: 0.4 } }}
          />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          bordered={false}
          title="ES规范全文件合规进度"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total="56%"
          footer={
            <div
              style={{
                display: 'flex',
              }}
            >
              <span>{'周进度 52% -> 56%'}</span>
            </div>
          }
          contentHeight={46}
        >
          <Progress percent={56} strokeColor={{ from: '#108ee9', to: '#87d068' }} status="active" />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="复杂模块占比"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={() => '2.6%' }
          footer={<div style={{display: 'flex'}}><Trend
            flag="up"
            style={{
              marginRight: 10,
              minWidth: 105,
            }}
          >
            周同比
            <span className={styles.trendText}>8.3%</span>
          </Trend><DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              format={'M/DD'}
              size="small"
            /></div>}
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
            data={complexData}
          />
        </ChartCard>
      </Col>
    </Row>
  );
};
export default IntroduceRow;
