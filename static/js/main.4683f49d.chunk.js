(this.webpackJsonppomodorox=this.webpackJsonppomodorox||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(11),o=n.n(i),c=(n(37),n(17)),r=n(18),l=n(22),d=n(20),b=(n(38),n(39),n(52)),j=n(1);var u=function(){return Object(j.jsx)(b.a,{bg:"dark",variant:"dark",children:Object(j.jsx)(b.a.Brand,{href:"#home",children:"PomodoroX"})})},h=n(31);var O=function(e){var t=e.setDebugMode;return Object(j.jsxs)(b.a,{bg:"dark",variant:"dark",fixed:"bottom",children:["PomidoroX \xa9 2021",Object(j.jsx)(h.a,{variant:"link",onClick:function(){return t(!0)},size:"sm",children:"."})]})},m=n(10),g=n(29),f=n(49),x=n(50),p=n(51),v=n(54),S=n(55),k=n(9),y=n(30),N=n(53),w=n(28),T=n(48),R=n(7),E=function(e){var t=e.index,n=e.label,a=e.deleteHook,i=e.upHook,o=e.downHook,c=e.minusPointHook,r=e.plusPointHook,l=["todo","working","done"],d=Object(s.useState)(0),b=Object(y.a)(d,2),u=b[0],O=b[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("style",{type:"text/css",children:"\n            .card-body {\n              padding: 0.1rem 0.1rem;\n             }\n            "}),Object(j.jsx)(N.a,{className:"m-2",children:Object(j.jsxs)(N.a.Body,{children:[Object(j.jsxs)("div",{className:"float-left",children:[Object(j.jsx)(h.a,{type:"checkbox",onClick:function(){O((u+1)%l.length)},variant:["secondary","primary","success"][u],size:"sm",children:l[u]})," ",Object(j.jsxs)(w.a,{children:[Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return r(t)},size:"sm",children:Object(j.jsx)(R.f,{})}),Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return c(t)},size:"sm",children:Object(j.jsx)(R.c,{})})]})," ",Object(j.jsx)(T.a,{pill:!0,variant:"secondary",children:n.points})," ",Object(j.jsx)("strong",{children:n.label})]}),Object(j.jsxs)("div",{className:"float-right",children:[Object(j.jsxs)(w.a,{children:[Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return i(t)},size:"sm",children:Object(j.jsx)(R.b,{})}),Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return o(t)},size:"sm",children:Object(j.jsx)(R.a,{})})]})," ",Object(j.jsx)(h.a,{variant:"danger",onClick:function(){return a(t)},size:"sm",children:Object(j.jsx)(R.h,{})})]})]})})]})};var C=function(){return Object(j.jsx)(N.a,{className:"m-2",children:Object(j.jsx)(N.a.Body,{children:"Choose period."})})},M=n(24),A=function(e){var t=e.timerSeconds,n=e.showNotifications,a=e.reminderSeconds,i=void 0===a?300:a,o=e.debug,c=void 0!==o&&o,r="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",l=function(e){var t=new Date;return t.setSeconds(t.getSeconds()+e),t},d=Object(M.useTimer)({expiryTimestamp:l(t),onExpire:function(){return k(v,"https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",!1)}}),b=d.seconds,u=d.minutes,O=d.start,m=d.pause,g=d.restart,p=d.isRunning,v=Object(M.useTimer)({expiryTimestamp:l(i),onExpire:function(){return k(S,r,!0)},autoStart:!1}),S=Object(M.useTimer)({expiryTimestamp:l(i),onExpire:function(){return k(v,r,!0)},autoStart:!1}),k=function(e,t,s){e.restart(l(i)),new Audio(t).play(),n(s)},y=function(e){return e>=10?e:"0"+e},w=c?Object(j.jsx)(f.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsxs)("h1",{children:[y(v.minutes),":",y(v.seconds)]}),Object(j.jsxs)("h1",{children:[y(S.minutes),":",y(S.seconds)]})]})}):null,E=v.isRunning||S.isRunning||p?null:Object(j.jsx)("h1",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("style",{type:"text/css",children:"\n                    .blinking {\n                        animation: 2.0s linear infinite blinking;\n                    }\n                    \n                    @keyframes blinking {\n                        0% {opacity: 0;}\n                        50% {opacity: 1;}\n                        100% {opacity: 0;}\n                    }\n                    "}),Object(j.jsx)(T.a,{variant:"danger",className:"blinking",children:"Timer Stopped!"})]})});return Object(j.jsx)(s.Fragment,{children:Object(j.jsx)(N.a,{className:"m-2",children:Object(j.jsxs)(N.a.Body,{children:[Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)("code",{children:Object(j.jsxs)("h1",{children:[y(u),":",y(b)]})})})}),Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:E})}),Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:w})}),Object(j.jsx)(f.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(h.a,{onClick:O,children:Object(j.jsx)(R.e,{})}),Object(j.jsx)(h.a,{onClick:m,children:Object(j.jsx)(R.d,{})}),Object(j.jsx)(h.a,{variant:"success",onClick:function(){m(),v.pause(),S.pause()},children:Object(j.jsx)(R.d,{})}),Object(j.jsx)(h.a,{onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+300),g(e)},children:Object(j.jsx)(R.g,{})})]})})]})})})};var L=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(A,{timerSeconds:600,showNotifications:t,reminderSeconds:300,debug:n})};var B=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(A,{timerSeconds:1500,showNotifications:t,reminderSeconds:300,debug:n})};var _=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(A,{timerSeconds:300,showNotifications:t,reminderSeconds:120,debug:n})};var H=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(A,{timerSeconds:10,showNotifications:t,reminderSeconds:10,debug:n})},J=function(e){var t,n=e.show,s=e.showNotifications,a=e.debugMode;return(t=n)===k.LONG_BREAK?Object(j.jsx)(L,{showNotifications:s,debugMode:a}):t===k.SHORT_BREAK?Object(j.jsx)(_,{showNotifications:s,debugMode:a}):t===k.REGULAR?Object(j.jsx)(B,{showNotifications:s,debugMode:a}):t===k.TEST_BREAK?Object(j.jsx)(H,{showNotifications:s,debugMode:a}):Object(j.jsx)(C,{showNotifications:s})},K=n(12),D=n.n(K),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={labels:[],mode:[],numTask:1,label:"",notificationsState:{title:"Yep!",body:"Time is up!"}},e.handleChange=function(t){e.setState({labels:t}),localStorage.setItem("state",JSON.stringify(e.state))},e.messageLabels={timeUp:{title:"Yep!",body:"Time is up!"},reminder:{title:"Reminder!!!",body:"You should run the timer!!!!"}},e.updateLabels=function(t,n){return e.setState({notificationsState:{title:t,body:n}})},e.handleChangeMode=function(t){e.setState({mode:t}),localStorage.setItem("state",JSON.stringify(e.state))},e.handleChangeLabel=function(t){e.setState({label:t})},e.addTask=function(t){null!=t&&(e.setState({labels:e.state.labels.concat([{label:t,points:0}])}),localStorage.setItem("state",JSON.stringify(e.state)))},e.showNotifications=function(t){t?e.setupRemider():e.setupTimesUp(),D.a.n.supported()&&D.a.n.show()},e.setupRemider=function(){return e.updateLabels(e.messageLabels.reminder.title,e.messageLabels.reminder.body)},e.setupTimesUp=function(){return e.updateLabels(e.messageLabels.timeUp.title,e.messageLabels.timeUp.body)},e.handleNotificationClick=function(e){D.a.n.close(e.target.tag)},e.removeTask=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(m.a)(e.state.labels);n.splice(t,1),e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.removeTask=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(m.a)(e.state.labels);n.splice(t,1),e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.moveUpTask=function(t){if(e.state.labels.length>1&&t>0&&e.state.labels.length>t){var n=Object(m.a)(e.state.labels),s=n[t];n[t]=n[t-1],n[t-1]=s,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.moveDownTask=function(t){if(console.log("moveDownTask "+t),e.state.labels.length>1&&t>=0&&e.state.labels.length>t+1){console.log("moveDownTask inn "+t);var n=Object(m.a)(e.state.labels),s=n[t];n[t]=n[t+1],n[t+1]=s,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.plusPoints=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(m.a)(e.state.labels);n[t].points=n[t].points+1,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.minusPoints=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(m.a)(e.state.labels);n[t].points>0&&(n[t].points=n[t].points-1,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state)))}},e.debugElement=function(t){if(e.props.debugMode)return Object(j.jsx)(g.a,{value:k.TEST_BREAK,children:"Test break"})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("state");null!=e&&this.setState(JSON.parse(e))}},{key:"render",value:function(){var e=this,t=0,n=this.state.labels.map((function(n){return Object(j.jsx)(E,{index:t++,label:n,deleteHook:e.removeTask,plusPointHook:e.plusPoints,minusPointHook:e.minusPoints,upHook:e.moveUpTask,downHook:e.moveDownTask})}));return Object(j.jsxs)("div",{className:"m-2",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:n})}),Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(p.a,{className:"mb-3",children:[Object(j.jsx)(v.a,{value:this.state.label,"aria-label":this.state.label,"aria-describedby":"basic-addon2",onChange:function(t){return e.handleChangeLabel(t.target.value)}}),Object(j.jsx)(p.a.Append,{children:Object(j.jsx)(h.a,{onClick:function(){return e.addTask(e.state.label)},children:"+"})})]})})}),Object(j.jsx)(f.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(S.a,{className:"flex-wrap",type:"radio",name:"options",value:this.state.mode,onChange:this.handleChangeMode,children:[Object(j.jsx)(g.a,{value:k.REGULAR,children:"Regular"}),Object(j.jsx)(g.a,{value:k.SHORT_BREAK,children:"Short break"}),Object(j.jsx)(g.a,{value:k.LONG_BREAK,children:"Long break"}),this.debugElement(this.props.debugMode)]})})}),Object(j.jsx)(f.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(J,{show:this.state.mode,showNotifications:function(t){return e.showNotifications(t)},debugMode:this.props.debugMode}),Object(j.jsx)(D.a,{onRef:function(e){return D.a.n=e},title:this.state.notificationsState.title,body:this.state.notificationsState.body,icon:"icon.png",timeout:"5000",onClick:function(t){return e.handleNotificationClick(t)}})]})})]})}}]),n}(a.a.Component),P=I,U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={debugMode:!1},e.setDebugMode=function(t){e.setState({debugMode:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{name:"PomodoroX"}),Object(j.jsx)(P,{debugMode:this.state.debugMode}),Object(j.jsx)(O,{setDebugMode:this.setDebugMode})]})}}]),n}(a.a.Component),G=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t){e.exports={REGULAR:"REGULAR",SHORT_BREAK:"SHORT_BREAK",LONG_BREAK:"LONG_BREAK",TEST_BREAK:"TEST_BREAK",NONE:"NONE"}}},[[46,1,2]]]);
//# sourceMappingURL=main.4683f49d.chunk.js.map