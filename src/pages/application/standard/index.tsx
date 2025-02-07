import { EllipsisOutlined } from '@ant-design/icons';
import { GridContent, PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Dropdown, Row, Skeleton, Select, Divider, DatePicker } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import dayjs from 'dayjs';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import IntroduceRow from './components/IntroduceRow';
import IntroduceCssRow from './components/IntroduceCssRow';
import PageLoading from './components/PageLoading';
import ProportionSales from './components/ProportionSales';
import TopSearch from './components/TopSearch';
import type { AnalysisData, CurrentUser } from './data.d';
import { fakeChartData } from './service';
import useStyles from './style.style';
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};
type SalesType = 'all' | 'online' | 'stores';
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

const Analysis: FC<AnalysisProps> = () => {
  const { styles } = useStyles();
  const [salesType, setSalesType] = useState<SalesType>('all');
  const { loading, data } = useRequest(fakeChartData);

  const dropdownGroup = (
    <span className={styles.iconGroup}>
      <Dropdown
        menu={{
          items: [
            {
              key: '1',
              label: '导出数据',
            }
          ],
        }}
        placement="bottomRight"
      >
        <EllipsisOutlined />
      </Dropdown>
    </span>
  );

  const handleChangeSalesType = (e: RadioChangeEvent) => {
    setSalesType(e.target.value);
  };

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '创新运维管理平台',
            userid: '00000001',
            email: 'antdesign@alipay.com',
            signature: '海纳百川，有容乃大',
            title: '应用负责人 : Icemanliang',
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={data?.esIntroduceData || []} />
        </Suspense>
        <Row
          gutter={24}
          style={{
            marginTop: 0,
            marginBottom: 24
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <TopSearch
                loading={loading}
                visitData={data?.esErrorsData || []}
                searchData={[]}
                dropdownGroup={dropdownGroup}
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ProportionSales
                dropdownGroup={dropdownGroup}
                salesType={salesType}
                loading={loading}
                salesPieData={data?.esRuleData || []}
                handleChangeSalesType={handleChangeSalesType}
              />
            </Suspense>
          </Col>
        </Row>
        <Divider orientation="center">CSS规范检查</Divider>
        <Suspense fallback={<PageLoading />}>
          <IntroduceCssRow loading={loading} visitData={data?.cssIntroduceData || []} />
        </Suspense>
        <Row
          gutter={24}
          style={{
            marginTop: 0,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <TopSearch
                loading={loading}
                visitData={data?.cssErrorsData || []}
                searchData={[]}
                dropdownGroup={dropdownGroup}
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ProportionSales
                dropdownGroup={dropdownGroup}
                salesType={salesType}
                loading={loading}
                salesPieData={data?.cssRuleData || []}
                handleChangeSalesType={handleChangeSalesType}
              />
            </Suspense>
          </Col>
        </Row>
      </>
    </GridContent>
    </PageContainer>
  );
};
export default Analysis;
