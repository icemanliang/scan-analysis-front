import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Col, Row, Card, Progress } from 'antd';
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
        <Col md={15}>
          <Card title={'全应用工程合规进度'}>
            <Row>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>PKG配置合规</div>
                <Progress type="circle" percent={65} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>提交信息合规</div>
                <Progress type="circle" percent={72} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Husky配置合规</div>
                <Progress type="circle" percent={90} size={60} style={{ marginTop: '20px' }} />
              </Col>
            </Row>
            <Row style={{ marginTop: '24px' }}>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>包管理器合规</div>
                <Progress type="circle" percent={87} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Npmrc配置合规</div>
                <Progress type="circle" percent={100} size={60} style={{ marginTop: '20px' }} />
              </Col>
              <Col md={8} sm={12} xs={24} style={{ textAlign: 'center' }}>
                <div className={styles.analysisDesc}>Node版本合规</div>
                <Progress type="circle" percent={78} size={60} style={{ marginTop: '20px' }} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={9} >
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col md={24}>
          <SalesCard
            // rangePickerValue={rangePickerValue}
            // salesData={data?.salesData || []}
            // isActive={isActive}
            // handleRangePickerChange={handleRangePickerChange}
            loading={loading}
            // selectDate={selectDate}
        />
        </Col>
      </Row>

    </PageContainer>
  );
};
export default Analysis;
