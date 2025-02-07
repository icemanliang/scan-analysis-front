import { Liquid, RadialBar, Tiny} from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Skeleton, Select, DatePicker, Divider } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { FC } from 'react';
import type { CurrentUser } from './data.d';
import useStyles from './style.style';
import Detail from './components/Detail';

dayjs.extend(relativeTime);
const { RangePicker } = DatePicker;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const PageHeaderContent: FC<{
  currentUser: Partial<CurrentUser>;
}> = ({ currentUser }) => {
  const { styles } = useStyles();
  const loading = currentUser && Object.keys(currentUser).length;
  const defaultValue = [dayjs('2025-01-05', 'YYYY/M/DD'), dayjs('2000-03-25', 'YYYY/M/DD')];

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <Select
            defaultValue="创新运维管理平台"
            style={{ width: 260 }}
            onChange={handleChange}
            options={[
              { value: 'iceman', label: '信息开放平台' },
              { value: 'james', label: '创新运维管理平台' },
              { value: 'Yiminghe', label: '配置管理平台' },
              { value: 'disabled', label: '云原生部署平台' },
            ]}
          />
          <div className={styles.contentDateSelect}>
            <RangePicker defaultValue={defaultValue}/>
          </div>
        </div>
        <div style={{color: 'rgba(0,0,0,0.45)'}}>
          {currentUser.title}
        </div>
      </div>
    </div>
  );
};

const ExtraContent: FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.extraContent}>
      <div className={styles.statItem}>
        <div className="title">巡检日期</div>
        <div className="value">2025.3.25</div>
      </div>
      <div className={styles.statItem}>
        <div className="title">代码版本</div>
        <div className="value">dfemd3hw</div>
      </div>
      <div className={styles.statItem}>
        <div className="title">质量排名</div>
        <div className="value">8 / 24</div>
      </div>
    </div>
  );
};

const config = {
  data: [
    {
      year: '依赖治理',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '冗余优化',
      value: 6,
      type: 'Lon',
    },
    {
      year: '工程规范',
      value: 7,
      type: 'Lon',
    },
    {
      year: '调用优化',
      value: 9,
      type: 'Lon',
    },
    {
      year: '代码规范',
      value: 13,
      type: 'Lon',
    },
    {
      year: '依赖治理',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '冗余优化',
      value: 6,
      type: 'Bor',
    },
    {
      year: '工程规范',
      value: 7,
      type: 'Bor',
    },
    {
      year: '调用优化',
      value: 9,
      type: 'Bor',
    },
    {
      year: '代码规范',
      value: 13,
      type: 'Bor',
    },
  ],
  xField: 'year',
  yField: 'value',
  stack: true,
  maxAngle: 270,
  colorField: 'type',
  legend: false,
};

const tinyConfig = {
  data: [
    38, 41, 34, 47, 48, 47, 49, 57, 50, 56, 62, 59, 68, 72, 83, 87, 92, 0
  ].map((value, index) => ({ value, index })),
  width: 480,
  height: 80,
  padding: 12,
  xField: 'index',
  yField: 'value',
  annotations: [
    {
      type: 'lineY',
      data: [70],
      style: { arrow: true, stroke: 'red', lineDash: [2, 2] },
      label: {
        text: '目标分 = 70',
        position: 'left',
        dx: 0,
        style: { textBaseline: 'bottom' },
      },
    },
  ],
};

const Workplace: FC = () => {
  const { styles } = useStyles();

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '吴彦祖',
            userid: '00000001',
            email: 'antdesign@alipay.com',
            signature: '海纳百川，有容乃大',
            title: '应用负责人 : Icemanliang',
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="质量分"
            bodyStyle={{
              textAlign: 'center',
              fontSize: 0,
            }}
            bordered={false}
          >
            <div style={{fontSize: '28px', fontWeight: 'bold'}}>47.7</div>
            {/* <Liquid height={360} percent={0.42} /> */}
            <RadialBar {...config} />
            <div style={{fontSize: '14px', color: 'rgba(0,0,0,0.45)', textAlign: 'center'}}>
              <a href="#">代码规范</a>
              <Divider type="vertical" />
              <a href="#">工程规范</a>
            </div>
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card title="分值走势" bordered={false}>
            <Tiny.Column {...tinyConfig} />
          </Card>
          <Card title="指标明细" bordered={false} style={{marginTop: '16px', padding: '0px'}}>
            <Detail />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Workplace;
