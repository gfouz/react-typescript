var h=Object.defineProperty,c=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e)=>{for(var i in e||(e={}))x.call(e,i)&&l(t,i,e[i]);if(r)for(var i of r(e))p.call(e,i)&&l(t,i,e[i]);return t},d=(t,e)=>c(t,m(e));import{j as a,F as g,t as $}from"./index.fc72f551.js";import{s,F as f,C as n}from"./vendor.9924761a.js";const j=t=>a(g,{children:a(f,{theme:$,children:a(u,d(o({},t),{children:t.children}))})}),u=s.figure`
    position: relative;
    text-align: center;
    color:#444444;
    max-width: ${t=>t.maxwidth||"400px"}
    margin: ${t=>t.margin||"0"};
    @media (max-width: 700px) {
    max-width: 100%;
    img {
    max-width: "100%";
    height: auto;
    }
    }
    img {
    max-width: ${t=>t.imagePercentage||"100%"};
    height: auto;
    padding: ${t=>t.padding||"0"}
    }
`;function v(t){return a(g,{children:a(y,d(o({},t),{children:t.children}))})}const y=s.footer`
  position: relative;
  width: 100%;
  display: ${t=>t.display};
  text-align: ${t=>t.textAlign};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: ${t=>t.titlePosition};
    left: ${t=>t.titleLeft};
    top: ${t=>t.titleTop};
    padding: ${t=>t.titlePadding||"0"};
    margin: ${t=>t.titleMargin||"0"};
    color: ${t=>t.titleColor};
  }
  div {
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: ${t=>t.textPadding||"0"};
    margin: ${t=>t.textMargin||"0"};
    top: ${t=>t.top||"0"};
    left: ${t=>t.left||"0"};
    text-shadow: ${t=>t.textShadow};
    background-color: ${t=>t.background};
  }
  img {
    max-width: ${t=>t.imageSize||"100%"};
    padding: ${t=>t.imagePadding||"0"};
    margin: ${t=>t.imageMargin||"0"};
    object-fit: cover;
    height: 100%;
  }

  ${t=>t.centered&&n`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
  ${t=>t.justify&&n`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    `};
    ${t=>t.dispersed&&n`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};
  ${t=>t.lighttext&&n`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        color: #ffffff;
      }
      div {
        background-color: ${e=>e.boxBg||"#22222240"};
        box-shadow: 1px 1px 10px #222222;
        border-radius: 5px;
        padding: ${e=>e.boxPadding||"0"};
      }
    `};
`;export{j as F,v as a};
