import{F as ae,b as re,G as U,h as N,C as g,a as ne,I as F,H as fe,B as G,D as k,f as R,J as M,r as W,e as Z,p as ie,K as $,q as le,L as J,M as L,d as K,N as O,O as se,P as ue,Q as te,R as ve,T as de,V as _e,W as ce,X as oe,Y as he,Z as Ee,m as pe,s as P,_ as Te,$ as Ae}from"./PerO79jO.js";function Ne(l,e){return e}function Ie(l,e,r,t){for(var v=[],d=e.length,s=0;s<d;s++)se(e[s].e,v,!0);var p=d>0&&v.length===0&&r!==null;if(p){var c=r.parentNode;ue(c),c.append(r),t.clear(),x(l,e[0].prev,e[d-1].next)}te(v,()=>{for(var T=0;T<d;T++){var _=e[T];p||(t.delete(_.k),x(l,_.prev,_.next)),ve(_.e,!p)}})}function we(l,e,r,t,v,d=null){var s=l,p={flags:e,items:new Map,first:null},c=(e&U)!==0;if(c){var T=l;s=N?g(de(T)):T.appendChild(ae())}N&&ne();var _=null,I=!1,C=_e(()=>{var a=r();return ce(a)?a:a==null?[]:$(a)});re(()=>{var a=F(C),f=a.length;if(I&&f===0)return;I=f===0;let u=!1;if(N){var w=s.data===fe;w!==(f===0)&&(s=G(),g(s),k(!1),u=!0)}if(N){for(var o=null,h,E=0;E<f;E++){if(R.nodeType===8&&R.data===oe){s=R,u=!0,k(!1);break}var A=a[E],n=t(A,E);h=z(R,p,o,null,A,n,E,v,e,r),p.items.set(n,h),o=h}f>0&&g(G())}if(!N){var i=he;me(a,p,s,v,e,(i.f&M)!==0,t,r)}d!==null&&(f===0?_?W(_):_=Z(()=>d(s)):_!==null&&ie(_,()=>{_=null})),u&&k(!0),F(C)}),N&&(s=R)}function me(l,e,r,t,v,d,s,p){var q,V,Y,B;var c=(v&Ee)!==0,T=(v&(L|O))!==0,_=l.length,I=e.items,C=e.first,a=C,f,u=null,w,o=[],h=[],E,A,n,i;if(c)for(i=0;i<_;i+=1)E=l[i],A=s(E,i),n=I.get(A),n!==void 0&&((q=n.a)==null||q.measure(),(w??(w=new Set)).add(n));for(i=0;i<_;i+=1){if(E=l[i],A=s(E,i),n=I.get(A),n===void 0){var j=a?a.e.nodes_start:r;u=z(j,e,u,u===null?e.first:u.next,E,A,i,t,v,p),I.set(A,u),o=[],h=[],a=u.next;continue}if(T&&xe(n,E,i,v),n.e.f&M&&(W(n.e),c&&((V=n.a)==null||V.unfix(),(w??(w=new Set)).delete(n))),n!==a){if(f!==void 0&&f.has(n)){if(o.length<h.length){var D=h[0],m;u=D.prev;var y=o[0],S=o[o.length-1];for(m=0;m<o.length;m+=1)Q(o[m],D,r);for(m=0;m<h.length;m+=1)f.delete(h[m]);x(e,y.prev,S.next),x(e,u,y),x(e,S,D),a=D,u=S,i-=1,o=[],h=[]}else f.delete(n),Q(n,a,r),x(e,n.prev,n.next),x(e,n,u===null?e.first:u.next),x(e,u,n),u=n;continue}for(o=[],h=[];a!==null&&a.k!==A;)(d||!(a.e.f&M))&&(f??(f=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}o.push(n),u=n,a=n.next}if(a!==null||f!==void 0){for(var H=f===void 0?[]:$(f);a!==null;)(d||!(a.e.f&M))&&H.push(a),a=a.next;var b=H.length;if(b>0){var ee=v&U&&_===0?r:null;if(c){for(i=0;i<b;i+=1)(Y=H[i].a)==null||Y.measure();for(i=0;i<b;i+=1)(B=H[i].a)==null||B.fix()}Ie(e,H,ee,I)}}c&&le(()=>{var X;if(w!==void 0)for(n of w)(X=n.a)==null||X.apply()}),J.first=e.first&&e.first.e,J.last=u&&u.e}function xe(l,e,r,t){t&L&&K(l.v,e),t&O?K(l.i,r):l.i=r}function z(l,e,r,t,v,d,s,p,c,T){var _=(c&L)!==0,I=(c&Te)===0,C=_?I?pe(v):P(v):v,a=c&O?P(s):s,f={i:a,v:C,k:d,a:null,e:null,prev:r,next:t};try{return f.e=Z(()=>p(l,C,a,T),N),f.e.prev=r&&r.e,f.e.next=t&&t.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),t!==null&&(t.prev=f,t.e.prev=f.e),f}finally{}}function Q(l,e,r){for(var t=l.next?l.next.e.nodes_start:r,v=e?e.e.nodes_start:r,d=l.e.nodes_start;d!==t;){var s=Ae(d);v.before(d),d=s}}function x(l,e,r){e===null?l.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{we as e,Ne as i};
