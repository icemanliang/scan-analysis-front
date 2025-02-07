import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { AnalysisData, DataItem, RadarData } from './data.d';

// mock data
const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  const date = dayjs(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  offlineChartData.push({
    date,
    type: '客流量',
    value: Math.floor(Math.random() * 100) + 10,
  });
  offlineChartData.push({
    date,
    type: '支付笔数',
    value: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key as 'ref'],
        value: item[key as 'ref'],
      });
    }
  });
});

const esIntroduceData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  esIntroduceData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const cssIntroduceData = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  cssIntroduceData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const esRuleData = [
  {
    x: '函数缺少注释',
    y: 344,
  },
  {
    x: '文件命名违规',
    y: 188,
  },
  {
    x: '变量声明未用',
    y: 99,
  },
  {
    x: '函数行超阈值',
    y: 255,
  },
  {
    x: '使用Any类型',
    y: 65,
  },
  {
    x: '其它违规聚合',
    y: 90,
  },
];

const cssRuleData = [
  {
    x: '颜色属性值违规',
    y: 24,
  },
  {
    x: '类名命名违规',
    y: 32,
  },
  {
    x: '属性区域空块',
    y: 31,
  },
  {
    x: '属性书写重复',
    y: 41,
  },
  {
    x: '属性嵌套超阈值',
    y: 12,
  },
  {
    x: '其他违规汇总',
    y: 31,
  },
];

const esErrorsData = [
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/manage-user/edit/data.js',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
];

const cssErrorsData = [
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 65,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 34,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 24,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 20,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 15,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/component/los/handle-board/style.css',
    errorsCount: 12,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  }
];

const getFakeChartData: AnalysisData = {
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  radarData,
  esRuleData,
  esErrorsData,
  cssRuleData,
  cssErrorsData,
  esIntroduceData,
  cssIntroduceData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_analysis_standard_data': fakeChartData,
};
