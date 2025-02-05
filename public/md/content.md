# ES规范
---------------------------------------------------------------------
JS规范即约束项目中`JS`，`JSX`，`TS`，`TSX`等代码文件的编写准则，具体规则如下：

## 严格模式
- 默认构建后的`JS`都会开启严格模式，即在`JS`文件顶部会有如下语句
- 禁止使用`with`语句, 禁止使用`eval`语句
```javascript
'use strict';
```

## 变量规范
- 变量命名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`
- 使用`ES6`语法，避免使用无意义的缩写，避免使用`var`来定义变量
- `JS`对象的属性命名同样使用`lowerCamelCase`小驼峰命名法
```javascript
// good
let userName = 'John Doe';

// bad
let n = 10;                 // 不清楚含义的缩写
var userName = 'John Doe';  // 使用var来定义变量
let _name = 'John Doe';     // 带下划线
let name_ = 'John Doe';     // 带下划线
let name$ = 'John Doe';     // 带美元符号
```

## 常量规范
- 常量命名使用大写字母，多单词使用下划线拼接，常量单词避免缩写
```javascript
// good
const MAX_COUNT = 20;

// bad
const M_C = 20;             // 不清楚含义的缩写
const maxcount = 20;        // 无法区分变量与常量
```

## 函数规范
- 函数命名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`
- 函数的参数命名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`
- 函数体不超过`150`行，否则被判定为`复杂函数`
- 函数命名前缀应当为动词(`can`, `do`, `is`, `can`,`has`, `get`,`set`, `load`等),使用动宾短语

| 动词                       | 含义 |
| ------------- | --------------- | 
| can           | 判断是否可执行    |  
| has           | 判断是否含有某值   |   
| is            | 判断是否为某个值   | 
| get           | 获取某个值        |  
| set           | 设置某个值        |   
| load          | 加载某些数据      |    
| handle        | 事件处理          |  


- `函数必须要有注释，注释类型不限`，推荐使用`jsdoc`注释，注释参考如下

| 注释名                       | 含义 |
| --------------------------- | --------------- |
| @description                | 描述函数作用或功能 |
| @param                      | 参数描述         |
| @return                     | 返回值描述        |
```javascript

/**
 * @description 获取名称
 * @param {number} id 用户id
 * @return {string} 用户名字
*/
function getName(id) {
  // do something
  return 'hahha';
}

/**
 * @description 创建一个包含用户信息的对象。
 * @param {string} firstName - 用户的名。
 * @param {string} lastName - 用户的姓。
 * @param {number} age - 用户的年龄。
 * @returns {{ fullName: string, age: number }} 一个包含用户全名和年龄的对象。
 */
function createUser(firstName, lastName, age) {
  return {
    fullName: `${firstName} ${lastName}`,
    age: age,
  };
}

```
## 类型规范
- 引入TS的项目函数入参与返回需要申明TS类型, 禁止使用`any`类型
```javascript
// good
/**
 * @description 获取名称
 * @param {number} id 用户id
 * @return {string} 用户名字
*/
function getName(id:number):string {
  // do something
  return 'hahha';
}

// bad
function getName(id:any):string {
  // do something
  return 'hahha';
}
```

## Class规范
- 类或构造函数命名使用`UpperPascalCase`大驼峰命名法
- 类中公共属性和方法命名使用`lowerCamelCase`小驼峰命名法，私有属性和方法需要添加前缀`_`(下划线)
```javascript
/**
 * 类描述
 * @class
 * @extends Developer
 */
class FrontDeveloper {
  private _name: string;
  public age: number;

  constructor(age) {
    this.age = age;
  }

