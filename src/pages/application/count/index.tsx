import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import CallList from './components/CallList';
import React from 'react';
import useStyles from './style.style';

const ConfigAnalysis: React.FC = () => {
  const { styles } = useStyles();

  const gridStyle: React.CSSProperties = {
    width: '20%',
    textAlign: 'center',
  };

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      >
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card style={{ marginTop: 24 }}>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>缺失类型定义TS函数总数</div>
                  <div className={styles.analysisNumber}>5</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>Class类组件声明存量</div>
                  <div className={styles.analysisNumber}>6</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>GENERATOR函数存量</div>
                  <div className={styles.analysisNumber}>6</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>Dom Api调用总数</div>
                  <div className={styles.analysisNumber}>16</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>Bom Api调用总数</div>
                  <div className={styles.analysisNumber}>3</div>
                </Card.Grid>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={14} lg={24} md={24} sm={24} xs={24}>
              <CallList />
            </Col>
            <Col xl={10} lg={24} md={24} sm={24} xs={24}>
              <Card title="BrowserApi分析" style={{ marginTop: 24 }}>
                <div className={styles.analysisDesc}>提交信息违规</div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ConfigAnalysis;
