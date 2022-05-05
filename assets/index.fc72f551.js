import{j as l,r as a,R as h,a as x,F as g,H as y,b as $,c as d}from"./vendor.9924761a.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}};b();const v="modulepreload",f={},R="/react-typescript/",u=function(t,c){return!c||c.length===0?t():Promise.all(c.map(o=>{if(o=`${R}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":v,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((m,p)=>{i.addEventListener("load",m),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};const _={column:(r,t)=>`display: flex; 
    flex-direction: column; 
    justify-content:${r||"center"};
    align-items: ${t||"center"}`,columnReverse:(r,t)=>`display: flex; 
    flex-direction: column-reverse; 
    justify-content:${r||"center"};
    align-items: ${t||"center"}`,row:(r,t)=>`display: flex; 
    flex-direction: row; 
    justify-content:${r||"center"};
    align-items: ${t||"center"}`,rowReverse:(r,t)=>`display: flex; 
    flex-direction: row-reverse; 
    justify-content:${r||"center"};
    align-items: ${t||"center"}`,text:(r,t)=>`
    text-align:${r||"left"};
    color:${t||"#444444"};`,article:r=>`
   max-width: ${r||"400px"};
   text-align: left;
   color:#444444;
  `,container:r=>`
   max-width: ${r||"400px"};
   text-align: center;
   color:#444444;
  `,centered:()=>`
   display: grid;
   place-items: center;
  `,reset:()=>`
   margin: 0;
   padding: 0;
   font-size: 16px;
  `,crete:"#783a33",red:"#fa0002",sushi:"#98a843",purple:"#623ca3",sunglow:"#fecf32",blue:"#397afa",lotus:"#783a33",white:"#ffffff",emperor:"#783a33",tamarind:"#1c0b1b",cinnamon:"#e46b26",malachite:"#05bb0c",gondola:"#1b0c1a"},s=l.exports.jsx,j=l.exports.jsxs,w=l.exports.Fragment,E=a.exports.lazy(()=>u(()=>import("./Homepage.5960726c.js"),["assets/Homepage.5960726c.js","assets/vendor.9924761a.js","assets/Footer.2dd1b6fa.js"])),L=a.exports.lazy(()=>u(()=>import("./Contact.979c2060.js"),["assets/Contact.979c2060.js","assets/vendor.9924761a.js","assets/Footer.2dd1b6fa.js"]));h.render(s(x.StrictMode,{children:s(w,{children:s(g,{theme:_,children:s(y,{children:s(a.exports.Suspense,{fallback:s("div",{style:{color:"#ff0000",margin:"3em"},children:s("h1",{children:"Loading..."})}),children:j($,{children:[s(d,{path:"/",element:s(E,{})}),s(d,{path:"/contact",element:s(L,{})})]})})})})})}),document.getElementById("root"));export{w as F,j as a,s as j,_ as t};
