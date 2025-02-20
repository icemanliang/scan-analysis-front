import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Card, Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import NumberInfo from '@/components/NumberInfo';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';

const rankingListData: {
  title: string;
  value: string;
}[] = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `管理系统 ${i} 号`,
    value: '21.2%',
  });
}

const TopSearch = ({
  loading,
  visitData2,
}: {
  loading: boolean;
  visitData2: DataItem[];
}) => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        height: '100%',
      }}
    >
      <Row gutter={24}>
        <Col md={24}>
          <NumberInfo
            subTitle={
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>
                代码重复文件波及率走势
                <Tooltip title="指标说明">
                  <InfoCircleOutlined
                    style={{
                      marginLeft: 8,
                    }}
                  />
                </Tooltip>
              </span>
              <DatePicker.RangePicker
                defaultValue={defaultRangeValue}
                bordered={false}
                size="small"
              />
              </div>
            }
            gap={8}
            total={numeral(12321).format('0,0')}
            status="up"
            subTotal={17.1}
          />
          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={65}
            axis={false}
            padding={-16}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)',
              fillOpacity: 0.4,
              width: '100%',
            }}
            data={visitData2}
          />
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <div style={{ padding: '8px 6px 8px 0px', marginTop: '10px' }}>
            <div style={{ fontWeight: 'bold', margin: '4px 0px 6px 0px' }}>波及率排名</div>
            <ul className={styles.rankingList} style={{ height: '186px', overflow: 'auto', margin: '0px' }}>
              {rankingListData.map((item, i) => (
                <li key={item.title}>
                  <span
                    className={`${
                      i < 3 ? styles.rankingItemNumberActive : styles.rankingItemNumber
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={styles.rankingItemTitle} title={item.title}>
                    {item.title}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default TopSearch;
