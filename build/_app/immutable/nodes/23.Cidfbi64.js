import{a as x,t as B}from"../chunks/DexLR8qC.js";import"../chunks/C8glCd1j.js";import{a0 as I,al as K,a2 as D,a1 as j,a4 as r,K as A,a3 as o,a5 as n,y as l}from"../chunks/5f8FJv0s.js";import{s as z}from"../chunks/B69nLCsL.js";import{e as E,i as F}from"../chunks/D-MdWV-n.js";import{d as G}from"../chunks/-jdAx9ne.js";import{t as e,s as a,a as H,b as J}from"../chunks/B3gDZwlR.js";import{i as M}from"../chunks/CHFVCLaB.js";import{g as N}from"../chunks/BX52TFUg.js";import{L as O}from"../chunks/BErkwlK9.js";import{B as P}from"../chunks/B8CG8S0L.js";var Q=()=>N("/settings"),R=(v,u)=>J(l(u)),S=B('<button class="theme svelte-1s7u6bf"><div class="theme-icon svelte-1s7u6bf"></div> <span> </span></button>'),U=B('<!> <main class="svelte-1s7u6bf"><span class="settings-header svelte-1s7u6bf"><button class="back-button svelte-1s7u6bf"><!></button> <h1>Appearance</h1></span> <span class="theme-header svelte-1s7u6bf"><h2 class="header svelte-1s7u6bf">Theme</h2> <button class="add-custom-theme svelte-1s7u6bf">Add Custom</button></span> <!></main>',1);function oa(v,u){I(u,!1),M();var f=U(),g=K(f);P(g,{});var _=o(g,2),b=r(_),c=r(b);c.__click=[Q];var y=r(c);O(y,{get stroke(){return e().background}}),n(c);var L=o(c,2);n(b);var m=o(b,2),k=r(m),h=o(k,2);n(m);var $=o(m,2);E($,1,()=>H,F,(d,t)=>{var s=S();s.__click=[R,t];var i=r(s),p=o(i,2),q=r(p,!0);n(p),n(s),D((w,C)=>{a(s,"border-bottom-color",w),a(i,"background-image",`linear-gradient(${l(t).background}, ${l(t).backgroundDim})`),a(i,"border-color",l(t).accent),a(p,"color",C),z(q,l(t).name)},[()=>e().textDark,()=>e().textDull],A),x(d,s)}),n(_),D((d,t,s,i)=>{a(c,"background-image",d),a(L,"color",t),a(m,"border-color",s),a(k,"color",t),a(h,"background-image",d),a(h,"color",i)},[()=>`linear-gradient(${e().accent}, ${e().accent2})`,()=>e().textBright,()=>e().textDark,()=>e().background],A),x(v,f),j()}G(["click"]);export{oa as component};
