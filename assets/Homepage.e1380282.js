var v=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(e,a,n)=>a in e?v(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,r=(e,a)=>{for(var n in a||(a={}))$.call(a,n)&&d(e,n,a[n]);if(c)for(var n of c(a))k.call(a,n)&&d(e,n,a[n]);return e},l=(e,a)=>w(e,y(a));import{s as o,F as b,d as h,r as g,L as z}from"./vendor.2f1acf83.js";import{j as t,F as s,t as _,a as i}from"./index.2add8b72.js";import{F as N,C as m,a as S}from"./Footer.90135e94.js";const C=`I use modern JavaScript
frameworks such as React or Vue to create single page application
or full static sites so that among my skills are HTML, CSS, SCSS,
JavaScript and TypeScript. Besides i feel very comfortable with
some react technologies as styled-components, Material UI,
react-query, react-hook-form and NextJs and very soon i will be
learning about Deno that is a new technology on the server side,
and that includes TypeScript by default, even though this has to 
do nothing with React is very interesting for me.


`,M=`
Hello my name is Giovani Fouz and I am self taught web developer. I
also love English language and music so that when i have a time off i
enjoy listening to good English Music. I also like electronics and to
do interesting things on Arduino boards but it is true that time is
not  enough. I began learning c++ in 2017. But i changed my driving goal
to other technologies two years later. Since then my focus is on things
like React, Vue, Express, MongoDB and all the new features related to 
JavaScript technologies.

`,p=e=>t(s,{children:t(b,{theme:_,children:t(j,l(r({},e),{children:e.children}))})}),j=o.section`
  width: 100%;
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  background-color: ${e=>e.bg||"transparent"};
  ${({theme:e})=>e.row("space-evenly","flex-start")};
  @media (max-width: ${e=>e.breakpoint||"700px"}) {
    ${({theme:e})=>e.column("flex-start","center")};
  }
`;function f(e){return t(F,l(r({},e),{children:e.children}))}const F=o.article`
  padding: ${e=>e.padding||"0"};
  margin: ${e=>e.margin||"0"};
  max-width: ${e=>e.maxWidth||"400px"};
  text-align: ${e=>e.textAlign||"left"};
  font-family: ${e=>e.fontFamily||"calibri"};
  font-size: ${e=>e.fontSize};
  p {
    color: ${e=>e.textColor||"#888888"};
    padding: ${e=>e.textPadding||"0"};
    margin: ${e=>e.textMargin||"0"};
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${e=>e.titleColor||"#777777"};
    padding: ${e=>e.titlePadding||"0"};
    margin: ${e=>e.titleMargin||"0"};
  }
`;function A(e){return t(s,{children:t(P,l(r({},e),{children:e.children}))})}const P=o.aside`
  position: relative;
  display: flex;
  text-align: ${e=>e.textAlign||"center"};
  max-width: ${e=>e.maxWidth||"400px"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  @media (max-width: ${e=>e.breakpoint||"700px"}) {
    max-width: 600px;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    padding: ${e=>e.textPadding||"0"};
    margin: ${e=>e.textMargin||"0"};
    font-size: ${e=>e.fontSize};
    text-align: left;
    font-family: ${e=>e.fontFamily||"calibri"};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    color: ${e=>e.titleColor||"#777777"};
  }
  p {
    color: ${e=>e.textColor||"#888888"};
  }
  img {
    max-width: ${e=>e.imageSize||"100%"};
    padding: ${e=>e.imagePadding||"0"};
    margin: ${e=>e.imageMargin||"0"};
    object-fit: cover;
    height: 100%;
  }

  div {
    width: ${e=>e.boxSize||"50%"};
  }
  ${e=>e.column&&h`
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `};

  ${e=>e.row&&h`
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    `};
`;function u(e){return g.exports.createElement("svg",r({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),g.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}function B(){return t(s,{children:t(I,{children:t("nav",{className:"navbar",children:i("ul",{className:"navbar__list",children:[t("li",{className:"navbar__item",children:t(z,{to:"/contact",className:"navbar__link",children:"CONTACT"})}),t("li",{className:"navbar__item",children:t("a",{href:"https://gfouz.github.io/react-workshop/#/work",className:"navbar__link",children:"WORK"})}),t("li",{className:"navbar__item",children:t("a",{href:"https://gfouz.github.io/react-workshop/#/blog",className:"navbar__link",children:"BLOG"})})]})})})})}const I=o.div`

.navbar {
    width: 100%;
    position: relative;
    top: -4px;
    background-color: #fe9900;
    &__list {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 30px;
      width: 100%;
      padding: 0;
    
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0;
      text-decoration: none;
      color: #ffffff;
      font-weight: bolder;
    }
  }
`,O=()=>t(s,{children:t(b,{theme:_,children:i(L,{children:[i(R,{children:[i(x,{children:[t("h3",{className:"logo__title",children:"gfouz"}),t(u,{color:"#444444",size:"1em"})]}),t("img",{className:"banner__image",src:"./images/banner.jpg"}),t("img",{className:"banner__title",src:"./images/hello.png"})]}),t("header",{children:t(B,{})}),i(p,{padding:"3em 0",children:[i(A,{padding:"0.5em",titleColor:"#006680",imagePadding:"0.5em",children:[t("div",{children:t("img",{src:"./images/thinking.jpg",alt:"woman"})}),i("div",{className:"nameless",children:[t("h3",{children:"Did you know?"}),t("p",{children:"React hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML."})]})]}),i(f,{padding:"0.5em",titleColor:"#006680",children:[t("h3",{children:"A little about me"}),t("p",{children:M})]})]}),i("article",{className:"stack",children:[i(x,{children:[t("h2",{className:"logo__title",children:"gfouz"}),t(u,{color:"#ffffff",size:"1.5em"})]}),i("div",{className:"stack__list",children:[t("h4",{className:"stack__title",children:"Modern React State"}),t("h4",{className:"stack__title",children:"zustang"}),t("h4",{className:"stack__title",children:"react-query"}),t("h4",{className:"stack__title",children:"react-hook-form"})]})]}),i(p,{padding:"2em 0",bg:"#181818",children:[i(f,{padding:"0.1em 1em",textColor:"#b2b2b2",children:[t("h3",{children:"I use these technologies"}),t("p",{children:C})]}),t(N,{imagePercentage:"60%",padding:"2em 1em",children:t("img",{className:"technical__image",src:"./images/face.jpg"})})]}),t("section",{className:"contact",children:t(m,{height:"200px",svgColor:"#555555"})}),i(S,{top:"80%",left:"25%",lighttext:!0,textAlign:"right",boxBg:"#224e7f",boxPadding:"0.5em 2em",children:[i("div",{children:[i("h4",{children:["gfouz \xA9 ",new Date().getFullYear()]}),t(m,{size:"20px"}),t("p",{children:"gfouz1975@gmail.com"})]}),t("img",{src:"./images/submarine.jpg"})]})]})})}),L=o.div`
  min-height: 100vh;
  font-family: calibri;
  .stack {
    ${({theme:e})=>e.centered()}
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    background-image: url('./images/laptop.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .stack__image {
    max-width: 100%;
    height: auto;
  }
  .stack__list {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    border-radius: 5px;
    background-color: #22222290;
    box-shadow: 1px 1px 10px #222222;
  }
  .stack__title {
    ${({theme:e})=>e.reset()};
    color: ${({theme:e})=>e.white};
    text-shadow: 1px 1px 10px #000000;
    text-transform: uppercase;
  }
  
`,R=o.div`
    position: relative;
    width: 100%;
    text-align: right;
    background-color: #f6f6f6;
    .banner__image {
    max-width: 30%;
    height: auto;
    @media (max-width: 600px){
      max-width: 70%;
    }
  }
  .banner__title {
    position: absolute;
    top:25%;
    left: 12%;
    max-width: 60%;
    height: auto;
  }
`,x=o.div`
   position: absolute;
   text-align: center;
   top: 5px;
   left: 5px;
   .logo__title {
   color: #444444;
   margin: 5px;
  }
  
`;export{O as default};
