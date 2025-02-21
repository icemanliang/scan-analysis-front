import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { AnalysisData, DataItem } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [14.2, 16.3, 14.8, 15.2, 13.6, 12.4, 14.1, 11.8, 10.7, 9.8, 8.3, 7.3, 6.5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const getFakeChartData: AnalysisData = {
  visitData,
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_standard_chart_data': fakeChartData,
};
