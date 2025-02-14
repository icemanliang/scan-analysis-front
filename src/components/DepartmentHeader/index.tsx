import { Select, DatePicker } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useStyles from './style.style';
import type { Dayjs } from 'dayjs';
dayjs.extend(relativeTime);

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const DepartmentHeader: React.FC = () => {
  const { styles } = useStyles();
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          部门名称
        </div>
        <div className={styles.contentTitle}>
          <Select
            defaultValue="全部应用"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: 'iceman', label: '全部应用' },
              { value: 'james', label: '市场研究部' },
              { value: 'Yiminghe', label: '财务精算部' },
              { value: 'disabled', label: '游戏运营部' },
            ]}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          巡检日期
        </div>
        <div>
          <Select
            defaultValue="2025-03-28"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: '2025-03-28', label: '2025-03-28' },
              { value: '2025-03-21', label: '2025-03-21' },
              { value: '2025-03-14', label: '2025-03-14' },
              { value: '2025-03-07', label: '2025-03-07' },
              { value: '2025-02-28', label: '2025-02-28' },
              { value: '2025-02-21', label: '2025-02-21' },
              { value: '2025-02-14', label: '2025-02-14' },
              { value: '2025-02-07', label: '2025-02-07' },
              { value: '2025-01-31', label: '2025-01-31' },
              { value: '2025-01-24', label: '2025-01-24' },
              { value: '2025-01-17', label: '2025-01-17' },
              { value: '2025-01-10', label: '2025-01-10' },
              { value: '2025-01-03', label: '2025-01-03' }
            ]}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          分析周期
        </div>
        <div>
          <DatePicker.RangePicker
            defaultValue={defaultRangeValue}
            style={{width: 250}}
          />
        </div>
      </div>
      <div className={styles.content} style={{textAlign: 'right', flex: '1'}}>
        <div className={styles.statItem}>
          <div className="title">
            应用总数
          </div>
          <div className="value">85</div>
        </div>
        <div className={styles.statItem}>
          <div className="title">
            技术经理
          </div>
          <div className="value">Iceman</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHeader;
