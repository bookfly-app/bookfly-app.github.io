import{b as ae,h as C,a as re,j as F,H as ne,c as G,s as b,d as k,i as N,I as M,f as P,g as Q,p as ie,k as W,l as J,m as K,n as fe,o as le,t as te,v as se,w as ue,x as ve,y as de,z as _e,A as ce,B as oe,q as he,C as y,D as L,F as Ee,G as U,J as Z,K as pe,L as Ae,M as Ie}from"./CPHSnTsz.js";function Ce(l,e){return e}function Te(l,e,r,u){for(var v=[],d=e.length,t=0;t<d;t++)fe(e[t].e,v,!0);var p=d>0&&v.length===0&&r!==null;if(p){var c=r.parentNode;le(c),c.append(r),u.clear(),g(l,e[0].prev,e[d-1].next)}te(v,()=>{for(var I=0;I<d;I++){var _=e[I];p||(u.delete(_.k),g(l,_.prev,_.next)),se(_.e,!p)}})}function we(l,e,r,u,v,d=null){var t=l,p={flags:e,items:new Map,first:null},c=(e&Z)!==0;if(c){var I=l;t=C?b(ue(I)):I.appendChild(ve())}C&&re();var _=null,T=!1,m=de(()=>{var a=r();return _e(a)?a:a==null?[]:W(a)});ae(()=>{var a=F(m),i=a.length;if(T&&i===0)return;T=i===0;let s=!1;if(C){var w=t.data===ne;w!==(i===0)&&(t=G(),b(t),k(!1),s=!0)}if(C){for(var o=null,h,E=0;E<i;E++){if(N.nodeType===8&&N.data===ce){t=N,s=!0,k(!1);break}var A=a[E],n=u(A,E);h=$(N,p,o,null,A,n,E,v,e),p.items.set(n,h),o=h}i>0&&b(G())}if(!C){var f=oe;xe(a,p,t,v,e,(f.f&M)!==0,u)}d!==null&&(i===0?_?P(_):_=Q(()=>d(t)):_!==null&&ie(_,()=>{_=null})),s&&k(!0),F(m)}),C&&(t=N)}function xe(l,e,r,u,v,d,t,p){var q,B,V,Y;var c=(v&pe)!==0,I=(v&(y|L))!==0,_=l.length,T=e.items,m=e.first,a=m,i,s=null,w,o=[],h=[],E,A,n,f;if(c)for(f=0;f<_;f+=1)E=l[f],A=t(E,f),n=T.get(A),n!==void 0&&((q=n.a)==null||q.measure(),(w??(w=new Set)).add(n));for(f=0;f<_;f+=1){if(E=l[f],A=t(E,f),n=T.get(A),n===void 0){var j=a?a.e.nodes_start:r;s=$(j,e,s,s===null?e.first:s.next,E,A,f,u,v),T.set(A,s),o=[],h=[],a=s.next;continue}if(I&&ge(n,E,f,v),n.e.f&M&&(P(n.e),c&&((B=n.a)==null||B.unfix(),(w??(w=new Set)).delete(n))),n!==a){if(i!==void 0&&i.has(n)){if(o.length<h.length){var D=h[0],x;s=D.prev;var O=o[0],R=o[o.length-1];for(x=0;x<o.length;x+=1)X(o[x],D,r);for(x=0;x<h.length;x+=1)i.delete(h[x]);g(e,O.prev,R.next),g(e,s,O),g(e,R,D),a=D,s=R,f-=1,o=[],h=[]}else i.delete(n),X(n,a,r),g(e,n.prev,n.next),g(e,n,s===null?e.first:s.next),g(e,s,n),s=n;continue}for(o=[],h=[];a!==null&&a.k!==A;)(d||!(a.e.f&M))&&(i??(i=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}o.push(n),s=n,a=n.next}if(a!==null||i!==void 0){for(var H=i===void 0?[]:W(i);a!==null;)(d||!(a.e.f&M))&&H.push(a),a=a.next;var S=H.length;if(S>0){var ee=v&Z&&_===0?r:null;if(c){for(f=0;f<S;f+=1)(V=H[f].a)==null||V.measure();for(f=0;f<S;f+=1)(Y=H[f].a)==null||Y.fix()}Te(e,H,ee,T)}}c&&he(()=>{var z;if(w!==void 0)for(n of w)(z=n.a)==null||z.apply()}),J.first=e.first&&e.first.e,J.last=s&&s.e}function ge(l,e,r,u){u&y&&K(l.v,e),u&L?K(l.i,r):l.i=r}function $(l,e,r,u,v,d,t,p,c,I){var _=(c&y)!==0,T=(c&Ae)===0,m=_?T?Ee(v):U(v):v,a=c&L?U(t):t,i={i:a,v:m,k:d,a:null,e:null,prev:r,next:u};try{return i.e=Q(()=>p(l,m,a),C),i.e.prev=r&&r.e,i.e.next=u&&u.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),u!==null&&(u.prev=i,u.e.prev=i.e),i}finally{}}function X(l,e,r){for(var u=l.next?l.next.e.nodes_start:r,v=e?e.e.nodes_start:r,d=l.e.nodes_start;d!==u;){var t=Ie(d);v.before(d),d=t}}function g(l,e,r){e===null?l.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{we as e,Ce as i};
