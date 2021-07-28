var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,n=(e,n)=>{for(var i in n||(n={}))l.call(n,i)&&o(e,i,n[i]);if(t)for(var i of t(n))a.call(n,i)&&o(e,i,n[i]);return e};import{d as i,m as s,B as u,j as r,q as f,T as c,p as d,F as p,v,C as h,D as m}from"./vendor.ac61ab51.js";import{_ as g}from"./animate.2fc12ad8.js";import{S as b,H as w}from"./constants.3b37bb64.js";import{r as y}from"./function.668db8d9.js";import{_ as x}from"./index.e8a5d746.js";import{c as $}from"./click-outside.de9d7ac4.js";var k=i({name:"MdTip",directives:{clickOutside:$},props:{placement:{type:String,default:"top"},name:{type:[String,Number],default:()=>y("tip")},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},content:{type:[String,Number],default:""},closable:{type:Boolean,default:!0},fill:{type:Boolean,default:!1},offset:{type:Object,default:()=>({top:0,left:0})},clickTrigger:{type:Boolean,default:!0},clickOutsideHide:{type:Boolean,default:!0},follow:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!0}},emits:[b,w],setup(e,{emit:t,slots:l,expose:a}){var o,i,y;const $=s(!1),k=e=>{I(),$.value="boolean"==typeof e?e:!$.value};u($,(e=>{t(e?b:w)}));const j=s(null),B=s(null),O=s({x:0,y:0,width:0,height:0,top:0,left:0}),T=s(null),C=s({x:0,y:0,width:0,height:0,top:0,left:0}),S=()=>{var t,l,a,o,n,i,s;let u={top:"0",left:"0"};const r=null!=(t=null==window?void 0:window.scrollY)?t:0;switch(e.placement){case"top":u={width:e.fill?`${C.value.width}px`:"auto",top:`${(C.value.top||0)-((null==(l=O.value)?void 0:l.height)||0)+e.offset.top+r}px`,left:`${(C.value.left||0)+(C.value.width||0)/2+e.offset.left}px`,transform:"translate3d(-50%, -100%, 0)"};break;case"bottom":u={width:e.fill?`${C.value.width}px`:"auto",top:`${(C.value.top||0)+(C.value.height||0)+((null==(a=O.value)?void 0:a.height)||0)+e.offset.top+r}px`,left:`${(C.value.left||0)+(C.value.width||0)/2+e.offset.left}px`,transform:"translate3d(-50%, 0, 0)"};break;case"left":u={height:e.fill?`${C.value.height}px`:"auto",top:`${(C.value.top||0)+(C.value.height||0)/2+e.offset.top+r}px`,left:`${(C.value.left||0)+e.offset.left}px`,transform:`translate3d(-${100+((null==(o=O.value)?void 0:o.width)||0)}%, -50%, 0)`};break;case"right":u={height:e.fill?`${C.value.height}px`:"auto",top:`${(C.value.top||0)+(C.value.height||0)/2+e.offset.top+r}px`,left:`${(C.value.left||0)+(C.value.width||0)+((null==(n=O.value)?void 0:n.width)||0)/2+e.offset.left}px`,transform:"translate3d(0, -50%, 0)"}}const f=null!=(s=null==(i=j.value)?void 0:i.getBoundingClientRect())?s:{left:0,right:0,width:0,height:0},c=document.body.getBoundingClientRect();if("auto"===u.width&&("top"===e.placement||"bottom"===e.placement)){if(parseInt(u.left,10)+f.width/2>c.width){const e=parseInt(u.left,10);u.left=c.width-f.width/2+"px";const t=parseInt(u.left,10);B.value&&(B.value.style.transform=`translate3d(${e-t}px, 0, 0)`)}if(parseInt(u.left,10)-f.width/2<0){const e=parseInt(u.left,10);u.left=f.width/2+"px";const t=parseInt(u.left,10);B.value&&(B.value.style.transform=`translate3d(${e-t}px, 0, 0)`)}}return u},I=()=>{var e;let t=null;T.value&&T.value instanceof HTMLElement?t=T.value:T.value&&(t=T.value.$el);const l=null==t?void 0:t.getBoundingClientRect();Object.keys(C.value).forEach((e=>{C.value[e]=null==l?void 0:l[e]}));const a=null==(e=B.value)?void 0:e.getBoundingClientRect();Object.keys(O.value).forEach((e=>{O.value[e]=null==a?void 0:a[e]}))};let E;r((()=>{I()}));const H=()=>{E=void 0,e.follow&&(I(),P())};function P(){E||(E=globalThis.requestAnimationFrame(H))}u($,(()=>{m(I),$.value?P():E&&(globalThis.cancelAnimationFrame(E),E=void 0)})),a({triggerShow:k,setPosition:I});const R=null!=(i=null==(o=l.content)?void 0:o.call(l))?i:[],F=()=>d(f("div",{ref:j,class:`md-tip-content ${e.closable?"has-close":""} ${e.placement?"is-"+e.placement:""} ${e.name}`,style:n({},S())},[e.icon?f(g,{class:"content-icon",name:e.icon,svg:e.iconSvg}):null,0!==R.length?f(p,null,R):f("div",{class:"content-text"},e.content),e.closable?f(g,{name:"close",size:"md",onClick:()=>k(!1)}):null,f("span",{ref:B,class:"tip-arrow"})]),[[v,$.value]]),_=(null==(y=l.default)?void 0:y.call(l))||[];_.length||console.warn("Tip should have be provided at least one Element or Component into default slot.");const q=h("clickOutside");return()=>f(p,null,[f(c,{to:"body",disabled:!e.appendToBody},[f(x,{name:"md-fade-tip"},{default:F})]),q&&e.clickOutsideHide?d(f(_[0],{ref:T,onClick:()=>{e.clickTrigger&&k(!0)}}),[[q,()=>k(!1),j.value]]):f(_[0],{ref:T,onClick:()=>{e.clickTrigger&&k(!0)}}),..._.slice(1)])}});k.install=e=>{e.component(k.name,k)};export{k as _};
