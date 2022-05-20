var w=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var p=(e,i,n)=>i in e?w(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,s=(e,i)=>{for(var n in i||(i={}))k.call(i,n)&&p(e,n,i[n]);if(f)for(var n of f(i))$.call(i,n)&&p(e,n,i[n]);return e},m=(e,i)=>y(e,v(i));import{s as l,W as _,C as z,F as S}from"./vendor.3426712c.js";import{b as j,j as t,F as g,a,H as o,S as d,c}from"./index.fb20ecdf.js";import{H,B as r}from"./Nav.798093e5.js";import{S as u,I as x}from"./Image.2f8dfc1c.js";const N={column:(e,i)=>`display: flex; 
    flex-direction: column; 
    justify-content:${e||"center"};
    align-items: ${i||"center"}`,columnReverse:(e,i)=>`display: flex; 
    flex-direction: column-reverse; 
    justify-content:${e||"center"};
    align-items: ${i||"center"}`,row:(e,i)=>`display: flex; 
    flex-direction: row; 
    justify-content:${e||"center"};
    align-items: ${i||"center"}`,rowReverse:(e,i)=>`display: flex; 
    flex-direction: row-reverse; 
    justify-content:${e||"center"};
    align-items: ${i||"center"}`,text:(e,i)=>`
    text-align:${e||"left"};
    color:${i||"#444444"};`,article:e=>`
   max-width: ${e||"400px"};
   text-align: left;
   color:#444444;
  `,container:(e,i)=>`
   width: ${e};
   max-width: ${i};
   text-align: center;
   color:#444444;
  `,centered:()=>`
   display: grid;
   place-items: center;
  `,reset:()=>`
   margin: 0;
   padding: 0;
   font-size: 16px;
  `,crete:"#783a33",red:"#fa0002",sushi:"#98a843",purple:"#623ca3",sunglow:"#fecf32",blue:"#397afa",lotus:"#783a33",white:"#ffffff",emperor:"#783a33",tamarind:"#1c0b1b",cinnamon:"#e46b26",malachite:"#05bb0c",gondola:"#1b0c1a"},F=`I use modern JavaScript
frameworks such as React or Vue to create single page application
or full static sites so that among my skills are HTML, CSS, SCSS,
JavaScript and TypeScript. Besides i feel very comfortable with
some react technologies as styled-components, Material UI,
react-query, react-hook-form and NextJs and very soon i will be
learning about new other and interesting topics about programming.


`,I=`
Hello my name is Giovani Fouz and I am enthusiastic web developer. I
also love English language and music so that when i have a time off i
enjoy listening to good English Music. I also like electronics and to
do interesting things on Arduino boards but it is true that time is
not  enough. I began learning c++ in 2017. But i changed my driving goal
to other technologies two years later. Since then i am focused on things
like React, Vue, Express, MongoDB and all the new features related to 
JavaScript technologies.

`,B=`
Thus at one end of the scale we have discoveries which seem to be due to 
more or less logical reasoning, and at the other end sudden insights
which seem to emerge spontaneously from the depth of the unconscious.

`,h=e=>t(g,{children:t(T,m(s({},e),{children:e.children}))}),T=l.p`
  width: ${e=>e.width};
  text-align: ${e=>e.align||"left"}
  max-width: ${e=>e.maxwidth};
  padding: ${e=>e.padding};
  margin: ${e=>e.margin};
  color: ${e=>e.color||"#666666"};
  font-family: ${e=>e.fontfamily||"calibri"};
  font-size: ${e=>e.fontsize||"var(--global-fontsize)"};
  @media (max-width: ${e=>j.xmd}){
     max-width: 100%;
  }
`;function L(){return t(M,{children:t("div",{className:"line"})})}const M=l.div`
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
`,R=_`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    --global-fontsize: 1.3em;
    --sm: 576px;
    --md: 800px;
    --l: 992px;
    --xl: 1200px;
    --xxl: 1400px;
    text-rendering: optimizeLegibility;
  
  }
  

  `;function A(e){return t(g,{children:t(C,m(s({},e),{children:e.children}))})}const C=l.footer`
  position: relative;
  width: 100%;
  height: ${e=>e.height};
  padding: ${e=>e.padding||"0"};
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
  ${e=>e.simple&&z`
      --full-height: ${i=>i.height}
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${i=>i.align||"center"};
    `};
`,J={top:"-0.4em",text:"Portfolio",fontsize:"1.2em",position:"relative",color:"#e6e6fa",space:"5px",family:"junegull"},P=()=>t(g,{children:a(S,{theme:N,children:[t(R,{}),a(E,{children:[a(G,{children:[a(b,{children:[t(o,{tag:"h3",color:"#ffffff",text:"gfouz"}),t(d,{color:"#ffffff",size:"1em"})]}),t("div",{className:"banner__title",children:t(o,s({},J))}),t(L,{}),t("div",{className:"banner__navbar",children:t(H,{})}),t(d,{color:"#ffffff",size:"1.5em"})]}),a(u,{padding:"2em 0.5em",justify:"space-evenly",children:[t(c,{row:!0,max:"450px",children:t(r,{padding:"0.7em",children:t(x,{src:"./images/html.jpg",alt:"man",radius:"10px",cover:!0})})}),t(c,{row:!0,max:"450px",children:a(r,{padding:"1em",children:[t(o,{tag:"h2",color:"#666666",text:"A little about me"}),t(h,{children:I})]})})]}),a("article",{className:"stack",children:[a(b,{children:[t(o,{tag:"h3",color:"#444444",text:"gfouz"}),t(d,{color:"#444444",size:"1.5em"})]}),t(r,{width:"250px",children:a("div",{className:"stack__list",children:[t("h4",{className:"stack__title",children:"Modern React State management"}),t("h4",{className:"stack__title",children:"zustang"}),t("h4",{className:"stack__title",children:"react-query"}),t("h4",{className:"stack__title",children:"react-hook-form"})]})})]}),a(u,{padding:"2em 0",bg:"#181818",align:"flex-start",justify:"space-evenly",children:[t(c,{row:!0,max:"450px",children:a(r,{padding:"2em",children:[t(o,{tag:"h1",color:"#999999",text:"Technologies"}),t(h,{color:"#999999",children:t("p",{children:F})})]})}),t(c,{row:!0,max:"450px",children:a(r,{padding:"2em",children:[t(x,{src:"./images/face2.png",alt:"man",radius:"10px",cover:!0,float:"left",margin:"0 1em"}),t(o,{tag:"h1",color:"#999999",text:"Inspiration"}),t(h,{color:"#999999",children:B})]})})]}),t(A,{bg:"#434343",padding:"2em 0",children:t(c,{row:!0,children:a(r,{padding:"1em",textalign:"center",children:[t(d,{color:"#ffffff",size:"3em"}),a(r,{padding:"1em",textalign:"left",children:[t(o,{color:"#666666",text:"Always learning "}),a(h,{children:["Having goals and staying committed to them will keep our focus on the things that we have identified as essential to reaching our desired outcomes.",t("p",{children:a("strong",{children:["gfouz \xA9 ",new Date().getFullYear()]})})]})]})]})})})]})]})}),E=l.div`
  min-height: 100vh;
  font-family: calibri;
  .notfinished {
	text-align: center;
	color: #ffffff;
	line-height: 400px;
	width: 100%;
	height: 400px;
	background-image: url("./images/coffeecup.jpg");
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
	background-image: url("./images/laptop.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
  }
  .stack__image {
	max-width: 100%;
	height: auto;
  }
  .stack__list {
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
`,G=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5em 0;
  background-color: #333333;
  .banner__title {
	animation: title 1s;
	animation-fill-mode: forwards;
  }
  .banner__navbar {
	width: 100%;
	margin: 0 0 2em 0;
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
`,b=l.div`
  position: absolute;
  text-align: center;
  top: 5px;
  left: 5px;
  .logo__title {
	color: #444444;
	margin: 5px;
  }
`;export{P as default};
