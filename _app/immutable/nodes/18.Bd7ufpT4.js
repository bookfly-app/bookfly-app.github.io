import{a as t,t as d,c as g}from"../chunks/D6bbjQKa.js";import{o as er,al as i,u as or,v as h,w as U,x as y,t as B,D as o,a9 as H,am as tr}from"../chunks/BoYJbVl0.js";import{s as T}from"../chunks/CRq8brLZ.js";import{a as p}from"../chunks/BijDdK7v.js";import{i as q}from"../chunks/DXGzWa6H.js";import{e as A,i as C}from"../chunks/DR4kThJq.js";import{d as ar}from"../chunks/BhJvXT8z.js";import{B as lr,s as u,t as f}from"../chunks/Cic6AYzS.js";import{p as sr}from"../chunks/DZX_dtYD.js";import{h as nr,i as E}from"../chunks/BouDITe6.js";import{F as ir}from"../chunks/B-72_mP-.js";import{P as mr}from"../chunks/CJkIWee_.js";import{U as G}from"../chunks/CKXKQr4p.js";const fr=({params:_})=>_,Sr=Object.freeze(Object.defineProperty({__proto__:null,load:fr},Symbol.toStringTag,{value:"Module"}));var vr=(_,v)=>H(v,"following"),_r=d('<button class="svelte-1g6s5p3"> </button>'),cr=(_,v)=>H(v,"followers"),gr=d('<button class="svelte-1g6s5p3"> </button>'),pr=d('<div class="view svelte-1g6s5p3"><!> <!></div> <!>',1),ur=d("<!> <!>",1),dr=d("<!> <!>",1);function zr(_,v){er(v,!0);let n=tr("following"),{username:J}=v.data,k=sr(nr(J)),D=k.then(c=>Promise.all(c.following.map(w=>E(w)))),$=k.then(c=>Promise.all(c.followers.map(w=>E(w))));var j=dr(),O=i(j);lr(O,{});var K=h(O,2);mr(K,{children:(c,w)=>{var S=ur(),z=i(S);p(z,()=>k,null,(Q,wr)=>{var I=pr(),b=i(I),L=U(b);p(L,()=>D,null,(e,a)=>{var r=_r();r.__click=[vr,n];var m=U(r);y(r),B((l,s)=>{u(r,"color",l),u(r,"border-color",s),T(m,`Following (${o(a).length??""})`)},[()=>o(n)==="following"?f().textBright:f().textDull,()=>o(n)==="following"?f().accent:"transparent"]),t(e,r)});var R=h(L,2);p(R,()=>$,null,(e,a)=>{var r=gr();r.__click=[cr,n];var m=U(r);y(r),B((l,s)=>{u(r,"color",l),u(r,"border-color",s),T(m,`Followers (${o(a).length??""})`)},[()=>o(n)==="followers"?f().textBright:f().textDull,()=>o(n)==="followers"?f().accent:"transparent"]),t(e,r)}),y(b);var V=h(b,2);{var W=e=>{var a=g(),r=i(a);p(r,()=>D,null,(m,l)=>{var s=g(),x=i(s);A(x,17,()=>o(l),C,(F,P)=>{G(F,{get user(){return o(P)}})}),t(m,s)}),t(e,a)},X=e=>{var a=g(),r=i(a);{var m=l=>{var s=g(),x=i(s);p(x,()=>$,null,(F,P)=>{var M=g(),Y=i(M);A(Y,17,()=>o(P),C,(Z,rr)=>{G(Z,{get user(){return o(rr)}})}),t(F,M)}),t(l,s)};q(r,l=>{o(n)==="followers"&&l(m)},!0)}t(e,a)};q(V,e=>{o(n)==="following"?e(W):e(X,!1)})}B(e=>u(b,"background",e),[()=>f().backgroundDark]),t(Q,I)});var N=h(z,2);ir(N,{selected:"profile"}),t(c,S)},$$slots:{default:!0}}),t(_,j),or()}ar(["click"]);export{zr as component,Sr as universal};
