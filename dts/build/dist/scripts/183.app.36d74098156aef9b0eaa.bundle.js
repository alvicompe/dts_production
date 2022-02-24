"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[183],{95875:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(87462),a=n(83878),o=n(59199),i=n(40181),c=n(25267),l=n(29439),s=n(45987),d=n(67294),u=(n(65122),n(45697),n(86010)),p=n(66037),f=n(79895),m=n(14670),v=n(88078),h=n(22775),b=d.forwardRef((function(e,t){var n,m=e.children,b=e.classes,g=e.className,x=e.defaultExpanded,Z=void 0!==x&&x,y=e.disabled,E=void 0!==y&&y,C=e.expanded,N=e.onChange,k=e.square,L=void 0!==k&&k,I=e.TransitionComponent,S=void 0===I?p.Z:I,R=e.TransitionProps,w=(0,s.Z)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=(0,h.Z)({controlled:C,default:Z,name:"Accordion",state:"expanded"}),z=(0,l.Z)(T,2),M=z[0],$=z[1],A=d.useCallback((function(e){$(!M),N&&N(e,!M)}),[M,N,$]),P=(n=d.Children.toArray(m),(0,a.Z)(n)||(0,o.Z)(n)||(0,i.Z)(n)||(0,c.Z)()),V=P[0],F=P.slice(1),K=d.useMemo((function(){return{expanded:M,disabled:E,toggle:A}}),[M,E,A]);return d.createElement(f.Z,(0,r.Z)({className:(0,u.Z)(b.root,g,M&&b.expanded,E&&b.disabled,!L&&b.rounded),ref:t,square:L},w),d.createElement(v.Z.Provider,{value:K},V),d.createElement(S,(0,r.Z)({in:M,timeout:"auto"},R),d.createElement("div",{"aria-labelledby":V.props.id,id:V.props["aria-controls"],role:"region"},F)))}));const g=(0,m.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(b)},88078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext({})},61201:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),c=n(14670),l=o.forwardRef((function(e,t){var n=e.classes,c=e.className,l=(0,a.Z)(e,["classes","className"]);return o.createElement("div",(0,r.Z)({className:(0,i.Z)(n.root,c),ref:t},l))}));const s=(0,c.Z)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(l)},50743:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),c=n(54720),l=n(17812),s=n(14670),d=n(88078),u=o.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,p=e.expandIcon,f=e.focusVisibleClassName,m=e.IconButtonProps,v=void 0===m?{}:m,h=e.onClick,b=(0,a.Z)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),g=o.useContext(d.Z),x=g.disabled,Z=void 0!==x&&x,y=g.expanded,E=g.toggle;return o.createElement(c.Z,(0,r.Z)({focusRipple:!1,disableRipple:!0,disabled:Z,component:"div","aria-expanded":y,className:(0,i.Z)(s.root,u,Z&&s.disabled,y&&s.expanded),focusVisibleClassName:(0,i.Z)(s.focusVisible,s.focused,f),onClick:function(e){E&&E(e),h&&h(e)},ref:t},b),o.createElement("div",{className:(0,i.Z)(s.content,y&&s.expanded)},n),p&&o.createElement(l.Z,(0,r.Z)({className:(0,i.Z)(s.expandIcon,y&&s.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},v),p))}));const p=(0,s.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},45258:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),c=n(14670),l=n(93871),s=n(79895),d=o.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,p=e.position,f=void 0===p?"fixed":p,m=(0,a.Z)(e,["classes","className","color","position"]);return o.createElement(s.Z,(0,r.Z)({square:!0,component:"header",elevation:4,className:(0,i.Z)(n.root,n["position".concat((0,l.Z)(f))],n["color".concat((0,l.Z)(u))],c,"fixed"===f&&"mui-fixed"),ref:t},m))}));const u=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},7212:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),a=n(67294),o=(n(45697),n(14670)),i=n(22318),c=a.forwardRef((function(e,t){return a.createElement(i.Z,(0,r.Z)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));const l=(0,o.Z)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},91594:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(87462),a=n(45987),o=n(67294),i=(n(65122),n(45697),n(86010)),c=n(14670),l=o.forwardRef((function(e,t){var n=e.active,c=void 0!==n&&n,l=e.alternativeLabel,s=e.children,d=e.classes,u=e.className,p=e.completed,f=void 0!==p&&p,m=e.connector,v=e.disabled,h=void 0!==v&&v,b=e.expanded,g=void 0!==b&&b,x=e.index,Z=e.last,y=e.orientation,E=(0,a.Z)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),C=m?o.cloneElement(m,{orientation:y,alternativeLabel:l,index:x,active:c,completed:f,disabled:h}):null,N=o.createElement("div",(0,r.Z)({className:(0,i.Z)(d.root,d[y],u,l&&d.alternativeLabel,f&&d.completed),ref:t},E),C&&l&&0!==x?C:null,o.Children.map(s,(function(e){return o.isValidElement(e)?o.cloneElement(e,(0,r.Z)({active:c,alternativeLabel:l,completed:f,disabled:h,expanded:g,last:Z,icon:x+1,orientation:y},e.props)):null})));return C&&!l&&0!==x?o.createElement(o.Fragment,null,C,N):N}));const s=(0,c.Z)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(l)},87257:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),c=n(14670),l=n(22318),s=n(63786);const d=(0,s.Z)(o.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),u=(0,s.Z)(o.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var p=n(62087),f=o.createElement("circle",{cx:"12",cy:"12",r:"12"}),m=o.forwardRef((function(e,t){var n=e.completed,r=void 0!==n&&n,a=e.icon,c=e.active,l=void 0!==c&&c,s=e.error,m=void 0!==s&&s,v=e.classes;if("number"==typeof a||"string"==typeof a){var h=(0,i.Z)(v.root,l&&v.active,m&&v.error,r&&v.completed);return m?o.createElement(u,{className:h,ref:t}):r?o.createElement(d,{className:h,ref:t}):o.createElement(p.Z,{className:h,ref:t},f,o.createElement("text",{className:v.text,x:"12",y:"16",textAnchor:"middle"},a))}return a}));const v=(0,c.Z)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(m);var h=o.forwardRef((function(e,t){var n=e.active,c=void 0!==n&&n,s=e.alternativeLabel,d=void 0!==s&&s,u=e.children,p=e.classes,f=e.className,m=e.completed,h=void 0!==m&&m,b=e.disabled,g=void 0!==b&&b,x=e.error,Z=void 0!==x&&x,y=(e.expanded,e.icon),E=(e.last,e.optional),C=e.orientation,N=void 0===C?"horizontal":C,k=e.StepIconComponent,L=e.StepIconProps,I=(0,a.Z)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),S=k;return y&&!S&&(S=v),o.createElement("span",(0,r.Z)({className:(0,i.Z)(p.root,p[N],f,g&&p.disabled,d&&p.alternativeLabel,Z&&p.error),ref:t},I),y||S?o.createElement("span",{className:(0,i.Z)(p.iconContainer,d&&p.alternativeLabel)},o.createElement(S,(0,r.Z)({completed:h,active:c,error:Z,icon:y},L))):null,o.createElement("span",{className:p.labelContainer},u?o.createElement(l.Z,{variant:"body2",component:"span",display:"block",className:(0,i.Z)(p.label,d&&p.alternativeLabel,h&&p.completed,c&&p.active,Z&&p.error)},u):null,E))}));h.muiName="StepLabel";const b=(0,c.Z)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(h)},67661:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),c=n(14670),l=n(79895),s=o.forwardRef((function(e,t){var n=e.active,c=e.alternativeLabel,l=void 0!==c&&c,s=e.classes,d=e.className,u=e.completed,p=e.disabled,f=(e.index,e.orientation),m=void 0===f?"horizontal":f,v=(0,a.Z)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return o.createElement("div",(0,r.Z)({className:(0,i.Z)(s.root,s[m],d,l&&s.alternativeLabel,n&&s.active,u&&s.completed,p&&s.disabled),ref:t},v),o.createElement("span",{className:(0,i.Z)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[m])}))}));const d=(0,c.Z)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(s);var u=o.createElement(d,null),p=o.forwardRef((function(e,t){var n=e.activeStep,c=void 0===n?0:n,s=e.alternativeLabel,d=void 0!==s&&s,p=e.children,f=e.classes,m=e.className,v=e.connector,h=void 0===v?u:v,b=e.nonLinear,g=void 0!==b&&b,x=e.orientation,Z=void 0===x?"horizontal":x,y=(0,a.Z)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),E=o.isValidElement(h)?o.cloneElement(h,{orientation:Z}):null,C=o.Children.toArray(p),N=C.map((function(e,t){var n={index:t,active:!1,completed:!1,disabled:!1};return c===t?n.active=!0:!g&&c>t?n.completed=!0:!g&&c<t&&(n.disabled=!0),o.cloneElement(e,(0,r.Z)({alternativeLabel:d,connector:E,last:t+1===C.length,orientation:Z},n,e.props))}));return o.createElement(l.Z,(0,r.Z)({square:!0,elevation:0,className:(0,i.Z)(f.root,f[Z],m,d&&f.alternativeLabel),ref:t},y),N)}));const f=(0,c.Z)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(p)},28358:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(45987),o=n(4942),i=n(67294),c=(n(45697),n(86010)),l=n(14670),s=i.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,f=void 0===p?"regular":p,m=(0,a.Z)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(s,(0,r.Z)({className:(0,c.Z)(n.root,n[f],o,!u&&n.gutters),ref:t},m))}));const d=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,o.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},64566:(e,t,n)=>{var r=n(95318),a=n(20862);t.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},43471:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},41396:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle")},74877:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description")},89646:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error")},64610:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder")},51972:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications")},16575:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=(0,n(63786).Z)(r.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}),"Textsms")},65207:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),a=n(45987),o=n(67294),i=n(86010),c=(n(45697),n(22318)),l=n(66037),s=n(59693),d=n(8920),u=n(14670),p=n(17294),f=n(83953),m=o.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,m=e.collapseIcon,v=e.endIcon,h=e.expandIcon,b=e.icon,g=e.label,x=e.nodeId,Z=e.onClick,y=e.onLabelClick,E=e.onIconClick,C=e.onFocus,N=e.onKeyDown,k=e.onMouseDown,L=e.TransitionComponent,I=void 0===L?l.Z:L,S=e.TransitionProps,R=(0,a.Z)(e,["children","classes","className","collapseIcon","endIcon","expandIcon","icon","label","nodeId","onClick","onLabelClick","onIconClick","onFocus","onKeyDown","onMouseDown","TransitionComponent","TransitionProps"]),w=o.useContext(f.Z),T=w.icons,z=w.focus,M=w.focusFirstNode,$=w.focusLastNode,A=w.focusNextNode,P=w.focusPreviousNode,V=w.focusByFirstCharacter,F=w.selectNode,K=w.selectRange,O=w.selectNextNode,H=w.selectPreviousNode,D=w.rangeSelectToFirst,B=w.rangeSelectToLast,q=w.selectAllNodes,W=w.expandAllSiblings,G=w.toggleExpansion,j=w.isExpanded,_=w.isFocused,U=w.isSelected,J=w.isTabbable,Q=w.multiSelect,X=w.getParent,Y=w.mapFirstChar,ee=w.addNodeToNodeMap,te=w.removeNodeFromNodeMap,ne=o.useRef(null),re=o.useRef(null),ae=(0,p.Z)(ne,t),oe=b,ie=Boolean(Array.isArray(n)?n.length:n),ce=!!j&&j(x),le=!!_&&_(x),se=!!J&&J(x),de=!!U&&U(x),ue=T||{},pe=(0,d.Z)();oe||(ie?(oe=ce?m||ue.defaultCollapseIcon:h||ue.defaultExpandIcon)||(oe=ue.defaultParentIcon):oe=v||ue.defaultEndIcon);var fe,me=function(e){return ie&&(ce?A(x):G(e)),!0},ve=function(e){if(ce)return G(e,x),!0;var t=X(x);return!!t&&(z(t),!0)};return o.useEffect((function(){if(ee){var e=[];o.Children.forEach(n,(function(t){o.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),ee(x,e)}}),[n,x,ee]),o.useEffect((function(){if(te)return function(){te(x)}}),[x,te]),o.useEffect((function(){Y&&g&&Y(x,re.current.textContent.substring(0,1).toLowerCase())}),[Y,x,g]),o.useEffect((function(){le&&ne.current.focus()}),[le]),Q?fe=de:de&&(fe=!0),o.createElement("li",(0,r.Z)({className:(0,i.Z)(s.root,u,ce&&s.expanded,de&&s.selected),role:"treeitem",onKeyDown:function(e){var t=!1,n=e.key;if(!e.altKey&&e.currentTarget===e.target){var r,a=e.ctrlKey||e.metaKey;switch(n){case" ":ne.current===e.currentTarget&&(t=Q&&e.shiftKey?K(e,{end:x}):Q?F(e,x,!0):F(e,x)),e.stopPropagation();break;case"Enter":ne.current===e.currentTarget&&ie&&(G(e),t=!0),e.stopPropagation();break;case"ArrowDown":Q&&e.shiftKey&&O(e,x),A(x),t=!0;break;case"ArrowUp":Q&&e.shiftKey&&H(e,x),P(x),t=!0;break;case"ArrowRight":t="rtl"===pe.direction?ve(e):me(e);break;case"ArrowLeft":t="rtl"===pe.direction?me(e):ve(e);break;case"Home":Q&&a&&e.shiftKey&&D(e,x),M(),t=!0;break;case"End":Q&&a&&e.shiftKey&&B(e,x),$(),t=!0;break;default:"*"===n?(W(e,x),t=!0):Q&&a&&"a"===n.toLowerCase()?t=q(e):!a&&!e.shiftKey&&(r=n)&&1===r.length&&r.match(/\S/)&&(V(x,n),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),N&&N(e)}},onFocus:function(e){le||e.currentTarget!==e.target||z(x),C&&C(e)},"aria-expanded":ie?ce:null,"aria-selected":fe,ref:ae,tabIndex:se?0:-1},R),o.createElement("div",{className:s.content,onClick:function(e){le||z(x);var t=Q&&(e.shiftKey||e.ctrlKey||e.metaKey);!ie||e.defaultPrevented||t&&j(x)||G(e,x),t?e.shiftKey?K(e,{end:x}):F(e,x,!0):F(e,x),Z&&Z(e)},onMouseDown:function(e){(e.shiftKey||e.ctrlKey||e.metaKey)&&e.preventDefault(),k&&k(e)},ref:re},o.createElement("div",{onClick:E,className:s.iconContainer},oe),o.createElement(c.Z,{onClick:y,component:"div",className:s.label},g)),n&&o.createElement(I,(0,r.Z)({unmountOnExit:!0,className:s.group,in:ce,component:"ul",role:"group"},S),n))}));const v=(0,u.Z)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent","&:focus > $content $label":{backgroundColor:e.palette.action.hover},"&$selected > $content $label":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)},"&$selected > $content $label:hover, &$selected:focus > $content $label":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},expanded:{},selected:{},group:{margin:0,padding:0,marginLeft:17},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer"},iconContainer:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},label:{width:"100%",paddingLeft:4,position:"relative","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{name:"MuiTreeItem"})(m)},95425:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),a=n(29439),o=n(45987),i=n(67294),c=n(86010),l=(n(45697),n(14670)),s=n(22775),d=n(83953),u=function(e,t,n){for(var r=t;r<e.length;r+=1)if(n===e[r])return r;return-1},p=[],f=[],m=i.forwardRef((function(e,t){var n=e.children,l=e.classes,m=e.className,v=e.defaultCollapseIcon,h=e.defaultEndIcon,b=e.defaultExpanded,g=void 0===b?p:b,x=e.defaultExpandIcon,Z=e.defaultParentIcon,y=e.defaultSelected,E=void 0===y?f:y,C=e.disableSelection,N=void 0!==C&&C,k=e.multiSelect,L=void 0!==k&&k,I=e.expanded,S=e.onNodeSelect,R=e.onNodeToggle,w=e.selected,T=(0,o.Z)(e,["children","classes","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disableSelection","multiSelect","expanded","onNodeSelect","onNodeToggle","selected"]),z=i.useState(null),M=z[0],$=z[1],A=i.useState(null),P=A[0],V=A[1],F=i.useRef({}),K=i.useRef({}),O=i.useRef([]),H=(0,s.Z)({controlled:I,default:g,name:"TreeView",state:"expanded"}),D=(0,a.Z)(H,2),B=D[0],q=D[1],W=(0,s.Z)({controlled:w,default:E,name:"TreeView",state:"selected"}),G=(0,a.Z)(W,2),j=G[0],_=G[1],U=i.useCallback((function(e){return!!Array.isArray(B)&&-1!==B.indexOf(e)}),[B]),J=i.useCallback((function(e){return Array.isArray(j)?-1!==j.indexOf(e):j===e}),[j]),Q=function(e){var t=O.current.indexOf(e);return-1!==t&&t+1<O.current.length?O.current[t+1]:null},X=function(e){var t=O.current.indexOf(e);return-1!==t&&t-1>=0?O.current[t-1]:null},Y=function(){return O.current[O.current.length-1]},ee=function(){return O.current[0]},te=function(e){e&&($(e),V(e))},ne=i.useRef(null),re=i.useRef(!1),ae=i.useRef([]),oe=function(e,t){var n=j,r=t.start,a=t.next,o=t.current;a&&o&&(-1===ae.current.indexOf(o)&&(ae.current=[]),re.current?-1!==ae.current.indexOf(a)?(n=n.filter((function(e){return e===r||e!==o})),ae.current=ae.current.filter((function(e){return e===r||e!==o}))):(n.push(a),ae.current.push(a)):(n.push(a),ae.current.push(o,a)),S&&S(e,n),_(n))},ie=function(e,t){var n=j,r=t.start,a=t.end;re.current&&(n=j.filter((function(e){return-1===ae.current.indexOf(e)})));var o=function(e,t){var n=O.current.indexOf(e),r=O.current.indexOf(t),a=Math.min(n,r),o=Math.max(n,r);return O.current.slice(a,o+1)}(r,a);ae.current=o;var i=n.concat(o);i=i.filter((function(e,t){return i.indexOf(e)===t})),S&&S(e,i),_(i)},ce=function(e,t){var n;n=-1!==j.indexOf(t)?j.filter((function(e){return e!==t})):[t].concat(j),S&&S(e,n),_(n)},le=function(e,t){var n=L?[t]:t;S&&S(e,n),_(n)},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.start,a=void 0===r?ne.current:r,o=t.end,i=t.current;return n?oe(e,{start:a,next:o,current:i}):ie(e,{start:a,end:o}),re.current=!0,!0},de=i.useCallback((function(e){var t=F.current[e],n=[];return t&&(n.push(e),t.children&&(n.concat(t.children),t.children.forEach((function(e){n.concat(de(e))})))),n}),[]),ue=i.useCallback((function(e){var t=(0,r.Z)({},K.current);e.forEach((function(e){t[e]&&delete t[e]})),K.current=t}),[]),pe=i.useCallback((function(e){var t=de(e);ue(t);var n=(0,r.Z)({},F.current);t.forEach((function(e){var t=n[e];if(t){if(t.parent){var a=n[t.parent];if(a&&a.children){var o=a.children.filter((function(t){return t!==e}));n[t.parent]=(0,r.Z)({},a,{children:o})}}delete n[e]}})),F.current=n,V((function(t){return t===e?null:t}))}),[de,ue]),fe=i.useRef([]),me=i.useState(!1),ve=me[0],he=me[1];i.useEffect((function(){var e=[];i.Children.forEach(n,(function(t){i.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),function(e,t){if(e.length!==t.length)return!0;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!0;return!1}(fe.current,e)&&(F.current[-1]={parent:null,children:e},e.forEach((function(e,t){0===t&&$(e)})),O.current=F.current[-1].children,fe.current=e,he(!0))}),[n]),i.useEffect((function(){ve&&(O.current=function e(t){for(var n=[],r=0;r<t.length;r+=1){var a=t[r];n.push(a);var o=F.current[a].children;U(a)&&o&&(n=n.concat(e(o)))}return n}(F.current[-1].children))}),[B,ve,U,n]);var be=function(){return!1};return i.createElement(d.Z.Provider,{value:{icons:{defaultCollapseIcon:v,defaultExpandIcon:x,defaultParentIcon:Z,defaultEndIcon:h},focus:te,focusFirstNode:function(){return te(ee())},focusLastNode:function(){return te(Y())},focusNextNode:function(e){return te(Q(e))},focusPreviousNode:function(e){return te(X(e))},focusByFirstCharacter:function(e,t){var n,r,a=t.toLowerCase(),o=[],i=[];Object.keys(K.current).forEach((function(e){var t=K.current[e],n=F.current[e];(!n.parent||U(n.parent))&&(o.push(e),i.push(t))})),(n=o.indexOf(e)+1)===F.current.length&&(n=0),-1===(r=u(i,n,a))&&(r=u(i,0,a)),r>-1&&te(o[r])},expandAllSiblings:function(e,t){var n,r=F.current[t],a=F.current[r.parent];n=a?a.children.filter((function(e){return!U(e)})):F.current[-1].children.filter((function(e){return!U(e)}));var o=B.concat(n);n.length>0&&(q(o),R&&R(e,o))},toggleExpansion:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;-1!==B.indexOf(n)?(t=B.filter((function(e){return e!==n})),$((function(e){var t=F.current[e];return e&&(t&&t.parent?t.parent.id:null)===n?n:e}))):t=[n].concat(B),R&&R(e,t),q(t)},isExpanded:U,isFocused:function(e){return P===e},isSelected:J,selectNode:N?be:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!t&&(n?ce(e,t):le(e,t),ne.current=t,re.current=!1,ae.current=[],!0)},selectRange:N?be:se,selectNextNode:N?be:function(e,t){return se(e,{end:Q(t),current:t},!0)},selectPreviousNode:N?be:function(e,t){return se(e,{end:X(t),current:t},!0)},rangeSelectToFirst:N?be:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return se(e,{start:n,end:ee()})},rangeSelectToLast:N?be:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return se(e,{start:n,end:Y()})},selectAllNodes:N?be:function(e){return se(e,{start:ee(),end:Y()})},isTabbable:function(e){return M===e},multiSelect:L,getParent:function(e){return F.current[e].parent},mapFirstChar:function(e,t){K.current[e]=t},addNodeToNodeMap:function(e,t){var n=F.current[e];F.current[e]=(0,r.Z)({},n,{children:t,id:e}),t.forEach((function(t){var n=F.current[t];F.current[t]=(0,r.Z)({},n,{parent:e,id:t})}))},removeNodeFromNodeMap:pe}},i.createElement("ul",(0,r.Z)({role:"tree","aria-multiselectable":L,className:(0,c.Z)(l.root,m),ref:t},T),n))}));const v=(0,l.Z)({root:{padding:0,margin:0,listStyle:"none"}},{name:"MuiTreeView"})(m)},83953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext({})}}]);