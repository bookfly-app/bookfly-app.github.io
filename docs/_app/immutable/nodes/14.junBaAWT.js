import{a as l,t as k,c as C}from"../chunks/BxSTZsxu.js";import{V as lt,av as T,a4 as h,ag as U,Y as A,W as it,_ as g,Z as m,j as t,$ as _}from"../chunks/CPHSnTsz.js";import{s as R}from"../chunks/CDWYztYM.js";import{i as F}from"../chunks/CYO2J7MK.js";import{e as E,i as G}from"../chunks/wX8QaUIw.js";import{s as X}from"../chunks/DqPAjMxq.js";import{d as ct}from"../chunks/Bx1gFvPW.js";import{t as e,s as a}from"../chunks/CSAgp_0I.js";import{p as b}from"../chunks/BKizAegZ.js";import{b as nt}from"../chunks/CukxhjmL.js";import{B as mt}from"../chunks/DMdIt5He.js";import{F as _t}from"../chunks/BjDUfhiK.js";import{d as ft,e as pt,f as dt}from"../chunks/BKupSz3R.js";import{A as ut}from"../chunks/D-3qIKmu.js";import{U as xt}from"../chunks/BdM2LLa_.js";const gt=({params:q,url:r})=>({searchTerm:r.searchParams.get("q")}),Et=Object.freeze(Object.defineProperty({__proto__:null,load:gt},Symbol.toStringTag,{value:"Module"}));var bt=(q,r)=>h(r,"posts"),ht=(q,r)=>h(r,"books"),kt=(q,r)=>h(r,"people"),qt=k('<img class="cover svelte-1ftqvxt">'),yt=k('<div class="nocover svelte-1ftqvxt">?</div>'),Bt=k('<a class="book svelte-1ftqvxt"><div class="book-info svelte-1ftqvxt"><h1 class="svelte-1ftqvxt"> </h1> <h2 class="svelte-1ftqvxt"> </h2></div> <!></a>'),Dt=k('<div class="books svelte-1ftqvxt"></div>'),Pt=k('<div class="people"></div>'),wt=k('<!> <main class="svelte-1ftqvxt"><input type="text" class="svelte-1ftqvxt"> <div class="views svelte-1ftqvxt"><button class="svelte-1ftqvxt">Posts</button> <button class="svelte-1ftqvxt">Books</button> <button class="svelte-1ftqvxt">People</button></div> <!></main> <!>',1);function Gt(q,r){lt(r,!0);let O,{searchTerm:P}=r.data,o=T("posts"),H=T(b([])),I=T(b([])),J=T(b([]));P&&((async()=>h(H,b(await ft(P.replace("+"," ")))))(),(async()=>h(I,b(await pt(P))))(),(async()=>h(J,b(await dt(P.replace("+"," ")))))());var K=wt(),N=U(K);mt(N,{});var S=m(N,2),w=g(S);nt(w,s=>O=s,()=>O);var j=m(w,2),z=g(j);z.__click=[bt,o];var L=m(z,2);L.__click=[ht,o];var Q=m(L,2);Q.__click=[kt,o],_(j);var $=m(j,2);{var tt=s=>{var f=C(),y=U(f);E(y,17,()=>t(H),G,(B,D)=>{ut(B,{get post(){return t(D)}})}),l(s,f)},et=s=>{var f=C(),y=U(f);{var B=i=>{var u=Dt();E(u,21,()=>t(I),G,(M,p)=>{var v=Bt(),d=g(v),x=g(d),V=g(x,!0);_(x);var W=m(x,2),rt=g(W,!0);_(W),_(d);var st=m(d,2);{var ot=c=>{var n=qt();A(()=>X(n,"src",t(p).cover)),l(c,n)},vt=c=>{var n=yt();A((Y,Z)=>{a(n,"background-image",Y),a(n,"color",Z)},[()=>`linear-gradient(${e().accent}, ${e().accent2})`,()=>e().backgroundDark]),l(c,n)};F(st,c=>{t(p).cover?c(ot):c(vt,!1)})}_(v),A((c,n,Y,Z)=>{X(v,"href",`book/${t(p).isbn}`),a(v,"border-color",c),a(x,"color",n),R(V,t(p).title),a(W,"color",Y),R(rt,Z)},[()=>e().textDark,()=>e().textBright,()=>e().textDim,()=>t(p).authors.join(", ")]),l(M,v)}),_(u),l(i,u)},D=i=>{var u=C(),M=U(u);{var p=v=>{var d=Pt();E(d,21,()=>t(J),G,(x,V)=>{xt(x,{get user(){return t(V)}})}),_(d),l(v,d)};F(M,v=>{t(o)==="people"&&v(p)},!0)}l(i,u)};F(y,i=>{t(o)==="books"?i(B):i(D,!1)},!0)}l(s,f)};F($,s=>{t(o)==="posts"?s(tt):s(et,!1)})}_(S);var at=m(S,2);_t(at,{selected:"search"}),A((s,f,y,B,D,i)=>{a(w,"background",s),a(w,"color",f),a(j,"border-color",y),a(z,"color",B),a(L,"color",D),a(Q,"color",i)},[()=>e().backgroundDark,()=>e().textBright,()=>e().textDark,()=>t(o)==="posts"?e().textBright:e().textDull,()=>t(o)==="books"?e().textBright:e().textDull,()=>t(o)==="people"?e().textBright:e().textDull]),l(q,K),it()}ct(["click"]);export{Gt as component,Et as universal};
