"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[17],{73430:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(67294);const n=(0,s(63786).Z)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},30387:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(67294);const n=(0,s(63786).Z)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},61242:(e,t,s)=>{s.d(t,{a:()=>j});var i=s(85893),n=s(41120),r=s(52663),a=s(66083),o=s(29525),l=s(66856),c=s(95477),d=s(282),h=s(93584);const x=(0,n.Z)({disabledPadding:{padding:0,textAlign:"center"}}),j=({open:e,handleClose:t,handleConfirm:s,title:n,children:j,maxWidth:g="lg",disabled:u=!1,loading:p})=>{const v=x();return(0,i.jsxs)(r.Z,Object.assign({open:e,onClose:t,maxWidth:g},{children:[(0,i.jsx)(a.Z,Object.assign({style:{color:"white",background:`${h.Jx}`,padding:"0.5rem"},className:v.disabledPadding},{children:n})),(0,i.jsx)(o.Z,{children:j}),(0,i.jsx)(l.Z,{children:p?(0,i.jsx)(c.Z,{style:{width:"30px",height:"30px"}}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,Object.assign({size:"small",color:"primary",onClick:t},{children:"Cancelar"})),s&&(0,i.jsx)(d.Z,Object.assign({disabled:u,variant:"outlined",size:"small",color:"secondary",onClick:s,autoFocus:!0},{children:"Confirmar"}))]})})]}))}},87559:(e,t,s)=>{s.d(t,{h:()=>l});var i=s(85893),n=s(52387),r=s(73637),a=s(67294),o=s(80324);const l=({children:e,header:t})=>{const[s,l]=a.useState(null),c=()=>{l(null)},d=Boolean(s),h=d?"transitions-popper":void 0;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(o.Z,{setAnchorEl:l,anchorEl:s,childen:t}),(0,i.jsx)(n.ZP,Object.assign({id:h,open:d,anchorEl:s,onClick:c,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,i.jsx)(r.Z,{children:e})}))]})}},80324:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(85893);const n=({anchorEl:e,setAnchorEl:t,childen:s})=>(0,i.jsx)("div",Object.assign({onClick:s=>{t(e?null:s.currentTarget)}},{children:s}))},53280:(e,t,s)=>{s.d(t,{Z:()=>x});var i=s(85893),n=s(13258),r=s(33901),a=s(60395),o=s(22318),l=s(18463),c=s(93584);const d=s(69711),h=s(53292),x=({unit:e,isSelect:t,isTruck:s,isItemHytera:x,inList:j})=>(0,i.jsxs)(l.Z,Object.assign({elevation:3,style:{width:x?"8em":"12em",height:x?"3em":"4em",padding:"2px",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"4pxv",backgroundColor:j&&x?"#E3E2E1":t?`${c.sb}`:"white"}},{children:[!x&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{size:"small",inputProps:{"aria-label":"secondary checkbox"},checked:t})}),(0,i.jsx)(r.Z,{style:{width:x?"22px":"33px",height:x?"22px":"33px",marginLeft:"4px"},variant:"square",src:s?d:h}),(0,i.jsxs)(a.Z,Object.assign({style:{textAlign:"center"}},{children:[(0,i.jsx)(o.Z,Object.assign({variant:"subtitle2",style:{marginLeft:"8px",color:t?"white":"black"}},{children:e.deviceAlias})),(0,i.jsx)(o.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:t?"white":"#676665"}},{children:e.deviceId})),s&&!x&&(0,i.jsx)(o.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:t?"white":"#676665"}},{children:`${e.tonne} tn`}))]}))]}))},17813:(e,t,s)=>{s.d(t,{T:()=>o,e:()=>l});var i=s(67294),n=s(73855),r=s(99302),a=s(14125);const o=()=>{const[e,t]=(0,i.useState)(""),[s,a]=(0,i.useState)([]),{truckInfoList:o,initial:l}=(0,n.C)(r.ej);return(0,i.useEffect)((()=>{const t=o.filter((t=>{var s,i;return(null===(s=t.deviceAlias)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))||(null===(i=t.deviceId)||void 0===i?void 0:i.toUpperCase().includes(e.toUpperCase()))}));a(t)}),[e,o]),{search:e,setSearch:t,filterList:s,setFilterList:a}},l=()=>{const[e,t]=(0,i.useState)(""),[s,r]=(0,i.useState)([]),{excavatorInfoList:o,initial:l}=(0,n.C)(a.kW);return(0,i.useEffect)((()=>{const t=o.filter((t=>{var s,i;return(null===(s=t.deviceAlias)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))||(null===(i=t.deviceId)||void 0===i?void 0:i.toUpperCase().includes(e.toUpperCase()))}));r(t)}),[e,o]),{search:e,setSearch:t,filterList:s,setFilterList:r}}},990:(e,t,s)=>{s.d(t,{M:()=>n});var i=s(67294);const n=e=>{const[t,s]=(0,i.useState)(e),n=()=>{s(e)};return(0,i.useEffect)((()=>()=>{n()}),[]),[t,e=>{console.log("type e",typeof e),s(Object.assign(Object.assign({},t),{[e.target.name]:e.target.value?e.target.value:e.target.checked}))},n,s]}},15635:(e,t,s)=>{s.d(t,{r:()=>r});var i=s(67294),n=s(95090);const r=e=>{const[t,s]=(0,i.useState)(!1);return(0,i.useEffect)((()=>(e===n.JD.DONE||e===n.JD.UNKNOWN||e===n.JD.ERROR?s(!1):s(!0),()=>{s(!1)})),[e]),[t]}},49521:(e,t,s)=>{s.d(t,{h:()=>L});var i=s(85893),n=s(41120),r=s(35117),a=s(45258),o=s(28358),l=s(41749),c=s(282),d=s(22318),h=s(43471),x=s(5977),j=s(83736),g=s(55517),u=s(18463),p=s(79912),v=s(79895),b=s(17812),Z=s(16575),m=s(51972),f=s(67294),C=s(87559),O=s(73855),y=s(45855),k=s(96102);const w=({title:e,content:t})=>(0,i.jsxs)(f.Fragment,{children:[(0,i.jsxs)(d.Z,Object.assign({variant:"subtitle1"},{children:[(0,i.jsx)(Z.Z,{style:{fontSize:"14px",marginRight:"4px"}}),e]})),(0,i.jsx)(d.Z,Object.assign({variant:"body1"},{children:t})),(0,i.jsx)(g.Z,{})]}),E=()=>{var e,t;const s=(0,O.T)(),n=(0,k.dP)(),{notificationsHeader:r}=(0,O.C)(y.Af);return(0,f.useEffect)((()=>{s((0,y.pK)())}),[]),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(p.Z,Object.assign({className:n.root},{children:(0,i.jsx)(d.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}))})),(0,i.jsx)(g.Z,{}),(0,i.jsxs)(v.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!r.notificationsList||0===(null===(e=r.notificationsList)||void 0===e?void 0:e.length))&&(0,i.jsx)(d.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"})),null===(t=r.notificationsList)||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)(w,{title:e.title,content:e.message},t)))]}))]})},S=()=>{var e;const{notificationsHeader:t}=(0,O.C)(y.Af);return(0,i.jsx)(C.h,{children:(0,i.jsx)(E,{}),header:(0,i.jsx)(b.Z,Object.assign({color:(null===(e=t.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,i.jsx)(m.Z,{})}))})},I=(0,n.Z)((e=>(0,r.Z)({root:{minHeight:"50px"}}))),L=({title:e})=>{const t=I(),s=(0,x.k6)();return(0,i.jsx)(a.Z,Object.assign({position:"fixed",color:"secondary",className:t.root,elevation:0},{children:(0,i.jsxs)(o.Z,Object.assign({variant:"dense"},{children:[(0,i.jsxs)(l.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,i.jsx)(c.Z,{size:"small",startIcon:(0,i.jsx)(h.Z,{color:"action",style:{color:"#fff"}}),onClick:()=>{s.goBack()}}),(0,i.jsx)(d.Z,Object.assign({variant:"h6"},{children:e}))," "]})),(0,i.jsxs)(l.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,i.jsx)(l.Z,Object.assign({item:!0},{children:(0,i.jsx)(S,{})})),(0,i.jsx)(l.Z,Object.assign({item:!0},{children:(0,i.jsx)(j.u,{})}))]}))]}))}))}},83736:(e,t,s)=>{s.d(t,{f:()=>C,u:()=>y});var i=s(85893),n=s(33901),r=s(18463),a=s(79912),o=s(22318),l=s(55517),c=s(94697),d=s(51907),h=s(41749),x=s(87559),j=s(40064),g=s(50255),u=s(5833),p=s(73855),v=s(53559),b=s(5977),Z=s(82067),m=s(93584),f=s(96102);const C=({className:e})=>{const{loginResponse:{user:t}}=(0,p.C)(v.MR);return(0,i.jsx)(n.Z,Object.assign({className:e,alt:"Avatar"},{children:null==t?void 0:t.firstName[0].toUpperCase()}))},O=()=>{const e=(0,f.dP)(),{loginResponse:{user:t}}=(0,p.C)(v.MR),s=(0,b.k6)();return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,Object.assign({className:e.root},{children:(0,i.jsx)(o.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}))})),(0,i.jsx)(l.Z,{}),(0,i.jsx)(c.Z,{avatar:(0,i.jsx)(C,{}),title:`${null==t?void 0:t.firstName} ${null==t?void 0:t.lastName}`,subheader:null==t?void 0:t.username}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(d.Z,Object.assign({disableSpacing:!0},{children:(0,i.jsxs)(h.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,i.jsx)(f.Eo,Object.assign({onClick:()=>{s.push("/setting/profile")},style:{width:"100%"},startIcon:(0,i.jsx)(Z.Z,{htmlColor:`${m.Jx}`})},{children:"Perfil"})),(0,i.jsx)(f.Eo,Object.assign({onClick:()=>{s.push("/")},style:{width:"100%"},startIcon:(0,i.jsx)(j.Z,{htmlColor:`${m.Jx}`})},{children:"Dispatch"})),(0,i.jsx)(f.Eo,Object.assign({onClick:()=>{s.push("/setting")},style:{width:"100%"},startIcon:(0,i.jsx)(g.Z,{htmlColor:`${m.Jx}`})},{children:"Configuraciones"})),(0,i.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(f.Eo,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),s.push("/login")},startIcon:(0,i.jsx)(u.Z,{htmlColor:"red"})},{children:"Cerrar sesión"}))]}))]}))}))]})},y=()=>{const e=(0,f.QH)();return(0,i.jsx)(x.h,{children:(0,i.jsx)(O,{}),header:(0,i.jsx)(C,{className:e.root})})}},96102:(e,t,s)=>{s.d(t,{Eo:()=>c,QH:()=>l,dP:()=>o});var i=s(41120),n=s(282),r=s(10150),a=s(38920);const o=(0,i.Z)((e=>(0,r.Z)({root:{textAlign:"center",padding:"5px"}}))),l=(0,i.Z)((e=>(0,r.Z)({root:{width:"30px",height:"30px"}}))),c=(0,a.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(n.Z)},26434:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(85893),n=s(43832),r=s(67294),a=s(81978),o=s(49521);const l=()=>(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(o.h,{title:"Ajustes Excavadoras"}),(0,i.jsx)(n.Z,Object.assign({style:{marginTop:"60px"},maxWidth:"xl"},{children:(0,i.jsx)(a.c,{})}))]})}}]);