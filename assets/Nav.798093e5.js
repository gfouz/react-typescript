var m=Object.defineProperty,$=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(i,n,t)=>n in i?m(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,l=(i,n)=>{for(var t in n||(n={}))x.call(n,t)&&d(i,t,n[t]);if(s)for(var t of s(n))v.call(n,t)&&d(i,t,n[t]);return i},o=(i,n)=>$(i,u(n));import{s as c,C as r,u as p,L as y}from"./vendor.3426712c.js";import{r as w,d as b,j as e,F as k}from"./index.fb20ecdf.js";function C(i){return e(j,o(l({},i),{children:i.children}))}const j=c.div`
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
      ${w(i.justify,i.align)};
      height: ${n=>n.height||"100%"};
    `};
  ${i=>i.column&&r`
      ${b(i.justify,i.align)};
      height: ${n=>n.height||"100%"};
    `};
`;function F(i){const n=["/contact","/work","/blog","/"],t=p(),{pathname:h}=t,g=n.filter(a=>a!==h);return e(k,{children:e(B,o(l({},i),{children:e("div",{className:"links",children:g.map((a,f)=>e("div",{children:e(y,{className:"links__item",to:`${a}`,children:e("h4",{className:"",children:a==="/"?"home":a.slice(1)})})},a+f))})}))})}const B=c.div`
  --tallness: ${i=>i.height||"60px"};

  width: 100%;
  height: var(--tallness);
  line-height: var(--tallness);
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
      line-height: var(--tallness);
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
