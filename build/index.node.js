/*! For license information please see index.node.js.LICENSE.txt */
(()=>{"use strict";var e={933:(e,t,r)=>{var n=r(5)("cookies"),i=r(42),o=r(605),s={},a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,u=/^(?:lax|none|strict)$/i;function c(e,t,r){if(!(this instanceof c))return new c(e,t,r);this.secure=void 0,this.request=e,this.response=t,r&&(Array.isArray(r)?(n('"keys" argument; provide using options {"keys": [...]}'),this.keys=new i(r)):r.constructor&&"Keygrip"===r.constructor.name?(n('"keys" argument; provide using options {"keys": keygrip}'),this.keys=r):(this.keys=Array.isArray(r.keys)?new i(r.keys):r.keys,this.secure=r.secure))}function h(e,t,r){if(!a.test(e))throw new TypeError("argument name is invalid");if(t&&!a.test(t))throw new TypeError("argument value is invalid");for(var e in this.name=e,this.value=t||"",r)this[e]=r[e];if(this.value||(this.expires=new Date(0),this.maxAge=null),this.path&&!a.test(this.path))throw new TypeError("option path is invalid");if(this.domain&&!a.test(this.domain))throw new TypeError("option domain is invalid");if(this.sameSite&&!0!==this.sameSite&&!u.test(this.sameSite))throw new TypeError("option sameSite is invalid")}function l(e,t){if(t.overwrite)for(var r=e.length-1;r>=0;r--)0===e[r].indexOf(t.name+"=")&&e.splice(r,1);e.push(t.toHeader())}c.prototype.get=function(e,t){var r,n,i,o,a,u,c=e+".sig",h=t&&void 0!==t.signed?t.signed:!!this.keys;if((r=this.request.headers.cookie)&&(n=r.match(function(e){return s[e]?s[e]:s[e]=new RegExp("(?:^|;) *"+e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+"=([^;]*)")}(e)))){if(i=n[1],!t||!h)return i;if(o=this.get(c)){if(a=e+"="+i,!this.keys)throw new Error(".keys required for signed cookies");if(!((u=this.keys.index(a,o))<0))return u&&this.set(c,this.keys.sign(a),{signed:!1}),i;this.set(c,null,{path:"/",signed:!1})}}},c.prototype.set=function(e,t,r){var i=this.response,s=this.request,a=i.getHeader("Set-Cookie")||[],u=void 0!==this.secure?!!this.secure:"https"===s.protocol||s.connection.encrypted,c=new h(e,t,r),p=r&&void 0!==r.signed?r.signed:!!this.keys;if("string"==typeof a&&(a=[a]),!u&&r&&r.secure)throw new Error("Cannot send secure cookie over unencrypted connection");if(c.secure=r&&void 0!==r.secure?r.secure:u,r&&"secureProxy"in r&&(n('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed'),c.secure=r.secureProxy),l(a,c),r&&p){if(!this.keys)throw new Error(".keys required for signed cookies");c.value=this.keys.sign(c.toString()),c.name+=".sig",l(a,c)}return(i.set?o.OutgoingMessage.prototype.setHeader:i.setHeader).call(i,"Set-Cookie",a),this},h.prototype.path="/",h.prototype.expires=void 0,h.prototype.domain=void 0,h.prototype.httpOnly=!0,h.prototype.sameSite=!1,h.prototype.secure=!1,h.prototype.overwrite=!1,h.prototype.toString=function(){return this.name+"="+this.value},h.prototype.toHeader=function(){var e=this.toString();return this.maxAge&&(this.expires=new Date(Date.now()+this.maxAge)),this.path&&(e+="; path="+this.path),this.expires&&(e+="; expires="+this.expires.toUTCString()),this.domain&&(e+="; domain="+this.domain),this.sameSite&&(e+="; samesite="+(!0===this.sameSite?"strict":this.sameSite.toLowerCase())),this.secure&&(e+="; secure"),this.httpOnly&&(e+="; httponly"),e},Object.defineProperty(h.prototype,"maxage",{configurable:!0,enumerable:!0,get:function(){return this.maxAge},set:function(e){return this.maxAge=e}}),n.property(h.prototype,"maxage",'"maxage"; use "maxAge" instead'),c.connect=c.express=function(e){return function(t,r,n){t.cookies=r.cookies=new c(t,r,{keys:e}),n()}},c.Cookie=h,e.exports=c},5:e=>{e.exports=require("depd")},421:e=>{e.exports=require("firebase/app")},942:e=>{e.exports=require("firebase/auth")},605:e=>{e.exports=require("http")},42:e=>{e.exports=require("keygrip")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{default:()=>fe});const e=require("@babel/runtime/helpers/defineProperty");var t=r.n(e);const i=require("@babel/runtime/helpers/objectWithoutProperties");var o=r.n(i);const s=()=>"undefined"!=typeof window;var a=!1,u=e=>{a=e};const c=function(){if(a){for(var e=s()?["%cnext-firebase-auth","background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px"]:["next-firebase-auth:"],t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(...e,...r)}};var h,l=["cookies"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=12096e5,g={debug:!1,loginAPIEndpoint:void 0,logoutAPIEndpoint:void 0,tokenChangedHandler:void 0,authPageURL:void 0,appPageURL:void 0,firebaseAdminInitConfig:void 0,firebaseClientInitConfig:void 0,firebaseAuthEmulatorHost:void 0,cookies:{name:void 0,keys:void 0,domain:void 0,httpOnly:!0,maxAge:6048e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0,unified:!1}},y=e=>{var t=[];e.tokenChangedHandler?(e.loginAPIEndpoint&&t.push('The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.logoutAPIEndpoint&&t.push('The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".')):(e.loginAPIEndpoint||t.push('The "loginAPIEndpoint" setting is required.'),e.logoutAPIEndpoint||t.push('The "logoutAPIEndpoint" setting is required.')),e.firebaseClientInitConfig&&e.firebaseClientInitConfig.apiKey||t.push('The "firebaseClientInitConfig.apiKey" value is required.'),e.firebaseAuthEmulatorHost&&e.firebaseAuthEmulatorHost.startsWith("http")&&t.push("The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)");var{keys:r}=e.cookies,n=r&&r.length&&(!r.filter||r.filter((e=>void 0!==e)).length);return s()?(e.firebaseAdminInitConfig&&e.firebaseAdminInitConfig.credential&&e.firebaseAdminInitConfig.credential.privateKey&&t.push('The "firebaseAdminInitConfig" private key setting should not be available on the client side.'),n&&t.push('The "cookies.keys" setting should not be available on the client side.')):(e.cookies.name||t.push('The "cookies.name" setting is required on the server side.'),e.cookies.signed&&!n&&t.push('The "cookies.keys" setting must be set if "cookies.signed" is true.'),e.firebaseAuthEmulatorHost&&(process.env.FIREBASE_AUTH_EMULATOR_HOST?process.env.FIREBASE_AUTH_EMULATOR_HOST!==e.firebaseAuthEmulatorHost&&t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'):t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option')),e.cookies.maxAge>f&&t.push('The "cookies.maxAge" setting must be less than two weeks ('.concat(f," ms)."))),{isValid:0===t.length,errors:t}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c("Setting config with provided value:",e);var{cookies:t={}}=e,r=o()(e,l),n=d(d(d({},g),r),{},{cookies:d(d(d({},g.cookies),t),{},{signed:!t.unified&&t.signed})}),{isValid:i,errors:s}=y(n);if(!i)throw new Error("Invalid next-firebase-auth options: ".concat(s.join(" ")));h=n},m=()=>{if(!h)throw new Error("next-firebase-auth must be initialized before rendering.");return h};const b=require("react");var w=r.n(b);const k=require("next/router"),O=require("@babel/runtime/helpers/asyncToGenerator");var A=r.n(O),E=["aud","auth_time","email","email_verified","exp","firebase","iat","iss","name","phone_number","picture","sub","uid","user_id"],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((r=>{E.includes(r)||(t[r]=e[r])})),t};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?S(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const U=function(){var{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i=!1,token:o=null,claims:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c("Called createAuthUser with arguments:",{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i,token:o,claims:a});var u=[e,t,n].reduce(((e,t)=>t?e+1:e),0);if(u>1)throw new Error('createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"');if(i&&(t||n))throw new Error('The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.');if(a&&(t||n))throw new Error('The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.');if(o&&!t)throw new Error('The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.');var h,l={},p=null,d=null,f=!1,g=null,y=null,v=null,m=function(){var e=A()((function*(){return null}));return function(){return e.apply(this,arguments)}}();s()&&(r(942),h=r(421).default);var b=function(){var e=A()((function*(){}));return function(){return e.apply(this,arguments)}}(),w=null;if(e)l=T(a),p=e.uid,d=e.email,f=e.emailVerified,g=e.phoneNumber,y=e.displayName,v=e.photoURL,m=function(){var t=A()((function*(){return e.getIdToken()}));return function(){return t.apply(this,arguments)}}(),b=function(){var e=A()((function*(){return h.auth().signOut()}));return function(){return e.apply(this,arguments)}}(),w=null;else if(t)l=T(t),p=t.uid,d=t.email,f=t.email_verified,g=t.phone_number,y=t.name,v=t.picture,m=function(){var e=A()((function*(){return o}));return function(){return e.apply(this,arguments)}}(),w=o;else if(n){var k=JSON.parse(n);l=k.claims,p=k.id,d=k.email,f=k.emailVerified,g=k.phoneNumber,y=k.displayName,v=k.photoURL,m=function(){var e=A()((function*(){return k._token||null}));return function(){return e.apply(this,arguments)}}(),w=k._token}return{id:p,email:d,emailVerified:f,phoneNumber:g,displayName:y,photoURL:v,claims:l,getIdToken:m,clientInitialized:i,firebaseUser:e||null,signOut:b,serialize:function(){var{includeToken:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.stringify(P({id:p,claims:l,email:d,emailVerified:f,phoneNumber:g,displayName:y,photoURL:v,clientInitialized:i},e&&{_token:w}))}}};var R=(0,b.createContext)(U());var I=r(421),C=r.n(I),j=(r(942),function(){var e=A()((function*(e){var t,{loginAPIEndpoint:r,logoutAPIEndpoint:n}=m();if(e.id){var i=yield e.getIdToken();if(!(t=yield fetch(r,{method:"POST",headers:{Authorization:i},credentials:"include"})).ok){var o=yield t.json();throw new Error("Received ".concat(t.status," response from login API endpoint: ").concat(JSON.stringify(o)))}}else if(!(t=yield fetch(n,{method:"POST",credentials:"include"})).ok){var s=yield t.json();throw new Error("Received ".concat(t.status," response from logout API endpoint: ").concat(JSON.stringify(s)))}return t}));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=A()((function*(e){var{tokenChangedHandler:t}=m(),r=U({firebaseUserClientSDK:e,clientInitialized:!0});return t?t(r):j(r)}));return function(t){return e.apply(this,arguments)}}();const _=()=>{var[e,t]=(0,b.useState)(),[r,n]=(0,b.useState)({}),[i,o]=(0,b.useState)(!1);function s(e){return a.apply(this,arguments)}function a(){return(a=A()((function*(e){if(e){var r=yield C().auth().currentUser.getIdTokenResult(),i=T(r.claims);n(i)}t(e),o(!0),yield x(e)}))).apply(this,arguments)}return(0,b.useEffect)((()=>{var e=C().auth().onIdTokenChanged(s);return()=>e()}),[]),{user:e,claims:r,initialized:i}},D={RENDER:"render",SHOW_LOADER:"showLoader",RETURN_NULL:"returnNull",REDIRECT_TO_LOGIN:"redirectToLogin",REDIRECT_TO_APP:"redirectToApp"};var L=["AuthUserSerialized"];function N(){var{firebaseClientInitConfig:e,firebaseAuthEmulatorHost:t}=m();if(!C().apps.length){if(!e)throw new Error('If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.');C().initializeApp(e)}t&&C().auth().useEmulator("http://".concat(t))}const q={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(!0===e.debug),v(e),s()&&N()},withAuthUser:function(){var{whenAuthed:e=D.RENDER,whenUnauthedBeforeInit:t=D.RENDER,whenUnauthedAfterInit:r=D.RENDER,appPageURL:n=null,authPageURL:i=null,LoaderComponent:a=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u=>{var c=c=>{var{AuthUserSerialized:h}=c,l=o()(c,L),p=U({serializedAuthUser:h}),{user:d,claims:f,initialized:g}=_(),y=U({firebaseUserClientSDK:d,clientInitialized:g,claims:f}),v=g?y:p,O=!!v.id,A=v.clientInitialized,E=O&&e===D.REDIRECT_TO_APP,T=!O&&(!A&&t===D.REDIRECT_TO_LOGIN||A&&r===D.REDIRECT_TO_LOGIN),S=(0,k.useRouter)(),P=(0,b.useCallback)((()=>{var e=n||m().appPageURL;if(!e)throw new Error('The "appPageURL" config setting must be set when using `REDIRECT_TO_APP`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:v});if(!t||"string"!=typeof t)throw new Error('The "appPageURL" must be set to a non-empty string or resolve to a non-empty string');S.replace(t)}),[S,v]),I=(0,b.useCallback)((()=>{var e=i||m().authPageURL;if(!e)throw new Error('The "authPageURL" config setting must be set when using `REDIRECT_TO_LOGIN`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:v});if(!t||"string"!=typeof t)throw new Error('The "authPageURL" must be set to a non-empty string or resolve to a non-empty string');S.replace(t)}),[S,v]);if((0,b.useEffect)((()=>{s()&&(E?P():T&&I())}),[E,T,P,I]),E||T)return null;if(!A&&!O){if(t===D.SHOW_LOADER)return a?w().createElement(a,null):null;if(t===D.RETURN_NULL)return null}return w().createElement(R.Provider,{value:v},w().createElement(u,l))};return c.displayName="WithAuthUserHOC",c}},useAuthUser:()=>(0,b.useContext)(R),withAuthUserSSR:()=>{throw new Error('"withAuthUserSSR" can only be called server-side.')},withAuthUserTokenSSR:()=>{throw new Error('"withAuthUserTokenSSR" can only be called server-side.')},setAuthCookies:()=>{throw new Error('"setAuthCookies" can only be called server-side.')},unsetAuthCookies:()=>{throw new Error('"unsetAuthCookies" can only be called server-side.')},verifyIdToken:()=>{throw new Error('"verifyIdToken" can only be called server-side.')},AuthAction:D,getFirebaseAdmin:()=>{throw new Error('"getFirebaseAdmin" can only be called server-side.')}},H=require("firebase-admin");function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?z(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const J=()=>{if(!H.apps.length){var{firebaseAdminInitConfig:e}=m();if(!e)throw new Error('If not initializing the Firebase admin SDK elsewhere, you must provide "firebaseAdminInitConfig" to next-firebase-auth.');H.initializeApp(K(K({},e),{},{credential:H.credential.cert(K({},e.credential))}))}return H};var F="auth/id-token-expired",B=()=>process.env.FIREBASE_AUTH_EMULATOR_HOST?"http://".concat(process.env.FIREBASE_AUTH_EMULATOR_HOST,"/"):"https://",M=()=>m().firebaseClientInitConfig.apiKey,W=function(){var e=A()((function*(e){if(!e)throw new Error('The "refreshToken" argument is required.');var t=M(),r="".concat(B(),"securetoken.googleapis.com/v1/token?key=").concat(t),n=yield fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token=".concat(e)}),i=yield n.json();if(!n.ok)throw new Error("Problem refreshing token: ".concat(JSON.stringify(i)));return i.id_token}));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=A()((function*(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e,i=J();try{t=yield i.auth().verifyIdToken(e)}catch(e){if(!r||e.code!==F)throw e;n=yield W(r),t=yield i.auth().verifyIdToken(n)}var o=U({firebaseUserAdminSDK:t,token:n});return o}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=A()((function*(e){var t=yield G(e),r=J(),n=yield r.auth().createCustomToken(t.id),i=M(),o="".concat(B(),"identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=").concat(i),s=yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,returnSecureToken:!0})}),a=yield s.json();if(!s.ok)throw new Error("Problem getting a refresh token: ".concat(JSON.stringify(a)));var{idToken:u,refreshToken:c}=a;return{idToken:u,refreshToken:c,AuthUser:t}}));return function(t){return e.apply(this,arguments)}}(),$=r(933),Q=r.n($),X=e=>{var t=Buffer.from(e,"base64").toString("utf8");return JSON.parse(t)},Y=e=>{var t=JSON.stringify(e);return Buffer.from(t).toString("base64")},Z=function(e){var{req:t,res:r}=e,{keys:n,secure:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=Q()(t,r,{keys:n,secure:i});return o},ee=function(e,t){var{req:r,res:n}=t,{keys:i,secure:o,signed:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s&&!i)throw new Error('The "keys" value must be provided when using signed cookies.');var a=Z({req:r,res:n},{keys:i,secure:o}),u=a.get(e,{signed:s});return u?X(u):void 0},te=function(e,t,r){var{req:n,res:i}=r,{keys:o,domain:s,httpOnly:a,maxAge:u,overwrite:c,path:h,sameSite:l,secure:p,signed:d}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(d&&!o)throw new Error('The "keys" value must be provided when using signed cookies.');var f=Z({req:n,res:i},{keys:o,secure:p}),g=null==t?void 0:Y(t);f.set(e,g,{domain:s,httpOnly:a,maxAge:u,overwrite:c,path:h,sameSite:l,secure:p,signed:d})},re=(e,t,r)=>{te(e,void 0,t,r)},ne=()=>m().cookies.name,ie=()=>m().cookies.unified,oe=()=>{var e=ne();return ie()?e:"".concat(e,".AuthUser")},se=()=>{var e=ne();return ie()?e:"".concat(e,".AuthUserTokens")};const ae=function(){var e=A()((function*(e,t){if(!e.headers||!e.headers.authorization)throw new Error("The request is missing an Authorization header value");var r=e.headers.authorization,{idToken:n,refreshToken:i,AuthUser:o}=yield V(r),{unified:s,name:a}=m().cookies,u=(e=>{var{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}=e;return{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}})(m().cookies);return s?te(a,"".concat(JSON.stringify({idToken:n,refreshToken:i}),"|-|").concat(o.serialize({includeToken:!1})),{req:e,res:t},u):(te(se(),JSON.stringify({idToken:n,refreshToken:i}),{req:e,res:t},u),te(oe(),o.serialize({includeToken:!1}),{req:e,res:t},u)),{idToken:n,refreshToken:i,AuthUser:o}}));return function(t,r){return e.apply(this,arguments)}}(),ue=function(){var e=A()((function*(e,t){var r=(e=>{var{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}=e;return{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}})(m().cookies);re(se(),{req:e,res:t},r),re(oe(),{req:e,res:t},r)}));return function(t,r){return e.apply(this,arguments)}}();function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ce(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const le=function(){var{whenAuthed:e=D.RENDER,whenUnauthed:t=D.RENDER,appPageURL:r=null,authPageURL:n=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{useToken:i=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o=>function(){var s=A()((function*(s){var a,{req:u,res:c}=s,{keys:h,secure:l,signed:p,unified:d}=m().cookies;if(i){var f=ee(se(),{req:u,res:c},{keys:h,secure:l,signed:p});d&&f&&(f=f.split("|-|")[0]);var{idToken:g,refreshToken:y}=f?JSON.parse(f):{};a=g?yield G(g,y):U()}else{var v=ee(oe(),{req:u,res:c},{keys:h,secure:l,signed:p});d&&v&&(v=v.split("|-|")[1]),a=U({serializedAuthUser:v})}var b=a.serialize();if(!a.id&&t===D.REDIRECT_TO_LOGIN){var w=n||m().authPageURL;if(!w)throw new Error('When "whenUnauthed" is set to AuthAction.REDIRECT_TO_LOGIN, "authPageURL" must be set.');var k="string"==typeof w?w:w({ctx:s,AuthUser:a});if(!k)throw new Error('The "authPageURL" must be set to a non-empty string or resolve to a non-empty string');return{redirect:{destination:k,permanent:!1}}}if(a.id&&e===D.REDIRECT_TO_APP){var O=r||m().appPageURL;if(!O)throw new Error('When "whenAuthed" is set to AuthAction.REDIRECT_TO_APP, "appPageURL" must be set.');var A="string"==typeof O?O:O({ctx:s,AuthUser:a});if(!A)throw new Error('The "appPageURL" must be set to a non-empty string or resolve to a non-empty string');return{redirect:{destination:A,permanent:!1}}}var E={props:{AuthUserSerialized:b}};if(o){s.AuthUser=a;var T=(yield o(s))||{};T&&(T.props?(E=he({},T)).props.AuthUserSerialized=b:(T.notFound||T.redirect)&&(E=he({},T)))}return E}));return function(e){return s.apply(this,arguments)}}()};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?pe(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const fe=de(de({},q),{},{init:e=>q.init(e),withAuthUserSSR:e=>le(e,{useToken:!1}),withAuthUserTokenSSR:e=>le(e,{useToken:!0}),setAuthCookies:ae,unsetAuthCookies:ue,verifyIdToken:G,getFirebaseAdmin:()=>J()})})(),module.exports=n.default})();