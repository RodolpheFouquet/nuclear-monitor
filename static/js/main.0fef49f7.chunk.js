(window["webpackJsonpnuclear-monitor"]=window["webpackJsonpnuclear-monitor"]||[]).push([[0],{322:function(e,t,r){e.exports=r(606)},327:function(e,t,r){},347:function(e,t,r){},593:function(e,t,r){},606:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(6),i=r.n(o),c=(r(327),r(21)),l=r.n(c);L.DivIcon.SVGIcon=L.DivIcon.extend({options:{circleText:"",className:"svg-icon",circleAnchor:null,circleColor:null,circleOpacity:null,circleFillColor:"rgb(255,255,255)",circleFillOpacity:null,circleRatio:.5,circleWeight:null,color:"rgb(0,102,255)",fillColor:null,fillOpacity:.4,fontColor:"rgb(0, 0, 0)",fontOpacity:"1",fontSize:null,fontWeight:"normal",iconAnchor:null,iconSize:L.point(32,48),opacity:1,popupAnchor:null,weight:2},initialize:function(e){(e=L.Util.setOptions(this,e)).iconSize=L.point(e.iconSize),e.circleAnchor?e.circleAnchor=L.point(e.circleAnchor):e.circleAnchor=L.point(Number(e.iconSize.x)/2,Number(e.iconSize.x)/2),e.circleColor||(e.circleColor=e.color),e.circleFillOpacity||(e.circleFillOpacity=e.opacity),e.circleOpacity||(e.circleOpacity=e.opacity),e.circleWeight||(e.circleWeight=e.weight),e.fillColor||(e.fillColor=e.color),e.fontSize||(e.fontSize=Number(e.iconSize.x/4)),e.iconAnchor?e.iconAnchor=L.point(e.iconAnchor):e.iconAnchor=L.point(Number(e.iconSize.x)/2,Number(e.iconSize.y)),e.popupAnchor?e.popupAnchor=L.point(e.popupAnchor):e.popupAnchor=L.point(0,-.75*e.iconSize.y),e.html=this._createSVG()},_createCircle:function(){var e=Number(this.options.circleAnchor.x),t=Number(this.options.circleAnchor.y),r=this.options.iconSize.x/2*Number(this.options.circleRatio),a=this.options.circleFillColor,n=this.options.circleFillOpacity,o=this.options.circleColor,i=this.options.circleOpacity,c=this.options.circleWeight;return'<circle class="'+(this.options.className+"-circle")+'" cx="'+e+'" cy="'+t+'" r="'+r+'" fill="'+a+'" fill-opacity="'+n+'" stroke="'+o+'" stroke-opacity='+i+'" stroke-width="'+c+'"/>'},_createPathDescription:function(){var e=Number(this.options.iconSize.y),t=Number(this.options.iconSize.x),r=Number(this.options.weight),a=r/2;return"M "+a+" "+t/2+" "+("L "+t/2+" "+(e-r)+" ")+("L "+(t-a)+" "+t/2+" ")+("A "+t/4+" "+t/4+" 0 0 0 "+a+" "+t/2+" Z")},_createPath:function(){var e=this._createPathDescription(),t=this.options.weight,r=this.options.color,a=this.options.opacity,n=this.options.fillColor,o=this.options.fillOpacity;return'<path class="'+(this.options.className+"-path")+'" d="'+e+'" stroke-width="'+t+'" stroke="'+r+'" stroke-opacity="'+a+'" fill="'+n+'" fill-opacity="'+o+'"/>'},_createSVG:function(){var e=this._createPath(),t=this._createCircle(),r=this._createText();return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'+(this.options.className+"-svg")+'" style="'+("width:"+this.options.iconSize.x+"px; height:"+this.options.iconSize.y+"px;")+'">'+e+t+r+"</svg>"},_createText:function(){var e=this.options.fontSize+"px",t=this.options.fontWeight,r=Number(this.options.fontSize),a=this.options.circleAnchor.x,n=this.options.circleAnchor.y+.35*r,o=this.options.circleText;return'<text text-anchor="middle" x="'+a+'" y="'+n+'" style="font-size: '+e+"; font-weight: "+t+'" fill="'+this.options.fontColor.replace("rgb(","rgba(").replace(")",","+this.options.fontOpacity+")")+'">'+o+"</text>"}}),L.divIcon.svgIcon=function(e){return new L.DivIcon.SVGIcon(e)},L.Marker.SVGMarker=L.Marker.extend({options:{iconFactory:L.divIcon.svgIcon,iconOptions:{}},initialize:function(e,t){(t=L.Util.setOptions(this,t)).icon=t.iconFactory(t.iconOptions),this._latlng=e},onAdd:function(e){L.Marker.prototype.onAdd.call(this,e)},setStyle:function(e){if(this._icon){this._icon.children[0];var t=this._icon.children[0].children[0],r=this._icon.children[0].children[1];if(e.color&&!e.iconOptions){var a=e.color.replace("rgb","rgba").replace(")",","+this.options.icon.options.opacity+")"),n=e.color.replace("rgb","rgba").replace(")",","+this.options.icon.options.fillOpacity+")");t.setAttribute("stroke",a),t.setAttribute("fill",n),r.setAttribute("stroke",a),this.options.icon.fillColor=n,this.options.icon.color=a,this.options.icon.circleColor=a}if(e.opacity&&this.setOpacity(e.opacity),e.iconOptions){e.color&&(e.iconOptions.color=e.color);var o=L.Util.setOptions(this.options.icon,e.iconOptions);this.setIcon(L.divIcon.svgIcon(o))}}}}),L.marker.svgMarker=function(e,t){return new L.Marker.SVGMarker(e,t)};var s=r(46),u=r(39),p=r(71),d=r(80),m=r(273),f=r(274),b=r(15),h=r(614),v=r(618),y=r(610),O=r(41),g=r.n(O),E=r(85),_=r(52),w=r.n(_),P=r(275),x=r.n(P),N="https://nuclear-monitor-backend.herokuapp.com";function j(){return(j=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(["garonne","loire","meuse","moselle","rhin","rhone","seine"].map(function(e){return fetch("./rivers/".concat(e,".json")).then(function(e){return e.json()})})));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){return(I=Object(E.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/plants"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return(C=Object(E.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/reactors"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return(M=Object(E.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/productions"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(){return(A=Object(E.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/unavailabilities"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S="https://opendata.reseaux-energies.fr/api/records/1.0/search/?",k="YYYY-MM-DD";function R(){return(R=Object(E.a)(g.a.mark(function e(){var t,r,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S).concat(x.a.stringify({dataset:"eco2mix-national-tr",rows:96,sort:"-date_heure","refine.date":w()().tz("Europe/Paris").format(k)})));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.records.map(function(e){var t=e.fields;return{isOk:!!t.nucleaire,datetime:w()(t.date_heure).unix(),wind:Number(t.eolien),solar:Number(t.solaire),nuclear:Number(t.nucleaire),gas:Number(t.gaz),oil:Number(t.fioul),coal:Number(t.charbon),consumption:Number(t.consommation),biomass:Number(t.bioenergies),hydroPumped:Number(t.pompage),hydro:Number(t.hydraulique),imports:Math.max(0,Number(t.ech_physiques)),exports:Math.min(0,Number(t.ech_physiques))}}),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var q="PLANTS_LOAD_ACTION",V="PLANTS_RECEIVE_ACTION";function z(e){var t=e.data,r=e.errors;return{type:V,data:t,errors:r}}var W={loading:!1,loaded:!1,errors:null,data:{}};function U(e){return e.plants.loaded}function Y(e){return Object(y.a)(e.plants.data)}function H(e,t){return t.plants.data[e]}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return T({},e,{loading:!0});case V:return T({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}},G=r(611);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var J="PRODUCTIONS_LOAD_ACTION",K="PRODUCTIONS_RECEIVE_ACTION";function Z(e){var t=e.data,r=e.errors;return{type:K,data:t,errors:r}}var $={loading:!1,loaded:!1,errors:null,data:{}};function Q(e){return e.productions.loaded}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return X({},e,{loading:!0});case K:return X({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ae="UNAVAILABILITIES_LOAD_ACTION",ne="UNAVAILABILITIES_RECEIVE_ACTION";function oe(e){var t=e.data,r=e.errors;return{type:ne,data:t,errors:r}}var ie={loading:!1,loaded:!1,errors:null,data:{}};function ce(e){return e.unavailabilities.loaded}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return re({},e,{loading:!0});case ne:return re({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var pe="REACTORS_LOAD_ACTION",de="REACTORS_RECEIVE_ACTION";function me(e){var t=e.data,r=e.errors;return{type:de,data:t,errors:r}}var fe={loading:!1,loaded:!1,errors:null,data:{}};function be(e){return e.reactors.loaded}function he(e){return e?0===e.availablePower_MW?"PLANNED_MAINTENANCE"===e.type?"PLANNED_STOP":"AUTO_STOP":"LIMITED":"RUNNING"}function ve(e,t){var r=t.reactors.data[e],a=function(e,t){return t.productions.data[e].values}(e,t),n=function(e,t){return t.unavailabilities.data[e]}(e,t);return ue({},r,{status:he(n),dayProductions:a,unavailability:n})}var ye={availablePower:0,totalPower:0,availableCount:0,partiallyUnavailableCount:0,totallyUnavailableCount:0};function Oe(e,t){return function(e){return Object(y.a)(e.reactors.data).map(function(t){return ve(t.eicCode,e)})}(t).reduce(function(e,t){var r={availablePower:0,availableCount:0,partially:0,totally:0};return t.unavailability?(0===t.unavailability.availablePower_MW?r.totally=1:(r.availableCount=1,r.partially=1),r.availablePower=t.unavailability.availablePower_MW):(r.availableCount=1,r.availablePower=t.power_MW),{totalPower:e.totalPower+t.power_MW,availablePower:e.availablePower+r.availablePower,availableCount:e.availableCount+r.availableCount,totallyUnavailableCount:e.totallyUnavailableCount+r.totally,partiallyUnavailableCount:e.partiallyUnavailableCount+r.partially}},ye)}function ge(e,t){var r=e.plantId,a=e.reactorIndex,n=Object.values(t.reactors.data).find(function(e){return e.plantId===r&&e.reactorIndex===a});return n&&ve(n.eicCode,t)}var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return ue({},e,{loading:!0});case de:return ue({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Pe="MIX_LOAD_ACTION",xe="MIX_RECEIVE_ACTION";function Ne(e){var t=e.data,r=e.errors;return{type:xe,data:t,errors:r}}var je={loading:!1,loaded:!1,errors:null,data:{}};function Ie(e){return e.mix.loaded}function Ce(e){return e.mix.data}var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return we({},e,{loading:!0});case xe:return we({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ke="RIVERS_LOAD_ACTION",Re="RIVERS_RECEIVE_ACTION";function De(e){var t=e.data,r=e.errors;return{type:Re,data:t,errors:r}}var Le={loading:!1,loaded:!1,errors:null,data:{}};function Te(e){return e.rivers.loaded}function qe(e){return e.rivers.data}var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Se({},e,{loading:!0});case Re:return Se({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}},ze=Object(d.combineReducers)({plants:F,reactors:Ee,productions:ee,mix:Me,unavailabilities:le,rivers:Ve}),We=[Object(d.applyMiddleware)(f.a)],Ue=Object(m.composeWithDevTools)({}).apply(void 0,We),Ye=Object(d.createStore)(ze,Ue),He=(r(337),r(292)),Fe=(r(155),r(98)),Ge=(r(156),r(99)),Be=(r(340),r(149)),Xe=(r(342),r(150)),Je=(r(345),r(295)),Ke=r(197);function Ze(e){var t=window.innerWidth;switch(e){case"xs":return t<576;case"sm":return t>=576;case"md":return t>=768;case"lg":return t>=992;case"xl":return t>=1200;case"xxl":return t>=1600;default:return!1}}function $e(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}function Qe(e){return isNaN(e)?"-":"".concat(e)}var et=64,tt=400,rt=(r(74),r(347),r(348),r(294)),at=r(194),nt=r.n(at),ot=r(78),it=r.n(ot),ct=r(86),lt={hydroPumped:{label:"POMPAGE",color:"#114774",stackId:"2"},biomass:{label:"BIOENERG.",color:"#166a57"},wind:{label:"EOLIEN",color:"#74cdb9"},solar:{label:"SOLAIRE",color:"#f27406"},nuclear:{label:"NUCLEAIRE",color:"#f5b300"},hydro:{label:"HYDRAU.",color:"#2772b2"},gas:{label:"GAS",color:"#f30a0a"},coal:{label:"CHARBON",color:"#ac8c35"},oil:{label:"FIOUL",color:"#8356a2"},exports:{label:"EXPORTS",color:"#969696",stackId:"2"},imports:{label:"IMPORTS",color:"#969696"}},st=["hydroPumped","exports","biomass","nuclear","hydro","gas","coal","oil","wind","solar","imports"],ut=["oil","coal","gas","hydro","nuclear","solar","wind","biomass","hydroPumped"];function pt(e){return isNaN(e)?"-":"".concat(e)}var dt=function(e){var t=e.mix,r=e.slotIndex,a=e.setSlotIndex;return n.a.createElement("div",{className:"MixComponent"},n.a.createElement("div",{className:"MixComponent__header"},ut.map(function(e){return n.a.createElement("div",{key:e,className:"MixComponent__header__item",style:{backgroundColor:lt[e].color}},pt(Math.abs(t[r][e])),n.a.createElement("span",{className:"MixComponent__header__item__small"}," MW"),n.a.createElement("br",null),n.a.createElement("span",{className:"MixComponent__header__item__small"},lt[e].label))}),n.a.createElement("div",{className:"MixComponent__header__item",style:{backgroundColor:lt.imports.color}},pt(Math.max(t[r].imports,-t[r].exports)),n.a.createElement("span",{className:"MixComponent__header__item__small"}," MW"),n.a.createElement("br",null),n.a.createElement("span",{className:"MixComponent__header__item__small"},t[r].exports<0?lt.exports.label:lt.imports.label)),n.a.createElement("div",{className:"MixComponent__header__item"}),n.a.createElement("div",{className:"MixComponent__header__item",style:{backgroundColor:"black"}},pt(t[r].consumption),n.a.createElement("span",{className:"MixComponent__header__item__small"}," MW"),n.a.createElement("br",null),n.a.createElement("span",{className:"MixComponent__header__item__small"},"CONSO"))),n.a.createElement("div",{className:"MixComponent__chart"},n.a.createElement(ct.e,null,n.a.createElement(ct.b,{data:t},n.a.createElement(ct.f,{axisLine:!0,mirror:!0}),st.map(function(e){return n.a.createElement(ct.a,{key:e,dataKey:e,type:"monotone",activeDot:!1,stroke:"none",fill:lt[e].color,stackId:lt[e].stackId||"1"})}),n.a.createElement(ct.c,{dataKey:"consumption",dot:!1,activeDot:!1,type:"monotone",stroke:"black"}),n.a.createElement(ct.d,{x:r,stroke:"#4b4e52"})))),n.a.createElement("div",{className:"MixComponent__sliderContainer"},n.a.createElement(rt.a,{min:0,max:95,style:{width:"100%"},defaultValue:r,onChange:nt()(a,400),tipFormatter:function(e){return it()().startOf("day").add(15*e,"minutes").format("HH:mm")}})))};var mt=Object(Ke.b)("slotIndex","setSlotIndex",function(){return Math.max(Math.floor(w()().diff(w()().startOf("day"),"minutes")/15)-8,0)}),ft=Object(s.b)(function(e,t){return{mix:Ce(e),reactorSetIndicators:Oe(Math.floor(t.slotIndex/4),e)}}),bt=Object(Ke.a)(mt,ft)(function(e){var t=e.mix,r=e.slotIndex,a=e.setSlotIndex,o=e.reactorSetIndicators,i=o.totalPower,c=o.availablePower,l=o.availableCount,s=o.partiallyUnavailableCount,u=o.totallyUnavailableCount,p=Math.floor(i/1e3),d=Math.floor(c),m=Math.floor(100*c/i),f=Math.floor(100*t[r].nuclear/c),b=w()().tz("Europe/Paris").hour(Math.floor(r/4)).minutes(r%4*15).format("DD/MM/YYYY HH:mm");return n.a.createElement("div",{className:"MixView"},n.a.createElement(Fe.a,null,n.a.createElement(Ge.a,{span:24},n.a.createElement(dt,{mix:t,slotIndex:r,setSlotIndex:a}),n.a.createElement("div",{className:"MixView__date"},b),n.a.createElement("div",{className:"MixView__nuclear"},n.a.createElement("strong",null,"Parc nucl\xe9aire (".concat(p," GW):")),n.a.createElement("div",{className:"MixView__nuclear__indicator"},n.a.createElement("div",{className:"MixView__nuclear__indicator__prod",style:{width:"".concat((t[r].nuclear||0)/i*100,"%")}},n.a.createElement("div",null,"Prod: ".concat(Qe(t[r].nuclear)," MW")),n.a.createElement("div",null,"".concat(Qe(f),"% du dispo."))),n.a.createElement("div",{className:"MixView__nuclear__indicator__available",style:{width:"".concat((c-(t[r].nuclear||0))/i*100,"%")}})),n.a.createElement("div",{className:"MixView__nuclear__available"},"".concat(l," r\xe9acteurs disponibles: ").concat(d," MW (").concat(m,"%)")),n.a.createElement("div",null,"dont ".concat(s," partiellement indisponible").concat(s>1?"s":"")),n.a.createElement("div",{className:"MixView__nuclear__stopped"},"".concat(u," r\xe9acteur").concat(u>1?"s":""," arr\xeat\xe9").concat(u>1?"s":""))))))}),ht=(r(583),r(296)),vt=(r(608),r(206)),yt=(r(270),r(19));function Ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function gt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ot(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ot(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r(74).ReactorType;function Et(e){var t={fontSize:16};switch(e.status){case"PLANNED_STOP":return n.a.createElement(yt.a,{type:"tool",theme:"filled",style:gt({},t,{color:"#404040"})});case"AUTO_STOP":return n.a.createElement(yt.a,{type:"exclamation-circle",theme:"twoTone",twoToneColor:"red",style:t});case"LIMITED":return n.a.createElement(yt.a,{type:"info-circle",theme:"twoTone",style:t});default:return null}}var _t=function(e){var t=e.reactor,r=t.dayProductions,a=r[r.length-1],o=Math.max(0,a.value),i=Math.floor(o/t.power_MW*100);return n.a.createElement("div",{className:"ReactIndicator",style:{background:"linear-gradient(0deg, #26a65b 0%, #26a65b ".concat(i,"%, rgba(255,255,255,1) ").concat(i,"%)")}},n.a.createElement("div",{className:"ReactIndicator__status"},n.a.createElement(Et,{status:t.status})),n.a.createElement("div",{className:"ReactIndicator__prod"},n.a.createElement("strong",null,Math.floor(o))),n.a.createElement("div",{className:"ReactIndicator__number"},t.reactorIndex))},wt=(r(590),r(55));var Pt=function(e){var t=e.reactor;return n.a.createElement("div",{className:"ReactorDetails"},n.a.createElement(wt.a,{title:n.a.createElement("div",{className:"ReactorDetails__header"},n.a.createElement("div",null,t.name),n.a.createElement("div",null,n.a.createElement(u.b,{to:"/plant/".concat(t.plantId)},n.a.createElement(yt.a,{type:"caret-up",theme:"filled"})))),size:"small",bordered:!0,column:1},n.a.createElement(wt.a.Item,{label:"D\xe9but d'exploitation"},t.exploitationStartYear),n.a.createElement(wt.a.Item,{label:"Puissance nominale"},"".concat(t.power_MW," MWe (").concat(t.stage,")"))),t.unavailability&&n.a.createElement(wt.a,{title:"Indisponibilit\xe9",size:"small",bordered:!0,column:1,style:{marginTop:10}},n.a.createElement(wt.a.Item,{label:"D\xe9but"},w()(t.unavailability.startDate).tz("Europe/Paris").format("DD/MM/YYYY HH:mm")),n.a.createElement(wt.a.Item,{label:"Fin"},w()(t.unavailability.endDate).tz("Europe/Paris").format("DD/MM/YYYY HH:mm")),n.a.createElement(wt.a.Item,{label:"Type"},"PLANNED_MAINTENANCE"===t.unavailability.type?"Plannifi\xe9e":"Fortuite"),n.a.createElement(wt.a.Item,{label:"Puissance disponible"},"".concat(t.unavailability.availablePower_MW," MW")),n.a.createElement(wt.a.Item,{label:"Description"},t.unavailability.reason)))},xt=(r(593),Object(s.b)(function(e,t){return{reactor:ge({plantId:t.match.params.plantId,reactorIndex:Number(t.match.params.reactorIndex)},e)}})(Pt));var Nt=Object(s.b)(function(e,t){var r=t.match.params.plantId,a=function(e,t){var r=Object.values(t.reactors.data).filter(function(t){return t.plantId===e}).map(function(e){return ve(e.eicCode,t)});return Object(G.a)(Object(v.a)("reactorIndex"),r)}(r,e);return{plants:Y(e),currentPlant:H(r,e),goTo:function(e){return t.history.push(e)},reactors:a}})(function(e){var t=e.plants,r=e.currentPlant,a=e.reactors,o=e.goTo;return r?n.a.createElement("div",{className:"PlantView"},n.a.createElement(Fe.a,null,n.a.createElement(Ge.a,{span:24},n.a.createElement("div",{className:"PlantView__firstRow"},n.a.createElement("div",{className:"PlantView__firstRow__left"},n.a.createElement(vt.a,{value:r.id,size:"large",onChange:function(e){return o("/plant/".concat(e))},style:{width:"9em"}},t.map(function(e){return n.a.createElement(vt.a.Option,{key:e.id,value:e.id},e.name)})),n.a.createElement("span",null,n.a.createElement(ht.a,{style:{marginLeft:"8px"}},"SEA"===r.coolingType?"Mer":"Fleuve"))),n.a.createElement("div",{className:"PlantView__firstRow__right"},n.a.createElement("a",{href:r.wikiLink,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"PlantView__wiki",src:"wiki.svg",alt:"wiki"})),n.a.createElement("a",{href:r.asnLink,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"PlantView__asn",src:"logo-asn.png",alt:"asn"})))),n.a.createElement("div",{className:"PlantView__schema"},n.a.createElement("div",null,"Production (MW)"),n.a.createElement("div",{className:"PlantView__reactors"},a.map(function(e){return n.a.createElement(u.b,{key:e.eicCode,to:"/plant/".concat(r.id,"/").concat(e.reactorIndex)},n.a.createElement(_t,{reactor:e}))})),n.a.createElement("div",{className:"PlantView__cooling",style:{width:50*a.length}},r.coolingPlace)),n.a.createElement("div",{className:"PlantView__footer"},n.a.createElement(p.d,null,n.a.createElement(p.b,{path:"/plant/:plantId/:reactorIndex",component:xt}),n.a.createElement(p.b,{component:function(){return n.a.createElement("small",null,"(Cliquer sur un r\xe9acteur pour plus de d\xe9tails)")}})))))):n.a.createElement(p.a,{to:"/"})}),jt=r(205),It=r(288),Ct=r(145),Mt=r(297),At=r(289),St=r(298),kt=r(612),Rt=r(615),Dt=function(e){function t(){return Object(It.a)(this,t),Object(Mt.a)(this,Object(At.a)(t).apply(this,arguments))}return Object(St.a)(t,e),Object(Ct.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.load)(Object(jt.a)(e,["load"]))}},{key:"componentDidUpdate",value:function(e){var t=Object(kt.a)(["load"],e),r=this.props,a=r.load,n=Object(jt.a)(r,["load"]);Object(Rt.a)(t,n)||a(n)}},{key:"render",value:function(){return null}}]),t}(a.Component);var Lt=function(e){return Object(s.b)(null,{load:e})(Dt)},Tt=r(616),qt=r(619),Vt=r(620),zt=r(613),Wt=r(617),Ut=new l.a.DivIcon.SVGIcon({fillOpacity:1,iconSize:[24,38]}),Yt=new l.a.DivIcon.SVGIcon({color:"red",fillOpacity:1,iconSize:[24,38]});function Ht(e){var t=e.plants,r=e.currentPlantId,a=e.onPlantClick,o=e.drawerHeight,i=e.rivers,c=!Ze("sm"),l=$e();return n.a.createElement(Tt.a,{center:[48.3,2],zoom:c?5:6,style:{height:c?l-et-o:l-et,marginTop:c?et+o:et,marginLeft:c?0:tt},zoomControl:!1},n.a.createElement(qt.a,{position:"bottomright"}),n.a.createElement(Vt.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t.map(function(e){return n.a.createElement(zt.a,{key:e.id,title:e.name,position:e.coords,icon:e.id===r?Yt:Ut,onClick:function(){return a(e)}})}),i.map(function(e){return n.a.createElement(Wt.a,{data:e})}))}Ht.defaultProps={currentPlantId:null};var Ft=Ht,Gt=(r(607),r(293).a.Title);var Bt=function(){return n.a.createElement("div",{className:"HomeView"},n.a.createElement(Gt,{level:2},"Bienvenue"),n.a.createElement("div",null,n.a.createElement("strong",null,"Nuclear monitor")," vous permet de consulter:",n.a.createElement("ul",null,n.a.createElement("li",null,"le ",n.a.createElement(u.b,{to:"/mix"},"mix")," de production d'\xe9lectricit\xe9"),n.a.createElement("li",null,"l'\xe9tat d'une ",n.a.createElement(u.b,{to:"/plant/GRAVELINES"},"centrale")," ou d'un ",n.a.createElement(u.b,{to:"/plant/BLAYAIS/3"},"r\xe9acteur")))),n.a.createElement("div",{className:"HomeView__marker"},"Cliquer sur une centrale pour en savoir plus..."))},Xt=Lt(function(){return function(e){return e({type:q}),function(){return I.apply(this,arguments)}().then(function(t){return e(z({data:Object(h.a)(Object(v.a)("id"),t)}))}).catch(function(t){return console.error(t)&&e(z({errors:t}))})}}),Jt=Lt(function(){return function(e){return e({type:pe}),function(){return C.apply(this,arguments)}().then(function(t){return e(me({data:Object(h.a)(Object(v.a)("eicCode"),t)}))}).catch(function(t){return console.error(t)&&e(me({errors:t}))})}}),Kt=Lt(function(){return function(e){return e({type:J}),function(){return M.apply(this,arguments)}().then(function(t){return e(Z({data:Object(h.a)(Object(v.a)("eicCode"),t)}))}).catch(function(t){return console.error(t)&&e(Z({errors:t}))})}}),Zt=Lt(function(){return function(e){return e({type:Pe}),function(){return R.apply(this,arguments)}().then(function(t){return e(Ne({data:t}))}).catch(function(t){return console.error(t)&&e(Ne({errors:t}))})}}),$t=Lt(function(){return function(e){return e({type:ae}),function(){return A.apply(this,arguments)}().then(function(t){return e(oe({data:Object(h.a)(Object(v.a)("eicCode"),t)}))}).catch(function(t){return console.error(t)&&e(oe({errors:t}))})}}),Qt=Lt(function(){return function(e){return e({type:ke}),function(){return j.apply(this,arguments)}().then(function(t){return e(De({data:t}))}).catch(function(t){return console.error(t)&&e(De({errors:t}))})}});function er(e){var t=e.isLoaded,r=e.plants,a=e.goTo,o=e.currentPlantId,i=e.isFullPage,c=e.rivers,l=!Ze("sm"),s=i?$e()-et:220;return n.a.createElement("div",{className:"AppLayout"},n.a.createElement(Xt,null),n.a.createElement(Jt,null),n.a.createElement(Kt,null),n.a.createElement(Zt,null),n.a.createElement($t,null),n.a.createElement(Qt,null),n.a.createElement(He.a,{size:"large",spinning:!t,indicator:n.a.createElement("div",null,n.a.createElement("img",{className:"AppLayout__loadingIcon",src:"loading_icon.svg",alt:""}))},!t&&n.a.createElement("div",{className:"AppLayout__splash"}),t&&n.a.createElement(Be.a,null,n.a.createElement(Je.a,{title:null,visible:!0,placement:l?"top":"left",style:{marginTop:et},mask:!1,closable:!1,width:tt,height:s,bodyStyle:{padding:0},drawerStyle:{transition:"height 2s ease"}},n.a.createElement(p.d,null,n.a.createElement(p.b,{path:"/home",exact:!0,component:Bt}),n.a.createElement(p.b,{path:"/mix",exact:!0,component:bt}),n.a.createElement(p.b,{path:"/plant/:plantId",component:Nt}),n.a.createElement(p.b,{component:function(){return n.a.createElement(p.a,{to:{pathname:"/home"}})}}))),n.a.createElement(Fe.a,null,n.a.createElement(Ge.a,{span:24},n.a.createElement(Be.a.Header,{className:"AppLayout__header"},n.a.createElement(Xe.a,{theme:"dark",mode:"horizontal",className:"AppLayout__menu",selectable:!1},n.a.createElement(Xe.a.Item,null,n.a.createElement(u.b,{to:"/home"},n.a.createElement("strong",null,"Nuclear monitor"))),n.a.createElement(Xe.a.Item,{key:"mix"},n.a.createElement(u.b,{to:"/mix"},"Mix")))),n.a.createElement(Be.a.Content,{className:"AppLayout__content"},n.a.createElement(Ft,{plants:r,rivers:c,currentPlantId:o,onPlantClick:function(e){return a("/plant/".concat(e.id))},drawerHeight:s})))))))}er.defaultProps={currentPlantId:null};var tr=Object(p.g)(Object(s.b)(function(e,t){var r=Object(p.f)(t.location.pathname,{path:"/plant/:id",exact:!1});return{isLoaded:U(e)&&be(e)&&Q(e)&&Ie(e)&&ce(e)&&Te(e),plants:Y(e),rivers:qe(e),goTo:function(e){return t.history.push(e)},currentPlantId:r&&r.params.id,isFullPage:!!Object(p.f)(t.location.pathname,{path:["/plant/:id/:reactorIndex","/mix"]})}})(er));var rr=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s.a,{store:Ye},n.a.createElement(u.a,null,n.a.createElement(p.b,{path:"/"},n.a.createElement(tr,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(rr,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,r){"use strict";r.r(t),r.d(t,"ProductionType",function(){return o}),r.d(t,"PlantType",function(){return i}),r.d(t,"ReactorType",function(){return c}),r.d(t,"MixType",function(){return l});var a=r(0),n=r.n(a),o=n.a.shape({startDate:n.a.string.isRequired,endDate:n.a.string.isRequired,updatedDate:n.a.string.isRequired,value:n.a.number.isRequired}),i=n.a.shape({id:n.a.string.isRequired,name:n.a.string.isRequired,coords:n.a.arrayOf(n.a.number).isRequired,coolingType:n.a.string.isRequired,coolingPlace:n.a.string.isRequired,hasCoolingTower:n.a.bool.isRequired,wikiLink:n.a.string.isRequired,asnLink:n.a.string.isRequired}),c=n.a.shape({eicCode:n.a.string.isRequired,plantId:n.a.string.isRequired,reactorIndex:n.a.number.isRequired,name:n.a.string.isRequired,stage:n.a.string.isRequired,power_MW:n.a.number.isRequired,buildStartYear:n.a.number.isRequired,gridLinkYear:n.a.number.isRequired,exploitationStartYear:n.a.number.isRequired,dayProductions:n.a.arrayOf(o).isRequired}),l=n.a.shape({isOk:n.a.bool.isRequired,datetime:n.a.number.isRequired,wind:n.a.number.isRequired,solar:n.a.number.isRequired,nuclear:n.a.number.isRequired,gas:n.a.number.isRequired,oil:n.a.number.isRequired,coal:n.a.number.isRequired,consumption:n.a.number.isRequired,biomass:n.a.number.isRequired,hydroPumped:n.a.number.isRequired,hydro:n.a.number.isRequired,imports:n.a.number.isRequired,exports:n.a.number.isRequired})}},[[322,1,2]]]);
//# sourceMappingURL=main.0fef49f7.chunk.js.map