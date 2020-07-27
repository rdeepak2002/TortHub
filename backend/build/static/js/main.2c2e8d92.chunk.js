(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{57:function(e,t,a){e.exports=a(88)},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(24),r=a.n(i),c=a(20),o=a(13),s=a(14),u=a(17),m=a(16),d=a(6),h=a(49),g=a(97),v=a(96),f=a(35),b=a(18),E=a(90),p=a(91),L=a(92),O=a(93),y=a(94),j=a(95),k=a(25),N=a.n(k),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={temperature:void 0,humidity:void 0,imageLoaded:!1,tempHumidLoaded:!1,svgLoaded:!1,lightLoading:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(b.a)(n)),n.turnOffLight=n.turnOffLight.bind(Object(b.a)(n)),n.turnOnLight=n.turnOnLight.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.timeoutfunction=setTimeout(function(){this.setState({svgLoaded:!0})}.bind(this),2450)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeoutfunction)}},{key:"render",value:function(){var e,t=this.state.imageLoaded&&this.state.svgLoaded;return l.a.createElement(E.a,null,l.a.createElement(p.a,{className:t?"hidden":"visible"},l.a.createElement(L.a,{className:"d-flex justify-content-center"},l.a.createElement(O.a,{animation:"border",size:"lg"}))),l.a.createElement(p.a,{className:t?"visible":"hidden"},l.a.createElement(L.a,null,l.a.createElement(p.a,null,l.a.createElement(y.a,(e={className:"video_feed",rounded:!0,fluid:!0,alt:"stream",src:"/video_feed"},Object(f.a)(e,"className","video_feed"),Object(f.a)(e,"onLoad",this.handleImageLoaded.bind(this)),e))),l.a.createElement(p.a,null,l.a.createElement(L.a,{className:"d-flex justify-content-center"},l.a.createElement(j.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOnLight,variant:"dark"},"ON LAMP")),l.a.createElement(L.a,{className:"d-flex justify-content-center"},l.a.createElement(j.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOffLight,variant:"dark"},"OFF LAMP"))))))}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}},{key:"turnOffLight",value:function(){var e=this;this.setState({lightLoading:!0}),N.a.get("/turnoff_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}},{key:"turnOnLight",value:function(){var e=this;this.setState({lightLoading:!0}),N.a.get("/turnon_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}}]),a}(n.Component),C=a(98),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={temperature:void 0,humidity:void 0,tempHumidLoaded:!1},n.getStats=n.getStats.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getStats()}},{key:"render",value:function(){var e=this.state.tempHumidLoaded;return l.a.createElement(E.a,null,l.a.createElement(p.a,{className:e?"hidden":"visible"},l.a.createElement(L.a,{className:"d-flex justify-content-center"},l.a.createElement(O.a,{animation:"border",size:"lg"}))),l.a.createElement(p.a,{className:e?"visible":"hidden"},l.a.createElement(L.a,null,this.state.temperature&&this.state.humidity?l.a.createElement(p.a,null,l.a.createElement(L.a,null,l.a.createElement(p.a,null,l.a.createElement("p",null,"Temperature: ",Math.round(this.state.temperature),"\xb0F")),l.a.createElement(p.a,null,l.a.createElement("p",null,"Humidity: ",Math.round(this.state.humidity),"%")))):l.a.createElement(p.a,null,l.a.createElement(L.a,null,l.a.createElement(C.a,{variant:"danger"},"Error: Unable to get temperature and humidity sensor data from the server!"))))))}},{key:"getStats",value:function(){var e=this;N.a.get("/sensor_stats").then((function(t){t.data.temperature&&t.data.humidity?e.setState({temperature:1.8*t.data.temperature+32,humidity:t.data.humidity,tempHumidLoaded:!0}):e.setState({tempHumidLoaded:!0})}),(function(t){e.setState({tempHumidLoaded:!0}),console.log(t)}))}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(L.a,null,l.a.createElement("h2",null,"Author"),l.a.createElement("div",null,"Deepak Ramalingam"))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("title",null,"Tort Hub")),l.a.createElement(c.a,null,l.a.createElement(g.a,{sticky:"top",bg:"light",expand:"lg"},l.a.createElement(g.a.Brand,{href:"/stream"},"TortHub"),l.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(c.b,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"),l.a.createElement(c.b,{to:"/stats",className:"nav-link",activeClassName:"active"},"Stats"),l.a.createElement(c.b,{to:"/about",className:"nav-link",activeClassName:"active"},"About")))),l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/stream"},l.a.createElement(S,null)),l.a.createElement(d.b,{exact:!0,path:"/stats"},l.a.createElement(x,null)),l.a.createElement(d.b,{exact:!0,path:"/about"},l.a.createElement(H,null)),l.a.createElement(d.b,{path:"*"},l.a.createElement(d.a,{to:"/stream"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);r.a.render(l.a.createElement(c.a,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2c2e8d92.chunk.js.map