import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import type dayjs from 'dayjs';
import type { FC } from 'react';
import { useState } from 'react';
import IntroduceRow from './components/IntroduceRow';
import type { TimeType } from './components/SalesCard';
import SalesCard from './components/SalesCard';
import TopSearch from './components/TopSearch';
import type { AnalysisData } from './data.d';
import { fakeChartData } from './service';
import useStyles from './style.style';
import { getTimeDistance } from './utils/utils';
import DepartmentHeader from '@/components/DepartmentHeader';
type RangePickerValue = RangePickerProps<dayjs.Dayjs>['value'];
type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};
type SalesType = 'all' | 'online' | 'stores';

const Analysis: FC<AnalysisProps> = () => {
  const { styles } = useStyles();
  const [salesType, setSalesType] = useState<SalesType>('all');
  const [currentTabKey, setCurrentTabKey] = useState<string>('');
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    getTimeDistance('year'),
  );
  const { loading, data } = useRequest(fakeChartData);
  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };
  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };
  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as dayjs.Dayjs, 'day') &&
      rangePickerValue[1].isSame(value[1] as dayjs.Dayjs, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  let salesPieData;

  if (salesType === 'all') {
    salesPieData = data?.salesTypeData;
  } else {
    salesPieData = salesType === 'online' ? data?.salesTypeDataOnline : data?.salesTypeDataOffline;
  }

  const handleChangeSalesType = (e: RadioChangeEvent) => {
    setSalesType(e.target.value);
  };

  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      content={<DepartmentHeader/>}
    >
        <Row gutter={24}>
          <Col md={15} >
            <IntroduceRow loading={loading} visitData={data?.visitData || []} />
          </Col>
          <Col md={9} >
            <TopSearch
              loading={loading}
              visitData2={data?.visitData2 || []}
              searchData={data?.searchData || []}
            />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col md={24}>
            <SalesCard
              rangePickerValue={rangePickerValue}
              salesData={data?.salesData || []}
              isActive={isActive}
              handleRangePickerChange={handleRangePickerChange}
              loading={loading}
            selectDate={selectDate}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Analysis;
