"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[662],{2834:(e,s,t)=>{t.d(s,{d:()=>a});var r=t(85893),i=t(282),n=t(95477);const a=e=>{var{loading:s,text:t}=e,a=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["loading","text"]);return(0,r.jsx)(i.Z,Object.assign({},a,{disabled:s},{children:s?(0,r.jsx)(n.Z,{style:{width:"20px",height:"20px"}}):t}))}},31366:(e,s,t)=>{t.d(s,{Z:()=>m});var r=t(85893),i=t(67294),n=t(41120),a=t(35117),l=t(85639),o=t(64436),c=t(26209);const d=(0,n.Z)((e=>(0,a.Z)({formControl:{margin:e.spacing(1),minWidth:"100%"},selectEmpty:{marginTop:e.spacing(2)}})));function m(e){var{placeholder:s,iteams:t,selectValue:n,value:a}=e,m=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["placeholder","iteams","selectValue","value"]);const u=d(),[j,h]=i.useState("");return(0,i.useEffect)((()=>{h(a||"")}),[a]),(0,i.useEffect)((()=>{n(j)}),[j]),(0,r.jsx)(o.Z,Object.assign({className:u.formControl},{children:(0,r.jsxs)(c.Z,Object.assign({},m,{value:j,onChange:e=>{h(e.target.value)},displayEmpty:!0,className:u.selectEmpty,inputProps:{"aria-label":`${s}`}},{children:[(0,r.jsx)(l.Z,Object.assign({value:"",disabled:!0},{children:s})),null==t?void 0:t.map((e=>(0,r.jsx)(l.Z,Object.assign({value:null==e?void 0:e.value},{children:null==e?void 0:e.tittle}),e.value)))]}))}))}},9662:(e,s,t)=>{t.d(s,{e:()=>ne});var r=t(85893),i=t(41749),n=t(60395),a=t(67294),l=t(73855),o=t(65529),c=t(30115),d=t(57850),m=t(59693),u=t(93584);function j(e){return e.type||e.mode}const h=(0,d.Z)(),g=(0,c.Z)((e=>{j(e.palette);const s=s=>"dark"===j(e.palette)?(0,m._j)(s,.1):(0,m.$n)(s,.1);return{root:{"& .super-app-theme--cell":{backgroundColor:"rgb(26,62,114,0.1)",color:"#1a3e72",fontWeight:"600"},"& .Mui-error.negative":{backgroundColor:"#CCFFFF",color:"#1a3e72",fontWeight:"600"},"& .Mui-error.positive":{backgroundColor:"rgba(157, 255, 118, 0.49)",color:"#1a3e72",fontWeight:"600"},"& .super-app-theme--false":{backgroundColor:(t="rgb(255, 48, 83)","dark"===j(e.palette)?(0,m._j)(t,.1):(0,m.$n)(t,.5)),"&:hover":{backgroundColor:s(e.palette.error.main)}},"& .MuiDataGrid-row":{"&:hover":{backgroundColor:s(`${u.sb}`)},"& .Mui-selected":{"&:hover":{backgroundColor:s(`${u.sb}`)}}}}};var t}),{defaultTheme:h});var p=t(41120),x=t(88222),b=t(56847),Z=t(79895),f=t(82302),v=t(83750),O=t(57394),C=t(99613),y=t(868),w=t(59943),k=t(42403),N=t(282),A=t(38396),S=t(85639),E=t(78513),D=t(59067),P=t(28428),I=t(2834),T=t(15635);function V({handleUserCurrent:e,row:s}){const[t,i]=a.useState(null),n=(0,l.T)(),{statusDeleteUser:c}=(0,l.C)(o.mz),[d]=(0,T.r)(c),m=e=>{i(e.currentTarget)},u=()=>{i(null)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(N.Z,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:m,endIcon:(0,r.jsx)(E.Z,{})}),(0,r.jsxs)(A.Z,Object.assign({id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:u},{children:[(0,r.jsx)(S.Z,Object.assign({onClick:()=>{e(),u()}},{children:(0,r.jsx)(N.Z,Object.assign({"aria-controls":"simple-menu","aria-haspopup":"true",onClick:m,startIcon:(0,r.jsx)(D.Z,{color:"primary",fontSize:"small"})},{children:"editar"}))})),(0,r.jsx)(S.Z,Object.assign({onClick:()=>{n((0,o.Bz)(s)),n((0,o.TY)({})),!d&&u()}},{children:(0,r.jsx)(I.d,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:m,startIcon:(0,r.jsx)(P.Z,{htmlColor:"red",fontSize:"small"}),text:"Eliminar",loading:d})}))]}))]})}const $=(0,p.Z)({table:{minWidth:650}}),z=()=>(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(x.Z,{children:"Usuario"}),(0,r.jsx)(x.Z,{children:"dni"}),(0,r.jsx)(x.Z,{children:"Nombres"}),(0,r.jsx)(x.Z,{children:"Apellidos"}),(0,r.jsx)(x.Z,{children:"rol"}),(0,r.jsx)(x.Z,{children:"email"}),(0,r.jsx)(x.Z,{children:"Estado"}),(0,r.jsx)(x.Z,{children:"Opciones"})]}),W=({setUserCurrent:e,rows:s})=>{const t=$();return(0,r.jsx)(b.Z,Object.assign({component:Z.Z},{children:(0,r.jsxs)(f.Z,Object.assign({className:t.table,"aria-label":"simple table"},{children:[(0,r.jsx)(v.Z,{children:(0,r.jsx)(O.Z,{children:(0,r.jsx)(z,{})})}),(0,r.jsx)(C.Z,{children:null==s?void 0:s.map((s=>(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:s.username})),(0,r.jsx)(x.Z,Object.assign({component:"th",scope:"row"},{children:s.dni})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:s.firstName})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:(0,r.jsx)(y.ZP,Object.assign({title:s.lastName},{children:(0,r.jsx)(y.ZP,Object.assign({title:s.lastName},{children:(0,r.jsx)("p",{children:s.lastName})}))}))})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:(0,r.jsx)(y.ZP,Object.assign({title:s.role},{children:(0,r.jsx)("p",{children:s.role===w.Role.DISPATCH?"Despachador":s.role===w.Role.ADMIN?"Administrador":s.role})}))})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:s.email})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:(0,r.jsx)(k.D,{isActive:!s||s.isActive})})),(0,r.jsx)(x.Z,Object.assign({align:"right"},{children:(0,r.jsx)(V,{handleUserCurrent:()=>{var t=Object.assign({},s);e(t)},row:s})}))]},s.username)))})]}))}))};var U=t(95090);const M=()=>{const e=(0,l.T)(),{user:s}=(0,l.C)(o.mz),[t,i]=(g(),(0,a.useState)()),[c,d]=(()=>{const[e,s]=(0,a.useState)([]),{statusRetriveUser:t,userList:r}=(0,l.C)(o.mz);return(0,a.useEffect)((()=>{t===U.JD.DONE?s(null==r?void 0:r.map(((e,s)=>Object.assign({},e)))):s([])}),[t,t]),[e,s]})();return(0,a.useEffect)((()=>{e((0,o.yE)())}),[]),(0,a.useEffect)((()=>{e((0,o.TY)(t))}),[t]),(0,a.useEffect)((()=>{var e;e=Object.assign({},s);const t=c.findIndex((s=>s.id===e.id)),r=[...c];e.dni?t>=0?r[t]=e:r.push(e):t>=0&&r.splice(t,1),d([...r])}),[s]),(0,r.jsx)(n.Z,Object.assign({sx:{mx:4,display:"flex",flexDirection:"column"}},{children:(0,r.jsx)("div",Object.assign({style:{minHeight:"80vh",overflowY:"scroll",display:"flex",flexDirection:"column"}},{children:(0,r.jsx)(W,{setUserCurrent:i,rows:c})}))}))};var q=t(13457),F=t(75834),R=t(33901),L=t(22318),Y=t(17812),_=t(8286),B=t(44562),H=t(5977),J=t(47298),G=t(990),K=t(31366),Q=t(9570);function X({isActive:e,setValue:s}){const t=(0,d.Z)({overrides:{MuiSwitch:{switchBase:{color:"rgb(183, 33, 54)"},colorSecondary:{"&$checked":{color:"rgb(34, 154, 22)"}},track:{opacity:.2,backgroundColor:"rgb(34, 154, 22)","$checked$checked + &":{opacity:.7,backgroundColor:"rgb(34, 154, 22)"}}}}}),[i,n]=a.useState({checkedA:e});return(0,a.useEffect)((()=>{s(i.checkedA)}),[i]),(0,r.jsx)(q.Z,Object.assign({theme:t},{children:(0,r.jsx)(Q.Z,{checked:i.checkedA,onChange:e=>{n(Object.assign(Object.assign({},i),{[e.target.name]:e.target.checked}))},name:"checkedA"})}))}var ee=t(59431);const se=(0,d.Z)(),te=(0,p.Z)((e=>({marginSmall:{margin:".5rem 0 .5rem 0"},margin:{margin:"1rem 0 1rem 0"},sx:{[e.breakpoints.down("xs")]:{visibility:"hidden"},[e.breakpoints.down("sm")]:{visibility:"hidden"}}}))),re=()=>{const e=te(),s=(0,l.T)(),{statusCreateUser:t,userCurrent:c,userError:d}=(0,l.C)(o.mz),[m]=(0,T.r)(t),[j,h]=((0,H.k6)(),a.useState()),[g,p]=a.useState(),[x,b,Z,f]=(0,G.M)({id:void 0,role:g,password:"",password2:"",dni:"",email:"",firstName:"",lastName:""});a.useEffect((()=>{c&&f({id:c.id,role:c.role,password:"",password2:"",dni:c.dni,email:c.email,firstName:c.firstName,lastName:c.lastName,isActive:c.isActive})}),[c]);const{id:v,password:O,password2:C,dni:y,email:N,firstName:A,lastName:S}=x;return a.useEffect((()=>{f(Object.assign(Object.assign({},x),{role:g}))}),[g]),a.useEffect((()=>{f(Object.assign(Object.assign({},x),{isActive:j}))}),[j]),(0,r.jsx)(q.Z,Object.assign({theme:se},{children:(0,r.jsxs)(i.Z,Object.assign({container:!0},{children:[(0,r.jsx)(F.ZP,{}),(0,r.jsx)(i.Z,{children:(0,r.jsxs)(n.Z,Object.assign({sx:{mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},{children:[(0,r.jsx)(R.Z,{style:{width:"50px",height:"50px"},alt:"logo dts",src:"../../src\\assets\\img\\logodts.png"}),(0,r.jsxs)(i.Z,Object.assign({container:!0,justifyContent:"center",alignItems:"center"},{children:[(0,r.jsx)(L.Z,Object.assign({component:"h1",variant:"h5"},{children:x.firstName?`${x.firstName} ${x.lastName}`:"Usuario Dts"})),x.id?(0,r.jsx)(Y.Z,Object.assign({onClick:()=>{new ee.User,s((0,o.TY)({})),Z()}},{children:(0,r.jsx)(J.Z,{htmlColor:"rgb(183, 33, 54)"})})):null]})),(0,r.jsx)(k.D,{isActive:!c||x.isActive}),(0,r.jsx)(n.Z,Object.assign({component:"form",onSubmit:e=>{e.preventDefault(),v?(s((0,o.q0)(x)),Z(),s((0,o.TY)({}))):C===O&&(s((0,o.hR)(x)),Z())},sx:{mt:1}},{children:(0,r.jsxs)(i.Z,Object.assign({container:!0,spacing:2,justifyContent:"space-between"},{children:[(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:6},{children:(0,r.jsx)(_.Z,{variant:"outlined",onChange:b,value:A,margin:"normal",required:!0,fullWidth:!0,id:"firstName",type:"text",label:"Nombre",name:"firstName",autoFocus:!0})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:6},{children:(0,r.jsx)(_.Z,{variant:"outlined",onInvalid:e=>e.target.setCustomValidity("Los campos no pueden estar vacios"),onInput:e=>e.target.setCustomValidity(""),onChange:b,value:S,margin:"normal",required:!0,fullWidth:!0,id:"lastName",type:"text",label:"Apellidos",name:"lastName",autoFocus:!0})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:(0,r.jsx)(_.Z,{variant:"outlined",onChange:b,onInvalid:e=>e.target.setCustomValidity("La contraseña debe tener al menos 6 caracteres"),onInput:e=>e.target.setCustomValidity(""),value:O,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",disabled:!!v,id:"password",inputProps:{pattern:"^[0-9A-Za-z]{6,15}$"},autoComplete:"current-password",error:O!=C,helperText:O!=C?"Las contraseñas no coinciden":null})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:(0,r.jsx)(_.Z,{variant:"outlined",onChange:b,onInvalid:e=>e.target.setCustomValidity("La contraseña debe tener al menos 6 caracteres"),onInput:e=>e.target.setCustomValidity(""),value:C,margin:"normal",required:!0,fullWidth:!0,disabled:!!v,inputProps:{pattern:"^[0-9A-Za-z]{6,15}$"},name:"password2",label:"Password",type:"password",id:"password2",autoComplete:"current-password",error:O!=C})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:(0,r.jsx)(_.Z,{variant:"outlined",onChange:b,value:N,margin:"normal",required:!0,fullWidth:!0,name:"email",label:"Email",type:"email",id:"email",autoComplete:"current-email"})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:6},{children:(0,r.jsx)(_.Z,{variant:"outlined",onChange:b,value:y,margin:"normal",required:!0,fullWidth:!0,name:"dni",label:"Dni",inputProps:{pattern:"^[0-9]{8}"},id:"dni",autoComplete:"current-dni"})})),(0,r.jsxs)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:6},{children:[(0,r.jsx)(K.Z,{required:!0,value:c?c.role:"",placeholder:"Rol",iteams:[{value:w.Role.ADMIN,tittle:"Administrador"},{value:w.Role.DISPATCH,tittle:"Despachador"}],selectValue:p})," "]})),v&&(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:(0,r.jsx)(ie,{setSwitchValue:h})})),d&&(0,r.jsxs)(i.Z,Object.assign({item:!0,xs:12,sm:12,md:12},{children:[(0,r.jsx)(B.Z,Object.assign({variant:"standard",severity:"error",style:{color:"red",textAlign:"center"}},{children:d}))," "]})),(0,r.jsx)(I.d,{className:e.marginSmall,type:"submit",fullWidth:!0,variant:"contained",style:{background:`${u.Jx}`,color:"white"},text:"Enviar",loading:m})]}))}))]}))})]}))}))},ie=({setSwitchValue:e})=>{const{userCurrent:s}=(0,l.C)(o.mz),[t,n]=a.useState();return a.useEffect((()=>{e(t)}),[t]),(0,r.jsxs)(i.Z,Object.assign({container:!0,direction:"row",justifyContent:"space-between"},{children:[(0,r.jsxs)(i.Z,Object.assign({item:!0},{children:[(0,r.jsx)(L.Z,{children:"Prohibido"}),(0,r.jsx)(L.Z,Object.assign({style:{fontSize:"0.875rem",color:"rgb(99, 115, 129)"},variant:"subtitle1"},{children:"Aplicar deshabilitar cuenta"}))]})),(0,r.jsx)(i.Z,Object.assign({item:!0},{children:(0,r.jsx)(X,{isActive:!s||s.isActive,setValue:n})}))]}))},ne=()=>(0,r.jsxs)(i.Z,Object.assign({container:!0},{children:[(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:4,md:5},{children:(0,r.jsx)(re,{})})),(0,r.jsx)(i.Z,Object.assign({item:!0,xs:12,sm:8,md:7},{children:(0,r.jsx)(M,{})}))]}))},42403:(e,s,t)=>{t.d(s,{D:()=>a});var r=t(85893),i=t(71267),n=t(30115);const a=({isActive:e=!0})=>{const s=(0,n.Z)((s=>({color:{background:e?"rgb(34, 154, 22,0.2)":"rgb(183, 33, 54,0.2)",color:e?"rgb(34, 154, 22)":"rgb(183, 33, 54)",fontSize:"0.875rem"}})))();return(0,r.jsx)(i.Z,{className:s.color,label:e?"Activo ":"Deshabilitado"})}}}]);