  // 获取名字
  getName() {
    return this._name;
  }
  // 设置名字
  setName(name) {
    this._name = name;
  }
}
const developer = new FrontDeveloper(35);
```

## 异步编程

- 避免使用`Generator`函数，使用`promise`，`async await`来实现异步编程
- 异步函数需要使用`try-catch`或`Promise`的`catch`方法来处理错误
```javascript
// Good
async function fetchData() {
  try {
    const data = await fetch('https://api.ftic.com/data');
    return data.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// Bad
fetch('https://api.ftic.com/data')
  .then(response => response.json())
    .then(data => {
      // do
    })
```

## 公共方法

- 公共方法，辅助函数统一放置于`src/lib`目录下，命名参考函数规范
- 公共方法需要有完整的单元测试，代码扫描会检查单元测试覆盖情况
```javascript
|---src                
|---|--- lib              //  通用辅助函数
|---|---|--- __tests__    //  单元测试存放
```

## 错误捕获

错误捕获遵循最小化原则，推荐积极性处理策略，不要依赖外层兜底捕获逻辑，除非有专属设计，项目错误捕获兜底逻辑需要在`Readme`着重声明

## 注释规范

代码扫描后续只对函数注释有强制要求，函数注释参考函数规范部分，其余代码推荐遵循以下规范, 不进行严格限制

- 行内注释，以两个斜线开始，以行尾结束 
```javascript
// 用来显示一个解释的评论 
// -> 用来显示表达式的结果 
// > 用来显示 console 的输出结果

function test() { // 测试函数
      console.log('Hello World!'); // > Hello World!
      return 3 + 2; // -> 5
}
```

- 单行注释，单行注释以两个斜线开始，以行尾结束
```javascript
// 调用了一个函数；
setTitle();
```

- 多行注释，以 /* 开头 ,*/ 结尾
```javascript
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```
## 内置对象
确保针对内置对象实例化时使用 new, 缺少 new 关键字可能会导致意想不到的行为或者直接报错

```javascript
// 允许
const myArray = new Array(4);         // 正确：Array 使用 new。
const myMap = new Map();              // 正确：Map 使用 new。
const mySet = new Set();              // 正确：Set 使用 new。
const regex = new RegExp('^abc$');    // 正确：正则表达式使用 new。

// 不允许
const myArray = Array(4);             // 错误：缺少 new 关键字。
const myMap = Map();                  // 错误：缺少 new。
const mySet = Set();                  // 错误：缺少 new。
const regex = RegExp('^abc$');        // 错误：缺少 new。
```

## 嵌套深度

函数嵌套深度限制为`5`层，超过`5`层建议拆分函数

```javascript
// 错误代码：

function check(num) {
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      if (i % 2 === 0) {
        if (i % 3 === 0) {
          if (i < 10) { // 嵌套过深（超过限制）
            console.log(i);
          }
        }
      }
    }
  }
}

//  重构代码：
function isConditionMet(num, i) {
  return i % 2 === 0 && i % 3 === 0 && i < 10;
}

function check(num) {
  if (num <= 0) return; // 提前返回简化逻辑

  for (let i = 0; i < num; i++) {
    if (isConditionMet(num, i)) {
      console.log(i); // 嵌套深度减少了
    }
  }
}
```

## 文件拆分

文件大小限制为`500`行，超过`500`行需要拆分文件，拆分文件需要遵循单一职责原则，超过500行的代码文件被称为“复杂模块”

## 规则介绍
针对`JS/TS代码`会进行行级别规范检查，帮助开发人员修复, 基础规范基于 `eslint:recommended` 拓展并添加了一些必要的规则，常见错误规则如下：

```javascript
// 函数必须包含注释说明
'require-any-comment': ['error'],
// 避免未使用的变量
'@typescript-eslint/no-unused-vars': 'error',
// 禁止使用any
'@typescript-eslint/no-explicit-any': 'error',
// 禁止单文件导出多组件
'react/no-multi-comp': 'error',
// 禁止使用 var
'no-var': 'error',
// 禁止使用 ==,用 ===
'eqeqeq': 'error',
// 禁止函数逻辑深度超过5层
'max-depth': ['error', 5],
// 禁止函数体超过150行
'max-lines-per-function': ['error', { 'max': 150, 'skipBlankLines': true, 'skipComments': true }],
// 禁止代码文件超过500行
'max-lines': ['error', { 'max': 500, 'skipBlankLines': true, 'skipComments': true }],
// 禁止使用 with
'no-with': 'error',
// 禁止使用 eval
'no-eval': 'error',
// 文件名使用 kebab-case
"unicorn/filename-case": ["error", { "case": "kebabCase" }],
// 内置对象初始化要使用 new
"unicorn/new-for-builtins": "error",
// 禁止使用未声明的变量
'no-undef': 'error',
// 禁止使用无意义转义
'no-useless-escape': 'error',
// 禁止空函数
'no-empty-function': 'error',
// 禁止使用原型方法
'no-prototype-builtins': 'error',
```

# CSS规范
---------------------------------------------------------------------
CSS规范即约束项目中`css`,`less`,`scss`等代码文件的编写准则，块在CSS中有类似命名空间的作用，所以起名需要充分考虑唯一性、关联性，具体规则如下：

## 命名规范

- 类名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`
- 类名也可以为多单词小写，单词之间使用`-`连接
- 避免简单的单词命名，名字可以描述功能，页面推荐用`page`前缀，公共推荐用`common`前缀
```css
/* good */
.pageOutobound
.page-outobound
.commonGoodsItem
.common-goods-item
.commonFilterSidebar
.common-filter-sidebar

/* bad */
.ListItem
.filter_sidebar
```

