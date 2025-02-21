import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Pie, Area } from '@ant-design/plots';
import numeral from 'numeral';
import NumberInfo from '@/components/NumberInfo';
import useStyles from './index.style';

const Pieconfig = {
  data: [
    { type: '函数缺失注释', value: 27 },
    { type: '文件命名违规', value: 25 },
    { type: '变量声明未用', value: 18 },
    { type: '函数行超阈值', value: 15 },
    { type: '滥用Any类型', value: 10 },
    { type: '其它违规聚合', value: 10 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
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
        text: '错误规则分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const rankingListData = [
  { title: '审核管理系统', total: 12.87 },
  { title: '统计管理系统', total: 11.32 },
  { title: '审计管理系统', total: 9.88 },
  { title: '财务管理系统', total: 8.73 },
  { title: '商品管理系统', total: 8.54 },
];

const esTotalData = [
  { x: '1', y: 6732 },
  { x: '2', y: 6430 },
  { x: '3', y: 4821 },
  { x: '4', y: 4200 },
  { x: '5', y: 3589 },
];

const esSingleData = [
  { x: '1', y: 7.12 },
  { x: '2', y: 6.32 },
  { x: '3', y: 5.42 },
  { x: '4', y: 4.22 },
  { x: '5', y: 3.02 },
];

const CodeArea: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col md={6}>
          <div style={{ margin: '30px' }}>
            <NumberInfo
              subTitle={
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>
                    全应用缺陷总数走势
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
              height={45}
              axis={false}
              padding={-12}
              style={{ fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)', fillOpacity: 0.4 }}
              data={esTotalData}
            />
          </div>
          <div style={{ margin: '30px' }}>
            <NumberInfo
              subTitle={
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>
                    单文件平均缺陷数走势
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
              height={45}
              axis={false}
              padding={-12}
              style={{ fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)', fillOpacity: 0.4 }}
              data={esSingleData}
            />
          </div>
      </Col>
      <Col md={10}>
        <Pie {...Pieconfig} />
      </Col>
      <Col md={8}>
        <div className={styles.salesRank}>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>单文件平均缺陷数排名</div>
          <ul className={styles.rankingList}>
            {rankingListData.map((item, i) => (
              <li key={item.title}>
                <span
                  className={`${styles.rankingItemNumber} ${
                    i < 3 ? styles.rankingItemNumberActive : ''
                  }`}
                >
                  {i + 1}
                </span>
                <span className={styles.rankingItemTitle} title={item.title}>
                  {item.title}
                </span>
                <span>{item.total}</span>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};
export default CodeArea;
