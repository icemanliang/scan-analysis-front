import { InfoCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Card, Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import NumberInfo from '@/components/NumberInfo';

const rankingListData: {
  title: string;
  value: string;
}[] = [
  { title: '生产管理系统', value: '28.01%' },
  { title: '分发管理系统', value: '25.52%' },
  { title: '搜索管理系统', value: '23.13%' },
  { title: '研发管理系统', value: '18.73%' },
  { title: '商品管理系统', value: '15.54%' },
];

const TopSearch = ({
  loading,
  visitData2,
}: {
  loading: boolean;
  visitData2: DataItem[];
}) => {
  const { styles } = useStyles();

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
              {<CalendarOutlined />}
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
