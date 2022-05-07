var o=Object.defineProperty,l=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var h=(t,i,e)=>i in t?o(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,n=(t,i)=>{for(var e in i||(i={}))x.call(i,e)&&h(t,e,i[e]);if(m)for(var e of m(i))s.call(i,e)&&h(t,e,i[e]);return t},r=(t,i)=>l(t,c(i));import{s as d,F as $}from"./vendor.2f1acf83.js";import{j as a,F as g,t as f}from"./index.ba1d8fdf.js";function v(t){return a(g,{children:a(p,r(n({},t),{children:t.children}))})}const p=d.div`
max-width: ${t=>t.maxWidth||"400px"};
@media (max-width: 700px) {
		max-width: 100%;
	}
margin: ${t=>t.margin||"0"};
display: flex;
background-color: ${t=>t.bg||"transparent"};
.container__grid {
	width: 50%;
	img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
	}

}
`,F=t=>a(g,{children:a($,{theme:f,children:a(w,r(n({},t),{children:a("img",{src:t.src})}))})}),w=d.div`
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
    
`;function j(t){return a(u,r(n({},t),{children:t.children}))}const u=d.article`
    position: relative;
    width: 100%;
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
`;export{v as C,j as H,F as I};
