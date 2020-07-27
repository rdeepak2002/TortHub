(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{57:function(e,t,a){e.exports=a(88)},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),r=a.n(l),o=a(24),c=a(16),s=a(17),m=a(21),d=a(19),u=a(6),h=a(49),g=a(97),f=a(96),v=a(34),E=a(14),b=a(90),p=a(91),L=a(92),O=a(93),y=a(94),j=a(95),k=a(25),N=a.n(k),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={temperature:void 0,humidity:void 0,imageLoaded:!1,tempHumidLoaded:!1,svgLoaded:!1,lightLoading:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(E.a)(n)),n.turnOffLight=n.turnOffLight.bind(Object(E.a)(n)),n.turnOnLight=n.turnOnLight.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.timeoutfunction=setTimeout(function(){this.setState({svgLoaded:!0})}.bind(this),2450)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeoutfunction)}},{key:"render",value:function(){var e,t=this.state.imageLoaded&&this.state.svgLoaded;return i.a.createElement(b.a,null,i.a.createElement(p.a,{className:t?"hidden":"visible"},i.a.createElement(L.a,{className:"d-flex justify-content-center"},i.a.createElement(O.a,{animation:"border",size:"lg"}))),i.a.createElement(p.a,{className:t?"visible":"hidden"},i.a.createElement(L.a,null,i.a.createElement(p.a,null,i.a.createElement(y.a,(e={className:"video_feed",rounded:!0,fluid:!0,alt:"stream",src:"/video_feed"},Object(v.a)(e,"className","video_feed"),Object(v.a)(e,"onLoad",this.handleImageLoaded.bind(this)),e))),i.a.createElement(p.a,null,i.a.createElement(L.a,{className:"d-flex justify-content-center"},i.a.createElement(j.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOnLight,variant:"dark"},"ON")),i.a.createElement(L.a,{className:"d-flex justify-content-center"},i.a.createElement(j.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOffLight,variant:"dark"},"OFF"))))))}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}},{key:"turnOffLight",value:function(){var e=this;this.setState({lightLoading:!0}),N.a.get("/turnoff_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}},{key:"turnOnLight",value:function(){var e=this;this.setState({lightLoading:!0}),N.a.get("/turnon_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}}]),a}(n.Component),H=a(98),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={temperature:void 0,humidity:void 0,tempHumidLoaded:!1},n.getStats=n.getStats.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getStats()}},{key:"render",value:function(){var e=this.state.tempHumidLoaded;return i.a.createElement(b.a,null,i.a.createElement(p.a,{className:e?"hidden":"visible"},i.a.createElement(L.a,{className:"d-flex justify-content-center"},i.a.createElement(O.a,{animation:"border",size:"lg"}))),i.a.createElement(p.a,{className:e?"visible":"hidden"},i.a.createElement(L.a,null,this.state.temperature&&this.state.humidity?i.a.createElement(p.a,null,i.a.createElement(L.a,null,i.a.createElement(p.a,null,i.a.createElement("p",null,"Temperature: ",Math.round(this.state.temperature),"\xb0F")),i.a.createElement(p.a,null,i.a.createElement("p",null,"Humidity: ",Math.round(this.state.humidity),"%")))):i.a.createElement(p.a,null,i.a.createElement(L.a,null,i.a.createElement(H.a,{variant:"danger"},"Error: Unable to get temperature and humidity sensor data from the server!"))))))}},{key:"getStats",value:function(){var e=this;N.a.get("/sensor_stats").then((function(t){t.data.temperature&&t.data.humidity?e.setState({temperature:1.8*t.data.temperature+32,humidity:t.data.humidity,tempHumidLoaded:!0}):e.setState({tempHumidLoaded:!0})}),(function(t){e.setState({tempHumidLoaded:!0}),console.log(t)}))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("title",null,"Tort Hub")),i.a.createElement(o.a,null,i.a.createElement(g.a,{sticky:"top",bg:"light",expand:"lg"},i.a.createElement(g.a.Brand,{href:"/stream"},"TortHub"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:"mr-auto"},i.a.createElement(o.b,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"),i.a.createElement(o.b,{to:"/stats",className:"nav-link",activeClassName:"active"},"Stats")))),i.a.createElement(u.d,null,i.a.createElement(u.b,{exact:!0,path:"/stream"},i.a.createElement(S,null)),i.a.createElement(u.b,{exact:!0,path:"/stats"},i.a.createElement(w,null)),i.a.createElement(u.b,{path:"*"},i.a.createElement(u.a,{to:"/stream"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);r.a.render(i.a.createElement(o.a,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.a3113b79.chunk.js.map