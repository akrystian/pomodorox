(this.webpackJsonppomodorox=this.webpackJsonppomodorox||[]).push([[0],{22:function(e,n,a){e.exports=a(35)},27:function(e,n,a){},29:function(e,n,a){},35:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(9),c=a.n(o),l=(a(27),a(28),a(29),a(40));var i=function(){return r.a.createElement(l.a,{bg:"dark",variant:"dark"},r.a.createElement(l.a.Brand,{href:"#home"},"PomodoroX"))};var u=function(){return r.a.createElement(l.a,{bg:"dark",variant:"dark",sticky:"bottom"},"PomidoroX \xa9 2021")},m=a(8),s=a(38),d=a(39),E=a(43),f=a(19),v=a(7),h=a(37),b=a(42),p=a(20);var O=function(){var e=["todo","working","done"],n=Object(t.useState)(0),a=Object(m.a)(n,2),o=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(h.a,{className:"mb-3"},r.a.createElement(b.a,{placeholder:"Task","aria-label":"Task","aria-describedby":"basic-addon2"}),r.a.createElement(h.a.Append,null,r.a.createElement(p.a,{type:"checkbox",onClick:function(){c((o+1)%e.length)},variant:["secondary","primary","success"][o]},e[o]))))},R=a(41);var g=function(){return r.a.createElement(R.a,{className:"m-2"},r.a.createElement(R.a.Body,null,"Choose period."))},w=a(13),k=function(e){var n=e.minutes,a=e.seconds;return r.a.createElement(R.a,{className:"m-2"},r.a.createElement(R.a.Body,null,r.a.createElement("code",null,r.a.createElement("h1",null,n,":",a))))},A=function(e){var n=e.period,a=function(e,n){var a;if(void 0===n||!1===n.finished){var t=e-new Date;a=t>0?Object(w.a)(Object(w.a)({},n),{},{remaining:{minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)},finished:!1}):Object(w.a)(Object(w.a)({},n),{},{remaining:{minutes:0,seconds:0},finished:!0})}else a=n,new Audio("./countdown-sound.mp3");return a},o=function(e){return e>=10?e:"0"+e},c=Object(t.useState)(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Date((new Date).getTime()+6e4*e+1e3*n)}(n.minutes,n.seconds)),l=Object(m.a)(c,1)[0],i=Object(t.useState)(a(l,{finished:!1})),u=Object(m.a)(i,2),s=u[0],d=u[1];return Object(t.useEffect)((function(){setTimeout((function(){d(a(l,s)),document.title=o(s.remaining.minutes)+" : "+o(s.remaining.seconds)}),1e3)})),r.a.createElement(k,{minutes:o(s.remaining.minutes),seconds:o(s.remaining.seconds)})},N=A;var j=function(){return r.a.createElement(N,{period:{minutes:10,seconds:0}})};var B=function(){return r.a.createElement(A,{period:{minutes:25,seconds:0}})};var y=function(){return r.a.createElement(A,{period:{minutes:0,seconds:2}})},S=function(e){var n,a=e.show;return(n=a)===v.LONG_BREAK?r.a.createElement(j,null):n===v.SHORT_BREAK?r.a.createElement(y,null):n===v.REGULAR?r.a.createElement(B,null):r.a.createElement(g,null)};var L=function(){var e=Object(t.useState)([]),n=Object(m.a)(e,2),a=n[0],o=n[1];return r.a.createElement("div",{className:"m-2"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(O,null))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"flex-wrap",type:"radio",name:"options",value:a,onChange:function(e){return o(e)}},r.a.createElement(f.a,{value:v.REGULAR},"Regular"),r.a.createElement(f.a,{value:v.SHORT_BREAK},"Short break"),r.a.createElement(f.a,{value:v.LONG_BREAK},"Long break")))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(S,{show:a}))))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,{name:"PomodoroX"}),r.a.createElement(L,null),r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n){e.exports={REGULAR:"REGULAR",SHORT_BREAK:"SHORT_BREAK",LONG_BREAK:"LONG_BREAK",NONE:"NONE"}}},[[22,1,2]]]);
//# sourceMappingURL=main.0de0d04f.chunk.js.map