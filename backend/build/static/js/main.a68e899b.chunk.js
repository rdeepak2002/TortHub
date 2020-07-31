(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{215:function(e,t,a){e.exports=a(422)},420:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(30),i=a.n(r),c=a(34),o=a(18),m=a(19),s=a(21),u=a(20),d=a(10),h=a(171),g=a(432),E=a(425),f=a(431),b=a(107),v=a(25),p=a(426),y=a(427),O=a(428),L=a(429),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={imageLoaded:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this.state.imageLoaded;return l.a.createElement(E.a,null,l.a.createElement(p.a,{className:t?"hidden":"visible"},l.a.createElement(y.a,{className:"d-flex justify-content-center"},l.a.createElement(O.a,{animation:"border",size:"lg"}))),l.a.createElement(p.a,{className:t?"visible":"hidden"},l.a.createElement(y.a,null,l.a.createElement(p.a,null,l.a.createElement(L.a,(e={className:"video_feed",rounded:!0,fluid:!0,alt:"stream",src:"/video_feed"},Object(b.a)(e,"className","video_feed"),Object(b.a)(e,"onLoad",this.handleImageLoaded.bind(this)),e))))))}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}}]),a}(n.Component),k=a(430),N=a(50),D=a.n(N),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={lightLoading:!1},n.turnOffLight=n.turnOffLight.bind(Object(v.a)(n)),n.turnOnLight=n.turnOnLight.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(p.a,null,l.a.createElement(y.a,{className:"d-flex justify-content-center"},l.a.createElement("h2",{className:"device-title"},"Heat Lamps"))),l.a.createElement(p.a,null,l.a.createElement(y.a,{className:"d-flex justify-content-end"},l.a.createElement(k.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOnLight,variant:"dark"},"ON LAMP")),l.a.createElement(y.a,{className:"d-flex justify-content-start"},l.a.createElement(k.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOffLight,variant:"dark"},"OFF LAMP"))))))}},{key:"turnOffLight",value:function(){var e=this;this.setState({lightLoading:!0}),D.a.get("/turnoff_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}},{key:"turnOnLight",value:function(){var e=this;this.setState({lightLoading:!0}),D.a.get("/turnon_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}}]),a}(n.Component),S=a(433),w=a(16),C=a(110),x=a.n(C),_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tempData:void 0,humidData:void 0,errorLoading:!1},n.getTemperature=n.getTemperature.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getTemperature(),this.getHumidity()}},{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"hidden":"visible"},l.a.createElement(y.a,{className:"d-flex justify-content-center"},l.a.createElement(O.a,{animation:"border",size:"lg"}))),l.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"visible":"hidden"},l.a.createElement(y.a,null,!this.state.errorLoading&&this.state.tempData&&this.state.humidData?l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement("h2",{className:"graph-title"},"Temperature vs. Time"),l.a.createElement(w.a,{width:"100%",height:500},l.a.createElement(w.c,null,l.a.createElement(w.d,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(new Date(e)).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),l.a.createElement(w.e,{dataKey:"temperature",name:"Value"}),l.a.createElement(w.b,{data:this.state.tempData,line:{stroke:"#eee"},lineJointType:"monotoneX",lineType:"joint",name:"Values"}))),l.a.createElement("h2",{className:"graph-title"},"Humidity vs. Time"),l.a.createElement(w.a,{width:"100%",height:500},l.a.createElement(w.c,null,l.a.createElement(w.d,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(new Date(e)).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),l.a.createElement(w.e,{dataKey:"humidity",name:"Value"}),l.a.createElement(w.b,{data:this.state.humidData,line:{stroke:"#eee"},lineJointType:"monotoneX",lineType:"joint",name:"Values"}))))):l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{variant:"danger"},"Error: Unable to get temperature and humidity sensor data from the server!"))))))}},{key:"getTemperature",value:function(){var e=this;D.a.get("/get_temperature").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;a.map((function(e){return delete e._id,e.time=e.time.$date,console.log(e.time),e})),e.setState({tempData:a}),console.log(e.state.tempData)}else e.setState({errorLoading:!0}),console.log("Error getting temperature")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}},{key:"getHumidity",value:function(){var e=this;D.a.get("/get_humidity").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;a.map((function(e){return delete e._id,e.time=e.time.$date,e})),e.setState({humidData:a}),console.log(e.state.humidData)}else e.setState({errorLoading:!0}),console.log("Error getting humidity")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement("h2",{className:"about-header"},"Author"),l.a.createElement("div",null,"Deepak Ramalingam"))))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("title",null,"Tort Hub")),l.a.createElement(c.a,null,l.a.createElement(g.a,{sticky:"top",bg:"light",expand:"lg"},l.a.createElement(E.a,null,l.a.createElement(g.a.Brand,{href:"/stream"},"TortHub"),l.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(c.b,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"),l.a.createElement(c.b,{to:"/lights",className:"nav-link",activeClassName:"active"},"Lights"),l.a.createElement(c.b,{to:"/stats",className:"nav-link",activeClassName:"active"},"Stats"),l.a.createElement(c.b,{to:"/about",className:"nav-link",activeClassName:"active"},"About"))))),l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/stream"},l.a.createElement(j,null)),l.a.createElement(d.b,{exact:!0,path:"/lights"},l.a.createElement(T,null)),l.a.createElement(d.b,{exact:!0,path:"/stats"},l.a.createElement(_,null)),l.a.createElement(d.b,{exact:!0,path:"/about"},l.a.createElement(Y,null)),l.a.createElement(d.b,{path:"*"},l.a.createElement(d.a,{to:"/stream"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(420),a(421);i.a.render(l.a.createElement(c.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[215,1,2]]]);
//# sourceMappingURL=main.a68e899b.chunk.js.map