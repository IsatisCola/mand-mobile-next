var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&n(e,a,t[a]);return e},s=(e,r)=>t(e,a(r)),d=(e,t,a)=>(n(e,"symbol"!=typeof t?t+"":t,a),a);import{N as c,g as m,R as u,an as p,ao as h,ap as g,y as f,h as b,a as y,i as w,aq as C,I as x,n as v,c as I,p as S,F as M,k as U,e as k,d as A,s as O,ar as z,l as _,r as P,t as j,q as R}from"./app.5072f932.js";import{t as F}from"./index.4be7241f.js";import{t as T}from"./index.d8c9834d.js";import{c as B}from"./animate.a90cb73a.js";function q(e){let t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);const a=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Blob([r.buffer],{type:a})}var D=c?(e=>{const t=/OS (\d)_.* like Mac OS X/g.exec(e),a=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e),r=null==t?void 0:t.pop(),i=null==a?void 0:a.pop();return{oldIOS:!!r&&+r<8.3,oldAndroid:!!i&&+i.substr(0,3)<4.5,ios:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}})(navigator.userAgent):{oldIOS:!1,oldAndroid:!1,ios:!1,android:!1,mQQBrowser:!1};function E(e){const t=function(e){e=e.replace(/^data:([^;]+);base64,/gim,"").replace(/\s/g,"");const t=atob(e),a=t.length,r=new ArrayBuffer(a),i=new Uint8Array(r);for(let l=0;l<a;l++)i[l]=t.charCodeAt(l);return r}(e),a=new DataView(t);if(65496!==a.getUint16(0,!1))return-2;const r=a.byteLength;let i=2;for(;i<r;){const e=a.getUint16(i,!1);if(i+=2,65505===e){if(1165519206!==a.getUint32(i+=2,!1))return-1;const e=18761===a.getUint16(i+=6,!1);i+=a.getUint32(i+4,e);const t=a.getUint16(i,e);i+=2;for(let r=0;r<t;r++)if(274===a.getUint16(i+12*r,e))return a.getUint16(i+12*r+8,e)}else{if(65280!=(65280&e))break;i+=a.getUint16(i,!1)}}return-1}function Q(e,t,a,r,i){if(!c)return;const{width:l,height:n}=function(e,t,a,r){const i={width:e.width,height:e.height};if("5678".indexOf(t)>-1&&(i.width=e.height,i.height=e.width),i.width<a||i.height<r)return i;const l=+i.width/+i.height;return a&&r?l>=a/r?i.width>a&&(i.width=a,i.height=Math.ceil(a/l)):i.height>r&&(i.height=r,i.width=Math.ceil(r*l)):a?a<i.width&&(i.width=a,i.height=Math.ceil(a/l)):r<i.height&&(i.width=Math.ceil(r*l),i.height=r),(i.width>=3264||i.height>=2448)&&(i.width*=.8,i.height*=.8),i}(e,t,a,r),o=document.createElement("canvas"),s=o.getContext("2d");o.width=+l,o.height=+n,s.drawImage(e,0,0,l,n);let d=null;if(CSS&&CSS.supports&&!CSS.supports("image-orientation:none"))switch(t){case 3:s.rotate(180*Math.PI/180),s.drawImage(e,-l,-n,l,n);break;case 6:s.rotate(90*Math.PI/180),s.drawImage(e,0,-l,n,l);break;case 8:s.rotate(270*Math.PI/180),s.drawImage(e,-n,0,n,l);break;case 2:s.translate(l,0),s.scale(-1,1),s.drawImage(e,0,0,l,n);break;case 4:s.translate(l,0),s.scale(-1,1),s.rotate(180*Math.PI/180),s.drawImage(e,-l,-n,l,n);break;case 5:s.translate(l,0),s.scale(-1,1),s.rotate(90*Math.PI/180),s.drawImage(e,0,-l,n,l);break;case 7:s.translate(l,0),s.scale(-1,1),s.rotate(270*Math.PI/180),s.drawImage(e,-n,0,n,l);break;default:s.drawImage(e,0,0,l,n)}else"5678".includes(t)?s.drawImage(e,0,0,n,l):s.drawImage(e,0,0,l,n);if(D.oldIOS||D.oldAndroid||D.mQQBrowser||!navigator.userAgent){const e=s.getImageData(0,0,o.width,o.height);d=C.encode(e,100*i)}else d=o.toDataURL("image/jpeg",i);return d}var N=function(e,t=x){return new Promise(((a,r)=>{const{dataUrl:i,width:l,height:n,quality:o}=e,s=E(i),d=q(i);if(s>1||o<1||l||n){const e=new Image;e.src=i,e.onload=()=>{const r=Q(e,s,l,n,o),i=q(r);t(r,i),a({dataUrl:r,blob:i})},e.onerror=()=>{t(null),r(new Error("image load error"))}}else t(i,d),a({dataUrl:i,blob:d})}))},L="the number of pictures exceeds the limit",$={name:{type:String,default:()=>u("image-reader")},disabled:{type:Boolean,deault:()=>!1},maxSize:{type:[String,Number],default:Number.MAX_VALUE},accept:{type:Array,default:()=>[]},isCameraOnly:{type:Boolean,default:!1},isMultiple:{type:Boolean,default:!1},maxAmount:{type:Number,default:Number.MAX_VALUE},beforeRead:{type:Function,default:void 0},isProcessor:{type:Boolean,default:()=>!1},processorOption:{type:Object,default:()=>({width:300,height:300,quality:.8})}},K=(e,{emit:t})=>{const a=f(Date.now()),r=()=>{a.value=Date.now()},i=b((()=>{if(e.accept.length){let t="";return e.accept.forEach((e=>{t+=`image/${e},`})),t.substring(0,t.length-1)}return"image/*"})),l=a=>{if(0===a.errorCode)if(e.isProcessor&&e.processorOption&&a.data){const{width:r,height:i,quality:l}=e.processorOption;N({dataUrl:a.data,width:r,height:i,quality:l}).then((({dataUrl:e})=>{t(h,{dataUrl:e,blob:q(e),file:a.file,errorMsg:"上传成功",errorCode:0})}))}else t(h,{dataUrl:a.data,blob:q(a.data),file:a.file,errorMsg:"上传成功",errorCode:0});else t(g,a)},n=t=>{const a={files:t,size:1e3*+e.maxSize,complete:l};new class{constructor(e){d(this,"files"),d(this,"index"),d(this,"size"),d(this,"complete");const{files:t,size:a}=e;this.files=t,this.index=0,this.size=a||0,this.complete=e.complete}readImage(){this.start(this.files)}start(e){e.map((e=>{this.readFileContent(e)}))}readFileContent(e){if(this.size&&e.size>this.size)return void this.complete({errorCode:101,errorMsg:`上传失败，您的图片超过最大值${this.size}kb`,file:e,data:null});const t=new FileReader;t.onload=()=>{this.complete({errorCode:0,errorMsg:"上传成功",file:e,data:t.result})},t.onerror=()=>{this.complete({errorCode:102,errorMsg:"上传失败",file:e,data:null})},t.readAsDataURL(e)}}(a).readImage()};return{inputTempKey:a,acceptType:i,onFileChange:a=>{const{files:i}=a.target;if(!i||!i.length||e.disabled)return;if(e.beforeRead){if(!e.beforeRead(i))return void r()}const l=[].slice.call(i);if(t(p,{files:l}),l&&e.maxAmount&&l.length>e.maxAmount)return t(g,{errorCode:"103",errorMsg:L,data:null}),void r();n(l)}}},X=m({name:"MdImageReader",props:$,emits:[p,h,g],setup(e,t){const{inputTempKey:a,acceptType:r,onFileChange:i}=K(e,t);return{inputTempKey:a,acceptType:r,onFileChange:i}}});X.render=function(e,t){return y(),w("div",{class:["md-image-reader",{disabled:e.disabled}]},[(y(),w("input",{key:e.inputTempKey,class:"md-image-reader-file",type:"file",name:e.name,maxSize:e.maxSize,maxAmount:e.maxAmount,disabled:e.disabled,accept:e.acceptType,capture:e.isCameraOnly,multiple:e.isMultiple,onChange:t[1]||(t[1]=(...t)=>e.onFileChange&&e.onFileChange(...t))},null,40,["name","maxSize","maxAmount","disabled","accept","capture","multiple"]))],2)};var V=X;V.install=e=>{e.component(V.name,V)};var G=V;const H={class:"\n      md-example-child\n      md-example-child-reader\n      md-example-child-reader-0\n    "},J={class:"image-reader-list"},W={class:"image-reader-item add"},Y=S("p",null,"添加图片",-1);var Z=m(s(o({},{name:"ImageReaderDemo",title:"基本"}),{setup(e){const t=v({reader0:["//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a","//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"]}),a=e=>{e.files.forEach((e=>{console.log("[Mand Mobile] ImageReader Selected:","File Name "+e.name)})),T.loading("图片读取中...")},r=e=>{if(e.dataUrl){(t.reader0||[]).push(e.dataUrl)}T.hide()},i=e=>{T.failed(e.msg)};return(e,l)=>(y(),I("div",H,[S("ul",J,[(y(!0),I(M,null,U(k(t).reader0,((e,a)=>(y(),I("li",{key:a,class:"image-reader-item",style:z({backgroundImage:`url(${e})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"})},[A(k(F),{class:"image-reader-item-del",size:"small",shape:"quarter","fill-color":"#111A34",type:"fill","font-color":"#fff",onClick:e=>((e,a)=>{const r=t[e]||[];r.splice(a,1),t[e]=r})("reader0",a)},{default:_((()=>[A(k(O),{name:"close"})])),_:2},1032,["onClick"])],4)))),128)),S("li",W,[A(k(G),{name:"reader0","is-multiple":"",onSelect:a,onComplete:r,onError:i}),A(k(O),{name:"camera",size:"md",color:"#CCC"}),Y])])]))}})),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const te={class:"\n      md-example-child\n      md-example-child-reader\n      md-example-child-reader-1\n    "},ae={class:"image-reader-list"},re={class:"image-reader-item add"},ie=S("p",null,"添加图片",-1);var le=m(s(o({},{name:"ImageReaderDemo",title:"图片选择并轴向修正，压缩处理"}),{setup(e){const t=v({reader0:[]}),a=()=>{T.loading("图片读取中...")},r=e=>{const a=t.reader0||[],r=e.dataUrl;N({dataUrl:r,width:200,height:200,quality:.1}).then((({dataUrl:e})=>{e&&a.push(e)})),T.hide()},i=e=>{T.failed(e.msg)};return(e,l)=>(y(),I("div",te,[S("ul",ae,[(y(!0),I(M,null,U(k(t).reader0,((e,a)=>(y(),I("li",{key:a,class:"image-reader-item",style:z({backgroundImage:`url(${e})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"})},[A(k(F),{class:"image-reader-item-del",size:"small",shape:"quarter","fill-color":"#111A34",type:"fill","font-color":"#fff",onClick:e=>((e,a)=>{const r=t[e]||[];r.splice(a,1),t[e]=r})("reader0",a)},{default:_((()=>[A(k(O),{name:"close"})])),_:2},1032,["onClick"])],4)))),128)),S("li",re,[A(k(G),{name:"reader1","is-multiple":"",onSelect:a,onComplete:r,onError:i}),A(k(O),{name:"camera",size:"md",color:"#CCC"}),ie])])]))}})),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const oe={"./demo0.vue":ee,"./demo1.vue":ne};var se=B("ImageReader",Object.entries(oe).map((e=>e[1].default)));const de={class:"md-nav"},ce=S("p",{class:"name"},"ImageReader",-1),me=S("p",{class:"name-zh"},"上传图片",-1),ue={class:"md-example image-reader"},pe=["textContent"],he=["textContent"],ge={class:"md-example-content"};se.render=function(e,t,a,r,i,l){const n=P("md-icon");return y(),I(M,null,[S("div",de,[S("p",{class:"home",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[A(n,{name:"home",size:"lg"})]),ce,me]),S("div",ue,[(y(!0),I(M,null,U(e.demos,((e,t)=>(y(),I("section",{key:t,class:"md-example-section"},[S("div",{class:"md-example-title",textContent:j(e.title)},null,8,pe),S("div",{class:"md-example-describe",textContent:j(e.describe)},null,8,he),S("div",ge,[(y(),w(R(e)))])])))),128))])],64)};var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});export{ee as _,ne as a,fe as b};
