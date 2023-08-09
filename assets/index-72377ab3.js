function g0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gf={exports:{}},Us={},Kf={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),v0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),Pd=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=Pd&&e[Pd]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,Xf={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||qf}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=Yr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||qf}var nu=tu.prototype=new Qf;nu.constructor=tu;Yf(nu,Yr.prototype);nu.isPureReactComponent=!0;var Nd=Array.isArray,Jf=Object.prototype.hasOwnProperty,ru={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Jf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:no,type:e,key:o,ref:l,props:i,_owner:ru.current}}function N0(e,t){return{$$typeof:no,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===no}function T0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Td=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T0(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case no:case v0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Bl(l,0):r,Nd(i)?(n="",e!=null&&(n=e.replace(Td,"$&/")+"/"),zo(i,t,n,"",function(u){return u})):i!=null&&(iu(i)&&(i=N0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Td,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Nd(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Bl(o,a);l+=zo(o,t,n,c,i)}else if(c=P0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Bl(o,a++),l+=zo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function go(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Mo={transition:null},L0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:ru};G.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Yr;G.Fragment=y0;G.Profiler=b0;G.PureComponent=tu;G.StrictMode=w0;G.Suspense=C0;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Jf.call(t,c)&&!Zf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:no,type:e.type,key:i,ref:o,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S0,_context:e},e.Consumer=e};G.createElement=eh;G.createFactory=function(e){var t=eh.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:k0,render:e}};G.isValidElement=iu;G.lazy=function(e){return{$$typeof:_0,_payload:{_status:-1,_result:e},_init:I0}};G.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return We.current.useCallback(e,t)};G.useContext=function(e){return We.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return We.current.useDeferredValue(e)};G.useEffect=function(e,t){return We.current.useEffect(e,t)};G.useId=function(){return We.current.useId()};G.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return We.current.useMemo(e,t)};G.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};G.useRef=function(e){return We.current.useRef(e)};G.useState=function(e){return We.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return We.current.useTransition()};G.version="18.2.0";Kf.exports=G;var j=Kf.exports;const H=x0(j),A0=g0({__proto__:null,default:H},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=j,R0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,$0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)M0.call(t,r)&&!D0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R0,type:e,key:o,ref:l,props:i,_owner:$0.current}}Us.Fragment=z0;Us.jsx=th;Us.jsxs=th;Gf.exports=Us;var s=Gf.exports,Ma={},nh={exports:{}},ot={},rh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,A){var M=L.length;L.push(A);e:for(;0<M;){var $=M-1>>>1,D=L[$];if(0<i(D,A))L[$]=A,L[M]=D,M=$;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var A=L[0],M=L.pop();if(M!==A){L[0]=M;e:for(var $=0,D=L.length,ie=D>>>1;$<ie;){var me=2*($+1)-1,wt=L[me],Fe=me+1,Ge=L[Fe];if(0>i(wt,M))Fe<D&&0>i(Ge,wt)?(L[$]=Ge,L[Fe]=M,$=Fe):(L[$]=wt,L[me]=M,$=me);else if(Fe<D&&0>i(Ge,M))L[$]=Ge,L[Fe]=M,$=Fe;else break e}}return A}function i(L,A){var M=L.sortIndex-A.sortIndex;return M!==0?M:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],d=1,p=null,m=3,h=!1,y=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=L)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function w(L){if(v=!1,g(L),!y)if(n(c)!==null)y=!0,de(S);else{var A=n(u);A!==null&&ae(w,A.startTime-L)}}function S(L,A){y=!1,v&&(v=!1,x(N),N=-1),h=!0;var M=m;try{for(g(A),p=n(c);p!==null&&(!(p.expirationTime>A)||L&&!P());){var $=p.callback;if(typeof $=="function"){p.callback=null,m=p.priorityLevel;var D=$(p.expirationTime<=A);A=e.unstable_now(),typeof D=="function"?p.callback=D:p===n(c)&&r(c),g(A)}else r(c);p=n(c)}if(p!==null)var ie=!0;else{var me=n(u);me!==null&&ae(w,me.startTime-A),ie=!1}return ie}finally{p=null,m=M,h=!1}}var C=!1,k=null,N=-1,E=5,I=-1;function P(){return!(e.unstable_now()-I<E)}function O(){if(k!==null){var L=e.unstable_now();I=L;var A=!0;try{A=k(!0,L)}finally{A?R():(C=!1,k=null)}}else C=!1}var R;if(typeof f=="function")R=function(){f(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,X=W.port2;W.port1.onmessage=O,R=function(){X.postMessage(null)}}else R=function(){b(O,0)};function de(L){k=L,C||(C=!0,R())}function ae(L,A){N=b(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,de(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var M=m;m=A;try{return L()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var M=m;m=L;try{return A()}finally{m=M}},e.unstable_scheduleCallback=function(L,A,M){var $=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?$+M:$):M=$,L){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=M+D,L={id:d++,callback:A,priorityLevel:L,startTime:M,expirationTime:D,sortIndex:-1},M>$?(L.sortIndex=M,t(u,L),n(c)===null&&L===n(u)&&(v?(x(N),N=-1):v=!0,ae(w,M-$))):(L.sortIndex=D,t(c,L),y||h||(y=!0,de(S))),L},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(L){var A=m;return function(){var M=m;m=A;try{return L.apply(this,arguments)}finally{m=M}}}})(ih);rh.exports=ih;var F0=rh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=j,rt=F0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sh=new Set,Ii={};function nr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Ii[e]=t,e=0;e<t.length;e++)sh.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,B0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Id={},Ld={};function U0(e){return $a.call(Ld,e)?!0:$a.call(Id,e)?!1:B0.test(e)?Ld[e]=!0:(Id[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ou=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ou,su);Ae[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ou,su);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ou,su);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W0(t,n,i,r)&&(n=null),r||i===null?U0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),ur=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),ah=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),ch=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function ri(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Ul;function hi(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Hl=!1;function Wl(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function V0(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case ur:return"Portal";case Da:return"Profiler";case au:return"StrictMode";case Fa:return"Suspense";case Ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ah:return(e.displayName||"Context")+".Consumer";case lh:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:Ua(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Ua(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K0(e){var t=uh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){e._valueTracker||(e._valueTracker=K0(e))}function dh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ha(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ph(e,t){t=t.checked,t!=null&&lu(e,"checked",t,!1)}function Wa(e,t){ph(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,n):t.hasOwnProperty("defaultValue")&&Va(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Va(e,t,n){(t!=="number"||rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(mi(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function fh(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ka(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yo,mh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wi[t]=wi[e]})});function gh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wi.hasOwnProperty(e)&&wi[e]?(""+t).trim():t+"px"}function xh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Y0=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(Y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,kr=null,Cr=null;function $d(e){if(e=oo(e)){if(typeof Qa!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ks(t),Qa(e.stateNode,e.type,t))}}function vh(e){kr?Cr?Cr.push(e):Cr=[e]:kr=e}function yh(){if(kr){var e=kr,t=Cr;if(Cr=kr=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function wh(e,t){return e(t)}function bh(){}var Vl=!1;function Sh(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return wh(e,t,n)}finally{Vl=!1,(kr!==null||Cr!==null)&&(bh(),yh())}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ja=!1;if(Xt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Ja=!1}function X0(e,t,n,r,i,o,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var bi=!1,is=null,os=!1,Za=null,Q0={onError:function(e){bi=!0,is=e}};function J0(e,t,n,r,i,o,l,a,c){bi=!1,is=null,X0.apply(Q0,arguments)}function Z0(e,t,n,r,i,o,l,a,c){if(J0.apply(this,arguments),bi){if(bi){var u=is;bi=!1,is=null}else throw Error(T(198));os||(os=!0,Za=u)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(rr(e)!==e)throw Error(T(188))}function ex(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dd(i),e;if(o===r)return Dd(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function kh(e){return e=ex(e),e!==null?Ch(e):null}function Ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ch(e);if(t!==null)return t;e=e.sibling}return null}var Eh=rt.unstable_scheduleCallback,Fd=rt.unstable_cancelCallback,tx=rt.unstable_shouldYield,nx=rt.unstable_requestPaint,ve=rt.unstable_now,rx=rt.unstable_getCurrentPriorityLevel,pu=rt.unstable_ImmediatePriority,_h=rt.unstable_UserBlockingPriority,ss=rt.unstable_NormalPriority,ix=rt.unstable_LowPriority,Ph=rt.unstable_IdlePriority,Hs=null,Mt=null;function ox(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Hs,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:ax,sx=Math.log,lx=Math.LN2;function ax(e){return e>>>=0,e===0?32:31-(sx(e)/lx|0)|0}var wo=64,bo=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=gi(a):(o&=l,o!==0&&(r=gi(o)))}else l=n&~i,l!==0?r=gi(l):o!==0&&(r=gi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function cx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Et(o),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=cx(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function ec(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nh(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ro(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function dx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Th(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,hu,Lh,Ah,Oh,tc=!1,So=[],vn=null,yn=null,wn=null,Oi=new Map,Ri=new Map,un=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function oi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oo(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fx(e,t,n,r,i){switch(t){case"focusin":return vn=oi(vn,e,t,n,r,i),!0;case"dragenter":return yn=oi(yn,e,t,n,r,i),!0;case"mouseover":return wn=oi(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Oi.set(o,oi(Oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ri.set(o,oi(Ri.get(o)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=Bn(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=jh(n),t!==null){e.blockedOn=t,Oh(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return t=oo(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ud(e,t,n){$o(e)&&n.delete(t)}function hx(){tc=!1,vn!==null&&$o(vn)&&(vn=null),yn!==null&&$o(yn)&&(yn=null),wn!==null&&$o(wn)&&(wn=null),Oi.forEach(Ud),Ri.forEach(Ud)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,hx)))}function zi(e){function t(i){return si(i,e)}if(0<So.length){si(So[0],e);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&si(vn,e),yn!==null&&si(yn,e),wn!==null&&si(wn,e),Oi.forEach(t),Ri.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&un.shift()}var Er=tn.ReactCurrentBatchConfig,as=!0;function mx(e,t,n,r){var i=J,o=Er.transition;Er.transition=null;try{J=1,mu(e,t,n,r)}finally{J=i,Er.transition=o}}function gx(e,t,n,r){var i=J,o=Er.transition;Er.transition=null;try{J=4,mu(e,t,n,r)}finally{J=i,Er.transition=o}}function mu(e,t,n,r){if(as){var i=nc(e,t,n,r);if(i===null)na(e,t,r,cs,n),Bd(e,r);else if(fx(i,e,t,n,r))r.stopPropagation();else if(Bd(e,r),t&4&&-1<px.indexOf(e)){for(;i!==null;){var o=oo(i);if(o!==null&&Ih(o),o=nc(e,t,n,r),o===null&&na(e,t,r,cs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else na(e,t,r,null,n)}}var cs=null;function nc(e,t,n,r){if(cs=null,e=du(r),e=Bn(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function zh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rx()){case pu:return 1;case _h:return 4;case ss:case ix:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var fn=null,gu=null,Do=null;function Mh(){if(Do)return Do;var e,t=gu,n=t.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Hd(){return!1}function st(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jo:Hd,this.isPropagationStopped=Hd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=st(Xr),io=he({},Xr,{view:0,detail:0}),xx=st(io),Kl,ql,li,Ws=he({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Kl=e.screenX-li.screenX,ql=e.screenY-li.screenY):ql=Kl=0,li=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Wd=st(Ws),vx=he({},Ws,{dataTransfer:0}),yx=st(vx),wx=he({},io,{relatedTarget:0}),Yl=st(wx),bx=he({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=st(bx),jx=he({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kx=st(jx),Cx=he({},Xr,{data:0}),Vd=st(Cx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Px[e])?!!t[e]:!1}function vu(){return Nx}var Tx=he({},io,{key:function(e){if(e.key){var t=Ex[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=st(Tx),Lx=he({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=st(Lx),Ax=he({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Ox=st(Ax),Rx=he({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=st(Rx),Mx=he({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=st(Mx),Dx=[9,13,27,32],yu=Xt&&"CompositionEvent"in window,Si=null;Xt&&"documentMode"in document&&(Si=document.documentMode);var Fx=Xt&&"TextEvent"in window&&!Si,$h=Xt&&(!yu||Si&&8<Si&&11>=Si),Kd=String.fromCharCode(32),qd=!1;function Dh(e,t){switch(e){case"keyup":return Dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Bx(e,t){switch(e){case"compositionend":return Fh(t);case"keypress":return t.which!==32?null:(qd=!0,Kd);case"textInput":return e=t.data,e===Kd&&qd?null:e;default:return null}}function Ux(e,t){if(pr)return e==="compositionend"||!yu&&Dh(e,t)?(e=Mh(),Do=gu=fn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $h&&t.locale!=="ko"?null:t.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hx[e.type]:t==="textarea"}function Bh(e,t,n,r){vh(r),t=us(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ji=null,Mi=null;function Wx(e){Jh(e,0)}function Vs(e){var t=mr(e);if(dh(t))return e}function Vx(e,t){if(e==="change")return t}var Uh=!1;if(Xt){var Xl;if(Xt){var Ql="oninput"in document;if(!Ql){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),Ql=typeof Xd.oninput=="function"}Xl=Ql}else Xl=!1;Uh=Xl&&(!document.documentMode||9<document.documentMode)}function Qd(){ji&&(ji.detachEvent("onpropertychange",Hh),Mi=ji=null)}function Hh(e){if(e.propertyName==="value"&&Vs(Mi)){var t=[];Bh(t,Mi,e,du(e)),Sh(Wx,t)}}function Gx(e,t,n){e==="focusin"?(Qd(),ji=t,Mi=n,ji.attachEvent("onpropertychange",Hh)):e==="focusout"&&Qd()}function Kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(Mi)}function qx(e,t){if(e==="click")return Vs(t)}function Yx(e,t){if(e==="input"||e==="change")return Vs(t)}function Xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Xx;function $i(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$a.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,t){var n=Jd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function Wh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vh(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rs(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qx(e){var t=Vh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wh(n.ownerDocument.documentElement,n)){if(r!==null&&wu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zd(n,o);var l=Zd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jx=Xt&&"documentMode"in document&&11>=document.documentMode,fr=null,rc=null,ki=null,ic=!1;function ep(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ic||fr==null||fr!==rs(r)||(r=fr,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&$i(ki,r)||(ki=r,r=us(rc,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Jl={},Gh={};Xt&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Gs(e){if(Jl[e])return Jl[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gh)return Jl[e]=t[n];return e}var Kh=Gs("animationend"),qh=Gs("animationiteration"),Yh=Gs("animationstart"),Xh=Gs("transitionend"),Qh=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){Qh.set(e,t),nr(t,[e])}for(var Zl=0;Zl<tp.length;Zl++){var ea=tp[Zl],Zx=ea.toLowerCase(),ev=ea[0].toUpperCase()+ea.slice(1);Rn(Zx,"on"+ev)}Rn(Kh,"onAnimationEnd");Rn(qh,"onAnimationIteration");Rn(Yh,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Xh,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function np(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Z0(r,t,void 0,e),e.currentTarget=null}function Jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;np(i,a,u),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;np(i,a,u),o=c}}}if(os)throw e=Za,os=!1,Za=null,e}function oe(e,t){var n=t[cc];n===void 0&&(n=t[cc]=new Set);var r=e+"__bubble";n.has(r)||(Zh(t,e,2,!1),n.add(r))}function ta(e,t,n){var r=0;t&&(r|=4),Zh(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[Co]){e[Co]=!0,sh.forEach(function(n){n!=="selectionchange"&&(tv.has(n)||ta(n,!1,e),ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,ta("selectionchange",!1,t))}}function Zh(e,t,n,r){switch(zh(t)){case 1:var i=mx;break;case 4:i=gx;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function na(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Bn(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Sh(function(){var u=o,d=du(n),p=[];e:{var m=Qh.get(e);if(m!==void 0){var h=xu,y=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":h=Ix;break;case"focusin":y="focus",h=Yl;break;case"focusout":y="blur",h=Yl;break;case"beforeblur":case"afterblur":h=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ox;break;case Kh:case qh:case Yh:h=Sx;break;case Xh:h=zx;break;case"scroll":h=xx;break;case"wheel":h=$x;break;case"copy":case"cut":case"paste":h=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gd}var v=(t&4)!==0,b=!v&&e==="scroll",x=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,x!==null&&(w=Ai(f,x),w!=null&&v.push(Fi(f,w,g)))),b)break;f=f.return}0<v.length&&(m=new h(m,y,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&n!==Xa&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[Qt]))break e;if((h||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Bn(y):null,y!==null&&(b=rr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(v=Wd,w="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gd,w="onPointerLeave",x="onPointerEnter",f="pointer"),b=h==null?m:mr(h),g=y==null?m:mr(y),m=new v(w,f+"leave",h,n,d),m.target=b,m.relatedTarget=g,w=null,Bn(d)===u&&(v=new v(x,f+"enter",y,n,d),v.target=g,v.relatedTarget=b,w=v),b=w,h&&y)t:{for(v=h,x=y,f=0,g=v;g;g=lr(g))f++;for(g=0,w=x;w;w=lr(w))g++;for(;0<f-g;)v=lr(v),f--;for(;0<g-f;)x=lr(x),g--;for(;f--;){if(v===x||x!==null&&v===x.alternate)break t;v=lr(v),x=lr(x)}v=null}else v=null;h!==null&&rp(p,m,h,v,!1),y!==null&&b!==null&&rp(p,b,y,v,!0)}}e:{if(m=u?mr(u):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var S=Vx;else if(Yd(m))if(Uh)S=Yx;else{S=Kx;var C=Gx}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=qx);if(S&&(S=S(e,u))){Bh(p,S,n,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Va(m,"number",m.value)}switch(C=u?mr(u):window,e){case"focusin":(Yd(C)||C.contentEditable==="true")&&(fr=C,rc=u,ki=null);break;case"focusout":ki=rc=fr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,ep(p,n,d);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":ep(p,n,d)}var k;if(yu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else pr?Dh(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&($h&&n.locale!=="ko"&&(pr||N!=="onCompositionStart"?N==="onCompositionEnd"&&pr&&(k=Mh()):(fn=d,gu="value"in fn?fn.value:fn.textContent,pr=!0)),C=us(u,N),0<C.length&&(N=new Vd(N,e,null,n,d),p.push({event:N,listeners:C}),k?N.data=k:(k=Fh(n),k!==null&&(N.data=k)))),(k=Fx?Bx(e,n):Ux(e,n))&&(u=us(u,"onBeforeInput"),0<u.length&&(d=new Vd("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=k))}Jh(p,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ai(e,n),o!=null&&r.unshift(Fi(e,o,i)),o=Ai(e,t),o!=null&&r.push(Fi(e,o,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rp(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Ai(n,o),c!=null&&l.unshift(Fi(n,c,a))):i||(c=Ai(n,o),c!=null&&l.push(Fi(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var nv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(nv,`
`).replace(rv,"")}function Eo(e,t,n){if(t=ip(t),ip(e)!==t&&n)throw Error(T(425))}function ds(){}var oc=null,sc=null;function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(e){return op.resolve(null).then(e).catch(sv)}:ac;function sv(e){setTimeout(function(){throw e})}function ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Qr,Bi="__reactProps$"+Qr,Qt="__reactContainer$"+Qr,cc="__reactEvents$"+Qr,lv="__reactListeners$"+Qr,av="__reactHandles$"+Qr;function Bn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[Ot])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[Ot]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ks(e){return e[Bi]||null}var uc=[],gr=-1;function zn(e){return{current:e}}function le(e){0>gr||(e.current=uc[gr],uc[gr]=null,gr--)}function ne(e,t){gr++,uc[gr]=e.current,e.current=t}var Ln={},De=zn(Ln),Ye=zn(!1),qn=Ln;function Ar(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function ps(){le(Ye),le(De)}function lp(e,t,n){if(De.current!==Ln)throw Error(T(168));ne(De,t),ne(Ye,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,G0(e)||"Unknown",i));return he({},n,r)}function fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,qn=De.current,ne(De,e),ne(Ye,Ye.current),!0}function ap(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=em(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,le(Ye),le(De),ne(De,e)):le(Ye),ne(Ye,n)}var Vt=null,qs=!1,ia=!1;function tm(e){Vt===null?Vt=[e]:Vt.push(e)}function cv(e){qs=!0,tm(e)}function Mn(){if(!ia&&Vt!==null){ia=!0;var e=0,t=J;try{var n=Vt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,qs=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),Eh(pu,Mn),i}finally{J=t,ia=!1}}return null}var xr=[],vr=0,hs=null,ms=0,ct=[],ut=0,Yn=null,Gt=1,Kt="";function $n(e,t){xr[vr++]=ms,xr[vr++]=hs,hs=e,ms=t}function nm(e,t,n){ct[ut++]=Gt,ct[ut++]=Kt,ct[ut++]=Yn,Yn=e;var r=Gt;e=Kt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var o=32-Et(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Gt=1<<32-Et(t)+i|n<<i|r,Kt=o+e}else Gt=1<<o|n<<i|r,Kt=e}function bu(e){e.return!==null&&($n(e,1),nm(e,1,0))}function Su(e){for(;e===hs;)hs=xr[--vr],xr[vr]=null,ms=xr[--vr],xr[vr]=null;for(;e===Yn;)Yn=ct[--ut],ct[ut]=null,Kt=ct[--ut],ct[ut]=null,Gt=ct[--ut],ct[ut]=null}var nt=null,tt=null,ue=!1,kt=null;function rm(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function dc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pc(e){if(ue){var t=tt;if(t){var n=t;if(!cp(e,t)){if(dc(e))throw Error(T(418));t=bn(n.nextSibling);var r=nt;t&&cp(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,ue=!1,nt=e)}}else{if(dc(e))throw Error(T(418));e.flags=e.flags&-4097|2,ue=!1,nt=e}}}function up(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function _o(e){if(e!==nt)return!1;if(!ue)return up(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lc(e.type,e.memoizedProps)),t&&(t=tt)){if(dc(e))throw im(),Error(T(418));for(;t;)rm(e,t),t=bn(t.nextSibling)}if(up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?bn(e.stateNode.nextSibling):null;return!0}function im(){for(var e=tt;e;)e=bn(e.nextSibling)}function Or(){tt=nt=null,ue=!1}function ju(e){kt===null?kt=[e]:kt.push(e)}var uv=tn.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gs=zn(null),xs=null,yr=null,ku=null;function Cu(){ku=yr=xs=null}function Eu(e){var t=gs.current;le(gs),e._currentValue=t}function fc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){xs=e,ku=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(xs===null)throw Error(T(308));yr=e,xs.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Un=null;function _u(e){Un===null?Un=[e]:Un.push(e)}function om(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_u(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,_u(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}function dp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;l=0,d=u=c=null,a=o;do{var m=a.lane,h=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(m=t,h=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(h,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(h,p,m):y,m==null)break e;p=he({},p,m);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=p}}function pp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var lm=new oh.Component().refs;function hc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ys={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=kn(e),o=qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(_t(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=kn(e),o=qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(_t(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=kn(e),i=qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(_t(t,e,r,n),Bo(t,e,r))}};function fp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$i(n,r)||!$i(i,o):!0}function am(e,t,n){var r=!1,i=Ln,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=Xe(t)?qn:De.current,r=t.contextTypes,o=(r=r!=null)?Ar(e,i):Ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function mc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=lm,Pu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=Xe(t)?qn:De.current,i.context=Ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ys.enqueueReplaceState(i,i.state,null),vs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===lm&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function cm(e){function t(x,f){if(e){var g=x.deletions;g===null?(x.deletions=[f],x.flags|=16):g.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=Cn(x,f),x.index=0,x.sibling=null,x}function o(x,f,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<f?(x.flags|=2,f):g):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,f,g,w){return f===null||f.tag!==6?(f=da(g,x.mode,w),f.return=x,f):(f=i(f,g),f.return=x,f)}function c(x,f,g,w){var S=g.type;return S===dr?d(x,f,g.props.children,w,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&mp(S)===f.type)?(w=i(f,g.props),w.ref=ai(x,f,g),w.return=x,w):(w=Ko(g.type,g.key,g.props,null,x.mode,w),w.ref=ai(x,f,g),w.return=x,w)}function u(x,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=pa(g,x.mode,w),f.return=x,f):(f=i(f,g.children||[]),f.return=x,f)}function d(x,f,g,w,S){return f===null||f.tag!==7?(f=Gn(g,x.mode,w,S),f.return=x,f):(f=i(f,g),f.return=x,f)}function p(x,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=da(""+f,x.mode,g),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xo:return g=Ko(f.type,f.key,f.props,null,x.mode,g),g.ref=ai(x,null,f),g.return=x,g;case ur:return f=pa(f,x.mode,g),f.return=x,f;case an:var w=f._init;return p(x,w(f._payload),g)}if(mi(f)||ri(f))return f=Gn(f,x.mode,g,null),f.return=x,f;Po(x,f)}return null}function m(x,f,g,w){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(x,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:return g.key===S?c(x,f,g,w):null;case ur:return g.key===S?u(x,f,g,w):null;case an:return S=g._init,m(x,f,S(g._payload),w)}if(mi(g)||ri(g))return S!==null?null:d(x,f,g,w,null);Po(x,g)}return null}function h(x,f,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(g)||null,a(f,x,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xo:return x=x.get(w.key===null?g:w.key)||null,c(f,x,w,S);case ur:return x=x.get(w.key===null?g:w.key)||null,u(f,x,w,S);case an:var C=w._init;return h(x,f,g,C(w._payload),S)}if(mi(w)||ri(w))return x=x.get(g)||null,d(f,x,w,S,null);Po(f,w)}return null}function y(x,f,g,w){for(var S=null,C=null,k=f,N=f=0,E=null;k!==null&&N<g.length;N++){k.index>N?(E=k,k=null):E=k.sibling;var I=m(x,k,g[N],w);if(I===null){k===null&&(k=E);break}e&&k&&I.alternate===null&&t(x,k),f=o(I,f,N),C===null?S=I:C.sibling=I,C=I,k=E}if(N===g.length)return n(x,k),ue&&$n(x,N),S;if(k===null){for(;N<g.length;N++)k=p(x,g[N],w),k!==null&&(f=o(k,f,N),C===null?S=k:C.sibling=k,C=k);return ue&&$n(x,N),S}for(k=r(x,k);N<g.length;N++)E=h(k,x,N,g[N],w),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?N:E.key),f=o(E,f,N),C===null?S=E:C.sibling=E,C=E);return e&&k.forEach(function(P){return t(x,P)}),ue&&$n(x,N),S}function v(x,f,g,w){var S=ri(g);if(typeof S!="function")throw Error(T(150));if(g=S.call(g),g==null)throw Error(T(151));for(var C=S=null,k=f,N=f=0,E=null,I=g.next();k!==null&&!I.done;N++,I=g.next()){k.index>N?(E=k,k=null):E=k.sibling;var P=m(x,k,I.value,w);if(P===null){k===null&&(k=E);break}e&&k&&P.alternate===null&&t(x,k),f=o(P,f,N),C===null?S=P:C.sibling=P,C=P,k=E}if(I.done)return n(x,k),ue&&$n(x,N),S;if(k===null){for(;!I.done;N++,I=g.next())I=p(x,I.value,w),I!==null&&(f=o(I,f,N),C===null?S=I:C.sibling=I,C=I);return ue&&$n(x,N),S}for(k=r(x,k);!I.done;N++,I=g.next())I=h(k,x,N,I.value,w),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?N:I.key),f=o(I,f,N),C===null?S=I:C.sibling=I,C=I);return e&&k.forEach(function(O){return t(x,O)}),ue&&$n(x,N),S}function b(x,f,g,w){if(typeof g=="object"&&g!==null&&g.type===dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:e:{for(var S=g.key,C=f;C!==null;){if(C.key===S){if(S=g.type,S===dr){if(C.tag===7){n(x,C.sibling),f=i(C,g.props.children),f.return=x,x=f;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&mp(S)===C.type){n(x,C.sibling),f=i(C,g.props),f.ref=ai(x,C,g),f.return=x,x=f;break e}n(x,C);break}else t(x,C);C=C.sibling}g.type===dr?(f=Gn(g.props.children,x.mode,w,g.key),f.return=x,x=f):(w=Ko(g.type,g.key,g.props,null,x.mode,w),w.ref=ai(x,f,g),w.return=x,x=w)}return l(x);case ur:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(x,f.sibling),f=i(f,g.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=pa(g,x.mode,w),f.return=x,x=f}return l(x);case an:return C=g._init,b(x,f,C(g._payload),w)}if(mi(g))return y(x,f,g,w);if(ri(g))return v(x,f,g,w);Po(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(x,f.sibling),f=i(f,g),f.return=x,x=f):(n(x,f),f=da(g,x.mode,w),f.return=x,x=f),l(x)):n(x,f)}return b}var Rr=cm(!0),um=cm(!1),so={},$t=zn(so),Ui=zn(so),Hi=zn(so);function Hn(e){if(e===so)throw Error(T(174));return e}function Nu(e,t){switch(ne(Hi,t),ne(Ui,e),ne($t,so),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ka(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ka(t,e)}le($t),ne($t,t)}function zr(){le($t),le(Ui),le(Hi)}function dm(e){Hn(Hi.current);var t=Hn($t.current),n=Ka(t,e.type);t!==n&&(ne(Ui,e),ne($t,n))}function Tu(e){Ui.current===e&&(le($t),le(Ui))}var pe=zn(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oa=[];function Iu(){for(var e=0;e<oa.length;e++)oa[e]._workInProgressVersionPrimary=null;oa.length=0}var Uo=tn.ReactCurrentDispatcher,sa=tn.ReactCurrentBatchConfig,Xn=0,fe=null,Se=null,_e=null,ws=!1,Ci=!1,Wi=0,dv=0;function Oe(){throw Error(T(321))}function Lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Au(e,t,n,r,i,o){if(Xn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?mv:gv,e=n(r,i),Ci){o=0;do{if(Ci=!1,Wi=0,25<=o)throw Error(T(301));o+=1,_e=Se=null,t.updateQueue=null,Uo.current=xv,e=n(r,i)}while(Ci)}if(Uo.current=bs,t=Se!==null&&Se.next!==null,Xn=0,_e=Se=fe=null,ws=!1,t)throw Error(T(300));return e}function Ou(){var e=Wi!==0;return Wi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?fe.memoizedState=_e=e:_e=_e.next=e,_e}function mt(){if(Se===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=_e===null?fe.memoizedState:_e.next;if(t!==null)_e=t,Se=e;else{if(e===null)throw Error(T(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},_e===null?fe.memoizedState=_e=e:_e=_e.next=e}return _e}function Vi(e,t){return typeof t=="function"?t(e):t}function la(e){var t=mt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,c=null,u=o;do{var d=u.lane;if((Xn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,l=r):c=c.next=p,fe.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==o);c===null?l=r:c.next=a,Nt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aa(e){var t=mt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Nt(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pm(){}function fm(e,t){var n=fe,r=mt(),i=t(),o=!Nt(r.memoizedState,i);if(o&&(r.memoizedState=i,qe=!0),r=r.queue,Ru(gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Gi(9,mm.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(T(349));Xn&30||hm(n,t,i)}return i}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mm(e,t,n,r){t.value=n,t.getSnapshot=r,xm(t)&&vm(e)}function gm(e,t,n){return n(function(){xm(t)&&vm(e)})}function xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function vm(e){var t=Jt(e,1);t!==null&&_t(t,e,1,-1)}function gp(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t.queue=e,e=e.dispatch=hv.bind(null,fe,e),[t.memoizedState,e]}function Gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ym(){return mt().memoizedState}function Ho(e,t,n,r){var i=Lt();fe.flags|=e,i.memoizedState=Gi(1|t,n,void 0,r===void 0?null:r)}function Xs(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if(Se!==null){var l=Se.memoizedState;if(o=l.destroy,r!==null&&Lu(r,l.deps)){i.memoizedState=Gi(t,n,o,r);return}}fe.flags|=e,i.memoizedState=Gi(1|t,n,o,r)}function xp(e,t){return Ho(8390656,8,e,t)}function Ru(e,t){return Xs(2048,8,e,t)}function wm(e,t){return Xs(4,2,e,t)}function bm(e,t){return Xs(4,4,e,t)}function Sm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4,4,Sm.bind(null,t,e),n)}function zu(){}function km(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cm(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Em(e,t,n){return Xn&21?(Nt(n,t)||(n=Nh(),fe.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function pv(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=sa.transition;sa.transition={};try{e(!1),t()}finally{J=n,sa.transition=r}}function _m(){return mt().memoizedState}function fv(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pm(e))Nm(t,n);else if(n=om(e,t,n,r),n!==null){var i=He();_t(n,e,r,i),Tm(n,t,r)}}function hv(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pm(e))Nm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,l)){var c=t.interleaved;c===null?(i.next=i,_u(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=om(e,t,i,r),n!==null&&(i=He(),_t(n,e,r,i),Tm(n,t,r))}}function Pm(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Nm(e,t){Ci=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}var bs={readContext:ht,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},mv={readContext:ht,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:xp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Sm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fv.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:gp,useDebugValue:zu,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=gp(!1),t=e[0];return e=pv.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Lt();if(ue){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ne===null)throw Error(T(349));Xn&30||hm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xp(gm.bind(null,r,o,e),[e]),r.flags|=2048,Gi(9,mm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ne.identifierPrefix;if(ue){var n=Kt,r=Gt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gv={readContext:ht,useCallback:km,useContext:ht,useEffect:Ru,useImperativeHandle:jm,useInsertionEffect:wm,useLayoutEffect:bm,useMemo:Cm,useReducer:la,useRef:ym,useState:function(){return la(Vi)},useDebugValue:zu,useDeferredValue:function(e){var t=mt();return Em(t,Se.memoizedState,e)},useTransition:function(){var e=la(Vi)[0],t=mt().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:_m,unstable_isNewReconciler:!1},xv={readContext:ht,useCallback:km,useContext:ht,useEffect:Ru,useImperativeHandle:jm,useInsertionEffect:wm,useLayoutEffect:bm,useMemo:Cm,useReducer:aa,useRef:ym,useState:function(){return aa(Vi)},useDebugValue:zu,useDeferredValue:function(e){var t=mt();return Se===null?t.memoizedState=e:Em(t,Se.memoizedState,e)},useTransition:function(){var e=aa(Vi)[0],t=mt().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:_m,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=V0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){js||(js=!0,Ec=r),gc(e,t)},n}function Lm(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gc(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lv.bind(null,e,t,n),t.then(e,e))}function yp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var yv=tn.ReactCurrentOwner,qe=!1;function Be(e,t,n,r){t.child=e===null?um(t,null,n,r):Rr(t,e.child,n,r)}function bp(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=Au(e,t,n,r,o,i),n=Ou(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ue&&n&&bu(t),t.flags|=1,Be(e,t,r,i),t.child)}function Sp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Wu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Am(e,t,o,r,i)):(e=Ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(l,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Am(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($i(o,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return xc(e,t,n,r,i)}function Om(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(br,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(br,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(br,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(br,Ze),Ze|=r;return Be(e,t,i,n),t.child}function Rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xc(e,t,n,r,i){var o=Xe(n)?qn:De.current;return o=Ar(t,o),_r(t,i),n=Au(e,t,n,r,o,i),r=Ou(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ue&&r&&bu(t),t.flags|=1,Be(e,t,n,i),t.child)}function jp(e,t,n,r,i){if(Xe(n)){var o=!0;fs(t)}else o=!1;if(_r(t,i),t.stateNode===null)Wo(e,t),am(t,n,r),mc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=Xe(n)?qn:De.current,u=Ar(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&hp(t,l,r,u),cn=!1;var m=t.memoizedState;l.state=m,vs(t,r,l,i),c=t.memoizedState,a!==r||m!==c||Ye.current||cn?(typeof d=="function"&&(hc(t,n,d,r),c=t.memoizedState),(a=cn||fp(t,n,a,r,m,c,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,sm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:St(t.type,a),l.props=u,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=Xe(n)?qn:De.current,c=Ar(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==c)&&hp(t,l,r,c),cn=!1,m=t.memoizedState,l.state=m,vs(t,r,l,i);var y=t.memoizedState;a!==p||m!==y||Ye.current||cn?(typeof h=="function"&&(hc(t,n,h,r),y=t.memoizedState),(u=cn||fp(t,n,u,r,m,y,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return vc(e,t,n,r,o,i)}function vc(e,t,n,r,i,o){Rm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ap(t,n,!1),Zt(e,t,o);r=t.stateNode,yv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rr(t,e.child,null,o),t.child=Rr(t,null,a,o)):Be(e,t,a,o),t.memoizedState=r.state,i&&ap(t,n,!0),t.child}function zm(e){var t=e.stateNode;t.pendingContext?lp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lp(e,t.context,!1),Nu(e,t.containerInfo)}function kp(e,t,n,r,i){return Or(),ju(i),t.flags|=256,Be(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function wc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mm(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(pe,i&1),e===null)return pc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Zs(l,r,0,null),e=Gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wc(n),t.memoizedState=yc,e):Mu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wv(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Cn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Cn(a,o):(o=Gn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?wc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=yc,r}return o=e.child,e=o.sibling,r=Cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mu(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&ju(r),Rr(t,e.child,null,n),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wv(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ca(Error(T(422))),No(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Zs({mode:"visible",children:r.children},i,0,null),o=Gn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rr(t,e.child,null,l),t.child.memoizedState=wc(l),t.memoizedState=yc,o);if(!(t.mode&1))return No(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=ca(o,r,void 0),No(e,t,l,r)}if(a=(l&e.childLanes)!==0,qe||a){if(r=Ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jt(e,i),_t(r,e,i,-1))}return Hu(),r=ca(Error(T(421))),No(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Av.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=bn(i.nextSibling),nt=t,ue=!0,kt=null,e!==null&&(ct[ut++]=Gt,ct[ut++]=Kt,ct[ut++]=Yn,Gt=e.id,Kt=e.overflow,Yn=t),t=Mu(t,r.children),t.flags|=4096,t)}function Cp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fc(e.return,t,n)}function ua(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $m(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Be(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cp(e,n,t);else if(e.tag===19)Cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ua(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ua(t,!0,n,null,o);break;case"together":ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bv(e,t,n){switch(t.tag){case 3:zm(t),Or();break;case 5:dm(t);break;case 1:Xe(t.type)&&fs(t);break;case 4:Nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Mm(e,t,n):(ne(pe,pe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ne(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Om(e,t,n)}return Zt(e,t,n)}var Dm,bc,Fm,Bm;Dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};Fm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn($t.current);var o=null;switch(n){case"input":i=Ha(e,i),r=Ha(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=Ga(e,i),r=Ga(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}qa(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&oe("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sv(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&ps(),Re(t),null;case 3:return r=t.stateNode,zr(),le(Ye),le(De),Iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(Nc(kt),kt=null))),bc(e,t),Re(t),null;case 5:Tu(t);var i=Hn(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Fm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Re(t),null}if(e=Hn($t.current),_o(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<xi.length;i++)oe(xi[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Od(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":zd(r,o),oe("invalid",r)}qa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),i=["children",""+a]):Ii.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&oe("scroll",r)}switch(n){case"input":vo(r),Rd(r,o,!0);break;case"textarea":vo(r),Md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ds)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ot]=t,e[Bi]=r,Dm(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ya(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<xi.length;i++)oe(xi[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Od(e,r),i=Ha(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),oe("invalid",e);break;case"textarea":zd(e,r),i=Ga(e,r),oe("invalid",e);break;default:i=r}qa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?xh(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mh(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Li(e,c):typeof c=="number"&&Li(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ii.hasOwnProperty(o)?c!=null&&o==="onScroll"&&oe("scroll",e):c!=null&&lu(e,o,c,l))}switch(n){case"input":vo(e),Rd(e,r,!1);break;case"textarea":vo(e),Md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jr(e,!!r.multiple,o,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Bm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Hn(Hi.current),Hn($t.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Re(t),null;case 13:if(le(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&tt!==null&&t.mode&1&&!(t.flags&128))im(),Or(),t.flags|=98560,o=!1;else if(o=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ot]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else kt!==null&&(Nc(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?je===0&&(je=3):Hu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return zr(),bc(e,t),e===null&&Di(t.stateNode.containerInfo),Re(t),null;case 10:return Eu(t.type._context),Re(t),null;case 17:return Xe(t.type)&&ps(),Re(t),null;case 19:if(le(pe),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ci(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ys(e),l!==null){for(t.flags|=128,ci(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>$r&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=ys(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ue)return Re(t),null}else 2*ve()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=pe.current,ne(pe,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function jv(e,t){switch(Su(t),t.tag){case 1:return Xe(t.type)&&ps(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),le(Ye),le(De),Iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return zr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var To=!1,Me=!1,kv=typeof WeakSet=="function"?WeakSet:Set,z=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Sc(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Ep=!1;function Cv(e,t){if(oc=as,e=Vh(),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=l),m===o&&++d===r&&(c=l),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},as=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,b=y.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:St(t.type,v),b);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ge(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Ep,Ep=!1,y}function Ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sc(t,n,o)}i=i.next}while(i!==r)}}function Qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Um(e){var t=e.alternate;t!==null&&(e.alternate=null,Um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Bi],delete t[cc],delete t[lv],delete t[av])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hm(e){return e.tag===5||e.tag===3||e.tag===4}function _p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}var Ie=null,jt=!1;function on(e,t,n){for(n=n.child;n!==null;)Wm(e,t,n),n=n.sibling}function Wm(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Hs,n)}catch{}switch(n.tag){case 5:Me||wr(n,t);case 6:var r=Ie,i=jt;Ie=null,on(e,t,n),Ie=r,jt=i,Ie!==null&&(jt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(jt?(e=Ie,n=n.stateNode,e.nodeType===8?ra(e.parentNode,n):e.nodeType===1&&ra(e,n),zi(e)):ra(Ie,n.stateNode));break;case 4:r=Ie,i=jt,Ie=n.stateNode.containerInfo,jt=!0,on(e,t,n),Ie=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sc(n,t,l),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Me&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,t,a)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,on(e,t,n),Me=r):on(e,t,n);break;default:on(e,t,n)}}function Pp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kv),t.forEach(function(r){var i=Ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,jt=!1;break e;case 3:Ie=a.stateNode.containerInfo,jt=!0;break e;case 4:Ie=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(Ie===null)throw Error(T(160));Wm(o,l,i),Ie=null,jt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}function Vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),It(e),r&4){try{Ei(3,e,e.return),Qs(3,e)}catch(v){ge(e,e.return,v)}try{Ei(5,e,e.return)}catch(v){ge(e,e.return,v)}}break;case 1:bt(t,e),It(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(bt(t,e),It(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(v){ge(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ph(i,o),Ya(a,l);var u=Ya(a,o);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?xh(i,p):d==="dangerouslySetInnerHTML"?mh(i,p):d==="children"?Li(i,p):lu(i,d,p,u)}switch(a){case"input":Wa(i,o);break;case"textarea":fh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?jr(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?jr(i,!!o.multiple,o.defaultValue,!0):jr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(v){ge(e,e.return,v)}}break;case 6:if(bt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ge(e,e.return,v)}}break;case 3:if(bt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(v){ge(e,e.return,v)}break;case 4:bt(t,e),It(e);break;case 13:bt(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=ve())),r&4&&Pp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||d,bt(t,e),Me=u):bt(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(p=z=d;z!==null;){switch(m=z,h=m.child,m.tag){case 0:case 11:case 14:case 15:Ei(4,m,m.return);break;case 1:wr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){ge(r,n,v)}}break;case 5:wr(m,m.return);break;case 22:if(m.memoizedState!==null){Tp(p);continue}}h!==null?(h.return=m,z=h):Tp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=gh("display",l))}catch(v){ge(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){ge(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(t,e),It(e),r&4&&Pp(e);break;case 21:break;default:bt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var o=_p(e);Cc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=_p(e);kc(e,a,l);break;default:throw Error(T(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ev(e,t,n){z=e,Gm(e)}function Gm(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||To;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Me;a=To;var u=Me;if(To=l,(Me=c)&&!u)for(z=i;z!==null;)l=z,c=l.child,l.tag===22&&l.memoizedState!==null?Ip(i):c!==null?(c.return=l,z=c):Ip(i);for(;o!==null;)z=o,Gm(o),o=o.sibling;z=i,To=a,Me=u}Np(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Np(e)}}function Np(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Qs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pp(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Me||t.flags&512&&jc(t)}catch(m){ge(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Tp(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Ip(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qs(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ge(t,i,c)}}var o=t.return;try{jc(t)}catch(c){ge(t,o,c)}break;case 5:var l=t.return;try{jc(t)}catch(c){ge(t,l,c)}}}catch(c){ge(t,t.return,c)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var _v=Math.ceil,Ss=tn.ReactCurrentDispatcher,$u=tn.ReactCurrentOwner,pt=tn.ReactCurrentBatchConfig,Y=0,Ne=null,we=null,Le=0,Ze=0,br=zn(0),je=0,Ki=null,Qn=0,Js=0,Du=0,_i=null,Ke=null,Fu=0,$r=1/0,Ht=null,js=!1,Ec=null,jn=null,Io=!1,hn=null,ks=0,Pi=0,_c=null,Vo=-1,Go=0;function He(){return Y&6?ve():Vo!==-1?Vo:Vo=ve()}function kn(e){return e.mode&1?Y&2&&Le!==0?Le&-Le:uv.transition!==null?(Go===0&&(Go=Nh()),Go):(e=J,e!==0||(e=window.event,e=e===void 0?16:zh(e.type)),e):1}function _t(e,t,n,r){if(50<Pi)throw Pi=0,_c=null,Error(T(185));ro(e,n,r),(!(Y&2)||e!==Ne)&&(e===Ne&&(!(Y&2)&&(Js|=n),je===4&&dn(e,Le)),Qe(e,r),n===1&&Y===0&&!(t.mode&1)&&($r=ve()+500,qs&&Mn()))}function Qe(e,t){var n=e.callbackNode;ux(e,t);var r=ls(e,e===Ne?Le:0);if(r===0)n!==null&&Fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fd(n),t===1)e.tag===0?cv(Lp.bind(null,e)):tm(Lp.bind(null,e)),ov(function(){!(Y&6)&&Mn()}),n=null;else{switch(Th(r)){case 1:n=pu;break;case 4:n=_h;break;case 16:n=ss;break;case 536870912:n=Ph;break;default:n=ss}n=e1(n,Km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Km(e,t){if(Vo=-1,Go=0,Y&6)throw Error(T(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=ls(e,e===Ne?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var i=Y;Y|=2;var o=Ym();(Ne!==e||Le!==t)&&(Ht=null,$r=ve()+500,Vn(e,t));do try{Tv();break}catch(a){qm(e,a)}while(1);Cu(),Ss.current=o,Y=i,we!==null?t=0:(Ne=null,Le=0,t=je)}if(t!==0){if(t===2&&(i=ec(e),i!==0&&(r=i,t=Pc(e,i))),t===1)throw n=Ki,Vn(e,0),dn(e,r),Qe(e,ve()),n;if(t===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pv(i)&&(t=Cs(e,r),t===2&&(o=ec(e),o!==0&&(r=o,t=Pc(e,o))),t===1))throw n=Ki,Vn(e,0),dn(e,r),Qe(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Dn(e,Ke,Ht);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=Fu+500-ve(),10<t)){if(ls(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ac(Dn.bind(null,e,Ke,Ht),t);break}Dn(e,Ke,Ht);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Et(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_v(r/1960))-r,10<r){e.timeoutHandle=ac(Dn.bind(null,e,Ke,Ht),r);break}Dn(e,Ke,Ht);break;case 5:Dn(e,Ke,Ht);break;default:throw Error(T(329))}}}return Qe(e,ve()),e.callbackNode===n?Km.bind(null,e):null}function Pc(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Nc(t)),e}function Nc(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Pv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~Du,t&=~Js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function Lp(e){if(Y&6)throw Error(T(327));Pr();var t=ls(e,0);if(!(t&1))return Qe(e,ve()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=ec(e);r!==0&&(t=r,n=Pc(e,r))}if(n===1)throw n=Ki,Vn(e,0),dn(e,t),Qe(e,ve()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Ke,Ht),Qe(e,ve()),null}function Bu(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&($r=ve()+500,qs&&Mn())}}function Jn(e){hn!==null&&hn.tag===0&&!(Y&6)&&Pr();var t=Y;Y|=1;var n=pt.transition,r=J;try{if(pt.transition=null,J=1,e)return e()}finally{J=r,pt.transition=n,Y=t,!(Y&6)&&Mn()}}function Uu(){Ze=br.current,le(br)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iv(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ps();break;case 3:zr(),le(Ye),le(De),Iu();break;case 5:Tu(r);break;case 4:zr();break;case 13:le(pe);break;case 19:le(pe);break;case 10:Eu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(Ne=e,we=e=Cn(e.current,null),Le=Ze=t,je=0,Ki=null,Du=Js=Qn=0,Ke=_i=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Un=null}return e}function qm(e,t){do{var n=we;try{if(Cu(),Uo.current=bs,ws){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ws=!1}if(Xn=0,_e=Se=fe=null,Ci=!1,Wi=0,$u.current=null,n===null||n.return===null){je=1,Ki=t,we=null;break}e:{var o=e,l=n.return,a=n,c=t;if(t=Le,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=yp(l);if(h!==null){h.flags&=-257,wp(h,l,a,o,t),h.mode&1&&vp(o,u,t),t=h,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){vp(o,u,t),Hu();break e}c=Error(T(426))}}else if(ue&&a.mode&1){var b=yp(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),wp(b,l,a,o,t),ju(Mr(c,a));break e}}o=c=Mr(c,a),je!==4&&(je=2),_i===null?_i=[o]:_i.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Im(o,c,t);dp(o,x);break e;case 1:a=c;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jn===null||!jn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Lm(o,a,t);dp(o,w);break e}}o=o.return}while(o!==null)}Qm(n)}catch(S){t=S,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Ym(){var e=Ss.current;return Ss.current=bs,e===null?bs:e}function Hu(){(je===0||je===3||je===2)&&(je=4),Ne===null||!(Qn&268435455)&&!(Js&268435455)||dn(Ne,Le)}function Cs(e,t){var n=Y;Y|=2;var r=Ym();(Ne!==e||Le!==t)&&(Ht=null,Vn(e,t));do try{Nv();break}catch(i){qm(e,i)}while(1);if(Cu(),Y=n,Ss.current=r,we!==null)throw Error(T(261));return Ne=null,Le=0,je}function Nv(){for(;we!==null;)Xm(we)}function Tv(){for(;we!==null&&!tx();)Xm(we)}function Xm(e){var t=Zm(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Qm(e):we=t,$u.current=null}function Qm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jv(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,we=null;return}}else if(n=Sv(n,t,Ze),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);je===0&&(je=5)}function Dn(e,t,n){var r=J,i=pt.transition;try{pt.transition=null,J=1,Iv(e,t,n,r)}finally{pt.transition=i,J=r}return null}function Iv(e,t,n,r){do Pr();while(hn!==null);if(Y&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dx(e,o),e===Ne&&(we=Ne=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Io||(Io=!0,e1(ss,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var l=J;J=1;var a=Y;Y|=4,$u.current=null,Cv(e,n),Vm(n,e),Qx(sc),as=!!oc,sc=oc=null,e.current=n,Ev(n),nx(),Y=a,J=l,pt.transition=o}else e.current=n;if(Io&&(Io=!1,hn=e,ks=i),o=e.pendingLanes,o===0&&(jn=null),ox(n.stateNode),Qe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,e=Ec,Ec=null,e;return ks&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===_c?Pi++:(Pi=0,_c=e):Pi=0,Mn(),null}function Pr(){if(hn!==null){var e=Th(ks),t=pt.transition,n=J;try{if(pt.transition=null,J=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,ks=0,Y&6)throw Error(T(331));var i=Y;for(Y|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Ei(8,d,o)}var p=d.child;if(p!==null)p.return=d,z=p;else for(;z!==null;){d=z;var m=d.sibling,h=d.return;if(Um(d),d===u){z=null;break}if(m!==null){m.return=h,z=m;break}z=h}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ei(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,z=x;break e}z=o.return}}var f=e.current;for(z=f;z!==null;){l=z;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,z=g;else e:for(l=f;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qs(9,a)}}catch(S){ge(a,a.return,S)}if(a===l){z=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,z=w;break e}z=a.return}}if(Y=i,Mn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Hs,e)}catch{}r=!0}return r}finally{J=n,pt.transition=t}}return!1}function Ap(e,t,n){t=Mr(n,t),t=Im(e,t,1),e=Sn(e,t,1),t=He(),e!==null&&(ro(e,1,t),Qe(e,t))}function ge(e,t,n){if(e.tag===3)Ap(e,e,n);else for(;t!==null;){if(t.tag===3){Ap(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Mr(n,e),e=Lm(t,e,1),t=Sn(t,e,1),e=He(),t!==null&&(ro(t,1,e),Qe(t,e));break}}t=t.return}}function Lv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Le&n)===n&&(je===4||je===3&&(Le&130023424)===Le&&500>ve()-Fu?Vn(e,0):Du|=n),Qe(e,t)}function Jm(e,t){t===0&&(e.mode&1?(t=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):t=1);var n=He();e=Jt(e,t),e!==null&&(ro(e,t,n),Qe(e,n))}function Av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function Ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Jm(e,n)}var Zm;Zm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,bv(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ue&&t.flags&1048576&&nm(t,ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wo(e,t),e=t.pendingProps;var i=Ar(t,De.current);_r(t,n),i=Au(null,t,r,e,i,n);var o=Ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pu(t),i.updater=Ys,t.stateNode=i,i._reactInternals=t,mc(t,r,e,n),t=vc(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&bu(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zv(r),e=St(r,e),i){case 0:t=xc(null,t,r,e,n);break e;case 1:t=jp(null,t,r,e,n);break e;case 11:t=bp(null,t,r,e,n);break e;case 14:t=Sp(null,t,r,St(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),xc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),jp(e,t,r,i,n);case 3:e:{if(zm(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sm(e,t),vs(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mr(Error(T(423)),t),t=kp(e,t,r,n,i);break e}else if(r!==i){i=Mr(Error(T(424)),t),t=kp(e,t,r,n,i);break e}else for(tt=bn(t.stateNode.containerInfo.firstChild),nt=t,ue=!0,kt=null,n=um(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=Zt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return dm(t),e===null&&pc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,lc(r,i)?l=null:o!==null&&lc(r,o)&&(t.flags|=32),Rm(e,t),Be(e,t,l,n),t.child;case 6:return e===null&&pc(t),null;case 13:return Mm(e,t,n);case 4:return Nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),bp(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ne(gs,r._currentValue),r._currentValue=l,o!==null)if(Nt(o.value,l)){if(o.children===i.children&&!Ye.current){t=Zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=qt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fc(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),fc(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=ht(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),Sp(e,t,r,i,n);case 15:return Am(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Wo(e,t),t.tag=1,Xe(r)?(e=!0,fs(t)):e=!1,_r(t,n),am(t,r,i),mc(t,r,i,n),vc(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Om(e,t,n)}throw Error(T(156,t.tag))};function e1(e,t){return Eh(e,t)}function Rv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Rv(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zv(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===uu)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Wu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dr:return Gn(n.children,i,o,t);case au:l=8,i|=8;break;case Da:return e=dt(12,n,t,i|2),e.elementType=Da,e.lanes=o,e;case Fa:return e=dt(13,n,t,i),e.elementType=Fa,e.lanes=o,e;case Ba:return e=dt(19,n,t,i),e.elementType=Ba,e.lanes=o,e;case ch:return Zs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lh:l=10;break e;case ah:l=9;break e;case cu:l=11;break e;case uu:l=14;break e;case an:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=dt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Zs(e,t,n,r){return e=dt(22,e,r,t),e.elementType=ch,e.lanes=n,e.stateNode={isHidden:!1},e}function da(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function pa(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,o,l,a,c){return e=new Mv(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(o),e}function $v(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function t1(e){if(!e)return Ln;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Xe(n))return em(e,n,t)}return t}function n1(e,t,n,r,i,o,l,a,c){return e=Vu(n,r,!0,e,i,o,l,a,c),e.context=t1(null),n=e.current,r=He(),i=kn(n),o=qt(r,i),o.callback=t??null,Sn(n,o,i),e.current.lanes=i,ro(e,i,r),Qe(e,r),e}function el(e,t,n,r){var i=t.current,o=He(),l=kn(i);return n=t1(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,l),e!==null&&(_t(e,i,l,o),Bo(e,i,l)),l}function Es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){Op(e,t),(e=e.alternate)&&Op(e,t)}function Dv(){return null}var r1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}tl.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));el(e,t,null,null)};tl.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){el(null,e,null,null)}),t[Qt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Rh(e)}};function qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function Fv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Es(l);o.call(u)}}var l=n1(t,r,e,0,null,!1,!1,"",Rp);return e._reactRootContainer=l,e[Qt]=l.current,Di(e.nodeType===8?e.parentNode:e),Jn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Es(c);a.call(u)}}var c=Vu(e,0,!1,null,null,!1,!1,"",Rp);return e._reactRootContainer=c,e[Qt]=c.current,Di(e.nodeType===8?e.parentNode:e),Jn(function(){el(t,c,n,r)}),c}function rl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var c=Es(l);a.call(c)}}el(t,l,e,i)}else l=Fv(n,t,e,i,r);return Es(l)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(fu(t,n|1),Qe(t,ve()),!(Y&6)&&($r=ve()+500,Mn()))}break;case 13:Jn(function(){var r=Jt(e,1);if(r!==null){var i=He();_t(r,e,1,i)}}),Gu(e,1)}};hu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=He();_t(t,e,134217728,n)}Gu(e,134217728)}};Lh=function(e){if(e.tag===13){var t=kn(e),n=Jt(e,t);if(n!==null){var r=He();_t(n,e,t,r)}Gu(e,t)}};Ah=function(){return J};Oh=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Qa=function(e,t,n){switch(t){case"input":if(Wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ks(r);if(!i)throw Error(T(90));dh(r),Wa(r,i)}}}break;case"textarea":fh(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};wh=Bu;bh=Jn;var Bv={usingClientEntryPoint:!1,Events:[oo,mr,Ks,vh,yh,Bu]},ui={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Uv={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kh(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Hs=Lo.inject(Uv),Mt=Lo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(t))throw Error(T(200));return $v(e,t,null,n)};ot.createRoot=function(e,t){if(!qu(e))throw Error(T(299));var n=!1,r="",i=r1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,Di(e.nodeType===8?e.parentNode:e),new Ku(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=kh(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Jn(e)};ot.hydrate=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=r1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=n1(t,null,e,1,n??null,i,!1,o,l),e[Qt]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tl(t)};ot.render=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!nl(e))throw Error(T(40));return e._reactRootContainer?(Jn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};ot.unstable_batchedUpdates=Bu;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return rl(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function i1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i1)}catch(e){console.error(e)}}i1(),nh.exports=ot;var o1=nh.exports,zp=o1;Ma.createRoot=zp.createRoot,Ma.hydrateRoot=zp.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const Mp="popstate";function Hv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Tc("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_s(i)}return Vv(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wv(){return Math.random().toString(36).substr(2,8)}function $p(e,t){return{usr:e.state,key:e.key,idx:t}}function Tc(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||Wv()})}function _s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=mn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(qi({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){a=mn.Pop;let b=d(),x=b==null?null:b-u;u=b,c&&c({action:a,location:v.location,delta:x})}function m(b,x){a=mn.Push;let f=Tc(v.location,b,x);n&&n(f,b),u=d()+1;let g=$p(f,u),w=v.createHref(f);try{l.pushState(g,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&c&&c({action:a,location:v.location,delta:1})}function h(b,x){a=mn.Replace;let f=Tc(v.location,b,x);n&&n(f,b),u=d();let g=$p(f,u),w=v.createHref(f);l.replaceState(g,"",w),o&&c&&c({action:a,location:v.location,delta:0})}function y(b){let x=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof b=="string"?b:_s(b);return be(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let v={get action(){return a},get location(){return e(i,l)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Mp,p),c=b,()=>{i.removeEventListener(Mp,p),c=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let x=y(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:h,go(b){return l.go(b)}};return v}var Dp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dp||(Dp={}));function Gv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jr(t):t,i=Xu(r.pathname||"/",n);if(i==null)return null;let o=s1(e);Kv(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=ny(o[a],oy(i));return l}function s1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(be(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=En([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),s1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ey(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let c of l1(o.path))i(o,l,c)}),t}function l1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=l1(r.join("/")),a=[];return a.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ty(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qv=/^:\w+$/,Yv=3,Xv=2,Qv=1,Jv=10,Zv=-2,Fp=e=>e==="*";function ey(e,t){let n=e.split("/"),r=n.length;return n.some(Fp)&&(r+=Zv),t&&(r+=Xv),n.filter(i=>!Fp(i)).reduce((i,o)=>i+(qv.test(o)?Yv:o===""?Qv:Jv),r)}function ty(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ny(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],c=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=ry({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:En([i,d.pathname]),pathnameBase:cy(En([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=En([i,d.pathnameBase]))}return o}function ry(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";l=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=sy(a[p]||"",d),u},{}),pathname:o,pathnameBase:l,pattern:e}}function iy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function oy(e){try{return decodeURI(e)}catch(t){return Yu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sy(e,t){try{return decodeURIComponent(e)}catch(n){return Yu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ly(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jr(e):e;return{pathname:n?n.startsWith("/")?n:ay(n,t):t,search:uy(r),hash:dy(i)}}function ay(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function c1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jr(e):(i=qi({},e),be(!i.pathname||!i.pathname.includes("?"),fa("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),fa("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),fa("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let p=t.length-1;if(l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let c=ly(i,a),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const En=e=>e.join("/").replace(/\/\/+/g,"/"),cy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function py(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const u1=["post","put","patch","delete"];new Set(u1);const fy=["get",...u1];new Set(fy);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ps.apply(this,arguments)}const Qu=j.createContext(null),hy=j.createContext(null),Zr=j.createContext(null),il=j.createContext(null),nn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),d1=j.createContext(null);function my(e,t){let{relative:n}=t===void 0?{}:t;lo()||be(!1);let{basename:r,navigator:i}=j.useContext(Zr),{hash:o,pathname:l,search:a}=h1(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:En([r,l])),i.createHref({pathname:c,search:a,hash:o})}function lo(){return j.useContext(il)!=null}function ao(){return lo()||be(!1),j.useContext(il).location}function p1(e){j.useContext(Zr).static||j.useLayoutEffect(e)}function Je(){let{isDataRoute:e}=j.useContext(nn);return e?Ty():gy()}function gy(){lo()||be(!1);let e=j.useContext(Qu),{basename:t,navigator:n}=j.useContext(Zr),{matches:r}=j.useContext(nn),{pathname:i}=ao(),o=JSON.stringify(a1(r).map(c=>c.pathnameBase)),l=j.useRef(!1);return p1(()=>{l.current=!0}),j.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let d=c1(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:En([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const xy=j.createContext(null);function vy(e){let t=j.useContext(nn).outlet;return t&&j.createElement(xy.Provider,{value:e},t)}function f1(){let{matches:e}=j.useContext(nn),t=e[e.length-1];return t?t.params:{}}function h1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(nn),{pathname:i}=ao(),o=JSON.stringify(a1(r).map(l=>l.pathnameBase));return j.useMemo(()=>c1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function yy(e,t){return wy(e,t)}function wy(e,t,n){lo()||be(!1);let{navigator:r}=j.useContext(Zr),{matches:i}=j.useContext(nn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=ao(),u;if(t){var d;let v=typeof t=="string"?Jr(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||be(!1),u=v}else u=c;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",h=Gv(e,{pathname:m}),y=Cy(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:En([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:En([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?j.createElement(il.Provider,{value:{location:Ps({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mn.Pop}},y):y}function by(){let e=Ny(),t=py(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const Sy=j.createElement(by,null);class jy extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(nn.Provider,{value:this.props.routeContext},j.createElement(d1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ky(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Qu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(nn.Provider,{value:t},r)}function Cy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));a>=0||be(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,c,u)=>{let d=c.route.id?l==null?void 0:l[c.route.id]:null,p=null;n&&(p=c.route.errorElement||Sy);let m=t.concat(o.slice(0,u+1)),h=()=>{let y;return d?y=p:c.route.Component?y=j.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=a,j.createElement(ky,{match:c,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?j.createElement(jy,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Ic;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ic||(Ic={}));var Yi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Yi||(Yi={}));function Ey(e){let t=j.useContext(Qu);return t||be(!1),t}function _y(e){let t=j.useContext(hy);return t||be(!1),t}function Py(e){let t=j.useContext(nn);return t||be(!1),t}function m1(e){let t=Py(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function Ny(){var e;let t=j.useContext(d1),n=_y(Yi.UseRouteError),r=m1(Yi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Ty(){let{router:e}=Ey(Ic.UseNavigateStable),t=m1(Yi.UseNavigateStable),n=j.useRef(!1);return p1(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ps({fromRouteId:t},o)))},[e,t])}function Ju(e){return vy(e.context)}function xe(e){be(!1)}function Iy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mn.Pop,navigator:o,static:l=!1}=e;lo()&&be(!1);let a=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Jr(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:h="default"}=r,y=j.useMemo(()=>{let v=Xu(u,a);return v==null?null:{location:{pathname:v,search:d,hash:p,state:m,key:h},navigationType:i}},[a,u,d,p,m,h,i]);return y==null?null:j.createElement(Zr.Provider,{value:c},j.createElement(il.Provider,{children:n,value:y}))}function Ly(e){let{children:t,location:n}=e;return yy(Lc(t),n)}var Bp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Bp||(Bp={}));new Promise(()=>{});function Lc(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Lc(r.props.children,o));return}r.type!==xe&&be(!1),!r.props.index||!r.props.children||be(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Lc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ac(){return Ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ac.apply(this,arguments)}function Ay(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ry(e,t){return e.button===0&&(!t||t==="_self")&&!Oy(e)}const zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],My="startTransition",Up=A0[My];function $y(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=Hv({window:i,v5Compat:!0}));let l=o.current,[a,c]=j.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=j.useCallback(p=>{u&&Up?Up(()=>c(p)):c(p)},[c,u]);return j.useLayoutEffect(()=>l.listen(d),[l,d]),j.createElement(Iy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:c,to:u,preventScrollReset:d}=t,p=Ay(t,zy),{basename:m}=j.useContext(Zr),h,y=!1;if(typeof u=="string"&&Fy.test(u)&&(h=u,Dy))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=Xu(g.pathname,m);g.origin===f.origin&&w!=null?u=w+g.search+g.hash:y=!0}catch{}let v=my(u,{relative:i}),b=By(u,{replace:l,state:a,target:c,preventScrollReset:d,relative:i});function x(f){r&&r(f),f.defaultPrevented||b(f)}return j.createElement("a",Ac({},p,{href:h||v,onClick:y||o?r:x,ref:n,target:c}))});var Hp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Hp||(Hp={}));var Wp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function By(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=Je(),c=ao(),u=h1(e,{relative:l});return j.useCallback(d=>{if(Ry(d,n)){d.preventDefault();let p=r!==void 0?r:_s(c)===_s(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:l})}},[c,a,u,r,i,n,e,o,l])}var $e=function(){return $e=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},$e.apply(this,arguments)};function Dr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var se="-ms-",Ni="-moz-",Q="-webkit-",g1="comm",ol="rule",Zu="decl",Uy="@import",x1="@keyframes",Hy="@layer",Wy=Math.abs,ed=String.fromCharCode,Oc=Object.assign;function Vy(e,t){return Pe(e,0)^45?(((t<<2^Pe(e,0))<<2^Pe(e,1))<<2^Pe(e,2))<<2^Pe(e,3):0}function v1(e){return e.trim()}function Wt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function qo(e,t){return e.indexOf(t)}function Pe(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function y1(e){return e.length}function vi(e,t){return t.push(e),e}function Gy(e,t){return e.map(t).join("")}function Vp(e,t){return e.filter(function(n){return!Wt(n,t)})}var sl=1,Br=1,w1=0,gt=0,ye=0,ei="";function ll(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:sl,column:Br,length:l,return:"",siblings:a}}function ln(e,t){return Oc(ll("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ar(e){for(;e.root;)e=ln(e.root,{children:[e]});vi(e,e.siblings)}function Ky(){return ye}function qy(){return ye=gt>0?Pe(ei,--gt):0,Br--,ye===10&&(Br=1,sl--),ye}function Pt(){return ye=gt<w1?Pe(ei,gt++):0,Br++,ye===10&&(Br=1,sl++),ye}function Kn(){return Pe(ei,gt)}function Yo(){return gt}function al(e,t){return Fr(ei,e,t)}function Rc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yy(e){return sl=Br=1,w1=At(ei=e),gt=0,[]}function Xy(e){return ei="",e}function ha(e){return v1(al(gt-1,zc(e===91?e+2:e===40?e+1:e)))}function Qy(e){for(;(ye=Kn())&&ye<33;)Pt();return Rc(e)>2||Rc(ye)>3?"":" "}function Jy(e,t){for(;--t&&Pt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return al(e,Yo()+(t<6&&Kn()==32&&Pt()==32))}function zc(e){for(;Pt();)switch(ye){case e:return gt;case 34:case 39:e!==34&&e!==39&&zc(ye);break;case 40:e===41&&zc(e);break;case 92:Pt();break}return gt}function Zy(e,t){for(;Pt()&&e+ye!==47+10;)if(e+ye===42+42&&Kn()===47)break;return"/*"+al(t,gt-1)+"*"+ed(e===47?e:Pt())}function e2(e){for(;!Rc(Kn());)Pt();return al(e,gt)}function t2(e){return Xy(Xo("",null,null,null,[""],e=Yy(e),0,[0],e))}function Xo(e,t,n,r,i,o,l,a,c){for(var u=0,d=0,p=l,m=0,h=0,y=0,v=1,b=1,x=1,f=0,g="",w=i,S=o,C=r,k=g;b;)switch(y=f,f=Pt()){case 40:if(y!=108&&Pe(k,p-1)==58){qo(k+=U(ha(f),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:k+=ha(f);break;case 9:case 10:case 13:case 32:k+=Qy(y);break;case 92:k+=Jy(Yo()-1,7);continue;case 47:switch(Kn()){case 42:case 47:vi(n2(Zy(Pt(),Yo()),t,n,c),c);break;default:k+="/"}break;case 123*v:a[u++]=At(k)*x;case 125*v:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:x==-1&&(k=U(k,/\f/g,"")),h>0&&At(k)-p&&vi(h>32?Kp(k+";",r,n,p-1,c):Kp(U(k," ","")+";",r,n,p-2,c),c);break;case 59:k+=";";default:if(vi(C=Gp(k,t,n,u,d,i,a,g,w=[],S=[],p,o),o),f===123)if(d===0)Xo(k,t,C,C,w,o,p,a,S);else switch(m===99&&Pe(k,3)===110?100:m){case 100:case 108:case 109:case 115:Xo(e,C,C,r&&vi(Gp(e,C,C,0,0,i,a,g,i,w=[],p,S),S),i,S,p,a,r?w:S);break;default:Xo(k,C,C,C,[""],S,0,a,S)}}u=d=h=0,v=x=1,g=k="",p=l;break;case 58:p=1+At(k),h=y;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&qy()==125)continue}switch(k+=ed(f),f*v){case 38:x=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(At(k)-1)*x,x=1;break;case 64:Kn()===45&&(k+=ha(Pt())),m=Kn(),d=p=At(g=k+=e2(Yo())),f++;break;case 45:y===45&&At(k)==2&&(v=0)}}return o}function Gp(e,t,n,r,i,o,l,a,c,u,d,p){for(var m=i-1,h=i===0?o:[""],y=y1(h),v=0,b=0,x=0;v<r;++v)for(var f=0,g=Fr(e,m+1,m=Wy(b=l[v])),w=e;f<y;++f)(w=v1(b>0?h[f]+" "+g:U(g,/&\f/g,h[f])))&&(c[x++]=w);return ll(e,t,n,i===0?ol:a,c,u,d,p)}function n2(e,t,n,r){return ll(e,t,n,g1,ed(Ky()),Fr(e,2,-2),0,r)}function Kp(e,t,n,r,i){return ll(e,t,n,Zu,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function b1(e,t,n){switch(Vy(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return Ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Ni+e+se+e+e;case 5936:switch(Pe(e,t+11)){case 114:return Q+e+se+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+se+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+se+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+se+e+e;case 6165:return Q+e+se+"flex-"+e+e;case 5187:return Q+e+U(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return Q+e+se+"flex-item-"+U(e,/flex-|-self/g,"")+(Wt(e,/flex-|baseline/)?"":se+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Q+e+se+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+se+U(e,"shrink","negative")+e;case 5292:return Q+e+se+U(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+U(e,"-grow","")+Q+e+se+U(e,"grow","positive")+e;case 4554:return Q+U(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Wt(e,/flex-|baseline/))return se+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return se+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Wt(r.props,/grid-\w+-end/)})?~qo(e+(n=n[t].value),"span")?e:se+U(e,"-start","")+e+se+"grid-row-span:"+(~qo(n,"span")?Wt(n,/\d+/):+Wt(n,/\d+/)-+Wt(e,/\d+/))+";":se+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Wt(r.props,/grid-\w+-start/)})?e:se+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(Pe(e,t+1)){case 109:if(Pe(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Ni+(Pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qo(e,"stretch")?b1(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,c,u){return se+i+":"+o+u+(l?se+i+"-span:"+(a?c:+c-+o)+u:"")+e});case 4949:if(Pe(e,t+6)===121)return U(e,":",":"+Q)+e;break;case 6444:switch(Pe(e,Pe(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(Pe(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+se+"$2box$3")+e;case 100:return U(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Ns(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function r2(e,t,n,r){switch(e.type){case Hy:if(e.children.length)break;case Uy:case Zu:return e.return=e.return||e.value;case g1:return"";case x1:return e.return=e.value+"{"+Ns(e.children,r)+"}";case ol:if(!At(e.value=e.props.join(",")))return""}return At(n=Ns(e.children,r))?e.return=e.value+"{"+n+"}":""}function i2(e){var t=y1(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function o2(e){return function(t){t.root||(t=t.return)&&e(t)}}function s2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zu:e.return=b1(e.value,e.length,n);return;case x1:return Ns([ln(e,{value:U(e.value,"@","@"+Q)})],r);case ol:if(e.length)return Gy(n=e.props,function(i){switch(Wt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ar(ln(e,{props:[U(i,/:(read-\w+)/,":"+Ni+"$1")]})),ar(ln(e,{props:[i]})),Oc(e,{props:Vp(n,r)});break;case"::placeholder":ar(ln(e,{props:[U(i,/:(plac\w+)/,":"+Q+"input-$1")]})),ar(ln(e,{props:[U(i,/:(plac\w+)/,":"+Ni+"$1")]})),ar(ln(e,{props:[U(i,/:(plac\w+)/,se+"input-$1")]})),ar(ln(e,{props:[i]})),Oc(e,{props:Vp(n,r)});break}return""})}}var l2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ur=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",td=typeof window<"u"&&"HTMLElement"in window,a2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),c2={},cl=Object.freeze([]),Hr=Object.freeze({});function S1(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var j1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),u2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d2=/(^-|-$)/g;function qp(e){return e.replace(u2,"-").replace(d2,"")}var p2=/(a)(d)/gi,Yp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yp(t%52)+n;return(Yp(t%52)+n).replace(p2,"$1-$2")}var ma,Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},k1=function(e){return Sr(5381,e)};function nd(e){return Mc(k1(e)>>>0)}function f2(e){return e.displayName||e.name||"Component"}function ga(e){return typeof e=="string"&&!0}var C1=typeof Symbol=="function"&&Symbol.for,E1=C1?Symbol.for("react.memo"):60115,h2=C1?Symbol.for("react.forward_ref"):60112,m2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x2=((ma={})[h2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ma[E1]=_1,ma);function Xp(e){return("type"in(t=e)&&t.type.$$typeof)===E1?_1:"$$typeof"in e?x2[e.$$typeof]:m2;var t}var v2=Object.defineProperty,y2=Object.getOwnPropertyNames,Qp=Object.getOwnPropertySymbols,w2=Object.getOwnPropertyDescriptor,b2=Object.getPrototypeOf,Jp=Object.prototype;function P1(e,t,n){if(typeof t!="string"){if(Jp){var r=b2(t);r&&r!==Jp&&P1(e,r,n)}var i=y2(t);Qp&&(i=i.concat(Qp(t)));for(var o=Xp(e),l=Xp(t),a=0;a<i.length;++a){var c=i[a];if(!(c in g2||n&&n[c]||l&&c in l||o&&c in o)){var u=w2(t,c);try{v2(e,c,u)}catch{}}}}return e}function Wr(e){return typeof e=="function"}function rd(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ts(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $c(e,t,n){if(n===void 0&&(n=!1),!n&&!Xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$c(e[r],t[r]);else if(Xi(t))for(var r in t)e[r]=$c(e[r],t[r]);return e}function id(e,t){Object.defineProperty(e,"toString",{value:t})}function co(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var S2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw co(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Qo=new Map,Is=new Map,xa=1,Ao=function(e){if(Qo.has(e))return Qo.get(e);for(;Is.has(xa);)xa++;var t=xa++;return Qo.set(e,t),Is.set(t,e),t},j2=function(e,t){Qo.set(e,t),Is.set(t,e)},k2="style[".concat(Ur,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),C2=new RegExp("^".concat(Ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E2=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var c=a.match(C2);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(j2(d,u),E2(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function P2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Ur,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","6.0.3");var l=P2();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},N2=function(){function e(t){this.element=N1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw co(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),T2=function(){function e(t){this.element=N1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),I2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Zp=td,L2={isServer:!td,useCSSOMInjection:!a2},Ls=function(){function e(t,n,r){t===void 0&&(t=Hr),n===void 0&&(n={});var i=this;this.options=$e($e({},L2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&td&&Zp&&(Zp=!1,function(o){for(var l=document.querySelectorAll(k2),a=0,c=l.length;a<c;a++){var u=l[a];u&&u.getAttribute(Ur)!=="active"&&(_2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),id(this,function(){return function(o){for(var l=o.getTag(),a=l.length,c="",u=function(p){var m=function(x){return Is.get(x)}(p);if(m===void 0)return"continue";var h=o.names.get(m),y=l.getGroup(p);if(h===void 0||y.length===0)return"continue";var v="".concat(Ur,".g").concat(p,'[id="').concat(m,'"]'),b="";h!==void 0&&h.forEach(function(x){x.length>0&&(b+="".concat(x,","))}),c+="".concat(y).concat(v,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return c}(i)})}return e.registerId=function(t){return Ao(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new I2(i):r?new N2(i):new T2(i)}(this.options),new S2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ao(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ao(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ao(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),A2=/&/g,O2=/^\s*\/\/.*$/gm;function T1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=T1(n.children,t)),n})}function R2(e){var t,n,r,i=e===void 0?Hr:e,o=i.options,l=o===void 0?Hr:o,a=i.plugins,c=a===void 0?cl:a,u=function(m,h,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=c.slice();d.push(function(m){m.type===ol&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(A2,n).replace(r,u))}),l.prefix&&d.push(s2),d.push(r2);var p=function(m,h,y,v){h===void 0&&(h=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(O2,""),x=t2(y||h?"".concat(y," ").concat(h," { ").concat(b," }"):b);l.namespace&&(x=T1(x,l.namespace));var f=[];return Ns(x,i2(d.concat(o2(function(g){return f.push(g)})))),f};return p.hash=c.length?c.reduce(function(m,h){return h.name||co(15),Sr(m,h.name)},5381).toString():"",p}var z2=new Ls,Dc=R2(),I1=H.createContext({shouldForwardProp:void 0,styleSheet:z2,stylis:Dc});I1.Consumer;H.createContext(void 0);function Fc(){return j.useContext(I1)}var L1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Dc);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,id(this,function(){throw co(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Dc),this.name+t.hash},e}(),M2=function(e){return e>="A"&&e<="Z"};function ef(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;M2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var A1=function(e){return e==null||e===!1||e===""},O1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!A1(o)&&(Array.isArray(o)&&o.isCss||Wr(o)?r.push("".concat(ef(i),":"),o,";"):Xi(o)?r.push.apply(r,Dr(Dr(["".concat(i," {")],O1(o),!1),["}"],!1)):r.push("".concat(ef(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in l2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _n(e,t,n,r){if(A1(e))return[];if(rd(e))return[".".concat(e.styledComponentId)];if(Wr(e)){if(!Wr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return _n(i,t,n,r)}var o;return e instanceof L1?n?(e.inject(n,r),[e.getName(r)]):[e]:Xi(e)?O1(e):Array.isArray(e)?Array.prototype.concat.apply(cl,e.map(function(l){return _n(l,t,n,r)})):[e.toString()]}function R1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wr(n)&&!rd(n))return!1}return!0}var $2=k1("6.0.3"),D2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&R1(t),this.componentId=n,this.baseHash=Sr($2,n),this.baseStyle=r,Ls.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Wn(i,this.staticRulesId);else{var o=Ts(_n(this.rules,t,n,r)),l=Mc(Sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Wn(i,l),this.staticRulesId=l}else{for(var c=Sr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var m=Ts(_n(p,t,n,r));c=Sr(c,m),u+=m}}if(u){var h=Mc(c>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=Wn(i,h)}}return i},e}(),od=H.createContext(void 0);od.Consumer;var va={};function F2(e,t,n){var r=rd(e),i=e,o=!ga(e),l=t.attrs,a=l===void 0?cl:l,c=t.componentId,u=c===void 0?function(g,w){var S=typeof g!="string"?"sc":qp(g);va[S]=(va[S]||0)+1;var C="".concat(S,"-").concat(nd("6.0.3"+S+va[S]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):c,d=t.displayName;d===void 0&&function(g){return ga(g)?"styled.".concat(g):"Styled(".concat(f2(g),")")}(e);var p=t.displayName&&t.componentId?"".concat(qp(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(g,w){return y(g,w)&&v(g,w)}}else h=y}var b=new D2(n,p,r?i.componentStyle:void 0);function x(g,w){return function(S,C,k){var N=S.attrs,E=S.componentStyle,I=S.defaultProps,P=S.foldedComponentIds,O=S.styledComponentId,R=S.target,W=H.useContext(od),X=Fc(),de=S.shouldForwardProp||X.shouldForwardProp,ae=function(ie,me,wt){for(var Fe,Ge=$e($e({},me),{className:void 0,theme:wt}),ho=0;ho<ie.length;ho+=1){var sr=Wr(Fe=ie[ho])?Fe(Ge):Fe;for(var Tt in sr)Ge[Tt]=Tt==="className"?Wn(Ge[Tt],sr[Tt]):Tt==="style"?$e($e({},Ge[Tt]),sr[Tt]):sr[Tt]}return me.className&&(Ge.className=Wn(Ge.className,me.className)),Ge}(N,C,S1(C,W,I)||Hr),L=ae.as||R,A={};for(var M in ae)ae[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?A.as=ae.forwardedAs:de&&!de(M,L)||(A[M]=ae[M]));var $=function(ie,me){var wt=Fc(),Fe=ie.generateAndInjectStyles(me,wt.styleSheet,wt.stylis);return Fe}(E,ae),D=Wn(P,O);return $&&(D+=" "+$),ae.className&&(D+=" "+ae.className),A[ga(L)&&!j1.has(L)?"class":"className"]=D,A.ref=k,j.createElement(L,A)}(f,g,w)}var f=H.forwardRef(x);return f.attrs=m,f.componentStyle=b,f.shouldForwardProp=h,f.foldedComponentIds=r?Wn(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=p,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(w){for(var S=[],C=1;C<arguments.length;C++)S[C-1]=arguments[C];for(var k=0,N=S;k<N.length;k++)$c(w,N[k],!0);return w}({},i.defaultProps,g):g}}),id(f,function(){return".".concat(f.styledComponentId)}),o&&P1(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function tf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var nf=function(e){return Object.assign(e,{isCss:!0})};function ul(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Wr(e)||Xi(e)){var r=e;return nf(_n(tf(cl,Dr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?_n(i):nf(_n(tf(i,t)))}function Bc(e,t,n){if(n===void 0&&(n=Hr),!t)throw co(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,ul.apply(void 0,Dr([i],o,!1)))};return r.attrs=function(i){return Bc(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Bc(e,t,$e($e({},n),i))},r}var z1=function(e){return Bc(F2,e)},V=z1;j1.forEach(function(e){V[e]=z1(e)});var B2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=R1(t),Ls.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ts(_n(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ls.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function M1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ul.apply(void 0,Dr([e],t,!1)),i="sc-global-".concat(nd(JSON.stringify(r))),o=new B2(r,i),l=function(c){var u=Fc(),d=H.useContext(od),p=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(p,c,u.styleSheet,d,u.stylis),(H.useInsertionEffect||H.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(p,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,p,m){if(o.isStatic)o.renderStyles(c,c2,d,m);else{var h=$e($e({},u),{theme:S1(u,p,l.defaultProps)});o.renderStyles(c,h,d,m)}}return H.memo(l)}function U2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ts(ul.apply(void 0,Dr([e],t,!1))),i=nd(r);return new L1(i,r)}const ke={width:"1400px",margin:"auto",boxSizing:"border-box",position:"relative",paddingBottom:"100px"},rn={fontSize:"50px",textAlign:"center",fontWeight:700,borderBottom:"1px solid #999",height:"400px",paddingTop:"225px",color:"#fff",boxSizing:"border-box",textShadow:" 0px 0px 10px #000"},Ue="#e6002d",F="#001a58",xt={height:"55px",transform:"skew(-20deg)",width:"48%",border:"none",boxShadow:"3px 3px 3px rgba(0,0,0,0.4)",cursor:"pointer"},vt={display:"block",transform:"skew(20deg)",fontSize:"16px",fontWeight:600,color:"#fff",height:"55px",lineHeight:"55px"},Ft={backgroundPosition:"center 0",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%"},di=U2`
    0%{transform:translateX(0px)}
    50%{transform:translateX(10px)}
    100%{transform:translateX(0px)}
`,H2=V.div`
    p{
        a{
            color: #fff;
            border-bottom: 1px solid #fff;
            border-top: 1px solid #fff;
            padding: 10px 15px 10px 25px;
            font-size: 30px;
            i{
                padding: 20px;
            }
        }
    }
    .visual1{
        margin-top: 120px;
        ${Ft}
        background-image: url('./images/visual/visual5.jpg');
        .inner{
            ${ke}
            height: 900px;
            p{
                position: absolute;
                bottom: 130px;
                right: 0px;
                a{
                    background: rgba(0, 26, 88,0.7);
                    i{
                        animation: ${di} 0.7s infinite ease-in-out;
    
                    }
                }
            }
        }
    }

    .visual2{
        .inner{
            ${ke}
            padding: 100px 0px;
        }
        ul{
            display: flex;
            justify-content: space-between;
            li{
                width: 400px;
                height: 450px;
                position: relative;
                cursor: pointer;
                &:hover{
                    &::after{
                        content:"";
                        position: absolute;
                        top: -8px;left: -8px;
                        border: 8px solid ${F};
                        display: block;
                        width: 400px;
                        height: 450px;
                        z-index: -10;
                    }
                    p{
                        color: ${F};
                        font-weight: 700;
                        background: rgba(255,255,255,0.8);
                        strong{
                            color: ${F};
                        }
                    }
                }
                &:hover i{
                            animation: ${di} 0.7s infinite ease-in-out;
                        }
                a{
                    div{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        img{
                            height: 100%;
                        }
                    }
                    p{
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        color: #fff;
                        width: 400px;
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.8);
                        padding: 20px 0px;
                        text-align: center;
                        strong{
                            color:#fff;
                            padding-right: 15px;
                            font-size: 25px;
                        }
                        i{
                            font-size: 25px;
                        }
                    }
                }
            
                &:nth-child(1) img{
                    transform: translateX(-100px);
                }
                &:nth-child(2) img{
                    transform: translate(-500px, -125px) scale(1.2);
                }
                &:nth-child(3) img{
                        transform: translate(-700px, 0px);
                }
            }    
        }
    }
    
    .visual4{
        ${ke}
        margin-top: 100px;
        margin-bottom: 0px;
        h3{
            font-size: 40px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        p{
            text-align: center;
            a{
                color: #999;
                border-top:1px solid #999;
                border-bottom:1px solid #999;
                font-size: 18px;
                &:hover i{
                    animation: ${di} 0.7s infinite ease-in-out;
                }
            }
        }
        .newsList{
                display: flex;
                flex-wrap: wrap;
                li{
                    box-sizing: border-box;
                    width: 21%;
                    margin-right: 5%;
                    margin-bottom: 60px;
                    padding: 10px;
                    box-shadow: 1px 1px 5px #999;
                    &:hover{
                        img{
                            transform: scale(1.2);
                        }
                        
                    }
                    &:nth-child(4n){
                        margin-right: 0px;
                    }
                    .imgbox{
                        overflow: hidden;
                        img{
                            width: 100%;
                            transition: 0.5s;
                        }
                    }
                    h3{
                        margin: 10px 0px;
                        font-size: 18px;
                        font-weight: 700;
                        padding: 0px 10px;
                    }
                    .date_view{
                        padding: 0px 10px 10px;
                        
                        span{
                            color: #999;
                            display: inline-block;
                            margin-right: 20px;
                            position: relative;
                            &:first-child::after{
                                content: "";
                                display: block;
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: -10px;
                                width: 1px;
                                height: 16px;
                                background: #999;
                            }
                            i{
                                vertical-align: middle;
                                margin-right: 5px;
                                &.xi-eye-o{
                                    vertical-align: -10%;
                                    font-size: 18px;
                                }
                                &:hover{
                                    animation: ${di} 0.7s infinite ease-in-out;
                                }
                            }
                        }
                    }
                }
            }
    }
    .visual3{
        ${Ft}
        width: 100%;
        background-image: url('./images/visual/playstore.png');
        .inner{
            ${ke}
            height: 600px;
        }
        p{
            width: 500px;
            height: 300px;
            position: absolute;
            top: 180px;
            left: 50px;
            box-sizing: border-box;
            padding-left:350px;
            padding-top: 70px;
            cursor: pointer;
                i{
                    color: #fff;
                    font-size: 70px;
                    animation: ${di} 0.7s infinite ease-in-out;
                }
        }
    }
`,W2=V.div`
    width: 100%;
   
    .header{
        width: 100%;
        background: rgba(194, 0, 39,0.9);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 120px;
        z-index: 10;
        display: block;
        .inner{
            width: 1400px;
            margin: auto;
            position: relative;
            box-sizing: border-box;
            height: 100%;
            h1{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                img{
                    width: 180px;
                }
            }
            .top_menu{
                position: absolute;
                top: 25px;
                right: 0;
                a{
                    margin-left: 10px;
                    position:relative;
                    i{
                        color: #fff;
                    }
                    span{
                        background: #fff;
                        border-radius: 50%;
                        width: 15px;
                        height: 15px;
                        position: absolute;
                        top: -5px;
                        right: -8px;
                        text-align: center;
                        line-height: 15px;
                        font-size: 11px;
                        display: block;
                        color: ${F};
                    }
                }
            }
            .nav{
                position: absolute;
                top: 45px;
                left: 50%;
                transform: translateX(-50%);
                .gnb{
                    display: flex;
                    li{
                        margin-right: 50px;
                        &:last-child{
                            margin-right: 0px;
                        }
                        a{
                            color: #fff;
                            &.on{
                                &::after{
                                content: "";
                                position: absolute;
                                display: block;
                                width: 100%;
                                height: 1px;
                                background: #fff;
                                bottom: -6px;
                                left: 0;
                                transform: scaleX(1.1);
                            }
                        }
                        &::after{
                            content: "";
                            position: absolute;
                            display: block;
                            width: 100%;
                            height: 1px;
                            background: #fff;
                            bottom: -6px;
                            left: 0;
                            transform: scaleX(0);
                            transition: 0.3s;
                        }
                        &:hover::after{
                            transform: scaleX(1.1);
                            
                        }
                        }
                        position: relative;
                    }
                }
            }
        }
    }
`,V2=V.div`
background: #333;
padding: 50px 0px;
.inner{
    width: 1400px;
    margin:auto;
    box-sizing: border-box;
    position: relative;
    .links{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ddd;
        .terms{
           
            span{
                display: inline-block;
                margin-right: 40px;
                font-weight: 500;
                position: relative;
                a{
                    color: #fff;
                    
                }
                &::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -20px;
                    background: #ddd;
                    display: block;
                    width: 1px;
                    height: 16px;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .sns{
            i{
                margin-left: 15px;
                font-size: 20px;
                color: #fff;
            }
        }
    }
    .info{
        .company{
            font-weight: 500;
            margin-bottom: 10px;
        }
        p{
            color: #fff;
            span{
                display: inline-block;
                margin-right: 40px;
                position: relative;
                font-size: 15px;
                font-weight: 200;
                &::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -20px;
                    background: #999;
                    display: block;
                    width: 1px;
                    height: 16px;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .copyfright{
            margin-top: 20px;
        }
    }
    .logo{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        img{
            width: 150px;
        }
    }
}
`;var $1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rf=H.createContext&&H.createContext($1),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pn.apply(this,arguments)},G2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function D1(e){return e&&e.map(function(t,n){return H.createElement(t.tag,Pn({key:n},t.attr),D1(t.child))})}function Ee(e){return function(t){return H.createElement(K2,Pn({attr:Pn({},e.attr)},t),D1(e.child))}}function K2(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=G2(e,["attr","size","title"]),a=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),H.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&H.createElement("title",null,o),e.children)};return rf!==void 0?H.createElement(rf.Consumer,null,function(n){return t(n)}):t($1)}function F1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]})(e)}function B1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]})(e)}function uo(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function q2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]})(e)}function U1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]})(e)}function H1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]})(e)}function Y2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"}}]})(e)}function X2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"}}]})(e)}function W1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]})(e)}function Q2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]})(e)}function V1(e){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}function J2(e){return Ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function sd(e){return Ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}function Z2(e){return Ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"}}]})(e)}function ew(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}function tw(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"}}]})(e)}var G1={exports:{}},K1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=j;function nw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rw=typeof Object.is=="function"?Object.is:nw,iw=Vr.useState,ow=Vr.useEffect,sw=Vr.useLayoutEffect,lw=Vr.useDebugValue;function aw(e,t){var n=t(),r=iw({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return sw(function(){i.value=n,i.getSnapshot=t,ya(i)&&o({inst:i})},[e,n,t]),ow(function(){return ya(i)&&o({inst:i}),e(function(){ya(i)&&o({inst:i})})},[e]),lw(n),n}function ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rw(e,n)}catch{return!0}}function cw(e,t){return t()}var uw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cw:aw;K1.useSyncExternalStore=Vr.useSyncExternalStore!==void 0?Vr.useSyncExternalStore:uw;G1.exports=K1;var dw=G1.exports,q1={exports:{}},Y1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=j,pw=dw;function fw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hw=typeof Object.is=="function"?Object.is:fw,mw=pw.useSyncExternalStore,gw=dl.useRef,xw=dl.useEffect,vw=dl.useMemo,yw=dl.useDebugValue;Y1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=gw(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=vw(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&l.hasValue){var y=l.value;if(i(y,h))return p=y}return p=h}if(y=p,hw(d,h))return y;var v=r(h);return i!==void 0&&i(y,v)?y:(d=h,p=v)}var u=!1,d,p,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,i]);var a=mw(e,o[0],o[1]);return xw(function(){l.hasValue=!0,l.value=a},[a]),yw(a),a};q1.exports=Y1;var ww=q1.exports;function bw(e){e()}let X1=bw;const Sw=e=>X1=e,jw=()=>X1,of=Symbol.for(`react-redux-context-${j.version}`),sf=globalThis;function kw(){let e=sf[of];return e||(e=j.createContext(null),sf[of]=e),e}const An=new Proxy({},new Proxy({},{get(e,t){const n=kw();return(r,...i)=>Reflect[t](n,...i)}}));function ld(e=An){return function(){return j.useContext(e)}}const Q1=ld(),Cw=()=>{throw new Error("uSES not initialized!")};let J1=Cw;const Ew=e=>{J1=e},_w=(e,t)=>e===t;function Pw(e=An){const t=e===An?Q1:ld(e);return function(r,i={}){const{equalityFn:o=_w,stabilityCheck:l=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:u,getServerState:d,stabilityCheck:p,noopCheck:m}=t();j.useRef(!0);const h=j.useCallback({[r.name](v){return r(v)}}[r.name],[r,p,l]),y=J1(u.addNestedSub,c.getState,d||c.getState,h,o);return j.useDebugValue(y),y}}const re=Pw();var Z1={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=typeof Symbol=="function"&&Symbol.for,ad=Te?Symbol.for("react.element"):60103,cd=Te?Symbol.for("react.portal"):60106,pl=Te?Symbol.for("react.fragment"):60107,fl=Te?Symbol.for("react.strict_mode"):60108,hl=Te?Symbol.for("react.profiler"):60114,ml=Te?Symbol.for("react.provider"):60109,gl=Te?Symbol.for("react.context"):60110,ud=Te?Symbol.for("react.async_mode"):60111,xl=Te?Symbol.for("react.concurrent_mode"):60111,vl=Te?Symbol.for("react.forward_ref"):60112,yl=Te?Symbol.for("react.suspense"):60113,Nw=Te?Symbol.for("react.suspense_list"):60120,wl=Te?Symbol.for("react.memo"):60115,bl=Te?Symbol.for("react.lazy"):60116,Tw=Te?Symbol.for("react.block"):60121,Iw=Te?Symbol.for("react.fundamental"):60117,Lw=Te?Symbol.for("react.responder"):60118,Aw=Te?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ad:switch(e=e.type,e){case ud:case xl:case pl:case hl:case fl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case gl:case vl:case bl:case wl:case ml:return e;default:return t}}case cd:return t}}}function eg(e){return lt(e)===xl}Z.AsyncMode=ud;Z.ConcurrentMode=xl;Z.ContextConsumer=gl;Z.ContextProvider=ml;Z.Element=ad;Z.ForwardRef=vl;Z.Fragment=pl;Z.Lazy=bl;Z.Memo=wl;Z.Portal=cd;Z.Profiler=hl;Z.StrictMode=fl;Z.Suspense=yl;Z.isAsyncMode=function(e){return eg(e)||lt(e)===ud};Z.isConcurrentMode=eg;Z.isContextConsumer=function(e){return lt(e)===gl};Z.isContextProvider=function(e){return lt(e)===ml};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ad};Z.isForwardRef=function(e){return lt(e)===vl};Z.isFragment=function(e){return lt(e)===pl};Z.isLazy=function(e){return lt(e)===bl};Z.isMemo=function(e){return lt(e)===wl};Z.isPortal=function(e){return lt(e)===cd};Z.isProfiler=function(e){return lt(e)===hl};Z.isStrictMode=function(e){return lt(e)===fl};Z.isSuspense=function(e){return lt(e)===yl};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pl||e===xl||e===hl||e===fl||e===yl||e===Nw||typeof e=="object"&&e!==null&&(e.$$typeof===bl||e.$$typeof===wl||e.$$typeof===ml||e.$$typeof===gl||e.$$typeof===vl||e.$$typeof===Iw||e.$$typeof===Lw||e.$$typeof===Aw||e.$$typeof===Tw)};Z.typeOf=lt;Z1.exports=Z;var Ow=Z1.exports,tg=Ow,Rw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ng={};ng[tg.ForwardRef]=Rw;ng[tg.Memo]=zw;var ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=Symbol.for("react.element"),pd=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),Cl=Symbol.for("react.provider"),El=Symbol.for("react.context"),Mw=Symbol.for("react.server_context"),_l=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Il=Symbol.for("react.lazy"),$w=Symbol.for("react.offscreen"),rg;rg=Symbol.for("react.module.reference");function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dd:switch(e=e.type,e){case Sl:case kl:case jl:case Pl:case Nl:return e;default:switch(e=e&&e.$$typeof,e){case Mw:case El:case _l:case Il:case Tl:case Cl:return e;default:return t}}case pd:return t}}}ee.ContextConsumer=El;ee.ContextProvider=Cl;ee.Element=dd;ee.ForwardRef=_l;ee.Fragment=Sl;ee.Lazy=Il;ee.Memo=Tl;ee.Portal=pd;ee.Profiler=kl;ee.StrictMode=jl;ee.Suspense=Pl;ee.SuspenseList=Nl;ee.isAsyncMode=function(){return!1};ee.isConcurrentMode=function(){return!1};ee.isContextConsumer=function(e){return yt(e)===El};ee.isContextProvider=function(e){return yt(e)===Cl};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dd};ee.isForwardRef=function(e){return yt(e)===_l};ee.isFragment=function(e){return yt(e)===Sl};ee.isLazy=function(e){return yt(e)===Il};ee.isMemo=function(e){return yt(e)===Tl};ee.isPortal=function(e){return yt(e)===pd};ee.isProfiler=function(e){return yt(e)===kl};ee.isStrictMode=function(e){return yt(e)===jl};ee.isSuspense=function(e){return yt(e)===Pl};ee.isSuspenseList=function(e){return yt(e)===Nl};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sl||e===kl||e===jl||e===Pl||e===Nl||e===$w||typeof e=="object"&&e!==null&&(e.$$typeof===Il||e.$$typeof===Tl||e.$$typeof===Cl||e.$$typeof===El||e.$$typeof===_l||e.$$typeof===rg||e.getModuleId!==void 0)};ee.typeOf=yt;function Dw(){const e=jw();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const lf={notify(){},get:()=>[]};function Fw(e,t){let n,r=lf;function i(p){return c(),r.subscribe(p)}function o(){r.notify()}function l(){d.onStateChange&&d.onStateChange()}function a(){return!!n}function c(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=Dw())}function u(){n&&(n(),n=void 0,r.clear(),r=lf)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:l,isSubscribed:a,trySubscribe:c,tryUnsubscribe:u,getListeners:()=>r};return d}const Bw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uw=Bw?j.useLayoutEffect:j.useEffect;function Hw({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const l=j.useMemo(()=>{const u=Fw(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),a=j.useMemo(()=>e.getState(),[e]);Uw(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,a]);const c=t||An;return H.createElement(c.Provider,{value:l},n)}function ig(e=An){const t=e===An?Q1:ld(e);return function(){const{store:r}=t();return r}}const Ww=ig();function Vw(e=An){const t=e===An?Ww:ig(e);return function(){return t().dispatch}}const K=Vw();Ew(ww.useSyncExternalStoreWithSelector);Sw(o1.unstable_batchedUpdates);function Ct(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function On(e){return!!e&&!!e[ce]}function en(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===e3}(e)||Array.isArray(e)||!!e[hf]||!!(!((t=e.constructor)===null||t===void 0)&&t[hf])||fd(e)||hd(e))}function Zn(e,t,n){n===void 0&&(n=!1),ti(e)===0?(n?Object.keys:Tr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function ti(e){var t=e[ce];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:fd(e)?2:hd(e)?3:0}function Nr(e,t){return ti(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Gw(e,t){return ti(e)===2?e.get(t):e[t]}function og(e,t,n){var r=ti(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function sg(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function fd(e){return Jw&&e instanceof Map}function hd(e){return Zw&&e instanceof Set}function Fn(e){return e.o||e.t}function md(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ag(e);delete t[ce];for(var n=Tr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function gd(e,t){return t===void 0&&(t=!1),xd(e)||On(e)||!en(e)||(ti(e)>1&&(e.set=e.add=e.clear=e.delete=Kw),Object.freeze(e),t&&Zn(e,function(n,r){return gd(r,!0)},!0)),e}function Kw(){Ct(2)}function xd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Dt(e){var t=Vc[e];return t||Ct(18,e),t}function qw(e,t){Vc[e]||(Vc[e]=t)}function Uc(){return Qi}function wa(e,t){t&&(Dt("Patches"),e.u=[],e.s=[],e.v=t)}function As(e){Hc(e),e.p.forEach(Yw),e.p=null}function Hc(e){e===Qi&&(Qi=e.l)}function af(e){return Qi={p:[],l:Qi,h:e,m:!0,_:0}}function Yw(e){var t=e[ce];t.i===0||t.i===1?t.j():t.g=!0}function ba(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Dt("ES5").S(t,e,r),r?(n[ce].P&&(As(t),Ct(4)),en(e)&&(e=Os(t,e),t.l||Rs(t,e)),t.u&&Dt("Patches").M(n[ce].t,e,t.u,t.s)):e=Os(t,n,[]),As(t),t.u&&t.v(t.u,t.s),e!==lg?e:void 0}function Os(e,t,n){if(xd(t))return t;var r=t[ce];if(!r)return Zn(t,function(a,c){return cf(e,r,t,a,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Rs(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=md(r.k):r.o,o=i,l=!1;r.i===3&&(o=new Set(i),i.clear(),l=!0),Zn(o,function(a,c){return cf(e,r,i,a,c,n,l)}),Rs(e,i,!1),n&&e.u&&Dt("Patches").N(r,n,e.u,e.s)}return r.o}function cf(e,t,n,r,i,o,l){if(On(i)){var a=Os(e,i,o&&t&&t.i!==3&&!Nr(t.R,r)?o.concat(r):void 0);if(og(n,r,a),!On(a))return;e.m=!1}else l&&n.add(i);if(en(i)&&!xd(i)){if(!e.h.D&&e._<1)return;Os(e,i),t&&t.A.l||Rs(e,i)}}function Rs(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&gd(t,n)}function Sa(e,t){var n=e[ce];return(n?Fn(n):e)[t]}function uf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function pn(e){e.P||(e.P=!0,e.l&&pn(e.l))}function ja(e){e.o||(e.o=md(e.t))}function Wc(e,t,n){var r=fd(t)?Dt("MapSet").F(t,n):hd(t)?Dt("MapSet").T(t,n):e.O?function(i,o){var l=Array.isArray(i),a={i:l?1:0,A:o?o.A:Uc(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=a,u=Ji;l&&(c=[a],u=yi);var d=Proxy.revocable(c,u),p=d.revoke,m=d.proxy;return a.k=m,a.j=p,m}(t,n):Dt("ES5").J(t,n);return(n?n.A:Uc()).p.push(r),r}function Xw(e){return On(e)||Ct(22,e),function t(n){if(!en(n))return n;var r,i=n[ce],o=ti(n);if(i){if(!i.P&&(i.i<4||!Dt("ES5").K(i)))return i.t;i.I=!0,r=df(n,o),i.I=!1}else r=df(n,o);return Zn(r,function(l,a){i&&Gw(i.t,l)===a||og(r,l,t(a))}),o===3?new Set(r):r}(e)}function df(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return md(e)}function Qw(){function e(o,l){var a=i[o];return a?a.enumerable=l:i[o]=a={configurable:!0,enumerable:l,get:function(){var c=this[ce];return Ji.get(c,o)},set:function(c){var u=this[ce];Ji.set(u,o,c)}},a}function t(o){for(var l=o.length-1;l>=0;l--){var a=o[l][ce];if(!a.P)switch(a.i){case 5:r(a)&&pn(a);break;case 4:n(a)&&pn(a)}}}function n(o){for(var l=o.t,a=o.k,c=Tr(a),u=c.length-1;u>=0;u--){var d=c[u];if(d!==ce){var p=l[d];if(p===void 0&&!Nr(l,d))return!0;var m=a[d],h=m&&m[ce];if(h?h.t!==p:!sg(m,p))return!0}}var y=!!l[ce];return c.length!==Tr(l).length+(y?0:1)}function r(o){var l=o.k;if(l.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(l,l.length-1);if(a&&!a.get)return!0;for(var c=0;c<l.length;c++)if(!l.hasOwnProperty(c))return!0;return!1}var i={};qw("ES5",{J:function(o,l){var a=Array.isArray(o),c=function(d,p){if(d){for(var m=Array(p.length),h=0;h<p.length;h++)Object.defineProperty(m,""+h,e(h,!0));return m}var y=ag(p);delete y[ce];for(var v=Tr(y),b=0;b<v.length;b++){var x=v[b];y[x]=e(x,d||!!y[x].enumerable)}return Object.create(Object.getPrototypeOf(p),y)}(a,o),u={i:a?5:4,A:l?l.A:Uc(),P:!1,I:!1,R:{},l,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,ce,{value:u,writable:!0}),c},S:function(o,l,a){a?On(l)&&l[ce].A===o&&t(o.p):(o.u&&function c(u){if(u&&typeof u=="object"){var d=u[ce];if(d){var p=d.t,m=d.k,h=d.R,y=d.i;if(y===4)Zn(m,function(g){g!==ce&&(p[g]!==void 0||Nr(p,g)?h[g]||c(m[g]):(h[g]=!0,pn(d)))}),Zn(p,function(g){m[g]!==void 0||Nr(m,g)||(h[g]=!1,pn(d))});else if(y===5){if(r(d)&&(pn(d),h.length=!0),m.length<p.length)for(var v=m.length;v<p.length;v++)h[v]=!1;else for(var b=p.length;b<m.length;b++)h[b]=!0;for(var x=Math.min(m.length,p.length),f=0;f<x;f++)m.hasOwnProperty(f)||(h[f]=!0),h[f]===void 0&&c(m[f])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var pf,Qi,vd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Jw=typeof Map<"u",Zw=typeof Set<"u",ff=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",lg=vd?Symbol.for("immer-nothing"):((pf={})["immer-nothing"]=!0,pf),hf=vd?Symbol.for("immer-draftable"):"__$immer_draftable",ce=vd?Symbol.for("immer-state"):"__$immer_state",e3=""+Object.prototype.constructor,Tr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ag=Object.getOwnPropertyDescriptors||function(e){var t={};return Tr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Vc={},Ji={get:function(e,t){if(t===ce)return e;var n=Fn(e);if(!Nr(n,t))return function(i,o,l){var a,c=uf(o,l);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!en(r)?r:r===Sa(e.t,t)?(ja(e),e.o[t]=Wc(e.A.h,r,e)):r},has:function(e,t){return t in Fn(e)},ownKeys:function(e){return Reflect.ownKeys(Fn(e))},set:function(e,t,n){var r=uf(Fn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Sa(Fn(e),t),o=i==null?void 0:i[ce];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(sg(n,i)&&(n!==void 0||Nr(e.t,t)))return!0;ja(e),pn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Sa(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ja(e),pn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Fn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ct(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ct(12)}},yi={};Zn(Ji,function(e,t){yi[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),yi.deleteProperty=function(e,t){return yi.set.call(this,e,t,void 0)},yi.set=function(e,t,n){return Ji.set.call(this,e[0],t,n,e[0])};var t3=function(){function e(n){var r=this;this.O=ff,this.D=!0,this.produce=function(i,o,l){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var c=r;return function(v){var b=this;v===void 0&&(v=a);for(var x=arguments.length,f=Array(x>1?x-1:0),g=1;g<x;g++)f[g-1]=arguments[g];return c.produce(v,function(w){var S;return(S=o).call.apply(S,[b,w].concat(f))})}}var u;if(typeof o!="function"&&Ct(6),l!==void 0&&typeof l!="function"&&Ct(7),en(i)){var d=af(r),p=Wc(r,i,void 0),m=!0;try{u=o(p),m=!1}finally{m?As(d):Hc(d)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return wa(d,l),ba(v,d)},function(v){throw As(d),v}):(wa(d,l),ba(u,d))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===lg&&(u=void 0),r.D&&gd(u,!0),l){var h=[],y=[];Dt("Patches").M(i,u,h,y),l(h,y)}return u}Ct(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return r.produceWithPatches(u,function(h){return i.apply(void 0,[h].concat(p))})};var l,a,c=r.produce(i,o,function(u,d){l=u,a=d});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,l,a]}):[c,l,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){en(n)||Ct(8),On(n)&&(n=Xw(n));var r=af(this),i=Wc(this,n,void 0);return i[ce].C=!0,Hc(r),i},t.finishDraft=function(n,r){var i=n&&n[ce],o=i.A;return wa(o,r),ba(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ff&&Ct(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var l=Dt("Patches").$;return On(n)?l(n,r):this.produce(n,function(a){return l(a,r)})},e}(),it=new t3,cg=it.produce;it.produceWithPatches.bind(it);it.setAutoFreeze.bind(it);it.setUseProxies.bind(it);it.applyPatches.bind(it);it.createDraft.bind(it);it.finishDraft.bind(it);function Zi(e){"@babel/helpers - typeof";return Zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zi(e)}function n3(e,t){if(Zi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Zi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function r3(e){var t=n3(e,"string");return Zi(t)==="symbol"?t:String(t)}function i3(e,t,n){return t=r3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mf(Object(n),!0).forEach(function(r){i3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ze(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var xf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ka=function(){return Math.random().toString(36).substring(7).split("").join(".")},zs={INIT:"@@redux/INIT"+ka(),REPLACE:"@@redux/REPLACE"+ka(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ka()}};function o3(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ug(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ze(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ze(1));return n(ug)(e,t)}if(typeof e!="function")throw new Error(ze(2));var i=e,o=t,l=[],a=l,c=!1;function u(){a===l&&(a=l.slice())}function d(){if(c)throw new Error(ze(3));return o}function p(v){if(typeof v!="function")throw new Error(ze(4));if(c)throw new Error(ze(5));var b=!0;return u(),a.push(v),function(){if(b){if(c)throw new Error(ze(6));b=!1,u();var f=a.indexOf(v);a.splice(f,1),l=null}}}function m(v){if(!o3(v))throw new Error(ze(7));if(typeof v.type>"u")throw new Error(ze(8));if(c)throw new Error(ze(9));try{c=!0,o=i(o,v)}finally{c=!1}for(var b=l=a,x=0;x<b.length;x++){var f=b[x];f()}return v}function h(v){if(typeof v!="function")throw new Error(ze(10));i=v,m({type:zs.REPLACE})}function y(){var v,b=p;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(ze(11));function g(){f.next&&f.next(d())}g();var w=b(g);return{unsubscribe:w}}},v[xf]=function(){return this},v}return m({type:zs.INIT}),r={dispatch:m,subscribe:p,getState:d,replaceReducer:h},r[xf]=y,r}function s3(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:zs.INIT});if(typeof r>"u")throw new Error(ze(12));if(typeof n(void 0,{type:zs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ze(13))})}function l3(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),l;try{s3(n)}catch(a){l=a}return function(c,u){if(c===void 0&&(c={}),l)throw l;for(var d=!1,p={},m=0;m<o.length;m++){var h=o[m],y=n[h],v=c[h],b=y(v,u);if(typeof b>"u")throw u&&u.type,new Error(ze(14));p[h]=b,d=d||b!==v}return d=d||o.length!==Object.keys(c).length,d?p:c}}function Ms(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function a3(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(ze(15))},l={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(c){return c(l)});return o=Ms.apply(void 0,a)(i.dispatch),gf(gf({},i),{},{dispatch:o})}}}function dg(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(l){return function(a){return typeof a=="function"?a(i,o,e):l(a)}}};return t}var pg=dg();pg.withExtraArgument=dg;const vf=pg;var fg=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),c3=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Gr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},u3=Object.defineProperty,d3=Object.defineProperties,p3=Object.getOwnPropertyDescriptors,yf=Object.getOwnPropertySymbols,f3=Object.prototype.hasOwnProperty,h3=Object.prototype.propertyIsEnumerable,wf=function(e,t,n){return t in e?u3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Nn=function(e,t){for(var n in t||(t={}))f3.call(t,n)&&wf(e,n,t[n]);if(yf)for(var r=0,i=yf(t);r<i.length;r++){var n=i[r];h3.call(t,n)&&wf(e,n,t[n])}return e},Ca=function(e,t){return d3(e,p3(t))},m3=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{a(n.next(c))}catch(u){i(u)}},l=function(c){try{a(n.throw(c))}catch(u){i(u)}},a=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,l)};a((n=n.apply(e,t)).next())})},g3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ms:Ms.apply(null,arguments)};function x3(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var v3=function(e){fg(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Gr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Gr([void 0],n.concat(this))))},t}(Array),y3=function(e){fg(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Gr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Gr([void 0],n.concat(this))))},t}(Array);function Gc(e){return en(e)?cg(e,function(){}):e}function w3(e){return typeof e=="boolean"}function b3(){return function(t){return S3(t)}}function S3(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new v3;return n&&(w3(n)?r.push(vf):r.push(vf.withExtraArgument(n.extraArgument))),r}var j3=!0;function k3(e){var t=b3(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,l=o===void 0?t():o,a=n.devTools,c=a===void 0?!0:a,u=n.preloadedState,d=u===void 0?void 0:u,p=n.enhancers,m=p===void 0?void 0:p,h;if(typeof i=="function")h=i;else if(x3(i))h=l3(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=l;typeof y=="function"&&(y=y(t));var v=a3.apply(void 0,y),b=Ms;c&&(b=g3(Nn({trace:!j3},typeof c=="object"&&c)));var x=new y3(v),f=x;Array.isArray(m)?f=Gr([v],m):typeof m=="function"&&(f=m(x));var g=b.apply(void 0,f);return ug(h,d,g)}function Tn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Nn(Nn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function hg(e){var t={},n=[],r,i={addCase:function(o,l){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=l,i},addMatcher:function(o,l){return n.push({matcher:o,reducer:l}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function C3(e){return typeof e=="function"}function E3(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?hg(t):[t,n,r],o=i[0],l=i[1],a=i[2],c;if(C3(e))c=function(){return Gc(e())};else{var u=Gc(e);c=function(){return u}}function d(p,m){p===void 0&&(p=c());var h=Gr([o[m.type]],l.filter(function(y){var v=y.matcher;return v(m)}).map(function(y){var v=y.reducer;return v}));return h.filter(function(y){return!!y}).length===0&&(h=[a]),h.reduce(function(y,v){if(v)if(On(y)){var b=y,x=v(b,m);return x===void 0?y:x}else{if(en(y))return cg(y,function(f){return v(f,m)});var x=v(y,m);if(x===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return x}return y},p)}return d.getInitialState=c,d}function _3(e,t){return e+"/"+t}function ir(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Gc(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},l={},a={};i.forEach(function(d){var p=r[d],m=_3(t,d),h,y;"reducer"in p?(h=p.reducer,y=p.prepare):h=p,o[d]=h,l[m]=h,a[d]=y?Tn(m,y):Tn(m)});function c(){var d=typeof e.extraReducers=="function"?hg(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,h=d[1],y=h===void 0?[]:h,v=d[2],b=v===void 0?void 0:v,x=Nn(Nn({},m),l);return E3(n,function(f){for(var g in x)f.addCase(g,x[g]);for(var w=0,S=y;w<S.length;w++){var C=S[w];f.addMatcher(C.matcher,C.reducer)}b&&f.addDefaultCase(b)})}var u;return{name:t,reducer:function(d,p){return u||(u=c()),u(d,p)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var P3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",N3=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=P3[Math.random()*64|0];return t},T3=["name","message","stack","code"],Ea=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),I3=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=T3;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},L3=function(){function e(t,n,r){var i=Tn(t+"/fulfilled",function(u,d,p,m){return{payload:u,meta:Ca(Nn({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),o=Tn(t+"/pending",function(u,d,p){return{payload:void 0,meta:Ca(Nn({},p||{}),{arg:d,requestId:u,requestStatus:"pending"})}}),l=Tn(t+"/rejected",function(u,d,p,m,h){return{payload:m,error:(r&&r.serializeError||I3)(u||"Rejected"),meta:Ca(Nn({},h||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(d,p,m){var h=r!=null&&r.idGenerator?r.idGenerator(u):N3(),y=new a,v;function b(f){v=f,y.abort()}var x=function(){return m3(this,null,function(){var f,g,w,S,C,k,N;return c3(this,function(E){switch(E.label){case 0:return E.trys.push([0,4,,5]),S=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:p,extra:m}),O3(S)?[4,S]:[3,2];case 1:S=E.sent(),E.label=2;case 2:if(S===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(I,P){return y.signal.addEventListener("abort",function(){return P({name:"AbortError",message:v||"Aborted"})})}),d(o(h,u,(g=r==null?void 0:r.getPendingMeta)==null?void 0:g.call(r,{requestId:h,arg:u},{getState:p,extra:m}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:d,getState:p,extra:m,requestId:h,signal:y.signal,abort:b,rejectWithValue:function(I,P){return new Ea(I,P)},fulfillWithValue:function(I,P){return new bf(I,P)}})).then(function(I){if(I instanceof Ea)throw I;return I instanceof bf?i(I.payload,h,u,I.meta):i(I,h,u)})])];case 3:return w=E.sent(),[3,5];case 4:return k=E.sent(),w=k instanceof Ea?l(null,h,u,k.payload,k.meta):l(k,h,u),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&l.match(w)&&w.meta.condition,N||d(w),[2,w]}})})}();return Object.assign(x,{abort:b,requestId:h,arg:u,unwrap:function(){return x.then(A3)}})}}return Object.assign(c,{pending:o,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function A3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function O3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var yd="listenerMiddleware";Tn(yd+"/add");Tn(yd+"/removeAll");Tn(yd+"/remove");var Sf;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Qw();const mg=[{id:1,title:"새 대표팀 감독 데뷔전 3월 A매치 첫 상대는 콜롬비아",date:"2023-02-06",view:3923,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1675666117_1473319230.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1675666070_1920791097.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1675666084_1431960273.jpg"],desc:`3월 국내에서 열리는 축구 국가대표팀의 A매치 첫 상대가 콜롬비아로 정해졌다.

대한축구협회는 오는 3월 24일 콜롬비아 대표팀과 친선 A매치를 갖기로 했다고 6일 발표했다. 경기 장소와 킥오프 시간은 아직 확정되지 않았다.

이로써 콜롬비아전은 새롭게 부임할 한국 대표팀 감독의 데뷔전이 될 전망이다.

3월 28일쯤에 열릴 A매치 두 번째 경기 상대는 현재 협의중이며, 남미 국가중에서 정해질 예정이다.

이 기간에 유럽과 아프리카 국가들은 대륙 선수권 예선 일정이 잡혀있고, 북중미 나라 대부분은 네이션스리그 경기를 치르기 때문에 대한축구협회는 그동안 남미 국가들과 경기 협의를 해왔다.
3월에 열릴 이번 친선 두 경기는 FIFA가 정한 A매치 기간에 열리기 때문에 해외파 선수들까지 소집할 수 있다.

콜롬비아는 지난해 12월 발표한 FIFA 랭킹에서 17위에 올라, 25위인 한국보다 8계단 높다.  카타르 월드컵 남미 예선에서는 6위에 그쳐 본선 진출에는 실패했다.
한국과 콜롬비아는 그동안 7차례 A매치를 치러 한국이 4승 2무 1패로 앞서 있다. 가장 최근의 대결은 4년전인 2019년 3월 서울월드컵경기장에서 열린 친선경기로, 손흥민과 이재성의 골로 우리가 2-1로 이겼다.

아르헨티나 출신 네스토 로렌조 감독이 이끄는 콜롬비아 대표팀의 유명 선수로는 하메스 로드리게스(32, 올림피아코스), 다빈손 산체스(27, 토트넘),  루이스 디아즈(26, 리버풀), 후안 콰드라도(35, 유벤투스) 등이 있다.`},{id:2,title:"3월 A매치 두번째 상대는 우루과이",date:"2023-02-13",view:3243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1676268445_631113622.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1676268424_1689676376.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1676268441_1216052877.jpg"],desc:`한국과 우루과이가 카타르 월드컵 조별리그에서 맞붙은지 넉달만에 다시 대결한다.

대한축구협회는 오는 3월 28일 우루과이와 친선A매치를 갖기로 했다고 13일 발표했다.  장소는 서울월드컵경기장이며, 킥오프 시간은 아직 정해지지 않았다.

이로써 새 감독이 부임한 뒤 처음 맞이하는 A매치 기간에 한국대표팀은 3월 24일 콜롬비아를 상대로 울산에서, 28일에는 우루과이와 각각 경기를 치르게 됐다.

지난해 11월 카타르 월드컵 조별리그 첫 경기에서 한국과 우루과이는 접전 끝에 0-0으로 비긴 바 있다. 조별리그 결과 두 팀은 똑같이 1승1무1패를 기록하고 골득실까지 같았다. 하지만 한국이 다득점에 앞서 16강에 극적으로 진출하고 우루과이는 탈락했다.

현재 우루과이의 FIFA 랭킹은 16위로, 25위인 우리보다 높다.  우루과이 대표팀은 3월 24일 일본에서 경기를 치른 뒤 입국할 예정이다.
한국과 우루과이의 역대 전적은 9전 1승 2무 6패로 우리가 뒤진다. 2018년 10월 서울에서 열린 친선경기에서 황의조와 정우영(알사드)의 골로 2-1로 이긴 것이 유일한 승리다.`},{id:3,title:"클린스만호 첫 소집 후 기대감 드러낸 김영권-조규성",date:"2023-03-20",view:1165,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679312104_14888619.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679311957_877671639.jpg"],desc:`클린스만 체제에서 첫 소집 훈련을 앞둔 김영권과 조규성이 나란히 새로운 대표팀에 대한 기대감을 드러냈다.

클린스만 감독이 이끄는 축구 국가대표팀이 20일 오후 파주NFC에 소집됐다. 파주에서 3일간의 훈련 후 22일 울산으로 향하는 국가대표팀은 24일 저녁 콜롬비아와 울산문수축구경기장에서, 28일 저녁 서울월드컵경기장에서 우루과이와의 A매치 2연전을 치른다. 

이번 대표팀 소집 명단에는 지난 FIFA 카타르 월드컵에 나섰던 선수들이 대부분 선발됐다. 베테랑 수비수 김영권을 비롯해 카타르 월드컵에서의 활약으로 일약 스타가 된 조규성도 합류해 소집 첫날 기자회견에 모습을 드러냈다.클린스만 감독 체제에서 새롭게 시작되는 대표팀에 대해 김영권은 “선수 때 워낙 유명하셨던 분이고, 다른 나라 대표팀 감독 경력도 많으신 분이라 선수들이 기대하고 있다. 과연 또 어떤 한국 축구를 보여주실까 하는 기대도 하고 있다“며 운을 뗐다.

클린스만 감독의 선수 시절 포지션과 같은 공격수 조규성은  “아무래도 이제 클린스만 감독님이 공격수 출신이다 보니까 제가 더 배울 수 있는 부분이 있을 것 같다”면서 “아까 오면서 감독님의 예전 선수 시절 영상을 봤다. 감독님도 타깃형 스트라이커 출신이고 골 결정력이 좋으셔서 그런 부분을 많이 배우고 싶다. 기대가 된다”고 밝혔다.

이번 소집은 지난 카타르 월드컵 이후 남자 대표팀의 첫 공식 소집이다. 한국은 카타르 월드컵에서 2010년에 이어 역대 2번째 원정 16강에 진출하며 성공적인 한 해를 마무리했다. 첫 소집 훈련에서 동료들을 다시 만난 소감에 대해 김영권은 “일단 다시 보니 반갑다고 얘기했다. 지난 일보다 앞으로가 중요하니, 어떻게 해야 될지는 차차 얘기해서 잘해보자고 했다”고 설명했다.

TSG 멤버로 월드컵을 지켜봤던 클린스만 감독은 한국 대표팀의 잠재력을 높게 평가하며 자신의 취임 후 첫 목표로 ‘2023 AFC 아시안컵 우승’을 꼽았다. 김영권은 “저희가 지난 카타르 월드컵에서 가능성을 보였고 아시안컵에서 충분히 우승할 수 있다는 자신감을 얻었다”며 “감독님께서 그런 목표와 생각을 하신 것에 대해 선수들이 믿어줘야 한다. 충분히 저희가 할 수 있는 목표라 생각하고, 앞으로 남은 기간 잘 준비해야 할 것 같다”고 말했다.

또한 ‘1-0 승리보다 4-3 승리를 선호한다’는 클린스만 감독의 답변에 대해서는 “나는 4-3보다 4-0이 좋다. 수비수로서는 한 골도 내주지 않는 게 제 역할을 다하는 것 같다”며 재치 있게 답했다.`},{id:4,title:"‘해외파’된 오현규 “영어 빨리 배워 감독님께 다가가겠다”",date:"2023-03-21",view:993,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679370498_1863569123.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679370616_933454758.jpg"],desc:`스코틀랜드 리그에서 뛰고 있는 오현규(셀틱)는 공격수 출신인 클린스만 감독에게 직접 다가가 많은 것을 배우겠다고 다짐했다. 

클린스만 감독이 이끄는 축구 국가대표팀이 20일 오후 파주NFC에 소집됐다. 국가대표팀은 파주에서 진행되는 3일간의 훈련 후 22일 울산으로 이동해 24일 저녁 콜롬비아와 울산문수축구경기장에서, 28일 저녁 서울월드컵경기장에서 우루과이와의 A매치 2연전을 치른다.

20일 오후 파주에 입소한 오현규는 21일 오전 훈련 전 취재진과의 인터뷰에 나섰다. 오현규는 “어제 도착해서 가볍게 회복 훈련을 했다. 이렇게 시차 적응하며 대표팀에 소집된 적이 없는 것 같은데 (손)흥민이형이 대단한 걸 다시 느낀다”며 “저는 고작 한 번 했는데 (손)흥민이 형은 이렇게 힘든 걸 몇 년째 하고 계시는 게 대단하다고 다시 한번 느꼈다”며 해외파로서 대표팀에 소집된 소감을 밝혔다.

손흥민과 유럽 리그 적응에 대해 이야기를 나눴냐는 질문에 대해서는 토트넘에서 셀틱으로 이적한 골키퍼 조 하트(셀틱)를 언급했다. 오현규는 “(손)흥민이형이 하트형이 잘 챙겨주냐고 물어봤다. 그래서 워낙 하트형이 잘 챙겨주고 있고 덕분에 셀틱 생활을 정말 잘 즐기고 있다고 했다”고 답했다오현규는 지난 카타르 월드컵에서 대표팀 예비 명단으로 동행해 월드컵 여정을 함께 했다. 월드컵 이후 대표팀에 정식 소집된 소감과 원하는 등번호가 있냐는 질문에는 “이번에는 정식으로 대표팀에 소집돼 너무나 감사한 마음이다”라며 “태극마크를 달고 있다는 자체가 너무 영광스러운 일이기 때문에 딱히 달고 싶은 등번호는 없다”며 겸손함을 보였다.
카타르 월드컵 이후 스코틀랜드 리그의 셀틱으로 이적한 오현규는 소속팀에서 주로 후반 조커로 나서고 있다. 그는 짧은 출전 시간에도 불구하고, 이적 후에만 3골을 몰아치며 눈에 띄는 활약을 펼치고 있다. 지난 18일 리그 경기에서는 팀의 승리를 결정짓는 역전 결승골을 터뜨리기도 했다. 오현규는 “(셀틱에) 가서 많은 경험을 했다. 선수로서 새롭게 배운 것들이 많아 스스로도 작년보다 한층 성장했다고 느낀다. 이번 대표팀 소집을 통해 새로운 감독님 앞에서 좋은 모습을 많이 보여드리고 싶다”는 각오를 드러냈다.

오현규는 같은 공격수 출신인 클린스만 감독으로부터 배울 수 있다는 점도 기대했다. 오현규는 “셀틱에서 선수들과 어울리려고 하다 보니 영어가 많이 늘었다. 같이 생활하면서 의사소통에 문제없는 정도가 된 것 같다”면서 “감독님이 워낙 선수 시절에 유명하셨고, 같은 공격수로서 배울 점이 많다고 느낀다. 빨리 영어를 더 배워서 감독님께 직접 다가갈 수 있도록 하겠다”며 웃었다.

끝으로 오현규는 클린스만 감독이 공언한 아시안컵 우승에 대해 “저도 감독님의 생각에 동의한다. 감독님과 아시안컵에 나가 함께 우승컵을 들어 올리고 싶다”고 말했다.`},{id:5,title:"'손흥민 멀티골' 클린스만호, 콜롬비아와 2-2 무",date:"2023-03-24",view:678,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1679663971_198684631.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1679663862_1487802123.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1679663884_1661009927.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1679663904_37040736.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11301/_1679663919_460647934.jpg"],desc:`르겐 클린스만 감독이 새로 부임한 남자축구 국가대표팀이 지난해 카타르 월드컵 이후 처음 치러진 평가전에서 콜롬비아와 무승부를 기록했다. 클린스만 감독이 이끄는 국가대표팀은 24일 울산문수축구경기장에서 치러진 콜롬비아와의 친선경기에서 2-2로 비겼다. ‘캡틴’ 손흥민이 전반에만 두 골을 넣으며 분전했지만, 후반 시작 5분 만에 콜롬비아에 연속골을 허용하며 무승부를 거뒀다. 이날 두 번째 골을 프리킥으로 기록한 손흥민은 A매치에서 프리킥으로만 5골을 기록, 한국 선수 역대 A매치 최다 프리킥 득점 기록을 작성했다.
이날 경기장에는 3만 5727명이 입장해 전석 매진을 기록했다. 대표팀은 오는 28일 서울월드컵경기장에서 우루과이와 맞대결을 벌인다.

이날 경기는 월드컵 16강 진출을 이뤄낸 선수들이 홈 팬들 앞에서 박수 받는 자리였다. 클린스만 감독은 이번 2연전을 앞두고 “선수들은 16강 진출 성과에 대해 칭찬받을 자격이 있다. 선수들을 축하해 줄 자리”라고 밝혔다. 월드컵 16강 브라질전에서 센추리클럽(A매치 100경기 이상 출전)을 달성한 김영권은 킥오프 전 기념행사를 통해 모든 이의 축하를 받았다. 

클린스만 감독은 카타르 월드컵에서 활약했던 대표팀 명단 대부분을 선발로 내세웠다. 골문은 김승규가 지키는 가운데, 포백 수비진은 김진수-김영권-김민재-김태환으로 구성됐다. 수비형 미드필더는 정우영(알사드)와 황인범이 맡았다. 2선에는 정우영(프라이부르크), 손흥민, 이재성이 포진했고, 조규성이 원톱으로 나섰다.경기는 당초 예정된 오후 8시보다 20분 늦게 킥오프됐다. 콜롬비아 선수단이 교통 체증으로 경기장에 늦게 도착하는 바람에 시작 시간이 뒤로 밀렸다. 한국은 아직 몸이 덜 풀린 콜롬비아를 강하게 몰아쳤다.`},{id:6,title:"클린스만 감독 “손흥민 앞으로도 프리롤 활용하겠다”",date:"2023-03-24",view:493,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679669140_251985922.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679669106_835782818.jpg"],desc:`클린스만 감독은 감독 데뷔전에서 두 골을 기록하며 맹활약한 손흥민을 앞으로도 프리롤로 기용하겠다고 밝혔다.

클린스만 감독이 이끄는 한국 대표팀은 24일 오후 8시 울산문수축구경기장에서 치러진 콜롬비아와의 친선경기에서 2-2로 비겼다. ‘캡틴’ 손흥민이 전반에만 두 골을 넣으며 분전했지만, 후반 시작과 함께 콜롬비아의 연속골이 터지며 무승부를 거뒀다.

경기 후 기자회견에 나선 클린스만 감독은 “최선을 다해준 선수들에게 고생했다고 말해주고 싶고, 팬들에게도 좋은 분위기를 만들어 주셔서 감사하게 생각한다. 경기 상대인 콜롬비아에도 고맙다”며 운을 뗐다.

 ‘캡틴’ 손흥민은 클린스만 감독의 데뷔전에서 두 골을 기록했다. 이에 대해 클린스만 감독은 “손흥민의 활약에 기쁘다. 손흥민은 중원이든 측면이든 공격진에서 로테이션을 통해 다양한 역할을 부여할 것이다. 프리롤 역할을 주면서 앞으로도 기용할 것”이라며 손흥민의 활용 계획을 밝혔다.

오늘 경기 중에는 김진수가 허리 부상을 호소하며 쓰러진 뒤, 전반 초반 이기제와 교체됐다. 클린스만 감독은 김진수의 부상 상태에 대해 “내일 진료를 본다고 들었는데 큰 부상이 아니길 바란다. 다음 경기 선발 라인업은 의무팀과 소통해야 할 것”이라며 “다른 선수들도 피로가 많이 쌓였을 텐데, 다음 경기를 준비하기까지 빠르게 회복 필요할 것 같다”고 언급했다.

오늘 경기에서는 벤투호에서 주전 공격수로 나섰던 황의조가 출전하지 않고, 조규성이 선발로 나섰다. 또한 카타르 월드컵 예비 명단에 있었던 오현규가 교체로 투입됐다. 이에 대해 클린스만 감독은 “9번(스트라이커)의 역할은 찬스를 부여받고 찬스를 통해 경기 감각을 끌어내는 것이다. 훈련 중 세밀하게 관찰을 통해 이런 결정을 내렸다”며 “나도 공격수 출신이기 때문에 9번 포지션에 대한 경험을 선수들에게 최대한 공유하고 싶다. 이를 통해 선수들이 많은 성장을 했으면 좋겠다”고 밝혔다.

끝으로 클린스만 감독은 “팬분들을 만나고 싶었고 첫 게임을 빠르게 치르고 싶었다. 아직까지도 배움의 과정이고, 한국 문화나 선수들을 전체적으로 알아가는 과정에 있다”면서 “나를 포함해 팀 스태프들도 모두 열정을 갖고 있다. 여정 속 기복은 있을 수 있지만, 원하는 목표를 만들어 가는 것이 중요하다. 내년 아시안컵에서 우승이라는 목표를 이루고 싶다”는 당찬 포부로 기자회견을 마무리했다.`},{id:7,title:"황인범 “월드컵 때 승부내지 못한 우루과이 이기겠다”",date:"2023-03-25",view:333,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679705162_1960630779.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679705156_1515373886.jpg"],desc:`남자축구 국가대표팀 중원을 지키는 황인범은 오는 28일 서울월드컵경기장에서 열리는 우루과이와의 ‘월드컵 리턴매치’에서 반드시 승리하겠다고 다짐했다.

위르겐 클린스만 감독의 데뷔전으로 많은 관심을 모았던 남자 국가대표팀 친선경기에서 대한민국이 콜롬비아와 2-2로 무승부를 거두며 승자를 가리지 못했다. 손흥민의 멀티골로 2골 차로 앞서간 대한민국이지만 후반전이 시작하자마자 2골을 내주며 전반전 리드를 지키는 데에 실패했다.

지난 카타르 월드컵까지 ‘벤투호의 황태자’로 불렸던 황인범은 이날도 든든하게 중원을 책임졌다. 이번 경기에서 황인범은 선발 출전해 90분 풀타임을 활약하며 클린스만호에서도 여전한 기량을 보여줬다.

경기 후 믹스트존(공동취재구역)에서 만난 황인범은 “전반전에는 우리가 원하던 대로 경기를 잘 풀어갔고 득점까지 수월하게 만들었다”며 “하프타임에 후반전 초반 10분을 집중하자는 얘기를 나눴지만 이 부분이 잘 되지 않았다. 순간적으로 집중력이 무너지며 2골을 연달아 내준 것은 분명 보완해야할 부분”이라고 설명했다.

또 황인범은 이번 경기에서 좋았던 부분들도 언급하며 팀 내적으로 긍정적인 시너지를 낼 수 있다는 점도 강조했다. 그는 “2골을 연달아 내줬음에도 불구하고 우리가 정신적으로 가다듬고 원래 펼쳤던 플레이를 다시 만들어갔던 건 고무적인 상황이라고 생각한다”고 밝혔다.

앞서 클린스만 감독은 인터뷰를 통해 1-0 승리보다는 4-3 승리를 더 선호한다며 공격적인 축구를 펼칠 것을 예고한 바 있다. 황인범 역시도 클린스만 감독의 축구를 잘 이해하려 노력하는 동시에 아직까지는 감독과 선수단끼리 서로를 알아가는 과정임을 잊지 않는 모습이었다. 그는 “이번 경기에서 감독님은 그전까지 우리 대표팀이 해왔던 축구와는 크게 달라지지 않을 것이라고 강조했다”며 “그동안 우리가 만들었던 스타일에서 핵심적인 부분들을 토대로 경기를 잘 치르자는 게 감독님의 주문이었다”고 말했다.

또 그는 “별도로 코칭스태프 측에서는 미드필더들이 조금 더 공격적인 터치나 패스들을 바탕으로 경기 템포를 빠르게 올려주면 좋겠다는 지시가 있었다. 저 역시 이런 부분들을 최대한으로 끌어올리려 노력했던 것 같다”고 전했다.

황인범은 경기 내용적인 부분과 별개로 팀 분위기 측면에서 올바른 문화가 만들어져가고 있다는 점도 높게 평가했다. 황인범은 “흥민이 형이 먼저 저한테 수비 상황에서는 본인이 압박을 하는 게 좋을지, 혹은 상대 선수 한 명을 뒤에서 잡아주는 게 좋을지 물어보더라”며 “선후배 할 거 없이 모든 선수들이 더 나은 플레이를 위해 서로를 편하게 도와주려 한다. 이런 부분에선 선배들에게 고맙게 생각하며, 저 또한 후배들에게 도움을 주면서 최대한 편한 분위기를 조성할 수 있도록 만들고 싶다”고 밝혔다.  

마지막으로 황인범은 다음 경기에서 만나게 될 우루과이를 반드시 이기고 싶다는 각오를 밝혔다. 대한민국 대표팀은 지난 2022 카타르 월드컵 조별리그에서 우루과이를 만나 0-0 무승부를 기록하며 승부를 가리지 못했다.

황인범은 “월드컵에서 우리가 우루과이를 상대로 대등한 경기를 펼치기도 했지만 여전히 어려운 상대”라며 “쉽지 않은 경기가 될 것이라 예상하지만 선수들은 매 경기, 특히 팬들이 많이 찾아와주는 홈경기에서 만큼은 꼭 이기고 싶어 한다. 부족했던 점을 잘 보완해 우루과이를 상대로 승리하는 모습을 팬들에게 선물 드리도록 하겠다”고 전했다.`},{id:8,title:"‘막내’ 오현규의 당찬 포부 “셀틱의 오현규는 더 강해졌다”",date:"2023-03-25",view:342,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679705905_1888718344.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679705854_1418895964.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679705896_316233159.jpg"],desc:`지난 월드컵에서 ‘예비 선수’였지만 이번에는 26번의 등번호를 달고 그라운드를 누빈 오현규는 스코틀랜드 셀틱 진출로 자신이 한층 더 강해졌다고 어필했다.

위르겐 클린스만 감독이 한국 대표팀 사령탑으로 새롭게 부임한 가운데, 지난 24일 20시 울산문수경기장에서 펼쳐진 A매치 평가전에서 한국은 콜롬비아를 상대로 2-2 무승부를 기록했다.

이날 오현규는 후반 15분 조규성을 대신하여 원톱으로 교체 출전했다. 경기 종료 직전 문전 앞에서 손흥민이 내준 패스를 받은 오현규는 결정적인 득점 기회를 맞았다. 오현규의 왼발 슈팅은 골키퍼를 지났지만, 수비수의 발에 막혔다.

경기 후 만난 오현규는 “작년 11월 아이슬란드와의 평가전에서 A매치 데뷔전을 치른 이후,  오랜만에 A매치를 뛰었다. 많은 팬 분들 앞에서 뛸 수 있어서 영광이었다”고 소감을 전했다. 이어 오현규는 “첫 시차 적응이 힘들었다”며 “오늘 경기 득점을 하지 못했고 아쉬운 모습을 보여드린 것 같다. 스스로도 많이 아쉽다”고 득점에 대한 아쉬움을 드러냈다.

3개월 전 2022 카타르 월드컵에서 등번호 없는 선수였던 오현규는 이번 평가전에서 26번의 등번호를 달고 당당하게 그라운드를 밟았다. 오현규는 “카타르 월드컵에서 형들의 경기를 밖에서 지켜보면서 항상 형들하고 같이 뛰는 모습을 항상 상상했었다. 오늘 함께 뛸 수 있었던 것만으로도 정말 기쁘고 감사하다”며 “등번호가 생긴 오늘 평가전 유니폼은 평생 간직하겠다”고 말했다.

지난 1월 셀틱의 부름을 받은 오현규는 이적 이후 세 골을 기록하며 팀에 완벽히 적응했다.  오현규는 “수원삼성의 오현규보다 셀틱의 오현규가 더 강해졌다”며 “셀틱에서 시간을 헛되이 보내지 않기 위해, 주어진 환경에서 최선을 다했다”고 설명했다. 셀틱에서 강한 자신감을 얻고 돌아온 오현규는 “셀틱에서의 활약이 오늘 대표팀에서 자신감으로 나왔다”며 자신감을 드러냈다.

클린스만 감독은 공식 기자회견을 통해 ‘공격 축구’를 선언했다. 이에 대해 오현규는 “감독님께서 공격수한테 좋은 의미로 이기적이어야 한다고 주문하신다”며 “공격수로서 내가 잘 할 수 있는 것을 더 극대화해주신다. 감독님의 훈련 방법이 팀을 더 좋은 방향으로 이끌 것 같다”고 언급했다.

오현규는 수원삼성에서 많은 골을 합작했던 이기제와 대표팀에서 오랜만에 만났다. 오현규는 “이기제 형과는 눈빛만 봐도 아는 사이”라며 “작년 한 해 동안 많은 골을 만들어냈었다. 오늘 경기에서도 커뮤니케이션이 잘 이루어졌다. 기제 형과 다음 경기에서도 함께 뛴다면 득점을 노려보겠다”고 각오를 다졌다.

클린스만 호의 원톱 자리를 놓고 오현규는 조규성, 황의조와 경쟁하고 있다. 이에 오현규는  “피지컬이 좋은 유럽 수비수들과 강하게 부딪혔다. 피하지 않고 더 강하게 맞서면서 내가 더 강해졌다고 느낀다”며 “조규성, 황의조 선수보다는 박스에서 더 강하고 저돌적이라고 생각한다”고 밝혔다.`},{id:9,title:"‘클린스만호 공격축구’에서 진가 발휘하는 손흥민",date:"2023-03-25",view:402,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679708153_1399428053.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679708130_1836583994.jpg"],desc:`‘캡틴’ 손흥민이 다시 훨훨 날았다. 위르겐 클린스만 감독이 내세우는 공격 축구를 통해 자신의 진가가 발휘되는 모습이다.

손흥민은 24일 울산문수축구경기장에서 열린 콜롬비아와의 A매치 친선경기에 선발 출전해 풀타임 활약했다. 한국이 기록한 두 골은 모두 손흥민의 발에서 나왔다. 전반 10분에는 골키퍼가 자리를 비운 골문에 왼발로 차 넣었고, 전반 추가시간에는 수비벽을 절묘하게 피하는 오른발 프리킥을 꽂아넣었다.

이로써 손흥민은 한국 선수 역대 A매치 최다 프리킥 득점 기록을 작성했다. 종전까지는 하석주(현 아주대 감독)와 4골로 공동 1위였다. 2015년 6월 미얀마와의 월드컵 예선에서 첫 A매치 프리킥 골을 신고한 손흥민은 지난해에는 프리킥으로만 3골(칠레, 파라과이, 코스타리카전)을 넣으며 물오른 감각을 과시했다.

경기 후 믹스트존(공동취재구역)에서 만난 손흥민은 역대 최다 프리킥 기록을 달성한 것에 대해 묻자 “얼마나 넣은지 사실 잘 모르겠다”며 “그런 기록도 좋지만 기록보다는 팀이 우선인 스포츠이기 때문에 결과에 아쉬움이 남을 따름이다”이라고 말했다.


이날 자신의 활약에 대해선 “항상 경기를 잘할 때도 있고, 못할 때도 있지만 항상 배울 점이 나타난다고 생각한다. 오늘 경기에서 분명히 부족한 점이 있었다. 경기가 끝난 후 다시 한번 돌아보면서 어떻게 하면 팀에 도움이 될 수 있을지 생각한다. 팀원들의 도움이 없다면 이런 경기를 할 수 없다고 생각한다”며 팀과 동료를 생각하는 주장다운 면모를 보였다.

손흥민은 이날 선발 출전해 클린스만 감독의 공격 축구에 큰 힘을 보탰다. 대표팀은 큰 틀에서는 파울루 벤투 감독 체제 아래 시행했던 빌드업 패턴을 선보였으나 좀더 공격적이고 직선적인 볼 투입이 많아졌다. 

클린스만 감독의 공격적인 전술에 대해 손흥민은 “감독님께서 선수들 마음을 편안하게 해주시려고 하는 부분들이 경기장에서 그대로 나왔다고 생각한다. 선수들의 움직임을 보면 자신 있게 가장 본인들이 좋아하는 움직임을 했던 것 같다. 그래서 두 골이 나왔고, 좋은 장면들을 만들어냈다. 좋은 장점들은 계속 발전해나가야 한다고 생각한다. 그러다 보면 더 좋은 경기력, 더 공격적인 축구를 할 수 있을 것 같다. 선수들이 여기서 많은 골을 넣겠다는 마음가짐으로 경기하면 더 좋은 장면을 만들어낼 수 있을 것 같다”고 긍정적으로 평가했다.

끝으로 손흥민은 관중석을 꽉 채워준 팬들에게 좋은 선물을 드리고 싶다며 다음 상대인 우루과이전에서도 최선을 다하겠다는 뜻을 전했다. 그는 “팬들이 많이 와서 좋은 선물로 승리를 드려야 하는 게 가장 중요한 건데 그러지 못해서 상당히 아쉽다. 그래도 운동장에서 팬들의 성원에 대한 감사함을 표현할 수 있다는 것 자체가 행복했다. 다음 경기에서 좋은 선물을 드리고 싶다”며 필승 의지를 다졌다.`},{id:10,title:"[우루과이전 프리뷰] 월드컵 리턴매치에선 승패 가릴까?",date:"2023-03-27",view:7233,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679908476_130125947.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679900342_2131949303.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679900355_1551723084.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679900367_368502277.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1679908427_2131058305.jpg"],desc:`남자축구 국가대표팀이 지난해 FIFA 카타르 월드컵 이후 넉 달 만에 우루과이와 리턴 매치를 벌인다. 한국은 감독이 바뀌었지만 선수들이 대부분 그대로인 반면 우루과이는 사령탑과 선수 면면이 대거 달라져 어떤 결과가 나올지 귀추가 주목된다.

위르겐 클린스만 감독이 이끄는 국가대표팀이 28일 오후 8시 서울월드컵경기장에서 우루과이와 A매치 친선전을 치른다. 지난해 11월 카타르 월드컵 조별리그 첫 경기에서 만난 이후 4개월 만의 맞대결이다. 당시 한국은 우루과이와 접전 끝에 0-0으로 비겼다. 조별리그 결과 두 팀이 똑같이 1승 1무 1패를 기록했으나 한국이 다득점에 앞서 16강에 극적으로 진출하고 우루과이는 탈락했다.

월드컵 이후 디에고 알론소 감독과 결별한 우루과이는 현재 대표팀 감독이 공석이다. 이번 경기는 마르셀로 브롤리 U-20 대표팀 감독이 감독 대행으로 팀을 지휘할 예정이다. 월드컵과 비교해 선수단에도 변화가 있다. 루이스 수아레스, 디에고 고딘, 에딘손 카바니 등 노장들이 제외됐으며 다르윈 누녜스, 로날드 아라우호 등은 부상으로 합류하지 못했다.

현재 우루과이의 FIFA 랭킹은 16위로 25위인 한국보다 높다. 한국과 우루과이의 역대 전적은 1승 2무 6패로 우리가 절대 열세다. 2018년 10월 서울에서 열린 친선경기에서 황의조와 정우영(알사드)의 골로 2-1로 이긴 것이 유일한 승리다. 만약 이번에 우루과이를 잡는다면 5년 만의 맞대결 승리를 거두게 된다.

우루과이를 상대하는 한국의 분위기는 나쁘지 않다. 지난 24일 열린 콜롬비아와의 경기에서 월드컵 멤버들이 주축을 이뤄 2-2 무승부를 기록했다.

‘캡틴’ 손흥민(토트넘)이 왼발과 오른발로 두 골을 기록하며 클린스만 감독의 공격 축구에서 진가를 발휘했다. 중원에서는 황인범(올림피아코스)이 볼 배급 역할을 충실히 했고, 교체 투입된 이강인(발렌시아)도 번뜩이는 재능을 과시했다. 측면 수비수 김진수(전북현대)가 콜롬비아전에서 허리 부상을 당했지만 이기제(수원삼성)가 교체 투입돼 제 역할을 다했다. 클린스만 감독은 부상으로 소집 해제된 김진수의 대체 선수로 설영우(울산현대)를 발탁했다.

우루과이전을 하루 앞둔 27일 파주NFC에서 열린 공식 기자회견에서 클린스만 감독은 “지난 콜롬비아전에서 좋은 경기를 펼쳤지만 후반 초반 두 번의 실수로 실점했다. 이제 시작하는 단계에서 실수는 당연하다. 실수를 통해 보완해야 한다”며 “우루과이도 콜롬비아와 마찬가지로 강호지만 우리도 좋은 팀이다. 좋은 경기를 할 수 있을 것”이라고 말했다.

수비수 김진수가 빠진 공백을 어떻게 메울 것인지에 대한 질문에는 “김진수가 부상으로 낙마해 안타깝다. 빨리 회복했으면 한다. 많이 그리울 것'이라며 '지난 경기에서 이기제가 들어와서 좋은 경기를 보여줬다. (대체 발탁한) 설영우는 한국에 와서 직접 경기를 봤다. 홍명보 감독님께 전화해 물어보기도 했다. 풀백 기용은 상대에 따라 달라질 것”이라고 밝혔다.

축구팬들의 관심을 한 몸에 받고 있는 이강인은 지난 콜롬비아전에서 교체로 출전해 30분 가량 뛰었다. 이강인 본인이나 팬들도 더 많은 출전시간을 원하는 분위기인데 이에 대해 클린스만 감독은 “이강인은 어리고 재능이 많은 선수다. 한국에서 인기가 많다는 것도 지난 경기에서 몸소 느꼈다”면서 “소속팀에서 계속 출전하면서 발전하면 더 좋은 선수가 될 것이다. 그러면 대표팀에서 출전시간도 늘어날 것이라 생각한다”는 견해를 밝혔다.`},{id:11,title:"클린스만호, 월드컵 리턴매치서 우루과이에 1-2 패",date:"2023-03-28",view:623,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680008860_73247891.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680008807_1055773231.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680008820_1481246599.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680008892_6030833.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680055113_862407492.jpg"],desc:`위르겐 클린스만 감독의 부임 후 첫 승은 다음 경기로 미루게 됐다. 남자축구 국가대표팀이 월드컵에서 맞붙었던 우루과이와의 평가전에서 패했다.

국가대표팀은 28일 서울월드컵경기장에서 열린 우루과이와의 A매치 친선경기에서 1-2로 졌다. 전반 10분 세바스티안 코아테스에게 헤더 선제골을 내준 한국은 후반 6분 황인범이 동점골을 기록했으나 후반 18분 마티아스 베시노에게 결승골을 허용했다. 이날 경기장에는 6만 3952명이 입장하며 전석 매진을 기록했다.

지난 24일 콜롬비아전을 2-2로 비긴 대표팀은 이번 2연전을 1무 1패로 마쳤다. 선수들은 소속팀으로 복귀해 경기를 소화한 뒤 오는 6월 A매치 기간에 다시 소집된다.

이날 경기는 카타르 월드컵의 리턴매치였다. 한국은 지난해 11월 월드컵 조별리그 첫 경기에서 우루과이와 만나 0-0으로 비겼다. 조별리그 결과 두 팀은 똑같이 1승 1무 1패를 기록했으나 한국이 다득점에서 앞서 16강에 진출했고, 우루과이는 탈락했다

4개월 만에 다시 만난 두 팀의 상황은 조금 달랐다. 한국은 파울루 벤투에서 클린스만 감독으로 사령탑이 바뀌었으나 선수단은 월드컵 멤버가 거의 그대로였다. 반면 디에고 알론소 감독과 결별한 우루과이는 마르셀로 브롤리 감독대행 체제 아래 젊은 선수들이 많이 가세했다. 이번 명단에서 루이스 수아레스, 에딘손 카바니, 디에고 고딘이 제외됐고, 다르윈 누녜스와 로날드 아라우호 등이 부상으로 빠졌다.

클린스만 감독은 지난 콜롬비아전과 비교해 4명이 달라진 라인업을 내세웠다. 황의조가 오랜만에 선발 출전했고, 지난 경기 교체로 투입됐던 이강인이 선발로 나섰다. 수비진에서는 허리 부상으로 소집 제외된 김진수 대신 이기제가 측면 수비수로 선발 출전했다. 골문은 김승규가 아닌 조현우가 지켰다.`},{id:12,title:"클린스만 감독 “황인범 직접 만나보니 더 뛰어난 선수”",date:"2023-03-28",view:813,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680011660_828394794.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680011520_484158338.jpg"],desc:`클린스만 감독은 A매치 2연전에서 맹활약한 황인범을 칭찬하며 앞으로도 대표팀에서 중요한 역할을 할 것이라 공언했다.

남자축구 국가대표팀이 28일 서울월드컵경기장에서 열린 우루과이와의 A매치 친선경기에서 1-2로 패했다. 국가대표팀은 전반 10분 세바스티안 코아테스에게 헤더골을 내준 뒤 후반 6분 황인범이 동점골을 기록했다. 그러나 후반 18분 마티아스 베시노에게 결승골을 허용하며 패했다. 

경기 후 기자회견장에 들어선 클린스만 감독은 “경기에 지면 누구나 기분이 좋지 않다. 그러나 선수들의 경기력에는 만족한다”며 “지난 경기와 다른 부분은 전반 20분 정도 우리의 리듬과 템포를 찾지 못했다. 특히 세트피스로 실점하면서 끌려가는 경기를 했다. 그러나 나머지 70분 경기에서는 훨씬 더 좋은 경기력을 보여줬다 생각한다”는 소감을 밝혔다.


다음은 클린스만 감독과의 일문일답.

- A매치 2연전을 치른 소감.
지난 열흘 간 선수들과 함께하며 너무나 행복한 시간이었다. 선수들이 10일 동안 계속 발전하고 싶어 하는 그런 모습들을 보며 앞으로의 여정이 기대됐다. 누구나 지는 것을 싫어해 기분은 좋지 않지만, 선수들이 보여준 경기력에 대해서는 칭찬하고 싶다. 김영권의 두 번째 득점이 취소된 것이 아쉽고, 그 득점을 했다면 분명 세 번째 득점으로 이어질 수 있었을 것 같다.

- 지난 콜롬비아전과의 차이점은.
지난 경기와 다른 부분은 전반 20분 정도 우리의 리듬과 템포를 찾지 못했다. 특히 세트피스로 실점하면서 끌려가는 경기를 했다. 그러나 나머지 70분 경기에서는 훨씬 더 좋은 경기력을 보여줬다 생각한다.  

- 황인범이 이번 A매치 2연전에서 좋은 활약을 펼쳤는데.
두 번의 평가전에서 남미의 강팀과 경기를 했다. 결과는 1무 1패이지만 경기력은 좋았다. 빠른 템포의 좋은 경기를 했다. 세계적인 축구의 흐름에 맞는 빠른 축구를 하기 위해서는 황인범 같은 선수가 필요하다. 전에도 알고 있었지만 직접 만나보니 더 뛰어난 선수인 것 같다. 황인범은 패스 길목 찾는 능력이 뛰어나 빠른 템포의 경기를 할 수 있도록 돕는다. 앞으로도 대표팀에서 아주 중요한 선수가 될 것이다.

- 2경기에서 수비진의 경기력이 아쉬웠다는 평가에 대해 어떻게 생각하시는지.
수비진의 경기력에는 만족한다. 세트피스로 실점했는데 이는 축구의 일부분이다. 전반전 발베르데의 유효슈팅 장면, 후반 프리킥 장면 이외에는 위협적인 장면이 없었고, 전체적으로 수비는 잘했다.  

때로는 포백 앞에 황인범과 정우영까지 내려와서 6명이 수비하거나 윙포워드까지 내려와 수비 진영을 갖췄다. 수비 조직력은 좋았다고 생각한다. 수비수들이 전방으로 공격적으로 나갈 때는 자유롭게 기량 펼쳤으면 좋겠다. 선수들의 기량을 운동장에서 펼칠 수 있도록 나도 돕겠다. 

- 세계적인 공격수 출신으로서 대표팀의 세 공격수(황의조, 조규성, 오현규)에 대해 평가한다면.
모두 좋은 선수이다. 지난 10일간 좋은 선수들과 훈련하며 매우 즐거웠다. 사실 이는 팀의 전술에 따라 다르다. 투톱일 수도 있고 원톱일 수도 있고, 투톱에 섀도 스트라이커를 세울 수도 있다. 오늘 경기 같은 경우는 상대 수비수의 신장이 높아서 공격수들이 힘들었을 것이다. 이외에도 공격수는 윙포워드, 풀백들과 어떤 연계와 호흡을 보여주는지가 중요하다. 특히 오현규는 아주 좋은 선수가 될 것 같다. 상당히 직접적이고 골을 넣고 싶어 하는 배고픔이 있다. 

- 손흥민을 프리롤로 기용하면서 미드필드진에서 이강인과의 호흡을 어떻게 보는지. 
좋은 경기 흐름을 이어가기 위해 두 선수를 끝까지 교체하지 않았다. 그러다 보니 9번 자리만 교체하고 미드필더 자리는 놔뒀다. 

손흥민은 세계 최고의 스트라이커이다. 손흥민의 장점을 팀에서 보여줄 수 있도록 전술을 꾸릴 것이다. 이를테면 이강인이 오늘 경기 손흥민을 도왔던 것처럼 여러 주변 선수들이 손흥민을 돕게 할 것이다.  

이강인은 오늘 너무 잘했다. 상대는 어려움을 겪었고, 이강인을 막기 위해 상대가 할 수 있는 건 파울뿐이었다. 이렇게 성장하는 모습을 보니 좋다. 선수의 성장을 돕는 것이 나의 역할이다. `},{id:13,title:"이강인 “책임감 느껴야 한다는 흥민이 형 말에 동의”",date:"2023-03-29",view:873,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680057151_1865782720.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1680057091_1588781345.jpg"],desc:`남자축구 국가대표팀의 핵심으로 떠오르고 있는 이강인(22, 마요르카)이 태극마크에 대한 책임감을 강조했다.

이강인은 28일 서울월드컵경기장에서 열린 우루과이와의 A매치 친선경기에 선발 출전해 풀타임 활약했다. 지난 콜롬비아전에서 교체 투입돼 30분 가량 뛰었던 이강인은 이날 경기 초반부터 강렬한 인상을 남겼다. 이강인은 두세 명의 수비수가 달라붙어도 유연한 드리블로 이들을 따돌리며 경기장을 찾은 팬들을 즐겁게 했다. 경기 후 클린스만 감독은 “우루과이 선수들이 이강인을 막을 수 있는 방법은 파울 밖에 없었다”며 이강인을 극찬했다.

하지만 한국은 이강인의 뛰어난 활약에도 불구하고 우루과이에 1-2로 졌다. 24일 콜롬비아전 2-2 무승부에 이어 이날 패배한 클린스만 감독은 첫 승 신고를 다음으로 미뤄야 했다.

경기 후 믹스트존(공동취재구역)에서 만난 이강인은 “선발 출전 기회를 잡을 수 있던 것에 큰 영광을 느끼고 많은 팬들이 찾아와줘 감사하다”며 “우리가 계획했던 플레이를 잘 펼쳤다고 생각하지만 팬들이 원하던 결과를 만들지 못 해서 아쉽다”고 전했다.

이날 경기에서 보여준 환상적인 드리블 돌파와 관련된 질문에는 “나 자신이 보여준 플레이에는 크게 신경 쓰지 않는다. 중요한 건 팀이기 때문에 팀 내적으로 더욱 단단한 모습을 보여주는 데에 집중하겠다”고 겸손해했다. 이어 그는 소속팀 마요르카에서와 달리 오른쪽 측면에 배치된 것에 대해서는 “어느 포지션에서 뛰는지는 중요하지 않다”며 “경기에 출전할 수 있다는 자체만으로 감사함을 느끼고 어떤 포지션에 배치되더라도 팀에 도움이 될 수 있는 방향이 무엇인지 고민하는 것 같다”고 전했다.

특히 이강인은 본인이 태극마크를 달고 대한민국 대표로 활약하는 것에 대해 조금 더 책임감을 느끼게 된다고 밝혔다. 앞서 대한민국 대표팀의 주장 손흥민은 믹스트존 인터뷰를 통해 이강인에게 책임감을 조금 더 가져야 하는 시기가 찾아왔다는 진심어린 조언을 남긴 바 있다.

이강인은 이에 대해 “모든 선수들이 절실함을 가지고 경기를 뛴다. 태극마크를 달고 대한민국 대표로 활약한다는 것은 그만큼의 무게가 찾아오는 것도 사실”이라며 “흥민이 형의 말에 크게 동의하고, 매 경기 더 좋은 결과를 낼 수 있도록 최선을 다할 것이다”라고 밝혔다.

마지막으로 이강인은 이날 경기에서 거둔 패배를 교훈 삼아 앞으로의 대회를 잘 준비하겠다는 각오를 보였다. 그는 “우루과이에게 패배한 건 분명 아쉽지만 이 또한 클린스만 감독님의 축구가 새롭게 입혀지는 과정이라고 생각한다. 앞으로 중요한 경기들이 많이 예정돼있을 텐데 우리가 오늘 기록한 패배는 추후에 분명 큰 도움으로 작용할 것”이라며 인터뷰를 마쳤다.`},{id:14,title:"6월 A매치 상대는 페루와 엘살바도르",date:"2023-04-21",view:1163,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1682040003_257687589.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1682039985_231733786.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1682039999_1883340751.jpg"],desc:`6월 국내에서 열리는 대한민국 축구 국가대표팀의 A매치 상대가 페루와 엘살바도르로 정해졌다.

대한축구협회(KFA)는 21일 '위르겐 클린스만 감독이 이끄는 대표팀이 오는 6월 16일 페루, 20일 엘살바도르와 '하나은행 초청 축구국가대표팀 친선경기'를 치른다'고 공식 발표했다. 경기 장소와 킥오프 시간은 미정이다.

두 경기 모두 FIFA가 정한 A매치 기간에 열리기 때문에 해외파 선수까지 모두 참가할 예정이다.

페루는 현재 FIFA 랭킹 21위로 27위인 한국보다 6계단 높다. 월드컵 본선에 총 5회 진출했으며, 가장 최근 출전한 대회는 2018 러시아 월드컵이다. 지난 카타르 월드컵은 대륙간 플레이오프에서 승부차기 끝에 호주에 패해 본선 진출에 실패했다. 남미 대항전인 코파아메리카에서는 2021년 대회에서 4강에 올랐다. 

한국은 각급 대표팀 경기에서 페루에 한 번도 승리를 거둔 적이 없다. 국가대표팀간 역대 전적은 2전 1무 1패다. 1971년 원정 친선경기에서 0-4로 졌고, 10년 전인 2013년 8월 수원에서 당시 홍명보 감독이 이끌었던 대표팀은 0-0으로 비겼다. 연령별 대표팀은 2007년 U-17팀과 2014년 U-15팀이 한 차례씩 맞붙어 두 번 모두 패했다.

북중미의 엘살바도르는 처음 맞붙는 상대다. FIFA 랭킹은 75위다. 월드컵 본선에는 두 번 진출했으나, 1982 스페인 월드컵이 마지막 진출이다. 최근 미국, 유럽 무대에서 활약 중인 엘살바도르 혈통의 선수들을 대표팀에 합류시키며 전력을 상승시키고 있다. 2021 북중미 골드컵에서는 8강에 올랐다.

페루는 9월부터 2026 북중미 월드컵 남미예선에 돌입한다. 엘살바도르는 6월 24일 개막하는 2023 북중미 골드컵을 앞두고 있다. 두 팀 모두 중요한 대회를 앞두고 최종 시험 무대로 한국을 방문하기 때문에 실전에 가까운 강도 높은 경기를 펼칠 것으로 예상된다. 두 팀 모두 일본과도 이번 A매치 기간에 경기를 치른다.`},{id:15,title:"유럽파 점검 마친 클린스만 감독, 귀국 후 꺼낸 첫마디는?",date:"2023-04-26",view:1062,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1682478565_799626942.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1682478211_402403658.jpg"],desc:`“지난 열흘 동안 상당히 유익한 시간이었다. 선수들뿐만 아니라 해당 구단의 지도자들을 만나며 많은 얘기를 했다. 앞으로도 차츰차츰 다른 선수들을 점검할 생각이다.”

클린스만 대한민국 축구 국가대표팀 감독이 약 열흘간의 유럽파 점검 일정을 마친 뒤 26일 오전 인천국제공항을 통해 귀국했다. 입국장에 들어선 클린스만 감독은 앞으로도 국가대표팀 선수들에 대한 점검과 소통을 이어갈 것이라 강조했다.

3월 친선경기 일정을 마친 뒤 4월 초 미국으로 출국했던 클린스만 감독은 14일 유럽으로 이동해 대표팀 선수단의 경기를 관전해 왔다. 영국, 이탈리아, 독일을 오가며 손흥민(토트넘), 오현규(셀틱), 김민재(나폴리), 이재성(마인츠), 정우영(프라이부르크)의 경기를 차례로 관람했다.

유럽파 점검을 마친 클린스만 감독의 눈은 이제 K리그로 향한다. 국내에서 활약하는 선수들을 위주로 국가대표팀 선수들을 점검할 계획이다. 귀국 첫날 곧바로 전주로 향해 오후 7시 30분에 열리는 전북현대와 대전하나시티즌의 K리그1 경기를 관전한다.

이후 5월 7일에는 카타르 도하로 출국해, 2023 AFC 아시안컵 조 추첨식에 참석한 뒤 현지 숙소와 경기장, 훈련장 등을 둘러볼 예정이다. 또한 6월에는 국내에서 각각 16일에 페루, 20일에 엘살바도르와 친선경기를 치른다.


다음은 입국장에서 만난 클린스만 감독과의 일문일답.

- 유럽파 점검을 마치고 돌아온 소감.
이렇게 많은 분들이 또 와 주셔서 감사하다. 지난 열흘 동안 상당히 유익한 시간이었다. 저뿐만 아니라 나머지 코치들도 선수들을 관전했다. 선수들과 해당 구단의 지도자들을 만나며 많은 얘기를 했다. 이번에는 시간상 모든 선수들을 만나지 못했지만 앞으로 차츰차츰 경기를 찾아가며 선수들을 만날 생각이다.

- 이번 점검의 가장 큰 관심사가 김민재(나폴리)의 마음 달래기였을 것 같다. 어떤 얘기가 오갔는지.
일단 김민재 뿐만 아니라 모든 선수들과 만났을 때 선수들이 모두 긍정적이었다. 대표팀 감독, 코치가 이렇게 직접 와서 만난 것에 대해 상당히 고마워한다는 느낌을 받았다.
김민재는 (내가 관전한) 경기에 출전하지는 못했지만, 오히려 조금 더 여유를 갖고 만날 수 있어 좋았다. 김민재가 거주하는 이탈리아 나폴리 근처에서 같이 식사하며 많은 얘기를 나눴다. 김민재가 개인적으로 현재 느끼는 감정이나 이런 부분들도 얘기했고, 지금은 상당히 많이 안정됐다. 다음 대표팀 소집도 기대하고 있다고 했다. 지난 유벤투스와의 경기에서 상당히 좋은 활약을 펼쳤는데 또 그렇게 계속 좋은 모습을 보였으면 하는 바람이다.

- 이전에 뛰었던 토트넘 구단에 가서 감회가 남달랐을 것 같다. 해당 경기에서 손흥민(토트넘)이 골을 넣기도 했는데, 손흥민과는 어떤 이야기를 나눴는지.
토트넘은 제가 뛰었던 팀이고, 영국에서 제가 가장 사랑하는 구단이다. 이번주와 지난주에 대패하며 개인적으로 안타까움을 느끼고 있다. 다들 아시겠지만 감독 대행의 대행을 선임한 상황인데, 많은 경기가 남아 있지 않으므로 최대한 빠르게 수습해서 좋은 결과를 가져올 수 있기를 바라고 있다.
손흥민과 개인적으로는 경기 전에 대화를 나눴고, 이후 경기에서 득점까지 하며 상당히 기분이 좋았다. 그런데 경기 결과가 아쉽게 돼서 저도 많이 아쉬웠다. 손흥민은 본인의 역할에 충실하고 있지만, 선수가 관여할 수 없는 부분도 있다고 생각한다.

- 아직 시간이 많이 남았지만, 6월 소집 명단에 어떤 변화가 있을지 궁금하다.
아직 시간이 있기 때문에 6월 소집 명단 발표 전까지 최대한 많은 경기를 또 관전하며 선수들을 체크할 예정이다. 제가 유럽에서 바쁘게 또 선수들을 만날 때 또 국내에서는 차두리 테크니컬 어드바이저와 마이클 킴 코치가 활발하게 K리그 경기를 관전하고 있었다. 최근 좋은 모습을 보인 선수들이 새롭게 소집될 기회도 열려 있다.
당장 U20 월드컵도 코 앞으로 다가왔다. 인도네시아에서 아르헨티나로 개최지가 변경되는 어려움이 있지만, 여기서 활약하는 선수들도 지켜볼 것이다. 팀도 분명 좋은 성적을 내길 응원한다. 어린 선수들에게도 기회가 될 수 있다.

- 이강인(마요르카)이 나날이 좋은 활약을 펼치고 있다. 여러 팀과 이적설도 나오고 있는데, 가장 어울리는 팀은.
먼저 이강인이 좋은 활약을 보여주는 것에 감독으로서 상당히 만족한다. 지난 우루과이전에서도 국내에서 좋은 모습을 보였다. 또 소속팀에서 계속 경기를 뛰며 득점하는 모습에 상당히 뿌듯하다. 
현 소속팀(마요르카)도 좋은 팀이라 생각한다. 물론 더 큰 구단에서 러브콜이 오면 선수로서는 당연히 기쁠 것이지만 그게 중요한 건 아니다. 현재도 충분히 좋은 환경 속에 있기 때문에 지금 활약대로 계속 좋은 모습을 보여주기를 희망하고 있다.

- 선수들을 한 명씩 만나보며 몰랐던 속내나 고충을 듣고 느낀 바가 있다면.
특별히 이거다라고 말씀드리기는 어렵다. 선수들의 경기뿐만 아니라 어떤 환경에서 지내고 있는지, 그 환경 안에서 이 선수가 어떤 모습을 보이는지가 중요하다. 물론 모든 선수들을 다 제가 직접 만나면 좋겠지만, 아시다시피 여러 행사 때문에 그럴 시간적 여유는 없었다.
오현규(셀틱)의 경우, 셀틱 경기를 직접 관전하러 갔었다. 더 많은 출전 시간을 보여주면 좋겠지만 소속팀이 워낙 좋은 팀이다. 그러나 그 안에서 본인의 배고픔을 봤다. 선발이나 많은 경기 출전을 위해 싸우려고 하는 모습과 의지, 투쟁심을 확인할 수 있었다. 또 이재성(마인츠)은 제가 경기를 보러 갔을 때 바이에른 뮌헨이라는 빅클럽을 이기면서 좋은 흐름을 타고 있다.
해당 구단의 지도자들도 만나며 선수가 처한 환경이 어떤 상황인지 이해하려고 한다. 어려운 시기도 좋은 시기도 있겠지만, 그럴 때마다 이 선수들이 저를 포함한 대한축구협회(KFA) 일원들과 함께하고 있다는 것을 알았으면 좋겠다. 그렇게 저희가 계속 관계를 유지해야 한다고 생각한다. 
그렇다고 해서 선수들이 꼭 유럽에 나가서 활약해야 한다는 건 아니다. K리그에도 좋은 기회, 좋은 팀이 있으면 국내에서 뛰어도 된다. 일본이나 중국 등 아시아 지역을 포함해 어디에서 활약하든지 계속 선수들을 관찰할 것이다. 

- UEFA 자문위원회 위원으로 활동하고 있는데, 한국 축구 국가대표팀에 어떤 긍정적인 영향을 미칠지. 
개인적으로는 상당히 영광스럽다. 위원회 명단을 다 보셔서 알겠지만, 이들과 함께한다는 게 영광스럽고 또 많은 것을 배울 수 있는 유익한 자리이다.

자문위원회에서는 축구 규정에 대해 많은 논의를 한다. 규정이라고 하면 VAR이나 핸드볼 파울 등이 예시가 된다. 위원들 모두 현역 시절에 좋은 선수였기 때문에, 회의를 통해 행정적으로 어떻게 반영할 수 있는지 그런 논의를 많이 하고 있다.`},{id:16,title:"클린스만호, 내년 아시안컵서 말레이-요르단-바레인과 한 조",date:"2023-05-11",view:1243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1683806986_460128669.png",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1683806979_1397904169.png"],desc:`위르겐 클린스만 감독이 이끄는 남자 축구국가대표팀이 내년 1월 카타르에서 열리는 2023 아시아축구연맹(AFC) 아시안컵에서 김판곤 감독이 이끄는 말레이시아와 중동의 복병인 요르단, 바레인을 만나게 됐다.

11일(한국시간) 카타르 도하의 카타라 오페라 하우스에서 2023 AFC 아시안컵 조추첨식이 열렸다. 조추첨 결과 한국은 말레이시아, 요르단, 바레인과 E조에 속하게 됐다. 한국은 국제축구연맹(FIFA) 랭킹이 이번 대회 출전국 중 3번째로 높은 27위로 1번 포트에 속해 개최국 카타르를 비롯해 일본, 이란, 호주, 사우디아라비아 등 강호를 피하게 됐지만 만만치 않은 상대들과 조별리그에서 붙게 됐다.

말레이시아는 한국인 김판곤 감독이 이끄는 팀이다. 말레이시아와의 역대 전적은 26승 12무 8패로 한국이 앞서있으나 김판곤 감독이 한국의 특성을 잘 알고 있어 방심할 수 없다.요르단은 우리가 지금까지 한 번도 패한 적이 없는 상대다. 한국은 요르단과의 역대 전적에서 3승 2무를 기록하고 있다.

바레인은 아시안컵 본선에서 우리가 자주 상대했던 팀이다. 바레인과의 전적은 11승 4무 1패이며 아시안컵 본선에서는 3차례 만나 2승 1패를 거두고 있다. 지난 2019년 열린 아시안컵 16강전에서는 황희찬과 김진수의 연속골로 한국이 2-1로 승리했다.

조추첨식에 참석한 클린스만 감독은 “아시아 팀들이 모두 좋은 전력을 가지고 있어 쉬운 그룹은 없다. 상대 팀이 얼마나 강한지 연구해야 하고, 또 말레이시아에는 한국인 코치가 있어 특별하다”는 소감을 밝혔다. 이어 그는 “우리는 조별리그를 통해 대회 끝까지 가는 것이 목표”라며 “우리에게 좋은 대진”이라고 말했다.

또한 클린스만 감독은 “대회 개막 전에 카타르나 중동 지역에서 한두 차례 평가전을 하면 좋겠다”면서 “카타르는 지난해 월드컵을 치렀기 때문에 숙소나 훈련 시설은 모두 훌륭하다고 생각한다”고 했다. 클린스만 감독은 경기장, 훈련장 등 현장 답사를 마치고 귀국한다. 

이번 아시안컵은 내년 1월 12일부터 2월 10일까지 도하, 알라이얀을 중심으로 8개 경기장에서 열린다. 총 24개 팀이 4개국씩 6개 조로 나뉘어 조별리그를 펼치며 각 조 1,2위 12개 팀에 더해 3위 중 성적이 좋은 상위 4개 팀이 16강 토너먼트로 우승자를 가린다. 이번 아시안컵은 원래 6~7월 중국에서 열릴 예정이었으나 코로나19로 중국이 개최권을 반납하면서 카타르로 개최지가 바뀌었다.

한국은 이번 아시안컵에서 64년 만의 우승 도전에 나선다. 한국은 초대 대회인 1956년과 2회 대회인 1960년 우승한 이후 아직 정상에 오르지 못했다. 가장 최근 열린 2019년 UAE 대회에서는 8강까지 올랐다.

한편, 대표팀은 오는 6월 16일 페루, 20일 엘살바도르와 국내에서 A매치 친선경기를 치른다. 경기장 및 킥오프 시간은 아직 정해지지 않았다.`},{id:17,title:"6월 A매치 페루전 부산, 엘살바도르는 대전에서",date:"2023-05-16",view:26243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1684220349_1777124866.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1684220215_1556138054.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1684220279_1153597221.jpg"],desc:`대한축구협회는 다음달 16일과 20일 열리는 '하나은행 초청 축구국가대표팀 친선경기' 2연전 장소를 부산과 대전으로 확정했다고 16일 발표했다.

위르겐 클린스만 감독이 이끄는 축구대표팀은 먼저 6월 16일 부산 아시아드 주경기장에서 페루를 상대한다. 이어 20일에는 대전 월드컵경기장에서 엘살바도르와 대결한다. 킥오프 시간은 두 경기 모두 저녁 8시다. 

부산에서 A매치가 치러지는 것은 지난 2019년 12월 E-1 챔피언십(동아시안컵) 이후 3년 6개월만이다. 당시 파울루 벤투 감독이 지휘한 우리 대표팀은 3전 전승으로 대회 우승을 차지한 바 있다. 부임 이래 1무 1패를 기록 중인 클린스만 감독이 페루를 상대로 부산에서 첫 승을 거둘 수 있을지 주목된다.`},{id:18,title:"축구대표팀, 웨일스와 9월 친선경기 확정",date:"2023-05-29",view:2243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685342057_1117342491.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685342006_1030563498.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685342007_2090027478.jpg"],desc:`위르겐 클린스만 감독이 이끄는 축구국가대표팀의 9월 유럽 원정경기 첫 상대가 웨일스로 정해졌다. 

대한축구협회는 오는 9월 7일 웨일스와 국가대표팀 친선경기를 갖기로 웨일스 축구협회와 합의했다고 29일 발표했다. 장소는 웨일스의 카디프시티 스타디움이며, 경기 시간은 미정이다.

대표팀이 유럽에서 현지 국가를 상대로 어웨이 경기를 갖는 것은 지난 2018년 3월 북아일랜드, 폴란드 원정 이후 5년 6개월만이다.  2020년에 오스트리아, 2022년에는 튀르키예에서 친선경기를 치른 적은 있으나 그때는 제3국 팀을 상대로 중립경기 형식으로 치렀다. 

웨일스와의 대결은 FIFA가 정한 9월 A매치 데이 기간 중의 첫번째 경기다. 두번째 경기 상대는 아직 정해지지 않았다. 유럽팀들 대부분이 이 기간에 유럽선수권대회(유로2024) 예선을 치르기 때문에 다른 대륙 팀들을 물색하는 중이다.

한국과 웨일스가 A매치에서 맞붙는 것은 이번이 처음이다. 현재 FIFA 랭킹은 웨일스가 26위로 27위인 한국보다 한 계단 높다. 웨일스는 지난해 카타르 월드컵에서 64년 만에 월드컵 본선 무대에 나섰으나, 조별리그에서 1무2패로 16강 진출에 실패했다. 유럽선수권에서는 최근 두 차례 대회에서 4강(2016년)과 16강(2021년)에 올랐다.

세계적 스타 라이언 긱스, 가레스 베일이 활약했던 웨일스 대표팀은 현재는 손흥민의 토트넘 동료로 국내 팬들에게도 친숙한 벤 데이비스와 아론 램지(니스, 프랑스)가 주축이다.`},{id:19,title:"페루, 엘살바도르 A매치 입장권 5일부터 차례로 판매",date:"2023-06-02",view:36243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685685190_202799825.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685684959_1033293906.jpg"],desc:`대한축구협회는 페루와 엘살바도르를 상대로 치르는 '하나은행 초청 축구국가대표팀 친선경기' 입장권을 5일부터 차례로 판매한다고 밝혔다. 클린스만 감독이 이끄는 축구대표팀은 오는 16일 부산아시아드주경기장에서 페루와, 20일 대전월드컵경기장에서 엘살바도르와 맞붙는다. 두 경기 모두 저녁 8시에 킥오프된다.

입장권은 대한축구협회의 온라인 판매 사이트 PLAYKFA 를 통해 판매한다. 일부 수량은 하나은행의 모바일 앱 '하나원큐'에서도 구입할 수 있다. 1인당 최대 4매까지 살 수 있다. 

티켓이 매진되지 않을 경우에는 경기 당일 오후 2시부터 경기장 매표소에서 현장판매를 한다. 다만, 휠체어석과 동반자석은 복지카드 소지 여부와 휠체어 탑승을 확인해야 하기 때문에 현장 판매만 한다.

16일 부산에서 열리는 페루전은 5일부터 플레이KFA 회원을 대상으로 선예매를 먼저 실시한다. ‘Red’ 회원은 오후 7시부터, ‘Black’ 회원은 오후 8시부터 구매할 수 있다. 선예매는 1인당 2매씩 살 수 있으며, 이후 일반 예매가 시작될 때 추가로 2매를 더 살 수 있다. 회원 등급은 플레이KFA 사이트의 마이페이지에서 확인할 수 있다.

페루전 일반 판매는 6일 오후 7시부터 시작된다. 1등석은 8~11만원, 2등석은 4~6만원이다. 3등석은 3만원, 응원석인 레드석은 3만5천원에 판매한다. 휠체어석은 4만원이고 휠체어 동반자석은 8만원이다. 

20만원인 프리미엄A석 구매자에게는 국가대표 유니폼 레플리카를 선물로 준다.

두 사람이 앉을 수 있는 테이블석은 프리미엄 테이블석과 상층 테이블석으로 구분돼 각각 40만원, 14만원에 판매된다. 프리미엄 테이블석에는 대표팀 유니폼 레플리카가 제공된다.


대전에서 열리는 엘살바도르전은 8일에 플레이KFA 회원에게 선예매 기회가 주어진다. 페루전과 마찬가지로 ‘Red’ 회원은 오후 7시부터, ‘Black’ 회원은 오후 8시부터 구매할 수 있다.

일반 판매는 9일 오후 7시부터 시작된다. 티켓 가격은 페루전과 같다. 1등석 8만원~11만원, 2등석 4~6만원, 3등석 3만원, 응원석 3만 5천원, 휠체어석 4만원, 휠체어 동반자석 8만원이다.

테이블석은 2인, 4인, 5인 3종류로 판매하며 가격은 각각 16만원, 36만원, 45만원이다. 6인 데크석은 60만원에 판매한다. 국가대표팀 레플리카가 제공되는 프리미엄 A석은 20만원이다.

엘살바도르전은 E석 스카이박스도 판매한다. 6인실로 가격은 300만원이다.

두 경기의 입장권 등급별 좌석 위치와 가격 등 자세한 정보는 대한축구협회의 홈페이지와 SNS, 플레이KFA 홈페이지를 통해 확인할 수 있다.`},{id:20,title:"클린스만호, 6월 페루-엘살바도르 2연전 명단 발표",date:"2023-06-05",view:10623,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685926352_891086148.png",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685926170_886405727.png"],desc:`위르겐 클린스만 남자축구 국가대표팀 감독이 6월 페루-엘살바도르와의 2연전에 나설 대표팀 명단을 발표했다. 안현범(제주유나이티드), 홍현석(KAA헨트, 벨기에), 박용우(울산현대)가 처음으로 대표팀에 승선했다.

대한축구협회(KFA)는 6월 A매치 2연전을 앞두고 23명의 소집명단을 5일 발표했다. 3월에는 26명을 뽑았는데 이번에는 23명을 선발해 명단에 추가되는 선수가 나올 수 있다. 또한 중국에 형사 구류 중인 손준호(산둥 타이샨, 중국)도 상황에 따라 대체 선수를 뽑아야 할 수 있어 명단은 유동적이다.

지난 3월 A매치 당시에는 지난 FIFA 카타르 월드컵 멤버를 대부분 뽑았던 클린스만 감독은 이번 명단에는 자신의 색깔을 어느 정도 드러냈다. 수비진의 변화가 두드러진다. 안현범이 생애 최초로 대표팀에 발탁됐다. 김영권(울산현대), 김민재(나폴리, 이탈리아), 조유민(대전하나시티즌) 등 센터백 자원이 대거 빠진 가운데 A매치 경험이 많지 않은 김주성(FC서울)도 클린스만 감독의 부름을 받았다. 

중원에는 벨기에 리그 KAA 헨트에서 활약하는 홍현석이 최초로 대표팀에 이름을 올렸다. 더불어 중원에도 부상 공백이 있는 관계로 원두재(김천상무), 박용우(울산현대) 등 기존에 대표팀에 자주 오지 못했던 선수들이 들어오게 됐다. 손흥민, 이강인, 이재성, 황희찬 등 주축이 되는 해외파들은 모두 승선했다.

대표팀은 오는 12일 소집한다. 이후 16일 오후 8시 부산 아시아드 주경기장에서 페루, 20일 오후 8시 대전월드컵경기장에서 엘살바도르와 A매치 2연전을 치른다.


축구국가대표팀 6월 소집명단(총 23명)
GK : 김승규(알샤밥, 사우디아라비아) 조현우(울산현대) 송범근(쇼난 벨마레, 일본)
DF : 박지수(포르티모넨세, 포르투갈) 김주성(FC서울) 권경원(감바 오사카, 일본) 안현범(제주유나이티드) 김진수(전북현대) 이기제(수원삼성) 설영우(울산현대)
MF : 손준호(산둥 타이샨, 중국) 홍현석(KAA 헨트, 벨기에) 원두재(김천상무) 황인범(올림피아코스, 그리스) 이재성(마인츠, 독일) 박용우(울산현대) 이강인(마요르카, 스페인) 손흥민(토트넘, 잉글랜드) 황희찬(울버햄튼, 잉글랜드) 나상호(FC서울)
FW : 황의조(FC서울) 조규성(전북현대) 오현규(셀틱, 스코틀랜드)`},{id:21,title:"클린스만 감독 “연령별 대표팀과 지속적으로 소통하고 있다”",date:"2023-06-05",view:1231,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685929883_4184535.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1685929872_923748886.jpg"],desc:`남자축구 국가대표팀 감독을 이끌고 있는 위르겐 클린스만 감독은 선수 차출을 두고 아시안게임 대표팀(24세 이하)을 이끌고 있는 황선홍 감독과 지속적으로 소통하고 있다고 밝혔다.

대한축구협회(KFA)는 6월 페루-엘살바도르와의 2연전에 나설 대표팀 명단을 5일 발표했다. 안현범(제주유나이티드), 홍현석(KAA헨트, 벨기에), 박용우(울산현대)가 처음으로 대표팀에 승선했다.

명단 발표 이후 기자회견에 나선 클린스만 감독은 연령별 대표팀 사령탑과의 소통을 강조했다. 현재 황선홍 감독이 이끄는 아시안게임 대표팀은 9월 아시안게임을 앞두고 훈련에 박차를 가하고 있다. 6월 A매치 기간에는 중국에서 두 차례 평가전(15일, 19일)이 예정돼있다.

불가피하게 A대표팀과는 선수 차출 중복 문제가 생길 수도 있는데 클린스만 감독은 이를 의식한 듯 “황 감독과 지속적으로 대화하고 있다”고 밝혔다. 더불어 그는 “김은중 감독과도 대화를 나눴다”면서 “연령별 대표팀은 A대표 배출의 기반이 되는 팀이다. 앞으로 다가올 몇 년 동안 성장해 A대표팀의 일원이 될지 지켜보는 것도 흥미로울 것”이라고 말했다.

다음은 클린스만 감독과의 일문일답.


- 6월 명단 발탁 배경은?
지난 두 달 동안 한국 팬들이 아주 기뻤을 것이다. 김민재가 세리에A를 들어올리는 모습은 한국축구 관련자로서 자랑스러웠다. 김민재는 평생 그 기억 속에 살아갈 경험을 했을 것이다. 손흥민과 오현규도 살펴봤다. 오현규는 우승 트로피를 상당히 많이 들어올렸다. 홍현석이 포함됐는데 올 시즌 상당히 좋은 경기를 보여줬다. 직접 만나고 오면서 바쁜 두 달을 보냈다.
우리는 도전적인 부분을 계속 발전시켜야 한다. 올해는 그런 부분을 같이 할 수 있는 한 해라고 본다. 9월에는 아시안게임이 있고, 오늘은 U-20 월드컵에서 좋은 결과를 냈다. 두 대표팀 감독님과 계속 소통하고 선수들도 모니터링하고 있다. A대표팀까지 올라올 수 있는지 논의하고 있다. 내년 1월 아시안컵이 가장 중요하다. 그때까지 명단이 어떻게 바뀔지 흥미로울 것 같다.
아시안컵 조추첨도 완료됐다. 더 많은 준비를 할 시기가 됐다. 누가 최종적으로 카타르에 갈지 11월까지 선수들을 지켜보면서 아시안컵 준비를 철저히 하겠다.

- 손준호가 명단에 포함됐다. 중국에 형사 구류 중인데 한국에 올 수 있나?
마음이 아프다. 협회 차원에서 할 수 있는 일을 다 하고 있고, 도와줄 일을 찾고 있다. 최대한 집에 빨리 돌아올 수 있도록 도와주고 최선을 다하는 게 우리가 할 일이다.

- 손준호가 구금이 풀린다고 해도 정상 컨디션이 아닐텐데 오히려 자리 하나를 소비하는 것은 아닌가?
손준호를 100% 서포트하고 있다는 이야기를 하고 싶었다. 최대한 도와줄 것이다. 이 명단이 다음 주 소집 때 바뀔 수도 있다. K리그 주중 및 주말 경기가 있고, 유럽과 J리그 선수들도 봐야 한다. 24세 대표팀 친선경기도 있다. 대표팀 감독으로서 지속적인 변화 속에서 최선의 선택을 해야 한다. 23명의 선수도 경쟁력이 있는 선수다. 물론 선수를 더 뽑을 수 있었지만 대표팀 특성상 언제든 선수가 바뀔 수 있고, 또한 선수를 지속적으로 모니터링하고 있다.

- 수비형 미드필더에 원두재, 박용우 등 새로운 얼굴이 보인다.
알사드 정우영은 시즌 후 작은 수술을 받아서 부상으로 함께하지 못하게 됐다. 원두재의 경우 김천상무 경기를 봤는데 군팀에 대해 많이 알게 됐다. 한국축구를 하나씩 배워가고 있다. 코치들이 출장 다니며 지켜본 선수들이 합류했다. 한국을 대표하는 선수들이 있는 곳에서 지속적으로 경기를 지켜보면서 경기력을 체크했다. 이것은 모두 아시안컵에 대한 준비 과정이다. 최선의 조합을 찾고, 최고의 팀을 아시안컵까지 만들어야 한다.

- 3월 명단과 비교해 공격진은 변화가 없다. 황의조, 조규성, 오현규에게 어떤 점을 기대하고 있나?
스트라이커는 득점으로 평가받는다. 감독으로서 매 경기 득점하길 바란다. 조규성이 득점해 기분이 좋았고, 오현규를 보러 갔을 때도 득점하길 바랐다. 올 시즌 주로 교체 출전해 어려움이 있었을 것이다. 이번 명단에 든 3명의 선수는 더 많이 보여줄 수 있다. K리그에 더 많은 골을 넣는 공격수가 있지만 우리가 생각하는 부분이 있다. 잠시 경기력이 안 좋거나 득점 못하는 시기가 있지만 그런 선수를 도와주는 것이 나의 역할이다.

- 아시안게임 대표팀과 조율이 필요했는데 그게 어느 정도 반영이 됐나?
황선홍 감독, 김은중 감독과 계속 대화한다. 프라이부르크 정우영이 빠졌는데 대화를 한 결과다. 정우영은 부상 선수가 생기면 A대표팀에 필요할 상황이 생길 수 있다.

- 수비진 변화가 크다. 김민재, 김영권이 군사훈련과 부상으로 뛸 수 없는데 어떻게 준비할 것인가? 안현범을 발탁한 이유도 설명해달라.
대표팀 감독으로서 부상이나 예상치 못한 상황들이 어려움으로 다가올 때가 있다. 저의 역할은 주어진 환경에서 최선의 선택을 하는 것이다. 수비 라인 변화가 크다. 지속적인 경기력과 리듬을 유지했으면 하는데 6월에는 어려울 것 같다.
안현범은 직접 경기를 보진 못했고, 토요일 경기를 볼 예정이다. 빠르고, 일대일에 강하고, 저돌적이고 측면 플레이를 잘 한다. 이강인도 그런 스타일인데 그런 공격적인 선수를 보는 게 감독으로서 기쁘다. 예상치 못한 상황들이 다른 선수들에게 기회를 부여하는 것 같다. 새로 온 선수들이 잘 했으면 한다. 하루, 이틀은 긴장할 수 있지만 자신감 있게 실력을 100% 발휘할 수 있도록 도와주는 게 내 역할.

- K리그 플레이 스타일이나 경기력 수준은 어느 정도로 보고 있나?
매번 새로운 리그를 관전하는 건 즐겁다. 디테일을 보며 배우고 있다. 선수와 지도자 스타일을 배우고 있다. 어느 리그나 마찬가지로 좋은 경기도 있지만 지루한 경기도 있다. 선수 풀은 최대한 빠르게 좁히려고 한다. 대표팀 능력에 맞는 선수 후보군을 좁히려 한다. 김진수는 큰 부상으로 못 올 줄 알았는데 기적처럼 회복해 오게 됐다. 다시 보게 돼 반갑다. 그밖에 연령별 대표팀 감독님과도 이야기하며 지켜보고 어떻게 성장하는지 지켜보고 있다. 연령별 대표팀은 A대표 배출 기반이 되는 팀이다. 앞으로 다가올 몇 년 동안 성장해 대표팀 일원이 될지 지켜보는 것도 흥미로울 것이다“`},{id:22,title:"[페루전 프리뷰] 실질적 클린스만호 1기, 첫 승에 도전한다",date:"2023-06-15",mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686795953_302301621.jpg",view:13523,img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686795911_392380106.jpg"],desc:`64년 만의 아시안컵 우승을 정조준하는 클린스만호가 페루를 상대로 첫 승에 도전한다.

위르겐 클린스만 감독이 이끄는 남자 축구 국가대표팀이 16일 오후 부산 아시아드주경기장에서 페루와 A매치 친선경기를 치른다. 한국과 페루 대표팀의 역대 상대 전적은 1무 1패로 한국이 밀린다. 가장 최근 수원에서 열린 2013년 8월 친선경기에서 양 팀은 0-0 무승부를 거뒀다.

클린스만 감독은 경기를 하루 앞둔 15일 오전 공식 기자회견에서 “3월 콜롬비아전과 비슷한 양상이 될 것 같다. 페루가 우리를 불편하게 만들 것”이라며 “지난 3월 소집과는 차이점이 있다. 유럽에서 뛰는 선수들은 시즌이 끝나고 1주일 전부터 파주에서 준비했고, K리그 선수들은 시즌 중이라 뒤늦게 합류했다. 선수들의 몸상태와 준비상태 모두 다르지만, 3월의 좋은 경기력을 유지하도록 노력하겠다”고 운을 뗐다.

이번 대표팀은 실질적인 클린스만호 1기로 꼽힌다. 지난 3월 부임한 클린스만 감독은 콜롬비아, 우루과이와 A매치 2연전 후 국내외를 오가며 대표팀 선수들의 몸 상태를 점검했다. 그 결과 이번 소집 명단에는 박규현(디나모 드레스덴, 독일), 박용우(울산현대), 안현범(제주유나이티드), 홍현석(KAA헨트, 벨기에) 등 A매치 출전 경험이 없는 선수들이 새롭게 합류했다. 클린스만 감독은 2연전을 통해 이들을 점검하고, 부임 후 첫 승에 도전한다는 각오다.

그러나 대표팀의 상황은 녹록지 않다. 먼저 시즌 종료 후 스포츠 탈장 수술을 받은 캡틴 손흥민의 출전 여부가 불투명하다. ‘수비의 핵’ 김영권(울산현대)과 김민재(나폴리)의 센터백 조합도 볼 수 없다. 김영권은 허벅지 뒤 근육 부상으로 명단에서 일찌감치 제외됐고, 김민재는 15일 육군훈련소에 입소해 3주간 기초군사훈련을 받는다.

이에 대해 클린스만 감독은 “손흥민은 몸상태로 인해 출전이 불투명하지만, 적어도 벤치에서 함께할 것이다. 내일까지 상황을 봐야 하고, 조금이라도 출전할 수 있는 희망을 보고 있다”며 “대표팀에서는 지속성과 연속성이 가장 중요하다. 경기 수가 적어서 지속성을 보여주는 데 어려움은 있지만, 옆에 있는 김승규를 비롯해 함께하는 선수들의 리더십을 통해 잘 준비하겠다”고 강조했다.

아울러 클린스만 감독은 손흥민을 대신해 골키퍼 김승규가 주장 완장을 차고 경기에 나설 것이라 밝혔다. 기자회견에 동석한 김승규는 “새로운 수비 명단과 경기를 뛰게 된다. 아시안컵 같은 대회에서 어떤 상황이 발생할지 모르기 때문에, 바뀐 멤버와도 호흡을 잘 맞추며 무실점 경기를 치르겠다. 훈련에서 충분히 잘하는 선수들이니, 이들의 마음을 편하게 해주는 것이 중요할 것”이라고 자신의 역할에 대해 말했다.

끝으로 클린스만 감독은 “20세 대표팀이 월드컵에서 4강에 진출했고, 9월에는 항저우 아시안게임도 예정돼있다. 어린 선수들이 A대표팀에 걸맞은 선수로 성장할 수 있도록 해야 한다”고 언급하며 “아시안컵을 앞두고 경쟁은 시작됐고, 이번 명단에도 어린 선수들이 다수 포함됐다. 모든 선수가 카타르를 향한 열망을 보여주길 바란다”며 치열한 경쟁을 예고했다.`},{id:23,title:"대표팀 유니폼에 축구종합센터 홍보 패치 부착",date:"2023-06-16",view:721,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686877393_942770273.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686795911_392380106.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686795935_973587471.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686795949_1336888984.jpg"],desc:`축구 대표팀 유니폼에 내년 건립되는 대한민국축구종합센터를 홍보하는 패치가 부착된다.

대한축구협회는 오늘(16일)과 20일 열리는 <하나은행 초청 축구국가대표팀 친선경기> 페루, 엘살바도르전에 나설 우리 대표선수들의 유니폼에 축구종합센터 홍보 패치를 붙인다고 밝혔다.

부착 위치는 유니폼 왼쪽 소매다. 패치에는 ‘함께 그리는 내일 - 대한민국축구종합센터’ 글자가 새겨지고, 축구종합센터의 메인 스타디움을 형상한 이미지가 함께 들어간다.

그동안 대표팀 유니폼에 FIFA가 제안하는 페어플레이와 리스펙트(존중) 캠페인 문구, 또는 참가한 대회 명칭을 패치로 붙인 적은 있었지만, 대한축구협회의 주요 사업을 홍보 패치로 부착하는 것은 이번이 처음이다.

대한축구협회는 엘살바도르전이 끝난 뒤 일반 팬들을 대상으로 대표 선수들이 직접 사인한 패치 부착 유니폼을 경매할 예정이다. 경매를 통해 얻은 수익금은 모두 축구종합센터 건립 기금에 보태기로 했다.

또 이번 A매치 경기 당일에는 운동장 주변에 축구종합센터 홍보용 부스를 설치해, 패치 등 관련 물품을 판매하고 홍보 영상도 상영할 계획이다.

대한축구협회는 “우리나라 축구 인프라의 새로운 전환점이 될 축구종합센터가 건립중에 있음을 널리 알리고, 축구팬들이 건립에 동참할 수 있는 기회를 제공하기 위해 대표팀 유니폼에 패치를 붙이게 됐다”고 말하고, “축구계를 비롯한 각계각층의 성원 속에 한국 축구의 미래를 함께 그려나갈 수 있기를 기대한다”고 밝혔다.

대한민국축구종합센터는 천안시 서북구 입장면 가산리에 조성된다. 총 11면의 축구장과 관중석을 갖춘 스타디움 1개, 실내축구장, 축구역사박물관 등 478,000m2(14만5천평) 규모로 건립 중이다. 지난해 착공돼 내년 12월 완공을 목표로 하고 있다.`},{id:24,title:"'첫 승은 다음 기회로' 클린스만호, 페루에 0-1 패",date:"2023-06-16",view:743,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686920250_1959585227.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686920139_1057578238.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686920179_1397212251.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686920198_768795752.jpg"],desc:`올해 초 축구국가대표팀 감독으로 부임한 위르겐 클린스만 감독의 첫 승 도전이 또다시 미뤄지게 됐다. 

클린스만 감독이 이끄는 국가대표팀(FIFA랭킹 27위)은 16일 부산아시아드주경기장에서 열린 페루(21위)와의 A매치 친선경기에서 전반 11분 브라이언 레이나에게 내준 선제골을 만회하지 못하고 0-1로 졌다. 페루와의 상대 전적은 1무 2패가 됐다. 대표팀은 오는 20일 대전월드컵경기장에서 엘살바도르와 경기를 벌인다.

이번 대표팀은 ‘사실상의 클린스만호 1기’라 할 수 있다. 3월 A매치 직전 부임한 클린스만 감독은 3월 2연전(콜롬비아 2-2 무, 우루과이 1-2 패)에서는 지난해 카타르 월드컵 멤버를 거의 그대로 활용했으나 이번에는 그동안 국내외 무대를 지켜보며 25명의 선수를 최종 확정했다. 수비와 중원의 주축 선수들이 부상 등으로 빠지면서 그동안 기회를 얻지 못하거나 낯선 얼굴이 들어왔다.

이날 선발 라인업은 가장 최근 열린 지난 3월 우루과이와의 A매치와 비교하면 무려 6명이 달라졌다. 최전방 투톱으로는 오현규와 황희찬이 호흡을 맞춘다. 중원에는 이재성, 원두재, 황인범, 이강인이 포진했다. 포백 수비진은 이기제, 정승현, 박지수, 안현범으로 구성됐다. 골문은 김승규가 지킨다.

이번에 A대표팀 최초 발탁된 안현범은 첫 소집에서 곧바로 A매치 데뷔전을 치르게 됐다. 최근 스포츠 탈장 수술을 받고 회복 중인 손흥민은 벤치에 앉았다.

이번 A매치는 3년 6개월 만에 부산에서 열리게 됐다. 이날 경기장에는 5만 2443명의 관중이 가득 들어차 오랜만의 A매치를 즐겼다. 기대에 부응하기 위해 태극전사들도 힘을 냈지만 선수들은 새로운 조합이 낯선 듯 손발이 맞지 않는 모습을 보였다. 특히 후방 빌드업이 원활하지 않아 볼을 뺏기는 경우가 많았다. 그 틈을 타 페루가 날카로운 공격을 선보였다. 전반 초반 두 차례 날카로운 슈팅을 시도한 페루는 전반 11분 브라이언 레이나가 선제골을 넣으며 앞서나갔다.

전열을 재정비한 한국은 황희찬과 이강인의 개인 능력으로 경기를 풀어갔다. 전반 25분 황희찬이 개인 돌파에 이은 슈팅을 때리며 분위기를 바꾸기 시작했다. 3분 뒤에는 오현규가 이강인의 스루패스를 받아 페널티박스 오른쪽에서 절호의 기회를 잡았으나 슈팅이 왼쪽으로 빗나가고 말았다.

전반 33분에는 이강인이 페널티박스 오른쪽 모서리에서 시도한 왼발슛이 날카롭게 골문으로 향했으나 페루 골키퍼가 쳐냈다. 이강인은 전반 추가시간에 멋진 개인기로 파울을 얻어낸 뒤 직접 프리킥을 찼으나 이는 페루 수비벽에 걸리고 말았다. 이후 정승현이 이강인의 코너킥을 헤더로 연결했으나 왼쪽으로 빗나갔다.

클린스만 감독은 하프타임에 선수 교체가 아닌 포지션 변화를 꾀했다. 측면에 있던 이재성과 최전방에 선 황희찬의 위치를 바꿨다. 폭발적인 돌파가 장점인 황희찬을 압박이 덜 한 측면으로 배치하고, 볼 간수와 패스가 좋은 이재성이 가운데로 들어가 공격의 활로를 열겠다는 계획이었다. 후반 16분 황희찬이 좋은 기회를 만들어냈다. 상대의 볼을 빼앗아 측면을 질주한 황희찬이 문전으로 땅볼 패스를 내줬으나, 이 공을 받아 골키퍼 일대일 찬스를 맞이한 오현규의 슈팅이 골키퍼 정면으로 향하고 말았다.

변화에도 불구하고 골이 터지지 않자 후반 18분에는 두 장의 교체 카드를 꺼내 들었다. 오현규와 이재성을 빼고, 조규성과 홍현석을 투입했다. 홍현석도 안현범과 마찬가지로 A매치 데뷔전을 치르게 됐다.

교체 이후 두 차례 찬스가 왔다. 후반 28분 이강인이 황희찬의 크로스를 날카로운 헤더로 연결했는데 페루 골키퍼의 선방에 막혔다. 4분 뒤에는 조규성이 이강인의 크로스에 머리를 갖다 댔으나 이는 왼쪽 골포스트를 살짝 비켜갔다. 

클린스만 감독은 황의조까지 투입하며 조규성-황의조 투톱을 앞세워 총공세를 폈으나 결국 만회골을 넣지 못하고 경기를 마쳤다.`},{id:25,title:"클린스만 감독 “다양한 선수 알 수 있었던 기회”",date:"2023-06-16",view:443,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686924549_1590247124.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1686924516_2059634529.jpg"],desc:`‘남미의 복병’ 페루를 상대로 부임 후 첫 승 도전에 실패한 위르겐 클린스만 축구국가대표팀 감독은 손흥민, 김민재 등 공수의 에이스가 빠진 상황에서 다양한 선수를 파악할 수 있었던 것을 긍정적으로 평가했다.

클린스만 감독이 이끄는 국가대표팀(FIFA랭킹 27위)은 16일 부산아시아드주경기장에서 열린 페루(21위)와의 A매치 친선경기에서 전반 11분 브라이언 레이나에게 내준 선제골을 만회하지 못하고 0-1로 졌다. 페루와의 상대 전적은 1무 2패가 됐다. 대표팀은 오는 20일 대전월드컵경기장에서 엘살바도르와 경기를 벌인다.

경기 후 공식 기자회견에 나선 클린스만 감독은 “초반 25분까지 고전했다. 페루가 후방에서 중원으로 연결하는 과정에서 우리 미드필더진이 일대일 싸움에 적극적이지 못해 고전했다. 그러나 이후에 페이스를 찾으며 후반에는 우리가 경기를 주도했다. 많은 찬스에서 득점하지 못해 졌지만 후반에는 원하는 모습을 조금 볼 수 있었다”고 평가했다.

클린스만 감독의 말처럼 대표팀 선수들은 초반에 낯선 선수 구성과 전술로 인해 손발이 맞지 않았다. 이 과정에서 압박이 제대로 이뤄지지 않았고, 이 틈을 노린 페루에게 일격을 맞으며 어려운 경기를 해야 했다. 클린스만 감독은 “상대를 압박하며 다부지게 경기해야 했는데 그러지 못하며 공간이 벌어졌다. 남미 팀을 상대로 공간이 벌어지면 상대는 쉽게 문전으로 다가온다. 두 번의 패스로도 위협적인 장면을 만든다. 하지만 이후에는 우리의 페이스를 찾으며 적극적으로 붙었고, 조직적으로 갖춰지는 모습을 보였다”고 말했다.

이날 최고의 활약을 펼친 이강인에 대해서는 잘한 점과 아쉬운 점을 동시에 언급했다. 그는 “이강인은 이제 유명한 선수가 됐다. 스페인 라리가에서 활약하며 남미에서도 잘 알기에 초반부터 볼을 잡으면 두세 명이 바짝 협력수비를 했다. 어려움이 있었지만 이강인의 경기를 보는 건 항상 즐겁고 기대된다”며 먼저 칭찬했다.

하지만 곧이어 클린스만 감독은 “(이강인은) 지금은 성장해야 할 시기다. 이제는 언제 드리블할지, 언제 패스할 지를 고민할 시기다. 잘 성장하면 계속 좋은 모습을 보일 것이라 기대된다. 좋은 선수지만 혼자서는 승리를 가져올 수 없다”고 강조했다.

이날 경기는 ‘공수의 핵’ 손흥민과 김민재가 빠지며 선수 구성에도 많은 변화가 있었다. 더불어 클린스만 감독은 생애 최초로 A대표팀에 뽑힌 안현범, 홍현석, 박용우, 박규현을 모두 출전시키며 A매치 데뷔 기회를 줬다.

이에 대해 클린스만 감독은 “부상이 많았고, 김민재는 군사훈련으로 합류하지 못해 변화를 할  수밖에 없었다”면서 “감독으로서 당연히 이기고 싶고, 지면 화가 난다. 또한 손흥민이나 김민재와 함께 하고 싶다. 하지만 새로운 선수를 보면서 어떻게 성장시킬지, 그리고 카타르 아시안컵까지 가는 과정에서 어떻게 선수단을 꾸릴지 알 수 있는 좋은 기회였다. 이런 과정이 카타르에서 좋은 모습을 보일 수 있는 버팀목이 될 것”이라고 답했다.`},{id:26,title:"[프리뷰] 승리 절실한 클린스만호, '중미의 복병'을 만나다",date:"2023-06-19",view:298,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687163148_1811010248.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687162548_1891326078.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687162595_1521175956.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687162564_86502168.jpg"],desc:`클린스만호가 ‘중미의 복병’ 엘살바도르를 상대로 첫 승에 재도전한다.

위르겐 클린스만 감독이 이끄는 남자 축구 국가대표팀이 20일 오후 8시 대전월드컵경기장에서 엘살바도르와 A매치 친선경기를 치른다. 양 팀은 이날 경기에서 첫 맞대결을 펼치며, 국제축구연맹(FIFA) 랭킹은 한국(27위)이 엘살바도르(75위)에 앞선다.

지난 경기에서 페루에 덜미를 잡힌 한국은 원하는 결과는 얻지 못했으나, A매치 경험이 없던 선수들을 다수 기용하며 다양한 전술적 실험을 시도했다. 총 4명(박규현, 박용우, 안현범, 홍현석)이 데뷔전을 치렀고, 후반 교체 투입된 홍현석(KAA헨트, 벨기에)은 가벼운 몸놀림을 선보이며 팀의 공격을 이끌었다. 또 위기의 순간마다 박지수(포르티모넨세, 포르투갈)가 활약하며 수비의 중심을 지켰다. 아시안컵 대비를 위한 플랜B를 마련해야 하는 클린스만 감독은 이들의 발견을 소기의 성과로 삼았다.

실험적 라인업을 꺼냈던 페루전과 달리, 엘살바도르전은 최정예 명단을 구성해 반드시 승리한다는 각오다. 우선 캡틴 손흥민(토트넘)이 적어도 후반에는 경기장에 모습을 드러낼 것으로 보인다. 19일 오후 경기 전 기자회견에 나선 클린스만 감독은 “손흥민이 파주에서부터 매일 훈련을 상당히 열심히 했다. 팀훈련에도 완전히 합류할 수 있어 기쁘다”면서 “내일 선발로 나가지는 않지만, 후반전 교체 투입 정도는 생각하고 있다”고 언급했다. 

이어 클린스만 감독은 “손흥민의 역할은 운동장 내 득점 그 이상이다. 아시안컵까지 끌고 가는 데 있어서 코치들과 함께 중요한 역할을 하고 있다”며 “페루전에서 4명의 선수가 A매치 데뷔전을 치렀는데, 손흥민과 같은 경험 있는 선수의 조언이 큰 힘이 될 것이다. 운동장 안과 밖에서 모범적이고 팀을 이끌어가는 중요한 선수이기 때문에, 돌아와서 기쁘다”고 손흥민의 복귀를 반겼다.

아울러 클린스만 감독은 페루전 패배를 교훈 삼겠다고 밝혔다. 클린스만 감독은 “페루전은 전반 30분까지 1대1 싸움에서 완전히 졌다. 선취골을 내주며 쫓기는 경기를 했다”고 평가하며 “내일 경기에서는 선수들에게 운동장에서 절대 지지 말라고 했다. 더 다부지고 거칠게, 모든 경합 상황에서 승리해야 한다. 또 지난 경기는 수비라인이 다 바뀌어 어려움이 있었는데, 최대한 선수들의 호흡을 빨리 맞춰가는 것이 중요하다”고 말했다.

페루전을 벤치에서 지켜 본 손흥민은 “오랜만에 벤치에 앉아서 대표팀 경기를 지켜봤는데 전반전에는 준비했던 것보다 우리가 원하던 모습이 나오지 못했다”면서 “감독님은 공격적인 축구를 좋아하시고, 자율성을 부여하면서 선수들의 개인 능력을 믿는다. 그러나 중요한 건 선수들이 경기장에서 이를 이행하는 것이다. 페루전이 (선수들에게도) 큰 교훈이 되었을 것”이라고 돌아봤다.

끝으로 클린스만 감독은 “대전에 와서 기쁘다. 3월에 울산과 서울, 6월에 부산과 대전까지 팬들의 열기를 느끼고 있다. 아시안컵을 향한 도전을 이어가는 과정이기 때문에 각오가 남다르다. 열심히 준비한 만큼 내일은 팬들에게 꼭 이기는 경기를 보여드리고 싶다”고 말했다.

손흥민 역시 “이번 경기가 얼마나 중요한지 잘 알고 있다. 9월에는 유럽에서 평가전을 하는데, 그 전에 좋은 분위기로 원정을 떠났으면 좋겠다. 또 감독님에게 첫 승의 의미가 큰 것을 선수들도 알고 있다'면서 '긍정적인 분위기 속에서 잘 준비하고 있다. 재밌는 경기, 그리고 승리하는 경기를 할 수 있으면 좋겠다”고 다짐했다.`},{id:27,title:"‘이강인 선발’ 클린스만호, 엘살바도르전 선발 명단 발표",date:"2023-06-20",view:381,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687254106_1887914873.png",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687254098_2088389716.png"],desc:`엘살바도르전에 나설 축구국가대표팀의 명단이 발표됐다.

위르겐 클린스만 감독이 이끄는 축구대표팀은 20일 오후 8시 대전월드컵경기장에서 엘살바도르와 A매치 친선경기를 치른다. 양 팀은 이날 경기에서 첫 맞대결을 펼치며, 국제축구연맹(FIFA) 랭킹은 한국(27위)이 엘살바도르(75위)에 앞선다.

지난 경기에서 4-4-2 포메이션을 실험했던 클린스만 감독은 3월 A매치 2연전에서 활용했던 4-2-3-1 포메이션을 다시 꺼내들었다. 최전방 공격수로 조규성이 나서며 왼쪽 날개는 이강인, 오른쪽 날개는 황희찬이 맡는다.

미드필더는 이재성, 황인범, 박용우가 구성한다. 이재성은 공격형 미드필더로 나서고, 황인범이 중앙에서 그를 뒷받침한다. 황인범은 상황에 따라 수비형 미드필더와 중앙 미드필더를 오가며 플레이할 것으로 보인다. 한편, 페루전에서 A매치 데뷔전을 치른 박용우는 수비형 미드필더로 선발 출장한다.

포백 수비진은 김진수 – 박지수 – 정승현 – 설영우가 출전한다. 양쪽 측면 풀백 라인에 변화가 눈에 띈다. 지난 3월 A매치 콜롬비아전에서 부상당했던 김진수는 이날 경기에서 대표팀 선발 복귀전을 치르며, 라이트백 설영우는 A매치 데뷔전에 나선다. 골문은 변함없이 김승규가 지킨다.`},{id:28,title:"‘황의조 선제골’ 클린스만호, 엘살바도르와 1-1 무",date:"2023-06-20",view:512,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687265175_582823570.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687265099_2107923127.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687265558_1543174884.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687265579_1259569818.jpg"],desc:`축구국가대표팀이 엘살바도르를 상대로 A매치 무승 고리를 끊어내는데 실패했다. 

위르겐 클린스만 감독이 이끄는 축구대표팀(FIFA랭킹 27위)은 20일 대전월드컵경기장에서 열린 엘살바도르(75위)와의 A매치 친선경기에서 후반 4분 황의조가 선제골을 터뜨렸으나 후반 42분 알렉스 롤단에게 동점골을 허용해 1-1로 비겼다. 이로써 클린스만 감독은 부임 후 네 번째 경기(2무 2패)서도 첫 승을 신고하지 못했다. 6월 2연전을 마친 대표팀은 오는 9월 유럽에서 원정 2연전을 치르게 된다.

클린스만 감독은 지난 페루전과 비교해 4명이 달라진 라인업을 내세웠다. 더불어 포메이션도 4-4-2에서 4-2-3-1로 수정했다. 수비진과 최전방 공격수 자리가 바뀌었다. 최전방에는 오현규 대신 조규성이 선발로 출전했다. 2선에는 지난 경기와 마찬가지로 이강인, 이재성, 황희찬이 포진했다.

수비형 미드필더는 황인범과 박용우가 맡았다. 지난 경기서 원두재가 부상 당하며 교체로 들어온 박용우가 선발로 낙점됐다. 포백 수비진은 김진수, 박지수, 정승현, 설영우로 구성됐다. 김진수와 설영우가 각각 이기제와 안현범 대신 들어왔다. 골문은 변함없이 김승규가 지켰다.

이날 대전월드컵경기장에는 비가 오락가락 내렸지만 3만 9823명의 관중은 아랑곳하지 않고 태극전사들을 응원했다. 선수들은 응원에 화답하기 위해 초반부터 페이스를 끌어올렸다. 전반 5분 만에 이재성이 페널티박스 오른쪽에서 강력한 오른발 슈팅을 시도하며 포문을 열었다. 4분 뒤에는 조규성이 김진수의 크로스를 멋진 헤더로 연결했으나 골대를 외면했다.

이강인은 지난 경기에 이어 이날도 활발한 움직임을 보였지만 골과 인연을 맺지 못했다. 전반 중반 몇 차례 슈팅을 선보였으나 아직 영점이 잡히지 않았다. 전반 막판에는 황인범이 아크 정면에서 강력한 왼발슛을 때렸지만 상대 골키퍼 선방에 막혔다.

세차게 두드려도 상대 골문이 열리지 않자 클린스만 감독은 후반 시작하자마자 칼을 꺼내 들었다. 이재성을 빼고 황의조를 투입하며 투톱을 가동했다. 중원 싸움보다는 전방에 무게를 두며 직선적인 플레이로 골을 노리겠다는 생각이었다.

황의조가 클린스만 감독의 부름에 응답했다. 황의조는 후반 4분 페널티박스 왼쪽에서 황희찬의 패스를 받아 멋진 오른발 터닝슛을 성공시켰다. 수비수 두 명이 따라붙었지만 황의조의 날렵한 움직임과 강력한 슈팅을 제어하지 못했다.

그러나 한 골만으로는 답답했다. 이에 클린스만 감독은 후반 24분 또다시 공격적인 교체를 단행했다. 스포츠 탈장 수술을 받고 회복 중이던 손흥민을 출격시켰다. 더불어 조규성 대신 오현규를 투입하며 ‘공격 앞으로’를 외쳤다.

교체 투입된 공격수들까지 가세해 맹공을 퍼부었으나 기다리던 추가골은 좀처럼 나오지 않았다. 오히려 한국은 후반 42분 우리 진영에서 프리킥을 내줬고, 이 프리킥을 알렉스 롤단이 다이빙 헤더골로 연결시켜 동점을 만들었다. 이후 한국이 반격했으나 소득은 없었다.`},{id:29,title:"클린스만 감독 “득점력 부족? 더 많은 훈련이 필요”",date:"2023-06-20",view:423,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687268401_1533193221.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687268341_553440353.jpg"],desc:`축구국가대표팀의 위르겐 클린스만 감독은 6월 A매치 2연전에서 보인 득점력 부족에 대해 더 많은 소집과 훈련을 통해 보완하겠다는 입장을 밝혔다.


위르겐 클린스만 감독이 이끄는 축구대표팀(FIFA랭킹 27위)은 20일 대전월드컵경기장에서 열린 엘살바도르(75위)와의 A매치 친선경기에서 후반 4분 황의조가 선제골을 터뜨렸으나 후반 42분 알렉스 롤단에게 동점골을 허용해 1-1로 비겼다. 이로써 클린스만 감독은 부임 후 네 번째 경기(2무 2패)서도 첫 승을 신고하지 못했다. 6월 2연전을 마친 대표팀은 오는 9월 유럽에서 원정 2연전을 치르게 된다.

경기 후 공식 기자회견에 나선 클린스만 감독은 “결과를 가져오지 못해 아쉽다. 세트피스로 실점하게 돼 화가 나는 부분도 있다. 네 골 이상 득점할 기회가 있었는데 결과를 가져오지 못했다”며 아쉬워했다. 득점력 부족에 대한 질문에는 “더 많은 훈련을 통해 선수들에게 득점할 수 있다는 믿음을 심어줘야 한다”고 밝혔다.

다음은 클린스만 감독과의 일문일답.

- 경기를 마친 소감은
결과를 가져오지 못해 아쉽다. 세트피스로 실점하게 돼 화가 나는 부분도 있다. 네 골 이상 득점할 기회가 있었는데 결과를 가져오지 못했다. 소집을 준비하며 많은 일들이 있었지만 경기를 치러냈다. 이제 시즌이 끝난 해외파는 휴식을 취한다. 9월에 다시 모이는데 잘 준비하겠다.

- 6월 경기력이 3월보다 퇴보했는지, 아니면 경기력은 좋은데 안 풀렸다고 생각하나?
3월에 경기력이 훨씬 좋았다고 말할 수 있다. 이번에는 소집 준비하면서 부상으로 인해 변화가 불가피했다. 선수들이 빠지면서 수비 라인은 다 바뀌었다. 많은 숙제를 가지고 시작했지만 숙제를 남긴 소집이다. 수비와 미드필더 조합을 보완해야 한다.
경기 후 라커룸 미팅을 했는데 자랑스러워 해야하는 것은 5명의 선수(안현범, 박용우, 박규현, 홍현석, 설영우)가 A매치 데뷔를 했다는 것이다. 누구도 빼앗아갈 수 없는 특별한 순간이다. 몇몇 선수들은 매우 힘든 상태로 소집했다. 시즌이 상당히 길었다. 훈련장에서 선수들의 상태를 보면서 강도를 낮추면서 진행했다. 아쉬움은 있지만 다음 소집에 숙제를 잘 풀도록 하겠다.

- 후반 투톱을 가동했다. 손흥민이 정상 컨디션 아닌 상황을 감안해 임시적으로 쓴 전술인가, 아니면 향후 투톱을 많이 쓸 예정인가?
손흥민의 상태와 상관없이 염두에 두고 있는 전술이다. 스트라이커가 한 명보다는 두 명이면 기회가 많아진다. 대회를 하면 수비로 내려서는 팀들을 상대하는데 투톱을 놓고 손흥민이 공격형 미드필더를 소화할 수도 있다. 또한 이강인, 황희찬 등과 다른 공격수들이 호흡을 맞추면 더 공격적으로 할 수 있다. 여러 상대를 대비해야 하는 과정이다. 우리는 특별한 세 명의 스트라이커를 보유하고 있다. 이 선수들의 조합도 확인하기 위해 변화를 가져갔다. 즉흥적인 것은 아니다.

- 골 결정력 강화를 위해 어떤 해법을 가지고 있나?
훈련을 더 많이 하면서 선수들에게 믿음을 줘야 한다. 운동장에서 득점할 수 있겠다는 믿음을 심어줘야 한다. 황의조, 조규성도 월드컵 이후 경기력을 올리는데 시간이 걸렸다. 오현규는 셀틱에서 득점했지만 90분 경기를 많이 하지 못했다. 손흥민이 이번에 부상으로 많은 시간을 부여받지는 못했지만 90분을 지속적으로 뛸 수 있는 선수는 손흥민밖에 없다. 대표팀 와서 90분 동안 지구력, 경기력을 유지하는 데 어려움이 있다.
계속 믿음을 주고, 훈련해야 한다. 선수들을 안아주고 토닥일 것이다. 조규성도 오늘 두 번의 기회를 놓쳤지만 다음에 득점할 거란 믿음을 가지고 있다. 공격수들은 분명 짜증날 것이다. 하지만 방법은 더 많이 훈련하는 것뿐이다.`},{id:30,title:"데뷔전 치른 설영우 “흥민이형과 같이 뛰어 영광”",date:"2023-06-21",view:243,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687285925_879795453.jpg",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687285641_669107212.jpg","https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1687285620_1759204830.jpg"],desc:`A매치 데뷔전을 치른 설영우는 '우상' 손흥민과 함께 경기를 뛸 수 있어 영광이었다고 밝혔다.

위르겐 클린스만 감독이 이끄는 축구 국가대표팀은 20일 대전월드컵경기장에서 열린 엘살바도르와의 A매치 친선경기에서 후반 4분 황의조의 선제골이 터졌으나 후반 42분 알렉스 롤단에게 동점골을 허용해 1-1 무승부를 거뒀다.

고대하던 첫 승은 거두지 못했으나 긍정적인 면도 있었다. 2연전에서 총 5명의 새로운 선수가 A매치 데뷔전을 치렀다. 특히 이날 우측 풀백으로 선발 출장한 설영우는 공수에서 안정적인 경기력을 뽐내며, 클린스만 감독을 흡족하게 했다.

경기 후 믹스트존(공동취재구역)에서 만난 설영우는 '축구를 시작하고 나서부터 제 목표는 항상 국가대표였는데, 이제 꿈을 이뤘다'면서 '특히 대표팀에 와서 그토록 같이 뛰고 싶던 (손)흥민이형과 같이 운동하고 경기를 뛸 수 있어 영광이었다'고 언급했다.

손흥민도 설영우에 대한 남다른 애정을 드러냈다. 전반 37분에는 벤치에 있던 손흥민이 설영우에게 직접 다가가 조언하는 모습이 화면에 잡히기도 했다. 설영우는 '(손)흥민이형이 경기를 전체적으로 보고 저에게 필요한 부분에 대해 말씀해주셨다. 페루전 때도 전반전이 끝난 뒤 제가 혹시라도 교체돼 들어갔을 때 어떻게 하면 좋을 것 같다고 해주셨다. 훈련 때도 계속 피드백을 해 주신다'고 설명했다.

설영우는 이날 경기에서 공격 가담보다 수비에 집중했다고 밝혔다. 클린스만 감독이 특별히 강조한 부분이 있었냐는 질문에는 '감독님께서 최대한 안으로 좁혀 수비를 우선적으로 하라고 지시하셨다. 또 공격 시에 (이)강인이나 (황)희찬이 형과 같이 뛰었는데 이들이 더 편하게 공격할 수 있게 노력했던 것 같다. 열심히 뛰면서 수비를 많이 끌어주려고 했다'고 답했다.

클린스만 감독에게 확실한 눈도장을 찍은 설영우는 치열한 라이트백 포지션 경쟁에 불을 지폈다. 그는 '현대 축구에서 사이드백이 굉장히 중요하다. 상대가 측면으로 압박을 많이 가하기 때문'이라면서 '이제는 사이드백이 볼 간수나 전진 패스도 할 수 있어야 한다. 제 장점이 그런 부분이니 이를 최대한 극대화해야 한다. 다음에 대표팀에 오게 되면 감독님께 더 좋은 옵션이 됐으면 좋겠다'고 다짐했다.`},{id:31,title:"‘대한민국 축구종합센터’ 건립위한 국가대표 유니폼 경매",date:"2023-07-13",view:24,mainImg:"https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1689231381_1833027641.png",img:["https://www.kfa.or.kr/img_src/bbs/news/total_news_11314/_1689231334_1675524983.png"],desc:`대한축구협회는 천안에 건립중인 ‘대한민국 축구종합센터’ 홍보와 축구팬들의 참여를 위해 남자 국가대표팀 유니폼을 경매에 부친다고 13일 밝혔다. 경매 물품은 지난 3월 콜롬비아, 우루과이 친선경기에 대표선수들이 착용했던 것과 동일한 유니폼으로, 손흥민, 김민재, 이강인 등 선수 9명과 클린스만 감독이 직접 사인한 대표팀 유니폼이다. 경매는 14일 오후 2시부터 18일 오후 5시까지 ‘플레이 KFA'(www.playkfa.com)내 경매 페이지에서 진행된다.

낙찰은 마감시한까지 최고가를 등록한 사람에게 돌아가고, 낙찰자는 경매 종료 후 24시간 내에 결제를 해야 한다. 결제를 하지 않을 경우 자동으로 차순위자가 낙찰자가 된다. 

경매로 얻은 수익금은 해당 선수의 이름으로 ‘대한민국 축구종합센터’ 건립을 위해 기부될 예정이다.

대한축구협회는 이번 유니폼 경매를 시작으로 축구종합센터 패치를 부착해 특별 제작했던 6월 남자대표팀 유니폼과 여자월드컵에 출전하는 여자 대표팀 사인 유니폼도 향후에 경매를 실시할 계획이다.`}],R3={newsData:mg,currentData:[],currentPerPosts:12,newsDetailData:[]},gg=ir({name:"news",initialState:R3,reducers:{newsDataSort(e,t){e.currentData=e.newsData.sort((n,r)=>r.id-n.id)},searchFilter(e,t){e.currentData=e.newsData.filter(n=>n.title.includes(t.payload))},onAddPosts(e,t){e.currentPerPosts=e.currentPerPosts+t.payload},onPerPosts(e,t){e.currentData=e.currentData.slice(0,e.currentPerPosts)},resetCurrentPerPosts(e,t){e.currentPerPosts=12},onClickPost(e,t){e.detailData=t.payload}}}),{newsDataSort:z3,searchFilter:M3,onAddPosts:$3,onPerPosts:D3,resetCurrentPerPosts:F3,onClickPost:B3}=gg.actions,U3=gg.reducer,H3=()=>{const{cart:e}=re(o=>o.goodsR),t=K(),n=()=>{window.scrollTo({top:0})},r=ao(),i=e.length;return s.jsx(W2,{children:s.jsx("div",{className:"header",children:s.jsxs("div",{className:"inner",children:[s.jsx("h1",{children:s.jsx(te,{to:"/",onClick:n,children:s.jsx("img",{src:"./images/visual/logo_white.png",alt:"풋볼스쿼드메이커"})})}),s.jsxs("div",{className:"top_menu",children:[s.jsx(te,{to:"/",onClick:n,children:s.jsx("i",{children:s.jsx(Y2,{})})}),s.jsxs(te,{to:"/cart",onClick:n,children:[s.jsx("i",{children:s.jsx(J2,{})}),s.jsx("span",{children:i})]}),s.jsx(te,{to:"/login",onClick:n,children:s.jsx("i",{children:s.jsx(ew,{})})})]}),s.jsx("nav",{className:"nav",children:s.jsxs("ul",{className:"gnb",children:[s.jsx("li",{children:s.jsx(te,{to:"/playerInfo",onClick:n,children:"All Players"})}),s.jsx("li",{children:s.jsx(te,{to:"/squad",onClick:n,children:"Squad Maker"})}),s.jsx("li",{children:s.jsx(te,{to:"/game_schedule",className:r.pathname==="/game_schedule"?"on":"",onClick:n,children:"Game Schedule"})}),s.jsx("li",{children:s.jsx(te,{to:"/notice",onClick:n,children:"Notice"})}),s.jsx("li",{children:s.jsx(te,{to:"/news",onClick:()=>{n(),t(F3())},children:"News"})}),s.jsx("li",{children:s.jsx(te,{to:"/store",onClick:n,children:"Store"})})]})})]})})})};function W3(e){return Ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(e)}function xg(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0009 3C17.7999 3 22.501 6.66445 22.501 11.1847C22.501 15.705 17.7999 19.3694 12.0009 19.3694C11.4127 19.3694 10.8361 19.331 10.2742 19.2586L5.86611 22.1419C5.36471 22.4073 5.18769 22.3778 5.39411 21.7289L6.28571 18.0513C3.40572 16.5919 1.50098 14.0619 1.50098 11.1847C1.50098 6.66445 6.20194 3 12.0009 3ZM17.908 11.0591L19.3783 9.63617C19.5656 9.45485 19.5705 9.15617 19.3893 8.96882C19.2081 8.78172 18.9094 8.77668 18.7219 8.95788L16.7937 10.8239V9.28226C16.7937 9.02172 16.5825 8.81038 16.3218 8.81038C16.0613 8.81038 15.8499 9.02172 15.8499 9.28226V11.8393C15.8321 11.9123 15.8325 11.9879 15.8499 12.0611V13.5C15.8499 13.7606 16.0613 13.9719 16.3218 13.9719C16.5825 13.9719 16.7937 13.7606 16.7937 13.5V12.1373L17.2213 11.7236L18.6491 13.7565C18.741 13.8873 18.8873 13.9573 19.0357 13.9573C19.1295 13.9573 19.2241 13.9293 19.3066 13.8714C19.5199 13.7217 19.5713 13.4273 19.4215 13.214L17.908 11.0591ZM14.9503 12.9839H13.4904V9.29702C13.4904 9.03648 13.2791 8.82514 13.0184 8.82514C12.7579 8.82514 12.5467 9.03648 12.5467 9.29702V13.4557C12.5467 13.7164 12.7579 13.9276 13.0184 13.9276H14.9503C15.211 13.9276 15.4222 13.7164 15.4222 13.4557C15.4222 13.1952 15.211 12.9839 14.9503 12.9839ZM9.09318 11.8925L9.78919 10.1849L10.4265 11.8925H9.09318ZM11.6159 12.3802C11.6161 12.3748 11.6175 12.3699 11.6175 12.3645C11.6175 12.2405 11.5687 12.1287 11.4906 12.0445L10.4452 9.24376C10.3468 8.9639 10.1005 8.77815 9.81761 8.77028C9.53948 8.76277 9.28066 8.93672 9.16453 9.21669L7.50348 13.2924C7.40519 13.5337 7.52107 13.8092 7.76242 13.9076C8.00378 14.006 8.2792 13.89 8.37749 13.6486L8.70852 12.8364H10.7787L11.077 13.6356C11.1479 13.8254 11.3278 13.9426 11.5193 13.9425C11.5741 13.9425 11.6298 13.9329 11.6842 13.9126C11.9284 13.8216 12.0524 13.5497 11.9612 13.3054L11.6159 12.3802ZM8.29446 9.30194C8.29446 9.0414 8.08312 8.83006 7.82258 8.83006H4.57822C4.31755 8.83006 4.10622 9.0414 4.10622 9.30194C4.10622 9.56249 4.31755 9.77382 4.57822 9.77382H5.73824V13.5099C5.73824 13.7705 5.94957 13.9817 6.21012 13.9817C6.47078 13.9817 6.68212 13.7705 6.68212 13.5099V9.77382H7.82258C8.08312 9.77382 8.29446 9.56249 8.29446 9.30194Z"}}]})(e)}const V3=()=>{const e=()=>{window.scrollTo({top:0})};return s.jsx(V2,{children:s.jsxs("div",{className:"inner",children:[s.jsxs("div",{className:"links",children:[s.jsxs("div",{className:"terms",children:[s.jsx("span",{children:s.jsx(te,{to:"/",children:"개인정보처리방침"})}),s.jsx("span",{children:s.jsx(te,{to:"/",children:"이용약관"})})]}),s.jsxs("div",{className:"sns",children:[s.jsx("i",{children:s.jsx(W3,{})}),s.jsx("i",{children:s.jsx(X2,{})}),s.jsx("i",{children:s.jsx(xg,{})}),s.jsx("i",{children:s.jsx(Z2,{})})]})]}),s.jsxs("div",{className:"info",children:[s.jsx("p",{className:"company",children:"(주) 풋볼스쿼드메이커"}),s.jsxs("p",{children:[s.jsx("span",{children:"대표이사 : 김형종"}),s.jsx("span",{children:"사업자등록번호 : 122-71-00000"})]}),s.jsxs("p",{children:[s.jsx("span",{children:"전화번호 : 032-232-0000"}),s.jsx("span",{children:"팩스 : 032-232-0000"})]}),s.jsx("p",{children:s.jsx("span",{children:"주소 : 인천광역시 연수구 벚꽃로 00, 두손메카빌딩 506호"})}),s.jsx("p",{className:"copyfright",children:"Copyright ⓒ FOOTBALL CLUB All Rights Reserved."})]}),s.jsx("div",{className:"logo",children:s.jsx(te,{to:"/",onClick:e,children:s.jsx("img",{src:"./images/visual/logo.png",alt:"풋볼스쿼드메이커"})})})]})})},G3=()=>s.jsxs("div",{style:{width:"100%"},children:[s.jsx(H3,{}),s.jsx("main",{className:"main",children:s.jsx(Ju,{})}),s.jsx(V3,{})]});function vg(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}}]})(e)}const yg=({item:e})=>{const{id:t,title:n,date:r,view:i,mainImg:o,desc:l}=e,a=K();return s.jsx("li",{onClick:()=>{window.scrollTo({top:0}),a(B3(e))},children:s.jsxs(te,{to:`/news/${t}`,children:[s.jsx("div",{className:"imgbox",children:s.jsx("img",{src:o,alt:n})}),s.jsx("h3",{children:n}),s.jsxs("div",{className:"date_view",children:[s.jsxs("span",{children:[s.jsx("i",{children:s.jsx(vg,{})}),r]}),s.jsxs("span",{children:[s.jsx("i",{className:"xi-eye-o"}),i.toLocaleString()]})]})]})})};function jf(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function wd(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:jf(t[n])&&jf(e[n])&&Object.keys(t[n]).length>0&&wd(e[n],t[n])})}const wg={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function or(){const e=typeof document<"u"?document:{};return wd(e,wg),e}const K3={document:wg,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function at(){const e=typeof window<"u"?window:{};return wd(e,K3),e}function q3(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Kc(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function $s(){return Date.now()}function Y3(e){const t=at();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function X3(e,t){t===void 0&&(t="x");const n=at();let r,i,o;const l=Y3(e);return n.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Oo(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Q3(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function et(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Q3(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,l=i.length;o<l;o+=1){const a=i[o],c=Object.getOwnPropertyDescriptor(r,a);c!==void 0&&c.enumerable&&(Oo(e[a])&&Oo(r[a])?r[a].__swiper__?e[a]=r[a]:et(e[a],r[a]):!Oo(e[a])&&Oo(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:et(e[a],r[a])):e[a]=r[a])}}}return e}function Ro(e,t,n){e.style.setProperty(t,n)}function bg(e){let{swiper:t,targetPosition:n,side:r}=e;const i=at(),o=-t.translate;let l=null,a;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(m,h)=>u==="next"&&m>=h||u==="prev"&&m<=h,p=()=>{a=new Date().getTime(),l===null&&(l=a);const m=Math.max(Math.min((a-l)/c,1),0),h=.5-Math.cos(m*Math.PI)/2;let y=o+h*(n-o);if(d(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),d(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Rt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Sg(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function J3(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Z3(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function gn(e,t){return at().getComputedStyle(e,null).getPropertyValue(t)}function Ds(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function jg(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function qc(e,t,n){const r=at();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let _a;function eb(){const e=at(),t=or();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function kg(){return _a||(_a=eb()),_a}let Pa;function tb(e){let{userAgent:t}=e===void 0?{}:e;const n=kg(),r=at(),i=r.navigator.platform,o=t||r.navigator.userAgent,l={ios:!1,android:!1},a=r.screen.width,c=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=i==="Win32";let y=i==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&y&&n.touch&&v.indexOf(`${a}x${c}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),y=!1),u&&!h&&(l.os="android",l.android=!0),(d||m||p)&&(l.os="ios",l.ios=!0),l}function nb(e){return e===void 0&&(e={}),Pa||(Pa=tb(e)),Pa}let Na;function rb(){const e=at();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,o]=r.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));t=i<16||i===16&&o<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function ib(){return Na||(Na=rb()),Na}function ob(e){let{swiper:t,on:n,emit:r}=e;const i=at();let o=null,l=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},c=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{l=i.requestAnimationFrame(()=>{const{width:m,height:h}=t;let y=m,v=h;p.forEach(b=>{let{contentBoxSize:x,contentRect:f,target:g}=b;g&&g!==t.el||(y=f?f.width:(x[0]||x).inlineSize,v=f?f.height:(x[0]||x).blockSize)}),(y!==m||v!==h)&&a()})}),o.observe(t.el))},u=()=>{l&&i.cancelAnimationFrame(l),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){c();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",d)})}function sb(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],l=at(),a=function(d,p){p===void 0&&(p={});const m=l.MutationObserver||l.WebkitMutationObserver,h=new m(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const v=function(){i("observerUpdate",y[0])};l.requestAnimationFrame?l.requestAnimationFrame(v):l.setTimeout(v,0)});h.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(h)},c=()=>{if(t.params.observer){if(t.params.observeParents){const d=jg(t.el);for(let p=0;p<d.length;p+=1)a(d[p])}a(t.el,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",u)}var lb={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];t.apply(r,l)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(c=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[c,...n])}),e.eventsListeners&&e.eventsListeners[c]&&e.eventsListeners[c].forEach(u=>{u.apply(r,n)})}),e}};function ab(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(gn(r,"padding-left")||0,10)-parseInt(gn(r,"padding-right")||0,10),n=n-parseInt(gn(r,"padding-top")||0,10)-parseInt(gn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function cb(){const e=this;function t(P){return e.isHorizontal()?P:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[P]}function n(P,O){return parseFloat(P.getPropertyValue(t(O))||0)}const r=e.params,{wrapperEl:i,slidesEl:o,size:l,rtlTranslate:a,wrongRTL:c}=e,u=e.virtual&&r.virtual.enabled,d=u?e.virtual.slides.length:e.slides.length,p=Rt(o,`.${e.params.slideClass}, swiper-slide`),m=u?e.virtual.slides.length:p.length;let h=[];const y=[],v=[];let b=r.slidesOffsetBefore;typeof b=="function"&&(b=r.slidesOffsetBefore.call(e));let x=r.slidesOffsetAfter;typeof x=="function"&&(x=r.slidesOffsetAfter.call(e));const f=e.snapGrid.length,g=e.slidesGrid.length;let w=r.spaceBetween,S=-b,C=0,k=0;if(typeof l>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*l:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w,p.forEach(P=>{a?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Ro(i,"--swiper-centered-offset-before",""),Ro(i,"--swiper-centered-offset-after",""));const N=r.grid&&r.grid.rows>1&&e.grid;N&&e.grid.initSlides(m);let E;const I=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(P=>typeof r.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<m;P+=1){E=0;let O;if(p[P]&&(O=p[P]),N&&e.grid.updateSlide(P,O,m,t),!(p[P]&&gn(O,"display")==="none")){if(r.slidesPerView==="auto"){I&&(p[P].style[t("width")]="");const R=getComputedStyle(O),W=O.style.transform,X=O.style.webkitTransform;if(W&&(O.style.transform="none"),X&&(O.style.webkitTransform="none"),r.roundLengths)E=e.isHorizontal()?qc(O,"width",!0):qc(O,"height",!0);else{const de=n(R,"width"),ae=n(R,"padding-left"),L=n(R,"padding-right"),A=n(R,"margin-left"),M=n(R,"margin-right"),$=R.getPropertyValue("box-sizing");if($&&$==="border-box")E=de+A+M;else{const{clientWidth:D,offsetWidth:ie}=O;E=de+ae+L+A+M+(ie-D)}}W&&(O.style.transform=W),X&&(O.style.webkitTransform=X),r.roundLengths&&(E=Math.floor(E))}else E=(l-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(E=Math.floor(E)),p[P]&&(p[P].style[t("width")]=`${E}px`);p[P]&&(p[P].swiperSlideSize=E),v.push(E),r.centeredSlides?(S=S+E/2+C/2+w,C===0&&P!==0&&(S=S-l/2-w),P===0&&(S=S-l/2-w),Math.abs(S)<1/1e3&&(S=0),r.roundLengths&&(S=Math.floor(S)),k%r.slidesPerGroup===0&&h.push(S),y.push(S)):(r.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&h.push(S),y.push(S),S=S+E+w),e.virtualSize+=E+w,C=E,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+x,a&&c&&(r.effect==="slide"||r.effect==="coverflow")&&(i.style.width=`${e.virtualSize+w}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+w}px`),N&&e.grid.updateWrapperSize(E,h,t),!r.centeredSlides){const P=[];for(let O=0;O<h.length;O+=1){let R=h[O];r.roundLengths&&(R=Math.floor(R)),h[O]<=e.virtualSize-l&&P.push(R)}h=P,Math.floor(e.virtualSize-l)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-l)}if(u&&r.loop){const P=v[0]+w;if(r.slidesPerGroup>1){const O=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),R=P*r.slidesPerGroup;for(let W=0;W<O;W+=1)h.push(h[h.length-1]+R)}for(let O=0;O<e.virtual.slidesBefore+e.virtual.slidesAfter;O+=1)r.slidesPerGroup===1&&h.push(h[h.length-1]+P),y.push(y[y.length-1]+P),e.virtualSize+=P}if(h.length===0&&(h=[0]),w!==0){const P=e.isHorizontal()&&a?"marginLeft":t("marginRight");p.filter((O,R)=>!r.cssMode||r.loop?!0:R!==p.length-1).forEach(O=>{O.style[P]=`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let P=0;v.forEach(R=>{P+=R+(w||0)}),P-=w;const O=P-l;h=h.map(R=>R<=0?-b:R>O?O+x:R)}if(r.centerInsufficientSlides){let P=0;if(v.forEach(O=>{P+=O+(w||0)}),P-=w,P<l){const O=(l-P)/2;h.forEach((R,W)=>{h[W]=R-O}),y.forEach((R,W)=>{y[W]=R+O})}}if(Object.assign(e,{slides:p,snapGrid:h,slidesGrid:y,slidesSizesGrid:v}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Ro(i,"--swiper-centered-offset-before",`${-h[0]}px`),Ro(i,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const P=-e.snapGrid[0],O=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(R=>R+P),e.slidesGrid=e.slidesGrid.map(R=>R+O)}if(m!==d&&e.emit("slidesLengthChange"),h.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==g&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!u&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const P=`${r.containerModifierClass}backface-hidden`,O=e.el.classList.contains(P);m<=r.maxBackfaceHiddenSlides?O||e.el.classList.add(P):O&&e.el.classList.remove(P)}}function ub(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const l=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(l(a))}else n.push(l(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function db(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function pb(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let l=-e;i&&(l=e),r.forEach(c=>{c.classList.remove(n.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let c=0;c<r.length;c+=1){const u=r[c];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(l+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+a),m=(l-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+a),h=-(l-d),y=h+t.slidesSizesGrid[c];(h>=0&&h<t.size-1||y>1&&y<=t.size||h<=0&&y>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(c),r[c].classList.add(n.slideVisibleClass)),u.progress=i?-p:p,u.originalProgress=i?-m:m}}function fb(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:l,progressLoop:a}=t;const c=o,u=l;if(r===0)i=0,o=!0,l=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,l=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[d],h=t.slidesGrid[p],y=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=m?a=(v-m)/y:a=(v+y-h)/y,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:o,isEnd:l}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!c&&t.emit("reachBeginning toEdge"),l&&!u&&t.emit("reachEnd toEdge"),(c&&!o||u&&!l)&&t.emit("fromEdge"),t.emit("progress",i)}function hb(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,l=c=>Rt(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];t.forEach(c=>{c.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let a;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${c}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(n.slideActiveClass);let c=Z3(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!c&&(c=t[0]),c&&c.classList.add(n.slideNextClass);let u=J3(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const Jo=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const i=r.querySelector(`.${e.params.lazyPreloaderClass}`);i&&i.remove()}},Ta=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Yc=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const l=i,a=[l-t];a.push(...Array.from({length:t}).map((c,u)=>l+r+u)),e.slides.forEach((c,u)=>{a.includes(c.column)&&Ta(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let l=i-t;l<=o+t;l+=1){const a=(l%n+n)%n;(a<i||a>o)&&Ta(e,a)}else for(let l=Math.max(i-t,0);l<=Math.min(o+t,n-1);l+=1)l!==i&&(l>o||l<i)&&Ta(e,l)};function mb(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function gb(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:l,snapIndex:a}=t;let c=e,u;const d=m=>{let h=m-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof c>"u"&&(c=mb(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const m=Math.min(i.slidesPerGroupSkip,c);u=m+Math.floor((c-m)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),c===o){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=d(c));return}let p;t.virtual&&i.virtual.enabled&&i.loop?p=d(c):t.slides[c]?p=parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):p=c,Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:l,realIndex:p,previousIndex:o,activeIndex:c}),t.initialized&&Yc(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function xb(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i=!1,o;if(r){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===r){i=!0,o=l;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var vb={updateSize:ab,updateSlides:cb,updateAutoHeight:ub,updateSlidesOffset:db,updateSlidesProgress:pb,updateProgress:fb,updateSlidesClasses:hb,updateActiveIndex:gb,updateClickedSlide:xb};function yb(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let l=X3(o,e);return l+=t.cssOverflowAdjustment(),r&&(l=-l),l||0}function wb(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:l}=n;let a=0,c=0;const u=0;n.isHorizontal()?a=r?-e:e:c=e,i.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:c,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-c:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${c}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function bb(){return-this.snapGrid[0]}function Sb(){return-this.snapGrid[this.snapGrid.length-1]}function jb(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:l,wrapperEl:a}=o;if(o.animating&&l.preventInteractionOnTransition)return!1;const c=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>c?d=c:r&&e<u?d=u:d=e,o.updateProgress(d),l.cssMode){const p=o.isHorizontal();if(t===0)a[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return bg({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var kb={getTranslate:yb,setTranslate:wb,minTranslate:bb,maxTranslate:Sb,translateTo:jb};function Cb(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function Cg(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:l}=t;let a=r;if(a||(o>l?a="next":o<l?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==l){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function Eb(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Cg({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function _b(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Cg({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Pb={setTransition:Cb,transitionStart:Eb,transitionEnd:_b};function Nb(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let l=e;l<0&&(l=0);const{params:a,snapGrid:c,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:m,wrapperEl:h,enabled:y}=o;if(o.animating&&a.preventInteractionOnTransition||!y&&!r&&!i)return!1;const v=Math.min(o.params.slidesPerGroupSkip,l);let b=v+Math.floor((l-v)/o.params.slidesPerGroup);b>=c.length&&(b=c.length-1);const x=-c[b];if(a.normalizeSlideIndex)for(let g=0;g<u.length;g+=1){const w=-Math.floor(x*100),S=Math.floor(u[g]*100),C=Math.floor(u[g+1]*100);typeof u[g+1]<"u"?w>=S&&w<C-(C-S)/2?l=g:w>=S&&w<C&&(l=g+1):w>=S&&(l=g)}if(o.initialized&&l!==p&&(!o.allowSlideNext&&(m?x>o.translate&&x>o.minTranslate():x<o.translate&&x<o.minTranslate())||!o.allowSlidePrev&&x>o.translate&&x>o.maxTranslate()&&(p||0)!==l))return!1;l!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(x);let f;if(l>p?f="next":l<p?f="prev":f="reset",m&&-x===o.translate||!m&&x===o.translate)return o.updateActiveIndex(l),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(x),f!=="reset"&&(o.transitionStart(n,f),o.transitionEnd(n,f)),!1;if(a.cssMode){const g=o.isHorizontal(),w=m?x:-x;if(t===0){const S=o.virtual&&o.params.virtual.enabled;S&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),S&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[g?"scrollLeft":"scrollTop"]=w})):h[g?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return bg({swiper:o,targetPosition:w,side:g?"left":"top"}),!0;h.scrollTo({[g?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(x),o.updateActiveIndex(l),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,f),t===0?o.transitionEnd(n,f):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,f))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Tb(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let o=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?o=o+i.virtual.slidesBefore:o=i.getSlideIndexByData(o)),i.slideTo(o,t,n,r)}function Ib(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:l}=r;if(!i)return r;let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<o.slidesPerGroupSkip?1:a,u=r.virtual&&o.virtual.enabled;if(o.loop){if(l&&!u&&o.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function Lb(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:l,rtlTranslate:a,enabled:c,animating:u}=r;if(!c)return r;const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function m(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const h=m(p),y=o.map(x=>m(x));let v=o[y.indexOf(h)-1];if(typeof v>"u"&&i.cssMode){let x;o.forEach((f,g)=>{h>=f&&(x=g)}),typeof x<"u"&&(v=o[x>0?x-1:x])}let b=0;if(typeof v<"u"&&(b=l.indexOf(v),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const x=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(x,e,t,n)}return r.slideTo(b,e,t,n)}function Ab(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function Ob(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const l=Math.min(i.params.slidesPerGroupSkip,o),a=l+Math.floor((o-l)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[a]){const u=i.snapGrid[a],d=i.snapGrid[a+1];c-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],d=i.snapGrid[a];c-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function Rb(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const l=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Rt(n,`${l}[data-swiper-slide-index="${o}"]`)[0]),Kc(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Rt(n,`${l}[data-swiper-slide-index="${o}"]`)[0]),Kc(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var zb={slideTo:Nb,slideToLoop:Tb,slideNext:Ib,slidePrev:Lb,slideReset:Ab,slideToClosest:Ob,slideToClickedSlide:Rb};function Mb(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Rt(r,`.${n.slideClass}, swiper-slide`).forEach((o,l)=>{o.setAttribute("data-swiper-slide-index",l)}),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function $b(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:l,byMousewheel:a}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:m,params:h}=c;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&h.virtual.enabled){n&&(!h.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):h.centeredSlides&&c.snapIndex<h.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=d,c.allowSlideNext=p,c.emit("loopFix");return}const y=h.slidesPerView==="auto"?c.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let v=h.loopedSlides||y;v%h.slidesPerGroup!==0&&(v+=h.slidesPerGroup-v%h.slidesPerGroup),c.loopedSlides=v;const b=[],x=[];let f=c.activeIndex;typeof o>"u"?o=c.getSlideIndex(c.slides.filter(k=>k.classList.contains(h.slideActiveClass))[0]):f=o;const g=r==="next"||!r,w=r==="prev"||!r;let S=0,C=0;if(o<v){S=Math.max(v-o,h.slidesPerGroup);for(let k=0;k<v-o;k+=1){const N=k-Math.floor(k/u.length)*u.length;b.push(u.length-N-1)}}else if(o>c.slides.length-v*2){C=Math.max(o-(c.slides.length-v*2),h.slidesPerGroup);for(let k=0;k<C;k+=1){const N=k-Math.floor(k/u.length)*u.length;x.push(N)}}if(w&&b.forEach(k=>{c.slides[k].swiperLoopMoveDOM=!0,m.prepend(c.slides[k]),c.slides[k].swiperLoopMoveDOM=!1}),g&&x.forEach(k=>{c.slides[k].swiperLoopMoveDOM=!0,m.append(c.slides[k]),c.slides[k].swiperLoopMoveDOM=!1}),c.recalcSlides(),h.slidesPerView==="auto"&&c.updateSlides(),h.watchSlidesProgress&&c.updateSlidesOffset(),n){if(b.length>0&&w)if(typeof t>"u"){const k=c.slidesGrid[f],E=c.slidesGrid[f+S]-k;a?c.setTranslate(c.translate-E):(c.slideTo(f+S,0,!1,!0),i&&(c.touches[c.isHorizontal()?"startX":"startY"]+=E))}else i&&c.slideToLoop(t,0,!1,!0);else if(x.length>0&&g)if(typeof t>"u"){const k=c.slidesGrid[f],E=c.slidesGrid[f-C]-k;a?c.setTranslate(c.translate-E):(c.slideTo(f-C,0,!1,!0),i&&(c.touches[c.isHorizontal()?"startX":"startY"]+=E))}else c.slideToLoop(t,0,!1,!0)}if(c.allowSlidePrev=d,c.allowSlideNext=p,c.controller&&c.controller.control&&!l){const k={slideRealIndex:t,slideTo:!1,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix(k)}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix(k)}c.emit("loopFix")}function Db(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Fb={loopCreate:Mb,loopFix:$b,loopDestroy:Db};function Bb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Ub(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Hb={setGrabCursor:Bb,unsetGrabCursor:Ub};function Wb(e,t){t===void 0&&(t=this);function n(r){if(!r||r===or()||r===at())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Vb(e){const t=this,n=or(),r=at(),i=t.touchEventsData;i.evCache.push(e);const{params:o,touches:l,enabled:a}=t;if(!a||!o.simulateTouch&&e.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let c=e;c.originalEvent&&(c=c.originalEvent);let u=c.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(u)||"which"in c&&c.which===3||"button"in c&&c.button>0||i.isTouched&&i.isMoved)return;const d=!!o.noSwipingClass&&o.noSwipingClass!=="",p=e.composedPath?e.composedPath():e.path;d&&c.target&&c.target.shadowRoot&&p&&(u=p[0]);const m=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(c.target&&c.target.shadowRoot);if(o.noSwiping&&(h?Wb(m,u):u.closest(m))){t.allowClick=!0;return}if(o.swipeHandler&&!u.closest(o.swipeHandler))return;l.currentX=c.pageX,l.currentY=c.pageY;const y=l.currentX,v=l.currentY,b=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,x=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(b&&(y<=x||y>=r.innerWidth-x))if(b==="prevent")e.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=y,l.startY=v,i.touchStartTime=$s(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let f=!0;u.matches(i.focusableElements)&&(f=!1,u.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==u&&n.activeElement.blur();const g=f&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||g)&&!u.isContentEditable&&c.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",c)}function Gb(e){const t=or(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:l,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",c);return}const u=r.evCache.findIndex(C=>C.pointerId===c.pointerId);u>=0&&(r.evCache[u]=c);const d=r.evCache.length>1?r.evCache[0]:c,p=d.pageX,m=d.pageY;if(c.preventedByNestedSwiper){o.startX=p,o.startY=m;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:p,startY:m,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:m}),r.touchStartTime=$s());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(m<o.startY&&n.translate<=n.maxTranslate()||m>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(p<o.startX&&n.translate<=n.maxTranslate()||p>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;o.currentX=p,o.currentY=m;const h=o.currentX-o.startX,y=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+y**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+y*y>=25&&(C=Math.atan2(Math.abs(y),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",c),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let v=n.isHorizontal()?h:y,b=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(l?1:-1),b=Math.abs(b)*(l?1:-1)),o.diff=v,v*=i.touchRatio,l&&(v=-v,b=-b);const x=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=b>0?"prev":"next";const f=n.params.loop&&!i.cssMode;if(!r.isMoved){if(f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}let g;r.isMoved&&x!==n.touchesDirection&&f&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),g=!0),n.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),v>0?(f&&!g&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**S))):v<0&&(f&&!g&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**S))),w&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Kb(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex(g=>g.pointerId===e.pointerId);if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&!(e.type==="pointercancel"&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:i,touches:o,rtlTranslate:l,slidesGrid:a,enabled:c}=t;if(!c||!i.simulateTouch&&e.pointerType==="mouse")return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=$s(),p=d-n.touchStartTime;if(t.allowClick){const g=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(g&&g[0]||u.target),t.emit("tap click",u),p<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=$s(),Kc(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(i.followFinger?m=l?t.translate:-t.translate:m=-n.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}let h=0,y=t.slidesSizesGrid[0];for(let g=0;g<a.length;g+=g<i.slidesPerGroupSkip?1:i.slidesPerGroup){const w=g<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[g+w]<"u"?m>=a[g]&&m<a[g+w]&&(h=g,y=a[g+w]-a[g]):m>=a[g]&&(h=g,y=a[a.length-1]-a[a.length-2])}let v=null,b=null;i.rewind&&(t.isBeginning?b=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const x=(m-a[h])/y,f=h<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(p>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:h+f):t.slideTo(h)),t.swipeDirection==="prev"&&(x>1-i.longSwipesRatio?t.slideTo(h+f):b!==null&&x<0&&Math.abs(x)>i.longSwipesRatio?t.slideTo(b):t.slideTo(h))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(h+f):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:h+f),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:h))}}function kf(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,l=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=l&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function qb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Yb(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Xb(e){const t=this;Jo(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let Cf=!1;function Qb(){}const Eg=(e,t)=>{const n=or(),{params:r,el:i,wrapperEl:o,device:l}=e,a=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",u=t;i[c]("pointerdown",e.onTouchStart,{passive:!1}),n[c]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[c]("pointerup",e.onTouchEnd,{passive:!0}),n[c]("pointercancel",e.onTouchEnd,{passive:!0}),n[c]("pointerout",e.onTouchEnd,{passive:!0}),n[c]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c]("click",e.onClick,!0),r.cssMode&&o[c]("scroll",e.onScroll),r.updateOnWindowResize?e[u](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",kf,!0):e[u]("observerUpdate",kf,!0),i[c]("load",e.onLoad,{capture:!0})};function Jb(){const e=this,t=or(),{params:n}=e;e.onTouchStart=Vb.bind(e),e.onTouchMove=Gb.bind(e),e.onTouchEnd=Kb.bind(e),n.cssMode&&(e.onScroll=Yb.bind(e)),e.onClick=qb.bind(e),e.onLoad=Xb.bind(e),Cf||(t.addEventListener("touchstart",Qb),Cf=!0),Eg(e,"on")}function Zb(){Eg(this,"off")}var eS={attachEvents:Jb,detachEvents:Zb};const Ef=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function tS(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const c=(l in o?o[l]:void 0)||e.originalParams,u=Ef(e,r),d=Ef(e,c),p=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof c[v]>"u")return;const b=r[v]&&r[v].enabled,x=c[v]&&c[v].enabled;b&&!x&&e[v].disable(),!b&&x&&e[v].enable()});const m=c.direction&&c.direction!==r.direction,h=r.loop&&(c.slidesPerView!==r.slidesPerView||m);m&&n&&e.changeDirection(),et(e.params,c);const y=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!y?e.disable():!p&&y&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),h&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",c)}function nS(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=at(),o=t==="window"?i.innerHeight:n.clientHeight,l=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const c=parseFloat(a.substr(1));return{value:o*c,point:a}}return{value:a,point:a}});l.sort((a,c)=>parseInt(a.value,10)-parseInt(c.value,10));for(let a=0;a<l.length;a+=1){const{point:c,value:u}=l[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=c):u<=n.clientWidth&&(r=c)}return r||"max"}var rS={setBreakpoint:tS,getBreakpoint:nS};function iS(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function oS(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,l=iS(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),i.classList.add(...t),e.emitContainerClasses()}function sS(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var lS={addClasses:oS,removeClasses:sS};function aS(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var cS={checkOverflow:aS},_f={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function uS(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){et(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in o)){et(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),et(t,r)}}const Ia={eventsEmitter:lb,update:vb,translate:kb,transition:Pb,slide:zb,loop:Fb,grabCursor:Hb,events:eS,breakpoints:rS,checkOverflow:cS,classes:lS},La={};let eo=class Ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=et({},n),t&&!n.el&&(n.el=t);const l=or();if(n.el&&typeof n.el=="string"&&l.querySelectorAll(n.el).length>1){const d=[];return l.querySelectorAll(n.el).forEach(p=>{const m=et({},n,{el:p});d.push(new Ut(m))}),d}const a=this;a.__swiper__=!0,a.support=kg(),a.device=nb({userAgent:n.userAgent}),a.browser=ib(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const c={};a.modules.forEach(d=>{d({params:n,swiper:a,extendParams:uS(n,c),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=et({},_f,c);return a.params=et({},u,La,n),a.originalParams=et({},a.params),a.passedParams=et({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(d=>{a.on(d,a.params.on[d])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Rt(n,`.${r.slideClass}, swiper-slide`),o=Ds(i[0]);return Ds(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Rt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),l=(r.maxTranslate()-i)*t+i;r.translateTo(l,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:l,slidesSizesGrid:a,size:c,activeIndex:u}=r;let d=1;if(i.centeredSlides){let p=o[u]?o[u].swiperSlideSize:0,m;for(let h=u+1;h<o.length;h+=1)o[h]&&!m&&(p+=o[h].swiperSlideSize,d+=1,p>c&&(m=!0));for(let h=u-1;h>=0;h-=1)o[h]&&!m&&(p+=o[h].swiperSlideSize,d+=1,p>c&&(m=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?l[p]+a[p]-l[u]<c:l[p]-l[u]<c)&&(d+=1);else for(let p=u-1;p>=0;p-=1)l[u]-l[p]<c&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&Jo(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const l=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const l=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(l.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Rt(r,i())[0])();return!l&&n.params.createElements&&(l=Sg("div",n.params.wrapperClass),r.append(l),Rt(r,`.${n.params.slideClass}`).forEach(a=>{l.append(a)})),Object.assign(n,{el:r,wrapperEl:l,slidesEl:n.isElement?r.parentNode.host:l,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gn(r,"direction")==="rtl"),wrongRTL:gn(l,"display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?Jo(n,i):i.addEventListener("load",o=>{Jo(n,o.target)})}),Yc(n),n.initialized=!0,Yc(n),n.emit("init"),n.emit("afterInit")),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:l,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttribute("style"),l.removeAttribute("style"),a&&a.length&&a.forEach(c=>{c.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),t!==!1&&(r.el.swiper=null,q3(r)),r.destroyed=!0),null}static extendDefaults(t){et(La,t)}static get extendedDefaults(){return La}static get defaults(){return _f}static installModule(t){Ut.prototype.__modules__||(Ut.prototype.__modules__=[]);const n=Ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Ut.installModule(n)),Ut):(Ut.installModule(t),Ut)}};Object.keys(Ia).forEach(e=>{Object.keys(Ia[e]).forEach(t=>{eo.prototype[t]=Ia[e][t]})});eo.use([ob,sb]);const _g=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function er(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function xn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:er(t[r])&&er(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:xn(e[r],t[r]):e[r]=t[r]})}function Pg(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Ng(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Tg(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Ig(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function dS(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function pS(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:l,scrollbarEl:a,paginationEl:c}=e;const u=i.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:d,pagination:p,navigation:m,scrollbar:h,virtual:y,thumbs:v}=t;let b,x,f,g,w,S,C,k;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(x=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||c)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(d.scrollbar||d.scrollbar===!1)&&h&&!h.el&&(g=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||l)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(w=!0);const N=E=>{t[E]&&(t[E].destroy(),E==="navigation"?(t.isElement&&(t[E].prevEl.remove(),t[E].nextEl.remove()),d[E].prevEl=void 0,d[E].nextEl=void 0,t[E].prevEl=void 0,t[E].nextEl=void 0):(t.isElement&&t[E].el.remove(),d[E].el=void 0,t[E].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?C=!0:k=!0),u.forEach(E=>{if(er(d[E])&&er(r[E]))xn(d[E],r[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in r[E]&&!r[E].enabled&&N(E);else{const I=r[E];(I===!0||I===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?I===!1&&N(E):d[E]=r[E]}}),u.includes("controller")&&!x&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&y&&d.virtual.enabled&&(y.slides=n,y.update(!0)),i.includes("children")&&n&&d.loop&&(k=!0),b&&v.init()&&v.update(!0),x&&(t.controller.control=d.controller.control),f&&(t.isElement&&(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-pagination"),t.el.appendChild(c)),c&&(d.pagination.el=c),p.init(),p.render(),p.update()),g&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),t.el.appendChild(a)),a&&(d.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.nextButtonSvg,t.el.appendChild(o)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.prevButtonSvg,t.el.appendChild(l))),o&&(d.navigation.nextEl=o),l&&(d.navigation.prevEl=l),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||k)&&t.loopDestroy(),(C||k)&&t.loopCreate(),t.update()}function fS(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};xn(n,eo.defaults),xn(n,eo.extendedDefaults),n._emitClasses=!0,n.init=!1;const o={},l=_g.map(c=>c.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(c=>{typeof e[c]>"u"||(l.indexOf(c)>=0?er(e[c])?(n[c]={},i[c]={},xn(n[c],e[c]),xn(i[c],e[c])):(n[c]=e[c],i[c]=e[c]):c.search(/on[A-Z]/)===0&&typeof e[c]=="function"?t?r[`${c[2].toLowerCase()}${c.substr(3)}`]=e[c]:n.on[`${c[2].toLowerCase()}${c.substr(3)}`]=e[c]:o[c]=e[c])}),["navigation","pagination","scrollbar"].forEach(c=>{n[c]===!0&&(n[c]={}),n[c]===!1&&delete n[c]}),{params:n,passedParams:i,rest:o,events:r}}function hS(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:l,swiper:a}=e;Pg(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),Ng(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),Tg(t)&&l&&(a.params.scrollbar.el=l,a.originalParams.scrollbar.el=l),a.init(n)}function mS(e,t,n,r,i){const o=[];if(!t)return o;const l=c=>{o.indexOf(c)<0&&o.push(c)};if(n&&r){const c=r.map(i),u=n.map(i);c.join("")!==u.join("")&&l("children"),r.length!==n.length&&l("children")}return _g.filter(c=>c[0]==="_").map(c=>c.replace(/_/,"")).forEach(c=>{if(c in e&&c in t)if(er(e[c])&&er(t[c])){const u=Object.keys(e[c]),d=Object.keys(t[c]);u.length!==d.length?l(c):(u.forEach(p=>{e[c][p]!==t[c][p]&&l(c)}),d.forEach(p=>{e[c][p]!==t[c][p]&&l(c)}))}else e[c]!==t[c]&&l(c)}),o}const gS=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}function Lg(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Ag(e){const t=[];return H.Children.toArray(e).forEach(n=>{Lg(n)?t.push(n):n.props&&n.props.children&&Ag(n.props.children).forEach(r=>t.push(r))}),t}function xS(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return H.Children.toArray(e).forEach(r=>{if(Lg(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Ag(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function vS(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:l}=n,a=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,u=[];for(let d=a;d<c;d+=1)d>=o&&d<=l&&u.push(t[r(d)]);return u.map((d,p)=>H.cloneElement(d,{swiper:e,style:i,key:`slide-${p}`}))}function Ti(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const Pf=j.createContext(null),yS=j.createContext(null),Og=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:l,...a}=e===void 0?{}:e,c=!1;const[u,d]=j.useState("swiper"),[p,m]=j.useState(null),[h,y]=j.useState(!1),v=j.useRef(!1),b=j.useRef(null),x=j.useRef(null),f=j.useRef(null),g=j.useRef(null),w=j.useRef(null),S=j.useRef(null),C=j.useRef(null),k=j.useRef(null),{params:N,passedParams:E,rest:I,events:P}=fS(a),{slides:O,slots:R}=xS(o),W=()=>{y(!h)};Object.assign(N.on,{_containerClasses(A,M){d(M)}});const X=()=>{Object.assign(N.on,P),c=!0;const A={...N};if(delete A.wrapperClass,x.current=new eo(A),x.current.virtual&&x.current.params.virtual.enabled){x.current.virtual.slides=O;const M={cache:!1,slides:O,renderExternal:m,renderExternalUpdate:!1};xn(x.current.params.virtual,M),xn(x.current.originalParams.virtual,M)}};b.current||X(),x.current&&x.current.on("_beforeBreakpoint",W);const de=()=>{c||!P||!x.current||Object.keys(P).forEach(A=>{x.current.on(A,P[A])})},ae=()=>{!P||!x.current||Object.keys(P).forEach(A=>{x.current.off(A,P[A])})};j.useEffect(()=>()=>{x.current&&x.current.off("_beforeBreakpoint",W)}),j.useEffect(()=>{!v.current&&x.current&&(x.current.emitSlidesClasses(),v.current=!0)}),Ti(()=>{if(t&&(t.current=b.current),!!b.current)return x.current.destroyed&&X(),hS({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:k.current,swiper:x.current},N),l&&l(x.current),()=>{x.current&&!x.current.destroyed&&x.current.destroy(!0,!1)}},[]),Ti(()=>{de();const A=mS(E,f.current,O,g.current,M=>M.key);return f.current=E,g.current=O,A.length&&x.current&&!x.current.destroyed&&pS({swiper:x.current,slides:O,passedParams:E,changedParams:A,nextEl:w.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{ae()}}),Ti(()=>{gS(x.current)},[p]);function L(){return N.virtual?vS(x.current,O,p):O.map((A,M)=>H.cloneElement(A,{swiper:x.current,swiperSlideIndex:M}))}return H.createElement(r,Fs({ref:b,className:Ig(`${u}${n?` ${n}`:""}`)},I),H.createElement(yS.Provider,{value:x.current},R["container-start"],H.createElement(i,{className:dS(N.wrapperClass)},R["wrapper-start"],L(),R["wrapper-end"]),Pg(N)&&H.createElement(H.Fragment,null,H.createElement("div",{ref:S,className:"swiper-button-prev"}),H.createElement("div",{ref:w,className:"swiper-button-next"})),Tg(N)&&H.createElement("div",{ref:k,className:"swiper-scrollbar"}),Ng(N)&&H.createElement("div",{ref:C,className:"swiper-pagination"}),R["container-end"]))});Og.displayName="Swiper";const Rg=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:l,lazy:a,virtualIndex:c,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=j.useRef(null),[m,h]=j.useState("swiper-slide"),[y,v]=j.useState(!1);function b(w,S,C){S===p.current&&h(C)}Ti(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){m!=="swiper-slide"&&h("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Ti(()=>{o&&p.current&&!o.destroyed&&h(o.getSlideClasses(p.current))},[o]);const x={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(x):r,g=()=>{v(!0)};return H.createElement(n,Fs({ref:p,className:Ig(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":c,onLoad:g},d),l&&H.createElement(Pf.Provider,{value:x},H.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof l=="number"?l:void 0},f(),a&&!y&&H.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&H.createElement(Pf.Provider,{value:x},f(),a&&!y&&H.createElement("div",{className:"swiper-lazy-preloader"})))});Rg.displayName="SwiperSlide";function zg(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Rt(e.el,`.${r[i]}`)[0];o||(o=Sg("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function wS(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const o=v=>(Array.isArray(v)||(v=[v].filter(b=>!!b)),v);function l(v){let b;return v&&typeof v=="string"&&t.isElement&&(b=t.el.querySelector(v),b)?b:(v&&(typeof v=="string"&&(b=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&b.length>1&&t.el.querySelectorAll(v).length===1&&(b=t.el.querySelector(v))),v&&!b?v:b)}function a(v,b){const x=t.params.navigation;v=o(v),v.forEach(f=>{f&&(f.classList[b?"add":"remove"](...x.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=b),t.params.watchOverflow&&t.enabled&&f.classList[t.isLocked?"add":"remove"](x.lockClass))})}function c(){const{nextEl:v,prevEl:b}=t.navigation;if(t.params.loop){a(b,!1),a(v,!1);return}a(b,t.isBeginning&&!t.params.rewind),a(v,t.isEnd&&!t.params.rewind)}function u(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const v=t.params.navigation;if(t.params.navigation=zg(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let b=l(v.nextEl),x=l(v.prevEl);Object.assign(t.navigation,{nextEl:b,prevEl:x}),b=o(b),x=o(x);const f=(g,w)=>{g&&g.addEventListener("click",w==="next"?d:u),!t.enabled&&g&&g.classList.add(...v.lockClass.split(" "))};b.forEach(g=>f(g,"next")),x.forEach(g=>f(g,"prev"))}function m(){let{nextEl:v,prevEl:b}=t.navigation;v=o(v),b=o(b);const x=(f,g)=>{f.removeEventListener("click",g==="next"?d:u),f.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(f=>x(f,"next")),b.forEach(f=>x(f,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?y():(p(),c())}),r("toEdge fromEdge lock unlock",()=>{c()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:v,prevEl:b}=t.navigation;v=o(v),b=o(b),[...v,...b].filter(x=>!!x).forEach(x=>x.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass))}),r("click",(v,b)=>{let{nextEl:x,prevEl:f}=t.navigation;x=o(x),f=o(f);const g=b.target;if(t.params.navigation.hideOnClick&&!f.includes(g)&&!x.includes(g)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===g||t.pagination.el.contains(g)))return;let w;x.length?w=x[0].classList.contains(t.params.navigation.hiddenClass):f.length&&(w=f[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...x,...f].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),c()},y=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(t.navigation,{enable:h,disable:y,update:c,init:p,destroy:m})}function pi(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function bS(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let l,a=0;const c=f=>(Array.isArray(f)||(f=[f].filter(g=>!!g)),f);function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(f,g){const{bulletActiveClass:w}=t.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${g}-${g}`)))}function p(f){const g=f.target.closest(pi(t.params.pagination.bulletClass));if(!g)return;f.preventDefault();const w=Ds(g)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=t.getSlideIndexByData(w),C=t.getSlideIndexByData(t.realIndex);S>t.slides.length-t.loopedSlides&&t.loopFix({direction:S>C?"next":"prev",activeSlideIndex:S,slideTo:!1}),t.slideToLoop(w)}else t.slideTo(w)}function m(){const f=t.rtl,g=t.params.pagination;if(u())return;let w=t.pagination.el;w=c(w);let S,C;const k=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,N=t.params.loop?Math.ceil(k/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),g.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const E=t.pagination.bullets;let I,P,O;if(g.dynamicBullets&&(l=qc(E[0],t.isHorizontal()?"width":"height",!0),w.forEach(R=>{R.style[t.isHorizontal()?"width":"height"]=`${l*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),I=Math.max(S-a,0),P=I+(Math.min(E.length,g.dynamicMainBullets)-1),O=(P+I)/2),E.forEach(R=>{const W=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(X=>`${g.bulletActiveClass}${X}`)].map(X=>typeof X=="string"&&X.includes(" ")?X.split(" "):X).flat();R.classList.remove(...W)}),w.length>1)E.forEach(R=>{const W=Ds(R);W===S?R.classList.add(...g.bulletActiveClass.split(" ")):t.isElement&&R.setAttribute("part","bullet"),g.dynamicBullets&&(W>=I&&W<=P&&R.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),W===I&&d(R,"prev"),W===P&&d(R,"next"))});else{const R=E[S];if(R&&R.classList.add(...g.bulletActiveClass.split(" ")),t.isElement&&E.forEach((W,X)=>{W.setAttribute("part",X===S?"bullet-active":"bullet")}),g.dynamicBullets){const W=E[I],X=E[P];for(let de=I;de<=P;de+=1)E[de]&&E[de].classList.add(...`${g.bulletActiveClass}-main`.split(" "));d(W,"prev"),d(X,"next")}}if(g.dynamicBullets){const R=Math.min(E.length,g.dynamicMainBullets+4),W=(l*R-l)/2-O*l,X=f?"right":"left";E.forEach(de=>{de.style[t.isHorizontal()?X:"top"]=`${W}px`})}}w.forEach((E,I)=>{if(g.type==="fraction"&&(E.querySelectorAll(pi(g.currentClass)).forEach(P=>{P.textContent=g.formatFractionCurrent(S+1)}),E.querySelectorAll(pi(g.totalClass)).forEach(P=>{P.textContent=g.formatFractionTotal(N)})),g.type==="progressbar"){let P;g.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const O=(S+1)/N;let R=1,W=1;P==="horizontal"?R=O:W=O,E.querySelectorAll(pi(g.progressbarFillClass)).forEach(X=>{X.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${W})`,X.style.transitionDuration=`${t.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(E.innerHTML=g.renderCustom(t,S+1,N),I===0&&i("paginationRender",E)):(I===0&&i("paginationRender",E),i("paginationUpdate",E)),t.params.watchOverflow&&t.enabled&&E.classList[t.isLocked?"add":"remove"](g.lockClass)})}function h(){const f=t.params.pagination;if(u())return;const g=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let w=t.pagination.el;w=c(w);let S="";if(f.type==="bullets"){let C=t.params.loop?Math.ceil(g/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>g&&(C=g);for(let k=0;k<C;k+=1)f.renderBullet?S+=f.renderBullet.call(t,k,f.bulletClass):S+=`<${f.bulletElement} ${t.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(t,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(t,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{f.type!=="custom"&&(C.innerHTML=S||""),f.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(pi(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",w[0])}function y(){t.params.pagination=zg(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const f=t.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&t.isElement&&(g=t.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(t.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...t.el.querySelectorAll(f.el)],g.length>1&&(g=g.filter(w=>jg(w,".swiper")[0]===t.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(t.pagination,{el:g}),g=c(g),g.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(f.clickableClass),w.classList.add(f.modifierClass+f.type),w.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(f.lockClass)}))}function v(){const f=t.params.pagination;if(u())return;let g=t.pagination.el;g&&(g=c(g),g.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&w.removeEventListener("click",p)})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const f=t.params.pagination;let{el:g}=t.pagination;g=c(g),g.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?x():(y(),h(),m())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{h(),m()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:f}=t.pagination;f&&(f=c(f),f.forEach(g=>g.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(f,g)=>{const w=g.target,S=c(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=c(f),f.forEach(g=>g.classList.remove(t.params.pagination.paginationDisabledClass))),y(),h(),m()},x=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=c(f),f.forEach(g=>g.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:b,disable:x,render:h,update:m,init:y,destroy:v})}const SS=()=>{const e=mg.slice(-4).sort((n,r)=>r.id-n.id),t=()=>{window.scrollTo({top:0})};return s.jsxs(H2,{children:[s.jsx("div",{className:"visual1",children:s.jsx("div",{className:"inner",children:s.jsx("p",{onClick:t,children:s.jsxs(te,{to:"/squad",children:[s.jsx("strong",{children:"Squad Maker"}),s.jsx("i",{className:"xi-long-arrow-right"})]})})})}),s.jsx("div",{className:"visual2",children:s.jsx("div",{className:"inner",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(te,{to:"/PlayerInfo",onClick:t,children:[s.jsx("div",{children:s.jsx("img",{src:"./images/visual/visual1.jpg",alt:""})}),s.jsxs("p",{children:[s.jsx("strong",{children:"All Players"}),s.jsx("i",{className:"xi-long-arrow-right"})]})]})}),s.jsx("li",{children:s.jsxs(te,{to:"/game_schedule",onClick:t,children:[s.jsx("div",{children:s.jsx("img",{src:"./images/visual/notice.png",alt:""})}),s.jsxs("p",{children:[s.jsx("strong",{children:"Game Schedule"}),s.jsx("i",{className:"xi-long-arrow-right"})]})]})}),s.jsx("li",{children:s.jsxs(te,{to:"/notice",onClick:t,children:[s.jsx("div",{children:s.jsx("img",{src:"./images/visual/visual3.png",alt:""})}),s.jsxs("p",{children:[s.jsx("strong",{children:"Notice"}),s.jsx("i",{className:"xi-long-arrow-right"})]})]})})]})})}),s.jsx("div",{className:"visual3",children:s.jsx("div",{className:"inner",children:s.jsx(te,{to:"/store",onClick:t,children:s.jsx("p",{children:s.jsx("i",{className:"xi-long-arrow-right"})})})})}),s.jsxs("div",{className:"visual4",children:[s.jsx("h3",{children:"latest news"}),s.jsx("ul",{className:"newsList",children:e.map(n=>s.jsx(yg,{item:n},n.id))}),s.jsx("p",{children:s.jsxs(te,{to:"/news",onClick:t,children:[s.jsx("span",{children:"더보기"}),s.jsx("i",{className:"xi-long-arrow-right"})]})})]})]})};var Mg=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},$g=ul(Nf||(Nf=Mg([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));M1(Tf||(Tf=Mg(["",""],["",""])),$g);var Nf,Tf;const jS=M1`
  ${$g}
  /* other styles */
  body{
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  li{
    list-style: none;
  }
`,kS=V.div`
        h2{
            ${rn}
            ${Ft}
            background-image: url('./images/visual/visual7.png'); 
            background-color : #000;
            
        }
        .news{
            ${ke} 
            margin-top: 100px;
            .topSearch{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ccc;
                padding-bottom: 30px;
                margin-bottom: 30px;
                b{
                    font-weight: 700;
                    font-size: 18px;
                }
                span{
                    display: block;
                    text-indent: 10px;
                    padding-top: 10px;
                }
                form{
                    input{
                        border: 1px solid ${F};
                        padding: 10px 15px;
                        box-sizing: border-box;
                        height: 45px;
                        width: 300px;
                        font-size: 16px;
                        vertical-align: middle;
                    }
                    button{
                        vertical-align: middle;
                        height: 45px;
                        width: 50px;
                        border: none;
                        border: 1px solid ${F};
                        background:  ${F};
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }
            .newsList{
                display: flex;
                flex-wrap: wrap;
                li{
                    box-sizing: border-box;
                    width: 21%;
                    margin-right: 5.3%;
                    margin-bottom: 50px;
                    &:hover{
                        box-shadow: 1px 1px 5px #999;
                        img{
                            transform: scale(1.2);
                        }
                        
                    }
                    &:nth-child(4n){
                        margin-right: 0px;
                    }
                    .imgbox{
                        overflow: hidden;
                        img{
                            width: 100%;
                            transition: 0.5s;
                        }
                    }
                    h3{
                        margin: 10px 0px;
                        font-size: 18px;
                        font-weight: 700;
                        padding: 0px 10px;
                    }
                    .date_view{
                        padding: 0px 10px 10px;
                        
                        span{
                            color: #999;
                            display: inline-block;
                            margin-right: 20px;
                            position: relative;
                            &:first-child::after{
                                content: "";
                                display: block;
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: -10px;
                                width: 1px;
                                height: 16px;
                                background: #999;
                            }
                            i{
                                vertical-align: middle;
                                margin-right: 5px;
                                &.xi-eye-o{
                                    vertical-align: -10%;
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }
            }
            .moreBtn{
                text-align: center;
                margin-top: 30px;
                button{

                    ${xt}
                    width: 400px;
                    background: ${F};
                    span{
                        ${vt}

                    }
                }
            }
        }
`,CS=V.div`
.newsDetail{
    
    .title{
        ${Ft}
        background-image: url('./images/visual/newsdetail.png');
        h3{
            width: 1200px;
            margin: auto;
            font-size: 35px;
            text-align: center;
            font-weight: 700;
            padding: 100px 0px;
        }
        .date{
            ${ke} 
            padding-bottom: 50px;
            span{
                color: #999;
                display: inline-block;
                margin-right: 20px;
                position: relative;
                &:first-child::after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -10px;
                    width: 1px;
                    height: 16px;
                    background: #999;
                }
                i{
                    vertical-align: middle;
                    margin-right: 5px;
                    &.xi-eye-o{
                        vertical-align: -10%;
                        font-size: 18px;
                    }
                }
            }
            .icon{
                color: #999;
                position: absolute;
                bottom: 50px; 
                right: 0px;
                i{
                    background: #fff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    margin-left: 20px;
                    font-size: 18px;
                    display: inline-block;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
    .txt{
        ${ke} 
        margin-top: 100px;
        
        .swiper{
            width: 1000px;
            padding-bottom: 100px;
            .imgbox{
                margin: auto;
                width: 800px;
            }
            img{
                width:100%;
            }
            .swiper-pagination{
                bottom: 50px;
            }
        }
        p{
            white-space: pre-wrap; 
            padding-bottom: 100px;
            border-bottom: 1px solid #999;
        }
    
    }
}
.btnWrap{
    ${ke}
    P{
        &:first-child{
            text-align: end;
            margin-bottom: 50px;
            button{
                background: #333;
                width: 200px;
                height: 50px;
                font-size: 18px;
                cursor: pointer;
                margin-top:50px;
                a{
                    display: block;
                    width: 100%;
                    color: #fff;
                }
            }
        }
        &.btn{
            &.bordertop{
                border-top: 1px solid #999;
            }
            border-bottom: 1px solid #999;
            padding: 20px;
            box-sizing: border-box;
            span{
                display: inline-block;
                margin-right: 50px;
                color: #999;
            }

        }
    }
}
`,ES=()=>s.jsxs(kS,{children:[s.jsx("h2",{children:"NEWS"}),s.jsx(Ju,{})]}),_S=()=>{const{newsData:e,currentData:t,currentPerPosts:n}=re(a=>a.newsR),r=K(),[i,o]=j.useState(""),l=a=>{a.preventDefault(),r(M3(i))};return j.useEffect(()=>{r(z3()),r(D3())},[n]),s.jsxs("div",{className:"news",children:[s.jsxs("div",{className:"topSearch",children:[i===""?s.jsxs("span",{children:["총 ",s.jsx("b",{children:e.length})," 개"]}):s.jsxs("span",{children:["총 ",s.jsx("b",{children:t.length})," 개"]}),s.jsxs("form",{onSubmit:l,children:[s.jsx("input",{type:"text",value:i,onChange:a=>o(a.target.value),placeholder:"제목을 검색하세요"}),s.jsx("button",{type:"submit",children:s.jsx("i",{children:s.jsx(sd,{})})})]})]}),s.jsx("ul",{className:"newsList",children:t.map(a=>s.jsx(yg,{item:a},a.id))}),s.jsx("p",{className:"moreBtn",children:s.jsx("button",{onClick:()=>r($3(8)),children:s.jsx("span",{children:"더보기"})})})]})};const PS=()=>{const{newsID:e}=f1(),{newsData:t}=re(m=>m.newsR),n=t.find(m=>m.id===Number(e)),r=t.find(m=>m.id===Number(e)-1),i=t.find(m=>m.id===Number(e)+1),{id:o,title:l,date:a,view:c,img:u,desc:d}=n,p=()=>{window.scrollTo({top:0})};return s.jsxs(CS,{children:[s.jsxs("div",{className:"newsDetail",children:[s.jsxs("div",{className:"title",children:[s.jsx("h3",{children:l}),s.jsxs("div",{className:"date",children:[s.jsxs("span",{children:[s.jsx("i",{children:s.jsx(vg,{})}),a]}),s.jsxs("span",{children:[s.jsx("i",{className:"xi-eye-o"}),c.toLocaleString()]}),s.jsxs("div",{className:"icon",children:[s.jsx("i",{children:s.jsx(Q2,{})}),s.jsx("i",{children:s.jsx(tw,{})}),s.jsx("i",{children:s.jsx(xg,{})})]})]})]}),s.jsxs("div",{className:"txt",children:[s.jsx(Og,{modules:[wS,bS],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},children:u.map((m,h)=>s.jsx(Rg,{children:s.jsx("div",{className:"imgbox",children:s.jsx("img",{src:m,alt:l})})},h))}),s.jsx("p",{children:d})]})]}),s.jsxs("div",{className:"btnWrap",children:[s.jsx("p",{children:s.jsx("button",{onClick:p,children:s.jsx(te,{to:"/news",children:"목록으로"})})}),e<t.length&&s.jsx("p",{className:"btn bordertop",children:s.jsxs(te,{to:`/news/${Number(e)+1}`,onClick:p,children:[s.jsx("span",{children:"다음글"}),s.jsx("strong",{children:i.title})]})}),e>1&&s.jsx("p",{className:"btn",children:s.jsxs(te,{to:`/news/${Number(e)-1}`,onClick:p,children:[s.jsx("span",{children:"이전글"}),s.jsx("strong",{children:r.title})]})})]})]})},NS=V.div`
    h2{
        ${rn}
        ${Ft}
        background-position: center;
        background-image: url('./images/visual/notice.png');
    }
    .inner{
        ${ke}
        .selectBox{
            margin-top: 50px;
            text-align: end;
            select{
                width: 150px;
                padding: 10px;
                font-size: 16px;
            }
        }
        ul{
            li{
                border: 1px solid #999;
                box-sizing: border-box;
                padding: 40px 50px;
                margin: 20px 0px;
                display: flex;
                height: 180px;
                .dateBox{
                    width: 300px;
                    p{
                        font-size: 23px;
                        font-weight: 700;
                    }
                    span{

                        display: block;
                        color:#999;
                        margin-bottom: 10px;
                    }
                }
                .score{
                    width: 80%;
                    display: flex;
                    padding-left: 200px;
                    line-height: 100px;
                    strong{
                        width: 200px;
                        text-align: center;
                        font-size: 25px;
                        font-weight: 600;
                    }
                    .imgbox{
                        line-height: 130px;
                    }
                    p{
                        width: 150px;
                        text-align: center;
                        font-size: 25px;
                        font-weight: 600;
                        color: #999;
                        span{
                            padding: 40px;
                        }
                    }
                }
            }
        }
        .paging{
            text-align: center;
            font-size: 18px;
            margin-top:50px;
            i{ 
                cursor: pointer;
                vertical-align: middle;
            }
            span{
                cursor: pointer;
                display: inline-block;
                text-align: center;
                margin: 5px;
                padding: 1px 10px;
                border-radius: 50%;
                box-sizing: border-box;
                background: #eee;
                &.on,&:hover{
                    background: ${F};
                    color: #fff;
                }
            }
        }
    }  
`,TS=({item:e})=>{const{desc:t,country1:n,country1Img:r,country2:i,country2Img:o,date:l,time:a,country1Score:c,country2Score:u}=e;return s.jsxs("li",{children:[s.jsxs("div",{className:"dateBox",children:[s.jsx("p",{children:l}),s.jsx("span",{children:a}),s.jsx("strong",{children:t})]}),s.jsxs("div",{className:"score",children:[s.jsx("div",{className:"imgbox",children:s.jsx("img",{src:r,alt:n})}),s.jsx("strong",{children:n}),s.jsxs("p",{children:[s.jsx("em",{style:{color:n==="한국"?"#000":"#999"},children:c}),s.jsx("span",{children:"vs"}),s.jsx("em",{style:{color:i==="한국"?"#000":"#999"},children:u})]}),s.jsx("strong",{children:i}),s.jsx("div",{className:"imgbox",children:s.jsx("img",{src:o,alt:i})})]})]})},If=[{id:39,desc:"아시안컵·조별리그·경기일(3/3)",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"말레이시아",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/cJH9pZPURSZ68UjxxS4nKw_48x48.png",date:"2024.1.25",time:"오후 8:30",country1Score:"",country2Score:""},{id:38,desc:"아시안컵·조별리그·경기일(2/3)",country1:"요르단",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/9swSmw5NICcCYIQ8FERjhw_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2024.1.20",time:"오후 8:30",country1Score:"",country2Score:""},{id:37,desc:"아시안컵·조별리그·경기일(1/3)",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"바레인",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/HUez63n7xzBx0v__6EfsTA_48x48.png",date:"2024.1.15",time:"오후8:30",country1Score:"",country2Score:""},{id:36,desc:"",country1:"웨일스",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/1JjnDm6Es30LryHzbudyEw_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2023.9.8",time:"오전3:45",country1Score:"",country2Score:""},{id:35,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"엘살바도르",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/88vJq30FdUDnRtijjPJyoA_48x48.png",date:"2023.6.20",time:"",country1Score:"1",country2Score:"1"},{id:34,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"페루",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/1ZizIpPB_eo-u8zYYjnFcg_48x48.png",date:"2023.6.16",time:"",country1Score:"0",country2Score:"1"},{id:33,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"우루과이",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png",date:"2023.3.28",time:"",country1Score:"1",country2Score:"2"},{id:32,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"콜롬비아",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/tXHnA_tDylayacdjWQCJvw_48x48.png",date:"2023.3.24",time:"",country1Score:"2",country2Score:"2"},{id:31,desc:"월드컵·16강전",country1:"브라질",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.12.6",time:"",country1Score:"4",country2Score:"1"},{id:30,desc:"월드컵·H조",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"포르투갈",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png",date:"2022.12.3",time:"",country1Score:"2",country2Score:"1"},{id:29,desc:"월드컵·H조",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"가나",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_48x48.png",date:"2022.11.28",time:"",country1Score:"2",country2Score:"3"},{id:28,desc:"월드컵·H조",country1:"우루과이",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.11.24",time:"",country1Score:"0",country2Score:"0"},{id:27,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"아이슬란드",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/QSlAlD9v6Fm_drC_2z1u8A_48x48.png",date:"2022.11.11",time:"",country1Score:"1",country2Score:"0"},{id:26,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"카메룬",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_48x48.png",date:"2022.9.27",time:"",country1Score:"1",country2Score:"0"},{id:25,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"코스타리카",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/ixZiM5pj2IvvYc15k-zfeQ_48x48.png",date:"2022.9.23",time:"",country1Score:"2",country2Score:"2"},{id:24,desc:"EAFF동아시안컵·최종 라운드",country1:"일본",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.7.27",time:"",country1Score:"3",country2Score:"0"},{id:23,desc:"EAFF동아시안컵·최종 라운드",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"홍콩",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/clVmlDCDO7GWBc-a97NfZQ_48x48.png",date:"2022.7.24",time:"",country1Score:"3",country2Score:"0"},{id:22,desc:"EAFF동아시안컵·최종 라운드",country1:"중국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/8Cr5Gw-79PpIX2rIEZ7Pvg_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.7.20",time:"",country1Score:"0",country2Score:"3"},{id:21,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"이집트",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/lYah1Uqw37XdicC6C4HNqg_48x48.png",date:"2022.6.14",time:"",country1Score:"4",country2Score:"1"},{id:20,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"파라과이",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/-FN-y84Al3dbth0hW1t5Qg_48x48.png",date:"2022.6.10",time:"",country1Score:"2",country2Score:"2"},{id:19,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"칠레",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/cI5rCchv6SjDgZ5NuEaMMQ_48x48.png",date:"2022.6.6",time:"",country1Score:"2",country2Score:"0"},{id:18,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"브라질",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png",date:"2022.6.2",time:"",country1Score:"1",country2Score:"5"},{id:17,desc:"월드컵 예선·3차 예전",country1:"UAE",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/v_vORXEGt13cTEb-zw7yWA_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.3.29",time:"",country1Score:"1",country2Score:"0"},{id:16,desc:"월드컵 예선·3차 예전",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"이란",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_48x48.png",date:"2022.3.24",time:"",country1Score:"2",country2Score:"0"},{id:15,desc:"월드컵 예선·3차 예전",country1:"시리아",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/S-bkaB9RN4QrMGWgHwKOmg_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.2.1",time:"",country1Score:"0",country2Score:"2"},{id:14,desc:"월드컵 예선·3차 예전",country1:"레바논",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/SVBzrEoo3aCu2Lw2wcv4LQ_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.1.27",time:"",country1Score:"0",country2Score:"1"},{id:13,desc:"",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"몰도바",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/ze_l59X1MjqqpEe0Re16cw_48x48.png",date:"2022.1.21",time:"",country1Score:"4",country2Score:"0"},{id:12,desc:"",country1:"아이슬란드",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/QSlAlD9v6Fm_drC_2z1u8A_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2022.1.15",time:"",country1Score:"1",country2Score:"5"},{id:11,desc:"월드컵 예선·3차 예전",country1:"이라크",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/S5ivsscrfCG1mgqceKMPlQ_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2021.11.17",time:"",country1Score:"0",country2Score:"3"},{id:10,desc:"월드컵 예선·3차 예전",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"UAE",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/v_vORXEGt13cTEb-zw7yWA_48x48.png",date:"2021.11.11",time:"",country1Score:"1",country2Score:"0"},{id:9,desc:"월드컵 예선·3차 예전",country1:"이란",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2021.10.12",time:"",country1Score:"1",country2Score:"1"},{id:8,desc:"월드컵 예선·3차 예전",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"시리아",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/S-bkaB9RN4QrMGWgHwKOmg_48x48.png",date:"2021.10.7",time:"",country1Score:"2",country2Score:"1"},{id:7,desc:"월드컵 예선·3차 예전",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"레바논",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/SVBzrEoo3aCu2Lw2wcv4LQ_48x48.png",date:"2021.9.7",time:"",country1Score:"1",country2Score:"0"},{id:6,desc:"월드컵 예선·3차 예전",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"이라크",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/S5ivsscrfCG1mgqceKMPlQ_48x48.png",date:"2021.9.2",time:"",country1Score:"0",country2Score:"0"},{id:5,desc:"월드컵 예선·2라운드",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"레바논",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/SVBzrEoo3aCu2Lw2wcv4LQ_48x48.png",date:"2021.6.13",time:"",country1Score:"2",country2Score:"1"},{id:4,desc:"월드컵 예선·2라운드",country1:"스리랑카",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/-6moqr0dxYpIhERhbiVLSA_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2021.6.9",time:"",country1Score:"0",country2Score:"5"},{id:3,desc:"월드컵 예선·2라운드",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"북한",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/D-sduhUbhX3IlvlymeSyCQ_48x48.png",date:"2021.6.7",time:"",country1Score:"",country2Score:""},{id:2,desc:"월드컵 예선·2라운드",country1:"한국",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",country2:"투르크메니스탄",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/5AbmhcQdMLKQQLgvF5Vuiw_48x48.png",date:"2021.6.5",time:"",country1Score:"5",country2Score:"0"},{id:1,desc:"",country1:"일본",country1Img:"https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_48x48.png",country2:"한국",country2Img:"https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png",date:"2021.3.25",time:"",country1Score:"3",country2Score:"0"}],IS={gamescheduledata:If,selectedYearData:If},Dg=ir({name:"gameSchedule",initialState:IS,reducers:{filterSchedule(e,t){e.selectedYearData=t.payload==="all"?e.gamescheduledata:e.gamescheduledata.filter(n=>n.date.split(".")[0]===t.payload)}}}),{filterSchedule:LS}=Dg.actions,AS=Dg.reducer,OS=()=>{const{selectedYearData:e}=re(m=>m.gameScheduleR),t=K(),[n,r]=j.useState(1),i=6,o=Math.ceil(e.length/i),l=(n-1)*i,a=l+i,c=[...Array(o).keys()].map(m=>m+1),u=e.slice(l,a),d=m=>{const h=m.target.value;r(1),t(LS(h))},p=()=>{window.scrollTo({top:0})};return s.jsxs(NS,{children:[s.jsx("h2",{children:"경기일정"}),s.jsxs("div",{className:"inner",children:[s.jsx("div",{className:"selectBox",children:s.jsxs("select",{onChange:d,children:[s.jsx("option",{value:"all",children:"경기일정"}),s.jsx("option",{value:"2024",children:"2024"}),s.jsx("option",{value:"2023",children:"2023"}),s.jsx("option",{value:"2022",children:"2022"}),s.jsx("option",{value:"2021",children:"2021"})]})}),s.jsx("ul",{children:u.map(m=>s.jsx(TS,{item:m},m.id))}),s.jsxs("p",{className:"paging",children:[s.jsx("i",{onClick:()=>{r(1),p()},children:s.jsx(U1,{})}),s.jsx("i",{onClick:()=>{n>1&&r(n-1,p())},children:s.jsx(W1,{})}),c.map(m=>s.jsx("span",{onClick:()=>{r(m),p()},className:n===m?"on":"",children:m},m)),s.jsx("i",{onClick:()=>{n<o&&r(n+1,p())},children:s.jsx(V1,{})}),s.jsx("i",{onClick:()=>{r(o),p()},children:s.jsx(H1,{})})]})]})]})},RS=()=>s.jsx("div",{}),zS=V.div`

        h2{
            ${rn}
            color: #000;
        }
        .login{
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 70px 0px 30px;
            input{
                width: 400px;
                box-sizing: border-box;
                height: 55px;
                margin-bottom: 10px;
                border:none;
                background: #eee;
                padding: 0px 20px;
                outline: none;
            }
            button{
                margin-top: 20px;
                ${xt}
                    width: 380px;
                    background: ${F};
                    span{
                        ${vt}

                    }
            }
        }
        .findBtn{
            text-align: center;
            margin-bottom: 100px;
            span{
                margin-right:50px;
                cursor: pointer;
                position: relative;
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -25px;
                    width: 1px;
                    height: 16px;
                    background: #999;
                }
                &:last-child{
                    margin-right: 0px;
                    &::after{
                        display: none;
                    }
                }
            }
        }
        .popupBox{
            .bg{
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 10;
            }
            .popup{
                position: fixed;
                top: 50%;left: 50%; transform:translate(-50%, -50%);
                z-index: 100;
                width: 700px;
                background: #fff;
                padding: 40px 60px;
                box-sizing: border-box;
                h4{
                    font-size: 25px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #333;
                    margin-bottom: 20px;

                }
                .title{
                    border: 1px solid #333;
                    span{
                        box-sizing: border-box;
                        display: inline-block;
                        width: 50%;
                        text-align: center;
                        height: 60px;
                        line-height: 60px;
                        cursor: pointer;
                        &.on{
                            background: #333;
                            color: #fff;
                        }
                    }
                }
                p{
                    strong{
                        display: inline-block;
                        width: 130px;
                        height: 60px;
                        line-height: 60px;
                        text-indent: 15px;
                    }
                    input[type=radio]{
                        margin-right: 10px;
                    }
                    input[type=text]{
                        height: 60px;
                        line-height: 60px;
                        width: 400px;
                        border:none;
                        text-indent: 15px;
                        &:focus{
                            outline: none;
                        }
                    }
                    &.textID{
                        label{
                            display: inline-block;
                            margin-left: 15px;
                            width: 130px;
                        }
                        input{
                            text-indent: 0px;
                        }
                    }
                    &.certification{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .certificationBtn{
                            border: 1px solid #333;
                            background: #fff;
                            width: 150px;
                            border-radius: 30px;
                            height: 40px;

                            cursor: pointer;
                        }
                    }
                    &:last-child{
                        border:none;
                        margin-top: 20px;
                    }
                    border-bottom: 1px solid #ccc;
                    &.btnWrap{
                        text-align: center;
                        button{
                            ${xt}
                            background: ${Ue};
                            span{
                                ${vt}
                            }
                            &.closeBtn{
                                background: ${F};
                            }
                        }
                    }
                }
            }
        }

`,MS=V.div`
    h2{
        ${rn}
        color: #000;
    }
    .inner{
        ${ke}
    }
    h4{
        font-size: 25px; 
        font-weight: 600;
        padding: 60px 0px 30px;
        position: relative;
        span{
            position: absolute;
            bottom: 30px;
            right: 0px;
            font-size: 14px;
            font-weight: 400;
            
        }
    }
    b{
        color:red;
        padding-right: 10px;
    }
    form{

        table{
            .w1{width: 200px;}
            .w2{width:1200px;}
            .w700{width:500px;}
            .w400{width:400px;}
            .w230{width:230px;}
            .w200{width:150px;}
            .w500{width:500px;}
            tr{
                &:first-child{
                    border-top: 1px solid #333;
                }
                border-bottom: 1px solid #ccc;
                .message{
                    padding-left: 20px;
                    display: inline-block;
                }
                td{
                    padding: 30px 20px;
                    input{
                        padding: 15px;
                    }
                    /* input[type=radio]{
                        padding: 100px;
                    } */
                    button, select{
                        padding: 15px;
                        vertical-align: middle;
                    }
                    &:last-child{
                        label{
                        margin-right: 20px;
                        margin-left: 10px;
                        }

                    }
                    &.telSelect{
                        select{
                            width: 100px;
                        }
                        button{
                            margin-left: 20px;
                            width: 195px;
                        }
                    }
                    &.birthSelect{
                        select{
                            margin-right: 10px;
                        }
                        label{
                            display: inline-block;
                            margin-top: 15px;
                        }
                    }
                    &.addInput{
                        input{
                            margin-right: 20px;
                            margin-bottom: 15px;
                            &.addrBtn{
                                padding: 14px 30px;
                                vertical-align: bottom;
                            }

                        }
                    }
                    .emailSelect{
                        width: 200px;
                        margin-left: 20px;
                    }
                    span{
                        padding: 0px 10px;
                    }
                    &.expiration{
                        p{
                            text-indent: 10px;
                            margin-top: 10px;
                        }
    
                    }
                }
            }
        }
        .clasuseSelect{
            p{
                &:first-child{
                    border-top: 1px solid #333;
                    
                }
                padding: 20px;
                border-bottom: 1px solid #ccc;
                position: relative;
                input{
                    margin-right: 10px;
                }
                span{
                    position: absolute;
                    right: 20px;top: 20px;
                    cursor: pointer;
                }
                em{
                    display: block;
                    height: 0; overflow: auto;
                    white-space: pre-line;
                    transition: 0.3s;
                    &.on{
                    margin: 20px 0px;
    
                        border: 1px solid #ccc;
                        padding: 10px;
                        height: 150px;
                   }
                }
            }
        }
        .submitBtn{
            margin-top: 50px;
            text-align: center;
            button{
                ${xt}
                width: 400px;
                background: ${Ue};
                span{
                    ${vt}
                }
            }
        }
    }


`;V.div`
    h2{
        ${rn}
        color: #000;
    }
    .inner{
        ${ke}
    }
    table{
        margin-top: 100px;
        box-shadow: 0px 0px 10px 2px #ddd;
        width: 100%;
        .w1{width:20%}
        .w2{width:20%}
        .w3{width:auto}
        
        h3{
            
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            /* border: 1px solid #000; */
        }
        tbody{
            tr{

                td{
                    padding: 10px 0px;

                }
                &.firstTr{
                    td{
                        padding-top: 50px;

                    }
                }
                &.lastTr{
                    td{
                        padding-bottom: 50px;
    
                    }

                }
            }

        }
    }
    p{
        margin-top: 50px;
        text-align: end;
        button{
            ${xt}
            width: 200px;
            background: ${F};
            a{
                ${vt}
            }
        }
    }
`;const $S=()=>{const[e,t]=j.useState({userID:"",userPW:""}),[n,r]=j.useState(0),{userID:i,userPW:o}=e,l=u=>{const{value:d,name:p}=u.target;t({...e,[p]:d})},a=u=>{u.preventDefault()},c=Je();return s.jsxs(zS,{children:[s.jsx("h2",{children:"로그인"}),s.jsxs("form",{onSubmit:a,className:"login",children:[s.jsx("input",{type:"text",value:i,name:"userID",onChange:l,placeholder:"아이디"}),s.jsx("input",{type:"password",value:o,name:"userPW",onChange:l,placeholder:"비밀번호"}),s.jsx("button",{type:"submit",children:s.jsx("span",{children:"로그인"})})]}),s.jsxs("p",{className:"findBtn",children:[s.jsx("span",{onClick:()=>r(1),children:"아이디 찾기"}),s.jsx("span",{onClick:()=>r(2),children:"비밀번호 찾기"}),s.jsx("span",{onClick:()=>c("/join"),children:"회원가입"})]}),n===1&&s.jsxs("div",{className:"idFindPopup popupBox",children:[s.jsx("div",{className:"bg"}),s.jsxs("div",{className:"popup",children:[s.jsx("h4",{children:"아이디 찾기"}),s.jsxs("p",{className:"title",children:[s.jsx("span",{className:"on",children:"아이디찾기"}),s.jsx("span",{onClick:()=>r(2),children:"비밀번호 찾기"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"인증방법"}),s.jsx("input",{type:"radio",checked:!0}),s.jsx("label",{htmlFor:"",children:"휴대폰 인증"})]}),s.jsxs("p",{className:"certification",children:[s.jsx("input",{type:"text",placeholder:"본인명의 휴대폰으로 가입한 아이디 찾기"}),s.jsx("button",{className:"certificationBtn",children:"인증하기"})]}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{onClick:()=>r(0),className:"closeBtn",children:s.jsx("span",{children:"닫기"})}),s.jsx("button",{children:s.jsx("span",{children:"확인"})})]})]})]}),n===2&&s.jsxs("div",{className:"pwFindPopup popupBox",children:[s.jsx("div",{className:"bg"}),s.jsxs("div",{className:"popup",children:[s.jsx("h4",{children:"비밀번호 찾기"}),s.jsxs("p",{className:"title",children:[s.jsx("span",{onClick:()=>r(1),children:"아이디찾기"}),s.jsx("span",{className:"on",children:"비밀번호 찾기"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"인증방법"}),s.jsx("input",{type:"radio",checked:!0}),s.jsx("label",{htmlFor:"",children:"휴대폰 인증"})]}),s.jsxs("p",{className:"textID",children:[s.jsx("label",{htmlFor:"",children:"아이디"}),s.jsx("input",{type:"text",placeholder:"아이디입력"})]}),s.jsxs("p",{className:"certification",children:[s.jsx("input",{type:"text",placeholder:"휴대폰 본인인증으로 비밀번호 찾기"}),s.jsx("button",{className:"certificationBtn",children:"인증하기"})]}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{onClick:()=>r(0),className:"closeBtn",children:"닫기"}),s.jsx("button",{children:"확인"})]})]})]})]})},DS=[{id:1,name:"chk1",title:"[필수] 이용약관 동의",isChk:!1,isShow:!1,desc:`제1조(목적)
이 약관은 (주)풋볼스쿼드메이커(전자상거래 사업자)가 운영하는 공식몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조(정의)
① “몰”이란 (주)세정서울지사는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관 등의 명시와 설명 및 개정)
① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호.모사전송번호.전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자등을 이용자가 쉽게 알 수 있도록 00 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회.배송책임.환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.

제4조(서비스의 제공 및 변경)
① “몰”은 다음과 같은 업무를 수행합니다.
  1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
  2. 구매계약이 체결된 재화 또는 용역의 배송
  3. 기타 “몰”이 정하는 업무
② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.

제5조(서비스의 중단)
① “몰”은 컴퓨터 등 정보통신설비의 보수점검.교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다. 
③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.

제6조(회원가입)
① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
  1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
  2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
  3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.

제7조(회원 탈퇴 및 자격 상실 등)
① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.
② 회원이 다음 각 호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다.
  1. 가입 신청 시에 허위 내용을 등록한 경우
  2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
  3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
  4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경
③ “몰”이 회원 자격을 제한.정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.
④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.

제8조(회원에 대한 통지)
① “몰”이 회원에 대한 통지를 하는 경우, 회원이 “몰”과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.
② “몰”은 불특정다수 회원에 대한 통지의 경우 1주일이상 “몰” 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다

제9조(구매신청)
① “몰”이용자는 “몰”상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, “몰”은 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
  1. 재화 등의 검색 및 선택
  2. 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력
  3. 약관내용, 청약철회권이 제한되는 서비스, 배송료.설치비 등의 비용부담과 관련한 내용에 대한 확인
  4. 이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는 표시(예, 마우스 클릭)
  5. 재화등의 구매신청 및 이에 관한 확인 또는 “몰”의 확인에 대한 동의
  6. 결제방법의 선택
② “몰”이 제3자에게 구매자 개인정보를 제공·위탁할 필요가 있는 경우 실제 구매신청 시 구매자의 동의를 받아야 하며, 회원가입 시 미리 포괄적으로 동의를 받지 않습니다. 이 때 “몰”은 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의 개인정보 이용 목적 및 보유·이용 기간 등을 구매자에게 명시하여야 합니다. 다만 「정보통신망이용촉진 및 정보보호 등에 관한 법률」 제25조 제1항에 의한 개인정보 처리위탁의 경우 등 관련 법령에 달리 정함이 있는 경우에는 그에 따릅니다.

제10조 (계약의 성립)
① “몰”은 제9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
  1. 신청 내용에 허위, 기재누락, 오기가 있는 경우
  2. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우
  3. 기타 구매신청에 승낙하는 것이 “몰” 기술상 현저히 지장이 있다고 판단하는 경우
② “몰”의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
③ “몰”의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.

제11조(지급방법)
“몰”에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다. 단, “몰”은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.
1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체
2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제
3. 온라인무통장입금
4. 전자화폐에 의한 결제
5. 수령 시 대금지급
6. 마일리지 등 “몰”이 지급한 포인트에 의한 결제
7. “몰”과 계약을 맺었거나 “몰”이 인정한 상품권에 의한 결제
8. 기타 전자적 지급 방법에 의한 대금 지급 등

제12조(수신확인통지.구매신청 변경 및 취소)
① “몰”은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.
② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 “몰”은 배송 전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만 이미 대금을 지불한 경우에는 제15조의 청약철회 등에 관한 규정에 따릅니다.

제13조(재화 등의 공급)
① “몰”은 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, “몰”이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 “몰”은 이용자가 재화 등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다.
② “몰”은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 “몰”이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상하여야 합니다. 다만 “몰”이 고의.과실이 없음을 입증한 경우에는 그러하지 아니합니다.

제14조(환급)
“몰”은 이용자가 구매신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.

제15조(청약철회 등)
① “몰”과 재화등의 구매에 관한 계약을 체결한 이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다.
② 이용자는 재화 등을 배송 받은 경우 다음 각 호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.
  1. 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다)
  2. 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우
  3. 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우
  4. 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우
③ 제2항제2호 내지 제4호의 경우에 “몰”이 사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.
④ 이용자는 제1항 및 제2항의 규정에 불구하고 재화 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회 등을 할 수 있습니다.

제16조(청약철회 등의 효과)
① “몰”은 이용자로부터 재화 등을 반환받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 이 경우 “몰”이 이용자에게 재화등의 환급을 지연한때에는 그 지연기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률 시행령」제21조의2에서 정하는 지연이자율(괄호 부분 삭제)을 곱하여 산정한 지연이자를 지급합니다.
② “몰”은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
③ 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. “몰”은 이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만 재화 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 “몰”이 부담합니다.
④ 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 “몰”은 청약철회 시 그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.

제17조(개인정보보호)
① “몰”은 이용자의 개인정보 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.
② “몰”은 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.
③ “몰”은 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
④ “몰”은 수집된 개인정보를 목적외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.
⑤ “몰”이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보보호 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.
⑥ 이용자는 언제든지 “몰”이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 “몰”은 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 “몰”은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
⑦ “몰”은 개인정보 보호를 위하여 이용자의 개인정보를 처리하는 자를 최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
⑧ “몰” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.
⑨ “몰”은 개인정보의 수집·이용·제공에 관한 동의란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집·이용·제공에 관한 이용자의 동의거절시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집·이용·제공에 관한 이용자의 동의 거절을 이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 않습니다.

제18조(“몰“의 의무)
① “몰”은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화.용역을 제공하는데 최선을 다하여야 합니다.
② “몰”은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
③ “몰”이 상품이나 용역에 대하여 「표시.광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시.광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
④ “몰”은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.

제19조(회원의 “ID” 및 비밀번호에 대한 의무)
① 제17조의 경우를 제외한 “ID”와 비밀번호에 관한 관리책임은 회원에게 있습니다.
② 회원은 자신의 “ID” 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
③ 회원이 자신의 “ID” 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 “몰”에 통보하고 “몰”의 안내가 있는 경우에는 그에 따라야 합니다.

제20조(이용자의 의무)
이용자는 다음 행위를 하여서는 안 됩니다.
1. 신청 또는 변경시 허위 내용의 등록
2. 타인의 정보 도용
3. “몰”에 게시된 정보의 변경
4. “몰”이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
5. “몰” 기타 제3자의 저작권 등 지적재산권에 대한 침해
6. “몰” 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위

제21조(연결“몰”과 피연결“몰” 간의 관계)
① 상위 “몰”과 하위 “몰”이 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 “몰”(웹 사이트)이라고 하고 후자를 피연결 “몰”(웹사이트)이라고 합니다.
② 연결“몰”은 피연결“몰”이 독자적으로 제공하는 재화 등에 의하여 이용자와 행하는 거래에 대해서 보증 책임을 지지 않는다는 뜻을 연결“몰”의 초기화면 또는 연결되는 시점의 팝업화면으로 명시한 경우에는 그 거래에 대한 보증 책임을 지지 않습니다.

제22조(저작권의 귀속 및 이용제한)
① “몰“이 작성한 저작물에 대한 저작권 기타 지적재산권은 ”몰“에 귀속합니다.
② 이용자는 “몰”을 이용함으로써 얻은 정보 중 “몰”에게 지적재산권이 귀속된 정보를 “몰”의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
③ “몰”은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.

제23조(분쟁해결)
① “몰”은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치.운영합니다.
② “몰”은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
③ “몰”과 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.

제24조(재판권 및 준거법)
① “몰”과 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
② “몰”과 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.

부 칙(시행일) 이 약관은 년 월 일부터 시행합니다. 부 칙(시행일) 이 약관은 년 월 일부터 시행합니다.

#카카오톡 알림톡 시행에 관한 내용

“몰”은 회원가입, 주문안내, 배송안내 등 비광고성 정보를 카카오톡 알림톡으로 알려드리며, 만약 알림톡 수신이 불가능하거나 수신 차단하신 경우에는 일반 문자메시지로 보내드립니다. 카카오톡 알림톡을 통해 안내되는 정보를 와이파이가 아닌 이동통신망으로 이용할 경우, 알림톡 수신 중 데이터 요금이 발생할 수 있습니다. 카카오톡을 통해 발송되는 알림톡 수신을 원치 않으실 경우 반드시 알림톡을 차단하여 주시기 바랍니다.`},{id:2,name:"chk2",title:"[필수] 개인정보 수집 및 이용 동의",isChk:!1,isShow:!1,desc:`1. 개인정보 수집목적 및 이용목적

가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산

콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스

나. 회원 관리

회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달

2. 수집하는 개인정보 항목 : 이름 , 생년월일 , 성별 , 로그인“ID” , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보

3. 개인정보의 보유기간 및 이용기간

원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

가. 회사 내부 방침에 의한 정보 보유 사유

o 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : OO년

나. 관련 법령에 의한 정보보유 사유

o 계약 또는 청약철회 등에 관한 기록

-보존이유 : 전자상거래등에서의소비자보호에관한법률

-보존기간 : 5년

o 대금 결제 및 재화 등의 공급에 관한 기록

-보존이유: 전자상거래등에서의소비자보호에관한법률

-보존기간 : 5년 

o 소비자 불만 또는 분쟁처리에 관한 기록

-보존이유 : 전자상거래등에서의소비자보호에관한법률

-보존기간 : 3년 

o 로그 기록 

-보존이유: 통신비밀보호법

-보존기간 : 3개월

※ 동의를 거부할 수 있으나 거부시 회원 가입이 불가능합니다.`},{id:3,name:"chk3",title:"[선택] SNS 수신 동의",isChk:!1,isShow:!1,desc:`할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 제공하는 유익한 쇼핑정보를 이메일로 받아보실 수 있습니다.

단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.

선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.`},{id:4,name:"chk4",title:"[선택] 이메일 수신 동의",isChk:!1}],FS=()=>{for(let $=new Date().getFullYear();$>=1940;$--);const[e,t]=j.useState(DS),n=$=>{const{name:D,checked:ie}=$.target;t(D==="all"?e.map(me=>({...me,isChk:ie})):e.map(me=>me.name===D?{...me,isChk:!me.isChk}:me))},r=($,D)=>{t(D?e.map(ie=>({...ie,isShow:!1})):e.map(ie=>ie.id===$?{...ie,isShow:!0}:{...ie,isShow:!1}))};j.useState("");const[i,o]=j.useState(""),[l,a]=j.useState(""),[c,u]=j.useState(""),[d,p]=j.useState(""),[m,h]=j.useState(""),[y,v]=j.useState({num1:"",num2:"",num3:""});j.useState(""),console.log(y);const[b,x]=j.useState(""),[f,g]=j.useState(""),[w,S]=j.useState(""),[C,k]=j.useState(""),[N,E]=j.useState(!1),[I,P]=j.useState(!1),[O,R]=j.useState(!1),[W,X]=j.useState(!1),de=$=>{const D=$.target.value;o(D),/^[a-zA-z0-9]{4,12}$/.test(D)?(x("사용가능한 아이디 입니다."),E(!0)):(x("4-12사이 대소문자 또는 숫자만 입력해 주세요!"),E(!1))},ae=$=>{const D=$.target.value;u(D),/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(D)?(g("안전한 비밀번호 입니다."),P(!0)):(g("숫자+영문자+특수문자 조합으로 8~25자리 이상 입력해주세요!"),P(!1))},L=$=>{const D=$.target.value;p(D),c!==D?(S("비밀번호가 동일하지 않습니다!"),R(!1)):(S("똑같은 비밀번호를 입력했습니다."),R(!0))},A=$=>{const D=$.target.value;h(D),/^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/.test(D)?(k("사용 가능한 이메일 입니다."),X(!0)):(k("이메일의 형식이 올바르지 않습니다!"),X(!1))},M=($,D)=>{$.target.value>=0&&$.target.value<=9999&&v({...y,[`num${D}`]:$.target.value})};return s.jsxs(MS,{children:[s.jsx("h2",{children:"회원가입"}),s.jsx("div",{className:"inner",children:s.jsxs("form",{action:"",children:[s.jsxs("h4",{children:["기본정보",s.jsxs("span",{children:[s.jsx("b",{children:"*"}),"필수입력사항"]})]}),s.jsxs("table",{children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"w1"}),s.jsx("col",{className:"w2"})]}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("label",{htmlFor:"userId",children:[s.jsx("b",{children:"*"}),"아이디"]})}),s.jsxs("td",{children:[s.jsx("input",{type:"text",id:"userId",placeholder:"대소문자/숫자, 4~12자리",required:!0,className:"w700",value:i,onChange:de}),s.jsxs("p",{className:"message",children:[" ",b," "]})]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsxs("label",{htmlFor:"userPw",children:[s.jsx("b",{children:"*"}),"비밀번호"]})," "]}),s.jsxs("td",{children:[s.jsx("input",{type:"password",id:"userPw",className:"w700",placeholder:"숫자+영문자+특수문자 8~25자리",required:!0,value:c,onChange:ae}),s.jsx("p",{className:"message",children:f})]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsxs("label",{htmlFor:"userPw2",children:[s.jsx("b",{children:"*"}),"비밀번호 확인"]})," "]}),s.jsxs("td",{children:[s.jsx("input",{type:"password",id:"userPw2",placeholder:"비밀번호를 재입력",required:!0,className:"w700",value:d,onChange:L}),s.jsx("p",{className:"message",children:w})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("label",{htmlFor:"userName",children:[s.jsx("b",{children:"*"}),"이름"]})}),s.jsx("td",{children:s.jsx("input",{type:"text",id:"userName",required:!0,className:"w700",value:l,onChange:$=>a($.target.value)})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("label",{htmlFor:"userEmail",children:[s.jsx("b",{children:"*"}),"이메일"]})}),s.jsxs("td",{children:[s.jsx("input",{type:"email",id:"userEmail",required:!0,className:"w700",value:m,onChange:A}),s.jsx("p",{className:"message",children:C})]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsxs("label",{htmlFor:"userTel",children:[s.jsx("b",{children:"*"}),"휴대폰번호"]})," "]}),s.jsxs("td",{className:"telSelect",children:[s.jsxs("select",{name:"",id:"userTel",title:"선택",onChange:$=>v({...y,num1:$.target.value}),children:[s.jsx("option",{value:"",children:"선택"}),s.jsx("option",{value:"010",children:"010"}),s.jsx("option",{value:"011",children:"011"}),s.jsx("option",{value:"016",children:"016"}),s.jsx("option",{value:"017",children:"017"}),s.jsx("option",{value:"018",children:"018"}),s.jsx("option",{value:"019",children:"019"})]}),s.jsx("span",{children:"-"}),s.jsx("input",{type:"text",required:!0,className:"w200",value:y.num2,onChange:$=>M($,2)}),s.jsx("span",{children:"-"}),s.jsx("input",{type:"text",required:!0,className:"w200",value:y.num3,onChange:$=>M($,3)}),s.jsx("button",{type:"button",children:"본인인증"})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"성별"}),s.jsxs("td",{children:[s.jsx("input",{type:"radio",name:"gender",id:"man"}),s.jsx("label",{htmlFor:"man",children:"남자"}),s.jsx("input",{type:"radio",name:"gender",id:"woman"}),s.jsx("label",{htmlFor:"woman",children:"여자"})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"개인정보 유효기간"}),s.jsxs("td",{className:"expiration",children:[s.jsx("input",{type:"radio",name:"personalInfo",id:"forWithdraw"}),s.jsx("label",{htmlFor:"forWithdraw",children:"탈퇴시까지"}),s.jsx("input",{type:"radio",name:"personalInfo",id:"forYear"}),s.jsx("label",{htmlFor:"forYear",children:"1년"}),s.jsx("p",{children:"* 개인정보 유효기간 경과이후 파기 또는 분리저장, 관리합니다."})]})]})]})]}),s.jsx("h4",{children:"약관동의"}),s.jsxs("div",{className:"clasuseSelect",children:[s.jsxs("p",{children:[s.jsx("input",{type:"checkbox",name:"all",onChange:n,checked:e.filter($=>$.isChk===!1).length<1}),s.jsx("label",{htmlFor:"",children:"이용약관에 모두 동의합니다."})]}),s.jsxs("p",{children:[s.jsx("input",{type:"checkbox",onChange:n,checked:e[0].isChk,name:e[0].name}),s.jsx("label",{htmlFor:"",children:e[0].title}),s.jsx("span",{onClick:()=>r(e[0].id,e[0].isShow),children:"약관보기"}),s.jsx("em",{className:e[0].isShow?"on":"",children:e[0].desc})]}),s.jsxs("p",{children:[s.jsx("input",{type:"checkbox",onChange:n,checked:e[1].isChk,name:e[1].name}),s.jsx("label",{htmlFor:"",children:e[1].title}),s.jsx("span",{onClick:()=>r(e[1].id,e[1].isShow),children:"약관보기"}),s.jsx("em",{className:e[1].isShow?"on":"",children:e[1].desc})]}),s.jsxs("p",{children:[s.jsx("input",{type:"checkbox",onChange:n,checked:e[2].isChk,name:e[2].name}),s.jsx("label",{htmlFor:"",children:e[2].title}),s.jsx("input",{type:"checkbox",onChange:n,checked:e[3].isChk,name:e[3].name}),s.jsx("label",{htmlFor:"",children:e[3].title}),s.jsx("span",{onClick:()=>r(e[2].id,e[2].isShow),children:"약관보기"}),s.jsx("em",{className:e[2].isShow?"on":"",children:e[2].desc})]})]}),s.jsx("p",{className:"submitBtn",children:s.jsx("button",{type:"subnit",children:s.jsx("span",{children:"회원가입"})})})]})})]})},BS=V.div`
    h2{
        ${Ft}
        background-image: url('./images/visual/playstore.png');
        height: 500px;
    }
    .inner{
        ${ke}
        padding-bottom: 100px;
    }
`,US=V.div`
    .popupBG{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
    }
    &.goodsPopup {     
        width: 100%;
        height: 100%;   
        position: fixed;
        z-index:100;
        .inner {
            background: #fff;
            padding-bottom: 0;         
        }
        .goodsDetail {
            width: 100%;
            position: relative;
            padding: 50px;
            box-sizing: border-box;
            margin-top: 120px;
            display: flex;
            .btnPopupClose{
                text-align: center;
                color: #c60027;
                background-color:#fff;
                border: 1px solid #cc7586;                
                font-size: 24px;
                border-radius: 50%;
                position: absolute;
                right: 20px;
                top: 20px;
                width: 40px;
                height: 40px;
                cursor: pointer;
                &:hover {
                    background-color: #c60027;
                color:#fff;
                }
            }
            .goodsLeftImg {
                padding: 50px;
                img{
                    width: 500px;
                    height: 500px;
                }
            }
            .goodsRightInfo {
                width: 60%;
                padding: 50px;
                .brand-title-price {
                    em,strong, span {
                        display: block;
                    }
                    em {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    strong{
                        font-size: 20px;
                    }
                    p {
                        margin: 40px 0;
                        span {
                            font-weight: 700;
                            font-size: 24px;
                        }
                    }
                }
                .delivery-option-etc{

                    border-top: 2px solid #333;
                    border-bottom: 2px solid #333;

                    dl.delivery {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        color:#666;
                        dt{
                            padding-right: 100px;
                        }
                        dd{}
                    }
                    dl.option {

                    }
                   
                }
                .select-size {
                    border-top: 1px solid #ddd;
                    dl.size {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        color:#666;
                        dt{
                            padding-right: 100px;
                        }
                        dd{
                            select{
                                width: 150px;
                                height: 40px;
                                font-size: 16px;
                                padding: 0 10px;
                                background-color: #eee;
                                option{

                                }
                            }
                        }
                    }
                }
                .totalPrice-amount{
                    dl.amount{
                        border-top: 1px solid #ddd;
                        border-bottom: 2px solid #000;
                        display: flex;
                        padding: 10px 0;
                        align-items:center;
                        justify-content:space-between;
                        height: 50px;
                        dt{
                            font-size: 20px;
                            color:#000;
                            font-weight: 500;
                        }
                        dd{                                   
                            button{
                                display: inline-block;
                                margin: 0;
                                padding: 0;
                                width: 30px;
                                height: 50px;
                                border: 1px solid #333;
                                line-height: 50px;
                                box-sizing: border-box;
                                vertical-align:middle;                   
                            }
                            span{
                                background: #ddd;
                                text-align: center;
                                display: inline-block;
                                width: 60px;
                                height: 50px;
                                line-height: 50px;
                                border: 1px solid #333;

                                box-sizing: border-box;
                                vertical-align:middle;                   
                            }

                        }
                    }
                    dl.totalPrice {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        justify-content:space-between;
                        dt{}
                        dd{
                            font-weight: 700;
                            font-size: 24px;
                            color:red;
                        }
                    }
                }                
                .btn-addBasket-addGoBasket {
                    display: flex;
                    justify-content:space-between;
                    button {

                        ${xt}

                        span{
                            ${vt}
                        }
                    }
                    .addBasket {
                        background: ${Ue};
                    }
                    .addGoBasket {
                        background: ${F};
                    }
                }
            }
        }
    }
`,HS=V.nav`
    margin-top: 120px;
    ul {
        width: 300px;
        li {
            cursor: pointer;
            height: 40px;
            font-weight: 500;
            font-size: 20px;
            line-height: 40px;
            &.kfaSelect {
                height: 160px;
            }
            &.wearSelect {
                height: 190px;
            }

            ul{              
                li{
                    height: 30px;
                    margin-left: 10px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 30px;
                }
            }
        }
    }
`,WS=V.div`
    margin-top: 80px;
    margin-bottom: 20px;
    &.categoryInfo {
        display: flex;
        justify-content:space-between;
        span {
            font-weight: 700;
            font-size: 18px;
            b{
                font-size: 16px;
                font-weight: 400;
            }
        }
        select {
            display: block;
            margin-right: 25px;
            width: 180px;
            font-size: 16px;
            padding: 10px;
            
            option{

            }
        }
    }
`,VS=V.ul`
    &.goodslist{
        width: 1100px;
        margin: auto;
        /* height: 1250px; */
        /* border: 1px solid #333; */
        display: flex;
        /* justify-content:space-between; */
        flex-wrap: wrap;
    }
    
`,GS=V.li`
    &.goodsitem {
        /* border: 1px solid #333; */
        cursor: pointer;
        width: 250px;
        height: 430px;
        margin-right: 25px;        
        div{
            text-align: center;
            img{                
                width: 250px;
                height: 250px;
            }
        }
        p {
            
            em {
                display: inline-block;
                margin: 10px 0;
                font-size: 14px;
            }
            strong {
                display: inline-block;
                font-size: 16px;
                margin-bottom: 15px;
                line-height: 1.2;
            }
            span {
                font-weight: 700;
                font-size: 14px;
                b {
                    font-size: 20px;
                }
            }
        }
    }
`,KS=V.p`
    &.paging {
        margin: 20px 0;
        text-align: center;
        button{
            cursor: pointer;
            display: inline-block;
            width: 30px;
            height: 30px;
            font-size: 18px;
            border: none;
            border-radius : 50%;
            margin-right: 10px;
            &:hover, &.on {
                background: ${F};
                color:#fff;
            }
        }
    }
`,Xc=[{id:1,category1:"fashion",category2:"fashion",img:"f3a4b032-60ef-4eea-a57d-fd7113be1f17",extension:"jpg",brand:"corecomm ",name:"여자축구대표팀 전사 머플러 (고강도)",price:22e3,discount:null,soldout:null},{id:2,category1:"accessory",category2:"accessory",img:"9b1d4a33-6fb9-46cb-a428-943e3052af4f",extension:"jpg",brand:"corecomm",name:"여자축구대표팀 유니폼 스마트톡 (홈/원정)",price:8e3,discount:null,soldout:null},{id:3,category1:"ball",category2:"ball",img:"574ddcff-3e9a-4bd2-b21d-ddd4f1130e66",extension:"jpg",brand:"sportstribe",name:"KFA 여자 국가대표팀 사인볼 (4호)",price:15e3,discount:null,soldout:!0},{id:4,category1:"fashion",category2:"fashion",img:"856dc17d-16f9-4645-9eaa-94c43041e282",extension:"png",brand:"corecomm",name:"여자축구대표팀 슬로건 응원타올",price:18e3,discount:null,soldout:null},{id:5,category1:"accessory",category2:"accessory",img:"d4244ee9-ef23-44ee-a539-5c5ed03fec8b",extension:"jpg",brand:"sportstribe",name:"KFA 볼 받침대",price:15e3,discount:null,soldout:null},{id:6,category1:"wears",category2:"wears",img:"e1fd3189-7ecf-4c98-9ef6-a16b30e7b679",extension:"jpg",brand:"nike",name:"나이키 플리스 PARK 20 풀짚 후디(기모) (CW6887010)",price:69e3,discount:30,soldout:null},{id:7,category1:"wears",category2:"wears",img:"c5d0d121-4fd9-4a80-b03b-36b12e764bf7",extension:"jpg",brand:"nike",name:"나이키 플리스 PARK 20 쇼트 KZ(기모) (CW6910010)",price:49e3,discount:30,soldout:null},{id:8,category1:"wears",category2:"wears",img:"dacae737-c195-4c3a-8482-ccb62bcb2de6",extension:"jpg",brand:"nike",name:"나이키 써마 레펠 PARK 20 FALL 자켓(기모) (CW6157010)",price:139e3,discount:30,soldout:null},{id:9,category1:"wears",category2:"wears",img:"b8a5929d-b995-4151-9438-856f38aacea0",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK VII 저지 S/S (BV6708010)",price:29e3,discount:30,soldout:null},{id:10,category1:"wears",category2:"wears",img:"72ee32bc-dcfd-429a-8a48-2da01a35af7a",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK VII 저지 L/S (BV6706010)",price:35e3,discount:30,soldout:null},{id:11,category1:"wears",category2:"wears",img:"1dd7c1b5-672f-48cb-a445-c3c0b1e79ff5",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK III 쇼트 NB K (BV6855100)",price:25e3,discount:30,soldout:null},{id:12,category1:"wears",category2:"wears",img:"b777300c-e825-46d7-8cbf-fd2b6785d60c",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 팬츠 KP (BV6877410)",price:39e3,discount:30,soldout:null},{id:13,category1:"wears",category2:"wears",img:"950e3375-c4f0-4710-95c6-57db5f3f0cd5",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 쇼트 KZ (CW6152010)",price:39e3,discount:30,soldout:!0},{id:14,category1:"wears",category2:"wears",img:"821d3db4-08cd-4e78-a788-a1d586fb30c1",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 하이브리드 티 S/S (CW6936100)",price:45e3,discount:30,soldout:null},{id:15,category1:"wears",category2:"wears",img:"f9e2c384-15b1-46d5-8170-dced5ce9a5e4",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 탑 S/S (BV6883100)",price:29e3,discount:30,soldout:null},{id:16,category1:"wears",category2:"wears",img:"1edad1c5-7299-4b45-a6a2-91e7ff07b60d",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 BIB 팀조끼 (DV7425406)",price:19e3,discount:30,soldout:null},{id:17,category1:"wears",category2:"wears",img:"eb9d448a-e8d9-4722-82ba-5a2ebb6aa31c",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 20 BIB 팀조끼 (DV7425616)",price:19e3,discount:30,soldout:null},{id:18,category1:"wears",category2:"wears",img:"0f540baf-21a5-462b-a7e4-63770c8c01e8",extension:"jpg",brand:"nike",name:"나이키 드라이 PARK 1STLYR 저지 L/S (AV2609010)",price:35e3,discount:30,soldout:null},{id:19,category1:"wears",category2:"wears",img:"48a38ccc-4c25-40e1-85f4-85310de696a3",extension:"jpg",brand:"nike",name:"나이키 RPL PARK 20 우븐 레인 자켓 (BV6881410)",price:55e3,discount:30,soldout:null},{id:20,category1:"wears",category2:"wears",img:"9a6a87ad-fe15-436d-8f1d-0874bccf204e",extension:"jpg",brand:"nike",name:"나이키 PARK 20 티 S/S (CZ0881100)",price:35e3,discount:30,soldout:null},{id:21,category1:"fashion",category2:"fashion",img:"6dac0d6e-ae7b-4081-b20b-f6af11ce60e2",extension:"jpg",brand:"Over The Pitch",name:"P X KFA COREA PLAYER KNIT MUFFLER (RED)",price:3e4,discount:null,soldout:null},{id:22,category1:"accessory",category2:"accessory",img:"12203e1a-3b3a-408e-a1ef-6f3f511d2115",extension:"jpg",brand:"interpark",name:"유니폼키링BK",price:8500,discount:null,soldout:null},{id:23,category1:"accessory",category2:"accessory",img:"c8648826-9f84-4523-9020-88dcbe5c8a39",extension:"jpg",brand:"interpark",name:"유니폼키링RED",price:8500,discount:null,soldout:null},{id:24,category1:"accessory",category2:"accessory",img:"1e3a1fbd-75a9-431d-9392-ba6c52f304bd",extension:"jpg",brand:"interpark",name:"미니 니트 머플러 (이강인)",price:18e3,discount:null,soldout:null},{id:25,category1:"wears",category2:"uniform",img:"2ca1401d-aae5-4ac3-ac88-c4d335c3eddc",extension:"jpg",brand:"nike",name:"AS 코리아 NSW 클럽 BB 크루 L/S(기모) (DH4986063)",price:69e3,discount:"20",soldout:null},{id:26,category1:"wears",category2:"uniform",img:"e55006cd-d55c-4acf-bc7c-65d655611cbc",extension:"jpg",brand:"nike",name:"AS 코리아 나이키 윈터라이즈 AWF 자켓 (DH4892010)",price:129e3,discount:"20",soldout:!0},{id:27,category1:"wears",category2:"uniform",img:"5ee40c32-7b32-4143-96b2-4e631f4e0f1c",extension:"jpg",brand:"nike",name:"AS 코리아 나이키 드라이 스트라이크 드릴 탑 K L/S (DH6464010)",price:85e3,discount:"10",soldout:null},{id:28,category1:"wears",category2:"uniform",img:"d01b0b3b-565c-43d8-8520-aabef44b4b04",extension:"jpg",brand:"nike",name:"AS 코리아 나이키 드라이 스트라이크 팬츠 KP (DH6489010)",price:95e3,discount:"10",soldout:!0},{id:29,category1:"wears",category2:"uniform",img:"efd86569-fe1c-47c9-b8c1-9ba012f2c762",extension:"jpg",brand:"nike",name:"AS 코리아 2022 나이키 드라이 스타디움 홈 저지 L/S (DN0675679)",price:145e3,discount:"null",soldout:!0},{id:30,category1:"wears",category2:"uniform",img:"d0ca5479-d134-4431-929e-be98d232038d",extension:"jpg",brand:"nike",name:"AS 코리아 2022 나이키 드라이 스타디움 어웨이 저지 L/S (DN0674010)",price:145e3,discount:"null",soldout:!0},{id:31,category1:"wears",category2:"uniform",img:"606afee2-9c19-4c3b-8e3f-8621d09e494a",extension:"jpg",brand:"nike",name:"AS 코리아 2022 나이키 드라이 스타디움 홈 저지S/S (DN0712679)",price:119e3,discount:"null",soldout:!0},{id:32,category1:"wears",category2:"uniform",img:"7e3f22a3-4d23-483e-aea1-612c19b31a10",extension:"jpg",brand:"nike",name:"AS 코리아 2022 나이키 드라이 스타디움 어웨이 저지S/S (DN0711010)",price:119e3,discount:"null",soldout:!0}],qS={goodsData:Xc,categoryData:[],currentPage:1,isGoodsPopup:!1,popupData:null,goodsListView:Xc,sortOption:"recent",currentCategory:"all",cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],orderList:[]};let Lf=1;const Fg=ir({name:"goods",initialState:qS,reducers:{onGoodsPopup(e,t){e.isGoodsPopup=!0,e.popupData=Xc.find(n=>n.id===Number(t.payload))},offPopup(e,t){e.isGoodsPopup=!1},setGoodsPage(e,t){e.currentPage=t.payload},setGoodsListView(e,t){switch(e.currentCategory=t.payload,e.currentCategory==="all"?e.goodsListView=e.goodsData:e.goodsListView=e.goodsData.filter(n=>n.category2===e.currentCategory),e.sortOption){case"recent":e.goodsListView.sort((n,r)=>n.id-r.id);break;case"lowPrice":e.goodsListView.sort((n,r)=>n.price-r.price);break;case"highPrice":e.goodsListView.sort((n,r)=>r.price-n.price);break}e.currentPage=1},funcName(e,t){},listSort(e,t){switch(e.sortOption=t.payload,t.payload){case"recent":e.goodsListView.sort((n,r)=>n.id-r.id);break;case"lowPrice":e.goodsListView.sort((n,r)=>n.price-r.price);break;case"highPrice":e.goodsListView.sort((n,r)=>r.price-n.price);break}},onAddCart(e,t){confirm("장바구니에 담으시겠습니까?")?(e.cart=[...e.cart,{...t.payload,id:Lf++}],e.isGoodsPopup=!1,alert("담겼습니다.")):alert("취소되었습니다."),console.log(e.cart),localStorage.setItem("cart",JSON.stringify(e.cart))},onAddGoCart(e,t){e.cart=[...e.cart,{...t.payload,id:Lf++}],e.isGoodsPopup=!1,localStorage.setItem("cart",JSON.stringify(e.cart))},changeAmount(e,t){const n=t.payload.index;e.cart[n].amount=t.payload.newValue,localStorage.setItem("cart",JSON.stringify(e.cart))},onDelCartSelectedItem(e,t){e.cart=e.cart.filter(n=>!(n.id===t.payload.id&&n.size===t.payload.size)),console.log(t.payload.id),console.log(t.payload.size),localStorage.setItem("cart",JSON.stringify(e.cart))},onDelCartAllItem(e,t){e.cart=[],localStorage.setItem("cart",JSON.stringify(e.cart))},changeOrderList(e,t){e.orderList=t.payload}}}),{onGoodsPopup:YS,offPopup:Af,setGoodsPage:XS,setGoodsListView:cr,listSort:QS,onAddCart:JS,changeAmount:Of,onDelCartSelectedItem:ZS,onDelCartAllItem:e4,changeOrderList:t4,onAddGoCart:n4}=Fg.actions,r4=Fg.reducer,i4=({item:e})=>{const{id:t,img:n,brand:r,name:i,price:o,extension:l,discount:a,soldout:c}=e,u=K();return s.jsxs(GS,{className:"goodsitem",onClick:()=>u(YS(t)),children:[s.jsx("div",{children:s.jsx("img",{src:`./images/goods/${n}.${l}`,alt:i,style:c&&{filter:"contrast(0.7) grayscale(1)"}})}),s.jsxs("p",{children:[s.jsx("em",{className:"goodsbrand",children:r}),s.jsx("br",{}),s.jsx("strong",{className:"goodsName",children:i}),s.jsx("br",{}),!c&&s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"goodsPrice",children:[a&&s.jsxs("b",{style:{color:"red",marginRight:5},children:[a,"%"]}),s.jsx("b",{children:(o*(1-a/100)).toLocaleString("kr-KR")}),"원"]}),a&&s.jsxs("b",{style:{color:"gray",marginLeft:5,textDecoration:"line-through"},children:[o.toLocaleString("kr-KR"),"원"]})]}),c&&s.jsx("span",{className:"goodsPrice",children:s.jsx("b",{style:{color:"#555"},children:"품 절"})})]})]})},o4=({goodsData:e,currentPage:t,totalItemCount:n,itemPerPage:r})=>{const i=[];for(let l=1;l<=Math.ceil(n/r);l++)i.push(l);const o=K();return s.jsx(s.Fragment,{children:s.jsx(KS,{className:"paging",children:i.map(l=>s.jsx("button",{className:l===t?"on":"",onClick:()=>o(XS(l)),children:l},l))})})},s4=()=>{const{goodsData:e,currentPage:t,goodsListView:n,currentCategory:r}=re(a=>a.goodsR),i=12,o=n.length,l=K();return j.useEffect(()=>{},[r]),s.jsxs("div",{children:[s.jsxs(WS,{className:"categoryInfo",children:[s.jsxs("span",{children:[o,s.jsx("b",{children:" 개의 상품"})]}),s.jsxs("select",{name:"",id:"",onChange:a=>{l(QS(a.target.value))},children:[s.jsx("option",{value:"recent",children:"최근 등록순"}),s.jsx("option",{value:"lowPrice",children:"낮은 가격순"}),s.jsx("option",{value:"highPrice",children:"높은 가격순"})]})]}),s.jsx(VS,{className:"goodslist",children:n.slice(i*(t-1),i*t).map(a=>s.jsx(i4,{item:a},a.id))}),s.jsx(o4,{goodsListView:n,currentPage:t,totalItemCount:o,itemPerPage:i})]})},l4=()=>{const e=K();return s.jsx(HS,{className:"goodsnav",children:s.jsxs("ul",{children:[s.jsx("li",{onClick:()=>e(cr("all")),children:"전체보기"}),s.jsx("li",{onClick:()=>e(cr("uniform")),children:"국가대표팀"}),s.jsx("li",{onClick:()=>e(cr("wears")),children:"의류"}),s.jsx("li",{onClick:()=>e(cr("ball")),children:"싸인볼 & 공식사용구"}),s.jsx("li",{onClick:()=>e(cr("fashion")),children:"패션잡화"}),s.jsx("li",{onClick:()=>e(cr("accessory")),children:"액세서리"})]})})},a4=()=>{const{popupData:e}=re(k=>k.goodsR),{id:t,img:n,brand:r,name:i,price:o,extension:l,discount:a,category1:c,soldout:u}=e,[d,p]=j.useState(1),[m,h]=j.useState(""),[y,v]=j.useState(e),b=K(),x=Je();j.useEffect(()=>{v({...y,size:m,amount:d})},[d,m]);const f=()=>{d<10&&p(d+1)},g=()=>{d>1&&p(d-1)},w=k=>{h(k.target.value)},S=()=>{if(c==="wears"&&!m){alert("사이즈를 선택해주세요");return}b(JS(y))},C=()=>{if(c==="wears"&&!m){alert("사이즈를 선택해주세요");return}b(n4(y)),x("/cart")};return s.jsxs(US,{className:"goodsPopup",children:[s.jsx("div",{className:"popupBG",onClick:()=>b(Af())}),s.jsx("div",{className:"inner",children:s.jsxs("div",{className:"goodsDetail",children:[s.jsx("button",{className:"btnPopupClose",onClick:()=>b(Af()),children:"x"}),s.jsx("div",{className:"goodsLeftImg",children:s.jsx("img",{src:`./images/goods/${n}.${l}`,alt:i})}),s.jsxs("div",{className:"goodsRightInfo",children:[s.jsxs("div",{className:"brand-title-price",children:[s.jsx("em",{children:r}),s.jsx("strong",{children:i}),s.jsxs("p",{children:[a&&s.jsxs("strong",{style:{color:"gray",textDecoration:"line-through",fontStyle:"italic"},children:[o.toLocaleString("kr-KR"),"원"]}),s.jsxs("span",{children:[a&&s.jsxs("b",{style:{color:"red",marginRight:5},children:[a,"%"]}),(o*(1-a/100)).toLocaleString("kr-KR"),s.jsx("b",{children:"원"})]})]}),u&&s.jsx("p",{children:s.jsx("span",{children:"품절 상품입니다"})})]}),s.jsx("div",{className:"delivery-option-etc",children:s.jsxs("dl",{className:"delivery",children:[s.jsx("dt",{children:"배송비"}),s.jsx("dd",{children:s.jsxs("ul",{children:[s.jsx("li",{children:"유료"}),s.jsx("li",{children:"제주도 : 6,000원"}),s.jsx("li",{children:"도서산간 : 6,000원"})]})})]})}),s.jsx("div",{className:"select-size",children:s.jsxs("dl",{className:"size",children:[s.jsx("dt",{children:"사이즈"}),c==="wears"?s.jsx("dd",{children:s.jsxs("select",{name:"",id:"",onChange:k=>w(k),disabled:u,children:[s.jsx("option",{value:"",children:"사이즈선택"}),s.jsx("option",{value:"S(95)",children:"S(95)"}),s.jsx("option",{value:"M(100)",children:"M(100)"}),s.jsx("option",{value:"L(105)",children:"L(105)"}),s.jsx("option",{value:"XL(110)",children:"XL(110)"})]})}):"사이즈를 선택할 수 없는 상품입니다."]})}),s.jsxs("div",{className:"totalPrice-amount",children:[s.jsxs("dl",{className:"amount",children:[s.jsx("dt",{children:m?`${m}`:""}),s.jsxs("dd",{children:[m&&s.jsx("button",{onClick:g,children:" - "}),m&&s.jsx("span",{children:d}),m&&s.jsx("button",{onClick:f,children:" + "})]})]}),s.jsxs("dl",{className:"totalPrice",children:[s.jsx("dt",{children:"총 상품 금액"}),u?s.jsx("dd",{children:" 품 절 "}):s.jsxs("dd",{children:[(o*(1-a/100)*d).toLocaleString("kr-KR"),"원"]})]})]}),s.jsxs("div",{className:"btn-addBasket-addGoBasket",children:[s.jsx("button",{className:"addBasket",onClick:()=>S(),disabled:u,style:u?{width:"100%"}:{},children:s.jsx("span",{style:u?{fontSize:"24px"}:{},children:u?"품 절":"장바구니 담기"})}),!u&&s.jsx("button",{className:"addGoBasket",onClick:()=>C(),children:s.jsx("span",{children:"바로구매"})})]})]})]})})]})},c4=()=>{const{isGoodsPopup:e}=re(t=>t.goodsR);return s.jsxs(BS,{children:[e&&s.jsx(a4,{}),s.jsx("h2",{}),s.jsx("div",{className:"inner",children:s.jsxs("div",{className:"goodslayout",style:{display:"flex"},children:[s.jsx(l4,{}),s.jsx(s4,{})]})})]})},u4=V.div`
    h2{
        ${rn}
        ${Ft}
        background-image: url('./images/visual/visual3.png');
    }
`,d4=V.div`
    .inner{
        ${ke}
        padding-top: 100px;
        .topInfo{
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
            span{
                text-indent:10px;
                padding-top: 10px;
                b{
                    font-weight: 700;
                    font-size: 18px;
                }
            }
            .searchBtn{
                display: flex;
                select{
                    margin-right: 10px;
                    padding: 10px;
                    font-size: 16px;
                }    
                form{
                    input{
                        border: 1px solid ${F};
                        padding: 10px 15px;
                        box-sizing: border-box;
                        height: 45px;
                        width: 300px;
                        font-size: 16px;
                        vertical-align: middle;
                    }
                    button{
                        vertical-align: middle;
                        height: 45px;
                        width: 50px;
                        border: none;
                        border: 1px solid ${F};
                        background:  ${F};
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
        .noticeListBox{
            table{
                width: 100%;
                .w1{width:15%}
                .w2{width:auto;}
                .w3{width:8%}
                .w4{width:10%}
                .w5{width:10%}
                th{
                    border-top: 1px solid #333;
                    border-bottom: 1px solid #333;
                    padding: 15px 30px;
                }      
                td{
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                    padding: 20px 30px;
                }
                tr{
                    td:nth-child(2){
                        text-align: start;
                        cursor: pointer;
                    }
                    &:last-child{
                        td{
    
                            border-bottom: 1px solid #333;
                        }
                    }
                }
            }
        }
        .pagingBox{
            text-align: center;
            font-size: 18px;
            i{ 
                cursor: pointer;
                vertical-align: middle;
            }
            span{
                cursor: pointer;
                display: inline-block;
                text-align: center;
                margin: 5px;
                padding: 1px 10px;
                border-radius: 50%;
                box-sizing: border-box;
                background: #eee;
                &.on,&:hover{
                    background: ${F};
                    color: #fff;
                }
            }
        }
        .writeBtn{
            text-align: end;
            padding-top: 30px;
            button{
                ${xt}
                width: 200px;  
                background: ${F};
                a{
                    ${vt}
                }
            }
        }
    }
`,p4=V.div`
    .inner{
        ${ke}
        padding: 100px 0px;
    }
    table{
        width: 100%;
        margin-bottom: 50px;        
        .w1{width:10%}
        .w2{width:40%}
        .w3{width:10%}
        .w4{width:40%}
        tr{
            border-bottom: 1px solid #ccc;
            &:first-child{
                border-top: 2px solid #000;
            }
            &:last-child{
                border-bottom: 2px solid #000;
            }
            td{
                padding: 20px;
                &.th{
                    text-align: center;
                    border-right: 1px solid #ccc;
                }
            }
            
        }
    }
    .btnWrap{
        text-align: center;
        button{
            ${xt}
            width: 200px;
            background: ${F};
            &.editBtn{
                background: ${Ue};
                margin: 0px 20px;
            }
            span{
                ${vt}
            }
        }
    }
`,bd=V.div`
    .inner{
        ${ke}
        padding: 100px 0;
    }
    h3{
        font-size: 25px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    form{
        width: 100%;
        .squadBox {
            margin-top: 30px;
            display: block;
            line-height: 1.4;
            color:#fff;
            font-weight: 500;
            span {
                display: inline;               
            }
            strong {
                display: inline;
                margin: 0 3px 0 3px;
                border: none;
                padding: 0;
                color:#fff;
            }
        }
        p{            
            strong{
                display: inline-block;
                border: 1px solid #888;
                width: 150px;
                color: #999;
            }

            select, input, textarea,strong{
                font-size: 16px;
                padding: 10px 20px;
                outline: none;
            }
            &.titleInput{
                display: flex;
                
                select,strong{
                    margin-right: 20px;
                }
                input{
                    width: 100%;
                }
            }
            &.contentBox{
                margin: 20px 0px 30px;
                padding-bottom: 30px;
                border-bottom: 1px solid #ccc;

                textarea{
                    width: 100%;
                    overflow: auto;
                    padding: 30px;
                    box-sizing: border-box;
                }
            }
            &.btnWrap{
                text-align: center;
                button{
                    ${xt}
                    width: 200px;
                    background: ${F};
                    span{
                        ${vt}
                    }
                    &.submitBtn{
                        background: ${Ue};
                        margin-right: 20px;
                    }
                }
            }
            
        }
    }
`,f4=()=>s.jsxs(u4,{children:[s.jsx("h2",{children:"게시판"}),s.jsx(Ju,{})]}),h4=[{id:1,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목1",userName:"김영주",date:"2023.07.10",view:"23",content:"제목9"},{id:2,category:"free_board",categoryName:"자유게시판",squad:null,title:"제목2",userName:"강동준",date:"2023.07.11",view:"18",content:"내용2"},{id:3,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목3",userName:"임주형",date:"2023.07.12",view:"21",content:"내용3"},{id:4,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목4",userName:"최선우",date:"2023.07.12",view:"7",content:"내용4"},{id:5,category:"free_board",categoryName:"자유게시판",squad:null,title:"제목5",userName:"김영주",date:"2023.07.13",view:"13",content:"내용5"},{id:6,category:"free_board",categoryName:"자유게시판",squad:null,title:"제목6",userName:"강동준",date:"2023.07.15",view:"10",content:"내용6"},{id:7,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목7",userName:"임주형",date:"2023.07.17",view:"9",content:"내용7"},{id:8,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목8",userName:"김영주",date:"2023.07.19",view:"7",content:"내용8"},{id:9,category:"free_board",categoryName:"자유게시판",squad:null,title:"제목9",userName:"최선우",date:"2023.07.20",view:"3",content:"내용9"},{id:10,category:"my_squad",categoryName:"나만의 스쿼드",squad:[{id:1,backno:19,positionNo:"form334LW",position:"FW"},{id:2,backno:9,positionNo:"form334ST",position:"FW"},{id:3,backno:16,positionNo:"form334RW",position:"FW"},{id:4,backno:7,positionNo:"form334LCM",position:"MF"},{id:5,backno:6,positionNo:"form334CM",position:"MF"},{id:6,backno:18,positionNo:"form334RCM",position:"MF"},{id:7,backno:3,positionNo:"form334LB",position:"DF"},{id:8,backno:2,positionNo:"form334LCB",position:"DF"},{id:9,backno:22,positionNo:"form334RCB",position:"DF"},{id:10,backno:4,positionNo:"form334RB",position:"DF"},{id:11,backno:1,positionNo:"formGK",position:"GK"}],title:"제목10",userName:"임주형",date:"2023.07.20",view:"2",content:"내용10"}],m4=[{id:1,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]},{id:2,squad:null},{id:3,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]},{id:4,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]},{id:5,squad:null},{id:6,squad:null},{id:7,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]},{id:8,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]},{id:9,squad:null},{id:10,squad:[{id:1,backno:19},{id:2,backno:9},{id:3,backno:16},{id:4,backno:7},{id:5,backno:6},{id:6,backno:18},{id:7,backno:3},{id:8,backno:2},{id:9,backno:22},{id:10,backno:4},{id:11,backno:1}]}],g4={data:h4,noticeData:[],currentCategory:"all",my_squadData:[],free_boardData:[],editData:[],noticeSquadData:m4};let x4=11;const Bg=ir({name:"notice",initialState:g4,reducers:{sortDate(e,t){e.noticeData=e.data.sort((n,r)=>r.id-n.id)},changeCategory(e,t){e.currentCategory=t.payload,t.payload==="all"?e.noticeData=e.data:(e.noticeData=e.data.filter(n=>n.category===t.payload),t.payload==="my_squad"?e.my_squadData=e.noticeData:e.free_boardData=e.noticeData)},onSearch(e,t){e.currentCategory==="all"?e.noticeData=e.data.filter(n=>n.title.includes(t.payload)||n.content.includes(t.payload)||n.userName.includes(t.payload)):e.currentCategory==="my_squad"?(console.log(e.free_boardData),e.noticeData=e.my_squadData.filter(n=>n.title.includes(t.payload)||n.content.includes(t.payload)||n.userName.includes(t.payload))):e.currentCategory==="free_board"&&(e.noticeData=e.free_boardData.filter(n=>n.title.includes(t.payload)||n.content.includes(t.payload)||n.userName.includes(t.payload)))},onViewPlus(e,t){e.data=e.data.map(n=>n.id===t.payload?{...n,view:Number(n.view)+1}:n)},onAdd(e,t){e.data.push({id:x4++,...t.payload,userName:"test",view:0})},onDel(e,t){e.data=e.data.filter(n=>n.id!==t.payload)},onEdit(e,t){e.editData=t.payload},onUpdate(e,t){e.data=e.data.map(n=>n.id===t.payload.id?{...n,...t.payload}:n)}}}),{sortDate:v4,changeCategory:y4,onSearch:w4,onAdd:Ug,onViewPlus:b4,onDel:S4,onEdit:j4,onUpdate:k4}=Bg.actions,C4=Bg.reducer,E4=({item:e})=>{const{id:t,category:n,categoryName:r,title:i,userName:o,date:l,view:a,content:c}=e,u=Je(),d=K();return s.jsxs("tr",{children:[s.jsx("td",{children:r}),s.jsx("td",{onClick:()=>{u(`/notice/${t}`),d(b4(t))},children:i}),s.jsx("td",{children:a}),s.jsx("td",{children:o}),s.jsx("td",{children:l})]})},_4=()=>{const{noticeData:e}=re(h=>h.noticeR),t=K();Je();const[n,r]=j.useState(""),i=h=>{const{value:y}=h.target;t(y4(y))},o=h=>{h.preventDefault(),t(w4(n)),a(1)},[l,a]=j.useState(1),c=5,u=Math.ceil(e.length/c),d=e.slice((l-1)*c,l*c),p=[...Array(u).keys()].map(h=>h+1),m=()=>{window.scrollTo({top:0})};return j.useEffect(()=>{t(v4())},[]),s.jsx(d4,{children:s.jsxs("div",{className:"inner",children:[s.jsxs("div",{className:"topInfo",children:[s.jsxs("span",{children:["총 ",s.jsx("b",{children:e.length})," 개"]}),s.jsxs("div",{className:"searchBtn",children:[s.jsxs("select",{onChange:h=>{i(h),a(1)},children:[s.jsx("option",{value:"all",children:"전체"}),s.jsx("option",{value:"my_squad",children:"나만의 스쿼드"}),s.jsx("option",{value:"free_board",children:"자유게시판"})]}),s.jsxs("form",{action:"",onSubmit:o,children:[s.jsx("input",{type:"text",onChange:h=>r(h.target.value),value:n,placeholder:"제목, 내용, 작성자를 검색하세요"}),s.jsx("button",{type:"submit",children:s.jsx("i",{children:s.jsx(sd,{})})})]})]})]}),s.jsx("div",{className:"noticeListBox",children:s.jsxs("table",{children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"w1"}),s.jsx("col",{className:"w2"}),s.jsx("col",{className:"w3"}),s.jsx("col",{className:"w4"}),s.jsx("col",{className:"w5"})]}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"분류"}),s.jsx("th",{children:"제목"}),s.jsx("th",{children:"조회"}),s.jsx("th",{children:"작성자"}),s.jsx("th",{children:"게시일"})]})}),s.jsx("tbody",{children:d.map(h=>s.jsx(E4,{item:h},h.id))})]})}),s.jsx("p",{className:"writeBtn",children:s.jsxs("button",{onClick:()=>window.scrollTo({top:0}),children:[s.jsx(te,{to:"/notice/writing",children:"글쓰기"})," "]})}),s.jsxs("div",{className:"pagingBox",children:[s.jsx("i",{onClick:()=>{a(1),m()},children:s.jsx(U1,{})}),s.jsx("i",{onClick:()=>{l>1&&a(l-1,m())},children:s.jsx(W1,{})}),p.map(h=>s.jsx("span",{className:l===h?"on":"",onClick:()=>{a(h),l!==h&&m()},children:h},h)),s.jsx("i",{onClick:()=>{l<u&&a(l+1,m())},children:s.jsx(V1,{})}),s.jsx("i",{onClick:()=>{a(u),m()},children:s.jsx(H1,{})})]})]})})},Hg=V.div`    
    .h2bg{
        ${rn}
        ${Ft}
        background-position: 0 -80px;
        background-image: url('./images/visual/visual4.jpg');
        padding-top:200px;
    }
    .inner{
        ${ke}
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
    }
    &.onBoard{
        width: 920px;
        margin: auto;
    }
    .playlistPopupBG {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        background: rgba(0,0,0,0.6);
    }
`,P4=V.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    .playerInfoCalculator{
        /* display: none; */
        /* position: fixed; */
        /* z-index: 10; */
        /* right: 100px; */
        /* top: 150px; */
        /* border-radius:20px; */
        /* background: ${F}; */
        border-top: 5px solid ${F};
        border-bottom: 5px solid ${F};
        /* padding: 20px; */
        box-sizing: border-box;
        width: 300px;
        height: 280px;
        .squad-info, .cal-wrap{
            border-bottom: 1px solid  ${F};
            padding: 20px;
        }
        .personnel{
            padding: 20px;
        }
        p{
            padding: 10px 0px;
            strong {
                display: inline-block;
                width: 150px;
            }
            span{
                font-weight:700;
                font-size: 18px;
            }
        }
    }
    .btnWrap{
        .squadReset{
            ${xt}
            background: ${F};
            width: 100%;
            margin-bottom: 30px;
            a{
                ${vt}
            }
        }
        button{
            ${xt}
            width: 100%;  
            background: ${Ue};
            a{
                ${vt}
            }
        }
    }
`,Wg=V.div`
    width: 920px;
    height: 785px;
    /* border: 1px solid #000; */
    background-image: url("./images/Squad/fieldBG_920_785.png");
    position: relative;
`,Ll=V.div`
    
    width: 140px;
    height: 175px;
    /* border: 1px solid #000; */
    text-align: center;
    /* padding-top: 20px; */
    box-sizing: border-box;
    position: absolute;
    cursor: pointer;
    img {
        transition:0.2s;
        width: 120px;
        height: 150px;
        margin: auto;
        &.imgHover{
            &:hover {
                transform: scale(1.1);
            }
        }        
    }      
    &.onBoard{
        cursor: auto; 
    }
    p{
        /* margin-top: -1px; */
        line-height: 1.4;
        color:#fff;
        font-weight: 500;
        strong {
            display: inline-block;
            margin: 0 3px 0 3px;
        }
    }  
    &.form334LW {
        left: 27%;
        top: 2%;
        transform: translateX(-50%);
    }    
    &.form334ST {
        left: 50%;
        top: -1%;
        transform: translate(-50%);
    }  
    &.form334RW {
        left: 73%;
        top: 2%;
        transform: translateX(-50%);
    }  
    &.form334LCM {
        left: 28%;
        top: 27%;
        transform: translateX(-50%);
    }  
    &.form334CM {
        left: 50%;
        top: 26.5%;
        transform: translateX(-50%);
    }  
    &.form334RCM {
        left: 72%;
        top: 27%;
        transform: translateX(-50%);
    }  
    &.form334LB {
        left: 18%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334LCB {
        left: 39%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RCB {
        left: 61%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RB {
        left: 82%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.formGK {
        left: 50%;
        bottom: 3%;
        transform: translateX(-50%);
    } 
`;function Vg(e,t){return function(){return e.apply(t,arguments)}}const{toString:N4}=Object.prototype,{getPrototypeOf:Sd}=Object,Al=(e=>t=>{const n=N4.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>Al(t)===e),Ol=e=>t=>typeof t===e,{isArray:ni}=Array,to=Ol("undefined");function T4(e){return e!==null&&!to(e)&&e.constructor!==null&&!to(e.constructor)&&ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Gg=Bt("ArrayBuffer");function I4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Gg(e.buffer),t}const L4=Ol("string"),ft=Ol("function"),Kg=Ol("number"),Rl=e=>e!==null&&typeof e=="object",A4=e=>e===!0||e===!1,Zo=e=>{if(Al(e)!=="object")return!1;const t=Sd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},O4=Bt("Date"),R4=Bt("File"),z4=Bt("Blob"),M4=Bt("FileList"),$4=e=>Rl(e)&&ft(e.pipe),D4=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ft(e.append)&&((t=Al(e))==="formdata"||t==="object"&&ft(e.toString)&&e.toString()==="[object FormData]"))},F4=Bt("URLSearchParams"),B4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function po(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ni(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let a;for(r=0;r<l;r++)a=o[r],t.call(null,e[a],a,e)}}function qg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Yg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Xg=e=>!to(e)&&e!==Yg;function Qc(){const{caseless:e}=Xg(this)&&this||{},t={},n=(r,i)=>{const o=e&&qg(t,i)||i;Zo(t[o])&&Zo(r)?t[o]=Qc(t[o],r):Zo(r)?t[o]=Qc({},r):ni(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&po(arguments[r],n);return t}const U4=(e,t,n,{allOwnKeys:r}={})=>(po(t,(i,o)=>{n&&ft(i)?e[o]=Vg(i,n):e[o]=i},{allOwnKeys:r}),e),H4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),W4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},V4=(e,t,n,r)=>{let i,o,l;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&Sd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},G4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},K4=e=>{if(!e)return null;if(ni(e))return e;let t=e.length;if(!Kg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},q4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sd(Uint8Array)),Y4=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},X4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Q4=Bt("HTMLFormElement"),J4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Rf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Z4=Bt("RegExp"),Qg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};po(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},ej=e=>{Qg(e,(t,n)=>{if(ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tj=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ni(e)?r(e):r(String(e).split(t)),n},nj=()=>{},rj=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Aa="abcdefghijklmnopqrstuvwxyz",zf="0123456789",Jg={DIGIT:zf,ALPHA:Aa,ALPHA_DIGIT:Aa+Aa.toUpperCase()+zf},ij=(e=16,t=Jg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function oj(e){return!!(e&&ft(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const sj=e=>{const t=new Array(10),n=(r,i)=>{if(Rl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ni(r)?[]:{};return po(r,(l,a)=>{const c=n(l,i+1);!to(c)&&(o[a]=c)}),t[i]=void 0,o}}return r};return n(e,0)},lj=Bt("AsyncFunction"),aj=e=>e&&(Rl(e)||ft(e))&&ft(e.then)&&ft(e.catch),_={isArray:ni,isArrayBuffer:Gg,isBuffer:T4,isFormData:D4,isArrayBufferView:I4,isString:L4,isNumber:Kg,isBoolean:A4,isObject:Rl,isPlainObject:Zo,isUndefined:to,isDate:O4,isFile:R4,isBlob:z4,isRegExp:Z4,isFunction:ft,isStream:$4,isURLSearchParams:F4,isTypedArray:q4,isFileList:M4,forEach:po,merge:Qc,extend:U4,trim:B4,stripBOM:H4,inherits:W4,toFlatObject:V4,kindOf:Al,kindOfTest:Bt,endsWith:G4,toArray:K4,forEachEntry:Y4,matchAll:X4,isHTMLForm:Q4,hasOwnProperty:Rf,hasOwnProp:Rf,reduceDescriptors:Qg,freezeMethods:ej,toObjectSet:tj,toCamelCase:J4,noop:nj,toFiniteNumber:rj,findKey:qg,global:Yg,isContextDefined:Xg,ALPHABET:Jg,generateString:ij,isSpecCompliantForm:oj,toJSONObject:sj,isAsyncFn:lj,isThenable:aj};function q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}_.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Zg=q.prototype,e0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{e0[e]={value:e}});Object.defineProperties(q,e0);Object.defineProperty(Zg,"isAxiosError",{value:!0});q.from=(e,t,n,r,i,o)=>{const l=Object.create(Zg);return _.toFlatObject(e,l,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),q.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const cj=null;function Jc(e){return _.isPlainObject(e)||_.isArray(e)}function t0(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Mf(e,t,n){return e?e.concat(t).map(function(i,o){return i=t0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function uj(e){return _.isArray(e)&&!e.some(Jc)}const dj=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function zl(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!_.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,l=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(!c&&_.isBlob(y))throw new q("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,v,b){let x=y;if(y&&!b&&typeof y=="object"){if(_.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&uj(y)||(_.isFileList(y)||_.endsWith(v,"[]"))&&(x=_.toArray(y)))return v=t0(v),x.forEach(function(g,w){!(_.isUndefined(g)||g===null)&&t.append(l===!0?Mf([v],w,o):l===null?v:v+"[]",u(g))}),!1}return Jc(y)?!0:(t.append(Mf(b,v,o),u(y)),!1)}const p=[],m=Object.assign(dj,{defaultVisitor:d,convertValue:u,isVisitable:Jc});function h(y,v){if(!_.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));p.push(y),_.forEach(y,function(x,f){(!(_.isUndefined(x)||x===null)&&i.call(t,x,_.isString(f)?f.trim():f,v,m))===!0&&h(x,v?v.concat(f):[f])}),p.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return h(e),t}function $f(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function jd(e,t){this._pairs=[],e&&zl(e,this,t)}const n0=jd.prototype;n0.append=function(t,n){this._pairs.push([t,n])};n0.toString=function(t){const n=t?function(r){return t.call(this,r,$f)}:$f;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function pj(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function r0(e,t,n){if(!t)return e;const r=n&&n.encode||pj,i=n&&n.serialize;let o;if(i?o=i(t,n):o=_.isURLSearchParams(t)?t.toString():new jd(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class fj{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Df=fj,i0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hj=typeof URLSearchParams<"u"?URLSearchParams:jd,mj=typeof FormData<"u"?FormData:null,gj=typeof Blob<"u"?Blob:null,xj=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),vj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zt={isBrowser:!0,classes:{URLSearchParams:hj,FormData:mj,Blob:gj},isStandardBrowserEnv:xj,isStandardBrowserWebWorkerEnv:vj,protocols:["http","https","file","blob","url","data"]};function yj(e,t){return zl(e,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return zt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function wj(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bj(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function o0(e){function t(n,r,i,o){let l=n[o++];const a=Number.isFinite(+l),c=o>=n.length;return l=!l&&_.isArray(i)?i.length:l,c?(_.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!a):((!i[l]||!_.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&_.isArray(i[l])&&(i[l]=bj(i[l])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,i)=>{t(wj(r),i,n,0)}),n}return null}const Sj={"Content-Type":void 0};function jj(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ml={transitional:i0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=_.isObject(t);if(o&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return i&&i?JSON.stringify(o0(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yj(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return zl(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),jj(t)):t}],transformResponse:[function(t){const n=this.transitional||Ml.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){Ml.headers[t]={}});_.forEach(["post","put","patch"],function(t){Ml.headers[t]=_.merge(Sj)});const kd=Ml,kj=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cj=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&kj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ff=Symbol("internals");function fi(e){return e&&String(e).trim().toLowerCase()}function es(e){return e===!1||e==null?e:_.isArray(e)?e.map(es):String(e)}function Ej(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _j=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Oa(e,t,n,r,i){if(_.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Pj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Nj(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class $l{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,c,u){const d=fi(c);if(!d)throw new Error("header name must be a non-empty string");const p=_.findKey(i,d);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||c]=es(a))}const l=(a,c)=>_.forEach(a,(u,d)=>o(u,d,c));return _.isPlainObject(t)||t instanceof this.constructor?l(t,n):_.isString(t)&&(t=t.trim())&&!_j(t)?l(Cj(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=fi(t),t){const r=_.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ej(i);if(_.isFunction(n))return n.call(this,i,r);if(_.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=fi(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Oa(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=fi(l),l){const a=_.findKey(r,l);a&&(!n||Oa(r,r[a],a,n))&&(delete r[a],i=!0)}}return _.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Oa(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return _.forEach(this,(i,o)=>{const l=_.findKey(r,o);if(l){n[l]=es(i),delete n[o];return}const a=t?Pj(o):String(o).trim();a!==o&&delete n[o],n[a]=es(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ff]=this[Ff]={accessors:{}}).accessors,i=this.prototype;function o(l){const a=fi(l);r[a]||(Nj(i,l),r[a]=!0)}return _.isArray(t)?t.forEach(o):o(t),this}}$l.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods($l.prototype);_.freezeMethods($l);const Yt=$l;function Ra(e,t){const n=this||kd,r=t||n,i=Yt.from(r.headers);let o=r.data;return _.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function s0(e){return!!(e&&e.__CANCEL__)}function fo(e,t,n){q.call(this,e??"canceled",q.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(fo,q,{__CANCEL__:!0});function Tj(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ij=zt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,l,a){const c=[];c.push(n+"="+encodeURIComponent(r)),_.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),_.isString(o)&&c.push("path="+o),_.isString(l)&&c.push("domain="+l),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Lj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Aj(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function l0(e,t){return e&&!Lj(t)?Aj(e,t):t}const Oj=zt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const a=_.isString(l)?i(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Rj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zj(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];l||(l=u),n[i]=c,r[i]=u;let p=o,m=0;for(;p!==i;)m+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const h=d&&u-d;return h?Math.round(m*1e3/h):void 0}}function Bf(e,t){let n=0;const r=zj(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=l;n=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:a,rate:c||void 0,estimated:c&&l&&u?(l-o)/c:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const Mj=typeof XMLHttpRequest<"u",$j=Mj&&function(e){return new Promise(function(n,r){let i=e.data;const o=Yt.from(e.headers).normalize(),l=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}_.isFormData(i)&&(zt.isStandardBrowserEnv||zt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+y))}const d=l0(e.baseURL,e.url);u.open(e.method.toUpperCase(),r0(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const h=Yt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};Tj(function(x){n(x),c()},function(x){r(x),c()},v),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||i0;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new q(y,v.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},zt.isStandardBrowserEnv){const h=(e.withCredentials||Oj(d))&&e.xsrfCookieName&&Ij.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&_.forEach(o.toJSON(),function(y,v){u.setRequestHeader(v,y)}),_.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Bf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Bf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=h=>{u&&(r(!h||h.type?new fo(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const m=Rj(d);if(m&&zt.protocols.indexOf(m)===-1){r(new q("Unsupported protocol "+m+":",q.ERR_BAD_REQUEST,e));return}u.send(i||null)})},ts={http:cj,xhr:$j};_.forEach(ts,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Dj={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=_.isString(n)?ts[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new q(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(ts,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ts};function za(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fo(null,e)}function Uf(e){return za(e),e.headers=Yt.from(e.headers),e.data=Ra.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Dj.getAdapter(e.adapter||kd.adapter)(e).then(function(r){return za(e),r.data=Ra.call(e,e.transformResponse,r),r.headers=Yt.from(r.headers),r},function(r){return s0(r)||(za(e),r&&r.response&&(r.response.data=Ra.call(e,e.transformResponse,r.response),r.response.headers=Yt.from(r.response.headers))),Promise.reject(r)})}const Hf=e=>e instanceof Yt?e.toJSON():e;function Kr(e,t){t=t||{};const n={};function r(u,d,p){return _.isPlainObject(u)&&_.isPlainObject(d)?_.merge.call({caseless:p},u,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function i(u,d,p){if(_.isUndefined(d)){if(!_.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function o(u,d){if(!_.isUndefined(d))return r(void 0,d)}function l(u,d){if(_.isUndefined(d)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,p){if(p in t)return r(u,d);if(p in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(u,d)=>i(Hf(u),Hf(d),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=c[d]||i,m=p(e[d],t[d],d);_.isUndefined(m)&&p!==a||(n[d]=m)}),n}const a0="1.4.0",Cd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wf={};Cd.transitional=function(t,n,r){function i(o,l){return"[Axios v"+a0+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,a)=>{if(t===!1)throw new q(i(l," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Wf[l]&&(Wf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,a):!0}};function Fj(e,t,n){if(typeof e!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const a=e[o],c=a===void 0||l(a,o,e);if(c!==!0)throw new q("option "+o+" must be "+c,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+o,q.ERR_BAD_OPTION)}}const Zc={assertOptions:Fj,validators:Cd},sn=Zc.validators;class Bs{constructor(t){this.defaults=t,this.interceptors={request:new Df,response:new Df}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Kr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Zc.assertOptions(r,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),i!=null&&(_.isFunction(i)?n.paramsSerializer={serialize:i}:Zc.assertOptions(i,{encode:sn.function,serialize:sn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=o&&_.merge(o.common,o[n.method]),l&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Yt.concat(l,o);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,p=0,m;if(!c){const y=[Uf.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),m=y.length,d=Promise.resolve(n);p<m;)d=d.then(y[p++],y[p++]);return d}m=a.length;let h=n;for(p=0;p<m;){const y=a[p++],v=a[p++];try{h=y(h)}catch(b){v.call(this,b);break}}try{d=Uf.call(this,h)}catch(y){return Promise.reject(y)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=Kr(this.defaults,t);const n=l0(t.baseURL,t.url);return r0(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){Bs.prototype[t]=function(n,r){return this.request(Kr(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,a){return this.request(Kr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Bs.prototype[t]=n(),Bs.prototype[t+"Form"]=n(!0)});const ns=Bs;class Ed{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(a=>{r.subscribe(a),o=a}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,a){r.reason||(r.reason=new fo(o,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ed(function(i){t=i}),cancel:t}}}const Bj=Ed;function Uj(e){return function(n){return e.apply(null,n)}}function Hj(e){return _.isObject(e)&&e.isAxiosError===!0}const eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eu).forEach(([e,t])=>{eu[t]=e});const Wj=eu;function c0(e){const t=new ns(e),n=Vg(ns.prototype.request,t);return _.extend(n,ns.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return c0(Kr(e,i))},n}const Ce=c0(kd);Ce.Axios=ns;Ce.CanceledError=fo;Ce.CancelToken=Bj;Ce.isCancel=s0;Ce.VERSION=a0;Ce.toFormData=zl;Ce.AxiosError=q;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=Uj;Ce.isAxiosError=Hj;Ce.mergeConfig=Kr;Ce.AxiosHeaders=Yt;Ce.formToJSON=e=>o0(_.isHTMLForm(e)?new FormData(e):e);Ce.HttpStatusCode=Wj;Ce.default=Ce;const Vj=Ce,Gj={playerData:localStorage.getItem("playerData")?JSON.parse(localStorage.getItem("playerData")):[],loading:!0,state:null,selectedItem:null,searchPlayerName:null,playerEditMode:!1,currentSetData:[{id:1,backno:null,positionNo:"form334LW",position:"FW"},{id:2,backno:null,positionNo:"form334ST",position:"FW"},{id:3,backno:null,positionNo:"form334RW",position:"FW"},{id:4,backno:null,positionNo:"form334LCM",position:"MF"},{id:5,backno:null,positionNo:"form334CM",position:"MF"},{id:6,backno:null,positionNo:"form334RCM",position:"MF"},{id:7,backno:null,positionNo:"form334LB",position:"DF"},{id:8,backno:null,positionNo:"form334LCB",position:"DF"},{id:9,backno:null,positionNo:"form334RCB",position:"DF"},{id:10,backno:null,positionNo:"form334RB",position:"DF"},{id:11,backno:null,positionNo:"formGK",position:"GK"}],current:{},selectPosition:null,selectPositionViewData:[],selectPositionView:"",selectPlayerDetail:{},forUsePlayerData:null},Ir=L3("player/getPlayerData",async()=>(await Vj.get("https://gist.githubusercontent.com/audrhks29/0dadcb9679a74e25b8e7d386bc92d756/raw/0a8ccaba6b773a4d59108177c0642e541c1b875e/playerData.json")).data),u0=ir({name:"player",initialState:Gj,reducers:{onAdd(e,t){const{fieldPlayers:n,backno:r,name:i,birth:o,position:l,height:a,weight:c,teamNameKor:u,teamNation:d,appearances:p,goal:m,assists:h,playTime:y,Shot:v,effectiveShot:b,img:x,activePlayer:f,scoreSave:g,goalsConceded:w,cleanSheet:S,IncludeMySquad:C}=t.payload;let k=[];console.log(l),l==="GK"?k={id:e.playerData.length+1,fieldPlayers:n,backno:r,name:i,birth:o,position:l,height:a,weight:c,teamNameKor:u,teamNation:d,appearances:p,scoreSave:g,goalsConceded:w,cleanSheet:S,img:x,activePlayer:f,IncludeMySquad:C}:k={id:e.playerData.length+1,fieldPlayers:n,backno:r,name:i,birth:o,position:l,height:a,weight:c,teamNameKor:u,teamNation:d,appearances:p,goal:m,assists:h,playTime:y,Shot:v,effectiveShot:b,img:x,activePlayer:f,IncludeMySquad:C},e.playerData.push(k),localStorage.setItem("playerData",JSON.stringify(e.playerData))},onDel(e,t){confirm(`${t.payload.name} 선수의 데이터를 삭제하시겠습니까?`)?(e.playerData=e.playerData.filter(r=>r.id!==t.payload.id),alert("삭제되었습니다."),localStorage.setItem("playerData",JSON.stringify(e.playerData))):alert("취소되었습니다."),e.selectedItem=t.payload},onEdit(e,t){e.playerEditMode=!e.playerEditMode;const{id:n,backno:r,fieldPlayers:i,name:o,birth:l,position:a,height:c,weight:u,teamNameKor:d,teamNation:p,appearances:m,goal:h,assists:y,playTime:v,Shot:b,effectiveShot:x,img:f,activePlayer:g,scoreSave:w,goalsConceded:S,cleanSheet:C}=t.payload,k=e.playerData.findIndex(N=>N.id===n);a==="GK"?e.playerData[k]={id:n,backno:r,fieldPlayers:i,name:o,birth:l,position:a,height:c,weight:u,teamNameKor:d,teamNation:p,appearances:m,scoreSave:w,goalsConceded:S,cleanSheet:C,playTime:v,img:f,activePlayer:g}:e.playerData[k]={id:n,backno:r,fieldPlayers:i,name:o,birth:l,position:a,height:c,weight:u,teamNameKor:d,teamNation:p,appearances:m,goal:h,assists:y,playTime:v,Shot:b,effectiveShot:x,img:f,activePlayer:g},e.selectedItem=t.payload,localStorage.setItem("playerData",JSON.stringify(e.playerData))},isSelectPlayer(e,t){e.selectedItem=t.payload},onSearch(e,t){e.searchPlayerName=t.payload},onSelectPosition(e,t){e.selectPosition=t.payload.id,e.selectPositionView=t.payload.position,e.selectPlayerDetail={},e.selectPositionViewData=e.playerData.filter(n=>n.position===e.selectPositionView),console.log(t.payload),console.log(e.selectPosition)},onAddPosition(e,t){if(!t.payload){e.currentSetData=e.currentSetData.map(r=>r.id===e.selectPosition?{...r,backno:null}:r),e.selectPosition=null;return}const n=e.playerData.find(r=>Number(r.backno)===Number(t.payload));console.log(n),e.currentSetData=e.currentSetData.map(r=>Number(r.backno)===Number(n.backno)?{...r,backno:null}:r),e.currentSetData=e.currentSetData.map(r=>r.id===e.selectPosition?{...r,backno:n.backno}:r),console.log(t.payload),e.selectPosition=null},onViewPlayerDetail(e,t){console.log(t.payload,typeof t.payload);const n=e.playerData.find(r=>Number(r.backno)===Number(t.payload));console.log(n),e.selectPlayerDetail=n},offPopupPlayerList(e,t){e.selectPosition=null},onListSearch(e,t){t.payload?(e.selectPositionViewData=e.playerData.filter(n=>n.position===e.selectPositionView),e.selectPositionViewData=e.playerData.filter(n=>n.name.includes(t.payload))):e.selectPositionViewData=e.playerData.filter(n=>n.position===e.selectPositionView)},onSquadReset(e,t){if(confirm("스쿼드를 초기화 하시겠습니까?"))e.currentSetData=[{id:1,backno:null,positionNo:"form334LW",position:"FW"},{id:2,backno:null,positionNo:"form334ST",position:"FW"},{id:3,backno:null,positionNo:"form334RW",position:"FW"},{id:4,backno:null,positionNo:"form334LCM",position:"MF"},{id:5,backno:null,positionNo:"form334CM",position:"MF"},{id:6,backno:null,positionNo:"form334RCM",position:"MF"},{id:7,backno:null,positionNo:"form334LB",position:"DF"},{id:8,backno:null,positionNo:"form334LCB",position:"DF"},{id:9,backno:null,positionNo:"form334RCB",position:"DF"},{id:10,backno:null,positionNo:"form334RB",position:"DF"},{id:11,backno:null,positionNo:"formGK",position:"GK"}];else return}},extraReducers:e=>{e.addCase(Ir.pending,(t,n)=>{t.state="로딩",t.loading=!0}).addCase(Ir.fulfilled,(t,n)=>{t.state="성공",t.loading=!1,t.playerData=n.payload}).addCase(Ir.rejected,(t,n)=>{t.state="rejected",t.loading=!0})}}),{onAdd:Kj,onDel:d0,onSearch:qj,onEdit:qr,isSelectPlayer:tr,onSelectPosition:p0,onAddPosition:Yj,onViewPlayerDetail:Xj,offPopupPlayerList:f0,onListSearch:Vf,onSquadReset:Qj}=u0.actions,Jj=u0.reducer,Zj=({item:e})=>{const{id:t,backno:n,positionNo:r}=e,{playerData:i,selectPosition:o}=re(p=>p.playerInfo),l=i.find(p=>p.backno===n),{name:a,position:c,img:u}=l,d=K();return s.jsxs(Ll,{className:e.positionNo,onClick:()=>d(p0(e)),children:[s.jsx("img",{src:`./images/player/${u}`,alt:"",className:"imgHover"}),s.jsxs("p",{children:[s.jsxs("span",{children:[" No. ",n," "]}),s.jsxs("strong",{children:[" ",a," "]}),s.jsxs("span",{children:[" ",c," "]})]})]})},e5=({item:e})=>{const t=K();return s.jsx("div",{children:s.jsxs(Ll,{style:{paddingTop:"20px"},className:e.positionNo,onClick:()=>t(p0(e)),children:[s.jsx("img",{src:"./images/Squad/emptyPlayer.png",alt:"",className:"imgHover"}),s.jsxs("p",{children:[s.jsx("span",{children:" "}),s.jsx("strong",{children:"  "}),s.jsx("span",{children:"  "})]})]})})},t5=({item:e})=>{const{id:t,name:n,position:r,backno:i,img:o}=e,l=K();return s.jsxs("li",{onClick:()=>l(Xj(e.backno)),children:[s.jsx("img",{src:`./images/player/${o}`,alt:""}),s.jsxs("p",{children:[s.jsxs("span",{children:[" No. ",s.jsx("em",{children:i})]}),s.jsxs("strong",{children:[" ",n," "]})]})]})},n5=V.div`
    
    width:1400px;
    /* height: 680px; */
    position: fixed;
    z-index: 100;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000;
    background-color: white;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding:60px 20px 20px;
    /* margin-top: 200px; */
    .closeBtn{
        /* cursor: pointer;
        position: absolute;
        top: 15px; right: 20px;
        font-size: 30px;
        background: transparent;
        border: none; */
        text-align: center;
        color: #c60027;
        background-color:#fff;
        border: 1px solid #cc7586;                
        font-size: 24px;
        border-radius: 50%;
        position: absolute;
        right: 20px;
        top: 15px;
        width: 30px;
        height: 30px;
        line-height: 0px;
        cursor: pointer;
        &:hover {
            background-color: #c60027;
            color:#fff;
        }
    }
    .pls_left{
        width:830px;
        height:630px;
        border: 1px solid #000;
        .pls_left_top{
            display:flex;
            background-color: ${F};
            color:white;
            height:85px;
            line-height:85px;
            font-size:24px;
            justify-content:space-between;
            padding:0 20px;
            box-sizing: border-box;
            position: relative;
            span{
                line-height: 1.8;
                display: inline;
                position: absolute;
                font-size: 12px;
                right: 50px;
                bottom: 0;
                font-weight: 200;
            }    
            .searchWrap{
                input[type=text]{
                    width:300px;
                    height:30px;
                    outline:none;
                    padding-left: 10px;
                    vertical-align: middle;
                }
            }   
        }
        .playerSelectList{
            overflow: auto;
            height: 545px;
            ul{
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                button {
                    width: 150px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 20px;
                    margin-left: 10px;
                    background: #fff;
                    border: 1px solid #999;
                    cursor: pointer;
                    &:hover {
                        background-color: #c60027;
                        color:#fff;
                    }
                }
                li {
                    &:hover {
                        img {
                            transform:scale(1.1);
                        }
                    }
                    cursor: pointer;
                    width: 140px;
                    height: 220px;
                    box-shadow: 1px 1px 5px ${F};
                    text-align: center;
                    padding-top: 10px;
                    box-sizing: border-box;
                    margin-bottom: 20px;
                    margin-right: 30px;
                    /* margin: 5px; */
                   &:nth-child(5n){
                    /* margin-right: 0px; */
                   }
                    img{
                        transition:0.2s;
                        width: 120px;
                        margin: 0 auto;
                    }
                    p{
                        padding: 5px 20px;
                        display: flex;
                        justify-content: space-between;
                        strong{
                            font-weight: 600;
                            color: #2b6fb3;
                        }
                        em{                            
                            color: ${Ue};
                        }
                    }
                }
            }
        }
    }
    .pls_right{
        width: 500px;
        border: 1px solid #000;
        height:630px;
        .pls_right_top{
            display:flex;
            background-color: ${F};
            color:white;
            height:85px;
            line-height:85px;
            font-size:24px;
            justify-content:space-between;
            padding:0 20px;
            box-sizing: border-box;
            .btnWrap{
                button{
                    vertical-align:middle;
                    height:30px;
                    background: #fff;
                    border: none;
                    color: ${F};
                    width: 80px;
                    font-weight: 500;
                    color: ${F};
                    font-weight: 700;
                    cursor: pointer;
                    &:hover{
                        background: ${Ue};
                        color: #fff;
                    }
                }
            }
        }
        .selectPlayerBox{
            padding: 20px;
            .imgWrap{
                height: 213px;
                overflow: hidden;
                padding-bottom: 10px;
                .imgNone{
                    padding-top: 30px;
                    transform: scale(1.2);
                }
                img{
                    width:160px;
                    margin:auto;
                    display:block;
                }
            }
            .selectinfo{
                p:first-child{
                    border-top: 2px solid ${F};
                    padding: 20px 10px 10px;
                    box-sizing: border-box;
                }
                margin-top: 10px;
                overflow: auto;
                height: 280px;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                padding: 20px;
                box-sizing: border-box;
                .popupRight_GK{
                    /* border-top: 2px solid ${F}; */
                    margin-top: 10px;
                    padding-top: 10px;
                    font-weight: 500;
                    font-size: 18px;
                    p:first-child{
                        padding: 15px 0px 10px;
                        font-weight: 700;
                        font-size: 18px;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 10px;
                    }
                }
                p{

                    padding: 0px 10px 10px;
                    box-sizing: border-box;
                    span{
                        display: inline-block;
                        width: 150px;
                    }
                    strong{
                        font-weight: 700;
                        color: ${F};
                        width: 80px;
                        display: inline-block;
                        font-size: 18px;
                    }
                    b{
                        color: ${Ue};
                    }
                }
            }
        }
    }
`,r5=()=>{const{selectPositionViewData:e,selectPosition:t,selectPlayerDetail:n,selectPositionView:r}=re(P=>P.playerInfo),{backno:i,name:o,img:l,teamNameKor:a,teamNation:c,birth:u,position:d,height:p,weight:m,appearances:h,cleanSheet:y,scoreSave:v,goalsConceded:b,playTime:x,goal:f,assists:g,Shot:w,effectiveShot:S}=n,[C,k]=j.useState(""),N=K(),E=P=>{P.preventDefault(),N(Vf(C)),k("")},I=P=>{k(P.target.value)};return s.jsx(s.Fragment,{children:t&&s.jsxs(n5,{children:[s.jsx("button",{className:"closeBtn",onClick:()=>N(f0()),children:"x"}),s.jsxs("div",{className:"pls_left",children:[s.jsxs("div",{className:"pls_left_top",children:[s.jsx("h3",{children:r}),s.jsx("span",{children:"* 선수 검색을 통해 다른 포지션 선수를 추가할 수 있습니다"}),s.jsx("form",{className:"searchWrap",onSubmit:P=>E(P),children:s.jsx("input",{type:"text",name:"",id:"",placeholder:"선수를 검색해주세요",value:C,onChange:P=>I(P)})})]}),s.jsx("div",{className:"playerSelectList",children:s.jsxs("ul",{children:[e.map(P=>s.jsx(t5,{item:P},P.id)),!e.length&&s.jsxs("b",{style:{fontSize:"24px",textAlign:"center"},children:[" 결과값이 없습니다 ",s.jsx("button",{onClick:()=>N(Vf("")),children:" 리스트 보기 "})]})]})})]}),s.jsxs("div",{className:"pls_right",children:[s.jsxs("div",{className:"pls_right_top",children:[s.jsx("h3",{children:"선수정보"}),s.jsx("div",{className:"btnWrap",children:s.jsx("button",{onClick:()=>N(Yj(i)),children:"선택"})})]}),s.jsxs("div",{className:"selectPlayerBox",children:[s.jsx("div",{className:"imgWrap",children:l?s.jsx("img",{src:`./images/player/${l}`,alt:o}):s.jsx("img",{src:"./images/Squad/emptyPlayer.png",alt:"정보없음",className:"imgNone"})}),s.jsx("div",{className:"selectinfo",children:i&&s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsxs("span",{children:[" No. ",s.jsx("strong",{children:s.jsx("b",{children:i})})]}),s.jsxs("strong",{children:[" ",o," "]})]}),s.jsxs("p",{children:[s.jsx("span",{children:"포지션"}),s.jsx("strong",{children:d})]}),s.jsxs("p",{children:[s.jsx("span",{children:"출생"}),s.jsx("strong",{children:u})]}),s.jsxs("p",{children:[s.jsx("span",{children:"키"}),s.jsx("strong",{children:p}),"cm"]}),s.jsxs("p",{children:[s.jsx("span",{children:"몸무게"}),s.jsx("strong",{children:m}),"kg"]}),s.jsxs("div",{className:"popupRight_GK",children:[c=="대한민국"?s.jsx("p",{children:"2023 시즌"}):s.jsx("p",{children:"22/23 시즌"}),t=="11"?s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{children:"경기"}),s.jsx("strong",{children:h}),"경기"]}),s.jsxs("p",{children:[s.jsx("span",{children:"선방"}),s.jsx("strong",{children:v}),"회"]}),s.jsxs("p",{children:[s.jsx("span",{children:"실점"}),s.jsx("strong",{children:b}),"점"]}),s.jsxs("p",{children:[s.jsx("span",{children:"경기당실점"}),s.jsx("strong",{children:(b/h).toFixed(2)}),"점"]}),s.jsxs("p",{children:[" ",s.jsx("span",{children:"무실점경기"}),s.jsx("strong",{children:y}),"경기"]}),s.jsxs("p",{children:[s.jsx("span",{children:"출장시간"}),s.jsx("strong",{children:x}),"분"]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:[s.jsx("span",{children:"경기"}),s.jsx("strong",{children:h}),"경기"]}),s.jsxs("p",{children:[s.jsx("span",{children:"득점"}),s.jsx("strong",{children:f}),"득점"]}),s.jsxs("p",{children:[s.jsx("span",{children:"도움"}),s.jsx("strong",{children:g}),"도움"]}),s.jsxs("p",{children:[s.jsx("span",{children:"공격포인트"}),s.jsx("strong",{children:f+g}),"포인트"]}),s.jsxs("p",{children:[" ",s.jsx("span",{children:"슈팅"}),s.jsx("strong",{children:w}),"회"]}),s.jsxs("p",{children:[s.jsx("span",{children:"유효슈팅"}),s.jsx("strong",{children:S}),"회"]}),s.jsxs("p",{children:[s.jsx("span",{children:"경기당득점"}),s.jsx("strong",{children:(f/h).toFixed(2)}),"득점"]}),s.jsxs("p",{children:[s.jsx("span",{children:"출장시간"}),s.jsx("strong",{children:x}),"분"]})]})]})]})})]})]})]})})},i5=()=>{const{currentSetData:e,playerData:t}=re(p=>p.playerInfo),[n,r]=j.useState(0),[i,o]=j.useState(0),[l,a]=j.useState(0);let c=e.filter(p=>p.backno!==null);c=c.map(p=>t.find(m=>m.backno===p.backno));const u=K(),d=c.length;return j.useEffect(()=>{d!==0&&(r((c.reduce((p,m)=>p+m.height,0)/d).toFixed(0)),o((c.reduce((p,m)=>p+m.weight,0)/d).toFixed(0)),a((c.reduce((p,m)=>p+Number(2023-m.birth.substr(0,4)+1),0)/d).toFixed(0)))},[e]),s.jsxs(P4,{children:[s.jsxs("div",{className:"playerInfoCalculator",children:[s.jsxs("div",{className:"cal-wrap",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"평균 신장"})," ",s.jsxs("span",{children:[n," cm"]})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"평균 몸무게"})," ",s.jsxs("span",{children:[i," kg"]})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"평균 나이"})," ",s.jsxs("span",{children:[l," 세"]})]})]}),s.jsx("div",{className:"personnel",children:s.jsxs("p",{children:[s.jsx("strong",{children:"선수 인원"}),s.jsx("span",{children:d})," / 11"]})})]}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{className:"squadReset",onClick:()=>u(Qj()),children:s.jsx(te,{to:"",children:"스쿼드 초기화"})}),s.jsx("button",{onClick:()=>window.scrollTo({top:0}),children:s.jsx(te,{to:"/notice/writing/squad",children:"게시글 작성"})})]})]})},o5=({item:e})=>{const{id:t,backno:n,positionNo:r}=e,{playerData:i,selectPosition:o,loading:l}=re(p=>p.playerInfo),a=i.find(p=>p.backno===n),{name:c,position:u,img:d}=a;return s.jsxs(Ll,{className:`${e.positionNo} onBoard`,children:[s.jsx("img",{src:`./images/player/${d}`,alt:""}),s.jsxs("p",{children:[s.jsxs("span",{children:[" No. ",n," "]}),s.jsxs("strong",{children:[" ",c," "]}),s.jsxs("span",{children:[" ",u," "]})]})]})},s5=({item:e})=>(K(),s.jsx("div",{children:s.jsxs(Ll,{style:{paddingTop:"20px"},className:`${e.positionNo} onBoard`,children:[s.jsx("img",{src:"./images/Squad/emptyPlayer.png",alt:""}),s.jsxs("p",{children:[s.jsx("span",{children:" "}),s.jsx("strong",{children:"  "}),s.jsx("span",{children:"  "})]})]})})),_d=({squad:e})=>{const{currentSetData:t,selectPosition:n,loading:r}=re(o=>o.playerInfo),i=K();return j.useEffect(()=>{r&&localStorage.getItem("playerData")==null?i(Ir()):JSON.parse(localStorage.getItem("playerData"))},[r]),s.jsx(Hg,{className:"squadWrap onBoard",children:s.jsx("div",{className:"squadboardinner",children:s.jsx(Wg,{className:"playGround",children:e.map(o=>o.backno!==null?s.jsx(o5,{item:o},o.id):s.jsx(s5,{item:o},o.id))})})})},l5=()=>{const{noticeID:e}=f1(),t=Je(),n=K(),{data:r}=re(h=>h.noticeR),i=r.find(h=>h.id===Number(e)),{id:o,categoryName:l,title:a,userName:c,date:u,view:d,content:p,squad:m}=i;return s.jsx(p4,{children:s.jsxs("div",{className:"inner",children:[s.jsxs("table",{children:[s.jsxs("colgroup",{children:[s.jsx("col",{className:"w1"}),s.jsx("col",{className:"w2"}),s.jsx("col",{className:"w3"}),s.jsx("col",{className:"w4"})]}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"th",children:"제목"}),s.jsx("td",{colSpan:3,children:a})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"th",children:"분류"}),s.jsx("td",{children:l}),s.jsx("td",{className:"th",children:"작성일"}),s.jsx("td",{children:u})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"th",children:"작성자"}),s.jsx("td",{children:c}),s.jsx("td",{className:"th",children:"조회수"}),s.jsx("td",{children:d})]}),m&&s.jsx("tr",{children:s.jsx("td",{colSpan:4,children:m&&s.jsx(_d,{squad:m})})}),s.jsx("tr",{children:s.jsx("td",{colSpan:4,children:p})})]})]}),s.jsxs("p",{className:"btnWrap",children:[s.jsxs("button",{onClick:()=>t("/notice"),children:[s.jsx("span",{children:"목록"})," "]}),s.jsx("button",{className:"editBtn",onClick:()=>{t("/notice/edit"),n(j4(i))},children:s.jsx("span",{children:"수정"})}),s.jsx("button",{onClick:()=>{n(S4(o)),t("/notice")},children:s.jsx("span",{children:"삭제"})})]})]})})},a5=()=>{const e=K(),t=Je(),n=j.useRef(),r=j.useRef(),i=j.useRef(),[o,l]=j.useState({title:"",content:"",category:"free_board",categoryName:"자유게시판",date:""}),{title:a,content:c,category:u,categoryName:d,date:p,userName:m}=o,h=new Date,y=h.getFullYear(),v=h.getMonth()+1<10?"0"+(h.getMonth()+1):h.getMonth()+1,b=h.getDate(),x=w=>{const{value:S,name:C}=w.target;l({...o,[C]:S,date:`${y}.${v}.${b}`})},f=w=>{},g=w=>{w.preventDefault(),!a||!c||!u?a?c?u||(alert("게시물 종류를 선택해주세요"),r.current.focus()):(alert("내용을 입력해주세요"),i.current.focus()):(alert("제목을 입력해주세요"),n.current.focus()):(e(Ug(o)),t("/notice"))};return s.jsx(bd,{children:s.jsxs("div",{className:"inner",children:[s.jsx("h3",{children:"글쓰기"}),s.jsxs("form",{action:"",onSubmit:g,children:[s.jsxs("p",{className:"titleInput",children:[s.jsx("select",{name:"category",id:"",onChange:f,ref:r,children:s.jsx("option",{value:"free_board",children:"자유게시판"})}),s.jsx("input",{type:"text",placeholder:"제목을 입력해 주세요.",value:a,name:"title",onChange:x,ref:n})]}),s.jsx("p",{className:"contentBox",children:s.jsx("textarea",{rows:30,placeholder:"내용을 입력해주세요.",value:c,name:"content",onChange:x,ref:i})}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{type:"submit",className:"submitBtn",onClick:()=>window.scrollTo({top:0}),children:s.jsx("span",{children:"작성"})}),s.jsx("button",{type:"button",onClick:()=>{t(-1),window.scrollTo({top:0})},children:s.jsx("span",{children:"취소"})})]})]})]})})},c5=()=>{const e=K(),t=Je(),n=j.useRef(),r=j.useRef(),i=j.useRef(),{editData:o}=re(b=>b.noticeR),[l,a]=j.useState(o),{id:c,title:u,content:d,category:p,categoryName:m,squad:h}=l;console.log(o);const y=b=>{const{value:x,name:f}=b.target;a({...l,[f]:x})},v=b=>{b.preventDefault(),!u||!d||!p?u?d?p||(alert("게시물 종류를 선택해주세요"),r.current.focus()):(alert("내용을 입력해주세요"),i.current.focus()):(alert("제목을 입력해주세요"),n.current.focus()):(e(k4(l)),t(`/notice/${c}`))};return s.jsx(bd,{children:s.jsxs("div",{className:"inner",children:[s.jsx("h3",{children:"글쓰기"}),s.jsxs("form",{action:"",onSubmit:v,children:[s.jsxs("p",{className:"titleInput",children:[s.jsx("strong",{children:m}),s.jsx("input",{type:"text",placeholder:"제목을 입력해 주세요.",value:u,name:"title",onChange:y,ref:n})]}),s.jsx("div",{className:"squadBox",children:h&&s.jsx(_d,{squad:h})}),s.jsx("p",{className:"contentBox",children:s.jsx("textarea",{rows:30,placeholder:"내용을 입력해주세요.",value:d,name:"content",onChange:y,ref:i})}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{type:"submit",className:"submitBtn",children:s.jsx("span",{children:"수정"})}),s.jsx("button",{type:"button",onClick:()=>t(-1),children:s.jsx("span",{children:"취소"})})]})]})]})})},u5=V.div`
    width: 100%;
    height: 100%;
    position: relative;
    .inner{
        ${ke}
        padding-top: 100px;
    }
    h2{
        ${rn}
        ${Ft}
        background-image: url('./images/visual/visual2.jpg');
        background-position: 0px -100px;
        padding-top: 180px;
        text-shadow: 0px 0px 10px #000;
    }
`,d5=V.div`
    width: 100%;
    height: inherit;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    z-index:5;
`,p5=V.div`
    width:100%;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 20px;
    ul{
        display: flex;
        li{
            cursor:pointer;
            font-weight:700;
            font-size:18px;
            color:#ccc;
            padding: 10px 20px;
            &:hover{
                color:${F};
            }
            &.on{
                color:${F};
            }
        }
    }
    form{
        position:absolute;
        right:0;
        bottom:0;
        input[type=text]{
            border: 1px solid ${F};
            padding: 10px 15px;
            box-sizing: border-box;
            height: 45px;
            width: 300px;
            font-size: 16px;
            vertical-align: middle;
        }
        button{
            vertical-align: middle;
            height: 45px;
            width: 50px;
            border: none;
            border: 1px solid ${F};
            background:  ${F};
            color: #fff;
            font-size: 20px;
            cursor: pointer;
        }
    }
    .hide{
        display: none;
    }
`,f5=V.ul`
    display: flex;
    flex-wrap: wrap;
    .addPlayerBox{
        text-align: center;
        font-size:20px;
        display: block;
        line-height:140px;
        box-sizing:border-box;
        &:hover{
            font-weight:700;
        }
    }
    li{
        width:350px;
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid #cecece;
        display: flex;
        position: relative;
        background-color: #fff;
        cursor:pointer;
        &:hover{
            border: 1px solid red;
            text-shadow: none;
        }
        &:hover .playerBackno{
            color: ${Ue};
        }
        img{
            width: 106px;
            height: 142px;
        }
        .playerBasic{
            margin-left:20px;
            display: flex;
            flex-direction: column;
            strong{
                font-weight:700;
                font-size:20px;
                margin-bottom:auto;
            }
            span{
                font-size:14px;
                color:#949494;
            }
            em{
                position: absolute;
                right: 20px;
                top: 20px;
                font-weight:700;
            }
        }
        .playerBackno{
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-size:60px;
            line-height:60px;
            text-shadow: 2px 2px 2px gray;
            color: white;
        }
    }
`,Dl=V.div`
    width: 1200px;
    background-color:white;
    margin: auto;
    position: fixed;
    top:50%;
    right:50%;
    transform: translate(50%, -50%);
    z-index:10;
    img{
        width: 300px;
        height: 400px;
        display: block;
    }
    .popupTop{
        background: ${Ue};
        color: #fff;
        padding: 20px;
        position: relative;
        span{
            font-weight:700;
            font-size:30px;
            input[type=text]{
                height: 30px;
                vertical-align: middle;
                font-size:30px;
            }
        }
        .iconWrap{
            font-size:30px;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            cursor: pointer;
            i{
                margin-left:10px;   
            }
        }
    }
    .popupMain{
        display: flex;
        padding:20px;
        p{
            font-size:26px;
            margin-bottom:20px;
            font-weight:700;
        }
        dl{
            font-size:20px;
            dd{margin-right:20px;}
        }
        .popupContent{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            padding:0 40px;
            width:100%;
        }
        .popupLeft{
            p{
                color:${Ue};
                border-bottom: 3px solid ${Ue};
                input[type=text]{
                    color:${Ue};
                    font-size:16px;
                    font-weight:700;
                }
                em{
                    margin-left:10px;
                    font-size:16px;
                    color:#000;
                    input[type=text]{
                    color:#000;
                    font-size:14px;
                }
                }
            }
            dl{
                display:flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:60px;}
                    &:nth-child(3){width:80px;}
                }
                dd{
                    input[type=text]{
                        width: 100px;
                        font-size:16px;
                    }
                    &:nth-child(2){width:100px;}
                }
               
            }
        }
        .popupRight{
            p{
                color:#00155D;
                border-bottom: 3px solid ${F};
            }
            dl{
                display: flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:60px;}
                    &:nth-child(3){width:100px;}
                    &:nth-child(5){width:120px;}
                    &:nth-child(7){width:120px;}
                }
                dd{
                    text-align:right;
                    &:nth-child(2){width:24px;}
                    &:nth-child(4){width:24px;}
                    &:nth-child(6){
                        width:50px;
                        input[type=text]{
                        width: 60px;
                        font-size:16px;
                    }
                    }
                    input[type=text]{
                        width: 30px;
                        font-size:16px;
                    }
                }
            }
        }
        .popupRight_GK{
            p{
                color:${F};
                border-bottom: 3px solid ${F};
            }
            dl{
                display: flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:120px;}
                    &:nth-child(3){width:120px;}
                    &:nth-child(5){width:100px;}
                    /* &:nth-child(7){width:120px;} */
                }
                dd{
                    text-align:right;
                    &:nth-child(2){width:24px;}
                    &:nth-child(4){
                        width:80px;
                        input[type=text]{
                        width: 60px;
                        font-size:16px;
                    }
                    }
                        
                    &:nth-child(6){width:100px;}        
                    input[type=text]{
                        width: 30px;
                        font-size:16px;
                    }
                }
            }
        }  
        button{
            background-color: ${F};
            height: 40px;
            color:white;
            font-size:16px;
            font-weight:700;
        } 
    }
`,h5=j.memo(()=>{const e=K(),{selectedItem:t}=re(g=>g.playerInfo),{backno:n,name:r,img:i,teamNameKor:o,teamNation:l,birth:a,position:c,height:u,weight:d,appearances:p,cleanSheet:m,scoreSave:h,goalsConceded:y,playTime:v}=t,b=()=>{e(d0(t)),e(tr(null))},x=()=>{e(qr(t))},f=i.includes("http");return console.log(f),s.jsxs(Dl,{children:[s.jsxs("div",{className:"popupTop",children:[s.jsxs("span",{children:["NO.",n," - ",r]}),s.jsxs("div",{className:"iconWrap",children:[s.jsx("i",{children:s.jsx(B1,{onClick:x})}),s.jsx("i",{children:s.jsx(F1,{onClick:b})}),s.jsx("i",{children:s.jsx(uo,{onClick:()=>e(tr(null))})})]})]}),s.jsxs("div",{className:"popupMain",children:[f?s.jsx("img",{src:i,alt:""}):s.jsx("img",{src:`./images/player/${i}`,alt:""}),s.jsxs("div",{className:"popupContent",children:[s.jsxs("div",{className:"popupLeft",children:[s.jsxs("p",{children:[o,s.jsxs("em",{children:["(",l,")"]})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"출생"}),s.jsx("dd",{children:a}),s.jsx("dt",{children:"포지션"}),s.jsx("dd",{children:c})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"키"}),s.jsxs("dd",{children:[u,"cm"]}),s.jsx("dt",{children:"몸무게"}),s.jsxs("dd",{children:[d,"kg"]})]})]}),s.jsxs("div",{className:"popupRight_GK",children:[l=="대한민국"?s.jsx("p",{children:"2023 시즌"}):s.jsx("p",{children:"22/23 시즌"}),s.jsxs("dl",{children:[s.jsx("dt",{children:"경기"}),s.jsx("dd",{children:p}),s.jsx("dt",{children:"선방"}),s.jsx("dd",{children:h}),s.jsx("dt",{children:"실점"}),s.jsx("dd",{children:y})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"경기당실점"}),s.jsx("dd",{children:(y/p).toFixed(2)}),s.jsx("dt",{children:"무실점경기"}),s.jsx("dd",{children:m}),s.jsx("dt",{children:"출장시간"}),s.jsxs("dd",{children:[v,"분"]})]})]})]})]})]})}),m5=j.memo(()=>{const e=K(),{selectedItem:t}=re(w=>w.playerInfo),{backno:n,name:r,img:i,teamNameKor:o,teamNation:l,birth:a,position:c,height:u,weight:d,appearances:p,goal:m,assists:h,Shot:y,effectiveShot:v,playTime:b}=t,x=()=>{e(d0(t)),e(tr(null))},f=()=>{e(qr(t))},g=i.includes("http");return console.log(g),s.jsxs(Dl,{children:[s.jsxs("div",{className:"popupTop",children:[s.jsxs("span",{children:["NO.",n," - ",r]}),s.jsxs("div",{className:"iconWrap",children:[s.jsx("i",{children:s.jsx(B1,{onClick:f})}),s.jsx("i",{children:s.jsx(F1,{onClick:x})}),s.jsx("i",{children:s.jsx(uo,{onClick:()=>e(tr(null))})})]})]}),s.jsxs("div",{className:"popupMain",children:[g?s.jsx("img",{src:i,alt:""}):s.jsx("img",{src:`./images/player/${i}`,alt:""}),s.jsxs("div",{className:"popupContent",children:[s.jsxs("div",{className:"popupLeft",children:[s.jsxs("p",{children:[o,s.jsxs("em",{children:["(",l,")"]})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"출생"}),s.jsx("dd",{children:a}),s.jsx("dt",{children:"포지션"}),s.jsx("dd",{children:c})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"키"}),s.jsxs("dd",{children:[u,"cm"]}),s.jsx("dt",{children:"몸무게"}),s.jsxs("dd",{children:[d,"kg"]})]})]}),s.jsxs("div",{className:"popupRight",children:[l=="대한민국"?s.jsx("p",{children:"2023 시즌"}):s.jsx("p",{children:"22/23 시즌"}),s.jsxs("dl",{children:[s.jsx("dt",{children:"경기"}),s.jsx("dd",{children:p}),s.jsx("dt",{children:"득점"}),s.jsx("dd",{children:m}),s.jsx("dt",{children:"도움"}),s.jsx("dd",{children:h}),s.jsx("dt",{children:"공격포인트"}),s.jsx("dd",{children:m+h})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"슈팅"}),s.jsx("dd",{children:y}),s.jsx("dt",{children:"유효슈팅"}),s.jsx("dd",{children:v}),s.jsx("dt",{children:"경기당득점"}),s.jsx("dd",{children:(m/p).toFixed(2)}),s.jsx("dt",{children:"출장시간"}),s.jsxs("dd",{children:[b,"분"]})]})]})]})]})]})}),g5=j.memo(()=>{const e=K(),{playerData:t,selectedItem:n}=re(E=>E.playerInfo),[r,i]=j.useState({id:"",fieldPlayer:"",name:"",img:"",teamNameKor:"",teamNation:"",birth:"",position:"",height:"",weight:"",appearances:"",scoreSave:"",goalsConceded:"",cleanSheet:"",playTime:"",backno:""}),o=Je();j.useEffect(()=>{i(t.find(E=>E.id===n.id))},[]);const{id:l,backno:a,fieldPlayers:c,name:u,img:d,teamNameKor:p,teamNation:m,birth:h,position:y,height:v,weight:b,appearances:x,scoreSave:f,goalsConceded:g,cleanSheet:w,playTime:S}=r,C=E=>{E.preventDefault();const{name:I,value:P}=E.target;i({...r,[I]:P,[c]:!1}),console.log(r)},k=E=>{E.preventDefault(),e(qr(r)),o("/playerInfo")},N=()=>{e(qr(n)),e(tr(null))};return s.jsxs(Dl,{children:[s.jsxs("div",{className:"popupTop",children:[s.jsxs("span",{children:["NO.",s.jsx("input",{type:"text",value:a,name:"backno",onChange:C})," - ",u]}),s.jsx("div",{className:"iconWrap",children:s.jsx("i",{children:s.jsx(uo,{onClick:()=>N()})})})]}),s.jsxs("form",{className:"popupMain",onSubmit:k,children:[s.jsx("img",{src:`./images/player/${d}`,alt:""}),s.jsxs("div",{className:"popupContent",children:[s.jsxs("div",{className:"popupLeft",children:[s.jsxs("p",{children:[s.jsx("input",{type:"text",value:p,name:"teamNameKor",onChange:C}),s.jsx("em",{children:s.jsx("input",{type:"text",value:m,name:"teamNation",onChange:C})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"출생"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:h,name:"birth",onChange:C})}),s.jsx("dt",{children:"포지션"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:y,name:"position",onChange:C})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"키"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:v,name:"height",onChange:C})}),s.jsx("dt",{children:"몸무게"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:b,name:"weight",onChange:C})})]})]}),s.jsxs("div",{className:"popupRight_GK",children:[m=="대한민국"?s.jsx("p",{children:"2023 시즌"}):s.jsx("p",{children:"22/23 시즌"}),s.jsxs("dl",{children:[s.jsx("dt",{children:"경기"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:x,name:"appearances",onChange:C})}),s.jsx("dt",{children:"선방"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:f,name:"scoreSave",onChange:C})}),s.jsx("dt",{children:"실점"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:g,name:"goalsConceded",onChange:C})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"무실점경기"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:w,name:"cleanSheet",onChange:C})}),s.jsx("dt",{children:"출장시간"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:S,name:"playTime",onChange:C})})]})]}),s.jsx("button",{type:"submit",children:"수정완료"})]})]})]})}),x5=j.memo(()=>{const e=K(),{playerData:t,selectedItem:n}=re(I=>I.playerInfo),[r,i]=j.useState({id:"",fieldPlayer:"",name:"",img:"",teamNameKor:"",teamNation:"",birth:"",position:"",height:"",weight:"",appearances:"",goal:"",assists:"",Shot:"",effectiveShot:"",playTime:""}),o=Je();j.useEffect(()=>{i(t.find(I=>I.id===n.id))},[]);const{id:l,backno:a,fieldPlayers:c,name:u,img:d,teamNameKor:p,teamNation:m,birth:h,position:y,height:v,weight:b,appearances:x,goal:f,assists:g,Shot:w,effectiveShot:S,playTime:C}=r,k=I=>{I.preventDefault();const{name:P,value:O}=I.target;i({...r,[P]:O,[c]:!0}),console.log(r)},N=I=>{I.preventDefault(),e(qr(r)),o("/playerInfo")},E=()=>{e(qr(n)),e(tr(null))};return s.jsxs(Dl,{children:[s.jsxs("div",{className:"popupTop",children:[s.jsxs("span",{children:["NO.",s.jsx("input",{type:"text",value:a,name:"backno",onChange:k})," - ",u]}),s.jsx("div",{className:"iconWrap",children:s.jsx("i",{children:s.jsx(uo,{onClick:()=>E()})})})]}),s.jsxs("form",{className:"popupMain",onSubmit:N,children:[s.jsx("img",{src:`./images/player/${d}`,alt:""}),s.jsxs("div",{className:"popupContent",children:[s.jsxs("div",{className:"popupLeft",children:[s.jsxs("p",{children:[s.jsx("input",{type:"text",value:p,name:"teamNameKor",onChange:k}),s.jsx("em",{children:s.jsx("input",{type:"text",value:m,name:"teamNation",onChange:k})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"출생"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:h,name:"birth",onChange:k})}),s.jsx("dt",{children:"포지션"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:y,name:"position",onChange:k})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"키"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:v,name:"height",onChange:k})}),s.jsx("dt",{children:"몸무게"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:b,name:"weight",onChange:k})})]})]}),s.jsxs("div",{className:"popupRight",children:[m=="대한민국"?s.jsx("p",{children:"2023 시즌"}):s.jsx("p",{children:"22/23 시즌"}),s.jsxs("dl",{children:[s.jsx("dt",{children:"경기"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:x,name:"appearances",onChange:k})}),s.jsx("dt",{children:"득점"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:f,name:"goal",onChange:k})}),s.jsx("dt",{children:"도움"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:g,name:"assists",onChange:k})})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"슈팅"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:w,name:"Shot",onChange:k})}),s.jsx("dt",{children:"유효슈팅"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:S,name:"effectiveShot",onChange:k})}),s.jsx("dt",{children:"출장시간"}),s.jsx("dd",{children:s.jsx("input",{type:"text",value:C,name:"playTime",onChange:k})})]})]}),s.jsx("button",{type:"submit",children:"수정완료"})]})]})]})}),v5=V.em`
    color: ${e=>{switch(e.text){case"FW":return"#BC0F0F";case"MF":return"#469719";case"DF":return"#498CFF";case"GK":return"#FFAE44";default:return"inherit"}}};
`,y5=({item:e})=>{const{id:t,backno:n,img:r,name:i,birth:o,height:l,weight:a,teamNameKor:c,position:u}=e,d=K(),p=r.includes("http");return console.log(p),s.jsxs("li",{onClick:()=>d(tr(e)),children:[s.jsx("div",{className:"playerImg",children:p?s.jsx("img",{src:r,alt:""}):s.jsx("img",{src:`./images/player/${r}`,alt:""})}),s.jsxs("div",{className:"playerBasic",children:[s.jsx("strong",{children:i}),s.jsx(v5,{text:u,children:u}),s.jsx("span",{children:o}),s.jsxs("span",{children:[l,"cm / ",a,"kg"]}),s.jsx("span",{children:c})]}),s.jsx("div",{className:"playerBackno",children:s.jsx("p",{children:n})})]})},w5=j.memo(()=>{const e=K(),[t,n]=j.useState(""),r=o=>{o.preventDefault(),e(qj(t)),n("")},i=o=>{const l=o.target.value;n(l)};return s.jsxs("form",{action:"",onSubmit:o=>r(o),children:[s.jsx("label",{htmlFor:"",className:"hide",children:"선수검색"}),s.jsx("input",{type:"text",value:t,onChange:o=>i(o),placeholder:"선수를 검색하세요"}),s.jsx("button",{type:"submit",children:s.jsx(sd,{})})]})}),b5=j.memo(()=>{const{playerData:e,loading:t,selectedItem:n,playerEditMode:r}=re(h=>h.playerInfo),{searchPlayerName:i}=re(h=>h.playerInfo),[o,l]=j.useState(e),a=K(),[c,u]=j.useState(1);console.log(e),j.useEffect(()=>{t&&localStorage.getItem("playerData")==null?a(Ir()):JSON.parse(localStorage.getItem("playerData"))},[t]),j.useEffect(()=>{l(i?e.filter(h=>h.name.includes(i)):e)},[e,i]);const d=(h,y)=>{const v=h.target.textContent;console.log(v),l(v==="ALL PLAYERS"?i?e.filter(b=>b.name.includes(i)):e:i?e.filter(b=>b.name.includes(i)&&b.position===v):e.filter(b=>b.position===v)),u(y)},p=Je(),m=()=>{p("/addPlayer"),window.scrollTo({top:0})};return s.jsxs(u5,{children:[n&&s.jsx(d5,{}),s.jsx("h2",{children:"선수명단"}),s.jsxs("div",{className:"inner",children:[s.jsxs(p5,{children:[s.jsxs("ul",{children:[s.jsx("li",{onClick:h=>d(h,1),className:c===1?"on":"",children:"ALL PLAYERS"}),s.jsx("li",{onClick:h=>d(h,2),className:c===2?"on":"",children:"FW"}),s.jsx("li",{onClick:h=>d(h,3),className:c===3?"on":"",children:"MF"}),s.jsx("li",{onClick:h=>d(h,4),className:c===4?"on":"",children:"DF"}),s.jsx("li",{onClick:h=>d(h,5),className:c===5?"on":"",children:"GK"})]}),s.jsx(w5,{})]}),s.jsxs(f5,{children:[o&&o.map((h,y)=>s.jsx(y5,{item:h},y)),s.jsx("li",{onClick:m,className:"addPlayerBox",children:"선수추가"})]}),n&&!r?n.position==="GK"?s.jsx(h5,{}):s.jsx(m5,{}):"",n&&r?n.position==="GK"?s.jsx(g5,{}):s.jsx(x5,{}):""]})]})}),S5=V.div`
    width: 100%;
    height: 100%;
    position: relative;
    h2{
        ${rn}
        ${Ft}
        background-image: url('./images/visual/visual1.jpg');
        padding-top: 180px;
        text-shadow: 0px 0px 10px #000;
    }
    .inner{
        ${ke}
        padding-top: 50px;
        .btnWrap{
            text-align:right;
            button{
                ${xt}
                width: 400px;
                background: ${F};
                span{
                    ${vt}

                }
            }
        }
    }
`,j5=V.div`
    display: flex;
    .addPlayerInfoLeft,.addPlayerInfoRight{
        width:50%;
        display: flex;
        flex-direction:column;
        padding: 30px;
        input[type=text]{
            width: 600px;
            height: 30px;
            margin-bottom:20px;
        }
        select{
            width: 600px;
            height: 30px;
            margin-bottom:20px;
        }
        label{
            font-weight:700;
        }
    }
`,k5=j.memo(()=>{const{playerData:e}=re(B=>B.playerInfo),t=Je();console.log(e),j.useState("");const n=K(),[r,i]=j.useState(""),[o,l]=j.useState(""),[a,c]=j.useState(""),[u,d]=j.useState(""),[p,m]=j.useState("FW"),[h,y]=j.useState(""),[v,b]=j.useState(""),[x,f]=j.useState(""),[g,w]=j.useState(""),[S,C]=j.useState(""),[k,N]=j.useState(""),[E,I]=j.useState(""),[P,O]=j.useState(""),[R,W]=j.useState(""),[X,de]=j.useState(""),[ae,L]=j.useState(null),[A,M]=j.useState(""),[$,D]=j.useState(""),[ie,me]=j.useState(""),[wt,Fe]=j.useState(""),[Ge,ho]=j.useState(!1),sr=B=>{B.preventDefault(),!(!a||!p||!h||!v)&&(n(Kj({img:o,backno:wt,fieldPlayers:r,name:a,birth:u,position:p,height:h,weight:v,teamNameKor:x,teamNation:g,appearances:S,goal:k,assists:E,playTime:P,Shot:R,effectiveShot:X,activePlayer:ae,scoreSave:A,goalsConceded:$,cleanSheet:ie,IncludeMySquad:Ge})),t("/playerInfo"))},Tt=B=>{const Fl=B.target.value;m(Fl),i(p!=="GK")},mo=B=>{const Fl=event.target.value==="true";L(Fl)};return s.jsxs(S5,{children:[s.jsx("h2",{children:"선수추가"}),s.jsx("div",{className:"inner",children:s.jsxs("form",{onSubmit:B=>sr(B),children:[s.jsxs(j5,{children:[s.jsxs("div",{className:"addPlayerInfoLeft",children:[s.jsx("label",{children:"이미지 주소"}),s.jsx("input",{type:"text",value:o,onChange:B=>l(B.target.value)}),s.jsx("label",{htmlFor:"",children:"이름"}),s.jsx("input",{type:"text",value:a,onChange:B=>c(B.target.value),required:!0}),s.jsx("label",{htmlFor:"",children:"생년월일"}),s.jsx("input",{type:"text",value:u,onChange:B=>d(B.target.value)}),s.jsx("label",{htmlFor:"",children:"포지션"}),s.jsxs("select",{name:"position",id:"position",value:p,onChange:Tt,children:[s.jsx("option",{value:"FW",children:"FW"}),s.jsx("option",{value:"MF",children:"MF"}),s.jsx("option",{value:"DF",children:"DF"}),s.jsx("option",{value:"GK",children:"GK"})]}),s.jsx("label",{htmlFor:"",children:"등번호"}),s.jsx("input",{type:"text",value:wt,onChange:B=>Fe(B.target.value)}),s.jsx("label",{htmlFor:"",children:"키"}),s.jsx("input",{type:"text",value:h,onChange:B=>y(B.target.value),required:!0}),s.jsx("label",{htmlFor:"",children:"몸무게"}),s.jsx("input",{type:"text",value:v,onChange:B=>b(B.target.value),required:!0}),s.jsx("label",{htmlFor:"",children:"소속팀명"}),s.jsx("input",{type:"text",value:x,onChange:B=>f(B.target.value)}),s.jsx("label",{htmlFor:"",children:"소속팀국가"}),s.jsx("input",{type:"text",value:g,onChange:B=>w(B.target.value)})]}),s.jsx("div",{className:"addPlayerInfoRight",children:p&&p==="GK"?s.jsxs(s.Fragment,{children:[s.jsx("label",{htmlFor:"",children:"경기"}),s.jsx("input",{type:"text",value:S,onChange:B=>C(B.target.value)}),s.jsx("label",{htmlFor:"",children:"선방"}),s.jsx("input",{type:"text",value:A,onChange:B=>M(B.target.value)}),s.jsx("label",{htmlFor:"",children:"실점"}),s.jsx("input",{type:"text",value:$,onChange:B=>D(B.target.value)}),s.jsx("label",{htmlFor:"",children:"무실점경기"}),s.jsx("input",{type:"text",value:ie,onChange:B=>me(B.target.value)}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"",children:"현역선수 여부"}),s.jsx("input",{type:"radio",name:"activePlayer",id:"activePlayerTrue",value:"true",onChange:mo,checked:ae===!0}),"현역",s.jsx("input",{type:"radio",name:"activePlayer",id:"activePlayerFalse",value:"false",onChange:mo,checked:ae===!1}),"은퇴"]})]}):s.jsxs(s.Fragment,{children:[s.jsx("label",{htmlFor:"",children:"경기"}),s.jsx("input",{type:"text",value:S,onChange:B=>C(B.target.value)}),s.jsx("label",{htmlFor:"",children:"득점"}),s.jsx("input",{type:"text",value:k,onChange:B=>N(B.target.value)}),s.jsx("label",{htmlFor:"",children:"도움"}),s.jsx("input",{type:"text",value:E,onChange:B=>I(B.target.value)}),s.jsx("label",{htmlFor:"",children:"슈팅"}),s.jsx("input",{type:"text",value:R,onChange:B=>W(B.target.value)}),s.jsx("label",{htmlFor:"",children:"유효슈팅"}),s.jsx("input",{type:"text",value:X,onChange:B=>de(B.target.value)}),s.jsx("label",{htmlFor:"",children:"출장시간"}),s.jsx("input",{type:"text",value:P,onChange:B=>O(B.target.value)}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"",children:"현역선수 여부"}),s.jsx("input",{type:"radio",name:"activePlayer",id:"activePlayerTrue",value:"true",onChange:mo,checked:ae===!0}),"현역",s.jsx("input",{type:"radio",name:"activePlayer",id:"activePlayerFalse",value:"false",onChange:mo,checked:ae===!1}),"은퇴"]})]})})]}),s.jsx("div",{className:"btnWrap",children:s.jsx("button",{type:"submit",children:s.jsx("span",{children:"추가"})})})]})})]})}),C5=V.div`
    margin-top:120px;
    .inner{
        ${ke}
        ul{
            display:flex;
            padding:20px 0;
            font-size:18px;
            border-bottom: 3px solid #ECECEC;
            margin-bottom:20px;

            li{
                width:50%;
                border-bottom: 1px solid #ccc;
                text-align:center;
                padding:10px 0;
                cursor: pointer;
                &.on{
                    font-weight:700;
                    border-bottom: 2px solid #000;
                }
            }
        }
        .cartInfo{
            border: 2px solid #ECECEC;
            margin-bottom:20px;
            border-radius:20px;
            .cartTop{
                padding:15px;
                font-weight:700;
                display:flex;
                justify-content:space-between;
                background: rgba(194, 0, 39,0.2);
                border-radius:20px 20px 0 0;
                i{
                    cursor: pointer;
                    vertical-align:middle;
                    margin-left:10px;
                }
            }
        }
        .cost{
            border: 2px solid #ECECEC;
            border-radius:20px;
            padding:20px 0;
            display:flex;
            flex-direction:column;
            div{
                display:flex;
                justify-content:space-between;
                padding:0 15px;
                &:nth-of-type(2){
                    padding:20px 15px;
                }
            }
        }
    }
`,h0=V.div`
    display:flex;
    padding:15px;
    position:relative;
    img{
        width: 150px;
        height: 150px;
        margin-right:20px;
    }
    .cartTextBox{
        display:flex;
        flex-direction:column;
        span{
            &:nth-of-type(2) {
                font-weight:700;
            }
            &:nth-of-type(5){
                em{
                    color: gray;
                    text-decoration:line-through;
                    font-size:14px;
                    margin-right:6px;
                }
                strong{
                    color: ${Ue};
                    font-weight:700;
                }
            }
        }
    }
    i,p{
        position:absolute;
        right:20px;
        font-size:20px;
    }
    i{
        cursor:pointer;
    }
`,E5=V.div`
    margin-top:30px;
    button{
        cursor: pointer;
        width: 100%;
        background-color:${F};
        font-size:20px;
        color:white;
        padding:15px 0;
        &:nth-of-type(1){
            margin-bottom:10px;
        }
    }
`,m0=V.div`
    display: flex;
    font-size:14px;
    span{
        border-top:1px solid #888;
        border-bottom:1px solid #888;
        display:block;
        width:30px;
        text-align: center;
        line-height:25px;
        height: 25px;
        box-sizing: border-box;
    }
    button{
        vertical-align:middle;
        cursor: pointer;
        text-align: center;
        /* line-height:25px; */
        border:1px solid #888;
        background-color:white;
    }
`,_5=j.memo(({item:e,index:t})=>{const{id:n,amount:r,brand:i,name:o,discount:l,img:a,extension:c,price:u,soldout:d,size:p,category1:m}=e,h=K(),y=()=>{if(r<10){const b=r+1;h(Of({newValue:b,index:t}))}},v=()=>{if(r>1){const b=r-1;h(Of({newValue:b,index:t}))}};return s.jsxs(h0,{children:[s.jsx("div",{className:"cartImgBox",children:s.jsx("img",{src:`./images/goods/${a}.${c}`,alt:""})}),s.jsxs("div",{className:"cartTextBox",children:[s.jsx("span",{children:i}),s.jsx("span",{children:o}),m==="wears"&&s.jsxs("span",{children:["옵션명 : ",p]}),s.jsx("span",{children:"배송비 3,000원 | 택배"}),l&&s.jsxs("span",{children:[s.jsxs("em",{children:[(u*r).toLocaleString("kr-KR"),"원"]}),s.jsxs("strong",{children:[(u*r-u*r*(l*.01)).toLocaleString("kr-KR"),"원"]})]}),!l&&s.jsx("span",{children:s.jsxs("strong",{children:[(u*r).toLocaleString("kr-KR"),"원"]})}),s.jsxs(m0,{children:[s.jsx("button",{onClick:v,children:"-"}),s.jsx("span",{children:r}),s.jsx("button",{onClick:y,children:"+"})]})]}),s.jsx("i",{onClick:()=>h(ZS({id:n,size:p})),children:s.jsx(uo,{})})]})}),P5=j.memo(({onMenuClick:e})=>{const{cart:t}=re(u=>u.goodsR),n=K(),r=3e3,i=t.reduce((u,d)=>u+d.price*d.amount-d.price*d.amount*d.discount*.01,0),o=t.length*r+i,l=Je(),a=()=>{l("/store")},c=()=>{const u=confirm("장바구니 내역으로 주문을 완료하시겠습니까?");t.length!==0&&u?(alert("해당 상품의 주문이 완료되었습니다."),e(2),n(t4(t))):alert("취소되었습니다.")};return console.log(t),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"cartInfo",children:[s.jsxs("div",{className:"cartTop",children:[s.jsxs("span",{children:["장바구니 목록 ",t.length,"개"]}),s.jsxs("span",{children:["전체 삭제",s.jsx("i",{onClick:()=>n(e4()),children:s.jsx(q2,{})})]})]}),t.length===0&&s.jsx("div",{style:{height:"100px",padding:"20px",lineHeight:"100px",fontSize:"20px"},children:s.jsx("span",{children:"장바구니에 물품이 존재하지 않습니다."})}),t.map((u,d)=>s.jsx(_5,{item:u,index:d},d))]}),s.jsxs("div",{className:"cost",children:[s.jsxs("div",{children:[s.jsx("span",{children:"총 주문금액"}),s.jsxs("span",{children:[i.toLocaleString("kr-KR"),"원"]})]}),s.jsxs("div",{children:[s.jsx("span",{children:"배송비"}),s.jsxs("span",{children:[(r*t.length).toLocaleString("kr-KR"),"원"]})]}),s.jsxs("div",{children:[s.jsx("span",{children:"총 결제금액"}),s.jsxs("span",{children:[o.toLocaleString("kr-KR"),"원"]})]})]}),s.jsxs(E5,{children:[s.jsx("button",{onClick:c,children:"주문하기"}),s.jsx("button",{onClick:a,children:"쇼핑 계속하기"})]})]})}),N5=j.memo(({item:e,index:t})=>{const{id:n,amount:r,brand:i,name:o,discount:l,img:a,extension:c,price:u,soldout:d,size:p}=e;return K(),s.jsxs(h0,{children:[s.jsx("div",{className:"cartImgBox",children:s.jsx("img",{src:`./images/goods/${a}.${c}`,alt:""})}),s.jsxs("div",{className:"cartTextBox",children:[s.jsx("span",{children:i}),s.jsx("span",{children:o}),s.jsxs("span",{children:["옵션명 : ",p]}),s.jsx("span",{children:"배송비 3,000원 | 택배"}),l&&s.jsxs("span",{children:[s.jsxs("em",{children:[(u*r).toLocaleString("kr-KR"),"원"]}),s.jsxs("strong",{children:[(u*r-u*r*(l*.01)).toLocaleString("kr-KR"),"원"]})]}),!l&&s.jsx("span",{children:s.jsxs("strong",{children:[(u*r).toLocaleString("kr-KR"),"원"]})}),s.jsx(m0,{children:s.jsxs("span",{style:{border:"none",textAlign:"left",fontSize:"16px"},children:[r,"개"]})})]}),s.jsx("p",{style:{color:"red"},children:"배송준비중"})]})}),T5=j.memo(()=>{const{orderList:e}=re(i=>i.goodsR),t=3e3,n=e.reduce((i,o)=>i+o.price*o.amount-o.price*o.amount*o.discount*.01,0),r=e.length*t+n;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"cartInfo",children:[s.jsx("div",{className:"cartTop",children:s.jsxs("span",{children:["주문내역 ",e.length,"개"]})}),e.length===0&&s.jsx("div",{style:{height:"100px",padding:"20px",lineHeight:"100px",fontSize:"20px"},children:s.jsx("span",{children:"주문내역이 존재하지 않습니다."})}),e.map((i,o)=>s.jsx(N5,{item:i,index:o},o))]}),s.jsxs("div",{className:"cost",children:[s.jsxs("div",{children:[s.jsx("span",{children:"총 주문금액"}),s.jsxs("span",{children:[n.toLocaleString("kr-KR"),"원"]})]}),s.jsxs("div",{children:[s.jsx("span",{children:"배송비"}),s.jsxs("span",{children:[(t*e.length).toLocaleString("kr-KR"),"원"]})]}),s.jsxs("div",{children:[s.jsx("span",{children:"총 결제금액"}),s.jsxs("span",{children:[r.toLocaleString("kr-KR"),"원"]})]})]})]})}),I5=j.memo(()=>{const[e,t]=j.useState(1),n=r=>{t(r)};return s.jsx(C5,{children:s.jsxs("div",{className:"inner",children:[s.jsxs("ul",{children:[s.jsx("li",{onClick:()=>n(1),className:e===1?"on":"",children:"장바구니"}),s.jsx("li",{onClick:()=>n(2),className:e===2?"on":"",children:"주문내역"})]}),e===1&&s.jsx(P5,{onMenuClick:n}),e===2&&s.jsx(T5,{})]})})}),L5=()=>{const{currentSetData:e,selectPosition:t,loading:n}=re(i=>i.playerInfo),r=K();return j.useEffect(()=>{n&&localStorage.getItem("playerData")==null?r(Ir()):JSON.parse(localStorage.getItem("playerData"))},[n]),s.jsxs(Hg,{className:"squadWrap",children:[s.jsx("h2",{className:"h2bg",children:"Squad Maker"}),t&&s.jsx("div",{className:"playlistPopupBG",onClick:()=>r(f0())}),s.jsx(r5,{}),s.jsxs("div",{className:"inner",children:[s.jsx(Wg,{className:"playGround",children:e.map(i=>i.backno!==null?s.jsx(Zj,{item:i},i.id):s.jsx(e5,{item:i},i.id))}),s.jsx(i5,{})]})]})},A5=()=>{const e=K(),t=Je(),n=j.useRef(),r=j.useRef(),i=j.useRef(),[o,l]=j.useState({title:"",content:"",category:"my_squad",categoryName:"나만의 스쿼드",date:""}),{title:a,content:c,category:u,categoryName:d,date:p,userName:m}=o,h=new Date,y=h.getFullYear(),v=h.getMonth()+1<10?"0"+(h.getMonth()+1):h.getMonth()+1,b=h.getDate(),x=S=>{const{value:C,name:k}=S.target;l({...o,[k]:C,date:`${y}.${v}.${b}`,squad:w})},f=S=>{},g=S=>{S.preventDefault(),!a||!c?a?c||(alert("내용을 입력해주세요"),i.current.focus()):(alert("제목을 입력해주세요"),n.current.focus()):(e(Ug(o)),t("/notice"))},{currentSetData:w}=re(S=>S.playerInfo);return s.jsx(bd,{children:s.jsxs("div",{className:"inner",children:[s.jsx("h3",{children:"글쓰기"}),s.jsxs("form",{action:"",onSubmit:g,children:[s.jsxs("p",{className:"titleInput",children:[s.jsx("select",{name:"category",id:"",onChange:f,ref:r,children:s.jsx("option",{value:"my_squad",children:"나만의 스쿼드"})}),s.jsx("input",{type:"text",placeholder:"제목을 입력해 주세요.",value:a,name:"title",onChange:x,ref:n})]}),s.jsx("div",{className:"squadBox",children:s.jsx(_d,{squad:w})}),s.jsx("p",{className:"contentBox",children:s.jsx("textarea",{rows:30,placeholder:"내용을 입력해주세요.",value:c,name:"content",onChange:x,ref:i})}),s.jsxs("p",{className:"btnWrap",children:[s.jsx("button",{type:"submit",className:"submitBtn",children:s.jsx("span",{children:"작성"})}),s.jsx("button",{type:"button",onClick:()=>t(-1),children:s.jsx("span",{children:"취소"})})]})]})]})})},O5=()=>s.jsxs(s.Fragment,{children:[s.jsx(jS,{}),s.jsx($y,{children:s.jsx(Ly,{children:s.jsxs(xe,{path:"/",element:s.jsx(G3,{}),children:[s.jsx(xe,{index:!0,element:s.jsx(SS,{})}),s.jsx(xe,{index:!0,path:"/PlayerInfo",element:s.jsx(b5,{})}),s.jsx(xe,{path:"/addPlayer",element:s.jsx(k5,{})}),s.jsx(xe,{index:!0,path:"/squad",element:s.jsx(L5,{})}),s.jsx(xe,{path:"/game_schedule",element:s.jsx(OS,{})}),s.jsxs(xe,{path:"/notice",element:s.jsx(f4,{}),children:[s.jsx(xe,{index:!0,element:s.jsx(_4,{})}),s.jsx(xe,{path:":noticeID",element:s.jsx(l5,{})}),s.jsx(xe,{path:"writing",element:s.jsx(a5,{})}),s.jsx(xe,{path:"writing/squad",element:s.jsx(A5,{})}),s.jsx(xe,{path:"edit",element:s.jsx(c5,{})})]}),s.jsxs(xe,{path:"/news",element:s.jsx(ES,{}),children:[s.jsx(xe,{index:!0,element:s.jsx(_S,{})}),s.jsx(xe,{path:":newsID",element:s.jsx(PS,{})})]}),s.jsx(xe,{path:"/store",element:s.jsx(c4,{})}),s.jsx(xe,{path:"/cart",element:s.jsx(I5,{})}),s.jsx(xe,{path:"/login",element:s.jsx($S,{})}),s.jsx(xe,{path:"/logout",element:s.jsx(RS,{})}),s.jsx(xe,{path:"/join",element:s.jsx(FS,{})})]})})})]}),R5={currentSetData:[{id:1,no:null,positionNo:"positionNo1"},{id:2,no:null,positionNo:"positionNo2"},{id:3,no:null,positionNo:"positionNo3"},{id:4,no:null,positionNo:"positionNo4"}],playerData:[{pid:1,p_no:11,name:"김하진",position:"ST",img:"./images/PlayerImg/hajin.png"},{pid:2,p_no:26,name:"이명관",position:"MF",img:"./images/PlayerImg/lmk.png"},{pid:3,p_no:31,name:"김형종",position:"DF",img:"./images/PlayerImg/khj.png"},{pid:4,p_no:32,name:"이상연",position:"GK",img:"./images/PlayerImg/lsy.png"}],current:{},selectPosition:null},z5=ir({name:"player",initialState:R5,reducers:{}}),M5=z5.reducer,$5={user:[],currentUser:{id:1,userName:"김하진",userId:"hajeans",userPw:"1234",userEmail:"hajin@naver.com",userPhone:"010-123-123"}},D5=ir({name:"authority",initialState:$5,reducers:{}}),F5=D5.reducer,B5=k3({reducer:{playerR:M5,goodsR:r4,newsR:U3,gameScheduleR:AS,noticeR:C4,authorityR:F5,playerInfo:Jj}});Ma.createRoot(document.getElementById("root")).render(s.jsx(H.StrictMode,{children:s.jsx(Hw,{store:B5,children:s.jsx(O5,{})})}));
