var m=Object.defineProperty,g=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(t,i,a)=>i in t?m(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,e=(t,i)=>{for(var a in i||(i={}))l.call(i,a)&&d(t,a,i[a]);if(r)for(var a of r(i))w.call(i,a)&&d(t,a,i[a]);return t},s=(t,i)=>g(t,c(i));import{r as f,b as p,d as x,j as o,F as h}from"./index.2cbf5c4c.js";import{s as $,C as n}from"./vendor.3426712c.js";const v=t=>o(h,{children:o(b,s(e({},t),{children:t.children}))}),b=$.section`
  width: 100%;
  position: relative;
  height: ${t=>t.height||"100%"};
  margin: ${t=>t.margin||"0"};
  padding: ${t=>t.padding||"0"};
  ${t=>f(t.justify,t.align)};
  flex-wrap: ${t=>t.wrap||"nowrap"};
  background-color: ${t=>t.bg||"transparent"};
  @media (max-width: ${t=>t.rezise||p.xmd}) {
    ${t=>x(t.justify,t.align)};
  }
  ${t=>t.SectionStyles}; 
`,I=t=>o(h,{children:o(u,e({},t))}),u=$.img`
  ${t=>t.cover&&n`
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    `};
  ${t=>t.auto&&n`
      max-width: 100%;
      height: auto;
    `};
  ${t=>t.centered&&n`
      transform: translate(-50%);
    `};  

  top: ${t=>t.top};
  left: ${t=>t.left};
  width: ${t=>t.width};
  right: ${t=>t.right};
  bottom: ${t=>t.bottom};
  position: ${t=>t.position};
  max-width: ${t=>t.maxwidth};
  float: ${t=>t.float||"none"};
  margin: ${t=>t.margin||"0"};
  padding: ${t=>t.padding||"0"};
  border-radius: ${t=>t.radius||"0"};
  box-shadow: ${t=>t.boxshadow||"0"};
`;export{I,v as S};