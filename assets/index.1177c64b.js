var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,d=(e,l)=>{for(var t in l||(l={}))o.call(l,t)&&r(e,t,l[t]);if(a)for(var t of a(l))n.call(l,t)&&r(e,t,l[t]);return e},i=(e,a)=>l(e,t(a));import{g as s,c as m,d as c,l as u,e as p,a as b,y as f,p as v,r as _,F as x,k as h,t as g,i as j,q as y}from"./app.5072f932.js";import{c as O}from"./index.f6a2198a.js";import{f as C}from"./index.be0885bd.js";import{s as w}from"./index.62cdd4da.js";import{c as S}from"./animate.a90cb73a.js";const I={class:"\n      md-example-child\n      md-example-child-cell-item\n      md-example-child-cell-item-0\n    "};var k=s(i(d({},{name:"CellItemDemo",title:"基本"}),{setup(e){const l=e=>{console.log(e.target)};return(e,t)=>(b(),m("div",I,[c(p(C),null,{default:u((()=>[c(p(O),{title:"普通条目",onClick:l}),c(p(O),{title:"动作条目",arrow:"",onClick:l}),c(p(O),{title:"禁用条目",disabled:"",onClick:l})])),_:1})]))}})),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const V={class:"\n      md-example-child\n      md-example-child-cell-item\n      md-example-child-cell-item-0\n    "},M=v("div",{class:"holder"},null,-1);var P=s(i(d({},{name:"CellItemDemo",title:"插槽"}),{setup(e){const l=f(!0);return(e,t)=>(b(),m("div",V,[c(p(C),null,{default:u((()=>[c(p(O),{title:"余额",addon:"可用8000.34",arrow:""}),c(p(O),{title:"余额",addon:"可用8000.34"}),c(p(O),{title:"使用余额"},{right:u((()=>[c(p(w),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,8,["modelValue"])])),_:1}),c(p(O),{title:"使用余额",disabled:""},{right:u((()=>[c(p(w),{"model-value":!0,disabled:""})])),_:1}),c(p(O),{title:"余额",addon:"可用8000.34",arrow:""},{left:u((()=>[M])),_:1})])),_:1})]))}})),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const T={class:"\n      md-example-child\n      md-example-child-cell-item\n      md-example-child-cell-item-0\n    "},U=v("span",{class:"holder"},null,-1),q=v("span",{class:"holder"},null,-1),A=v("p",{style:{"font-size":"0.24rem",color:"#858b9c"}}," 面向金融场景的Vue移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。基于「合理、好用」设计价值观，从交互操作、视觉抽象、图形可视等角度共同解决问题。 ",-1);var E=s(i(d({},{name:"CellItemDemo",title:"多行列表"}),{setup(e){const l=f(!1);return(e,t)=>(b(),m("div",T,[c(p(C),null,{default:u((()=>[c(p(O),{title:"交通银行(尾号3089)",brief:"展示摘要描述"}),c(p(O),{title:"招商银行(尾号2342)",brief:"展示摘要描述"},{right:u((()=>[c(p(w),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,8,["modelValue"])])),_:1}),c(p(O),{title:"交通银行(尾号3089)",brief:"展示摘要描述",addon:"附加文案",arrow:""}),c(p(O),{title:"交通银行",brief:"展示摘要描述",addon:"附加文案",arrow:""},{left:u((()=>[U])),_:1}),c(p(O),{title:"招商银行",brief:"展示摘要描述",addon:"禁用的项目",disabled:"",arrow:""},{left:u((()=>[q])),_:1}),c(p(O),{title:"Mand Mobile",brief:"A mobile UI toolkit",arrow:""},{children:u((()=>[A])),_:1})])),_:1})]))}})),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const $={"./demo0.vue":z,"./demo1.vue":D,"./demo2.vue":F};var B=S("CellItem",Object.entries($).map((e=>e[1].default)));const G={class:"md-nav"},H=v("p",{class:"name"},"CellItem",-1),J=v("p",{class:"name-zh"},"列表单元",-1),K={class:"md-example cell-item"},L=["textContent"],N=["textContent"],Q={class:"md-example-content"};B.render=function(e,l,t,a,o,n){const r=_("md-icon");return b(),m(x,null,[v("div",G,[v("p",{class:"home",onClick:l[0]||(l[0]=l=>e.$router.push("/"))},[c(r,{name:"home",size:"lg"})]),H,J]),v("div",K,[(b(!0),m(x,null,h(e.demos,((e,l)=>(b(),m("section",{key:l,class:"md-example-section"},[v("div",{class:"md-example-title",textContent:g(e.title)},null,8,L),v("div",{class:"md-example-describe",textContent:g(e.describe)},null,8,N),v("div",Q,[(b(),j(y(e)))])])))),128))])],64)};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});export{z as _,D as a,F as b,R as c};
