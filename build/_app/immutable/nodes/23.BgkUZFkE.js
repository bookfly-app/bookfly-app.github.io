import{a as x,t as B}from"../chunks/CbWYkoq1.js";import"../chunks/C3v_tK7z.js";import{o as C,al as V,t as D,u as j,w as r,V as A,v as o,x as n,I as l}from"../chunks/PerO79jO.js";import{s as z}from"../chunks/C0lN6YrG.js";import{e as E,i as F}from"../chunks/CIoGpdJn.js";import{d as G}from"../chunks/ANvJsBAK.js";import{t as e,s as a,a as H,b as J}from"../chunks/DOlxBVF0.js";import{i as K}from"../chunks/JlGDnrny.js";import{g as M}from"../chunks/_y_IYZP9.js";import{L as N}from"../chunks/CgBGE8h6.js";import{B as O}from"../chunks/CVbZ-Hxy.js";var P=()=>M("/settings"),Q=(v,d)=>J(l(d)),R=B('<button class="theme svelte-1s7u6bf"><div class="theme-icon svelte-1s7u6bf"></div> <span> </span></button>'),S=B('<!> <main class="svelte-1s7u6bf"><span class="settings-header svelte-1s7u6bf"><button class="back-button svelte-1s7u6bf"><!></button> <h1>Appearance</h1></span> <span class="theme-header svelte-1s7u6bf"><h2 class="header svelte-1s7u6bf">Theme</h2> <button class="add-custom-theme svelte-1s7u6bf">Add Custom</button></span> <!></main>',1);function oa(v,d){C(d,!1),K();var f=S(),g=V(f);O(g,{});var _=o(g,2),b=r(_),c=r(b);c.__click=[P];var w=r(c);N(w,{get stroke(){return e().background}}),n(c);var I=o(c,2);n(b);var m=o(b,2),k=r(m),h=o(k,2);n(m);var L=o(m,2);E(L,1,()=>H,F,(u,t)=>{var s=R();s.__click=[Q,t];var i=r(s),p=o(i,2),$=r(p,!0);n(p),n(s),D((q,y)=>{a(s,"border-bottom-color",q),a(i,"background-image",`linear-gradient(${l(t).background}, ${l(t).backgroundDim})`),a(i,"border-color",l(t).accent),a(p,"color",y),z($,l(t).name)},[()=>e().textDark,()=>e().textDull],A),x(u,s)}),n(_),D((u,t,s,i)=>{a(c,"background-image",u),a(I,"color",t),a(m,"border-color",s),a(k,"color",t),a(h,"background-image",u),a(h,"color",i)},[()=>`linear-gradient(${e().accent}, ${e().accent2})`,()=>e().textBright,()=>e().textDark,()=>e().background],A),x(v,f),j()}G(["click"]);export{oa as component};
