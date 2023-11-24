import{_ as n,o as s,c as a,d as t}from"./app-e09b6429.js";const p={},e=t(`<h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><h3 id="类-1" tabindex="-1"><a class="header-anchor" href="#类-1" aria-hidden="true">#</a> 类</h3><p>类：可以理解为模板，通过模板可以实例化对象</p><p>面向对象的编程语言</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// ts中类的定义及使用</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义属性</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    
    <span class="token comment">// 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> ’小甜甜‘<span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新对象中的属性数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 定义实例方法</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">大家好，我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,今年已经</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了，是个</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">孩子</span><span class="token template-punctuation string">\`</span></span>， str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ts中使用类，实例化对象，可以直接进行初始化操作</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&#39;你叫什么啊&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>继承：类与类之间的关系</p><p>继承后类与类之间的叫法： A类继承了B类，那么此时A类叫子类，B类叫基类 子类 -----&gt; 派生类 基类 -----&gt; 超类(父类) 一旦发生了继承的关系，就出现了父子类的关系（叫法）</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义属性</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>  <span class="token comment">//名字</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>  <span class="token comment">//年龄</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span>  <span class="token comment">//性别</span>
    
    <span class="token comment">// 定义构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新属性数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name 
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age 
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 定义实例方法</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">大家好，我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,今年已经</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了，是个</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">孩子</span><span class="token template-punctuation string">\`</span></span>， str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个类，继承自Person</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用的事父类中的构造函数，使用的是super</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 可以调用父类中的方法</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是学生类中的sayHi方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&#39;哈哈哈&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化Person</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;大明明&#39;</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&#39;嘎嘎&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;小甜甜&#39;</span>，<span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span>
student<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结： 类和类之间如果有继承关系，需要使用extends 关键字 子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super） 子类中可以重写父类的方法</p></blockquote><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个属性</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    
    <span class="token comment">// 定义一个构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新属性值</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 实例方法</span>
    <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">跑了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">米这么远的距离</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个子类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用父类的构造函数，实现子类中属性的初始化操作</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 实例化方法</span>
    <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">跑了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">米这么远的距离</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个子类</span>
<span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用父类的构造函数，实现子类中属性的初始化操作</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 实例化方法</span>
    <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">跑了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">米这么远的距离</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> ani<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;动物&#39;</span><span class="token punctuation">)</span>
ani<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//实例化子类对象</span>
<span class="token keyword">const</span> dog<span class="token operator">:</span> Dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;大黄&#39;</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 实例化子类对象</span>
<span class="token keyword">const</span> pig<span class="token operator">:</span> Pig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">&#39;八戒&#39;</span><span class="token punctuation">)</span>
pig<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 父类和子类的关系：父子滚阿西，此时，父类类型创建子类的对象</span>
<span class="token keyword">const</span> dog1<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;小黄&#39;</span><span class="token punctuation">)</span>
dog1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pig2<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">&#39;小猪&#39;</span><span class="token punctuation">)</span>
pig1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//该函数需要的参数是Animaly 类型的</span>
<span class="token keyword">function</span> <span class="token function">showRun</span><span class="token punctuation">(</span>ani<span class="token operator">:</span> Animaly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ani<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">showRun</span><span class="token punctuation">(</span>dog1<span class="token punctuation">)</span>
<span class="token function">showRun</span><span class="token punctuation">(</span>pig1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的修饰符" tabindex="-1"><a class="header-anchor" href="#类的修饰符" aria-hidden="true">#</a> 类的修饰符</h3><p>修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性，构造函数，方法）的可访问性</p><p>类中的成员都有自己的默认的访问修饰符，public</p><p><strong>public</strong> 修复符, 类中成员默认的修饰符，代表的事公共的，任何位置都可以访问类中的成员</p><p>**private **修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的, 当然，子类中也是无法访问该成员数据的</p><p><strong>protected</strong> 修饰符，类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，当然，在子类是可以访问该数据的</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 属性</span>
    <span class="token keyword">private</span> name：<span class="token builtin">string</span>
    
    <span class="token comment">// 构造函数</span>
    <span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span>name：<span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 方法</span>
    <span class="token keyword">public</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;嗯，这个大骨头真好吃&#39;</span>，<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;大蛇丸&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 类的外部可以访问类中的属性成员</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
per<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly-修饰符" tabindex="-1"><a class="header-anchor" href="#readonly-修饰符" aria-hidden="true">#</a> readonly 修饰符</h3><p><strong>readonly</strong> 修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能再外部被随意的修改了</p><p><strong>构造函数中，可以对只读的属性成员的数据进行修改</strong></p><p>如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly 修饰，那么外部也是不能对这个属性值进行更改的</p><p>构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改</p><p>构造函数中的参数可以使用public及private和protected 进行修改，无论是哪个进行修饰，该类中都会自动的添加一个这个属性的</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// readonly 修饰属性</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    
    <span class="token comment">// 构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
    
    <span class="token comment">// 方法</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;考你日瓦&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token comment">// 类中的普通方法中，也是不能修改readonly修饰的成员属性值</span>
        <span class="token comment">// this.name = &#39;大甜甜&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;小甜甜&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// 此时无法修改，因为name 属性是只读属性</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;大甜甜&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>    
    <span class="token comment">// readonly 修饰类中的构造函数中的参数（参数属性）</span>
    <span class="token comment">// 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫参数属性</span>
    <span class="token comment">// 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员</span>
    <span class="token comment">// 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中name属性成员值得</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;大甜甜&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
    
    <span class="token comment">// 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个公共的name属性成员了</span>
    <span class="token comment">//constructor(public name: string = &#39;大甜甜&#39;) {</span>
    <span class="token comment">//    this.name = name</span>
	<span class="token comment">//}</span>
    
    <span class="token comment">// 构造函数中的name参数，一旦使用private进行修饰后，那么Person类中就有了一个私有的name属性成员了</span>
    <span class="token comment">//constructor(private name: string = &#39;大甜甜&#39;) {</span>
    <span class="token comment">//    this.name = name</span>
	<span class="token comment">//}</span>
    
    <span class="token comment">// 构造函数中的name参数，一旦使用protected进行修饰后，那么Person类中就有了一个受保护的name属性成员了（只能在本类和派生类中进行使用）</span>
    <span class="token comment">//constructor(protected name: string = &#39;大甜甜&#39;) {</span>
    <span class="token comment">//    this.name = name</span>
	<span class="token comment">//}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;小甜甜&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储器" tabindex="-1"><a class="header-anchor" href="#存储器" aria-hidden="true">#</a> 存储器</h3><p>存取器：让我们可以有效地控制对对象汇总的成员的访问，可以通过getters和setters来进行操作</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    fisrtName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 姓氏</span>
    lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 名字</span>
    
    <span class="token function">constructor</span><span class="token punctuation">(</span>fisrtName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName
        <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 姓名的成员属性（外部可以访问，也可以修改）</span>
    
    <span class="token comment">// 读取器-----负责读取数据的</span>
    <span class="token keyword">get</span> <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 设置器-----负责设置数据的（修改）</span>
    <span class="token keyword">set</span> <span class="token function">fullName</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> names <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lastNmae <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;东方&#39;</span>，<span class="token string">&#39;不败&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token comment">// 获取该属性成员属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span>
<span class="token comment">// 设置该属性的数据</span>
person<span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token string">&#39;诸葛_孔明&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h3><p>静态成员： 在类中通过 <strong>static</strong> 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员</p><p>静态成员在使用的时候是通过类名 <strong>.</strong> 的这种语法来调用的</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 静态属性</span>
    <span class="token comment">// 类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息</span>
    <span class="token keyword">static</span> name1<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// 构造函数是不能通过static来进行修饰的</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用</span>
        <span class="token comment">//this.name1 = name</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 静态方法</span>
    <span class="token keyword">static</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;萨瓦迪卡&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token comment">// const person:Person = new Person(&#39;小甜甜&#39;)</span>
<span class="token comment">// 通过实例对象调用的属性（实例属性）</span>
<span class="token comment">// console.log(person.name)</span>
<span class="token comment">// 通过实例对象调用的方法（实例方法）</span>
<span class="token comment">//person.sayHi()</span>

<span class="token comment">// 通过类名.静态属性的方式来访问该成员数据</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>name1<span class="token punctuation">)</span>
<span class="token comment">// 通过类名.静态属性的方式来设置该成员数据</span>
Person<span class="token punctuation">.</span>name1 <span class="token operator">=</span> <span class="token string">&#39;佐助&#39;</span>
<span class="token comment">// 通过类名.静态方法的方式来调用内部的静态方法</span>
Person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3><p>抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法</p><p>抽象类的目的或者作用是为子类服务的</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抽象属性</span>
    <span class="token keyword">abstract</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token comment">// 抽象方法</span>
    <span class="token comment">// 抽象方法不能有具体的实现</span>
    <span class="token keyword">abstract</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 实例方法</span>
    <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;您好啊&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 不能实例化抽象类的对象</span>
<span class="token comment">// const ani: Animal = new Animal()</span>

<span class="token comment">// 定义一个子类（派生类）Dog	</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;小黄&#39;</span>
    <span class="token comment">// 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;舔着吃，真好吃&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化Dog的对象</span>
<span class="token keyword">const</span> dog<span class="token operator">:</span>Dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//调用的事抽象类的实例方法</span>
dog<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","typeScriptlei.html.vue"]]);export{r as default};
