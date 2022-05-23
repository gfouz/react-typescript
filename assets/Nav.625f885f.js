var m=Object.defineProperty,$=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(i,t,e)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,o=(i,t)=>{for(var e in t||(t={}))x.call(t,e)&&s(i,e,t[e]);if(h)for(var e of h(t))v.call(t,e)&&s(i,e,t[e]);return i},l=(i,t)=>$(i,u(t));import{s as d,C as r,u as p,L as y}from"./vendor.3426712c.js";import{r as b,d as w,j as n,F as k}from"./index.2cbf5c4c.js";function C(i){return n(j,l(o({},i),{children:i.children}))}const j=d.div`
  position: relative;
  height: ${i=>i.height};
  width: ${i=>i.width||"100%"};
  max-width: ${i=>i.max};
  min-width: ${i=>i.min};
  margin: ${i=>i.margin};
  padding: ${i=>i.padding};
  background-color: ${i=>i.bg};
  text-align: ${i=>i.textalign};

  ${i=>i.row&&r`
      ${b(i.justify,i.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${i=>i.column&&r`
      ${w(i.justify,i.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${i=>i.boxProps};
`;function F(i){const t=["/contact","/work","/blog","/"],e=p(),{pathname:c}=e,g=t.filter(a=>a!==c);return n(k,{children:n(B,l(o({},i),{children:n("div",{className:"links",children:g.map((a,f)=>n("div",{children:n(y,{className:"links__item",to:`${a}`,children:n("h4",{className:"",children:a==="/"?"home":a.slice(1)})})},a+f))})}))})}const B=d.div`
  --fullheight: ${i=>i.height};

  width: 100%;
  height: var(--fullheight);
  line-height: var(--fullheight);
  top: ${i=>i.top||"0"};
  left: ${i=>i.left||"0"};
  position: ${i=>i.position};
  background-color: ${i=>i.bg};
  margin: ${i=>i.margin||"0"};
  padding: ${i=>i.padding||"0"};
  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${i=>i.color||"#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--fullheight);
      transition: all 0.4s;
    }  
    a:hover {
      color: #50a3c0;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${i=>i.mixed&&r`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
`;export{C as B,F as H};
