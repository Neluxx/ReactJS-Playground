(this["webpackJsonpreactjs-playground"]=this["webpackJsonpreactjs-playground"]||[]).push([[0],{67:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(28),s=c.n(a),i=(c(53),c(10)),j=c(8),l=c(74),o=c(73),d=c(29),u=c(1),b=function(){return Object(u.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",sticky:"top",bg:"dark",variant:"dark",children:[Object(u.jsx)(d.LinkContainer,{to:"/",children:Object(u.jsx)(l.a.Brand,{children:"ReactJS-Playground"})}),Object(u.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(o.a,{className:"mr-auto",children:[Object(u.jsx)(d.LinkContainer,{to:"/timer",children:Object(u.jsx)(o.a.Link,{children:"Timer"})}),Object(u.jsx)(d.LinkContainer,{to:"/pomodoro",children:Object(u.jsx)(o.a.Link,{children:"Pomodoro"})}),Object(u.jsx)(d.LinkContainer,{to:"/counter",children:Object(u.jsx)(o.a.Link,{children:"Counter"})}),Object(u.jsx)(d.LinkContainer,{to:"/news",children:Object(u.jsx)(o.a.Link,{children:"News"})})]})})]})},O=c(7),h=c(72),x=c(69),p=c(70);var m=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(5),s=Object(O.a)(a,2),i=s[0],j=s[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){i>0&&c?(console.log("The timer is running!"),j(i-1)):i<=0&&alert("The timer has run out!")}),1e3);return function(){return clearTimeout(e)}})),Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"Timer"}),Object(u.jsxs)("h2",{children:[i," Seconds"]}),Object(u.jsx)("br",{}),Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Group,{children:[Object(u.jsx)(h.a.Control,{id:"slider",className:"slider w-25 mx-auto",type:"range",min:"1",max:"60",step:"1",value:i,onChange:function(e){j(e.target.value)}}),Object(u.jsx)(h.a.Text,{className:"text-muted",children:"Set how many seconds the timer should run."})]}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a,{variant:"danger",onClick:function(){return r(!1)},children:"Stop"}),Object(u.jsx)(p.a,{variant:"warning",onClick:function(){r(!1),j(5)},children:"Reset"}),Object(u.jsx)(p.a,{variant:"success",onClick:function(){return r(!0)},children:"Start"})]})]})]})},f=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(25),s=Object(O.a)(a,2),i=s[0],j=s[1],l=Object(n.useState)(0),o=Object(O.a)(l,2),d=o[0],b=o[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){i>0&&c?j(i-1):i<=0&&c&&(r(!1),b(d+1))}),1e3);return function(){return clearTimeout(e)}})),Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"Pomodoro"}),Object(u.jsxs)("h2",{children:[d," Pomodori"]}),Object(u.jsxs)("h2",{children:[i," Seconds"]}),Object(u.jsx)("h2",{children:function(){return function(){var e=Math.floor(i/60);return i-60*e}()}}),Object(u.jsx)("br",{}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a,{variant:"success",onClick:function(){return r(!0)},children:"Start"}),Object(u.jsx)(p.a,{variant:"danger",onClick:function(){return r(!1)},children:"Stop"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a,{variant:"light",onClick:function(){return j(5)},children:"5"}),Object(u.jsx)(p.a,{variant:"light",onClick:function(){return j(10)},children:"10"}),Object(u.jsx)(p.a,{variant:"light",onClick:function(){return j(20)},children:"20"})]})]})};var v=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"Counter"}),Object(u.jsx)("h2",{children:c}),Object(u.jsx)("br",{}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a,{variant:"danger",onClick:function(){r(c-1)},children:"Decrease"}),Object(u.jsx)(p.a,{variant:"warning",onClick:function(){r(0)},children:"Reset"}),Object(u.jsx)(p.a,{variant:"success",onClick:function(){r(c+1)},children:"Increase"})]})]})};var g=function(){return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"News"})]})},w=c(22),k=c(17),y=c.n(k),S=c(76),C=c(75),N=c(47),L=(c(65),N.a.initializeApp({apiKey:"AIzaSyDx2vF6XgMOx5oBCEOTUBSRGBCHEwwVFSA",authDomain:"reactjs-playground-c426b.firebaseapp.com",projectId:"reactjs-playground-c426b",storageBucket:"reactjs-playground-c426b.appspot.com",messagingSenderId:"587048312840",appId:"1:587048312840:web:92f06bb3908a54736cb1bd"})),P=L.auth(),E=r.a.createContext();function R(){return Object(n.useContext)(E)}function F(e){var t=e.children,c=Object(n.useState)(),r=Object(O.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!0),j=Object(O.a)(i,2),l=j[0],o=j[1];Object(n.useEffect)((function(){return P.onAuthStateChanged((function(e){s(e),o(!1)}))}),[]);var d={currentUser:a,login:function(e,t){return P.signInWithEmailAndPassword(e,t)},signup:function(e,t){return P.createUserWithEmailAndPassword(e,t)},logout:function(){return P.signOut()},resetPassword:function(e){return P.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(u.jsx)(E.Provider,{value:d,children:!l&&t})}var U=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],r=t[1],a=R(),s=a.currentUser,l=a.logout,o=Object(j.k)();function d(){return(d=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,l();case 4:o.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S.a,{className:"w-25 mx-auto mt-5",children:Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(u.jsx)(C.a,{variant:"danger",children:c}),Object(u.jsx)("strong",{children:"Email:"})," ",s.email,Object(u.jsx)(i.Link,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(u.jsx)("div",{className:"w-100 text-center mt-2",children:Object(u.jsx)(p.a,{variant:"link",onClick:function(){return d.apply(this,arguments)},children:"Log Out"})})]})};var B=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Error"})})};function G(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=R().signup,a=Object(n.useState)(""),s=Object(O.a)(a,2),l=s[0],o=s[1],d=Object(n.useState)(!1),b=Object(O.a)(d,2),x=b[0],m=b[1],f=Object(j.k)();function v(){return(v=Object(w.a)(y.a.mark((function n(a){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),t.current.value===c.current.value){n.next=3;break}return n.abrupt("return",o("Passwords do not match"));case 3:return n.prev=3,o(""),m(!0),n.next=8,r(e.current.value,t.current.value);case 8:f.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),o("Failed to create an account");case 14:m(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S.a,{children:Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(u.jsx)(C.a,{variant:"danger",children:l}),Object(u.jsxs)(h.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(u.jsxs)(h.a.Group,{id:"email",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(u.jsxs)(h.a.Group,{id:"password",children:[Object(u.jsx)(h.a.Label,{children:"Password"}),Object(u.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(u.jsxs)(h.a.Group,{id:"password-confirm",children:[Object(u.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(u.jsx)(h.a.Control,{type:"password",ref:c,required:!0})]}),Object(u.jsx)(p.a,{disabled:x,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(u.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an Account? ",Object(u.jsx)(i.Link,{to:"/login",children:"Log In"})]})]})}function T(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=R().login,r=Object(n.useState)(""),a=Object(O.a)(r,2),s=a[0],l=a[1],o=Object(n.useState)(!1),d=Object(O.a)(o,2),b=d[0],x=d[1],m=Object(j.k)();function f(){return(f=Object(w.a)(y.a.mark((function n(r){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,l(""),x(!0),n.next=6,c(e.current.value,t.current.value);case 6:m.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l("Failed to sign in");case 12:x(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S.a,{children:Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(u.jsx)(C.a,{variant:"danger",children:s}),Object(u.jsxs)(h.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(u.jsxs)(h.a.Group,{id:"email",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(u.jsxs)(h.a.Group,{id:"password",children:[Object(u.jsx)(h.a.Label,{children:"Password"}),Object(u.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(u.jsx)(p.a,{disabled:b,className:"w-100",type:"submit",children:"Log In"})]}),Object(u.jsx)("div",{className:"w-100 text-center mt-2",children:Object(u.jsx)(i.Link,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(u.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an Account? ",Object(u.jsx)(i.Link,{to:"/signup",children:"Sign Up"})]})]})}function A(){var e=Object(n.useRef)(),t=R().resetPassword,c=Object(n.useState)(""),r=Object(O.a)(c,2),a=r[0],s=r[1],j=Object(n.useState)(""),l=Object(O.a)(j,2),o=l[0],d=l[1],b=Object(n.useState)(!1),x=Object(O.a)(b,2),m=x[0],f=x[1];function v(){return(v=Object(w.a)(y.a.mark((function c(n){return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,d(""),s(""),f(!0),c.next=7,t(e.current.value);case 7:d("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),s("Failed to reset password");case 13:f(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S.a,{children:Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),a&&Object(u.jsx)(C.a,{variant:"danger",children:a}),o&&Object(u.jsx)(C.a,{variant:"success",children:o}),Object(u.jsxs)(h.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(u.jsxs)(h.a.Group,{id:"email",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(u.jsx)(p.a,{disabled:m,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(u.jsx)("div",{className:"w-100 text-center mt-2",children:Object(u.jsx)(i.Link,{to:"/login",children:"Login"})})]})}),Object(u.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an Account? ",Object(u.jsx)(i.Link,{to:"/signup",children:"Sign Up"})]})]})}function I(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=R(),a=r.currentUser,s=r.updateEmail,l=r.updatePassword,o=Object(n.useState)(""),d=Object(O.a)(o,2),b=d[0],x=d[1],m=Object(n.useState)(!1),f=Object(O.a)(m,2),v=f[0],g=f[1],w=Object(j.k)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S.a,{className:"w-25 mx-auto mt-5",children:Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),b&&Object(u.jsx)(C.a,{variant:"danger",children:b}),Object(u.jsxs)(h.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==c.current.value)return x("Passwords do not match");var r=[];g(!0),x(""),e.current.value!==a.email&&r.push(s(e.current.value)),t.current.value&&r.push(l(t.current.value)),Promise.all(r).then((function(){w.push("/")})).catch((function(){x("Failed to update account")})).finally((function(){g(!1)}))},children:[Object(u.jsxs)(h.a.Group,{id:"email",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",ref:e,required:!0,defaultValue:a.email})]}),Object(u.jsxs)(h.a.Group,{id:"password",children:[Object(u.jsx)(h.a.Label,{children:"Password"}),Object(u.jsx)(h.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(u.jsxs)(h.a.Group,{id:"password-confirm",children:[Object(u.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(u.jsx)(h.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(u.jsx)(p.a,{disabled:v,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(u.jsx)("div",{className:"w-100 text-center mt-2",children:Object(u.jsx)(i.Link,{to:"/",children:"Cancel"})})]})}var q=c(71),D=c(35),H=c(48),W=["component"];function J(e){var t=e.component,c=Object(H.a)(e,W),n=R().currentUser;return Object(u.jsx)(j.d,Object(D.a)(Object(D.a)({},c),{},{render:function(e){return n?Object(u.jsx)(t,Object(D.a)({},e)):Object(u.jsx)(j.c,{to:"/login"})}}))}var M=function(){return Object(u.jsx)(i.HashRouter,{children:Object(u.jsxs)(F,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(j.g,{children:[Object(u.jsx)(J,{exact:!0,path:"/",component:U}),Object(u.jsx)(J,{path:"/update-profile",children:Object(u.jsx)(I,{})}),Object(u.jsx)(j.d,{path:"/signup",children:Object(u.jsx)(q.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"90vh"},children:Object(u.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(u.jsx)(G,{})})})}),Object(u.jsx)(j.d,{path:"/login",children:Object(u.jsx)(q.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"90vh"},children:Object(u.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(u.jsx)(T,{})})})}),Object(u.jsx)(j.d,{path:"/forgot-password",children:Object(u.jsx)(q.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"90vh"},children:Object(u.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(u.jsx)(A,{})})})}),Object(u.jsx)(j.d,{path:"/timer",children:Object(u.jsx)(m,{})}),Object(u.jsx)(j.d,{path:"/pomodoro",children:Object(u.jsx)(f,{})}),Object(u.jsx)(j.d,{path:"/counter",children:Object(u.jsx)(v,{})}),Object(u.jsx)(j.d,{path:"/news",children:Object(u.jsx)(g,{})}),Object(u.jsx)(j.d,{path:"*",children:Object(u.jsx)(B,{})})]})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.b57cd735.chunk.js.map