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
        name: '指标概览',
        icon: 'smile',
        path: '/application/analysis',
        component: './application/analysis',
      },
      {
        name: '规范检查',
        icon: 'smile',
        path: '/application/standard',
        component: './application/standard',
      },
      {
        name: '工程检查',
        icon: 'smile',
        path: '/application/main',
        component: './application/main',
      },
      {
        name: '冗余分析',
        icon: 'smile',
        path: '/application/workplace',
        component: './application/workplace',
      },
      {
        name: '调用分析',
        icon: 'smile',
        path: '/application/workplace',
        component: './application/workplace',
      },
      {
        name: '依赖分析',
        icon: 'smile',
        path: '/application/workplace',
        component: './application/workplace',
      },
      {
        name: '引用分析',
        icon: 'smile',
        path: '/application/workplace',
        component: './application/workplace',
      },
    ],
  },
  {
    path: '/department',
    name: '部门总览',
    icon: 'profile',
    routes: [
      {
        path: '/department',
        redirect: '/department/analysis',
      },
      {
        name: '全局指标',
        icon: 'smile',
        path: '/department/analysis',
        component: './department/analysis',
      },
      {
        name: '工程收敛',
        icon: 'smile',
        path: '/department/workplace',
        component: './department/workplace',
      },
    ],
  },
  {
    name: '研发规范',
    icon: 'form',
    path: '/doc',
    routes: [
      {
        path: '/doc',
        redirect: '/doc/code',
      },
      {
        name: '代码规范',
        icon: 'smile',
        path: '/doc/code',
        component: './doc/code',
      },
      {
        name: '工程规范',
        icon: 'smile',
        path: '/doc/project',
        component: './doc/project',
      },
      {
        name: '指标详解',
        icon: 'smile',
        path: '/doc/standard',
        component: './doc/standard',
      },
    ],
  },
  {
    path: '/system',
    icon: 'table',
    name: '扫描配置',
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
        path: '/system/department',
        component: './system/department',
      },
      {
        name: '插件管理',
        icon: 'smile',
        path: '/system/plugin',
        component: './system/plugin',
      },
      {
        name: '巡检任务',
        icon: 'smile',
        path: '/system/task',
        component: './system/task',
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
