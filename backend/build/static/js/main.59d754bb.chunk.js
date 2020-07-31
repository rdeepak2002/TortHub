(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{214:function(e,t,a){e.exports=a(421)},419:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(30),i=a.n(l),c=a(34),o=a(18),m=a(19),s=a(21),u=a(20),d=a(10),h=a(171),g=a(431),E=a(424),f=a(430),b=a(107),v=a(25),p=a(425),y=a(426),L=a(427),O=a(428),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={imageLoaded:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this.state.imageLoaded;return r.a.createElement(E.a,null,r.a.createElement(p.a,{className:t?"hidden":"visible"},r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(L.a,{animation:"border",size:"lg"}))),r.a.createElement(p.a,{className:t?"visible":"hidden"},r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(O.a,(e={className:"video_feed",rounded:!0,fluid:!0,alt:"stream",src:"/video_feed"},Object(b.a)(e,"className","video_feed"),Object(b.a)(e,"onLoad",this.handleImageLoaded.bind(this)),e))))))}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}}]),a}(n.Component),k=a(429),N=a(50),D=a.n(N),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={lightLoading:!1},n.turnOffLight=n.turnOffLight.bind(Object(v.a)(n)),n.turnOnLight=n.turnOnLight.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement("h2",{className:"device-title"},"Heat Lamps"))),r.a.createElement(p.a,null,r.a.createElement(y.a,{className:"d-flex justify-content-end"},r.a.createElement(k.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOnLight,variant:"dark"},"ON LAMP")),r.a.createElement(y.a,{className:"d-flex justify-content-start"},r.a.createElement(k.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOffLight,variant:"dark"},"OFF LAMP"))))))}},{key:"turnOffLight",value:function(){var e=this;this.setState({lightLoading:!0}),D.a.get("/turnoff_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}},{key:"turnOnLight",value:function(){var e=this;this.setState({lightLoading:!0}),D.a.get("/turnon_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}}]),a}(n.Component),S=a(432),w=a(13),C=a(110),x=a.n(C),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tempData:void 0,humidData:void 0,errorLoading:!1},n.getTemperature=n.getTemperature.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getTemperature(),this.getHumidity()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"hidden":"visible"},r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(L.a,{animation:"border",size:"lg"}))),r.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"visible":"hidden"},r.a.createElement(y.a,null,this.state.errorLoading?r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(S.a,{variant:"danger"},"Error: Unable to get temperature and humidity sensor data from the server!"))):r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement("h2",{className:"graph-title"},"Temperature vs. Time"),r.a.createElement(w.b,{width:"100%",height:500},r.a.createElement(w.d,null,r.a.createElement(w.a,null),r.a.createElement(w.f,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(e).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),r.a.createElement(w.g,{dataKey:"temperature",name:"Temperature",unit:"\u2109"}),r.a.createElement(w.e,{cursor:{strokeDasharray:"3 3"},labelFormatter:function(e){return new Date(e).toLocaleString()}}),r.a.createElement(w.c,{data:this.state.tempData,line:{stroke:"#eee"},lineJointType:"monotoneX",lineType:"joint",name:"Temperatures",fill:"#8884d8"}))),r.a.createElement("h2",{className:"graph-title"},"Humidity vs. Time"),r.a.createElement(w.b,{width:"100%",height:500},r.a.createElement(w.d,null,r.a.createElement(w.a,null),r.a.createElement(w.f,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(e).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),r.a.createElement(w.g,{dataKey:"humidity",name:"Humidity",unit:"%"}),r.a.createElement(w.e,{cursor:{strokeDasharray:"3 3"},labelFormatter:function(e){return new Date(e).toLocaleString()}}),r.a.createElement(w.c,{data:this.state.humidData,line:{stroke:"#eee"},lineJointType:"monotoneX",lineType:"joint",name:"Humidity",fill:"#8884d8",unit:"%"}))))))))}},{key:"getTemperature",value:function(){var e=this;D.a.get("/get_temperature").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;e.setState({tempData:a})}else e.setState({errorLoading:!0}),console.log("Error getting temperature")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}},{key:"getHumidity",value:function(){var e=this;D.a.get("/get_humidity").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;e.setState({humidData:a})}else e.setState({errorLoading:!0}),console.log("Error getting humidity")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement("h2",{className:"about-header"},"Author"),r.a.createElement("div",null,"Deepak Ramalingam"))))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("title",null,"Tort Hub")),r.a.createElement(c.a,null,r.a.createElement(g.a,{sticky:"top",bg:"light",expand:"lg"},r.a.createElement(E.a,null,r.a.createElement(g.a.Brand,{href:"/stream"},"TortHub"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(c.b,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"),r.a.createElement(c.b,{to:"/lights",className:"nav-link",activeClassName:"active"},"Lights"),r.a.createElement(c.b,{to:"/stats",className:"nav-link",activeClassName:"active"},"Stats"),r.a.createElement(c.b,{to:"/about",className:"nav-link",activeClassName:"active"},"About"))))),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/stream"},r.a.createElement(j,null)),r.a.createElement(d.b,{exact:!0,path:"/lights"},r.a.createElement(T,null)),r.a.createElement(d.b,{exact:!0,path:"/stats"},r.a.createElement(H,null)),r.a.createElement(d.b,{exact:!0,path:"/about"},r.a.createElement(Y,null)),r.a.createElement(d.b,{path:"*"},r.a.createElement(d.a,{to:"/stream"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(419),a(420);i.a.render(r.a.createElement(c.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.59d754bb.chunk.js.map