"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[675],{48101:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(85893),n=o(67294),r=o(34880);const l=o(6158);l.accessToken=r.c3;const a=({dragRotate:t,map:e,pitch:o,bearing:r,mapContainer:a,lng:s,lat:c,zoom:u,setLoad:d,style:p,height:g,dragControls:h=!0})=>((0,n.useEffect)((()=>{e.current||a&&(e.current=new l.Map({container:a.current,style:p,center:[s,c],pitch:o,bearing:r,zoom:u,antialias:!0,dragRotate:t}))}),[e,a]),(0,n.useEffect)((()=>{e.current&&(h&&(e.current.addControl(new l.FullscreenControl,"bottom-left"),e.current.addControl(new l.NavigationControl,"bottom-left")),e.current.on("move",(()=>{})),e.current.on("click",(t=>{console.log(t.lngLat)})),e.current.on("load",(()=>{e.current&&d(!0)})))}),[e]),(0,n.useEffect)((()=>{e.current&&e.current.setBearing(r)}),[r]),(0,i.jsx)("div",{ref:a,style:{flex:1,height:g||"100vh",width:"100%"},className:"map-container"}))},46259:(t,e,o)=>{o.r(e),o.d(e,{default:()=>j});var i,n=o(85893),r=o(67294),l=o(48101),a=o(34880),s=o(73855),c=o(26666),u=o(14125);!function(t){t.truck="truck",t.excavator="excavator"}(i||(i={}));const d=t=>t<=0||t<a.X9?0:t-a.X9,p=({load:t,tb:e,model:o})=>{const[l,p]=(0,r.useState)([]),{truckInfoList:g}=(0,s.C)(c.ej),{excavatorInfoList:h}=(0,s.C)(u.kW),f=[];return(0,r.useEffect)((()=>{f.length&&f.forEach((t=>{const n=!(!t||t.deviceAlias.includes("EX-")&&t.deviceAlias.includes("CF-")),r=l.findIndex((e=>e.id===t.deviceId)),s=`${a.$e}/public/obj/gltf/${n?"truck":"excavator"}.gltf`;if(-1===r){let r=null;r=n?o.truck?o.truck:null:o.excavator?o.excavator:null;const{sensor:a}=t;if(r&&a&&a.longitude&&a.latitude){const o=r.duplicate(),c={id:t.deviceId,model:o,unit:t,origin:[a.longitude,a.latitude,d(a.altitude)],path:s,type:n?i.truck:i.excavator};p((t=>-1===t.findIndex((t=>t.id===c.id))?(e.add(o),[...l,c]):t))}}}))}),[f,t,e,o]),(0,r.useEffect)((()=>{f.forEach((t=>{if(t&&t.sensor){const e=l.find((e=>e.id===t.deviceId));if(e){const{sensor:o}=t;e.model.setRotation({z:-o.direction}),e.model.setCoords([o.longitude,o.latitude,d(o.altitude)])}}}))}),[l,f]),(0,n.jsx)(n.Fragment,{})};var g=o(54150),h=o(35573);const f=(t,e,o)=>{let i=t.length;i%2!=0&&(t.push(t[i-1]),i++);const n=[];for(let r=0;r<i-1;r++){const i=[t[r],t[r+1]],l=t[r][3],s=o?0:l-a.X9-1,c=(0,g.f3b)((0,g.TuJ)(i,{building:"roof","building:height":"400",name:"Petrobras","building:levels":"","building:roof":"","building:use":"",base_height:s,color:e,height:o?l-a.X9-10:s,"building:min_level":"",min_height:"","roof:levels":""}),5,{units:"meters"});n.push(c)}return{type:"FeatureCollection",features:n}},y=({map:t,polygons_actives:e,loadMap:o})=>((0,r.useEffect)((()=>{if(t&&o&&e.length>0){const o={type:"FeatureCollection",features:e.map((t=>({type:"Feature",properties:{building:"roof","building:height":"400",name:"Petrobras","building:levels":"","building:roof":"","building:use":"",base_height:t.altitude-a.X9,height_proyection:t.altitude-a.X9-.5,color:h.O[t.color].hex,height:t.altitude-a.X9+a.Cn,opacity:1,"building:min_level":"",min_height:"","roof:levels":""},geometry:{type:"Polygon",coordinates:[t.pointList.map((t=>[t.longitude,t.latitude,t.altitude]))]}})))};t.addSource("polygons_3d_source",{type:"geojson",data:o}),t.addLayer({id:"polygons_3d_layer",type:"fill-extrusion",source:"polygons_3d_source",paint:{"fill-extrusion-color":{type:"identity",property:"color"},"fill-extrusion-height":{type:"identity",property:"height"},"fill-extrusion-opacity":1,"fill-extrusion-base":{type:"identity",property:"base_height"},"fill-extrusion-height-transition":{duration:1e4,delay:0},"fill-extrusion-vertical-gradient":!1}}),t.addLayer({id:"polygons_base_3d",type:"fill-extrusion",filter:["has","height"],source:"polygons_3d_source",paint:{"fill-extrusion-color":"rgb(189,94,0)","fill-extrusion-height":["get","height_proyection"],"fill-extrusion-opacity":.05,"fill-extrusion-vertical-gradient":!1}})}}),[t,e,o]),(0,n.jsx)(n.Fragment,{})),b=({map:t,id:e,color:o,points:i,opacity:l,loadMap:a,level:s,heigth:c,fromBase:u})=>((0,r.useEffect)((()=>{t&&a&&(t.addSource(e+"",{type:"geojson",data:f(i,s,c)}),t.addLayer({id:e+"",type:"fill-extrusion",filter:["has","height"],source:e,paint:{"fill-extrusion-color":{type:"identity",property:"color"},"fill-extrusion-height":{type:"identity",property:"height"},"fill-extrusion-opacity":l,"fill-extrusion-base":{type:"identity",property:"base_height"},"fill-extrusion-vertical-gradient":!0}}))}),[t,a]),(0,n.jsx)(n.Fragment,{}));var m=o(90694);o(4025);let x=[];const v=()=>{const t=(0,r.useRef)(null),e=(0,r.useRef)(null),[o,i]=(0,r.useState)(-78.2045567035675),[c,u]=(0,r.useState)(-7.617878602920846),[d,g]=(0,r.useState)(15),[f,v]=(0,r.useState)(),[w,j]=(0,r.useState)(!1),[L,_]=(0,r.useState)({truck:null,excavator:null}),{routeList:k,dmeCellList:C,padCellList:E,polygonList:F,stockCellList:z}=(0,s.C)(m.WD);return(0,r.useEffect)((()=>{if(w&&!e.current.getLayer("objects3D")&&!f){window.tb=new window.Threebox(e.current,e.current.getCanvas().getContext("webgl"),{defaultLights:!0});const t=new window.THREE.DirectionalLight("#000",1,100);t.position.set(0,0,100).normalize(),t.castShadow=!0,v(window.tb),e.current.addLayer({id:"objects3D",type:"custom",renderingMode:"3d",onAdd:function(t,e){return o=this,i=void 0,r=function*(){const t={obj:`${a.$e}/public/obj/gltf/truck02.gltf`,type:"gltf",scale:2,units:"meters",anchor:"center",adjustment:{x:0,y:0,z:0},rotation:{x:90,y:-90,z:0}},e={obj:`${a.$e}/public/obj/gltf/excavator.gltf`,type:"gltf",scale:2.5,units:"meters",anchor:"center",adjustment:{x:0,y:0,z:0},rotation:{x:90,y:80,z:0}};window.tb.loadObj(t,(function(t){window.tb.loadObj(e,(function(e){_({truck:t,excavator:e})}))}))},new((n=void 0)||(n=Promise))((function(t,e){function l(t){try{s(r.next(t))}catch(t){e(t)}}function a(t){try{s(r.throw(t))}catch(t){e(t)}}function s(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n((function(t){t(o)}))).then(l,a)}s((r=r.apply(o,i||[])).next())}));var o,i,n,r},render:function(t,e){window.tb.update()}})}}),[w,f]),(0,r.useEffect)((()=>{e.current&&f&&k.length>0&&k.map((t=>{const e=f.line({width:12,color:h.O[t.color].hex,opacity:1,geometry:t.pointList.map((t=>[t.longitude,t.latitude,t.altitude-a.X9]))});window.tb.add(e),x.push(e)}))}),[e,k,f]),(0,r.useEffect)((()=>{let t=0;t=d>13&&d<14?d/3:d>=14&&d<15?d/2:d>=15&&d<16?d:d>=16&&d<17?3*d:4*d,x.length>0&&x.length===k.length&&(x.forEach((t=>{window.tb.remove(t)})),x=[],t=Math.pow(2,d-12),k.map((e=>{const o=window.tb.line({width:t,color:e.color,opacity:1,geometry:e.pointList.map((t=>[t.longitude,t.latitude,t.altitude]))});window.tb.add(o),x.push(o)})))}),[d]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,Object.assign({map:e,dragRotate:!0,style:"mapbox://styles/dispatchgat/ckqqsfc2y46bo17sf1y29zwnj",mapContainer:t,bearing:0,pitch:25},{lat:c,lng:o,zoom:d,setLat:u,setLng:i,setZoom:g,setLoad:j})),(0,n.jsx)(y,{map:e.current,polygons_actives:F,loadMap:w}),k.map(((t,o)=>(0,n.jsx)(r.Fragment,{children:t.pointList&&t.pointList.length>0&&(0,n.jsx)(b,{points:t.pointList.map((t=>[t.latitude,t.longitude,t.altitude])),color:h.O[t.color].hex,id:`base_route${o}`,loadMap:w,map:e.current,opacity:.1,level:0,fromBase:!0,heigth:t.pointList.map((t=>[t.latitude,t.longitude,t.altitude]))[0][2]-a.X9-10})},o))),L.truck&&(0,n.jsx)(p,{keyLayer:"layerTrucks",map:e.current,load:w,scale:.5,tb:window.tb,model:L}),L.truck&&(0,n.jsx)(p,{keyLayer:"layerExcavator",map:e.current,load:w,scale:.5,tb:window.tb,model:L})]})},w=()=>(0,n.jsx)("div",Object.assign({style:{display:"flex",justifyContent:"space-between",height:"100vh"}},{children:(0,n.jsx)(v,{})})),j=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(w,{})})}}]);