import type { Request, Response } from 'express';
import type { DepartmentItem } from './data.d';

function fakeList(): DepartmentItem[] {
  const list: DepartmentItem[] = [
    {
        id: 1,
        dept_name: '综合研发部',
        dept_code: 'BASE',
        apps: [
            {
                name: '基础管理平台',
                value: 1
            },
            {
                name: '采购管理平台',
                value: 2
            },
            {
                name: '配置管理系统',
                value: 4
            }
        ]
    },
    {
        id: 2,
        dept_name: '市场管理部',
        dept_code: 'BUSINESS',
        apps: [
            {
                name: '财务管理系统',
                value: 3
            },
            {
                name: '营销管理系统',
                value: 5
            }
        ]
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
  'POST  /api/department/list': getFakeList,
};