## 书写规则

- `选择器及属性独占一行, 禁止空行`
- `禁止声明重复属性`
- `十六进制颜色值使用小写，且必须有效`
- `选择器中避免出现标签名（title, html, span, div 等单词）`
```css
/* good */
.pageCenter {
  width:100px;
  height:50px;
  color:#fff;
  background:#00a0e9;
}

/* bad */
.pageCenter {
  width:100px;height:50px;color:#fff;background:#00a0e9;
}
.div {
  width:100px;
}
```


## ID选择器

- 尽可能避免使用ID选择器及全局标签选择器防止污染全局样式
- id选择器命名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`
```css
/* good */
.header{
  padding-bottom: 0px;
  margin: 0em;
}

/* bad */
#header{
  padding-bottom: 0px;
  margin: 0em;
}
```

## Less规范

- 内容组织顺序:

(1) @import;

(2) 变量声明;

(3) 样式声明;

```css
/* good */
@import "mixins/size.less";
 
@default-text-color: #333;
 
.page {
  width: 960px;
  margin: 0 auto;
}
```

- 避免嵌套层级过多, 嵌套层级限制为`5`层
```css
/* bad */
.main{
  .title{
    .name{
      .btn{
        .txt{
          color:#fff
        }
      }
    }
  }
}
```

## 注释规范

注释以字符 /* 开始，以字符 */ 结束，注释不能嵌套

- 单行注释
```css
/* 推荐：*/
/* Comment Text */
.jdc {
    display: block;
}


/* 不推荐：*/
.jdc{
  display: block;/*Comment Text*/
}
```

- 模块注释

```css
/* 推荐：*/
/* Module A
---------------------------------------------------------------- */
.moduleA {
    color: #000;
}
/* Module B
---------------------------------------------------------------- */
.moduleB {
    color: #fff;
}


/* 不推荐：*/
/* Module A ---------------------------------------------------- */
.modA{}
/* Module B ---------------------------------------------------- */
.modB {}
```

## 规则介绍
针对CSS代码会进行行级别检查，帮助开发人员改善样式代码，主要规则如下:

```javascript
// 最大嵌套深度
'max-nesting-depth': 5,   
// 最大id选择器数量
'selector-max-id': 0,     
// 类名必需为小写或驼峰，小写支持中划线拼接
'selector-class-pattern': "^[a-z][a-z0-9-]*$|^[a-z][a-zA-Z0-9]+$",  
// 单行最大声明数量
'declaration-block-single-line-max-declarations': 1, 
// 十六进制颜色必须小写
'color-hex-case': "lower", 
// 十六进制颜色必须有效
'color-no-invalid-hex': true, 
// 禁止重复属性
'declaration-block-no-duplicate-properties': true, 
// 禁止空块
'block-no-empty': true, 
```

# 组件规范
---------------------------------------------------------------------
组件规范即约束项目中JSX，TSX等组件代码文件的编写准则，具体规则如下：
# 命名规范

- 组件命名使用`UpperPascalCase`大驼峰命名法，每个文件只包含一个`React`组件
```javascript
// class component
import React, { Component } from 'react';
class HomeView extends Component {
  // ...
}
export default HomeView

// function component
import React, { useEffect } from 'react';
const HomeView = (props) => {
  // ...
};
export default HomeView
```
## 函数组件
- 建议使用`函数式组件`，代码扫描会统计业务中`类组件`的占比
```javascript
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import listSty from 'styles/list.css';
import PageLoading from 'publicComponent/page-loading';
import Header from './header';
import List from './list';
import Store from './reducers';

const HomeView = (props) => {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const param = props.match?.query?.param;
    Store.init(param);
  }, []);
  const { ready } = props;
  if (ready) {
    return (
      <div className={listSty.listPage}>
        <Header {...props} />
        <List {...props} />
      </div>
    );
  }
  return <PageLoading />;
};

HomeView.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default HomeView;
```

## 公共组件
- 组件必须有`README`和`注释`
- 维护要有`组件更新记录`
- 建议添加组件单元测试用例
```javascript
|---src                
|   |
|---|--- components                         // 公共目录
|--------|--------| __tests__               // 单元测试
|--------|--------|README.MD                // 组件说明
```
