var _=Object.defineProperty,y=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,a,n)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))k.call(a,n)&&f(e,n,a[n]);if(g)for(var n of g(a))$.call(a,n)&&f(e,n,a[n]);return e},s=(e,a)=>y(e,w(a));import{s as r,F as h,r as p,L as N}from"./vendor.2f1acf83.js";import{j as i,F as c,t as m,a as t}from"./index.ba1d8fdf.js";import{H as o,C as S,I as z}from"./Heading.698f8d3f.js";const j=`I use modern JavaScript
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

`,u=e=>i(c,{children:i(h,{theme:m,children:i(I,s(l({},e),{children:e.children}))})}),I=r.section`
  width: 100%;
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  align-items: ${e=>e.align||"center"};
  justify-content: ${e=>e.justify||"space-evenly"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  background-color: ${e=>e.bg||"transparent"};
  @media (max-width: ${e=>e.breakpoint||"700px"}) {
    flex-direction: column;
    align-items: center;
  }
  
`,b=e=>i(c,{children:i(h,{theme:m,children:i(L,s(l({},e),{children:e.children}))})}),L=r.article`
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
`,d=e=>i(c,{children:i(C,s(l({},e),{children:e.children}))}),C=r.article`
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
`;function H(){return i(T,{children:i("div",{className:"line"})})}const T=r.div`
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
`;function x(e){return p.exports.createElement("svg",l({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),p.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}function R(){return i(c,{children:i(B,{children:i("nav",{className:"navbar",children:t("ul",{className:"navbar__list",children:[i("li",{className:"navbar__item",children:i("a",{href:"https://gfouz.github.io/react-workshop/#/work",className:"navbar__link",children:"WORK"})}),i("li",{className:"navbar__item",children:i(N,{to:"/contact",className:"navbar__link",children:"CONTACT"})}),i("li",{className:"navbar__item",children:i("a",{href:"https://gfouz.github.io/react-workshop/#/blog",className:"navbar__link",children:"BLOG"})})]})})})})}const B=r.div`
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
`,J=()=>i(c,{children:i(h,{theme:m,children:t(F,{children:[t(W,{children:[t(v,{children:[i(o,{color:"#ffffff",children:i("h3",{children:"gfouz"})}),i(x,{color:"#ffffff",size:"1em"})]}),i("div",{className:"banner__title",children:i(o,{top:"-1em",fontSize:"2.5em",color:"#e6e6fa",font:"literata",children:i("h1",{children:"Portfolio"})})}),i(H,{}),i("div",{className:"banner__navbar",children:i(R,{})})]}),t(u,{padding:"3em 0",align:"flex-start",children:[t(b,{padding:"0 0.5em",children:[i(o,{color:"#666666",padding:"0 0.5em",children:i("h3",{children:"A little about me"})}),i(d,{padding:"0 0.5em",children:i("p",{children:M})})]}),t(S,{children:[i("div",{className:"container__grid",children:i("img",{src:"./images/thinking.jpg",alt:"woman"})}),t("div",{className:"container__grid",children:[i(o,{color:"#666666",padding:"0 0.5em",children:i("h3",{children:"Did you know?"})}),i(d,{padding:"0 0.5em",children:i("p",{children:"React hydration is a technique used that is similar to rendering, but instead of having an empty DOM to render all of our react components into, we have a DOM that has already been built, with all our components rendered as HTML."})})]})]})]}),t("article",{className:"stack",children:[t(v,{children:[i(o,{color:"#444444",children:i("h3",{children:"gfouz"})}),i(x,{color:"#444444",size:"1.5em"})]}),t("div",{className:"stack__list",children:[i("h4",{className:"stack__title",children:"Modern React State"}),i("h4",{className:"stack__title",children:"zustang"}),i("h4",{className:"stack__title",children:"react-query"}),i("h4",{className:"stack__title",children:"react-hook-form"})]})]}),t(u,{padding:"2em 0",bg:"#181818",children:[t(b,{padding:"0.1em 1em",children:[i(o,{color:"#666666",children:i("h3",{children:"I use the latest technologies"})}),i(d,{children:i("p",{children:j})})]}),i(z,{src:"./images/face.jpg",margin:"2em 0 0 0"})]}),i("div",{className:"contact"})]})})}),F=r.div`
  min-height: 100vh;
  font-family: calibri;
  .contact {
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
  
`,W=r.div`
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
`,v=r.div`
   position: absolute;
   text-align: center;
   top: 5px;
   left: 5px;
   .logo__title {
   color: #444444;
   margin: 5px;
  }
`;export{J as default};
