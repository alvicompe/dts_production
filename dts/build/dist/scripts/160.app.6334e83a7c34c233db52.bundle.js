(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[160],{45258:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(22122),i=a(81253),o=a(67294),s=a(86010),n=a(52543),c=a(93871),l=a(79895),d=o.forwardRef((function(e,t){var a=e.classes,n=e.className,d=e.color,p=void 0===d?"primary":d,u=e.position,m=void 0===u?"fixed":u,g=(0,i.Z)(e,["classes","className","color","position"]);return o.createElement(l.Z,(0,r.Z)({square:!0,component:"header",elevation:4,className:(0,s.Z)(a.root,a["position".concat((0,c.Z)(m))],a["color".concat((0,c.Z)(p))],n,"fixed"===m&&"mui-fixed"),ref:t},g))}));const p=(0,n.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},33901:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(22122),i=a(81253),o=a(67294),s=a(86010),n=a(52543);const c=(0,a(63786).Z)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=o.forwardRef((function(e,t){var a,n=e.alt,l=e.children,d=e.classes,p=e.className,u=e.component,m=void 0===u?"div":u,g=e.imgProps,f=e.sizes,h=e.src,v=e.srcSet,b=e.variant,x=void 0===b?"circular":b,Z=(0,i.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),k=function(e){var t=e.src,a=e.srcSet,r=o.useState(!1),i=r[0],s=r[1];return o.useEffect((function(){if(t||a){s(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,a]),i}({src:h,srcSet:v}),y=h||v,S=y&&"error"!==k;return a=S?o.createElement("img",(0,r.Z)({alt:n,src:h,srcSet:v,sizes:f,className:d.img},g)):null!=l?l:y&&n?n[0]:o.createElement(c,{className:d.fallback}),o.createElement(m,(0,r.Z)({className:(0,s.Z)(d.root,d.system,d[x],p,!S&&d.colorDefault),ref:t},Z),a)}));const d=(0,n.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(l)},51907:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(22122),i=a(81253),o=a(67294),s=a(86010),n=a(52543),c=o.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,c=e.classes,l=e.className,d=(0,i.Z)(e,["disableSpacing","classes","className"]);return o.createElement("div",(0,r.Z)({className:(0,s.Z)(c.root,l,!n&&c.spacing),ref:t},d))}));const l=(0,n.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)},43832:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(22122),i=a(81253),o=a(96156),s=a(67294),n=a(86010),c=a(52543),l=a(93871),d=s.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,d=void 0===c?"div":c,p=e.disableGutters,u=void 0!==p&&p,m=e.fixed,g=void 0!==m&&m,f=e.maxWidth,h=void 0===f?"lg":f,v=(0,i.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(d,(0,r.Z)({className:(0,n.Z)(a.root,o,g&&a.fixed,u&&a.disableGutters,!1!==h&&a["maxWidth".concat((0,l.Z)(String(h)))]),ref:t},v))}));const p=(0,c.Z)((function(e){return{root:(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:r}),t}),{}),maxWidthXs:(0,o.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,o.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,o.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,o.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,o.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},28358:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(22122),i=a(81253),o=a(96156),s=a(67294),n=a(86010),c=a(52543),l=s.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,l=void 0===c?"div":c,d=e.disableGutters,p=void 0!==d&&d,u=e.variant,m=void 0===u?"regular":u,g=(0,i.Z)(e,["classes","className","component","disableGutters","variant"]);return s.createElement(l,(0,r.Z)({className:(0,n.Z)(a.root,a[m],o,!p&&a.gutters),ref:t},g))}));const d=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,o.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},82067:(e,t,a)=>{"use strict";var r=a(95318),i=a(20862);t.Z=void 0;var o=i(a(67294)),s=(0,r(a(2108)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.Z=s},43471:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(67294);const i=(0,a(63786).Z)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},51972:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(67294);const i=(0,a(63786).Z)(r.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications")},16575:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(67294);const i=(0,a(63786).Z)(r.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}),"Textsms")}}]);