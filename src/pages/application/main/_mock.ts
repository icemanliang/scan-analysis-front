import type { Request, Response } from 'express';
import type { AppResult, AppTrend } from './data.d';

const getAppResult = (req: Request, res: Response) => {
  const data: AppResult = JSON.parse('{"baseInfo":{"commitId":"18af681e","owner":"bob"},"qualityInfo":{"qualityScore":{"eslintAvgIssues":{"score":8.81,"maxScore":16},"eslintFileRatio":{"score":0.76,"maxScore":4},"stylelintAvgErrors":{"score":3.5,"maxScore":4},"stylelintFileRatio":{"score":1.67,"maxScore":2},"maxDuplicateLines":{"score":4,"maxScore":4},"duplicateFilesRatio":{"score":2.94,"maxScore":3},"duplicateItemsRatio":{"score":2.93,"maxScore":3},"nodeVersion":{"score":0,"maxScore":2},"commitMessage":{"score":0,"maxScore":1},"huskyCheck":{"score":0,"maxScore":1},"directoryDepth":{"score":0,"maxScore":2},"deepDirectories":{"score":1.8,"maxScore":2},"readmeConfig":{"score":0,"maxScore":2},"packageJsonConfig":{"score":0,"maxScore":1},"npmrcConfig":{"score":0,"maxScore":1},"nodeVersionConfig":{"score":0,"maxScore":1},"configErrors":{"score":1.04,"maxScore":8},"packageManager":{"score":0,"maxScore":1},"generatorFunctions":{"score":1,"maxScore":1},"classComponents":{"score":3,"maxScore":3},"tFunctionCalls":{"score":4,"maxScore":4},"missingTypes":{"score":3,"maxScore":3},"typeScriptUsage":{"score":0,"maxScore":3},"invalidNames":{"score":0,"maxScore":3},"bomApiAvgCount":{"score":2.49,"maxScore":3},"domApiAvgCount":{"score":4,"maxScore":4},"similarPackages":{"score":1,"maxScore":1},"riskPackages":{"score":3,"maxScore":3},"updatePackages":{"score":0,"maxScore":2},"blackImport":{"score":2,"maxScore":2},"total":50.94,"maxScore":90}}}')
  // 返回请求
  return res.json({
    code: 0,
    msg: 'OK',
    data: data,
  });
};

const getAppTrend = (req: Request, res: Response) => {
  const data: AppTrend = JSON.parse('[{"date":"1739956260419","info":{"qualityInfo":{"qualityScore":{"eslintAvgIssues":{"score":3.73,"maxScore":16},"eslintFileRatio":{"score":0,"maxScore":4},"stylelintAvgErrors":{"score":0,"maxScore":4},"stylelintFileRatio":{"score":1.18,"maxScore":2},"maxDuplicateLines":{"score":4,"maxScore":4},"duplicateFilesRatio":{"score":2,"maxScore":3},"duplicateItemsRatio":{"score":0,"maxScore":3},"nodeVersion":{"score":0,"maxScore":2},"commitMessage":{"score":0,"maxScore":1},"huskyCheck":{"score":0,"maxScore":1},"directoryDepth":{"score":2,"maxScore":2},"deepDirectories":{"score":2,"maxScore":2},"readmeConfig":{"score":0,"maxScore":2},"packageJsonConfig":{"score":0,"maxScore":1},"npmrcConfig":{"score":0,"maxScore":1},"nodeVersionConfig":{"score":0,"maxScore":1},"configErrors":{"score":0,"maxScore":8},"packageManager":{"score":0,"maxScore":1},"generatorFunctions":{"score":1,"maxScore":1},"classComponents":{"score":3,"maxScore":3},"tFunctionCalls":{"score":4,"maxScore":4},"missingTypes":{"score":3,"maxScore":3},"typeScriptUsage":{"score":0,"maxScore":3},"invalidNames":{"score":3,"maxScore":3},"bomApiAvgCount":{"score":0,"maxScore":3},"domApiAvgCount":{"score":0,"maxScore":4},"similarPackages":{"score":1,"maxScore":1},"riskPackages":{"score":3,"maxScore":3},"updatePackages":{"score":2,"maxScore":2},"blackImport":{"score":2,"maxScore":2},"total":36.91,"maxScore":90}}}},{"date":"1739986260419","info":{"qualityInfo":{"qualityScore":{"eslintAvgIssues":{"score":3.73,"maxScore":16},"eslintFileRatio":{"score":0,"maxScore":4},"stylelintAvgErrors":{"score":0,"maxScore":4},"stylelintFileRatio":{"score":1.18,"maxScore":2},"maxDuplicateLines":{"score":4,"maxScore":4},"duplicateFilesRatio":{"score":2,"maxScore":3},"duplicateItemsRatio":{"score":0,"maxScore":3},"nodeVersion":{"score":0,"maxScore":2},"commitMessage":{"score":0,"maxScore":1},"huskyCheck":{"score":0,"maxScore":1},"directoryDepth":{"score":2,"maxScore":2},"deepDirectories":{"score":2,"maxScore":2},"readmeConfig":{"score":0,"maxScore":2},"packageJsonConfig":{"score":0,"maxScore":1},"npmrcConfig":{"score":0,"maxScore":1},"nodeVersionConfig":{"score":0,"maxScore":1},"configErrors":{"score":0,"maxScore":8},"packageManager":{"score":0,"maxScore":1},"generatorFunctions":{"score":1,"maxScore":1},"classComponents":{"score":3,"maxScore":3},"tFunctionCalls":{"score":4,"maxScore":4},"missingTypes":{"score":3,"maxScore":3},"typeScriptUsage":{"score":0,"maxScore":3},"invalidNames":{"score":3,"maxScore":3},"bomApiAvgCount":{"score":0,"maxScore":3},"domApiAvgCount":{"score":0,"maxScore":4},"similarPackages":{"score":1,"maxScore":1},"riskPackages":{"score":3,"maxScore":3},"updatePackages":{"score":2,"maxScore":2},"blackImport":{"score":2,"maxScore":2},"total":36.91,"maxScore":90}}}}]')
  // 返回请求
  return res.json({
    code:0,
    msg:'OK',
    data: data,
  });
};

export default {
  'POST  /api/result/app': getAppResult,
  'POST  /api/result/app-trend': getAppTrend,
};

