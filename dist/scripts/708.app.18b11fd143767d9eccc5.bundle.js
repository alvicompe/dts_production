(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[708],{2499:(e,t,o)=>{e.exports=o.p+"1e3ed9ad1c8b76c4f73b1017e93702f8.png"},7126:(e,t,o)=>{e.exports=o.p+"89f059a2790e391b484a369a3b9f92fb.png"},5413:(e,t,o)=>{e.exports=o.p+"f7bda309f804ba7abdd57c3272cae75b.svg"},6046:(e,t,o)=>{e.exports=o.p+"6349bce6aa562fa9a965484651c725c9.svg"},9091:(e,t,o)=>{e.exports=o.p+"20557549695e4a02b8f5e299c9687642.png"},3534:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(5893),i=o(7294),s=o(4880);const r=o(6158);r.accessToken=s.c3;const n=({dragRotate:e,map:t,pitch:o,bearing:s,mapContainer:n,lng:c,lat:l,zoom:d,setLng:u,setLat:p,setZoom:g,setLoad:y,style:v})=>((0,i.useEffect)((()=>{console.log("map.current",t.current,s),t.current||(n&&(t.current=new r.Map({container:n.current,style:v,center:[c,l],pitch:o,bearing:s,zoom:d,maxBounds:[[-78.2747922,-7.6626779],[-78.1305246,-7.5534415]],antialias:!0,dragRotate:e})),console.log("inianco"))}),[t,n]),(0,i.useEffect)((()=>{t.current&&(t.current.addControl(new r.FullscreenControl,"bottom-left"),t.current.addControl(new r.NavigationControl,"bottom-left"),t.current.on("move",(()=>{t.current&&g(t.current.getZoom().toFixed(2))})),t.current.on("load",(()=>{y(!0)})))}),[t]),(0,i.useEffect)((()=>{t.current&&t.current.setBearing(s)}),[s]),(0,a.jsx)("div",{ref:n,style:{flex:1,height:"100vh",width:"100%"},className:"map-container"},void 0))},7211:(e,t,o)=>{"use strict";o.d(t,{X:()=>n});var a=o(4880),i=o(3040),s=o(6034);const r=new class{constructor(e,t,o){this.methodInfoCreateExcavator=new i.AbstractClientBase.MethodInfo(s.ExcavatorResponse,(e=>e.serializeBinary()),s.ExcavatorResponse.deserializeBinary),this.methodInfoRetrieveExcavator=new i.AbstractClientBase.MethodInfo(s.ExcavatorResponse,(e=>e.serializeBinary()),s.ExcavatorResponse.deserializeBinary),this.methodInfoRetrieveExcavators=new i.AbstractClientBase.MethodInfo(s.ExcavatorsResponse,(e=>e.serializeBinary()),s.ExcavatorsResponse.deserializeBinary),this.methodInfoUpdateExcavator=new i.AbstractClientBase.MethodInfo(s.ExcavatorResponse,(e=>e.serializeBinary()),s.ExcavatorResponse.deserializeBinary),this.methodInfoDeleteExcavator=new i.AbstractClientBase.MethodInfo(s.ExcavatorResponse,(e=>e.serializeBinary()),s.ExcavatorResponse.deserializeBinary),o||(o={}),t||(t={}),o.format="text",this.client_=new i.GrpcWebClientBase(o),this.hostname_=e,this.credentials_=t,this.options_=o}createExcavator(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.ExcavatorService/CreateExcavator",e,t||{},this.methodInfoCreateExcavator,o):this.client_.unaryCall(this.hostname_+"/pb.ExcavatorService/CreateExcavator",e,t||{},this.methodInfoCreateExcavator)}retrieveExcavator(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.ExcavatorService/RetrieveExcavator",e,t||{},this.methodInfoRetrieveExcavator,o):this.client_.unaryCall(this.hostname_+"/pb.ExcavatorService/RetrieveExcavator",e,t||{},this.methodInfoRetrieveExcavator)}retrieveExcavators(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.ExcavatorService/RetrieveExcavators",e,t||{},this.methodInfoRetrieveExcavators,o):this.client_.unaryCall(this.hostname_+"/pb.ExcavatorService/RetrieveExcavators",e,t||{},this.methodInfoRetrieveExcavators)}updateExcavator(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.ExcavatorService/UpdateExcavator",e,t||{},this.methodInfoUpdateExcavator,o):this.client_.unaryCall(this.hostname_+"/pb.ExcavatorService/UpdateExcavator",e,t||{},this.methodInfoUpdateExcavator)}deleteExcavator(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.ExcavatorService/DeleteExcavator",e,t||{},this.methodInfoDeleteExcavator,o):this.client_.unaryCall(this.hostname_+"/pb.ExcavatorService/DeleteExcavator",e,t||{},this.methodInfoDeleteExcavator)}}(`${a.$s}:${a.Vs}`,null,null),n=()=>{const e={authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzODk4MDUsInVzZXJuYW1lIjoiZGlzcGF0Y2hlciIsInJvbGUiOiJESVMifQ.IIKVGiv1ve4AST9EdQ1XjujDWDG3qCHzF57knK7A1Y8"},t=new s.Excavator,o=new s.ExcavatorRequest;return o.setExcavator(t),new Promise(((t,a)=>{r.retrieveExcavators(o,e,((e,o)=>{if(e)console.log("error message excavators get",e.message),a(e);else{console.log("excavators",o);const e=o.toObject();t(e.excavatorsList?e.excavatorsList:[])}}))}))}},7816:(e,t,o)=>{"use strict";o.d(t,{r:()=>l});var a=o(4880),i=o(3040),s=o(3779);const r=new class{constructor(e,t,o){this.methodInfoCreateTruck=new i.AbstractClientBase.MethodInfo(s.TruckResponse,(e=>e.serializeBinary()),s.TruckResponse.deserializeBinary),this.methodInfoRetrieveTruck=new i.AbstractClientBase.MethodInfo(s.TruckResponse,(e=>e.serializeBinary()),s.TruckResponse.deserializeBinary),this.methodInfoRetrieveTrucks=new i.AbstractClientBase.MethodInfo(s.TrucksResponse,(e=>e.serializeBinary()),s.TrucksResponse.deserializeBinary),this.methodInfoUpdateTruck=new i.AbstractClientBase.MethodInfo(s.TruckResponse,(e=>e.serializeBinary()),s.TruckResponse.deserializeBinary),this.methodInfoDeleteTruck=new i.AbstractClientBase.MethodInfo(s.TruckResponse,(e=>e.serializeBinary()),s.TruckResponse.deserializeBinary),o||(o={}),t||(t={}),o.format="text",this.client_=new i.GrpcWebClientBase(o),this.hostname_=e,this.credentials_=t,this.options_=o}createTruck(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.TruckService/CreateTruck",e,t||{},this.methodInfoCreateTruck,o):this.client_.unaryCall(this.hostname_+"/pb.TruckService/CreateTruck",e,t||{},this.methodInfoCreateTruck)}retrieveTruck(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.TruckService/RetrieveTruck",e,t||{},this.methodInfoRetrieveTruck,o):this.client_.unaryCall(this.hostname_+"/pb.TruckService/RetrieveTruck",e,t||{},this.methodInfoRetrieveTruck)}retrieveTrucks(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.TruckService/RetrieveTrucks",e,t||{},this.methodInfoRetrieveTrucks,o):this.client_.unaryCall(this.hostname_+"/pb.TruckService/RetrieveTrucks",e,t||{},this.methodInfoRetrieveTrucks)}updateTruck(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.TruckService/UpdateTruck",e,t||{},this.methodInfoUpdateTruck,o):this.client_.unaryCall(this.hostname_+"/pb.TruckService/UpdateTruck",e,t||{},this.methodInfoUpdateTruck)}deleteTruck(e,t,o){return void 0!==o?this.client_.rpcCall(this.hostname_+"/pb.TruckService/DeleteTruck",e,t||{},this.methodInfoDeleteTruck,o):this.client_.unaryCall(this.hostname_+"/pb.TruckService/DeleteTruck",e,t||{},this.methodInfoDeleteTruck)}}(`${a.$s}:${a.Vs}`,null,null),n=new s.Truck,c=new s.TruckRequest,l=()=>{const e={authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzODk4MDUsInVzZXJuYW1lIjoiZGlzcGF0Y2hlciIsInJvbGUiOiJESVMifQ.IIKVGiv1ve4AST9EdQ1XjujDWDG3qCHzF57knK7A1Y8"};return c.setTruck(n),new Promise(((t,o)=>{r.retrieveTrucks(c,e,((e,a)=>{if(e)console.log("error message trucks get",e.message),500===e.code?t([]):o(e);else{const e=a.toObject();t(e.trucksList?e.trucksList:[])}}))}))}},2708:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ce});var a=o(5893),i=o(868),s=o(1749),r=o(7294),n=o(3534),c=o(8548),l=o(7348);const d=({data:e,map:t,pin:o,setSelectExcavator:i,setSelectTruck:s})=>{const{deviceId:n,sensor:c,deviceAlias:d,id:u}=e,{latitude:p,longitude:g,direction:y}=c,v=t.getSource(n),m={geometry:{type:"Point",coordinates:[g,p]},type:"Feature",properties:{rotate:y-360,pin:o&&o.deviceId===e.deviceId}},h=!`${d}`.includes("EX-"),_=`${d}`.includes("CM-");return(0,r.useEffect)((()=>{if(`${d}`.includes("EX-")){const e=`excavator_feature_${n}`,o={type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{geometry:{type:"Point",coordinates:[g,p]},type:"Feature",properties:{}}]};t.getSource(e)?t.getSource(e).setData(o):t.addSource(e,{type:"geojson",cluster:!0,data:(0,l._X)([g,p])}),t.getLayer(e)||t.addLayer({id:e,type:"circle",source:e,paint:{"circle-color":"Red","circle-radius":10,"circle-stroke-width":25,"circle-stroke-color":"rgba(0, 128, 157,0.54)"}})}}),[c]),(0,r.useEffect)((()=>{if(v){if(v._data&&v._data.geometry&&Array.isArray(v._data.geometry.coordinates)){m.geometry.coordinates=[g,p],v.setData(m);const e=`${n}_pin_point`,o=t.getSource(e);if(o){const e=(0,l.X3)([g,p]);o.setData(e)}}}else t.getSource(n)||(t.addSource(`${n}`,{type:"geojson",data:m}),t.addLayer({id:`${n}`,type:"symbol",source:`${n}`,layout:{"icon-image":_?"pickup_nav":h?"truck_nav":"excavator_nav","icon-size":.08,"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-rotate":["get","rotate"]}}),t.on("click",`${n}`,(function(t){e.deviceAlias.includes("EX")?(i(void 0),setTimeout((()=>{i(e)}),500)):(s(void 0),setTimeout((()=>{s(e)}),500))})),t.on("mouseenter",`${n}`,(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave",`${n}`,(function(){t.getCanvas().style.cursor=""})))}),[e.sensor.latitude,e.sensor.longitude,e.sensor.direction]),(0,a.jsx)(a.Fragment,{},void 0)};var u=o(3658);const p=({map:e,id:t,color:o,points:i,opacity:s,direction:n,iconImage:c})=>{const d={type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{geometry:{type:"Point",coordinates:i},type:"Feature",properties:{}}]};return(0,r.useEffect)((()=>{const a=`${t}_point`,s=e.getSource(a);if(e&&!s)e.getSource(t)&&(e.removeLayer(t+""),e.removeSource(t+"")),setTimeout((()=>{const s={geometry:{type:"Point",coordinates:i},type:"Feature",properties:{rotate:n-360,fuel1:"Hydro"}};e.getSource(a)||e.addSource(a,{type:"geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50,data:(0,l._X)(i)}),e.getLayer(a)||e.addLayer({id:a,type:"circle",source:a,filter:["!has","point_count"],paint:{"circle-color":o,"circle-radius":20,"circle-stroke-width":15,"circle-stroke-color":"rgba(243, 93, 93, .4)"}}),e.getSource(t)||e.addSource(t+"",{type:"geojson",data:s}),e.getLayer(t)||e.addLayer({id:t+"",type:"symbol",source:t+"",layout:{"icon-image":c,"icon-size":.08,"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-rotate":["get","rotate"]}})}),1e3);else if(s._data&&s._data.features[0].geometry&&Array.isArray(s._data.features[0].geometry.coordinates)){const e=s._data.features[0].geometry.coordinates,t=i,o=(0,u.TuJ)([e,t]),a=Math.floor((0,u.kE)(o,{units:"meters"})),n=[];for(var r=0;r<a;r++){const e=(0,u.$1t)(o,r,{units:"meters"});n.push(e.geometry.coordinates)}s.setData(d)}return()=>{}}),[e,i]),(0,a.jsx)(a.Fragment,{},void 0)},g=(e,t,o)=>{e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:JSON.parse(o)}}})},y=(e,t,o)=>{e.addLayer({id:t,type:"line",source:o,layout:{visibility:"visible"},paint:{"line-color":"#C6FF00","line-width":4}})},v=({map:e,padCells:t,stockCells:o,dmeCells:i,polygons:s,polygons_actives:n,geofences:c,routes:l,setIsPaintPolygons:d,curves:p,setFeatureSelected:v})=>{(0,r.useEffect)((()=>{if(e&&n.length>0){const t=[],o=n.map((e=>{var o,a;const{latitude:i,longitude:s}=e.centroid;return t.push({type:"Feature",geometry:{type:"Point",coordinates:[s,i]},properties:{name:`${e.name}${e.material?`-${e.material.type}`:""}`,name_polygon:e.name,name_material:null===(o=e.material)||void 0===o?void 0:o.type,points_polygonTajo:e.points,id_polygonTajo:e.id,agTajo:e.ag,agcnTajo:e.agcn,aliasTajo:e.alias,alteTajo:e.alte,asTajo:e.as,auTajo:e.au,auchTajo:e.auch,centroidTajo:e.centroid,color:e.color,altitudeTajo:e.altitude,descripcionTajo:e.descripcion,heightTajo:e.height,litoTajo:e.lito,materialTajo:null===(a=e.material)||void 0===a?void 0:a.type,namePolTajo:e.name,nameProjectTajo:e.nameProject,onzasTajo:e.onzas,orezonetTajo:e.orezonet,ptaucnTajo:e.ptaucn,sTajo:e.s,tonnesTajo:e.tonnes,volumeTajo:e.volume}}),{type:"Feature",properties:{color:e.color,out_color:"blue",opacity:1,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}}}));e.getSource("polygons_actives_2d")||e.addSource("polygons_actives_2d",{type:"geojson",data:{type:"FeatureCollection",features:o}}),e.getSource("centroid_actives")||e.addSource("centroid_actives",{type:"geojson",data:{type:"FeatureCollection",features:t}}),setTimeout((()=>{e.getLayer("polygons_actives_2d_layer")||e.addLayer({id:"polygons_actives_2d_layer",type:"fill",source:"polygons_actives_2d",layout:{},paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":1}}),e.getLayer("polygons_lineborder_actives_2d_layer")||e.addLayer({id:"polygons_lineborder_actives_2d_layer",type:"line",source:"polygons_actives_2d",paint:{"line-color":["get","out_color"],"line-width":2,"line-opacity":1},filter:["==","$type","Polygon"]}),e.getLayer("centroid_plygons_actives_layer")||e.addLayer({id:"centroid_plygons_actives_layer",type:"symbol",source:"centroid_actives",layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})}),200),e.on("click","centroid_plygons_actives_layer",(function(t){const{points_polygonTajo:o,id_polygonTajo:a,agTajo:i,agcnTajo:s,aliasTajo:r,alteTajo:n,asTajo:c,auTajo:l,auchTajo:d,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:h,heightTajo:_,litoTajo:j,materialTajo:f,namePolTajo:x,nameProjectTajo:b,onzasTajo:S,orezonetTajo:T,ptaucnTajo:k,sTajo:I,tonnesTajo:E,volumeTajo:C}=t.features[0].properties,O=`source_polygon_select_${a}`,Z=`layer_polygon_select_${a}`;e.getLayer(Z)||(g(e,O,o),y(e,Z,O)),v({type:"tajo",idLayerTajo:Z,idSourceTajo:O,points_polygonTajo:o,id_polygonTajo:a,agTajo:i,agcnTajo:s,aliasTajo:r,alteTajo:n,asTajo:c,auTajo:l,auchTajo:d,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:h,heightTajo:_,litoTajo:j,materialTajo:f,namePolTajo:x,nameProjectTajo:b,onzasTajo:S,orezonetTajo:T,ptaucnTajo:k,sTajo:I,tonnesTajo:E,volumeTajo:C})}))}}),[e,n]),(0,r.useEffect)((()=>{if(s.length>0&&l.length>0){const t=[],o=[];s.forEach((e=>{const{latitude:a,longitude:i}=e.centroid;o.push({type:"Feature",geometry:{type:"Point",coordinates:[i,a]},properties:{name:`${e.name}${e.material?`-${e.material.type}`:" "}`}}),t.push({type:"Feature",properties:{color:"orange",out_color:"grey",opacity:.1,name:e.name,opacity_border:0},geometry:{type:"Polygon",coordinates:[e.points]}})})),l.forEach((e=>{t.push({type:"Feature",properties:{color:e.color,out_color:"red",opacity:.9,opacity_border:0},geometry:{type:"LineString",coordinates:e.points}})})),e.getSource("polygons_routes_2d")||e.addSource("polygons_routes_2d",{type:"geojson",data:{type:"FeatureCollection",features:t}}),e.getLayer("polygons_2d_layer")||e.addLayer({id:"polygons_2d_layer",type:"fill",source:"polygons_routes_2d",layout:{},paint:{"fill-color":["get","color"],"fill-opacity":["get","opacity"]},filter:["==","$type","Polygon"]}),e.getSource("centroid_no_actives")||e.addSource("centroid_no_actives",{type:"geojson",data:{type:"FeatureCollection",features:o}}),setTimeout((()=>{e.getLayer("routes_2d_layer")||e.addLayer({id:"routes_2d_layer",type:"line",source:"polygons_routes_2d",paint:{"line-width":6,"line-color":["get","color"],"line-opacity":.5},layout:{"line-join":"round","line-cap":"round"},filter:["==","$type","LineString"]}),d(!0)}),500)}return()=>{}}),[s,l]),(0,r.useEffect)((()=>{if(p.length>0){const t=p.map((e=>({type:"Feature",properties:{color:e.color,out_color:"red",opacity:.9,opacity_border:0},geometry:{type:"LineString",coordinates:e.points}})));e.getSource("curves_nivels_2d")||e.addSource("curves_nivels_2d",{type:"geojson",data:{type:"FeatureCollection",features:t}}),e.getLayer("curves_nivels_2d_layer")||e.addLayer({id:"curves_nivels_2d_layer",type:"line",source:"curves_nivels_2d",paint:{"line-width":1,"line-color":"#E6966E","line-opacity":.81},layout:{"line-join":"round","line-cap":"round"}})}return()=>{}}),[p]),(0,r.useEffect)((()=>{if(e&&c.length>0){const t=c.map((e=>({type:"Feature",properties:{color:e.color,out_color:"blue",opacity:.2,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}})));e.getSource("polygons_geofences_2d")||e.addSource("polygons_geofences_2d",{type:"geojson",data:{type:"FeatureCollection",features:t}}),e.getLayer("polygons_geofences_2d")||e.addLayer({id:"polygons_geofences_2d_layer",type:"fill",source:"polygons_geofences_2d",layout:{},paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}})}}),[e,c]),(0,r.useEffect)((()=>{if(e&&t.length>0){const o=[],a=t.map((e=>{const{longitude:t,latitude:a}=e.centroid;return o.push({type:"Feature",geometry:{type:"Point",coordinates:[t,a]},properties:{namePad:`${e.name}`,id_Pad:e.idPad,points_Pad:e.points,tonnesPad:e.tonnes,volumePad:e.volume}}),{type:"Feature",properties:{color:"#80b918",out_color:"#43aa8b",opacity:.8,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}}}));e.getSource("polygons_cells_2d")||e.addSource("polygons_cells_2d",{type:"geojson",data:{type:"FeatureCollection",features:a}}),e.getSource("centroid_actives_pad")||e.addSource("centroid_actives_pad",{type:"geojson",data:{type:"FeatureCollection",features:o}}),setTimeout((()=>{e.getLayer("polygons_cells_2d_layer")||e.addLayer({id:"polygons_cells_2d_layer",type:"fill",source:"polygons_cells_2d",layout:{},paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),e.getLayer("centroid_pad_layer")||e.addLayer({id:"centroid_pad_layer",type:"symbol",source:"centroid_actives_pad",layout:{"text-field":["get","namePad"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})}),100),e.on("click","centroid_pad_layer",(t=>{const{namePad:o,points_Pad:a,id_Pad:i,tonnesPad:s,volumePad:r}=t.features[0].properties,n=(JSON.parse(a),`source_polygon_select_pad_${i}`),c=`layer_polygon_select_pad_${i}`;g(e,n,a),y(e,c,n),v({type:"pad",id_Pad:i,namePad:o,points_Pad:a,tonnesPad:s,volumePad:r,idSourPad:n,idLayerPad:c})}))}}),[e,t]),(0,r.useEffect)((()=>{if(e&&i.length>0){const t=[],o=i.map((e=>{const{longitude:o,latitude:a}=e.centroid,i=(0,u.MqI)({type:"Feature",properties:{color:e.color,out_color:"#43aa8b",opacity:.8,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}},{properties:{nameDme:`${e.name}`,points_polygonDme:e.points,id_polygonDme:e.id,tonnesDme:e.tonnes,volumeDme:e.volume}});return t.push(i),{type:"Feature",properties:{color:e.color,out_color:"#43aa8b",opacity:.8,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}}}));e.getSource("polygons_dmecells_2d")||e.addSource("polygons_dmecells_2d",{type:"geojson",data:{type:"FeatureCollection",features:o}}),e.getSource("centroid_actives_dme")||e.addSource("centroid_actives_dme",{type:"geojson",data:{type:"FeatureCollection",features:t}}),setTimeout((()=>{e.getLayer("polygons_dmecells_2d_layer")||e.addLayer({id:"polygons_dmecells_2d_layer",type:"fill",source:"polygons_dmecells_2d",layout:{},paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),e.getLayer("centroid_dme_layer")||e.addLayer({id:"centroid_dme_layer",type:"symbol",source:"centroid_actives_dme",layout:{"text-field":["get","nameDme"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})}),100),e.on("click","centroid_dme_layer",(t=>{const{nameDme:o,points_polygonDme:a,id_polygonDme:i,tonnesDme:s,volumeDme:r}=t.features[0].properties;console.log("Centro Dme",t.features[0].properties.points_Pad);const n=`source_polygon_select_dme_${i}`,c=`layer_polygon_select_dme_${i}`;g(e,n,a),y(e,c,n),v({type:"dme",id_polygonDme:i,nameDme:o,points_polygonDme:a,tonnesDme:s,volumeDme:r,idSourceDme:n,idLayerDme:c})}))}}),[e,i]);const[m,h]=(0,r.useState)({});return(0,r.useEffect)((()=>{if(e&&o.length>0){const t=[],a=o.map((e=>{var o;const{longitude:a,latitude:i}=e.centroid,s=(0,u.beQ)({type:"Feature",properties:{color:e.color,out_color:"#43aa8b",opacity:.8,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}},{properties:{nameStock:`${e.name}`,id_polygonStock:e.id,points_polygonStock:e.points,materialStock:null===(o=e.material)||void 0===o?void 0:o.type,altitudeStock:e.altitude,volumeStock:e.volume}});return t.push(s),{type:"Feature",properties:{color:e.color,out_color:"#43aa8b",opacity:.8,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.points]}}}));e.getSource("polygons_stockcells_2d")||e.addSource("polygons_stockcells_2d",{type:"geojson",data:{type:"FeatureCollection",features:a}}),e.getSource("centroid_actives_stock")||e.addSource("centroid_actives_stock",{type:"geojson",data:{type:"FeatureCollection",features:t}}),setTimeout((()=>{e.getLayer("polygons_stockcells_2d_layer")||e.addLayer({id:"polygons_stockcells_2d_layer",type:"fill",source:"polygons_stockcells_2d",layout:{},paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),e.getLayer("centroid_stock_layer")||e.addLayer({id:"centroid_stock_layer",type:"symbol",source:"centroid_actives_stock",layout:{"text-field":["get","nameStock"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})}),100),e.on("click","centroid_stock_layer",(t=>{const{nameStock:o,id_polygonStock:a,points_polygonStock:i,altitudeStock:s,volumeStock:r}=t.features[0].properties,n=`source_polygon_select_stock_${a}`,c=`layer_polygon_select_Stock_${a}`;e.getLayer(c)||(g(e,n,i),y(e,c,n)),v({type:"Stock",id_polygonStock:a,nameStock:o,points_polygonStock:i,altitudeStock:s,volumeStock:r,idSource:n,idLayer:c})}))}}),[e,o]),(0,a.jsx)(a.Fragment,{},void 0)};var m=o(8479);const h=(e,t,o,a,i,s)=>{const r=t.map((e=>{if(!e.sensor)return{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{name:"",rotation:-180,offsetdate:[0,0]}};const{latitude:t,longitude:o,direction:a}=e.sensor,s=e.deviceAlias.split("-");return{type:"Feature",geometry:{type:"Point",coordinates:[o,t]},properties:{name:`${s.length>1&&""!==s[1].trim()?`${s[0].substr(0,1)}${s[1].substr(-2)}`:e.deviceAlias}`,rotation:-180+a,offsetdate:[0,i]}}})),n=e.getSource(o);n?n.setData({type:"FeatureCollection",features:r}):(e.addSource(o,{type:"geojson",data:{type:"FeatureCollection",features:r}}),e.addLayer({id:a,type:"symbol",source:o,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":s,"text-rotate":["get","rotation"],"text-offset":["get","offsetdate"]},paint:{"text-color":"#fff","text-halo-color":"#00296b","text-halo-width":4}}))};var _=o(7816),j=o(4845),f=o(2285),x=o(6847),b=o(9895),S=o(2302),T=o(3750),k=o(7394),I=o(8222),E=o(9613);const C=(0,o(3914).Z)({table:{minWidth:100}}),O={root:{position:"fixed",width:"100%",height:"100%",zIndex:2},modal:{width:"20%",height:100,position:"fixed",zIndex:3,top:0,background:"",left:"40%",right:"40%"}},Z=({setFeatureSelected:e,featureSelected:t,map:o})=>{const{type:i}=t;switch(i){case"Stock":const{nameStock:i,idLayer:s,idSource:r,volumeStock:n,altitudeStock:c}=t,l=C();function d(){e(void 0),o.removeLayer(s),o.removeSource(r)}function u(e,t){return{name:e,valor:t}}const p=[u("Altitud",c),u("Volumen",n)];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:d,style:O.root},void 0),(0,a.jsx)(f.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,a.jsx)("div",Object.assign({style:O.modal},{children:(0,a.jsx)(x.Z,Object.assign({component:b.Z},{children:(0,a.jsxs)(S.Z,Object.assign({className:l.table,size:"small","aria-label":"a dense table"},{children:[(0,a.jsx)(T.Z,{children:(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,{children:"Nombre"},void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:i}),void 0)]},void 0)},void 0),(0,a.jsx)(E.Z,{children:p.map((e=>(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"dme":const{nameDme:g,idLayerDme:y,idSourceDme:v,tonnesDme:m,volumeDme:h}=t;function _(){e(void 0),o.removeLayer(y),o.removeSource(v)}function j(e,t){return{name:e,valor:t}}const Z=[j("Toneladas",m),j("Volumen",h)];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:_,style:O.root},void 0),(0,a.jsx)(f.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,a.jsx)("div",Object.assign({style:O.modal},{children:(0,a.jsx)(x.Z,Object.assign({component:b.Z},{children:(0,a.jsxs)(S.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,a.jsx)(T.Z,{children:(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,{children:"Nombre"},void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:g}),void 0)]},void 0)},void 0),(0,a.jsx)(E.Z,{children:Z.map((e=>(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"pad":const{namePad:L,tonnesPad:z,volumePad:w,idSourPad:P,idLayerPad:R}=t;function F(){e(void 0),o.removeLayer(R),o.removeSource(P)}function A(e,t){return{name:e,valor:t}}const D=[A("Volumen",w),A("Toneladas",z)];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:F,style:O.root},void 0),(0,a.jsx)(f.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,a.jsx)("div",Object.assign({style:O.modal},{children:(0,a.jsx)(x.Z,Object.assign({component:b.Z},{children:(0,a.jsxs)(S.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,a.jsx)(T.Z,{children:(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,{children:"Nombre"},void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:L}),void 0)]},void 0)},void 0),(0,a.jsx)(E.Z,{children:D.map((e=>(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"tajo":const{namePolTajo:$,idLayerTajo:B,idSourceTajo:M,agTajo:U,agcnTajo:J,aliasTajo:N,alteTajo:V,asTajo:G,auTajo:X,auchTajo:H,altitudeTajo:Y,descripcionTajo:q,heightTajo:W,litoTajo:Q,materialTajo:K,nameProjectTajo:ee,onzasTajo:te,orezonetTajo:oe,ptaucnTajo:ae,sTajo:ie,tonnesTajo:se,volumeTajo:re}=t;function ne(){e(void 0),o.removeLayer(B),o.removeSource(M)}function ce(e,t){return{name:e,valor:t}}const le=[ce("Proyecto",ee),ce("Material",K),ce("Ag",U),ce("Onzas",te),ce("Altitud",Y),ce("Toneladas",se),ce("Volumen",re)];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:ne,style:O.root},void 0),(0,a.jsx)(f.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,a.jsx)("div",Object.assign({style:O.modal},{children:(0,a.jsx)(x.Z,Object.assign({component:b.Z},{children:(0,a.jsxs)(S.Z,Object.assign({className:O.table,size:"small","aria-label":"a dense table"},{children:[(0,a.jsx)(T.Z,{children:(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,{children:"Polígono"},void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:$}),void 0)]},void 0)},void 0),(0,a.jsx)(E.Z,{children:le.map((e=>(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(I.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,a.jsx)(I.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);default:return(0,a.jsx)(a.Fragment,{},void 0)}};var L=o(7211),z=o(1120),w=o(998),P=o(5757),R=o(2318),F=o(2822),A=o(6037),D=o(5517),$=o(7812),B=o(3681),M=o(3765),U=o(4562),J=o(573),N=o(6320),V=o(4880),G=o(3584),X=o(5090);const H=o(6046),Y=o(5413),q=(0,z.Z)((e=>({nested:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),W=({data:e,selected:t,setSelected:o,map:n,iconImage:c})=>{const l=q(),{datetime:d}=e.sensor,[u,p]=(0,r.useState)(!1),[g,y]=(0,r.useState)(""),[v,m]=(0,r.useState)(!1),h=t&&t.deviceId===e.deviceId;(0,r.useEffect)((()=>{const e=new Date,t=()=>{const{stringValue:t,value:o}=(0,N.dj)(e);y(t),m(o>=V.qi)};t();const o=setInterval((()=>{t()}),5e3);return()=>{clearInterval(o)}}),[d]),(0,r.useEffect)((()=>(p(!0),setTimeout((()=>{p(!1)}),2e3),()=>{})),[e.sensor.datetime]);const _=e.operationList.length>0?e.operationList[0].truckList.length:0;return(0,a.jsx)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:(0,a.jsxs)(b.Z,Object.assign({elevation:4,style:{marginBottom:8,width:"100%"}},{children:[(0,a.jsx)(w.Z,Object.assign({dense:!0,disableGutters:!0,button:!0,selected:h,onClick:()=>{t&&e.deviceId===t.deviceId?o(null):o(e)},style:{paddingLeft:4}},{children:(0,a.jsx)(s.Z,Object.assign({item:!0},{children:(0,a.jsx)(P.Z,{primary:e.deviceAlias,secondary:`Trucks[${_}]`},void 0)}),void 0)}),void 0),(0,a.jsx)(A.Z,Object.assign({in:h,timeout:"auto",unmountOnExit:!0,className:l.nested},{children:(0,a.jsxs)(F.Z,Object.assign({dense:!0,disablePadding:!0},{children:[(0,a.jsx)(w.Z,Object.assign({style:{padding:4},dense:!0},{children:(0,a.jsx)(P.Z,{primary:(0,a.jsx)(i.ZP,Object.assign({title:`Última comunicación, i. real: ${e.realInterval} seg`,"aria-label":"add"},{children:(0,a.jsxs)("div",Object.assign({style:{display:"flex"}},{children:[(0,a.jsx)(M.Z,{color:"action",fontSize:"small"},void 0),(0,a.jsx)(R.Z,Object.assign({variant:"body1",style:{marginLeft:4},color:"initial"},{children:g}),void 0)]}),void 0)}),void 0)},void 0)}),void 0),(0,a.jsx)(D.Z,{},void 0),(0,a.jsxs)(w.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,a.jsx)("img",{width:24,src:H},void 0),(0,a.jsx)(P.Z,{style:{marginLeft:4},primary:`${_} Activos`},void 0)]}),void 0),(0,a.jsxs)(w.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,a.jsx)("img",{width:24,src:Y},void 0),(0,a.jsx)(P.Z,{style:{marginLeft:4},primary:"[num] cola"},void 0)]}),void 0)]}),void 0)}),void 0),(0,a.jsxs)(s.Z,Object.assign({container:!0,style:{padding:"0px 4px"},alignItems:"center"},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0},{children:(0,a.jsx)(i.ZP,Object.assign({title:"Ubicar",style:{textAlign:"center",flex:1}},{children:(0,a.jsx)($.Z,Object.assign({onClick:()=>{const{sensor:t}=e;n.getSource(e.deviceId)&&(n.removeLayer(e.deviceId+""),n.removeSource(e.deviceId+""));const{longitude:o,latitude:a,direction:i}=t;setTimeout((()=>{const t={geometry:{type:"Point",coordinates:[o,a]},type:"Feature",properties:{rotate:i-360,fuel1:"Hydro"}};n.addSource(e.deviceId+"",{type:"geojson",data:t}),n.addLayer({id:e.deviceId+"",type:"symbol",source:e.deviceId+"",layout:{"icon-image":c,"icon-size":.08,"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-rotate":["get","rotate"]}})}),500);const s=[o,a];n.setCenter(s)},size:"small"},{children:(0,a.jsx)(U.Z,{fontSize:"small"},void 0)}),void 0)}),void 0)}),void 0),(0,a.jsx)(s.Z,Object.assign({item:!0},{children:(0,a.jsxs)(s.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,a.jsx)(J.Z,{style:{color:v?G.J$:G.sb},fontSize:"small"},void 0),(0,a.jsx)(R.Z,Object.assign({style:{fontSize:8,color:"rgba(0, 0, 0, 0.54)"}},{children:v?"Sin conex":X.l[e.state]}),void 0)]}),void 0)}),void 0)]}),void 0),u&&(0,a.jsx)(B.Z,{color:"primary"},void 0)]}),void 0)}),void 0)},Q=o(6593),K=(0,z.Z)((e=>({root:{},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3}}))),ee=({excavators:e,setSelectedEM:t,selectedExcavatorMap:o,selected:i,setSelected:r,setSelectedAssigment:n,map:c,pinHook:l})=>{const d=K(),[u,p]=l,g=e.filter((e=>e.operationList));function y(e,t){return e.sensor?!(o&&o.deviceId===e.deviceId)&&(0,a.jsx)(W,Object.assign({},{key:e.deviceId,data:e,selected:i,setSelected:r,setSelectedAssigment:n,setPin:p,map:c,iconImage:"excavator_nav"}),void 0):(0,a.jsx)(s.Z,Object.assign({item:!0,md:12,style:{padding:"4px 0"},onClick:()=>r(e)},{children:(0,a.jsx)(b.Z,Object.assign({elevation:4},{children:(0,a.jsx)(w.Z,Object.assign({button:!0,style:{padding:4}},{children:(0,a.jsx)(P.Z,{primary:(0,a.jsx)(R.Z,Object.assign({variant:"body2"},{children:e.deviceAlias}),void 0),secondary:(0,a.jsx)("span",Object.assign({style:{fontSize:11,fontWeight:"bold",color:"grey"}},{children:"Sin Conexión..."}),void 0)},void 0)}),void 0)}),void 0)}),e.deviceId)}const v=e.map(y);return g.map(y),(0,a.jsxs)(F.Z,Object.assign({className:d.root,disablePadding:!0},{children:[(0,a.jsxs)(w.Z,Object.assign({dense:!0},{children:[(0,a.jsx)("div",Object.assign({style:{marginRight:8}},{children:(0,a.jsx)("img",{alt:"Excavator",width:24,src:Q},void 0)}),void 0),(0,a.jsx)(P.Z,{primary:"Excavators"},void 0)]}),void 0),(0,a.jsx)(f.Z,Object.assign({direction:"left",in:!!o,mountOnEnter:!0,unmountOnExit:!0},{children:(0,a.jsx)(s.Z,Object.assign({container:!0},{children:o&&(0,a.jsx)(W,Object.assign({},{data:o,selected:i,setSelected:r,setSelectedAssigment:n,setPin:p,map:c,iconImage:Q}),void 0)}),void 0)}),void 0),(0,a.jsx)(s.Z,Object.assign({container:!0},{children:v}),void 0)]}),void 0)},te=(0,z.Z)((e=>({root:{width:150,display:"flex",position:"absolute",paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",boxShadow:"0px 0px 10px #b5aeae",overflowY:"scroll",height:"100vh",left:0,zIndex:3},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),oe=e=>{const{excavators:t,selectedExcavatorMap:o,setSelectedEM:i,selected:s,setSelected:r,setSelectedAssigment:n,map:c,pinHook:l}=e,d=te();return(0,a.jsx)("div",Object.assign({className:d.root},{children:(0,a.jsx)(ee,Object.assign({},{excavators:t,selectedExcavatorMap:o,setSelectedEM:i,selected:s,setSelected:r,setSelectedAssigment:n,map:c,pinHook:l}),void 0)}),void 0)},ae=(0,r.createContext)(null),ie=(e,t)=>{const{sensor:o}=e;o&&o.latitude&&o.longitude&&t((t=>{const o=t.findIndex((t=>e.deviceId===t.deviceId));return o>=0?t[o]=Object.assign({},e):t.push(e),JSON.parse(JSON.stringify(t))}))};function se(e){const{children:t,open:o,value:s}=e;return(0,a.jsx)(i.ZP,Object.assign({arrow:!0,color:"#075fcc",open:o,enterTouchDelay:0,placement:"bottom",title:s},{children:t}),void 0)}const re=({gpsTruck:e,gpsExcavator:t,benchs:i,padCells:l,dmeCells:u,stockCells:g,curves:y,geofences:f,polygons_actives:x,polygons:b,routes:S})=>{const T=(0,r.useRef)(null),k=(0,r.useRef)(null),[I,E]=(0,r.useState)(-78.196),[C,O]=(0,m._)("bearing_map_dispatch",0),[z,w]=(0,r.useState)(-7.6163),[P,R]=(0,r.useState)(14.81),[F,A]=(0,r.useState)(!1),[D,$]=(0,r.useState)(!1),[B,M]=(0,r.useState)([]),[U,J]=(0,r.useState)([]),[N,V]=(0,r.useState)(),[G,X]=(0,m._)("keys_highlights_units",[]),[H,Y]=(0,r.useState)([]),[q,W]=(0,r.useState)(),[Q,K]=(0,r.useState)(),[ee,te]=(0,r.useState)(),[re,ne]=(0,r.useState)(-1),[ce,le]=(0,r.useState)(void 0);(0,r.useEffect)((()=>{(e=>{(0,_.r)().then((t=>{e(t)})).catch((t=>{e([]),console.log(t)}))})(M),(e=>{(0,L.X)().then((t=>{e(t)})).catch((t=>{e([]),console.log("Error al obtener las Excavadoras: ",t)}))})(J)}),[]),(0,r.useEffect)((()=>{D&&(k.current.loadImage(o(9091),(function(e,t){if(e)throw e;k.current.addImage("truck_nav",t)})),k.current.loadImage(o(2499),(function(e,t){if(console.log("error",e),e)throw e;k.current.addImage("excavator_nav",t)})),k.current.loadImage(o(7126),(function(e,t){if(console.log("error",e),e)throw e;k.current.addImage("pickup_nav",t)})))}),[D]),(0,r.useEffect)((()=>{const e=B.filter((e=>G.findIndex((t=>t===e.deviceId))>=0));Y(e)}),[B,G]),(0,r.useEffect)((()=>{if(t){if(ie(t,J),Q&&Q.deviceId===t.deviceId&&K(t),q&&q.deviceId===t.deviceId)if(q.operationList.length>0&&t.operationList.length>0){const e=q.operationList[0],o=t.operationList[0];e.truckList.length!==o.truckList.length&&W(t)}else W(t);Y((e=>{const o=e.findIndex((e=>(null==e?void 0:e.deviceId)===t.deviceId));return o>=0&&(e[o]=t),JSON.parse(JSON.stringify(e))}))}}),[t]),(0,r.useEffect)((()=>{t&&ie(t,J)}),[t]),(0,r.useEffect)((()=>{e&&(ie(e,M),N&&N.deviceId===e.deviceId&&V(e),ee&&ee.deviceId===e.deviceId&&te(e),Y((t=>{const o=t.findIndex((t=>(null==t?void 0:t.deviceId)===e.deviceId));return o>=0&&(t[o]=e),JSON.parse(JSON.stringify(t))})))}),[e]),(0,r.useEffect)((()=>{D&&F&&h(k.current,B,"ID_SOURCE_ALIAS_TRUCKS","ID_LAYER_ALIAS_TRUCKS",-2.1,12)}),[B,D,F]),(0,r.useEffect)((()=>{F&&h(k.current,U,"ID_SOURCE_ALIAS_EXCAVATORS","ID_LAYER_ALIAS_EXCAVATORS",-3.2,12)}),[U,F]);const de=D&&H.map(((e,t)=>(null==e?void 0:e.sensor)&&(0,a.jsx)(p,{id:null==e?void 0:e.deviceId,points:[null==e?void 0:e.sensor.longitude,e.sensor.latitude],opacity:1,color:"orange",direction:null==e?void 0:e.sensor.direction,map:k.current,iconImage:e.deviceAlias.includes("CM-")?"pickup_nav":"truck_nav"},t))),ue=F&&D&&B.concat(U).map(((e,t)=>e.sensor?(0,a.jsx)(d,{setSelectExcavator:K,setSelectTruck:te,data:e,map:k.current,pin:N},t):null)),pe=D&&(0,a.jsx)(v,Object.assign({},{polygons_actives:x,polygons:b,curves:y,routes:S,geofences:f,padCells:l,dmeCells:u,stockCells:g,setIsPaintPolygons:A,setFeatureSelected:le},{map:k.current}),void 0);return(0,a.jsx)(ae.Provider,Object.assign({value:k.current},{children:(0,a.jsxs)("div",Object.assign({style:{display:"flex",width:"100%",height:"100vh",position:"relative",overflowY:"scroll"}},{children:[(0,a.jsx)(s.Z,Object.assign({container:!0,style:{maxWidth:"33%",position:"fixed",top:0,zIndex:1,left:"33%"}},{children:(0,a.jsx)(j.Z,{defaultValue:0,ValueLabelComponent:se,getAriaValueText:function(e){return`${e}º`},"aria-labelledby":"discrete-slider-small-steps",valueLabelDisplay:"auto",step:5,marks:!0,min:0,value:C,max:360,onChange:(e,t)=>{O(Number(t))}},void 0)}),void 0),(0,a.jsx)(oe,{excavators:U,selected:q,setSelected:W,setSelectedAssigment:ne,selectedExcavatorMap:Q,setSelectedEM:K,map:k.current,pinHook:[N,V]},void 0),(0,a.jsx)(n.Z,Object.assign({map:k,dragRotate:!1,style:"mapbox://styles/dispatchgat/ckqqsfc2y46bo17sf1y29zwnj",mapContainer:T,bearing:Number(C),pitch:15},{lat:z,lng:I,zoom:P,setLat:w,setLng:E,setZoom:R,setLoad:$}),"map2"),de,ue,pe,(0,a.jsx)(c.q,Object.assign({trucks:B},{selectedTruckMap:ee,setSelectedTM:te},{excavator:q,highlights:G,setHighlights:X,pinHook:[N,V],map:k.current,setSelecteEx:W}),void 0),ce&&k.current&&(0,a.jsx)(Z,Object.assign({},{setFeatureSelected:le,featureSelected:ce,map:k.current}),void 0)]}),void 0)}),void 0)};var ne=o(3513);const ce=()=>(0,a.jsx)(ne.a.Consumer,{children:e=>(0,a.jsx)(re,{gpsExcavator:e.streamExcavator,gpsTruck:e.streamTruck,benchs:e.benchs,polygons:e.polygons,routes:e.routes,curves:e.curves,polygons_actives:e.polygons_actives,geofences:e.geofences,padCells:e.padCells,dmeCells:e.dmeCells,stockCells:e.stockCells},void 0)},void 0)}}]);