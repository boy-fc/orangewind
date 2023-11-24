import{_ as n,o as s,c as a,d as e}from"./app-e09b6429.js";const p={},t=e(`<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件" aria-hidden="true">#</a> 声明文件</h3><p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">var</span> 声明全局变量
<span class="token keyword">declare</span> <span class="token keyword">function</span> 声明全局方法
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">声明全局类</span>
<span class="token keyword">declare</span> <span class="token keyword">enum</span> 声明全局枚举类型
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> 声明（含有子属性的）全局对象
<span class="token keyword">interface</span> <span class="token class-name">和</span> <span class="token keyword">type</span> <span class="token class-name">声明全局类型</span>
<span class="token keyword">export</span> 导出变量
<span class="token keyword">export</span> <span class="token keyword">namespace</span> 导出（含有子属性的）对象
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">ES6</span> 默认导出
<span class="token keyword">export</span> <span class="token operator">=</span> commonjs 导出模块
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> <span class="token constant">UMD</span> 库声明全局变量
<span class="token keyword">declare</span> global 扩展全局变量
<span class="token keyword">declare</span> <span class="token keyword">module</span> 扩展模块
<span class="token comment">/// &lt;reference /&gt; 三斜线指令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h3><p>javaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。</p><p>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。</p><p><strong>ECMAScript 的内置对象§</strong></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>ECMAScript 标准提供的内置对象有：

Boolean、Error、Date、RegExp 等。

我们可以在 TypeScript 中将变量定义为这些类型：

<span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Error occurred&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
更多的内置对象，可以查看 <span class="token constant">MDN</span> 的文档。

而他们的定义文件，则在 TypeScript 核心库的定义文件中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DOM 和 BOM 的内置对象§</strong></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token constant">DOM</span> 和 <span class="token constant">BOM</span> 的内置对象§
<span class="token constant">DOM</span> 和 <span class="token constant">BOM</span> 提供的内置对象有：

Document、HTMLElement、Event、NodeList 等。

TypeScript 中会经常用到这些类型：

<span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
它们的定义文件同样在 TypeScript 核心库的定义文件中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","typeScriptqita.html.vue"]]);export{d as default};
