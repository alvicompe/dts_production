(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[661],{1197:(e,s,i)=>{"use strict";var t=i(95318),o=i(20862);s.Z=void 0;var n=o(i(67294)),r=(0,t(i(2108)).default)(n.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");s.Z=r},2834:(e,s,i)=>{"use strict";i.d(s,{d:()=>r});var t=i(85893),o=i(282),n=i(95477);const r=e=>{var{loading:s,text:i}=e,r=function(e,s){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)s.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]])}return i}(e,["loading","text"]);return(0,t.jsx)(o.Z,Object.assign({},r,{disabled:s},{children:s?(0,t.jsx)(n.Z,{style:{width:"20px",height:"20px"}},void 0):i}),void 0)}},36192:(e,s,i)=>{"use strict";i.d(s,{h:()=>c});var t=i(85893),o=i(52387),n=i(73637),r=i(67294);const a=({anchorEl:e,setAnchorEl:s,childen:i})=>(0,t.jsx)("div",Object.assign({onClick:i=>{s(e?null:i.currentTarget)}},{children:i}),void 0),c=({children:e,header:s})=>{const[i,c]=r.useState(null),d=Boolean(i),l=d?"transitions-popper":void 0;return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(a,{setAnchorEl:c,anchorEl:i,childen:s},void 0),(0,t.jsx)(o.ZP,Object.assign({id:l,open:d,anchorEl:i,onClose:()=>{c(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,t.jsx)(n.Z,{children:e},void 0)}),void 0)]},void 0)}},42403:(e,s,i)=>{"use strict";i.d(s,{D:()=>r});var t=i(85893),o=i(71267),n=i(73914);const r=({isActive:e=!0})=>{const s=(0,n.Z)((s=>({color:{background:e?"rgb(34, 154, 22,0.2)":"rgb(183, 33, 54,0.2)",color:e?"rgb(34, 154, 22)":"rgb(183, 33, 54)",fontSize:"0.875rem"}})))();return(0,t.jsx)(o.Z,{className:s.color,label:e?"Activo ":"Deshabilitado"},void 0)}},990:(e,s,i)=>{"use strict";i.d(s,{M:()=>o});var t=i(67294);const o=e=>{const[s,i]=(0,t.useState)(e);return[s,e=>{i(Object.assign(Object.assign({},s),{[e.target.name]:e.target.value}))},()=>{i(e)},i]}},15635:(e,s,i)=>{"use strict";i.d(s,{r:()=>n});var t=i(67294),o=i(95090);const n=e=>{const[s,i]=(0,t.useState)(!1);return(0,t.useEffect)((()=>(e===o.JD.DONE||e===o.JD.UNKNOWN||e===o.JD.ERROR?i(!1):i(!0),()=>{i(!1)})),[e]),[s]}},49521:(e,s,i)=>{"use strict";i.d(s,{h:()=>E});var t=i(85893),o=i(41120),n=i(35117),r=i(45258),a=i(28358),c=i(41749),d=i(282),l=i(22318),v=i(43471),j=i(5977),h=i(83736),u=i(55517),x=i(18463),g=i(79912),m=i(79895),b=i(17812),p=i(16575),Z=i(51972),f=i(67294),O=i(36192),w=i(73855),y=i(45855),C=i(5563);const S=({title:e,content:s})=>(0,t.jsxs)(f.Fragment,{children:[(0,t.jsxs)(l.Z,Object.assign({variant:"subtitle1"},{children:[(0,t.jsx)(p.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,t.jsx)(l.Z,Object.assign({variant:"body1"},{children:s}),void 0),(0,t.jsx)(u.Z,{},void 0)]},void 0),N=()=>{var e,s;const i=(0,w.T)(),o=(0,C.dP)(),{notificationsHeader:n}=(0,w.C)(y.Af);return(0,f.useEffect)((()=>{i((0,y.pK)())}),[]),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(g.Z,Object.assign({className:o.root},{children:(0,t.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}),void 0)}),void 0),(0,t.jsx)(u.Z,{},void 0),(0,t.jsxs)(m.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!n.notificationsList||0===(null===(e=n.notificationsList)||void 0===e?void 0:e.length))&&(0,t.jsx)(l.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"}),void 0),null===(s=n.notificationsList)||void 0===s?void 0:s.map(((e,s)=>(0,t.jsx)(S,{title:e.title,content:e.message},s)))]}),void 0)]},void 0)},k=()=>{var e;const{notificationsHeader:s}=(0,w.C)(y.Af);return(0,t.jsx)(O.h,{children:(0,t.jsx)(N,{},void 0),header:(0,t.jsx)(b.Z,Object.assign({color:(null===(e=s.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,t.jsx)(Z.Z,{},void 0)}),void 0)},void 0)},P=(0,o.Z)((e=>(0,n.Z)({root:{minHeight:"50px"}}))),E=({title:e})=>{const s=P(),i=(0,j.k6)();return(0,t.jsx)(r.Z,Object.assign({position:"fixed",color:"secondary",className:s.root,elevation:0},{children:(0,t.jsxs)(a.Z,Object.assign({variant:"dense"},{children:[(0,t.jsxs)(c.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,t.jsx)(d.Z,{size:"small",startIcon:(0,t.jsx)(v.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{i.goBack()}},void 0),(0,t.jsx)(l.Z,Object.assign({variant:"h6"},{children:e}),void 0)," "]}),void 0),(0,t.jsxs)(c.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,t.jsx)(c.Z,Object.assign({item:!0},{children:(0,t.jsx)(k,{},void 0)}),void 0),(0,t.jsx)(c.Z,Object.assign({item:!0},{children:(0,t.jsx)(h.u,{},void 0)}),void 0)]}),void 0)]}),void 0)}),void 0)}},83736:(e,s,i)=>{"use strict";i.d(s,{f:()=>O,u:()=>y});var t=i(85893),o=i(33901),n=i(18463),r=i(79912),a=i(22318),c=i(55517),d=i(94697),l=i(51907),v=i(41749),j=i(36192),h=i(40064),u=i(50255),x=i(5833),g=i(73855),m=i(53559),b=i(5977),p=i(82067),Z=i(93584),f=i(5563);const O=({className:e})=>{const{user:{user:s}}=(0,g.C)(m.MR);return(0,t.jsx)(o.Z,Object.assign({className:e,alt:"Avatar"},{children:s.firstName[0].toUpperCase()}),void 0)},w=()=>{const e=(0,f.dP)(),{user:{user:s}}=(0,g.C)(m.MR),i=(0,b.k6)();return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(r.Z,Object.assign({className:e.root},{children:(0,t.jsx)(a.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}),void 0)}),void 0),(0,t.jsx)(c.Z,{},void 0),(0,t.jsx)(d.Z,{avatar:(0,t.jsx)(O,{},void 0),title:`${s.firstName} ${s.lastName}`,subheader:s.username},void 0),(0,t.jsx)(c.Z,{},void 0),(0,t.jsx)(l.Z,Object.assign({disableSpacing:!0},{children:(0,t.jsxs)(v.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,t.jsx)(f.Eo,Object.assign({onClick:()=>{i.push("/setting/profile")},style:{width:"100%"},startIcon:(0,t.jsx)(p.Z,{htmlColor:`${Z.Jx}`},void 0)},{children:"Perfil"}),void 0),(0,t.jsx)(f.Eo,Object.assign({onClick:()=>{i.push("/")},style:{width:"100%"},startIcon:(0,t.jsx)(h.Z,{htmlColor:`${Z.Jx}`},void 0)},{children:"Dispatch"}),void 0),(0,t.jsx)(f.Eo,Object.assign({onClick:()=>{i.push("/setting")},style:{width:"100%"},startIcon:(0,t.jsx)(u.Z,{htmlColor:`${Z.Jx}`},void 0)},{children:"Configuraciones"}),void 0),(0,t.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,t.jsx)(c.Z,{},void 0),(0,t.jsx)(f.Eo,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),i.push("/login")},startIcon:(0,t.jsx)(x.Z,{htmlColor:"red"},void 0)},{children:"Cerrar sesión"}),void 0)]}),void 0)]}),void 0)}),void 0)]},void 0)},y=()=>{const e=(0,f.QH)();return(0,t.jsx)(j.h,{children:(0,t.jsx)(w,{},void 0),header:(0,t.jsx)(O,{className:e.root},void 0)},void 0)}},5563:(e,s,i)=>{"use strict";i.d(s,{dP:()=>a,QH:()=>c,Eo:()=>d});var t=i(41120),o=i(282),n=i(10150),r=i(38920);const a=(0,t.Z)((e=>(0,n.Z)({root:{textAlign:"center",padding:"5px"}}))),c=(0,t.Z)((e=>(0,n.Z)({root:{width:"30px",height:"30px"}}))),d=(0,r.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(o.Z)},35351:(e,s,i)=>{"use strict";i.r(s),i.d(s,{SettingUserProfileView:()=>oe,default:()=>ne});var t=i(85893),o=i(43832),n=i(67294),r=i(41120),a=i(18463),c=i(94697),d=i(22122),l=i(81253),v=i(86010),j=i(52543),h=["video","audio","picture","iframe","img"],u=n.forwardRef((function(e,s){var i=e.children,t=e.classes,o=e.className,r=e.component,a=void 0===r?"div":r,c=e.image,j=e.src,u=e.style,x=(0,l.Z)(e,["children","classes","className","component","image","src","style"]),g=-1!==h.indexOf(a),m=!g&&c?(0,d.Z)({backgroundImage:'url("'.concat(c,'")')},u):u;return n.createElement(a,(0,d.Z)({className:(0,v.Z)(t.root,o,g&&t.media,-1!=="picture img".indexOf(a)&&t.img),ref:s,style:m,src:g?c||j:void 0},x),i)}));const x=(0,j.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(u);var g=i(51907),m=i(73855),b=i(53559),p=i(83736),Z=i(45258),f=i(14096),O=i(41423),w=i(10046),y=i(57850),C=i(41749),S=i(22318),N=i(13457),k=i(8286),P=i(44562),E=i(2834),I=i(990),$=i(15635),A=i(65529),R=i(93584);const z=(0,y.Z)(),D=(0,r.Z)((e=>({marginSmall:{margin:".5rem 0 .5rem 0"}}))),F=()=>{const e=D(),{userError:s,statusUpdatePassword:i}=(0,m.C)(A.mz),{user:{user:o}}=(0,m.C)(b.MR),[n]=(0,$.r)(i),r=(0,m.T)(),[a,c,d]=(0,I.M)({userId:o.id,currentPassword:"",newPassword:"",newPassword2:""}),{currentPassword:l,newPassword:v,newPassword2:j}=a;return(0,t.jsxs)(C.Z,Object.assign({container:!0,spacing:2,alignItems:"center",justifyContent:"space-between"},{children:[(0,t.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:4},{children:(0,t.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Cambio de contraseña"}),void 0)}),void 0),(0,t.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:8},{children:(0,t.jsx)(N.Z,Object.assign({theme:z},{children:(0,t.jsx)(w.Z,Object.assign({component:"form",onSubmit:e=>{e.preventDefault(),v===j&&(r((0,A.sG)(a)),d())},sx:{mt:1}},{children:(0,t.jsx)(C.Z,Object.assign({container:!0,spacing:2,justifyContent:"space-between"},{children:(0,t.jsxs)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:[(0,t.jsx)(k.Z,{variant:"outlined",onChange:c,value:l,margin:"normal",required:!0,fullWidth:!0,id:"currentPassword",type:"password",label:"Contraseña Actual",name:"currentPassword",autoFocus:!0},void 0),(0,t.jsx)(k.Z,{variant:"outlined",onChange:c,value:v,margin:"normal",required:!0,fullWidth:!0,id:"newPassword",type:"password",label:"Nueva Contraseña",name:"newPassword",autoFocus:!0,error:v!=j,helperText:v!=j?"Las contraseñas no coinciden":null},void 0),(0,t.jsx)(k.Z,{variant:"outlined",onChange:c,value:j,margin:"normal",required:!0,fullWidth:!0,id:"newPassword2",type:"password",label:"Nueva Contraseña",name:"newPassword2",autoFocus:!0,error:j!=j,helperText:j!=j?"Las contraseñas no coinciden":null},void 0),s&&(0,t.jsx)(P.Z,Object.assign({variant:"standard",severity:"error",style:{color:"red",textAlign:"center"}},{children:s}),void 0),(0,t.jsx)(E.d,{className:e.marginSmall,type:"submit",fullWidth:!0,style:{background:`${R.Jx}`,color:"white"},variant:"contained",text:"Enviar",loading:n},void 0)]}),void 0)}),void 0)}),void 0)}),void 0)}),void 0)]}),void 0)};var M=i(82285),L=i(33901),W=i(79895),T=i(1197),J=i(79912),H=i(282),U=i(55517);const q=(0,j.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{width:"100%","&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(H.Z),B=({data:e,title:s})=>(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(J.Z,{children:(0,t.jsx)(S.Z,Object.assign({variant:"h5",component:"h2"},{children:s}),void 0)},void 0),(0,t.jsx)(g.Z,{children:(0,t.jsx)(C.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:null==e?void 0:e.map((e=>(0,t.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,t.jsx)(q,{children:(0,t.jsxs)(C.Z,Object.assign({container:!0,justifyContent:"space-between",alignItems:"center"},{children:[(0,t.jsx)(S.Z,Object.assign({variant:"body2",component:"h2"},{children:e.tipo}),void 0),(0,t.jsx)(S.Z,Object.assign({variant:"body2",component:"h2"},{children:e.value}),void 0),e.Componet]}),void 0)},void 0),(0,t.jsx)(U.Z,{},void 0)]}),e.value)))}),void 0)},void 0)]},void 0);var G=i(42403);(0,y.Z)();const K=()=>{const{user:{user:e}}=(0,m.C)(b.MR),s=(0,t.jsx)(L.Z,Object.assign({alt:"Remy Sharp"},{children:"A"}),void 0),i=(0,t.jsx)(T.Z,{},void 0),[o,r]=n.useState([]);return n.useEffect((()=>{const o=[],n={tipo:"Foto",value:" Agrega una foto para personalizar tu cuenta",Componet:s};o.push(n);const a={tipo:"Usuario",value:`${e.username} `,Componet:i};o.push(a);const c={tipo:"Nombre",value:`${e.firstName} ${e.lastName}`,Componet:i};o.push(c);const d={tipo:"CORREO",value:`${e.email}`,Componet:i};o.push(d);const l={tipo:"dni",value:`${e.dni}`,Componet:i};o.push(l);const v={tipo:"Estado",value:(0,t.jsx)(G.D,{isActive:!e||!e.isActive},void 0),Componet:i};o.push(v),r(o)}),[]),(0,t.jsxs)(C.Z,Object.assign({container:!0,spacing:2,alignItems:"center",justifyContent:"space-between"},{children:[(0,t.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:4},{children:(0,t.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Detalles Basicos"}),void 0)}),void 0),(0,t.jsxs)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:8,spacing:3},{children:[(0,t.jsx)(C.Z,Object.assign({item:!0},{children:(0,t.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Gestione su información personal"}),void 0)}),void 0),(0,t.jsx)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:12,spacing:5},{children:(0,t.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:12},{children:(0,t.jsxs)(W.Z,Object.assign({style:{background:"#F4F5F7",padding:"5px"}},{children:[(0,t.jsx)(S.Z,Object.assign({style:{color:"#5e6c84"},variant:"subtitle1",component:"span",color:"secondary"},{children:"Esta es una cuenta de Dts Mine. Edite su información personal y los ajustes de visibilidad en su Perfil de Dts Mine."}),void 0),(0,t.jsx)("br",{},void 0),(0,t.jsx)(S.Z,Object.assign({style:{color:"#5e6c84"},variant:"subtitle1",component:"span",color:"secondary"},{children:"Para obtener más información, comuniquese con administración."}),void 0)]}),void 0)}),void 0)}),void 0),(0,t.jsx)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:12,spacing:5},{children:(0,t.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:12},{children:(0,t.jsx)(B,{title:"Información básica",data:o},void 0)}),void 0)}),void 0)]}),void 0)]}),void 0)};function Q(e){const{children:s,value:i,index:o}=e,n=function(e,s){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)s.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]])}return i}(e,["children","value","index"]);return(0,t.jsx)("div",Object.assign({role:"tabpanel",hidden:i!==o,id:`wrapped-tabpanel-${o}`,"aria-labelledby":`wrapped-tab-${o}`},n,{children:i===o&&(0,t.jsx)(w.Z,Object.assign({p:3},{children:s}),void 0)}),void 0)}function _(e){return{id:`wrapped-tab-${e}`,"aria-controls":`wrapped-tabpanel-${e}`}}const V=(0,r.Z)((e=>({root:{flexGrow:1,backgroundColor:e.palette.background.paper},positionStatic:{top:80}}))),X=()=>{const e=V(),[s,i]=n.useState("one");return(0,t.jsxs)("div",Object.assign({className:e.root},{children:[(0,t.jsx)(Z.Z,Object.assign({position:"sticky",className:e.positionStatic,color:"secondary"},{children:(0,t.jsxs)(f.Z,Object.assign({value:s,onChange:(e,s)=>{i(s)},"aria-label":"wrapped label user"},{children:[(0,t.jsx)(O.Z,Object.assign({value:"one",label:"General",wrapped:!0},_("one")),void 0),(0,t.jsx)(O.Z,Object.assign({value:"two",label:"Seguridad"},_("two")),void 0)]}),void 0)}),void 0),(0,t.jsx)(Q,Object.assign({value:s,index:"one"},{children:(0,t.jsx)(K,{},void 0)}),void 0),(0,t.jsx)(Q,Object.assign({value:s,index:"two"},{children:(0,t.jsx)(M.Z,Object.assign({in:!s,direction:"down"},{children:(0,t.jsx)(F,{},void 0)}),void 0)}),void 0)]}),void 0)},Y=(0,r.Z)({root:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:240}}),ee=(0,r.Z)({root:{position:"absolute",marginTop:"120px"},avatar:{width:"60px",height:"60px",fontSize:"2rem",fontWeight:600},title:{fontSize:"1.5rem",fontWeight:600,color:"white"},subheader:{fontSize:"1rem",fontWeight:600,color:"white"}}),se=()=>{const e=Y(),s=ee(),{user:{user:i}}=(0,m.C)(b.MR);return(0,t.jsxs)(a.Z,Object.assign({className:e.root,variant:"outlined"},{children:[(0,t.jsx)(c.Z,{classes:{root:s.root,title:s.title,subheader:s.subheader},avatar:(0,t.jsx)(p.f,{className:s.avatar},void 0),title:`${i.firstName} ${i.lastName}`,subheader:i.username},void 0),(0,t.jsx)(x,{className:e.media,image:"https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Contemplative Reptile"},void 0),(0,t.jsx)(g.Z,{children:(0,t.jsx)(X,{},void 0)},void 0)]}),void 0)},ie=()=>(0,t.jsx)(n.Fragment,{children:(0,t.jsx)(se,{},void 0)},void 0);var te=i(49521);const oe=()=>(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(te.h,{title:" usuarios DTS"},void 0),(0,t.jsx)(o.Z,Object.assign({style:{marginTop:"60px"},maxWidth:"xl"},{children:(0,t.jsx)(ie,{},void 0)}),void 0)]},void 0),ne=oe}}]);