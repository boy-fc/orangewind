---
title: TypeScript接口
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 接口

### interface 接口

接口是对象的状态（属性）和行为（方法）的抽象（描述）

接口：是一种类型，是一种规范，是一种规则，是一种能力，是一种约束

```tsx
// 定义一个对象，该对象的类型就是我定义的接口Person

//定义一个接口，该接口作为person对象的类型使用，限定或者是约束该对象中的属性数据
interface Person {
    // readonly 只读属性
    readonly id: number ,
    name: string,
    age: number,
    // ? 可选属性
    sex?: string
}

const person: Person = {
    id: 1,
    name: '小甜甜'，
    age: 18,
    sex: '男'
}
```

