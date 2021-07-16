var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,s=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&r(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{g as d,n as i,h as p,v as m,H as c,o as f,r as x,a as v,c as y,k as h,x as g,y as b,d as I,f as V,i as _,t as w,Z as S,e as K,l as j,C as F,D as B,E as O}from"./app.587128d6.js";import{f as z}from"./index.664445a8.js";import{f as D}from"./index.80e4e042.js";import{i as T}from"./index.81c07342.js";import{r as E,n as U,U as k,C as M,B as H,F as P,K as C,x as N}from"./index.fef09045.js";var L={title:{type:String,default:""},name:{type:[String,Number],default:()=>E("input-item")},placeholder:{type:String,default:""},maxLength:{type:[String,Number],default:""},maxHeight:{type:Number,default:0},solid:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},rows:{type:[String,Number],default:"3"},autosize:{type:Boolean,default:!1},error:{type:String,defalut:""},formation:{type:Function,default:U},modelValue:{type:String,default:""}};var $=d({name:"MdTextareaItem",components:{MdFieldItem:D,MdIcon:T},props:L,emits:[k,M,H,P,C,N],setup(e,a){const{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:r,clearInput:s,onFocus:u,onBlur:d,isInputFocus:x,onKeyup:v,onKeydown:y,textarea:h}=((e,{emit:a})=>{const l=i(e.modelValue),t=p((()=>e.disabled)),o=p((()=>e.error)),n=p((()=>""===l.value));m((()=>l.value),(e=>{a(k,e),a(M,e)})),m((()=>e.modelValue),(e=>{l.value=e,c((()=>{x()}))})),m((()=>e.maxHeight),(e=>{d.value=e,x()}));const r=i(!1),s=()=>{u.value&&u.value.focus(),setTimeout((()=>{r.value=!0}),200)},u=i(null),d=i(e.maxHeight),x=()=>{u.value&&function(e,a){e.style.height="auto";let l=e.scrollHeight;0!==l&&(a.value&&l>a.value&&(l=a.value),e.style.height=l+"px")}(u.value,d)};return f((()=>{x()})),{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:a=>{const{value:t}=a.target;l.value=function(e,a){const l=a.formation(e);return l||{value:e}}(t,e).value,x()},clearInput:()=>{l.value="",c((()=>{x()})),s()},onFocus:()=>{r.value=!0,a(P)},onBlur:()=>{setTimeout((()=>{r.value=!1,a(H)}),100)},isInputFocus:r,onKeyup:e=>{a(C,e)},onKeydown:e=>{a(N,e)},textarea:u}})(e,a);return{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:r,clearInput:s,onFocus:u,onBlur:d,isInputFocus:x,onKeyup:v,onKeydown:y,textarea:h}}}),Z={key:0,class:"md-textarea-item-msg"};$.render=function(e,a){const l=x("md-icon"),t=x("md-field-item");return v(),y(t,{class:["md-textarea-item",[e.isDisabled?"is-disabled":"",e.errorInfo?"is-error":""]],title:e.title,solid:e.solid},{right:h((()=>[!e.clearable||e.isDisabled||e.readonly?V("v-if",!0):g((v(),y("div",{key:0,class:"md-textarea-item__clear",onClick:a[7]||(a[7]=(...a)=>e.clearInput&&e.clearInput(...a))},[I(l,{name:"clear"})],512)),[[b,!e.isInputEmpty&&e.isInputFocus]]),_(e.$slots,"right")])),children:h((()=>[e.errorInfo?(v(),y("div",Z,[I("p",null,w(e.errorInfo),1)])):V("v-if",!0)])),default:h((()=>[g(I("textarea",{ref:"textarea","onUpdate:modelValue":a[1]||(a[1]=a=>e.inputValue=a),class:"md-textarea-item__textarea",disabled:e.isDisabled,readonly:e.readonly,maxlength:e.maxLength,placeholder:e.placeholder,rows:e.rows,onInput:a[2]||(a[2]=(...a)=>e.onInput&&e.onInput(...a)),onFocus:a[3]||(a[3]=(...a)=>e.onFocus&&e.onFocus(...a)),onBlur:a[4]||(a[4]=(...a)=>e.onBlur&&e.onBlur(...a)),onKeyup:a[5]||(a[5]=(...a)=>e.onKeyup&&e.onKeyup(...a)),onKeydown:a[6]||(a[6]=(...a)=>e.onKeydown&&e.onKeydown(...a))},null,40,["disabled","readonly","maxlength","placeholder","rows"]),[[S,e.inputValue]]),_(e.$slots,"footer")])),_:3},8,["class","title","solid"])};var q=$;q.install=e=>{e.component(q.name,q)};var A=q;const G={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-0\n    "};var J=d(u(s({},{name:"TextareaItemDemo",title:"普通文本域"}),{expose:[],setup(e){const a=i(""),l=i(""),t=i("");setTimeout((()=>{l.value="异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应"}),1e3);const o=e=>({value:e.replace(/\d/g,"")});return(e,n)=>(v(),y("div",G,[I(K(z),null,{default:h((()=>[I(K(A),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),title:"普通",autosize:"",class:"example",placeholder:"普通文本域"},null,8,["modelValue"]),I(K(A),{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=e=>l.value=e),title:"自动适应",class:"example",autosize:!0,rows:1,placeholder:"最大高度150px","max-height":150},null,8,["modelValue"]),I(K(A),{title:"删除图标",class:"example",autosize:!0,clearable:"",rows:1,placeholder:"输入出现删除图标","max-height":150}),I(K(A),{title:"禁用",class:"example",autosize:!0,"model-value":"禁用文本域, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述",placeholder:"500字以内","max-height":150,disabled:""}),I(K(A),{title:"只读",class:"example",autosize:!0,"model-value":"只读文本域, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述",placeholder:"500字以内","max-height":150,readonly:""}),I(K(A),{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e),title:"格式化",autosize:"",class:"example",formation:o,placeholder:"去掉所有数字"},null,8,["modelValue"])])),_:1})]))}})),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const R={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-0\n    "};var W=d(u(s({},{name:"TextareaItemDemo",title:"错误提示",titleEnUS:"Error tips"}),{expose:[],setup(e){const a=i("申请理赔xxx"),l=()=>{console.log("blur")},t=e=>{console.log("keyup",e)},o=()=>{console.log("focus")},n=e=>{console.log("keydown",e)},r=e=>{console.log("change",e)};return(e,s)=>(v(),y("div",R,[I(K(z),null,{default:h((()=>[I(K(A),{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),title:"错误提示",class:"example",placeholder:"",error:"输入信息有误!",onBlur:l,onChange:r,onKeyup:t,onKeydown:n,onFocus:o},null,8,["modelValue"])])),_:1})]))}})),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const Y=F();B("data-v-5617b12a");const ee={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-2\n    "},ae={class:"demo2-footer"},le={key:0,class:"demo2-footer-left"},te={key:1},oe=I("span",{class:"demo2-footer-right"},"页脚文案",-1);O();var ne=d(u(s({},{name:"TextareaItemDemo",title:"插槽",titleEnUS:"Slot"}),{expose:[],setup(e){const a=i("");return(e,l)=>(v(),y("div",ee,[I(K(z),null,{default:Y((()=>[I(K(A),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),class:"demo2",autosize:!0,"max-length":100,"max-height":150,placeholder:"描述信息在100字以内"},{footer:Y((()=>[I("p",ae,[a.value.length?(v(),y("span",le,w(a.value.length)+"/100",1)):(v(),y("span",te)),oe])])),default:Y((()=>[j(w(a.value)+" ",1)])),_:1},8,["modelValue"])])),_:1})]))}}));ne.__scopeId="data-v-5617b12a";var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});export{Q as _,X as a,re as b};
