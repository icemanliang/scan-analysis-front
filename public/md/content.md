JS规范即约束项目中`JS`，`JSX`，`TS`，`TSX`等代码文件的编写准则，具体规则如下：

## 严格模式
- 默认构建后的`JS`都会开启严格模式，即在`JS`文件顶部会有如下语句
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

- 函数体不超过`150`行，否则被判定为`复杂函数`
- 函数必须要有注释，且需要遵守注释规则
- 函数的参数命名使用`lowerCamelCase`小驼峰命名法，不能出现下划线`_`或美元符号`$`

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
```
- 引入TS的项目函数入参与返回需要申明TS类型
```javascript
/**
 * @description 获取名称
 * @param {number} id 用户id
 * @return {string} 用户名字
*/
function getName(id:number):string {
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

代码扫描后续只对函数注释有强制要求，函数注释参考函数规范部分，其余代码推荐遵循以下规范

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
