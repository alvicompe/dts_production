"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[80],{13258:(e,t,o)=>{o.d(t,{Z:()=>b});var i=o(87462),n=o(45987),s=o(67294),a=(o(45697),o(86010)),c=o(56608),r=o(63786);const d=(0,r.Z)(s.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),l=(0,r.Z)(s.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");var h=o(59693);const v=(0,r.Z)(s.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var u=o(93871),x=o(52543),m=s.createElement(l,null),j=s.createElement(d,null),p=s.createElement(v,null),g=s.forwardRef((function(e,t){var o=e.checkedIcon,r=void 0===o?m:o,d=e.classes,l=e.color,h=void 0===l?"secondary":l,v=e.icon,x=void 0===v?j:v,g=e.indeterminate,b=void 0!==g&&g,f=e.indeterminateIcon,Z=void 0===f?p:f,k=e.inputProps,C=e.size,O=void 0===C?"medium":C,y=(0,n.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),E=b?Z:x,z=b?Z:r;return s.createElement(c.Z,(0,i.Z)({type:"checkbox",classes:{root:(0,a.Z)(d.root,d["color".concat((0,u.Z)(h))],b&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:h,inputProps:(0,i.Z)({"data-indeterminate":b},k),icon:s.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===O?O:E.props.fontSize}),checkedIcon:s.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===O?O:z.props.fontSize}),ref:t},y))}));const b=(0,x.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,h.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,h.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},56608:(e,t,o)=>{o.d(t,{Z:()=>u});var i=o(87462),n=o(29439),s=o(45987),a=o(67294),c=(o(45697),o(86010)),r=o(22775),d=o(22601),l=o(52543),h=o(17812),v=a.forwardRef((function(e,t){var o=e.autoFocus,l=e.checked,v=e.checkedIcon,u=e.classes,x=e.className,m=e.defaultChecked,j=e.disabled,p=e.icon,g=e.id,b=e.inputProps,f=e.inputRef,Z=e.name,k=e.onBlur,C=e.onChange,O=e.onFocus,y=e.readOnly,E=e.required,z=e.tabIndex,w=e.type,I=e.value,S=(0,s.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=(0,r.Z)({controlled:l,default:Boolean(m),name:"SwitchBase",state:"checked"}),B=(0,n.Z)(N,2),F=B[0],M=B[1],R=(0,d.Z)(),L=j;R&&void 0===L&&(L=R.disabled);var P="checkbox"===w||"radio"===w;return a.createElement(h.Z,(0,i.Z)({component:"span",className:(0,c.Z)(u.root,x,F&&u.checked,L&&u.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),R&&R.onFocus&&R.onFocus(e)},onBlur:function(e){k&&k(e),R&&R.onBlur&&R.onBlur(e)},ref:t},S),a.createElement("input",(0,i.Z)({autoFocus:o,checked:l,defaultChecked:m,className:u.input,disabled:L,id:P&&g,name:Z,onChange:function(e){var t=e.target.checked;M(t),C&&C(e,t)},readOnly:y,ref:f,required:E,tabIndex:z,type:w,value:I},b)),F?v:p)}));const u=(0,l.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(v)},47298:(e,t,o)=>{var i=o(95318),n=o(20862);t.Z=void 0;var s=n(o(67294)),a=(0,i(o(2108)).default)(s.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.Z=a},59067:(e,t,o)=>{var i=o(95318),n=o(20862);t.Z=void 0;var s=n(o(67294)),a=(0,i(o(2108)).default)(s.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},78513:(e,t,o)=>{var i=o(95318),n=o(20862);t.Z=void 0;var s=n(o(67294)),a=(0,i(o(2108)).default)(s.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.Z=a},36192:(e,t,o)=>{o.d(t,{h:()=>r});var i=o(85893),n=o(52387),s=o(73637),a=o(67294);const c=({anchorEl:e,setAnchorEl:t,childen:o})=>(0,i.jsx)("div",Object.assign({onClick:o=>{t(e?null:o.currentTarget)}},{children:o}),void 0),r=({children:e,header:t})=>{const[o,r]=a.useState(null),d=Boolean(o),l=d?"transitions-popper":void 0;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(c,{setAnchorEl:r,anchorEl:o,childen:t},void 0),(0,i.jsx)(n.ZP,Object.assign({id:l,open:d,anchorEl:o,onClose:()=>{r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},{children:(0,i.jsx)(s.Z,{children:e},void 0)}),void 0)]},void 0)}},990:(e,t,o)=>{o.d(t,{M:()=>n});var i=o(67294);const n=e=>{const[t,o]=(0,i.useState)(e);return[t,e=>{o(Object.assign(Object.assign({},t),{[e.target.name]:e.target.value}))},()=>{o(e)},o]}},15635:(e,t,o)=>{o.d(t,{r:()=>s});var i=o(67294),n=o(95090);const s=e=>{const[t,o]=(0,i.useState)(!1);return(0,i.useEffect)((()=>(e===n.JD.DONE||e===n.JD.UNKNOWN||e===n.JD.ERROR?o(!1):o(!0),()=>{o(!1)})),[e]),[t]}},49521:(e,t,o)=>{o.d(t,{h:()=>z});var i=o(85893),n=o(45258),s=o(28358),a=o(41749),c=o(282),r=o(22318),d=o(43471),l=o(5977),h=o(83736),v=o(55517),u=o(18463),x=o(79912),m=o(79895),j=o(17812),p=o(16575),g=o(51972),b=o(67294),f=o(36192),Z=o(73855),k=o(45855),C=o(5563);const O=({title:e,content:t})=>(0,i.jsxs)(b.Fragment,{children:[(0,i.jsxs)(r.Z,Object.assign({variant:"subtitle1"},{children:[(0,i.jsx)(p.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,i.jsx)(r.Z,Object.assign({variant:"body1"},{children:t}),void 0),(0,i.jsx)(v.Z,{},void 0)]},void 0),y=()=>{var e,t;const o=(0,Z.T)(),n=(0,C.d)(),{notificationsHeader:s}=(0,Z.C)(k.Af);return(0,b.useEffect)((()=>{o((0,k.pK)())}),[]),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(x.Z,Object.assign({className:n.root},{children:(0,i.jsx)(r.Z,Object.assign({variant:"subtitle1"},{children:"Notificaciones"}),void 0)}),void 0),(0,i.jsx)(v.Z,{},void 0),(0,i.jsxs)(m.Z,Object.assign({elevation:3,style:{padding:"8px",overflow:"scroll"}},{children:[(!s.notificationsList||0===(null===(e=s.notificationsList)||void 0===e?void 0:e.length))&&(0,i.jsx)(r.Z,Object.assign({variant:"subtitle1"},{children:"No tiene notificaciones Nuevas"}),void 0),null===(t=s.notificationsList)||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)(O,{title:e.title,content:e.message},t)))]}),void 0)]},void 0)},E=()=>{var e;const{notificationsHeader:t}=(0,Z.C)(k.Af);return(0,i.jsx)(f.h,{children:(0,i.jsx)(y,{},void 0),header:(0,i.jsx)(j.Z,Object.assign({color:(null===(e=t.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",style:{width:"40px",height:"40px"},size:"medium"},{children:(0,i.jsx)(g.Z,{},void 0)}),void 0)},void 0)},z=({title:e})=>{const t=(0,l.k6)();return(0,i.jsx)(n.Z,Object.assign({position:"fixed",color:"secondary",elevation:0},{children:(0,i.jsxs)(s.Z,Object.assign({variant:"dense"},{children:[(0,i.jsxs)(a.Z,Object.assign({container:!0,alignItems:"center",style:{height:"70px"}},{children:[(0,i.jsx)(c.Z,{size:"small",startIcon:(0,i.jsx)(d.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{t.goBack()}},void 0),(0,i.jsx)(r.Z,Object.assign({variant:"h6"},{children:e}),void 0)," "]}),void 0),(0,i.jsxs)(a.Z,Object.assign({container:!0,justifyContent:"flex-end",alignItems:"center",spacing:5},{children:[(0,i.jsx)(a.Z,Object.assign({item:!0},{children:(0,i.jsx)(E,{},void 0)}),void 0),(0,i.jsx)(a.Z,Object.assign({item:!0},{children:(0,i.jsx)(h.u,{},void 0)}),void 0)]}),void 0)]}),void 0)}),void 0)}},83736:(e,t,o)=>{o.d(t,{f:()=>k,u:()=>O});var i=o(85893),n=o(33901),s=o(18463),a=o(79912),c=o(22318),r=o(55517),d=o(94697),l=o(51907),h=o(41749),v=o(36192),u=o(40064),x=o(50255),m=o(5833),j=o(73855),p=o(53559),g=o(5977),b=o(82067),f=o(93584),Z=o(5563);const k=({className:e})=>{const{user:{user:t}}=(0,j.C)(p.MR);return(0,i.jsx)(n.Z,Object.assign({className:e,alt:"Remy Sharp"},{children:t.firstName[0].toUpperCase()}),void 0)},C=()=>{const e=(0,Z.d)(),{user:{user:t}}=(0,j.C)(p.MR),o=(0,g.k6)();return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,Object.assign({className:e.root},{children:(0,i.jsx)(c.Z,Object.assign({variant:"subtitle1"},{children:"Cuenta"}),void 0)}),void 0),(0,i.jsx)(r.Z,{},void 0),(0,i.jsx)(d.Z,{avatar:(0,i.jsx)(k,{},void 0),title:`${t.firstName} ${t.lastName}`,subheader:t.username},void 0),(0,i.jsx)(r.Z,{},void 0),(0,i.jsx)(l.Z,Object.assign({disableSpacing:!0},{children:(0,i.jsxs)(h.Z,Object.assign({container:!0,direction:"column",alignItems:"flex-start"},{children:[(0,i.jsx)(Z.E,Object.assign({onClick:()=>{o.push("/setting/profile")},style:{width:"100%"},startIcon:(0,i.jsx)(b.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Perfil"}),void 0),(0,i.jsx)(Z.E,Object.assign({onClick:()=>{o.push("/")},style:{width:"100%"},startIcon:(0,i.jsx)(u.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Dispatch"}),void 0),(0,i.jsx)(Z.E,Object.assign({onClick:()=>{o.push("/setting")},style:{width:"100%"},startIcon:(0,i.jsx)(x.Z,{htmlColor:`${f.Jx}`},void 0)},{children:"Configuraciones"}),void 0),(0,i.jsxs)("div",Object.assign({style:{width:"100%"}},{children:[(0,i.jsx)(r.Z,{},void 0),(0,i.jsx)(Z.E,Object.assign({style:{width:"100%"},onClick:()=>{window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),o.push("/login"),location.reload()},startIcon:(0,i.jsx)(m.Z,{htmlColor:"red"},void 0)},{children:"Cerrar sesión"}),void 0)]}),void 0)]}),void 0)}),void 0)]},void 0)},O=()=>(0,i.jsx)(v.h,{children:(0,i.jsx)(C,{},void 0),header:(0,i.jsx)(k,{},void 0)},void 0)},5563:(e,t,o)=>{o.d(t,{d:()=>a,E:()=>c});var i=o(41120),n=o(282),s=o(38920);const a=(0,i.Z)({root:{textAlign:"center",padding:"5px"}}),c=(0,s.Z)((e=>({label:{display:"flex",justifyContent:"flex-start"},root:{"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none",color:"white"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf",color:"white"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})))(n.Z)},13555:(e,t,o)=>{o.r(t),o.d(t,{settingUserView:()=>r,default:()=>d});var i=o(85893),n=o(43832),s=o(67294),a=o(49226),c=o(49521);const r=()=>(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(c.h,{title:" usuarios DTS"},void 0),(0,i.jsx)(n.Z,Object.assign({style:{marginTop:"100px"},maxWidth:"xl"},{children:(0,i.jsx)(a.e,{},void 0)}),void 0)]},void 0),d=r}}]);