---
title: TypeScript类
date: 2023-9-28
sidebar: 'auto'
categories:
  - 前端
tags:
  - TypeScript
sticky: 1
---

## 类

### 类

类：可以理解为模板，通过模板可以实例化对象

面向对象的编程语言

```tsx
// ts中类的定义及使用
class Person {
    // 定义属性
    name: string,
    age: number,
    gender: string,
    
    // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name: string = ’小甜甜‘, age: number = 16, gender: string = '女') {
        // 更新对象中的属性数据
        this.name = name
        this.age = age
        this.gender = gender
    }
    
    // 定义实例方法
    sayHi(str: string) {
        console.log(`大家好，我是${this.name},今年已经${this.age}岁了，是个${this.gender}孩子`， str)
    }
}

// ts中使用类，实例化对象，可以直接进行初始化操作
const person = new Person()
person.sayHi('你叫什么啊')

```

### 继承

继承：类与类之间的关系

继承后类与类之间的叫法：
	A类继承了B类，那么此时A类叫子类，B类叫基类
	子类 -----> 派生类
	基类 -----> 超类(父类)
	一旦发生了继承的关系，就出现了父子类的关系（叫法）

```tsx
// 定义一个类
class Person {
    // 定义属性
    name: string  //名字
    age: number  //年龄
    gender: string  //性别
    
    // 定义构造函数
    constructor(name: string = '小明', age: number = 18, gender: string = '女') {
        // 更新属性数据
        this.name = name 
        this.age = age 
        this.gender = gender
    }
    
    // 定义实例方法
    sayHi(str: string) {
        console.log(`大家好，我是${this.name},今年已经${this.age}岁了，是个${this.gender}孩子`， str)
    }
}

// 定义一个类，继承自Person
class Student extends Person {
    constructor(name: string, age: number, gender: string) {
        // 调用的事父类中的构造函数，使用的是super
        super(name, age, gender)
    }
    
    // 可以调用父类中的方法
    sayHi() {
        console.log('我是学生类中的sayHi方法')
        super.sayHi('哈哈哈')
	}
}

// 实例化Person
const person = new Person('大明明', 89, '男')
person.sayHi('嘎嘎')
const student = new Student('小甜甜'，16, '女')
student.sayHi()

```

> 总结： 类和类之间如果有继承关系，需要使用extends 关键字
>       子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super）
>  	 子类中可以重写父类的方法

### 多态

多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为

```tsx
// 定义一个父类
class Animal {
    // 定义一个属性
    name: string
    
    // 定义一个构造函数
    constructor(name: string) {
        // 更新属性值
        this.name = name
    }
    
    // 实例方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 定义一个子类
class Dog extends Animal {
    // 定义构造函数
    constructor(name: string) {
        // 调用父类的构造函数，实现子类中属性的初始化操作
        super(name)
    }
    
    // 实例化方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 定义一个子类
class Pig extends Animal {
    // 定义构造函数
    constructor(name: string) {
        // 调用父类的构造函数，实现子类中属性的初始化操作
        super(name)
    }
    
    // 实例化方法
    run(distance: number = 0) {
        console.log(`跑了${distance}米这么远的距离`, this.name)
    }
}

// 实例化对象
const ani: Animal = new Animal('动物')
ani.run()
//实例化子类对象
const dog: Dog = new Dog('大黄')
dog.run()
// 实例化子类对象
const pig: Pig = new Pig('八戒')
pig.run()

// 父类和子类的关系：父子滚阿西，此时，父类类型创建子类的对象
const dog1: Animal = new Dog('小黄')
dog1.run()
const pig2: Animal = new Pig('小猪')
pig1.run()

//该函数需要的参数是Animaly 类型的
function showRun(ani: Animaly) {
    ani.run()
}
showRun(dog1)
showRun(pig1)
```

### 类的修饰符

修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性，构造函数，方法）的可访问性

类中的成员都有自己的默认的访问修饰符，public

**public** 修复符, 类中成员默认的修饰符，代表的事公共的，任何位置都可以访问类中的成员

**private **修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的, 当然，子类中也是无法访问该成员数据的

**protected** 修饰符，类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，当然，在子类是可以访问该数据的

```tsx
// 定义一个类
class Person {
    // 属性
    private name：string
    
    // 构造函数
    public constructor(name：string) {
        // 更新属性
        this.name = name
    }
    
    // 方法
    public eat() {
        console.log('嗯，这个大骨头真好吃'，this.name)
    }
}

// 实例化对象
const per = new Person('大蛇丸')
// 类的外部可以访问类中的属性成员
console.log(per.name)
per.eat()
```

