(this["webpackJsonpproductivity-manager"]=this["webpackJsonpproductivity-manager"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(14),j=n.n(i),s=(n(39),n(40),n(41),n(18)),a=n(6),o=n(54),d=n(56),l=n(16),b=n(2),h=function(){return Object(b.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",sticky:"top",bg:"dark",variant:"dark",children:[Object(b.jsx)(l.LinkContainer,{to:"/",children:Object(b.jsx)(o.a.Brand,{children:"ReactJS-Playground"})}),Object(b.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(d.a,{className:"mr-auto",children:[Object(b.jsx)(l.LinkContainer,{to:"/timer",children:Object(b.jsx)(d.a.Link,{children:"Timer"})}),Object(b.jsx)(l.LinkContainer,{to:"/pomodoro",children:Object(b.jsx)(d.a.Link,{children:"Pomodoro"})}),Object(b.jsx)(l.LinkContainer,{to:"/counter",children:Object(b.jsx)(d.a.Link,{children:"Counter"})})]})})]})};var x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Home"})})},O=n(15),u=n(55),v=n(52),m=n(53);var p=function(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(5),j=Object(O.a)(i,2),s=j[0],a=j[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){s>0&&n?(console.log("The timer is running!"),a(s-1)):s<=0&&alert("The timer has run out!")}),1e3);return function(){return clearTimeout(e)}})),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"Timer"}),Object(b.jsxs)("h2",{children:[s," Seconds"]}),Object(b.jsx)("br",{}),Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(u.a.Group,{children:[Object(b.jsx)(u.a.Control,{id:"slider",className:"slider w-25 mx-auto",type:"range",min:"1",max:"60",step:"1",value:s,onChange:function(e){a(e.target.value)}}),Object(b.jsx)(u.a.Text,{className:"text-muted",children:"Set how many seconds the timer should run."})]}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)(m.a,{variant:"danger",onClick:function(){r(!1)},children:"Stop"}),Object(b.jsx)(m.a,{variant:"warning",onClick:function(){r(!1),a(5)},children:"Reset"}),Object(b.jsx)(m.a,{variant:"success",onClick:function(){r(!0)},children:"Start"})]})]})]})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Pomodoro"})})};var g=function(){var e=Object(c.useState)(0),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"Counter"}),Object(b.jsx)("h2",{children:n}),Object(b.jsx)("br",{}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)(m.a,{variant:"danger",onClick:function(){r(n-1)},children:"Decrease"}),Object(b.jsx)(m.a,{variant:"warning",onClick:function(){r(0)},children:"Reset"}),Object(b.jsx)(m.a,{variant:"success",onClick:function(){r(n+1)},children:"Increase"})]})]})};var k=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Error"})})};var C=function(){return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)(s.HashRouter,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(a.g,{children:[Object(b.jsx)(a.d,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(a.d,{path:"/timer",children:Object(b.jsx)(p,{})}),Object(b.jsx)(a.d,{path:"/pomodoro",children:Object(b.jsx)(f,{})}),Object(b.jsx)(a.d,{path:"/counter",children:Object(b.jsx)(g,{})}),Object(b.jsx)(a.d,{path:"*",children:Object(b.jsx)(k,{})})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;n(e),c(e),r(e),i(e),j(e)}))};j.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.70c57aa9.chunk.js.map