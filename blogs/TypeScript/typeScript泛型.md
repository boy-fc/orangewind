---
title: TypeScript泛型
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 泛型

### 泛型

泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型

```tsx
// 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中

// 定义一个函数
function getArr<T>(value: T, count:number): T[] {
    // 根据数据和数量产生一个数组
    const arr: Array<T> = []
    for(let i = 0, i < count, i++) {
        arr.push(value)
    }
    reuturn arr 
}

const arr1 = getArr<string>('abcdef', 3)
const arr2 = getArr<number>(200.23, 3)
```

### 多个泛型参数的函数

多个泛型参数的函数：函数中有多个泛型的参数

```tsx
function getMsg<K, V>(value1:K, value2:V): [K, V] {
    return [value1, value2]
}

cosnt arr1 = getMsg<string, number>('jack', 100.23)
console.log(arr1[0].split(''))
console.log(arr1[1].toFixed(1))
```

### 泛型接口

泛型接口： 在定义接口的时候，为接口中的属性或者方法定义泛型类型，在使用接口时，再指定具体的泛型类型

```tsx
// 需求：定义一个类，用来存储用户的相关信息（id，名字，年龄）
// 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

// 定义一个泛型接口
interface IBaseCRUD<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number) => T
}

// 定义一个用户信息的类
class User {
    id?: number //用户的id ?代表该属性可有可无
    name: string //用户的姓名
    age: number // 用户的年龄
    // 构造函数
    constructor(name: string, age: number) {
        this.name = name 
        this.age = age
    }
}

// 定义一个类，可以针对用户的信息对象进行增加及查询的操作
// CRUD -----> create,Read,Update,Delete
class UserCRUD implement IBaseCRUD<User>{
    // 用来保存多个User类型的用户信息对象
    data: Array<User> = []
    // 用来存储用户信息对象的
    add(user: User) : User {
        // 产生id
        user.id = Date.now() + Math.random()
        // 把用户信息对象添加到data数组中
        this.data.push(user)
        return user
    } 
    // 根据id查询指定的用户信息对象
    getUserId(id: number): User {
        return this.data.find(user => user.id === id)
    } 
}

// 实例化添加用户信息对象的类UserCRUD
const userCRUD: UserCRUD = new UserCRUD()
// 调用添加数据的方法
UserCRUD.add(new user('jack',20))
UserCRUD.add(new user('tom',25))
const { id } = UserCRUD.add(new user('luck',23))
UserCRUD.add(new user('rouse',21))
console.log(UserCRUD.data)
UserCRUD.getUserId(id)
```

### 泛型类

定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定

```tsx
// 定义一个泛型类
class GenericNumber<T> {
    // 默认的属性的值的类型是泛型类型
    defaulValue: T
    add: (x: T, y: T) => T
}

// 在实例化类的对象的时候，再确定泛型的类型
const g1: GenericNumber<number> = new GenericNumber<number>()
// 设置属性值
g1.defaultValue = 100
// 相加的方法
g1.add = function(x, y) {
    return x + y
}
console.log(g1.add(g1.defaultValue, 20))

// 在实例化类的对象的时候，再确定泛型的类型
const g2: GenericNumber<string> = new GenericNumber<string>()
// 设置属性值
g1.defaultValue = '哈哈'
// 相加的方法
g1.add = function(x, y) {
    return x + y
}
console.log(g1.add('你好', g2.defaultValue))
```

### 泛型约束

如果我们对一个泛型参数取length属性，会报错，因为这个泛型根本就不知道它有这个属性

```tsx
// 定义一个接口，用来约束将来的某个类型中必须有length这个属性
interface Ilength {
    // 接口中有一个属性length
    length: number
}

function getLength<T extends Ilength>(X：T)：number {
    return x.length
}

console.log(getLength<string>('what are you doing'))
```

