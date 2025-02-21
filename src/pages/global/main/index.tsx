import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, DatePicker, Row, List, Typography } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import DepartmentHeader from '@/components/DepartmentHeader';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const pkgData = [
  { pkgName: 'CSS缺陷波及检测', count: '+0.99' },
  { pkgName: 'commit提交合规', count: '+1' },
  { pkgName: 'ES缺陷波及检测', count: '+0.97' },
  { pkgName: '冗余代码影响检测', count: '+0.96' },
  { pkgName: '文件命名缺陷检测', count: '-0.95' },
  { pkgName: '包管理器配置合规', count: '+1' },
  { pkgName: '类组件占比', count: '-0.93' },
  { pkgName: 'Dom API调用收敛', count: '-0.92' },
  { pkgName: 'Generator函数占比', count: '+1.01' }
];

const RoseData = {
  "基础管理系统": {
    "count": 78.21,
  },
  "运营管理系统": {
    "count": 73.45,
  },
  "生产管理系统": {
    "count": 68.12,
  },
  "分发管理系统": {
    "count": 64.98,
  },
  "安全管理系统": {
    "count": 62.29,
  },
  "审核管理系统": {
    "count": 58.34,
  },
  "推荐管理系统": {
    "count": 56.21,
  },
  "搜索管理系统": {
    "count": 54.84,
  },
  "统计管理系统": {
    "count": 40.12,
  },
  "分析管理系统": {
    "count": 38.32,
  },
  "审计管理系统": {
    "count": 36.45,
  },
  "研发管理系统": {
    "count": 34.23,
  },
  "财务管理系统": {
    "count": 32.01,
  },
  "商品管理系统": {
    "count": 30.23,
  },
};

const Columnconfig = {
  height: 280,
  data: Object.entries(RoseData).map(([key, value]) => ({
    api: key,
    callNum: value.count
  })),
  xField: 'api',
  yField: 'callNum',
  label: {
    text: (originData: any) => {
      return originData.callNum;
    },
    textBaseline: 'bottom',
  },
  scrollbar: {
    x: {
      ratio: 0.5,
    },
  },
  style: {
    maxWidth: 30,
  },
  scale: {
    y: {
      type: 'linear',
      tickCount: 10,
      domain: [0, 90],
    }
  }
};

const sizePieconfig = {
  data: [
    { type: '1-10MB', value: 27 },
    { type: '10-30MB', value: 25 },
    { type: '30-50MB', value: 18 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  label: {
    text: ({ type, value }: any) => {
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
        text: '应用体量分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const nodePieconfig = {
  data: [
    { type: 'v22', value: 27 },
    { type: 'v20', value: 25 },
    { type: 'v18', value: 18 },
    { type: 'v16', value: 15 },
    { type: 'v14', value: 10 },
  ],
  height: 228,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  label: {
    text: ({ type, value }: any) => {
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
        text: 'Node版本分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const Main: FC = () => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
      <Row gutter={24}>
        <Col md={4} sm={12} xs={24}>
          <Card>
            <div className={styles.analysisDesc}>桌面应用</div>
            <div className={styles.analysisNumber}>63</div>
          </Card>
          <Card style={{ marginTop: '24px' }}>
            <div className={styles.analysisDesc}>移动应用</div>
            <div className={styles.analysisNumber}>22</div>
          </Card>
        </Col>
        <Col md={10}>
          <Card>
            <Row>
              <Col md={24} sm={24} xs={24}>
                <Pie {...sizePieconfig} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={10} sm={24} xs={24}>
          <Card>
            <Row>
              <Col md={24} sm={24} xs={24}>
                <Pie {...nodePieconfig} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            title={'全应用质量分排名 & 变化明细'}
            extra={<DatePicker.RangePicker
              defaultValue={defaultRangeValue}
              bordered={false}
              size="small"
            />}
          >
            <Row>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingTop: '10px' }}>
                  <Column {...Columnconfig} />
                </div>
              </Col>
              <Col md={7} sm={24} xs={24}>
                <div style={{ fontSize: '14px', marginBottom: '15px', color: 'grey' }}><span style={{ color: '#000', fontWeight: 'bold' }}>基础管理系统</span> 变化明细 :</div>
                <List
                  style={{ height: 250, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}
                  dataSource={pkgData}
                  renderItem={
                    (item) => <List.Item>
                      <Typography.Text><span style={{ color: '#000', marginRight: '10px' }}></span>{item.pkgName}</Typography.Text>
                      <Typography.Text style={{color: item.count.includes('+') ? 'green' : 'red'}}>{item.count}</Typography.Text>
                    </List.Item>
                  }
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

    </PageContainer>
  );
};
export default Main;
