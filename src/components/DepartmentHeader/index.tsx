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

const onChange = (value: Dayjs | null) => {
  console.log(value);
};

const DepartmentHeader: React.FC = () => {
  const { styles } = useStyles();
  const defaultDateValue = dayjs('2025-03-25', 'YYYY/M/DD');
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
          <DatePicker
            defaultValue={defaultDateValue}
            onChange={onChange}
            style={{width: 200}}
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
            style={{width: 260}}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentHeader;
