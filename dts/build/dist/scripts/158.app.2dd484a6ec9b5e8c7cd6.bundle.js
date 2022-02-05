"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[158],{61242:(e,i,t)=>{t.d(i,{a:()=>g});var a=t(85893),n=t(41120),s=t(52663),o=t(66083),l=t(29525),d=t(66856),c=t(282);const r=(0,n.Z)({disabledPadding:{padding:0,textAlign:"center"}}),g=({open:e,handleClose:i,handleConfirm:t,title:n,children:g,maxWidth:h="lg",disabled:j=!1})=>{const v=r();return(0,a.jsxs)(s.Z,Object.assign({open:e,onClose:i,maxWidth:h},{children:[(0,a.jsx)(o.Z,Object.assign({className:v.disabledPadding},{children:n}),void 0),(0,a.jsx)(l.Z,{children:g},void 0),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(c.Z,Object.assign({size:"small",color:"primary",onClick:i},{children:"Cancel"}),void 0),t&&(0,a.jsx)(c.Z,Object.assign({disabled:j,variant:"outlined",size:"small",color:"secondary",onClick:t,autoFocus:!0},{children:"Confirm"}),void 0)]},void 0)]}),void 0)}},71211:(e,i,t)=>{t.d(i,{T:()=>a});class a{static addLayerToMap(e,i,t,a,n){e.addLayer({id:i,type:a,source:t,layout:{visibility:"visible"},paint:{"line-color":n,"line-width":4}})}static addSourceToMap(e,i,t){e.addSource(i,{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}})}static removeFeature(e,i,t){this.getLayer(e,i)&&(e.removeLayer(i),e.removeSource(t))}static getLayer(e,i){return e.getLayer(i)}}},69548:(e,i,t)=>{t.r(i),t.d(i,{default:()=>pe});var a=t(85893),n=t(41749),s=t(18463),o=t(67294),l=t(73855),d=t(18973),c=t(41120),r=t(79895),g=t(13258),h=t(22318),j=t(14096),v=t(41423),u=t(95090),p=t(78479),x=t(10008),b=t(62822),m=t(282),y=t(44562),f=t(71211),C=t(24343),Z=t(20113),O=t(10465),k=t(61242),w=t(50998),T=t(95757),S=t(17812),F=t(30387),L=t(52663),N=t(66083),I=t(29525),P=t(8286),$=t(66856),E=t(95477),D=t(39704),_=t(54563);const A=(0,c.Z)((e=>({paper:{padding:"5px",margin:"3px"}}))),M=({open:e,setOpen:i,cell:t,typeDownload:l})=>{const d=A(),c=(0,D.I0)(),[j,v]=(0,o.useState)(t),[p,x]=(0,o.useState)(!1),b=Object.assign({},j),{name:y,altitude:f,volume:Z}=t,O=()=>{i(!1)},k=e=>{"idNameCell"===e.target.id&&(b.name=e.target.value),"idAltitudeCell"===e.target.id&&(b.altitude=parseFloat(e.target.value)),"idVolumeCell"===e.target.id&&(b.volume=parseFloat(e.target.value)),v(b)};return(0,a.jsxs)(L.Z,Object.assign({open:e,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},{children:[(0,a.jsx)(N.Z,{children:"Cell Edit"},void 0),(0,a.jsx)(I.Z,{children:(0,a.jsx)(s.Z,Object.assign({style:{padding:"7px"}},{children:(0,a.jsxs)(n.Z,Object.assign({container:!0,direction:"column",spacing:1,justifyContent:"center"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:12,xl:12},{children:(0,a.jsxs)(r.Z,Object.assign({className:d.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Habilitar"}),void 0),(0,a.jsx)(g.Z,{checked:j.state!==u.YO.FINISHED,onChange:e=>{b.state=e.target.checked?u.YO.ACTIVE:u.YO.FINISHED,v(b)},inputProps:{"aria-label":"secondary checkbox"}},void 0)]}),void 0)}),void 0),(0,a.jsxs)(n.Z,Object.assign({item:!0,container:!0,direction:"row"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:6,xl:6},{children:(0,a.jsxs)(r.Z,Object.assign({className:d.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Name:"}),void 0),(0,a.jsx)(P.Z,{onChange:k,style:{width:"100%"},id:"idNameCell",label:y,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:d.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Altitude:"}),void 0),(0,a.jsx)(P.Z,{onChange:k,id:"idAltitudeCell",style:{width:"100%"},label:f,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:d.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Volume:"}),void 0),(0,a.jsx)(P.Z,{onChange:k,id:"idVolumeCell",style:{width:"100%"},label:Z||"",variant:"outlined"},void 0)]}),void 0)}),void 0)]}),void 0)]}),void 0)}),void 0)},void 0),(0,a.jsxs)($.Z,{children:[(0,a.jsx)(m.Z,Object.assign({color:"primary",onClick:O},{children:"Cancelar"}),void 0),p?(0,a.jsx)(E.Z,{variant:"indeterminate"},void 0):(0,a.jsx)(m.Z,Object.assign({color:"secondary",onClick:()=>{x(!0),(0,_.w)(j,l).then((e=>{c((0,C.a)()),x(!1),O()})).catch((e=>{console.log(e),x(!1)})),i(!1)},autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)]}),void 0)};var z=t(50648);const R=({cellDme:e,map:i,isChecked:t})=>{const n=(0,l.T)(),[d,c]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.Z,Object.assign({onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,x.Mf)(e)),t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}})(e)},selected:!0,dense:!0,button:!0,style:{backgroundColor:"white"}},{children:(0,a.jsxs)(s.Z,Object.assign({elevation:3===e.state?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:t?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,a.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&t,inputProps:{"aria-label":"secondary checkbox"}},void 0),(0,a.jsx)(T.Z,{primary:`Nombre: ${e.name}`},void 0),(0,a.jsx)(S.Z,Object.assign({onClick:()=>{c(!0)}},{children:(0,a.jsx)(F.Z,{fontSize:"small"},void 0)}),void 0)]}),void 0)}),e.id),d&&(0,a.jsx)(M,{typeDownload:z.TypeDownload.DME,open:d,setOpen:c,cell:e},void 0)]},void 0)};const V=(0,c.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),W=({cellsDme:e,map:i,isChecked:t,type:s})=>{const{selectDme:d}=(0,l.C)(x.C2),[c,g]=o.useState(!1),h=(0,l.T)(),j=V(),{status:v}=((0,o.useState)(!1),(0,l.C)(Z.Lo)),[u,p]=(0,o.useState)([]);(0,o.useEffect)((()=>{h(t?(0,x.E6)(u.filter((e=>3!==e.state))):(0,x.E6)([]))}),[t]),(0,o.useEffect)((()=>{d.map((e=>{const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&(f.T.removeFeature(i,t,a),console.log("dme Function TRUE",e)),f.T.addSourceToMap(i,a,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),f.T.addLayerToMap(i,t,a,"line","#EAF772")}))}),[d]);const w=e=>{const t=d.find((i=>e.id===i.id));if(t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}return!!t};(0,o.useEffect)((()=>{e.length>0&&p(e)}),[e]);const T=(0,o.useCallback)((i=>{if(i){const t=i.target?i.target.value.toUpperCase():"";p(e.filter((e=>e.name.toUpperCase().includes(t))))}}),[e]),S=(0,o.useCallback)((()=>{p(e)}),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,a.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:T,functionCancel:S},void 0),(0,a.jsx)(b.Z,Object.assign({className:j.listItem,dense:!0},{children:(0,a.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,a.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:u.map(((e,t)=>(e.id,(0,a.jsx)(R,{cellDme:e,map:i,isChecked:w(e)},t))))}),void 0)}),void 0)}),void 0)]}),void 0),d.length>0&&(0,a.jsx)(m.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{g(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"}),void 0),(0,a.jsx)(k.a,Object.assign({open:c,handleClose:()=>{g(!1),h((0,x.E6)([])),h((0,x.fn)())},handleConfirm:()=>{return e=void 0,i=void 0,a=function*(){yield h((0,Z.iC)({cells:d,type:s})),h((0,C.a)()),h((0,x.fn)()),g(!1)},new((t=void 0)||(t=Promise))((function(n,s){function o(e){try{d(a.next(e))}catch(e){s(e)}}function l(e){try{d(a.throw(e))}catch(e){s(e)}}function d(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,l)}d((a=a.apply(e,i||[])).next())}));var e,i,t,a},title:"Area you sure?"},{children:(0,a.jsx)(y.Z,Object.assign({severity:"warning"},{children:"Confirma para Finalizar los poligonos seleccionados"}),void 0)}),void 0)]},void 0)},U=({cellPad:e,map:i,isChecked:t})=>{const n=(0,l.T)(),[d,c]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.Z,Object.assign({selected:!0,dense:!0,button:!0,onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,x.SP)(e)),t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}})(e)},style:{backgroundColor:"white"}},{children:(0,a.jsxs)(s.Z,Object.assign({elevation:"3"===e.state.toString()?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:t?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,a.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&t,inputProps:{"aria-label":"secondary checkbox"}},void 0),(0,a.jsx)(T.Z,{primary:`Nombre: ${e.name}`},void 0),(0,a.jsx)(S.Z,Object.assign({onClick:()=>{c(!0)}},{children:(0,a.jsx)(F.Z,{fontSize:"small"},void 0)}),void 0)]}),void 0)}),e.id),d&&(0,a.jsx)(M,{typeDownload:z.TypeDownload.PAD,open:d,setOpen:c,cell:e},void 0)]},void 0)};const B=(0,c.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),Y=({cellsPad:e,map:i,isChecked:t,setIsChecked:s,type:d})=>{const{selectPad:c}=(0,l.C)(x.C2),[g,h]=o.useState(!1),j=(0,l.T)(),v=B(),{status:u}=((0,o.useState)(!1),(0,l.C)(Z.Lo)),[p,w]=(0,o.useState)([]);(0,o.useEffect)((()=>{t?(j((0,x.Ri)(p.filter((e=>3!==e.state)))),c.length>0&&j((0,x.Ri)(e.filter((e=>3!==e.state))))):j((0,x.Ri)([]))}),[t]),(0,o.useEffect)((()=>{e.length>0&&w(e)}),[e]),(0,o.useEffect)((()=>{c.map((e=>{const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a),f.T.addSourceToMap(i,a,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),f.T.addLayerToMap(i,t,a,"line","#EAF772")}))}),[c]);const T=e=>{const t=c.find((i=>e.id===i.id));if(t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}return!!t},S=(0,o.useCallback)((i=>{if(i){const t=i.target?i.target.value.toUpperCase():"";w(e.filter((e=>e.name.toUpperCase().includes(t))))}}),[e]),F=(0,o.useCallback)((()=>{w(e)}),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,a.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:S,functionCancel:F},void 0),(0,a.jsx)(b.Z,Object.assign({className:v.listItem,dense:!0},{children:(0,a.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,a.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:p.map((e=>(0,a.jsx)(U,{cellPad:e,map:i,isChecked:T(e)},e.id)))}),void 0)}),void 0)}),void 0)]}),void 0),c.length>0&&(0,a.jsx)(m.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{h(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"}),void 0),(0,a.jsx)(k.a,Object.assign({open:g,handleClose:()=>{h(!1),j((0,x.Ri)([])),j((0,x.fn)())},handleConfirm:()=>{return e=void 0,i=void 0,a=function*(){yield j((0,Z.iC)({cells:c,type:d})),j((0,C.a)()),j((0,x.fn)()),h(!1)},new((t=void 0)||(t=Promise))((function(n,s){function o(e){try{d(a.next(e))}catch(e){s(e)}}function l(e){try{d(a.throw(e))}catch(e){s(e)}}function d(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,l)}d((a=a.apply(e,i||[])).next())}));var e,i,t,a},title:"¿Esta seguro ?"},{children:(0,a.jsx)(y.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}),void 0)}),void 0)]},void 0)};var H=t(32759),K=t(8793),J=t(64436),Q=t(96394),q=t(26209),G=t(85639),X=t(36673),ee=t(93565),ie=t(35573);const te=(0,c.Z)((e=>({paper:{padding:"5px",margin:"3px"}}))),ae=({open:e,handleClose:i,handleConfirm:t,polygon:c})=>{const j=te(),v=(0,D.I0)(),{materialList:p}=(0,l.C)(d.WD),[x,b]=(0,o.useState)(c),[y,f]=(0,o.useState)(ie.O[c.color].hex),[Z,O]=(0,o.useState)(!1),[k,w]=(0,o.useState)(""),T=Object.assign({},x),S=e=>{"idName"===e.target.id&&(T.name=e.target.value),"idAltitude"===e.target.id&&(T.altitude=parseFloat(e.target.value)),"idTonnens"===e.target.id&&(T.tonnes=parseFloat(e.target.value)),"idVolume"===e.target.id&&(T.volume=parseFloat(e.target.value)),"idAg"===e.target.id&&(T.ag=parseFloat(e.target.value)),"idAgcn"===e.target.id&&(T.agcn=parseFloat(e.target.value))},{name:F,ag:_,agcn:A,alte:M,altitude:z,as:R,au:V,auch:W,description:U,idProject:B,lito:Y,material:H,nameProject:K,onzas:ae,orezonet:ne,tonnes:se,volume:oe,state:le}=c;return(0,a.jsxs)(L.Z,Object.assign({open:e,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},{children:[(0,a.jsx)(N.Z,{children:"Polygon Edit"},void 0),(0,a.jsx)(I.Z,{children:(0,a.jsx)(s.Z,Object.assign({style:{padding:"7px"}},{children:(0,a.jsxs)(n.Z,Object.assign({container:!0,direction:"column",spacing:1,justifyContent:"center"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:12,xl:12},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Habilitar"}),void 0),(0,a.jsx)(g.Z,{checked:x.state!==u.p$.FINISHED,onChange:e=>{T.state=e.target.checked?u.p$.ACTIVE:u.p$.FINISHED,b(T)},inputProps:{"aria-label":"secondary checkbox"}},void 0)]}),void 0)}),void 0),(0,a.jsxs)(n.Z,Object.assign({item:!0,container:!0,direction:"row"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:6,xl:6},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Project:"}),void 0),(0,a.jsx)(P.Z,{style:{width:"100%"},id:"idProject",label:K,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Name:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idName",label:F,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Altitude:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAltitude",label:z,variant:"outlined"},void 0)]}),void 0)}),void 0)]}),void 0),(0,a.jsxs)(n.Z,Object.assign({item:!0,container:!0,md:12,xl:12},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:4,xl:4},{children:(0,a.jsx)(r.Z,Object.assign({className:j.paper,elevation:2},{children:(0,a.jsxs)(J.Z,Object.assign({style:{width:"100%"}},{children:[(0,a.jsx)(Q.Z,Object.assign({id:"demo-controlled-open-select-label"},{children:"Material"}),void 0),(0,a.jsx)(q.Z,Object.assign({style:{width:"100%"},id:"idMaterial",value:k,label:"Material",onChange:e=>{w(e.target.value)}},{children:p.map((e=>(0,a.jsx)(G.Z,Object.assign({value:e.id},{children:e.type}),e.id)))}),void 0)]}),void 0)}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:8,xl:8},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper,elevation:2},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Color"}),void 0),(0,a.jsxs)("div",Object.assign({style:{display:"flex",padding:"1px",justifyContent:"center"}},{children:[(0,a.jsx)(ee.e8,{color:y,colors:["#FF6900","#FCB900","#7BDCB5"],onChangeComplete:e=>{f(e.hex)}},void 0),(0,a.jsx)("div",{style:{justifyItems:"center",borderRadius:"4px",width:"40px",backgroundColor:`${y}`}},void 0)]}),void 0)]}),void 0)}),void 0)]}),void 0),(0,a.jsxs)(n.Z,Object.assign({item:!0,xl:12,md:12,container:!0,direction:"row"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Tonnens:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idTonnens",label:se,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Volume:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idVolume",label:oe,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Ag:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAg",label:_,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,md:3,xl:3},{children:(0,a.jsxs)(r.Z,Object.assign({className:j.paper},{children:[(0,a.jsx)(h.Z,Object.assign({variant:"body1"},{children:"Agcn:"}),void 0),(0,a.jsx)(P.Z,{onChange:S,style:{width:"100%"},id:"idAgcn",label:A,variant:"outlined"},void 0)]}),void 0)}),void 0),(0,a.jsx)(n.Z,{item:!0,md:6,xl:6},void 0)]}),void 0)]}),void 0)}),void 0)},void 0),(0,a.jsxs)($.Z,{children:[(0,a.jsx)(m.Z,Object.assign({color:"primary",onClick:i},{children:"Cancelar"}),void 0),Z?(0,a.jsx)(E.Z,{variant:"indeterminate"},void 0):(0,a.jsx)(m.Z,Object.assign({color:"secondary",onClick:()=>{console.log("Color Select: ",y),O(!0),(0,X.Q)(x).then((e=>{v((0,C.a)()),O(!1),i()})).catch((e=>{console.log(e),O(!1)}))},autoFocus:!0},{children:"Confirmar"}),void 0)]},void 0)]}),void 0)},ne=({pl:e,map:i,isChecked:t})=>{const{selectPolygon:n}=(0,l.C)(x.C2),d=(0,l.T)(),[c,r]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.Z,Object.assign({onClick:()=>{3===e.state||(e=>{if(d((0,x.jY)(e)),t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}})(e)},selected:!0,dense:!0,button:!0,style:{backgroundColor:"white"}},{children:(0,a.jsxs)(s.Z,Object.assign({elevation:3===e.state?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:t?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,a.jsx)(g.Z,{disabled:3===e.state,checked:"3"!==e.state.toString()&&t,inputProps:{"aria-label":"secondary checkbox"}},void 0),(0,a.jsx)(T.Z,{style:{textDecorationLine:(e.state,"")},primary:(0,a.jsx)(h.Z,Object.assign({variant:"subtitle2",style:{color:3===e.state?"gray":"black",fontWeight:(e.state,"normal")}},{children:e.nameProject?`Project: ${e.nameProject}`:`Nombre: ${e.name}`}),void 0),secondary:(0,a.jsx)(h.Z,Object.assign({style:{color:3===e.state?"gray":"",fontWeight:3===e.state?"normal":"initial"},variant:"subtitle2"},{children:e.nameProject?`Name: ${e.name}`:""}),void 0)},void 0),(0,a.jsx)(S.Z,Object.assign({onClick:()=>{r(!0)}},{children:(0,a.jsx)(K.Z,{fontSize:"small",style:{color:t?"white":""}},void 0)}),void 0)]}),void 0)}),e.id),c&&(0,a.jsx)(ae,{open:c,handleClose:()=>{r(!1)},handleConfirm:()=>{r(!1)},polygon:e},void 0)]},void 0)};const se=(0,c.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),oe=({polygons:e,map:i,isChecked:t,setIsChecked:n})=>{const{selectPolygon:s}=(0,l.C)(x.C2),{status:d}=(0,l.C)(H.$e),[c,g]=(0,o.useState)([]),[h,j]=o.useState(!1),v=(0,l.T)(),u=se();(0,o.useEffect)((()=>{v(t?(0,x.DY)(c.filter((e=>3!==e.state))):(0,x.DY)([]))}),[t]),(0,o.useEffect)((()=>{setTimeout((()=>{s.map((e=>{const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a),f.T.addSourceToMap(i,a,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),f.T.addLayerToMap(i,t,a,"line","#EAF772")}))}),10)}),[s]);const p=e=>{const t=s.find((i=>e.id===i.id));if(t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}return!!t};(0,o.useEffect)((()=>{e.length>0&&g(e)}),[e]);const Z=(0,o.useCallback)((i=>{if(i){const t=i.target?i.target.value.toUpperCase():"";console.log("filter",t),g(e.filter((e=>e.name.toUpperCase().includes(t)||e.nameProject&&e.nameProject.toUpperCase().includes(t))))}}),[e]),w=(0,o.useCallback)((()=>{g(e)}),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O.V,{placeholder:"Buscar por proyecto, polígon o mineral ",functionFilter:Z,functionCancel:w},void 0),(0,a.jsx)(b.Z,Object.assign({className:u.listItem,dense:!0},{children:(0,a.jsx)(r.Z,Object.assign({elevation:0,style:{overflow:"scroll",height:"75vh"}},{children:c.map((e=>(0,a.jsx)(ne,{pl:e,map:i,isChecked:p(e)},e.id)))}),void 0)}),void 0),(0,a.jsx)(r.Z,Object.assign({elevation:0,style:{}},{children:s.length>0&&(0,a.jsx)(m.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{j(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"}),void 0)}),void 0),(0,a.jsx)(k.a,Object.assign({open:h,handleClose:()=>{j(!1),v((0,x.DY)([])),v((0,x.fn)())},handleConfirm:()=>{return e=void 0,i=void 0,a=function*(){yield v((0,H.if)(s)),v((0,C.a)()),v((0,x.fn)()),j(!1)},new((t=void 0)||(t=Promise))((function(n,s){function o(e){try{d(a.next(e))}catch(e){s(e)}}function l(e){try{d(a.throw(e))}catch(e){s(e)}}function d(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,l)}d((a=a.apply(e,i||[])).next())}));var e,i,t,a},title:"¿Esta seguro ?"},{children:(0,a.jsx)(y.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}),void 0)}),void 0)]},void 0)},le=({cellStock:e,map:i,isChecked:t})=>{const n=(0,l.T)(),[d,c]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.Z,Object.assign({selected:!0,dense:!0,button:!0,onClick:()=>{"3"===e.state.toString()||(e=>{if(n((0,x.xk)(e)),t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}})(e)},style:{backgroundColor:"white"}},{children:(0,a.jsxs)(s.Z,Object.assign({elevation:"3"===e.state.toString()?2:4,style:{display:"flex",padding:"5px",height:"100%",width:"100%",backgroundImage:t?"radial-gradient(circle, rgba(233,183,88,1) 68%, rgba(242,167,3,1) 100%)":"",backgroundColor:3===e.state?"#f1c3c34a":""}},{children:[(0,a.jsx)(g.Z,{disabled:"3"===e.state.toString(),checked:"3"!==e.state.toString()&&t,inputProps:{"aria-label":"secondary checkbox"}},void 0),(0,a.jsx)(T.Z,{primary:`Nombre: ${e.name}`},void 0),(0,a.jsx)(S.Z,Object.assign({onClick:()=>{c(!0)}},{children:(0,a.jsx)(F.Z,{fontSize:"small"},void 0)}),void 0)]}),void 0)}),e.id),d&&(0,a.jsx)(M,{typeDownload:z.TypeDownload.STOCK,open:d,setOpen:c,cell:e},void 0)]},void 0)};const de=(0,c.Z)((e=>({listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}}))),ce=({cellsStock:e,map:i,isChecked:t,setIsChecked:s,type:d})=>{const{selectStock:c}=(0,l.C)(x.C2),[g,h]=o.useState(!1),j=(0,l.T)(),v=de(),{status:u}=((0,o.useState)(!1),(0,l.C)(Z.Lo)),[p,w]=(0,o.useState)([]);(0,o.useEffect)((()=>{j(t?(0,x.I5)(p.filter((e=>3!==e.state))):(0,x.I5)([]))}),[t]),(0,o.useEffect)((()=>{setTimeout((()=>{c.map((e=>{const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a),f.T.addSourceToMap(i,a,e.pointList.map((e=>[e.longitude,e.latitude,e.altitude]))),f.T.addLayerToMap(i,t,a,"line","#EAF772")}))}),10)}),[c]);const T=e=>{const t=c.find((i=>e.id===i.id));if(t){const t=`layer_${e.id}`,a=`source_${e.id}`;f.T.getLayer(i,t)&&f.T.removeFeature(i,t,a)}return!!t};(0,o.useEffect)((()=>{e.length>0&&w(e)}),[e]);const S=(0,o.useCallback)((i=>{if(i){const t=i.target?i.target.value.toUpperCase():"";w(e.filter((e=>e.name.toUpperCase().includes(t))))}}),[e]),F=(0,o.useCallback)((()=>{w(e)}),[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Z,Object.assign({elevation:0,style:{overflow:"auto"}},{children:[(0,a.jsx)(O.V,{placeholder:"Buscar por nombre",functionFilter:S,functionCancel:F},void 0),(0,a.jsx)(b.Z,Object.assign({className:v.listItem,dense:!0},{children:(0,a.jsx)(n.Z,Object.assign({container:!0,direction:"column",justifyContent:"flex-end",style:{flex:1}},{children:(0,a.jsx)(n.Z,Object.assign({item:!0,style:{height:"77vh"}},{children:p.map((e=>(0,a.jsx)(le,{cellStock:e,map:i,isChecked:T(e)},e.id)))}),void 0)}),void 0)}),void 0)]}),void 0),c.length>0&&(0,a.jsx)(m.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{h(!0)},style:{width:"90%",margin:"10px"}},{children:"Finalizar Seleccionados"}),void 0),(0,a.jsx)(k.a,Object.assign({open:g,handleClose:()=>{h(!1)},handleConfirm:()=>{return e=void 0,i=void 0,a=function*(){h(!1),yield j((0,Z.iC)({cells:c,type:d})),j((0,C.a)()),j((0,x.fn)()),h(!1)},new((t=void 0)||(t=Promise))((function(n,s){function o(e){try{d(a.next(e))}catch(e){s(e)}}function l(e){try{d(a.throw(e))}catch(e){s(e)}}function d(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,l)}d((a=a.apply(e,i||[])).next())}));var e,i,t,a},title:"Area you sure?"},{children:(0,a.jsx)(y.Z,Object.assign({severity:"warning"},{children:"Confirma para finalizar los poligonos seleccionados"}),void 0)}),void 0)]},void 0)};const re=(0,c.Z)((e=>({root:{flex:1,backgroundColor:"#FDF8EF",display:"flex",height:"800px",width:"100%",minWidth:"1300px"},paper:{height:"100vh",width:"100%",textAlign:"center",justifyContent:"center",minWidth:"250px"},tittle:{textAlign:"center"},paperMap:{backgroundColor:"#FDF8EF",width:"100%",height:"800px",padding:"10px",textAlign:"center",minWidth:"900px"},tabs:{borderRight:`1px solid ${e.palette.divider}`,width:"100%"},tab:{minWidth:10,padding:1,paddingTop:8,paddingBottom:8,width:"100%"},buttonTab:{writingMode:"vertical-rl"},listItem:{"& .MuiListItem-gutters":{paddingLeft:"7px",paddingRight:"7px"}}})));function ge(e){const{children:i,value:t,index:n}=e,s=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)i.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}(e,["children","value","index"]);return(0,a.jsx)("div",Object.assign({role:"tabpanel",hidden:t!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,style:{flex:1}},s,{children:t===n&&i}),void 0)}function he(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const je=({map:e})=>{const{selectPolygon:i,selectDme:t,selectPad:s,selectStock:c}=(0,l.C)(x.C2),b=(0,l.T)(),{polygonList:m,dmeCellList:y,padCellList:f,stockCellList:C,routeList:Z}=(0,l.C)(d.WD),[O,k]=(0,o.useState)(!1),w=re(),[T,S]=(0,p._)("index_tab_settind_polygon",0);return(0,a.jsx)("div",{children:(0,a.jsxs)(r.Z,Object.assign({elevation:1,className:w.paper},{children:[(0,a.jsxs)(n.Z,Object.assign({container:!0,direction:"row",alignItems:"center"},{children:[(0,a.jsx)(g.Z,{indeterminate:i.length>0&&m.length!=i.length||t.length>0&&y.length!=t.length||s.length>0&&f.length!=s.length||c.length>0&&C.length==c.length||void 0,checked:O,onChange:e=>{k(e.target.checked),m.length===i.length&&k(e.target.checked),C.length!==c.length&&k(e.target.checked)}},void 0),(0,a.jsx)(h.Z,Object.assign({className:w.tittle},{children:"Selected Polygon"}),void 0)]}),void 0),(0,a.jsxs)(n.Z,Object.assign({container:!0,justifyContent:"space-between",alignItems:"flex-start",wrap:"nowrap"},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0},{children:(0,a.jsxs)(j.Z,Object.assign({orientation:"vertical",variant:"scrollable",value:T,indicatorColor:"primary",textColor:"primary",onChange:(e,i)=>{S(i),b((0,x.fn)()),k(!1)},"aria-label":"horizontal tabs",className:w.tabs},{children:[(0,a.jsx)(v.Z,Object.assign({className:w.tab,label:(0,a.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"TAJO"}),void 0)},he(0)),void 0),(0,a.jsx)(v.Z,Object.assign({className:w.tab,label:(0,a.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"DME"}),void 0)},he(1)),void 0),(0,a.jsx)(v.Z,Object.assign({className:w.tab,label:(0,a.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"PAD"}),void 0)},he(2)),void 0),(0,a.jsx)(v.Z,Object.assign({className:w.tab,label:(0,a.jsx)(h.Z,Object.assign({variant:"caption",className:w.buttonTab},{children:"STOCKs"}),void 0)},he(3)),void 0)]}),void 0)}),void 0),(0,a.jsxs)(n.Z,Object.assign({item:!0,container:!0,style:{padding:8}},{children:[(0,a.jsx)(ge,Object.assign({value:T,index:0},{children:(0,a.jsx)(oe,{polygons:m,map:e.current,isChecked:O,setIsChecked:k},void 0)}),void 0),(0,a.jsx)(ge,Object.assign({value:T,index:1},{children:(0,a.jsx)(W,{cellsDme:y,map:e.current,isChecked:O,type:u.NZ.DME},void 0)}),void 0),(0,a.jsx)(ge,Object.assign({value:T,index:2},{children:(0,a.jsx)(Y,{cellsPad:f,map:e.current,isChecked:O,setIsChecked:k,type:u.NZ.PAD},void 0)}),void 0),(0,a.jsx)(ge,Object.assign({value:T,index:3},{children:(0,a.jsx)(ce,{cellsStock:C,map:e.current,isChecked:O,setIsChecked:k,type:u.NZ.STOCK},void 0)}),void 0)]}),void 0)]}),void 0)]}),void 0)},void 0)},ve=(0,o.lazy)((()=>Promise.all([t.e(820),t.e(771)]).then(t.bind(t,77771)))),ue=()=>{const{polygonList:e}=(0,l.C)(d.WD),i=(0,o.useRef)(null);return(0,a.jsxs)(n.Z,Object.assign({container:!0,spacing:1,style:{height:"80vh"}},{children:[(0,a.jsx)(n.Z,Object.assign({item:!0,xs:12,md:4,xl:3},{children:(0,a.jsx)(je,Object.assign({},{map:i}),void 0)}),void 0),(0,a.jsx)(n.Z,Object.assign({item:!0,xs:12,md:8,xl:9},{children:(0,a.jsx)(s.Z,Object.assign({elevation:3,style:{height:"100%"}},{children:(0,a.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,a.jsx)(ve,{mapRef:i},void 0)}),void 0)}),void 0)}),void 0)]}),void 0)},pe=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(ue,{},void 0)},void 0)}}]);