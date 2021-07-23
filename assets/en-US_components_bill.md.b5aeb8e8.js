import{a,c as t,f as n,b as s}from"./app.e9c07f9f.js";const e='{"title":"Bill","description":"","frontmatter":{"component":"bill","title":"Bill","preview":"https://didi.github.io/mand-mobile/examples/#/water-mask"},"headers":[{"level":3,"title":"引入","slug":"引入"},{"level":3,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/bill.md","lastUpdated":1627002689268}',o={},p=s('<h1 id="bill"><a class="header-anchor" href="#bill" aria-hidden="true">#</a> Bill</h1><p>Electronic bill</p><h3 id="引入"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bill <span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">&#39;mand-mobile-next&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Bill<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Bill<span class="token punctuation">)</span>\n</code></pre></div><h3 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h3>',5),l=s('<h3 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><h4 id="bill-props"><a class="header-anchor" href="#bill-props" aria-hidden="true">#</a> Bill Props</h4><table><thead><tr><th>Props</th><th>Description</th><th>Type</th><th>Default</th><th>Note</th></tr></thead><tbody><tr><td>name</td><td>-</td><td>String</td><td>-</td><td>-</td></tr><tr><td>no</td><td>-</td><td>String</td><td>-</td><td>-</td></tr><tr><td>water-mark</td><td>-</td><td>String</td><td>-</td><td>complex content using <code>scoped slot</code></td></tr></tbody></table><h4 id="bill-slots"><a class="header-anchor" href="#bill-slots" aria-hidden="true">#</a> Bill Slots</h4><h5 id="default"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h5><p>Default slot of content</p><h5 id="header"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h5><p>Header slot</p><h5 id="footer"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h5><p>Footer slot</p><h5 id="watermask"><a class="header-anchor" href="#watermask" aria-hidden="true">#</a> watermask</h5><p>Scoped slot of watermask content</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>watermark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- content --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',13);o.render=function(s,e,o,r,d,c){return a(),t("div",null,[p,n(" DEMO "),l])};export default o;export{e as __pageData};
