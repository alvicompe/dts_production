"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[704],{62704:(e,t,o)=>{o.r(t),o.d(t,{ListPolygons:()=>x,default:()=>L});var s=o(85893),a=o(79895),i=o(10046),r=o(50998),n=o(95757),c=o(81860),l=o(17812),d=o(62822),u=o(41749),p=o(67294);const y=(0,o(63786).Z)(p.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");var g=o(54150),m=o(71211),v=o(10465),j=o(73855),h=o(18973),f=o(35573);const b=({feature:e,map:t})=>{const{name:o,color:d,tonnes:u,pointList:v,nameProject:j,material:h,onzas:b,volume:x}=e,L=(0,p.useCallback)((()=>{const e=[v.map((e=>[e.longitude,e.latitude,e.altitude]))],o=(0,g.Scw)((0,g.yue)(e)),{coordinates:s}=o.geometry;t.setCenter(s),t.setZoom(16);const a="POLYGON_SELECT_DIS_LAYER",i="POLYGON_SELECT_DIS_SOURCE";m.T.getLayer(t,a)&&m.T.removeFeature(t,a,i),m.T.addSourceToMap(t,i,e[0]),m.T.addLayerToMap(t,a,i,"line","#C6FF00")}),[t]);return(0,s.jsxs)(a.Z,Object.assign({elevation:4,style:{marginBottom:8,width:"100%",marginTop:8,display:"flex",flexDirection:"row"}},{children:[(0,s.jsx)(i.Z,{borderLeft:6,color:f.O[d].hex,borderRadius:2},void 0),(0,s.jsx)("div",Object.assign({style:{flex:1}},{children:(0,s.jsxs)(r.Z,Object.assign({button:!0,dense:!0},{children:[(0,s.jsx)(n.Z,{primary:`Proyecto: ${j} Polígono: ${o}`,secondary:`${u}tons, ${b||0}onz, ${x}vol`},void 0),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,Object.assign({size:"small",onClick:L},{children:(0,s.jsx)(y,{fontSize:"small"},void 0)}),void 0)},void 0)]}),void 0)}),void 0)]}),void 0)},x=({map:e})=>{const[t,o]=(0,p.useState)([]),{polygonList:a}=(0,j.C)(h.WD);(0,p.useEffect)((()=>{a.length>0&&o(a)}),[a]);const r=(0,p.useCallback)((e=>{if(e){const t=e.target?e.target.value.toUpperCase():"";console.log("filter",t),o(a.filter((e=>e.name.toUpperCase().includes(t)||e.nameProject&&e.nameProject.toUpperCase().includes(t))))}}),[a]),n=(0,p.useCallback)((()=>{o(a)}),[a]),c=(0,p.useMemo)((()=>t.map(((t,o)=>(0,s.jsx)(b,{feature:t,map:e},o)))),[t,e]);return(0,s.jsxs)(d.Z,Object.assign({disablePadding:!0},{children:[(0,s.jsx)(i.Z,{height:8},void 0),(0,s.jsx)(u.Z,Object.assign({style:{position:"sticky",zIndex:1,top:0,background:"#f6f6f6",padding:2}},{children:(0,s.jsx)(v.V,{functionFilter:r,functionCancel:n,placeholder:"Buscar por proyecto o polígon o mineral"},void 0)}),void 0),c]}),void 0)},L=x},71211:(e,t,o)=>{o.d(t,{T:()=>s});class s{static addLayerToMap(e,t,o,s,a){e.addLayer({id:t,type:s,source:o,layout:{visibility:"visible"},paint:{"line-color":a,"line-width":4}})}static addSourceToMap(e,t,o){e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:o}}})}static removeFeature(e,t,o){this.getLayer(e,t)&&(e.removeLayer(t),e.removeSource(o))}static getLayer(e,t){return e.getLayer(t)}}}}]);