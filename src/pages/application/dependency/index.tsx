import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Progress, List, Typography } from 'antd';
import { Column } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import RiskPackageList from './components/RiskPackageList';
import ApplicationHeader from '@/components/ApplicationHeader';

const pkgData = [
  { pkgName: 'antd', count: 102 },
  { pkgName: 'lodash', count: 90 },
  { pkgName: 'react', count: 80 },
  { pkgName: 'vue', count: 70 },
  { pkgName: 'angular', count: 60 },
  { pkgName: 'jquery', count: 50 },
  { pkgName: 'bootstrap', count: 40 },
  { pkgName: 'nodejs', count: 30 },
  { pkgName: 'express', count: 20 },
  { pkgName: 'koa', count: 10 },
];

const RoseData = {
  "Message": {
      "count": 125,
      "files": [
          "src/utils/threshold.js",
          "src/pages/nav/store.js",
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/editor/index.jsx",
          "src/public-component/form/form.jsx"
      ]
  },
  "Spin": {
      "count": 113,
      "files": [
          "src/pages/exception-sql/rule/view.jsx",
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/comprehensive/components/system-data/color-block.jsx"
      ]
  },
  "Form": {
      "count": 104,
      "files": [
          "src/pages/board/quality-detail/jsx/header.jsx",
          "src/pages/board/todo-follow/jsx/list.jsx",
          "src/pages/config/daily-archived-data/jsx/handle.jsx"
      ]
  },
  "Grid": {
      "count": 104,
      "files": [
          "src/pages/system-manage/patrol-config/jsx/handle.jsx",
          "src/pages/system-manage/release-detail/jsx/handle.jsx",
          "src/pages/board/comprehensive/components/system-data/color-block.jsx",
          "src/pages/board/comprehensive/components/system-data/index.jsx"
      ]
  },
  "Input": {
      "count": 89,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/exception-sql/exception-list/view.jsx"
      ]
  },
  "Textarea": {
      "count": 78,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/pages/system-manage/dept-config/view.jsx",
          "src/pages/config/cost/jsx/list.jsx",
          "src/pages/config/daily-archived-data/jsx/handle.jsx",
          "src/pages/config/indicator-data-pool/jsx/handle.jsx"
      ]
  },
  "Button": {
      "count": 66,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/exception-sql/sql-check/utils.jsx"
      ]
  },
  "Checkbox": {
      "count": 60,
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
      "count": 40,
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
      "count": 20,
      "files": [
          "src/pages/nav/jsx/header.jsx"
      ]
  },
  "Radio": {
      "count": 10,
      "files": [
          "src/pages/capacity-data/push-remind-config/components/columns-cmp.jsx",
          "src/pages/system-manage/job-config/jsx/handle.jsx",
          "src/pages/system-manage/level-manage/jsx/list.jsx",
          "src/pages/system-manage/patrol-config/jsx/handle.jsx"
      ]
  },
  "CardGroup": {
      "count": 10,
      "files": [
          "src/pages/architecture-governace/home/view.jsx"
      ]
  },
  "Card": {
      "count": 9,
      "files": [
          "src/pages/exception-sql/rule/view.jsx",
          "src/pages/exception-sql/overview/components/content.jsx",
          "src/pages/exception-sql/overview/components/header.jsx"
      ]
  },
  "Switch": {
      "count": 7,
      "files": [
          "src/pages/system-manage/json-data-config/page.jsx",
          "src/pages/system-manage/indicator-info-config/jsx/list.jsx",
          "src/pages/system-manage/job-config/jsx/list.jsx",
          "src/pages/system-manage/json-data-config/components/modify-modal.jsx",
          "src/pages/system-manage/patrol-config/jsx/list.jsx"
      ]
  },
  "Select": {
      "count": 6,
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
      "count": 3,
      "files": [
          "src/pages/board/comprehensive/jsx/content.jsx",
          "src/pages/board/cost/jsx/content.jsx",
          "src/pages/board/project/jsx/content.jsx",
          "src/pages/board/release-statistics/jsx/handle.jsx",
      ]
  },
  "DatePicker": {
      "count": 1,
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
  }
};

const Workplace: FC = () => {
  const { styles } = useStyles();

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={
        <ApplicationHeader/>
      }
    >
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={24}>
            <Col md={8} sm={12} xs={24}>
              <Card>
                <div className={styles.analysisDesc}>依赖包总数</div>
                <div className={styles.analysisNumber}>53</div>
              </Card>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Card>
                <div className={styles.analysisDesc}>相似包数目</div>
                <div className={styles.analysisNumber}>3</div>
              </Card>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Card>
                <div className={styles.analysisDesc}>可升级包数目</div>
                <div className={styles.analysisNumber}>6</div>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col md={24} sm={12} xs={24}>
              <Card size="small" style={{ textAlign: 'center', marginTop: '24px', paddingBottom: '10px' }}>
                <div style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.65)', marginTop: '5px' }}>Antd5 升级进度</div>
                <Progress type="circle" percent={30} size={60} style={{ marginTop: '20px' }} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <RiskPackageList data={[]} />
        </Col>
      </Row>
      <Row>
        <Col md={24} sm={24} xs={24}>
          <Card title={'依赖包引用分析'} style={{ marginTop: '24px' }}>
            <Row>
              <Col md={7} sm={24} xs={24}>
                <div style={{ height: 280, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}>
                  <List
                    dataSource={pkgData}
                    renderItem={
                      (item, index) => <List.Item>
                        <Typography.Text>
                          <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{index + 1}</span>
                          <span style={{ color: index === 0 ? 'red' : '#000', marginLeft: '10px' }}>{item.pkgName}</span>
                        </Typography.Text>
                        <Typography.Text><span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.45)' }}>{item.count}</span></Typography.Text>
                      </List.Item>
                    }
                  />
                </div>
              </Col>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingLeft: '20px' }}>
                  <Column {...Columnconfig} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Workplace;
