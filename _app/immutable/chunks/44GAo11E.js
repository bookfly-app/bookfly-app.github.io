import{h as P,T as V,P as x,q as g,f as l,e as f,Y as w,L as E,aE as A,aF as I,W as N}from"./Cd4famqs.js";function R(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const O=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function z(e){return O.includes(e)}const W={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function G(e){return e=e.toLowerCase(),W[e]??e}const j=["touchstart","touchmove"];function U(e){return j.includes(e)}function Y(e,t){if(t){const r=document.body;e.autofocus=!0,g(()=>{document.activeElement===r&&e.focus()})}}function H(e){P&&V(e)!==null&&x(e)}let y=!1;function q(){y||(y=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function m(e){var t=w,r=E;l(null),f(null);try{return e()}finally{l(t),f(r)}}function J(e,t,r,n=r){e.addEventListener(t,()=>m(r));const o=e.__on_r;o?e.__on_r=()=>{o(),n(!0)}:e.__on_r=()=>n(!0),q()}const B=new Set,D=new Set;function M(e,t,r,n={}){function o(a){if(n.capture||C.call(t,a),!a.cancelBubble)return m(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?g(()=>{t.addEventListener(e,o,n)}):t.addEventListener(e,o,n),o}function K(e,t,r,n,o){var a={capture:n,passive:o},i=M(e,t,r,a);(t===document.body||t===window||t===document)&&A(()=>{t.removeEventListener(e,i,a)})}function Q(e){for(var t=0;t<e.length;t++)B.add(e[t]);for(var r of D)r(e)}function C(e){var b;var t=this,r=t.ownerDocument,n=e.type,o=((b=e.composedPath)==null?void 0:b.call(e))||[],a=o[0]||e.target,i=0,p=e.__root;if(p){var _=o.indexOf(p);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var v=o.indexOf(t);if(v===-1)return;_<=v&&(i=_)}if(a=o[i]||e.target,a!==t){I(e,"currentTarget",{configurable:!0,get(){return a||r}});var k=w,L=E;l(null),f(null);try{for(var u,h=[];a!==null;){var d=a.assignedSlot||a.parentNode||a.host||null;try{var c=a["__"+n];if(c!==void 0&&!a.disabled)if(N(c)){var[S,...T]=c;S.apply(a,[e,...T])}else c.call(a,e)}catch(s){u?h.push(s):u=s}if(e.cancelBubble||d===t||d===null)break;a=d}if(u){for(let s of h)queueMicrotask(()=>{throw s});throw u}}finally{e.__root=t,delete e.currentTarget,l(k),f(L)}}}export{B as a,H as b,q as c,Q as d,R as e,M as f,Y as g,C as h,U as i,z as j,K as k,J as l,G as n,D as r};
