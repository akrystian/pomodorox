(this.webpackJsonppomodorox=this.webpackJsonppomodorox||[]).push([[0],{31:function(e,n,t){},33:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(9),r=t.n(s),i=(t(31),t(32),t(33),t(45)),o=t(1);var j=function(){return Object(o.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(o.jsx)(i.a.Brand,{href:"#home",children:"PomodoroX"})})};var d=function(){return Object(o.jsx)(i.a,{bg:"dark",variant:"dark",sticky:"bottom",children:"PomidoroX \xa9 2021"})},u=t(20),l=t(21),b=t(24),h=t(23),O=t(43),m=t(44),x=t(25),v=t(48),f=t(22),p=t(8),g=t(13),k=t(42),R=t(47);var E=function(){var e=["todo","working","done"],n=Object(c.useState)(0),t=Object(g.a)(n,2),a=t[0],s=t[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(k.a,{className:"mb-3",children:[Object(o.jsx)(R.a,{placeholder:"Task","aria-label":"Task","aria-describedby":"basic-addon2"}),Object(o.jsx)(k.a.Append,{children:Object(o.jsx)(x.a,{type:"checkbox",onClick:function(){s((a+1)%e.length)},variant:["secondary","primary","success"][a],children:e[a]})})]})})},T=t(46);var A=function(){return Object(o.jsx)(T.a,{className:"m-2",children:Object(o.jsx)(T.a.Body,{children:"Choose period."})})},w=t(14),B=function(e){var n=e.minutes,t=e.seconds;return Object(o.jsx)(T.a,{className:"m-2",children:Object(o.jsx)(T.a.Body,{children:Object(o.jsx)("code",{children:Object(o.jsxs)("h1",{children:[n,":",t]})})})})},y=function(e){var n=e.period,t=function(e,n){var t;if(void 0===n||!1===n.finished){var c=e-new Date;t=c>0?Object(w.a)(Object(w.a)({},n),{},{remaining:{minutes:Math.floor(c/1e3/60%60),seconds:Math.floor(c/1e3%60)},finished:!1}):Object(w.a)(Object(w.a)({},n),{},{remaining:{minutes:0,seconds:0},finished:!0})}else{t=n,new Audio("https://actions.google.com/sounds/v1/household/clock_ticking.ogg").play()}return t},a=function(e){return e>=10?e:"0"+e},s=Object(c.useState)(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Date((new Date).getTime()+6e4*e+1e3*n)}(n.minutes,n.seconds)),r=Object(g.a)(s,1)[0],i=Object(c.useState)(t(r,{finished:!1})),j=Object(g.a)(i,2),d=j[0],u=j[1];return Object(c.useEffect)((function(){setTimeout((function(){u(t(r,d)),document.title=a(d.remaining.minutes)+" : "+a(d.remaining.seconds)}),1e3)})),Object(o.jsx)(B,{minutes:a(d.remaining.minutes),seconds:a(d.remaining.seconds)})},N=y;var S=function(){return Object(o.jsx)(N,{period:{minutes:10,seconds:0}})};var _=function(){return Object(o.jsx)(y,{period:{minutes:25,seconds:0}})};var K=function(){return Object(o.jsx)(y,{period:{minutes:5,seconds:0}})};var L=function(){return Object(o.jsx)(N,{period:{minutes:0,seconds:5}})},G=function(e){var n,t=e.show;return(n=t)===p.LONG_BREAK?Object(o.jsx)(S,{}):n===p.SHORT_BREAK?Object(o.jsx)(K,{}):n===p.REGULAR?Object(o.jsx)(_,{}):n===p.TEST_BREAK?Object(o.jsx)(L,{}):Object(o.jsx)(A,{})},C=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).state={value:[],numTask:1},e.handleChange=function(n){return e.setState({value:n})},e.addTask=function(){return e.setState({numTask:e.state.numTask+1})},e}return Object(l.a)(t,[{key:"render",value:function(){for(var e=this,n=[],t=0;t<this.state.numTask;t++)n.push(Object(o.jsx)(E,{}));return Object(o.jsxs)("div",{className:"m-2",children:[Object(o.jsx)(O.a,{children:Object(o.jsx)(m.a,{children:n})}),Object(o.jsx)(O.a,{children:Object(o.jsx)(m.a,{children:Object(o.jsx)(x.a,{className:"float-right",variant:"secondary",onClick:function(){return e.addTask()},children:"+"})})}),Object(o.jsx)(O.a,{children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(v.a,{className:"flex-wrap",type:"radio",name:"options",value:this.state.value,onChange:this.handleChange,children:[Object(o.jsx)(f.a,{value:p.REGULAR,children:"Regular"}),Object(o.jsx)(f.a,{value:p.SHORT_BREAK,children:"Short break"}),Object(o.jsx)(f.a,{value:p.LONG_BREAK,children:"Long break"}),Object(o.jsx)(f.a,{value:p.TEST_BREAK,children:"Test break"})]})})}),Object(o.jsx)(O.a,{children:Object(o.jsx)(m.a,{children:Object(o.jsx)(G,{show:this.state.value})})})]})}}]),t}(a.a.Component),H=C;var U=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{name:"PomodoroX"}),Object(o.jsx)(H,{}),Object(o.jsx)(d,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n){e.exports={REGULAR:"REGULAR",SHORT_BREAK:"SHORT_BREAK",LONG_BREAK:"LONG_BREAK",TEST_BREAK:"TEST_BREAK",NONE:"NONE"}}},[[40,1,2]]]);
//# sourceMappingURL=main.35716951.chunk.js.map