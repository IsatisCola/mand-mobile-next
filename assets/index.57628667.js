import{f as e,n as l,r as t,a as s,c as i,d as a,h as d,e as r,t as o,k as n}from"./app.fdbe7295.js";var m=e({name:"MdCellItem",components:{MdIcon:l},props:{title:{type:[String,Number],default:""},brief:{type:[String,Number],default:""},addon:{type:String,default:""},arrow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}}}),c={key:0,class:"md-cell-item-left"},f={key:1,class:"md-cell-item-content"},p={key:0,class:"md-cell-item-title"},v={key:1,class:"md-cell-item-brief"},b={key:2,class:"md-cell-item-right"},y={key:0,class:"md-cell-item-children"};m.render=function(e,l){const m=t("md-icon");return s(),i("div",{class:["md-cell-item",{"is-disabled":e.disabled,"no-border":e.noBorder}]},[a("div",{class:["md-cell-item-body",{multilines:!!e.brief}]},[e.$slots.left?(s(),i("div",c,[d(e.$slots,"left")])):r("v-if",!0),e.title||e.brief||e.$slots.default?(s(),i("div",f,[e.title?(s(),i("p",p,o(e.title),1)):r("v-if",!0),e.brief?(s(),i("p",v,o(e.brief),1)):r("v-if",!0),d(e.$slots,"default")])):r("v-if",!0),e.arrow||e.addon||e.$slots.right?(s(),i("div",b,[d(e.$slots,"right",{},(()=>[n(o(e.addon),1)])),e.arrow?(s(),i(m,{key:0,name:"arrow-right",size:"md"})):r("v-if",!0)])):r("v-if",!0)],2),e.$slots.children?(s(),i("div",y,[d(e.$slots,"children")])):r("v-if",!0)],2)};var u=m;u.install=e=>{e.component(u.name,u)};var h=u;export{h as c};
