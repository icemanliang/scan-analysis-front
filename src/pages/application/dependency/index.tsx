import { PageContainer } from '@ant-design/pro-components';
import { Dendrogram, G6 } from '@ant-design/graphs';
import { Card, Col, Row, Progress, List, Typography, Tag, Radio } from 'antd';
import { Column } from '@ant-design/plots';
import type { FC } from 'react';
import useStyles from './style.style';
import RiskPackageList from './components/RiskPackageList';
import ApplicationHeader from '@/components/ApplicationHeader';
const { treeToGraphData } = G6;

const pkgData = [
  { pkgName: 'antd', count: 779, isPrivate: false },
  { pkgName: 'lodash', count: 191, isPrivate: false },
  { pkgName: 'react', count: 80, isPrivate: false },
  { pkgName: '@iceman/hooks', count: 32, isPrivate: true },
  { pkgName: 'echarts', count: 18, isPrivate: false },
  { pkgName: 'object-assign', count: 13, isPrivate: false },
  { pkgName: 'jsoneditor', count: 3, isPrivate: false },
  { pkgName: 'js-cookie', count: 2, isPrivate: false },
  { pkgName: 'copy-list', count: 1, isPrivate: false },
];

const internalData = [
  { pkgName: 'src/common/common.less', count: 79, isPrivate: false },
  { pkgName: 'src/components/nav/view.jsx', count: 36, isPrivate: false },
  { pkgName: 'src/components/nav/store.js', count: 21, isPrivate: false },
  { pkgName: 'src/utils/date-helper.js', count: 17, isPrivate: true },
  { pkgName: 'src/utils/form-helper.js', count: 15, isPrivate: false },
  { pkgName: 'src/pages/board/style.less', count: 11, isPrivate: false },
  { pkgName: 'src/pages/manage/store.js', count: 8, isPrivate: false },
  { pkgName: 'src/utils/modal.js', count: 4, isPrivate: false },
  { pkgName: 'src/common/server.js', count: 3, isPrivate: false },
  { pkgName: 'src/common/dictionary.js', count: 2, isPrivate: false },
];
const internalOptions = {
  autoFit: {type: 'view'},
  data: treeToGraphData({
    id: "src",
    children: [
      {
        id: "common",
        children: [
          { id: "common.less (79)" },
          { id: "server.js (2)" },
          { id: "dictionary.js (2)" }
        ]
      },
      {
        id: "components",
        children: [
          {
            id: "nav",
            children: [
              { id: "view.jsx (36)" },
              { id: "store.js (21)" }
            ]
          }
        ]
      },
      {
        id: "pages",
        children: [
          {
            id: "board",
            children: [
              { id: "style.less (11)" },
            ]
          },
          {
            id: "manage",
            children: [
              { id: "store.js (8)" },
            ]
          }
        ]
      },
      {
        id: "utils",
        children: [
          { id: "date-helper.js (17)" },
          { id: "form-helper.js (15)" },
          { id: "modal.js (4)" },
        ]
      }
    ]
  }),
  direction: 'radial',
  compact: true
};

const RoseData = {
  "Button": {
      "count": 125,
      "files": [
          "src/utils/threshold.js",
          "src/pages/nav/store.js",
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/editor/index.jsx",
          "src/public-component/form/form.jsx"
      ]
  },
  "List": {
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
      "count": 92,
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
  "Message": {
      "count": 66,
      "files": [
          "src/public-component/dialog/dialog.jsx",
          "src/public-component/form/form.jsx",
          "src/pages/exception-sql/sql-check/utils.jsx"
      ]
  },
  "Checkbox": {
      "count": 50,
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
      "count": 23,
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
      "count": 9,
      "files": [
          "src/pages/nav/jsx/header.jsx"
      ]
  },
  "Radio": {
      "count": 7,
      "files": [
          "src/pages/capacity-data/push-remind-config/components/columns-cmp.jsx",
          "src/pages/system-manage/job-config/jsx/handle.jsx",
          "src/pages/system-manage/level-manage/jsx/list.jsx",
          "src/pages/system-manage/patrol-config/jsx/handle.jsx"
      ]
  },
  "CardGroup": {
      "count": 4,
      "files": [
          "src/pages/architecture-governace/home/view.jsx"
      ]
  },
  "Card": {
      "count": 3,
      "files": [
          "src/pages/exception-sql/rule/view.jsx",
          "src/pages/exception-sql/overview/components/content.jsx",
          "src/pages/exception-sql/overview/components/header.jsx"
      ]
  },
  "Switch": {
      "count": 2,
      "files": [
          "src/pages/system-manage/json-data-config/page.jsx",
          "src/pages/system-manage/indicator-info-config/jsx/list.jsx",
          "src/pages/system-manage/job-config/jsx/list.jsx",
          "src/pages/system-manage/json-data-config/components/modify-modal.jsx",
          "src/pages/system-manage/patrol-config/jsx/list.jsx"
      ]
  },
  "Select": {
      "count": 2,
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
      "count": 1,
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
      ratio: 0.6,
    },
  },
  style: {
    maxWidth: 30,
  }
};

const Dependency: FC = () => {
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
                      (item) => <List.Item>
                        <Typography.Text>
                          <Tag color={item.isPrivate ? "red" : "blue"} style={{ marginLeft: '5px' }}>{item.isPrivate ? '内部包' : '外部包'}</Tag>
                          <span>{item.pkgName}</span>
                        </Typography.Text>
                        <Typography.Text>
                          <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.45)' }}>{item.count}</span>
                          <span style={{ fontSize: '10px', marginLeft: '5px'}}>次</span>
                        </Typography.Text>
                      </List.Item>
                    }
                  />
                </div>
              </Col>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingLeft: '20px' }}>
                  <div style={{width:'100%', position:'absolute', top: '10px', textAlign:'center', color:'grey'}}>antd 导出 api 被引用次数及分布</div>
                  <div className={styles.popArea}>
                    <div style={{marginBottom:'10px'}}><span style={{fontWeight: 'bold'}}>违规API调用</span></div>
                    <span className={styles.top5Rate}>{'Table : '}</span>
                    <span className={styles.top5Rate} style={{color: '#000'}}>{'23'}</span>
                    <span className={styles.top5Time}>次</span>
                  </div>
                  <Column {...Columnconfig} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={24} sm={24} xs={24}>
          <Card title={'内部高频依赖度文件分布'} style={{ marginTop: '24px' }} extra={
            <Radio.Group value={'10'}>
              <Radio.Button value="10">Top 10</Radio.Button>
              <Radio.Button value="50">Top 50</Radio.Button>
              <Radio.Button value="100">Top 100</Radio.Button>
            </Radio.Group>}>
            <Row>
              <Col md={7} sm={24} xs={24}>
                <div style={{ height: 480, overflow: 'auto', border: '1px solid #e8e8e8', padding: '0px 10px', borderRadius: '4px' }}>
                  <List
                    dataSource={internalData}
                    renderItem={
                      (item) => <List.Item>
                        <Typography.Text>
                          <span>{item.pkgName}</span>
                        </Typography.Text>
                        <Typography.Text>
                          <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.45)' }}>{item.count}</span>
                          <span style={{ fontSize: '10px', marginLeft: '5px'}}>次</span>
                        </Typography.Text>
                      </List.Item>
                    }
                  />
                </div>
              </Col>
              <Col md={17} sm={24} xs={24}>
                <div style={{ paddingLeft: '20px' }}>
                  <Dendrogram {...internalOptions} />
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
