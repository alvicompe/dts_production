"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[219],{33758:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(45987),s=i(87462),a=i(67294),o=(i(45697),i(86010)),r=i(14670),d=i(54720),l=i(93871),c=a.forwardRef((function(e,t){var i=e.children,r=e.classes,c=e.className,h=e.color,v=void 0===h?"default":h,u=e.component,g=void 0===u?"button":u,p=e.disabled,m=void 0!==p&&p,b=e.disableFocusRipple,x=void 0!==b&&b,j=e.focusVisibleClassName,f=e.size,y=void 0===f?"large":f,Z=e.variant,O=void 0===Z?"circular":Z,C=(0,n.Z)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return a.createElement(d.Z,(0,s.Z)({className:(0,o.Z)(r.root,c,"large"!==y&&r["size".concat((0,l.Z)(y))],m&&r.disabled,"extended"===O&&r.extended,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[v]),component:g,disabled:m,focusRipple:!x,focusVisibleClassName:(0,o.Z)(r.focusVisible,j),ref:t},C),a.createElement("span",{className:r.label},i))}));const h=(0,r.Z)((function(e){return{root:(0,s.Z)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(c)},96837:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(87462),s=i(45987),a=i(67294),o=(i(45697),i(86010)),r=i(14670),d=i(93871),l=a.forwardRef((function(e,t){var i=e.classes,r=e.className,l=e.color,c=void 0===l?"default":l,h=e.component,v=void 0===h?"li":h,u=e.disableGutters,g=void 0!==u&&u,p=e.disableSticky,m=void 0!==p&&p,b=e.inset,x=void 0!==b&&b,j=(0,s.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return a.createElement(v,(0,n.Z)({className:(0,o.Z)(i.root,r,"default"!==c&&i["color".concat((0,d.Z)(c))],x&&i.inset,!m&&i.sticky,!g&&i.gutters),ref:t},j))}));const c=(0,r.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},76211:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(87462),s=i(29439),a=i(45987),o=i(67294),r=(i(45697),i(12666)),d=i(43366),l=i(8920),c=i(5653),h=i(17294),v={entering:{transform:"none"},entered:{transform:"none"}},u={enter:d.x9.enteringScreen,exit:d.x9.leavingScreen};const g=o.forwardRef((function(e,t){var i=e.children,d=e.disableStrictModeCompat,g=void 0!==d&&d,p=e.in,m=e.onEnter,b=e.onEntered,x=e.onEntering,j=e.onExit,f=e.onExited,y=e.onExiting,Z=e.style,O=e.timeout,C=void 0===O?u:O,k=e.TransitionComponent,S=void 0===k?r.ZP:k,w=(0,a.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),L=(0,l.Z)(),E=L.unstable_strictMode&&!g,N=o.useRef(null),z=(0,h.Z)(i.ref,t),T=(0,h.Z)(E?N:void 0,z),R=function(e){return function(t,i){if(e){var n=E?[N.current,t]:[t,i],a=(0,s.Z)(n,2),o=a[0],r=a[1];void 0===r?e(o):e(o,r)}}},$=R(x),A=R((function(e,t){(0,c.n)(e);var i=(0,c.C)({style:Z,timeout:C},{mode:"enter"});e.style.webkitTransition=L.transitions.create("transform",i),e.style.transition=L.transitions.create("transform",i),m&&m(e,t)})),I=R(b),M=R(y),W=R((function(e){var t=(0,c.C)({style:Z,timeout:C},{mode:"exit"});e.style.webkitTransition=L.transitions.create("transform",t),e.style.transition=L.transitions.create("transform",t),j&&j(e)})),D=R(f);return o.createElement(S,(0,n.Z)({appear:!0,in:p,nodeRef:E?N:void 0,onEnter:A,onEntered:I,onEntering:$,onExit:W,onExited:D,onExiting:M,timeout:C},w),(function(e,t){return o.cloneElement(i,(0,n.Z)({style:(0,n.Z)({transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden"},v[e],Z,i.props.style),ref:T},t))}))}))},90179:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(67294);const s=(0,i(63786).Z)(n.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshOutlined")},61242:(e,t,i)=>{i.d(t,{a:()=>l});var n=i(85893),s=i(52663),a=i(66083),o=i(29525),r=i(66856),d=i(282);const l=({open:e,handleClose:t,handleConfirm:i,title:l,children:c,disabled:h=!1})=>(0,n.jsxs)(s.Z,Object.assign({open:e,onClose:t,maxWidth:"lg"},{children:[(0,n.jsx)(a.Z,{children:l},void 0),(0,n.jsx)(o.Z,{children:c},void 0),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,Object.assign({color:"primary",onClick:t},{children:"Cancelar"}),void 0),i&&(0,n.jsx)(d.Z,Object.assign({disabled:h,color:"secondary",onClick:i,autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)]}),void 0)},34250:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(85893),s=i(67294),a=i(41120),o=i(87623),r=i(8920),d=i(76211),l=i(33758);const c=(0,a.Z)((e=>(0,o.Z)({fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}})));function h({actionClick:e,Icon:t,visible:i,disabled:a,right:o,color:h,keyAction:v}){const u=c(),g=(0,r.Z)();(0,s.useEffect)((()=>{const t=t=>{console.log(t.key),t.key!==(null==v?void 0:v.toUpperCase())&&t.key!==(null==v?void 0:v.toLocaleLowerCase())&&t.key!==v||e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[]);const p={enter:g.transitions.duration.enteringScreen,exit:g.transitions.duration.leavingScreen};return(0,n.jsx)(d.Z,Object.assign({in:i,timeout:p,unmountOnExit:!0},{children:(0,n.jsx)(l.Z,Object.assign({disabled:a,onClick:e,className:u.fab,style:{right:o},size:"small",color:h||"primary"},{children:(0,n.jsx)(t,{},void 0)}),void 0)}),void 0)}},696:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(85893),s=i(92284),a=i(73914);const o=(0,i(57850).Z)(),r=(0,a.Z)((e=>({root:{flexDirection:"column","& .ant-empty-img-1":{fill:"light"===e.palette.type?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===e.palette.type?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===e.palette.type?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===e.palette.type?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===e.palette.type?"0.8":"0.08",fill:"light"===e.palette.type?"#f5f5f5":"#fff"}},label:{marginTop:e.spacing(1)}})),{defaultTheme:o});function d(){const e=r();return(0,n.jsxs)(s.nik,Object.assign({className:e.root},{children:[(0,n.jsx)("svg",Object.assign({width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false"},{children:(0,n.jsxs)("g",Object.assign({fill:"none",fillRule:"evenodd"},{children:[(0,n.jsxs)("g",Object.assign({transform:"translate(24 31.67)"},{children:[(0,n.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},void 0),(0,n.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"},void 0),(0,n.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"},void 0),(0,n.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"},void 0)]}),void 0),(0,n.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"},void 0),(0,n.jsxs)("g",Object.assign({className:"ant-empty-img-4",transform:"translate(149.65 15.383)"},{children:[(0,n.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},void 0),(0,n.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},void 0)]}),void 0)]}),void 0)}),void 0),(0,n.jsx)("div",Object.assign({className:e.label},{children:"Sin datos"}),void 0)]}),void 0)}},33570:(e,t,i)=>{i.d(t,{v:()=>l});var n=i(85893),s=i(17812),a=i(96837),o=i(59544),r=i(17215);const d=(0,i(73914).Z)((()=>({subHeader:{lineHeight:0,background:"#fff",paddingLeft:0,display:"flex",marginTop:8,borderRadius:4,borderBottomStyle:"groove"}}))),l=({useOpen:e,title:t})=>{const i=d(),[l,c]=e,h=(0,n.jsx)(s.Z,Object.assign({size:"small"},{children:l?(0,n.jsx)(o.Z,{fontSize:"small"},void 0):(0,n.jsx)(r.Z,{fontSize:"small"},void 0)}),void 0);return(0,n.jsx)(a.Z,Object.assign({disableGutters:!0,onClick:()=>{c((e=>!e))},component:"span",className:i.subHeader},{children:(0,n.jsxs)("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[(0,n.jsx)("span",Object.assign({style:{marginLeft:4}},{children:t}),void 0),(0,n.jsx)("div",Object.assign({style:{marginLeft:8}},{children:h}),void 0)]}),void 0)}),void 0)}},65738:(e,t,i)=>{i.d(t,{E:()=>O,m:()=>w});var n=i(85893),s=i(67294),a=i(41120),o=i(79895),r=i(41749),d=i(41423),l=i(22318),c=i(62822),h=i(50998),v=i(95757),u=i(55517),g=i(33570),p=i(14096),m=i(78479),b=i(95090),x=i(10465),j=i(73855),f=i(18973),y=i(66217),Z=i(39299);const O="80vh",C=(0,a.Z)((e=>({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{marginLeft:e.spacing(1),marginBottom:0},root_unload:{display:"flex"},tabs:{borderRight:`1px solid ${e.palette.divider}`},tab:{minWidth:10,padding:1,paddingTop:8,paddingBottom:8},buttonTab:{writingMode:"vertical-rl"}})));function k(e){const{children:t,value:i,index:s}=e,a=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]])}return i}(e,["children","value","index"]);return(0,n.jsx)("div",Object.assign({role:"tabpanel",hidden:i!==s,id:`vertical-tabpanel-${s}`,"aria-labelledby":`vertical-tab-${s}`,style:{flex:1,height:"auto",boxShadow:"inset 0px -2px 10px 0px rgb(17 16 10 / 56%)",margin:8,borderRadius:4}},a,{children:i===s&&t}),void 0)}function S(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const w=()=>{const{selectedUploadList:e}=(0,j.C)(f.nx),{polygonList:t,stockCellList:i,state:a}=(0,j.C)(f.WD),w=(0,j.T)(),L=C(),[E,N]=(0,s.useState)([]),[z,T]=(0,s.useState)([]),[R,$]=(0,m._)("index_tab_load_operation",0),A=(0,s.useState)(!1);(0,s.useEffect)((()=>{a===Z.jR.DONE&&(N(t.filter((e=>e.state!==b.p$.FINISHED))),T(i.filter((e=>e.state!==b.p$.FINISHED))))}),[a]);const I=(0,s.useCallback)((e=>{if(e){const{value:i}=e.target,n=i?i.toUpperCase():"";N(t.filter((e=>{const t=e.material?e.material.type:"";return e.name.toUpperCase().includes(n)||e.nameProject.toUpperCase().includes(n)||t.includes(n)})))}}),[t]),M=(0,s.useCallback)((e=>{if(e){const{value:t}=e.target,n=t?t.toUpperCase():"";T(i.filter((e=>e.name.toUpperCase().includes(n))))}}),[i]),W=(0,s.useCallback)((()=>{N(t)}),[t]),D=(0,s.useCallback)((()=>{T(i)}),[i]),V=(0,s.useCallback)((t=>!!e.find((e=>e.id===t.id))),[e]);return(0,n.jsx)(o.Z,Object.assign({elevation:4,style:{flex:1}},{children:(0,n.jsxs)(r.Z,Object.assign({container:!0},{children:[(0,n.jsxs)(p.Z,Object.assign({orientation:"vertical",variant:"scrollable",value:R,indicatorColor:"primary",textColor:"primary",onChange:(e,t)=>{$(t)},"aria-label":"Vertical tabs",className:L.tabs},{children:[(0,n.jsx)(d.Z,Object.assign({className:L.tab,label:(0,n.jsx)(l.Z,Object.assign({variant:"caption",className:L.buttonTab},{children:"TAJO"}),void 0)},S(0)),void 0),(0,n.jsx)(d.Z,Object.assign({className:L.tab,label:(0,n.jsx)(l.Z,Object.assign({variant:"caption",className:L.buttonTab},{children:"STOCKs"}),void 0)},S(1)),void 0)]}),void 0),(0,n.jsx)(k,Object.assign({value:R,index:0},{children:(0,n.jsxs)(c.Z,Object.assign({dense:!0,disablePadding:!0,style:{width:"100%",paddingLeft:4,overflowY:"scroll",paddingBottom:32,height:O},subheader:(0,n.jsx)(g.v,{title:"Carguío",useOpen:A},void 0)},{children:[A[0]&&(0,n.jsx)(x.V,{functionFilter:I,functionCancel:W,placeholder:"Buscar por polígono"},void 0),E.map((e=>(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(h.Z,Object.assign({selected:V(e),button:!0,dense:!0,onClick:()=>{return t=e,void w((0,y.qn)(Object.assign(Object.assign({},t),{type:b.NZ.PIT})));var t}},{children:(0,n.jsx)(v.Z,{primary:`${e.nameProject} - ${e.name} `,secondary:e.material?`Material ${e.material.type}`:"Material not found"},void 0)}),void 0),(0,n.jsx)(u.Z,{},void 0)]},e.id)))]}),void 0)}),void 0),(0,n.jsx)(k,Object.assign({value:R,index:1},{children:(0,n.jsxs)(c.Z,Object.assign({dense:!0,style:{width:"100%",paddingLeft:4,overflowY:"scroll"},subheader:(0,n.jsx)(g.v,{title:"Carguío",useOpen:A},void 0)},{children:[A[0]&&(0,n.jsx)(x.V,{functionFilter:M,functionCancel:D},void 0),z.map((e=>(0,n.jsx)(h.Z,Object.assign({selected:V(e),button:!0,dense:!0,onClick:()=>{return t=e,void w((0,y.qn)(Object.assign(Object.assign({},t),{type:b.NZ.STOCK})));var t}},{children:(0,n.jsx)(v.Z,{primary:e.name},void 0)}),e.id)))]}),void 0)}),void 0)]}),void 0)}),void 0)}},70461:(e,t,i)=>{i.d(t,{K:()=>f});var n=i(85893),s=i(55517),a=i(62822),o=i(67294),r=i(73855),d=i(8693),l=i(10465),c=i(33570),h=i(41120),v=i(50998),u=i(30553),g=i(13258),p=i(95757),m=i(95090);const b=(0,h.Z)((e=>({disabledSpacing:{margin:0,padding:0,width:"100%"},checkbox:{"& .MuiCheckbox-root":{margin:0,padding:0,paddingLeft:8}}}))),x=o.memo((({truck:e,checked:t,trucksSelect:i,setTrucksSelect:s,disableWithOperation:a,handleonchangeTruck:o})=>{const r=b(),d=e.state>=0?m.SS[e.state]:"Sin conex...",l=e.operationList&&e.operationList.length>0?e.operationList[0].excavator.deviceAlias:"";return(0,n.jsx)(v.Z,Object.assign({button:!0,dense:!0,className:r.disabledSpacing,disabled:!!a&&!!l},{children:(0,n.jsx)(u.Z,{className:r.checkbox,onChange:()=>{const t=i.findIndex((t=>e.deviceId===t.deviceId));-1===t?i.push(e):i.splice(t,1),s(JSON.parse(JSON.stringify(i)))},control:(0,n.jsx)(g.Z,{onClick:()=>o(e),size:"small",checked:t,inputProps:{style:{padding:0}}},void 0),label:(0,n.jsx)(p.Z,{primary:`${e.deviceAlias} ${l?` ➜ ${l}`:""} (${d})`},void 0)},void 0)}),void 0)}));var j=i(65738);const f=o.memo((({trucksSelect:e,setTrucksSelect:t,handleonchangeTruck:i,disableWithOperation:h})=>{const v=(0,o.useState)(),{truckInfoList:u}=(0,r.C)(d.ej),[g,p]=(0,o.useState)([]),[m,b]=(0,o.useState)("");(0,o.useEffect)((()=>{p(u.filter((e=>e.deviceAlias.toLowerCase().includes(m.toLowerCase()))))}),[u]);const f=(0,o.useCallback)((e=>{if(e){const t=e.target?e.target.value.toUpperCase():"";p(u.filter((e=>e.deviceAlias.toUpperCase().includes(t)))),b(t)}}),[u]),y=(0,o.useCallback)((()=>{p(u),b("")}),[u]);return(0,n.jsxs)(a.Z,Object.assign({dense:!0,subheader:(0,n.jsx)(c.v,{title:"Trucks",useOpen:v},void 0),style:{width:"100%",paddingLeft:4,height:j.E,overflowY:"scroll",boxShadow:"inset 0px -2px 10px 0px rgb(17 16 10 / 56%)",margin:8,borderRadius:4}},{children:[v[0]&&(0,n.jsx)(l.V,{functionFilter:f,functionCancel:y},void 0),g.map((a=>{return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(x,{handleonchangeTruck:i,disableWithOperation:h,checked:(r=a,!!e.find((e=>r.deviceId===e.deviceId))),trucksSelect:e,setTrucksSelect:t,truck:a},void 0),(0,n.jsx)(s.Z,{},void 0)]},a.deviceId);var r}))]}),void 0)}))},2780:(e,t,i)=>{i.d(t,{We:()=>a,Uk:()=>o,wg:()=>r});var n=i(55501),s=function(e,t,i,n){return new(i||(i=Promise))((function(s,a){function o(e){try{d(n.next(e))}catch(e){a(e)}}function r(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}d((n=n.apply(e,t||[])).next())}))};const a=(e,t)=>s(void 0,void 0,void 0,(function*(){return yield(0,n.g$)(t,e)})),o=(e,t,i,a,o)=>s(void 0,void 0,void 0,(function*(){i(!0);const s=yield(0,n.e1)(e,t);console.log("responseAssigment",s),i(!1),a((e=>!e)),o(void 0);let r="";s.truckErrorList.length>0&&s.truckErrorList.forEach((e=>{const t=1===e.state?"CARGANDO":"A DESCARGA";r+=` ${e.truckError.deviceAlias}=> ${t},`})),""!==r&&alert(`Las siguientes unidades no han podido ser reasignadas: ${r}`)})),r=e=>s(void 0,void 0,void 0,(function*(){const t=yield(0,n.zY)(e);console.log("finalizeOperationEvent",t);let i="";return t.truckErrorList.length>0&&t.truckErrorList.forEach((e=>{const t=1===e.state?"CARGANDO":"A DESCARGA";i+=` ${e.truckError.deviceAlias} => ${t},`})),i}))},8850:(e,t,i)=>{i.d(t,{h:()=>c});var n=i(85893),s=i(45258),a=i(28358),o=i(282),r=i(22318),d=i(43471),l=i(5977);const c=({title:e,positionContainer:t})=>{const i=t||"sticky",c=(0,l.k6)();return(0,n.jsx)(s.Z,Object.assign({position:i,color:"secondary"},{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(o.Z,{size:"small",startIcon:(0,n.jsx)(d.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{c.goBack()}},void 0),(0,n.jsx)(r.Z,Object.assign({variant:"h6"},{children:e}),void 0)]},void 0)}),void 0)}},32689:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ie});var n=i(85893),s=i(10046),a=i(41749),o=i(79895),r=i(282),d=i(92284),l=i(67294),c=i(63786);const h=(0,c.Z)(l.createElement("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutlineRounded"),v=(0,c.Z)(l.createElement("path",{d:"M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"}),"DeviceHub");var u=i(90179),g=i(868),p=i(17812);const m=(0,c.Z)(l.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");var b=i(61920),x=i(73727);const j=({history:e,setReassignSelect:t})=>[{field:"startTime",headerName:"Inicio",type:"date",minWidth:170},{field:"excavator",headerName:"Palas",minWidth:110},{field:"trunks",headerName:"Trucks",flex:1},{field:"cycles",headerName:"Ciclos",minWidth:50},{field:"labelUpload",headerName:"Carga",minWidth:200},{field:"labelDownload",headerName:"Descarga",minWidth:160},{field:"labelstate",headerName:"Estado",minWidth:130},{field:"Opciones",headerName:"Opc",minWidth:110,renderCell:({row:e})=>{const[i,s]=(0,l.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[e.state!==b.J8.Finalizado&&(0,n.jsx)(g.ZP,Object.assign({title:"Reasignar"},{children:(0,n.jsx)(p.Z,Object.assign({size:"small",onClick:()=>{t(e)}},{children:(0,n.jsx)(v,{fontSize:"small"},void 0)}),void 0)}),void 0),(0,n.jsx)(g.ZP,Object.assign({title:"Detalle"},{children:(0,n.jsx)(x.rU,Object.assign({to:`operation/detail/${e.id}`},{children:(0,n.jsx)(p.Z,Object.assign({size:"small"},{children:(0,n.jsx)(m,{fontSize:"small"},void 0)}),void 0)}),void 0)}),void 0)]},void 0)}}];var f=i(22318),y=i(96837),Z=i(6562),O=i(30553),C=i(13258),k=i(64436),S=i(52541),w=i(40074),L=i(62822),E=i(50998),N=i(95757),z=i(95477),T=i(52663),R=i(66856),$=i(29525);function A({open:e,setOpen:t,handleClickConfirm:i,children:s,loading:a,handleClose:o}){return(0,n.jsxs)(T.Z,Object.assign({fullWidth:!0,maxWidth:"lg",open:e,onClose:o||(()=>{t(!1)}),"aria-labelledby":"max-width-dialog-title"},{children:[(0,n.jsx)($.Z,{children:s},void 0),(0,n.jsx)(R.Z,{children:a?(0,n.jsx)(z.Z,{},void 0):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,Object.assign({onClick:o,color:"secondary"},{children:"Cancelar"}),void 0),(0,n.jsx)(r.Z,Object.assign({onClick:i,color:"primary"},{children:"Confirmar"}),void 0)]},void 0)},void 0)]}),void 0)}var I=i(61242),M=i(2780),W=i(73855),D=i(52672),V=i(78715);const F=({operation:e,operations:t,setOperation:i,setRefresh:s})=>{if(!e)return(0,n.jsx)(n.Fragment,{},void 0);const[r,d]=(0,l.useState)([]),[c]=(0,l.useState)(e),[h,v]=l.useState(!1),u=(0,W.T)(),[g,p]=l.useState(!1),[m,b]=(0,l.useState)(),x=()=>{i(void 0)},j=e=>{b(e.target.value)},z=c.excavatorList&&c.excavatorList.length>0?c.excavatorList[0]:{};return(0,n.jsxs)(A,Object.assign({},{loading:g},{open:!!e,setOpen:()=>i(void 0),handleClickConfirm:()=>{r.length>0&&m&&e.id?v(!0):u((0,D.L8)({open:!0,severity:"warning",msg:"Es necesario seleccionar algún camión y una excavadora"}))},handleClose:x},{children:[(0,n.jsx)(a.Z,Object.assign({container:!0},{children:(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12},{children:(0,n.jsx)(f.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Reassigment Trucks"}),void 0)}),void 0)}),void 0),(0,n.jsxs)(a.Z,Object.assign({container:!0,style:{paddingLeft:4}},{children:[(0,n.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,n.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,n.jsx)(L.Z,Object.assign({subheader:(0,n.jsxs)(y.Z,Object.assign({component:"div",id:"nested-list-subheader"},{children:["Trucks in ",z.deviceAlias]}),void 0)},{children:(0,n.jsx)(E.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsx)(Z.Z,{children:c.truckList.map((e=>{return(0,n.jsx)(O.Z,{checked:(t=e,!!r.find((e=>t.id===e.id))),value:e.id,control:(0,n.jsx)(C.Z,{onClick:()=>(e=>{const t=r.findIndex((t=>t.deviceId===e.deviceId));-1===t?r.push(e):r.splice(t,1),d(JSON.parse(JSON.stringify(r)))})(e)},void 0),label:`${e.deviceAlias}`},e.id);var t}))},void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,n.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,n.jsx)(L.Z,Object.assign({subheader:(0,n.jsx)(y.Z,Object.assign({component:"div"},{children:"Excavator destination"}),void 0)},{children:(0,n.jsx)(E.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsx)(k.Z,Object.assign({component:"fieldset"},{children:(0,n.jsx)(S.Z,Object.assign({"aria-label":"gender",name:"radio-buttons-group"},{children:t.map((e=>3!==e.state&&(0,n.jsx)(O.Z,{value:e.id,disabled:c.id===e.id,control:(0,n.jsx)(w.Z,{},void 0),onChange:j,label:`${e.excavatorList[0].deviceAlias}`},e.id)))}),void 0)}),void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0),(0,n.jsx)(I.a,Object.assign({open:h,handleClose:x,handleConfirm:()=>{(0,M.Uk)(m,r,p,s,i),v(!1)},title:"¿Esta seguro?"},{children:(0,n.jsx)(V.Z,Object.assign({severity:"warning"},{children:"Intentaremos mover estos camiones, si ocurre algun error se le informará"}),void 0)}),void 0)]}),void 0)]}),void 0)};var H=i(55501),P=i(10465),U=i(8693),G=i(72198),B=i(70461);const _=({open:e,setOpen:t,setRefresh:i,operations:s})=>{const r=(0,W.T)(),[d,c]=(0,l.useState)([]),[h,v]=(0,l.useState)(""),[u,g]=(0,l.useState)([]),[p,m]=(0,l.useState)(!1),[b,x]=l.useState(!1);(0,l.useEffect)((()=>{r(U.RK),r(G.CE)}),[]);const j=e=>{v(e.target.value)};return(0,n.jsxs)(A,Object.assign({},{loading:b},{open:e,handleClickConfirm:()=>{u.length<=0||h.length<=0?r((0,D.L8)({open:!0,msg:"Debe seleccionar almenos una excabadora y un camión",severity:"warning"})):m(!0)},handleClose:()=>{t(!1),g([]),v("")}},{children:[(0,n.jsx)(a.Z,Object.assign({container:!0},{children:(0,n.jsx)(a.Z,Object.assign({item:!0,xs:12},{children:(0,n.jsx)(f.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Reasignación de camiones"}),void 0)}),void 0)}),void 0),(0,n.jsxs)(a.Z,Object.assign({container:!0,style:{paddingLeft:4}},{children:[(0,n.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,n.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,Object.assign({style:{position:"sticky",zIndex:1,top:0,background:"#f6f6f6",padding:2}},{children:(0,n.jsx)(P.V,{functionFilter:e=>d.filter((t=>t.deviceAlias.includes(e))),functionCancel:()=>{},placeholder:"Trucks"},void 0)}),void 0),(0,n.jsx)(B.K,{handleonchangeTruck:()=>{},setTrucksSelect:g,trucksSelect:u},void 0)]},void 0)}),void 0)}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,n.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,n.jsx)(L.Z,Object.assign({subheader:(0,n.jsx)(y.Z,Object.assign({component:"div"},{children:"Excavadora destino"}),void 0)},{children:(0,n.jsx)(E.Z,{children:(0,n.jsx)(N.Z,{children:(0,n.jsx)(k.Z,Object.assign({component:"fieldset"},{children:(0,n.jsx)(S.Z,Object.assign({"aria-label":"gender",name:"radio-buttons-group"},{children:s.filter((e=>2===e.state)).map((e=>{var t;return(0,n.jsx)(O.Z,{value:e.id,control:(0,n.jsx)(w.Z,{},void 0),onChange:j,label:`  ${null===(t=e.excavatorList[0])||void 0===t?void 0:t.deviceAlias}`},e.id)}))}),void 0)}),void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0)]}),void 0),(0,n.jsx)(I.a,Object.assign({open:p,handleClose:()=>{m(!1)},handleConfirm:()=>{m(!1),t(!1),g([]),v(""),((e,t,i,n)=>{var s,a,o,r;s=void 0,a=void 0,r=function*(){i(!0);const s=yield(0,H.e1)(e,t);console.log("responseAssigment",s),i(!1),n((e=>!e));let a="";s.truckErrorList.length>0&&s.truckErrorList.forEach((e=>{const t=1===e.state?"CARGANDO":"A DESCARGA";a+=` ${e.truckError.deviceAlias}=> ${t},`})),""!==a&&alert(`Las siguientes unidades no han podido ser reasignadas: ${a}`)},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{d(r.next(e))}catch(e){t(e)}}function n(e){try{d(r.throw(e))}catch(e){t(e)}}function d(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(i,n)}d((r=r.apply(s,a||[])).next())}))})(h,u,x,i)},title:"¿Esta seguro?"},{children:(0,n.jsx)(V.Z,Object.assign({severity:"warning"},{children:"Intentaremos mover estos camiones, si ocurre algun error se le informará"}),void 0)}),void 0)]}),void 0)};var J=i(34250),Y=i(696),K=i(73250);const q=e=>{if(!e)return"";const t=b.PW[e.type];switch(e.type){case 1:return e.pit&&e.pit.projectList&&e.pit.projectList.length>0&&e.pit.projectList[0].polygonList&&e.pit.projectList[0].polygonList.length>0?`${e.pit.projectList[0].name} - ${e.pit.projectList[0].polygonList[0].name}`:"";case 3:return e[t]&&e[t].cellList&&e[t].cellList.length>0?e[t].cellList[0].name:"";default:return""}},Q=e=>{if(!e&&1!==e.type)return"";const t=b.PW[e.type];return console.log("labelDownload",e,t),`${"dme"===t?"Desm.":"stock"===t?"STK":"Mine."} ${e[t]&&e[t].cellList&&e[t].cellList.length>0?e[t].cellList[0].name:""}`};var X=i(5977);const ee=()=>{const e=(0,X.k6)(),{operationList:t,status:i}=(0,W.C)(K.YL),c=(0,W.T)(),{rowsData:g}=(()=>{const{operationList:e,status:t}=(0,W.C)(K.YL),[i,n]=(0,l.useState)([]);return(0,l.useEffect)((()=>{n("done"===t?e.map((e=>Object.assign(Object.assign({},e),{startTime:new Date(1e3*e.startTime.seconds),trunks:e.truckList.map((e=>e.deviceAlias)),excavator:e.excavatorList.map((e=>e.deviceAlias)),typeUpload:b.WW[e.upload.type],labelUpload:`${b.WW[e.upload.type]} ${q(e.upload)}`,labelDownload:`${Q(e.download)}`,typeDownload:b.WW[e.download.type],labelstate:b.J8[e.state],cycles:e.cycleList.length}))):[])}),[e]),{rowsData:i}})(),{sortModel:p,handleModelGrid:m}=(e=>{const[t,i]=(0,l.useState)([{field:"startTime",sort:"desc"}]);return{sortModel:t,handleModelGrid:e=>{0!=e.length?e[0].field!=t[0].field||e[0].sort!=t[0].sort?i(e):console.log("else"):"desc"==t[0].sort?i([Object.assign(Object.assign({},t[0]),{sort:"asc"})]):i([Object.assign(Object.assign({},t[0]),{sort:"desc"})])}}})(),[x,f]=(0,l.useState)([]),[y,Z]=(0,l.useState)(!1),[O,C]=(0,l.useState)(!0),[k,S]=(0,l.useState)(),[w,L]=(0,l.useState)(),[E,N]=(0,l.useState)(!1);(0,l.useEffect)((()=>{c((0,K.hS)())}),[]),(0,l.useEffect)((()=>{c((0,K.hS)())}),[y]),(0,l.useEffect)((()=>{"done"===i?(f([...t]),C(!1)):(f([]),C(!0))}),[i]),(0,l.useEffect)((()=>{const e=setInterval((()=>{z()}),3e5);return()=>{clearInterval(e)}}),[]),(0,l.useEffect)((()=>{if(k){const e=x.findIndex((e=>k.id===e.id));S(x[e])}}),[x]);const z=()=>{Z((e=>!e))};return(0,n.jsx)(s.Z,Object.assign({m:2},{children:(0,n.jsxs)(a.Z,Object.assign({style:{height:k?"100%":"90vh",overflowY:"scroll",display:"flex",flexDirection:"column"}},{children:[(0,n.jsx)(o.Z,Object.assign({elevation:2,style:{height:"100%",margin:4}},{children:(0,n.jsx)(s.Z,Object.assign({p:.5,style:{height:"100%"}},{children:(0,n.jsxs)(a.Z,Object.assign({container:!0,direction:"column",style:{height:"100%"}},{children:[(0,n.jsxs)(a.Z,Object.assign({item:!0},{children:[(0,n.jsxs)("div",Object.assign({style:{display:k||w?"none":"block"}},{children:[(0,n.jsx)(r.Z,Object.assign({onClick:()=>{e.push("/operation/create")},color:"primary",variant:"contained",size:"small",startIcon:(0,n.jsx)(h,{fontSize:"small"},void 0)},{children:"Nueva"}),void 0),(0,n.jsx)(r.Z,Object.assign({onClick:()=>{N(!0)},style:{marginLeft:8},color:"secondary",variant:"outlined",size:"small",startIcon:(0,n.jsx)(v,{fontSize:"small"},void 0)},{children:"Reasignacion"}),void 0)]}),void 0),(0,n.jsx)(J.Z,{visible:!O,actionClick:z,Icon:u.Z,disabled:O,color:"secondary",right:k?56:8,keyAction:"R"},void 0)]}),void 0),(0,n.jsx)(a.Z,Object.assign({item:!0,style:{display:k?"none":"flex",flex:1}},{children:(0,n.jsx)(d._$r,{rows:g,columns:j({history:e,setReassignSelect:L}),components:{NoRowsOverlay:Y.Z},loading:O,density:"compact",sortModel:p,onSortModelChange:e=>m(e)},void 0)}),void 0)]}),void 0)}),void 0)}),void 0),(0,n.jsx)(_,{open:E,setOpen:N,setRefresh:Z,operations:x},void 0),(0,n.jsx)(F,Object.assign({operations:x,operation:w,setOperation:L},{setRefresh:Z}),void 0)]}),void 0)}),void 0)};var te=i(8850);function ie(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(te.h,{title:"Operations"},void 0),(0,n.jsx)(ee,{},void 0)]},void 0)}}}]);