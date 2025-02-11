import { Skeleton, Select, DatePicker } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useStyles from './style.style';
import type { Dayjs } from 'dayjs';
dayjs.extend(relativeTime);

const currentUser= {
  name: '应用负责人 : Icemanliang',
};


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onChange = (value: Dayjs | null) => {
  console.log(value);
};

const ApplicationHeader: React.FC = () => {
  const { styles } = useStyles();
  const loading = currentUser && Object.keys(currentUser).length;
  const defaultDateValue = dayjs('2025-03-25', 'YYYY/M/DD');
  const defaultRangeValue: [Dayjs, Dayjs] = [dayjs('2025-01-01', 'YYYY/M/DD'), dayjs('2025-03-31', 'YYYY/M/DD')];

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.content}>
        <div style={{color: 'rgba(0,0,0,0.45)', marginBottom: '6px'}}>
          应用名称
        </div>
        <div className={styles.contentTitle}>
          <Select
            defaultValue="创新运维管理平台"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: 'iceman', label: '信息开放平台' },
              { value: 'james', label: '创新运维管理平台' },
              { value: 'Yiminghe', label: '配置管理平台' },
              { value: 'disabled', label: '云原生部署平台' },
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
      <div className={styles.content} style={{textAlign: 'right', flex: '1'}}>
        <div className={styles.statItem}>
          <div className="title">
            代码版本
          </div>
          <div className="value">350d298f</div>
        </div>
        <div className={styles.statItem}>
          <div className="title">
            团队排名
          </div>
          <div className="value">8 / 24</div>
        </div>
        <div className={styles.statItem}>
          <div className="title">
            应用负责人
          </div>
          <div className="value">Iceman</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHeader;
