var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as D,u as me,r as f,o as K,a as Y,b as v,c as G,w as c,e as i,f as n,N as ge,g as _e,h as fe,z as ve,i as he,j as ke,k as Z,l as ye,m as we,n as Ee,p as Fe,q as xe,s as y,t as be,v as Ne,x as Ie,y as w,A,B as Be,C as De,D as B,E as h,F as q,G as Ae,H as Le,I as L,L as $e,J as X,K as Ce,M as Pe,O as Se,P as Oe,Q as Te,R as Re,S as Ve,T as je,U as Q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=D({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://pikpak.zixiang.workers.dev"],tt=D({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=Y("router-view");return v(),G(n(ke),{locale:n(ve),"date-locale":n(he),"theme-overrides":t.value},{default:c(()=>[i(n(fe),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(_e),null,{default:c(()=>[i(Qe),i(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/pikpak/",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":ot,s||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),s)return new Promise((N,g)=>{l.addEventListener("load",N),l.addEventListener("error",g)})})).then(()=>t())};var at="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),F=!1,m(o))).catch(()=>(x.push("/login"),!1))):r.username&&r.password&&F?new Promise((l,N)=>{const g=setInterval(()=>{F||(clearInterval(g),l(m(o)))},100)}):(x.push("/login?redirect="+x.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const it=h("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[h("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),h("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=w("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},ct=h("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),dt=w(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),pt={class:"bottom-user-info"},mt={key:0,src:at,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},ft={key:0},vt={class:"action"},ht=w(" \u9000\u51FA\u767B\u5F55 "),kt=w("\u6DFB\u52A0"),yt=D({setup(e){const t=f(!1),o=u=>()=>Q(L,null,{default:()=>Q(u)}),a=ye(),s=we(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(Me)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),l=f(),N=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},g=f(),$=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{g.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;k.value=(d=u.data)==null?void 0:d.data})},se=(u,d)=>{console.log(d),a.push("/"+d.key)};K(()=>{N(),$(),oe()});const I=f(),E=f(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:I.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},C=f(!1),ne=u=>{C.value=u<800,t.value||(t.value=u<800)};Ee(s,()=>{C.value&&(t.value=!0)});const ie=Fe(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const le=Y("router-view"),ue=xe("resize");return v(),y(je,null,[be(i(n(X),{"has-sider":"",onResize:ne},{default:c(()=>[i(n(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=_=>t.value=!0),onExpand:d[2]||(d[2]=_=>t.value=!1),bordered:""},{default:c(()=>{var _,P,S,O,T,R,V,j,M,z,J;return[it,i(n(Ie),{options:r.value,value:String(n(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?B("",!0):(v(),y("div",rt,[w(A(n(te)((_=g.value)==null?void 0:_.quota.usage))+" / "+A(n(te)((P=g.value)==null?void 0:P.quota.limit))+" ",1),i(n(Be),{type:"primary",onClick:d[0]||(d[0]=Ft=>E.value=!0)},{default:c(()=>[lt]),_:1}),((S=g.value)==null?void 0:S.quota)?(v(),G(n(De),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):B("",!0),h("p",ut,[i(n(q),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[dt]),_:1})])])),t.value?B("",!0):(v(),y("div",{key:1,class:Ae(["sider-bottom",{vip:((V=k.value)==null?void 0:V.status)==="ok"}])},[h("div",pt,[((j=k.value)==null?void 0:j.status)==="ok"?(v(),y("img",mt)):(v(),y("img",gt)),h("div",_t,[w(A((M=l.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",ft,[i(n(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):B("",!0)]),h("div",vt,[i(n(q),null,{trigger:c(()=>[i(n(L),{onClick:re},{default:c(()=>[i(n($e))]),_:1})]),default:c(()=>[ht]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n(Ce),{style:{height:"100vh"}},{default:c(()=>[i(n(Pe),{style:{"max-height":"100vh"}},{default:c(()=>[i(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),i(n(Ve),{show:E.value,"onUpdate:show":d[5]||(d[5]=_=>E.value=_)},{default:c(()=>[i(n(Se),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(L),{onClick:d[3]||(d[3]=_=>E.value=!1)},{default:c(()=>[i(n(Oe))]),_:1})]),action:c(()=>[i(n(Te),{block:!0,type:"primary",disabled:!I.value,onClick:ae},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:I.value,"onUpdate:value":d[4]||(d[4]=_=>I.value=_)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.efd97986.js"),["assets/list.efd97986.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.efd97986.js"),["assets/list.efd97986.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.efd97986.js"),["assets/list.efd97986.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.d982a48b.js"),["assets/trash.d982a48b.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.377b1eb3.js"),["assets/setting.377b1eb3.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.36d37d88.js"),["assets/invited.36d37d88.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>p(()=>import("./test.40af313f.js"),["assets/test.40af313f.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.ebe7bef7.js"),["assets/shareInfo.ebe7bef7.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.a7be4e79.js"),["assets/login.a7be4e79.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.77e2e8c1.js"),["assets/sms.77e2e8c1.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.bad81948.js"),["assets/register.bad81948.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>p(()=>import("./testtest.45c54bbc.js"),["assets/testtest.45c54bbc.js","assets/vendor.64da71ad.js"])}],Et=Ke({history:Ye(),routes:wt});var x=Et;const b=Ge(tt);b.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});b.config.globalProperties.$http=m;b.use(x);b.use(qe,{router:x,siteIdList:[1280680983]});b.mount("#app");export{te as b,m as i,et as p};
