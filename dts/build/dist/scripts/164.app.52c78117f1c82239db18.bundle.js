(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[164],{48101:(e,i,t)=>{"use strict";t.d(i,{Z:()=>d});var o=t(85893),n=t(67294),s=t(34880);const a=t(6158);a.accessToken=s.c3;const d=({dragRotate:e,map:i,pitch:t,bearing:s,mapContainer:d,lng:l,lat:c,zoom:r,setLoad:v,style:u,height:j,dragControls:g=!0})=>((0,n.useEffect)((()=>{i.current||d&&(i.current=new a.Map({container:d.current,style:u,center:[l,c],pitch:t,bearing:s,zoom:r,antialias:!0,dragRotate:e}))}),[i,d]),(0,n.useEffect)((()=>{i.current&&(g&&(i.current.addControl(new a.FullscreenControl,"bottom-left"),i.current.addControl(new a.NavigationControl,"bottom-left")),i.current.on("move",(()=>{})),i.current.on("click",(e=>{console.log(e.lngLat)})),i.current.on("load",(()=>{i.current&&v(!0)})))}),[i]),(0,n.useEffect)((()=>{i.current&&i.current.setBearing(s)}),[s]),(0,o.jsx)("div",{ref:d,style:{flex:1,height:j||"100vh",width:"100%"},className:"map-container"},void 0))},30433:(e,i,t)=>{"use strict";t.d(i,{DQ:()=>j,Ez:()=>g,g7:()=>u});var o=t(85893),n=t(71267),s=t(12575),a=t(61920),d=t(99945),l=t(44326),c=t(93584);const r=({value:e,operation:i,lineThrough:t=!1})=>{const s=e=>{var t,o,n,s,d,l,c,r,v,u,j,g;switch(e){case a.u6.DME:const e=(null===(o=null===(t=i.download)||void 0===t?void 0:t.dme)||void 0===o?void 0:o.cellList.length)>0?null===(s=null===(n=i.download)||void 0===n?void 0:n.dme)||void 0===s?void 0:s.cellList[0].name:"";return e.toUpperCase().includes("DME")?e:`DME-${e}`;case a.u6.PAD:const h=(null===(l=null===(d=i.download)||void 0===d?void 0:d.pad)||void 0===l?void 0:l.cellList.length)>0?null===(r=null===(c=i.download)||void 0===c?void 0:c.pad)||void 0===r?void 0:r.cellList[0].name:"";return h.toUpperCase().includes("PAD")?h:`PAD-${h}`;case a.u6.STOCK:const x=(null===(u=null===(v=i.download)||void 0===v?void 0:v.stock)||void 0===u?void 0:u.cellList.length)>0?null===(g=null===(j=i.download)||void 0===j?void 0:j.stock)||void 0===g?void 0:g.cellList[0].name:"";return x.toUpperCase().includes("STOCK")?x:`STK-${x}`;default:return""}};return(0,o.jsx)(o.Fragment,{children:e===a.u6.DME_PAD?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{color:t?"default":"secondary",icon:(0,o.jsx)(d.Z,{color:"secondary",fontSize:"small"},void 0),size:"small",style:{backgroundColor:c.p1},label:(0,o.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:t?"line-through":"solid"}},{children:s("pad")}),void 0)},void 0),(0,o.jsx)(n.Z,{color:t?"default":"secondary",icon:(0,o.jsx)(d.Z,{color:"secondary",fontSize:"small"},void 0),style:{backgroundColor:c.AS},size:"small",label:(0,o.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:t?"line-through":"solid"}},{children:s("dme")}),void 0)},void 0)]},void 0):(0,o.jsx)(n.Z,{icon:(0,o.jsx)(d.Z,{color:"secondary",fontSize:"small"},void 0),size:"small",color:t?"default":"secondary",style:{backgroundColor:(e=>{switch(e){case a.u6.DME:return c.AS;case a.u6.PAD:return c.p1;case a.u6.STOCK:return c.o2;default:return c.sb}})(e)},label:(0,o.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:t?"line-through":"solid"}},{children:s(e)}),void 0)},void 0)},void 0)},v=({value:e,operation:i,lineThrough:t=!1})=>(0,o.jsx)(n.Z,{icon:(0,o.jsx)(l.Z,{color:"secondary",fontSize:"small"},void 0),size:"small",style:{background:(e=>{switch(e){case a.u6.PIT:return c.Jx;case a.u6.STOCK:return c.gH;default:return c.sb}})(e)},color:t?"default":"secondary",label:(0,o.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:t?"line-through":"solid"}},{children:(()=>{var t,o,n,s,d,l,c,r,v,u,j,g;switch(e){case a.u6.STOCK:const e=(null===(o=null===(t=i.upload)||void 0===t?void 0:t.stock)||void 0===o?void 0:o.cellList)&&(null===(s=null===(n=i.upload)||void 0===n?void 0:n.stock)||void 0===s?void 0:s.cellList.length)>0?null===(l=null===(d=i.upload)||void 0===d?void 0:d.stock)||void 0===l?void 0:l.cellList[0].name:"";return`${a.WW[i.upload.type]}  ${e}`;case a.u6.PIT:const h=null===(r=null===(c=i.upload)||void 0===c?void 0:c.pit)||void 0===r?void 0:r.name,x=(null===(v=i.upload.pit)||void 0===v?void 0:v.projectList.length)>0?`${null===(u=i.upload.pit)||void 0===u?void 0:u.projectList[0].name}`.substring(5):"",p=x&&(null===(j=i.upload.pit)||void 0===j?void 0:j.projectList[0].polygonList.length)>0?null===(g=i.upload.pit)||void 0===g?void 0:g.projectList[0].polygonList[0].name:"";return`${a.WW[i.upload.type]} ${h} ${x} ${p}`;default:return""}})()}),void 0)},void 0),u=({operation:e,lineThrough:i})=>{var t,n;let s="";return e?((null===(t=e.upload)||void 0===t?void 0:t.pit)&&(s="pit"),(null===(n=e.upload)||void 0===n?void 0:n.stock)&&(s="stock"),(0,o.jsx)(v,{value:s,operation:e,lineThrough:i},void 0)):(0,o.jsx)(o.Fragment,{},void 0)},j=({operation:e,lineThrough:i})=>{var t,n,s,a,d;let l="";return e?((null===(t=e.download)||void 0===t?void 0:t.dme)&&(l="dme"),(null===(n=e.download)||void 0===n?void 0:n.pad)&&(l="pad"),(null===(s=e.download)||void 0===s?void 0:s.stock)&&(l="stock"),(null===(a=e.download)||void 0===a?void 0:a.dme)&&(null===(d=e.download)||void 0===d?void 0:d.pad)&&(l="dme_pad"),(0,o.jsx)(r,{value:l,operation:e,lineThrough:i},void 0)):(0,o.jsx)(o.Fragment,{},void 0)},g=({operation:e,lineThrough:i})=>{const t=e&&e.excavatorList&&e.excavatorList.length>0?e.excavatorList[0].deviceAlias:"";return(0,o.jsx)(n.Z,{color:i?"default":"secondary",icon:(0,o.jsx)(s.Z,{fontSize:"small"},void 0),size:"small",style:{textDecoration:i?"line-through":"solid"},label:t},void 0)}},67539:(e,i,t)=>{"use strict";t.d(i,{S:()=>se,a:()=>ne});var o=t(85893),n=t(67294),s=t(79895),a=t(50998),d=t(41749),l=t(95757),c=t(81860),r=t(66037),v=t(62822),u=t(31125),j=t(73099),g=t(61920);const h=({value:e,cy:i})=>{var t,n,s,a;switch(e){case g.u6.PAD:return(0,o.jsx)(l.Z,{primary:`Descarga: ${g.WW[i.download.type]} -  ${null===(t=i.download.pad.cellList[0])||void 0===t?void 0:t.name}`},void 0);case g.u6.DME:return(0,o.jsx)(l.Z,{primary:`Descarga: ${g.WW[i.download.type]} -  ${null===(n=i.download.dme.cellList[0])||void 0===n?void 0:n.name}`},void 0);case g.u6.PIT:return(0,o.jsx)(l.Z,{primary:`Descarga: ${g.WW[i.download.type]} -  ${null===(s=i.download.pit.cellList[0])||void 0===s?void 0:s.name}`},void 0);case g.u6.STOCK:return(0,o.jsx)(l.Z,{primary:`Descarga: ${g.WW[i.download.type]} -  ${null===(a=i.download.stock.cellList[0])||void 0===a?void 0:a.name}`},void 0);default:return(0,o.jsx)(o.Fragment,{},void 0)}},x=({value:e,cy:i})=>{switch(e){case g.u6.PIT:return(0,o.jsx)(l.Z,{primary:`Carga: ${g.WW[i.upload.type]} -  ${i.upload.pit.projectList[0].name}- ${i.upload.pit.projectList[0].polygonList[0].name}`},void 0);case g.u6.STOCK:return(0,o.jsx)(l.Z,{primary:`Carga: ${g.WW[i.upload.type]} -  ${i.upload.stock.cellList[0].name}}`},void 0);default:return(0,o.jsx)(o.Fragment,{children:"node"},void 0)}},p=()=>(0,o.jsx)(s.Z,Object.assign({elevation:1,style:{marginBottom:4}},{children:(0,o.jsx)(a.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,style:{backgroundColor:"#1d4e89",borderRadius:4}},{children:(0,o.jsxs)(d.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[(0,o.jsx)(l.Z,{primary:"TRUCK",style:{color:"white"}},void 0),(0,o.jsx)(l.Z,{primary:"INICIO",style:{color:"white"}},void 0),(0,o.jsx)(l.Z,{primary:"DESCARGA",style:{color:"white"}},void 0),(0,o.jsx)(l.Z,{primary:"FIN",style:{color:"white"}},void 0)]}),void 0)}),void 0)}),void 0),m=()=>(0,o.jsx)(s.Z,Object.assign({elevation:1,style:{marginBottom:0}},{children:(0,o.jsx)(a.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,style:{backgroundColor:"#1d4e89",borderRadius:4}},{children:(0,o.jsxs)(d.Z,Object.assign({justifyContent:"space-between",container:!0,style:{marginLeft:"4px"}},{children:[(0,o.jsx)(l.Z,{primary:"EXCAVADORA",style:{color:"white"}},void 0),(0,o.jsx)(l.Z,{primary:"INICIO",style:{color:"white"}},void 0),(0,o.jsx)(l.Z,{primary:"DESCARGA",style:{color:"white"}},void 0)]}),void 0)}),void 0)}),void 0),b=n.memo((({cy:e,index:i,isCycleTruck:t})=>{var g,p,m;const[b,O]=(0,n.useState)(!1),y=()=>{O(!b)},Z=e.startTime?new Date(1e3*(null===(g=e.startTime)||void 0===g?void 0:g.seconds)).toLocaleString():"NO REG",C=e.downloadArrivalTime?new Date(1e3*(null===(p=e.downloadArrivalTime)||void 0===p?void 0:p.seconds)).toLocaleString():"NO REG. ",f=e.endTime?new Date(1e3*(null===(m=e.endTime)||void 0===m?void 0:m.seconds)).toLocaleString():"NO REG. ";return(0,o.jsxs)(s.Z,Object.assign({elevation:1,style:{marginBottom:4},id:e.id},{children:[(0,o.jsxs)(a.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,onClick:y},{children:[(0,o.jsxs)(d.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[t?(0,o.jsx)(l.Z,{primary:`${i}.${e.excavator.deviceAlias} `},void 0):(0,o.jsx)(l.Z,{primary:`${i}.${e.truck.deviceAlias} `},void 0),(0,o.jsx)(l.Z,{primary:Z},void 0),(0,o.jsx)(l.Z,{primary:C},void 0),(0,o.jsx)(l.Z,{primary:f},void 0)]}),void 0),(0,o.jsx)(c.Z,Object.assign({onClick:y},{children:(0,o.jsx)(d.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:b?(0,o.jsx)(u.Z,{fontSize:"small",onClick:y},void 0):(0,o.jsx)(j.Z,{fontSize:"small",onClick:y},void 0)}),void 0)}),void 0)]}),void 0),(0,o.jsx)(r.Z,Object.assign({in:b,style:{paddingLeft:10}},{children:(0,o.jsxs)(v.Z,Object.assign({dense:!0,disablePadding:!0},{children:[e.upload&&(0,o.jsx)(a.Z,{children:(0,o.jsx)((()=>{let i="";return e.upload.pit&&(i="pit"),e.upload.stock&&(i="stock"),(0,o.jsx)(x,{value:i,cy:e},void 0)}),{},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)((()=>{var i,t,n;let s="";return(null===(i=e.download)||void 0===i?void 0:i.dme)&&(s="dme"),(null===(t=e.download)||void 0===t?void 0:t.pad)&&(s="pad"),(null===(n=e.download)||void 0===n?void 0:n.stock)&&(s="stock"),(0,o.jsx)(h,{value:s,cy:e},void 0)}),{},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)(l.Z,{primary:`Pala: ${null!=e.excavator?e.excavator.deviceAlias:""} `},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)(l.Z,{primary:`Camion: ${e.truck.deviceAlias} `},void 0)},void 0)]}),void 0)}),void 0)]}),e.id)})),O=n.memo((({cy:e,index:i})=>{var t,g,p;const[m,b]=(0,n.useState)(!1),O=()=>{b(!m)},y=e.startTime?new Date(1e3*(null===(t=e.startTime)||void 0===t?void 0:t.seconds)).toLocaleString():"NO REG",Z=e.downloadArrivalTime?new Date(1e3*(null===(g=e.downloadArrivalTime)||void 0===g?void 0:g.seconds)).toLocaleString():"NO REG. ";return e.endTime&&new Date(1e3*(null===(p=e.endTime)||void 0===p?void 0:p.seconds)).toLocaleString(),(0,o.jsxs)(s.Z,Object.assign({elevation:1,style:{marginBottom:4},id:e.id},{children:[(0,o.jsxs)(a.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,onClick:O},{children:[(0,o.jsxs)(d.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[(0,o.jsx)(l.Z,{primary:`${i}.${e.excavator.deviceAlias} `},void 0),(0,o.jsx)(l.Z,{primary:y},void 0),(0,o.jsx)(l.Z,{primary:Z},void 0)]}),void 0),(0,o.jsx)(c.Z,Object.assign({onClick:O},{children:(0,o.jsx)(d.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:m?(0,o.jsx)(u.Z,{fontSize:"small",onClick:O},void 0):(0,o.jsx)(j.Z,{fontSize:"small",onClick:O},void 0)}),void 0)}),void 0)]}),void 0),(0,o.jsx)(r.Z,Object.assign({in:m,style:{paddingLeft:10}},{children:(0,o.jsxs)(v.Z,Object.assign({dense:!0,disablePadding:!0},{children:[e.upload&&(0,o.jsx)(a.Z,{children:(0,o.jsx)((()=>{let i="";return e.upload.pit&&(i="pit"),e.upload.stock&&(i="stock"),(0,o.jsx)(x,{value:i,cy:e},void 0)}),{},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)((()=>{var i,t,n;let s="";return(null===(i=e.download)||void 0===i?void 0:i.dme)&&(s="dme"),(null===(t=e.download)||void 0===t?void 0:t.pad)&&(s="pad"),(null===(n=e.download)||void 0===n?void 0:n.stock)&&(s="stock"),(0,o.jsx)(h,{value:s,cy:e},void 0)}),{},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)(l.Z,{primary:`Pala: ${null!=e.excavator?e.excavator.deviceAlias:""} `},void 0)},void 0),(0,o.jsx)(a.Z,{children:(0,o.jsx)(l.Z,{primary:`Camion: ${e.truck.deviceAlias} `},void 0)},void 0)]}),void 0)}),void 0)]}),e.id)}));var y=t(96019),Z=t(26209),C=t(71267),f=t(85639),w=t(13258),A=t(10046),D=t(73637),N=t(22318),T=t(282),k=t(41120),L=t(30553);const S=(0,k.Z)((e=>({disabledSpacing:{},checkbox:{"& .MuiCheckbox-root":{margin:0,padding:0,paddingLeft:8}}}))),E=({truck:e,checked:i,useTrucksSelect:t})=>{const n=S(),[s,d]=t;return(0,o.jsx)(a.Z,Object.assign({button:!0,dense:!0,className:n.disabledSpacing},{children:(0,o.jsx)(L.Z,{className:n.checkbox,onChange:()=>{const i=s.findIndex((i=>e.deviceId===i.deviceId));-1===i?s.push(e):s.splice(i,1),d(JSON.parse(JSON.stringify(s)))},control:(0,o.jsx)(w.Z,{size:"small",checked:i,inputProps:{style:{padding:0}}},void 0),label:`${e.deviceAlias} `},void 0)}),void 0)};var $=t(2780),I=t(24673),G=t(57965),W=t(90179),H=t(73855),_=t(5977);const P=e=>{const{lengthCycles:i,excavator:t}=e;return(0,H.T)(),(0,_.k6)(),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(d.Z,Object.assign({container:!0,style:{paddingLeft:2,paddingTop:8,paddingBottom:8},alignItems:"center"},{children:[(0,o.jsx)(d.Z,Object.assign({item:!0},{children:(0,o.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:4,paddingTop:16}},{children:(0,o.jsx)(C.Z,{style:{marginLeft:4},icon:(0,o.jsx)(G.Z,{},void 0),label:t.deviceAlias},void 0)}),void 0)}),void 0),(0,o.jsx)(d.Z,Object.assign({item:!0},{children:(0,o.jsx)(C.Z,{style:{marginLeft:4},icon:(0,o.jsx)(W.Z,{},void 0),label:`Ciclos en turno actual: ${i}`},void 0)}),void 0)]}),void 0)},void 0)};var z=t(52672),R=t(76796),F=t(868),K=t(17812),U=t(8286),M=t(86072),J=t(96588),B=t(10646),X=t(50648),V=t(52314),q=t(99302),Y=t(97700),Q=t(30433),ee=t(97111);const ie=({operation:e})=>{const i=(0,n.useRef)(),t=(0,n.useRef)(),[a,l]=(0,n.useState)([]),[c,r]=(0,n.useState)({label:"",id:"",value:""}),{truckInfoList:v}=(0,H.C)(q.ej),[u,j]=(0,n.useState)(!1),g=(0,H.T)(),[h,x]=(0,n.useState)(),[p,m]=(0,n.useState)(),[b]=(0,B.l)(new Date),[O]=(0,B.i)(new Date),[y,Z]=(0,n.useState)({date:`${b}T${O}`}),{id:f}=(0,_.UO)(),w={id:"",centroid:void 0,pointList:void 0,name:"Desconocido",idDme:void 0,color:void 0},[D,k]=(0,n.useState)(w),[L,S]=(0,n.useState)(w),[E,$]=(0,n.useState)(w),{dmeCellList:I,padCellList:G,stockCellList:W,polygonList:P}=(0,H.C)(Y.WD),[z,ie]=(0,n.useState)([]),[te,oe]=(0,n.useState)([]),[ne,se]=(0,n.useState)([]);(0,n.useEffect)((()=>{ie([D,...I]),oe([L,...G]),se([E,...W])}),[I,G,W]);const[ae,de]=(0,n.useState)(ee.f.CHANGE_NOTHING),[le,ce]=(0,n.useState)(X.TypeDownload.UNKNOWN),re=(e,i,t)=>{const o=i.find((i=>i.id===e));o&&x(Object.assign(Object.assign({},o),{type:t}))},ve=(0,n.useCallback)((()=>(0,ee.eq)(ae,ne,le,z,te)),[ae,P,ne,le,z,te]),ue=(0,n.useCallback)((()=>(0,ee.Ul)(v)),[v]);return(0,n.useEffect)((()=>{r(p?{label:`${null==p?void 0:p.deviceAlias}`,id:`${null==p?void 0:p.deviceId}`,value:`${null==p?void 0:p.deviceId}`}:{label:"",id:"",value:""})}),[p]),(0,n.useEffect)((()=>{j(!!h&&!!p&&!!y.date)}),[h,p,y]),(0,o.jsxs)(s.Z,Object.assign({style:{height:"400px",marginLeft:"2px"},elevation:4},{children:[(0,o.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Agregar Nuevo Ciclo"}),void 0),(0,o.jsx)(A.Z,{width:"100%",height:8},void 0),(0,o.jsxs)(d.Z,Object.assign({container:!0,direction:"column",style:{padding:"0.4rem",alignItems:"center"}},{children:[(0,o.jsx)(d.Z,Object.assign({item:!0},{children:(0,o.jsxs)(d.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,o.jsx)(N.Z,{children:"Carga Actual:"},void 0),(0,o.jsx)(Q.g7,{operation:e,lineThrough:!1},void 0)]}),void 0)}),void 0),(0,o.jsx)(A.Z,{width:"100%",height:8},void 0),(0,o.jsxs)(d.Z,Object.assign({item:!0},{children:[(0,o.jsxs)(d.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,o.jsx)(N.Z,{children:"Descarga Actual: "},void 0),(0,o.jsx)(Q.DQ,{operation:e,lineThrough:!1},void 0),(0,o.jsx)(d.Z,Object.assign({item:!0},{children:(0,o.jsx)(d.Z,Object.assign({container:!0},{children:h&&(0,o.jsx)(F.ZP,Object.assign({title:"Nueva Descarga"},{children:(0,o.jsx)(K.Z,Object.assign({color:"primary",size:"small"},{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M.Z,{},void 0),(0,o.jsx)(C.Z,{size:"small",color:"secondary",label:h.name,onDelete:()=>x("")},void 0)]},void 0)}),void 0)}),void 0)}),void 0)}),void 0)]}),void 0),(0,o.jsx)(A.Z,{width:"100%",height:8},void 0),p&&(0,o.jsxs)(d.Z,Object.assign({container:!0,direction:"row",justifyContent:"center"},{children:[(0,o.jsx)(N.Z,{children:"Camión: "},void 0),(0,o.jsx)(C.Z,{size:"small",color:"secondary",label:p.deviceAlias,onDelete:()=>{m(void 0),r({label:"",id:"",value:""})}},void 0)]}),void 0)]}),void 0),(0,o.jsx)(A.Z,{height:8},void 0),e&&(0,o.jsxs)(d.Z,Object.assign({item:!0,style:{marginTop:8}},{children:[(0,o.jsx)(U.Z,{id:"date",label:"Fecha",type:"datetime-local",name:"date",value:y.date,onChange:e=>{const i=e.target;Z(Object.assign(Object.assign({},y),{[i.name]:e.target.value}))},InputLabelProps:{shrink:!0,required:!0},error:void 0===y},void 0),(0,o.jsx)(A.Z,{height:12},void 0),(0,o.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",height:"100px"}},{children:[(0,o.jsx)(J.ZP,{size:"small",value:c,blurOnSelect:!0,onChange:(e,i)=>{((e,i)=>{const t=i.find((i=>i.id===e));t&&m(t)})(null!=i?i.value:"",v)},options:ue(),renderTags:(e,i)=>e.map(((e,t)=>(0,o.jsx)(C.Z,Object.assign({variant:"outlined",label:e.label},i({index:t})),void 0))),style:{width:150},getOptionLabel:e=>e.label,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,o.jsx)(U.Z,Object.assign({},e,{autoFocus:!0,inputRef:t,label:"Agrega Camión",variant:"outlined",fullWidth:!0,error:void 0===p}),void 0)},void 0),(0,o.jsx)(A.Z,{width:4},void 0),a.length<3&&(0,o.jsx)(J.ZP,{size:"small",value:a,blurOnSelect:!0,onChange:(e,t)=>{switch(l(t),t.length){case 0:de(ee.f.CHANGE_DOWNLOAD),ce(X.TypeDownload.UNKNOWN);break;case 1:de(ee.f.CHANGE_DOWNLOAD),ce(Number(t[0].value));break;case 2:switch(ae){case ee.f.CHANGE_DOWNLOAD:switch(le){case X.TypeDownload.DME:re(t[1].id,z,le);break;case X.TypeDownload.PAD:re(t[1].id,te,le);break;case X.TypeDownload.STOCK:re(t[1].id,ne,le)}}ce(X.TypeDownload.UNKNOWN),de(ee.f.CHANGE_NOTHING),l([])}setTimeout((()=>{var e,t;null===(e=i.current)||void 0===e||e.focus(),null===(t=i.current)||void 0===t||t.click()}),100)},options:ve(),multiple:!0,renderTags:(e,i)=>e.map(((e,t)=>(0,o.jsx)(C.Z,Object.assign({variant:"outlined",label:e.label},i({index:t})),void 0))),style:{width:200},getOptionLabel:e=>e.label,openOnFocus:!0,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,o.jsx)(U.Z,Object.assign({},e,{autoFocus:!0,inputRef:i,label:"Agrega Descarga",variant:"outlined",fullWidth:!0,error:void 0===h}),void 0)},void 0)]}),void 0)]}),void 0)]}),void 0),(0,o.jsx)(A.Z,{height:20},void 0),(0,o.jsxs)(d.Z,Object.assign({item:!0,style:{textAlign:"center"}},{children:[(0,o.jsx)(T.Z,Object.assign({variant:"outlined",size:"small",color:"secondary",onClick:()=>{return i=void 0,t=void 0,n=function*(){const i={operation:e,date:y.date,newDownload:h,truck:p};i.date&&i.newDownload&&i.truck?(yield g((0,V.YI)(i)),g((0,R.l4)(e.excavatorList[0].deviceId)),x(""),m(void 0),j(!1)):j(!0)},new((o=void 0)||(o=Promise))((function(e,s){function a(e){try{l(n.next(e))}catch(e){s(e)}}function d(e){try{l(n.throw(e))}catch(e){s(e)}}function l(i){var t;i.done?e(i.value):(t=i.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,d)}l((n=n.apply(i,t||[])).next())}));var i,t,o,n},disabled:!u},{children:"Agregar Ciclo"}),void 0),(0,o.jsx)(A.Z,{height:10},void 0)]}),void 0)]}),void 0)};function te(e,i){return(0,o.jsx)(b,{cy:e,index:i+1},`${e.id}${i}`)}function oe(e,i){return(0,o.jsx)(O,{cy:e,index:i+1},`${e.id}${i}`)}const ne=function({cycleList:e,isCycleTruck:i}){const[t,s]=(0,n.useState)([]),[a,d]=(0,n.useState)([]);return(0,n.useEffect)((()=>{if(e&&e.length>0){const i=e.map((e=>e.truck)),t=[...new Set(i.map((e=>e.deviceId)))];s(t.map((e=>i.find((i=>i.deviceId===e)))))}}),[e.length]),(0,o.jsxs)("div",Object.assign({style:{padding:"4px"}},{children:[!i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.Z,Object.assign({id:"id-label"},{children:"Filtro por Camión"}),void 0),(0,o.jsx)(Z.Z,Object.assign({labelId:"id-label",style:{width:"100%"},multiple:!0,value:a,onChange:e=>{const i=e.target.value;d(i)},renderValue:e=>(0,o.jsx)("div",{children:e.map((e=>(0,o.jsx)(C.Z,{label:t.find((i=>i.deviceId===e)).deviceAlias,clickable:!0,deleteIcon:(0,o.jsx)(I.Z,{onMouseDown:e=>e.stopPropagation()},void 0),onDelete:i=>(e=>{const i=a.findIndex((i=>i===e));i>=0&&a.splice(i,1),d(JSON.parse(JSON.stringify(a)))})(e)},e)))},void 0)},{children:t.map((e=>(0,o.jsxs)(f.Z,Object.assign({value:e.deviceId},{children:[(0,o.jsx)(w.Z,{checked:!!a.find((i=>i===e.deviceId))},void 0),(0,o.jsx)(l.Z,{primary:e.deviceAlias},void 0)]}),e.deviceId)))}),void 0)]},void 0),(0,o.jsx)(A.Z,{height:4},void 0),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:i?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Z,{color:"secondary",label:`Número de Ciclos: ${e?e.length:0}`,style:{color:"white"}},void 0),(0,o.jsx)(A.Z,{height:2},void 0),(0,o.jsx)(m,{},void 0)]},void 0):(0,o.jsx)(p,{},void 0)},void 0),(0,o.jsx)(v.Z,Object.assign({style:{maxHeight:"400px",overflowY:"scroll"}},{children:e.length>0?0===a.length?i?e.map(oe):e.map(te):e.filter((e=>a.find((i=>i===e.truck.deviceId)))).map(te):(0,o.jsx)(o.Fragment,{},void 0)}),void 0)]},void 0)]}),void 0)},se=()=>{const e=(0,n.useState)([]),i=e[0],t=(0,H.T)(),{excavator:l,cycleList:c,status:r,operation:u}=(0,H.C)(R.tl);return(0,o.jsx)(D.Z,Object.assign({in:!!c},{children:(0,o.jsx)(d.Z,Object.assign({container:!0},{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{excavator:l,lengthCycles:c?c.length:0},void 0),(0,o.jsxs)(d.Z,Object.assign({container:!0},{children:[c&&(0,o.jsx)(d.Z,Object.assign({item:!0,md:6},{children:(0,o.jsxs)(s.Z,Object.assign({elevation:4},{children:[(0,o.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Ciclos en turno Actual"}),void 0),(0,o.jsx)(ne,{cycleList:c},void 0)]}),void 0)}),void 0),(0,o.jsx)(d.Z,Object.assign({item:!0,md:2,style:{textAlign:"center"}},{children:(0,o.jsxs)(s.Z,Object.assign({elevation:4},{children:[(0,o.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Camiones"}),void 0),(0,o.jsxs)(v.Z,Object.assign({dense:!0},{children:[u&&u.truckList&&u.truckList.map((t=>{return(0,o.jsx)(E,{checked:(n=t,!!i.find((e=>n.deviceId===e.deviceId))),useTrucksSelect:e,truck:t},t.deviceId);var n})),(0,o.jsx)(a.Z,{children:(0,o.jsx)(T.Z,Object.assign({style:{textAlign:"center",width:"100%"},onClick:()=>{return e=void 0,o=void 0,s=function*(){(yield(0,$.We)(u.id,i))?(t((0,z.Ui)()),location.reload()):(t((0,z.Ui)()),t((0,z.L8)({open:!0,msg:"Ocurrió un error",severity:"error"})))},new((n=void 0)||(n=Promise))((function(i,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function d(e){try{l(s.throw(e))}catch(e){t(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((s=s.apply(e,o||[])).next())}));var e,o,n,s},color:"secondary",variant:"contained",size:"small",disabled:0===i.length},{children:"Liberar Camiones"}),void 0)},void 0)]}),void 0)]}),void 0)}),void 0),(0,o.jsx)(d.Z,Object.assign({item:!0,md:4,style:{paddingLeft:4,textAlign:"center"}},{children:(0,o.jsx)(ie,{operation:u},void 0)}),void 0)]}),void 0)]},void 0)}),void 0)}),void 0)}},75666:(e,i,t)=>{"use strict";t.d(i,{Z:()=>S});var o=t(85893),n=t(41120),s=t(41749),a=t(22318),d=t(10046),l=t(79895),c=t(67294),r=t(93584),v=t(73855),u=t(52314),j=t(99302),g=t(67539),h=t(868),x=t(17812),p=t(71267),m=t(8286),b=t(282),O=t(86072),y=t(96588),Z=t(5977),C=t(10646),f=t(15635),w=t(50648),A=t(76796),D=t(14125),N=t(97700),T=t(97111);const k=({idTruck:e})=>{const i=(0,c.useRef)(),t=(0,c.useRef)(),[n,l]=(0,c.useState)([]),[r,g]=(0,c.useState)({label:"",id:"",value:""}),{truckInfoList:k}=(0,v.C)(j.ej),{excavatorInfoList:L}=(0,v.C)(D.kW),{statusCycle:S}=(0,v.C)(u.XE),[E]=(0,f.r)(S),[$,I]=(0,c.useState)(!1),G=(0,v.T)(),[W,H]=(0,c.useState)(),[_,P]=(0,c.useState)(),[z]=(0,C.l)(new Date),[R]=(0,C.i)(new Date),[F,K]=(0,c.useState)({date:`${z}T${R}`}),{id:U}=(0,Z.UO)(),M={id:"",centroid:void 0,pointList:void 0,name:"Desconocido",idDme:void 0,color:void 0},[J,B]=(0,c.useState)(M),[X,V]=(0,c.useState)(M),[q,Y]=(0,c.useState)(M),{dmeCellList:Q,padCellList:ee,stockCellList:ie,polygonList:te}=(0,v.C)(N.WD),[oe,ne]=(0,c.useState)([]),[se,ae]=(0,c.useState)([]),[de,le]=(0,c.useState)([]);(0,c.useEffect)((()=>{ne([J,...Q]),ae([X,...ee]),le([q,...ie])}),[Q,ee,ie]);const[ce,re]=(0,c.useState)(T.f.CHANGE_NOTHING),[ve,ue]=(0,c.useState)(w.TypeDownload.UNKNOWN),je=(e,i,t)=>{const o=i.find((i=>i.id===e));o&&H(Object.assign(Object.assign({},o),{type:t}))},ge=k.find((i=>i.deviceAlias===e)),he=(0,c.useCallback)((()=>(0,T.eq)(ce,de,ve,oe,se)),[ce,te,de,ve,oe,se]),xe=(0,c.useCallback)((()=>(0,T.M6)(L)),[L]);return(0,c.useEffect)((()=>{g(_?{label:`${null==_?void 0:_.deviceAlias}`,id:`${null==_?void 0:_.deviceId}`,value:`${null==_?void 0:_.deviceId}`}:{label:"",id:"",value:""})}),[_]),(0,c.useEffect)((()=>{I(!!W&&!!_&&!!F.date)}),[W,_,F]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16,color:"black"}},{children:`Agregar Ciclo al camión ${e}`}),void 0),(0,o.jsx)(d.Z,{width:"100%",height:8},void 0),(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"column",style:{padding:"0.4rem",alignItems:"center"}},{children:[(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsx)(s.Z,{container:!0,direction:"row",alignItems:"center"},void 0)}),void 0),(0,o.jsx)(d.Z,{width:"100%",height:8},void 0),(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,o.jsx)(a.Z,Object.assign({style:{color:"black"}},{children:"Descarga:"}),void 0),(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsx)(s.Z,Object.assign({container:!0},{children:W&&(0,o.jsx)(h.ZP,Object.assign({title:"Nueva Descarga"},{children:(0,o.jsx)(x.Z,Object.assign({color:"primary",size:"small"},{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.Z,{},void 0),(0,o.jsx)(p.Z,{size:"small",color:"secondary",label:W.name,onDelete:()=>H("")},void 0)]},void 0)}),void 0)}),void 0)}),void 0)}),void 0)]}),void 0)}),void 0),(0,o.jsx)(d.Z,{width:"100%",height:8},void 0),(0,o.jsx)(s.Z,Object.assign({item:!0},{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,direction:"row",justifyContent:"center"},{children:[(0,o.jsx)(a.Z,Object.assign({style:{color:"black"}},{children:"Excavadora: "}),void 0),_&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.Z,{color:"primary"},void 0),(0,o.jsx)(p.Z,{size:"small",color:"secondary",label:null==_?void 0:_.deviceAlias,onDelete:()=>{P(void 0),g({label:"",id:"",value:""})}},void 0)]},void 0)]}),void 0)}),void 0),(0,o.jsx)(d.Z,{height:8},void 0),(0,o.jsxs)(s.Z,Object.assign({item:!0,style:{marginTop:8}},{children:[(0,o.jsx)(m.Z,{id:"date",label:"Fecha",type:"datetime-local",name:"date",value:F.date,onChange:e=>{const i=e.target;K(Object.assign(Object.assign({},F),{[i.name]:e.target.value}))},InputLabelProps:{shrink:!0,required:!0},error:void 0===F},void 0),(0,o.jsx)(d.Z,{height:12},void 0),(0,o.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",height:"100px"}},{children:[(0,o.jsx)(y.ZP,{size:"small",value:r,blurOnSelect:!0,onChange:(e,i)=>{((e,i)=>{const t=i.find((i=>i.deviceId===e));t&&P(t)})(null!=i?i.value:"",L)},options:xe(),renderTags:(e,i)=>e.map(((e,t)=>(0,o.jsx)(p.Z,Object.assign({variant:"outlined",label:e.label},i({index:t})),void 0))),style:{width:150},getOptionLabel:e=>e.label,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,o.jsx)(m.Z,Object.assign({},e,{autoFocus:!0,inputRef:t,label:"Excavadora",variant:"outlined",fullWidth:!0,error:void 0===_}),void 0)},void 0),(0,o.jsx)(d.Z,{width:4},void 0),n.length<3&&(0,o.jsx)(y.ZP,{size:"small",value:n,blurOnSelect:!0,onChange:(e,t)=>{switch(l(t),t.length){case 0:re(T.f.CHANGE_DOWNLOAD),ue(w.TypeDownload.UNKNOWN);break;case 1:switch(re(T.f.CHANGE_DOWNLOAD),ue(Number(t[0].value)),ce){case T.f.CHANGE_DOWNLOAD:ue(Number(t[0].value))}break;case 2:switch(ce){case T.f.CHANGE_DOWNLOAD:switch(ve){case w.TypeDownload.DME:je(t[1].id,oe,ve);break;case w.TypeDownload.PAD:je(t[1].id,se,ve);break;case w.TypeDownload.STOCK:je(t[1].id,de,ve)}}ue(w.TypeDownload.UNKNOWN),re(T.f.CHANGE_DOWNLOAD),l([])}setTimeout((()=>{var e,t;null===(e=i.current)||void 0===e||e.focus(),null===(t=i.current)||void 0===t||t.click()}),100)},options:he(),multiple:!0,renderTags:(e,i)=>e.map(((e,t)=>(0,o.jsx)(p.Z,Object.assign({variant:"outlined",label:e.label},i({index:t})),void 0))),style:{width:200},getOptionLabel:e=>e.label,openOnFocus:!0,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,o.jsx)(m.Z,Object.assign({},e,{autoFocus:!0,inputRef:i,label:"Agrega Descarga",variant:"outlined",fullWidth:!0,error:void 0===W}),void 0)},void 0)]}),void 0)]}),void 0)]}),void 0),(0,o.jsx)(d.Z,{height:30},void 0),(0,o.jsxs)(s.Z,Object.assign({item:!0,style:{textAlign:"center"}},{children:[(0,o.jsx)(b.Z,Object.assign({variant:"outlined",size:"small",color:"secondary",onClick:()=>{return e=void 0,i=void 0,o=function*(){const e={date:F.date,newDownload:W,excavator:_,truck:ge};e.date&&e.newDownload&&e.excavator?(yield G((0,u.QM)(e)),G((0,A.l4)(U)),H(""),P(void 0),I(!1)):I(!0)},new((t=void 0)||(t=Promise))((function(n,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function d(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(a,d)}l((o=o.apply(e,i||[])).next())}));var e,i,t,o},disabled:!$},{children:"Agregar Ciclo"}),void 0),(0,o.jsx)(d.Z,{height:10},void 0)]}),void 0)]},void 0)},L=(0,n.Z)((e=>({container:{width:"100%",scrollBehavior:"auto"},item:{justifySelf:"center",justifyContent:"center",alignContent:"center",textAlign:"center"},title:{fontSize:14},header:{display:"flex",padding:4},body:{textAlign:"center",maxHeight:"650px"},cardNewCycle:{height:"100%",color:"white",borderRadius:0},paperNewCycle:{color:"white"}}))),S=({id:e})=>{const i=L(),t=(0,v.T)(),{cyclesList:n,statusGet:h}=(0,v.C)(u.XE),{truckInfoList:x}=(0,v.C)(j.ej),p=x.find((i=>i.deviceAlias===e));return(0,c.useEffect)((()=>{t((0,u.EC)(null==p?void 0:p.deviceId))}),[p]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,Object.assign({container:!0,className:i.container,spacing:0,direction:"column",style:{}},{children:[(0,o.jsx)("div",Object.assign({style:{borderRadius:"4px",backgroundColor:r.Jx,textAlign:"center",padding:2}},{children:(0,o.jsx)(a.Z,Object.assign({style:{textAlign:"center",fontSize:16,color:"white"},variant:"button"},{children:p?`CICLOS DEL CAMIÓN  ${null==p?void 0:p.deviceAlias}`:"CAMIÓN NO DISPONIBLE"}),void 0)}),void 0),(0,o.jsx)(d.Z,{height:12},void 0),p&&(0,o.jsxs)(s.Z,Object.assign({item:!0,container:!0,className:i.item,md:12,spacing:1},{children:[(0,o.jsx)(s.Z,Object.assign({item:!0,md:6},{children:(0,o.jsx)(l.Z,Object.assign({elevation:2,className:i.body},{children:n&&n.length>0?(0,o.jsx)(g.a,{cycleList:n,isCycleTruck:!0},void 0):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g.a,{cycleList:[],isCycleTruck:!0},void 0)},void 0)}),void 0)}),void 0),(0,o.jsx)(s.Z,Object.assign({item:!0,md:6},{children:(0,o.jsxs)(l.Z,Object.assign({elevation:2,className:i.paperNewCycle},{children:[(0,o.jsx)(k,{idTruck:e},void 0),"F"]}),void 0)}),void 0)]}),void 0)]}),void 0)},void 0)}},97111:(e,i,t)=>{"use strict";t.d(i,{f:()=>o,HT:()=>c,BF:()=>r,eq:()=>v,Ul:()=>u,M6:()=>j});var o,n=t(61920),s=t(50648);!function(e){e.CHANGE_NOTHING="0",e.CHANGE_UPLOAD="1",e.CHANGE_DOWNLOAD="2",e.CHANGE_EXCAVATOR="3",e.CHANGE_TRUCKS="changetruck"}(o||(o={})),o.CHANGE_DOWNLOAD,o.CHANGE_DOWNLOAD,o.CHANGE_TRUCKS,o.CHANGE_TRUCKS;const a=[{label:"Change Upload",value:o.CHANGE_UPLOAD,id:o.CHANGE_UPLOAD},{label:"Change/Add Download",value:o.CHANGE_DOWNLOAD,id:o.CHANGE_DOWNLOAD},{label:"Change Excavator",value:o.CHANGE_EXCAVATOR,id:o.CHANGE_EXCAVATOR}],d=[{label:"TAJO",value:n.WW.TAJO.toString(),id:""},{label:"STOCK",value:n.WW.STOCK.toString(),id:""}],l=[{label:"DME",value:s.TypeDownload.DME.toString(),id:""},{label:"PAD",value:s.TypeDownload.PAD.toString(),id:""},{label:"STOCK",value:s.TypeDownload.STOCK.toString(),id:""}],c=(e,i,t)=>{switch(e.id){case o.CHANGE_UPLOAD:return i.uploadList.length>0;case o.CHANGE_DOWNLOAD:return i.downloadList.length>1;case o.CHANGE_EXCAVATOR:return i.excavatorList.length>0}return i.downloadList.some((i=>i.type===Number(e.value)))},r=(e,i,t,c,r,v,u,j)=>{let g=e===o.CHANGE_NOTHING?a:e===o.CHANGE_UPLOAD?d:[];switch(e){case o.CHANGE_NOTHING:g=a;break;case o.CHANGE_UPLOAD:g=d;break;case o.CHANGE_DOWNLOAD:g=l;break;case o.CHANGE_EXCAVATOR:g=j.map((e=>({label:e.deviceAlias,id:e.id,value:e.id})));break;default:g=l}switch(i){case n.WW.TAJO:g=t.map((e=>({label:`${e.nameProject}-${e.name}-${e.material?e.material.type:""}`,value:e.id,id:e.id})));break;case n.WW.STOCK:g=c.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}switch(r){case s.TypeDownload.DME:g=v.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case s.TypeDownload.PAD:g=u.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case s.TypeDownload.STOCK:g=c.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}return g},v=(e,i,t,n,a)=>{let c=e===o.CHANGE_DOWNLOAD?l:e===o.CHANGE_UPLOAD?d:[];switch(e){case o.CHANGE_NOTHING:case o.CHANGE_DOWNLOAD:c=l;break;case o.CHANGE_TRUCKS:c=[];break;default:c=l}switch(t){case s.TypeDownload.DME:c=n.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case s.TypeDownload.PAD:c=a.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case s.TypeDownload.STOCK:c=i.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}return c},u=e=>e.map((e=>({label:e.deviceAlias,id:e.id,value:e.id}))),j=e=>e.map((e=>({label:e.deviceAlias,id:e.deviceId,value:e.deviceId})))},10646:(e,i,t)=>{"use strict";t.d(i,{l:()=>o,i:()=>n});const o=e=>[`${e.getFullYear()}-${`0${e.getMonth()+1}`.slice(-2)}-${`0${e.getDate()}`.slice(-2)}`],n=e=>[`${`0${e.getHours()}`.substr(-2)}:${`0${e.getMinutes()}`.substr(-2)}`]},15635:(e,i,t)=>{"use strict";t.d(i,{r:()=>s});var o=t(67294),n=t(95090);const s=e=>{const[i,t]=(0,o.useState)(!1);return(0,o.useEffect)((()=>(e===n.JD.DONE||e===n.JD.UNKNOWN||e===n.JD.ERROR?t(!1):t(!0),()=>{t(!1)})),[e]),[i]}},2780:(e,i,t)=>{"use strict";t.d(i,{We:()=>s,wg:()=>a});var o=t(76533),n=function(e,i,t,o){return new(t||(t=Promise))((function(n,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function d(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(a,d)}l((o=o.apply(e,i||[])).next())}))};const s=(e,i)=>n(void 0,void 0,void 0,(function*(){return yield(0,o.g$)(i,e)})),a=e=>n(void 0,void 0,void 0,(function*(){const i=yield(0,o.zY)(e);let t="";return i.truckErrorList.length>0&&i.truckErrorList.forEach((e=>{const i=1===e.state?"CARGANDO":"A DESCARGA";t+=` ${e.truckError.deviceAlias} => ${i},`})),t}))}}]);