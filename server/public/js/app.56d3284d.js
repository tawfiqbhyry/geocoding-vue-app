(function(){"use strict";var e={1409:function(e,t,o){var l=o(9242),r=o(3396);function n(e,t){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o)}var s=o(89);const a={},c=(0,s.Z)(a,[["render",n]]);var i=c,u=o(2483),d=o(7139);const p={class:"home h-screen relative"},m=(0,r._)("div",{id:"map",class:"h-full z-[1]"},null,-1);function v(e,t,o,l,n,s){const a=(0,r.up)("GeoErrorModal"),c=(0,r.up)("MapFeatures");return(0,r.wg)(),(0,r.iD)("div",p,[m,l.Error?((0,r.wg)(),(0,r.j4)(r.lR,{key:0,to:"body"},[(0,r.Wm)(a,{onClose:t[1]||(t[1]=e=>l.Error=!1)},{body:(0,r.w5)((()=>[(0,r._)("p",null,(0,d.zw)(l.ErrorMessage),1),(0,r._)("button",{class:"mx-auto px-4 py-2 mt-5 bg-red-500 text-white rounded-lg",onClick:t[0]||(t[0]=e=>l.Error=!1)}," close ")])),_:1})])):(0,r.kq)("",!0),(0,r.Wm)(c,{cords:l.cords,fetchCords:l.fetchCords,searchResult:l.searchResults,onTrackLocation:t[2]||(t[2]=e=>l.getGeoLocation()),onSelectPlace:l.selectPlace,onToggle:l.toggleSearchResults,onRemovePlace:l.RemovePlace},null,8,["cords","fetchCords","searchResult","onSelectPlace","onToggle","onRemovePlace"])])}var f=o(3153),h=o.n(f),g=o(4870);const w={class:"mx-auto absolute inset-0 login-element",style:{width:"500px"}},x={class:"flex h-full"},y={class:"z-30 m-auto bg-white p-2 shadow w-5/6 main-header rounded-lg"},b={class:"p-2 w-full h-full"};function _(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",{onClick:t[0]||(t[0]=e=>l.close()),class:"z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"}),(0,r._)("div",w,[(0,r._)("div",x,[(0,r._)("div",y,[(0,r._)("div",b,[(0,r.WI)(e.$slots,"body")])])])])],64)}var k={setup(e,{emit:t}){function o(){t("close")}return{close:o}}};const R=(0,s.Z)(k,[["render",_]]);var C=R;const j={class:"w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4px-6 max-w-full py-8 md:px-0 md:py-0 bg-transparent"},z={class:"relative flex-1 md:min-w-[350px]"},O=(0,r._)("div",{class:"absolute top-0 h-full flex items-center left-[8px] hover:translate-x-2 hover:transition-all"},[(0,r._)("i",{class:"fas fa-search"})],-1),M={class:"w-full absolute mt-[60px]"},S={key:0,class:"w-full"},P={key:0,class:"overflow-scroll section h-[200px] bg-white rounded-md"},H=["onClick"],I={class:"flex items-center gap-x-2 justify-between"},D=(0,r._)("i",{class:"fas fa-map-marker-alt"},null,-1),E={key:1,class:"overflow-scroll section h-[200px] bg-white rounded-md"},T={key:1,class:"bg-white rounded-md py-2 px-4 mt-[15px] w-full"},W={class:"text-lg"},Z={class:"text-xs mb-1"},L={class:"text-xs"};function V(e,t,o,n,s,a){const c=(0,r.up)("AnimationComponent");return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("div",z,[(0,r.wy)((0,r._)("input",{type:"text",name:"location",class:"pl-9 pr-4 py-3 text-sm focus:outline-none w-full shadow-md rounded-md",onInput:t[0]||(t[0]=(...e)=>n.search&&n.search(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.searchQuery=e),onFocus:t[2]||(t[2]=t=>e.$emit("toggle")),placeholder:"Enter your search:"},null,544),[[l.nr,n.searchQuery]]),O]),(0,r._)("div",{class:(0,d.C_)(["px-4 bg-white rounded-md shadow-md flex items-center min-h-[45px] hover:cursor-pointer hover:transition-all-[300ms] hover:scale-110",{"bg-slate-600":o.cords}]),onClick:t[3]||(t[3]=t=>e.$emit("TrackLocation"))},[(0,r._)("i",{class:(0,d.C_)(["fa fa-location-arrow text-state-600 text-[18px]",{"text-white":o.cords,"animate-pulse":o.fetchCords}])},null,2)],2),(0,r._)("div",M,[n.searchQuery&&o.searchResult?((0,r.wg)(),(0,r.iD)("div",S,[n.searchResults.length>0?((0,r.wg)(),(0,r.iD)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.searchResults,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"px-4 py-2 flex gap-x-2 cursor-pointer justify-between items-center hover:bg-slate-600 hover:text-white",key:e,onClick:t=>n.plotResult(e)},[(0,r._)("div",I,[(0,r._)("p",null,(0,d.zw)(t+1),1),D]),(0,r._)("p",null,(0,d.zw)(e.place_name_en),1)],8,H)))),128))])):((0,r.wg)(),(0,r.iD)("div",E,[(0,r.Wm)(c)]))])):(0,r.kq)("",!0),n.selectedResult?((0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("i",{onClick:t[4]||(t[4]=(...e)=>n.removeResult&&n.removeResult(...e)),class:"fas fa-times-circle flex justify-end"}),(0,r._)("h1",W,(0,d.zw)(n.selectedResult.text),1),(0,r._)("p",Z,(0,d.zw)(n.selectedResult.properties.address)+", "+(0,d.zw)(n.selectedResult.city)+", "+(0,d.zw)(n.selectedResult.state),1),(0,r._)("p",L,(0,d.zw)(n.selectedResult.properties.category),1)])):(0,r.kq)("",!0)])])}var q=o(6265),A=o.n(q);const G={class:"w-full h-full flex items-center justify-center"},J=(0,r._)("span",{class:"block border-solid border-transparent border-t-black rounded-full animate-spin w-[60px] h-[60px] border-[5px]"},null,-1),B=[J];function Y(e,t,o,l,n,s){return(0,r.wg)(),(0,r.iD)("div",G,B)}var $={name:"AnimationComponent"};const F=(0,s.Z)($,[["render",Y]]);var N=F,Q={setup(e,{emit:t}){const o=(0,g.iH)(null),l=(0,g.iH)([]),r=(0,g.iH)(null),n=(0,g.iH)(null),s=()=>{r.value&&clearTimeout(r.value),l.value=[],r.value=setTimeout((async()=>{if(""!=o.value){const t=new URLSearchParams({fuzzyMatch:!0,language:"en",limit:10,proximity:e.cords?`${e.cords.lng},${e.cords.lat}`:"0,0"});A().get(`api/search/${o.value}?${t}`).then((e=>{l.value=e.data.features}))}}),750)},a=e=>{n.value=e,console.log(e),t("SelectPlace",e.geometry)},c=()=>{n.value=null,t("RemovePlace")};return{searchQuery:o,searchResults:l,queryTimeout:r,search:s,removeResult:c,plotResult:a,selectedResult:n}},props:{cords:{type:Object,default:null},fetchCords:{type:Boolean,default:!1},searchResult:{type:Boolean,default:!1}},components:{AnimationComponent:N}};const U=(0,s.Z)(Q,[["render",V]]);var K=U,X={setup(){let e;(0,r.bv)((()=>{e=h().map("map").setView([31.4078749,31.8379464],10),h().tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGF3ZmlxYiIsImEiOiJjbDczYmNvMWMxNjBjM3BzOW5qZ2w4cm16In0.C-5KqjHJ__QP9GhVk7WV0g",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,access_token:"pk.eyJ1IjoidGF3ZmlxYiIsImEiOiJjbDczYmNvMWMxNjBjM3BzOW5qZ2w4cm16In0.C-5KqjHJ__QP9GhVk7WV0g"}).addTo(e),e.on("moveend",(()=>{w()})),s()}));const t=(0,g.iH)(null),l=(0,g.iH)(null),n=(0,g.iH)(null),s=()=>t.value?(t.value=null,sessionStorage.removeItem("cords"),void e.removeLayer(n.value)):sessionStorage.getItem("cords")?(t.value=JSON.parse(sessionStorage.getItem("cords")),void u(t.value)):(l.value=!0,void navigator.geolocation.getCurrentPosition(i,d)),a=(0,g.iH)(null),c=(0,g.iH)(null),i=e=>{l.value=null;const o={lat:e.coords.latitude,lng:e.coords.longitude};sessionStorage.setItem("cords",JSON.stringify(o)),t.value=o,u(t.value)},u=t=>{const l=h().icon({iconUrl:o(2929),iconSize:[40,40],iconAnchor:[25,50],popupAnchor:[0,-50]});n.value=h().marker([t.lat,t.lng],{icon:l}).addTo(e),e.setView([t.lat,t.lng],15)},d=e=>{a.value=!0,c.value=e.message,l.value=null},p=(0,g.iH)(null),m=t=>{p.value&&e.removeLayer(p.value);const l=h().icon({iconUrl:o(3266),iconSize:[40,40],iconAnchor:[25,50],popupAnchor:[0,-50]});p.value=h().marker([t.coordinates[1],t.coordinates[0]],{icon:l}).addTo(e),e.setView([t.coordinates[1],t.coordinates[0]],15),w()},v=(0,g.iH)(null),f=()=>{v.value=!v.value},w=()=>{v.value=null},x=()=>{e.removeLayer(p.value),p.value=null};return{Error:a,ErrorMessage:c,cords:t,selectPlace:m,fetchCords:l,RemovePlace:x,geoMarker:n,getGeoLocation:s,searchResults:v,toggleSearchResults:f,closeSearchResults:w}},name:"HomeView",components:{GeoErrorModal:C,MapFeatures:K}};const ee=(0,s.Z)(X,[["render",v]]);var te=ee;const oe=[{path:"/",name:"home",component:te}],le=(0,u.p7)({history:(0,u.PO)("/"),routes:oe});var re=le;(0,l.ri)(i).use(re).mount("#app")},2929:function(e,t,o){e.exports=o.p+"img/map-marker-blue.48a8e449.svg"},3266:function(e,t,o){e.exports=o.p+"img/map-marker-red.d479dee5.svg"}},t={};function o(l){var r=t[l];if(void 0!==r)return r.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,l,r,n){if(!l){var s=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],n=e[u][2];for(var a=!0,c=0;c<l.length;c++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](l[c])}))?l.splice(c--,1):(a=!1,n<s&&(s=n));if(a){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,n,s=l[0],a=l[1],c=l[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(l);i<s.length;i++)n=s[i],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},l=self["webpackChunkclient"]=self["webpackChunkclient"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(1409)}));l=o.O(l)})();
//# sourceMappingURL=app.56d3284d.js.map