import{g as a,U as e,a as l,c as n}from"./app.31d0426a.js";var o=a({name:"MdSwitch",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:[e],setup:(a,{emit:l})=>({onChange:()=>{l(e,!a.modelValue)}})});o.render=function(a,e){return l(),n("div",{class:["md-switch",[a.disabled?"disabled":"",a.modelValue?"active":""]],onClick:e[1]||(e[1]=(...e)=>a.onChange&&a.onChange(...e))},null,2)};var s=o;s.install=a=>{a.component(s.name,s)};var d=s;export{d as s};
