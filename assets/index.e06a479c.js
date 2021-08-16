var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{g as a,a6 as c,y as i,h as r,ak as d,o as m,r as s,a as u,i as f,d as p,f as b,j as v,c as g,l as h,m as _,t as y,p as S,F as x,k,q as B}from"./app.5072f932.js";import{c as w}from"./animate.a90cb73a.js";var j=(e,{emit:t,slots:n})=>{const o=i(!0),l=i(!1),a=i(null),c=i(null),s=r((()=>!!(null==n?void 0:n.left))),u=r((()=>!!(null==n?void 0:n.right))),f=r((()=>"link"===e.mode?"arrow-right":"close")),p=()=>{var t,n;if(!e.scrollable)return;if(!c.value||!a.value)return;const o=+(null!=(n=null==(t=(window.getComputedStyle(c.value,null).getPropertyValue("padding").split(" ")[3]||"0px").match(/\d+/g))?void 0:t[0])?n:0);l.value=c.value.scrollWidth-o>Math.ceil(a.value.getBoundingClientRect().width)};return d((()=>{p()})),m((()=>{var t;e.time&&(t=e.time,setTimeout((()=>{o.value=!1}),t)),p()})),{isShow:o,customLeft:s,customRight:u,rightIcon:f,overflow:l,close:()=>{("closable"===e.mode||e.closable)&&(o.value=!1),t("close")},wrap:a,content:c}},O=a({name:"MdNoticeBar",components:{[c.name]:c},props:{mode:{type:String,default:""},type:{type:String,default:"default"},time:{type:Number,default:0},round:{type:Boolean,default:!1},multiRows:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,a)=>((e,a)=>{for(var c in a||(a={}))n.call(a,c)&&l(e,c,a[c]);if(t)for(var c of t(a))o.call(a,c)&&l(e,c,a[c]);return e})({},j(e,a))}),M={class:"md-notice-bar-right"};O.render=function(e,t){const n=s("md-icon");return e.isShow?(u(),f("div",{key:0,class:["md-notice-bar",[e.round&&"md-notice-bar-round",e.type]]},[p("div",{class:["md-notice-bar-left",[!e.customLeft&&!e.icon&&"md-notice-bar-empty"]]},[b(" custom first "),e.customLeft?v(e.$slots,"left",{key:0}):e.icon?(u(),f(n,{key:1,class:"md-notice-icon",name:e.icon,svg:e.iconSvg},null,8,["name","svg"])):b("v-if",!0)],2),p("div",{ref:"wrap",class:["md-notice-bar-content",[e.multiRows&&"md-notice-bar-multi-content"]]},[p("div",{ref:"content",class:[e.overflow&&e.scrollable&&"md-notice-bar-content-animate"]},[v(e.$slots,"default")],2)],2),p("div",M,[b(" custom first "),e.customRight?v(e.$slots,"right",{key:0}):e.mode||e.closable?(u(),f(n,{key:1,class:"md-notice-icon md-notice-icon-right",name:e.rightIcon,onClick:e.close},null,8,["name","onClick"])):b("v-if",!0)])],2)):b("v-if",!0)};var N=O;N.install=e=>{e.component(N.name,N)};var T={name:"NoticeBarDemo",title:"基本",background:"#fff",components:{[N.name]:N}};const z={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-0\n    "},C=_(" 为了确保您的资金安全，请设置支付密码 ");T.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",z,[p(c,null,{default:h((()=>[C])),_:1})])};var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),E={name:"NoticeBarDemo",title:"设置图标",titleEnUS:"With icon",background:"#fff",components:{[N.name]:N}};const U={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-1\n    "},R=_(" 为了确保您的资金安全，请设置支付密码 ");E.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",U,[p(c,{mode:"closable",icon:"security"},{default:h((()=>[R])),_:1})])};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E}),P={name:"NoticeBarDemo",title:"设置时间",titleEnUS:"Setting dwell time",describe:"5s后隐藏",describeEnUS:"Hidden after 5s",background:"#fff",components:{[N.name]:N}};const $={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-2\n    "},L=_(" 为了确保您的资金安全，请设置支付密码 ");P.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",$,[p(c,{time:5e3},{default:h((()=>[L])),_:1})])};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P}),q={name:"NoticeBarDemo",title:"圆角",titleEnUS:"Round",background:"#fff",components:{[N.name]:N}};const F={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-3\n    "},H=_(" 为了确保您的资金安全，请设置支付密码 ");q.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",F,[p(c,{round:""},{default:h((()=>[H])),_:1})])};var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q}),A={name:"NoticeBarDemo",title:"样式",titleEnUS:"Theme",background:"#fff",components:{[N.name]:N}};const G={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-4\n    "},J=_(" 该银行3:00-12:00系统维护，请更换其他银行卡 "),K=_(" 福利来啦，7日免息券发放中！ ");A.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",G,[p(c,{icon:"warn",mode:"closable",type:"warning"},{default:h((()=>[J])),_:1}),p(c,{icon:"coupon",mode:"link",type:"activity",style:{"margin-top":"10px"}},{default:h((()=>[K])),_:1})])};var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A}),X={name:"NoticeBarDemo",title:"多行显示",titleEnUS:"Multi-line display",background:"#fff",components:{[N.name]:N}};const Y={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-5\n    "},Z=_(" 为了确保您的资金安全，请设置支付密码。为了确保您的资金安全，请设置支付密码。为了确保您的资金安全，请设置支付密码。 ");X.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",Y,[p(c,{mode:"link",icon:"security","multi-rows":""},{default:h((()=>[Z])),_:1})])};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X}),te={name:"NoticeBarDemo",title:"滚动播放",titleEnUS:"Scroll play",background:"#fff",components:{[N.name]:N}};const ne={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-6\n    "},oe=_(" 为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码 ");te.render=function(e,t,n,o,l,a){const c=s("md-notice-bar");return u(),g("div",ne,[p(c,{mode:"closable",icon:"volumn",scrollable:""},{default:h((()=>[oe])),_:1})])};var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te}),ae={name:"NoticeBarDemo",title:"使用插槽自定义",titleEnUS:"Customize",background:"#fff",components:{MdNoticeBar:N,MdIcon:c}};const ce={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-7\n    "},ie=_(" 为了确保您的资金安全，请设置支付密码 ");ae.render=function(e,t,n,o,l,a){const c=s("md-icon"),i=s("md-notice-bar");return u(),g("div",ce,[p(i,null,{left:h((()=>[p(c,{class:"\n            md-notice-demo-icon md-notice-demo-icon-left\n          ",name:"security"})])),default:h((()=>[ie])),_:1})])};var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae}),de=a({name:"NoticeBarDemo",title:"动态插槽内容",titleEnUS:"Dynamic slot content",background:"#fff",components:{MdNoticeBar:N,[c.name]:c},setup(){const e=i("为了确保您的资金安全，请设置支付密码");return m((()=>{setTimeout((()=>{e.value="为了确保您的资金安全，请设置支付密码;为了确保您的资金安全，请设置支付密码"}),2e3),setTimeout((()=>{e.value="为了确保您的资金安全，请设置支付密码"}),8e3)})),{content:e}}});const me={class:"\n      md-example-child\n      md-example-child-notice-bar\n      md-example-child-notice-bar-7\n    "};de.render=function(e,t,n,o,l,a){const c=s("md-icon"),i=s("md-notice-bar");return u(),g("div",me,[p(i,{scrollable:""},{left:h((()=>[p(c,{class:"\n            md-notice-demo-icon md-notice-demo-icon-left\n          ",name:"security"})])),default:h((()=>[_(" "+y(e.content),1)])),_:1})])};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});const ue={"./demo0.vue":D,"./demo1.vue":I,"./demo2.vue":W,"./demo3.vue":V,"./demo4.vue":Q,"./demo5.vue":ee,"./demo6.vue":le,"./demo7.vue":re,"./demo8.vue":se};var fe=w("NoticeBar",Object.entries(ue).map((e=>e[1].default)));const pe={class:"md-nav"},be=S("p",{class:"name"},"NoticeBar",-1),ve=S("p",{class:"name-zh"},"通知栏",-1),ge={class:"md-example notice-bar"},he=["textContent"],_e=["textContent"],ye={class:"md-example-content"};fe.render=function(e,t,n,o,l,a){const c=s("md-icon");return u(),g(x,null,[S("div",pe,[S("p",{class:"home",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[p(c,{name:"home",size:"lg"})]),be,ve]),S("div",ge,[(u(!0),g(x,null,k(e.demos,((e,t)=>(u(),g("section",{key:t,class:"md-example-section"},[S("div",{class:"md-example-title",textContent:y(e.title||"基础")},null,8,he),S("div",{class:"md-example-describe",textContent:y(e.describe)},null,8,_e),S("div",ye,[(u(),f(B(e)))])])))),128))])],64)};var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe});export{D as _,I as a,W as b,V as c,Q as d,ee as e,le as f,re as g,se as h,Se as i};
