"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[704],{62704:(e,t,a)=>{a.r(t),a.d(t,{ListPolygons:()=>x,default:()=>L});var s=a(85893),o=a(79895),r=a(60395),i=a(50998),n=a(95757),c=a(81860),l=a(17812),d=a(62822),p=a(41749),u=a(67294);const y=(0,a(63786).Z)(u.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");var g=a(71211),m=a(10465),j=a(73855),h=a(90694),f=a(35573);const b=({feature:e,map:t})=>{const{name:a,color:d,tonnes:p,pointList:m,nameProject:j,material:h,onzas:b,volume:x}=e,L=(0,u.useCallback)((()=>{const e=[m.map((e=>[e.longitude,e.latitude,e.altitude]))],a="POLYGON_SELECT_DIS_LAYER",s="POLYGON_SELECT_DIS_SOURCE";g.T.getLayer(t,a)&&g.T.removeFeature(t,a,s),g.T.addSourceToMap(t,s,e[0]),g.T.addLayerToMap(t,a,s,"line","#C6FF00")}),[t]);return(0,s.jsxs)(o.Z,Object.assign({elevation:4,style:{marginBottom:8,width:"100%",marginTop:8,display:"flex",flexDirection:"row"}},{children:[(0,s.jsx)(r.Z,{borderLeft:6,color:f.O[d].hex,borderRadius:2}),(0,s.jsx)("div",Object.assign({style:{flex:1}},{children:(0,s.jsxs)(i.Z,Object.assign({button:!0,dense:!0},{children:[(0,s.jsx)(n.Z,{primary:`Proyecto: ${j} Polígono: ${a}`,secondary:`${p}tons, ${b||0}onz, ${x}vol`}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,Object.assign({size:"small",onClick:L},{children:(0,s.jsx)(y,{fontSize:"small"})}))})]}))}))]}))},x=({map:e})=>{const[t,a]=(0,u.useState)([]),{polygonList:o}=(0,j.C)(h.WD);(0,u.useEffect)((()=>{o.length>0&&a(o.filter((e=>3!==e.state)))}),[o]);const i=(0,u.useCallback)((e=>{if(e){const t=e.target?e.target.value.toUpperCase():"";a(o.filter((e=>e.name.toUpperCase().includes(t)||e.nameProject&&e.nameProject.toUpperCase().includes(t))))}}),[o]),n=(0,u.useCallback)((()=>{a(o)}),[o]),c=(0,u.useMemo)((()=>t.map(((t,a)=>(0,s.jsx)(b,{feature:t,map:e},a)))),[t,e]);return(0,s.jsxs)(d.Z,Object.assign({disablePadding:!0},{children:[(0,s.jsx)(r.Z,{height:8}),(0,s.jsx)(p.Z,Object.assign({style:{position:"sticky",zIndex:1,top:0,background:"#f6f6f6",padding:2}},{children:(0,s.jsx)(m.V,{functionFilter:i,functionCancel:n,placeholder:"Buscar por proyecto o polígon o mineral"})})),c]}))},L=x},71211:(e,t,a)=>{a.d(t,{T:()=>s});class s{static addLayerToMap(e,t,a,s,o){e.addLayer({id:t,type:s,source:a,layout:{visibility:"visible"},paint:{"line-color":o,"line-width":4}})}static addSourceToMap(e,t,a){e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:a}}})}static removeFeature(e,t,a){this.getLayer(e,t)&&(e.removeLayer(t),e.removeSource(a))}static getLayer(e,t){return e.getLayer(t)}}}}]);