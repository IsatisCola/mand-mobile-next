var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{g as d,s,x as m,c as r,d as n,k as v,e as p,y as f,z as c,$ as b,a as V,l as j}from"./app.31d0426a.js";import{c as g}from"./index.6e0f489e.js";import{b as x}from"./index.f90abedd.js";import{t as y}from"./index.89027234.js";import{i as _}from"./index.2fc6a74e.js";import{f as h}from"./index.8590e24f.js";import{f as O}from"./index.08377d36.js";import{s as U}from"./index.cfdca62b.js";import{f as w}from"./index.101617d3.js";const z={class:"md-example-child md-example-child-captcha"},P=j(" 确定 ");var k,S=d((k=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&i(e,a,l[a]);if(t)for(var a of t(l))u.call(l,a)&&i(e,a,l[a]);return e})({},{name:"CaptchaDemo",title:"基本"}),l(k,a({expose:[],setup(e){const l=s(!1);s(!1);const a=s("输入验证码"),t=s("验证码已发送至 186****5407"),o=s(4),u=s(!1),i=s(!1),d=s(!1),j=e=>{y.info(`你输入了${e}`),l.value=!1},k=s(void 0);let S=null;const C=()=>{i.value&&b&&k.value&&(S=w(k.value)),l.value=!l.value};return m(l,(e=>{e||setTimeout((()=>null==S?void 0:S()),0)})),(e,s)=>(V(),r("div",z,[n(p(h),{title:"文案"},{default:v((()=>[n(p(_),{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),title:"标题"},null,8,["modelValue"]),n(p(_),{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=e=>t.value=e),title:"插槽内容"},null,8,["modelValue"]),n(p(_),{title:"短信验证码","model-value":"5555",readonly:""})])),_:1}),n(p(h),{title:"配置"},{default:v((()=>[n(p(O),{title:"是否内联",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=e=>d.value=e)},null,8,["modelValue"])])),_:1}),n(p(_),{modelValue:o.value,"onUpdate:modelValue":s[4]||(s[4]=e=>o.value=e),title:"验证码长度",type:"tel"},null,8,["modelValue"]),n(p(O),{title:"采用掩码",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=e=>u.value=e)},null,8,["modelValue"])])),_:1}),n(p(O),{title:"使用系统键盘",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:i.value,"onUpdate:modelValue":s[6]||(s[6]=e=>i.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),n(p(g),{visible:l.value,"onUpdate:visible":s[7]||(s[7]=e=>l.value=e),"is-view":d.value,title:a.value,content:t.value,system:i.value,mask:u.value,maxlength:o.value-0,onSubmit:j},null,8,["visible","is-view","title","content","system","mask","maxlength"]),f(n(p(x),{ref:k,style:{"margin-top":"0.32rem"},onClick:C},{default:v((()=>[P])),_:1},512),[[c,!d.value]])]))}})))),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{C as _};
