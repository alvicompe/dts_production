(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[607],{61242:(e,i,t)=>{"use strict";t.d(i,{a:()=>u});var s=t(85893),n=t(41120),o=t(52663),r=t(66083),a=t(29525),d=t(66856),c=t(95477),l=t(282);const v=(0,n.Z)({disabledPadding:{padding:0,textAlign:"center"}}),u=({open:e,handleClose:i,handleConfirm:t,title:n,children:u,maxWidth:h="lg",disabled:x=!1,loading:j})=>{const g=v();return(0,s.jsxs)(o.Z,Object.assign({open:e,onClose:i,maxWidth:h},{children:[(0,s.jsx)(r.Z,Object.assign({className:g.disabledPadding},{children:n}),void 0),(0,s.jsx)(a.Z,{children:u},void 0),(0,s.jsx)(d.Z,{children:j?(0,s.jsx)(c.Z,{style:{width:"30px",height:"30px"}},void 0):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,Object.assign({size:"small",color:"primary",onClick:i},{children:"Cancelar"}),void 0),t&&(0,s.jsx)(l.Z,Object.assign({disabled:x,variant:"outlined",size:"small",color:"secondary",onClick:t,autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)},void 0)]}),void 0)}},87559:(e,i,t)=>{"use strict";t.d(i,{h:()=>d});var s=t(85893),n=t(52387),o=t(73637),r=t(67294),a=t(80324);const d=({children:e,header:i})=>{const[t,d]=r.useState(null),c=()=>{d(null)},l=Boolean(t),v=l?"transitions-popper":void 0;return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(a.Z,{setAnchorEl:d,anchorEl:t,childen:i},void 0),(0,s.jsx)(n.ZP,Object.assign({id:v,open:l,anchorEl:t,onClick:c,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,s.jsx)(o.Z,{children:e},void 0)}),void 0)]},void 0)}},80324:(e,i,t)=>{"use strict";t.d(i,{Z:()=>n});var s=t(85893);const n=({anchorEl:e,setAnchorEl:i,childen:t})=>(0,s.jsx)("div",Object.assign({onClick:t=>{i(e?null:t.currentTarget)}},{children:t}),void 0)},53280:(e,i,t)=>{"use strict";t.d(i,{Z:()=>u});var s=t(85893),n=t(13258),o=t(33901),r=t(10046),a=t(22318),d=t(18463),c=t(93584);const l=t(69711),v=t(53292),u=({unit:e,isSelect:i,isTruck:t,isItemHytera:u,inList:h})=>(0,s.jsxs)(d.Z,Object.assign({elevation:3,style:{width:u?"8em":"12em",height:u?"3em":"4em",padding:"2px",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"4pxv",backgroundColor:h&&u?"#E3E2E1":i?`${c.sb}`:"white"}},{children:[!u&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{size:"small",inputProps:{"aria-label":"secondary checkbox"},checked:i},void 0)},void 0),(0,s.jsx)(o.Z,{style:{width:u?"22px":"33px",height:u?"22px":"33px",marginLeft:"4px"},variant:"square",src:t?l:v},void 0),(0,s.jsxs)(r.Z,Object.assign({style:{textAlign:"center"}},{children:[(0,s.jsx)(a.Z,Object.assign({variant:"subtitle2",style:{marginLeft:"8px",color:i?"white":"black"}},{children:e.deviceAlias}),void 0),(0,s.jsx)(a.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:i?"white":"#676665"}},{children:e.deviceId}),void 0),t&&!u&&(0,s.jsx)(a.Z,Object.assign({variant:"body2",style:{marginLeft:"8px",fontSize:"12px",color:i?"white":"#676665"}},{children:`${e.tonne} tn`}),void 0)]}),void 0)]}),void 0)},57334:(e,i,t)=>{"use strict";t.d(i,{Z:()=>R});var s=t(85893),n=t(10046),o=t(41749),r=t(22318),a=t(18463),d=t(14741),c=t(17812),l=t(282),v=t(62822),u=t(50998),h=t(17215),x=t(73430),j=t(30387),g=t(44562),m=t(67294),p=t(73855),b=t(17813),f=t(60465),Z=t(15635),y=t(31940),C=t(99302),O=t(61242),k=t(53280),w=t(41120),I=t(35117),S=t(8286),T=t(990);const E=(0,w.Z)((e=>(0,I.Z)({root:{"& > *":{margin:e.spacing(1)}}}))),A=({openEditTruck:e,setOpenEditTruck:i,truck:t})=>{const o=E();console.log("TruckSelect: ",t);const r=(0,p.T)(),{truckInfoList:a}=(0,f.Md)(),{truckSelects:d,stateUpdate:c}=(0,p.C)(y.__),[l]=(0,Z.r)(c),[v,u,h,x]=(0,T.M)(Object.assign({},t)),{deviceAlias:j,deviceId:g,id:b,deviceInterval:k,plate:w,tonne:I}=v,A=(0,m.useCallback)((e=>{let i=!1;if(e){const t=e.toUpperCase();return a.filter((e=>{e.deviceAlias.toUpperCase()===t&&(i=!0)})),i}}),[a]);return(0,s.jsx)(O.a,Object.assign({open:e,handleClose:()=>{i(!1),h()},handleConfirm:()=>{return e=void 0,t=void 0,n=function*(){yield r((0,y.xT)(v)),r((0,y.xJ)()),yield r((0,C.RK)()),i(!1)},new((s=void 0)||(s=Promise))((function(i,o){function r(e){try{d(n.next(e))}catch(e){o(e)}}function a(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}));var e,t,s,n},title:"Editar camión",loading:l,customise:!0},{children:(0,s.jsxs)(n.Z,Object.assign({component:"form",className:o.root,style:{color:"dark"}},{children:[(0,s.jsx)(S.Z,{error:!!A(v.deviceAlias),variant:"outlined",required:!0,onChange:u,style:{width:"100%"},label:"Alias",size:"small",value:j,name:"deviceAlias",helperText:A(v.deviceAlias)?"Ya existe un camión con ese mismo Device Alias":null},void 0),(0,s.jsx)(S.Z,{error:!!A(v.deviceId),variant:"outlined",required:!0,onChange:u,style:{width:"100%"},label:"Id",size:"small",disabled:!0,value:v.deviceId,name:"deviceId",helperText:A(v.deviceId)?"Ya existe un camión con ese mismo ID":null},void 0),(0,s.jsx)(S.Z,{error:I<0,variant:"outlined",required:!0,type:"number",onChange:u,style:{width:"100%"},label:"Tonelaje",size:"small",value:I,name:"tonne",helperText:I<0?"El Tonejale tiene que ser mayor que 0":null},void 0)]}),void 0)}),void 0)};const L=(0,w.Z)((e=>(0,I.Z)({root:{"& > *":{margin:e.spacing(1)}}}))),N=({openNewTruck:e,setOpenNewTruck:i,unit:t})=>{const o=L(),{truckSelects:r,stateCreate:a}=(0,p.C)(y.__),d=(0,p.T)(),{truckInfoList:c}=(0,f.Md)(),[l,v,u,h]=(0,T.M)({deviceAlias:"",deviceId:"",id:"",plate:"",deviceInterval:0,description:"",horometer:0,tonne:0}),{deviceAlias:x,deviceId:j,horometer:b,tonne:k}=l,[w]=(0,Z.r)(a),[I,E]=(0,m.useState)(!1);t&&(l.deviceAlias=null==t?void 0:t.deviceAlias,l.deviceId=null==t?void 0:t.deviceId);const A=(0,m.useCallback)((e=>{let i=!1;if(e){const t=e.toUpperCase();return c.filter((e=>{e.deviceAlias.toUpperCase()===t&&(i=!0),e.deviceId.toUpperCase()===t&&(i=!0)})),i}}),[c]);return(0,m.useEffect)((()=>{E(!!x&&!!j&&!!b&&b>0&&k>0&&!A(l.deviceAlias)&&!A(l.deviceId))}),[l]),(0,s.jsx)(O.a,Object.assign({open:e,handleClose:()=>{d((0,C.RK)()),i(!1),u()},handleConfirm:()=>{return e=void 0,t=void 0,n=function*(){I&&(yield d((0,y.gZ)(l)),yield d((0,C.RK)()),i(!1),u())},new((s=void 0)||(s=Promise))((function(i,o){function r(e){try{d(n.next(e))}catch(e){o(e)}}function a(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}));var e,t,s,n},title:t?"Agregar nuevo camión":"Insertar nuevo Camión",customise:!0,loading:w,disabled:!I},{children:(0,s.jsxs)(n.Z,Object.assign({component:"form",className:o.root,style:{color:"dark"}},{children:[(0,s.jsx)(S.Z,{error:!!A(l.deviceAlias),variant:"outlined",required:!0,disabled:!!t,onChange:v,style:{width:"100%"},label:"Device Alias",size:"small",value:l.deviceAlias,name:"deviceAlias",helperText:A(l.deviceAlias)?"Ya hay un camión con ese mismo Device Alias":null},void 0),(0,s.jsx)(S.Z,{error:!!A(l.deviceId),variant:"outlined",required:!0,disabled:!!t,onChange:v,style:{width:"100%"},label:"Device Id",size:"small",value:l.deviceId,name:"deviceId",helperText:A(l.deviceId)?"Ya hay un camión con ese mismo Device Id":null},void 0),(0,s.jsx)(S.Z,{error:b<0,variant:"outlined",required:!0,disabled:!!A(l.deviceId),type:"number",onChange:v,style:{width:"100%"},label:"Horometer",size:"small",value:b,name:"horometer",helperText:b<0?"El horómetro tiene que ser mayor que 0":null},void 0),(0,s.jsx)(S.Z,{error:k<0,variant:"outlined",required:!0,disabled:!!A(l.deviceId),type:"number",onChange:v,style:{width:"100%"},label:"Tonelaje",size:"small",value:k,name:"tonne",helperText:k<0?"El Tonejale tiene que ser mayor que 0":null},void 0),t&&A(l.deviceId)&&(0,s.jsx)(g.Z,Object.assign({severity:"error"},{children:"El camión seleccionado ya existe en el sistema"}),void 0)]}),void 0)}),void 0)};var z=function(e,i,t,s){return new(t||(t=Promise))((function(n,o){function r(e){try{d(s.next(e))}catch(e){o(e)}}function a(e){try{d(s.throw(e))}catch(e){o(e)}}function d(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(r,a)}d((s=s.apply(e,i||[])).next())}))};const q=()=>{const[e,i]=m.useState(!1),[t,w]=(0,m.useState)(!1),[I,S]=m.useState(!1),[T,E]=m.useState(!1),{truckSelects:L,statusDelete:q}=(0,p.C)(y.__),D=(0,p.T)(),U=(0,m.useRef)(),{truckInfoList:R}=(0,f.Md)(),{truckListHytera:H}=(0,p.C)(y.qB),{search:P,setSearch:J,filterList:F,setFilterList:M}=(0,b.T)(),[K]=(0,Z.r)(q);(0,m.useEffect)((()=>{""===P&&M(R)}),[F]);const _=()=>z(void 0,void 0,void 0,(function*(){i(!1),S(!1),E(!1),D((0,y.xJ)())}));return(0,s.jsx)(n.Z,{children:(0,s.jsxs)(o.Z,Object.assign({spacing:1,container:!0,direction:"column",style:{padding:"12px"}},{children:[(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,s.jsx)(r.Z,Object.assign({variant:"subtitle1"},{children:"Lista de Camiones"}),void 0)}),void 0),(0,s.jsxs)(o.Z,Object.assign({item:!0,container:!0,alignItems:"center",style:{width:"100%"}},{children:[(0,s.jsxs)(a.Z,Object.assign({style:{paddingLeft:"8px"}},{children:[(0,s.jsx)(d.Z,{color:"primary",value:P,inputRef:U,onKeyDown:e=>{var i;"Escape"===e.key&&(J(""),null===(i=U.current)||void 0===i||i.blur(),M(R))},onChange:e=>J(e.target.value),placeholder:"Buscar camión",inputProps:{"aria-label":"search"}},void 0),(0,s.jsx)(c.Z,Object.assign({style:{padding:4},size:"small",color:"primary","aria-label":"search"},{children:(0,s.jsx)(h.Z,{fontSize:"small"},void 0)}),void 0)]}),void 0),(0,s.jsx)(l.Z,Object.assign({startIcon:(0,s.jsx)(x.Z,{},void 0),onClick:()=>{S(!0)},size:"small",style:{background:"#1d4e89",marginLeft:"2em",color:"white"}},{children:"Nuevo Camión"}),void 0),L.length>0&&(0,s.jsx)(l.Z,Object.assign({onClick:()=>{i(!0)},size:"small",style:{background:"#1d4e89",marginLeft:"2em",color:"white"}},{children:"Desactivar Camión"}),void 0),1===L.length&&(0,s.jsx)(l.Z,Object.assign({startIcon:(0,s.jsx)(j.Z,{},void 0),onClick:()=>{w(!0)},size:"small",style:{background:"#1d4e89",marginLeft:"2em",color:"white"}},{children:"Editar"}),void 0),(0,s.jsx)(o.Z,{item:!0,xs:12,md:6,xl:6},void 0),(0,s.jsx)(o.Z,{item:!0,xs:12,md:6,xl:6},void 0)]}),void 0),(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,s.jsx)(v.Z,Object.assign({dense:!0,style:{display:"flex",flexWrap:"wrap",backgroundColor:"rgb(250 250 250)"}},{children:F.map((e=>{return(0,s.jsx)(u.Z,Object.assign({button:!0,onClick:()=>{(e=>{D((0,y.sq)(e))})(e)},style:{width:"12em",padding:"0px",margin:"0.2em",backgroundColor:"white"}},{children:(0,s.jsx)(k.Z,{unit:e,isSelect:(i=e,!!L.find((e=>i.deviceId===e.deviceId))),isTruck:!0},void 0)}),e.deviceId);var i}))}),void 0)}),void 0),(0,s.jsx)(N,{openNewTruck:I,setOpenNewTruck:S},void 0),L.length>0&&(0,s.jsx)(O.a,Object.assign({open:e,handleClose:_,handleConfirm:()=>z(void 0,void 0,void 0,(function*(){yield i(!1),yield D((0,y.Fr)(L)),yield D((0,C.RK)()),D((0,y.xJ)())})),title:"Seguro que quieres Deshabilitar",customise:!0,loading:K},{children:(0,s.jsxs)(g.Z,Object.assign({severity:"warning"},{children:["Disable: ",L.map((e=>e.deviceId+" "))]}),void 0)}),void 0),(0,s.jsx)(O.a,Object.assign({open:T,handleClose:_,handleConfirm:()=>z(void 0,void 0,void 0,(function*(){yield H.map((e=>{var i;i=e,R.some((e=>e.deviceId===i.deviceId))||D((0,y.iU)([e]))})),yield D((0,C.RK)()),D((0,y.xJ)()),E(!1)})),title:"sure you want to Syncronize",customise:!0},{children:(0,s.jsx)(g.Z,Object.assign({severity:"info"},{children:"Los camiones de Hytera se sincronizarán con el sistema DTS"}),void 0)}),void 0),1===L.length&&(0,s.jsx)(A,{openEditTruck:t,setOpenEditTruck:w,truck:L[0]},void 0)]}),void 0)},void 0)};var D=t(10465);const U=()=>{const[e,i]=m.useState(!1),{truckListHytera:t,status:a}=(0,p.C)(y.qB),d=(0,p.T)(),{truckInfoList:c}=(0,f.Md)(),[l,h]=(0,m.useState)(!1),[x,j]=(0,m.useState)([]),[g,b]=(0,m.useState)(!1),[Z,C]=(0,m.useState)();(0,m.useEffect)((()=>{d((0,y.D0)())}),[]),(0,m.useEffect)((()=>{j(t),console.log("truckListHytera",t)}),[a]);const w=(0,m.useCallback)((e=>{if(e){const i=e.target?e.target.value.toUpperCase():"";j(t.filter((e=>e.deviceAlias.toUpperCase().includes(i))))}}),[t]),I=(0,m.useCallback)((()=>{j(t)}),[t]);return(0,s.jsx)(n.Z,{children:(0,s.jsxs)(o.Z,Object.assign({spacing:1,container:!0,direction:"column",style:{padding:"4px"}},{children:[(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,s.jsx)(r.Z,Object.assign({variant:"subtitle1"},{children:"Lista de camiones Hytera"}),void 0)}),void 0),(0,s.jsx)(o.Z,Object.assign({item:!0,container:!0,alignItems:"center",style:{width:"100%"}},{children:(0,s.jsx)(D.V,{placeholder:"Buscar camión",functionFilter:w,functionCancel:I},void 0)}),void 0),(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:12,xl:12},{children:(0,s.jsx)(v.Z,Object.assign({dense:!0,style:{display:"flex",flexWrap:"wrap",backgroundColor:"rgb(250 250 250)"}},{children:null==x?void 0:x.map((e=>{return(0,s.jsx)(u.Z,Object.assign({button:!0,onClick:()=>{(e=>{b(!0),C(e),h(!l)})(e)},style:{width:"8em",padding:"0px",margin:"0.1em",backgroundColor:"white"}},{children:(0,s.jsx)(k.Z,{unit:e,isTruck:!0,isItemHytera:!0,inList:(i=e,c.some((e=>e.deviceId===i.deviceId)))},void 0)}),e.deviceId);var i}))}),void 0)}),void 0),g&&(0,s.jsx)(N,{openNewTruck:!0,setOpenNewTruck:b,unit:Z},void 0),(0,s.jsx)(O.a,{open:e,handleClose:()=>{i(!1),d((0,y.xJ)())},handleConfirm:()=>{return e=void 0,t=void 0,n=function*(){i(!1)},new((s=void 0)||(s=Promise))((function(i,o){function r(e){try{d(n.next(e))}catch(e){o(e)}}function a(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}));var e,t,s,n},title:"Seguro que quiere borrar?"},void 0)]}),void 0)},void 0)},R=()=>(0,s.jsx)(n.Z,{children:(0,s.jsxs)(o.Z,Object.assign({spacing:0,container:!0,direction:"row",style:{padding:"12px"}},{children:[(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:8,xl:8},{children:(0,s.jsx)(q,{},void 0)}),void 0),(0,s.jsx)(o.Z,Object.assign({item:!0,xs:12,md:4,xl:4},{children:(0,s.jsx)(U,{},void 0)}),void 0)]}),void 0)},void 0)},17813:(e,i,t)=>{"use strict";t.d(i,{T:()=>a,e:()=>d});var s=t(67294),n=t(73855),o=t(99302),r=t(14125);const a=()=>{const[e,i]=(0,s.useState)(""),[t,r]=(0,s.useState)([]),{truckInfoList:a,initial:d}=(0,n.C)(o.ej);return(0,s.useEffect)((()=>{const i=a.filter((i=>{var t,s;return(null===(t=i.deviceAlias)||void 0===t?void 0:t.toUpperCase().includes(e.toUpperCase()))||(null===(s=i.deviceId)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))}));r(i)}),[e,a]),{search:e,setSearch:i,filterList:t,setFilterList:r}},d=()=>{const[e,i]=(0,s.useState)(""),[t,o]=(0,s.useState)([]),{excavatorInfoList:a,initial:d}=(0,n.C)(r.kW);return(0,s.useEffect)((()=>{const i=a.filter((i=>{var t,s;return(null===(t=i.deviceAlias)||void 0===t?void 0:t.toUpperCase().includes(e.toUpperCase()))||(null===(s=i.deviceId)||void 0===s?void 0:s.toUpperCase().includes(e.toUpperCase()))}));o(i)}),[e,a]),{search:e,setSearch:i,filterList:t,setFilterList:o}}},990:(e,i,t)=>{"use strict";t.d(i,{M:()=>n});var s=t(67294);const n=e=>{const[i,t]=(0,s.useState)(e);return[i,e=>{t(Object.assign(Object.assign({},i),{[e.target.name]:e.target.value}))},()=>{t(e)},t]}},15635:(e,i,t)=>{"use strict";t.d(i,{r:()=>o});var s=t(67294),n=t(95090);const o=e=>{const[i,t]=(0,s.useState)(!1);return(0,s.useEffect)((()=>(e===n.JD.DONE||e===n.JD.UNKNOWN||e===n.JD.ERROR?t(!1):t(!0),()=>{t(!1)})),[e]),[i]}},49521:(e,i,t)=>{"use strict";t.d(i,{h:()=>E});var s=t(85893),n=t(41120),o=t(35117),r=t(45258),a=t(28358),d=t(41749),c=t(282),l=t(22318),v=t(43471),u=t(5977),h=t(83736),x=t(55517),j=t(18463),g=t(79912),m=t(79895),p=t(17812),b=t(16575),f=t(51972),Z=t(67294),y=t(87559),C=t(73855),O=t(45855),k=t(5563);const w=({title:e,content:i})=>(0,s.jsxs)(Z.Fragment,{children:[(0,s.jsxs)(l.Z,Object.assign({variant:"subtitle1"},{children:[(0,s.jsx)(b.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,s.jsx)(l.Z,Object.assign({variant:"body1"},{children:i}),void 0),(0,s.jsx)(x.Z,{},void 0)]},void 0),I=()=>{var e,i;const t=(0,C.T)(),n=(0,k.dP)(),{notificationsHeader:o}=(0,C.C)(O.Af);return(0,Z.useEffect)((()=>{t((0,O.pK)())}),[]),(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(g.Z,Object.assign({className:n.root},{children:(0,s.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}),void 0)}),void 0),(0,s.jsx)(x.Z,{},void 0),(0,s.jsxs)(m.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!o.notificationsList||0===(null===(e=o.notificationsList)||void 0===e?void 0:e.length))&&(0,s.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"}),void 0),null===(i=o.notificationsList)||void 0===i?void 0:i.map(((e,i)=>(0,s.jsx)(w,{title:e.title,content:e.message},i)))]}),void 0)]},void 0)},S=()=>{var e;const{notificationsHeader:i}=(0,C.C)(O.Af);return(0,s.jsx)(y.h,{children:(0,s.jsx)(I,{},void 0),header:(0,s.jsx)(p.Z,Object.assign({color:(null===(e=i.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,s.jsx)(f.Z,{},void 0)}),void 0)},void 0)},T=(0,n.Z)((e=>(0,o.Z)({root:{minHeight:"50px"}}))),E=({title:e})=>{const i=T(),t=(0,u.k6)();return(0,s.jsx)(r.Z,Object.assign({position:"fixed",color:"secondary",className:i.root,elevation:0},{children:(0,s.jsxs)(a.Z,Object.assign({variant:"dense"},{children:[(0,s.jsxs)(d.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,s.jsx)(c.Z,{size:"small",startIcon:(0,s.jsx)(v.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{t.goBack()}},void 0),(0,s.jsx)(l.Z,Object.assign({variant:"h6"},{children:e}),void 0)," "]}),void 0),(0,s.jsxs)(d.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,s.jsx)(d.Z,Object.assign({item:!0},{children:(0,s.jsx)(S,{},void 0)}),void 0),(0,s.jsx)(d.Z,Object.assign({item:!0},{children:(0,s.jsx)(h.u,{},void 0)}),void 0)]}),void 0)]}),void 0)}),void 0)}},83736:(e,i,t)=>{"use strict";t.d(i,{f:()=>y,u:()=>O});var s=t(85893),n=t(33901),o=t(18463),r=t(79912),a=t(22318),d=t(55517),c=t(94697),l=t(51907),v=t(41749),u=t(87559),h=t(40064),x=t(50255),j=t(5833),g=t(73855),m=t(53559),p=t(5977),b=t(82067),f=t(93584),Z=t(5563);const y=({className:e})=>{const{user:{user:i}}=(0,g.C)(m.MR);return(0,s.jsx)(n.Z,Object.assign({className:e,alt:"Avatar"},{children:i.firstName[0].toUpperCase()}),void 0)},C=()=>{const e=(0,Z.dP)(),{user:{user:i}}=(0,g.C)(m.MR),t=(0,p.k6)();return(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(r.Z,Object.assign({className:e.root},{children:(0,s.jsx)(a.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}),void 0)}),void 0),(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(c.Z,{avatar:(0,s.jsx)(y,{},void 0),title:`${i.firstName} ${i.lastName}`,subheader:i.username},void 0),(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(l.Z,Object.assign({disableSpacing:!0},{children:(0,s.jsxs)(v.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,s.jsx)(Z.Eo,Object.assign({onClick:()=>{t.push("/setting/profile")},style:{width:"100%"},startIcon:(0,s.jsx)(b.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Perfil"}),void 0),(0,s.jsx)(Z.Eo,Object.assign({onClick:()=>{t.push("/")},style:{width:"100%"},startIcon:(0,s.jsx)(h.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Dispatch"}),void 0),(0,s.jsx)(Z.Eo,Object.assign({onClick:()=>{t.push("/setting")},style:{width:"100%"},startIcon:(0,s.jsx)(x.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Configuraciones"}),void 0),(0,s.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,s.jsx)(d.Z,{},void 0),(0,s.jsx)(Z.Eo,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),t.push("/login")},startIcon:(0,s.jsx)(j.Z,{htmlColor:"red"},void 0)},{children:"Cerrar sesión"}),void 0)]}),void 0)]}),void 0)}),void 0)]},void 0)},O=()=>{const e=(0,Z.QH)();return(0,s.jsx)(u.h,{children:(0,s.jsx)(C,{},void 0),header:(0,s.jsx)(y,{className:e.root},void 0)},void 0)}},5563:(e,i,t)=>{"use strict";t.d(i,{dP:()=>a,QH:()=>d,Eo:()=>c});var s=t(41120),n=t(282),o=t(10150),r=t(38920);const a=(0,s.Z)((e=>(0,o.Z)({root:{textAlign:"center",padding:"5px"}}))),d=(0,s.Z)((e=>(0,o.Z)({root:{width:"30px",height:"30px"}}))),c=(0,r.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(n.Z)}}]);