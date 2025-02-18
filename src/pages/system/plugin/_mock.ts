import type { Request, Response } from 'express';
import type { PluginItem } from './data.d';

function fakeList(): PluginItem[] {
  const list = [
    {
      id: 1,
      plugin_name: 'eslint-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: 'ES规范检查插件'
    },
    {
      id: 2,
      plugin_name: 'build-check-plugin',
      plugin_status: 0,
      plugin_config: '{}',
      plugin_desc: '构建产物检查插件'
    },
    {
      id: 3,
      plugin_name: 'stylelint-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: 'CSS规范检查插件'
    },
    {
      id: 4,
      plugin_name: 'count-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: '代码调用分析插件'
    },
    {
      id: 5,
      plugin_name: 'config-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: '工程配置检查插件'
    },
    {
      id: 6,
      plugin_name: 'git-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: 'Git规范检查插件'
    },
    {
      id: 7,
      plugin_name: 'package-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: 'Npm包检查插件'
    },
    {
      id: 8,
      plugin_name: 'redundancy-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: '代码重复检查插件'
    },
    {
      id: 9,
      plugin_name: 'dependency-check-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: '正向/逆向依赖分析插件'
    },
    {
      id: 10,
      plugin_name: 'quality-analysis-plugin',
      plugin_status: 1,
      plugin_config: '{}',
      plugin_desc: '应用研发质量分析插件'
    }
  ];

  return list;
}

function getFakeList(req: Request, res: Response) {
  const result = fakeList();
  return res.json({
    code: 0,
    msg: 'OK',
    data: {
      count: result.length,
      data: result,
    },
  });
}

export default {
  'POST  /api/plugin/list': getFakeList,
};
