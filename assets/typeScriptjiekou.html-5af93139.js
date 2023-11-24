import{_ as n,o as s,c as a,d as e}from"./app-e09b6429.js";const t={},i=e(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h3><p>接口是对象的状态（属性）和行为（方法）的抽象（描述）</p><p>接口：是一种类型，是一种规范，是一种规则，是一种能力，是一种约束</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 定义一个对象，该对象的类型就是我定义的接口Person</span>

<span class="token comment">//定义一个接口，该接口作为person对象的类型使用，限定或者是约束该对象中的属性数据</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// readonly 只读属性</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token comment">// ? 可选属性</span>
    sex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;小甜甜&#39;</span>，
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","typeScriptjiekou.html.vue"]]);export{d as default};
