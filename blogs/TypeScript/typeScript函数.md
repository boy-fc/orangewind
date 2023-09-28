---
title: TypeScript函数
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 函数

### 函数

函数：封装了一些重复使用的代码，在需要的时候直接调用即可

**js中的书写方式**

```tsx
// 函数声明，命名函数
function add(x,y) {
    return x + y
}

// 函数表单时，匿名函数
const add2 = function(x,y) {
    return x + y
}
```

**ts中的书写方式**

```tsx
// 函数声明，命名函数
// 函数中的x和y的参数类型都是string类型的，小括号后面的：string代表的是该函数的返回值也是string类型
function add(x：string,y: string): string {
    return x + y
}

const result：string = add( '111','222')

// 函数表单时，匿名函数
const add2 = function(x：number,y: number): number {
    return x + y
}

const result1 = add(12,13)
```

**函数的完整的写法**

```tsx
// add ----> 变量名 ----> 函数add
// (x：number,y: number) => number 当前的这个函数的类型
// function (x:number,y:number):number { return x + y} 就相当于符合上面的这个函数类型的值
const add :(x：number,y: number) => number = function(x：number,y: number): number {
    rerturn x + y
}

const result = add(10,20)
```

### 可选参数和默认参数

**可选参数**：函数在声明的时候，内部的参数使用了？进行修饰，那么就表示该参数可以传入也可以不用传入，叫可选参数

**默认参数**：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数

```tsx
// 定义一个函数：传入姓氏和名字，可以得到姓名（姓氏+名字=姓名）
// 需求：如果不传入任何内容，那么就返回默认的姓氏
// 需求：如果只传入姓氏，那么就返回姓氏
// 需求：如果传入姓氏和名字，那么返回的就是姓名
const getFullName(firstName: string = '东方', lastName?: string ): string {
    if(lastName) {
        return lastName
    }else{
        return firstName + lastName
    }
}

// 函数调用
// 什么也不传入
console.log(getFullName())
// 只传入姓氏
console.log(getFullName('诸葛'))
// 传入姓氏和名字
console.log(getFullName('诸葛','孔明'))
```

### 剩余参数

剩余参数也叫rest参数

剩余参数是放在函数声明的时候所有的参数的最后

```tsx
// ...args:string[] ----->剩余的参数，放在了一个字符串的数组中，args里面
function showMsg( str:string, ...args:string[]) {
    console.log(str)
    console.log(args)
}

showMsg('a','b','c','d','e')
```

### 函数重载

函数重载：函数名字相同，函数的参数及个数不同

```tsx
// 定义一个函数
// 需求：我们有一个add函数，它可以接受2个string类型的参数进行拼接，也可以接受2个number类型的参数进行相加

// 函数重载声明(如果不声明，则不会报错提示)
function add(x: string, y:string): string
function add(x: number, y: number): number

// 函数声明
function add(x: string | number, y: string | number) {
    if(typeof x === 'string' && typeof y === 'string') {
        return x + y // 字符串拼接
    }else if(typeof x === 'number' && typeof y === 'number') {
        return x + y // 数字相加
    }
}

// 函数调用
console.log(add('诸葛'，'孔明'))
console.log(add(10,20))
```

