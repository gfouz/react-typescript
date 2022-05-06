var y=Object.defineProperty,w=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(e,a,n)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))$.call(a,n)&&p(e,n,a[n]);if(m)for(var n of m(a))S.call(a,n)&&p(e,n,a[n]);return e},c=(e,a)=>w(e,k(a));import{s as r,F as h,r as f,L as z}from"./vendor.2f1acf83.js";import{j as t,F as s,t as g,a as i}from"./index.b3223377.js";import{C as N,I as j,a as u,F as A}from"./Footer.152f090c.js";const C=`I use modern JavaScript
frameworks such as React or Vue to create single page application
or full static sites so that among my skills are HTML, CSS, SCSS,
JavaScript and TypeScript. Besides i feel very comfortable with
some react technologies as styled-components, Material UI,
react-query, react-hook-form and NextJs and very soon i will be
learning about Deno that is a new technology on the server side,
and that includes TypeScript by default, even though this has to 
do nothing with React is very interesting for me.


`,F=`
Hello my name is Giovani Fouz and I am self taught web developer. I
also love English language and music so that when i have a time off i
enjoy listening to good English Music. I also like electronics and to
do interesting things on Arduino boards but it is true that time is
not  enough. I began learning c++ in 2017. But i changed my driving goal
to other technologies two years later. Since then my focus is on things
like React, Vue, Express, MongoDB and all the new features related to 
JavaScript technologies.

`,x=e=>t(s,{children:t(h,{theme:g,children:t(M,c(l({},e),{children:e.children}))})}),M=r.section`
  width: 100%;
  display: flex;
  align-items: ${e=>e.align||"center"};
  justify-content: ${e=>e.justify||"space-evenly"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  background-color: ${e=>e.bg||"transparent"};
  @media (max-width: ${e=>e.breakpoint||"700px"}) {
    flex-direction: column;
    align-items: center;
  }
  
`,b=e=>t(s,{children:t(h,{theme:g,children:t(I,c(l({},e),{children:e.children}))})}),I=r.article`
  position: relative;
  display: flex;
  align-items: ${e=>e.align||"center"};
  justify-content: ${e=>e.justify||"flex-start"};
  flex-direction: ${e=>e.direction||"column"};
  max-width: ${e=>e.maxWidth||"400px"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  @media (max-width: 700px){
    max-width:100%;
  }
  .article__text {
    width: ${e=>e.textWidth||"50%"};
  }
  .article__image {
    width: ${e=>e.imageWidth||"50%"};
  }
`,d=e=>t(s,{children:t(T,c(l({},e),{children:e.children}))}),T=r.article`
  max-width: ${e=>e.maxWidth||"100%"};
  padding: ${e=>e.padding};
  margin: ${e=>e.margin};
  p {
    color: ${e=>e.color||"#777777"};
    font-family: ${e=>e.fontFamily||"calibri"};
    font-size: ${e=>e.fontSize};
  }
  @media (min-width: 700px) {
    max-width: ${e=>e.maxWidth||"400px"};
  }
`;function o(e){return t(B,c(l({},e),{children:e.children}))}const B=r.article`
    position: relative;
    width: 100%;
    top:${e=>e.top};
    left: ${e=>e.left};
    text-align: ${e=>e.textAlign||"left"};
    margin: ${e=>e.margin};
    padding: ${e=>e.padding};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: ${e=>e.color||"#444444"};
    font-family: ${e=>e.fontFamily};
    text-transform: ${e=>e.transform};
    letter-spacing: ${e=>e.letterSpacing};
    }
`;function _(e){return f.exports.createElement("svg",l({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),f.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}function H(){return t(s,{children:t(L,{children:t("nav",{className:"navbar",children:i("ul",{className:"navbar__list",children:[t("li",{className:"navbar__item",children:t(z,{to:"/contact",className:"navbar__link",children:"CONTACT"})}),t("li",{className:"navbar__item",children:t("a",{href:"https://gfouz.github.io/react-workshop/#/work",className:"navbar__link",children:"WORK"})}),t("li",{className:"navbar__item",children:t("a",{href:"https://gfouz.github.io/react-workshop/#/blog",className:"navbar__link",children:"BLOG"})})]})})})})}const L=r.div`

.navbar {
    width: 100%;
    position: relative;
    top: -4px;
    background-color: #292925;
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
`,q=()=>t(s,{children:t(h,{theme:g,children:i(R,{children:[i(D,{children:[i(v,{children:[t(o,{color:"#ffffff",children:t("h3",{children:"gfouz"})}),t(_,{color:"#ffffff",size:"1em"})]}),t("img",{className:"banner__image",src:"./images/hellobr.png"}),t(o,{top:"-1em",color:"#803300",letterSpacing:"5px",textAlign:"center",children:t("h3",{children:"gfouz"})})]}),t(H,{}),i(x,{padding:"3em 0",align:"flex-start",children:[i(N,{children:[t("div",{className:"container__grid",children:t("img",{src:"./images/thinking.jpg",alt:"woman"})}),i("div",{className:"container__grid",children:[t(o,{color:"#666666",padding:"0 0.5em",children:t("h3",{children:"Did you know?"})}),t(d,{padding:"0 0.5em",children:t("p",{children:"React hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML."})})]})]}),i(b,{padding:"0 0.5em",children:[t(o,{color:"#666666",padding:"0 0.5em",children:t("h3",{children:"A little about me"})}),t(d,{padding:"0 0.5em",children:t("p",{children:F})})]})]}),i("article",{className:"stack",children:[i(v,{children:[t(o,{color:"#ffffff",children:t("h3",{children:"gfouz"})}),t(_,{color:"#ffffff",size:"1.5em"})]}),i("div",{className:"stack__list",children:[t("h4",{className:"stack__title",children:"Modern React State"}),t("h4",{className:"stack__title",children:"zustang"}),t("h4",{className:"stack__title",children:"react-query"}),t("h4",{className:"stack__title",children:"react-hook-form"})]})]}),i(x,{padding:"2em 0",bg:"#181818",children:[i(b,{padding:"0.1em 1em",children:[t(o,{color:"#666666",children:t("h3",{children:"I use the latest technologies"})}),t(d,{children:t("p",{children:C})})]}),t(j,{margin:"2em 0 0 0",children:t("img",{src:"./images/face.jpg"})})]}),t("section",{className:"contact",children:t(u,{height:"200px",svgColor:"#555555"})}),i(A,{top:"80%",left:"25%",lighttext:!0,textAlign:"right",boxBg:"#224e7f",boxPadding:"0.5em 2em",children:[i("div",{children:[i("h4",{children:["gfouz \xA9 ",new Date().getFullYear()]}),t(u,{size:"20px"}),t("p",{children:"gfouz1975@gmail.com"})]}),t("img",{src:"./images/submarine.jpg"})]})]})})}),R=r.div`
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
  
`,D=r.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    background-image: url('./images/main.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
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
`,v=r.div`
   position: absolute;
   text-align: center;
   top: 5px;
   left: 5px;
   .logo__title {
   color: #444444;
   margin: 5px;
  }
  
`;export{q as default};
