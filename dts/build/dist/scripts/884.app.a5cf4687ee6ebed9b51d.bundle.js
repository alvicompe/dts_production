"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[884],{61242:(e,i,t)=>{t.d(i,{a:()=>x});var n=t(85893),s=t(41120),a=t(52663),o=t(66083),d=t(29525),r=t(66856),l=t(95477),c=t(282);const v=(0,s.Z)({disabledPadding:{padding:0,textAlign:"center"}}),x=({open:e,handleClose:i,handleConfirm:t,title:s,children:x,maxWidth:h="lg",disabled:u=!1,loading:j})=>{const g=v();return(0,n.jsxs)(a.Z,Object.assign({open:e,onClose:i,maxWidth:h},{children:[(0,n.jsx)(o.Z,Object.assign({className:g.disabledPadding},{children:s}),void 0),(0,n.jsx)(d.Z,{children:x},void 0),(0,n.jsx)(r.Z,{children:j?(0,n.jsx)(l.Z,{style:{width:"30px",height:"30px"}},void 0):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,Object.assign({size:"small",color:"primary",onClick:i},{children:"Cancel"}),void 0),t&&(0,n.jsx)(c.Z,Object.assign({disabled:u,variant:"outlined",size:"small",color:"secondary",onClick:t,autoFocus:!0},{children:"Confirm"}),void 0)]},void 0)},void 0)]}),void 0)}},53280:(e,i,t)=>{t.d(i,{Z:()=>x});var n=t(85893),s=t(13258),a=t(33901),o=t(10046),d=t(22318),r=t(18463),l=t(93584);const c=t(69711),v=t(53292),x=({unit:e,isSelect:i,isTruck:t,isItemHytera:x})=>(0,n.jsxs)(r.Z,Object.assign({elevation:1,style:{width:x?"8em":"12em",height:x?"3em":"4em",padding:"2px",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"4pxv",backgroundColor:i?`${l.sb}`:"white"}},{children:[!x&&(0,n.jsx)(s.Z,{size:"small",inputProps:{"aria-label":"secondary checkbox"},checked:i},void 0),(0,n.jsx)(a.Z,{style:{width:x?"22px":"33px",height:x?"22px":"33px",marginLeft:"4px"},variant:"square",src:t?c:v},void 0),(0,n.jsxs)(o.Z,Object.assign({style:{textAlign:"center"}},{children:[(0,n.jsx)(d.Z,Object.assign({variant:"subtitle2",style:{marginLeft:"8px",color:i?"white":"black"}},{children:e.deviceAlias}),void 0),(0,n.jsx)(d.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:i?"white":"#676665"}},{children:e.deviceId}),void 0)]}),void 0)]}),void 0)},990:(e,i,t)=>{t.d(i,{M:()=>s});var n=t(67294);const s=e=>{const[i,t]=(0,n.useState)(e);return[i,e=>{t(Object.assign(Object.assign({},i),{[e.target.name]:e.target.value}))},()=>{t(e)},t]}},15635:(e,i,t)=>{t.d(i,{r:()=>a});var n=t(67294),s=t(95090);const a=e=>{const[i,t]=(0,n.useState)(!1);return(0,n.useEffect)((()=>(e===s.JD.DONE||e===s.JD.UNKNOWN||e===s.JD.ERROR?t(!1):t(!0),()=>{t(!1)})),[e]),[i]}},16281:(e,i,t)=>{t.d(i,{h:()=>C});var n=t(85893),s=t(45258),a=t(28358),o=t(282),d=t(22318),r=t(43471),l=t(5977),c=t(55517),v=t(17812),x=t(96617),h=t(73637),u=t(79895),j=t(16575),g=t(51972),p=t(67294),m=t(73855),f=t(45855);const b=({title:e,content:i})=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(d.Z,Object.assign({variant:"subtitle1"},{children:[(0,n.jsx)(j.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,n.jsx)(d.Z,Object.assign({variant:"body1"},{children:i}),void 0),(0,n.jsx)(c.Z,{},void 0)]},void 0),y=({})=>{var e,i,t;const[s,a]=(0,p.useState)(null),[o,r]=(0,p.useState)(!1),{notificationsHeader:l}=(0,m.C)(f.Af),c=(0,m.T)();(0,p.useEffect)((()=>{c((0,f.pK)())}),[]);const j=o&&Boolean(s)?"transition-popper":void 0;return console.log("notificationsHeader.notificationsList",l.notificationsList),(0,n.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",width:"8%",marginRight:"4px"}},{children:[(0,n.jsx)(v.Z,Object.assign({color:(null===(e=l.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",onClick:e=>{a(e.currentTarget),r((e=>!e))},size:"small"},{children:(0,n.jsxs)("div",Object.assign({style:{margin:"4px"}},{children:[(0,n.jsx)(d.Z,Object.assign({variant:"subtitle2",style:{color:"white",zIndex:1,position:"absolute",justifyContent:"right",marginLeft:"18px"}},{children:(null===(i=l.notificationsList)||void 0===i?void 0:i.length)>0?null===(t=l.notificationsList)||void 0===t?void 0:t.length:""}),void 0),(0,n.jsx)(g.Z,{},void 0)]}),void 0)}),void 0),(0,n.jsx)("div",Object.assign({style:{zIndex:1}},{children:(0,n.jsx)(x.Z,Object.assign({id:j,open:o,anchorEl:s,transition:!0,style:{zIndex:3}},{children:({TransitionProps:e})=>{var i,t,s;return(0,n.jsx)(h.Z,Object.assign({},e,{timeout:350},{children:(0,n.jsxs)(u.Z,Object.assign({elevation:3,style:{width:"300px",height:(null===(i=l.notificationsList)||void 0===i?void 0:i.length)>10?"87vh":"100%",padding:"8px",overflow:"scroll"}},{children:[(!l.notificationsList||0===(null===(t=l.notificationsList)||void 0===t?void 0:t.length))&&(0,n.jsx)(n.Fragment,{children:"Not Have a new Notification"},void 0),null===(s=l.notificationsList)||void 0===s?void 0:s.map(((e,i)=>(0,n.jsx)(b,{title:e.title,content:e.message},i)))]}),void 0)}),void 0)}}),void 0)}),void 0)]}),void 0)},C=({title:e,positionContainer:i,notificationPannel:t})=>{const c=i||"sticky",v=(0,l.k6)();return(0,n.jsx)(s.Z,Object.assign({position:c,color:"secondary",style:{display:"flex"},elevation:0},{children:(0,n.jsxs)("div",Object.assign({style:{display:"flex"}},{children:[(0,n.jsxs)(a.Z,Object.assign({variant:"dense",style:{width:"90%"}},{children:[(0,n.jsx)(o.Z,{size:"small",startIcon:(0,n.jsx)(r.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{v.goBack()}},void 0),(0,n.jsx)(d.Z,Object.assign({variant:"h6"},{children:e}),void 0)]}),void 0),t&&(0,n.jsx)(y,{},void 0)]}),void 0)}),void 0)}},71884:(e,i,t)=>{t.r(i),t.d(i,{default:()=>S});var n=t(85893),s=t(10046),a=t(41749),o=t(22318),d=t(282),r=t(62822),l=t(50998),c=t(73430),v=t(30387),x=t(44562),h=t(67294),u=t(73855),j=t(14125),g=t(10465),p=t(61242),m=t(8286),f=t(990),b=t(57886),y=t(31940);const C=({openEditExcavator:e,setOpenEditExcavator:i,excavator:t})=>{console.log("ExcSelect: ",t);const a=(0,u.T)(),{excavatorInfoList:o}=(0,u.C)(j.kW),{truckSelects:d}=(0,u.C)(y.__),[r,l,c,v]=(0,f.M)(Object.assign({},t)),{deviceAlias:x,deviceId:g,id:C,deviceInterval:Z,plate:w}=r,O=(0,h.useCallback)((e=>{let i=!1;if(e){const t=e.toUpperCase();return o.filter((e=>{e.deviceAlias.toUpperCase()===t&&(i=!0)})),i}}),[o]);return(0,n.jsx)(p.a,Object.assign({open:e,handleClose:()=>{i(!1),c()},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){x&&!O(r.deviceAlias)&&(yield a((0,b.hH)(r)),a((0,b.Jl)()),yield a((0,j.CE)()),i(!1))},new((n=void 0)||(n=Promise))((function(i,a){function o(e){try{r(s.next(e))}catch(e){a(e)}}function d(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}r((s=s.apply(e,t||[])).next())}));var e,t,n,s},title:"Edit Excavator",customise:!0},{children:(0,n.jsxs)(s.Z,Object.assign({component:"form",style:{color:"dark"}},{children:[(0,n.jsx)(m.Z,{error:!!O(r.deviceAlias),variant:"outlined",required:!0,onChange:l,style:{width:"100%"},label:"Alias",size:"small",value:x,name:"deviceAlias",helperText:O(r.deviceAlias)?"There is already a excavator with that same Device Alias":""},void 0),(0,n.jsx)(s.Z,{height:"12px"},void 0),(0,n.jsx)(m.Z,{error:!!O(r.deviceId),variant:"outlined",required:!0,onChange:l,style:{width:"100%"},label:"Id",size:"small",disabled:!0,value:r.deviceId,name:"deviceId",helperText:O(r.deviceId)?"There is already a excavator with that same Device Id":""},void 0)]}),void 0)}),void 0)};var Z=t(15635);const w=({openNewExcavator:e,setOpenNewExcavator:i})=>{const t=(0,u.T)(),{excavatorInfoList:a}=(0,u.C)(j.kW),{stateCreate:o}=(0,u.C)(b.$I),[d,r,l,c]=(0,f.M)({deviceAlias:"",deviceId:"",id:"",plate:"",deviceInterval:0,description:"",horometer:0}),{deviceAlias:v,deviceId:x,horometer:g}=d,[y]=(0,Z.r)(o),[C,w]=(0,h.useState)(!1),O=(0,h.useCallback)((e=>{let i=!1;if(e){const t=e.toUpperCase();return a.filter((e=>{e.deviceAlias.toUpperCase()===t&&(i=!0),e.deviceId.toUpperCase()===t&&(i=!0)})),i}}),[a]);return(0,h.useEffect)((()=>{w(!!v&&!!x&&!!g&&g>0&&!O(d.deviceAlias)&&!O(d.deviceId))}),[d]),(0,n.jsx)(p.a,Object.assign({open:e,handleClose:()=>{t((0,j.CE)()),i(!1),l()},handleConfirm:()=>{return e=void 0,n=void 0,a=function*(){C&&(yield t((0,b.Li)(d)),yield t((0,j.CE)()),i(!1),l())},new((s=void 0)||(s=Promise))((function(i,t){function o(e){try{r(a.next(e))}catch(e){t(e)}}function d(e){try{r(a.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,d)}r((a=a.apply(e,n||[])).next())}));var e,n,s,a},title:"Insert New Excavator",customise:!0,loading:y,disabled:!C},{children:(0,n.jsxs)(s.Z,Object.assign({component:"form",style:{color:"dark"}},{children:[(0,n.jsx)(m.Z,{error:!!O(d.deviceAlias),variant:"outlined",required:!0,onChange:r,style:{width:"100%"},label:"Device Alias",size:"small",value:v,name:"deviceAlias",helperText:O(d.deviceAlias)?"There is already a excavator with that same Device Alias":""},void 0),(0,n.jsx)(s.Z,{height:"12px"},void 0),(0,n.jsx)(m.Z,{error:!!O(d.deviceId),variant:"outlined",required:!0,onChange:r,style:{width:"100%"},label:"Device Id",size:"small",value:x,name:"deviceId",helperText:O(d.deviceId)?"There is already a excavator with that same Device Id":"Insert Device Id"},void 0),(0,n.jsx)(m.Z,{error:g<0,variant:"outlined",required:!0,onChange:r,style:{width:"100%"},label:"Horometer",size:"small",type:"number",value:g,name:"horometer",helperText:g<0?"Hourmeter needs to be > 0":"Insert Horometer"},void 0)]}),void 0)}),void 0)};var O=t(53280),I=function(e,i,t,n){return new(t||(t=Promise))((function(s,a){function o(e){try{r(n.next(e))}catch(e){a(e)}}function d(e){try{r(n.throw(e))}catch(e){a(e)}}function r(e){var i;e.done?s(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,d)}r((n=n.apply(e,i||[])).next())}))};const k=()=>{const[e,i]=h.useState(!1),[t,m]=(0,h.useState)(!1),[f,y]=h.useState(!1),[k,E]=h.useState(!1),{excavatorsSelects:L,statusDelete:A}=(0,u.C)(b.$I),S=(0,u.T)(),{excavatorInfoList:z}=(0,u.C)(j.kW),{ExcavatorListHytera:T}=(0,u.C)(b._$),[D,H]=(0,h.useState)([]),[N]=(0,Z.r)(A);(0,h.useEffect)((()=>{H(z)}),[z]);const P=(0,h.useCallback)((e=>{if(e){const i=e.target?e.target.value.toUpperCase():"";H(z.filter((e=>e.deviceAlias.toUpperCase().includes(i))))}}),[z]),U=(0,h.useCallback)((()=>{H(z)}),[z]),W=()=>{i(!1),y(!1),E(!1),S((0,j.CE)()),S((0,b.Jl)())};return(0,n.jsx)(s.Z,{children:(0,n.jsxs)(a.Z,Object.assign({spacing:1,container:!0,direction:"column",style:{padding:"12px"}},{children:[(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,n.jsx)(o.Z,Object.assign({variant:"subtitle1"},{children:"List Excavators"}),void 0)}),void 0),(0,n.jsxs)(a.Z,Object.assign({item:!0,container:!0,alignItems:"center",style:{width:"100%"}},{children:[(0,n.jsx)(g.V,{placeholder:"Buscar por id",functionFilter:P,functionCancel:U},void 0),(0,n.jsx)(d.Z,Object.assign({startIcon:(0,n.jsx)(c.Z,{},void 0),onClick:()=>{y(!0)},size:"small",style:{marginLeft:"2em",color:"white",background:"#1d4e89"}},{children:"New Excavator"}),void 0),L.length>0&&(0,n.jsx)(d.Z,Object.assign({onClick:()=>{i(!0)},color:"primary",style:{marginLeft:"2em",color:"white",background:"#1d4e89"}},{children:"Disable Excavator"}),void 0),1===L.length&&(0,n.jsx)(d.Z,Object.assign({startIcon:(0,n.jsx)(v.Z,{},void 0),onClick:()=>{m(!0)},color:"primary",size:"small",style:{marginLeft:"2em",color:"white",background:"#1d4e89"}},{children:"Edit"}),void 0),(0,n.jsx)(a.Z,{item:!0,xs:12,md:6,xl:6},void 0),(0,n.jsx)(a.Z,{item:!0,xs:12,md:6,xl:6},void 0)]}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,n.jsx)(r.Z,Object.assign({dense:!0,style:{display:"flex",flexWrap:"wrap",backgroundColor:"rgb(250 250 250)"}},{children:D.map((e=>{return(0,n.jsx)(l.Z,Object.assign({button:!0,onClick:()=>{(e=>{S((0,b.m1)(e))})(e)},style:{width:"12em",padding:"0px",margin:"0.2em",backgroundColor:"white"}},{children:(0,n.jsx)(O.Z,{unit:e,isSelect:(i=e,!!L.find((e=>i.deviceId===e.deviceId))),isTruck:!1},void 0)}),e.deviceId);var i}))}),void 0)}),void 0),(0,n.jsx)(w,{openNewExcavator:f,setOpenNewExcavator:y},void 0),L.length>0&&(0,n.jsx)(p.a,Object.assign({open:e,handleClose:W,handleConfirm:()=>I(void 0,void 0,void 0,(function*(){yield S((0,b._7)(L)),yield S((0,j.CE)()),S((0,b.Jl)()),i(!1)})),title:"sure you want to Disable",customise:!0,loading:N},{children:(0,n.jsxs)(x.Z,Object.assign({severity:"warning"},{children:["Disable:"," ",L.map((e=>e.deviceId+" "))]}),void 0)}),void 0),(0,n.jsx)(p.a,Object.assign({open:k,handleClose:W,handleConfirm:()=>I(void 0,void 0,void 0,(function*(){yield T.map((e=>{var i;i=e,z.some((e=>e.deviceId===i.deviceId))||S((0,b.vW)([e]))})),yield S((0,j.CE)()),S((0,b.Jl)()),E(!1)})),title:"sure you want to Syncronize",customise:!0},{children:(0,n.jsx)(x.Z,Object.assign({severity:"info"},{children:"Hytera Excavators will be synchronized to the DTS system"}),void 0)}),void 0),1===L.length&&(0,n.jsx)(C,{openEditExcavator:t,setOpenEditExcavator:m,excavator:L[0]},void 0)]}),void 0)},void 0)};const E=()=>{const[e,i]=h.useState(!1),{ExcavatorListHytera:t}=(0,u.C)(b._$),d=(0,u.T)(),[c,v]=(0,h.useState)(!1),[x,j]=(0,h.useState)([]);(0,h.useEffect)((()=>{d((0,b.Xo)())}),[]),(0,h.useEffect)((()=>{j(t)}),[t]);const m=(0,h.useCallback)((e=>{if(e){const i=e.target?e.target.value.toUpperCase():"";j(t.filter((e=>e.deviceAlias.toUpperCase().includes(i))))}}),[t]),f=(0,h.useCallback)((()=>{j(t)}),[t]);return(0,n.jsx)(s.Z,{children:(0,n.jsxs)(a.Z,Object.assign({spacing:1,container:!0,direction:"column",style:{padding:"4px"}},{children:[(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,n.jsx)(o.Z,Object.assign({variant:"subtitle1"},{children:"List Excavators Hytera"}),void 0)}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,container:!0,alignItems:"center",style:{width:"100%"}},{children:(0,n.jsx)(g.V,{placeholder:"Buscar por id",functionFilter:m,functionCancel:f},void 0)}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,n.jsx)(r.Z,Object.assign({dense:!0,style:{display:"flex",flexWrap:"wrap",backgroundColor:"rgb(250 250 250)"}},{children:x.map((e=>(0,n.jsx)(l.Z,Object.assign({button:!0,onClick:()=>{},style:{width:"8em",padding:"0px",margin:"0.1em",backgroundColor:"white"}},{children:(0,n.jsx)(O.Z,{unit:e,isItemHytera:!0},void 0)}),e.deviceId)))}),void 0)}),void 0),(0,n.jsx)(p.a,{open:e,handleClose:()=>{i(!1),d((0,b.Jl)())},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){i(!1)},new((n=void 0)||(n=Promise))((function(i,a){function o(e){try{r(s.next(e))}catch(e){a(e)}}function d(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}r((s=s.apply(e,t||[])).next())}));var e,t,n,s},title:"sure you want to delete"},void 0)]}),void 0)},void 0)},L=()=>(0,n.jsx)(s.Z,{children:(0,n.jsxs)(a.Z,Object.assign({spacing:0,container:!0,direction:"row",style:{padding:"12px"}},{children:[(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:8,xl:8},{children:(0,n.jsx)(k,{},void 0)}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12,md:4,xl:4},{children:(0,n.jsx)(E,{},void 0)}),void 0)]}),void 0)},void 0);var A=t(16281);const S=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)(A.h,{title:"Setting Excavators",positionContainer:"relative",notificationPannel:!0},void 0),(0,n.jsx)(L,{},void 0)]},void 0)}}]);