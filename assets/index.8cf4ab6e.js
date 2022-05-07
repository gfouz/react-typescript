var $=Object.defineProperty;var f=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&u(e,n,t[n]);if(f)for(var n of f(t))w.call(t,n)&&u(e,n,t[n]);return e};import{r as c,j as d,s as R,R as E,a as _,F as j,H as z,b as L,c as a}from"./vendor.6915eeb3.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};S();const F="modulepreload",h={},O="/react-typescript/",x=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${O}${s}`,s in h)return;h[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":F,r||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),r)return new Promise((y,v)=>{l.addEventListener("load",y),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function P(e){return c.exports.createElement("svg",m({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),c.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}const o=d.exports.jsx,p=d.exports.jsxs,g=d.exports.Fragment,C=()=>o(g,{children:o(k,{children:o("h1",{children:"the page you are looking for does not exist"})})}),k=R.div`
 

`,N={column:(e,t)=>`display: flex; 
    flex-direction: column; 
    justify-content:${e||"center"};
    align-items: ${t||"center"}`,columnReverse:(e,t)=>`display: flex; 
    flex-direction: column-reverse; 
    justify-content:${e||"center"};
    align-items: ${t||"center"}`,row:(e,t)=>`display: flex; 
    flex-direction: row; 
    justify-content:${e||"center"};
    align-items: ${t||"center"}`,rowReverse:(e,t)=>`display: flex; 
    flex-direction: row-reverse; 
    justify-content:${e||"center"};
    align-items: ${t||"center"}`,text:(e,t)=>`
    text-align:${e||"left"};
    color:${t||"#444444"};`,article:e=>`
   max-width: ${e||"400px"};
   text-align: left;
   color:#444444;
  `,container:e=>`
   max-width: ${e||"400px"};
   text-align: center;
   color:#444444;
  `,centered:()=>`
   display: grid;
   place-items: center;
  `,reset:()=>`
   margin: 0;
   padding: 0;
   font-size: 16px;
  `,crete:"#783a33",red:"#fa0002",sushi:"#98a843",purple:"#623ca3",sunglow:"#fecf32",blue:"#397afa",lotus:"#783a33",white:"#ffffff",emperor:"#783a33",tamarind:"#1c0b1b",cinnamon:"#e46b26",malachite:"#05bb0c",gondola:"#1b0c1a"},A=c.exports.lazy(()=>x(()=>import("./Homepage.78e4c38d.js"),["assets/Homepage.78e4c38d.js","assets/vendor.6915eeb3.js","assets/Footer.363e8df2.js"])),I=c.exports.lazy(()=>x(()=>import("./Contact.143c9eb3.js"),["assets/Contact.143c9eb3.js","assets/vendor.6915eeb3.js","assets/Footer.363e8df2.js"]));E.render(o(_.StrictMode,{children:o(g,{children:o(j,{theme:N,children:o(z,{children:o(c.exports.Suspense,{fallback:p("div",{style:{color:"#0000ff",textAlign:"center"},children:[o("h1",{style:{margin:"2em 0"},children:"Loading..."}),o(P,{color:"#3f51b5",size:"3em"})]}),children:p(L,{children:[o(a,{path:"/",element:o(A,{})}),o(a,{path:"/contact",element:o(I,{})}),o(a,{path:"/404",element:o(C,{})})]})})})})})}),document.getElementById("root"));export{g as F,P as S,p as a,o as j,N as t};
