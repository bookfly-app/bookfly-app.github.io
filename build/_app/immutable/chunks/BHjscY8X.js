import{aH as Id,ax as wd,h as no,aI as vd,aJ as Ad,ae as pc,g as ur,af as mc,d as Rd,p as bd,t as Pd,a as Sd,X as Cd}from"./BKc628eD.js";import{f as kd,g as Dd,d as Vd,j as Nd,n as Od,k as Ld,m as Md}from"./BQkRYWVv.js";import{p as ro}from"./C8FwvXbo.js";import"./Bg9kRutz.js";import"./69_IOA4Y.js";import{a as xd,t as Fd}from"./aB18zCBe.js";import{i as Ud}from"./Cfa2G59I.js";function gc(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=gc(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Bd(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=gc(n))&&(r&&(r+=" "),r+=e);return r}function $d(n){return typeof n=="object"?Bd(n):n??""}function AI(n){if(no){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Ci(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var s=n.checked;Ci(n,"checked",null),n.checked=s}}};n.__on_r=t,Ad(t),Ld()}}function RI(n,e){var t=n.__attributes??(n.__attributes={});t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!=="PROGRESS")||(n.value=e??"")}function qd(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ci(n,e,t,r){var s=n.__attributes??(n.__attributes={});no&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[Id]=t),t==null?n.removeAttribute(e):typeof t!="string"&&_c(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function bI(n,e,t,r,s=!1,o=!1,a=!1){var c=e||{},l=n.tagName==="OPTION";for(var d in e)d in t||(t[d]=null);t.class&&(t.class=$d(t.class)),r!==void 0&&(t.class=t.class?t.class+" "+r:r);var p=_c(n),E=n.__attributes??(n.__attributes={});for(const M in t){let x=t[M];if(l&&M==="value"&&x==null){n.value=n.__value="",c[M]=x;continue}var A=c[M];if(x!==A){c[M]=x;var S=M[0]+M[1];if(S!=="$$"){if(S==="on"){const q={},Q="$$"+M;let te=M.slice(2);var k=Md(te);if(kd(te)&&(te=te.slice(0,-7),q.capture=!0),!k&&A){if(x!=null)continue;n.removeEventListener(te,c[Q],q),c[Q]=null}if(x!=null)if(k)n[`__${te}`]=x,Vd([te]);else{let Z=function(T){c[M].call(this,T)};c[Q]=Dd(te,n,Z,q)}else k&&(n[`__${te}`]=void 0)}else if(M==="style"&&x!=null)n.style.cssText=x+"";else if(M==="autofocus")Nd(n,!!x);else if(M==="__value"||M==="value"&&x!=null)n.value=n[M]=n.__value=x;else if(M==="selected"&&l)qd(n,x);else{var V=M;s||(V=Od(V));var D=V==="defaultValue"||V==="defaultChecked";if(x==null&&!o&&!D)if(E[M]=null,V==="value"||V==="checked"){let q=n;if(V==="value"){let Q=q.defaultValue;q.removeAttribute(V),q.defaultValue=Q}else{let Q=q.defaultChecked;q.removeAttribute(V),q.defaultChecked=Q}}else n.removeAttribute(M);else D||p.includes(V)&&(o||typeof x!="string")?n[V]=x:typeof x!="function"&&(no&&(V==="src"||V==="href"||V==="srcset")||Ci(n,V,x))}M==="style"&&"__styles"in n&&(n.__styles={})}}}return c}var Qa=new Map;function _c(n){var e=Qa.get(n.nodeName);if(e)return e;Qa.set(n.nodeName,e=[]);for(var t,r=n,s=Element.prototype;s!==r;){t=vd(r);for(var o in t)t[o].set&&e.push(o);r=wd(r)}return e}function jd(n,e,t,r){var s=n.__styles??(n.__styles={});s[e]!==t&&(s[e]=t,t==null?n.style.removeProperty(e):n.style.setProperty(e,t,""))}var Ja={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=o>>2,E=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(A=64)),r.push(t[p],t[E],t[A],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new Gd;const A=o<<2|c>>4;if(r.push(A),d!==64){const S=c<<4&240|d>>2;if(r.push(S),E!==64){const k=d<<6&192|E;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wd=function(n){const e=yc(n);return Ec.encodeByteArray(e,!0)},is=function(n){return Wd(n).replace(/\./g,"")},Tc=function(n){try{return Ec.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=()=>Hd().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof Ja>"u")return;const n=Ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tc(n[1]);return e&&JSON.parse(e)},As=()=>{try{return Kd()||Qd()||Jd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ic=n=>{var e,t;return(t=(e=As())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Yd=n=>{const e=Ic(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wc=()=>{var n;return(n=As())===null||n===void 0?void 0:n.config},vc=n=>{var e;return(e=As())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function tf(){var n;const e=(n=As())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function of(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function af(){return!tf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uf(){try{return typeof indexedDB=="object"}catch{return!1}}function cf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="FirebaseError";class it extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lf,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?hf(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new it(s,c,r)}}function hf(n,e){return n.replace(df,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const df=/\{\$([^}]+)}/g;function ff(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Ya(o)&&Ya(a)){if(!os(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ya(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function qn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pf(n,e){const t=new mf(n,e);return t.subscribe.bind(t)}class mf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}class xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ef(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yf(n){return n===Lt?void 0:n}function Ef(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _f(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const If={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},wf=j.INFO,vf={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Af=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=vf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class so{constructor(e){this.name=e,this._logLevel=wf,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?If[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Rf=(n,e)=>e.some(t=>n instanceof t);let Xa,Za;function bf(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pf(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,ki=new WeakMap,Rc=new WeakMap,Ei=new WeakMap,io=new WeakMap;function Sf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(_t(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ac.set(t,n)}).catch(()=>{}),io.set(e,n),e}function Cf(n){if(ki.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ki.set(n,e)}let Di={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kf(n){Di=n(Di)}function Df(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ti(this),e,...t);return Rc.set(r,e.sort?e.sort():[e]),_t(r)}:Pf().includes(n)?function(...e){return n.apply(Ti(this),e),_t(Ac.get(this))}:function(...e){return _t(n.apply(Ti(this),e))}}function Vf(n){return typeof n=="function"?Df(n):(n instanceof IDBTransaction&&Cf(n),Rf(n,bf())?new Proxy(n,Di):n)}function _t(n){if(n instanceof IDBRequest)return Sf(n);if(Ei.has(n))return Ei.get(n);const e=Vf(n);return e!==n&&(Ei.set(n,e),io.set(e,n)),e}const Ti=n=>io.get(n);function Nf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=_t(a);return r&&a.addEventListener("upgradeneeded",l=>{r(_t(a.result),l.oldVersion,l.newVersion,_t(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Of=["get","getKey","getAll","getAllKeys","count"],Lf=["put","add","delete","clear"],Ii=new Map;function eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ii.get(e))return Ii.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Lf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Of.includes(t)))return;const o=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Ii.set(e,o),o}kf(n=>({...n,get:(e,t,r)=>eu(e,t)||n.get(e,t,r),has:(e,t)=>!!eu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vi="@firebase/app",tu="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new so("@firebase/app"),Ff="@firebase/app-compat",Uf="@firebase/analytics-compat",Bf="@firebase/analytics",$f="@firebase/app-check-compat",qf="@firebase/app-check",jf="@firebase/auth",zf="@firebase/auth-compat",Gf="@firebase/database",Wf="@firebase/data-connect",Hf="@firebase/database-compat",Kf="@firebase/functions",Qf="@firebase/functions-compat",Jf="@firebase/installations",Yf="@firebase/installations-compat",Xf="@firebase/messaging",Zf="@firebase/messaging-compat",ep="@firebase/performance",tp="@firebase/performance-compat",np="@firebase/remote-config",rp="@firebase/remote-config-compat",sp="@firebase/storage",ip="@firebase/storage-compat",op="@firebase/firestore",ap="@firebase/vertexai",up="@firebase/firestore-compat",cp="firebase",lp="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]",hp={[Vi]:"fire-core",[Ff]:"fire-core-compat",[Bf]:"fire-analytics",[Uf]:"fire-analytics-compat",[qf]:"fire-app-check",[$f]:"fire-app-check-compat",[jf]:"fire-auth",[zf]:"fire-auth-compat",[Gf]:"fire-rtdb",[Wf]:"fire-data-connect",[Hf]:"fire-rtdb-compat",[Kf]:"fire-fn",[Qf]:"fire-fn-compat",[Jf]:"fire-iid",[Yf]:"fire-iid-compat",[Xf]:"fire-fcm",[Zf]:"fire-fcm-compat",[ep]:"fire-perf",[tp]:"fire-perf-compat",[np]:"fire-rc",[rp]:"fire-rc-compat",[sp]:"fire-gcs",[ip]:"fire-gcs-compat",[op]:"fire-fst",[up]:"fire-fst-compat",[ap]:"fire-vertex","fire-js":"fire-js",[cp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Map,dp=new Map,Oi=new Map;function nu(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function an(n){const e=n.name;if(Oi.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Oi.set(e,n);for(const t of as.values())nu(t,n);for(const t of dp.values())nu(t,n);return!0}function oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new cr("app","Firebase",fp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=lp;function bc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(t||(t=wc()),!t)throw yt.create("no-options");const o=as.get(s);if(o){if(os(t,o.options)&&os(r,o.config))return o;throw yt.create("duplicate-app",{appName:s})}const a=new Tf(s);for(const l of Oi.values())a.addComponent(l);const c=new pp(t,r,a);return as.set(s,c),c}function Pc(n=Ni){const e=as.get(n);if(!e&&n===Ni&&wc())return bc();if(!e)throw yt.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let s=(r=hp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(c.join(" "));return}an(new xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="firebase-heartbeat-database",gp=1,Xn="firebase-heartbeat-store";let wi=null;function Sc(){return wi||(wi=Nf(mp,gp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),wi}async function _p(n){try{const t=(await Sc()).transaction(Xn),r=await t.objectStore(Xn).get(Cc(n));return await t.done,r}catch(e){if(e instanceof it)tt.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function ru(n,e){try{const r=(await Sc()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(e,Cc(n)),await r.done}catch(t){if(t instanceof it)tt.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(r.message)}}}function Cc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=1024,Ep=30*24*60*60*1e3;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=su();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Ep}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=su(),{heartbeatsToSend:r,unsentEntries:s}=Ip(this._heartbeatsCache.heartbeats),o=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return tt.warn(t),""}}}function su(){return new Date().toISOString().substring(0,10)}function Ip(n,e=yp){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),iu(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),iu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uf()?cf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _p(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ru(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ru(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function iu(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){an(new xt("platform-logger",e=>new Mf(e),"PRIVATE")),an(new xt("heartbeat",e=>new Tp(e),"PRIVATE")),Et(Vi,tu,n),Et(Vi,tu,"esm2017"),Et("fire-js","")}vp("");var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tt,kc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,I,v){for(var g=Array(arguments.length-2),He=2;He<arguments.length;He++)g[He-2]=arguments[He];return m.prototype[I].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)y[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)y[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],I=T.g[2];var v=T.g[3],g=m+(v^_&(I^v))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=v+(I^m&(_^I))+y[1]+3905402710&4294967295,v=m+(g<<12&4294967295|g>>>20),g=I+(_^v&(m^_))+y[2]+606105819&4294967295,I=v+(g<<17&4294967295|g>>>15),g=_+(m^I&(v^m))+y[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(v^_&(I^v))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(I^m&(_^I))+y[5]+1200080426&4294967295,v=m+(g<<12&4294967295|g>>>20),g=I+(_^v&(m^_))+y[6]+2821735955&4294967295,I=v+(g<<17&4294967295|g>>>15),g=_+(m^I&(v^m))+y[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(v^_&(I^v))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(I^m&(_^I))+y[9]+2336552879&4294967295,v=m+(g<<12&4294967295|g>>>20),g=I+(_^v&(m^_))+y[10]+4294925233&4294967295,I=v+(g<<17&4294967295|g>>>15),g=_+(m^I&(v^m))+y[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(v^_&(I^v))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(I^m&(_^I))+y[13]+4254626195&4294967295,v=m+(g<<12&4294967295|g>>>20),g=I+(_^v&(m^_))+y[14]+2792965006&4294967295,I=v+(g<<17&4294967295|g>>>15),g=_+(m^I&(v^m))+y[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^v&(_^I))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^I&(m^_))+y[6]+3225465664&4294967295,v=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(v^m))+y[11]+643717713&4294967295,I=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(I^v))+y[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^v&(_^I))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^I&(m^_))+y[10]+38016083&4294967295,v=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(v^m))+y[15]+3634488961&4294967295,I=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(I^v))+y[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^v&(_^I))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^I&(m^_))+y[14]+3275163606&4294967295,v=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(v^m))+y[3]+4107603335&4294967295,I=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(I^v))+y[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^v&(_^I))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^I&(m^_))+y[2]+4243563512&4294967295,v=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(v^m))+y[7]+1735328473&4294967295,I=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(I^v))+y[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^v)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^I)+y[8]+2272392833&4294967295,v=m+(g<<11&4294967295|g>>>21),g=I+(v^m^_)+y[11]+1839030562&4294967295,I=v+(g<<16&4294967295|g>>>16),g=_+(I^v^m)+y[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^v)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^I)+y[4]+1272893353&4294967295,v=m+(g<<11&4294967295|g>>>21),g=I+(v^m^_)+y[7]+4139469664&4294967295,I=v+(g<<16&4294967295|g>>>16),g=_+(I^v^m)+y[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^v)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^I)+y[0]+3936430074&4294967295,v=m+(g<<11&4294967295|g>>>21),g=I+(v^m^_)+y[3]+3572445317&4294967295,I=v+(g<<16&4294967295|g>>>16),g=_+(I^v^m)+y[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^v)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^I)+y[12]+3873151461&4294967295,v=m+(g<<11&4294967295|g>>>21),g=I+(v^m^_)+y[15]+530742520&4294967295,I=v+(g<<16&4294967295|g>>>16),g=_+(I^v^m)+y[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~v))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~I))+y[7]+1126891415&4294967295,v=m+(g<<10&4294967295|g>>>22),g=I+(m^(v|~_))+y[14]+2878612391&4294967295,I=v+(g<<15&4294967295|g>>>17),g=_+(v^(I|~m))+y[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~v))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~I))+y[3]+2399980690&4294967295,v=m+(g<<10&4294967295|g>>>22),g=I+(m^(v|~_))+y[10]+4293915773&4294967295,I=v+(g<<15&4294967295|g>>>17),g=_+(v^(I|~m))+y[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~v))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~I))+y[15]+4264355552&4294967295,v=m+(g<<10&4294967295|g>>>22),g=I+(m^(v|~_))+y[6]+2734768916&4294967295,I=v+(g<<15&4294967295|g>>>17),g=_+(v^(I|~m))+y[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~v))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~I))+y[11]+3174756917&4294967295,v=m+(g<<10&4294967295|g>>>22),g=I+(m^(v|~_))+y[2]+718787259&4294967295,I=v+(g<<15&4294967295|g>>>17),g=_+(v^(I|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,I=this.h,v=0;v<m;){if(I==0)for(;v<=_;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(y[I++]=T.charCodeAt(v++),I==this.blockSize){s(this,y),I=0;break}}else for(;v<m;)if(y[I++]=T[v++],I==this.blockSize){s(this,y),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],y=!0,I=T.length-1;0<=I;I--){var v=T[I]|0;y&&v==m||(_[I]=v,y=!1)}this.g=_}var c={};function l(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return D(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=E,I=0;I<T.length;I+=8){var v=Math.min(8,T.length-I),g=parseInt(T.substring(I,I+v),m);8>v?(v=d(Math.pow(m,v)),y=y.j(v).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=l(0),A=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(V(this))return"-"+D(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var I=Q(_,m).g;_=M(_,I.j(m));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,k(_))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=M(this,T),V(T)?-1:k(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new a(_,~T.h).add(A)}n.abs=function(){return V(this)?D(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,I=0;I<=m;I++){var v=y+(this.i(I)&65535)+(T.i(I)&65535),g=(v>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);y=g>>>16,v&=65535,g&=65535,_[I]=g<<16|v}return new a(_,_[_.length-1]&-2147483648?-1:0)};function M(T,m){return T.add(D(m))}n.j=function(T){if(k(this)||k(T))return E;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<T.g.length;I++){var v=this.i(y)>>>16,g=this.i(y)&65535,He=T.i(I)>>>16,An=T.i(I)&65535;_[2*y+2*I]+=g*An,x(_,2*y+2*I),_[2*y+2*I+1]+=v*An,x(_,2*y+2*I+1),_[2*y+2*I+1]+=g*He,x(_,2*y+2*I+1),_[2*y+2*I+2]+=v*He,x(_,2*y+2*I+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function x(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function q(T,m){this.g=T,this.h=m}function Q(T,m){if(k(m))throw Error("division by zero");if(k(T))return new q(E,E);if(V(T))return m=Q(D(T),m),new q(D(m.g),D(m.h));if(V(m))return m=Q(T,D(m)),new q(D(m.g),m.h);if(30<T.g.length){if(V(T)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(T);)_=te(_),y=te(y);var I=Z(_,1),v=Z(y,1);for(y=Z(y,2),_=Z(_,2);!k(y);){var g=v.add(y);0>=g.l(T)&&(I=I.add(_),v=g),y=Z(y,1),_=Z(_,1)}return m=M(T,I.j(m)),new q(I,m)}for(I=E;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=d(_),g=v.j(m);V(g)||0<g.l(T);)_-=y,v=d(_),g=v.j(m);k(v)&&(v=A),I=I.add(v),T=M(T,g)}return new q(I,T)}n.A=function(T){return Q(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function te(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function Z(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,I=[],v=0;v<y;v++)I[v]=0<m?T.i(v+_)>>>m|T.i(v+_+1)<<32-m:T.i(v+_);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Tt=a}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dc,jn,Vc,Qr,Li,Nc,Oc,Lc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,h){return i==Array.prototype||i==Object.prototype||(i[u]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof qr=="object"&&qr];for(var u=0;u<i.length;++u){var h=i[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,u){if(u)e:{var h=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in h))break e;h=h[w]}i=i[i.length-1],f=h[i],u=u(f),u!=f&&u!=null&&e(h,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var h=0,f=!1,w={next:function(){if(!f&&h<i.length){var R=h++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,h){return i.call.apply(i.bind,arguments)}function E(i,u,h){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function A(i,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,A.apply(null,arguments)}function S(i,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function k(i,u){function h(){}h.prototype=u.prototype,i.aa=u.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var C=Array(arguments.length-2),J=2;J<arguments.length;J++)C[J-2]=arguments[J];return u.prototype[w].apply(f,C)}}function V(i){const u=i.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=i[f];return h}return[]}function D(i,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let C=0;C<R;C++)i[w+C]=f[C]}else i.push(f)}}class M{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function Q(i){return Q[" "](i),i}Q[" "]=function(){};var te=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Z(i,u,h){for(const f in i)u.call(h,i[f],f,i)}function T(i,u){for(const h in i)u.call(void 0,i[h],h,i)}function m(i){const u={};for(const h in i)u[h]=i[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)i[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function I(i){var u=1;i=i.split(":");const h=[];for(;0<u&&i.length;)h.push(i.shift()),u--;return i.length&&h.push(i.join(":")),h}function v(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Ks;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class He{constructor(){this.h=this.g=null}add(u,h){const f=An.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var An=new M(()=>new Bh,i=>i.reset());class Bh{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Rn,bn=!1,Ks=new He,Qo=()=>{const i=c.Promise.resolve(void 0);Rn=()=>{i.then($h)}};var $h=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(h){v(h)}var u=An;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}bn=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var qh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return i}();function Pn(i,u){if(ye.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(te){e:{try{Q(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else h=="mouseover"?u=i.fromElement:h=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:jh[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Pn.aa.h.call(this)}}k(Pn,ye);var jh={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),zh=0;function Gh(i,u,h,f,w){this.listener=i,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=w,this.key=++zh,this.da=this.fa=!1}function Ar(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Rr(i){this.src=i,this.g={},this.h=0}Rr.prototype.add=function(i,u,h,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var C=Js(i,u,f,w);return-1<C?(u=i[C],h||(u.fa=!1)):(u=new Gh(u,this.src,R,!!f,w),u.fa=h,i.push(u)),u};function Qs(i,u){var h=u.type;if(h in i.g){var f=i.g[h],w=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Ar(u),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Js(i,u,h,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==u&&R.capture==!!h&&R.ha==f)return w}return-1}var Ys="closure_lm_"+(1e6*Math.random()|0),Xs={};function Jo(i,u,h,f,w){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Jo(i,u[R],h,f,w);return null}return h=Zo(h),i&&i[vr]?i.K(u,h,d(f)?!!f.capture:!1,w):Wh(i,u,h,!1,f,w)}function Wh(i,u,h,f,w,R){if(!u)throw Error("Invalid event type");var C=d(w)?!!w.capture:!!w,J=ei(i);if(J||(i[Ys]=J=new Rr(i)),h=J.add(u,h,f,C,R),h.proxy)return h;if(f=Hh(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)qh||(w=C),w===void 0&&(w=!1),i.addEventListener(u.toString(),f,w);else if(i.attachEvent)i.attachEvent(Xo(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hh(){function i(h){return u.call(i.src,i.listener,h)}const u=Kh;return i}function Yo(i,u,h,f,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)Yo(i,u[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=Zo(h),i&&i[vr]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],h=Js(R,h,f,w),-1<h&&(Ar(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=ei(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Js(u,h,f,w)),(h=-1<i?u[i]:null)&&Zs(h))}function Zs(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[vr])Qs(u.i,i);else{var h=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(h,f,i.capture):u.detachEvent?u.detachEvent(Xo(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=ei(u))?(Qs(h,i),h.h==0&&(h.src=null,u[Ys]=null)):Ar(i)}}}function Xo(i){return i in Xs?Xs[i]:Xs[i]="on"+i}function Kh(i,u){if(i.da)i=!0;else{u=new Pn(u,this);var h=i.listener,f=i.ha||i.src;i.fa&&Zs(i),i=h.call(f,u)}return i}function ei(i){return i=i[Ys],i instanceof Rr?i:null}var ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(i){return typeof i=="function"?i:(i[ti]||(i[ti]=function(u){return i.handleEvent(u)}),i[ti])}function Ee(){at.call(this),this.i=new Rr(this),this.M=this,this.F=null}k(Ee,at),Ee.prototype[vr]=!0,Ee.prototype.removeEventListener=function(i,u,h,f){Yo(this,i,u,h,f)};function be(i,u){var h,f=i.F;if(f)for(h=[];f;f=f.F)h.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new ye(u,i);else if(u instanceof ye)u.target=u.target||i;else{var w=u;u=new ye(f,i),y(u,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var C=u.g=h[R];w=br(C,f,!0,u)&&w}if(C=u.g=i,w=br(C,f,!0,u)&&w,w=br(C,f,!1,u)&&w,h)for(R=0;R<h.length;R++)C=u.g=h[R],w=br(C,f,!1,u)&&w}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var h=i.g[u],f=0;f<h.length;f++)Ar(h[f]);delete i.g[u],i.h--}}this.F=null},Ee.prototype.K=function(i,u,h,f){return this.i.add(String(i),u,!1,h,f)},Ee.prototype.L=function(i,u,h,f){return this.i.add(String(i),u,!0,h,f)};function br(i,u,h,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==h){var J=C.listener,de=C.ha||C.src;C.fa&&Qs(i.i,C),w=J.call(de,f)!==!1&&w}}return w&&!f.defaultPrevented}function ea(i,u,h){if(typeof i=="function")h&&(i=A(i,h));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function ta(i){i.g=ea(()=>{i.g=null,i.i&&(i.i=!1,ta(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Qh extends at{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ta(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(i){at.call(this),this.h=i,this.g={}}k(Sn,at);var na=[];function ra(i){Z(i.g,function(u,h){this.g.hasOwnProperty(h)&&Zs(u)},i),i.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),ra(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=c.JSON.stringify,Jh=c.JSON.parse,Yh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ri(){}ri.prototype.h=null;function sa(i){return i.h||(i.h=i.i())}function ia(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function si(){ye.call(this,"d")}k(si,ye);function ii(){ye.call(this,"c")}k(ii,ye);var Dt={},oa=null;function Pr(){return oa=oa||new Ee}Dt.La="serverreachability";function aa(i){ye.call(this,Dt.La,i)}k(aa,ye);function kn(i){const u=Pr();be(u,new aa(u))}Dt.STAT_EVENT="statevent";function ua(i,u){ye.call(this,Dt.STAT_EVENT,i),this.stat=u}k(ua,ye);function Pe(i){const u=Pr();be(u,new ua(u,i))}Dt.Ma="timingevent";function ca(i,u){ye.call(this,Dt.Ma,i),this.size=u}k(ca,ye);function Dn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function Xh(i,u,h,f,w,R){i.info(function(){if(i.g)if(R)for(var C="",J=R.split("&"),de=0;de<J.length;de++){var H=J[de].split("=");if(1<H.length){var Te=H[0];H=H[1];var Ie=Te.split("_");C=2<=Ie.length&&Ie[1]=="type"?C+(Te+"="+H+"&"):C+(Te+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+h+`
`+C})}function Zh(i,u,h,f,w,R,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+h+`
`+R+" "+C})}function Ht(i,u,h,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+td(i,h)+(f?" "+f:"")})}function ed(i,u){i.info(function(){return"TIMEOUT: "+u})}Vn.prototype.info=function(){};function td(i,u){if(!i.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var f=h[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<w.length;C++)w[C]=""}}}}return ni(h)}catch{return u}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},la={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oi;function Cr(){}k(Cr,ri),Cr.prototype.g=function(){return new XMLHttpRequest},Cr.prototype.i=function(){return{}},oi=new Cr;function ut(i,u,h,f){this.j=i,this.i=u,this.l=h,this.R=f||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ha}function ha(){this.i=null,this.g="",this.h=!1}var da={},ai={};function ui(i,u,h){i.L=1,i.v=Nr(Ke(u)),i.m=h,i.P=!0,fa(i,null)}function fa(i,u){i.F=Date.now(),kr(i),i.A=Ke(i.v);var h=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Pa(h.i,"t",f),i.C=0,h=i.j.J,i.h=new ha,i.g=Ga(i.j,h?u:null,!i.m),0<i.O&&(i.M=new Qh(A(i.Y,i,i.g),i.O)),u=i.U,h=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(na[0]=w.toString()),w=na);for(var R=0;R<w.length;R++){var C=Jo(h,w[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),kn(),Xh(i.i,i.u,i.A,i.l,i.R,i.m)}ut.prototype.ca=function(i){i=i.target;const u=this.M;u&&Qe(i)==3?u.j():this.Y(i)},ut.prototype.Y=function(i){try{if(i==this.g)e:{const Ie=Qe(this.g);var u=this.g.Ba();const Jt=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||Ie!=4||u==7||(u==8||0>=Jt?kn(3):kn(2)),ci(this);var h=this.g.Z();this.X=h;t:if(pa(this)){var f=Oa(this.g);i="";var w=f.length,R=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),Nn(this);var C="";break t}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==w-1)});f.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=h==200,Zh(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,de=this.g;if((J=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(J)){var H=J;break t}}H=null}if(h=H)Ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,h);else{this.o=!1,this.s=3,Pe(12),Vt(this),Nn(this);break e}}if(this.P){h=!0;let Me;for(;!this.J&&this.C<C.length;)if(Me=nd(this,C),Me==ai){Ie==4&&(this.s=4,Pe(14),h=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==da){this.s=4,Pe(15),Ht(this.i,this.l,C,"[Invalid Chunk]"),h=!1;break}else Ht(this.i,this.l,Me,null),li(this,Me);if(pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||C.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)Ht(this.i,this.l,C,"[Invalid Chunked Response]"),Vt(this),Nn(this);else if(0<C.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),gi(Te),Te.M=!0,Pe(11))}}else Ht(this.i,this.l,C,null),li(this,C);Ie==4&&Vt(this),this.o&&!this.J&&(Ie==4?$a(this.j,this):(this.o=!1,kr(this)))}else Ed(this.g),h==400&&0<C.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Vt(this),Nn(this)}}}catch{}finally{}};function pa(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function nd(i,u){var h=i.C,f=u.indexOf(`
`,h);return f==-1?ai:(h=Number(u.substring(h,f)),isNaN(h)?da:(f+=1,f+h>u.length?ai:(u=u.slice(f,f+h),i.C=f+h,u)))}ut.prototype.cancel=function(){this.J=!0,Vt(this)};function kr(i){i.S=Date.now()+i.I,ma(i,i.I)}function ma(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Dn(A(i.ba,i),u)}function ci(i){i.B&&(c.clearTimeout(i.B),i.B=null)}ut.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ed(this.i,this.A),this.L!=2&&(kn(),Pe(17)),Vt(this),this.s=2,Nn(this)):ma(this,this.S-i)};function Nn(i){i.j.G==0||i.J||$a(i.j,i)}function Vt(i){ci(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,ra(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function li(i,u){try{var h=i.j;if(h.G!=0&&(h.g==i||hi(h.h,i))){if(!i.K&&hi(h.h,i)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Ur(h),xr(h);else break e;mi(h),Pe(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Dn(A(h.Za,h),6e3));if(1>=ya(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((i.K||h.g==i)&&Ur(h),!x(u))for(w=h.Da.g.parse(u),u=0;u<w.length;u++){let H=w[u];if(h.T=H[0],H=H[1],h.G==2)if(H[0]=="c"){h.K=H[1],h.ia=H[2];const Te=H[3];Te!=null&&(h.la=Te,h.j.info("VER="+h.la));const Ie=H[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const Jt=H[5];Jt!=null&&typeof Jt=="number"&&0<Jt&&(f=1.5*Jt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Me=i.g;if(Me){const $r=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var R=f.h;R.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(di(R,R.h),R.h=null))}if(f.D){const _i=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;_i&&(f.ya=_i,Y(f.I,f.D,_i))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var C=i;if(f.qa=za(f,f.J?f.ia:null,f.W),C.K){Ea(f.h,C);var J=C,de=f.L;de&&(J.I=de),J.B&&(ci(J),kr(J)),f.g=C}else Ua(f);0<h.i.length&&Fr(h)}else H[0]!="stop"&&H[0]!="close"||Ot(h,7);else h.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ot(h,7):pi(h):H[0]!="noop"&&h.l&&h.l.ta(H),h.v=0)}}kn(4)}catch{}}var rd=class{constructor(i,u){this.g=i,this.map=u}};function ga(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _a(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ya(i){return i.h?1:i.g?i.g.size:0}function hi(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function di(i,u){i.g?i.g.add(u):i.h=u}function Ea(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}ga.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ta(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const h of i.g.values())u=u.concat(h.D);return u}return V(i.i)}function sd(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(l(i)){for(var u=[],h=i.length,f=0;f<h;f++)u.push(i[f]);return u}u=[],h=0;for(f in i)u[h++]=i[f];return u}function id(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(l(i)||typeof i=="string"){var u=[];i=i.length;for(var h=0;h<i;h++)u.push(h);return u}u=[],h=0;for(const f in i)u[h++]=f;return u}}}function Ia(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(l(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var h=id(i),f=sd(i),w=f.length,R=0;R<w;R++)u.call(void 0,f[R],h&&h[R],i)}var wa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(i,u){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var f=i[h].indexOf("="),w=null;if(0<=f){var R=i[h].substring(0,f);w=i[h].substring(f+1)}else R=i[h];u(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Nt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Nt){this.h=i.h,Dr(this,i.j),this.o=i.o,this.g=i.g,Vr(this,i.s),this.l=i.l;var u=i.i,h=new Mn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),va(this,h),this.m=i.m}else i&&(u=String(i).match(wa))?(this.h=!1,Dr(this,u[1]||"",!0),this.o=On(u[2]||""),this.g=On(u[3]||"",!0),Vr(this,u[4]),this.l=On(u[5]||"",!0),va(this,u[6]||"",!0),this.m=On(u[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}Nt.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Ln(u,Aa,!0),":");var h=this.g;return(h||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Ln(u,Aa,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Ln(h,h.charAt(0)=="/"?cd:ud,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Ln(h,hd)),i.join("")};function Ke(i){return new Nt(i)}function Dr(i,u,h){i.j=h?On(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Vr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function va(i,u,h){u instanceof Mn?(i.i=u,dd(i.i,i.h)):(h||(u=Ln(u,ld)),i.i=new Mn(u,i.h))}function Y(i,u,h){i.i.set(u,h)}function Nr(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function On(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ln(i,u,h){return typeof i=="string"?(i=encodeURI(i).replace(u,ad),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ad(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Aa=/[#\/\?@]/g,ud=/[#\?:]/g,cd=/[#\?]/g,ld=/[#\?@]/g,hd=/#/g;function Mn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ct(i){i.g||(i.g=new Map,i.h=0,i.i&&od(i.i,function(u,h){i.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Mn.prototype,n.add=function(i,u){ct(this),this.i=null,i=Kt(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(u),this.h+=1,this};function Ra(i,u){ct(i),u=Kt(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ba(i,u){return ct(i),u=Kt(i,u),i.g.has(u)}n.forEach=function(i,u){ct(this),this.g.forEach(function(h,f){h.forEach(function(w){i.call(u,w,f,this)},this)},this)},n.na=function(){ct(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const w=i[f];for(let R=0;R<w.length;R++)h.push(u[f])}return h},n.V=function(i){ct(this);let u=[];if(typeof i=="string")ba(this,i)&&(u=u.concat(this.g.get(Kt(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)u=u.concat(i[h])}return u},n.set=function(i,u){return ct(this),this.i=null,i=Kt(this,i),ba(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Pa(i,u,h){Ra(i,u),0<h.length&&(i.i=null,i.g.set(Kt(i,u),V(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var w=R;C[f]!==""&&(w+="="+encodeURIComponent(String(C[f]))),i.push(w)}}return this.i=i.join("&")};function Kt(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function dd(i,u){u&&!i.j&&(ct(i),i.i=null,i.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(Ra(this,f),Pa(this,w,h))},i)),i.j=u}function fd(i,u){const h=new Vn;if(c.Image){const f=new Image;f.onload=S(lt,h,"TestLoadImage: loaded",!0,u,f),f.onerror=S(lt,h,"TestLoadImage: error",!1,u,f),f.onabort=S(lt,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(lt,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function pd(i,u){const h=new Vn,f=new AbortController,w=setTimeout(()=>{f.abort(),lt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?lt(h,"TestPingServer: ok",!0,u):lt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),lt(h,"TestPingServer: error",!1,u)})}function lt(i,u,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function md(){this.g=new Yh}function gd(i,u,h){const f=h||"";try{Ia(i,function(w,R){let C=w;d(w)&&(C=ni(w)),u.push(f+R+"="+encodeURIComponent(C))})}catch(w){throw u.push(f+"type="+encodeURIComponent("_badmap")),w}}function Or(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Or,ri),Or.prototype.g=function(){return new Lr(this.l,this.j)},Or.prototype.i=function(i){return function(){return i}}({});function Lr(i,u){Ee.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Lr,Ee),n=Lr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Fn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sa(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sa(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?xn(this):Fn(this),this.readyState==3&&Sa(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,xn(this))},n.Qa=function(i){this.g&&(this.response=i,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Fn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=u.next();return i.join(`\r
`)};function Fn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ca(i){let u="";return Z(i,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function fi(i,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ca(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Y(i,u,h))}function ne(i){Ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ne,Ee);var _d=/^https?$/i,yd=["POST","PUT"];n=ne.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oi.g(),this.v=this.o?sa(this.o):sa(oi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){ka(this,R);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(yd,u,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of h)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Na(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ka(this,R)}};function ka(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Da(i),Mr(i)}function Da(i){i.A||(i.A=!0,be(i,"complete"),be(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,be(this,"complete"),be(this,"abort"),Mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mr(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Va(this):this.bb())},n.bb=function(){Va(this)};function Va(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Qe(i)!=4||i.Z()!=2)){if(i.u&&Qe(i)==4)ea(i.Ea,0,i);else if(be(i,"readystatechange"),Qe(i)==4){i.h=!1;try{const C=i.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=C===0){var w=String(i.D).match(wa)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!_d.test(w?w.toLowerCase():"")}h=f}if(h)be(i,"complete"),be(i,"success");else{i.m=6;try{var R=2<Qe(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Da(i)}}finally{Mr(i)}}}}function Mr(i,u){if(i.g){Na(i);const h=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||be(i,"ready");try{h.onreadystatechange=f}catch{}}}function Na(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Qe(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Jh(u)}};function Oa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ed(i){const u={};i=(i.g&&2<=Qe(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(x(i[f]))continue;var h=I(i[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=u[w]||[];u[w]=R,R.push(h)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(i,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||u}function La(i){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,i),this.cb=Un("retryDelaySeedMs",1e4,i),this.Wa=Un("forwardChannelMaxRetries",2,i),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ga(i&&i.concurrentRequestLimit),this.Da=new md,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=La.prototype,n.la=8,n.G=1,n.connect=function(i,u,h,f){Pe(0),this.W=i,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=za(this,null,this.W),Fr(this)};function pi(i){if(Ma(i),i.G==3){var u=i.U++,h=Ke(i.I);if(Y(h,"SID",i.K),Y(h,"RID",u),Y(h,"TYPE","terminate"),Bn(i,h),u=new ut(i,i.j,u),u.L=2,u.v=Nr(Ke(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ga(u.j,null),u.g.ea(u.v)),u.F=Date.now(),kr(u)}ja(i)}function xr(i){i.g&&(gi(i),i.g.cancel(),i.g=null)}function Ma(i){xr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Ur(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Fr(i){if(!_a(i.h)&&!i.s){i.s=!0;var u=i.Ga;Rn||Qo(),bn||(Rn(),bn=!0),Ks.add(u,i),i.B=0}}function Td(i,u){return ya(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Dn(A(i.Ga,i,u),qa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new ut(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Fa(this,w,u),h=Ke(this.I),Y(h,"RID",i),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),Bn(this,h),R&&(this.O?u="headers="+encodeURIComponent(String(Ca(R)))+"&"+u:this.m&&fi(h,this.m,R)),di(this.h,w),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",u),Y(h,"SID","null"),w.T=!0,ui(w,h,null)):ui(w,h,u),this.G=2}}else this.G==3&&(i?xa(this,i):this.i.length==0||_a(this.h)||xa(this))};function xa(i,u){var h;u?h=u.l:h=i.U++;const f=Ke(i.I);Y(f,"SID",i.K),Y(f,"RID",h),Y(f,"AID",i.T),Bn(i,f),i.m&&i.o&&fi(f,i.m,i.o),h=new ut(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Fa(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),di(i.h,h),ui(h,f,u)}function Bn(i,u){i.H&&Z(i.H,function(h,f){Y(u,f,h)}),i.l&&Ia({},function(h,f){Y(u,f,h)})}function Fa(i,u,h){h=Math.min(i.i.length,h);var f=i.l?A(i.l.Na,i.l,i):null;e:{var w=i.i;let R=-1;for(;;){const C=["count="+h];R==-1?0<h?(R=w[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let J=!0;for(let de=0;de<h;de++){let H=w[de].g;const Te=w[de].map;if(H-=R,0>H)R=Math.max(0,w[de].g-100),J=!1;else try{gd(Te,C,"req"+H+"_")}catch{f&&f(Te)}}if(J){f=C.join("&");break e}}}return i=i.i.splice(0,h),u.D=i,f}function Ua(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Rn||Qo(),bn||(Rn(),bn=!0),Ks.add(u,i),i.v=0}}function mi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Dn(A(i.Fa,i),qa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ba(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Dn(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),xr(this),Ba(this))};function gi(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ba(i){i.g=new ut(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ke(i.qa);Y(u,"RID","rpc"),Y(u,"SID",i.K),Y(u,"AID",i.T),Y(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(u,"TO",i.ja),Y(u,"TYPE","xmlhttp"),Bn(i,u),i.m&&i.o&&fi(u,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Nr(Ke(u)),h.m=null,h.P=!0,fa(h,i)}n.Za=function(){this.C!=null&&(this.C=null,xr(this),mi(this),Pe(19))};function Ur(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function $a(i,u){var h=null;if(i.g==u){Ur(i),gi(i),i.g=null;var f=2}else if(hi(i.h,u))h=u.D,Ea(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;f=Pr(),be(f,new ca(f,h)),Fr(i)}else Ua(i);else if(w=u.s,w==3||w==0&&0<u.X||!(f==1&&Td(i,u)||f==2&&mi(i)))switch(h&&0<h.length&&(u=i.h,u.i=u.i.concat(h)),w){case 1:Ot(i,5);break;case 4:Ot(i,10);break;case 3:Ot(i,6);break;default:Ot(i,2)}}}function qa(i,u){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*u}function Ot(i,u){if(i.j.info("Error code "+u),u==2){var h=A(i.fb,i),f=i.Xa;const w=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Dr(f,"https"),Nr(f),w?fd(f.toString(),h):pd(f.toString(),h)}else Pe(2);i.G=0,i.l&&i.l.sa(u),ja(i),Ma(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function ja(i){if(i.G=0,i.ka=[],i.l){const u=Ta(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function za(i,u,h){var f=h instanceof Nt?Ke(h):new Nt(h);if(f.g!="")u&&(f.g=u+"."+f.g),Vr(f,f.s);else{var w=c.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var R=new Nt(null);f&&Dr(R,f),u&&(R.g=u),w&&Vr(R,w),h&&(R.l=h),f=R}return h=i.D,u=i.ya,h&&u&&Y(f,h,u),Y(f,"VER",i.la),Bn(i,f),f}function Ga(i,u,h){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new ne(new Or({eb:h})):new ne(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wa(){}n=Wa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(i,u){return new Ve(i,u)};function Ve(i,u){Ee.call(this),this.g=new La(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!x(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Qt(this)}k(Ve,Ee),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){pi(this.g)},Ve.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=ni(i),i=h);u.i.push(new rd(u.Ya++,i)),u.G==3&&Fr(u)},Ve.prototype.N=function(){this.g.l=null,delete this.j,pi(this.g),delete this.g,Ve.aa.N.call(this)};function Ha(i){si.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){e:{for(const h in u){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}k(Ha,si);function Ka(){ii.call(this),this.status=1}k(Ka,ii);function Qt(i){this.g=i}k(Qt,Wa),Qt.prototype.ua=function(){be(this.g,"a")},Qt.prototype.ta=function(i){be(this.g,new Ha(i))},Qt.prototype.sa=function(i){be(this.g,new Ka)},Qt.prototype.ra=function(){be(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,Lc=function(){return new Br},Oc=function(){return Pr()},Nc=Dt,Li={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Qr=Sr,la.COMPLETE="complete",Vc=la,ia.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,jn=ia,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Dc=ne}).apply(typeof qr<"u"?qr:typeof self<"u"?self:typeof window<"u"?window:{});const au="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new so("@firebase/firestore");function Yt(){return Ft.logLevel}function O(n,...e){if(Ft.logLevel<=j.DEBUG){const t=e.map(ao);Ft.debug(`Firestore (${gn}): ${n}`,...t)}}function nt(n,...e){if(Ft.logLevel<=j.ERROR){const t=e.map(ao);Ft.error(`Firestore (${gn}): ${n}`,...t)}}function un(n,...e){if(Ft.logLevel<=j.WARN){const t=e.map(ao);Ft.warn(`Firestore (${gn}): ${n}`,...t)}}function ao(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+n;throw nt(e),new Error(e)}function K(n,e){n||U()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}}class Rp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bp{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let o=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ze,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ze)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new Mc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new ve(e)}}class Pp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Sp{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Pp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){K(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new Cp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Dp(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function cn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ae(0,0))}static max(){return new B(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Be.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Be?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Be.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Be.isNumericId(e),s=Be.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Be.extractNumericId(e).compare(Be.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tt.fromString(e.substring(4,e.length-2))}}class X extends Be{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const Vp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Be{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return Vp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(X.fromString(e))}static fromName(e){return new L(X.fromString(e).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new X(e.slice()))}}function Np(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new wt(s,L.empty(),e)}function Op(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(B.min(),L.empty(),-1)}static max(){return new wt(B.max(),L.empty(),-1)}}function Lp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Mp)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},l=>r(l))}),a=!0,o===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let l=0;l<o;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Fp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rs.oe=-1;function bs(n){return n==null}function us(n){return n===0&&1/n==-1/0}function Up(n){return typeof n=="number"&&Number.isInteger(n)&&!us(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=$p(n.get(t),e);return uu(e)}function $p(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function uu(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jr(this.root,e,this.comparator,!0)}}class jr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,o){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lu(this.data.getIterator())}getIteratorFrom(e){return new lu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class lu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ue(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Uc("Invalid base64 string: "+o):o}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const qp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(K(!!n),typeof n=="string"){let e=0;const t=qp.exec(n);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function At(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ps(n){const e=n.mapValue.fields.__previous_value__;return uo(e)?Ps(e):e}function Zn(n){const e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,r,s,o,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class er{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uo(n)?4:Gp(n)?9007199254740991:zp(n)?10:11:U()}function We(n,e){if(n===e)return!0;const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zn(n).isEqual(Zn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=vt(s.timestampValue),c=vt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return At(s.bytesValue).isEqual(At(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return re(s.geoPointValue.latitude)===re(o.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return re(s.integerValue)===re(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=re(s.doubleValue),c=re(o.doubleValue);return a===c?us(a)===us(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return cn(n.arrayValue.values||[],e.arrayValue.values||[],We);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(cu(a)!==cu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!We(a[l],c[l])))return!1;return!0}(n,e);default:return U()}}function tr(n,e){return(n.values||[]).find(t=>We(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Rt(n),r=Rt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=re(o.integerValue||o.doubleValue),l=re(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return hu(n.timestampValue,e.timestampValue);case 4:return hu(Zn(n),Zn(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(o,a){const c=At(o),l=At(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=G(c[d],l[d]);if(p!==0)return p}return G(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=G(re(o.latitude),re(a.latitude));return c!==0?c:G(re(o.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return du(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,l,d,p;const E=o.fields||{},A=a.fields||{},S=(c=E.value)===null||c===void 0?void 0:c.arrayValue,k=(l=A.value)===null||l===void 0?void 0:l.arrayValue,V=G(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:du(S,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===zr.mapValue&&a===zr.mapValue)return 0;if(o===zr.mapValue)return 1;if(a===zr.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let E=0;E<l.length&&E<p.length;++E){const A=G(l[E],p[E]);if(A!==0)return A;const S=ln(c[l[E]],d[p[E]]);if(S!==0)return S}return G(l.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function hu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=vt(n),r=vt(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function du(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=ln(t[s],r[s]);if(o)return o}return G(t.length,r.length)}function hn(n){return Mi(n)}function Mi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return At(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Mi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Mi(t.fields[a])}`;return s+"}"}(n.mapValue):U()}function Jr(n){switch(Rt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ps(n);return e?16+Jr(e):16;case 5:return 2*n.stringValue.length;case 6:return At(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Jr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Pt(r.fields,(o,a)=>{s+=o.length+Jr(a)}),s}(n.mapValue);default:throw U()}}function fu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xi(n){return!!n&&"integerValue"in n}function co(n){return!!n&&"arrayValue"in n}function pu(n){return!!n&&"nullValue"in n}function mu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yr(n){return!!n&&"mapValue"in n}function zp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Hn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Yr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Pt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new De(Hn(this.value))}}function Bc(n){const e=[];return Pt(n.fields,(t,r)=>{const s=new pe([t]);if(Yr(r)){const o=Bc(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.position=e,this.inclusive=t}}function gu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=ln(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!We(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{}class oe extends $c{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kp(e,t,r):t==="array-contains"?new Yp(e,r):t==="in"?new Xp(e,r):t==="not-in"?new Zp(e,r):t==="array-contains-any"?new em(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qp(e,r):new Jp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ln(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xe extends $c{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xe(e,t)}matches(e){return qc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qc(n){return n.op==="and"}function jc(n){return Hp(n)&&qc(n)}function Hp(n){for(const e of n.filters)if(e instanceof xe)return!1;return!0}function Fi(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+hn(n.value);if(jc(n))return n.filters.map(e=>Fi(e)).join(",");{const e=n.filters.map(t=>Fi(t)).join(",");return`${n.op}(${e})`}}function zc(n,e){return n instanceof oe?function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&We(r.value,s.value)}(n,e):n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&zc(a,s.filters[c]),!0):!1}(n,e):void U()}function Gc(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${hn(t.value)}`}(n):n instanceof xe?function(t){return t.op.toString()+" {"+t.getFilters().map(Gc).join(" ,")+"}"}(n):"Filter"}class Kp extends oe{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qp extends oe{constructor(e,t){super(e,"in",t),this.keys=Wc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jp extends oe{constructor(e,t){super(e,"not-in",t),this.keys=Wc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Yp extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return co(t)&&tr(t.arrayValue,this.value)}}class Xp extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tr(this.value.arrayValue,t)}}class Zp extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tr(this.value.arrayValue,t)}}class em extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!co(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>tr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function yu(n,e=null,t=[],r=[],s=null,o=null,a=null){return new tm(n,e,t,r,s,o,a)}function lo(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),bs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hn(r)).join(",")),e.ue=t}return e.ue}function ho(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_u(n.startAt,e.startAt)&&_u(n.endAt,e.endAt)}function Ui(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nm(n,e,t,r,s,o,a,c){return new En(n,e,t,r,s,o,a,c)}function fo(n){return new En(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hc(n){return n.collectionGroup!==null}function Kn(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ue(pe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new nr(o,r))}),t.has(pe.keyField().canonicalString())||e.ce.push(new nr(pe.keyField(),r))}return e.ce}function qe(n){const e=$(n);return e.le||(e.le=rm(e,Kn(n))),e.le}function rm(n,e){if(n.limitType==="F")return yu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new nr(s.field,o)});const t=n.endAt?new cs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cs(n.startAt.position,n.startAt.inclusive):null;return yu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Bi(n,e){const t=n.filters.concat([e]);return new En(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $i(n,e,t){return new En(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ss(n,e){return ho(qe(n),qe(e))&&n.limitType===e.limitType}function Kc(n){return`${lo(qe(n))}|lt:${n.limitType}`}function Xt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gc(s)).join(", ")}]`),bs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>hn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>hn(s)).join(",")),`Target(${r})`}(qe(n))}; limitType=${n.limitType})`}function Cs(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Kn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=gu(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Kn(r),s)||r.endAt&&!function(a,c,l){const d=gu(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Kn(r),s))}(n,e)}function sm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qc(n){return(e,t)=>{let r=!1;for(const s of Kn(n)){const o=im(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function im(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,c){const l=a.data.field(o),d=c.data.field(o);return l!==null&&d!==null?ln(l,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Fc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new ee(L.comparator);function rt(){return om}const Jc=new ee(L.comparator);function zn(...n){let e=Jc;for(const t of n)e=e.insert(t.key,t);return e}function Yc(n){let e=Jc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Mt(){return Qn()}function Xc(){return Qn()}function Qn(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const am=new ee(L.comparator),um=new ue(L.comparator);function z(...n){let e=um;for(const t of n)e=e.add(t);return e}const cm=new ue(G);function lm(){return cm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:us(e)?"-0":e}}function Zc(n){return{integerValue:""+n}}function hm(n,e){return Up(e)?Zc(e):po(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this._=void 0}}function dm(n,e,t){return n instanceof ls?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&uo(o)&&(o=Ps(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof rr?tl(n,e):n instanceof sr?nl(n,e):function(s,o){const a=el(s,o),c=Tu(a)+Tu(s.Pe);return xi(a)&&xi(s.Pe)?Zc(c):po(s.serializer,c)}(n,e)}function fm(n,e,t){return n instanceof rr?tl(n,e):n instanceof sr?nl(n,e):t}function el(n,e){return n instanceof hs?function(r){return xi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ls extends ks{}class rr extends ks{constructor(e){super(),this.elements=e}}function tl(n,e){const t=rl(e);for(const r of n.elements)t.some(s=>We(s,r))||t.push(r);return{arrayValue:{values:t}}}class sr extends ks{constructor(e){super(),this.elements=e}}function nl(n,e){let t=rl(e);for(const r of n.elements)t=t.filter(s=>!We(s,r));return{arrayValue:{values:t}}}class hs extends ks{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Tu(n){return re(n.integerValue||n.doubleValue)}function rl(n){return co(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function pm(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof rr&&s instanceof rr||r instanceof sr&&s instanceof sr?cn(r.elements,s.elements,We):r instanceof hs&&s instanceof hs?We(r.Pe,s.Pe):r instanceof ls&&s instanceof ls}(n.transform,e.transform)}class mm{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ds{}function sl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mo(n.key,Le.none()):new hr(n.key,n.data,Le.none());{const t=n.data,r=De.empty();let s=new ue(pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new St(n.key,r,new Ne(s.toArray()),Le.none())}}function gm(n,e,t){n instanceof hr?function(s,o,a){const c=s.value.clone(),l=wu(s.fieldTransforms,o,a.transformResults);c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof St?function(s,o,a){if(!Xr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=wu(s.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(il(s)),l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Jn(n,e,t,r){return n instanceof hr?function(o,a,c,l){if(!Xr(o.precondition,a))return c;const d=o.value.clone(),p=vu(o.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(o,a,c,l){if(!Xr(o.precondition,a))return c;const d=vu(o.fieldTransforms,l,a),p=a.data;return p.setAll(il(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(o,a,c){return Xr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function _m(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=el(r.transform,s||null);o!=null&&(t===null&&(t=De.empty()),t.set(r.field,o))}return t||null}function Iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cn(r,s,(o,a)=>pm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends Ds{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class St extends Ds{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function il(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wu(n,e,t){const r=new Map;K(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,fm(a,c,t[s]))}return r}function vu(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,dm(o,a,e))}return r}class mo extends Ds{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ym extends Ds{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&gm(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xc();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const l=sl(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&cn(this.mutations,e.mutations,(t,r)=>Iu(t,r))&&cn(this.baseMutations,e.baseMutations,(t,r)=>Iu(t,r))}}class go{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length);let s=function(){return am}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new go(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,W;function wm(n){switch(n){default:return U();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function ol(n){if(n===void 0)return nt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ie.OK:return b.OK;case ie.CANCELLED:return b.CANCELLED;case ie.UNKNOWN:return b.UNKNOWN;case ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ie.INTERNAL:return b.INTERNAL;case ie.UNAVAILABLE:return b.UNAVAILABLE;case ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ie.NOT_FOUND:return b.NOT_FOUND;case ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ie.ABORTED:return b.ABORTED;case ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ie.DATA_LOSS:return b.DATA_LOSS;default:return U()}}(W=ie||(ie={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Tt([4294967295,4294967295],0);function Au(n){const e=vm().encode(n),t=new kc;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([s,o],0)]}class _o{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gn(`Invalid padding: ${t}`);if(r<0)throw new Gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Tt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(Tt.fromNumber(r)));return s.compare(Am)===1&&(s=new Tt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Au(e),[r,s]=Ru(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);if(!this.Ee(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new _o(o,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Au(e),[r,s]=Ru(t);for(let o=0;o<this.hashCount;o++){const a=this.de(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vs(B.min(),s,new ee(G),rt(),z())}}class dr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class al{constructor(e,t){this.targetId=e,this.me=t}}class ul{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bu{constructor(){this.fe=0,this.ge=Pu(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=z(),t=z(),r=z();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new dr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Pu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Rm{constructor(e){this.Be=e,this.Le=new Map,this.ke=rt(),this.qe=Gr(),this.Qe=Gr(),this.Ke=new ee(G)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const o=s.target;if(Ui(o))if(r===0){const a=new L(o.path);this.We(t,a,Ae.newNoDocument(a,B.min()))}else K(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=At(r).toUint8Array()}catch(l){if(l instanceof Uc)return un("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _o(a,s,o)}catch(l){return un(l instanceof Gn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Be.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.We(t,o,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&Ui(c.target)){const l=new L(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ae.newNoDocument(l,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=z();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new Vs(e,t,this.Ke,this.ke,r);return this.ke=rt(),this.qe=Gr(),this.Qe=Gr(),this.Ke=new ee(G),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new bu,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ue(G),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(G),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new bu),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Gr(){return new ee(L.comparator)}function Pu(){return new ee(L.comparator)}const bm={asc:"ASCENDING",desc:"DESCENDING"},Pm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sm={and:"AND",or:"OR"};class Cm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qi(n,e){return n.useProto3Json||bs(e)?e:{value:e}}function ds(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function km(n,e){return ds(n,e.toTimestamp())}function je(n){return K(!!n),B.fromTimestamp(function(t){const r=vt(t);return new ae(r.seconds,r.nanos)}(n))}function yo(n,e){return ji(n,e).canonicalString()}function ji(n,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ll(n){const e=X.fromString(n);return K(ml(e)),e}function zi(n,e){return yo(n.databaseId,e.path)}function vi(n,e){const t=ll(e);if(t.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(dl(t))}function hl(n,e){return yo(n.databaseId,e)}function Dm(n){const e=ll(n);return e.length===4?X.emptyPath():dl(e)}function Gi(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dl(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Su(n,e,t){return{name:zi(n,e),fields:t.value.mapValue.fields}}function Vm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string"),me.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array),me.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?b.UNKNOWN:ol(d.code);return new N(p,d.message||"")}(a);t=new ul(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vi(n,r.document.name),o=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):B.min(),c=new De({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(s,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Zr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vi(n,r.document),o=r.readTime?je(r.readTime):B.min(),a=Ae.newNoDocument(s,o),c=r.removedTargetIds||[];t=new Zr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vi(n,r.document),o=r.removedTargetIds||[];t=new Zr([],o,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Im(s,o),c=r.targetId;t=new al(c,a)}}return t}function Nm(n,e){let t;if(e instanceof hr)t={update:Su(n,e.key,e.value)};else if(e instanceof mo)t={delete:zi(n,e.key)};else if(e instanceof St)t={update:Su(n,e.key,e.data),updateMask:qm(e.fieldMask)};else{if(!(e instanceof ym))return U();t={verify:zi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof ls)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:km(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,e.precondition)),t}function Om(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?je(s.updateTime):je(o);return a.isEqual(B.min())&&(a=je(o)),new mm(a,s.transformResults||[])}(t,e))):[]}function Lm(n,e){return{documents:[hl(n,e.path)]}}function Mm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hl(n,s);const o=function(d){if(d.length!==0)return pl(xe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Zt(A.field),direction:Um(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=qi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function xm(n){let e=Dm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(E){const A=fl(E);return A instanceof xe&&jc(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(A=>function(k){return new nr(en(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(E){let A;return A=typeof E=="object"?E.value:E,bs(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(E){const A=!!E.before,S=E.values||[];return new cs(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(E){const A=!E.before,S=E.values||[];return new cs(S,A)}(t.endAt)),nm(e,s,a,o,c,"F",l,d)}function Fm(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=en(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=en(t.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=en(t.unaryFilter.field);return oe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=en(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(en(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xe.create(t.compositeFilter.filters.map(r=>fl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function Um(n){return bm[n]}function Bm(n){return Pm[n]}function $m(n){return Sm[n]}function Zt(n){return{fieldPath:n.canonicalString()}}function en(n){return pe.fromServerFormat(n.fieldPath)}function pl(n){return n instanceof oe?function(t){if(t.op==="=="){if(mu(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mu(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(t.field),op:Bm(t.op),value:t.value}}}(n):n instanceof xe?function(t){const r=t.getFilters().map(s=>pl(s));return r.length===1?r[0]:{compositeFilter:{op:$m(t.op),filters:r}}}(n):U()}function qm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ml(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,r,s,o=B.min(),a=B.min(),c=me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.ht=e}}function zm(n){const e=xm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$i(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.ln=new Wm}addToCollectionParentIndex(e,t){return this.ln.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(wt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Wm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ue(X.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ue(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(41943040,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new dn(0)}static Qn(){return new dn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class Hm{constructor(e){this.Gn=e,this.buffer=new ue(ku),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ku(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Km{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.Yn(3e5)})}}class Qm{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Rs.oe);const r=new Hm(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Cu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cu):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,o,a,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,c=Date.now(),this.removeTargets(e,r,t))).next(E=>(o=E,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(d=Date.now(),Yt()<=j.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(l-c)+`ms
	Removed ${E} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function Jm(n,e){return new Qm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Jn(r.mutation,s,Ne.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=Mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=zn();return o.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let o=rt();const a=Qn(),c=function(){return Qn()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof St)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Jn(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var E;return c.set(d,new Xm(p,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Qn();let s=new ee((a,c)=>a-c),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Ne.empty();p=c.applyToLocalView(d,p),r.set(l,p);const E=(s.get(c.batchId)||z()).add(l);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,E=Xc();p.forEach(A=>{if(!o.has(A)){const S=sl(t.get(A),r.get(A));S!==null&&E.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(Mt());let c=-1,l=o;return a.next(d=>P.forEach(d,(p,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{l=l.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,z())).next(p=>({batchId:c,changes:Yc(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(e,o).next(c=>P.forEach(c,l=>{const d=function(E,A){return new En(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let c=zn();return a.forEach((l,d)=>{const p=o.get(l);p!==void 0&&Jn(p.mutation,d,Ne.empty(),ae.now()),Cs(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return P.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:zm(s.bundledQuery),readTime:je(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.overlays=new ee(L.comparator),this.dr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mt();return P.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.Tt(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Mt(),o=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Mt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Mt(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return P.resolve(c)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Tm(t,r));let o=this.dr.get(t);o===void 0&&(o=z(),this.dr.set(t,o)),this.dr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.Er=new ue(le.Ar),this.Rr=new ue(le.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new le(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new le(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new L(new X([])),r=new le(t,e),s=new le(t,e+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new L(new X([])),r=new le(t,e),s=new le(t,e+1);let o=z();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new le(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return L.comparator(e.key,t.key)||G(e.br,t.br)}static Vr(e,t){return G(e.br,t.br)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ue(le.Ar)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Em(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new le(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),s=new le(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const c=this.Cr(a.br);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(G);return t.forEach(s=>{const o=new le(s,0),a=new le(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{r=r.add(c.br)})}),P.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new le(new L(o),0);let c=new ue(G);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.br)),!0)},a),P.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return P.forEach(t.mutations,s=>{const o=new le(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new le(t,0),s=this.vr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.Nr=e,this.docs=function(){return new ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ae.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=rt();const a=t.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Lp(Op(p),r)<=0||(s.has(p.key)||Cs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){U()}Br(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ig(this)}getSize(e){return P.resolve(this.size)}}class ig extends Ym{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.persistence=e,this.Lr=new $t(t=>lo(t),ho),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.kr=0,this.qr=new Eo,this.targetCount=0,this.Qr=dn.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),P.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new dn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Un(t),P.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Lr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Lr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Rs(0),this.Ur=!1,this.Ur=!0,this.Wr=new ng,this.referenceDelegate=e(this),this.Gr=new og(this),this.indexManager=new Gm,this.remoteDocumentCache=function(s){return new sg(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new jm(t),this.jr=new eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new rg(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new ag(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,t){return P.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class ag extends xp{constructor(e){super(),this.currentSequenceNumber=e}}class To{constructor(e){this.persistence=e,this.Zr=new Eo,this.Xr=null}static ei(e){return new To(e)}get ti(){if(this.Xr)return this.Xr;throw U()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),P.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ti,r=>{const s=L.fromPath(r);return this.ni(e,s).next(o=>{o||t.removeEntry(s,B.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return P.or([()=>P.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class fs{constructor(e,t){this.persistence=e,this.ri=new $t(r=>Bp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Jm(this,t)}static ei(e,t){return new fs(e,t)}Hr(){}Jr(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return P.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(o=>o?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,t).next(c=>{c||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jr(e.data.value)),t}ir(e,t,r){return P.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Io(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return af()?8:Fp(Re())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ug;return this.ts(e,t,a).next(c=>{if(o.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>o.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Yt()<=j.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Xt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),P.resolve()):(Yt()<=j.DEBUG&&O("QueryEngine","Query:",Xt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Yt()<=j.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Xt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qe(t))):P.resolve())}Xi(e,t){if(Eu(t))return P.resolve(null);let r=qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=$i(t,null,"F"),r=qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=z(...o);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,$i(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,s){return Eu(t)||s.isEqual(B.min())?P.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const a=this.rs(t,o);return this.ss(t,a,r,s)?P.resolve(null):(Yt()<=j.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xt(t)),this.os(e,a,t,Np(s,-1)).next(c=>c))})}rs(e,t){let r=new ue(Qc(e));return t.forEach((s,o)=>{Cs(e,o)&&(r=r.add(o))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,t,r){return Yt()<=j.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Xt(t)),this.Zi.getDocumentsMatchingQuery(e,t,wt.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new ee(G),this.cs=new $t(o=>lo(o),ho),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zm(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function hg(n,e,t,r){return new lg(n,e,t,r)}async function _l(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let l=z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function dg(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const E=d.batch,A=E.keys();let S=P.resolve();return A.forEach(k=>{S=S.next(()=>p.getEntry(l,k)).next(V=>{const D=d.docVersions.get(k);K(D!==null),V.version.compareTo(D)<0&&(E.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,E))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function yl(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function fg(n,e){const t=$(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const c=[];e.targetChanges.forEach((p,E)=>{const A=s.get(E);if(!A)return;c.push(t.Gr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(o,p.addedDocuments,E)));let S=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(E,S),function(V,D,M){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(A,S,p)&&c.push(t.Gr.updateTargetData(o,S))});let l=rt(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(pg(o,a,e.documentUpdates).next(p=>{l=p.Is,d=p.ds})),!r.isEqual(B.min())){const p=t.Gr.getLastRemoteSnapshotVersion(o).next(E=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(t.us=s,o))}function pg(n,e,t){let r=z(),s=z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=rt();return t.forEach((c,l)=>{const d=o.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,ds:s}})}function mg(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gg(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(o=>o?(s=o,P.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Wi(n,e,t){const r=$(n),s=r.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!yn(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Du(n,e,t){const r=$(n);let s=B.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const E=$(l),A=E.cs.get(p);return A!==void 0?P.resolve(E.us.get(A)):E.Gr.getTargetData(d,p)}(r,a,qe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{o=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?o:z())).next(c=>(_g(r,sm(e),c),{documents:c,Es:o})))}function _g(n,e,t){let r=n.ls.get(e)||B.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(e,r)}class Vu{constructor(){this.activeTargetIds=lm()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yg{constructor(){this._o=new Vu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Vu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr=null;function Ai(){return Wr===null?Wr=function(){return 268435456+Math.round(2147483648*Math.random())}():Wr++,"0x"+Wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class wg extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(t,r,s,o,a){const c=Ai(),l=this.No(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,o,a),this.Lo(t,l,d,s).then(p=>(O("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw un("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",s),p})}ko(t,r,s,o,a,c){return this.Oo(t,r,s,o,a)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}No(t,r){const s=Tg[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const o=Ai();return new Promise((a,c)=>{const l=new Dc;l.setWithCredentials(!0),l.listenOnce(Vc.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qr.NO_ERROR:const p=l.getResponseJson();O(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Qr.TIMEOUT:O(we,`RPC '${e}' ${o} timed out`),c(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Qr.HTTP_ERROR:const E=l.getStatus();if(O(we,`RPC '${e}' ${o} failed with status:`,E,"response text:",l.getResponseText()),E>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const k=function(D){const M=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(M)>=0?M:b.UNKNOWN}(S.status);c(new N(k,S.message))}else c(new N(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new N(b.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(we,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);O(we,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",d,r,15)})}qo(e,t,r){const s=Ai(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Lc(),c=Oc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=o.join("");O(we,`Creating RPC '${e}' stream ${s}: ${p}`,l);const E=a.createWebChannel(p,l);let A=!1,S=!1;const k=new Ig({Eo:D=>{S?O(we,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(A||(O(we,`Opening RPC '${e}' stream ${s} transport.`),E.open(),A=!0),O(we,`RPC '${e}' stream ${s} sending:`,D),E.send(D))},Ao:()=>E.close()}),V=(D,M,x)=>{D.listen(M,q=>{try{x(q)}catch(Q){setTimeout(()=>{throw Q},0)}})};return V(E,jn.EventType.OPEN,()=>{S||(O(we,`RPC '${e}' stream ${s} transport opened.`),k.So())}),V(E,jn.EventType.CLOSE,()=>{S||(S=!0,O(we,`RPC '${e}' stream ${s} transport closed`),k.Do())}),V(E,jn.EventType.ERROR,D=>{S||(S=!0,un(we,`RPC '${e}' stream ${s} transport errored:`,D),k.Do(new N(b.UNAVAILABLE,"The operation could not be completed")))}),V(E,jn.EventType.MESSAGE,D=>{var M;if(!S){const x=D.data[0];K(!!x);const q=x,Q=(q==null?void 0:q.error)||((M=q[0])===null||M===void 0?void 0:M.error);if(Q){O(we,`RPC '${e}' stream ${s} received error:`,Q);const te=Q.status;let Z=function(_){const y=ie[_];if(y!==void 0)return ol(y)}(te),T=Q.message;Z===void 0&&(Z=b.INTERNAL,T="Unknown error status: "+te+" with message "+Q.message),S=!0,k.Do(new N(Z,T)),E.close()}else O(we,`RPC '${e}' stream ${s} received:`,x),k.vo(x)}}),V(c,Nc.STAT_EVENT,D=>{D.stat===Li.PROXY?O(we,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Li.NOPROXY&&O(we,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){return new Cm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r,s,o,a,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new El(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vg extends Tl{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Vm(this.serializer,e),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?je(a.readTime):B.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Gi(this.serializer),t.addTarget=function(o,a){let c;const l=a.target;if(c=Ui(l)?{documents:Lm(o,l)}:{query:Mm(o,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=cl(o,a.resumeToken);const d=qi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=ds(o,a.snapshotVersion.toTimestamp());const d=qi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Fm(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Gi(this.serializer),t.removeTarget=e,this.c_(t)}}class Ag extends Tl{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return K(!!e.streamToken),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Om(e.writeResults,e.commitTime),r=je(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Gi(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Nm(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,ji(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}ko(e,t,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,ji(t,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(nt(t),this.C_=!1):O("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{qt(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=$(l);d.k_.add(4),await fr(d),d.K_.set("Unknown"),d.k_.delete(4),await Os(d)}(this))})}),this.K_=new bg(r,s)}}async function Os(n){if(qt(n))for(const e of n.q_)await e(!0)}async function fr(n){for(const e of n.q_)await e(!1)}function Il(n,e){const t=$(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Ro(t)?Ao(t):Tn(t).s_()&&vo(t,e))}function wo(n,e){const t=$(n),r=Tn(t);t.L_.delete(e),r.s_()&&wl(t,e),t.L_.size===0&&(r.s_()?r.a_():qt(t)&&t.K_.set("Unknown"))}function vo(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tn(n).V_(e)}function wl(n,e){n.U_.xe(e),Tn(n).m_(e)}function Ao(n){n.U_=new Rm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Tn(n).start(),n.K_.F_()}function Ro(n){return qt(n)&&!Tn(n).i_()&&n.L_.size>0}function qt(n){return $(n).k_.size===0}function vl(n){n.U_=void 0}async function Sg(n){n.K_.set("Online")}async function Cg(n){n.L_.forEach((e,t)=>{vo(n,e)})}async function kg(n,e){vl(n),Ro(n)?(n.K_.O_(e),Ao(n)):n.K_.set("Unknown")}async function Dg(n,e,t){if(n.K_.set("Online"),e instanceof ul&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.L_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.L_.delete(c),s.U_.removeTarget(c))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ps(n,r)}else if(e instanceof Zr?n.U_.$e(e):e instanceof al?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(B.min()))try{const r=await yl(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.L_.get(d);p&&o.L_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=o.L_.get(l);if(!p)return;o.L_.set(l,p.withResumeToken(me.EMPTY_BYTE_STRING,p.snapshotVersion)),wl(o,l);const E=new gt(p.target,l,d,p.sequenceNumber);vo(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ps(n,r)}}async function ps(n,e,t){if(!yn(e))throw e;n.k_.add(1),await fr(n),n.K_.set("Offline"),t||(t=()=>yl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Os(n)})}function Al(n,e){return e().catch(t=>ps(n,t,e))}async function Ls(n){const e=$(n),t=bt(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;Vg(e);)try{const s=await mg(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,Ng(e,s)}catch(s){await ps(e,s)}Rl(e)&&bl(e)}function Vg(n){return qt(n)&&n.B_.length<10}function Ng(n,e){n.B_.push(e);const t=bt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Rl(n){return qt(n)&&!bt(n).i_()&&n.B_.length>0}function bl(n){bt(n).start()}async function Og(n){bt(n).w_()}async function Lg(n){const e=bt(n);for(const t of n.B_)e.g_(t.mutations)}async function Mg(n,e,t){const r=n.B_.shift(),s=go.from(r,e,t);await Al(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ls(n)}async function xg(n,e){e&&bt(n).f_&&await async function(r,s){if(function(a){return wm(a)&&a!==b.ABORTED}(s.code)){const o=r.B_.shift();bt(r).__(),await Al(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ls(r)}}(n,e),Rl(n)&&bl(n)}async function Ou(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=qt(t);t.k_.add(3),await fr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Os(t)}async function Fg(n,e){const t=$(n);e?(t.k_.delete(2),await Os(t)):e||(t.k_.add(2),await fr(t),t.K_.set("Unknown"))}function Tn(n){return n.W_||(n.W_=function(t,r,s){const o=$(t);return o.b_(),new vg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:Sg.bind(null,n),mo:Cg.bind(null,n),po:kg.bind(null,n),R_:Dg.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Ro(n)?Ao(n):n.K_.set("Unknown")):(await n.W_.stop(),vl(n))})),n.W_}function bt(n){return n.G_||(n.G_=function(t,r,s){const o=$(t);return o.b_(),new Ag(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Og.bind(null,n),po:xg.bind(null,n),p_:Lg.bind(null,n),y_:Mg.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ls(n)):(await n.G_.stop(),n.B_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new bo(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(n,e){if(nt("AsyncQueue",`${e}: ${n}`),yn(n))return new N(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{static emptySet(e){return new nn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=zn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.z_=new ee(L.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):U():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class fn{constructor(e,t,r,s,o,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new fn(e,t,nn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Bg{constructor(){this.queries=Mu(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=$(t),o=s.queries;s.queries=Mu(),o.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function Mu(){return new $t(n=>Kc(n),Ss)}async function Pl(n,e){const t=$(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Y_()&&e.Z_()&&(r=2):(o=new Ug,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await t.onListen(s,!0);break;case 1:o.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Po(a,`Initialization of query '${Xt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&So(t)}async function Sl(n,e){const t=$(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?s=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function $g(n,e){const t=$(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.J_)c.ta(s)&&(r=!0);a.H_=s}}r&&So(t)}function qg(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const o of s.J_)o.onError(t);r.queries.delete(e)}function So(n){n.X_.forEach(e=>{e.next()})}var Hi,xu;(xu=Hi||(Hi={})).na="default",xu.Cache="cache";class Cl{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Hi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.key=e}}class Dl{constructor(e){this.key=e}}class jg{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=z(),this.mutatedKeys=z(),this.Va=Qc(e),this.ma=new nn(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new Lu,s=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,E)=>{const A=s.get(p),S=Cs(this.query,E)?E:null,k=!!A&&this.mutatedKeys.has(A.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;A&&S?A.data.isEqual(S.data)?k!==V&&(r.track({type:3,doc:S}),D=!0):this.ya(A,S)||(r.track({type:2,doc:S}),D=!0,(l&&this.Va(S,l)>0||d&&this.Va(S,d)<0)&&(c=!0)):!A&&S?(r.track({type:0,doc:S}),D=!0):A&&!S&&(r.track({type:1,doc:A}),D=!0,(l||d)&&(c=!0)),D&&(S?(a=a.add(S),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:c,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((p,E)=>function(S,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return V(S)-V(k)}(p.type,E.type)||this.Va(p.doc,E.doc)),this.wa(r),s=s!=null&&s;const c=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new fn(this.query,e.ma,o,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Lu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=z(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Dl(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new kl(r))}),t}va(e){this.Ea=e.Es,this.Ra=z();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return fn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class zg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gg{constructor(e){this.key=e,this.Fa=!1}}class Wg{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new $t(c=>Kc(c),Ss),this.Oa=new Map,this.Na=new Set,this.Ba=new ee(L.comparator),this.La=new Map,this.ka=new Eo,this.qa={},this.Qa=new Map,this.Ka=dn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Hg(n,e,t=!0){const r=xl(n);let s;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await Vl(r,e,t,!0),s}async function Kg(n,e){const t=xl(n);await Vl(t,e,!0,!1)}async function Vl(n,e,t,r){const s=await gg(n.localStore,qe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await Qg(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Il(n.remoteStore,s),c}async function Qg(n,e,t,r,s){n.Ua=(E,A,S)=>async function(V,D,M,x){let q=D.view.ga(M);q.ss&&(q=await Du(V.localStore,D.query,!1).then(({documents:T})=>D.view.ga(T,q)));const Q=x&&x.targetChanges.get(D.targetId),te=x&&x.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(q,V.isPrimaryClient,Q,te);return Uu(V,D.targetId,Z.ba),Z.snapshot}(n,E,A,S);const o=await Du(n.localStore,e,!0),a=new jg(e,o.Es),c=a.ga(o.documents),l=dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Uu(n,t,d.ba);const p=new zg(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function Jg(n,e,t){const r=$(n),s=r.xa.get(e),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(a=>!Ss(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&wo(r.remoteStore,s.targetId),Ki(r,s.targetId)}).catch(_n)):(Ki(r,s.targetId),await Wi(r.localStore,s.targetId,!0))}async function Yg(n,e){const t=$(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wo(t.remoteStore,r.targetId))}async function Xg(n,e,t){const r=i_(n);try{const s=await function(a,c){const l=$(a),d=ae.now(),p=c.reduce((S,k)=>S.add(k.key),z());let E,A;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=rt(),V=z();return l.hs.getEntries(S,p).next(D=>{k=D,k.forEach((M,x)=>{x.isValidDocument()||(V=V.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,k)).next(D=>{E=D;const M=[];for(const x of c){const q=_m(x,E.get(x.key).overlayedDocument);q!=null&&M.push(new St(x.key,q,Bc(q.value.mapValue),Le.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,M,c)}).next(D=>{A=D;const M=D.applyToLocalDocumentSet(E,V);return l.documentOverlayCache.saveOverlays(S,D.batchId,M)})}).then(()=>({batchId:A.batchId,changes:Yc(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new ee(G)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,s.batchId,t),await pr(r,s.changes),await Ls(r.remoteStore)}catch(s){const o=Po(s,"Failed to persist write");t.reject(o)}}async function Nl(n,e){const t=$(n);try{const r=await fg(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.La.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?K(a.Fa):s.removedDocuments.size>0&&(K(a.Fa),a.Fa=!1))}),await pr(t,r,e)}catch(r){await _n(r)}}function Fu(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((o,a)=>{const c=a.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=$(a);l.onlineState=c;let d=!1;l.queries.forEach((p,E)=>{for(const A of E.J_)A.ea(c)&&(d=!0)}),d&&So(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zg(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),o=s&&s.key;if(o){let a=new ee(L.comparator);a=a.insert(o,Ae.newNoDocument(o,B.min()));const c=z().add(o),l=new Vs(B.min(),new Map,new ee(G),a,c);await Nl(r,l),r.Ba=r.Ba.remove(o),r.La.delete(e),Co(r)}else await Wi(r.localStore,e,!1).then(()=>Ki(r,e,t)).catch(_n)}async function e_(n,e){const t=$(n),r=e.batch.batchId;try{const s=await dg(t.localStore,e);Ll(t,r,null),Ol(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pr(t,s)}catch(s){await _n(s)}}async function t_(n,e,t){const r=$(n);try{const s=await function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(E=>(K(E!==null),p=E.keys(),l.mutationQueue.removeMutationBatch(d,E))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Ll(r,e,t),Ol(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pr(r,s)}catch(s){await _n(s)}}function Ol(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Ll(n,e,t){const r=$(n);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ki(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ml(n,r)})}function Ml(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(wo(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Co(n))}function Uu(n,e,t){for(const r of t)r instanceof kl?(n.ka.addReference(r.key,e),n_(n,r)):r instanceof Dl?(O("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ml(n,r.key)):U()}function n_(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(O("SyncEngine","New document in limbo: "+t),n.Na.add(r),Co(n))}function Co(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new L(X.fromString(e)),r=n.Ka.next();n.La.set(r,new Gg(t)),n.Ba=n.Ba.insert(t,r),Il(n.remoteStore,new gt(qe(fo(t.path)),r,"TargetPurposeLimboResolution",Rs.oe))}}async function pr(n,e,t){const r=$(n),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const E=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Io.zi(l.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(l,d){const p=$(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(d,A=>P.forEach(A.Wi,S=>p.persistence.referenceDelegate.addReference(E,A.targetId,S)).next(()=>P.forEach(A.Gi,S=>p.persistence.referenceDelegate.removeReference(E,A.targetId,S)))))}catch(E){if(!yn(E))throw E;O("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const A=E.targetId;if(!E.fromCache){const S=p.us.get(A),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);p.us=p.us.insert(A,V)}}}(r.localStore,o))}async function r_(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await _l(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(c=>{c.forEach(l=>{l.reject(new N(b.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(t,r.Ts)}}function s_(n,e){const t=$(n),r=t.La.get(e);if(r&&r.Fa)return z().add(r.key);{let s=z();const o=t.Oa.get(e);if(!o)return s;for(const a of o){const c=t.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function xl(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zg.bind(null,e),e.Ma.R_=$g.bind(null,e.eventManager),e.Ma.Wa=qg.bind(null,e.eventManager),e}function i_(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t_.bind(null,e),e}class ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ns(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return hg(this.persistence,new cg,e.initialUser,this.serializer)}ja(e){return new gl(To.ei,this.serializer)}za(e){return new yg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ms.provider={build:()=>new ms};class o_ extends ms{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){K(this.persistence.referenceDelegate instanceof fs);const r=this.persistence.referenceDelegate.garbageCollector;return new Km(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new gl(r=>fs.ei(r,t),this.serializer)}}class Qi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r_.bind(null,this.syncEngine),await Fg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Bg}()}createDatastore(e){const t=Ns(e.databaseInfo.databaseId),r=function(o){return new wg(o)}(e.databaseInfo);return function(o,a,c,l){return new Rg(o,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,c){return new Pg(r,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Fu(this.syncEngine,t,0),function(){return Nu.p()?new Nu:new Eg}())}createSyncEngine(e,t){return function(s,o,a,c,l,d,p){const E=new Wg(s,o,a,c,l,d);return p&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=$(s);O("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await fr(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qi.provider={build:()=>new Qi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ve.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Po(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bi(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _l(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Bu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await u_(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ou(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ou(e.remoteStore,s)),n._onlineComponents=e}async function u_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await bi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await bi(n,new ms)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await bi(n,new o_(void 0));return n._offlineComponents}async function Ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Bu(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Bu(n,new Qi))),n._onlineComponents}function c_(n){return Ul(n).then(e=>e.syncEngine)}async function Bl(n){const e=await Ul(n),t=e.eventManager;return t.onListen=Hg.bind(null,e.syncEngine),t.onUnlisten=Jg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yg.bind(null,e.syncEngine),t}function l_(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){const p=new Fl({next:A=>{p.eu(),a.enqueueAndForget(()=>Sl(o,E));const S=A.docs.has(c);!S&&A.fromCache?d.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&l&&l.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),E=new Cl(fo(c.path),p,{includeMetadataChanges:!0,ua:!0});return Pl(o,E)}(await Bl(n),n.asyncQueue,e,t,r)),r.promise}function h_(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){const p=new Fl({next:A=>{p.eu(),a.enqueueAndForget(()=>Sl(o,E)),A.fromCache&&l.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),E=new Cl(c,p,{includeMetadataChanges:!0,ua:!0});return Pl(o,E)}(await Bl(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n,e,t){if(!t)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function d_(n,e,t,r){if(e===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qu(n){if(!L.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ju(n){if(L.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Fe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$l((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ap;switch(r.type){case"firstParty":return new Sp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$u.get(t);r&&(O("ComponentProvider","Removing Datastore"),$u.delete(t),r.terminate())}(this),Promise.resolve()}}function f_(n,e,t,r={}){var s;const o=(n=Fe(n,xs))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ve.MOCK_USER;else{c=Zd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(d)}n._authCredentials=new Rp(new Mc(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class Se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class It extends jt{constructor(e,t,r){super(e,t,fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new L(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function se(n,e,...t){if(n=ce(n),ql("collection","path",e),n instanceof xs){const r=X.fromString(e,...t);return ju(r),new It(n,null,r)}{if(!(n instanceof Se||n instanceof It))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return ju(r),new It(n.firestore,null,r)}}function ot(n,e,...t){if(n=ce(n),arguments.length===1&&(e=xc.newId()),ql("doc","path",e),n instanceof xs){const r=X.fromString(e,...t);return qu(r),new Se(n,null,new L(r))}{if(!(n instanceof Se||n instanceof It))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return qu(r),new Se(n.firestore,n instanceof It?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new El(this,"async_queue_retry"),this.fu=()=>{const r=Ri();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ri();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Ri();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ze;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yn(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw nt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=bo.createAndSchedule(this,e,t,r,o=>this.Su(o));return this.Eu.push(s),s}pu(){this.Au&&U()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class zt extends xs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Gu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gu(e),this._firestoreClient=void 0,await e}}}function p_(n,e){const t=typeof n=="object"?n:Pc(),r=typeof n=="string"?n:"(default)",s=oo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Yd("firestore");o&&f_(s,...o)}return s}function ko(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||m_(n),n._firestoreClient}function m_(n){var e,t,r;const s=n._freezeSettings(),o=function(c,l,d,p){return new jp(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,$l(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new a_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(me.fromBase64String(e))}catch(t){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=/^__.*__$/;class __{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class jl{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Oo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Oo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return gs(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(zl(this.Mu)&&g_.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class y_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ns(e)}$u(e,t,r,s=!1){return new Oo({Mu:e,methodName:t,Ku:r,path:pe.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Us(n){const e=n._freezeSettings(),t=Ns(n._databaseId);return new y_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gl(n,e,t,r,s,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,e,t,s);Lo("Data must be an object, but it was:",a,r);const c=Wl(r,a);let l,d;if(o.merge)l=new Ne(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const A=Ji(e,E,t);if(!a.contains(A))throw new N(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Kl(p,A)||p.push(A)}l=new Ne(p),d=a.fieldTransforms.filter(E=>l.covers(E.field))}else l=null,d=a.fieldTransforms;return new __(new De(c),l,d)}class Bs extends Do{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bs}}function E_(n,e,t,r){const s=n.$u(1,e,t);Lo("Data must be an object, but it was:",s,r);const o=[],a=De.empty();Pt(r,(l,d)=>{const p=Mo(e,l,t);d=ce(d);const E=s.Lu(p);if(d instanceof Bs)o.push(p);else{const A=mr(d,E);A!=null&&(o.push(p),a.set(p,A))}});const c=new Ne(o);return new jl(a,c,s.fieldTransforms)}function T_(n,e,t,r,s,o){const a=n.$u(1,e,t),c=[Ji(e,r,t)],l=[s];if(o.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ji(e,o[A])),l.push(o[A+1]);const d=[],p=De.empty();for(let A=c.length-1;A>=0;--A)if(!Kl(d,c[A])){const S=c[A];let k=l[A];k=ce(k);const V=a.Lu(S);if(k instanceof Bs)d.push(S);else{const D=mr(k,V);D!=null&&(d.push(S),p.set(S,D))}}const E=new Ne(d);return new jl(p,E,a.fieldTransforms)}function I_(n,e,t,r=!1){return mr(t,n.$u(r?4:3,e))}function mr(n,e){if(Hl(n=ce(n)))return Lo("Unsupported field value:",e,n),Wl(n,e);if(n instanceof Do)return function(r,s){if(!zl(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let l=mr(c,s.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ae.fromDate(r);return{timestampValue:ds(s.serializer,o)}}if(r instanceof ae){const o=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ds(s.serializer,o)}}if(r instanceof Vo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:cl(s.serializer,r._byteString)};if(r instanceof Se){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:yo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof No)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return po(c.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Ms(r)}`)}(n,e)}function Wl(n,e){const t={};return Fc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(n,(r,s)=>{const o=mr(s,e.Ou(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Hl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Vo||n instanceof pn||n instanceof Se||n instanceof Do||n instanceof No)}function Lo(n,e,t){if(!Hl(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ms(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Ji(n,e,t){if((e=ce(e))instanceof Fs)return e._internalPath;if(typeof e=="string")return Mo(n,e);throw gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const w_=new RegExp("[~\\*/\\[\\]]");function Mo(n,e,t){if(e.search(w_)>=0)throw gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fs(...e.split("."))._internalPath}catch{throw gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new N(b.INVALID_ARGUMENT,c+n+l)}function Kl(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($s("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class v_ extends Ql{data(){return super.data()}}function $s(n,e){return typeof e=="string"?Mo(n,e):e instanceof Fs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xo{}class Jl extends xo{}function ge(n,e,...t){let r=[];e instanceof xo&&r.push(e),r=r.concat(t),function(o){const a=o.filter(l=>l instanceof _r).length,c=o.filter(l=>l instanceof gr).length;if(a>1||a>0&&c>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class gr extends Jl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gr(e,t,r)}_apply(e){const t=this._parse(e);return Xl(e._query,t),new jt(e.firestore,e.converter,Bi(e._query,t))}_parse(e){const t=Us(e.firestore);return function(o,a,c,l,d,p,E){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Hu(E,p);const S=[];for(const k of E)S.push(Wu(l,o,k));A={arrayValue:{values:S}}}else A=Wu(l,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Hu(E,p),A=I_(c,a,E,p==="in"||p==="not-in");return oe.create(d,p,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function he(n,e,t){const r=e,s=$s("where",n);return gr._create(s,r,t)}class _r extends xo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _r(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const l of c)Xl(a,l),a=Bi(a,l)}(e._query,t),new jt(e.firestore,e.converter,Bi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function R_(...n){return n.forEach(e=>b_("or",e)),_r._create("or",n)}class Fo extends Jl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fo(e,t)}_apply(e){const t=function(s,o,a){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nr(o,a)}(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new En(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Yl(n,e="asc"){const t=e,r=$s("orderBy",n);return Fo._create(r,t)}function Wu(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hc(e)&&t.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!L.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fu(n,new L(r))}if(t instanceof Se)return fu(n,t._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(t)}.`)}function Hu(n,e){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xl(n,e){const t=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function b_(n,e){if(!(e instanceof gr||e instanceof _r))throw new N(b.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class P_{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>re(a.doubleValue));return new No(o)}convertGeoPoint(e){return new Vo(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ps(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const t=vt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);K(ml(r));const s=new er(r.get(1),r.get(3)),o=new L(r.popFirst(5));return s.isEqual(t)||nt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eh extends Ql{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new es(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($s("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class es extends eh{data(e={}){return super.data(e)}}class S_{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new es(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new es(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const l=new es(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:C_(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function C_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){n=Fe(n,Se);const e=Fe(n.firestore,zt);return l_(ko(e),n._key).then(t=>N_(e,n,t))}class th extends P_{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function _e(n){n=Fe(n,jt);const e=Fe(n.firestore,zt),t=ko(e),r=new th(e);return A_(n._query),h_(t,n._query).then(s=>new S_(e,r,n,s))}function Uo(n,e,t){n=Fe(n,Se);const r=Fe(n.firestore,zt),s=Zl(n.converter,e);return js(r,[Gl(Us(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Le.none())])}function qs(n,e,t,...r){n=Fe(n,Se);const s=Fe(n.firestore,zt),o=Us(s);let a;return a=typeof(e=ce(e))=="string"||e instanceof Fs?T_(o,"updateDoc",n._key,e,t,r):E_(o,"updateDoc",n._key,e),js(s,[a.toMutation(n._key,Le.exists(!0))])}function D_(n){return js(Fe(n.firestore,zt),[new mo(n._key,Le.none())])}function V_(n,e){const t=Fe(n.firestore,zt),r=ot(n),s=Zl(n.converter,e);return js(t,[Gl(Us(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function js(n,e){return function(r,s){const o=new Ze;return r.asyncQueue.enqueueAndForget(async()=>Xg(await c_(r),s,o)),o.promise}(ko(n),e)}function N_(n,e,t){const r=t.docs.get(e._key),s=new th(n);return new eh(n,s,e._key,r,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){gn=s})(mn),an(new xt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new zt(new bp(r.getProvider("auth-internal")),new kp(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Et(au,"4.7.6",e),Et(au,"4.7.6","esm2017")})();function Bo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O_=nh,rh=new cr("auth","Firebase",nh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new so("@firebase/auth");function L_(n,...e){_s.logLevel<=j.WARN&&_s.warn(`Auth (${mn}): ${n}`,...e)}function ts(n,...e){_s.logLevel<=j.ERROR&&_s.error(`Auth (${mn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,...e){throw $o(n,...e)}function ze(n,...e){return $o(n,...e)}function sh(n,e,t){const r=Object.assign(Object.assign({},O_()),{[e]:t});return new cr("auth","Firebase",r).create(e,{appName:n.name})}function et(n){return sh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $o(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return rh.create(n,...e)}function F(n,e,...t){if(!n)throw $o(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ts(e),new Error(e)}function st(n,e){n||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function M_(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M_()||rf()||"connection"in navigator)?navigator.onLine:!0}function F_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=ef()||sf()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new yr(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kt(n,e,t,r,s={}){return oh(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=lr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},o);return nf()||(d.referrerPolicy="no-referrer"),ih.fetch()(ah(n,n.config.apiHost,t,c),d)})}async function oh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},U_),e);try{const s=new q_(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Hr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Hr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Hr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw sh(n,p,d);Ue(n,p)}}catch(s){if(s instanceof it)throw s;Ue(n,"network-request-failed",{message:String(s)})}}async function Er(n,e,t,r,s={}){const o=await kt(n,e,t,r,s);return"mfaPendingCredential"in o&&Ue(n,"multi-factor-auth-required",{_serverResponse:o}),o}function ah(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?qo(n.config,s):`${n.config.apiScheme}://${s}`}function $_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class q_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),B_.get())})}}function Hr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function Qu(n){return n!==void 0&&n.enterprise!==void 0}class j_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function z_(n,e){return kt(n,"GET","/v2/recaptchaConfig",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return kt(n,"POST","/v1/accounts:delete",e)}async function uh(n,e){return kt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W_(n,e=!1){const t=ce(n),r=await t.getIdToken(e),s=jo(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Yn(Pi(s.auth_time)),issuedAtTime:Yn(Pi(s.iat)),expirationTime:Yn(Pi(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Pi(n){return Number(n)*1e3}function jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tc(t);return s?JSON.parse(s):(ts("Failed to decode base64 JWT payload"),null)}catch(s){return ts("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ju(n){const e=jo(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof it&&H_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function H_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ir(n,uh(t,{idToken:r}));F(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?ch(o.providerUserInfo):[],c=J_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),p=l?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Xi(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,E)}async function Q_(n){const e=ce(n);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ch(n){return n.map(e=>{var{providerId:t}=e,r=Bo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e){const t=await oh(n,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=ah(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ih.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function X_(n,e){return kt(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Y_(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new rn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=Bo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ir(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W_(this,e)}reload(){return Q_(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ys(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(et(this.auth));const e=await this.getIdToken();return await ir(this,G_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,c,l,d,p;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(s=t.email)!==null&&s!==void 0?s:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,x=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:q,emailVerified:Q,isAnonymous:te,providerData:Z,stsTokenManager:T}=t;F(q&&T,e,"internal-error");const m=rn.fromJSON(this.name,T);F(typeof q=="string",e,"internal-error"),ht(E,e.name),ht(A,e.name),F(typeof Q=="boolean",e,"internal-error"),F(typeof te=="boolean",e,"internal-error"),ht(S,e.name),ht(k,e.name),ht(V,e.name),ht(D,e.name),ht(M,e.name),ht(x,e.name);const _=new Ye({uid:q,auth:e,email:A,emailVerified:Q,displayName:E,isAnonymous:te,photoURL:k,phoneNumber:S,tenantId:V,stsTokenManager:m,createdAt:M,lastLoginAt:x});return Z&&Array.isArray(Z)&&(_.providerData=Z.map(y=>Object.assign({},y))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new rn;s.updateFromServerResponse(t);const o=new Ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ys(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?ch(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new rn;c.updateFromIdToken(r);const l=new Ye({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function Xe(n){st(n instanceof Function,"Expected a class definition");let e=Yu.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lh.type="NONE";const Xu=lh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e,t){return`firebase:${n}:${e}:${t}`}class sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ns(this.userKey,s.apiKey,o),this.fullPersistenceKey=ns("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sn(Xe(Xu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Xe(Xu);const a=ns(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const E=Ye._fromJSON(e,p);d!==o&&(c=E),o=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new sn(o,e,r):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new sn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gh(e))return"Blackberry";if(_h(e))return"Webos";if(dh(e))return"Safari";if((e.includes("chrome/")||fh(e))&&!e.includes("edge/"))return"Chrome";if(mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hh(n=Re()){return/firefox\//i.test(n)}function dh(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fh(n=Re()){return/crios\//i.test(n)}function ph(n=Re()){return/iemobile/i.test(n)}function mh(n=Re()){return/android/i.test(n)}function gh(n=Re()){return/blackberry/i.test(n)}function _h(n=Re()){return/webos/i.test(n)}function zo(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Z_(n=Re()){var e;return zo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ey(){return of()&&document.documentMode===10}function yh(n=Re()){return zo(n)||mh(n)||_h(n)||gh(n)||/windows phone/i.test(n)||ph(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,e=[]){let t;switch(n){case"Browser":t=Zu(Re());break;case"Worker":t=`${Zu(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const l=e(o);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e={}){return kt(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=6;class sy{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ry,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ec(this),this.idTokenSubscription=new ec(this),this.beforeStateQueue=new ty(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uh(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ys(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(et(this));const t=e?ce(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ny(this),t=new sy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await X_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&L_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gt(n){return ce(n)}class ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=pf(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oy(n){zs=n}function Th(n){return zs.loadJS(n)}function ay(){return zs.recaptchaEnterpriseScript}function uy(){return zs.gapiScript}function cy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ly{constructor(){this.enterprise=new hy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const dy="recaptcha-enterprise",Ih="NO_RECAPTCHA";class fy{constructor(e){this.type=dy,this.auth=Gt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{z_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new j_(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(o,a,c){const l=window.grecaptcha;Qu(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ih)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ly().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(c=>{if(!t&&Qu(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ay();l.length!==0&&(l+=c),Th(l).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function tc(n,e,t,r=!1,s=!1){const o=new fy(n);let a;if(s)a=Ih;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Zi(n,e,t,r,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await tc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await tc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e){const t=oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(os(o,e??{}))return s;Ue(s,"already-initialized")}return t.initialize({options:e})}function my(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gy(n,e,t){const r=Gt(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=wh(e),{host:a,port:c}=_y(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),yy()}function wh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _y(n){const e=wh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:nc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:nc(a)}}}function nc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function Ey(n,e){return kt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e){return Er(n,"POST","/v1/accounts:signInWithPassword",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,e){return Er(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}async function wy(n,e){return Er(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Go{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new or(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new or(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zi(e,t,"signInWithPassword",Ty);case"emailLink":return Iy(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zi(e,r,"signUpPassword",Ey);case"emailLink":return wy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,e){return Er(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="http://localhost";class Ut extends Go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=Bo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ut(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return on(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,on(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,on(e,t)}buildRequest(){const e={requestUri:vy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ry(n){const e=$n(qn(n)).link,t=e?$n(qn(e)).deep_link_id:null,r=$n(qn(n)).deep_link_id;return(r?$n(qn(r)).link:null)||r||t||e||n}class Wo{constructor(e){var t,r,s,o,a,c;const l=$n(qn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,E=Ay((s=l.mode)!==null&&s!==void 0?s:null);F(d&&p&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=p,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ry(e);try{return new Wo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(e,t){return or._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wo.parseLink(t);return F(r,"argument-error"),or._fromEmailAndCode(e,r.code,r.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends vh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Tr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ut._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Tr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Tr{constructor(){super("twitter.com")}static credential(e,t){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(n,e){return Er(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Ye._fromIdTokenResponse(e,r,s),a=rc(r);return new Bt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=rc(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function rc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends it{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Es(e,t,r,s)}}function Ah(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(n,o,e,r):o})}async function Py(n,e,t=!1){const r=await ir(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(et(r));const s="reauthenticate";try{const o=await ir(n,Ah(r,s,e,n),t);F(o.idToken,r,"internal-error");const a=jo(o.idToken);F(a,r,"internal-error");const{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),Bt._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(n,e,t=!1){if($e(n.app))return Promise.reject(et(n));const r="signIn",s=await Ah(n,r,e),o=await Bt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function Cy(n,e){return Rh(Gt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(n){const e=Gt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ky(n,e,t){if($e(n.app))return Promise.reject(et(n));const r=Gt(n),a=await Zi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",by).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&bh(n),l}),c=await Bt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Dy(n,e,t){return $e(n.app)?Promise.reject(et(n)):Cy(ce(n),In.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bh(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n,e){return ce(n).setPersistence(e)}function Ny(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function Oy(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function Ly(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function My(n){return ce(n).signOut()}const Ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=1e3,Fy=10;class Sh extends Ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);ey()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sh.type="LOCAL";const Ch=Sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kh.type="SESSION";const Dh=kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,o)),l=await Uy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{const d=Ho("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(E){const A=E;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(A.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function $y(n){Ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function qy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zy(){return Vh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firebaseLocalStorageDb",Gy=1,Is="firebaseLocalStorage",Oh="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ws(n,e){return n.transaction([Is],e?"readwrite":"readonly").objectStore(Is)}function Wy(){const n=indexedDB.deleteDatabase(Nh);return new Ir(n).toPromise()}function eo(){const n=indexedDB.open(Nh,Gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Is,{keyPath:Oh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Is)?e(r):(r.close(),await Wy(),e(await eo()))})})}async function sc(n,e,t){const r=Ws(n,!0).put({[Oh]:e,value:t});return new Ir(r).toPromise()}async function Hy(n,e){const t=Ws(n,!1).get(e),r=await new Ir(t).toPromise();return r===void 0?null:r.value}function ic(n,e){const t=Ws(n,!0).delete(e);return new Ir(t).toPromise()}const Ky=800,Qy=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(zy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qy(),!this.activeServiceWorker)return;this.sender=new By(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eo();return await sc(e,Ts,"1"),await ic(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Hy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ic(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ws(s,!1).getAll();return new Ir(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const Jy=Lh;new yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n,e){return e?Xe(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,t){return on(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xy(n){return Rh(n.auth,new Ko(n),n.bypassAuthState)}function Zy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Sy(t,new Ko(n),n.bypassAuthState)}async function eE(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Py(t,new Ko(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xy;case"linkViaPopup":case"linkViaRedirect":return eE;case"reauthViaPopup":case"reauthViaRedirect":return Zy;default:Ue(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new yr(2e3,1e4);class tn extends Mh{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tE.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="pendingRedirect",rs=new Map;class rE extends Mh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const r=await sE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sE(n,e){const t=aE(e),r=oE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function iE(n,e){rs.set(n._key(),e)}function oE(n){return Xe(n._redirectPersistence)}function aE(n){return ns(nE,n.config.apiKey,n.name)}async function uE(n,e,t=!1){if($e(n.app))return Promise.reject(et(n));const r=Gt(n),s=Yy(r,e),a=await new rE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=10*60*1e3;class lE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cE&&this.cachedEventUids.clear(),this.cachedEventUids.has(oc(e))}saveEventToCache(e){this.cachedEventUids.add(oc(e)),this.lastProcessedEventTime=Date.now()}}function oc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(n,e={}){return kt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pE=/^https?/;async function mE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dE(n);for(const t of e)try{if(gE(t))return}catch{}Ue(n,"unauthorized-domain")}function gE(n){const e=Yi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!pE.test(t))return!1;if(fE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new yr(3e4,6e4);function ac(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yE(n){return new Promise((e,t)=>{var r,s,o;function a(){ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ac(),t(ze(n,"network-request-failed"))},timeout:_E.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ge().gapi)===null||o===void 0)&&o.load)a();else{const c=cy("iframefcb");return Ge()[c]=()=>{gapi.load?a():t(ze(n,"network-request-failed"))},Th(`${uy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ss=null,e})}let ss=null;function EE(n){return ss=ss||yE(n),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new yr(5e3,15e3),IE="__/auth/iframe",wE="emulator/auth/iframe",vE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RE(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qo(e,wE):`https://${n.config.authDomain}/${IE}`,r={apiKey:e.apiKey,appName:n.name,v:mn},s=AE.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${lr(r).slice(1)}`}async function bE(n){const e=await EE(n),t=Ge().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:RE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vE,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),c=Ge().setTimeout(()=>{o(a)},TE.get());function l(){Ge().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SE=500,CE=600,kE="_blank",DE="http://localhost";class uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VE(n,e,t,r=SE,s=CE){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},PE),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Re().toLowerCase();t&&(c=fh(d)?kE:t),hh(d)&&(e=e||DE,l.scrollbars="yes");const p=Object.entries(l).reduce((A,[S,k])=>`${A}${S}=${k},`,"");if(Z_(d)&&c!=="_self")return NE(e||"",c),new uc(null);const E=window.open(e||"",c,p);F(E,n,"popup-blocked");try{E.focus()}catch{}return new uc(E)}function NE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="__/auth/handler",LE="emulator/auth/handler",ME=encodeURIComponent("fac");async function cc(n,e,t,r,s,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mn,eventId:s};if(e instanceof vh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ff(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,E]of Object.entries({}))a[p]=E}if(e instanceof Tr){const p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${ME}=${encodeURIComponent(l)}`:"";return`${xE(n)}?${lr(c).slice(1)}${d}`}function xE({config:n}){return n.emulator?qo(n,LE):`https://${n.authDomain}/${OE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="webStorageSupport";class FE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dh,this._completeRedirectFn=uE,this._overrideRedirectResult=iE}async _openPopup(e,t,r,s){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await cc(e,t,r,Yi(),s);return VE(e,a,Ho())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await cc(e,t,r,Yi(),s);return $y(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bE(e),r=new lE(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Si,{type:Si},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Si];a!==void 0&&t(!!a),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yh()||dh()||zo()}}const UE=FE;var lc="@firebase/auth",hc="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qE(n){an(new xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(n)},d=new iy(r,s,o,l);return my(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),an(new xt("auth-internal",e=>{const t=Gt(e.getProvider("auth").getImmediate());return(r=>new BE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(lc,hc,$E(n)),Et(lc,hc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=5*60,zE=vc("authIdTokenMaxAge")||jE;let dc=null;const GE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zE)return;const s=t==null?void 0:t.token;dc!==s&&(dc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function WE(n=Pc()){const e=oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=py(n,{popupRedirectResolver:UE,persistence:[Jy,Ch,Dh]}),r=vc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=GE(o.toString());Oy(t,a,()=>a(t.currentUser)),Ny(t,c=>a(c))}}const s=Ic("auth");return s&&gy(t,`http://${s}`),t}function HE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=ze("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",HE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qE("Browser");var KE="firebase",QE="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(KE,QE,"app");const JE={apiKey:"AIzaSyAiesvbsJsfqv1Iz13HoHZCkg4aCDAnQ-0",authDomain:"bookfly-5efc3.firebaseapp.com",projectId:"bookfly-5efc3",storageBucket:"bookfly-5efc3.firebasestorage.app",messagingSenderId:"418964211654",appId:"1:418964211654:web:5345a85c119696741dd4c7",measurementId:"G-T5BQ99KSZS"},YE={firebase:JE};let Kr,fc;function Hs(){return Kr||(Kr=bc(YE.firebase),fc=p_(Kr)),{app:Kr,db:fc}}let{db:XE}=Hs();async function kI(n){let e=(await _e(ge(se(XE,"posts"),he("books","array-contains",n),Yl("timestamp","desc")))).docs.map(t=>t.data());return await Promise.all(e.map(t=>Wt(t)))}async function ar(n){const e=localStorage.getItem(`book-${n}`),t=e?JSON.parse(e):null,r=(async()=>{var d,p,E;let[s,o]=await Promise.all([fetch(`https://openlibrary.org/isbn/${n}.json`),fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${n}`)]),[a,c]=await Promise.all([s.json(),o.json()]);c=(d=c.items)==null?void 0:d[0].volumeInfo;const l={title:a.title,authors:Array.from(new Set((c==null?void 0:c.authors)??[])),isbn:n,cover:((p=c==null?void 0:c.imageLinks)==null?void 0:p.thumbnail)??`https://covers.openlibrary.org/b/isbn/${n}-L.jpg`,pageCount:a.number_of_pages,genres:((E=a.subjects)==null?void 0:E.map(A=>A.name))??[],description:a.description??(c==null?void 0:c.description)??""};return localStorage.setItem(`book-${n}`,JSON.stringify(l)),console.log(`Updated book "${l.title}" in localStorage`),l})();return t||await r}async function DI(n,e=10){/^\d{13}$/.test(n)&&ar(n).then(a=>[a]);const t=new URLSearchParams({q:n}),s=await(await fetch(`https://openlibrary.org/search.json?${t}&fields=isbn,editions`)).json();console.log(s);let o=s.docs.filter(a=>a.isbn).slice(0,e);return await Promise.all(o.map(a=>ar(a.isbn.find(c=>/^\d{13}$/.test(c)))))}let{db:wn}=Hs();function VI(n){let e=[];return n.length<1&&e.push("Username can't be empty"),n.length>30&&e.push("Username can't be more than 30 characters"),/^[\w\-]*$/.test(n)||e.push("Username can only contain letters, numbers, underscores, and hyphens"),e}let Fh,NI=new Promise(n=>{Fh=n});async function OI(n){let t=(await _e(ge(se(wn,"posts"),he("poster","==",n.id),he("type","==","rating")))).docs.map(r=>r.data()).toSorted((r,s)=>s.rating-r.rating).map(r=>r.books[0]);return t.length>0?await ar(t[0]):null}async function LI(n){const e=[];return(await _e(ge(se(wn,"users"),he("following","array-contains",n.id)))).forEach(t=>e.push(t.data())),e}async function ZE(n){return(await _e(ge(se(wn,"users"),he("id","==",n)))).docs[0].data()}async function eT(n){return n}async function MI(n){return(await _e(ge(se(wn,"users"),he("username","==",n)))).docs[0].data()}async function xI(n){let e=(await _e(ge(se(wn,"posts"),he("poster","==",n.id),Yl("timestamp","desc")))).docs.map(r=>r.data());return await Promise.all(e.map(async r=>Wt(r)))}async function FI(n){return(await _e(ge(se(wn,"users")))).docs.map(t=>t.data()).filter(t=>t.username.toLowerCase().includes(n.toLowerCase())||t.displayName.includes(n.toLowerCase()))}let{db:vn}=Hs();const wr=WE();Vy(wr,Ch);let ws=mc(null);function Ce(){return ur(ws)}function UI(n){let e=[];return/\d/.test(n)||e.push("Must contain at least 1 number"),/[a-z]/.test(n)||e.push("Must contain at least 1 lowercase letter"),/[A-Z]/.test(n)||e.push("Must contain at least 1 uppercase letter"),/[\$_=\+\*!@#%\^&\|\\\/\(\)\[\]\{\}<>\?:;'"`~\-]/.test(n)||e.push("Must contain at least 1 symbol"),n.length<8&&e.push("Must be at least 8 characters"),e}async function BI(n){return(await _e(ge(se(vn,"users"),he("username","==",n)))).docs.length>0}async function $I(n){return(await _e(ge(se(vn,"users"),he("email","==",n)))).docs.length>0}Ly(wr,async n=>{n&&(pc(ws,ro(await eT((await _e(ge(se(vn,"users"),he("id","==",n.uid)))).docs[0].data()))),Fh(ur(ws)))});async function qI(){try{return await My(wr),null}catch(n){return console.log(n),n}}async function tT(n){let e={...ur(ws),...n};await Uo(ot(vn,"users",e.id),e)}async function jI(n,e){let t={...n,...e};await Uo(ot(vn,"users",t.id),t)}async function zI(n,e,t){try{let r=await ky(wr,n,e),s={displayName:t,email:n,username:t,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s",bio:"",pronouns:"",likes:[],id:r.user.uid,banner:"https://i0.wp.com/www.lifecaretechnology.com/wp-content/uploads/2018/12/default-banner.jpg?ssl=1",tags:[],links:[],currentBook:null,readingList:[],following:[],followers:[],views:[],shares:[]};return await Uo(ot(vn,"users",s.id),s),null}catch(r){return console.log(r),r}}async function GI(n,e){try{return await Dy(wr,n,e),null}catch(t){return console.log(t),t}}let{db:Oe}=Hs();async function WI(n){let e={timestamp:Date.now(),poster:Ce().id,authors:[],books:[],views:[],likes:[],shares:[],pictures:[],id:"",...n};console.log(e);let t=await V_(se(Oe,"posts"),e);return qs(t,{id:t.id}),Wt({...e,id:t.id})}async function HI(n){await D_(ot(Oe,"posts",n.id))}async function Wt(n){let e={...n,poster:await ZE(n.poster),books:await Promise.all(n.books.map(async t=>ar(t)))};return Ce()&&!Ce().views.includes(e.id)&&tT({views:[...Ce().views,e.id]}),e}async function KI(n){try{return Wt((await k_(ot(Oe,"posts",n))).data())}catch{return null}}async function QI(n){let e=(await _e(ge(se(Oe,"posts")))).docs.map(r=>r.data());return(await Promise.all(e.map(async r=>Wt(r)))).filter(r=>r.body.toLowerCase().includes(n.toLowerCase()))}async function JI(n,e){if(n.following.length===0)return[];let t=he("poster","in",n.following);t=R_(t,he("poster","==",n.id));let r=(await _e(ge(se(Oe,"posts"),t))).docs.map(o=>o.data());return await Promise.all(r.map(async o=>Wt(o)))}async function YI(n){return Promise.all((await _e(ge(se(Oe,"posts"),he("parent","==",n.id)))).docs.map(e=>Wt(e.data())))}async function XI(n){return(await _e(ge(se(Oe,"users"),he("likes","array-contains",n.id)))).docs.map(e=>e.data())}async function ZI(n){return(await _e(ge(se(Oe,"users"),he("shares","array-contains",n.id)))).docs.map(e=>e.data())}let nT=/(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;async function rT(n,e,t){const r=[];n.replaceAll(e,(o,...a)=>(r.push(t(o,...a)),o));const s=await Promise.all(r);return n.replaceAll(e,()=>s.shift())}async function ew(n){return n=n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#x27;"),n=await rT(n,/@(\d{13})/g,async(e,t)=>{const r=await ar(t);return`<a style="text-decoration: none;" href="/book/${t}"><i>${r.title}</i></a>`}),n.replaceAll(/@(\w+)/g,(e,t)=>`<a style="text-decoration: none;" href="/profile/${t}">${e}</a>`).replaceAll(/\*\*([^\*]+)\*\*/g,(e,t)=>`<b>${t}</b>`).replaceAll(/\*([^\*]+)\*/g,(e,t)=>`<i>${t}</i>`).replaceAll(/`([^\`]+)`/g,(e,t)=>`<code>${t}</code>`).replaceAll(/~~([^~]+)~~/g,(e,t)=>`<s>${t}</s>`).replaceAll(nT,e=>`<a target="_blank" rel="noopener noreferrer" href="${e}">${e}</a>`).replaceAll(/\\\*/g,"*").replaceAll(/\\`/g,"`").replaceAll("`","&#x60;")}async function tw(n){let e=(await _e(ge(se(Oe,"users"),he("views","array-contains",n.id)))).docs,t=e.length;return(!Ce()||!e.map(r=>r.id).includes(Ce().id))&&(t+=1),t}async function nw(n){await qs(ot(se(Oe,"users"),Ce().id),{likes:[...new Set([...Ce().likes,n.id])]})}async function rw(n){await qs(ot(se(Oe,"users"),Ce().id),{shares:[...new Set([...Ce().shares,n.id])]})}async function sw(n){await qs(ot(se(Oe,"users"),Ce().id),{likes:Ce().likes.filter(e=>e!==n.id)})}async function iw(n){return Ce().likes.includes(n.id)}async function ow(n){return Ce().shares.includes(n.id)}async function aw(n){return(await _e(ge(se(Oe,"posts"),he("parent","==",n.id),he("poster","==",Ce().id)))).docs.length>0}const sT="Catppuccin Mocha",iT="catppuccin-mocha",oT="#1e1e2e",aT="#181825",uT="#11111b",cT="#cdd6f4",lT="#bac2de",hT="#7f84ac",dT="#585b80",fT="#313244",pT="#b4befe",mT="#89b4fa",to={name:sT,id:iT,background:oT,backgroundDim:aT,backgroundDark:uT,textBright:cT,text:lT,textDull:hT,textDim:dT,textDark:fT,accent:pT,accent2:mT},gT="Catppuccin Latte",_T="catppuccin-latte",yT="#eff1f5",ET="#e6e9ef",TT="#dce0e8",IT="#2C2F49",wT="#4c4f69",vT="#6c6f85",AT="#8c8fa1",RT="#ccd0da",bT="#7287fd",PT="#1e66f5",ST={name:gT,id:_T,background:yT,backgroundDim:ET,backgroundDark:TT,textBright:IT,text:wT,textDull:vT,textDim:AT,textDark:RT,accent:bT,accent2:PT},CT="Midnight",kT="midnight",DT="#111133",VT="#05050F",NT="#000000",OT="#ccccee",LT="#bac2de",MT="#7f849c",xT="#585b70",FT="#111122",UT="#b4befe",BT="#89b4fa",$T={name:CT,id:kT,background:DT,backgroundDim:VT,backgroundDark:NT,textBright:OT,text:LT,textDull:MT,textDim:xT,textDark:FT,accent:UT,accent2:BT},qT="Void",jT="void",zT="#000000",GT="#030303",WT="#090909",HT="#FFFFFF",KT="#CCCCCC",QT="#AAAAAA",JT="#555555",YT="#222222",XT="#FFFFFF",ZT="#FFFFFF",eI={name:qT,id:jT,background:zT,backgroundDim:GT,backgroundDark:WT,textBright:HT,text:KT,textDull:QT,textDim:JT,textDark:YT,accent:XT,accent2:ZT},tI="Cotton Candy",nI="cotton-candy",rI="#FFCCEE",sI="#CCDDFF",iI="#FFFFFF",oI="#000000",aI="#000000CC",uI="#00000099",cI="#00000055",lI="#00000028",hI="#222233",dI="#111122",fI={name:tI,id:nI,background:rI,backgroundDim:sI,backgroundDark:iI,textBright:oI,text:aI,textDull:uI,textDim:cI,textDark:lI,accent:hI,accent2:dI},pI=[ST,to,fI,$T,eI];let Uh=mc(ro((()=>{let n=localStorage.getItem("theme");return n?pI.find(e=>e.id===n)??to:to})()));function vs(){return ur(Uh)}function uw(n){pc(Uh,ro(n)),localStorage.setItem("theme",n.id)}let mI=Rd(()=>`linear-gradient(to bottom right, ${vs().accent}, ${vs().accent2})`);function cw(){return ur(mI)}var gI=Fd('<div class="svelte-1q9qxfr"></div>');function lw(n,e){bd(e,!1),Ud();var t=gI();Pd(r=>jd(t,"background-image",r),[()=>`linear-gradient(${vs().background}, ${vs().backgroundDim})`],Cd),xd(n,t),Sd()}export{ar as A,lw as B,kI as C,KI as D,YI as E,WI as F,ew as G,OI as H,xI as I,jI as J,qI as K,tw as L,XI as M,ZI as N,iw as O,ow as P,aw as Q,nw as R,sw as S,rw as T,HI as U,bI as a,jd as b,cw as c,NI as d,BI as e,tT as f,VI as g,RI as h,pI as i,uw as j,$I as k,GI as l,zI as m,MI as n,ZE as o,UI as p,LI as q,AI as r,Ci as s,vs as t,Ce as u,QI as v,DI as w,FI as x,Hs as y,JI as z};
