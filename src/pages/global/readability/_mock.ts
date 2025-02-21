import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { AnalysisData, DataItem } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [17.1, 21.3, 19.2, 18.3, 16.2, 18.2, 14.1, 12.6];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const tsFileData = [];
const fakeTs = [37.1, 35.2, 41.2, 42.3, 46.5, 52.1, 56.2, 59.4, 62.1, 63.4, 65.2, 67.1];
for (let i = 0; i < fakeTs.length; i += 1) {
  tsFileData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeTs[i],
  });
}

const tsTypeData = [];
const fakeType = [374, 451, 412, 376, 341, 274, 351, 206, 175, 195, 162, 134, 102];
for (let i = 0; i < fakeType.length; i += 1) {
  tsTypeData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeType[i],
  });
}

const classData = [];
const fakeClass = [743, 587, 483, 524, 476, 437, 385, 396, 325, 319, 263, 213, 176];
for (let i = 0; i < fakeClass.length; i += 1) {
  classData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeClass[i],
  });
}

const GeneratorData = [];
const fakeGen = [977, 872, 1022, 893, 633, 700, 532, 611, 503, 394, 264, 193, 143];
for (let i = 0; i < fakeGen.length; i += 1) {
  GeneratorData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeGen[i],
  });
}

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  tsFileData,
  tsTypeData,
  classData,
  GeneratorData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_read_chart_data': fakeChartData,
};
