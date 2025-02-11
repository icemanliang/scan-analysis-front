import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Tag } from 'antd';
import { Radar } from '@ant-design/plots';
import React from 'react';
import useStyles from './style.style';
import ApplicationHeader from '@/components/ApplicationHeader';
 /**
   * git文件总览数据
   */
const fileStatsDataDeal = (fileStats: Record<string, any>) => {
  const fileList = Object.entries(fileStats || {}).map(([fileType, info]) => {
    const { count = 0, totalSize: size = 0 } = (info || {}) as Record<string, any>;
    return {
      fileType,
      count,
      size,
    };
  });

  const fileGroupList: Record<string, any>[] = [];
  fileList.forEach((file) => {
    let groupType = 'OTHERS';
    if (['.js', '.jsx'].includes(file.fileType)) {
      groupType = 'JS/JSX';
    } else if (['.ts', '.tsx'].includes(file.fileType)) {
      groupType = 'TS/TSX';
    } else if (['.css', '.less', '.sass'].includes(file.fileType)) {
      groupType = 'CSS/LESS/SASS';
    }
    const groupIndex = fileGroupList.findIndex((n) => n.groupType === groupType);
    // others 组
    if (groupType === 'OTHERS') {
      if (groupIndex === -1) {
        fileGroupList.push({ groupType, sort: -1, list: [file] });
      } else {
        const { groupType, list } = fileGroupList[groupIndex];
        fileGroupList[groupIndex] = {
          groupType,
          sort: -1,
          list: [
            {
              count: list[0].count + file.count,
              size: list[0].size + file.size,
            },
          ],
        };
      }
    } else {
      const sizeLen = Math.min(Math.floor(`${file.size}`.length / 3), 3);
      const sizeUnit = sizeLen > 1 ? (sizeLen > 2 ? 'GB' : 'MB') : 'KB';
      const formatFile = {
        ...file,
        size: (file.size / Math.pow(1024, sizeLen)).toFixed(2),
        unit: sizeUnit,
      };
      if (groupIndex === -1) {
        fileGroupList.push({
          groupType,
          sort: 0,
          list: [formatFile],
        });
      } else {
        fileGroupList[groupIndex].list.push(formatFile);
      }
    }
  });

  // 额外处理OTHERS组，对总文件size进行单位换算
  const groupIndex = fileGroupList.findIndex((n) => n.groupType === 'OTHERS');
  if (groupIndex !== -1) {
    const othersFile = fileGroupList[groupIndex].list[0];
    const sizeLen = Math.min(Math.floor(`${othersFile.size}`.length / 3), 3);
    const sizeUnit = sizeLen > 1 ? (sizeLen > 2 ? 'GB' : 'MB') : 'KB';
    fileGroupList[groupIndex].list[0] = {
      ...othersFile,
      size: (othersFile.size / Math.pow(1024, sizeLen)).toFixed(2),
      unit: sizeUnit,
    };
  }

  return fileGroupList.sort((a, b) => {
    return b.sort - a.sort;
  });
};

const ConfigAnalysis: React.FC = () => {
  const { styles } = useStyles();

  const gitFileStatsData = {
    ".svg": {
        "count": 1,
        "totalSize": 49668
    },
    ".css": {
        "count": 37,
        "totalSize": 33526
    },
    ".json": {
        "count": 54,
        "totalSize": 2978
    },
    ".png": {
        "count": 2,
        "totalSize": 168662
    },
    ".js": {
        "count": 228,
        "totalSize": 769988
    },
    ".jsx": {
        "count": 248,
        "totalSize": 1605148
    },
    ".less": {
        "count": 34,
        totalSize: 95555,
    },
  };

  // 雷达图配置数据
  const radarConfig = {
    data: [
      { item: 'nodeVersion', score: 90 },
      { item: 'eslint', score: 85 },
      { item: 'npmrc', score: 70 },
      { item: 'huskyCheck', score: 75 },
      { item: 'commitlint', score: 60 },
      { item: 'packageJson', score: 65 },
      { item: 'prettier', score: 55 },
    ],
    xField: "item",
    yField: "score",
    area: {
      style: {
        fillOpacity: 0.2,
      },
    },
    scale: {
      x: {
        padding: 0.5,
        align: 0,
      },
      y: {
        nice: true,
      },
    },
    axis: {
      x: {
        title: false,
        grid: true,
      },
      y: {
        gridAreaFill: 'rgba(0, 0, 0, 0.04)',
        label: false,
        title: false,
      },
    },
    legend: false,
    height: 400
  };

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

  const gridStyle: React.CSSProperties = {
    width: '33.33%',
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
        <Card>
              <div className={styles.gitFileStats}>
              {fileStatsDataDeal(gitFileStatsData).map(({ groupType, list }) => {
                return (
                  <div className={styles.gitFileGroup} key={groupType}>
                    {groupType === 'OTHERS' && (
                      <div className={styles.gitFileGroupType}>{'others'}</div>
                    )}
                    <div className={styles.gitFileGroupContent}>
                      {(list as Record<string, any>[]).map(({ fileType, count, size, unit }) => {
                        return (
                          <div className={styles.gitFile} key={fileType}>
                            {groupType !== 'OTHERS' && (
                              <div className={styles.gitFileType}>{fileType}</div>
                            )}
                            <div className={styles.gitFileCount}>
                              {count}<span className={styles.gitFileCountUnit}>个</span>
                            </div>
                            <div className={styles.gitFileTotal}>
                              <div>{'总大小：'}</div>
                              <div
                                className={styles.tips}
                              >{`${size} ${unit}`}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
                })}
              </div>
            </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card title="工程配置检查" bordered={false} style={{ marginTop: 24 }}>
            <Radar {...radarConfig}/>
          </Card>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card style={{ marginTop: 24 }}>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>提交信息违规</div>
                  <div className={styles.analysisNumber}>5</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>文件命名违规</div>
                  <div className={styles.analysisNumber}>2</div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className={styles.analysisDesc}>应用目录深度</div>
                  <div className={styles.analysisNumber}>6</div>
                </Card.Grid>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Card style={{ marginTop: '24px'}}>
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
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ConfigAnalysis;
