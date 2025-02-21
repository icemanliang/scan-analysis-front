import { GridContent, PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row, Divider } from 'antd';
import type { FC } from 'react';
import { Suspense } from 'react';
import IntroduceRow from './components/IntroduceRow';
import IntroduceCssRow from './components/IntroduceCssRow';
import ProportionSales from './components/ProportionSales';
import TopSearch from './components/TopSearch';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import ApplicationHeader from '@/components/ApplicationHeader';
// import useStyles from './style.style';
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Standard: FC<AnalysisProps> = () => {
  // const { styles } = useStyles();
  const { loading, data } = useRequest(fakeChartData);

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
        <IntroduceRow
          loading={loading}
          visitData={data?.esIntroduceData || []}
          complexData={data?.jsComplexData || []}
        />
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
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ProportionSales
                loading={loading}
                salesPieData={data?.esRuleData || []}
              />
            </Suspense>
          </Col>
        </Row>
        <Divider orientation="center">CSS规范检查</Divider>
        <IntroduceCssRow
          loading={loading}
          visitData={data?.cssIntroduceData || []}
          classData={data?.cssClassData || []}
        />
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
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ProportionSales
                loading={loading}
                salesPieData={data?.cssRuleData || []}
              />
            </Suspense>
          </Col>
        </Row>
      </>
    </GridContent>
    </PageContainer>
  );
};
export default Standard;
