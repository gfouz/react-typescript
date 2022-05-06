var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var m=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))j.call(e,n)&&m(t,n,e[n]);if(f)for(var n of f(e))R.call(e,n)&&m(t,n,e[n]);return t};import{j as d,R as l,B as h,C as _,T as w,r as u,a as E,F as L,H as S,b as P,c as x}from"./vendor.2f1acf83.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};C();const O="modulepreload",g={},I="/react-typescript/",y=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${I}${i}`,i in g)return;g[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":O,r||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),r)return new Promise((v,$)=>{c.addEventListener("load",v),c.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},o=d.exports.jsx,a=d.exports.jsxs,F=d.exports.Fragment;function k(t){return a(h,{position:"relative",display:"inline-flex",children:[o(_,p({variant:"determinate"},t)),o(h,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:o(w,{variant:"caption",component:"div",color:"textSecondary",children:`${Math.round(t.value)}%`})})]})}function A(){const[t,e]=l.useState(10);return l.useEffect(()=>{const n=setInterval(()=>{e(i=>i>=100?0:i+10)},800);return()=>{clearInterval(n)}},[]),o(k,{value:t})}const T={column:(t,e)=>`display: flex; 
    flex-direction: column; 
    justify-content:${t||"center"};
    align-items: ${e||"center"}`,columnReverse:(t,e)=>`display: flex; 
    flex-direction: column-reverse; 
    justify-content:${t||"center"};
    align-items: ${e||"center"}`,row:(t,e)=>`display: flex; 
    flex-direction: row; 
    justify-content:${t||"center"};
    align-items: ${e||"center"}`,rowReverse:(t,e)=>`display: flex; 
    flex-direction: row-reverse; 
    justify-content:${t||"center"};
    align-items: ${e||"center"}`,text:(t,e)=>`
    text-align:${t||"left"};
    color:${e||"#444444"};`,article:t=>`
   max-width: ${t||"400px"};
   text-align: left;
   color:#444444;
  `,container:t=>`
   max-width: ${t||"400px"};
   text-align: center;
   color:#444444;
  `,centered:()=>`
   display: grid;
   place-items: center;
  `,reset:()=>`
   margin: 0;
   padding: 0;
   font-size: 16px;
  `,crete:"#783a33",red:"#fa0002",sushi:"#98a843",purple:"#623ca3",sunglow:"#fecf32",blue:"#397afa",lotus:"#783a33",white:"#ffffff",emperor:"#783a33",tamarind:"#1c0b1b",cinnamon:"#e46b26",malachite:"#05bb0c",gondola:"#1b0c1a"},z=u.exports.lazy(()=>y(()=>import("./Homepage.7912c518.js"),["assets/Homepage.7912c518.js","assets/vendor.2f1acf83.js","assets/Footer.152f090c.js"])),B=u.exports.lazy(()=>y(()=>import("./Contact.c8cf9292.js"),["assets/Contact.c8cf9292.js","assets/vendor.2f1acf83.js","assets/Footer.152f090c.js"]));E.render(o(l.StrictMode,{children:o(F,{children:o(L,{theme:T,children:o(S,{children:o(u.exports.Suspense,{fallback:a("div",{style:{color:"#0000ff",textAlign:"center"},children:[o("h1",{children:"Loading..."}),o(A,{})]}),children:a(P,{children:[o(x,{path:"/",element:o(z,{})}),o(x,{path:"/contact",element:o(B,{})})]})})})})})}),document.getElementById("root"));export{F,a,o as j,T as t};
