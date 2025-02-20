import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import RedundancyList from './components/RedundancyList';
import React from 'react';
import useStyles from './style.style';
import ApplicationHeader from '@/components/ApplicationHeader';

const Redundancy: React.FC = () => {
  const { styles } = useStyles();

  const gridStyle: React.CSSProperties = {
    width: '20%',
    textAlign: 'center',
  };

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={
        <ApplicationHeader/>
      }
    >
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>代码扫描文件总数</div>
                  <div className={styles.analysisNumber}>476</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>代码重复片段数目</div>
                  <div className={styles.analysisNumber}>67</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>同片段最高重复频次</div>
                  <div className={styles.analysisNumber}>5</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>代码重复文件波及率</div>
                  <div className={styles.analysisNumber}>21%</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>最高重复片段行数</div>
                  <div className={styles.analysisNumber}>256</div>
                </Card.Grid>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <RedundancyList
                appId={2}
                appInfo={{
                  commitId: '123',
                }}
                data={[]}
                loading={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Redundancy;
