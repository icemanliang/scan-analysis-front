import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { AnalysisData, DataItem, RadarData } from './data.d';

// mock data
const esIntroduceData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7.1, 5.6, 4.2, 2.9, 3.8, 4.5, 5.1, 3.7, 3.5, 3.1, 4.2, 2.8, 2.6];
for (let i = 0; i < fakeY.length; i += 1) {
  esIntroduceData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const cssIntroduceData = [];
const fakeY2 = [4.2, 3.9, 3.4, 5.1, 3.5, 4.5, 2.9, 3.2, 3.9, 2.4, 1.3, 2.1, 1.9];
for (let i = 0; i < fakeY2.length; i += 1) {
  cssIntroduceData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const cssClassData = [];
const fakeY3 = [ 80, 60, 78, 76, 68, 75, 64, 46, 53, 43, 27, 30, 32];
for (let i = 0; i < fakeY2.length; i += 1) {
  cssClassData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY3[i],
  });
}

const jsComplexData = [];
const fakeY4 = [4.2, 3.9, 3.4, 5.1, 3.5, 4.5, 2.9, 3.2, 3.9, 2.4, 1.3, 2.4, 2.6];
for (let i = 0; i < fakeY2.length; i += 1) {
  jsComplexData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY4[i],
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
    filePath: 'src/lib/utils/index.js',
    errorsCount: 224,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/lib/utils/dealFunc.js',
    errorsCount: 189,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/components/first/view.jsx',
    errorsCount: 165,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/components/home/view.jsx',
    errorsCount: 123,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/components/main/api/list/view.jsx',
    errorsCount: 98,
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
    errorsCount: 76,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/lib/camal-case-convertor.js',
    errorsCount: 45,
    errorsInfo: [
      {
        rule:'no-unused-vars',
        message:'Declare only one React component per file',
        line: 123
      }
    ]
  },
  {
    filePath: 'src/components/first/reducer.js',
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
    filePath: 'src/pages/log/alarm-list/index.less',
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
    filePath: 'src/components/common/anchor/receive-data/style.less',
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
    filePath: 'src/components/home/detail/style.less',
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
    filePath: 'src/components/main/welcome/list/style.less',
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
    filePath: 'src/component/shift/shift-down/style.css',
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
  esRuleData,
  esErrorsData,
  cssRuleData,
  cssErrorsData,
  esIntroduceData,
  cssIntroduceData,
  cssClassData,
  jsComplexData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_analysis_standard_data': fakeChartData,
};
