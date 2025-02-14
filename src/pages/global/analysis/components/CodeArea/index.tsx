import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Pie, Area } from '@ant-design/plots';
import numeral from 'numeral';
import NumberInfo from '../NumberInfo';
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
  { title: '工专路 1 号店', total: 120000 },
  { title: '工专路 2 号店', total: 100000 },
  { title: '工专路 3 号店', total: 80000 },
  { title: '工专路 4 号店', total: 60000 },
  { title: '工专路 5 号店', total: 40000 },
];

const visitData2 = [
  { x: '1', y: 1.12 },
  { x: '2', y: 3.32 },
  { x: '3', y: 2.42 },
  { x: '4', y: 1.22 },
  { x: '5', y: 4.02 },
];

const CodeArea: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col md={6}>
          <div style={{ margin: '30px' }}>
            <NumberInfo
              subTitle={
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
              data={visitData2}
            />
          </div>
          <div style={{ margin: '30px' }}>
            <NumberInfo
              subTitle={
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
              data={visitData2}
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
                <span>{numeral(item.total).format('0,0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};
export default CodeArea;
