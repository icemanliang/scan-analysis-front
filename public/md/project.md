# 仓库规范
---------------------------------------------------------------------

## 仓库命名

在`Gitlab`创建新的`project`，项目名采用`英文小写`方式，不同部分以中划线`-`拼接

## 文件命名

- `文件/目录`均采用`英文小写`命名方式，不要出现`大写单词`（`Git` 默认对于文件名大小写不敏感）
- 不允许以`拼音`方式来命名，也不允许与`拼音` + `英文`混合方式来命名
- 推荐`英文拼写`或`英文缩写`，多单词使用中划线`-`分割，不能包含数字

目录举例：
```javascript
// bad
|- Components/
// good
|- components/
 
// bad
|- 123components/
// good
|- components/
 
// bad
|- goodsdetail/
|- goodsDetail/
// good
|- goods-detail/
```

文件举例：
```javascript
// good
common-component.js
api-status.ts
play-state.jsx
create-state-component.tsx
home-state.png
home-banner.jpg
nav-list.vue
main-home-area.css

// bad
MainContent.js
commonList.ts     
shouye.css        // 拼音
```

## 分支规范
- **研发分支**：

`master分支`：主干分支，受保护分支

`feature*分支`：需求开发分支，创建自`master`，可合并到`dev`，`test`，`sit`，`master`分支，多人协同开发的团队建议采用三段式结构，即 `feat` + `jira单号` + `开发者英文名`，也可简化为二段式结构，写法为 `feat` + `jira单号`，部分项目分支目前未添加`feat`头，目前暂不做强制要求，新项目必须严格遵守规范。
```javascript
// 三段示例：
feat-xxx-15643-icemanliang   ✅
// 二段示例：
feat-xxx-15643               ✅
// 错误示例：
feat-getInfo                 ❌
```

`fix*分支`：修复分支，创建自`master`，可合并到`dev`，`test`，`sit`，`master`分支，建议采用三段式结构，即 `fix` + `bug单号` + `开发者英文名`，也可简化为二段式结构，写法为 `fix` + `bug单号`
```javascript
// 三段示例：
fix-xxx-1456-icemanliang    ✅
// 二段示例：
fix-xxx-1456                ✅
// 错误示例：
fix-error                   ❌
```
`dev分支`：对应开发环境，禁止直接修改，长时间迭代后若与master偏差过大需基于`master`重新创建

`test分支`：对应测试环境，禁止直接修改，长时间迭代后若与master偏差过大需基于`master`重新创建

`sit分支`：对应验收环境，禁止直接修改，长时间迭代后若与master偏差过大需基于`master`重新创建

- **辅助分支**：

`pre-master`分支：合流分支，用于多人协同有版本发布概念，且需要合并多条需求分支的业务

`release`分支：发布分支，用于多人协同有版本发布概念的业务，便于按版本回滚，归档发布历史

## 提交规范
- `git commit` 信息中需要包含`jira单号`，修复问题的，commit信息要描述修复的问题是什么
- 格式: `[分支号]` `type(scope)` : `subject`，

  （1）type只允许使用下面几个标识

    `feat` : 新功能

    `fix` : 修复bug
    
    `test` : 增加测试
    
    `docs` : 文档改变
    
    `style` : 代码格式改变
    
    `refactor` : 某个已有功能重构
    
    `perf` : 性能优化

  （2）scope（可选） : 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

  （3）subject（必须） : commit 的简短描述，不超过50个字符。

```javascript
// 推荐
[feat-xxx-1233]feat: xxxxx   ✅
// 存量但未添加feat头的情况
[xxx-1233]feat: xxxxx        ✅ 
```

## 合流规范
- 从 `master` 切出新分支，根据命名规范对分支命名为 `feature` 或 `fix` 。
- 将分支使用 `merge request` 形式合入 `dev`、`test` 或 `sit` ，并发布到对应环境。
- 将分支 `merge` 到 `master` 分支，基于 `master` 分支构建生产环境完成上线。

