import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row, Card, Progress } from 'antd';
import type { FC } from 'react';
import IntroduceRow from './components/IntroduceRow';
import SalesCard from './components/SalesCard';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import useStyles from './style.style';
import DepartmentHeader from '@/components/DepartmentHeader';
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Standard: FC<AnalysisProps> = () => {
  const { styles } = useStyles();
  const { loading, data } = useRequest(fakeChartData);

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
      <Row gutter={24}>
        <Col md={15}>
          <Card title={'全应用工程合规进度'}>
            <Row>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>PKG配置合规</div>
                <Progress type="circle" percent={65} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>提交信息合规</div>
                <Progress type="circle" percent={72} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Husky配置合规</div>
                <Progress type="circle" percent={90} size={60} style={{ marginTop: '20px' }} />
              </Col>
            </Row>
            <Row style={{ margin: '26px 0px' }}>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>包管理器合规</div>
                <Progress type="circle" percent={87} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Npmrc配置合规</div>
                <Progress type="circle" percent={100} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Node版本合规</div>
                <Progress type="circle" percent={78} size={60} style={{ marginTop: '20px' }} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={9} >
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col md={24}>
          <SalesCard
            loading={loading}
          />
        </Col>
      </Row>

    </PageContainer>
  );
};
export default Standard;
