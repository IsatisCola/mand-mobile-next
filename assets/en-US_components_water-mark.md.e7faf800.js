import{_ as a,a as s}from"./demo1.15867e06.js";import{a as n,c as t,d as E,b as p,_ as C}from"./app.fdbe7295.js";import"./index.714518c1.js";const e={"../../../src/packages/water-mark/demo/demo0.vue":a,"../../../src/packages/water-mark/demo/demo1.vue":s},o={data:()=>({demos:e})},c='{"title":"WaterMark","description":"","frontmatter":{"component":"water-mark","title":"WaterMark","preview":"https://didi.github.io/mand-mobile/examples/#/water-mark"},"headers":[{"level":3,"title":"Instruction","slug":"instruction"},{"level":3,"title":"Code Examples","slug":"code-examples"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/water-mark.md","lastUpdated":1628478555005}',l=p('<h1 id="watermark"><a class="header-anchor" href="#watermark" aria-hidden="true">#</a> WaterMark</h1><p>Container with watermark background</p><h3 id="instruction"><a class="header-anchor" href="#instruction" aria-hidden="true">#</a> Instruction</h3><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> WaterMark <span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">&#39;mand-mobile-next&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>WaterMark<span class="token punctuation">.</span>name<span class="token punctuation">,</span> WaterMark<span class="token punctuation">)</span>\n</code></pre></div><h3 id="code-examples"><a class="header-anchor" href="#code-examples" aria-hidden="true">#</a> Code Examples</h3>',5),F=p('<h3 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><h4 id="watermark-props"><a class="header-anchor" href="#watermark-props" aria-hidden="true">#</a> WaterMark Props</h4><table><thead><tr><th>Props</th><th>Description</th><th>Type</th><th>Default</th><th>Note</th></tr></thead><tbody><tr><td>content</td><td>-</td><td>String</td><td>-</td><td>complex content using <code>scoped slot</code></td></tr><tr><td>spacing</td><td>-</td><td>String</td><td><code>20vw</code></td><td>-</td></tr><tr><td>repeat-x</td><td>-</td><td>Boolean</td><td><code>true</code></td><td>-</td></tr><tr><td>repeat-y</td><td>-</td><td>Boolean</td><td><code>true</code></td><td>-</td></tr><tr><td>rotate</td><td>-</td><td>String</td><td><code>-30</code></td><td>-</td></tr><tr><td>opacity</td><td>-</td><td>String</td><td><code>0.1</code></td><td>-</td></tr></tbody></table><h4 id="watermark-slots"><a class="header-anchor" href="#watermark-slots" aria-hidden="true">#</a> WaterMark Slots</h4><h5 id="default"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h5><p>Default slot of content</p><h5 id="watermark-1"><a class="header-anchor" href="#watermark-1" aria-hidden="true">#</a> watermark</h5><p>scoped slot of watermark content</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>watermark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ coord }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- coord.row row index --&gt;</span>\n  <span class="token comment">&lt;!-- coord.col column index --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',9);o.render=function(a,s,p,e,o,c){const u=C;return n(),t("div",null,[l,E(u,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&WaterMarkDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdWaterMark%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile-next%2Fwater-mark&%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emd-example-child%20md-example-child-water-mark-0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-water-mark%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econtent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EMAND%20MOBILE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Espacing%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10vw%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E6%9C%89%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%80%E7%89%87%E6%A3%AE%E6%9E%97%EF%BC%8C%E4%B9%9F%E8%AE%B8%E6%88%91%E4%BB%AC%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%9B%BE%E5%8E%BB%E8%BF%87%EF%BC%8C%E4%BD%86%E5%AE%83%E4%B8%80%E7%9B%B4%E5%9C%A8%E9%82%A3%E9%87%8C%EF%BC%8C%E6%80%BB%E4%BC%9A%E5%9C%A8%E9%82%A3%E9%87%8C%E3%80%82%E8%BF%B7%E5%A4%B1%E7%9A%84%E4%BA%BA%E8%BF%B7%E5%A4%B1%E4%BA%86%EF%BC%8C%E7%9B%B8%E9%80%A2%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%86%8D%E7%9B%B8%E9%80%A2%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%B8%8C%E6%9C%9B%E4%BD%A0%E5%8F%AF%E4%BB%A5%E8%AE%B0%E4%BD%8F%E6%88%91%EF%BC%8C%E8%AE%B0%E4%BD%8F%E6%88%91%E8%BF%99%E6%A0%B7%E6%B4%BB%E8%BF%87%EF%BC%8C%E8%BF%99%E6%A0%B7%E5%9C%A8%E4%BD%A0%E8%BA%AB%E8%BE%B9%E5%BE%85%E8%BF%87%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%B0%91%E5%B9%B4%E6%97%B6%E6%88%91%E4%BB%AC%E8%BF%BD%E6%B1%82%E6%BF%80%E6%83%85%EF%BC%8C%E6%88%90%E7%86%9F%E5%90%8E%E5%8D%B4%E8%BF%B7%E6%81%8B%E5%B9%B3%E5%BA%B8%E3%80%82%E5%9C%A8%E6%88%91%E4%BB%AC%E5%AF%BB%E6%89%BE%E3%80%81%E4%BC%A4%E5%AE%B3%E3%80%81%E8%83%8C%E7%A6%BB%E4%B9%8B%E5%90%8E%EF%BC%8C%E8%BF%98%E8%83%BD%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E5%9C%B0%E7%9B%B8%E4%BF%A1%E7%88%B1%E6%83%85%EF%BC%8C%E8%BF%99%E6%98%AF%E4%B8%80%E7%A7%8D%E5%8B%87%E6%B0%94%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-water-mark%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estylus%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A.md-example-child-water-mark-0%0A%20%20.text-container%0A%20%20%20%20padding%2032px%0A%20%20%20%20background%20%23FFF%0A%20%20.text%0A%20%20%20%20margin-bottom%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20font-size%2024px%0A%20%20%20%20text-indent%202em%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E&-&%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&WaterMarkDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdWaterMark%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile-next%2Fwater-mark&%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emd-example-child%20md-example-child-water-mark-0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-water-mark%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Espacing%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10vw%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etext%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23watermark%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprops%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-if%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprops.coord.row%20%25%202%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%E5%A5%87%E6%95%B0%E8%A1%8C%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-else%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%81%B6%E6%95%B0%E8%A1%8C%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-water-mark%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estylus%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A.md-example-child-water-mark-0%0A%20%20.text-container%0A%20%20%20%20padding%2032px%0A%20%20%20%20background%20%23FFF%0A%20%20.text%0A%20%20%20%20margin-bottom%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20font-size%2024px%0A%20%20%20%20text-indent%202em%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&WaterMarkDemo&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20MdWaterMark%20from%20&mand-mobile-next%2Fwater-mark&%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%0A%20%20%20%20class%3D%22md-example-child%20md-example-child-water-mark-0%22%0A%20%20%3E%0A%20%20%20%20%3Cmd-water-mark%0A%20%20%20%20%20%20class%3D%22text-container%22%0A%20%20%20%20%20%20content%3D%22MAND%20MOBILE%22%0A%20%20%20%20%20%20spacing%3D%2210vw%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E6%9C%89%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84%E4%B8%80%E7%89%87%E6%A3%AE%E6%9E%97%EF%BC%8C%E4%B9%9F%E8%AE%B8%E6%88%91%E4%BB%AC%E4%BB%8E%E6%9D%A5%E4%B8%8D%E6%9B%BE%E5%8E%BB%E8%BF%87%EF%BC%8C%E4%BD%86%E5%AE%83%E4%B8%80%E7%9B%B4%E5%9C%A8%E9%82%A3%E9%87%8C%EF%BC%8C%E6%80%BB%E4%BC%9A%E5%9C%A8%E9%82%A3%E9%87%8C%E3%80%82%E8%BF%B7%E5%A4%B1%E7%9A%84%E4%BA%BA%E8%BF%B7%E5%A4%B1%E4%BA%86%EF%BC%8C%E7%9B%B8%E9%80%A2%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%86%8D%E7%9B%B8%E9%80%A2%E3%80%82%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E5%B8%8C%E6%9C%9B%E4%BD%A0%E5%8F%AF%E4%BB%A5%E8%AE%B0%E4%BD%8F%E6%88%91%EF%BC%8C%E8%AE%B0%E4%BD%8F%E6%88%91%E8%BF%99%E6%A0%B7%E6%B4%BB%E8%BF%87%EF%BC%8C%E8%BF%99%E6%A0%B7%E5%9C%A8%E4%BD%A0%E8%BA%AB%E8%BE%B9%E5%BE%85%E8%BF%87%E3%80%82%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E5%B0%91%E5%B9%B4%E6%97%B6%E6%88%91%E4%BB%AC%E8%BF%BD%E6%B1%82%E6%BF%80%E6%83%85%EF%BC%8C%E6%88%90%E7%86%9F%E5%90%8E%E5%8D%B4%E8%BF%B7%E6%81%8B%E5%B9%B3%E5%BA%B8%E3%80%82%E5%9C%A8%E6%88%91%E4%BB%AC%E5%AF%BB%E6%89%BE%E3%80%81%E4%BC%A4%E5%AE%B3%E3%80%81%E8%83%8C%E7%A6%BB%E4%B9%8B%E5%90%8E%EF%BC%8C%E8%BF%98%E8%83%BD%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E5%9C%B0%E7%9B%B8%E4%BF%A1%E7%88%B1%E6%83%85%EF%BC%8C%E8%BF%99%E6%98%AF%E4%B8%80%E7%A7%8D%E5%8B%87%E6%B0%94%E3%80%82%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3C%2Fmd-water-mark%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22stylus%22%3E%0A.md-example-child-water-mark-0%0A%20%20.text-container%0A%20%20%20%20padding%2032px%0A%20%20%20%20background%20%23FFF%0A%20%20.text%0A%20%20%20%20margin-bottom%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20font-size%2024px%0A%20%20%20%20text-indent%202em%0A%3C%2Fstyle%3E%0A&-&%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&WaterMarkDemo&%2C%0A%20%20title%3A%20&%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20MdWaterMark%20from%20&mand-mobile-next%2Fwater-mark&%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%0A%20%20%20%20class%3D%22md-example-child%20md-example-child-water-mark-0%22%0A%20%20%3E%0A%20%20%20%20%3Cmd-water-mark%20class%3D%22text-container%22%20spacing%3D%2210vw%22%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cb%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3C%2Fb%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cb%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3C%2Fb%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87%3Cb%3E%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%3C%2Fb%3E%E7%9A%84%E5%9D%90%E6%A0%87%E5%B1%9E%E6%80%A7(coord)%E5%8F%AF%E4%BB%A5%E5%AF%B9%E6%B0%B4%E5%8D%B0%E8%A1%8C%E5%88%97%E8%BF%9B%E8%A1%8C%E5%AE%9A%E5%88%B6%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23watermark%3D%22props%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20v-if%3D%22props.coord.row%20%25%202%22%3E%20%E5%A5%87%E6%95%B0%E8%A1%8C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20v-else%3E%E5%81%B6%E6%95%B0%E8%A1%8C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fmd-water-mark%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22stylus%22%3E%0A.md-example-child-water-mark-0%0A%20%20.text-container%0A%20%20%20%20padding%2032px%0A%20%20%20%20background%20%23FFF%0A%20%20.text%0A%20%20%20%20margin-bottom%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20font-size%2024px%0A%20%20%20%20text-indent%202em%0A%3C%2Fstyle%3E%0A",demos:o.demos,src:"src/packages/water-mark/demo"},null,8,["demos"]),F])};export default o;export{c as __pageData};
