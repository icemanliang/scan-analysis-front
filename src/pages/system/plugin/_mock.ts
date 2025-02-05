import type { Request, Response } from 'express';
import type { CardListItemDataType } from './data.d';

function fakeList(): CardListItemDataType[] {
  const list = [
    {
      id: 1,
      title: 'eslint-check-plugin',
      status: true,
      href: 'https://ant.design',
      description:'ES规范检查插件'
    },
    {
      id: 1,
      title: 'stylelint-check-plugin',
      status: true,
      href: 'https://ant.design',
      description: 'CSS规范检查插件'
    },
    {
      id: 1,
      title: 'count-check-plugin',
      status: true,
      href: 'https://ant.design',
      description:'代码调用分析插件'
    },
    {
      id: 1,
      title: 'config-check-plugin',
      status: true,
      href: 'https://ant.design',
      description: '工程配置检查插件'
    },
    {
      id: 1,
      title: 'git-check-plugin',
      status: true,
      href: 'https://ant.design',
      description:'Git规范检查插件'
    },
    {
      id: 1,
      title: 'package-check-plugin',
      status: true,
      href: 'https://ant.design',
      description: 'Npm包检查插件'
    },
    {
      id: 1,
      title: 'redundancy-check-plugin',
      status: true,
      href: 'https://ant.design',
      description:'代码重复检查插件'
    },
    {
      id: 1,
      title: 'dependency-check-plugin',
      status: true,
      href: 'https://ant.design',
      description: '正向/逆向依赖分析插件'
    },
    {
      id: 1,
      title: 'quality-analysis-plugin',
      status: true,
      href: 'https://ant.design',
      description:'应用研发质量分析插件'
    }
  ];

  return list;
}

function getFakeList(req: Request, res: Response) {
  const result = fakeList();
  return res.json({
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/card_fake_list': getFakeList,
};
