import{r as i}from"./index.DhYZZe0J.js";import{s as f}from"./index.95d291e9.sTGqqvEv.js";var a={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=i,m=Symbol.for("react.element"),_=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,t){var o,s={},l=null,c=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)v.call(e,o)&&!y.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:m,type:r,key:l,ref:c,props:s,_owner:x.current}}n.Fragment=_;n.jsx=u;n.jsxs=u;a.exports=n;var p=a.exports;const E=()=>{const[r,e]=i.useState(!1),t=()=>{window.pageYOffset>300?(e(!0),console.log("Que hace pibe scroleando")):e(!1)},o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return i.useEffect(()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}),[]),p.jsx("div",{className:f.scrollToTop,children:r&&p.jsx("button",{onClick:o,className:f.button,children:"↑"})})};export{E as default};
