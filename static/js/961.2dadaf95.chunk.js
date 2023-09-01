"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{854:function(n,e,t){var r=t(430),i=t(184);e.Z=function(){return(0,i.jsx)(r.Z1,{height:"100",width:"100",color:"red",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating"})}},961:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,s,c,a=t(439),u=t(791),h=t(689),l=t(87),p=t(168),d=t(867),f=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px;\n"]))),x=d.ZP.div(i||(i=(0,p.Z)(["\n  max-width: 200px;\n  margin-right: 20px;\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"]))),g=d.ZP.div(o||(o=(0,p.Z)(["\n  flex: 1;\n\n  h1 {\n    font-size: 24px;\n    margin-bottom: 10px;\n  }\n\n  h2 {\n    font-size: 18px;\n    margin-top: 20px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  span {\n    margin-right: 10px;\n    font-size: 14px;\n    background-color: #eee;\n    padding: 5px 10px;\n    border-radius: 5px;\n  }\n"]))),m=d.ZP.div(s||(s=(0,p.Z)(["\n  margin-top: 20px;\n  h3 {\n    font-size: 20px;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0;\n    margin-top: 10px;\n  }\n\n  li {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n\n  a {\n    color: #0077cc;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),v=t(184),j=function(n){var e=n.title,t=n.overview,r=n.poster_path,i=n.genres,o=n.castLink,s=n.reviewsLink;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(f,{children:[(0,v.jsx)(x,{children:(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"https://via.placeholder.com/200x300",alt:"movie poster"})}),(0,v.jsxs)(g,{children:[(0,v.jsx)("h1",{children:e}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:t}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:i?i.map((function(n){return(0,v.jsx)("span",{children:n.name},n.id)})):""})]})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:o,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:s,children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(h.j3,{})})]})]})},w=t(590),k=t(128),b=(0,d.ZP)(l.rU)(c||(c=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),y=function(n){var e=n.to,t=n.children;return(0,v.jsxs)(b,{to:e,children:[(0,v.jsx)(k.jTe,{size:"24"}),t]})},Z=t(854),_=function(){var n,e,t=(0,h.UO)().movieId,r=(0,u.useState)({}),i=(0,a.Z)(r,2),o=i[0],s=i[1],c=(0,u.useState)(!1),l=(0,a.Z)(c,2),p=l[0],d=l[1],f=(0,u.useState)(null),x=(0,a.Z)(f,2),g=x[0],m=x[1],k=(0,h.TH)(),b=(0,u.useRef)(null!==(n=null===(e=k.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,u.useEffect)((function(){d(!0),(0,w.TP)(t).then((function(n){if(!n.id)throw new Error("Oops, something went wrong while processing your request from movie details. Please try again later.");s(n)})).catch((function(n){return m(n)})).finally((function(){return d(!1)}))}),[t]);var _=o.title,P=o.genres,O=o.overview,z=o.poster_path;return(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)("h2",{children:g.message}),p&&(0,v.jsx)(Z.Z,{}),(0,v.jsx)(y,{to:b.current,children:"Go Back"}),(0,v.jsx)(j,{title:_,overview:O,poster_path:z,genres:P,castLink:"cast",reviewsLink:"reviews"})]})}},590:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return a},Ph:function(){return c},TP:function(){return s},tx:function(){return u}});var r="https://api.themoviedb.org/3",i="e8e18ab747b38797cae45f67fe29be94",o=function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(i)).then((function(n){return 200!==n.status?Promise.reject(new Error("Oops, something went wrong...")):n.json()}))},s=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(i)).then((function(n){return 200!==n.status?Promise.reject(new Error("Oops, something went wrong...")):n.json()}))},c=function(n){return fetch("".concat(r,"/search/movie?query=").concat(n,"&api_key=").concat(i)).then((function(n){return 200!==n.status?Promise.reject(new Error("Oops, something went wrong...")):n.json()}))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(i)).then((function(n){return 200!==n.status?Promise.reject(new Error("Oops, something went wrong...")):n.json()}))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(i)).then((function(n){return 200!==n.status?Promise.reject(new Error("Oops, something went wrong...")):n.json()}))}}}]);
//# sourceMappingURL=961.2dadaf95.chunk.js.map