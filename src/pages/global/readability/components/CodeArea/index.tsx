import React from 'react';
import { Col, Row } from 'antd';
import { Pie, Column } from '@ant-design/plots';
import useStyles from './index.style';

const Pieconfig = {
  data: [
    { type: '全局调用', value: 27 },
    { type: 'DOM操作', value: 35 },
    { type: 'History操作', value: 18 },
    { type: 'Location操作', value: 15 },
    { type: '事件监听', value: 10 },
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
        text: '调用分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

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
      <Col md={13}>
        <div className={styles.popArea}>
          <span>TOP5占比</span>
          <span className={styles.top5Rate}>{`76.3%`}</span>
        </div>
        <Column {...columnConfig} />
      </Col>
      <Col md={11}>
        <Pie {...Pieconfig} />
      </Col>
    </Row>
  );
};
export default CodeArea;
