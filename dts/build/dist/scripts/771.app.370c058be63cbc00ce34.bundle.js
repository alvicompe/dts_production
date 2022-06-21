"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[771],{48101:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(85893),a=o(67294),r=o(34880);const n=o(6158);n.accessToken=r.c3;const s=({dragRotate:e,map:t,pitch:o,bearing:r,mapContainer:s,lng:d,lat:l,zoom:c,setLoad:u,style:p,height:h,dragControls:m=!0})=>((0,a.useEffect)((()=>{t.current||s&&(t.current=new n.Map({container:s.current,style:p,center:[d,l],pitch:o,bearing:r,zoom:c,antialias:!0,dragRotate:e}))}),[t,s]),(0,a.useEffect)((()=>{t.current&&(m&&(t.current.addControl(new n.FullscreenControl,"bottom-left"),t.current.addControl(new n.NavigationControl,"bottom-left")),t.current.on("move",(()=>{})),t.current.on("click",(e=>{console.log(e.lngLat)})),t.current.on("load",(()=>{t.current&&u(!0)})))}),[t]),(0,a.useEffect)((()=>{t.current&&t.current.setBearing(r)}),[r]),(0,i.jsx)("div",{ref:s,style:{flex:1,height:h||"100vh",width:"100%"},className:"map-container"}))},77771:(e,t,o)=>{o.r(t),o.d(t,{ContextMapSetting:()=>l,SettingMap:()=>u,default:()=>p});var i=o(85893),a=o(67294),r=o(52573),n=o(73855),s=o(90694),d=o(48101);const l=(0,a.createContext)(null),c=({polygonList:e,idSource:t,idLayer:o,idSourceCentroid:i,idLayerCentroid:n,map:s,haveCentroid:d,onClickFeature:l})=>((0,a.useEffect)((()=>{const a=new r.z(e,s,t,o,i,n,l,d);return a.addToMap(),()=>{a.removeOfMap()}}),[e]),null),u=({mapRef:e})=>{const t=(0,a.useRef)(null),[o,r]=(0,a.useState)(!1),{polygonList:l,padCellList:u,dmeCellList:p,stockCellList:h,routeList:m}=(0,n.C)(s.WD);return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,Object.assign({},{polygonList:l.filter((e=>3!==e.state)),map:e.current,idSource:"TAJOSETTING_SOURCE",idLayer:"TAJOSETTING_LAYER",idSourceCentroid:"CENTROID_TAJOSETTING_SOURCE",idLayerCentroid:"CENTROID_TAJOSETTING_LAYER",haveCentroid:!0,onClickFeature:()=>{}})),(0,i.jsx)(c,Object.assign({},{polygonList:p.filter((e=>3!=e.state)),map:e.current,idSource:"DMESETTING_SOURCE",idLayer:"DMESETTING_LAYER",idSourceCentroid:"CENTROID_DMESETTING_SOURCE",idLayerCentroid:"CENTROID_DMESETTING_LAYER",haveCentroid:!0,onClickFeature:()=>{}})),(0,i.jsx)(c,Object.assign({},{polygonList:u.filter((e=>3!=e.state)),map:e.current,idSource:"PADSETTING_SOURCE",idLayer:"PADSETTING_LAYER",idSourceCentroid:"CENTROID_PADSETTING_SOURCE",idLayerCentroid:"CENTROID_PADSETTING_LAYER",haveCentroid:!0,onClickFeature:()=>{}})),(0,i.jsx)(c,Object.assign({},{polygonList:h.filter((e=>3!=e.state)),map:e.current,idSource:"STOCKSETTING_SOURCE",idLayer:"STOCKSETTING_LAYER",idSourceCentroid:"CENTROID_STOCKSETTING_SOURCE",idLayerCentroid:"CENTROID_STOCKSETTING_LAYER",haveCentroid:!0,onClickFeature:()=>{}}))]}),(0,i.jsx)(d.Z,Object.assign({map:e,dragRotate:!1,style:"mapbox://styles/dispatchgat/ckqqsfc2y46bo17sf1y29zwnj",mapContainer:t,bearing:0,pitch:15},{lat:-7.6163,lng:-78.196,zoom:14.81,setLoad:r}),"map3")]})},p=u},52573:(e,t,o)=>{o.d(t,{z:()=>a});var i=o(35573);class a{constructor(e,t,o,i,a,r,n,s){this.polygonList=e,this.map=t,this.idSource=o,this.idLayer=i,this.idSourceCentroid=a,this.idLayerCentroid=r,this.fontSize=9,this.onClickElement=n,this.haveCentroid=s}getInMap(){return this.map.getSource(this.idSource)}getCenterInMap(){return this.map.getSource(this.idSourceCentroid)}generateCentroids(){return this.polygonList.map((e=>{var t,o,i;if(!e.centroid)return{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}};const{latitude:a,longitude:r}=e.centroid;return{type:"Feature",geometry:{type:"Point",coordinates:[r,a]},properties:{name:`${e.name}${e.material?`-${e.material.type}`:""}`,points_polygonTajo:e.pointList.map((e=>[e.longitude,e.latitude])),name_polygon:e.name,name_material:null===(t=e.material)||void 0===t?void 0:t.type,id_polygonTajo:e.id,agTajo:e.ag,agcnTajo:e.agcn,alteTajo:e.alte,asTajo:e.as,auTajo:e.au,auchTajo:e.auch,altitudeTajo:e.altitude,descripcionTajo:"",heightTajo:e.height,litoTajo:e.litio,materialTajo:null===(o=e.material)||void 0===o?void 0:o.type,namePolTajo:e.name,nameProjectTajo:e.nameProject,onzasTajo:e.onzas,orezonetTajo:e.orezonet,ptaucnTajo:e.ptaucn,sTajo:e.s,tonnesTajo:e.tonnes,volumeTajo:e.volume,nameDme:`${e.name}`,points_polygonDme:e.pointList.map((e=>[e.longitude,e.latitude])),id_polygonDme:e.id,tonnesDme:e.tonnes,volumeDme:e.volume,namePad:`${e.name}`,id_Pad:`${e.id}_pad`,points_Pad:e.pointList.map((e=>[e.longitude,e.latitude])),tonnesPad:e.tonnes,volumePad:e.volume,nameStock:`${e.name}`,id_polygonStock:e.id,points_polygonStock:e.pointList.map((e=>[e.longitude,e.latitude])),materialStock:null===(i=e.material)||void 0===i?void 0:i.type,altitudeStock:e.altitude,volumeStock:e.volume}}}))}generateFeatures(){return this.polygonList.map((e=>({type:"Feature",properties:{color:i.O[e.color]?i.O[e.color].hex:e.color,out_color:"blue",opacity:this.haveCentroid?1:.2,opacity_border:1},geometry:{type:"Polygon",coordinates:[e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))]}})))}addToMap(){!this.getInMap()&&this.polygonList.length>0?(this.map.getSource(this.idSource)||this.map.addSource(this.idSource,{type:"geojson",data:{type:"FeatureCollection",features:this.generateFeatures()}}),this.map.getLayer(this.idLayer)||this.map.addLayer({id:this.idLayer,type:"fill",source:this.idSource,paint:{"fill-color":["get","color"],"fill-outline-color":["get","out_color"],"fill-opacity":["get","opacity"]}}),this.map.getLayer(`BORDER_${this.idLayer}`)||this.map.addLayer({id:`BORDER_${this.idLayer}`,type:"line",source:this.idSource,paint:{"line-color":["get","out_color"],"line-width":2,"line-opacity":["get","opacity_border"]},filter:["==","$type","Polygon"]}),this.haveCentroid&&(this.map.getSource(this.idSourceCentroid)||this.map.addSource(this.idSourceCentroid,{type:"geojson",data:{type:"FeatureCollection",features:this.generateCentroids()}}),this.map.getLayer(this.idLayerCentroid)||this.map.addLayer({id:this.idLayerCentroid,type:"symbol",source:this.idSourceCentroid,layout:{"text-field":["get","name"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":this.fontSize},paint:{"text-color":"#00296b","text-halo-color":"#f8f7ff","text-halo-width":2}})),this.map.on("click",this.idLayerCentroid,(e=>{this.onClickElement&&this.onClickElement(e)})),this.map.on("mouseenter",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave",this.idLayerCentroid,(()=>{this.map.getCanvas().style.cursor=""}))):this.getInMap()&&this.updateInMap()}updateInMap(){const e=this.getInMap();e?e.setData({type:"FeatureCollection",features:this.generateFeatures()}):this.addToMap()}removeOfMap(){this.getInMap()&&(this.map.removeLayer(this.idLayer),this.map.removeLayer(`BORDER_${this.idLayer}`),this.map.removeSource(this.idSource),this.getCenterInMap()&&(this.map.removeLayer(this.idLayerCentroid),this.map.removeSource(this.idSourceCentroid)))}}}}]);