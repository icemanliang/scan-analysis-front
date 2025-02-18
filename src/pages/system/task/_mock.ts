import type { Request, Response } from 'express';
import type { TaskItem } from './data.d';

function fakeList(): TaskItem[] {
  const list = [
    {
      id: 1,
      task_code: 'jdiaofwwew',
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
              name: '财务管理系统',
              value: 3
          },
          {
              name: '配置管理系统',
              value: 4
          },
          {
              name: '营销管理系统',
              value: 5
          }
      ],
      plugins: [
          {
              name: 'eslint-check-plugin',
              value: 1
          },
          {
              name: 'stylelint-check-plugin',
              value: 3
          },
          {
              name: 'count-check-plugin',
              value: 4
          },
          {
              name: 'config-check-plugin',
              value: 5
          },
          {
              name: 'git-check-plugin',
              value: 6
          },
          {
              name: 'package-check-plugin',
              value: 7
          },
          {
              name: 'redundancy-check-plugin',
              value: 8
          },
          {
              name: 'dependency-check-plugin',
              value: 9
          },
          {
              name: 'quality-analysis-plugin',
              value: 10
          }
      ],
      task_status: 2,
      task_log: '2025-02-18 14:11:51 info [main] master scan started, total applications: 5\n2025-02-18 14:11:51 info [ytns] worker process started\n2025-02-18 14:11:51 info [mgts] worker process started\n2025-02-18 14:11:51 info [domnb] worker process started\n2025-02-18 14:11:51 info [wlts] worker process started\n2025-02-18 14:11:52 info [mgts] plugins initialized\n2025-02-18 14:11:52 info [wlts] plugins initialized\n2025-02-18 14:11:52 info [wlts] plugins started\n2025-02-18 14:11:52 info [wlts] start eslint check...\n2025-02-18 14:11:52 info [domnb] plugins initialized\n2025-02-18 14:11:52 info [domnb] plugins started\n2025-02-18 14:11:52 info [domnb] start eslint check...\n2025-02-18 14:11:52 info [mgts] plugins started\n2025-02-18 14:11:52 info [mgts] start eslint check...\n2025-02-18 14:11:52 info [ytns] plugins initialized\n2025-02-18 14:11:52 info [ytns] plugins started\n2025-02-18 14:11:52 info [ytns] start eslint check...\n 2025-02-18 14:13:58 info [domnb] worker total time: 126803 ms\n 2025-02-18 14:13:58 info [main] master scan completed, total time: 126804 ms',
      task_date: '2025-02-18T08:00:01.000Z',
      cost_time: 126804
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
  'POST  /api/task/list': getFakeList,
};
