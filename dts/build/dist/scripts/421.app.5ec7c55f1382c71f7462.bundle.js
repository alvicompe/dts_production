(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[421],{86905:(e,t,i)=>{e.exports=i.p+"322f531ddb14529b83bd73182d28de44.png"},77501:(e,t,i)=>{e.exports=i.p+"89f059a2790e391b484a369a3b9f92fb.png"},55956:(e,t,i)=>{e.exports=i.p+"f7bda309f804ba7abdd57c3272cae75b.svg"},84299:(e,t,i)=>{e.exports=i.p+"6349bce6aa562fa9a965484651c725c9.svg"},51790:(e,t,i)=>{e.exports=i.p+"20557549695e4a02b8f5e299c9687642.png"},79800:(e,t,i)=>{"use strict";i.d(t,{H:()=>o});const o=e=>{e.current.loadImage(i(51790),(function(t,i){if(t)throw t;e.current.addImage("truck_nav",i)})),e.current.loadImage(i(86905),(function(t,i){if(t)throw t;e.current.addImage("excavator_nav",i)})),e.current.loadImage(i(77501),(function(t,i){if(t)throw t;e.current.addImage("pickup_nav",i)}))}},16886:(e,t,i)=>{"use strict";i.d(t,{N:()=>s});var o=i(85893),a=i(67294);const s=({excavatorListClass:e,excavatorList:t})=>((0,a.useEffect)((()=>{e.addToMap()}),[]),(0,a.useEffect)((()=>{e.updateInMap()}),[t]),(0,o.jsx)(o.Fragment,{},void 0))},26271:(e,t,i)=>{"use strict";i.d(t,{b:()=>n});var o=i(85893),a=i(67294),s=i(6777);const n=({truckListClass:e,truckList:t})=>(s.ET,(0,a.useEffect)((()=>{e.addToMap()}),[]),(0,a.useEffect)((()=>{e.updateInMap()}),[t]),(0,o.jsx)(o.Fragment,{},void 0))},74248:(e,t,i)=>{"use strict";i.d(t,{f:()=>s});var o=i(67294),a=i(52573);const s=({polygonList:e,idSource:t,idLayer:i,idSourceCentroid:s,idLayerCentroid:n,map:r,haveCentroid:d,onClickFeature:c})=>((0,o.useEffect)((()=>{const o=new a.z(e,r,t,i,s,n,c,d);return o.addToMap(),()=>{o.removeOfMap()}}),[e]),null)},48101:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var o=i(85893),a=i(67294),s=i(34880);const n=i(6158);n.accessToken=s.c3;const r=({dragRotate:e,map:t,pitch:i,bearing:s,mapContainer:r,lng:d,lat:c,zoom:l,setLoad:u,style:p,height:h})=>((0,a.useEffect)((()=>{console.log("map.current",t.current,s),t.current||(r&&(t.current=new n.Map({container:r.current,style:p,center:[d,c],pitch:i,bearing:s,zoom:l,antialias:!0,dragRotate:e})),console.log("inianco"))}),[t,r]),(0,a.useEffect)((()=>{t.current&&(t.current.addControl(new n.FullscreenControl,"bottom-left"),t.current.addControl(new n.NavigationControl,"bottom-left"),t.current.on("move",(()=>{})),t.current.on("click",(e=>{console.log(e.lngLat)})),t.current.on("load",(()=>{t.current&&u(!0)})))}),[t]),(0,a.useEffect)((()=>{t.current&&t.current.setBearing(s)}),[s]),(0,o.jsx)("div",{ref:r,style:{flex:1,height:h||"100vh",width:"100%"},className:"map-container"},void 0))},14276:(e,t,i)=>{"use strict";i.d(t,{c:()=>o});class o{constructor(e,t,i,o,a,s){this.unitsList=e,this.map=t,this.idSource=i,this.idLayer=o,this.iconImagen=a,this.offsetY=-2.1,this.fontSize=9,this.onClickElement=s}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.unitsList.map((e=>{const{latitude:t,longitude:i,direction:o}=e.sensor,a=e.deviceAlias.split("-"),s=a.length>1&&""!==a[1].trim()?`${a[0].substr(0,1)}${a[1].substr(-2)}`:e.deviceAlias;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]},properties:{deviceId:e.deviceId,rotate:o,name:`${s}`,rotation:-180+o,offsetdata:[0,0]}}}))}addToMap(){!this.getInMap()&&this.unitsList.length>0&&(this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"symbol",source:this.idSource,layout:{"icon-image":this.iconImagen,"icon-size":.08,"icon-ignore-placement":!0,"icon-allow-overlap":!0,"icon-rotate":["get","rotate"]}}),this.map.addLayer({id:`LABEL_${this.idLayer}`,type:"symbol",source:this.idSource,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":this.fontSize,"text-rotate":["get","rotation"],"text-offset":["get","offsetdata"],"text-allow-overlap":!0},paint:{"text-color":"#fff","text-halo-color":"#00296b","text-halo-width":4}}),this.map.on("click",this.idLayer,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayer,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayer,(()=>{this.map.getCanvas().style.cursor=""})))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeLayer(`LABEL_${this.idLayer}`),this.map.removeSource(this.idSource))}}},52573:(e,t,i)=>{"use strict";i.d(t,{z:()=>a});var o=i(35573);class a{constructor(e,t,i,o,a,s,n,r){this.polygonList=e,this.map=t,this.idSource=i,this.idLayer=o,this.idSourceCentroid=a,this.idLayerCentroid=s,this.fontSize=9,this.onClickElement=n,this.haveCentroid=r}getInMap(){return this.map.getSource(this.idSource)}getCenterInMap(){return this.map.getSource(this.idSourceCentroid)}generateCentroids(){return this.polygonList.map((e=>{var t,i,o;if(!e.centroid)return{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}};const{latitude:a,longitude:s}=e.centroid;return{type:"Feature",geometry:{type:"Point",coordinates:[s,a]},properties:{name:`${e.name}${e.material?`-${e.material.type}`:""}`,points_polygonTajo:e.pointList.map((e=>[e.longitude,e.latitude])),name_polygon:e.name,name_material:null===(t=e.material)||void 0===t?void 0:t.type,id_polygonTajo:e.id,agTajo:e.ag,agcnTajo:e.agcn,alteTajo:e.alte,asTajo:e.as,auTajo:e.au,auchTajo:e.auch,altitudeTajo:e.altitude,descripcionTajo:"",heightTajo:e.height,litoTajo:e.litio,materialTajo:null===(i=e.material)||void 0===i?void 0:i.type,namePolTajo:e.name,nameProjectTajo:e.nameProject,onzasTajo:e.onzas,orezonetTajo:e.orezonet,ptaucnTajo:e.ptaucn,sTajo:e.s,tonnesTajo:e.tonnes,volumeTajo:e.volume,nameDme:`${e.name}`,points_polygonDme:e.pointList.map((e=>[e.longitude,e.latitude])),id_polygonDme:e.id,tonnesDme:e.tonnes,volumeDme:e.volume,namePad:`${e.name}`,id_Pad:`${e.id}_pad`,points_Pad:e.pointList.map((e=>[e.longitude,e.latitude])),tonnesPad:e.tonnes,volumePad:e.volume,nameStock:`${e.name}`,id_polygonStock:e.id,points_polygonStock:e.pointList.map((e=>[e.longitude,e.latitude])),materialStock:null===(o=e.material)||void 0===o?void 0:o.type,altitudeStock:e.altitude,volumeStock:e.volume}}}))}generateFeatures(){return this.polygonList.map((e=>({type:"Feature",properties:{color:o.O[e.color]?o.O[e.color].hex:e.color,out_color:"blue",opacity:this.haveCentroid?1:.2,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))]}})))}addToMap(){!this.getInMap()&&this.polygonList.length>0?(this.map.getSource(this.idSource)||this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.getLayer(this.idLayer)||this.map.addLayer({id:this.idLayer,type:"fill",source:this.idSource,paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),this.map.getLayer(`BORDER_${this.idLayer}`)||this.map.addLayer({id:`BORDER_${this.idLayer}`,type:"line",source:this.idSource,paint:{"line-color":["get","out_color"],"line-width":2,"line-opacity":["get","opacity_border"]},filter:["==","$type","Polygon"]}),this.haveCentroid&&(this.map.getSource(this.idSourceCentroid)||this.map.addSource(this.idSourceCentroid,{type:"geojson",data:{type:"FeatureCollection",features:this.generateCentroids()}}),this.map.getLayer(this.idLayerCentroid)||this.map.addLayer({id:this.idLayerCentroid,type:"symbol",source:this.idSourceCentroid,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":this.fontSize},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})),this.map.on("click",this.idLayerCentroid,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor=""}))):this.getInMap()&&this.updateInMap()}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeLayer(`BORDER_${this.idLayer}`),this.map.removeSource(this.idSource),this.getCenterInMap()&&(this.map.removeLayer(this.idLayerCentroid),this.map.removeSource(this.idSourceCentroid)))}}},64243:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Ie});var o=i(85893),a=i(868),s=i(41749),n=i(67294),r=i(48101),d=i(80599),c=i(26271),l=i(16886),u=i(78479),p=i(44845),h=i(82285),m=i(56847),g=i(79895),v=i(82302),j=i(83750),y=i(57394),x=i(88222),f=i(99613),L=i(73914),b=i(73855),T=i(70989),S=i(18973);const C=(0,L.Z)({table:{minWidth:100}}),O={root:{position:"fixed",width:"100%",height:"100%",zIndex:2},modal:{width:"20%",height:100,position:"fixed",zIndex:3,top:0,background:"",left:"40%",right:"40%"}},I=({map:e})=>{const{selectedFeature:t}=(0,b.C)(S.GH),i=(0,b.T)(),a=C();if(!t)return null;const{type:s}=t;switch(s){case"stock":const{nameStock:s,idLayer:n,idSource:r,volumeStock:d,altitudeStock:c}=t;function l(){i((0,T.tP)()),e.removeLayer(n),e.removeSource(r)}function u(e,t){return{name:e,valor:t}}const p=[u("Altitud",c),u("Volumen",d)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:l,style:O.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:O.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:a.table,size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,{children:"Nombre"},void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:s}),void 0)]},void 0)},void 0),(0,o.jsx)(f.Z,{children:p.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"dme":const{nameDme:L,idLayerDme:b,idSourceDme:S,tonnesDme:C,volumeDme:I}=t;function _(){i((0,T.tP)()),e.removeLayer(b),e.removeSource(S)}function E(e,t){return{name:e,valor:t}}const Z=[E("Toneladas",C),E("Volumen",I)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:_,style:O.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:O.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,{children:"Nombre"},void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:L}),void 0)]},void 0)},void 0),(0,o.jsx)(f.Z,{children:Z.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"pad":const{namePad:k,tonnesPad:M,volumePad:R,idSourPad:w,idLayerPad:F}=t;function P(){i((0,T.tP)()),e.removeLayer(F),e.removeSource(w)}function D(e,t){return{name:e,valor:t}}const z=[D("Volumen",R),D("Toneladas",M)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:P,style:O.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:O.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:"styles.table",size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,{children:"Nombre"},void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:k}),void 0)]},void 0)},void 0),(0,o.jsx)(f.Z,{children:z.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);case"tajo":const{namePolTajo:A,idLayerTajo:N,idSourceTajo:U,agTajo:$,altitudeTajo:Y,materialTajo:H,nameProjectTajo:K,onzasTajo:G,tonnesTajo:B,volumeTajo:W,auTajo:V}=t;function X(){i((0,T.tP)()),e.removeLayer(N),e.removeSource(U)}function q(e,t){return{name:e,valor:t}}const J=[q("Proyecto",K),q("Material",H),q("Ag",$),q("Au",V),q("Onzas",G),q("Altitud",Y),q("Toneladas",B),q("Volumen",W)];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:X,style:O.root},void 0),(0,o.jsx)(h.Z,Object.assign({direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)("div",Object.assign({style:O.modal},{children:(0,o.jsx)(m.Z,Object.assign({component:g.Z},{children:(0,o.jsxs)(v.Z,Object.assign({className:O.table,size:"small","aria-label":"a dense table"},{children:[(0,o.jsx)(j.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,{children:"Polígono"},void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:A}),void 0)]},void 0)},void 0),(0,o.jsx)(f.Z,{children:J.map((e=>(0,o.jsxs)(y.Z,{children:[(0,o.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:e.name}),void 0),(0,o.jsx)(x.Z,Object.assign({align:"center"},{children:e.valor}),void 0)]},e.name)))},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)]},void 0);default:return(0,o.jsx)(o.Fragment,{},void 0)}};var _=i(41120),E=i(10046),Z=i(62822),k=i(50998),M=i(95757),R=i(14125),w=i(69110),F=i(66037),P=i(22318),D=i(55517),z=i(17812),A=i(33681),N=i(83765),U=i(34562),$=i(50573),Y=i(93584),H=i(86282);const K=i(84299),G=i(55956),B=(0,_.Z)((e=>({nested:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),W=({data:e,map:t,isSelected:i})=>{const r=B(),d=(0,b.T)(),{loading:c}=(0,H.Kx)(e),{lastDateString:l,lostConnection:u}=(0,H.AT)(e),{selectedExcavator:p}=(0,b.C)(S.mW),h=(0,n.useCallback)((()=>{p&&e.deviceId===p.deviceId?d((0,T.yS)()):d((0,T.Zh)(e))}),[p]),m=(0,n.useCallback)((()=>{const{sensor:{longitude:i,latitude:o}}=e,a=[i,o];t.setCenter(a)}),[e.sensor]),v=(0,n.useCallback)((()=>p&&p.deviceId===e.deviceId),[p]),j=e.operationList&&e.operationList.length>0?e.operationList[0].truckList.length:0;return(0,o.jsx)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:(0,o.jsxs)(g.Z,Object.assign({elevation:i?8:4,style:{width:"100%"}},{children:[(0,o.jsx)(k.Z,Object.assign({dense:!0,disableGutters:!0,button:!0,selected:v(),onClick:h,style:{paddingLeft:4}},{children:(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsx)(M.Z,{primary:e.deviceAlias,secondary:`CAMIONES[${j}]`},void 0)}),void 0)}),void 0),(0,o.jsx)(F.Z,Object.assign({in:v(),timeout:"auto",unmountOnExit:!0,className:r.nested},{children:(0,o.jsxs)(Z.Z,Object.assign({dense:!0,disablePadding:!0},{children:[(0,o.jsx)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:(0,o.jsx)(M.Z,{primary:(0,o.jsx)(a.ZP,Object.assign({title:`Última comunicación, i. real: ${e.realInterval} seg`,"aria-label":"add"},{children:(0,o.jsxs)("div",Object.assign({style:{display:"flex"}},{children:[(0,o.jsx)(N.Z,{color:"action",fontSize:"small"},void 0),(0,o.jsx)(P.Z,Object.assign({variant:"body1",style:{marginLeft:4},color:"initial"},{children:l}),void 0)]}),void 0)}),void 0)},void 0)}),void 0),(0,o.jsx)(D.Z,{},void 0),(0,o.jsxs)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,o.jsx)("img",{width:24,src:K},void 0),(0,o.jsx)(M.Z,{style:{marginLeft:4},primary:`${j} Activos`},void 0)]}),void 0),(0,o.jsxs)(k.Z,Object.assign({style:{padding:4},dense:!0},{children:[(0,o.jsx)("img",{width:24,src:G},void 0),(0,o.jsx)(M.Z,{style:{marginLeft:4},primary:"[num] cola"},void 0)]}),void 0)]}),void 0)}),void 0),(0,o.jsxs)(s.Z,Object.assign({container:!0,style:{padding:"0px 4px"},alignItems:"center"},{children:[(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsx)(a.ZP,Object.assign({title:"Ubicar",style:{textAlign:"center",flex:1}},{children:(0,o.jsx)(z.Z,Object.assign({onClick:m,size:"small"},{children:(0,o.jsx)(U.Z,{fontSize:"small"},void 0)}),void 0)}),void 0)}),void 0),(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,o.jsx)($.Z,{style:{color:u?Y.J$:Y.sb},fontSize:"small"},void 0),(0,o.jsx)(P.Z,{style:{fontSize:8,color:"rgba(0, 0, 0, 0.54)"}},void 0)]}),void 0)}),void 0)]}),void 0),c&&(0,o.jsx)(A.Z,{color:"primary"},void 0)]}),void 0)}),void 0)},V=i(53292),X=(0,_.Z)((e=>({root:{},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3}}))),q=({map:e})=>{const t=X(),i=(0,b.T)(),{excavatorInfoList:a}=(0,b.C)(R.kW),{selectedExcavator:r}=(0,b.C)(S.mW),{selectedExcavatorMap:d}=(0,b.C)(S.Cs);(0,n.useEffect)((()=>{if(r&&r.id&&r.operationList&&r.operationList.length>0){const e=a.find((e=>e.deviceId===r.deviceId));e&&e.id&&e.operationList&&e.operationList.length>0&&(e.operationList[0].truckList.length!=r.operationList[0].truckList.length||e.sensor.latitude!==r.sensor.latitude)&&i((0,T.Zh)(e))}}),[a]);const c=(0,n.useMemo)((()=>(0,o.jsx)(s.Z,Object.assign({container:!0},{children:a.map((t=>t.sensor?(0,o.jsx)(W,Object.assign({},{key:t.deviceId,data:t,map:e,isSelected:!0}),void 0):(0,o.jsx)(s.Z,Object.assign({item:!0,md:12},{children:(0,o.jsx)(E.Z,Object.assign({width:"100%",paddingBottom:.2,paddingTop:.2},{children:(0,o.jsx)(w.I,{unit:t},void 0)}),void 0)}),t.deviceId)))}),void 0)),[a]),l=a.find((e=>e.deviceId===(null==d?void 0:d.deviceId)));return(0,o.jsxs)(Z.Z,Object.assign({className:t.root,disablePadding:!0},{children:[(0,o.jsxs)(k.Z,Object.assign({dense:!0},{children:[(0,o.jsx)("div",Object.assign({style:{marginRight:8}},{children:(0,o.jsx)("img",{alt:"Excavator",width:24,src:V},void 0)}),void 0),(0,o.jsx)(M.Z,{primary:"Excavators"},void 0)]}),void 0),(0,o.jsx)(h.Z,Object.assign({direction:"left",in:!!l,mountOnEnter:!0,unmountOnExit:!0},{children:(0,o.jsx)(s.Z,Object.assign({container:!0},{children:l&&(0,o.jsx)(W,Object.assign({},{data:l,map:e,iconImage:V}),void 0)}),void 0)}),void 0),c]}),void 0)},J=(0,_.Z)((e=>({root:{width:150,display:"flex",position:"absolute",paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",boxShadow:"0px 0px 10px #b5aeae",overflowY:"scroll",height:"100%",left:0,zIndex:3,justifyContent:"center"},root_noFixed:{width:150,paddingRight:8,paddingLeft:8,backgroundColor:"#fbfeffbf",overflowY:"scroll",height:"100vh",zIndex:3},nested:{paddingLeft:e.spacing(1),paddingTop:e.spacing(.5),paddingBottom:e.spacing(1)}}))),Q=e=>{const{map:t}=e,i=J();return(0,o.jsx)("div",Object.assign({className:i.root},{children:(0,o.jsx)(q,Object.assign({},{map:t}),void 0)}),void 0)};var ee=i(99302),te=i(14276);class ie{constructor(e,t,i,o){this.unitsList=e,this.map=t,this.idSource=i,this.idLayer=o}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.unitsList.map((e=>{console.log("d.",e);const{latitude:t,longitude:i}=e.sensor;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]}}}))}addToMap(){this.getInMap()?(console.log("else"),this.updateInMap()):(this.map.addSource(this.idSource,{type:"geojson",cluster:!1,clusterMaxZoom:30,clusterRadius:50,data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"circle",source:this.idSource,paint:{"circle-color":"orange","circle-radius":20,"circle-stroke-width":15,"circle-stroke-color":"rgba(243, 93, 93, .4)"}}))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}}class oe{constructor(e,t,i,o){this.unit=o,this.map=e,this.idSource=t,this.idLayer=i}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return[this.unit].map((e=>{if(e){const{latitude:t,longitude:i}=e.sensor;return{type:"Feature",geometry:{type:"Point",coordinates:[i,t]}}}return{}}))}addToMap(){this.getInMap()?this.updateInMap():(this.map.addSource(this.idSource,{type:"geojson",cluster:!1,clusterMaxZoom:30,clusterRadius:50,data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.addLayer({id:this.idLayer,type:"circle",source:this.idSource,paint:{"circle-color":"rgba(35, 143, 225, .9)","circle-radius":25,"circle-stroke-width":10,"circle-stroke-color":"rgba(70, 221, 179, .4)"}})),this.centerMapOfUnit()}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap(),this.centerMapOfUnit()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}centerMapOfUnit(){if(this.unit){const{sensor:{longitude:e,latitude:t}}=this.unit,i=[e,t];this.map.setCenter(i)}}}var ae=i(79800),se=i(74248),ne=i(35573);class re{constructor(e,t,i,o,a){this.routeList=e,this.map=t,this.idSource=i,this.idLayer=o,this.fontSize=9,this.onClickElement=a}getInMap(){return this.map.getSource(this.idSource)}generateFeatures(){return this.routeList.map((e=>({properties:{color:ne.O[e.color].hex,out_color:"red",opacity:.9,opacity_border:0},geometry:{type:"LineString",coordinates:e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))}})))}addToMap(){!this.getInMap()&&this.routeList.length>0&&(this.map.getSource(this.idSource)||this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.getLayer(this.idLayer)||this.map.addLayer({id:this.idLayer,type:"line",source:this.idSource,paint:{"line-width":6,"line-color":["get","color"],"line-opacity":.5},layout:{"line-join":"round","line-cap":"round"},filter:["==","$type","LineString"]}),console.log(this.getInMap()),this.map.on("click",this.idLayer,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayer,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayer,(()=>{this.map.getCanvas().style.cursor=""})))}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeSource(this.idSource))}}const de=({routeList:e,map:t})=>((0,n.useEffect)((()=>{const i=new re(e,t,"ROUTELIST_SOURCE","ROUTELIST_LAYER");return i.addToMap(),()=>{i.removeOfMap()}}),[]),null),ce=(e,t,i)=>{e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:JSON.parse(i)}}})},le=(e,t,i)=>{e.addLayer({id:t,type:"line",source:i,layout:{visibility:"visible"},paint:{"line-color":"#C6FF00","line-width":4}})};var ue=i(95090),pe=i(32994),he=i(81250),me=i(73728),ge=i(33758),ve=i(33901);const je=i(69711),ye=({actionClick:e})=>{const[t,i]=(0,n.useState)(!1),{truckInfoList:a}=(0,H.Md)(),{statusClick:s}=(0,b.C)(me.qd),r=(0,b.T)(),d=s?"Trucks":"",c=(0,n.useMemo)((()=>a.filter((e=>{var t;return 0===(null===(t=e.operationList)||void 0===t?void 0:t.length)}))),[a]);return(0,o.jsx)(o.Fragment,{children:c.length>0&&(0,o.jsxs)(E.Z,Object.assign({style:{bottom:"12px",position:"absolute",left:"15px",zIndex:4}},{children:[(0,o.jsx)(P.Z,Object.assign({style:{fontSize:"12px",textTransform:"capitalize"},variant:"subtitle1"},{children:"Without Operation"}),void 0),(0,o.jsxs)(ge.Z,Object.assign({style:{width:"auto"},variant:"extended",size:"small",color:"primary",onClick:()=>{r((0,me.o)(!s))}},{children:[(0,o.jsx)("div",Object.assign({style:{borderRadius:"50%",backgroundColor:"white",opacity:.8,width:"24px",color:"black"}},{children:(0,o.jsx)(P.Z,Object.assign({style:{fontSize:"12px",fontWeight:"bold"},variant:"subtitle1"},{children:c.length}),void 0)}),void 0),(0,o.jsx)(ve.Z,{style:{width:"22px",height:"22px",marginLeft:"4px"},variant:"square",src:je},void 0),(0,o.jsx)(P.Z,Object.assign({style:{fontSize:"10px",textTransform:"capitalize",marginLeft:"4px",color:"white"},variant:"body2"},{children:d}),void 0)]}),void 0)]}),void 0)},void 0)},xe=i(69711),fe=(0,_.Z)((e=>({labelTruck:{position:"absolute",fontSize:"11px",top:0},container:{"&::-webkit-scrollbar":{display:"block",backgroundColor:"white"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#c1c1c1"}}}))),Le=()=>{const e=fe(),{truckInfoList:t,truckInfoListFilter:i}=(0,H.Md)(),{statusClick:a}=(0,b.C)(me.qd),r=(0,b.T)(),d=(0,n.useRef)();(0,n.useEffect)((()=>{r((0,me.o)(!!a))}),[]);const c=(0,n.useMemo)((()=>t.filter((e=>{var t;return 0===(null===(t=e.operationList)||void 0===t?void 0:t.length)}))),[t]),l=(0,n.useMemo)((()=>c.map((t=>(0,o.jsx)("div",Object.assign({style:{display:"flex",marginLeft:"6px"}},{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center",style:{height:"auto"},justifyContent:"center"},{children:[(0,o.jsxs)(P.Z,Object.assign({className:e.labelTruck,variant:"caption"},{children:["C-",t.deviceAlias.substring(6,9)]}),void 0),(0,o.jsx)("img",{src:xe,width:"28px"},void 0)]}),void 0)}),t.deviceId)))),[c]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ye,{},void 0),a&&c.length>0&&(0,o.jsx)(g.Z,Object.assign({style:{zIndex:4,paddingTop:"4px",boxShadow:"0px 0px 10px #b5aeae",position:"absolute",bottom:0}},{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"row",alignContent:"space-between"},{children:[(0,o.jsx)(z.Z,Object.assign({onClick:()=>{d.current.scrollTo(d.current.scrollLeft-30,0)}},{children:(0,o.jsx)(pe.Z,{},void 0)}),void 0),(0,o.jsx)("div",Object.assign({className:e.container,ref:d,style:{display:"flex",flexWrap:"nowrap",whiteSpace:"nowrap",overflow:"auto important!",maxWidth:"720px",scrollbarWidth:"auto",overflowX:"auto",paddingTop:"12px",position:"relative"}},{children:l}),void 0),(0,o.jsx)(z.Z,Object.assign({onClick:()=>{d.current.scrollTo(d.current.scrollLeft+30,0)}},{children:(0,o.jsx)(he.Z,{},void 0)}),void 0)]}),void 0)}),void 0)]},void 0)},be=(0,n.createContext)(null),Te={modal:{display:"flex",width:"100%",height:"100vh",position:"relative",overflowY:"scroll"},containerModal:{maxWidth:"33%",position:"fixed",top:0,zIndex:1,left:"33%"}},Se=({map:e})=>{const{excavatorInfoList:t}=(0,b.C)(R.kW),{truckInfoList:i}=(0,b.C)(ee.ej),{highlightTruckList:a}=(0,b.C)(S.Zz),{pinTruckInfo:s}=(0,b.C)(S.Cs),r=(0,b.T)(),d=(0,n.useMemo)((()=>{const t=i.filter((e=>e.sensor)),a=new te.c(t,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav",(e=>{if(e.features&&e.features.length>0){const{deviceId:t}=e.features[0].properties;if(t){const e=i.find((e=>e.deviceId===t));e&&r((0,T.dc)(e))}}}));return(0,o.jsx)(c.b,{truckList:t,truckListClass:a},void 0)}),[i]),u=(0,n.useMemo)((()=>{const i=t.filter((e=>e.sensor)),a=new te.c(i,e.current,"EXCAVATOR_LIST_SOURCE","EXCAVATOR_LIST_LAYER","excavator_nav",(e=>{if(e.features&&e.features.length>0){const{deviceId:i}=e.features[0].properties;if(i){const e=t.find((e=>e.deviceId===i));e&&r((0,T.Zh)(e))}}}));return(0,o.jsx)(l.N,{excavatorList:i,excavatorListClass:a},void 0)}),[t]);return(0,n.useEffect)((()=>{if(a.length>0&&i.length>0){const t=i.filter((e=>e.sensor&&a.find((t=>t.deviceId===e.deviceId)))),o=new ie(t,e.current,"HIGHLIGH_TRUCK_RESOURCE","HIGHLIGH_TRUCK_LAYER"),s=i.filter((e=>e.sensor)),n=new te.c(s,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav");o.getInMap()?o.updateInMap():(n.removeOfMap(),o.addToMap(),setTimeout((()=>{n.addToMap()}),10))}else new ie([],e.current,"HIGHLIGH_TRUCK_RESOURCE","HIGHLIGH_TRUCK_LAYER").removeOfMap()}),[a,i]),(0,n.useEffect)((()=>{if(s){const t=i.find((e=>e.deviceId===s.deviceId)),o=new oe(e.current,"PIN_TRUCK_SOURCE","PIN_TRUCK_LAYER",t);if(o.getInMap())o.updateInMap();else{const t=i.filter((e=>e.sensor)),a=new te.c(t,e.current,"TRUCK_LIST_SOURCE","TRUCK_LIST_LAYER","truck_nav");a.removeOfMap(),o.addToMap(),a.addToMap()}}else new oe(e.current,"PIN_TRUCK_SOURCE","PIN_TRUCK_LAYER").removeOfMap()}),[s,i]),(0,o.jsxs)(o.Fragment,{children:[d,u]},void 0)};function Ce(e){const{children:t,open:i,value:s}=e;return(0,o.jsx)(a.ZP,Object.assign({arrow:!0,color:"#075fcc",open:i,enterTouchDelay:0,placement:"bottom",title:s},{children:t}),void 0)}const Oe=()=>{const e=(0,n.useRef)(null),t=(0,n.useRef)(null),[i,a]=(0,u._)("bearing_map_dispatch",0),[c,l]=(0,n.useState)(!1),h=(0,b.T)();(0,n.useEffect)((()=>(console.log("rendeing"),()=>{console.log("desmontDispa"),e.current=null,t.current=null})),[]);const{state:m,polygonList:g,routeList:v,dmeCellList:j,padCellList:y,stockCellList:x,geofenceList:f}=(0,b.C)(S.WD);(0,n.useEffect)((()=>{c&&(0,ae.H)(t)}),[c]);const L=(0,n.useCallback)((e=>{const{nameDme:i,points_polygonDme:o,id_polygonDme:a,tonnesDme:s,volumeDme:n}=e.features[0].properties,r=`source_polygon_select_dme_${a}`,d=`layer_polygon_select_dme_${a}`;ce(t.current,r,o),le(t.current,d,r),h((0,T.Xm)({type:"dme",id_polygonDme:a,nameDme:i,points_polygonDme:o,tonnesDme:s,volumeDme:n,idSourceDme:r,idLayerDme:d}))}),[t]),C=(0,n.useCallback)((e=>{const{points_polygonTajo:i,id_polygonTajo:o,agTajo:a,agcnTajo:s,aliasTajo:n,alteTajo:r,asTajo:d,auTajo:c,auchTajo:l,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:g,heightTajo:v,litoTajo:j,materialTajo:y,namePolTajo:x,nameProjectTajo:f,onzasTajo:L,orezonetTajo:b,ptaucnTajo:S,sTajo:C,tonnesTajo:O,volumeTajo:I}=e.features[0].properties,_=`source_polygon_select_${o}`,E=`layer_polygon_select_${o}`;ce(t.current,_,i),le(t.current,E,_),h((0,T.Xm)({type:"tajo",idLayerTajo:E,idSourceTajo:_,points_polygonTajo:i,id_polygonTajo:o,agTajo:a,agcnTajo:s,aliasTajo:n,alteTajo:r,asTajo:d,auTajo:c,auchTajo:l,centroidTajo:u,color:p,altitudeTajo:m,descripcionTajo:g,heightTajo:v,litoTajo:j,materialTajo:y,namePolTajo:x,nameProjectTajo:f,onzasTajo:L,orezonetTajo:b,ptaucnTajo:S,sTajo:C,tonnesTajo:O,volumeTajo:I}))}),[t]),O=(0,n.useCallback)((e=>{const{nameStock:i,id_polygonStock:o,points_polygonStock:a,altitudeStock:s,volumeStock:n}=e.features[0].properties,r=`source_polygon_select_stock_${o}`,d=`layer_polygon_select_Stock_${o}`;ce(t.current,r,a),le(t.current,d,r),h((0,T.Xm)({type:"stock",id_polygonStock:o,nameStock:i,points_polygonStock:a,altitudeStock:s,volumeStock:n,idSource:r,idLayer:d}))}),[t]),_=(0,n.useCallback)((e=>{const{namePad:i,points_Pad:o,id_Pad:a,tonnesPad:s,volumePad:n}=e.features[0].properties,r=`source_polygon_select_pad_${a}`,d=`layer_polygon_select_pad_${a}`;ce(t.current,r,o),le(t.current,d,r),h((0,T.Xm)({type:"pad",id_Pad:a,namePad:i,points_Pad:o,tonnesPad:s,volumePad:n,idSourPad:r,idLayerPad:d}))}),[t]),E=(0,n.useMemo)((()=>c&&m===ue.JD.DONE&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(se.f,Object.assign({},{polygonList:f,map:t.current,idSource:"GEOFENCELIST_SOURCE",idLayer:"GEOFENCELIST_LAYER",idSourceCentroid:"CENTROID_GEOFENCELIST_SOURCE",idLayerCentroid:"CENTROID_GEOFENCELIST_LAYER"}),void 0),(0,o.jsx)(se.f,Object.assign({},{polygonList:j.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"DMELIST_SOURCE",idLayer:"DMELIST_LAYER",idSourceCentroid:"CENTROID_DMELIST_SOURCE",idLayerCentroid:"CENTROID_DMELIST_LAYER",haveCentroid:!0,onClickFeature:L}),void 0),(0,o.jsx)(se.f,Object.assign({},{polygonList:x.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"STOCKLIST_SOURCE",idLayer:"STOCKLIST_LAYER",idSourceCentroid:"CENTROID_STOCKLIST_SOURCE",idLayerCentroid:"CENTROID_STOCKLIST_LAYER",haveCentroid:!0,onClickFeature:O}),void 0),(0,o.jsx)(se.f,Object.assign({},{polygonList:y.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"PADLIST_SOURCE",idLayer:"PADLIST_LAYER",idSourceCentroid:"CENTROID_PADLIST_SOURCE",idLayerCentroid:"CENTROID_PADLIST_LAYER",haveCentroid:!0,onClickFeature:_}),void 0),(0,o.jsx)(se.f,Object.assign({},{polygonList:g.filter((e=>e.state!==ue.p$.FINISHED)),map:t.current,idSource:"PITLIST_SOURCE",idLayer:"PITLIST_LAYER",idSourceCentroid:"CENTROID_PITLIST_SOURCE",idLayerCentroid:"CENTROID_PITLIST_LAYER",haveCentroid:!0,onClickFeature:C}),void 0),(0,o.jsx)(de,Object.assign({},{routeList:v,map:t.current}),void 0),(0,o.jsx)(Se,{map:t},void 0)]},void 0)),[c,m]);return(0,o.jsx)(be.Provider,Object.assign({value:t.current},{children:(0,o.jsxs)("div",Object.assign({style:Te.modal},{children:[(0,o.jsx)(s.Z,Object.assign({container:!0,style:Te.containerModal},{children:(0,o.jsx)(p.Z,{defaultValue:0,ValueLabelComponent:Ce,getAriaValueText:function(e){return`${e}º`},"aria-labelledby":"discrete-slider-small-steps",valueLabelDisplay:"auto",step:5,marks:!0,min:0,value:i,max:360,onChange:(e,t)=>{a(Number(t))}},void 0)}),void 0),(0,o.jsx)(Q,{map:t.current},void 0),(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:[(0,o.jsx)(r.Z,Object.assign({map:t,dragRotate:!1,style:"mapbox://styles/dispatchgat/ckqqsfc2y46bo17sf1y29zwnj",mapContainer:e,bearing:Number(i),pitch:15},{lat:-7.6163,lng:-78.196,zoom:14,setLoad:l}),"map2"),E,(0,o.jsx)(Le,{},void 0)]}),void 0),(0,o.jsx)(d.q,{map:t.current},void 0),(0,o.jsx)(I,Object.assign({},{map:t.current}),void 0)]}),void 0)}),void 0)},Ie=()=>(0,o.jsx)(Oe,{},void 0)}}]);