var _=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(e,a,n)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))y.call(a,n)&&g(e,n,a[n]);if(m)for(var n of m(a))k.call(a,n)&&g(e,n,a[n]);return e},s=(e,a)=>v(e,w(a));import{s as r,F as b,L as N}from"./vendor.6915eeb3.js";import{j as i,F as l,t as x,a as t,S as d}from"./index.8cf4ab6e.js";import{r as S,H as o,C as $,I as z,F as j,a as F}from"./Footer.363e8df2.js";const I=`I use modern JavaScript
frameworks such as React or Vue to create single page application
or full static sites so that among my skills are HTML, CSS, SCSS,
JavaScript and TypeScript. Besides i feel very comfortable with
some react technologies as styled-components, Material UI,
react-query, react-hook-form and NextJs and very soon i will be
learning about Deno that is a new technology on the server side,
and that includes TypeScript by default, even though this has to 
do nothing with React is very important for me.


`,H=`
Hello my name is Giovani Fouz and I am self taught web developer. I
also love English language and music so that when i have a time off i
enjoy listening to good English Music. I also like electronics and to
do interesting things on Arduino boards but it is true that time is
not  enough. I began learning c++ in 2017. But i changed my driving goal
to other technologies two years later. Since then my focus is on things
like React, Vue, Express, MongoDB and all the new features related to 
JavaScript technologies.

`,f=e=>i(l,{children:i(L,s(c({},e),{children:e.children}))}),L=r.section`
  width: 100%;
  flex-wrap: wrap;
  ${S("space-evenly","center")};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  background-color: ${e=>e.bg||"transparent"};
`,p=e=>i(l,{children:i(b,{theme:x,children:i(M,s(c({},e),{children:e.children}))})}),M=r.article`
  position: relative;
  display: flex;
  align-items: ${e=>e.align||"center"};
  justify-content: ${e=>e.justify||"flex-start"};
  flex-direction: ${e=>e.direction||"column"};
  max-width: ${e=>e.maxWidth||"400px"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  @media (max-width: 820px){
    max-width:100%;
  }
  .article__text {
    width: ${e=>e.textWidth||"50%"};
  }
  .article__image {
    width: ${e=>e.imageWidth||"50%"};
  }
`,h=e=>i(l,{children:i(T,s(c({},e),{children:e.children}))}),T=r.article`
  max-width: ${e=>e.maxWidth||"100%"};
  padding: ${e=>e.padding};
  margin: ${e=>e.margin};
  p {
    color: ${e=>e.color||"#777777"};
    font-family: ${e=>e.fontFamily||"calibri"};
    font-size: ${e=>e.fontSize};
  }
  @media (min-width: 820px) {
    max-width: ${e=>e.maxWidth||"400px"};
  }
`;function C(){return i(D,{children:i("div",{className:"line"})})}const D=r.div`
  width: 100%;
   .line {
   	 position: relative;
   	 left: 5%;
     height: 3px;
     animation: line 2s;
     animation-fill-mode: forwards;
   }
   @keyframes line {
   	 from {
   	 	width: 0;
   	 	background-color: #333333;
   	 }
   	 to {
   	 	width: 90%;
   	 	background-color: #af956e;
   	 }
   }
`;function R(){return i(l,{children:i(W,{children:i("nav",{className:"navbar",children:t("ul",{className:"navbar__list",children:[i("li",{className:"navbar__item",children:i("a",{href:"https://gfouz.github.io/react-workshop/#/work",className:"navbar__link",children:"WORK"})}),i("li",{className:"navbar__item",children:i(N,{to:"/contact",className:"navbar__link",children:"CONTACT"})}),i("li",{className:"navbar__item",children:i("a",{href:"https://gfouz.github.io/react-workshop/#/blog",className:"navbar__link",children:"BLOG"})})]})})})})}const W=r.div`
 width: 100%;
.navbar {
    width: 100%;
    position: relative;

    &__list {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 60px;
      width: 100%;
      padding: 0;
    
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0;
      text-decoration: none;
      color: #e6e6fa;
      font-weight: bolder;
    }
  }
`,G=()=>i(l,{children:i(b,{theme:x,children:t(A,{children:[t(B,{children:[t(u,{children:[i(o,{color:"#ffffff",children:i("h3",{children:"gfouz"})}),i(d,{color:"#ffffff",size:"1em"})]}),i("div",{className:"banner__title",children:i(o,{top:"-1em",fontSize:"2.5em",color:"#e6e6fa",font:"literata",children:i("h1",{children:"Portfolio"})})}),i(C,{}),i("div",{className:"banner__navbar",children:i(R,{})}),i(d,{color:"#ffffff",size:"1.5em"})]}),t(f,{padding:"3em 0",align:"flex-start",children:[t(p,{padding:"0 0.5em",children:[i(o,{color:"#666666",padding:"0 0.5em",children:i("h3",{children:"A little about me"})}),i(h,{padding:"0 0.5em",children:i("p",{children:H})})]}),t($,{children:[i("div",{className:"container__image",children:i("img",{src:"./images/thinking.jpg",alt:"woman"})}),t("div",{className:"container__text",children:[i(o,{color:"#666666",padding:"0 0.5em",children:i("h3",{children:"Did you know?"})}),i(h,{padding:"0 0.5em",children:i("p",{children:"React hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML."})})]})]})]}),t("article",{className:"stack",children:[t(u,{children:[i(o,{color:"#444444",children:i("h3",{children:"gfouz"})}),i(d,{color:"#444444",size:"1.5em"})]}),t("div",{className:"stack__list",children:[i("h4",{className:"stack__title",children:"Modern React State"}),i("h4",{className:"stack__title",children:"zustang"}),i("h4",{className:"stack__title",children:"react-query"}),i("h4",{className:"stack__title",children:"react-hook-form"})]})]}),t(f,{padding:"2em 0",bg:"#181818",children:[t(p,{padding:"0.1em 1em",children:[i(o,{color:"#666666",children:i("h3",{children:"I use the latest technologies"})}),i(h,{children:i("p",{children:I})})]}),i(z,{src:"./images/face.jpg",margin:"2em 0 0 0"})]}),i("article",{className:"notfinished",children:i("h1",{children:"without finishing"})}),i(j,{height:"50px",bg:"#222222",children:i(F,{row:!0,children:i(o,{color:"#ffffff",children:t("h3",{children:["gfouz ",new Date().getFullYear()]})})})})]})})}),A=r.div`
  min-height: 100vh;
  font-family: calibri;
  .notfinished {
    text-align: center;
    color: #ffffff;
    line-height: 400px;
    width: 100%;
    height: 400px;
    background-image: url('./images/coffeecup.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
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
  
`,B=r.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    background-color: #333333;
    .banner__title {
    animation: title 1s;
    animation-fill-mode: forwards;
    }
    .banner__navbar {
    width: 100%; 
    margin:0 0 2em 0; 
    animation: navbar 6s;
    animation-fill-mode: forwards;
    }
    @keyframes title {
      from {
        transform: rotateY(180deg);
      }
      to {
        transform: rotateY(0);

      }
    }
    @keyframes navbar {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`,u=r.div`
   position: absolute;
   text-align: center;
   top: 5px;
   left: 5px;
   .logo__title {
   color: #444444;
   margin: 5px;
  }
`;export{G as default};
