(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{1593:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return v}});var a=s(5893),r=s(1163),i=s(7294),t=s(9360),l=s(7782).Zlib,c=s(4103).Zlib,o=s(6206),u=s(8764).lW;function d(e){var n=(new TextEncoder).encode(e);return new c.RawDeflate(n).compress()}function f(e){var n=u.from((0,t.Jx)(e),"base64"),s=new l.RawInflate(n).decompress();return o(s)}var h=s(9479),m=s(2240);function v(){var e=(0,r.useRouter)(),n=(0,i.useState)(""),s=n[0],l=n[1],c=(0,i.useState)(""),u=c[0],v=c[1];(0,i.useEffect)((function(){(e.query.a||e.query.b)&&(l(f(e.query.a)),v(f(e.query.b)))}),[e.query]);var x=function(e,n){var s=j(e),a=j(n),r=h.diffChars(s,a),i="";return r.forEach((function(e){i+=e.added?"<ins>"+e.value+"</ins>":e.removed?"<del>"+e.value+"</del>":"<span>"+e.value+"</span>"})),i},j=function(e){for(var n,s=m(),a=e;n=s.exec(e);){var r=n[0];a=a.replace(r,"\u25a1")}return a};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"hero",children:(0,a.jsx)("div",{className:"hero-body",children:(0,a.jsx)("div",{className:"container has-text-centered",children:(0,a.jsx)("h1",{className:"is-size-1 is-family-sans-serif title",children:"Diff checker"})})})})}),(0,a.jsxs)("section",{style:{padding:"1vw",height:"100vw"},children:[(0,a.jsxs)("div",{className:"columns",children:[(0,a.jsx)("div",{className:"column",children:(0,a.jsx)("textarea",{value:s,onChange:function(e){return l(e.target.value)},className:"textarea is-medium",placeholder:"e.g. Hello world"})}),(0,a.jsx)("div",{className:"column",children:(0,a.jsx)("textarea",{value:u,onChange:function(e){return v(e.target.value)},className:"textarea is-medium",placeholder:"e.g. How low, world"})})]}),(0,a.jsxs)("div",{className:"buttons",children:[(0,a.jsx)("button",{className:"button is-info is-medium is-outlined",onClick:function(){return l(""),v(""),history.replaceState("","","diff")},children:"Reset"}),(0,a.jsx)("button",{className:"button is-link is-medium is-outlined",onClick:function(){return function(e,n){var s=d(e),a=d(n);history.replaceState("","","diff?a="+(0,t.cv)(o(s,"base64"))+"&b="+(0,t.cv)(o(a,"base64"))),navigator.clipboard.writeText(location.href)}(s,u)},children:"Copy this diff's share link"})]}),(0,a.jsxs)("div",{className:"columns mt-4",children:[(0,a.jsx)("div",{className:"column",children:(0,a.jsx)("div",{className:"block ml-3",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:x(s,u)}})})}),(0,a.jsx)("div",{className:"column",children:(0,a.jsx)("div",{className:"block ml-3",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:x(u,s)}})})})]})]}),(0,a.jsx)("style",{children:"\n         span {\n            font-size: 1.5em;   \n         }\n         ins {\n            background-color: hsl(141, 53%, 53%, 55%);\n            font-size: 1.6em;\n            text-decoration: none;\n         }\n         del {\n            background-color: hsl(348, 100%, 61%, 55%);\n            font-size: 1.6em;\n         }\n        "})]})}},4020:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool/diff",function(){return s(1593)}])}},function(e){e.O(0,[779,774,888,179],(function(){return n=4020,e(e.s=n);var n}));var n=e.O();_N_E=n}]);