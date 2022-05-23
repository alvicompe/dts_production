"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[17],{73430:(e,i,t)=>{t.d(i,{Z:()=>o});var s=t(67294);const o=(0,t(63786).Z)(s.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},30387:(e,i,t)=>{t.d(i,{Z:()=>o});var s=t(67294);const o=(0,t(63786).Z)(s.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},61242:(e,i,t)=>{t.d(i,{a:()=>h});var s=t(85893),o=t(41120),n=t(52663),r=t(66083),a=t(29525),d=t(66856),c=t(95477),l=t(282);const v=(0,o.Z)({disabledPadding:{padding:0,textAlign:"center"}}),h=({open:e,handleClose:i,handleConfirm:t,title:o,children:h,maxWidth:x="lg",disabled:j=!1,loading:g})=>{const u=v();return(0,s.jsxs)(n.Z,Object.assign({open:e,onClose:i,maxWidth:x},{children:[(0,s.jsx)(r.Z,Object.assign({className:u.disabledPadding},{children:o}),void 0),(0,s.jsx)(a.Z,{children:h},void 0),(0,s.jsx)(d.Z,{children:g?(0,s.jsx)(c.Z,{style:{width:"30px",height:"30px"}},void 0):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,Object.assign({size:"small",color:"primary",onClick:i},{children:"Cancelar"}),void 0),t&&(0,s.jsx)(l.Z,Object.assign({disabled:j,variant:"outlined",size:"small",color:"secondary",onClick:t,autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)},void 0)]}),void 0)}},87559:(e,i,t)=>{t.d(i,{h:()=>d});var s=t(85893),o=t(52387),n=t(73637),r=t(67294),a=t(80324);const d=({children:e,header:i})=>{const[t,d]=r.useState(null),c=()=>{d(null)},l=Boolean(t),v=l?"transitions-popper":void 0;return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(a.Z,{setAnchorEl:d,anchorEl:t,childen:i},void 0),(0,s.jsx)(o.ZP,Object.assign({id:v,open:l,anchorEl:t,onClick:c,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,s.jsx)(n.Z,{children:e},void 0)}),void 0)]},void 0)}},80324:(e,i,t)=>{t.d(i,{Z:()=>o});var s=t(85893);const o=({anchorEl:e,setAnchorEl:i,childen:t})=>(0,s.jsx)("div",Object.assign({onClick:t=>{i(e?null:t.currentTarget)}},{children:t}),void 0)},53280:(e,i,t)=>{t.d(i,{Z:()=>h});var s=t(85893),o=t(13258),n=t(33901),r=t(10046),a=t(22318),d=t(18463),c=t(93584);const l=t(69711),v=t(53292),h=({unit:e,isSelect:i,isTruck:t,isItemHytera:h,inList:x})=>(0,s.jsxs)(d.Z,Object.assign({elevation:3,style:{width:h?"8em":"12em",height:h?"3em":"4em",padding:"2px",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"4pxv",backgroundColor:x&&h?"#E3E2E1":i?`${c.sb}`:"white"}},{children:[!h&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{size:"small",inputProps:{"aria-label":"secondary checkbox"},checked:i},void 0)},void 0),(0,s.jsx)(n.Z,{style:{width:h?"22px":"33px",height:h?"22px":"33px",marginLeft:"4px"},variant:"square",src:t?l:v},void 0),(0,s.jsxs)(r.Z,Object.assign({style:{textAlign:"center"}},{children:[(0,s.jsx)(a.Z,Object.assign({variant:"subtitle2",style:{marginLeft:"8px",color:i?"white":"black"}},{children:e.deviceAlias}),void 0),(0,s.jsx)(a.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:i?"white":"#676665"}},{children:e.deviceId}),void 0),t&&!h&&(0,s.jsx)(a.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:i?"white":"#676665"}},{children:`${e.tonne} tn`}),void 0)]}),void 0)]}),void 0)},17813:(e,i,t)=>{t.d(i,{T:()=>a,e:()=>d});var s=t(67294),o=t(73855),n=t(99302),r=t(14125);const a=()=>{const[e,i]=(0,s.useState)(""),[t,r]=(0,s.useState)([]),{truckInfoList:a,initial:d}=(0,o.C)(n.ej);return(0,s.useEffect)((()=>{const i=a.filter((i=>{var t,s;return(null===(t=i.deviceAlias)||void 0===t?void 0:t.toUpperCase().includes(e.toUpperCase()))||(null===(s=i.deviceId)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))}));r(i)}),[e,a]),{search:e,setSearch:i,filterList:t,setFilterList:r}},d=()=>{const[e,i]=(0,s.useState)(""),[t,n]=(0,s.useState)([]),{excavatorInfoList:a,initial:d}=(0,o.C)(r.kW);return(0,s.useEffect)((()=>{const i=a.filter((i=>{var t,s;return(null===(t=i.deviceAlias)||void 0===t?void 0:t.toUpperCase().includes(e.toUpperCase()))||(null===(s=i.deviceId)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))}));n(i)}),[e,a]),{search:e,setSearch:i,filterList:t,setFilterList:n}}},990:(e,i,t)=>{t.d(i,{M:()=>o});var s=t(67294);const o=e=>{const[i,t]=(0,s.useState)(e),o=()=>{t(e)};return(0,s.useEffect)((()=>()=>{o()}),[]),[i,e=>{console.log("type e",typeof e),t(Object.assign(Object.assign({},i),{[e.target.name]:e.target.value?e.target.value:e.target.checked}))},o,t]}},15635:(e,i,t)=>{t.d(i,{r:()=>n});var s=t(67294),o=t(95090);const n=e=>{const[i,t]=(0,s.useState)(!1);return(0,s.useEffect)((()=>(console.log("state",e),e===o.JD.DONE||e===o.JD.UNKNOWN||e===o.JD.ERROR?t(!1):t(!0),()=>{t(!1)})),[e]),[i]}},49521:(e,i,t)=>{t.d(i,{h:()=>L});var s=t(85893),o=t(41120),n=t(35117),r=t(45258),a=t(28358),d=t(41749),c=t(282),l=t(22318),v=t(43471),h=t(5977),x=t(83736),j=t(55517),g=t(18463),u=t(79912),p=t(79895),b=t(17812),Z=t(16575),m=t(51972),f=t(67294),C=t(87559),O=t(73855),y=t(45855),k=t(5563);const w=({title:e,content:i})=>(0,s.jsxs)(f.Fragment,{children:[(0,s.jsxs)(l.Z,Object.assign({variant:"subtitle1"},{children:[(0,s.jsx)(Z.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,s.jsx)(l.Z,Object.assign({variant:"body1"},{children:i}),void 0),(0,s.jsx)(j.Z,{},void 0)]},void 0),E=()=>{var e,i;const t=(0,O.T)(),o=(0,k.dP)(),{notificationsHeader:n}=(0,O.C)(y.Af);return(0,f.useEffect)((()=>{t((0,y.pK)())}),[]),(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(u.Z,Object.assign({className:o.root},{children:(0,s.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}),void 0)}),void 0),(0,s.jsx)(j.Z,{},void 0),(0,s.jsxs)(p.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!n.notificationsList||0===(null===(e=n.notificationsList)||void 0===e?void 0:e.length))&&(0,s.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"}),void 0),null===(i=n.notificationsList)||void 0===i?void 0:i.map(((e,i)=>(0,s.jsx)(w,{title:e.title,content:e.message},i)))]}),void 0)]},void 0)},S=()=>{var e;const{notificationsHeader:i}=(0,O.C)(y.Af);return(0,s.jsx)(C.h,{children:(0,s.jsx)(E,{},void 0),header:(0,s.jsx)(b.Z,Object.assign({color:(null===(e=i.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,s.jsx)(m.Z,{},void 0)}),void 0)},void 0)},I=(0,o.Z)((e=>(0,n.Z)({root:{minHeight:"50px"}}))),L=({title:e})=>{const i=I(),t=(0,h.k6)();return(0,s.jsx)(r.Z,Object.assign({position:"fixed",color:"secondary",className:i.root,elevation:0},{children:(0,s.jsxs)(a.Z,Object.assign({variant:"dense"},{children:[(0,s.jsxs)(d.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,s.jsx)(c.Z,{size:"small",startIcon:(0,s.jsx)(v.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{t.goBack()}},void 0),(0,s.jsx)(l.Z,Object.assign({variant:"h6"},{children:e}),void 0)," "]}),void 0),(0,s.jsxs)(d.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,s.jsx)(d.Z,Object.assign({item:!0},{children:(0,s.jsx)(S,{},void 0)}),void 0),(0,s.jsx)(d.Z,Object.assign({item:!0},{children:(0,s.jsx)(x.u,{},void 0)}),void 0)]}),void 0)]}),void 0)}),void 0)}},83736:(e,i,t)=>{t.d(i,{f:()=>C,u:()=>y});var s=t(85893),o=t(33901),n=t(18463),r=t(79912),a=t(22318),d=t(55517),c=t(94697),l=t(51907),v=t(41749),h=t(87559),x=t(40064),j=t(50255),g=t(5833),u=t(73855),p=t(53559),b=t(5977),Z=t(82067),m=t(93584),f=t(5563);const C=({className:e})=>{const{user:{user:i}}=(0,u.C)(p.MR);return(0,s.jsx)(o.Z,Object.assign({className:e,alt:"Avatar"},{children:i.firstName[0].toUpperCase()}),void 0)},O=()=>{const e=(0,f.dP)(),{user:{user:i}}=(0,u.C)(p.MR),t=(0,b.k6)();return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(r.Z,Object.assign({className:e.root},{children:(0,s.jsx)(a.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}),void 0)}),void 0),(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(c.Z,{avatar:(0,s.jsx)(C,{},void 0),title:`${i.firstName} ${i.lastName}`,subheader:i.username},void 0),(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(l.Z,Object.assign({disableSpacing:!0},{children:(0,s.jsxs)(v.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,s.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/setting/profile")},style:{width:"100%"},startIcon:(0,s.jsx)(Z.Z,{htmlColor:`${m.Jx}`},void 0)},{children:"Perfil"}),void 0),(0,s.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/")},style:{width:"100%"},startIcon:(0,s.jsx)(x.Z,{htmlColor:`${m.Jx}`},void 0)},{children:"Dispatch"}),void 0),(0,s.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/setting")},style:{width:"100%"},startIcon:(0,s.jsx)(j.Z,{htmlColor:`${m.Jx}`},void 0)},{children:"Configuraciones"}),void 0),(0,s.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(f.Eo,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),t.push("/login")},startIcon:(0,s.jsx)(g.Z,{htmlColor:"red"},void 0)},{children:"Cerrar sesión"}),void 0)]}),void 0)]}),void 0)}),void 0)]},void 0)},y=()=>{const e=(0,f.QH)();return(0,s.jsx)(h.h,{children:(0,s.jsx)(O,{},void 0),header:(0,s.jsx)(C,{className:e.root},void 0)},void 0)}},5563:(e,i,t)=>{t.d(i,{dP:()=>a,QH:()=>d,Eo:()=>c});var s=t(41120),o=t(282),n=t(10150),r=t(38920);const a=(0,s.Z)((e=>(0,n.Z)({root:{textAlign:"center",padding:"5px"}}))),d=(0,s.Z)((e=>(0,n.Z)({root:{width:"30px",height:"30px"}}))),c=(0,r.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(o.Z)},26434:(e,i,t)=>{t.r(i),t.d(i,{default:()=>d});var s=t(85893),o=t(43832),n=t(67294),r=t(81978),a=t(49521);const d=()=>(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(a.h,{title:"Ajustes Excavadoras"},void 0),(0,s.jsx)(o.Z,Object.assign({style:{marginTop:"60px"},maxWidth:"xl"},{children:(0,s.jsx)(r.c,{},void 0)}),void 0)]},void 0)}}]);