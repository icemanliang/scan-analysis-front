import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, List, Typography } from 'antd';
import CallList from './components/CallList';
import React from 'react';
import useStyles from './style.style';
import ApplicationHeader from '@/components/ApplicationHeader';

const BrowserApiData = {
  "history.push": [
    {
        "line": 148,
        "file": "src/pages/nav/store.js"
    },
    {
        "line": 186,
        "file": "src/pages/nav/store.js"
    },
    {
        "line": 101,
        "file": "src/pages/nav/view.jsx"
    },
    {
        "line": 24,
        "file": "src/pages/excepql/list/components/content.jsx"
    }
  ],
  "window.crypto": [
    {
        "line": 9,
        "file": "src/pages/system-manage/basic/helpers/index.js"
    },
    {
        "line": 9,
        "file": "src/pages/system-manage/basic/helpers/index.js"
    },
    {
        "line": 10,
        "file": "src/pages/system-manage/basic/helpers/index.js"
    }
  ],
  "document.getElementById": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "window.onhashchange": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "window.removeEventListener": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "document.querySelectorAll": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "document.exitFullscreen": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "document.body": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "document.documentElement": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
  "document.querySelector": [
    {
        "line": 63,
        "file": "src/entry.jsx"
    },
    {
        "line": 36,
        "file": "src/public-component/message/count-down.jsx"
    }
  ],
};

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
              <List
                dataSource={Object.keys(BrowserApiData).map((key) => ({
                  filePath: key,
                  count: BrowserApiData[key].length,
                }))}
                style={{ height: 370, overflow: 'auto' }}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text>{item.filePath}</Typography.Text>
                    <Typography.Text>{item.count}</Typography.Text>
                  </List.Item>
                )}
              />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ConfigAnalysis;
