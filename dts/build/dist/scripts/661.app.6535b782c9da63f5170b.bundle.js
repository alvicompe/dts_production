"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[661],{1197:(e,s,t)=>{var n=t(95318),a=t(20862);s.Z=void 0;var i=a(t(67294)),r=(0,n(t(2108)).default)(i.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");s.Z=r},2834:(e,s,t)=>{t.d(s,{d:()=>r});var n=t(85893),a=t(282),i=t(95477);const r=e=>{var{loading:s,text:t}=e,r=function(e,s){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(e,["loading","text"]);return(0,n.jsx)(a.Z,Object.assign({},r,{disabled:s},{children:s?(0,n.jsx)(i.Z,{style:{width:"20px",height:"20px"}}):t}))}},87559:(e,s,t)=>{t.d(s,{h:()=>c});var n=t(85893),a=t(52387),i=t(73637),r=t(67294),o=t(80324);const c=({children:e,header:s})=>{const[t,c]=r.useState(null),l=()=>{c(null)},d=Boolean(t),h=d?"transitions-popper":void 0;return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(o.Z,{setAnchorEl:c,anchorEl:t,childen:s}),(0,n.jsx)(a.ZP,Object.assign({id:h,open:d,anchorEl:t,onClick:l,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,n.jsx)(i.Z,{children:e})}))]})}},80324:(e,s,t)=>{t.d(s,{Z:()=>a});var n=t(85893);const a=({anchorEl:e,setAnchorEl:s,childen:t})=>(0,n.jsx)("div",Object.assign({onClick:t=>{s(e?null:t.currentTarget)}},{children:t}))},42403:(e,s,t)=>{t.d(s,{D:()=>r});var n=t(85893),a=t(71267),i=t(30115);const r=({isActive:e=!0})=>{const s=(0,i.Z)((s=>({color:{background:e?"rgb(34, 154, 22,0.2)":"rgb(183, 33, 54,0.2)",color:e?"rgb(34, 154, 22)":"rgb(183, 33, 54)",fontSize:"0.875rem"}})))();return(0,n.jsx)(a.Z,{className:s.color,label:e?"Activo ":"Deshabilitado"})}},990:(e,s,t)=>{t.d(s,{M:()=>a});var n=t(67294);const a=e=>{const[s,t]=(0,n.useState)(e),a=()=>{t(e)};return(0,n.useEffect)((()=>()=>{a()}),[]),[s,e=>{console.log("type e",typeof e),t(Object.assign(Object.assign({},s),{[e.target.name]:e.target.value||""===e.target.value?e.target.value:e.target.checked}))},a,t]}},15635:(e,s,t)=>{t.d(s,{r:()=>i});var n=t(67294),a=t(95090);const i=e=>{const[s,t]=(0,n.useState)(!1);return(0,n.useEffect)((()=>(e===a.JD.DONE||e===a.JD.UNKNOWN||e===a.JD.ERROR?t(!1):t(!0),()=>{t(!1)})),[e]),[s]}},49521:(e,s,t)=>{t.d(s,{h:()=>E});var n=t(85893),a=t(41120),i=t(35117),r=t(45258),o=t(28358),c=t(41749),l=t(282),d=t(22318),h=t(43471),j=t(5977),u=t(83736),x=t(55517),g=t(18463),m=t(79912),b=t(79895),p=t(17812),v=t(16575),Z=t(51972),f=t(67294),O=t(87559),w=t(73855),y=t(45855),C=t(96102);const S=({title:e,content:s})=>(0,n.jsxs)(f.Fragment,{children:[(0,n.jsxs)(d.Z,Object.assign({variant:"subtitle1"},{children:[(0,n.jsx)(v.Z,{style:{fontSize:"14px",marginRight:"4px"}}),e]})),(0,n.jsx)(d.Z,Object.assign({variant:"body1"},{children:s})),(0,n.jsx)(x.Z,{})]}),N=()=>{var e,s;const t=(0,w.T)(),a=(0,C.dP)(),{notificationsHeader:i}=(0,w.C)(y.Af);return(0,f.useEffect)((()=>{t((0,y.pK)())}),[]),(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(m.Z,Object.assign({className:a.root},{children:(0,n.jsx)(d.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}))})),(0,n.jsx)(x.Z,{}),(0,n.jsxs)(b.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!i.notificationsList||0===(null===(e=i.notificationsList)||void 0===e?void 0:e.length))&&(0,n.jsx)(d.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"})),null===(s=i.notificationsList)||void 0===s?void 0:s.map(((e,s)=>(0,n.jsx)(S,{title:e.title,content:e.message},s)))]}))]})},k=()=>{var e;const{notificationsHeader:s}=(0,w.C)(y.Af);return(0,n.jsx)(O.h,{children:(0,n.jsx)(N,{}),header:(0,n.jsx)(p.Z,Object.assign({color:(null===(e=s.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,n.jsx)(Z.Z,{})}))})},P=(0,a.Z)((e=>(0,i.Z)({root:{minHeight:"50px"}}))),E=({title:e})=>{const s=P(),t=(0,j.k6)();return(0,n.jsx)(r.Z,Object.assign({position:"fixed",color:"secondary",className:s.root,elevation:0},{children:(0,n.jsxs)(o.Z,Object.assign({variant:"dense"},{children:[(0,n.jsxs)(c.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,n.jsx)(l.Z,{size:"small",startIcon:(0,n.jsx)(h.Z,{color:"action",style:{color:"#fff"}}),onClick:()=>{t.goBack()}}),(0,n.jsx)(d.Z,Object.assign({variant:"h6"},{children:e}))," "]})),(0,n.jsxs)(c.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,n.jsx)(c.Z,Object.assign({item:!0},{children:(0,n.jsx)(k,{})})),(0,n.jsx)(c.Z,Object.assign({item:!0},{children:(0,n.jsx)(u.u,{})}))]}))]}))}))}},83736:(e,s,t)=>{t.d(s,{f:()=>O,u:()=>y});var n=t(85893),a=t(33901),i=t(18463),r=t(79912),o=t(22318),c=t(55517),l=t(94697),d=t(51907),h=t(41749),j=t(87559),u=t(40064),x=t(50255),g=t(5833),m=t(73855),b=t(53559),p=t(5977),v=t(82067),Z=t(93584),f=t(96102);const O=({className:e})=>{const{user:{user:s}}=(0,m.C)(b.MR);return(0,n.jsx)(a.Z,Object.assign({className:e,alt:"Avatar"},{children:s.firstName[0].toUpperCase()}))},w=()=>{const e=(0,f.dP)(),{user:{user:s}}=(0,m.C)(b.MR),t=(0,p.k6)();return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(r.Z,Object.assign({className:e.root},{children:(0,n.jsx)(o.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}))})),(0,n.jsx)(c.Z,{}),(0,n.jsx)(l.Z,{avatar:(0,n.jsx)(O,{}),title:`${s.firstName} ${s.lastName}`,subheader:s.username}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(d.Z,Object.assign({disableSpacing:!0},{children:(0,n.jsxs)(h.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,n.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/setting/profile")},style:{width:"100%"},startIcon:(0,n.jsx)(v.Z,{htmlColor:`${Z.Jx}`})},{children:"Perfil"})),(0,n.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/")},style:{width:"100%"},startIcon:(0,n.jsx)(u.Z,{htmlColor:`${Z.Jx}`})},{children:"Dispatch"})),(0,n.jsx)(f.Eo,Object.assign({onClick:()=>{t.push("/setting")},style:{width:"100%"},startIcon:(0,n.jsx)(x.Z,{htmlColor:`${Z.Jx}`})},{children:"Configuraciones"})),(0,n.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)(f.Eo,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),t.push("/login")},startIcon:(0,n.jsx)(g.Z,{htmlColor:"red"})},{children:"Cerrar sesión"}))]}))]}))}))]})},y=()=>{const e=(0,f.QH)();return(0,n.jsx)(j.h,{children:(0,n.jsx)(w,{}),header:(0,n.jsx)(O,{className:e.root})})}},96102:(e,s,t)=>{t.d(s,{Eo:()=>l,QH:()=>c,dP:()=>o});var n=t(41120),a=t(282),i=t(10150),r=t(38920);const o=(0,n.Z)((e=>(0,i.Z)({root:{textAlign:"center",padding:"5px"}}))),c=(0,n.Z)((e=>(0,i.Z)({root:{width:"30px",height:"30px"}}))),l=(0,r.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(a.Z)},35351:(e,s,t)=>{t.r(s),t.d(s,{SettingUserProfileView:()=>ae,default:()=>ie});var n=t(85893),a=t(43832),i=t(67294),r=t(41120),o=t(18463),c=t(94697),l=t(87462),d=t(45987),h=t(86010),j=t(52543),u=["video","audio","picture","iframe","img"],x=i.forwardRef((function(e,s){var t=e.children,n=e.classes,a=e.className,r=e.component,o=void 0===r?"div":r,c=e.image,j=e.src,x=e.style,g=(0,d.Z)(e,["children","classes","className","component","image","src","style"]),m=-1!==u.indexOf(o),b=!m&&c?(0,l.Z)({backgroundImage:'url("'.concat(c,'")')},x):x;return i.createElement(o,(0,l.Z)({className:(0,h.Z)(n.root,a,m&&n.media,-1!=="picture img".indexOf(o)&&n.img),ref:s,style:b,src:m?c||j:void 0},g),t)}));const g=(0,j.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(x);var m=t(51907),b=t(73855),p=t(53559),v=t(83736),Z=t(45258),f=t(70065),O=t(41423),w=t(60395),y=t(57850),C=t(41749),S=t(22318),N=t(13457),k=t(8286),P=t(44562),E=t(2834),I=t(990),$=t(15635),A=t(65529),R=t(93584);const z=(0,y.Z)(),D=(0,r.Z)((e=>({marginSmall:{margin:".5rem 0 .5rem 0"}}))),F=()=>{const e=D(),{userError:s,statusUpdatePassword:t}=(0,b.C)(A.mz),{user:{user:a}}=(0,b.C)(p.MR),[i]=(0,$.r)(t),r=(0,b.T)(),[o,c,l]=(0,I.M)({userId:a.id,currentPassword:"",newPassword:"",newPassword2:""}),{currentPassword:d,newPassword:h,newPassword2:j}=o;return(0,n.jsxs)(C.Z,Object.assign({container:!0,spacing:2,alignItems:"center",justifyContent:"space-between"},{children:[(0,n.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:4},{children:(0,n.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Cambio de contraseña"}))})),(0,n.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:8},{children:(0,n.jsx)(N.Z,Object.assign({theme:z},{children:(0,n.jsx)(w.Z,Object.assign({component:"form",onSubmit:e=>{e.preventDefault(),h===j&&(r((0,A.sG)(o)),l())},sx:{mt:1}},{children:(0,n.jsx)(C.Z,Object.assign({container:!0,spacing:2,justifyContent:"space-between"},{children:(0,n.jsxs)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:[(0,n.jsx)(k.Z,{variant:"outlined",onChange:c,value:d,margin:"normal",required:!0,fullWidth:!0,id:"currentPassword",type:"password",label:"Contraseña Actual",name:"currentPassword",autoFocus:!0}),(0,n.jsx)(k.Z,{variant:"outlined",onChange:c,value:h,margin:"normal",required:!0,fullWidth:!0,id:"newPassword",type:"password",label:"Nueva Contraseña",name:"newPassword",autoFocus:!0,error:h!=j,helperText:h!=j?"Las contraseñas no coinciden":null}),(0,n.jsx)(k.Z,{variant:"outlined",onChange:c,value:j,margin:"normal",required:!0,fullWidth:!0,id:"newPassword2",type:"password",label:"Nueva Contraseña",name:"newPassword2",autoFocus:!0,error:j!=j,helperText:j!=j?"Las contraseñas no coinciden":null}),s&&(0,n.jsx)(P.Z,Object.assign({variant:"standard",severity:"error",style:{color:"red",textAlign:"center"}},{children:s})),(0,n.jsx)(E.d,{className:e.marginSmall,type:"submit",fullWidth:!0,style:{background:`${R.Jx}`,color:"white"},variant:"contained",text:"Enviar",loading:i})]}))}))}))}))}))]}))};var M=t(82285),L=t(33901),W=t(79895),T=t(1197),J=t(79912),H=t(282),U=t(55517);const q=(0,j.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{width:"100%","&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(H.Z),B=({data:e,title:s})=>(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(J.Z,{children:(0,n.jsx)(S.Z,Object.assign({variant:"h5",component:"h2"},{children:s}))}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(C.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:null==e?void 0:e.map((e=>(0,n.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,n.jsx)(q,{children:(0,n.jsxs)(C.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,n.jsx)(S.Z,Object.assign({variant:"body2",component:"h2"},{children:e.tipo})),(0,n.jsx)(S.Z,Object.assign({variant:"body2",component:"h2"},{children:e.value})),e.Componet]}))}),(0,n.jsx)(U.Z,{})]}),e.value)))}))})]});var G=t(42403);(0,y.Z)();const K=()=>{const{user:{user:e}}=(0,b.C)(p.MR),s=(0,n.jsx)(L.Z,Object.assign({alt:"Remy Sharp"},{children:"A"})),t=(0,n.jsx)(T.Z,{}),[a,r]=i.useState([]);return i.useEffect((()=>{const a=[],i={tipo:"Foto",value:" Agrega una foto para personalizar tu cuenta",Componet:s};a.push(i);const o={tipo:"Usuario",value:`${e.username} `,Componet:t};a.push(o);const c={tipo:"Nombre",value:`${e.firstName} ${e.lastName}`,Componet:t};a.push(c);const l={tipo:"CORREO",value:`${e.email}`,Componet:t};a.push(l);const d={tipo:"dni",value:`${e.dni}`,Componet:t};a.push(d);const h={tipo:"Estado",value:(0,n.jsx)(G.D,{isActive:!e||!e.isActive}),Componet:t};a.push(h),r(a)}),[]),(0,n.jsxs)(C.Z,Object.assign({container:!0,spacing:2,alignItems:"center",justifyContent:"space-between"},{children:[(0,n.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:4},{children:(0,n.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Detalles Basicos"}))})),(0,n.jsxs)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:8,spacing:3},{children:[(0,n.jsx)(C.Z,Object.assign({item:!0},{children:(0,n.jsx)(S.Z,Object.assign({variant:"h5",component:"h2",color:"secondary"},{children:"Gestione su información personal"}))})),(0,n.jsx)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:12,spacing:5},{children:(0,n.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:12},{children:(0,n.jsxs)(W.Z,Object.assign({style:{background:"#F4F5F7",padding:"5px"}},{children:[(0,n.jsx)(S.Z,Object.assign({style:{color:"#5e6c84"},variant:"subtitle1",component:"span",color:"secondary"},{children:"Esta es una cuenta de Dts Mine. Edite su información personal y los ajustes de visibilidad en su Perfil de Dts Mine."})),(0,n.jsx)("br",{}),(0,n.jsx)(S.Z,Object.assign({style:{color:"#5e6c84"},variant:"subtitle1",component:"span",color:"secondary"},{children:"Para obtener más información, comuniquese con administración."}))]}))}))})),(0,n.jsx)(C.Z,Object.assign({container:!0,item:!0,xs:12,sm:12,md:12,lg:12,spacing:5},{children:(0,n.jsx)(C.Z,Object.assign({item:!0,xs:12,sm:12,md:12,lg:12},{children:(0,n.jsx)(B,{title:"Información básica",data:a})}))}))]}))]}))};function Q(e){const{children:s,value:t,index:a}=e,i=function(e,s){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(e,["children","value","index"]);return(0,n.jsx)("div",Object.assign({role:"tabpanel",hidden:t!==a,id:`wrapped-tabpanel-${a}`,"aria-labelledby":`wrapped-tab-${a}`},i,{children:t===a&&(0,n.jsx)(w.Z,Object.assign({p:3},{children:s}))}))}function _(e){return{id:`wrapped-tab-${e}`,"aria-controls":`wrapped-tabpanel-${e}`}}const V=(0,r.Z)((e=>({root:{flexGrow:1,backgroundColor:e.palette.background.paper},positionStatic:{top:80}}))),X=()=>{const e=V(),[s,t]=i.useState("one");return(0,n.jsxs)("div",Object.assign({className:e.root},{children:[(0,n.jsx)(Z.Z,Object.assign({position:"sticky",className:e.positionStatic,color:"secondary"},{children:(0,n.jsxs)(f.Z,Object.assign({value:s,onChange:(e,s)=>{t(s)},"aria-label":"wrapped label user"},{children:[(0,n.jsx)(O.Z,Object.assign({value:"one",label:"General",wrapped:!0},_("one"))),(0,n.jsx)(O.Z,Object.assign({value:"two",label:"Seguridad"},_("two")))]}))})),(0,n.jsx)(Q,Object.assign({value:s,index:"one"},{children:(0,n.jsx)(K,{})})),(0,n.jsx)(Q,Object.assign({value:s,index:"two"},{children:(0,n.jsx)(M.Z,Object.assign({in:!s,direction:"down"},{children:(0,n.jsx)(F,{})}))}))]}))},Y=(0,r.Z)({root:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:240}}),ee=(0,r.Z)({root:{position:"absolute",marginTop:"120px"},avatar:{width:"60px",height:"60px",fontSize:"2rem",fontWeight:600},title:{fontSize:"1.5rem",fontWeight:600,color:"white"},subheader:{fontSize:"1rem",fontWeight:600,color:"white"}}),se=()=>{const e=Y(),s=ee(),{user:{user:t}}=(0,b.C)(p.MR);return(0,n.jsxs)(o.Z,Object.assign({className:e.root,variant:"outlined"},{children:[(0,n.jsx)(c.Z,{classes:{root:s.root,title:s.title,subheader:s.subheader},avatar:(0,n.jsx)(v.f,{className:s.avatar}),title:`${t.firstName} ${t.lastName}`,subheader:t.username}),(0,n.jsx)(g,{className:e.media,image:"https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Contemplative Reptile"}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(X,{})})]}))},te=()=>(0,n.jsx)(i.Fragment,{children:(0,n.jsx)(se,{})});var ne=t(49521);const ae=()=>(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(ne.h,{title:" usuarios DTS"}),(0,n.jsx)(a.Z,Object.assign({style:{marginTop:"60px"},maxWidth:"xl"},{children:(0,n.jsx)(te,{})}))]}),ie=ae}}]);