举例：

（1）开发：从`master`切分支，例：`feat-xxx-123`，多人开发则为`feat-xxx-123-icemanliang`

（2）联调：分支`push`到`gitlab`，`merge` `feat-ofc-123` 到`dev`分支

（3）提测：在`gitlab`上将 `feat-xxx-123` `merge`到`test`分支

（4）验收：在`gitlab`上将 `feat-xxx-123` `merge`到`sit`分支

（5）灰度&&生产：将`feat-xxx-123`分支合并到 发版日的 `pre-master` 分支；交给`值班人员`发版。


## 冲突解决

不能在`gitlab`上直接处理，在自己电脑解决冲突

举例：`gitlab`上`feat-xxx-10906`合`test`有冲突：

(1) 先在本地从`feat-xxx-10906`切新分支`feat-xxx-10906-test`

(2) 然后拉取远程最新的`test`分支合到`feat-xxx-10906-test`并解决冲突

(3) 本地跑成功后将`feat-xxx-10906-test`提交到`gitlab`并合到`test`分支

(4) 及时删除`gitlab`上的`feat-xxx-10906-test`分支


# 工程配置规范
---------------------------------------------------------------------
## pnpm
必需在`package.json`中声明`packageManager`字段，且必需使用`pnpm`作为包管理器，版本要大于等于`9`
```json
// package.json
"packageManager": "pnpm@9.6.0",
```

## node
必需在文件`node_version`中声明Node版本，Node目前最低版本要求为 `>=18`,且书写格式为`x.x.x`
```json
// .node_version
18.19.1
```

## npmrc
`npmrc` 文件必需存在，且必需配置 `registry`字段，且内容必须为`iceman私仓地址`
```json
// .npmrc
registry=https://npmjs.iceman.cn
```

## tsconfig
如果是TS项目，`tsconfig.json` 文件必需存在，且必需配置 `compilerOptions`，标准配置如下：
```typescript
// tsconfig.json
compilerOptions: {
  target: 'esnext',
  module: 'esnext',
  allowJs: true,
  strict: true,
  outDir: './dist',
  jsx: 'react',
  noUnusedLocals: true,
  noUnusedParameters: true,
  noImplicitReturns: true,
  resolveJsonModule: true,
  moduleResolution: 'node',
  esModuleInterop: true,
  forceConsistentCasingInFileNames: true,
  noImplicitAny: true,
  skipLibCheck: true,
  lib: ['esnext', 'dom', 'WebWorker']
}
```
## eslint
eslint配置文件必需存在，推荐以 `@iceman/styled/eslint-jsx-runtime` 或 `@iceman/styled/lib/eslint` 为基准进行配置，标准如下
```typescript
// .eslintrc
// .eslintrc.js

// 配置只对extends字段做限制, 该字段必需基于以下几种组合再拓展, 其它字段不做限制
{
  ...
  "extends": ['eslint:recommended', ...],
  // 或
  "extends": ['airbnb', ...],
  // 或
  "extends": ['require.resolve(@iceman/styled/eslint-jsx-runtime)', ...],
  // 或
  "extends": ['require.resolve(@iceman/styled/lib/eslint)', ...],
  ...
}
```

## prettier
prettier配置文件必需存在，推荐以`@iceman/styled/lib/prettier`配置为基准，标准配置如下
```typescript
// 方案1：标准配置
// .prettierrc.js
module.exports = {
  ...require('@iceman/styled/lib/prettier'),
};

// 方案2：内容配置
// .prettierrc
// .prettierrc.json
{
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100
}
```