### readonly 修饰符

**readonly** 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能再外部被随意的修改了

**构造函数中，可以对只读的属性成员的数据进行修改**

如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly 修饰，那么外部也是不能对这个属性值进行更改的

构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改

构造函数中的参数可以使用public及private和protected 进行修改，无论是哪个进行修饰，该类中都会自动的添加一个这个属性的

```tsx
// 定义一个类
class Person {
    // readonly 修饰属性
    readonly name: string
    
    // 构造函数
    constructor(name: string) {
        this.name = name
	}
    
    // 方法
    sayHi() {
        console.log('考你日瓦', this.name)
        // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
        // this.name = '大甜甜'
    }
}

// 实例化对象
const person = new Person('小甜甜')
console.log(person)
console.log(person.name)
// 此时无法修改，因为name 属性是只读属性
person.name = '大甜甜'
console.log(person.name)
```

```tsx
// 定义一个类
class Person {    
    // readonly 修饰类中的构造函数中的参数（参数属性）
    // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫参数属性
    // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
    // 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中name属性成员值得
    constructor(readonly name: string = '大甜甜') {
        this.name = name
	}
    
    // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个公共的name属性成员了
    //constructor(public name: string = '大甜甜') {
    //    this.name = name
	//}
    
    // 构造函数中的name参数，一旦使用private进行修饰后，那么Person类中就有了一个私有的name属性成员了
    //constructor(private name: string = '大甜甜') {
    //    this.name = name
	//}
    
    // 构造函数中的name参数，一旦使用protected进行修饰后，那么Person类中就有了一个受保护的name属性成员了（只能在本类和派生类中进行使用）
    //constructor(protected name: string = '大甜甜') {
    //    this.name = name
	//}
}

// 实例化对象
const person = new Person('小甜甜')
console.log(person)
console.log(person.name)
```

### 存储器

存取器：让我们可以有效地控制对对象汇总的成员的访问，可以通过getters和setters来进行操作

```tsx
// 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
class Person {
    fisrtName: string // 姓氏
    lastName: string // 名字
    
    constructor(fisrtName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    
    // 姓名的成员属性（外部可以访问，也可以修改）
    
    // 读取器-----负责读取数据的
    get fullName() {
        return this.firstName + '_' + this.lastName
    }
    
    // 设置器-----负责设置数据的（修改）
    set fullName(val) {
        let names = val.split('_')
        this.firstName = names[0]
        this.lastNmae = names[1]
    }
}

// 实例化对象
const person = new Person('东方'，'不败')
console.log(person)
// 获取该属性成员属性
console.log(person.fullName)
// 设置该属性的数据
person.fullName = '诸葛_孔明'
console.log(person.fullName)
```

### 静态成员

静态成员： 在类中通过 **static** 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员

静态成员在使用的时候是通过类名 **.** 的这种语法来调用的

```tsx
// 定义一个类
class Person {
    // 静态属性
    // 类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息
    static name1: string
    // 构造函数是不能通过static来进行修饰的
    constructor(name: string) {
        // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
        //this.name1 = name
    }
    // 静态方法
    static sayHi() {
        console.log('萨瓦迪卡')
    }
}

// 实例化对象
// const person:Person = new Person('小甜甜')
// 通过实例对象调用的属性（实例属性）
// console.log(person.name)
// 通过实例对象调用的方法（实例方法）
//person.sayHi()

// 通过类名.静态属性的方式来访问该成员数据
console.log(Person.name1)
// 通过类名.静态属性的方式来设置该成员数据
Person.name1 = '佐助'
// 通过类名.静态方法的方式来调用内部的静态方法
Person.sayHi()
```

### 抽象类

抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法

抽象类的目的或者作用是为子类服务的

```tsx
// 定义一个抽象类
abstract class Animal {
    // 抽象属性
    abstract name: string
    // 抽象方法
    // 抽象方法不能有具体的实现
    abstract eat()
    
    // 实例方法
    sayHi() {
        console.log('您好啊')
    }
}
// 不能实例化抽象类的对象
// const ani: Animal = new Animal()

// 定义一个子类（派生类）Dog	
class Dog extends Animal {
    name: string = '小黄'
    // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
    eat() {
        console.log('舔着吃，真好吃')
	}
}

// 实例化Dog的对象
const dog:Dog = new Dog()
dog.eat()
//调用的事抽象类的实例方法
dog.sayHi()
console.log(dog.name)

```

