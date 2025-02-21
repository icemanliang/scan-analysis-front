import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row } from 'antd';
import type { FC } from 'react';
import IntroduceRow from './components/IntroduceRow';
import SalesCard from './components/SalesCard';
import TopSearch from './components/TopSearch';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import DepartmentHeader from '@/components/DepartmentHeader';

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Readability: FC<AnalysisProps> = () => {
  const { loading, data } = useRequest(fakeChartData);

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
        <Row gutter={24}>
          <Col md={16} >
            <IntroduceRow
              loading={loading}
              visitData={data?.visitData || []}
              tsFileData={data?.tsFileData || []}
              tsTypeData={data?.tsTypeData || []}
              classData={data?.classData || []}
              GeneratorData={data?.GeneratorData || []}
            />
          </Col>
          <Col md={8} >
            <TopSearch
              loading={loading}
              visitData2={data?.visitData2 || []}
            />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col md={24}>
            <SalesCard
              loading={loading}
            />
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Readability;
