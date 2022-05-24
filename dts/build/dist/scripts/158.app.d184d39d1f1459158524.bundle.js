"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[158],{61242:(e,t,a)=>{a.d(t,{a:()=>h});var s=a(85893),n=a(41120),i=a(52663),l=a(66083),r=a(29525),c=a(66856),o=a(95477),d=a(282);const g=(0,n.Z)({disabledPadding:{padding:0,textAlign:"center"}}),h=({open:e,handleClose:t,handleConfirm:a,title:n,children:h,maxWidth:j="lg",disabled:p=!1,loading:u})=>{const x=g();return(0,s.jsxs)(i.Z,Object.assign({open:e,onClose:t,maxWidth:j},{children:[(0,s.jsx)(l.Z,Object.assign({className:x.disabledPadding},{children:n})),(0,s.jsx)(r.Z,{children:h}),(0,s.jsx)(c.Z,{children:u?(0,s.jsx)(o.Z,{style:{width:"30px",height:"30px"}}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,Object.assign({size:"small",color:"primary",onClick:t},{children:"Cancelar"})),a&&(0,s.jsx)(d.Z,Object.assign({disabled:p,variant:"outlined",size:"small",color:"secondary",onClick:a,autoFocus:!0},{children:"Confirmar"}))]})})]}))}},71211:(e,t,a)=>{a.d(t,{T:()=>s});class s{static addLayerToMap(e,t,a,s,n){e.addLayer({id:t,type:s,source:a,layout:{visibility:"visible"},paint:{"line-color":n,"line-width":4}})}static addSourceToMap(e,t,a){e.addSource(t,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:a}}})}static removeFeature(e,t,a){this.getLayer(e,t)&&(e.removeLayer(t),e.removeSource(a))}static getLayer(e,t){return e.getLayer(t)}}},69548:(e,t,a)=>{a.r(t),a.d(t,{default:()=>xe});var s=a(85893),n=a(41749),i=a(18463),l=a(67294),r=a(73855),c=a(97700),o=a(41120),d=a(79895),g=a(13258),h=a(22318),j=a(14096),p=a(41423),u=a(95090),x=a(78479),b=a(10008),m=a(62822),y=a(282),f=a(44562),C=a(71211),Z=a(24343),v=a(20113),O=a(10465),k=a(61242),w=a(50998),T=a(95757),S=a(17812),F=a(30387),L=a(52663),N=a(66083),I=a(29525),P=a(8286),$=a(66856),E=a(95477),D=a(39704),_=a(54563);const A=(0,o.Z)((e=>({paper:{padding:"5px",margin:"3px"}}))),M=({open:e,setOpen:t,cell:a,typeDownload:r})=>{const c=A(),o=(0,D.I0)(),[j,p]=(0,l.useState)(a),[x,b]=(0,l.useState)(!1),m=Object.assign({},j),{name:f,altitude:C,volume:v}=a,O=()=>{t(!1)},k=e=>{"idNameCell"===e.target.id&&(m.name=e.target.value),"idAltitudeCell"===e.target.id&&(m.altitude=parseFloat(e.target.value)),"idVolumeCell"===e.target.id&&(m.volume=parseFloat(e.target.value)),p(m)};return(0,s.jsxs)(L.Z,Object.assign({open:e,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},{children:[(0,s.jsx)(N.Z,{children:"Editar Celda"}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(i.Z,Object.assign({style:{padding:"7px"}},{children:(0,s.jsxs)(n.Z,Object.assign({container:!0,direction:"column",spacing:1,justifyContent:"center"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:12,xl:12},{children:(0,s.jsxs)(d.Z,Object.assign({className:c.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Habilitar"})),(0,s.jsx)(g.Z,{checked:j.state!==u.YO.FINISHED,onChange:e=>{m.state=e.target.checked?u.YO.ACTIVE:u.YO.FINISHED,p(m)},inputProps:{"aria-label":"secondary checkbox"}})]}))})),(0,s.jsxs)(n.Z,Object.assign({item:!0,container:!0,direction:"row"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:6,xl:6},{children:(0,s.jsxs)(d.Z,Object.assign({className:c.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Name:"})),(0,s.jsx)(P.Z,{onChange:k,style:{width:"100%"},id:"idNameCell",label:f,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:c.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Altitude:"})),(0,s.jsx)(P.Z,{onChange:k,id:"idAltitudeCell",style:{width:"100%"},label:C,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:c.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Volume:"})),(0,s.jsx)(P.Z,{onChange:k,id:"idVolumeCell",style:{width:"100%"},label:v||"",variant:"outlined"})]}))}))]}))]}))}))}),(0,s.jsxs)($.Z,{children:[(0,s.jsx)(y.Z,Object.assign({color:"primary",onClick:O},{children:"Cancelar"})),x?(0,s.jsx)(E.Z,{variant:"indeterminate"}):(0,s.jsx)(y.Z,Object.assign({color:"secondary",onClick:()=>{b(!0),(0,_.w)(j,r).then((e=>{o((0,Z.a)()),b(!1),O()})).catch((e=>{console.log(e),b(!1)})),t(!1)},autoFocus:!0},{children:"Confirmar"}))]})]}))};var z=a(50648);const R=({cellDme:e,map:t,isChecked:a})=>{const n=(0,r.T)(),[c,o]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,Object.assign({onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,b.Mf)(e)),a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}})(e)},selected:!0,dense:!0,button:!0,style:{backgroundColor:"white"}},{children:(0,s.jsxs)(i.Z,Object.assign({elevation:3===e.state?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:a?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,s.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&a,inputProps:{"aria-label":"secondary checkbox"}}),(0,s.jsx)(T.Z,{primary:`Nombre: ${e.name}`}),(0,s.jsx)(S.Z,Object.assign({onClick:()=>{o(!0)}},{children:(0,s.jsx)(F.Z,{fontSize:"small"})}))]}))}),e.id),c&&(0,s.jsx)(M,{typeDownload:z.TypeDownload.DME,open:c,setOpen:o,cell:e})]})};const V=(0,o.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),W=({cellsDme:e,map:t,isChecked:a,type:i})=>{const{selectDme:c}=(0,r.C)(b.C2),[o,g]=l.useState(!1),h=(0,r.T)(),j=V(),{status:p}=((0,l.useState)(!1),(0,r.C)(v.Lo)),[u,x]=(0,l.useState)([]);(0,l.useEffect)((()=>{h(a?(0,b.E6)(u.filter((e=>3!==e.state))):(0,b.E6)([]))}),[a]),(0,l.useEffect)((()=>{c.map((e=>{const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s),C.T.addSourceToMap(t,s,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),C.T.addLayerToMap(t,a,s,"line","#EAF772")}))}),[c]);const w=e=>{const a=c.find((t=>e.id===t.id));if(a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}return!!a};(0,l.useEffect)((()=>{e.length>0&&x(e)}),[e]);const T=(0,l.useCallback)((t=>{if(t){const a=t.target?t.target.value.toUpperCase():"";x(e.filter((e=>e.name.toUpperCase().includes(a))))}}),[e]),S=(0,l.useCallback)((()=>{x(e)}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,s.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:T,functionCancel:S}),(0,s.jsx)(m.Z,Object.assign({className:j.listItem,dense:!0},{children:(0,s.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,s.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:u.map(((e,a)=>(e.id,(0,s.jsx)(R,{cellDme:e,map:t,isChecked:w(e)},a))))}))}))}))]})),c.length>0&&(0,s.jsx)(y.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{g(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"})),(0,s.jsx)(k.a,Object.assign({open:o,handleClose:()=>{g(!1),h((0,b.E6)([])),h((0,b.fn)())},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){yield h((0,v.iC)({cells:c,type:i})),h((0,Z.a)()),h((0,b.fn)()),g(!1)},new((a=void 0)||(a=Promise))((function(n,i){function l(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,r)}c((s=s.apply(e,t||[])).next())}));var e,t,a,s},title:"Area you sure?"},{children:(0,s.jsx)(f.Z,Object.assign({severity:"warning"},{children:"Confirma para Finalizar los poligonos seleccionados"}))}))]})},U=({cellPad:e,map:t,isChecked:a})=>{const n=(0,r.T)(),[c,o]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,Object.assign({selected:!0,dense:!0,button:!0,onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,b.SP)(e)),a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}})(e)},style:{backgroundColor:"white"}},{children:(0,s.jsxs)(i.Z,Object.assign({elevation:"3"===e.state.toString()?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:a?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,s.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&a,inputProps:{"aria-label":"secondary checkbox"}}),(0,s.jsx)(T.Z,{primary:`Nombre: ${e.name}`}),(0,s.jsx)(S.Z,Object.assign({onClick:()=>{o(!0)}},{children:(0,s.jsx)(F.Z,{fontSize:"small"})}))]}))}),e.id),c&&(0,s.jsx)(M,{typeDownload:z.TypeDownload.PAD,open:c,setOpen:o,cell:e})]})};const B=(0,o.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),Y=({cellsPad:e,map:t,isChecked:a,setIsChecked:i,type:c})=>{const{selectPad:o}=(0,r.C)(b.C2),[g,h]=l.useState(!1),j=(0,r.T)(),p=B(),{status:u}=((0,l.useState)(!1),(0,r.C)(v.Lo)),[x,w]=(0,l.useState)([]);(0,l.useEffect)((()=>{a?(j((0,b.Ri)(x.filter((e=>3!==e.state)))),o.length>0&&j((0,b.Ri)(e.filter((e=>3!==e.state))))):j((0,b.Ri)([]))}),[a]),(0,l.useEffect)((()=>{e.length>0&&w(e)}),[e]),(0,l.useEffect)((()=>{o.map((e=>{const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s),C.T.addSourceToMap(t,s,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),C.T.addLayerToMap(t,a,s,"line","#EAF772")}))}),[o]);const T=e=>{const a=o.find((t=>e.id===t.id));if(a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}return!!a},S=(0,l.useCallback)((t=>{if(t){const a=t.target?t.target.value.toUpperCase():"";w(e.filter((e=>e.name.toUpperCase().includes(a))))}}),[e]),F=(0,l.useCallback)((()=>{w(e)}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,s.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:S,functionCancel:F}),(0,s.jsx)(m.Z,Object.assign({className:p.listItem,dense:!0},{children:(0,s.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,s.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:x.map((e=>(0,s.jsx)(U,{cellPad:e,map:t,isChecked:T(e)},e.id)))}))}))}))]})),o.length>0&&(0,s.jsx)(y.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{h(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"})),(0,s.jsx)(k.a,Object.assign({open:g,handleClose:()=>{h(!1),j((0,b.Ri)([])),j((0,b.fn)())},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){yield j((0,v.iC)({cells:o,type:c})),j((0,Z.a)()),j((0,b.fn)()),h(!1)},new((a=void 0)||(a=Promise))((function(n,i){function l(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,r)}c((s=s.apply(e,t||[])).next())}));var e,t,a,s},title:"¿Esta seguro ?"},{children:(0,s.jsx)(f.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}))}))]})};var H=a(32759),K=a(8793),J=a(64436),Q=a(96394),q=a(26209),G=a(85639),X=a(36673),ee=a(93565),te=a(35573);const ae=(0,o.Z)((e=>({paper:{padding:"5px",margin:"3px"}}))),se=({open:e,handleClose:t,handleConfirm:a,polygon:o})=>{const j=ae(),p=(0,D.I0)(),{materialList:x}=(0,r.C)(c.WD),[b,m]=(0,l.useState)(o),[f,C]=(0,l.useState)(te.O[o.color].hex),[v,O]=(0,l.useState)(!1),[k,w]=(0,l.useState)(""),T=Object.assign({},b),S=e=>{"idName"===e.target.id&&(T.name=e.target.value),"idAltitude"===e.target.id&&(T.altitude=parseFloat(e.target.value)),"idTonnens"===e.target.id&&(T.tonnes=parseFloat(e.target.value)),"idVolume"===e.target.id&&(T.volume=parseFloat(e.target.value)),"idAg"===e.target.id&&(T.ag=parseFloat(e.target.value)),"idAgcn"===e.target.id&&(T.agcn=parseFloat(e.target.value))},{name:F,ag:_,agcn:A,alte:M,altitude:z,as:R,au:V,auch:W,description:U,idProject:B,lito:Y,material:H,nameProject:K,onzas:se,orezonet:ne,tonnes:ie,volume:le,state:re}=o;return(0,s.jsxs)(L.Z,Object.assign({open:e,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},{children:[(0,s.jsx)(N.Z,{children:"Editar Polígono"}),(0,s.jsx)(I.Z,{children:(0,s.jsx)(i.Z,Object.assign({style:{padding:"7px"}},{children:(0,s.jsxs)(n.Z,Object.assign({container:!0,direction:"column",spacing:1,justifyContent:"center"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:12,xl:12},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Habilitar"})),(0,s.jsx)(g.Z,{checked:b.state!==u.p$.FINISHED,onChange:e=>{T.state=e.target.checked?u.p$.ACTIVE:u.p$.FINISHED,m(T)},inputProps:{"aria-label":"secondary checkbox"}})]}))})),(0,s.jsxs)(n.Z,Object.assign({item:!0,container:!0,direction:"row"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:6,xl:6},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Proyecto:"})),(0,s.jsx)(P.Z,{style:{width:"100%"},id:"idProject",label:K,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Nombre:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idName",label:F,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Altitud:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAltitude",label:z,variant:"outlined"})]}))}))]})),(0,s.jsxs)(n.Z,Object.assign({item:!0,container:!0,md:12,xl:12},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:4,xl:4},{children:(0,s.jsx)(d.Z,Object.assign({className:j.paper,elevation:2},{children:(0,s.jsxs)(J.Z,Object.assign({style:{width:"100%"}},{children:[(0,s.jsx)(Q.Z,Object.assign({id:"demo-controlled-open-select-label"},{children:"Material"})),(0,s.jsx)(q.Z,Object.assign({style:{width:"100%"},id:"idMaterial",value:k,label:"Material",onChange:e=>{w(e.target.value)}},{children:x.map((e=>(0,s.jsx)(G.Z,Object.assign({value:e.id},{children:e.type}),e.id)))}))]}))}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:8,xl:8},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Color"})),(0,s.jsxs)("div",Object.assign({style:{display:"flex",padding:"1px",justifyContent:"center"}},{children:[(0,s.jsx)(ee.e8,{color:f,colors:["#FF6900","#FCB900","#7BDCB5"],onChangeComplete:e=>{C(e.hex)}}),(0,s.jsx)("div",{style:{justifyItems:"center",borderRadius:"4px",width:"40px",backgroundColor:`${f}`}})]}))]}))}))]})),(0,s.jsxs)(n.Z,Object.assign({item:!0,xl:12,md:12,container:!0,direction:"row"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Tonnens:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idTonnens",label:ie,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Volume:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idVolume",label:le,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Ag:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAg",label:_,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,s.jsxs)(d.Z,Object.assign({className:j.paper},{children:[(0,s.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Agcn:"})),(0,s.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAgcn",label:A,variant:"outlined"})]}))})),(0,s.jsx)(n.Z,{item:!0,md:6,xl:6})]}))]}))}))}),(0,s.jsxs)($.Z,{children:[(0,s.jsx)(y.Z,Object.assign({color:"primary",onClick:t},{children:"Cancelar"})),v?(0,s.jsx)(E.Z,{variant:"indeterminate"}):(0,s.jsx)(y.Z,Object.assign({color:"secondary",onClick:()=>{O(!0),(0,X.Q)(b).then((e=>{p((0,Z.a)()),O(!1),t()})).catch((e=>{console.log(e),O(!1)}))},autoFocus:!0},{children:"Confirmar"}))]})]}))},ne=({pl:e,map:t,isChecked:a})=>{const{selectPolygon:n}=(0,r.C)(b.C2),c=(0,r.T)(),[o,d]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,Object.assign({onClick:()=>{3===e.state||(e=>{if(c((0,b.jY)(e)),a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}})(e)},selected:!0,dense:!0,button:!0,style:{backgroundColor:"white"}},{children:(0,s.jsxs)(i.Z,Object.assign({elevation:3===e.state?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:a?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,s.jsx)(g.Z,{disabled:3===e.state,checked:"3"!==e.state.toString()&&a,inputProps:{"aria-label":"secondary checkbox"}}),(0,s.jsx)(T.Z,{style:{textDecorationLine:(e.state,"")},primary:(0,s.jsx)(h.Z,Object.assign({variant:"subtitle2",style:{color:3===e.state?"gray":"black",fontWeight:(e.state,"normal")}},{children:e.nameProject?`Proyecto: ${e.nameProject}`:`Nombre: ${e.name}`})),secondary:(0,s.jsx)(h.Z,Object.assign({style:{color:3===e.state?"gray":"",fontWeight:3===e.state?"normal":"initial"},variant:"subtitle2"},{children:e.nameProject?`Nombre: ${e.name}`:""}))}),(0,s.jsx)(S.Z,Object.assign({onClick:()=>{d(!0)}},{children:(0,s.jsx)(K.Z,{fontSize:"small",style:{color:a?"white":""}})}))]}))}),e.id),o&&(0,s.jsx)(se,{open:o,handleClose:()=>{d(!1)},handleConfirm:()=>{d(!1)},polygon:e})]})};const ie=(0,o.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),le=({polygons:e,map:t,isChecked:a,setIsChecked:n})=>{const{selectPolygon:i}=(0,r.C)(b.C2),{status:c}=(0,r.C)(H.$e),[o,g]=(0,l.useState)([]),[h,j]=l.useState(!1),p=(0,r.T)(),u=ie();(0,l.useEffect)((()=>{p(a?(0,b.DY)(o.filter((e=>3!==e.state))):(0,b.DY)([]))}),[a]),(0,l.useEffect)((()=>{setTimeout((()=>{i.map((e=>{const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s),C.T.addSourceToMap(t,s,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),C.T.addLayerToMap(t,a,s,"line","#EAF772")}))}),10)}),[i]);const x=e=>{const a=i.find((t=>e.id===t.id));if(a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}return!!a};(0,l.useEffect)((()=>{e.length>0&&g(e)}),[e]);const v=(0,l.useCallback)((t=>{if(t){const a=t.target?t.target.value.toUpperCase():"";g(e.filter((e=>e.name.toUpperCase().includes(a)||e.nameProject&&e.nameProject.toUpperCase().includes(a))))}}),[e]),w=(0,l.useCallback)((()=>{g(e)}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O.V,{placeholder:"Buscar por proyecto, polígon o mineral ",functionFilter:v,functionCancel:w}),(0,s.jsx)(m.Z,Object.assign({className:u.listItem,dense:!0},{children:(0,s.jsx)(d.Z,Object.assign({elevation:0,style:{overflow:"scroll",height:"75vh"}},{children:o.map((e=>(0,s.jsx)(ne,{pl:e,map:t,isChecked:x(e)},e.id)))}))})),(0,s.jsx)(d.Z,Object.assign({elevation:0,style:{}},{children:i.length>0&&(0,s.jsx)(y.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{j(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"}))})),(0,s.jsx)(k.a,Object.assign({open:h,handleClose:()=>{j(!1),p((0,b.DY)([])),p((0,b.fn)())},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){yield p((0,H.if)(i)),p((0,Z.a)()),p((0,b.fn)()),j(!1)},new((a=void 0)||(a=Promise))((function(n,i){function l(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,r)}c((s=s.apply(e,t||[])).next())}));var e,t,a,s},title:"¿Esta seguro ?"},{children:(0,s.jsx)(f.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}))}))]})},re=({cellStock:e,map:t,isChecked:a})=>{const n=(0,r.T)(),[c,o]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,Object.assign({selected:!0,dense:!0,button:!0,onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,b.xk)(e)),a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}})(e)},style:{backgroundColor:"white"}},{children:(0,s.jsxs)(i.Z,Object.assign({elevation:"3"===e.state.toString()?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:a?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,s.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&a,inputProps:{"aria-label":"secondary checkbox"}}),(0,s.jsx)(T.Z,{primary:`Nombre: ${e.name}`}),(0,s.jsx)(S.Z,Object.assign({onClick:()=>{o(!0)}},{children:(0,s.jsx)(F.Z,{fontSize:"small"})}))]}))}),e.id),c&&(0,s.jsx)(M,{typeDownload:z.TypeDownload.STOCK,open:c,setOpen:o,cell:e})]})};const ce=(0,o.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),oe=({cellsStock:e,map:t,isChecked:a,setIsChecked:i,type:c})=>{const{selectStock:o}=(0,r.C)(b.C2),[g,h]=l.useState(!1),j=(0,r.T)(),p=ce(),{status:u}=((0,l.useState)(!1),(0,r.C)(v.Lo)),[x,w]=(0,l.useState)([]);(0,l.useEffect)((()=>{j(a?(0,b.I5)(x.filter((e=>3!==e.state))):(0,b.I5)([]))}),[a]),(0,l.useEffect)((()=>{setTimeout((()=>{o.map((e=>{const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s),C.T.addSourceToMap(t,s,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),C.T.addLayerToMap(t,a,s,"line","#EAF772")}))}),10)}),[o]);const T=e=>{const a=o.find((t=>e.id===t.id));if(a){const a=`layer_${e.id}`,s=`source_${e.id}`;C.T.getLayer(t,a)&&C.T.removeFeature(t,a,s)}return!!a};(0,l.useEffect)((()=>{e.length>0&&w(e)}),[e]);const S=(0,l.useCallback)((t=>{if(t){const a=t.target?t.target.value.toUpperCase():"";w(e.filter((e=>e.name.toUpperCase().includes(a))))}}),[e]),F=(0,l.useCallback)((()=>{w(e)}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,s.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:S,functionCancel:F}),(0,s.jsx)(m.Z,Object.assign({className:p.listItem,dense:!0},{children:(0,s.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,s.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:x.map((e=>(0,s.jsx)(re,{cellStock:e,map:t,isChecked:T(e)},e.id)))}))}))}))]})),o.length>0&&(0,s.jsx)(y.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{h(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"})),(0,s.jsx)(k.a,Object.assign({open:g,handleClose:()=>{h(!1)},handleConfirm:()=>{return e=void 0,t=void 0,s=function*(){h(!1),yield j((0,v.iC)({cells:o,type:c})),j((0,Z.a)()),j((0,b.fn)()),h(!1)},new((a=void 0)||(a=Promise))((function(n,i){function l(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,r)}c((s=s.apply(e,t||[])).next())}));var e,t,a,s},title:"Area you sure?"},{children:(0,s.jsx)(f.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}))}))]})};const de=(0,o.Z)((e=>({root:{flex:1,backgroundColor:"#FDF8EF",display:"flex",height:"800px",width:"100%",minWidth:"1300px"},paper:{height:"100vh",width:"100%",textAlign:"center",justifyContent:"center",minWidth:"250px"},tittle:{textAlign:"center"},paperMap:{backgroundColor:"#FDF8EF",width:"100%",height:"800px",padding:"10px",textAlign:"center",minWidth:"900px"},tabs:{borderRight:`1px solid ${e.palette.divider}`,width:"100%"},tab:{minWidth:10,padding:1,paddingTop:8,paddingBottom:8,width:"100%"},buttonTab:{writingMode:"vertical-rl"},listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}})));function ge(e){const{children:t,value:a,index:n}=e,i=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["children","value","index"]);return(0,s.jsx)("div",Object.assign({role:"tabpanel",hidden:a!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,style:{flex:1}},i,{children:a===n&&t}))}function he(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const je=({map:e})=>{const{selectPolygon:t,selectDme:a,selectPad:i,selectStock:o}=(0,r.C)(b.C2),m=(0,r.T)(),{polygonList:y,dmeCellList:f,padCellList:C,stockCellList:Z,routeList:v}=(0,r.C)(c.WD),[O,k]=(0,l.useState)(!1),w=de(),[T,S]=(0,x._)("index_tab_settind_polygon",0);return(0,s.jsx)("div",{children:(0,s.jsxs)(d.Z,Object.assign({elevation:1,className:w.paper},{children:[(0,s.jsxs)(n.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,s.jsx)(g.Z,{indeterminate:t.length>0&&y.length!=t.length||a.length>0&&f.length!=a.length||i.length>0&&C.length!=i.length||o.length>0&&Z.length==o.length||void 0,checked:O,onChange:e=>{k(e.target.checked),y.length===t.length&&k(e.target.checked),Z.length!==o.length&&k(e.target.checked)}}),(0,s.jsx)(h.Z,Object.assign({className:w.tittle},{children:"Seleccionar todos los Polígono"}))]})),(0,s.jsxs)(n.Z,Object.assign({container:!0,justifyContent:"space-between",alignItems:"flex-start",wrap:"nowrap"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0},{children:(0,s.jsxs)(j.Z,Object.assign({orientation:"vertical",variant:"scrollable",value:T,indicatorColor:"primary",textColor:"primary",onChange:(e,t)=>{S(t),m((0,b.fn)()),k(!1)},"aria-label":"horizontal tabs",className:w.tabs},{children:[(0,s.jsx)(p.Z,Object.assign({className:w.tab,label:(0,s.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"TAJO"}))},he(0))),(0,s.jsx)(p.Z,Object.assign({className:w.tab,label:(0,s.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"DME"}))},he(1))),(0,s.jsx)(p.Z,Object.assign({className:w.tab,label:(0,s.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"PAD"}))},he(2))),(0,s.jsx)(p.Z,Object.assign({className:w.tab,label:(0,s.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"STOCKs"}))},he(3)))]}))})),(0,s.jsxs)(n.Z,Object.assign({item:!0,container:!0,style:{padding:8}},{children:[(0,s.jsx)(ge,Object.assign({value:T,index:0},{children:(0,s.jsx)(le,{polygons:y,map:e.current,isChecked:O,setIsChecked:k})})),(0,s.jsx)(ge,Object.assign({value:T,index:1},{children:(0,s.jsx)(W,{cellsDme:f,map:e.current,isChecked:O,type:u.NZ.DME})})),(0,s.jsx)(ge,Object.assign({value:T,index:2},{children:(0,s.jsx)(Y,{cellsPad:C,map:e.current,isChecked:O,setIsChecked:k,type:u.NZ.PAD})})),(0,s.jsx)(ge,Object.assign({value:T,index:3},{children:(0,s.jsx)(oe,{cellsStock:Z,map:e.current,isChecked:O,setIsChecked:k,type:u.NZ.STOCK})}))]}))]}))]}))})},pe=(0,l.lazy)((()=>Promise.all([a.e(820),a.e(771)]).then(a.bind(a,77771)))),ue=()=>{const{polygonList:e}=(0,r.C)(c.WD),t=(0,l.useRef)(null);return(0,s.jsxs)(n.Z,Object.assign({container:!0,spacing:1,style:{height:"80vh"}},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,xs:12,md:4,xl:3},{children:(0,s.jsx)(je,Object.assign({},{map:t}))})),(0,s.jsx)(n.Z,Object.assign({item:!0,xs:12,md:8,xl:9},{children:(0,s.jsx)(i.Z,Object.assign({elevation:3,style:{height:"100%"}},{children:(0,s.jsx)(l.Suspense,Object.assign({fallback:null},{children:(0,s.jsx)(pe,{mapRef:t})}))}))}))]}))},xe=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(ue,{})})}}]);