(this.webpackJsonpreview=this.webpackJsonpreview||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(4),a=n.n(i),o=(n(10),n(3)),u=n.p+"static/media/ar1.fa2176b3.png";function h(e){var t=e.story;e.index,e.selected;return Object(c.jsxs)("div",{className:"story",children:[Object(c.jsx)("img",{src:u})," ",Object(c.jsx)("h3",{children:Object(c.jsxs)("a",{target:"_blank",href:t.url,children:[t.text," "]})}),Object(c.jsxs)("h5",{children:["Author : ",t.author]})]})}function j(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"./ Technormation"}),Object(c.jsx)("h2",{children:"Search for the hottest tech news today !"})]})}n(11);var l=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)("React"),a=Object(o.a)(i,2),u=a[0],l=a[1],d=function(){fetch("https://hn.algolia.com/api/v1/search?query=".concat(u)).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.hits.map((function(e){return{text:e.title,url:e.url,author:e.author}}));s(t),l(e.query)}))};return Object(r.useEffect)((function(){console.log("stories changed!")}),[n]),Object(r.useEffect)((function(){d()}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("div",{className:"Header",children:Object(c.jsx)(j,{})}),Object(c.jsx)("div",{className:"Search",children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),d()},children:Object(c.jsx)("input",{className:"inputText",onChange:function(e){l(e.target.value)},type:"text",placeholder:"Search...",value:u})})}),Object(c.jsx)("div",{className:"story-list",children:n.map((function(e,t,n){return Object(c.jsx)(h,{index:t,story:e,selected:n},t)}))})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.c42fbe12.chunk.js.map