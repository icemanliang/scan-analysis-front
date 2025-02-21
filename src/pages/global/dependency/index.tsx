import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, List, Typography, Tag, Progress } from 'antd';
import { Column, Pie } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import DepartmentHeader from '@/components/DepartmentHeader';

const pkgData = [
  { pkgName: 'antd', count: 4712, isPrivate: false },
  { pkgName: 'lodash', count: 1190, isPrivate: false },
  { pkgName: 'react', count: 880, isPrivate: false },
  { pkgName: '@iceman/hooks', count: 570, isPrivate: true},
  { pkgName: 'moment', count: 440, isPrivate: false },
  { pkgName: '@iceman/store', count: 230, isPrivate: true },
  { pkgName: 'xlsx', count: 20, isPrivate: false },
  { pkgName: 'redux', count: 10, isPrivate: false },
];

const versionData = [
  { pkgName: 'antd', count: 65, isPrivate: false },
  { pkgName: 'react', count: 44, isPrivate: false },
  { pkgName: 'react-dom', count: 44, isPrivate: false },
  { pkgName: '@iceman/store', count: 35, isPrivate: true},
  { pkgName: '@iceman/i18n', count: 32, isPrivate: true },
  { pkgName: 'classnames', count: 26, isPrivate: false },
  { pkgName: 'typescript', count: 20, isPrivate: false },
  { pkgName: 'query-string', count: 12, isPrivate: false },
];

const RoseData = {
  "Button": {
      "count": 1235,
      "files": [
          "src/utils/threshold.js",
          "src/pages/nav/store.js",
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/editor/index.jsx",
          "src/public-component/form/form.jsx"
      ]
  },
  "List": {
      "count": 893,
      "files": [
          "src/pages/exception-sql/rule/view.jsx",
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/comprehensive/components/system-data/color-block.jsx"
      ]
  },
  "Form": {
      "count": 404,
      "files": [
          "src/pages/board/quality-detail/jsx/header.jsx",
          "src/pages/board/todo-follow/jsx/list.jsx",
          "src/pages/config/daily-archived-data/jsx/handle.jsx"
      ]
  },
  "Grid": {
      "count": 348,
      "files": [
          "src/pages/system-manage/patrol-config/jsx/handle.jsx",
          "src/pages/system-manage/release-detail/jsx/handle.jsx",
          "src/pages/board/comprehensive/components/system-data/color-block.jsx",
          "src/pages/board/comprehensive/components/system-data/index.jsx"
      ]
  },
  "Input": {
      "count": 319,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/exception-sql/exception-list/view.jsx"
      ]
  },
  "Textarea": {
      "count": 278,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/pages/system-manage/dept-config/view.jsx",
          "src/pages/config/cost/jsx/list.jsx",
          "src/pages/config/daily-archived-data/jsx/handle.jsx",
          "src/pages/config/indicator-data-pool/jsx/handle.jsx"
      ]
  },
  "Message": {
      "count": 266,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/exception-sql/sql-check/utils.jsx"
      ]
  },
  "Checkbox": {
      "count": 260,
      "files": [
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/quality/components/accidentTrendECharts.jsx",
          "src/pages/board/release-statistics/components/releaseDataEcharts.jsx",
          "src/pages/capacity-data/effect-of-daily/jsx/header.jsx",
          "src/pages/capacity-data/member-info/jsx/header.jsx",
          "src/pages/capacity-data/resource-distribution/jsx/header.jsx",
          "src/pages/config/rt/jsx/header.jsx"
      ]
  },
  "Table": {
      "count": 140,
      "files": [
          "src/public-component/table/table.jsx",
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/cost/jsx/content.jsx",
          "src/pages/board/project/jsx/content.jsx",
          "src/pages/board/security/jsx/content.jsx",
          "src/pages/board/stability/jsx/content.jsx"
      ]
  },
  "Breadcrumb": {
      "count": 120,
      "files": [
          "src/pages/nav/jsx/header.jsx"
      ]
  },
  "Radio": {
      "count": 103,
      "files": [
          "src/pages/capacity-data/push-remind-config/components/columns-cmp.jsx",
          "src/pages/system-manage/job-config/jsx/handle.jsx",
          "src/pages/system-manage/level-manage/jsx/list.jsx",
          "src/pages/system-manage/patrol-config/jsx/handle.jsx"
      ]
  },
  "CardGroup": {
      "count": 78,
      "files": [
          "src/pages/architecture-governace/home/view.jsx"
      ]
  },
  "Card": {
      "count": 49,
      "files": [
          "src/pages/exception-sql/rule/view.jsx",
          "src/pages/exception-sql/overview/components/content.jsx",
          "src/pages/exception-sql/overview/components/header.jsx"
      ]
  },
  "Switch": {
      "count": 57,
      "files": [
          "src/pages/system-manage/json-data-config/page.jsx",
          "src/pages/system-manage/indicator-info-config/jsx/list.jsx",
          "src/pages/system-manage/job-config/jsx/list.jsx",
          "src/pages/system-manage/json-data-config/components/modify-modal.jsx",
          "src/pages/system-manage/patrol-config/jsx/list.jsx"
      ]
  },
  "Select": {
      "count": 26,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/architecture-governace/tp90/view.jsx",
          "src/pages/exception-sql/system-count/view.jsx",
          "src/pages/system-manage/dept-config/view.jsx",
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/comprehensive/jsx/header.jsx",
          "src/pages/board/cost/jsx/header.jsx",
          "src/pages/board/project/jsx/content.jsx",
          "src/pages/board/project/jsx/header.jsx",
          "src/pages/board/quality/jsx/header.jsx",
      ]
  },
  "Tabs": {
      "count": 23,
      "files": [
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/cost/jsx/content.jsx",
          "src/pages/board/project/jsx/content.jsx",
          "src/pages/board/release-statistics/jsx/handle.jsx",
      ]
  },
  "DatePicker": {
      "count": 11,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/architecture-governace/tp90/view.jsx",
          "src/pages/exception-sql/sql-check/view.jsx",
          "src/pages/exception-sql/system-count/view.jsx",
      ]
  },
};

