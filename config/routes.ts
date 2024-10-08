/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/application',
    name: '应用分析',
    icon: 'dashboard',
    routes: [
      {
        path: '/application',
        redirect: '/application/analysis',
      },
      {
        name: '代码分析',
        icon: 'smile',
        path: '/application/analysis',
        component: './application/analysis',
      },
      {
        name: '工程分析',
        icon: 'smile',
        path: '/application/monitor',
        component: './application/monitor',
      },
      {
        name: '依赖分析',
        icon: 'smile',
        path: '/application/workplace',
        component: './application/workplace',
      },
    ],
  },
  {
    path: '/global',
    name: '全局分析',
    icon: 'profile',
    routes: [
      {
        path: '/global',
        redirect: '/global/analysis',
      },
      {
        name: '技术收敛',
        icon: 'smile',
        path: '/global/analysis',
        component: './global/analysis',
      },
      // {
      //   name: '指标排行',
      //   icon: 'smile',
      //   path: '/global/workplace',
      //   component: './global/workplace',
      // },
    ],
  },
  {
    path: '/task',
    icon: 'CheckCircleOutlined',
    name: '巡检任务',
    routes: [
      {
        path: '/task',
        redirect: '/task/list',
      },
      {
        name: '任务列表',
        icon: 'smile',
        path: '/task/list',
        component: './task/list',
      },
    ],
  },
  // {
  //   name: '研发规范',
  //   icon: 'form',
  //   path: '/dev',
  //   routes: [
  //     {
  //       path: '/dev',
  //       redirect: '/dev/doc',
  //     },
  //     {
  //       name: '规范文档',
  //       icon: 'smile',
  //       path: '/dev/doc',
  //       component: './dev/doc',
  //     },
  //     {
  //       name: '审查工具',
  //       icon: 'smile',
  //       path: '/dev/tool',
  //       component: './dev/tool',
  //     },
  //   ],
  // },
  {
    path: '/system',
    icon: 'table',
    name: '系统管理',
    routes: [
      {
        path: '/system',
        redirect: '/system/application',
      },
      {
        name: '应用管理',
        icon: 'smile',
        path: '/system/application',
        component: './system/application',
      },
      {
        name: '部门管理',
        icon: 'smile',
        path: '/system/apartment',
        component: './system/apartment',
      },
      {
        name: '插件管理',
        icon: 'smile',
        path: '/system/plugin',
        component: './system/plugin',
      },
    ],
  },
  {
    path: '/',
    redirect: '/application/analysis',
  },
  {
    component: '404',
    path: '/*',
  },
];
