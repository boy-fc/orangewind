---
title: TypeScript其他
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 其他

### 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

```tsx
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令
```

### 内置对象

javaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

**ECMAScript 的内置对象§**

```tsx
ECMAScript 标准提供的内置对象有：

Boolean、Error、Date、RegExp 等。

我们可以在 TypeScript 中将变量定义为这些类型：

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
更多的内置对象，可以查看 MDN 的文档。

而他们的定义文件，则在 TypeScript 核心库的定义文件中。
```

**DOM 和 BOM 的内置对象§**

```tsx
DOM 和 BOM 的内置对象§
DOM 和 BOM 提供的内置对象有：

Document、HTMLElement、Event、NodeList 等。

TypeScript 中会经常用到这些类型：

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
它们的定义文件同样在 TypeScript 核心库的定义文件中。
```

