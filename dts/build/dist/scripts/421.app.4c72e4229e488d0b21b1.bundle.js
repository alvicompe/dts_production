(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[421],{86905:(e,t,i)=>{e.exports=i.p+"322f531ddb14529b83bd73182d28de44.png"},77501:(e,t,i)=>{e.exports=i.p+"89f059a2790e391b484a369a3b9f92fb.png"},55956:(e,t,i)=>{e.exports=i.p+"f7bda309f804ba7abdd57c3272cae75b.svg"},84299:(e,t,i)=>{e.exports=i.p+"6349bce6aa562fa9a965484651c725c9.svg"},51790:(e,t,i)=>{e.exports=i.p+"20557549695e4a02b8f5e299c9687642.png"},39080:(e,t,i)=>{e.exports=i.p+"2b28f15b184b6ab80c65d257a47c790c.png"},79800:(e,t,i)=>{"use strict";i.d(t,{H:()=>o});const o=e=>{e.current.loadImage(i(51790),(function(t,i){if(t)throw t;e.current.addImage("truck_nav",i)})),e.current.loadImage(i(86905),(function(t,i){if(t)throw t;e.current.addImage("excavator_nav",i)})),e.current.loadImage(i(39080),(function(t,i){if(t)throw t;e.current.addImage("truck_red",i)})),e.current.loadImage(i(77501),(function(t,i){if(t)throw t;e.current.addImage("pickup_nav",i)}))}},16886:(e,t,i)=>{"use strict";i.d(t,{N:()=>n});var o=i(85893),a=i(67294);const n=({excavatorListClass:e,excavatorList:t})=>((0,a.useEffect)((()=>{e.addToMap()}),[]),(0,a.useEffect)((()=>{e.updateInMap()}),[t]),(0,o.jsx)(o.Fragment,{},void 0))},26271:(e,t,i)=>{"use strict";i.d(t,{b:()=>s});var o=i(85893),a=i(67294),n=i(6777);const s=({truckListClass:e,truckList:t})=>(n.ET,(0,a.useEffect)((()=>{e.addToMap()}),[]),(0,a.useEffect)((()=>{e.updateInMap()}),[t]),(0,o.jsx)(o.Fragment,{},void 0))},74248:(e,t,i)=>{"use strict";i.d(t,{f:()=>n});var o=i(67294),a=i(52573);const n=({polygonList:e,idSource:t,idLayer:i,idSourceCentroid:n,idLayerCentroid:s,map:r,haveCentroid:d,onClickFeature:c})=>((0,o.useEffect)((()=>{const o=new a.z(e,r,t,i,n,s,c,d);return o.addToMap(),()=>{o.removeOfMap()}}),[e]),null)},48101:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var o=i(85893),a=i(67294),n=i(34880);const s=i(6158);s.accessToken=n.c3;const r=({dragRotate:e,map:t,pitch:i,bearing:n,mapContainer:r,lng:d,lat:c,zoom:l,setLoad:u,style:p,height:h,dragControls:m=!0})=>((0,a.useEffect)((()=>{t.current||r&&(t.current=new s.Map({container:r.current,style:p,center:[d,c],pitch:i,bearing:n,zoom:l,antialias:!0,dragRotate:e}))}),[t,r]),(0,a.useEffect)((()=>{t.current&&(m&&(t.current.addControl(new s.FullscreenControl,"bottom-left"),t.current.addControl(new s.NavigationControl,"bottom-left")),t.current.on("move",(()=>{})),t.current.on("click",(e=>{console.log(e.lngLat)})),t.current.on("load",(()=>{t.current&&u(!0)})))}),[t]),(0,a.useEffect)((()=>{t.current&&t.current.setBearing(n)}),[n]),(0,o.jsx)("div",{ref:r,style:{flex:1,height:h||"100vh",width:"100%"},className:"map-container"},void 0))},14276:(e,t,i)=>{"use strict";i.d(t,{c:()=>o});class o{constructor(e,t,i,o,a,n){this.unitsList=e,this.map=t,this.idSource=i,this.idLayer=o,this.iconImagen=a,this.offsetY=-2.1,this.fontSize=9,this.onClickElement=n}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.unitsList.map((e=>{if(e.sensor){const{latitude:t,longitude:i,direction:o}=e.sensor,a=e.deviceAlias.split("-"),n=a.length>1&&""!==a[1].trim()?`${a[0].substr(0,1)}${a[1].slice(-2)}`:e.deviceAlias;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]},properties:{deviceId:e.deviceId,rotate:o,name:`${n}`,rotation:-180+o,offsetdata:[0,0]}}}}))}addToMap(){!this.getInMap()&&this.unitsList.length>0&&(this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"symbol",source:this.idSource,layout:{"icon-image":this.iconImagen,"icon-size":["interpolate",["linear"],["zoom"],14,.08,20,.3],"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-rotate":["get","rotate"]}}),this.map.addLayer({id:`LABEL_${this.idLayer}`,type:"symbol",source:this.idSource,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":["interpolate",["linear"],["zoom"],14,8,20,18],"text-rotate":["get","rotation"],"text-offset":["get","offsetdata"],"text-allow-overlap":!0},paint:{"text-color":"#fff","text-halo-color":"#00296b","text-halo-width":4}}),this.map.on("click",this.idLayer,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayer,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayer,(()=>{this.map.getCanvas().style.cursor=""})))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeLayer(`LABEL_${this.idLayer}`),this.map.removeSource(this.idSource))}}},52573:(e,t,i)=>{"use strict";i.d(t,{z:()=>a});var o=i(35573);class a{constructor(e,t,i,o,a,n,s,r){this.polygonList=e,this.map=t,this.idSource=i,this.idLayer=o,this.idSourceCentroid=a,this.idLayerCentroid=n,this.fontSize=9,this.onClickElement=s,this.haveCentroid=r}getInMap(){return this.map.getSource(this.idSource)}getCenterInMap(){return this.map.getSource(this.idSourceCentroid)}generateCentroids(){return this.polygonList.map((e=>{var t,i,o;if(!e.centroid)return{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}};const{latitude:a,longitude:n}=e.centroid;return{type:"Feature",geometry:{type:"Point",coordinates:[n,a]},properties:{name:`${e.name}${e.material?`-${e.material.type}`:""}`,points_polygonTajo:e.pointList.map((e=>[e.longitude,e.latitude])),name_polygon:e.name,name_material:null===(t=e.material)||void 0===t?void 0:t.type,id_polygonTajo:e.id,agTajo:e.ag,agcnTajo:e.agcn,alteTajo:e.alte,asTajo:e.as,auTajo:e.au,auchTajo:e.auch,altitudeTajo:e.altitude,descripcionTajo:"",heightTajo:e.height,litoTajo:e.litio,materialTajo:null===(i=e.material)||void 0===i?void 0:i.type,namePolTajo:e.name,nameProjectTajo:e.nameProject,onzasTajo:e.onzas,orezonetTajo:e.orezonet,ptaucnTajo:e.ptaucn,sTajo:e.s,tonnesTajo:e.tonnes,volumeTajo:e.volume,nameDme:`${e.name}`,points_polygonDme:e.pointList.map((e=>[e.longitude,e.latitude])),id_polygonDme:e.id,tonnesDme:e.tonnes,volumeDme:e.volume,namePad:`${e.name}`,id_Pad:`${e.id}_pad`,points_Pad:e.pointList.map((e=>[e.longitude,e.latitude])),tonnesPad:e.tonnes,volumePad:e.volume,nameStock:`${e.name}`,id_polygonStock:e.id,points_polygonStock:e.pointList.map((e=>[e.longitude,e.latitude])),materialStock:null===(o=e.material)||void 0===o?void 0:o.type,altitudeStock:e.altitude,volumeStock:e.volume}}}))}generateFeatures(){return this.polygonList.map((e=>({type:"Feature",properties:{color:o.O[e.color]?o.O[e.color].hex:e.color,out_color:"blue",opacity:this.haveCentroid?1:.2,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))]}})))}addToMap(){!this.getInMap()&&this.polygonList.length>0?(this.map.getSource(this.idSource)||this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.getLayer(this.idLayer)||this.map.addLayer({id:this.idLayer,type:"fill",source:this.idSource,paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),this.map.getLayer(`BORDER_${this.idLayer}`)||this.map.addLayer({id:`BORDER_${this.idLayer}`,type:"line",source:this.idSource,paint:{"line-color":["get","out_color"],"line-width":2,"line-opacity":["get","opacity_border"]},filter:["==","$type","Polygon"]}),this.haveCentroid&&(this.map.getSource(this.idSourceCentroid)||this.map.addSource(this.idSourceCentroid,{type:"geojson",data:{type:"FeatureCollection",features:this.generateCentroids()}}),this.map.getLayer(this.idLayerCentroid)||this.map.addLayer({id:this.idLayerCentroid,type:"symbol",source:this.idSourceCentroid,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":this.fontSize},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})),this.map.on("click",this.idLayerCentroid,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor=""}))):this.getInMap()&&this.updateInMap()}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeLayer(`BORDER_${this.idLayer}`),this.map.removeSource(this.idSource),this.getCenterInMap()&&(this.map.removeLayer(this.idLayerCentroid),this.map.removeSource(this.idSourceCentroid)))}}},43040:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>je});var o=i(85893),a=i(868),n=i(41749),s=i(67294),r=i(48101),d=i(80599),c=i(26271),l=i(16886),u=i(78479),p=i(44845),h=i(82285),m=i(56847),g=i(79895),v=i(82302),j=i(83750),y=i(57394),f=i(88222),L=i(99613),x=i(73914),T=i(73855),S=i(70989),C=i(97700);const b=(0,x.Z)({table:{minWidth:100}}),I={root:{position:"fixed",width:"100%",height:"100%",zIndex:2},modal:{width:"20%",height:100,position:"fixed",zIndex:3,top:0,background:"",left:"40%",right:"40%"}},O=({map:e})=>{const{selectedFeature:t}=(0,T.C)(C.GH),i=(0,T.T)(),a=b();if(!t)return null;const{type:n}=t;switch(n){case"stock":const{nameStock:n,idLayer:s,idSource:r,volumeStock:d,altitudeStock:c}=t;function l(){i((0,S.tP)()),e.removeLayer(s),e.removeSource(r)}function u(e,t){return{name:e,valor:t}}const p=[u("Altitud",c),u("Volumen",d)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:l,style:I.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:I.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:a.table,size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,{children:"Nombre"},void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:n}),void 0)]},void 0)},void 0),(0,o.jsx)(L.Z,{children:p.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"dme":const{nameDme:x,idLayerDme:T,idSourceDme:C,tonnesDme:b,volumeDme:O}=t;function _(){i((0,S.tP)()),e.removeLayer(T),e.removeSource(C)}function E(e,t){return{name:e,valor:t}}const Z=[E("Toneladas",b),E("Volumen",O)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:_,style:I.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:I.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,{children:"Nombre"},void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:x}),void 0)]},void 0)},void 0),(0,o.jsx)(L.Z,{children:Z.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"pad":const{namePad:k,tonnesPad:M,volumePad:R,idSourPad:P,idLayerPad:F}=t;function D(){i((0,S.tP)()),e.removeLayer(F),e.removeSource(P)}function w(e,t){return{name:e,valor:t}}const A=[w("Volumen",R),w("Toneladas",M)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:D,style:I.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:I.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,{children:"Nombre"},void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:k}),void 0)]},void 0)},void 0),(0,o.jsx)(L.Z,{children:A.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"tajo":const{namePolTajo:z,idLayerTajo:N,idSourceTajo:U,agTajo:$,altitudeTajo:Y,materialTajo:H,nameProjectTajo:K,onzasTajo:G,tonnesTajo:B,volumeTajo:V,auTajo:W}=t;function X(){i((0,S.tP)()),e.removeLayer(N),e.removeSource(U)}function q(e,t){return{name:e,valor:t}}const J=[q("Proyecto",K),q("Material",H),q("Ag",$),q("Au",W),q("Onzas",G),q("Altitud",Y),q("Toneladas",B),q("Volumen",V)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:X,style:I.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:I.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:I.table,size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,{children:"Polígono"},void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:z}),void 0)]},void 0)},void 0),(0,o.jsx)(L.Z,{children:J.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(f.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(f.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);default:return(0,o.jsx)(o.Fragment,{},void 0)}};var _=i(41120),E=i(10046),Z=i(62822),k=i(50998),M=i(95757),R=i(14125),P=i(69110),F=i(66037),D=i(22318),w=i(55517),A=i(17812),z=i(33681),N=i(83765),U=i(34562),$=i(50573),Y=i(93584),H=i(60465);const K=i(84299),G=i(55956),B=(0,_.Z)((e=>({nested:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),V=({data:e,map:t,isSelected:i})=>{const r=B(),d=(0,T.T)(),{loading:c}=(0,H.Kx)(e),{lastDateString:l,lostConnection:u}=(0,H.AT)(e),{selectedExcavator:p}=(0,T.C)(C.mW),h=(0,s.useCallback)((()=>{p&&e.deviceId===p.deviceId?d((0,S.yS)()):d((0,S.Zh)(e))}),[p]),m=(0,s.useCallback)((()=>{const{sensor:{longitude:i,latitude:o}}=e,a=[i,o];t&&t.setCenter(a)}),[t,e.sensor]),v=(0,s.useCallback)((()=>p&&p.deviceId===e.deviceId),[p]),j=e.operationList&&e.operationList.length>0?e.operationList[0].truckList.length:0;return(0,o.jsx)(n.Z,Object.assign({container:!0,direction:"column",alignItems:"center",style:{marginBottom:4}},{children:(0,o.jsxs)(g.Z,Object.assign({elevation:i?8:4,style:{width:"100%"}},{children:[(0,o.jsx)(k.Z,Object.assign({dense:!0,disableGutters:!0,button:!0,selected:v(),onClick:h,style:{paddingLeft:4}},{children:(0,o.jsx)(n.Z,Object.assign({item:!0},{children:(0,o.jsx)(M.Z,{primary:e.deviceAlias,secondary:`CAMIONES[${j}]`},void 0)}),void 0)}),void 0),(0,o.jsx)(F.Z,Object.assign({in:v(),timeout:"auto",unmountOnExit:!0,className:r.nested},{children:(0,o.jsxs)(Z.Z,Object.assign({dense:!0,disablePadding:!0},{children:[(0,o.jsx)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:(0,o.jsx)(M.Z,{primary:(0,o.jsx)(a.ZP,Object.assign({title:`Última comunicación, i. real: ${e.realInterval} seg`,"aria-label":"add"},{children:(0,o.jsxs)("div",Object.assign({style:{display:"flex"}},{children:[(0,o.jsx)(N.Z,{color:"action",fontSize:"small"},void 0),(0,o.jsx)(D.Z,Object.assign({variant:"body1",style:{marginLeft:4},color:"initial"},{children:l}),void 0)]}),void 0)}),void 0)},void 0)}),void 0),(0,o.jsx)(w.Z,{},void 0),(0,o.jsxs)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,o.jsx)("img",{width:24,src:K},void 0),(0,o.jsx)(M.Z,{style:{marginLeft:4},primary:`${j} Activos`},void 0)]}),void 0),(0,o.jsxs)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,o.jsx)("img",{width:24,src:G},void 0),(0,o.jsx)(M.Z,{style:{marginLeft:4},primary:"[num] cola"},void 0)]}),void 0)]}),void 0)}),void 0),(0,o.jsxs)(n.Z,Object.assign({container:!0,style:{padding:"0px 4px"},alignItems:"center"},{children:[(0,o.jsx)(n.Z,Object.assign({item:!0},{children:(0,o.jsx)(a.ZP,Object.assign({title:"Ubicar",style:{textAlign:"center",flex:1}},{children:(0,o.jsx)(A.Z,Object.assign({onClick:m,size:"small"},{children:(0,o.jsx)(U.Z,{fontSize:"small"},void 0)}),void 0)}),void 0)}),void 0),(0,o.jsx)(n.Z,Object.assign({item:!0},{children:(0,o.jsxs)(n.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,o.jsx)($.Z,{style:{color:u?Y.J$:Y.sb},fontSize:"small"},void 0),(0,o.jsx)(D.Z,{style:{fontSize:8,color:"rgba(0, 0, 0, 0.54)"}},void 0)]}),void 0)}),void 0)]}),void 0),c&&(0,o.jsx)(z.Z,{color:"primary"},void 0)]}),void 0)}),void 0)},W=i(53292),X=(0,_.Z)((e=>({root:{},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3}}))),q=({map:e})=>{const t=X(),i=(0,T.T)(),{excavatorInfoList:a}=(0,T.C)(R.kW),{selectedExcavator:r}=(0,T.C)(C.mW),{selectedExcavatorMap:d}=(0,T.C)(C.Cs);(0,s.useEffect)((()=>{var e,t;if(r&&(null==r?void 0:r.operationList)&&(null==r?void 0:r.operationList.length)>0){const o=a.find((e=>e.deviceId===(null==r?void 0:r.deviceId)));o&&o.id&&o.operationList&&o.operationList.length>0&&(o.operationList[0].truckList.length!=(null==r?void 0:r.operationList[0].truckList.length)||(null===(e=o.sensor)||void 0===e?void 0:e.latitude)!==(null===(t=r.sensor)||void 0===t?void 0:t.latitude))&&i((0,S.Zh)(o))}}),[a]);const c=(0,s.useMemo)((()=>(0,o.jsx)(n.Z,Object.assign({container:!0},{children:a.map((t=>t.sensor?(0,o.jsx)(V,Object.assign({},{key:t.deviceId,data:t,map:e,isSelected:!0}),void 0):(0,o.jsx)(n.Z,Object.assign({item:!0,md:12},{children:(0,o.jsx)(E.Z,Object.assign({width:"100%",paddingBottom:.2,paddingTop:.2},{children:(0,o.jsx)(P.I,{unit:t},void 0)}),void 0)}),t.deviceId)))}),void 0)),[a,e]),l=a.find((e=>e.deviceId===(null==d?void 0:d.deviceId)));return(0,o.jsxs)(Z.Z,Object.assign({className:t.root,disablePadding:!0},{children:[(0,o.jsxs)(k.Z,Object.assign({dense:!0},{children:[(0,o.jsx)("div",Object.assign({style:{marginRight:8}},{children:(0,o.jsx)("img",{alt:"Excavator",width:24,src:W},void 0)}),void 0),(0,o.jsx)(M.Z,{primary:"Excavadoras"},void 0)]}),void 0),(0,o.jsx)(h.Z,Object.assign({direction:"left",in:!!l,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)(n.Z,Object.assign({container:!0},{children:l&&(0,o.jsx)(V,Object.assign({},{data:l,map:e,iconImage:W}),void 0)}),void 0)}),void 0),c]}),void 0)},J=(0,_.Z)((e=>({root:{width:150,display:"flex",position:"absolute",paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",boxShadow:"0px 0px 10px #b5aeae",overflowY:"scroll",height:"100%",left:0,zIndex:3,justifyContent:"center"},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),Q=e=>{const{map:t}=e,i=J();return(0,o.jsx)("div",Object.assign({className:i.root},{children:(0,o.jsx)(q,Object.assign({},{map:t}),void 0)}),void 0)};var ee=i(99302),te=i(14276);class ie{constructor(e,t,i,o){this.unitsList=e,this.map=t,this.idSource=i,this.idLayer=o}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.unitsList.map((e=>{if(e.sensor){const{latitude:t,longitude:i}=e.sensor;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]}}}}))}addToMap(){this.getInMap()?this.updateInMap():(this.map.addSource(this.idSource,{type:"geojson",cluster:!1,clusterMaxZoom:30,clusterRadius:50,data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"circle",source:this.idSource,paint:{"circle-color":"orange","circle-radius":20,"circle-stroke-width":15,"circle-stroke-color":"rgba(243, 93, 93, .4)"}}))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}}class oe{constructor(e,t,i,o){this.unit=o,this.map=e,this.idSource=t,this.idLayer=i}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return[this.unit].map((e=>{if(e&&e.sensor){const{latitude:t,longitude:i}=e.sensor;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]}}}return{}}))}addToMap(){this.getInMap()?this.updateInMap():(this.map.addSource(this.idSource,{type:"geojson",cluster:!1,clusterMaxZoom:30,clusterRadius:50,data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"circle",source:this.idSource,paint:{"circle-color":"rgba(35, 143, 225, .9)","circle-radius":25,"circle-stroke-width":10,"circle-stroke-color":"rgba(70, 221, 179, .4)"}})),this.centerMapOfUnit()}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap(),this.centerMapOfUnit()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}centerMapOfUnit(){if(this.unit&&this.unit.sensor){const{sensor:{longitude:e,latitude:t}}=this.unit,i=[e,t];this.map.setCenter(i)}}}var ae=i(79800),ne=i(74248),se=i(35573);class re{constructor(e,t,i,o,a){this.routeList=e,this.map=t,this.idSource=i,this.idLayer=o,this.fontSize=9,this.onClickElement=a}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.routeList.map((e=>({properties:{color:se.O[e.color].hex,out_color:"red",opacity:.9,opacity_border:0},geometry:{type:"LineString",coordinates:e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))}})))}addToMap(){!this.getInMap()&&this.routeList.length>0&&(this.map.getSource(this.idSource)||this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.getLayer(this.idLayer)||this.map.addLayer({id:this.idLayer,type:"line",source:this.idSource,paint:{"line-width":6,"line-color":["get","color"],"line-opacity":.5},layout:{"line-join":"round","line-cap":"round"},filter:["==","$type","LineString"]}),console.log(this.getInMap()),this.map.on("click",this.idLayer,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayer,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayer,(()=>{this.map.getCanvas().style.cursor=""})))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}}const de=({routeList:e,map:t})=>((0,s.useEffect)((()=>{const i=new re(e,t,"ROUTELIST_SOURCE","ROUTELIST_LAYER");return i.addToMap(),()=>{i.removeOfMap()}}),[]),null),ce=(e,t,i)=>{e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:JSON.parse(i)}}})},le=(e,t,i)=>{e.addLayer({id:t,type:"line",source:i,layout:{visibility:"visible"},paint:{"line-color":"#C6FF00","line-width":4}})};var ue=i(95090);const pe=(0,s.createContext)(null),he={modal:{display:"flex",width:"100%",height:"100vh",position:"relative",overflowY:"scroll"},containerModal:{maxWidth:"33%",position:"fixed",top:0,zIndex:1,left:"33%"}},me=({map:e})=>{const{excavatorInfoList:t}=(0,T.C)(R.kW),{truckInfoList:i}=(0,T.C)(ee.ej),{highlightTruckList:a}=(0,T.C)(C.Zz),{pinTruckInfo:n}=(0,T.C)(C.Cs),r=(0,T.T)(),d=(0,s.useMemo)((()=>{const t=i.filter((e=>e.sensor)),a=new te.c(t,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav",(e=>{if(e.features&&e.features.length>0){const{deviceId:t}=e.features[0].properties;if(t){const e=i.find((e=>e.deviceId===t));e&&r((0,S.dc)(e))}}}));return(0,o.jsx)(c.b,{truckList:t,truckListClass:a},void 0)}),[i]),u=(0,s.useMemo)((()=>{const i=t.filter((e=>e.sensor)),a=new te.c(i,e.current,"EXCAVATOR_LIST_SOURCE","EXCAVATOR_LIST_LAYER","excavator_nav",(e=>{if(e.features&&e.features.length>0){const{deviceId:i}=e.features[0].properties;if(i){const e=t.find((e=>e.deviceId===i));e&&r((0,S.Zh)(e))}}}));return(0,o.jsx)(l.N,{excavatorList:i,excavatorListClass:a},void 0)}),[t]);return(0,s.useEffect)((()=>{if(a.length>0&&i.length>0){const t=i.filter((e=>e.sensor&&a.find((t=>t.deviceId===e.deviceId)))),o=new ie(t,e.current,"HIGHLIGH_TRUCK_RESOURCE","HIGHLIGH_TRUCK_LAYER"),n=i.filter((e=>e.sensor)),s=new te.c(n,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav");o.getInMap()?o.updateInMap():(s.removeOfMap(),o.addToMap(),setTimeout((()=>{s.addToMap()}),10))}else new ie([],e.current,"HIGHLIGH_TRUCK_RESOURCE","HIGHLIGH_TRUCK_LAYER").removeOfMap()}),[a,i]),(0,s.useEffect)((()=>{if(n){const t=i.find((e=>e.deviceId===n.deviceId)),o=new oe(e.current,"PIN_TRUCK_SOURCE","PIN_TRUCK_LAYER",t);if(o.getInMap())o.updateInMap();else{const t=i.filter((e=>e.sensor)),a=new te.c(t,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav");a.removeOfMap(),o.addToMap(),a.addToMap()}}else new oe(e.current,"PIN_TRUCK_SOURCE","PIN_TRUCK_LAYER").removeOfMap()}),[n,i]),(0,o.jsxs)(o.Fragment,{children:[d,u]},void 0)};function ge(e){const{children:t,open:i,value:n}=e;return(0,o.jsx)(a.ZP,Object.assign({arrow:!0,color:"#075fcc",open:i,enterTouchDelay:0,placement:"bottom",title:n},{children:t}),void 0)}const ve=()=>{const e=(0,s.useRef)(null),t=(0,s.useRef)(null),[i,a]=(0,u._)("bearing_map_dispatch",0),[c,l]=(0,s.useState)(!1),h=(0,T.T)();(0,s.useEffect)((()=>()=>{e.current=null,t.current=null}),[]);const{state:m,polygonList:g,routeList:v,dmeCellList:j,padCellList:y,stockCellList:f,geofenceList:L}=(0,T.C)(C.WD);(0,s.useEffect)((()=>{c&&(0,ae.H)(t)}),[c]);const x=(0,s.useCallback)((e=>{const{nameDme:i,points_polygonDme:o,id_polygonDme:a,tonnesDme:n,volumeDme:s}=e.features[0].properties,r=`source_polygon_select_dme_${a}`,d=`layer_polygon_select_dme_${a}`;ce(t.current,r,o),le(t.current,d,r),h((0,S.Xm)({type:"dme",id_polygonDme:a,nameDme:i,points_polygonDme:o,tonnesDme:n,volumeDme:s,idSourceDme:r,idLayerDme:d}))}),[t]),b=(0,s.useCallback)((e=>{const{points_polygonTajo:i,id_polygonTajo:o,agTajo:a,agcnTajo:n,aliasTajo:s,alteTajo:r,asTajo:d,auTajo:c,auchTajo:l,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:g,heightTajo:v,litoTajo:j,materialTajo:y,namePolTajo:f,nameProjectTajo:L,onzasTajo:x,orezonetTajo:T,ptaucnTajo:C,sTajo:b,tonnesTajo:I,volumeTajo:O}=e.features[0].properties,_=`source_polygon_select_${o}`,E=`layer_polygon_select_${o}`;ce(t.current,_,i),le(t.current,E,_),h((0,S.Xm)({type:"tajo",idLayerTajo:E,idSourceTajo:_,points_polygonTajo:i,id_polygonTajo:o,agTajo:a,agcnTajo:n,aliasTajo:s,alteTajo:r,asTajo:d,auTajo:c,auchTajo:l,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:g,heightTajo:v,litoTajo:j,materialTajo:y,namePolTajo:f,nameProjectTajo:L,onzasTajo:x,orezonetTajo:T,ptaucnTajo:C,sTajo:b,tonnesTajo:I,volumeTajo:O}))}),[t]),I=(0,s.useCallback)((e=>{const{nameStock:i,id_polygonStock:o,points_polygonStock:a,altitudeStock:n,volumeStock:s}=e.features[0].properties,r=`source_polygon_select_stock_${o}`,d=`layer_polygon_select_Stock_${o}`;ce(t.current,r,a),le(t.current,d,r),h((0,S.Xm)({type:"stock",id_polygonStock:o,nameStock:i,points_polygonStock:a,altitudeStock:n,volumeStock:s,idSource:r,idLayer:d}))}),[t]),_=(0,s.useCallback)((e=>{const{namePad:i,points_Pad:o,id_Pad:a,tonnesPad:n,volumePad:s}=e.features[0].properties,r=`source_polygon_select_pad_${a}`,d=`layer_polygon_select_pad_${a}`;ce(t.current,r,o),le(t.current,d,r),h((0,S.Xm)({type:"pad",id_Pad:a,namePad:i,points_Pad:o,tonnesPad:n,volumePad:s,idSourPad:r,idLayerPad:d}))}),[t]),E=(0,s.useMemo)((()=>c&&m===ue.JD.DONE&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ne.f,Object.assign({},{polygonList:L,map:t.current,idSource:"GEOFENCELIST_SOURCE",idLayer:"GEOFENCELIST_LAYER",idSourceCentroid:"CENTROID_GEOFENCELIST_SOURCE",idLayerCentroid:"CENTROID_GEOFENCELIST_LAYER"}),void 0),(0,o.jsx)(ne.f,Object.assign({},{polygonList:j.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"DMELIST_SOURCE",idLayer:"DMELIST_LAYER",idSourceCentroid:"CENTROID_DMELIST_SOURCE",idLayerCentroid:"CENTROID_DMELIST_LAYER",haveCentroid:!0,onClickFeature:x}),void 0),(0,o.jsx)(ne.f,Object.assign({},{polygonList:f.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"STOCKLIST_SOURCE",idLayer:"STOCKLIST_LAYER",idSourceCentroid:"CENTROID_STOCKLIST_SOURCE",idLayerCentroid:"CENTROID_STOCKLIST_LAYER",haveCentroid:!0,onClickFeature:I}),void 0),(0,o.jsx)(ne.f,Object.assign({},{polygonList:y.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"PADLIST_SOURCE",idLayer:"PADLIST_LAYER",idSourceCentroid:"CENTROID_PADLIST_SOURCE",idLayerCentroid:"CENTROID_PADLIST_LAYER",haveCentroid:!0,onClickFeature:_}),void 0),(0,o.jsx)(ne.f,Object.assign({},{polygonList:g.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"PITLIST_SOURCE",idLayer:"PITLIST_LAYER",idSourceCentroid:"CENTROID_PITLIST_SOURCE",idLayerCentroid:"CENTROID_PITLIST_LAYER",haveCentroid:!0,onClickFeature:b}),void 0),(0,o.jsx)(de,Object.assign({},{routeList:v,map:t.current}),void 0),(0,o.jsx)(me,{map:t},void 0)]},void 0)),[c,m]);return(0,o.jsx)(pe.Provider,Object.assign({value:t.current},{children:(0,o.jsxs)("div",Object.assign({style:he.modal},{children:[(0,o.jsx)(n.Z,Object.assign({container:!0,style:he.containerModal},{children:(0,o.jsx)(p.Z,{defaultValue:0,ValueLabelComponent:ge,getAriaValueText:function(e){return`${e}º`},"aria-labelledby":"discrete-slider-small-steps",valueLabelDisplay:"auto",step:5,marks:!0,min:0,value:i,max:360,onChange:(e,t)=>{a(Number(t))}},void 0)}),void 0),t&&t.current&&(0,o.jsx)(Q,{map:t.current},void 0),(0,o.jsxs)(n.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:[(0,o.jsx)(r.Z,Object.assign({map:t,dragRotate:!1,style:"mapbox://styles/dispatchgat/ckqqsfc2y46bo17sf1y29zwnj",mapContainer:e,bearing:Number(i),pitch:15},{lat:-7.6163,lng:-78.196,zoom:14,setLoad:l}),"map2"),E]}),void 0),t&&t.current&&(0,o.jsx)(d.q,{map:t.current},void 0),(0,o.jsx)(O,Object.assign({},{map:t.current}),void 0)]}),void 0)}),void 0)},je=()=>(0,o.jsx)(ve,{},void 0)}}]);