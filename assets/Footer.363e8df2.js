var x=Object.defineProperty,f=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var m=(t,e,i)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,r=(t,e)=>{for(var i in e||(e={}))$.call(e,i)&&m(t,i,e[i]);if(g)for(var i of g(e))u.call(e,i)&&m(t,i,e[i]);return t},a=(t,e)=>f(t,s(e));import{s as l,C as o,F as w}from"./vendor.6915eeb3.js";import{j as n,F as d,t as y}from"./index.8cf4ab6e.js";function p(t,e){return`display: flex; 
    flex-direction: row; 
    justify-content:${t||"center"};
    align-items: ${e||"center"};`}function v(t,e){return`display: flex; 
    flex-direction: column; 
    justify-content:${t||"center"};
    align-items: ${e||"center"};`}let h="",c="";function A(t){return h=t.justify||"center",c=t.align||"center",n(F,a(r({},t),{children:t.children}))}const F=l.div`
  width: 100%;
  height: 100%;
  ${t=>t.row&&o`
      ${p(h,c)};
    `};
  ${t=>t.column&&o`
      ${v(h,c)};
    `};
`;function H(t){return n(d,{children:n(S,a(r({},t),{children:t.children}))})}const S=l.div`
max-width: ${t=>t.maxWidth||"400px"};
@media (max-width: 820px) {
		max-width: 100%;
	}
margin: ${t=>t.margin||"0"};
display: flex;
background-color: ${t=>t.bg||"transparent"};
.container__image {
	width: 50%;
	text-align: center;
	img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.container__text {
	width: 50%;
	text-align: left;
}
`,k=t=>n(d,{children:n(w,{theme:y,children:n(b,a(r({},t),{children:n("img",{src:t.src})}))})}),b=l.div`
    text-align: ${t=>t.textAlign||"center"};
    max-width: ${t=>t.maxWidth||"400px"}
    padding: ${t=>t.padding||"0"};
    img {
    margin: ${t=>t.margin||"0"};  
    max-width: ${t=>t.imageSize||"100%"};
    height: auto;
    }
    @media (max-width: 700px) {
    max-width: 100%;
    img {
    max-width: "100%";
    height: auto;
    }
    }
    
`;function W(t){return n(j,a(r({},t),{children:t.children}))}const j=l.article`
    position: relative;
    width: ${t=>t.width||"fit-content"};
    top:${t=>t.top};
    left: ${t=>t.left};
    text-align: ${t=>t.textAlign||"left"};
    margin: ${t=>t.margin};
    padding: ${t=>t.padding};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: ${t=>t.color||"#444444"};
    font-family: ${t=>t.font||"calibri"};
    font-size: ${t=>t.fontSize};
    text-transform: ${t=>t.transform};
    letter-spacing: ${t=>t.letterSpacing};
    }
`;function B(t){return n(d,{children:n(C,a(r({},t),{children:t.children}))})}const C=l.footer`
  height: ${t=>t.height};
  color: ${t=>t.color};
  background-color: ${t=>t.bg};
  ${t=>t.simple&&o`
      --full-height: ${e=>e.height}
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${e=>e.textAlign||"center"};
    `};
`;export{H as C,B as F,W as H,k as I,A as a,p as r};