const Columnconfig = {
  height: 295,
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
  }
};

const Pieconfig = {
  data: [
    { type: '18.3.1', value: 6 },
    { type: '18.2.0', value: 7 },
    { type: '17.0.2', value: 12 },
    { type: '17.0.1', value: 15 },
    { type: '16.8.6', value: 10 },
    { type: '16.8.4', value: 15 }
  ],
  height: 320,
  angleField: 'value',
  colorField: 'type',
  innerRadius: 0.6,
  label: {
    text: 'value',
    style: {
      fontWeight: 'bold',
    },
  },
  legend: {
    color: {
      title: false,
      position: 'right',
      rowPadding: 5,
    },
  },
  annotations: [
    {
      type: 'text',
      style: {
        text: 'antd 版本分布',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'bold',
      },
    },
  ],
};

const Dependency: FC = () => {
  const { styles } = useStyles();

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
      <Row gutter={24}>
        <Col md={6} sm={12} xs={24}>
          <Card>
            <div className={styles.analysisDesc}>依赖包总数</div>
            <div className={styles.analysisNumber}>123</div>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={24}>
          <Card>
            <div className={styles.analysisDesc}>内部包总数</div>
            <div className={styles.analysisNumber}>25</div>
          </Card>
        </Col>
        <Col md={6} sm={12} xs={24}>
          <Card style={{ textAlign: 'center' }}>
            <div className={styles.analysisDesc}>长尾依赖收敛进度</div>
            <Progress type="circle" percent={65} size={60} style={{ marginTop: '20px' }} />
          </Card>
        </Col>
        <Col md={6} sm={12} xs={24}>
          <Card style={{ textAlign: 'center' }}>
            <div className={styles.analysisDesc}>Antd5 全局升级进度</div>
            <Progress type="circle" percent={32} size={60} style={{ marginTop: '20px' }} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card title={'依赖包导出被引用分析'} style={{ marginTop: '24px' }}>
            <Row>
              <Col md={7} sm={24} xs={24}>
                <div style={{ height: 282, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}>
                  <List
                    dataSource={pkgData}
                    renderItem={
                      (item) => <List.Item>
                        <Typography.Text>
                        <Tag color={item.isPrivate ? "red" : "blue"} style={{ marginLeft: '5px' }}>{item.isPrivate ? '内部包' : '外部包'}</Tag><span style={{ marginLeft: '5px' }}>{item.pkgName}</span></Typography.Text>
                        <Typography.Text>
                          <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.45)' }}>{item.count}</span>
                          <span style={{ marginLeft: '5px', fontSize: '10px'}}>次</span>
                        </Typography.Text>
                      </List.Item>
                    }
                  />
                </div>
              </Col>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingLeft: '20px' }}>
                <div style={{width:'100%', position:'absolute', top: '10px', textAlign:'center', color:'grey'}}>antd 导出 api 被引用次数及分布</div>
                  <Column {...Columnconfig} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={24} sm={24} xs={24}>
          <Card title={'依赖包版本碎片化分析'} style={{ marginTop: '24px' }}>
            <Row>
              <Col md={7} sm={24} xs={24}>
                <div style={{ height: 280, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}>
                  <List
                    dataSource={versionData}
                    renderItem={
                      (item) => <List.Item>
                        <Typography.Text>
                        <Tag color={item.isPrivate ? "red" : "blue"} style={{ marginLeft: '5px' }}>{item.isPrivate ? '内部包' : '外部包'}</Tag><span style={{ marginLeft: '5px' }}>{item.pkgName}</span></Typography.Text>
                        <Typography.Text>
                          <span style={{fontSize:'11px'}}>依赖度：</span>
                          <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.45)' }}>{item.count}</span>
                        </Typography.Text>
                      </List.Item>
                    }
                  />
                </div>
              </Col>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingLeft: '20px' }}>
                  <Pie {...Pieconfig} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Dependency;
