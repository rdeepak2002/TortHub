(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{214:function(e,t,a){e.exports=a(421)},419:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(32),i=a.n(l),c=a(29),o=a(16),s=a(17),m=a(19),u=a(18),d=a(10),h=a(171),g=a(431),E=a(424),b=a(430),f=a(107),v=a(20),p=a(425),y=a(426),O=a(427),j=a(428),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={imageLoaded:!1},n.handleImageLoaded=n.handleImageLoaded.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.state.imageLoaded;return r.a.createElement(E.a,null,r.a.createElement(p.a,{className:t?"hidden":"visible"},r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(O.a,{animation:"border",size:"lg"}))),r.a.createElement(p.a,{className:t?"visible":"hidden"},r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(j.a,(e={className:"video_feed",rounded:!0,fluid:!0,alt:"stream",src:"/video_feed"},Object(f.a)(e,"className","video_feed"),Object(f.a)(e,"onLoad",this.handleImageLoaded.bind(this)),e))))))}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}}]),a}(n.Component),L=a(429),N=a(26),S=a.n(N),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={lightLoading:!1},n.turnOffLight=n.turnOffLight.bind(Object(v.a)(n)),n.turnOnLight=n.turnOnLight.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement("h2",{className:"device-title"},"Heat Lamps"))),r.a.createElement(p.a,null,r.a.createElement(y.a,{className:"d-flex justify-content-end"},r.a.createElement(L.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOnLight,variant:"dark"},"ON LAMP")),r.a.createElement(y.a,{className:"d-flex justify-content-start"},r.a.createElement(L.a,{className:"light-btn",disabled:!!this.state.lightLoading,onClick:this.turnOffLight,variant:"dark"},"OFF LAMP"))))))}},{key:"turnOffLight",value:function(){var e=this;this.setState({lightLoading:!0}),S.a.get("/turnoff_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}},{key:"turnOnLight",value:function(){var e=this;this.setState({lightLoading:!0}),S.a.get("/turnon_light").then((function(t){console.log(t),e.setState({lightLoading:!1})}),(function(t){console.log(t),e.setState({lightLoading:!1})}))}}]),a}(n.Component),w=a(432),T=a(13),C=a(110),x=a.n(C),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tempData:void 0,humidData:void 0,errorLoading:!1},n.getTemperature=n.getTemperature.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getTemperature(),this.getHumidity()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"hidden":"visible"},r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(O.a,{animation:"border",size:"lg"}))),r.a.createElement(p.a,{className:this.state.tempData&&this.state.humidData?"visible":"hidden"},r.a.createElement(y.a,null,this.state.errorLoading?r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(w.a,{variant:"danger"},"Error: Unable to get temperature and humidity sensor data from the server!"))):r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement("h2",{className:"graph-title"},"Temperature vs. Time"),r.a.createElement(T.b,{width:"100%",height:500},r.a.createElement(T.d,null,r.a.createElement(T.a,{strokeDasharray:"3 3"}),r.a.createElement(T.f,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(e).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),r.a.createElement(T.g,{dataKey:"temperature",name:"Temperature",unit:"\u2109"}),r.a.createElement(T.e,{cursor:{strokeDasharray:"3 3"},labelFormatter:function(e){return new Date(e).toLocaleString()}}),r.a.createElement(T.c,{data:this.state.tempData,line:{stroke:"#FF7070"},lineJointType:"monotoneX",lineType:"joint",name:"Temperatures",fill:"#8884d8"}))),r.a.createElement("h2",{className:"graph-title"},"Humidity vs. Time"),r.a.createElement(T.b,{width:"100%",height:500},r.a.createElement(T.d,null,r.a.createElement(T.a,{strokeDasharray:"3 3"}),r.a.createElement(T.f,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return x()(e).format("MM/DD/YYYY h:mm:ss a")},type:"number"}),r.a.createElement(T.g,{dataKey:"humidity",name:"Humidity",unit:"%"}),r.a.createElement(T.e,{cursor:{strokeDasharray:"3 3"},labelFormatter:function(e){return new Date(e).toLocaleString()}}),r.a.createElement(T.c,{data:this.state.humidData,line:{stroke:"#7D9DFF"},lineJointType:"monotoneX",lineType:"joint",name:"Humidity",fill:"#8884d8",unit:"%"}))))))))}},{key:"getTemperature",value:function(){var e=this;S.a.get("/get_temperature").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;e.setState({tempData:a})}else e.setState({errorLoading:!0}),console.log("Error getting temperature")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}},{key:"getHumidity",value:function(){var e=this;S.a.get("/get_humidity").then((function(t){if(t.data&&t.data.length>=0){var a=t.data;e.setState({humidData:a})}else e.setState({errorLoading:!0}),console.log("Error getting humidity")}),(function(t){e.setState({errorLoading:!0}),console.log(t)}))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateServer=n.updateServer.bind(Object(v.a)(n)),n.rebootServer=n.rebootServer.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement("h2",{className:"about-header"},"Settings")),r.a.createElement(p.a,null,r.a.createElement(L.a,{onClick:this.updateServer},"Update")),r.a.createElement(p.a,null,r.a.createElement(L.a,{onClick:this.rebootServer},"Reboot")))))}},{key:"updateServer",value:function(){S.a.get("/update_server").then((function(e){alert("Updating the server (website will be down for a very short period of time)."),window.location.reload()}),(function(e){console.log(e)}))}},{key:"rebootServer",value:function(){S.a.get("/reboot_server").then((function(e){alert("Rebooting the server (website will be down for a while)."),window.location.reload()}),(function(e){console.log(e)}))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement("h2",{className:"about-header"},"Author"),r.a.createElement("div",null,"Deepak Ramalingam"))))}}]),a}(n.Component),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("title",null,"Tort Hub")),r.a.createElement(c.a,null,r.a.createElement(g.a,{sticky:"top",bg:"light",expand:"lg"},r.a.createElement(E.a,null,r.a.createElement(g.a.Brand,{href:"/stream"},"TortHub"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(c.b,{to:"/stream",className:"nav-link",activeClassName:"active"},"Stream"),r.a.createElement(c.b,{to:"/lights",className:"nav-link",activeClassName:"active"},"Lights"),r.a.createElement(c.b,{to:"/stats",className:"nav-link",activeClassName:"active"},"Stats"),r.a.createElement(c.b,{to:"/settings",className:"nav-link",activeClassName:"active"},"Settings"),r.a.createElement(c.b,{to:"/about",className:"nav-link",activeClassName:"active"},"About"))))),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/stream"},r.a.createElement(k,null)),r.a.createElement(d.b,{exact:!0,path:"/lights"},r.a.createElement(D,null)),r.a.createElement(d.b,{exact:!0,path:"/stats"},r.a.createElement(F,null)),r.a.createElement(d.b,{exact:!0,path:"/settings"},r.a.createElement(_,null)),r.a.createElement(d.b,{exact:!0,path:"/about"},r.a.createElement(H,null)),r.a.createElement(d.b,{path:"*"},r.a.createElement(d.a,{to:"/stream"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(419),a(420);i.a.render(r.a.createElement(c.a,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.1c0befe4.chunk.js.map