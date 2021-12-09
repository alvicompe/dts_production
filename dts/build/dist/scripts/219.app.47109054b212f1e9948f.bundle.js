"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[219],{61242:(e,i,t)=>{t.d(i,{a:()=>c});var s=t(85893),n=t(52663),a=t(66083),o=t(29525),r=t(66856),l=t(282),d=t(78715);const c=({open:e,handleClose:i,handleConfirm:t,title:c,message:v})=>(0,s.jsxs)(n.Z,Object.assign({open:e,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},{children:[(0,s.jsx)(a.Z,{children:c},void 0),(0,s.jsx)(o.Z,{children:(0,s.jsx)(d.Z,Object.assign({severity:"warning"},{children:v}),void 0)},void 0),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(l.Z,Object.assign({color:"primary",onClick:i},{children:"Cancelar"}),void 0),(0,s.jsx)(l.Z,Object.assign({color:"secondary",onClick:t,autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)]}),void 0)},34250:(e,i,t)=>{t.d(i,{Z:()=>v});var s=t(85893),n=t(67294),a=t(41120),o=t(87623),r=t(8920),l=t(76211),d=t(33758);const c=(0,a.Z)((e=>(0,o.Z)({fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}})));function v({actionClick:e,Icon:i,visible:t,disabled:a,right:o,color:v,keyAction:g}){const h=c(),j=(0,r.Z)();(0,n.useEffect)((()=>{const i=i=>{console.log(i.key),i.key!==(null==g?void 0:g.toUpperCase())&&i.key!==(null==g?void 0:g.toLocaleLowerCase())&&i.key!==g||e()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}}),[]);const u={enter:j.transitions.duration.enteringScreen,exit:j.transitions.duration.leavingScreen};return(0,s.jsx)(l.Z,Object.assign({in:t,timeout:u,unmountOnExit:!0},{children:(0,s.jsx)(d.Z,Object.assign({disabled:a,onClick:e,className:h.fab,style:{right:o},size:"small",color:v||"primary"},{children:(0,s.jsx)(i,{},void 0)}),void 0)}),void 0)}},33570:(e,i,t)=>{t.d(i,{v:()=>d});var s=t(85893),n=t(17812),a=t(96837),o=t(59544),r=t(17215);const l=(0,t(73914).Z)((()=>({subHeader:{lineHeight:0,background:"#fff",paddingLeft:0,display:"flex",marginTop:8,borderRadius:4,borderBottomStyle:"groove"}}))),d=({useOpen:e,title:i})=>{const t=l(),[d,c]=e,v=(0,s.jsx)(n.Z,Object.assign({size:"small"},{children:d?(0,s.jsx)(o.Z,{fontSize:"small"},void 0):(0,s.jsx)(r.Z,{fontSize:"small"},void 0)}),void 0);return(0,s.jsx)(a.Z,Object.assign({disableGutters:!0,onClick:()=>{c((e=>!e))},component:"span",className:t.subHeader},{children:(0,s.jsxs)("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[(0,s.jsx)("span",Object.assign({style:{marginLeft:4}},{children:i}),void 0),(0,s.jsx)("div",Object.assign({style:{marginLeft:8}},{children:v}),void 0)]}),void 0)}),void 0)}},65738:(e,i,t)=>{t.d(i,{E:()=>Z,m:()=>L});var s=t(85893),n=t(67294),a=t(41120),o=t(79895),r=t(41749),l=t(41423),d=t(22318),c=t(62822),v=t(50998),g=t(95757),h=t(55517),j=t(33570),u=t(14096),p=t(78479),x=t(95090),b=t(10465),m=t(73855),f=t(18973),y=t(66217),O=t(39299);const Z="80vh",k=(0,a.Z)((e=>({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{marginLeft:e.spacing(1),marginBottom:0},root_unload:{display:"flex"},tabs:{borderRight:`1px solid ${e.palette.divider}`},tab:{minWidth:10,padding:1,paddingTop:8,paddingBottom:8},buttonTab:{writingMode:"vertical-rl"}})));function C(e){const{children:i,value:t,index:n}=e,a=function(e,i){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)i.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(t[s[n]]=e[s[n]])}return t}(e,["children","value","index"]);return(0,s.jsx)("div",Object.assign({role:"tabpanel",hidden:t!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,style:{flex:1,height:"auto",boxShadow:"inset 0px -2px 10px 0px rgb(17 16 10 / 56%)",margin:8,borderRadius:4}},a,{children:t===n&&i}),void 0)}function S(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const L=()=>{const{selectedUploadList:e}=(0,m.C)(f.nx),{polygonList:i,stockCellList:t,state:a}=(0,m.C)(f.WD),L=(0,m.T)(),w=k(),[E,N]=(0,n.useState)([]),[T,$]=(0,n.useState)([]),[A,I]=(0,p._)("index_tab_load_operation",0),z=(0,n.useState)(!1);(0,n.useEffect)((()=>{a===O.jR.DONE&&(N(i.filter((e=>e.state!==x.p$.FINISHED))),$(t.filter((e=>e.state!==x.p$.FINISHED))))}),[a]);const R=(0,n.useCallback)((e=>{if(e){const{value:t}=e.target,s=t?t.toUpperCase():"";N(i.filter((e=>{const i=e.material?e.material.type:"";return e.name.toUpperCase().includes(s)||e.nameProject.toUpperCase().includes(s)||i.includes(s)})))}}),[i]),W=(0,n.useCallback)((e=>{if(e){const{value:i}=e.target,s=i?i.toUpperCase():"";$(t.filter((e=>e.name.toUpperCase().includes(s))))}}),[t]),D=(0,n.useCallback)((()=>{N(i)}),[i]),M=(0,n.useCallback)((()=>{$(t)}),[t]),P=(0,n.useCallback)((i=>!!e.find((e=>e.id===i.id))),[e]);return(0,s.jsx)(o.Z,Object.assign({elevation:4,style:{flex:1}},{children:(0,s.jsxs)(r.Z,Object.assign({container:!0},{children:[(0,s.jsxs)(u.Z,Object.assign({orientation:"vertical",variant:"scrollable",value:A,indicatorColor:"primary",textColor:"primary",onChange:(e,i)=>{I(i)},"aria-label":"Vertical tabs",className:w.tabs},{children:[(0,s.jsx)(l.Z,Object.assign({className:w.tab,label:(0,s.jsx)(d.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"TAJO"}),void 0)},S(0)),void 0),(0,s.jsx)(l.Z,Object.assign({className:w.tab,label:(0,s.jsx)(d.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"STOCKs"}),void 0)},S(1)),void 0)]}),void 0),(0,s.jsx)(C,Object.assign({value:A,index:0},{children:(0,s.jsxs)(c.Z,Object.assign({dense:!0,disablePadding:!0,style:{width:"100%",paddingLeft:4,overflowY:"scroll",paddingBottom:32,height:Z},subheader:(0,s.jsx)(j.v,{title:"Carguío",useOpen:z},void 0)},{children:[z[0]&&(0,s.jsx)(b.V,{functionFilter:R,functionCancel:D,placeholder:"Buscar por polígono"},void 0),E.map((e=>(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(v.Z,Object.assign({selected:P(e),button:!0,dense:!0,onClick:()=>{return i=e,void L((0,y.qn)(Object.assign(Object.assign({},i),{type:x.NZ.PIT})));var i}},{children:(0,s.jsx)(g.Z,{primary:`${e.nameProject} - ${e.name} `,secondary:e.material?`Material ${e.material.type}`:"Material not found"},void 0)}),void 0),(0,s.jsx)(h.Z,{},void 0)]},e.id)))]}),void 0)}),void 0),(0,s.jsx)(C,Object.assign({value:A,index:1},{children:(0,s.jsxs)(c.Z,Object.assign({dense:!0,style:{width:"100%",paddingLeft:4,overflowY:"scroll"},subheader:(0,s.jsx)(j.v,{title:"Carguío",useOpen:z},void 0)},{children:[z[0]&&(0,s.jsx)(b.V,{functionFilter:W,functionCancel:M},void 0),T.map((e=>(0,s.jsx)(v.Z,Object.assign({selected:P(e),button:!0,dense:!0,onClick:()=>{return i=e,void L((0,y.qn)(Object.assign(Object.assign({},i),{type:x.NZ.STOCK})));var i}},{children:(0,s.jsx)(g.Z,{primary:e.name},void 0)}),e.id)))]}),void 0)}),void 0)]}),void 0)}),void 0)}},70461:(e,i,t)=>{t.d(i,{K:()=>f});var s=t(85893),n=t(55517),a=t(62822),o=t(67294),r=t(73855),l=t(8693),d=t(10465),c=t(33570),v=t(41120),g=t(50998),h=t(30553),j=t(13258),u=t(95757),p=t(95090);const x=(0,v.Z)((e=>({disabledSpacing:{margin:0,padding:0,width:"100%"},checkbox:{"& .MuiCheckbox-root":{margin:0,padding:0,paddingLeft:8}}}))),b=o.memo((({truck:e,checked:i,trucksSelect:t,setTrucksSelect:n,disableWithOperation:a,handleonchangeTruck:o})=>{const r=x(),l=e.state>=0?p.SS[e.state]:"Sin conex...",d=e.operationList&&e.operationList.length>0?e.operationList[0].excavator.deviceAlias:"";return(0,s.jsx)(g.Z,Object.assign({button:!0,dense:!0,className:r.disabledSpacing,disabled:!!a&&!!d},{children:(0,s.jsx)(h.Z,{className:r.checkbox,onChange:()=>{const i=t.findIndex((i=>e.deviceId===i.deviceId));-1===i?t.push(e):t.splice(i,1),n(JSON.parse(JSON.stringify(t)))},control:(0,s.jsx)(j.Z,{onClick:()=>o(e),size:"small",checked:i,inputProps:{style:{padding:0}}},void 0),label:(0,s.jsx)(u.Z,{primary:`${e.deviceAlias} ${d?` ➜ ${d}`:""} (${l})`},void 0)},void 0)}),void 0)}));var m=t(65738);const f=o.memo((({trucksSelect:e,setTrucksSelect:i,handleonchangeTruck:t,disableWithOperation:v})=>{const g=(0,o.useState)(),{truckInfoList:h}=(0,r.C)(l.ej),[j,u]=(0,o.useState)([]),[p,x]=(0,o.useState)("");(0,o.useEffect)((()=>{u(h.filter((e=>e.deviceAlias.toLowerCase().includes(p.toLowerCase()))))}),[h]);const f=(0,o.useCallback)((e=>{if(e){const i=e.target?e.target.value.toUpperCase():"";u(h.filter((e=>e.deviceAlias.toUpperCase().includes(i)))),x(i)}}),[h]),y=(0,o.useCallback)((()=>{u(h),x("")}),[h]);return(0,s.jsxs)(a.Z,Object.assign({dense:!0,subheader:(0,s.jsx)(c.v,{title:"Trucks",useOpen:g},void 0),style:{width:"100%",paddingLeft:4,height:m.E,overflowY:"scroll",boxShadow:"inset 0px -2px 10px 0px rgb(17 16 10 / 56%)",margin:8,borderRadius:4}},{children:[g[0]&&(0,s.jsx)(d.V,{functionFilter:f,functionCancel:y},void 0),j.map((a=>{return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(b,{handleonchangeTruck:t,disableWithOperation:v,checked:(r=a,!!e.find((e=>r.deviceId===e.deviceId))),trucksSelect:e,setTrucksSelect:i,truck:a},void 0),(0,s.jsx)(n.Z,{},void 0)]},a.deviceId);var r}))]}),void 0)}))},2780:(e,i,t)=>{t.d(i,{We:()=>a,Uk:()=>o,wg:()=>r});var s=t(55501),n=function(e,i,t,s){return new(t||(t=Promise))((function(n,a){function o(e){try{l(s.next(e))}catch(e){a(e)}}function r(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,r)}l((s=s.apply(e,i||[])).next())}))};const a=(e,i)=>n(void 0,void 0,void 0,(function*(){return yield(0,s.g$)(i,e)})),o=(e,i,t,a,o)=>n(void 0,void 0,void 0,(function*(){t(!0);const n=yield(0,s.e1)(e,i);console.log("responseAssigment",n),t(!1),a((e=>!e)),o(void 0);let r="";n.truckErrorList.length>0&&n.truckErrorList.forEach((e=>{const i=1===e.state?"CARGANDO":"A DESCARGA";r+=` ${e.truckError.deviceAlias}=> ${i},`})),""!==r&&alert(`Las siguientes unidades no han podido ser reasignadas: ${r}`)})),r=e=>n(void 0,void 0,void 0,(function*(){const i=yield(0,s.zY)(e);console.log("finalizeOperationEvent",i);let t="";return i.truckErrorList.length>0&&i.truckErrorList.forEach((e=>{const i=1===e.state?"CARGANDO":"A DESCARGA";t+=` ${e.truckError.deviceAlias} => ${i},`})),t}))},8850:(e,i,t)=>{t.d(i,{h:()=>c});var s=t(85893),n=t(45258),a=t(28358),o=t(282),r=t(22318),l=t(43471),d=t(5977);const c=({title:e,positionContainer:i})=>{const t=i||"sticky",c=(0,d.k6)();return(0,s.jsx)(n.Z,Object.assign({position:t,color:"secondary"},{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(o.Z,{size:"small",startIcon:(0,s.jsx)(l.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{c.goBack()}},void 0),(0,s.jsx)(r.Z,Object.assign({variant:"h6"},{children:e}),void 0)]},void 0)}),void 0)}},22983:(e,i,t)=>{t.r(i),t.d(i,{default:()=>se});var s=t(85893),n=t(10046),a=t(41749),o=t(79895),r=t(282),l=t(92284),d=t(25263),c=t(82200),v=t(90179),g=t(67294),h=t(868),j=t(17812),u=t(86072),p=t(61920),x=t(73727);const b=({history:e,setReassignSelect:i})=>[{field:"startTime",headerName:"Inicio",type:"date",minWidth:170},{field:"excavator",headerName:"Palas",minWidth:110},{field:"trunks",headerName:"Trucks",flex:1},{field:"cycles",headerName:"Ciclos",minWidth:50},{field:"labelUpload",headerName:"Carga",minWidth:200},{field:"labelDownload",headerName:"Descarga",minWidth:160},{field:"labelstate",headerName:"Estado",minWidth:130},{field:"Opciones",headerName:"Opc",minWidth:110,renderCell:({row:e})=>{const[t,n]=(0,g.useState)(!0);return(0,s.jsxs)(s.Fragment,{children:[e.state!==p.J8.Finalizado&&(0,s.jsx)(h.ZP,Object.assign({title:"Reasignar"},{children:(0,s.jsx)(j.Z,Object.assign({size:"small",onClick:()=>{i(e)}},{children:(0,s.jsx)(c.Z,{fontSize:"small"},void 0)}),void 0)}),void 0),(0,s.jsx)(h.ZP,Object.assign({title:"Detalle"},{children:(0,s.jsx)(x.rU,Object.assign({to:`operation/detail/${e.id}`},{children:(0,s.jsx)(j.Z,Object.assign({size:"small"},{children:(0,s.jsx)(u.Z,{fontSize:"small"},void 0)}),void 0)}),void 0)}),void 0)]},void 0)}}];var m=t(22318),f=t(96837),y=t(6562),O=t(30553),Z=t(13258),k=t(64436),C=t(52541),S=t(40074),L=t(62822),w=t(50998),E=t(95757),N=t(95477),T=t(52663),$=t(66856),A=t(29525);function I({open:e,setOpen:i,handleClickConfirm:t,children:n,loading:a,handleClose:o}){return(0,s.jsxs)(T.Z,Object.assign({fullWidth:!0,maxWidth:"lg",open:e,onClose:o||(()=>{i(!1)}),"aria-labelledby":"max-width-dialog-title"},{children:[(0,s.jsx)(A.Z,{children:n},void 0),(0,s.jsx)($.Z,{children:a?(0,s.jsx)(N.Z,{},void 0):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,Object.assign({onClick:o,color:"secondary"},{children:"Cancelar"}),void 0),(0,s.jsx)(r.Z,Object.assign({onClick:t,color:"primary"},{children:"Confirmar"}),void 0)]},void 0)},void 0)]}),void 0)}var z=t(61242),R=t(2780),W=t(73855),D=t(52672);const M=({operation:e,operations:i,setOperation:t,setRefresh:n})=>{if(!e)return(0,s.jsx)(s.Fragment,{},void 0);const[r,l]=(0,g.useState)([]),[d]=(0,g.useState)(e),[c,v]=g.useState(!1),h=(0,W.T)(),[j,u]=g.useState(!1),[p,x]=(0,g.useState)(),b=()=>{t(void 0)},N=e=>{x(e.target.value)},T=d.excavatorList&&d.excavatorList.length>0?d.excavatorList[0]:{};return(0,s.jsxs)(I,Object.assign({},{loading:j},{open:!!e,setOpen:()=>t(void 0),handleClickConfirm:()=>{r.length>0&&p&&e.id?v(!0):h((0,D.L8)({open:!0,severity:"warning",msg:"Es necesario seleccionar algún camión y una excavadora"}))},handleClose:b},{children:[(0,s.jsx)(a.Z,Object.assign({container:!0},{children:(0,s.jsx)(a.Z,Object.assign({item:!0,xs:12},{children:(0,s.jsx)(m.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Reassigment Trucks"}),void 0)}),void 0)}),void 0),(0,s.jsxs)(a.Z,Object.assign({container:!0,style:{paddingLeft:4}},{children:[(0,s.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,s.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,s.jsx)(L.Z,Object.assign({subheader:(0,s.jsxs)(f.Z,Object.assign({component:"div",id:"nested-list-subheader"},{children:["Trucks in ",T.deviceAlias]}),void 0)},{children:(0,s.jsx)(w.Z,{children:(0,s.jsx)(E.Z,{children:(0,s.jsx)(y.Z,{children:d.truckList.map((e=>{return(0,s.jsx)(O.Z,{checked:(i=e,!!r.find((e=>i.id===e.id))),value:e.id,control:(0,s.jsx)(Z.Z,{onClick:()=>(e=>{const i=r.findIndex((i=>i.deviceId===e.deviceId));-1===i?r.push(e):r.splice(i,1),l(JSON.parse(JSON.stringify(r)))})(e)},void 0),label:`${e.deviceAlias}`},e.id);var i}))},void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0),(0,s.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,s.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,s.jsx)(L.Z,Object.assign({subheader:(0,s.jsx)(f.Z,Object.assign({component:"div"},{children:"Excavator destination"}),void 0)},{children:(0,s.jsx)(w.Z,{children:(0,s.jsx)(E.Z,{children:(0,s.jsx)(k.Z,Object.assign({component:"fieldset"},{children:(0,s.jsx)(C.Z,Object.assign({"aria-label":"gender",name:"radio-buttons-group"},{children:i.map((e=>3!==e.state&&(0,s.jsx)(O.Z,{value:e.id,disabled:d.id===e.id,control:(0,s.jsx)(S.Z,{},void 0),onChange:N,label:`${e.excavatorList[0].deviceAlias}`},e.id)))}),void 0)}),void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0),(0,s.jsx)(z.a,{open:c,handleClose:b,handleConfirm:()=>{(0,R.Uk)(p,r,u,n,t),v(!1)},title:"¿Esta seguro?",message:"Intentaremos mover estos camiones, si ocurre algun error se le informará"},void 0)]}),void 0)]}),void 0)};var P=t(55501),U=t(10465),F=t(8693),H=t(72198),V=t(70461);const G=({open:e,setOpen:i,setRefresh:t,operations:n})=>{const r=(0,W.T)(),[l,d]=(0,g.useState)([]),[c,v]=(0,g.useState)(""),[h,j]=(0,g.useState)([]),[u,p]=(0,g.useState)(!1),[x,b]=g.useState(!1);(0,g.useEffect)((()=>{r(F.RK),r(H.CE)}),[]);const y=e=>{v(e.target.value)};return(0,s.jsxs)(I,Object.assign({},{loading:x},{open:e,handleClickConfirm:()=>{h.length<=0||c.length<=0?r((0,D.L8)({open:!0,msg:"Debe seleccionar almenos una excabadora y un camión",severity:"warning"})):p(!0)},handleClose:()=>{i(!1),j([]),v("")}},{children:[(0,s.jsx)(a.Z,Object.assign({container:!0},{children:(0,s.jsx)(a.Z,Object.assign({item:!0,xs:12},{children:(0,s.jsx)(m.Z,Object.assign({variant:"button",style:{paddingLeft:8,paddingTop:16}},{children:"Reasignación de camiones"}),void 0)}),void 0)}),void 0),(0,s.jsxs)(a.Z,Object.assign({container:!0,style:{paddingLeft:4}},{children:[(0,s.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,s.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,Object.assign({style:{position:"sticky",zIndex:1,top:0,background:"#f6f6f6",padding:2}},{children:(0,s.jsx)(U.V,{functionFilter:e=>l.filter((i=>i.deviceAlias.includes(e))),functionCancel:()=>{},placeholder:"Trucks"},void 0)}),void 0),(0,s.jsx)(V.K,{handleonchangeTruck:()=>{},setTrucksSelect:j,trucksSelect:h},void 0)]},void 0)}),void 0)}),void 0),(0,s.jsx)(a.Z,Object.assign({item:!0,xs:6},{children:(0,s.jsx)(o.Z,Object.assign({style:{margin:10}},{children:(0,s.jsx)(L.Z,Object.assign({subheader:(0,s.jsx)(f.Z,Object.assign({component:"div"},{children:"Excavadora destino"}),void 0)},{children:(0,s.jsx)(w.Z,{children:(0,s.jsx)(E.Z,{children:(0,s.jsx)(k.Z,Object.assign({component:"fieldset"},{children:(0,s.jsx)(C.Z,Object.assign({"aria-label":"gender",name:"radio-buttons-group"},{children:n.filter((e=>2===e.state)).map((e=>{var i;return(0,s.jsx)(O.Z,{value:e.id,control:(0,s.jsx)(S.Z,{},void 0),onChange:y,label:`  ${null===(i=e.excavatorList[0])||void 0===i?void 0:i.deviceAlias}`},e.id)}))}),void 0)}),void 0)},void 0)},void 0)}),void 0)}),void 0)}),void 0)]}),void 0),(0,s.jsx)(z.a,{open:u,handleClose:()=>{p(!1)},handleConfirm:()=>{p(!1),i(!1),j([]),v(""),((e,i,t,s)=>{var n,a,o,r;n=void 0,a=void 0,r=function*(){t(!0);const n=yield(0,P.e1)(e,i);console.log("responseAssigment",n),t(!1),s((e=>!e));let a="";n.truckErrorList.length>0&&n.truckErrorList.forEach((e=>{const i=1===e.state?"CARGANDO":"A DESCARGA";a+=` ${e.truckError.deviceAlias}=> ${i},`})),""!==a&&alert(`Las siguientes unidades no han podido ser reasignadas: ${a}`)},new((o=void 0)||(o=Promise))((function(e,i){function t(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(i){var n;i.done?e(i.value):(n=i.value,n instanceof o?n:new o((function(e){e(n)}))).then(t,s)}l((r=r.apply(n,a||[])).next())}))})(c,h,b,t)},title:"¿Esta seguro?",message:"Intentaremos mover estos camiones, si ocurre algun error se le informará"},void 0)]}),void 0)};var _=t(34250),B=t(73914);const J=(0,t(57850).Z)(),Y=(0,B.Z)((e=>({root:{flexDirection:"column","& .ant-empty-img-1":{fill:"light"===e.palette.type?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===e.palette.type?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===e.palette.type?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===e.palette.type?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===e.palette.type?"0.8":"0.08",fill:"light"===e.palette.type?"#f5f5f5":"#fff"}},label:{marginTop:e.spacing(1)}})),{defaultTheme:J});function K(){const e=Y();return(0,s.jsxs)(l.nik,Object.assign({className:e.root},{children:[(0,s.jsx)("svg",Object.assign({width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false"},{children:(0,s.jsxs)("g",Object.assign({fill:"none",fillRule:"evenodd"},{children:[(0,s.jsxs)("g",Object.assign({transform:"translate(24 31.67)"},{children:[(0,s.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},void 0),(0,s.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"},void 0),(0,s.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"},void 0),(0,s.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"},void 0)]}),void 0),(0,s.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"},void 0),(0,s.jsxs)("g",Object.assign({className:"ant-empty-img-4",transform:"translate(149.65 15.383)"},{children:[(0,s.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},void 0),(0,s.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},void 0)]}),void 0)]}),void 0)}),void 0),(0,s.jsx)("div",Object.assign({className:e.label},{children:"Sin datos"}),void 0)]}),void 0)}var q=t(73250);const Q=e=>{if(!e)return"";const i=p.PW[e.type];switch(e.type){case 1:return e.pit&&e.pit.projectList&&e.pit.projectList.length>0&&e.pit.projectList[0].polygonList&&e.pit.projectList[0].polygonList.length>0?`${e.pit.projectList[0].name} - ${e.pit.projectList[0].polygonList[0].name}`:"";case 3:return e[i]&&e[i].cellList&&e[i].cellList.length>0?e[i].cellList[0].name:"";default:return""}},X=e=>{if(!e&&1!==e.type)return"";const i=p.PW[e.type];return console.log("labelDownload",e,i),`${"dme"===i?"Desm.":"stock"===i?"STK":"Mine."} ${e[i]&&e[i].cellList&&e[i].cellList.length>0?e[i].cellList[0].name:""}`};var ee=t(5977);const ie=()=>{const e=(0,ee.k6)(),{operationList:i,status:t}=(0,W.C)(q.YL),h=(0,W.T)(),{rowsData:j}=(()=>{const{operationList:e,status:i}=(0,W.C)(q.YL),[t,s]=(0,g.useState)([]);return(0,g.useEffect)((()=>{s("done"===i?e.map((e=>Object.assign(Object.assign({},e),{startTime:new Date(1e3*e.startTime.seconds),trunks:e.truckList.map((e=>e.deviceAlias)),excavator:e.excavatorList.map((e=>e.deviceAlias)),typeUpload:p.WW[e.upload.type],labelUpload:`${p.WW[e.upload.type]} ${Q(e.upload)}`,labelDownload:`${X(e.download)}`,typeDownload:p.WW[e.download.type],labelstate:p.J8[e.state],cycles:e.cycleList.length}))):[])}),[e]),{rowsData:t}})(),{sortModel:u,handleModelGrid:x}=(()=>{const[e,i]=(0,g.useState)([{field:"startTime",sort:"desc"}]);return{sortModel:e,handleModelGrid:t=>{0!=t.length?t[0].field!=e[0].field||t[0].sort!=e[0].sort?i(t):console.log("else"):"desc"==e[0].sort?i([Object.assign(Object.assign({},e[0]),{sort:"asc"})]):i([Object.assign(Object.assign({},e[0]),{sort:"desc"})])}}})(),[m,f]=(0,g.useState)([]),[y,O]=(0,g.useState)(!1),[Z,k]=(0,g.useState)(!0),[C,S]=(0,g.useState)(),[L,w]=(0,g.useState)(),[E,N]=(0,g.useState)(!1);(0,g.useEffect)((()=>{h((0,q.hS)())}),[]),(0,g.useEffect)((()=>{h((0,q.hS)())}),[y]),(0,g.useEffect)((()=>{"done"===t?(f([...i]),k(!1)):(f([]),k(!0))}),[t]),(0,g.useEffect)((()=>{const e=setInterval((()=>{T()}),3e5);return()=>{clearInterval(e)}}),[]),(0,g.useEffect)((()=>{if(C){const e=m.findIndex((e=>C.id===e.id));S(m[e])}}),[m]);const T=()=>{O((e=>!e))};return(0,s.jsx)(n.Z,Object.assign({m:2},{children:(0,s.jsxs)(a.Z,Object.assign({style:{height:C?"100%":"90vh",overflowY:"scroll",display:"flex",flexDirection:"column"}},{children:[(0,s.jsx)(o.Z,Object.assign({elevation:2,style:{height:"100%",margin:4}},{children:(0,s.jsx)(n.Z,Object.assign({p:.5,style:{height:"100%"}},{children:(0,s.jsxs)(a.Z,Object.assign({container:!0,direction:"column",style:{height:"100%"}},{children:[(0,s.jsxs)(a.Z,Object.assign({item:!0},{children:[(0,s.jsxs)("div",Object.assign({style:{display:C||L?"none":"block"}},{children:[(0,s.jsx)(r.Z,Object.assign({onClick:()=>{e.push("/operation/create")},color:"primary",variant:"contained",size:"small",startIcon:(0,s.jsx)(d.Z,{fontSize:"small"},void 0)},{children:"Nueva"}),void 0),(0,s.jsx)(r.Z,Object.assign({onClick:()=>{N(!0)},style:{marginLeft:8},color:"secondary",variant:"outlined",size:"small",startIcon:(0,s.jsx)(c.Z,{fontSize:"small"},void 0)},{children:"Reasignacion"}),void 0)]}),void 0),(0,s.jsx)(_.Z,{visible:!Z,actionClick:T,Icon:v.Z,disabled:Z,color:"secondary",right:C?56:8,keyAction:"R"},void 0)]}),void 0),(0,s.jsx)(a.Z,Object.assign({item:!0,style:{display:C?"none":"flex",flex:1}},{children:(0,s.jsx)(l._$r,{rows:j,columns:b({history:e,setReassignSelect:w}),components:{NoRowsOverlay:K},loading:Z,density:"compact",sortModel:u,onSortModelChange:e=>x(e)},void 0)}),void 0)]}),void 0)}),void 0)}),void 0),(0,s.jsx)(G,{open:E,setOpen:N,setRefresh:O,operations:m},void 0),(0,s.jsx)(M,Object.assign({operations:m,operation:L,setOperation:w},{setRefresh:O}),void 0)]}),void 0)}),void 0)};var te=t(8850);function se(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(te.h,{title:"Operations"},void 0),(0,s.jsx)(ie,{},void 0)]},void 0)}}}]);