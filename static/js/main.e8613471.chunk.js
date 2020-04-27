(this["webpackJsonpweb-gl"]=this["webpackJsonpweb-gl"]||[]).push([[0],{30:function(e,n,t){e.exports=t(41)},32:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var o,r=t(0),a=t.n(r),i=t(26),c=t(7),l=(t(32),t(2)),s=l.b.div.withConfig({displayName:"styles__Main",componentId:"sc-1l9suh0-0"})(["width:100%;height:100%;"]),u=l.b.div.withConfig({displayName:"styles__MainContainer",componentId:"sc-1l9suh0-1"})(["display:flex;background-color:#f6f9fc;justify-content:center;align-items:center;padding:2rem;"]),d=l.b.div.withConfig({displayName:"styles__Layout",componentId:"sc-5g6523-0"})(["width:100%;height:100%;min-width:1400px;"]),m=l.b.div.withConfig({displayName:"styles__LayoutContainer",componentId:"sc-5g6523-1"})(["width:100%;height:100%;"]),h=l.b.div.withConfig({displayName:"styles__Header",componentId:"sc-1mamxvg-0"})(["width:100%;height:6rem;background-color:#f6f9fc;"]),g=function(){return a.a.createElement(h,null)},f=l.b.footer.withConfig({displayName:"styles__Footer",componentId:"sc-1rnpe30-0"})(["width:100%;height:6rem;background-color:#f6f9fc;"]),p=function(){return a.a.createElement(f,null)},b=function(e){var n=e.children;return a.a.createElement(d,null,a.a.createElement(g,null),a.a.createElement(m,null,n),a.a.createElement(p,null))},w=l.b.div.withConfig({displayName:"styles__Canvas",componentId:"sc-1tz9mdd-0"})(["width:",";height:",";display:flex;justify-content:center;align-items:center;"],(function(e){return"".concat(e.width,"px")}),(function(e){return"".concat(e.height+e.border,"px")})),y=l.b.canvas.withConfig({displayName:"styles__Screen",componentId:"sc-1tz9mdd-1"})(["background-color:white;border-radius:1.5rem 1.5rem;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);"]),v=t(9),C=t(16),x=t(22),E=function e(n,t,o,r){Object(x.a)(this,e),this.color=n,this.size=t,this.mode=o,this.begin=r};!function(e){e.draw="draw",e.move="move"}(o||(o={}));var k=l.b.div.withConfig({displayName:"styles__ColorBar",componentId:"sc-7pgn4r-0"})(["margin:0rem 10rem;"]),_=l.b.div.withConfig({displayName:"styles__ColorBarContainer",componentId:"sc-7pgn4r-1"})(["height:80rem;width:20rem;display:flex;flex-direction:column;overflow:hidden;align-items:center;justify-content:space-between;background-color:",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);border-radius:1.5rem;"],(function(e){return e.backgroundColor?e.backgroundColor:"inherit"})),j=l.b.div.withConfig({displayName:"styles__ColorBarRowContainer",componentId:"sc-7pgn4r-2"})(["width:100%;display:flex;align-items:center;justify-content:space-between;padding:2rem;"]),I=["white","silver","gray","black","Red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchisa","purple"],N=l.b.div.withConfig({displayName:"styles__ColorPicker",componentId:"sc-3tblxh-0"})(["background-color:",";width:6rem;height:6rem;border-radius:50%;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);cursor:pointer;"],(function(e){return e.color})),O=function(e){var n=e.color,t=e.onClick;return a.a.createElement(N,{color:n,onClick:t})},M=function(e){var n=e.changeColor;return a.a.createElement(k,null,a.a.createElement(_,{backgroundColor:"#F9F6F7"},function e(n,t){return n.length?[n.slice(0,t)].concat(e(n.slice(t),t)):[]}(I,2).map((function(e,t){return a.a.createElement(j,{key:t},e.map((function(e,t){return a.a.createElement(O,{color:e,key:t,onClick:function(){return n(e)}})})))}))))},z=l.b.div.withConfig({displayName:"styles__OptionBar",componentId:"sc-73cckw-0"})(["margin:0rem 10rem;"]),B=l.b.div.withConfig({displayName:"styles__OptionBarContainer",componentId:"sc-73cckw-1"})(["height:80rem;width:20rem;display:flex;justify-content:center;background-color:",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);border-radius:1.5rem;"],(function(e){return e.backgroundColor?e.backgroundColor:"inherit"})),F=function(){return a.a.createElement(z,null,a.a.createElement(B,{backgroundColor:"#FFE8D6"}))},S=function(e){var n=e.width,t=e.height,i=e.id,c=function(e){var n=Object(r.useState)(null),t=Object(C.a)(n,2),a=t[0],i=t[1],c=Object(r.useState)(new E("black",1,o.draw,!1)),l=Object(C.a)(c,2),s=l[0],u=l[1];Object(r.useEffect)((function(){i(document.getElementById(e))}),[e]),Object(r.useEffect)((function(){if(a){var e=a.getContext("2d");e.fillStyle=s.color,e.strokeStyle=s.color,e.lineWidth=s.size}}),[s.color,s.mode,s.size]);var d=function(){return"draw"===s.mode&&s.begin};return{canvasContext:s,changeColor:function(e){return u(Object(v.a)({},s,{color:e}))},startPainting:function(){return u(Object(v.a)({},s,{begin:!0}))},stopPainting:function(){return u(Object(v.a)({},s,{begin:!1}))},handleMouseMove:function(e){(e.persist(),a)&&function(e,n,t){var o=e.nativeEvent.offsetX,r=e.nativeEvent.offsetY;t()?(n.lineTo(o,r),n.stroke()):(n.beginPath(),n.moveTo(o,r))}(e,a.getContext("2d"),d)}}}(i),l=c.canvasContext,s=c.changeColor,u=c.startPainting,d=c.stopPainting,m=c.handleMouseMove;return console.log(l),a.a.createElement(w,{width:n,height:t,border:30},a.a.createElement(M,{changeColor:s}),a.a.createElement(y,{id:i,width:n,height:t,onMouseUp:d,onMouseLeave:d,onMouseDown:u,onMouseMove:m}),a.a.createElement(F,null))},P=function(){return a.a.createElement(b,null,a.a.createElement(s,null,a.a.createElement(u,null,a.a.createElement(S,{id:"main",width:800,height:800}))))},L=t(23),W=function(e){var n=e.Component,t=e.title;return function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,null,a.a.createElement("title",null,t||"Simple WebGL Test app")),a.a.createElement(n,null))}},T=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(c.a,{path:"*",component:W({Component:P})})))},D=t(28),J=t.n(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=t(29);function q(){var e=Object(R.a)(["\n  * {\n    font-display:'block';\n    box-sizing : border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    font-size : 10px;\n  }\n  \n  body {\n    user-select : none;\n    background-color: #f6f9fc;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}var G=Object(l.a)(q());J.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null),a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.e8613471.chunk.js.map