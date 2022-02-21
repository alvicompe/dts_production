"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[198],{45258:(e,t,o)=>{o.d(t,{Z:()=>p});var a=o(87462),r=o(45987),n=o(67294),c=(o(45697),o(86010)),i=o(14670),l=o(93871),s=o(79895),d=n.forwardRef((function(e,t){var o=e.classes,i=e.className,d=e.color,p=void 0===d?"primary":d,u=e.position,h=void 0===u?"fixed":u,m=(0,r.Z)(e,["classes","className","color","position"]);return n.createElement(s.Z,(0,a.Z)({square:!0,component:"header",elevation:4,className:(0,c.Z)(o.root,o["position".concat((0,l.Z)(h))],o["color".concat((0,l.Z)(p))],i,"fixed"===h&&"mui-fixed"),ref:t},m))}));const p=(0,i.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},33901:(e,t,o)=>{o.d(t,{Z:()=>d});var a=o(87462),r=o(45987),n=o(67294),c=(o(45697),o(86010)),i=o(14670);const l=(0,o(63786).Z)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=n.forwardRef((function(e,t){var o,i=e.alt,s=e.children,d=e.classes,p=e.className,u=e.component,h=void 0===u?"div":u,m=e.imgProps,v=e.sizes,f=e.src,g=e.srcSet,b=e.variant,Z=void 0===b?"circular":b,k=(0,r.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=function(e){var t=e.src,o=e.srcSet,a=n.useState(!1),r=a[0],c=a[1];return n.useEffect((function(){if(t||o){c(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=o,a.onload=function(){e&&c("loaded")},a.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,o]),r}({src:f,srcSet:g}),x=f||g,z=x&&"error"!==y;return o=z?n.createElement("img",(0,a.Z)({alt:i,src:f,srcSet:g,sizes:v,className:d.img},m)):null!=s?s:x&&i?i[0]:n.createElement(l,{className:d.fallback}),n.createElement(h,(0,a.Z)({className:(0,c.Z)(d.root,d.system,d[Z],p,!z&&d.colorDefault),ref:t},k),o)}));const d=(0,i.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},13258:(e,t,o)=>{o.d(t,{Z:()=>Z});var a=o(87462),r=o(45987),n=o(67294),c=(o(45697),o(86010)),i=o(56608),l=o(63786);const s=(0,l.Z)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,l.Z)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");var p=o(59693);const u=(0,l.Z)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var h=o(93871),m=o(14670),v=n.createElement(d,null),f=n.createElement(s,null),g=n.createElement(u,null),b=n.forwardRef((function(e,t){var o=e.checkedIcon,l=void 0===o?v:o,s=e.classes,d=e.color,p=void 0===d?"secondary":d,u=e.icon,m=void 0===u?f:u,b=e.indeterminate,Z=void 0!==b&&b,k=e.indeterminateIcon,y=void 0===k?g:k,x=e.inputProps,z=e.size,C=void 0===z?"medium":z,E=(0,r.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=Z?y:m,I=Z?y:l;return n.createElement(i.Z,(0,a.Z)({type:"checkbox",classes:{root:(0,c.Z)(s.root,s["color".concat((0,h.Z)(p))],Z&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:p,inputProps:(0,a.Z)({"data-indeterminate":Z},x),icon:n.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===C?C:S.props.fontSize}),checkedIcon:n.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===C?C:I.props.fontSize}),ref:t},E))}));const Z=(0,m.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(b)},28358:(e,t,o)=>{o.d(t,{Z:()=>d});var a=o(87462),r=o(45987),n=o(4942),c=o(67294),i=(o(45697),o(86010)),l=o(14670),s=c.forwardRef((function(e,t){var o=e.classes,n=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,p=void 0!==d&&d,u=e.variant,h=void 0===u?"regular":u,m=(0,r.Z)(e,["classes","className","component","disableGutters","variant"]);return c.createElement(s,(0,a.Z)({className:(0,i.Z)(o.root,o[h],n,!p&&o.gutters),ref:t},m))}));const d=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},56608:(e,t,o)=>{o.d(t,{Z:()=>h});var a=o(87462),r=o(29439),n=o(45987),c=o(67294),i=(o(45697),o(86010)),l=o(22775),s=o(22601),d=o(14670),p=o(17812),u=c.forwardRef((function(e,t){var o=e.autoFocus,d=e.checked,u=e.checkedIcon,h=e.classes,m=e.className,v=e.defaultChecked,f=e.disabled,g=e.icon,b=e.id,Z=e.inputProps,k=e.inputRef,y=e.name,x=e.onBlur,z=e.onChange,C=e.onFocus,E=e.readOnly,S=e.required,I=e.tabIndex,w=e.type,N=e.value,B=(0,n.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),M=(0,l.Z)({controlled:d,default:Boolean(v),name:"SwitchBase",state:"checked"}),R=(0,r.Z)(M,2),F=R[0],H=R[1],P=(0,s.Z)(),V=f;P&&void 0===V&&(V=P.disabled);var L="checkbox"===w||"radio"===w;return c.createElement(p.Z,(0,a.Z)({component:"span",className:(0,i.Z)(h.root,m,F&&h.checked,V&&h.disabled),disabled:V,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){x&&x(e),P&&P.onBlur&&P.onBlur(e)},ref:t},B),c.createElement("input",(0,a.Z)({autoFocus:o,checked:d,defaultChecked:v,className:h.input,disabled:V,id:L&&b,name:y,onChange:function(e){var t=e.target.checked;H(t),z&&z(e,t)},readOnly:E,ref:k,required:S,tabIndex:I,type:w,value:N},Z)),F?u:g)}));const h=(0,d.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},73430:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);const r=(0,o(63786).Z)(a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},43471:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);const r=(0,o(63786).Z)(a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},30387:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);const r=(0,o(63786).Z)(a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},51972:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);const r=(0,o(63786).Z)(a.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications")},16575:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);const r=(0,o(63786).Z)(a.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}),"Textsms")}}]);