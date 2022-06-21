"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[591],{48101:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(85893),l=i(67294),a=i(34880);const s=i(6158);s.accessToken=a.c3;const o=({dragRotate:e,map:t,pitch:i,bearing:a,mapContainer:o,lng:d,lat:r,zoom:c,setLoad:u,style:v,height:j,dragControls:g=!0})=>((0,l.useEffect)((()=>{t.current||o&&(t.current=new s.Map({container:o.current,style:v,center:[d,r],pitch:i,bearing:a,zoom:c,antialias:!0,dragRotate:e}))}),[t,o]),(0,l.useEffect)((()=>{t.current&&(g&&(t.current.addControl(new s.FullscreenControl,"bottom-left"),t.current.addControl(new s.NavigationControl,"bottom-left")),t.current.on("move",(()=>{})),t.current.on("click",(e=>{console.log(e.lngLat)})),t.current.on("load",(()=>{t.current&&u(!0)})))}),[t]),(0,l.useEffect)((()=>{t.current&&t.current.setBearing(a)}),[a]),(0,n.jsx)("div",{ref:o,style:{flex:1,height:j||"100vh",width:"100%"},className:"map-container"}))},30433:(e,t,i)=>{i.d(t,{DQ:()=>j,Ez:()=>g,g7:()=>v});var n=i(85893),l=i(71267),a=i(12575),s=i(61920),o=i(99945),d=i(44326),r=i(93584);const c=({value:e,operation:t,lineThrough:i=!1})=>{const a=e=>{var i,n,l,a,o,d,r,c,u,v,j,g;switch(e){case s.u6.DME:const e=(null===(n=null===(i=t.download)||void 0===i?void 0:i.dme)||void 0===n?void 0:n.cellList.length)>0?null===(a=null===(l=t.download)||void 0===l?void 0:l.dme)||void 0===a?void 0:a.cellList[0].name:"";return e.toUpperCase().includes("DME")?e:`DME-${e}`;case s.u6.PAD:const x=(null===(d=null===(o=t.download)||void 0===o?void 0:o.pad)||void 0===d?void 0:d.cellList.length)>0?null===(c=null===(r=t.download)||void 0===r?void 0:r.pad)||void 0===c?void 0:c.cellList[0].name:"";return x.toUpperCase().includes("PAD")?x:`PAD-${x}`;case s.u6.STOCK:const h=(null===(v=null===(u=t.download)||void 0===u?void 0:u.stock)||void 0===v?void 0:v.cellList.length)>0?null===(g=null===(j=t.download)||void 0===j?void 0:j.stock)||void 0===g?void 0:g.cellList[0].name:"";return h.toUpperCase().includes("STOCK")?h:`STK-${h}`;default:return""}};return(0,n.jsx)(n.Fragment,{children:e===s.u6.DME_PAD?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{color:i?"default":"secondary",icon:(0,n.jsx)(o.Z,{color:"secondary",fontSize:"small"}),size:"small",style:{backgroundColor:r.p1},label:(0,n.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:i?"line-through":"solid"}},{children:a("pad")}))}),(0,n.jsx)(l.Z,{color:i?"default":"secondary",icon:(0,n.jsx)(o.Z,{color:"secondary",fontSize:"small"}),style:{backgroundColor:r.AS},size:"small",label:(0,n.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:i?"line-through":"solid"}},{children:a("dme")}))})]}):(0,n.jsx)(l.Z,{icon:(0,n.jsx)(o.Z,{color:"secondary",fontSize:"small"}),size:"small",color:i?"default":"secondary",style:{backgroundColor:(e=>{switch(e){case s.u6.DME:return r.AS;case s.u6.PAD:return r.p1;case s.u6.STOCK:return r.o2;default:return r.sb}})(e)},label:(0,n.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:i?"line-through":"solid"}},{children:a(e)}))})})},u=({value:e,operation:t,lineThrough:i=!1})=>(0,n.jsx)(l.Z,{icon:(0,n.jsx)(d.Z,{color:"secondary",fontSize:"small"}),size:"small",style:{background:(e=>{switch(e){case s.u6.PIT:return r.Jx;case s.u6.STOCK:return r.gH;default:return r.sb}})(e)},color:i?"default":"secondary",label:(0,n.jsx)("p",Object.assign({style:{margin:0,padding:0,fontSize:"0.6rem",textDecoration:i?"line-through":"solid"}},{children:(()=>{var i,n,l,a,o,d,r,c,u,v,j,g;switch(e){case s.u6.STOCK:const e=(null===(n=null===(i=t.upload)||void 0===i?void 0:i.stock)||void 0===n?void 0:n.cellList)&&(null===(a=null===(l=t.upload)||void 0===l?void 0:l.stock)||void 0===a?void 0:a.cellList.length)>0?null===(d=null===(o=t.upload)||void 0===o?void 0:o.stock)||void 0===d?void 0:d.cellList[0].name:"";return`${s.WW[t.upload.type]}  ${e}`;case s.u6.PIT:const x=null===(c=null===(r=t.upload)||void 0===r?void 0:r.pit)||void 0===c?void 0:c.name,h=(null===(u=t.upload.pit)||void 0===u?void 0:u.projectList.length)>0?`${null===(v=t.upload.pit)||void 0===v?void 0:v.projectList[0].name}`.substring(5):"",p=h&&(null===(j=t.upload.pit)||void 0===j?void 0:j.projectList[0].polygonList.length)>0?null===(g=t.upload.pit)||void 0===g?void 0:g.projectList[0].polygonList[0].name:"";return`${s.WW[t.upload.type]} ${x} ${h} ${p}`;default:return""}})()}))}),v=({operation:e,lineThrough:t})=>{var i,l;let a="";return e?((null===(i=e.upload)||void 0===i?void 0:i.pit)&&(a="pit"),(null===(l=e.upload)||void 0===l?void 0:l.stock)&&(a="stock"),(0,n.jsx)(u,{value:a,operation:e,lineThrough:t})):(0,n.jsx)(n.Fragment,{})},j=({operation:e,lineThrough:t})=>{var i,l,a,s,o;let d="";return e?((null===(i=e.download)||void 0===i?void 0:i.dme)&&(d="dme"),(null===(l=e.download)||void 0===l?void 0:l.pad)&&(d="pad"),(null===(a=e.download)||void 0===a?void 0:a.stock)&&(d="stock"),(null===(s=e.download)||void 0===s?void 0:s.dme)&&(null===(o=e.download)||void 0===o?void 0:o.pad)&&(d="dme_pad"),(0,n.jsx)(c,{value:d,operation:e,lineThrough:t})):(0,n.jsx)(n.Fragment,{})},g=({operation:e,lineThrough:t})=>{const i=e&&e.excavatorList&&e.excavatorList.length>0?e.excavatorList[0].deviceAlias:"";return(0,n.jsx)(l.Z,{color:t?"default":"secondary",icon:(0,n.jsx)(a.Z,{fontSize:"small"}),size:"small",style:{textDecoration:t?"line-through":"solid"},label:i})}},70164:(e,t,i)=>{i.d(t,{S:()=>ie,a:()=>te});var n=i(85893),l=i(67294),a=i(79895),s=i(50998),o=i(41749),d=i(95757),r=i(81860),c=i(66037),u=i(62822),v=i(31125),j=i(73099),g=i(61920);const x=({value:e,cy:t})=>{var i,l,a,s;switch(e){case g.u6.PAD:return(0,n.jsx)(d.Z,{primary:`Descarga: ${g.WW[t.download.type]} -  ${null===(i=t.download.pad.cellList[0])||void 0===i?void 0:i.name}`});case g.u6.DME:return(0,n.jsx)(d.Z,{primary:`Descarga: ${g.WW[t.download.type]} -  ${null===(l=t.download.dme.cellList[0])||void 0===l?void 0:l.name}`});case g.u6.PIT:return(0,n.jsx)(d.Z,{primary:`Descarga: ${g.WW[t.download.type]} -  ${null===(a=t.download.pit.cellList[0])||void 0===a?void 0:a.name}`});case g.u6.STOCK:return(0,n.jsx)(d.Z,{primary:`Descarga: ${g.WW[t.download.type]} -  ${null===(s=t.download.stock.cellList[0])||void 0===s?void 0:s.name}`});default:return(0,n.jsx)(n.Fragment,{})}},h=({value:e,cy:t})=>{switch(e){case g.u6.PIT:return(0,n.jsx)(d.Z,{primary:`Carga: ${g.WW[t.upload.type]} -  ${t.upload.pit.projectList[0].name}- ${t.upload.pit.projectList[0].polygonList[0].name}`});case g.u6.STOCK:return(0,n.jsx)(d.Z,{primary:`Carga: ${g.WW[t.upload.type]} -  ${t.upload.stock.cellList[0].name}}`});default:return(0,n.jsx)(n.Fragment,{children:"node"})}},p=()=>(0,n.jsx)(a.Z,Object.assign({elevation:1,style:{marginBottom:4}},{children:(0,n.jsx)(s.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,style:{backgroundColor:"#1d4e89",borderRadius:4}},{children:(0,n.jsxs)(o.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[(0,n.jsx)(d.Z,{primary:"TRUCK",style:{color:"white"}}),(0,n.jsx)(d.Z,{primary:"INICIO",style:{color:"white"}}),(0,n.jsx)(d.Z,{primary:"DESCARGA",style:{color:"white"}}),(0,n.jsx)(d.Z,{primary:"FIN",style:{color:"white"}})]}))}))})),m=()=>(0,n.jsx)(a.Z,Object.assign({elevation:1,style:{marginBottom:0}},{children:(0,n.jsx)(s.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,style:{backgroundColor:"#1d4e89",borderRadius:4}},{children:(0,n.jsxs)(o.Z,Object.assign({justifyContent:"space-between",container:!0,style:{marginLeft:"4px"}},{children:[(0,n.jsx)(d.Z,{primary:"EXCAVADORA",style:{color:"white"}}),(0,n.jsx)(d.Z,{primary:"INICIO",style:{color:"white"}}),(0,n.jsx)(d.Z,{primary:"DESCARGA",style:{color:"white"}})]}))}))})),b=l.memo((({cy:e,index:t,isCycleTruck:i})=>{var g,p,m;const[b,y]=(0,l.useState)(!1),O=()=>{y(!b)},C=e.startTime?new Date(1e3*(null===(g=e.startTime)||void 0===g?void 0:g.seconds)).toLocaleString():"NO REG",Z=e.downloadArrivalTime?new Date(1e3*(null===(p=e.downloadArrivalTime)||void 0===p?void 0:p.seconds)).toLocaleString():"NO REG. ",A=e.endTime?new Date(1e3*(null===(m=e.endTime)||void 0===m?void 0:m.seconds)).toLocaleString():"NO REG. ";return(0,n.jsxs)(a.Z,Object.assign({elevation:1,style:{marginBottom:4},id:e.id},{children:[(0,n.jsxs)(s.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,onClick:O},{children:[(0,n.jsxs)(o.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[i?(0,n.jsx)(d.Z,{primary:`${t}.${e.excavator.deviceAlias} `}):(0,n.jsx)(d.Z,{primary:`${t}.${e.truck.deviceAlias} `}),(0,n.jsx)(d.Z,{primary:C}),(0,n.jsx)(d.Z,{primary:Z}),(0,n.jsx)(d.Z,{primary:A})]})),(0,n.jsx)(r.Z,Object.assign({onClick:O},{children:(0,n.jsx)(o.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:b?(0,n.jsx)(v.Z,{fontSize:"small",onClick:O}):(0,n.jsx)(j.Z,{fontSize:"small",onClick:O})}))}))]})),(0,n.jsx)(c.Z,Object.assign({in:b,style:{paddingLeft:10}},{children:(0,n.jsxs)(u.Z,Object.assign({dense:!0,disablePadding:!0},{children:[e.upload&&(0,n.jsx)(s.Z,{children:(0,n.jsx)((()=>{let t="";return e.upload.pit&&(t="pit"),e.upload.stock&&(t="stock"),(0,n.jsx)(h,{value:t,cy:e})}),{})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)((()=>{var t,i,l;let a="";return(null===(t=e.download)||void 0===t?void 0:t.dme)&&(a="dme"),(null===(i=e.download)||void 0===i?void 0:i.pad)&&(a="pad"),(null===(l=e.download)||void 0===l?void 0:l.stock)&&(a="stock"),(0,n.jsx)(x,{value:a,cy:e})}),{})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{primary:`Pala: ${null!=e.excavator?e.excavator.deviceAlias:""} `})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{primary:`Camion: ${e.truck.deviceAlias} `})})]}))}))]}),e.id)})),y=l.memo((({cy:e,index:t})=>{var i,g,p;const[m,b]=(0,l.useState)(!1),y=()=>{b(!m)},O=e.startTime?new Date(1e3*(null===(i=e.startTime)||void 0===i?void 0:i.seconds)).toLocaleString():"NO REG",C=e.downloadArrivalTime?new Date(1e3*(null===(g=e.downloadArrivalTime)||void 0===g?void 0:g.seconds)).toLocaleString():"NO REG. ";return e.endTime&&new Date(1e3*(null===(p=e.endTime)||void 0===p?void 0:p.seconds)).toLocaleString(),(0,n.jsx)(n.Fragment,{children:void 0!==e&&(0,n.jsxs)(a.Z,Object.assign({elevation:1,style:{marginBottom:4},id:e.id},{children:[(0,n.jsxs)(s.Z,Object.assign({dense:!0,disableGutters:!0,selected:!0,button:!0,onClick:y},{children:[(0,n.jsxs)(o.Z,Object.assign({justifyContent:"space-between",container:!0},{children:[(0,n.jsx)(d.Z,{primary:`${t}.${e.excavator.deviceAlias} `}),(0,n.jsx)(d.Z,{primary:O}),(0,n.jsx)(d.Z,{primary:C})]})),(0,n.jsx)(r.Z,Object.assign({onClick:y},{children:(0,n.jsx)(o.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:m?(0,n.jsx)(v.Z,{fontSize:"small",onClick:y}):(0,n.jsx)(j.Z,{fontSize:"small",onClick:y})}))}))]})),(0,n.jsx)(c.Z,Object.assign({in:m,style:{paddingLeft:10}},{children:(0,n.jsxs)(u.Z,Object.assign({dense:!0,disablePadding:!0},{children:[e.upload&&(0,n.jsx)(s.Z,{children:(0,n.jsx)((()=>{let t="";return e.upload.pit&&(t="pit"),e.upload.stock&&(t="stock"),(0,n.jsx)(h,{value:t,cy:e})}),{})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)((()=>{var t,i,l;let a="";return(null===(t=e.download)||void 0===t?void 0:t.dme)&&(a="dme"),(null===(i=e.download)||void 0===i?void 0:i.pad)&&(a="pad"),(null===(l=e.download)||void 0===l?void 0:l.stock)&&(a="stock"),(0,n.jsx)(x,{value:a,cy:e})}),{})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{primary:`Pala: ${null!=e.excavator?e.excavator.deviceAlias:""} `})}),(0,n.jsx)(s.Z,{})]}))}))]}),e.id)})}));var O=i(96019),C=i(26209),Z=i(71267),A=i(85639),w=i(13258),D=i(60395),f=i(95477),T=i(73637),N=i(22318),L=i(95090),E=(i(2780),i(24673)),k=i(33901),S=i(90179),$=i(73855),G=i(5977);const I=i(53292),H=e=>{const{lengthCycles:t,excavator:i}=e;return(0,$.T)(),(0,G.k6)(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,Object.assign({container:!0,style:{paddingLeft:2,paddingTop:8,paddingBottom:8},alignItems:"center"},{children:[(0,n.jsx)("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:(0,n.jsx)(k.Z,{style:{borderRadius:0,padding:4},src:I})})),(0,n.jsx)("div",{children:(0,n.jsx)(Z.Z,{color:"secondary",label:(0,n.jsx)(N.Z,Object.assign({variant:"button",color:"secondary",style:{color:"white",fontWeight:"bold"}},{children:i.deviceAlias?i.deviceAlias:"..."}))})}),(0,n.jsx)(o.Z,Object.assign({item:!0},{children:(0,n.jsx)(Z.Z,{style:{marginLeft:4},icon:(0,n.jsx)(S.Z,{}),label:`Ciclos en Excavadora actual: ${t}`})}))]}))})};i(52672);var W=i(76796),_=i(868),P=i(17812),R=i(8286),F=i(282),z=i(86072),K=i(96588),U=i(10646),M=i(50648),J=i(52314),X=i(99302),B=i(90694),V=i(30433),Y=i(97111);const q=({operation:e})=>{const{statusCycle:t}=(0,$.C)(J.XE),i=(0,l.useRef)(),s=(0,l.useRef)(),[d,r]=(0,l.useState)([]),[c,u]=(0,l.useState)({label:"",id:"",value:""}),{truckInfoList:v}=(0,$.C)(X.ej),[j,g]=(0,l.useState)(!1),x=(0,$.T)(),[h,p]=(0,l.useState)(),[m,b]=(0,l.useState)(),[y]=(0,U.l)(new Date),[O]=(0,U.i)(new Date),[C,A]=(0,l.useState)({date:`${y}T${O}`}),{id:w}=(0,G.UO)(),T={id:"",centroid:void 0,pointList:void 0,name:"Desconocido",idDme:void 0,color:void 0},[E,k]=(0,l.useState)(T),[S,I]=(0,l.useState)(T),[H,q]=(0,l.useState)(T),{dmeCellList:Q,padCellList:ee,stockCellList:te,polygonList:ie}=(0,$.C)(B.WD),[ne,le]=(0,l.useState)([]),[ae,se]=(0,l.useState)([]),[oe,de]=(0,l.useState)([]);(0,l.useEffect)((()=>{le([E,...Q]),se([S,...ee]),de([H,...te])}),[Q,ee,te]);const[re,ce]=(0,l.useState)(Y.f.CHANGE_NOTHING),[ue,ve]=(0,l.useState)(M.TypeDownload.UNKNOWN),je=(e,t,i)=>{const n=t.find((t=>t.id===e));n&&p(Object.assign(Object.assign({},n),{type:i}))},ge=(0,l.useCallback)((()=>(0,Y.eq)(re,oe,ue,ne,ae)),[re,ie,oe,ue,ne,ae]),xe=(0,l.useCallback)((()=>(0,Y.Ul)(v)),[v]);return(0,l.useEffect)((()=>{u(m?{label:`${null==m?void 0:m.deviceAlias}`,id:`${null==m?void 0:m.deviceId}`,value:`${null==m?void 0:m.deviceId}`}:{label:"",id:"",value:""})}),[m]),(0,l.useEffect)((()=>{g(!!h&&!!m&&!!C.date)}),[h,m,C]),(0,n.jsxs)(a.Z,Object.assign({style:{height:"400px",marginLeft:"2px"},elevation:4},{children:[(0,n.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Agregar Nuevo Ciclo"})),(0,n.jsx)(D.Z,{width:"100%",height:8}),(0,n.jsxs)(o.Z,Object.assign({container:!0,direction:"column",style:{padding:"0.4rem",alignItems:"center"}},{children:[(0,n.jsx)(o.Z,Object.assign({item:!0},{children:(0,n.jsxs)(o.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,n.jsx)(N.Z,{children:"Carga Actual:"}),(0,n.jsx)(V.g7,{operation:e,lineThrough:!1})]}))})),(0,n.jsx)(D.Z,{width:"100%",height:8}),(0,n.jsxs)(o.Z,Object.assign({item:!0},{children:[(0,n.jsxs)(o.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,n.jsx)(N.Z,{children:"Descarga Actual: "}),(0,n.jsx)(V.DQ,{operation:e,lineThrough:!1}),(0,n.jsx)(o.Z,Object.assign({item:!0},{children:(0,n.jsx)(o.Z,Object.assign({container:!0},{children:h&&(0,n.jsx)(_.ZP,Object.assign({title:"Nueva Descarga"},{children:(0,n.jsx)(P.Z,Object.assign({color:"primary",size:"small"},{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z.Z,{}),(0,n.jsx)(Z.Z,{size:"small",color:"secondary",label:h.name,onDelete:()=>p("")})]})}))}))}))}))]})),(0,n.jsx)(D.Z,{width:"100%",height:8}),m&&(0,n.jsxs)(o.Z,Object.assign({container:!0,direction:"row",justifyContent:"center"},{children:[(0,n.jsx)(N.Z,{children:"Camión: "}),(0,n.jsx)(Z.Z,{size:"small",color:"secondary",label:m.deviceAlias,onDelete:()=>{b(void 0),u({label:"",id:"",value:""})}})]}))]})),(0,n.jsx)(D.Z,{height:8}),t===L.JD.LOADING?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(f.Z,{})}):(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsxs)(o.Z,Object.assign({item:!0,style:{marginTop:8}},{children:[(0,n.jsx)(R.Z,{id:"date",label:"Fecha",type:"datetime-local",name:"date",value:C.date,onChange:e=>{const t=e.target;A(Object.assign(Object.assign({},C),{[t.name]:e.target.value}))},InputLabelProps:{shrink:!0,required:!0},error:void 0===C}),(0,n.jsx)(D.Z,{height:12}),(0,n.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",height:"100px"}},{children:[(0,n.jsx)(K.ZP,{size:"small",value:c,blurOnSelect:!0,onChange:(e,t)=>{((e,t)=>{const i=t.find((t=>t.id===e));i&&b(i)})(null!=t?t.value:"",v)},options:xe(),renderTags:(e,t)=>e.map(((e,i)=>(0,n.jsx)(Z.Z,Object.assign({variant:"outlined",label:e.label},t({index:i}))))),style:{width:150},getOptionLabel:e=>e.label,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,n.jsx)(R.Z,Object.assign({},e,{autoFocus:!0,inputRef:s,label:"Agrega Camión",variant:"outlined",fullWidth:!0,error:void 0===m}))}),(0,n.jsx)(D.Z,{width:4}),d.length<3&&(0,n.jsx)(K.ZP,{size:"small",value:d,blurOnSelect:!0,onChange:(e,t)=>{switch(r(t),t.length){case 0:ce(Y.f.CHANGE_DOWNLOAD),ve(M.TypeDownload.UNKNOWN);break;case 1:ce(Y.f.CHANGE_DOWNLOAD),ve(Number(t[0].value));break;case 2:if(re===Y.f.CHANGE_DOWNLOAD)switch(ue){case M.TypeDownload.DME:je(t[1].id,ne,ue);break;case M.TypeDownload.PAD:je(t[1].id,ae,ue);break;case M.TypeDownload.STOCK:je(t[1].id,oe,ue)}ve(M.TypeDownload.UNKNOWN),ce(Y.f.CHANGE_NOTHING),r([])}setTimeout((()=>{var e,t;null===(e=i.current)||void 0===e||e.focus(),null===(t=i.current)||void 0===t||t.click()}),100)},options:ge(),multiple:!0,renderTags:(e,t)=>e.map(((e,i)=>(0,n.jsx)(Z.Z,Object.assign({variant:"outlined",label:e.label},t({index:i}))))),style:{width:200},getOptionLabel:e=>e.label,openOnFocus:!0,disableClearable:!0,filterSelectedOptions:!0,renderInput:e=>(0,n.jsx)(R.Z,Object.assign({},e,{autoFocus:!0,inputRef:i,label:"Agrega Descarga",variant:"outlined",fullWidth:!0,error:void 0===h}))})]}))]})),(0,n.jsx)(D.Z,{height:20}),(0,n.jsxs)(o.Z,Object.assign({item:!0,style:{textAlign:"center"}},{children:[(0,n.jsx)(F.Z,Object.assign({variant:"outlined",size:"small",color:"secondary",onClick:()=>{return t=void 0,i=void 0,l=function*(){const t={operation:e,date:C.date,newDownload:h,truck:m};t.date&&t.newDownload&&t.truck?(yield x((0,J.YI)(t)),yield x((0,W.l4)(e.excavatorList[0].deviceId)),p(""),b(void 0),g(!1)):g(!0)},new((n=void 0)||(n=Promise))((function(e,a){function s(e){try{d(l.next(e))}catch(e){a(e)}}function o(e){try{d(l.throw(e))}catch(e){a(e)}}function d(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,o)}d((l=l.apply(t,i||[])).next())}));var t,i,n,l},disabled:!j},{children:"Agregar Ciclo"})),(0,n.jsx)(D.Z,{height:10})]}))]})]}))]}))};function Q(e,t){return(0,n.jsx)(b,{cy:e,index:t+1},`${e.id}${t}`)}function ee(e,t){return(0,n.jsx)(y,{cy:e,index:t+1},`${e.id}${t}`)}const te=function({cycleList:e,isCycleTruck:t}){const[i,a]=(0,l.useState)([]),[s,o]=(0,l.useState)([]),{statusGet:r}=(0,$.C)(J.XE),{status:c}=(0,$.C)(W.tl);return(0,l.useEffect)((()=>{if(e&&e.length>0){const t=e.map((e=>e.truck)),i=[...new Set(t.map((e=>e.deviceId)))];a(i.map((e=>t.find((t=>t.deviceId===e)))))}}),[e.length]),(0,n.jsxs)("div",Object.assign({style:{padding:"4px"}},{children:[!t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O.Z,Object.assign({id:"id-label"},{children:"Filtro por Camión"})),(0,n.jsx)(C.Z,Object.assign({labelId:"id-label",style:{width:"100%"},multiple:!0,value:s,onChange:e=>{const t=e.target.value;o(t)},renderValue:e=>(0,n.jsx)("div",{children:e.map((e=>(0,n.jsx)(Z.Z,{label:i.find((t=>t.deviceId===e)).deviceAlias,clickable:!0,deleteIcon:(0,n.jsx)(E.Z,{onMouseDown:e=>e.stopPropagation()}),onDelete:t=>(e=>{const t=s.findIndex((t=>t===e));t>=0&&s.splice(t,1),o(JSON.parse(JSON.stringify(s)))})(e)},e)))})},{children:i.map((e=>(0,n.jsxs)(A.Z,Object.assign({value:e.deviceId},{children:[(0,n.jsx)(w.Z,{checked:!!s.find((t=>t===e.deviceId))}),(0,n.jsx)(d.Z,{primary:e.deviceAlias})]}),e.deviceId)))}))]}),(0,n.jsx)(D.Z,{height:4}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.Z,{color:"secondary",label:`Número de Ciclos: ${e?e.length:0}`,style:{color:"white"}}),(0,n.jsx)(D.Z,{height:2}),(0,n.jsx)(m,{})]}):(0,n.jsx)(p,{})}),(0,n.jsx)(u.Z,Object.assign({style:{maxHeight:"400px",overflowY:"scroll",textAlign:"center"}},{children:t?(0,n.jsx)(n.Fragment,{children:r==L.JD.LOADING?(0,n.jsx)(f.Z,{}):(0,n.jsx)(n.Fragment,{children:e.length>0?e.map(ee):(0,n.jsx)(n.Fragment,{children:"El Camión no registra ciclos"})})}):(0,n.jsx)(n.Fragment,{children:c!==L.JD.DONE&&r!==L.JD.ERROR?(0,n.jsx)(f.Z,{}):(0,n.jsx)(n.Fragment,{children:e.length>0?(0,n.jsx)(n.Fragment,{children:s.length>0?e.filter((e=>s.find((t=>t===e.truck.deviceId)))).map(Q):e.map(Q)}):(0,n.jsx)(n.Fragment,{children:"La excavadora no registra ciclos"})})})}))]})]}))},ie=()=>{(0,l.useState)([])[0],(0,$.T)();const{excavator:e,cycleList:t,status:i,operation:s}=(0,$.C)(W.tl);return(0,n.jsx)(T.Z,Object.assign({in:!!t},{children:(0,n.jsx)(o.Z,Object.assign({container:!0},{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{excavator:e,lengthCycles:t?t.length:0}),(0,n.jsxs)(o.Z,Object.assign({container:!0},{children:[t&&(0,n.jsx)(o.Z,Object.assign({item:!0,md:8},{children:(0,n.jsxs)(a.Z,Object.assign({elevation:4},{children:[(0,n.jsx)(N.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Ciclos en Excavadora Actual"})),(0,n.jsx)(te,{cycleList:t})]}))})),(0,n.jsx)(o.Z,Object.assign({item:!0,md:4,style:{paddingLeft:4,textAlign:"center"}},{children:(0,n.jsx)(q,{operation:s})}))]}))]})}))}))}},97111:(e,t,i)=>{i.d(t,{BF:()=>c,HT:()=>r,M6:()=>j,Ul:()=>v,eq:()=>u,f:()=>n});var n,l=i(61920),a=i(50648);!function(e){e.CHANGE_NOTHING="0",e.CHANGE_UPLOAD="1",e.CHANGE_DOWNLOAD="2",e.CHANGE_EXCAVATOR="3",e.CHANGE_TRUCKS="changetruck"}(n||(n={})),n.CHANGE_DOWNLOAD,n.CHANGE_DOWNLOAD,n.CHANGE_TRUCKS,n.CHANGE_TRUCKS;const s=[{label:"Change Upload",value:n.CHANGE_UPLOAD,id:n.CHANGE_UPLOAD},{label:"Change/Add Download",value:n.CHANGE_DOWNLOAD,id:n.CHANGE_DOWNLOAD},{label:"Change Excavator",value:n.CHANGE_EXCAVATOR,id:n.CHANGE_EXCAVATOR}],o=[{label:"TAJO",value:l.WW.TAJO.toString(),id:""},{label:"STOCK",value:l.WW.STOCK.toString(),id:""}],d=[{label:"DME",value:a.TypeDownload.DME.toString(),id:""},{label:"PAD",value:a.TypeDownload.PAD.toString(),id:""},{label:"STOCK",value:a.TypeDownload.STOCK.toString(),id:""}],r=(e,t,i)=>{switch(e.id){case n.CHANGE_UPLOAD:return t.uploadList.length>0;case n.CHANGE_DOWNLOAD:return t.downloadList.length>1;case n.CHANGE_EXCAVATOR:return t.excavatorList.length>0}return t.downloadList.some((t=>t.type===Number(e.value)))},c=(e,t,i,r,c,u,v,j)=>{let g=e===n.CHANGE_NOTHING?s:e===n.CHANGE_UPLOAD?o:[];switch(e){case n.CHANGE_NOTHING:g=s;break;case n.CHANGE_UPLOAD:g=o;break;case n.CHANGE_DOWNLOAD:g=d;break;case n.CHANGE_EXCAVATOR:g=j.map((e=>({label:e.deviceAlias,id:e.id,value:e.id})));break;default:g=d}switch(t){case l.WW.TAJO:g=i.map((e=>({label:`${e.nameProject}-${e.name}-${e.material?e.material.type:""}`,value:e.id,id:e.id})));break;case l.WW.STOCK:g=r.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}switch(c){case a.TypeDownload.DME:g=u.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case a.TypeDownload.PAD:g=v.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case a.TypeDownload.STOCK:g=r.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}return g},u=(e,t,i,l,s)=>{let r=e===n.CHANGE_DOWNLOAD?d:e===n.CHANGE_UPLOAD?o:[];switch(e){case n.CHANGE_NOTHING:case n.CHANGE_DOWNLOAD:r=d;break;case n.CHANGE_TRUCKS:r=[];break;default:r=d}switch(i){case a.TypeDownload.DME:r=l.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case a.TypeDownload.PAD:r=s.map((e=>({label:`${e.name}`,value:e.id,id:e.id})));break;case a.TypeDownload.STOCK:r=t.map((e=>({label:`${e.name}`,value:e.id,id:e.id})))}return r},v=e=>e.map((e=>({label:e.deviceAlias,id:e.id,value:e.id}))),j=e=>e.map((e=>({label:e.deviceAlias,id:e.deviceId,value:e.deviceId})))},10646:(e,t,i)=>{i.d(t,{i:()=>l,l:()=>n});const n=e=>[`${e.getFullYear()}-${`0${e.getMonth()+1}`.slice(-2)}-${`0${e.getDate()}`.slice(-2)}`],l=e=>[`${`0${e.getHours()}`.substr(-2)}:${`0${e.getMinutes()}`.substr(-2)}`]},2780:(e,t,i)=>{i.d(t,{We:()=>a,wg:()=>s});var n=i(76533),l=function(e,t,i,n){return new(i||(i=Promise))((function(l,a){function s(e){try{d(n.next(e))}catch(e){a(e)}}function o(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,o)}d((n=n.apply(e,t||[])).next())}))};const a=(e,t)=>l(void 0,void 0,void 0,(function*(){return yield(0,n.g$)(t,e)})),s=e=>l(void 0,void 0,void 0,(function*(){var t,i;const l=yield(0,n.zY)(e);let a="";return(null===(t=l.truckErrorList)||void 0===t?void 0:t.length)>0&&(null===(i=l.truckErrorList)||void 0===i||i.forEach((e=>{const t=1===e.state?"CARGANDO":"A DESCARGA";a+=` ${e.truckError.deviceAlias} => ${t},`}))),a}))}}]);