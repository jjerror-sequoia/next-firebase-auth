(()=>{"use strict";var e={679:(e,t,r)=>{var n=r(857),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(e){return n.isMemo(e)?a:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=h(r);i&&i!==p&&e(t,i,n)}var a=c(r);d&&(a=a.concat(d(r)));for(var s=u(t),b=u(r),g=0;g<a.length;++g){var v=a[g];if(!(o[v]||n&&n[v]||b&&b[v]||s&&s[v])){var y=f(r,v);try{l(t,v,y)}catch(e){}}}}return t}},421:e=>{e.exports=require("firebase/app")},942:e=>{e.exports=require("firebase/auth")},857:e=>{e.exports=require("react-is")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{default:()=>Q});const e=require("@babel/runtime/helpers/objectWithoutProperties");var t=r.n(e);const i=require("@babel/runtime/helpers/defineProperty");var o=r.n(i);const a=()=>"undefined"!=typeof window;var s=!1,u=e=>{s=e};const l=function(){if(s){for(var e=a()?["%cnext-firebase-auth","background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px"]:["next-firebase-auth:"],t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(...e,...r)}};var c,d=["cookies"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=12096e5,b={debug:!1,loginAPIEndpoint:void 0,logoutAPIEndpoint:void 0,onLoginRequestError:void 0,onLogoutRequestError:void 0,tokenChangedHandler:void 0,onVerifyTokenError:()=>{},onTokenRefreshError:()=>{},authPageURL:void 0,appPageURL:void 0,firebaseAdminInitConfig:void 0,firebaseClientInitConfig:void 0,firebaseAuthEmulatorHost:void 0,cookies:{name:void 0,keys:void 0,domain:void 0,httpOnly:!0,maxAge:6048e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0,unified:!1}},g=e=>{var t=[];e.tokenChangedHandler?(e.loginAPIEndpoint&&t.push('The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.logoutAPIEndpoint&&t.push('The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.onLoginRequestError&&t.push('The "onLoginRequestError" setting should not be set if you are using a "tokenChangedHandler".'),e.onLogoutRequestError&&t.push('The "onLogoutRequestError" setting should not be set if you are using a "tokenChangedHandler".')):(e.loginAPIEndpoint||t.push('The "loginAPIEndpoint" setting is required.'),e.logoutAPIEndpoint||t.push('The "logoutAPIEndpoint" setting is required.')),e.firebaseClientInitConfig&&e.firebaseClientInitConfig.apiKey||t.push('The "firebaseClientInitConfig.apiKey" value is required.'),e.firebaseAuthEmulatorHost&&e.firebaseAuthEmulatorHost.startsWith("http")&&t.push("The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)");var r=["function","undefined"];r.indexOf(typeof e.onVerifyTokenError)<0&&t.push('Invalid next-firebase-auth options: The "onVerifyTokenError" setting must be a function.'),r.indexOf(typeof e.onTokenRefreshError)<0&&t.push('Invalid next-firebase-auth options: The "onTokenRefreshError" setting must be a function.'),r.indexOf(typeof e.onLoginRequestError)<0&&t.push('Invalid next-firebase-auth options: The "onLoginRequestError" setting must be a function.'),r.indexOf(typeof e.onLogoutRequestError)<0&&t.push('Invalid next-firebase-auth options: The "onLogoutRequestError" setting must be a function.');var{keys:n}=e.cookies,i=n&&n.length&&(!n.filter||n.filter((e=>void 0!==e)).length);return a()?(e.firebaseAdminInitConfig&&e.firebaseAdminInitConfig.credential&&e.firebaseAdminInitConfig.credential.privateKey&&t.push('The "firebaseAdminInitConfig" private key setting should not be available on the client side.'),i&&t.push('The "cookies.keys" setting should not be available on the client side.')):(e.cookies.name||t.push('The "cookies.name" setting is required on the server side.'),e.cookies.signed&&!i&&t.push('The "cookies.keys" setting must be set if "cookies.signed" is true.'),e.firebaseAuthEmulatorHost&&(process.env.FIREBASE_AUTH_EMULATOR_HOST?process.env.FIREBASE_AUTH_EMULATOR_HOST!==e.firebaseAuthEmulatorHost&&t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'):t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option')),e.cookies.maxAge>p&&t.push('The "cookies.maxAge" setting must be less than two weeks ('.concat(p," ms)."))),{isValid:0===t.length,errors:t}},v=e=>h(h({},e),{},{cookies:h(h({},e.cookies),{},{keys:["hidden"]}),firebaseAdminInitConfig:h(h({},e.firebaseAdminInitConfig),{},{credential:h(h({},e.firebaseAdminInitConfig.credential),{},{privateKey:"hidden",clientEmail:"hidden"})})}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l("Setting config with provided value:",v(e));var{cookies:r={}}=e,n=t()(e,d),i=h(h(h({},b),n),{},{cookies:h(h(h({},b.cookies),r),{},{signed:!r.unified&&r.signed})}),{isValid:o,errors:a}=g(i);if(!o)throw new Error("Invalid next-firebase-auth options: ".concat(a.join(" ")));c=i},m=()=>{if(!c)throw new Error("next-firebase-auth must be initialized before rendering.");return c};const O=require("react");var E=r.n(O);const A=require("next/router");var R=r(679),w=r.n(R);const P=require("@babel/runtime/helpers/asyncToGenerator");var T=r.n(P),U=["aud","auth_time","email","email_verified","exp","firebase","iat","iss","name","phone_number","picture","sub","uid","user_id"],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((r=>{U.includes(r)||(t[r]=e[r])})),t};function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(){var{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i=!1,token:o=null,claims:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=[e,t,n].reduce(((e,t)=>t?e+1:e),0);if(u>1)throw new Error('createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"');if(i&&(t||n))throw new Error('The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.');if(s&&(t||n))throw new Error('The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.');if(o&&!t)throw new Error('The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.');var l,c={},d=null,f=null,h=!1,p=null,b=null,g=null,v=function(){var e=T()((function*(){return null}));return function(){return e.apply(this,arguments)}}();a()&&(r(942),l=r(421).default);var y=function(){var e=T()((function*(){}));return function(){return e.apply(this,arguments)}}(),m=null;if(e)c=k(s),d=e.uid,f=e.email,h=e.emailVerified,p=e.phoneNumber,b=e.displayName,g=e.photoURL,v=function(){var t=T()((function*(t){return e.getIdToken(t)}));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=T()((function*(){return l.auth().signOut()}));return function(){return e.apply(this,arguments)}}(),m=null;else if(t)c=k(t),d=t.uid,f=t.email,h=t.email_verified,p=t.phone_number,b=t.name,g=t.picture,v=function(){var e=T()((function*(){return o}));return function(){return e.apply(this,arguments)}}(),m=o;else if(n){var O=JSON.parse(n);c=O.claims,d=O.id,f=O.email,h=O.emailVerified,p=O.phoneNumber,b=O.displayName,g=O.photoURL,v=function(){var e=T()((function*(){return O._token||null}));return function(){return e.apply(this,arguments)}}(),m=O._token}return{id:d,email:f,emailVerified:h,phoneNumber:p,displayName:b,photoURL:g,claims:c,getIdToken:v,clientInitialized:i,firebaseUser:e||null,signOut:y,serialize:function(){var{includeToken:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.stringify(C({id:d,claims:c,email:f,emailVerified:h,phoneNumber:p,displayName:b,photoURL:g,clientInitialized:i},e&&{_token:m}))}}};var S=(0,O.createContext)(j());var L=r(421),D=r.n(L);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(942);var N=function(){var e=T()((function*(e){var t,{loginAPIEndpoint:r,logoutAPIEndpoint:n,onLoginRequestError:i,onLogoutRequestError:o}=m();if(e.id){var a=yield e.getIdToken();if(!(t=yield fetch(r,{method:"POST",headers:{Authorization:a},credentials:"include"})).ok){var s=yield t.json(),u=new Error("Received ".concat(t.status," response from login API endpoint: ").concat(JSON.stringify(s)));if(!i)throw u;yield i(u)}}else if(!(t=yield fetch(n,{method:"POST",credentials:"include"})).ok){var l=yield t.json(),c=new Error("Received ".concat(t.status," response from logout API endpoint: ").concat(JSON.stringify(l)));if(!o)throw c;yield o(c)}return t}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=T()((function*(e){var{tokenChangedHandler:t}=m(),r=j({firebaseUserClientSDK:e,clientInitialized:!0});return t?t(r):N(r)}));return function(t){return e.apply(this,arguments)}}();const q=()=>{var[e,t]=(0,O.useState)({user:void 0,claims:{},initialized:!1}),[r,n]=(0,O.useState)(!1);return(0,O.useEffect)((()=>{var e=!1,r=function(){var r=T()((function*(r){l("Firebase ID token changed. Firebase user:",r),n(!1);var i={};if(r){var o=yield D().auth().currentUser.getIdTokenResult();i=k(o.claims)}t({user:r,claims:i,initialized:!0}),l("Starting auth API request via tokenChangedHandler."),yield H(r),e?l("Component unmounted before completing auth API request via tokenChangedHandler."):(n(!0),l("Completed auth API request via tokenChangedHandler."))}));return function(e){return r.apply(this,arguments)}}(),i=D().auth().onIdTokenChanged(r);return()=>{i(),e=!0}}),[]),_(_({},e),{},{authRequestCompleted:r})},z={RENDER:"render",SHOW_LOADER:"showLoader",RETURN_NULL:"returnNull",REDIRECT_TO_LOGIN:"redirectToLogin",REDIRECT_TO_APP:"redirectToApp"};function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={basePath:!0,permanent:!1},V=e=>{var{ctx:t,AuthUser:r,redirectDestination:n}=e;if("function"==typeof n){var i=n({ctx:t,AuthUser:r});return V({ctx:t,AuthUser:r,redirectDestination:i})}return"string"==typeof n?F(F({},M),{},{destination:n}):"object"==typeof n?F(F({},M),n):null},W=e=>{var{redirectConfigName:t,redirectURL:r,ctx:n,AuthUser:i}=e;return((e,t)=>{if(!t||"string"!=typeof t&&!("destination"in t))throw new Error('The "'.concat(e,'" must be set to a non-empty string, an object literal containing "destination", or a function that returns either.'));return t})(t,V({ctx:n,AuthUser:i,redirectDestination:r||m()[t]}))},B=e=>{var{redirectURL:t,AuthUser:r,ctx:n}=e;return W({redirectConfigName:"authPageURL",redirectURL:t,AuthUser:r,ctx:n})},$=e=>{var{redirectURL:t,AuthUser:r,ctx:n}=e;return W({redirectConfigName:"appPageURL",redirectURL:t,AuthUser:r,ctx:n})},G=["AuthUserSerialized"];function J(){var{firebaseClientInitConfig:e,firebaseAuthEmulatorHost:t}=m();if(!D().apps.length){if(!e)throw new Error('If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.');D().initializeApp(e)}t&&D().auth().useEmulator("http://".concat(t))}const Q={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(!0===e.debug),y(e),a()&&J()},withAuthUser:function(){var{whenAuthed:e=z.RENDER,whenUnauthedBeforeInit:r=z.RENDER,whenUnauthedAfterInit:n=z.RENDER,whenAuthedBeforeRedirect:i=z.RETURN_NULL,appPageURL:o=null,authPageURL:s=null,LoaderComponent:u=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c=>{var d=d=>{var{AuthUserSerialized:f}=d,h=t()(d,G),p=(0,O.useMemo)((()=>j({serializedAuthUser:f})),[f]),{user:b,claims:g,initialized:v,authRequestCompleted:y}=q(),m=(0,O.useMemo)((()=>j({firebaseUserClientSDK:b,clientInitialized:v,claims:g})),[b,v,g]),R=v?m:p,w=!!R.id,P=R.clientInitialized,T=w&&e===z.REDIRECT_TO_APP,U=T&&a&&y,k=!w&&(!P&&r===z.REDIRECT_TO_LOGIN||P&&n===z.REDIRECT_TO_LOGIN),I=k&&a&&(r===z.REDIRECT_TO_LOGIN||y),C=(0,A.useRouter)(),L=(0,O.useCallback)((e=>{var{basePath:t,destination:r}=e;!1===t?window.location.replace(r):C.replace(r)}),[C]),D=(0,O.useCallback)((()=>{l("Redirecting to app.");var e=$({AuthUser:R,redirectURL:o});L(e)}),[R,L]),x=(0,O.useCallback)((()=>{l("Redirecting to login.");var e=B({AuthUser:R,redirectURL:s});L(e)}),[R,L]);(0,O.useEffect)((()=>{a()&&(U?D():I&&x())}),[U,I,D,x]);var _,N=u?E().createElement(u,null):null,H=E().createElement(S.Provider,{value:R},E().createElement(c,h));return _=T?i===z.RENDER?H:i===z.SHOW_LOADER?N:null:k?r===z.RETURN_NULL?null:r===z.SHOW_LOADER?N:H:w||y?H:r===z.SHOW_LOADER?N:r===z.RETURN_NULL?null:H,l("AuthUser set to:",R),_};return d.displayName="WithAuthUserHOC",w()(d,c),d}},useAuthUser:()=>(0,O.useContext)(S),withAuthUserSSR:()=>{throw new Error('"withAuthUserSSR" can only be called server-side.')},withAuthUserTokenSSR:()=>{throw new Error('"withAuthUserTokenSSR" can only be called server-side.')},setAuthCookies:()=>{throw new Error('"setAuthCookies" can only be called server-side.')},unsetAuthCookies:()=>{throw new Error('"unsetAuthCookies" can only be called server-side.')},verifyIdToken:()=>{throw new Error('"verifyIdToken" can only be called server-side.')},AuthAction:z,getFirebaseAdmin:()=>{throw new Error('"getFirebaseAdmin" can only be called server-side.')}}})(),module.exports=n.default})();