import{a as t}from"./index.9aa9f226.js";import{r as e,o as i,c as a,f as n,w as c,g as o,d,m as l,F as s,h as r,t as m,i as u}from"./vendor.e458434b.js";import{_ as p}from"./index.99a441fc.js";import{c as v}from"./index.58462cfa.js";import"./animate.05910515.js";var y={name:"ActivityIndicatorDemo",title:"Roller",components:{[t.name]:t}};const f={class:"\n      md-example-child\n      md-example-child-md-activity-indicator\n      md-example-child-md-activity-indicator-0\n    "},x=o("加载中..."),_=o("vertical loading"),h=o("loading...");y.render=function(t,o,d,l,s,r){const m=e("md-activity-indicator");return i(),a("div",f,[n(m,{size:20,"text-size":16},{default:c((()=>[x])),_:1}),n(m,{size:20,"text-size":16,vertical:""},{default:c((()=>[_])),_:1}),n(m,{class:"md-activity-indicator-css"},{default:c((()=>[h])),_:1})])};var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),g={name:"ActivityIndicatorDemo",title:"Spinner",components:{[t.name]:t}};const b={class:"\n      md-example-child\n      md-example-child-md-activity-indicator\n      md-example-child-md-activity-indicator-1\n    "},j=o("加载中..."),C={class:"activity-indicator-container"},S=o("加载中...");g.render=function(t,o,d,l,s,r){const m=e("md-activity-indicator");return i(),a("div",b,[n(m,{type:"spinner",size:30,"text-size":20},{default:c((()=>[j])),_:1}),n("div",C,[n(m,{class:"md-activity-indicator-css",type:"spinner",size:30,"text-size":20,color:"light"},{default:c((()=>[S])),_:1})])])};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g}),A=d({name:"ActivityIndicatorDemo",title:"Carousel",components:{[t.name]:t,[p.name]:p},setup(){const t=l(!1);return{loading:t,createPay:()=>{t.value||(t.value=!0,setTimeout((()=>{t.value=!1}),2e3))}}}});const I={class:"\n      md-example-child\n      md-example-child-md-activity-indicator\n      md-example-child-md-activity-indicator-2\n    "},O={key:1};A.render=function(t,o,d,l,s,r){const m=e("md-activity-indicator"),u=e("md-button");return i(),a("div",I,[n(m,{type:"carousel",size:15}),n(u,{type:"primary",onClick:t.createPay},{default:c((()=>[t.loading?(i(),a(m,{key:0,class:"md-activity-indicator-css",type:"carousel",size:15,color:"#fff","text-color":"#fff"})):(i(),a("span",O,"确认支付"))])),_:1},8,["onClick"])])};const T={"./demo0.vue":z,"./demo1.vue":k,"./demo2.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A})};var D=v("activity-indicator",Object.entries(T).map((t=>t[1].default)));const M={class:"md-nav"},P=n("p",{class:"name"},"ActivityIndicator",-1),w=n("p",{class:"name-zh"},"活动指示器",-1),F={class:"md-example activity-indicator"},R={class:"md-example-content"};D.render=function(t,c,o,d,l,p){const v=e("md-icon");return i(),a(s,null,[n("div",M,[n("p",{class:"home",onClick:c[1]||(c[1]=e=>t.$router.push("/"))},[n(v,{name:"home",size:"lg"})]),P,w]),n("div",F,[(i(!0),a(s,null,r(t.demos,((t,e)=>(i(),a("section",{key:e,class:"md-example-section"},[n("div",{class:"md-example-title",textContent:m(t.title)},null,8,["textContent"]),n("div",{class:"md-example-describe",textContent:m(t.describe)},null,8,["textContent"]),n("div",R,[(i(),a(u(t)))])])))),128))])],64)};export default D;
