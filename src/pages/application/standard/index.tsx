import { EllipsisOutlined } from '@ant-design/icons';
import { GridContent, PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Dropdown, Row, Divider } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import type { FC } from 'react';
import { Suspense, useState } from 'react';
import IntroduceRow from './components/IntroduceRow';
import IntroduceCssRow from './components/IntroduceCssRow';
import PageLoading from './components/PageLoading';
import ProportionSales from './components/ProportionSales';
import TopSearch from './components/TopSearch';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import ApplicationHeader from '@/components/ApplicationHeader';
import useStyles from './style.style';
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};
type SalesType = 'all' | 'online' | 'stores';

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
        <ApplicationHeader/>
      }
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
