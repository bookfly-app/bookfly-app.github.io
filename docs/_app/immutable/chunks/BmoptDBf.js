import{h as A,w as x,o as B,q as b,aA as c,ao as l,B as m,l as E,aB as V,z as I}from"./CPHSnTsz.js";function z(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const N=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function C(t){return N.includes(t)}const O={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function G(t){return t=t.toLowerCase(),O[t]??t}const P=["touchstart","touchmove"];function R(t){return P.includes(t)}function U(t,e){if(e){const r=document.body;t.autofocus=!0,b(()=>{document.activeElement===r&&t.focus()})}}function F(t){A&&x(t)!==null&&B(t)}let y=!1;function j(){y||(y=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function w(t){var e=m,r=E;c(null),l(null);try{return t()}finally{c(e),l(r)}}function H(t,e,r,n=r){t.addEventListener(e,()=>w(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(!0)}:t.__on_r=()=>n(!0),j()}const q=new Set,D=new Set;function J(t,e,r,n){function a(o){if(n.capture||M.call(e,o),!o.cancelBubble)return w(()=>r.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?b(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function K(t){for(var e=0;e<t.length;e++)q.add(t[e]);for(var r of D)r(t)}function M(t){var g;var e=this,r=e.ownerDocument,n=t.type,a=((g=t.composedPath)==null?void 0:g.call(t))||[],o=a[0]||t.target,d=0,p=t.__root;if(p){var f=a.indexOf(p);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var v=a.indexOf(e);if(v===-1)return;f<=v&&(d=f)}if(o=a[d]||t.target,o!==e){V(t,"currentTarget",{configurable:!0,get(){return o||r}});var k=m,S=E;c(null),l(null);try{for(var u,h=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var i=o["__"+n];if(i!==void 0&&!o.disabled)if(I(i)){var[T,...L]=i;T.apply(o,[t,...L])}else i.call(o,t)}catch(s){u?h.push(s):u=s}if(t.cancelBubble||_===e||_===null)break;o=_}if(u){for(let s of h)queueMicrotask(()=>{throw s});throw u}}finally{t.__root=e,delete t.currentTarget,c(k),l(S)}}}export{q as a,F as b,j as c,K as d,z as e,J as f,U as g,M as h,R as i,C as j,H as l,G as n,D as r};
