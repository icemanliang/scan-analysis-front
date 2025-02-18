import type { Request, Response } from 'express';
import type { ApplicationItem } from './data.d';

function fakeList(): ApplicationItem[] {
  const list: ApplicationItem[] = [
    {
      id: 1,
      app_name: '基础管理平台',
      app_repo: 'https://github.com/nocobase/nocobase.git',
      app_branch: 'main',
      app_tags: ['桌面应用'],
      app_desc: '基础管理',
      app_owner: 'iceman',
      app_config: {
        codeDir: 'packages',
        buildDir: '',
        aliasConfig: {
          '@src/*': ['src/*'],
          '@assets/*': ['src/assets/*'],
          '@less/*': ['src/assets/less/*'],
          '@server/*': ['src/server/*'],
          '@pages/*': ['src/pages/*'],
          '@utils/*': ['src/utils/*'],
          '@hooks': ['src/hooks/index'],
          '@hooks/*': ['src/hooks/*'],
        },
      },
      app_status: true,
    },
    {
      id: 2,
      app_name: '采购管理平台',
      app_repo: 'https://github.com/zxwk1998/vue-admin-better.git',
      app_branch: 'master',
      app_tags: ['移动应用'],
      app_desc: '采购管理',
      app_owner: 'bob',
      app_config: {
        codeDir: 'src',
        buildDir: '',
        aliasConfig: {
          '@src/*': ['./src/*'],
          '@typing/*': ['./src/typings/*'],
        },
      },
      app_status: true,
    },
    {
      id: 3,
      app_name: '财务管理系统',
      app_repo: 'https://github.com/ColorlibHQ/gentelella.git',
      app_branch: 'master',
      app_tags: ['移动应用'],
      app_desc: '财务管理',
      app_owner: 'james',
      app_config: {
        codeDir: 'src',
        buildDir: '',
        aliasConfig: {
          '@lib/*': ['./src/lib/*'],
          '@common/*': ['./src/component/common/*'],
          '@component/*': ['./src/component/*'],
          '@source/*': ['./src/source/*'],
          '@server/*': ['./src/server/*'],
          '@typing/*': ['./src/typing/*'],
        },
      },
      app_status: true,
    },
    {
      id: 4,
      app_name: '配置管理系统',
      app_repo: 'https://github.com/bndynet/admin-template-for-react.git',
      app_branch: 'master',
      app_tags: ['桌面应用'],
      app_desc: '配置管理',
      app_owner: 'wendy',
      app_config: {
        codeDir: 'src',
        buildDir: '',
        aliasConfig: {
          '@src/*': ['./src/*'],
          '@component/*': ['./src/component/*'],
          '@lib/*': ['./src/lib/*'],
          '@middleware/*': ['./src/middleware/*'],
          '@styles/*': ['./src/component/styles/*'],
        },
      },
      app_status: true,
    },
    {
      id: 5,
      app_name: '营销管理系统',
      app_repo: 'https://github.com/javaLuo/react-admin.git',
      app_branch: 'master',
      app_tags: ['桌面应用'],
      app_desc: '营销管理',
      app_owner: 'kevin',
      app_config: {
        codeDir: 'src',
        buildDir: '',
        aliasConfig: {
          '@src/*': ['./src/*'],
        },
      },
      app_status: true,
    },
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
  'POST  /api/application/list': getFakeList,
};
