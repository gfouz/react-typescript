var j=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&g(e,o,t[o]);if(x)for(var o of x(t))C.call(t,o)&&g(e,o,t[o]);return e},u=(e,t)=>L(e,R(t));import{j as m,s as h,C as p,r as a,R as O,a as P,H as k,b as H,c as d}from"./vendor.3426712c.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};I();const A="modulepreload",$={},B="/react-typescript/",f=function(t,o){return!o||o.length===0?t():Promise.all(o.map(l=>{if(l=`${B}${l}`,l in $)return;$[l]=!0;const n=l.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":A,n||(s.as="script",s.crossOrigin=""),s.href=l,document.head.appendChild(s),n)return new Promise((E,z)=>{s.addEventListener("load",E),s.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function D(e,t){return`display: flex; 
    flex-direction: row; 
    justify-content:${e||"center"};
    align-items: ${t||"center"};`}function y(e,t){return`display: flex; 
    flex-direction: column; 
    justify-content:${e||"center"};
    align-items: ${t||"center"};`}const _={sm:"576px",md:"768px",xmd:"840px",l:"993px",xl:"1200px",xxl:"1400px"},r=m.exports.jsx,b=m.exports.jsxs,v=m.exports.Fragment;function F(e){return r(M,u(c({},e),{children:e.children}))}const M=h.div`
background-color: ${e=>e.bg};
flex-wrap: ${e=>e.wrap||"nowrap"};
border: ${e=>e.border||"none"};
border-radius: ${e=>e.radius||"0"};
width: ${e=>e.width};
max-width: ${e=>e.max};
height: ${e=>e.height||"100%"};
padding: ${e=>e.padding||"0"};
@media (max-width: ${e=>_.xmd}){
    ${e=>y(e.justify,e.align)};
  }
@media (max-width: ${e=>_.xmd}){
     max-width: 100%;
  }  
${e=>e.row&&p`
    ${D(e.justify,e.align)};
  `};
${e=>e.column&&p`
    ${y(e.justify,e.align)};
  `};
`;function w(e){let t=e.tag||"h1";const o=a.exports.createElement(t,null,`${e.text}`);return r(v,{children:r(N,u(c({},e),{children:o}))})}const N=h.div`
  top: ${e=>e.top};
  left: ${e=>e.left};
  right: ${e=>e.right};
  bottom: ${e=>e.bottom};
  color: ${e=>e.color};
  margin: ${e=>e.margin};
  max-width: ${e=>e.maxwidth};
  font-size: ${e=>e.fontsize};
  text-align: ${e=>e.textalign};
  font-family: ${e=>e.family};
  letter-spacing: ${e=>e.space};
  text-transform: ${e=>e.transform};
  position: ${e=>e.position||"static"};
`;function T(e){return a.exports.createElement("svg",c({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}const V=()=>r(q,{children:r("div",{className:"card",children:b(F,{column:!0,radius:"5px",justify:"center",align:"center",height:"200px",children:[r(w,{color:"#ffffff",text:"Portfolio"}),r(T,{size:"2em",color:"#ffffff"}),r(w,{color:"#ffffff",text:"Loading..."})]})})}),q=h.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  .card {
    padding: 1em;
    text-align: center;
    background-color: #333333;
    border-radius: 8px;

  }
`,W=a.exports.lazy(()=>f(()=>import("./index.7547855c.js"),["assets/index.7547855c.js","assets/vendor.3426712c.js","assets/Nav.798093e5.js","assets/Image.2f8dfc1c.js"])),G=a.exports.lazy(()=>f(()=>import("./index.9787caae.js"),["assets/index.9787caae.js","assets/vendor.3426712c.js","assets/Nav.798093e5.js","assets/Image.2f8dfc1c.js"])),K=a.exports.lazy(()=>f(()=>import("./index.76a03179.js"),["assets/index.76a03179.js","assets/Nav.798093e5.js","assets/vendor.3426712c.js"])),U=a.exports.lazy(()=>f(()=>import("./index.9b659b67.js"),["assets/index.9b659b67.js","assets/Nav.798093e5.js","assets/vendor.3426712c.js"]));O.render(r(P.StrictMode,{children:r(v,{children:r(k,{children:r(a.exports.Suspense,{fallback:r(V,{}),children:b(H,{children:[r(d,{path:"/",element:r(W,{})}),r(d,{path:"/contact",element:r(G,{})}),r(d,{path:"/work",element:r(K,{})}),r(d,{path:"/blog",element:r(U,{})})]})})})})}),document.getElementById("root"));export{v as F,w as H,T as S,b as a,_ as b,F as c,y as d,r as j,D as r};
