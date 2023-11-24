---
title: CSS
date: 2023-11-24
# sidebar: 'auto'
categories:
  - 前端
tags:
  - 面经
sticky: 1
---

## css实现垂直居中

### flex

```css
.parent {
  height: 400px;
  display: flex;
  align-items: center;
}
```

### absolute + translate -50%

```css
.parent {
  height: 400px;
  position: relative;
}

.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

### absolute + 负 margin

```css
.parent {
  height: 400px;
  position: relative;
}

.child {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;    /* 子元素 width 的一半 */
  margin-top: -100px;     /* 子元素 height 的一半 */
}
```

### absolute + margin: auto

```css
.parent {
  height: 400px;
  position: relative;
}

.child {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### table 标签

```css
<table>
    <tr>
        <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora harum voluptates quae velit eveniet, accusamus, quas ratione placeat! Nisi perferendis facere, error sed possimus molestias et. Quas accusantium, maiores aliquid?
        </td>
    </tr>
</table>

```

### div 模仿 table

```css
.parent {
  height: 400px;
  display: table;
}

.child {
  display: table-cell;
  vertical-align: middle;
}
```

### 高度为 100% 的伪元素 + display: inline-block

```css
.parent {
  height: 400px;
  text-align: center;
}

.parent:before,
.parent:after {
  content: "";
  display: inline-block;
  height: 100%;            /* 前后伪元素高度 100% */
  vertical-align: middle;  /* 伪元素垂直居中 */
}

.child {
  width: 300px;
  display: inline-block;
  vertical-align: middle;  /* 子元素在 100% 高度中垂直居中 */
}
```

## 瀑布流

### column实现

```css
- column-count: 定义屏幕分为多少列
- column-gap: 定义列与列之间的距离

body{
    margin: 0;
    list-style: none;
}
#box{
    margin: 40px;
    column-count: 5;
    column-gap: 20px;
}
#box > li > img{
    width: 100%;
    height: 100%;
}

优点：

实现简单
图片自动填充不用考虑图片加载状态

缺点：

兼容性差
排列规律永远都是先上下在左右，无法控制
```

### flex布局实现

```css
body{
    margin: 0;
    list-style: none;
}
#box{
    display: flex;
    flex-flow: column wrap;
    height: 2000px;
}
#box > li{
    margin: 10px;
    width: calc(100% / 4 - 20px);
}
#box > li > img{
    width: 100%;
    height: 100%;
}

优点：
    实现相对简单
    图片自动填充不用考虑图片加载状态
    顺序在一定程度上可以改变

缺点：
	高度是固定的
```

### JS实现

```js
方法三：JS实现

export default class Waterfall {
    /*
    * $el：父容器
    * width：每张图片宽度
    * items：所有子元素
    * H：存储每一列的高度
    * flag：虚拟DOM节点集合
    * */
    constructor(options) {
        this.$el = null
        this.count = 4
        this.gap = 10
        Object.assign(this, options)
        this.width = 0
        this.items = []
        this.H = []
        this.flag = null
        this.init()
        console.log('ok')
    }

    init() {
        this.items = Array.from(this.$el.children)
        this.reset()
        this.render()
    }

    reset() {
        this.flag = document.createDocumentFragment()  //创建一个空白文档
        this.width = this.$el.clientWidth / this.count
        this.H = new Array(this.count).fill(0)
        this.$el.innerHTML = ""
    }

    render() {
        const {width, items, flag, H, gap} = this
        items.forEach(item => {
            item.style.width = width + 'px'
            item.style.position = 'absolute'
            let img = item.querySelector('img')
            /* 图片是否加载完成 */
            if (img.complete) {
                /* 获取每一列的最小高度 */
                let tag = H.indexOf(Math.min(...H));
                item.style.left = tag * (width + gap) + 'px'
                item.style.top = H[tag] + 'px'
                img.style.width = '100%'
                img.style.height = '100%'
                H[tag] += img.height * width / img.width + gap
                flag.appendChild(item)
            } else {
                img.addEventListener('load', () => {
                    let tag = H.indexOf(Math.min(...H))
                    item.style.left = tag * (width + gap) + 'px'
                    item.style.top = H[tag] + 'px'
                    img.style.width = '100%'
                    img.style.height = '100%'
                    H[tag] += img.height * width / img.width + gap
                    flag.appendChild(item)
                    this.$el.append(flag)
                })
            }
        })
        this.$el.append(flag)
    }
};

实现原理：
    初始化，计算出列宽来，将H作为列高存储器。然后计算子元素，清除父容器内容。
    遍历子元素，设置其都为绝对定位，设置其列宽，然后监听其下的图片是否加载完毕。
    如果加载完毕，那么计算应该所在的位置，瀑布流的核心就是哪一列高度最小就在那一列上设置新的图片。当然他的相对高度和间距也要计算出来，同时在当前的H上把高度存起来。
    每次图片加载完就更新虚拟节点到父容器中。

优点：
    控制灵活，随意扩展
    也可以无限加载，不用过多考虑兼容性问题
    同时可以添加诸多动画来增强用户体验

缺点：
    实现相对复杂
    图片填充需要考虑图片加载状态
    性能相对纯css实现较差
```

