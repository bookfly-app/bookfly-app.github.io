import{ac as q,an as C,ao as F,ap as N,aq as Y,I as _,ab as M,B as A,ar as U,as as G,k as g,at as K,au as $,av as z,aw as H,S as V,ax as X,ak as x,X as Z,m as j,O as T,ay as J}from"./BiqahF3i.js";import{p as Q}from"./C8_CuNPF.js";let d=!1;function W(e){var r=d;try{return d=!1,[e(),d]}finally{d=r}}const k={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ae(e,r,n){return new Proxy({props:e,exclude:r},k)}function L(e){for(var r=T,n=T;r!==null&&!(r.f&(U|G));)r=r.parent;try{return g(r),e()}finally{g(n)}}function ne(e,r,n,v){var w;var E=(n&K)!==0,c=!$||(n&z)!==0,o=(n&H)!==0,y=(n&J)!==0,I=!1,t;o?[t,I]=W(()=>e[r]):t=e[r];var B=V in e||X in e,f=o&&(((w=q(e,r))==null?void 0:w.set)??(B&&r in e&&(a=>e[r]=a)))||void 0,u=v,p=!0,P=!1,O=()=>(P=!0,p&&(p=!1,y?u=A(v):u=v),u);t===void 0&&v!==void 0&&(f&&c&&C(),t=O(),f&&f(t));var i;if(c)i=()=>{var a=e[r];return a===void 0?O():(p=!0,P=!1,a)};else{var R=L(()=>(E?x:Z)(()=>e[r]));R.f|=F,i=()=>{var a=_(R);return a!==void 0&&(u=void 0),a===void 0?u:a}}if(!(n&N))return i;if(f){var D=e.$$legacy;return function(a,s){return arguments.length>0?((!c||!s||D||I)&&f(s?i():a),a):i()}}var S=!1,h=!1,m=j(t),l=L(()=>x(()=>{var a=i(),s=_(m);return S?(S=!1,h=!0,s):(h=!1,m.v=a)}));return E||(l.equals=Y),function(a,s){if(arguments.length>0){const b=s?_(l):c&&o?Q(a):a;return l.equals(b)||(S=!0,M(m,b),P&&u!==void 0&&(u=b),A(()=>_(l))),a}return _(l)}}export{ne as p,ae as r};
