/*! For license information please see 592.8ca55b50.chunk.js.LICENSE.txt */
(self.webpackChunkchavruta_app=self.webpackChunkchavruta_app||[]).push([[592],{2176:t=>{"use strict";t.exports=function(t,e,n,r,o,a,i,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,s],u=0;(c=new Error(e.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},4934:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n(2791).createContext({})},8324:(t,e,n)=>{"use strict";n.d(e,{Z:()=>y});var r=n(1418),o=n.n(r),a=n(2791),i=(n(2391),n(2007)),s=n.n(i),c=n(184);const l={type:s().string,tooltip:s().bool,as:s().elementType},u=a.forwardRef(((t,e)=>{let{as:n="div",className:r,type:a="valid",tooltip:i=!1,...s}=t;return(0,c.jsx)(n,{...s,ref:e,className:o()(r,"".concat(a,"-").concat(i?"tooltip":"feedback"))})}));u.displayName="Feedback",u.propTypes=l;const d=u;var f=n(4934),p=n(162);const v=a.forwardRef(((t,e)=>{let{bsPrefix:n,type:r,size:i,htmlSize:s,id:l,className:u,isValid:d=!1,isInvalid:v=!1,plaintext:y,readOnly:b,as:x="input",...m}=t;const{controlId:h}=(0,a.useContext)(f.Z);return n=(0,p.vE)(n,"form-control"),(0,c.jsx)(x,{...m,type:r,size:s,ref:e,readOnly:b,id:l||h,className:o()(u,y?"".concat(n,"-plaintext"):n,i&&"".concat(n,"-").concat(i),"color"===r&&"".concat(n,"-color"),d&&"is-valid",v&&"is-invalid")})}));v.displayName="FormControl";const y=Object.assign(v,{Feedback:d})},7426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>b});var r=n(1418),o=n.n(r),a=n(2791),i=n(162),s=n(4934),c=n(184);const l=a.forwardRef(((t,e)=>{let{id:n,bsPrefix:r,className:l,type:u="checkbox",isValid:d=!1,isInvalid:f=!1,as:p="input",...v}=t;const{controlId:y}=(0,a.useContext)(s.Z);return r=(0,i.vE)(r,"form-check-input"),(0,c.jsx)(p,{...v,ref:e,type:u,id:n||y,className:o()(l,r,d&&"is-valid",f&&"is-invalid")})}));l.displayName="FormCheckInput";const u=l,d=a.createContext(null);d.displayName="InputGroupContext";const f=d,p=a.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:a="span",...s}=t;return r=(0,i.vE)(r,"input-group-text"),(0,c.jsx)(a,{ref:e,className:o()(n,r),...s})}));p.displayName="InputGroupText";const v=p,y=a.forwardRef(((t,e)=>{let{bsPrefix:n,size:r,hasValidation:s,className:l,as:u="div",...d}=t;n=(0,i.vE)(n,"input-group");const p=(0,a.useMemo)((()=>({})),[]);return(0,c.jsx)(f.Provider,{value:p,children:(0,c.jsx)(u,{ref:e,...d,className:o()(l,n,r&&"".concat(n,"-").concat(r),s&&"has-validation")})})}));y.displayName="InputGroup";const b=Object.assign(y,{Text:v,Radio:t=>(0,c.jsx)(v,{children:(0,c.jsx)(u,{type:"radio",...t})}),Checkbox:t=>(0,c.jsx)(v,{children:(0,c.jsx)(u,{type:"checkbox",...t})})})},8575:(t,e,n)=>{"use strict";n.d(e,{Z:()=>q});var r=n(1418),o=n.n(r),a=n(2791),i=(n(2391),n(7462)),s=n(3366);n(2176);function c(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function l(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}function u(t,e){return Object.keys(e).reduce((function(n,r){var o,u=n,d=u[c(r)],f=u[r],p=(0,s.Z)(u,[c(r),r].map(l)),v=e[r],y=function(t,e,n){var r=(0,a.useRef)(void 0!==t),o=(0,a.useState)(e),i=o[0],s=o[1],c=void 0!==t,l=r.current;return r.current=c,!c&&l&&i!==e&&s(e),[c?t:i,(0,a.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),s(t)}),[n])]}(f,d,t[v]),b=y[0],x=y[1];return(0,i.Z)({},p,((o={})[r]=b,o[v]=x,o))}),t)}function d(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function f(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function p(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}d.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0;var v=Function.prototype.bind.call(Function.prototype.call,[].slice);const y=t=>t&&"function"!==typeof t?e=>{t.current=e}:t;const b=function(t,e){return(0,a.useMemo)((()=>function(t,e){const n=y(t),r=y(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])},x=a.createContext(null);x.displayName="NavContext";const m=x,h=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=t?String(t):e||null},g=a.createContext(null),j=a.createContext(null),C="data-rr-ui-";function k(t){return"".concat(C).concat(t)}const N=function(t){const e=(0,a.useRef)(t);return(0,a.useEffect)((()=>{e.current=t}),[t]),e};function w(t){const e=N(t);return(0,a.useCallback)((function(){return e.current&&e.current(...arguments)}),[e])}var O=n(184);const I=["as","disabled"];const S=a.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,I);const[a,{tagName:i}]=function(t){let{tagName:e,disabled:n,href:r,target:o,rel:a,role:i,onClick:s,tabIndex:c=0,type:l}=t;e||(e=null!=r||null!=o||null!=a?"a":"button");const u={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},u];const d=t=>{(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==s||s(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:c,href:r,target:"a"===e?o:void 0,"aria-disabled":n||void 0,rel:"a"===e?a:void 0,onClick:d,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),d(t))}},u]}(Object.assign({tagName:n,disabled:r},o));return(0,O.jsx)(i,Object.assign({},o,a,{ref:e}))}));S.displayName="Button";const P=S,R=["as","active","eventKey"];function E(t){let{key:e,onClick:n,active:r,id:o,role:i,disabled:s}=t;const c=(0,a.useContext)(g),l=(0,a.useContext)(m),u=(0,a.useContext)(j);let d=r;const f={role:i};if(l){i||"tablist"!==l.role||(f.role="tab");const t=l.getControllerId(null!=e?e:null),n=l.getControlledId(null!=e?e:null);f[k("event-key")]=e,f.id=t||o,d=null==r&&null!=e?l.activeKey===e:r,!d&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=d,d||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=w((t=>{s||(null==n||n(t),null!=e&&c&&!t.isPropagationStopped()&&c(e,t))})),[f,{isActive:d}]}const D=a.forwardRef(((t,e)=>{let{as:n=P,active:r,eventKey:o}=t,a=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,R);const[i,s]=E(Object.assign({key:h(o,a.href),active:r},a));return i[k("active")]=s.isActive,(0,O.jsx)(n,Object.assign({},a,i,{ref:e}))}));D.displayName="NavItem";const K=D,A=["as","onSelect","activeKey","role","onKeyDown"];const _=()=>{},Z=k("event-key"),F=a.forwardRef(((t,e)=>{let{as:n="div",onSelect:r,activeKey:o,role:i,onKeyDown:s}=t,c=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,A);const l=function(){const[,t]=(0,a.useReducer)((t=>!t),!1);return t}(),u=(0,a.useRef)(!1),d=(0,a.useContext)(g),f=(0,a.useContext)(j);let p,y;f&&(i=i||"tablist",o=f.activeKey,p=f.getControlledId,y=f.getControllerId);const x=(0,a.useRef)(null),C=t=>{const e=x.current;if(!e)return null;const n=(r=e,o="[".concat(Z,"]:not([aria-disabled=true])"),v(r.querySelectorAll(o)));var r,o;const a=e.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const i=n.indexOf(a);if(-1===i)return null;let s=i+t;return s>=n.length&&(s=0),s<0&&(s=n.length-1),n[s]},k=(t,e)=>{null!=t&&(null==r||r(t,e),null==d||d(t,e))};(0,a.useEffect)((()=>{if(x.current&&u.current){const t=x.current.querySelector("[".concat(Z,"][aria-selected=true]"));null==t||t.focus()}u.current=!1}));const N=b(e,x);return(0,O.jsx)(g.Provider,{value:k,children:(0,O.jsx)(m.Provider,{value:{role:i,activeKey:h(o),getControlledId:p||_,getControllerId:y||_},children:(0,O.jsx)(n,Object.assign({},c,{onKeyDown:t=>{if(null==s||s(t),!f)return;let e;switch(t.key){case"ArrowLeft":case"ArrowUp":e=C(-1);break;case"ArrowRight":case"ArrowDown":e=C(1);break;default:return}var n;e&&(t.preventDefault(),k(e.dataset[(n="EventKey","".concat("rrUi").concat(n))]||null,t),u.current=!0,l())},ref:N,role:i}))})})}));F.displayName="Nav";const z=Object.assign(F,{Item:K});var T=n(162);const G=a.forwardRef(((t,e)=>{let{bsPrefix:n,active:r,disabled:a,eventKey:i,className:s,variant:c,action:l,as:u,...d}=t;n=(0,T.vE)(n,"list-group-item");const[f,p]=E({key:h(i,d.href),active:r,...d}),v=w((t=>{if(a)return t.preventDefault(),void t.stopPropagation();f.onClick(t)}));a&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);const y=u||(l?d.href?"a":"button":"div");return(0,O.jsx)(y,{ref:e,...d,...f,onClick:v,className:o()(s,n,p.isActive&&"active",a&&"disabled",c&&"".concat(n,"-").concat(c),l&&"".concat(n,"-action"))})}));G.displayName="ListGroupItem";const U=G,V=a.forwardRef(((t,e)=>{const{className:n,bsPrefix:r,variant:a,horizontal:i,numbered:s,as:c="div",...l}=u(t,{activeKey:"onSelect"}),d=(0,T.vE)(r,"list-group");let f;return i&&(f=!0===i?"horizontal":"horizontal-".concat(i)),(0,O.jsx)(z,{ref:e,...l,as:c,className:o()(n,d,a&&"".concat(d,"-").concat(a),f&&"".concat(d,"-").concat(f),s&&"".concat(d,"-numbered"))})}));V.displayName="ListGroup";const q=Object.assign(V,{Item:U})},162:(t,e,n)=>{"use strict";n.d(e,{vE:()=>l});var r=n(2791);n(184);const o=["xxl","xl","lg","md","sm","xs"],a="xs",i=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:a}),{Consumer:s,Provider:c}=i;function l(t,e){const{prefixes:n}=(0,r.useContext)(i);return t||n[e]||e}},2391:t=>{"use strict";var e=function(){};t.exports=e},1418:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=i(t,a(n)))}return t}function a(t){if("string"===typeof t||"number"===typeof t)return t;if("object"!==typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=i(e,n));return e}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},7462:(t,e,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{Z:()=>r})},3366:(t,e,n)=>{"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:()=>r})}}]);
//# sourceMappingURL=592.8ca55b50.chunk.js.map