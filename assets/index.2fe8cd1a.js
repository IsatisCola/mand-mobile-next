var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{g as n,s as o,as as d,at as c,J as m,y as u,X as p,A as f,r as v,a as g,i as w,f as b,d as y,F as h,k as x,l as I,j as k,t as V,c as j,e as C,p as _,q as O}from"./app.5072f932.js";import{s as S}from"./index.798d60d3.js";import{t as U}from"./index.4be7241f.js";import{t as D}from"./index.6e0b54f7.js";import{c as P}from"./animate.a90cb73a.js";var M={visible:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:0},hasDots:{type:Boolean,default:!0},deletable:{type:Boolean,default:!1}},z=n({name:"MdImageViewer",components:{MdSwiper:S,MdTag:U,MdIcon:o,MdTransition:D},props:M,emits:[d,c,m],setup(e,a){const{currentImgIndex:t,isViewerShow:s,dataList:l,closeViewer:i,showViewer:r,afterChange:n,onDeleteImage:o}=((e,{emit:a})=>{const t=u(0),s=u(!1),l=u([]);return p((()=>{s.value=e.visible})),p((()=>{l.value=(e=>{const a=[];return e.map((e=>{const t="object"==typeof e?e:{dataUrl:e};a.push(t)})),a})(e.list)})),f((()=>e.defaultIndex),((e,a)=>{t.value=e})),{currentImgIndex:t,isViewerShow:s,dataList:l,onDeleteImage:e=>{l.value.splice(e,1),a(d,l),a(c,e)},showViewer:e=>{s.value=!0,t.value=e,a(m,!0)},closeViewer:()=>{s.value=!1,a(m,!1)},afterChange:(e,a)=>{t.value=a}}})(e,a);return{currentImgIndex:t,isViewerShow:s,dataList:l,onDeleteImage:o,closeViewer:i,showViewer:r,afterChange:n}}}),L={class:"md-image-viewer-box"},A={class:"md-image-list"},T={class:"md-swipper-warp"},B={class:"item"},$={key:0,class:"md-viewer-index"};z.render=function(e,a){const t=v("md-icon"),s=v("md-tag"),l=v("md-swiper"),i=v("md-transition");return g(),w("div",L,[b(" list "),y("div",A,[(g(!0),w(h,null,x(e.dataList,((a,l)=>(g(),w("div",{key:l,class:"md-image-item preview",style:{backgroundImage:`url(${a.dataUrl})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},onClick:a=>e.showViewer(l)},[e.deletable?(g(),w(s,{key:0,class:"md-image-item-del",size:"small",shape:"quarter","fill-color":"#111A34",type:"fill","font-color":"#fff",onClick:a=>e.onDeleteImage(l)},{default:I((()=>[y(t,{name:"close"})])),_:2},1032,["onClick"])):b("v-if",!0)],12,["onClick"])))),128)),k(e.$slots,"default")]),b("swipper"),y(i,{name:"md-fade"},{default:I((()=>[e.isViewerShow?(g(),w("div",{key:0,class:"md-image-viewer",onClick:a[1]||(a[1]=(...a)=>e.closeViewer&&e.closeViewer(...a))},[y("div",T,[y(l,{ref:"swiper",autoplay:0,"default-index":e.currentImgIndex,"has-dots":!1,"is-prevent":!1,onAfterChange:e.afterChange},{default:I((()=>[(g(!0),w(h,null,x(e.dataList,((e,a)=>(g(),w("div",{key:a,class:"md-viewer-item"},[y("div",B,[e.dataUrl?(g(),w("img",{key:0,src:e.dataUrl,alt:e.dataUrl},null,8,["src","alt"])):b("v-if",!0)])])))),128))])),_:1},8,["default-index","onAfterChange"]),e.hasDots?(g(),w("div",$,V(e.currentImgIndex+1)+"/"+V(e.dataList.length),1)):b("v-if",!0)])])):b("v-if",!0)])),_:1})])};var q=z;q.install=e=>{e.component(q.name,q)};var E=q;var F,J=n((F=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&r(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&r(e,t,a[t]);return e})({},{name:"ImageViewerDemo",title:"基本"}),a(F,t({setup(e){const a=u([{dataUrl:"//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a"},{dataUrl:"//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"}]),t=u(!1);return(e,s)=>(g(),j("div",null,[y(C(E),{list:a.value,"onUpdate:list":s[0]||(s[0]=e=>a.value=e),visible:t.value,"onUpdate:visible":s[1]||(s[1]=e=>t.value=e),"default-index":1},null,8,["list","visible"])]))}})))),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const R={"./demo0.vue":N};var X=P("ImageViewer",Object.entries(R).map((e=>e[1].default)));const G={class:"md-nav"},H=_("p",{class:"name"},"ImageViewer",-1),K=_("p",{class:"name-zh"},"图片预览",-1),Q={class:"md-example image-viewer"},W=["textContent"],Y=["textContent"],Z={class:"md-example-content"};X.render=function(e,a,t,s,l,i){const r=v("md-icon");return g(),j(h,null,[_("div",G,[_("p",{class:"home",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},[y(r,{name:"home",size:"lg"})]),H,K]),_("div",Q,[(g(!0),j(h,null,x(e.demos,((e,a)=>(g(),j("section",{key:a,class:"md-example-section"},[_("div",{class:"md-example-title",textContent:V(e.title)},null,8,W),_("div",{class:"md-example-describe",textContent:V(e.describe)},null,8,Y),_("div",Z,[(g(),w(O(e)))])])))),128))])],64)};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});export{N as _,ee as a};
