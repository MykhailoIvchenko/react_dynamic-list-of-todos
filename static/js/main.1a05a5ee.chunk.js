(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),r=c(7),a=c(2),o=c(1),i=(c(14),c(15),c(16),c(0)),u=function(e){var t=e.selectUser,c=e.displayedTodos,n=e.currentTodoId;return Object(i.jsx)("div",{className:"TodoList__list-container",children:Object(i.jsx)("ul",{className:"TodoList__list",children:c.map((function(e){return Object(i.jsxs)("li",{className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(i.jsx)("p",{className:e.id===n?"Selected":"",children:e.title})]}),Object(i.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){t(e.userId,e.id)},children:["User\xa0#",e.userId]})]},e.id)}))})})},l=c(9),d=c(6),j=c.n(d),b=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));if(!e.text)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},h=function(e){return b("/users/".concat(e))},m=(c(19),function(e){var t=e.userId,c=e.clear,n=Object(o.useState)({userName:"",userEmail:"",userPhone:""}),s=Object(a.a)(n,2),r=s[0],u=s[1],d=Object(o.useState)(!1),b=Object(a.a)(d,2),m=b[0],p=b[1],O=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:return c=e.sent,p(!1),e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(0),p(!0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){O(t).then((function(e){e&&u({userName:e.name,userEmail:e.email,userPhone:e.phone})}))}),[t]),Object(i.jsxs)("div",{className:"CurrentUser",children:[Object(i.jsx)("h2",{className:"CurrentUser__title",children:Object(i.jsxs)("span",{children:["Selected user:"," ".concat(t)]})}),m?Object(i.jsx)("p",{children:"User information is absent"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:"CurrentUser__name",children:r.userName}),Object(i.jsx)("p",{className:"CurrentUser__email",children:r.userEmail}),Object(i.jsx)("p",{className:"CurrentUser__phone",children:r.userPhone})]}),Object(i.jsx)("button",{className:"ClearUserInfo",type:"button",onClick:c,children:"Clear"})]})}),p=function(){var e=Object(o.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)(0),l=Object(a.a)(s,2),d=l[0],j=l[1],h=Object(o.useState)([]),p=Object(a.a)(h,2),O=p[0],f=p[1],x=Object(o.useState)(""),_=Object(a.a)(x,2),v=_[0],N=_[1],S=Object(o.useState)("all"),T=Object(a.a)(S,2),w=T[0],C=T[1];return Object(o.useEffect)((function(){b("/todos").then((function(e){f(e)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"TodoList",children:[Object(i.jsx)("h2",{children:"Todos:"}),Object(i.jsxs)("label",{className:"Search",children:["Search todo",Object(i.jsx)("input",{className:"Search__field",onChange:function(e){return N(e.target.value)}})]}),Object(i.jsxs)("select",{className:"StatusSelection",defaultValue:"all",onChange:function(e){return C(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"Show all todos"}),Object(i.jsx)("option",{value:"active",children:"Show active todos"}),Object(i.jsx)("option",{value:"completed",children:"Show completed todos"})]}),Object(i.jsx)("button",{className:"Randomize",type:"button",onClick:function(){for(var e=[],t=Object(r.a)(O);t.length>0;){var c=Math.round(Math.random()*(t.length-1)),n=t.splice(c,1);e.push(n[0])}f(e)},children:"Randomize"}),Object(i.jsx)("div",{className:"App__sidebar",children:Object(i.jsx)(u,{selectUser:function(e,t){n(e),j(t)},displayedTodos:function(){return e=function(e){switch(e){case"active":return O.filter((function(e){return!1===e.completed}));case"completed":return O.filter((function(e){return!0===e.completed}));default:return O}}(w),(t=v)?e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):Object(r.a)(e);var e,t}(),currentTodoId:d})})]}),Object(i.jsx)("div",{className:"App__content",children:Object(i.jsx)("div",{className:"App__content-container",children:c?Object(i.jsx)(m,{userId:c,clear:function(){n(0),j(0)}}):"No user selected"})})]})};s.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1a05a5ee.chunk.js.map