## commitlint
commitlint配置文件必需存在，且必需以`@commitlint/config-conventional`配置为基准，遵循commit提交规范配置即可
```typescript
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

## husky
必需在`package.json`中声明`husky`字段，且必需配置`pre-commit`钩子
```json
// package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```
## lint-staged
必需在`package.json`中声明`lint-staged`字段，且执行`eslint`脚本，以下规则均可：
```json
// package.json
"lint-staged": {
  "*.{js,jsx}": ["eslint --fix"],
  // 或 
  "*.{ts,tsx}": ["eslint --fix"],
  // 或
  "*.{js,jsx,vue}": ["eslint --fix"],
  // 或
  "*.{ts,tsx,vue}": ["eslint --fix"],
  // 或
  "*.{js,jsx,ts,tsx,vue}": ["eslint --fix"],
  // 或
  "src/**/*.{js,jsx}": ["eslint --fix"],
  // 或
  "src/**/*.{ts,tsx}": ["eslint --fix"],
  // 或
  "src/**/*.{js,jsx,vue}": ["eslint --fix"],
  // 或
  "src/**/*.{ts,tsx,vue}": ["eslint --fix"],
  // 或
  "src/**/*.{js,jsx,ts,tsx,vue}": ["eslint --fix"],
  // 或
  "packages/**/*.{js,jsx}": ["eslint --fix"],
  // 或
  "packages/**/*.{ts,tsx}": ["eslint --fix"],
  // 或
  "packages/**/*.{js,jsx,vue}": ["eslint --fix"],
  // 或
  "packages/**/*.{ts,tsx,vue}": ["eslint --fix"],
  // 或
  "packages/**/*.{js,jsx,ts,tsx,vue}": ["eslint --fix"]
}
```

## others
`stylelint`, `vscode`, `ignore`, `jest`, `gitlab-ci.yml`等工程化配置暂不做限制

# PKG规范
---------------------------------------------------------------------
## name
`name`必需配置，`name`需要和项目名一致，不能为空，命名英文小写，多单词用`-`连接
```json 
// package.json
"name": "iceman-front",
```

## private
`private`必需配置，且必需为`true`
```json
// package.json
"private": true,
```

## description
`description`必需配置，不能为空
```json
// package.json
"description": "xxx front application",
```

## script
`script`必需配置`dev or start`，`build`，`lint`, `prepare`, `preinstall`命令, 可参考如下配置:
```json
// package.json
"scripts": {
  "start:dev": "cli dev -c dev",
  "start:test": "cli dev -c test",
  "start:sit": "cli dev -c sit",
  "build": "cli build -c ${BUILD_ENV}",
  "lint": "eslint --ext .js --ext .jsx .",
  "prepare": "husky install && chmod -R +x .husky/*",
  "test": "jest",
  "preinstall": "npx only-allow pnpm"
},
```

## main
如果项目是`npm`包，需要申明`main`或`main`，建议同时声明，适配不同导入方式
```json
// package.json
"main": "lib/index.js",
```

## module
如果项目是`npm`包，需要申明`module`或`main`，建议同时声明，适配不同导入方式
```json
// package.json
"module": "lib/index.js",
```

## version
如果项目是`npm`包，`version`需要配置，不能为空, 版本号需要符合[semver](https://semver.org/)规范
```json
// package.json
"version": "1.0.0",
```

## keywords
如果项目是`npm`包，`keywords`需要配置，不能为空
```json
// package.json
"keywords": ["juejin", "base", "iceman"],
```
## license
如果项目是`npm`包，`license`需要配置，不能为空
```json
// package.json
"license": "MIT",
```

## dependency
需要合理区分`devDependencies`, `dependencies`配置

# 依赖规范
---------------------------------------------------------------------
相比于后端，前端代码的安全风险更多来源于`依赖`，所以依赖治理非常必要


## Unpkg源安全
如果使用外部`unpkg`服务，必须保证源的安全性，避免风险

## 依赖风险分析
可以查看项目依赖的包是否有潜在风险（`协议`，`可维护性`，`安全性`），是否存在多个冗余依赖，以及哪些建议升级的包

