(window["webpackJsonpnuclear-monitor"]=window["webpackJsonpnuclear-monitor"]||[]).push([[0],{307:function(e,t,r){e.exports=r(579)},312:function(e,t,r){},579:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(7),i=r.n(o),c=(r(312),r(19)),l=r.n(c);L.DivIcon.SVGIcon=L.DivIcon.extend({options:{circleText:"",className:"svg-icon",circleAnchor:null,circleColor:null,circleOpacity:null,circleFillColor:"rgb(255,255,255)",circleFillOpacity:null,circleRatio:.5,circleWeight:null,color:"rgb(0,102,255)",fillColor:null,fillOpacity:.4,fontColor:"rgb(0, 0, 0)",fontOpacity:"1",fontSize:null,fontWeight:"normal",iconAnchor:null,iconSize:L.point(32,48),opacity:1,popupAnchor:null,weight:2},initialize:function(e){(e=L.Util.setOptions(this,e)).iconSize=L.point(e.iconSize),e.circleAnchor?e.circleAnchor=L.point(e.circleAnchor):e.circleAnchor=L.point(Number(e.iconSize.x)/2,Number(e.iconSize.x)/2),e.circleColor||(e.circleColor=e.color),e.circleFillOpacity||(e.circleFillOpacity=e.opacity),e.circleOpacity||(e.circleOpacity=e.opacity),e.circleWeight||(e.circleWeight=e.weight),e.fillColor||(e.fillColor=e.color),e.fontSize||(e.fontSize=Number(e.iconSize.x/4)),e.iconAnchor?e.iconAnchor=L.point(e.iconAnchor):e.iconAnchor=L.point(Number(e.iconSize.x)/2,Number(e.iconSize.y)),e.popupAnchor?e.popupAnchor=L.point(e.popupAnchor):e.popupAnchor=L.point(0,-.75*e.iconSize.y),e.html=this._createSVG()},_createCircle:function(){var e=Number(this.options.circleAnchor.x),t=Number(this.options.circleAnchor.y),r=this.options.iconSize.x/2*Number(this.options.circleRatio),n=this.options.circleFillColor,a=this.options.circleFillOpacity,o=this.options.circleColor,i=this.options.circleOpacity,c=this.options.circleWeight;return'<circle class="'+(this.options.className+"-circle")+'" cx="'+e+'" cy="'+t+'" r="'+r+'" fill="'+n+'" fill-opacity="'+a+'" stroke="'+o+'" stroke-opacity='+i+'" stroke-width="'+c+'"/>'},_createPathDescription:function(){var e=Number(this.options.iconSize.y),t=Number(this.options.iconSize.x),r=Number(this.options.weight),n=r/2;return"M "+n+" "+t/2+" "+("L "+t/2+" "+(e-r)+" ")+("L "+(t-n)+" "+t/2+" ")+("A "+t/4+" "+t/4+" 0 0 0 "+n+" "+t/2+" Z")},_createPath:function(){var e=this._createPathDescription(),t=this.options.weight,r=this.options.color,n=this.options.opacity,a=this.options.fillColor,o=this.options.fillOpacity;return'<path class="'+(this.options.className+"-path")+'" d="'+e+'" stroke-width="'+t+'" stroke="'+r+'" stroke-opacity="'+n+'" fill="'+a+'" fill-opacity="'+o+'"/>'},_createSVG:function(){var e=this._createPath(),t=this._createCircle(),r=this._createText();return'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'+(this.options.className+"-svg")+'" style="'+("width:"+this.options.iconSize.x+"px; height:"+this.options.iconSize.y+"px;")+'">'+e+t+r+"</svg>"},_createText:function(){var e=this.options.fontSize+"px",t=this.options.fontWeight,r=Number(this.options.fontSize),n=this.options.circleAnchor.x,a=this.options.circleAnchor.y+.35*r,o=this.options.circleText;return'<text text-anchor="middle" x="'+n+'" y="'+a+'" style="font-size: '+e+"; font-weight: "+t+'" fill="'+this.options.fontColor.replace("rgb(","rgba(").replace(")",","+this.options.fontOpacity+")")+'">'+o+"</text>"}}),L.divIcon.svgIcon=function(e){return new L.DivIcon.SVGIcon(e)},L.Marker.SVGMarker=L.Marker.extend({options:{iconFactory:L.divIcon.svgIcon,iconOptions:{}},initialize:function(e,t){(t=L.Util.setOptions(this,t)).icon=t.iconFactory(t.iconOptions),this._latlng=e},onAdd:function(e){L.Marker.prototype.onAdd.call(this,e)},setStyle:function(e){if(this._icon){this._icon.children[0];var t=this._icon.children[0].children[0],r=this._icon.children[0].children[1];if(e.color&&!e.iconOptions){var n=e.color.replace("rgb","rgba").replace(")",","+this.options.icon.options.opacity+")"),a=e.color.replace("rgb","rgba").replace(")",","+this.options.icon.options.fillOpacity+")");t.setAttribute("stroke",n),t.setAttribute("fill",a),r.setAttribute("stroke",n),this.options.icon.fillColor=a,this.options.icon.color=n,this.options.icon.circleColor=n}if(e.opacity&&this.setOpacity(e.opacity),e.iconOptions){e.color&&(e.iconOptions.color=e.color);var o=L.Util.setOptions(this.options.icon,e.iconOptions);this.setIcon(L.divIcon.svgIcon(o))}}}}),L.marker.svgMarker=function(e,t){return new L.Marker.SVGMarker(e,t)};var s=r(47),u=r(105),p=r(70),d=r(260),m=r(261),h=r(15),f=r(586),b=r(591),y=r(583),g=r(55),O=r.n(g),v=r(108),_=r(74),w=r.n(_),E=r(262),x=r.n(E),j="https://nuclear-monitor-backend.herokuapp.com";function P(){return(P=Object(v.a)(O.a.mark(function e(){var t,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return setTimeout(e,2e3)});case 2:return e.next=4,fetch("".concat(j,"/plants"));case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return(N=Object(v.a)(O.a.mark(function e(){var t,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/reactors"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return(k=Object(v.a)(O.a.mark(function e(){var t,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/productions"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var I="https://opendata.reseaux-energies.fr/api/records/1.0/search/?",R="YYYY-MM-DD";function S(){return(S=Object(v.a)(O.a.mark(function e(){var t,r,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I).concat(x.a.stringify({dataset:"eco2mix-national-tr",rows:96,sort:"-date_heure","refine.date":w()().tz("Europe/Paris").format(R)})));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,n=r.records.map(function(e){var t=e.fields;return{isOk:!!t.nucleaire,datetime:w()(t.date_heure).unix(),wind:Number(t.eolien),solar:Number(t.solaire),nuclear:Number(t.nucleaire),gas:Number(t.gaz),oil:Number(t.fioul),coal:Number(t.charbon),consumption:Number(t.consommation),biomass:Number(t.bioenergies),hydroPumped:Number(t.pompage),hydro:Number(t.hydraulique),imports:Math.max(0,Number(t.ech_physiques)),exports:Math.min(0,Number(t.ech_physiques))}}),e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){Object(h.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var M="PLANTS_LOAD_ACTION",D="PLANTS_RECEIVE_ACTION";function V(e){var t=e.data,r=e.errors;return{type:D,data:t,errors:r}}var q={loading:!1,loaded:!1,errors:null,data:{}};function T(e){return e.plants.loaded}function z(e){return Object(y.a)(e.plants.data)}function W(e,t){return t.plants.data[e]}var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return C({},e,{loading:!0});case D:return C({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(r,!0).forEach(function(t){Object(h.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var U="REACTORS_LOAD_ACTION",Y="REACTORS_RECEIVE_ACTION";function B(e){var t=e.data,r=e.errors;return{type:Y,data:t,errors:r}}var X={loading:!1,loaded:!1,errors:null,data:{}};function J(e){return e.reactors.loaded}var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return G({},e,{loading:!0});case Y:return G({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(r,!0).forEach(function(t){Object(h.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Q="PRODUCTIONS_LOAD_ACTION",ee="PRODUCTIONS_RECEIVE_ACTION";function te(e){var t=e.data,r=e.errors;return{type:ee,data:t,errors:r}}var re={loading:!1,loaded:!1,errors:null,data:{}};function ne(e){return e.productions.loaded}function ae(e,t){var r=t.productions.data[e].values;return r[r.length-1]}var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return $({},e,{loading:!0});case ee:return $({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(r,!0).forEach(function(t){Object(h.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var le="MIX_LOAD_ACTION",se="MIX_RECEIVE_ACTION";function ue(e){var t=e.data,r=e.errors;return{type:se,data:t,errors:r}}var pe={loading:!1,loaded:!1,errors:null,data:{}};function de(e){return e.mix.loaded}function me(e){return e.mix.data}var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return ce({},e,{loading:!0});case se:return ce({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}},fe=Object(p.combineReducers)({plants:H,reactors:K,productions:oe,mix:he}),be=[Object(p.applyMiddleware)(m.a)],ye=Object(d.composeWithDevTools)({}).apply(void 0,be),ge=Object(p.createStore)(fe,ye),Oe=(r(322),r(278)),ve=(r(144),r(87)),_e=(r(145),r(88)),we=(r(325),r(138)),Ee=(r(327),r(280)),xe=r(63),je=(r(581),r(279)),Pe=r(263),Ne=r(75),ke=r(183),Ie=r.n(ke),Re=(r(97),{hydroPumped:{label:"POMPAGE",color:"#114774",stackId:"2"},biomass:{label:"BIOENERG.",color:"#166a57"},wind:{label:"EOLIEN",color:"#74cdb9"},solar:{label:"SOLAIRE",color:"#f27406"},nuclear:{label:"NUCLEAIRE",color:"#f5b300"},hydro:{label:"HYDRAU.",color:"#2772b2"},gas:{label:"GAS",color:"#f30a0a"},coal:{label:"CHARBON",color:"#ac8c35"},oil:{label:"FIOUL",color:"#8356a2"},exports:{label:"EXPORTS",color:"#969696",stackId:"2"},imports:{label:"IMPORTS",color:"#969696"}}),Se=["hydroPumped","exports","biomass","wind","solar","nuclear","hydro","gas","coal","oil","imports"],Ae=["oil","coal","gas","hydro","nuclear","solar","wind","biomass","hydroPumped"];function Ce(e){return isNaN(e)?"-":"".concat(e)}var Le=Object(s.b)(function(e,t){return{mix:me(e)}})(Object(Pe.a)("slotIndex","setSlotIndex",function(){return Math.max(Math.floor(w()().diff(w()().startOf("day"),"minutes")/15)-2,0)})(function(e){var t=e.mix,r=e.slotIndex,n=e.setSlotIndex;return a.a.createElement("div",{className:"MixView"},a.a.createElement(ve.a,null,a.a.createElement(_e.a,{span:24},a.a.createElement("div",{className:"MixView__header"},Ae.map(function(e){return a.a.createElement("div",{key:e,className:"MixView__header__item",style:{backgroundColor:Re[e].color}},Ce(Math.abs(t[r][e])),a.a.createElement("span",{className:"MixView__header__item__small"}," MW"),a.a.createElement("br",null),a.a.createElement("span",{className:"MixView__header__item__small"},Re[e].label))}),a.a.createElement("div",{className:"MixView__header__item",style:{backgroundColor:Re.imports.color}},Ce(Math.max(t[r].imports,-t[r].exports)),a.a.createElement("span",{className:"MixView__header__item__small"}," MW"),a.a.createElement("br",null),a.a.createElement("span",{className:"MixView__header__item__small"},t[r].exports<0?Re.exports.label:Re.imports.label)),a.a.createElement("div",{className:"MixView__header__item"}),a.a.createElement("div",{className:"MixView__header__item",style:{backgroundColor:"black"}},Ce(t[r].consumption),a.a.createElement("span",{className:"MixView__header__item__small"}," MW"),a.a.createElement("br",null),a.a.createElement("span",{className:"MixView__header__item__small"},"CONSO"))),a.a.createElement("div",{className:"MixView_chart"},a.a.createElement(Ne.e,null,a.a.createElement(Ne.b,{data:t},a.a.createElement(Ne.f,{axisLine:!0,mirror:!0}),Se.map(function(e){return a.a.createElement(Ne.a,{key:e,dataKey:e,type:"monotone",activeDot:!1,stroke:"none",fill:Re[e].color,stackId:Re[e].stackId||"1"})}),a.a.createElement(Ne.c,{dataKey:"consumption",dot:!1,activeDot:!1,type:"monotone",stroke:"black"}),a.a.createElement(Ne.d,{x:r,stroke:"#4b4e52"})))),a.a.createElement("div",{className:"MixView__sliderContainer"},a.a.createElement(je.a,{min:0,max:95,style:{width:"100%"},defaultValue:r,onChange:Ie()(n,400),tooltipVisible:!0,tipFormatter:function(e){return w()().startOf("day").add(15*e,"minutes").format("HH:mm")}})))))})),Me=(r(564),r(281)),De=(r(580),r(194));r(97).ReactorType;var Ve=function(e){var t=e.reactor,r=Math.max(0,t.actualProd),n=Math.floor(r/t.power_MW*100);return a.a.createElement("div",{className:"ReactIndicator",style:{background:"linear-gradient(0deg, #26a65b 0%, #26a65b ".concat(n,"%, rgba(255,255,255,1) ").concat(n,"%)")}},a.a.createElement("strong",null,Math.floor(r)),a.a.createElement("br",null),a.a.createElement("strong",null,"MW"),a.a.createElement("div",{className:"ReactIndicator__number"},t.reactorIndex))};function qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var Te=Object(s.b)(function(e,t){var r=t.match.params.plantId,n=function(e,t){return Object.values(t.reactors.data).filter(function(t){return t.plantId===e})}(r,e).map(function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qe(r,!0).forEach(function(t){Object(h.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{actualProd:ae(t.eicCode,e).value})});return{plants:z(e),currentPlant:W(r,e),goTo:function(e){return t.history.push(e)},reactors:n}})(function(e){var t=e.plants,r=e.currentPlant,n=e.reactors,o=e.goTo;return a.a.createElement("div",{className:"PlantView"},a.a.createElement(ve.a,null,a.a.createElement(_e.a,{span:24},a.a.createElement("div",{className:"PlantView__firstRow"},a.a.createElement("div",{className:"PlantView__firstRow__left"},a.a.createElement(De.a,{value:r.id,onChange:function(e){return o("/plant/".concat(e))},style:{width:"9em"}},t.map(function(e){return a.a.createElement(De.a.Option,{key:e.id,value:e.id},e.name)})),a.a.createElement("span",null,a.a.createElement(Me.a,{style:{marginLeft:"8px"}},"SEA"===r.coolingType?"Mer":"Fleuve"))),a.a.createElement("div",{className:"PlantView__firstRow__right"},a.a.createElement("a",{href:r.wikiLink,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"PlantView__wiki",src:"wiki.svg",alt:"wiki"})),a.a.createElement("a",{href:r.asnLink,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"PlantView__asn",src:"logo-asn.png",alt:"asn"})))),a.a.createElement("div",{className:"PlantView__schema"},a.a.createElement("div",{className:"PlantView__reactors"},n.map(function(e){return a.a.createElement(Ve,{key:e.eicCode,reactor:e})})),a.a.createElement("div",{className:"PlantView__cooling",style:{width:50*n.length}},r.coolingPlace)))))}),ze=r(191),We=r(276),He=r(133),Fe=r(283),Ge=r(277),Ue=r(282),Ye=r(584),Be=r(587),Xe=function(e){function t(){return Object(We.a)(this,t),Object(Fe.a)(this,Object(Ge.a)(t).apply(this,arguments))}return Object(Ue.a)(t,e),Object(He.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.load)(Object(ze.a)(e,["load"]))}},{key:"componentDidUpdate",value:function(e){var t=Object(Ye.a)(["load"],e),r=this.props,n=r.load,a=Object(ze.a)(r,["load"]);Object(Be.a)(t,a)||n(a)}},{key:"render",value:function(){return null}}]),t}(n.Component);var Je=function(e){return Object(s.b)(null,{load:e})(Xe)};function Ke(e){var t=window.innerWidth;switch(e){case"xs":return t<576;case"sm":return t>=576;case"md":return t>=768;case"lg":return t>=992;case"xl":return t>=1200;case"xxl":return t>=1600;default:return!1}}var Ze=64,$e=400,Qe=r(588),et=r(590),tt=r(589),rt=r(585),nt=new l.a.DivIcon.SVGIcon({fillOpacity:1,iconSize:[24,38]}),at=new l.a.DivIcon.SVGIcon({color:"red",fillOpacity:1,iconSize:[24,38]});var ot=function(e){var t=e.plants,r=e.currentPlantId,n=e.onPlantClick,o=e.drawerHeight,i=!Ke("sm"),c=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}();return a.a.createElement(Qe.a,{center:[48.3,2],zoom:i?5:6,style:{height:i?c-Ze-o:c,marginTop:i?Ze+o:0,marginLeft:i?0:$e},zoomControl:!1},a.a.createElement(et.a,{position:"bottomright"}),a.a.createElement(tt.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t.map(function(e){return a.a.createElement(rt.a,{key:e.id,title:e.name,position:e.coords,icon:e.id===r?at:nt,onClick:function(){return n(e)}})}))},it=Je(function(){return function(e){return e({type:M}),function(){return P.apply(this,arguments)}().then(function(t){return e(V({data:Object(f.a)(Object(b.a)("id"),t)}))}).catch(function(t){return console.error(t)&&e(V({errors:t}))})}}),ct=Je(function(){return function(e){return e({type:U}),function(){return N.apply(this,arguments)}().then(function(t){return e(B({data:Object(f.a)(Object(b.a)("eicCode"),t)}))}).catch(function(t){return console.error(t)&&e(B({errors:t}))})}}),lt=Je(function(){return function(e){return e({type:Q}),function(){return k.apply(this,arguments)}().then(function(t){return e(te({data:Object(f.a)(Object(b.a)("eicCode"),t)}))}).catch(function(t){return console.error(t)&&e(te({errors:t}))})}}),st=Je(function(){return function(e){return e({type:le}),function(){return S.apply(this,arguments)}().then(function(t){return e(ue({data:t}))}).catch(function(t){return console.error(t)&&e(ue({errors:t}))})}});function ut(e){var t=e.isLoaded,r=e.plants,n=e.goTo,o=e.currentPlantId,i=!Ke("sm"),c="mix"===o?310:200;return a.a.createElement("div",{className:"AppLayout"},a.a.createElement(it,null),a.a.createElement(ct,null),a.a.createElement(lt,null),a.a.createElement(st,null),a.a.createElement(Oe.a,{size:"large",spinning:!t,indicator:a.a.createElement("div",null,a.a.createElement("img",{className:"AppLayout__loadingIcon",src:"loading_icon.svg",alt:""}))},!t&&a.a.createElement("div",{className:"AppLayout__splash"}),t&&a.a.createElement(we.a,null,a.a.createElement(Ee.a,{title:i?null:a.a.createElement(u.b,{to:"/"},"Nuclear monitor"),visible:!0,placement:i?"top":"left",style:{marginTop:i?Ze:0},mask:!1,closable:!1,width:$e,height:c,bodyStyle:{padding:0}},a.a.createElement(xe.d,null,a.a.createElement(xe.b,{path:"/mix",exact:!0,component:Le}),a.a.createElement(xe.b,{path:"/plant/:plantId",exact:!0,component:Te}),a.a.createElement(xe.b,{component:function(){return a.a.createElement(xe.a,{to:{pathname:"/mix"}})}}))),a.a.createElement(ve.a,null,a.a.createElement(_e.a,{span:24},i&&a.a.createElement(we.a.Header,{className:"AppLayout__header"},a.a.createElement(u.b,{to:"/mix"},a.a.createElement("strong",null,"Nuclear monitor"))),a.a.createElement(we.a.Content,{className:"AppLayout__content"},a.a.createElement(ot,{plants:r,currentPlantId:o,onPlantClick:function(e){return n("/plant/".concat(e.id))},drawerHeight:c})))))))}ut.defaultProps={currentPlantId:null};var pt=Object(xe.g)(Object(s.b)(function(e,t){return{isLoaded:T(e)&&J(e)&&ne(e)&&de(e),plants:z(e),goTo:function(e){return t.history.push(e)},currentPlantId:t.location.pathname.split("/").pop()}})(ut));var dt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,{store:ge},a.a.createElement(u.a,null,a.a.createElement(pt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,r){"use strict";r.r(t),r.d(t,"PlantType",function(){return o}),r.d(t,"ReactorType",function(){return i}),r.d(t,"MixType",function(){return c});var n=r(0),a=r.n(n),o=a.a.shape({id:a.a.string.isRequired,name:a.a.string.isRequired,coords:a.a.arrayOf(a.a.number).isRequired,coolingType:a.a.string.isRequired,coolingPlace:a.a.string.isRequired,hasCoolingTower:a.a.bool.isRequired,wikiLink:a.a.string.isRequired,asnLink:a.a.string.isRequired}),i=a.a.shape({eicCode:a.a.string.isRequired,plantId:a.a.string.isRequired,reactorIndex:a.a.number.isRequired,name:a.a.string.isRequired,stage:a.a.string.isRequired,power_MW:a.a.number.isRequired,buildStartYear:a.a.number.isRequired,gridLinkYear:a.a.number.isRequired,exploitationStartYear:a.a.number.isRequired,actualProd:a.a.number.isRequired}),c=a.a.shape({isOk:a.a.bool.isRequired,datetime:a.a.number.isRequired,wind:a.a.number.isRequired,solar:a.a.number.isRequired,nuclear:a.a.number.isRequired,gas:a.a.number.isRequired,oil:a.a.number.isRequired,coal:a.a.number.isRequired,consumption:a.a.number.isRequired,biomass:a.a.number.isRequired,hydroPumped:a.a.number.isRequired,hydro:a.a.number.isRequired,imports:a.a.number.isRequired,exports:a.a.number.isRequired})}},[[307,1,2]]]);
//# sourceMappingURL=main.ff0da51a.chunk.js.map