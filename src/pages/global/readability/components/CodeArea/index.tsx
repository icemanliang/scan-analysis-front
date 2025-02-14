import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Pie, Area, Column } from '@ant-design/plots';
import numeral from 'numeral';
import NumberInfo from '../NumberInfo';
import useStyles from './index.style';

const Pieconfig = {
  data: [
    { type: '全局变量使用', value: 27 },
    { type: 'DOM操作', value: 35 },
    { type: 'History操作', value: 18 },
    { type: 'Location操作', value: 15 },
    { type: '全局事件监听', value: 10 },
    { type: 'Navigator操作', value: 10 },
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
        text: '全局调用分布',
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

const columnConfig = {
  data: [
    { API: 'window.open', 调用次数: 800 },
    { API: 'history.back', 调用次数: 600 },
    { API: 'navigator.userAgent', 调用次数: 400 },
    { API: 'location.href', 调用次数: 200 },
    { API: 'window.FTB', 调用次数: 100 },
    { API: 'document.body', 调用次数: 90 },
    { API: 'window.sessionStorage', 调用次数: 80 },
    { API: 'window.localStorage', 调用次数: 70 },
    { API: 'document.cookie', 调用次数: 60 },
    { API: 'document.title', 调用次数: 50 },
    { API: 'document.referrer', 调用次数: 40 },
    { API: 'document.URL', 调用次数: 30 },
    { API: 'document.domain', 调用次数: 20 },
    { API: 'document.lastModified', 调用次数: 10 },
    { API: 'document.getElementById', 调用次数: 10 },
  ],
  height: 228,
  xField: 'API',
  yField: '调用次数',
  axis: {
    x: false
  },
  slider: {
    x: {},
  },
  onReady: (chartsInstance) => {
    // 初始选区范围
    chartsInstance.emit('sliderX:filter', {
      data: { selection: [[0.1, 0.2], undefined] },
    });
  },
};

const CodeArea: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
       {/* <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '30px' }}>Browser API 调用</div> */}
      <Col md={13}>
        <div className={styles.popArea}>
          <span>TOP5占比</span>
          <span className={styles.top5Rate}>{`76.3%`}</span>
        </div>
        <Column {...columnConfig} />
      </Col>
      <Col md={11}>
        {/* <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '30px' }}>Browser API调用分布</div> */}
        <Pie {...Pieconfig} />
      </Col>
    </Row>
  );
};
export default CodeArea;
