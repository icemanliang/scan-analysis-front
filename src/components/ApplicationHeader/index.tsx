import { Select } from 'antd';
import React from 'react';
import useStyles from './style.style';

const ApplicationHeader: React.FC = () => {
  const { styles } = useStyles();
  const appList =[
    { value: '1', label: '基础管理系统' },
    { value: '2', label: '采购协调系统' },
    { value: '3', label: '财务管理平台' },
    { value: '4', label: '配置管理平台' },
    { value: '4', label: '营销管理系统' },
  ];
  const taskList =[
    { value: 1, label: '2025-03-28' },
    { value: 2, label: '2025-03-21' },
    { value: 3, label: '2025-03-14' },
    { value: 4, label: '2025-03-07' },
    { value: 5, label: '2025-02-28' },
    { value: 6, label: '2025-02-21' },
    { value: 7, label: '2025-02-14' },
    { value: 8, label: '2025-02-07' },
    { value: 9, label: '2025-01-31' },
    { value: 10, label: '2025-01-24' },
    { value: 11, label: '2025-01-17' },
    { value: 12, label: '2025-01-10' },
    { value: 13, label: '2025-01-03' }
  ];
  const commitId = '350d298f';
  const owner = 'Icemanliang';

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          应用名称
        </div>
        <div className={styles.contentTitle}>
          <Select
            defaultValue="营销管理系统"
            style={{ width: 200 }}
            // onChange={handleChange}
            options={appList}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          巡检日期
        </div>
        <div>
          <Select
            defaultValue={taskList[0].label}
            style={{ width: 200 }}
            // onChange={handleChange}
            options={taskList}
          />
        </div>
      </div>
      <div className={styles.content} style={{textAlign: 'right', flex: '1'}}>
        <div className={styles.statItem}>
          <div className="title">
            代码版本
          </div>
          <div className="value">{commitId}</div>
        </div>
        <div className={styles.statItem}>
          <div className="title">
            应用负责人
          </div>
          <div className="value">{owner}</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHeader;
