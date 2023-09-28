---
title: TypeScript基本类型
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 基本类型

### 数组类型

方式一：
语法：let 变量名：数据类型[] = [值1，值2，值3] 

```tsx
let arr1:number[] = [1,2,3]
```

方式二：泛型
语法：let 变量名：Array<数据类型> = [值1，值2，值3]

```tsx
let arr2:Array<number> = [1,2,3]
```

### 元祖类型

元祖类型：在定义数组的时候，类型和数据的个数一开始就已经限定了

```tsx
let arr3:[string, number, boolean] = ['你好啊'， 300，false]
```

### 枚举类型

枚举类型：枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号都是从0开始的，依次的递增加

```tsx
enum Color {
	red,
	green,
	yellow
}
let color: Color = Color.red
```

### any 类型

any 类型: 当一个数组中要存储多个数据，个数不确定，类型不确定等等

```tsx
let str: any = '100'
let str1: any[] = [100,'年少不知'， false]
```

### void 类型

void 类型：在函数声明的时候，小括号的后面使用：void，代表的是该函数没有任何的返回值   很少用

```tsx
function showMsg(): void {
	console.log('很少用，作用不是很大')
}
```

### object 类型

object 对象类型

```tsx
function getObj(obj: object): object {
    console.log(obj)
    return {
        name: '冯成'，
        age: 27
    }
}
```

### 联合类型

联合类型：表示取值可以为多种类型中的一种

需求1：定义一个函数得到一个数字或字符串值的字符串形式值

```js
function getString(str: number | string): string {
	return str.toString()
}
```



类型断言：告诉编译器，我知道我自己是什么类型，也知道自己再干什么

类型断言的语法方式1：<类型> 变量名

类型断言的语法方式2：值 as 类型 如：(str as string).length

类型推断：没有明确的指定类型的时候推测出一个类



需求2：定义一个函数得到一个数字或字符串值的长度

```js
function getStr(str: number | string): string {
    //return str.toString().length
    //如果str本身就是string类型，那么是没有必要调用toString()方法的
    
    if((<string>str).length) {
       // str.length存在吗？如果存在也就说明str是string类型的
       return (<string>str).length       
    }else{
       return str.toString().length   	              
    }
}
```

### 函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。

它就像是一个只有参数列表和返回值类型的函数定义。参数列表的每一个参数都需要名字和类型。

函数类型：通过接口的方式作为函数的类型来使用

```tsx
// 定义一个接口，用来作为某个函数的类型使用
interface ISearchFunc {
    // 定义一个调用签名
    (source: string, substring: string): boolean
}

// 定义一个函数，该类型就是上面定义的接口
const searchString: ISearchFunc = function (source: string, substring: string): boolean {
    return source,search(subString) > -1
}

console.log(searchString("haha,我又变帅了","帅"))
```

### 类 类型

类 类型：类的类型，可以通过接口来实现

```tsx
// 定义一个接口
interface IFly {
    // 该方法没有任何的实现（方法中什么都没有）
    fly()
}

// 定义一个类，这个类的类型就是上面定义的接口（实际上也可以理解为，IFly接口约束了当前的这个Person类）
class Person implements IFly {
    // 实现接口中的方法
    fly() {
        console.log("我会飞了，我是超人类")
	}
}

// 实例化对象
const person = new Person()
person.fly()

// 定义一个接口
interface ISwim {
    swim()
}

// 定义一个类，这个类的类型就是IFly和ISwim(当前的这个类可以实现多个接口，一个类同时也可以被多个接口进行约束)
class Person2 implements IFly,ISwim {
    fly() {
        console.log('我会飞了2')
	}
    swim() {
        console.log('我会游泳了啦2')
    }
}

// 实例化对象
const person2 = new Person2()
person2.fly()
person2.swim()

// 总结： 类可以通过接口的方式，来定义当前这个类的类型
// 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现


// 定义一个接口，继承其他的多个接口
interface IMyFlyAndSwim extends IFly, ISwim {}

// 定义一个类，直接实现IMyFlyAndSwim这个接口
class Person3 implements IMyFlyAndSwim {
    fly() {
        console.log('我飞了3')
	}
    swim() {
        console.log('我会游泳啦3')
    }
}

// 实例化对象
const person3 = new Person3()
person3.fly()
person3.swim()
```

总结：接口和接口之间的叫继承（使用的事extends关键字）
     类和接口之间的叫实现（使用的事implements关键字）
