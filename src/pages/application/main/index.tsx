import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Tag } from 'antd';
import { Radar } from '@ant-design/plots';
import React from 'react';
import useStyles from './style.style';

const ConfigAnalysis: React.FC = () => {
  const { styles } = useStyles();

  // 雷达图配置数据
  const radarData = [
    { item: 'nodeVersion', score: 90 },
    { item: 'eslint', score: 85 },
    { item: 'npmrc', score: 70 },
    { item: 'huskyCheck', score: 75 },
    { item: 'commitlint', score: 60 },
    { item: 'packageJson', score: 65 },
    { item: 'prettier', score: 55 },
  ];

  // 工程指标项检查数据
  const checkItems = [
    { name: 'nodeVersion', status: 'success', configStatus: 'success' },
    { name: 'eslint', status: 'success', configStatus: 'success' },
    { name: 'npmrc', status: 'success', configStatus: 'success' },
    { name: 'huskyCheck', status: 'success', configStatus: 'success' },
    { name: 'commitlint', status: 'success', configStatus: 'error' },
    { name: 'packageJson', status: 'success', configStatus: 'error' },
    { name: 'readme', status: 'success', configStatus: 'error' },
    { name: 'prettier', status: 'error', configStatus: 'error' },
  ];

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card title="工程配置分析" bordered={false}>
            <Radar
              data={radarData}
              xField="item"
              yField="score"
              area={{
                style: {
                  fillOpacity: 0.4,
                },
              }}
              axis={{
                grid: {
                  line: {
                    type: 'line',
                    style: {
                      lineDash: [4, 4],
                    },
                  },
                },
              }}
              legend={false}
              height={400}
            />
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Card className={styles.analysisCard}>
                <div className={styles.analysisTitle}>README规范检查</div>
                <div className={styles.analysisNumber}>11</div>
                <div className={styles.analysisDesc}>README不规范</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className={styles.analysisCard}>
                <div className={styles.analysisTitle}>目录层级检查</div>
                <div className={styles.analysisNumber}>6</div>
                <div className={styles.analysisDesc}>最大嵌套层级</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className={styles.analysisCard}>
                <div className={styles.analysisTitle}>命名规范检查</div>
                <div className={styles.analysisNumber}>2</div>
                <div className={styles.analysisDesc}>目录命名不规范</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className={styles.analysisCard}>
                <div className={styles.analysisNumber}>40</div>
                <div className={styles.analysisDesc}>文件命名不规范</div>
              </Card>
            </Col>
          </Row>
          <Card title="工程指标项检查" style={{ marginTop: 24 }}>
            {checkItems.map((item) => (
              <div key={item.name} className={styles.checkItem}>
                <span>{item.name}</span>
                <div>
                  <Tag color={item.status === 'success' ? 'success' : 'error'}>
                    {item.status === 'success' ? '文件存在' : '文件缺失'}
                  </Tag>
                  <Tag color={item.configStatus === 'success' ? 'success' : 'error'}>
                    {item.configStatus === 'success' ? '配置完整' : '配置缺失'}
                  </Tag>
                </div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ConfigAnalysis;
