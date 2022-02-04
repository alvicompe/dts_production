"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[37],{71267:(e,a,o)=>{o.d(a,{Z:()=>y});var t=o(87462),r=o(45987),l=o(67294),n=(o(45697),o(86010));const i=(0,o(63786).Z)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var c=o(14670),d=o(59693),s=o(17294),p=o(93871),m=o(54720);function g(e){return"Backspace"===e.key||"Delete"===e.key}var u=l.forwardRef((function(e,a){var o=e.avatar,c=e.classes,d=e.className,u=e.clickable,y=e.color,b=void 0===y?"default":y,h=e.component,v=e.deleteIcon,f=e.disabled,C=void 0!==f&&f,k=e.icon,S=e.label,x=e.onClick,Z=e.onDelete,w=e.onKeyDown,$=e.onKeyUp,I=e.size,R=void 0===I?"medium":I,T=e.variant,L=void 0===T?"default":T,N=(0,r.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),E=l.useRef(null),F=(0,s.Z)(E,a),P=function(e){e.stopPropagation(),Z&&Z(e)},z=!(!1===u||!x)||u,q="small"===R,D=h||(z?m.Z:"div"),_=D===m.Z?{component:"div"}:{},O=null;if(Z){var K=(0,n.Z)("default"!==b&&("default"===L?c["deleteIconColor".concat((0,p.Z)(b))]:c["deleteIconOutlinedColor".concat((0,p.Z)(b))]),q&&c.deleteIconSmall);O=v&&l.isValidElement(v)?l.cloneElement(v,{className:(0,n.Z)(v.props.className,c.deleteIcon,K),onClick:P}):l.createElement(i,{className:(0,n.Z)(c.deleteIcon,K),onClick:P})}var H=null;o&&l.isValidElement(o)&&(H=l.cloneElement(o,{className:(0,n.Z)(c.avatar,o.props.className,q&&c.avatarSmall,"default"!==b&&c["avatarColor".concat((0,p.Z)(b))])}));var M=null;return k&&l.isValidElement(k)&&(M=l.cloneElement(k,{className:(0,n.Z)(c.icon,k.props.className,q&&c.iconSmall,"default"!==b&&c["iconColor".concat((0,p.Z)(b))])})),l.createElement(D,(0,t.Z)({role:z||Z?"button":void 0,className:(0,n.Z)(c.root,d,"default"!==b&&[c["color".concat((0,p.Z)(b))],z&&c["clickableColor".concat((0,p.Z)(b))],Z&&c["deletableColor".concat((0,p.Z)(b))]],"default"!==L&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[b]],C&&c.disabled,q&&c.sizeSmall,z&&c.clickable,Z&&c.deletable),"aria-disabled":!!C||void 0,tabIndex:z||Z?0:void 0,onClick:x,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(Z&&g(e)?Z(e):"Escape"===e.key&&E.current&&E.current.blur()),$&&$(e)},ref:F},_,N),H||M,l.createElement("span",{className:(0,n.Z)(c.label,q&&c.labelSmall)},S),O)}));const y=(0,c.Z)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],o=(0,d.Fq)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,d._4)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,d._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,d._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,d._4)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,d._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,d._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:o,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,d.Fq)(o,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,d.Fq)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,d.Fq)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,d.Fq)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,d.Fq)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(u)},28358:(e,a,o)=>{o.d(a,{Z:()=>s});var t=o(87462),r=o(45987),l=o(4942),n=o(67294),i=(o(45697),o(86010)),c=o(14670),d=n.forwardRef((function(e,a){var o=e.classes,l=e.className,c=e.component,d=void 0===c?"div":c,s=e.disableGutters,p=void 0!==s&&s,m=e.variant,g=void 0===m?"regular":m,u=(0,r.Z)(e,["classes","className","component","disableGutters","variant"]);return n.createElement(d,(0,t.Z)({className:(0,i.Z)(o.root,o[g],l,!p&&o.gutters),ref:a},u))}));const s=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,l.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(d)}}]);