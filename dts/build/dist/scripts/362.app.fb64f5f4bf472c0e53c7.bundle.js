(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[362],{69711:(e,t,i)=>{e.exports=i.p+"fcc811ae2297d46be106267335e25c28.svg"},34250:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var s=i(85893),n=i(67294),o=i(41120),a=i(87623),r=i(8920),l=i(76211),c=i(33758);const d=(0,o.Z)((e=>(0,a.Z)({fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}})));function h({actionClick:e,Icon:t,visible:i,disabled:o,right:a,color:h,keyAction:g}){const u=d(),v=(0,r.Z)();(0,n.useEffect)((()=>{const t=t=>{console.log(t.key),t.key!==(null==g?void 0:g.toUpperCase())&&t.key!==(null==g?void 0:g.toLocaleLowerCase())&&t.key!==g||e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[]);const m={enter:v.transitions.duration.enteringScreen,exit:v.transitions.duration.leavingScreen};return(0,s.jsx)(l.Z,Object.assign({in:i,timeout:m,unmountOnExit:!0},{children:(0,s.jsx)(c.Z,Object.assign({disabled:o,onClick:e,className:u.fab,style:{right:a},size:"small",color:h||"primary"},{children:(0,s.jsx)(t,{},void 0)}),void 0)}),void 0)}},10646:(e,t,i)=>{"use strict";i.d(t,{l:()=>s});const s=e=>[`${e.getFullYear()}-${`0${e.getMonth()+1}`.substr(-2)}-${`0${e.getDate()}`.substr(-2)}`]},88093:(e,t,i)=>{"use strict";i.d(t,{R:()=>s});const s=()=>{var e=new Date;return e.getHours(),{dateShift:e.getHours()>=0&&e.getHours()<7?new Date(e.getTime()-864e5):e}}},40903:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>W});var s=i(85893),n=i(41749),o=i(10046),a=i(67294),r=i(18463),l=i(94697),c=i(33901),d=i(79912);const h=({title:e,icon:t,subheader:i,children:n})=>(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(l.Z,{style:{color:"#0069AA"},avatar:(0,s.jsx)(c.Z,{variant:"square",src:t},void 0),title:e,subheader:i},void 0),(0,s.jsx)(d.Z,{children:n},void 0)]},void 0);var g=i(47229),u=i(73855),v=i(98808);const m=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,u.C)(v.Ig),[n,o]=(0,a.useState)([]),[r,l]=(0,a.useState)([]),[c,d]=(0,a.useState)([]),[h,m]=(0,a.useState)([]),[x,p]=(0,a.useState)([]);(0,a.useEffect)((()=>{(new Date).getHours(),t&&(o(e.day.hourList),l(e.day.padList),d(e.day.stockList),m(e.day.dmeList),p(e.day.lenTruckList)),i&&(o(e.night.hourList),l(e.night.padList),d(e.night.stockList),m(e.night.dmeList),p(e.night.lenTruckList))}),[e,t,i]);const j=(e=>{const{categorie:t,pad:i,stock:s,dme:n,trucks:o,op:a}=e,{id:r,padName:l,stockName:c,dmeName:d,trucksName:h}=a;return{stateChart:{series:[{name:l,type:"column",data:i},{name:c,type:"column",data:s},{name:d,type:"column",data:n},{name:h,type:"line",data:o}],options:{colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},chart:{id:"bar-"+r,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},labels:t,xaxis:{title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],legend:{position:"top",offsetY:10}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:n,pad:r,stock:c,dme:h,trucks:x,op:{id:"Toneladas",padName:"MINERAL",stockName:"STOCK",dmeName:"DESMONTE",trucksName:"CAMIONES"}});return(0,s.jsx)("div",{children:(0,s.jsx)(g.Z,{options:j.stateChart.options,series:j.stateChart.series,type:"line",height:"413"},void 0)},void 0)};var x=i(90179),p=i(43856);const j=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,u.C)(v.Ig),[n,o]=(0,a.useState)([]),[r,l]=(0,a.useState)([]);(0,a.useEffect)((()=>{t&&(o(e.day.hourList),l(e.day.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList}))))),i&&(o(e.night.hourList),l(e.night.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList})))))}),[e,t,i]);const c=(e=>{const{categorie:t,op:i,seriesEx:s}=e,{id:n}=i;return{stateChart:{series:s,options:{colors:["#DB0A5B","#FF6322","#FFBB04","#2ECC71","#00B0FF","#BC50FA","#68E1FF","#754B10","#003F63","#FFA700","#64732F","#D94625"],chart:{id:"bar-"+n,height:350},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:t,title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],tooltip:{shared:!1,y:{formatter:function(e){return e+" Toneladas"}}},fill:{opacity:1},legend:{position:"top",offsetY:10}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:n,seriesEx:r,op:{id:"excavator"}});return(0,s.jsx)("div",{children:(0,s.jsx)(g.Z,{options:c.stateChart.options,series:c.stateChart.series,type:"bar",height:"413"},void 0)},void 0)},b=()=>{const{reportPerformancePerHour:e}=(0,u.C)(v.Ig),{tonnePerTruck:t}=e.day,i=(e=>{const{pad:t,stock:i,dme:s,goalPad:n,goalStock:o,goalDme:a,op:r}=e,{id:l,padName:c,stockName:d,dmeName:h}=r;return{stateChart:{series:[{name:"Actual",data:[{x:c,y:t,goals:[{name:d,value:n,strokeWidth:5,strokeColor:"#008000"}]},{x:d,y:i,goals:[{name:"META",value:o,strokeWidth:5,strokeColor:"#008000"}]},{x:h,y:s,goals:[{name:"META",value:a,strokeWidth:5,strokeColor:"#008000"}]}]}],options:{chart:{id:"bar-"+l,height:350},plotOptions:{bar:{columnWidth:"60%",horizontal:!0}},colors:["#000"],dataLabels:{enabled:!0,formatter:function(e,t){const i=t.w.config.series[t.seriesIndex].data[t.dataPointIndex].goals;return i&&i.length?`${e} / ${i[0].value}`:e}},legend:{show:!0,showForSingleSeries:!0,customLegendItems:["PRODUCCION","META"],markers:{fillColors:["#000","#008000"]}}}}}})({pad:e.day.lenCyclePad*t+e.night.lenCyclePad*t,stock:e.day.lenCycleStock*t+e.night.lenCycleStock*t,dme:e.day.lenCycleDme*t+e.night.lenCycleDme*t,goalPad:0,goalStock:0,goalDme:0,op:{id:"producction",padName:"MINERAL",stockName:"STOCK",dmeName:"DESMONTE"}});return(0,s.jsx)("div",{children:(0,s.jsx)(g.Z,{options:i.stateChart.options,series:i.stateChart.series,type:"bar",height:"282"},void 0)},void 0)};var y=i(22318),f=i(2357);const k=({shift:e,lenCycleDme:t,lenCyclePad:i,lenCycleStock:o,label:l,onClick:c,isSelect:d})=>{const[h,g]=(0,a.useState)(""),[u,v]=(0,a.useState)(0),m=(new Date).getHours();return(0,a.useEffect)((()=>{e!=f.Shift.DAY&&m>=7&&m<19&&g("rgb(75 75 75 / 20%)"),e!=f.Shift.NIGHT&&m>=18&&g("rgb(75 75 75 / 20%)"),v(1==d?5:0)}),[c]),(0,s.jsx)(r.Z,Object.assign({onClick:c,style:{flex:"auto"},elevation:u},{children:(0,s.jsxs)(n.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0},{children:(0,s.jsxs)(y.Z,Object.assign({style:{color:"#0069AA"},gutterBottom:!0,variant:"h6",component:"h2"},{children:[l," "]}),void 0)}),void 0),(0,s.jsxs)(n.Z,Object.assign({container:!0,item:!0,spacing:2,justifyContent:"space-around"},{children:[(0,s.jsxs)(n.Z,Object.assign({item:!0},{children:[(0,s.jsx)(y.Z,Object.assign({style:{color:"#069B15"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Desmonte"}),void 0),(0,s.jsx)(y.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:t}),void 0)]}),void 0),(0,s.jsxs)(n.Z,Object.assign({item:!0},{children:[(0,s.jsx)(y.Z,Object.assign({style:{color:"#F1C012"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Stock"}),void 0),(0,s.jsx)(y.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:o}),void 0)]}),void 0),(0,s.jsxs)(n.Z,Object.assign({item:!0},{children:[(0,s.jsx)(y.Z,Object.assign({style:{color:"#FF0808"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Mineral"}),void 0),(0,s.jsx)(y.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:i}),void 0)]}),void 0)]}),void 0)]}),void 0)}),void 0)};var C=i(77349),Z=i(42799),O=i(36233),S=i(43703),D=i(11640),I=i(66598),N=i(8230),L=i(41120),w=i(87623);const E=(0,L.Z)((()=>(0,w.Z)({container:{display:"flex",width:"100%",background:"inherit",justifyContent:"center",zIndex:-1},buttonWrapper:{display:"flex",alignItems:"flexEnd",background:"inherit"},button:{border:"none",textDecoration:"none",cursor:"pointer",borderRadius:"50%",width:"40px",height:"40px",color:"white",fontSize:"20px",fontWeight:"bold",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",padding:0,marginBottom:"13px"},dateListScrollable:{display:"flex",overflowX:"hidden",scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},monthContainer:{display:"flex",flexDirection:"column",cursor:"pointer",padding:" 2px",margin:"2px"},monthYearLabel:{alignSelf:"flex-start",zIndex:3,fontSize:"15px",fontWeight:"bold",position:"sticky",top:" 10px",left:"0",margin:"0 10px"},dateDayItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",margin:"0 0 0 5px",width:"32px",flexShrink:0},dateDayItemMarked:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",margin:" 0 0 0 10px",width:" 32px",height:"100%",flexShrink:0},daysContainer:{display:"flex",zIndex:3,marginTop:"10px"},dayLabel:{fontSize:"12px",margin:"4px 0 0 0"},dateLabel:{fontSize:"18px"},markedLabel:{marginTop:"10px"}}))),T=({startDate:e,lastDate:t,selectDate:i,getSelectedDay:n,primaryColor:o,labelFormat:r,marked:l})=>{const[c,d]=(0,a.useState)(null);var h={fontWeight:"bold",width:"45px",height:"45px",borderRadius:"50%",border:`2px solid ${o}`,color:o};const g={color:o},u={color:"#8c3737",padding:"2px",fontSize:12},v=e=>(0,Z.Z)(e,c)?h:null,m=e=>{var t;const i=E();let n=l.find((t=>(0,Z.Z)(t.date,e)));if(n){if(!(null==n?void 0:n.marked))return;return(0,s.jsx)("div",Object.assign({style:Object.assign({},null!==(t=null==n?void 0:n.style)&&void 0!==t?t:u),className:i.markedLabel},{children:n.text}),void 0)}return""},x=e=>{d(e),n&&n(e)};return(0,a.useEffect)((()=>{n&&n(i||e)}),[]),(0,a.useEffect)((()=>{i&&((0,Z.Z)(c,i)||(d(i),setTimeout((()=>{let e=document.getElementById("selected");e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}),20)))}),[i]),(0,s.jsx)(a.Fragment,{children:(()=>{const i=E(),n=[];let o=[];for(let d=0;d<=(0,O.Z)(t,e);d++){let h,u;const p=(0,S.Z)((0,D.Z)(e,d));h=0===d?Number((0,I.Z)(e,"d"))-1:0,u=d===(0,O.Z)(t,e)?Number((0,I.Z)(t,"d")):Number((0,I.Z)((0,N.Z)(p),"d"));for(let e=h;e<u;e++){let t=(0,C.Z)(p,e);console.log(),o.push((0,s.jsxs)("div",Object.assign({id:(a=t,(0,Z.Z)(a,c)?"selected":""),className:l?i.dateDayItemMarked:i.dateDayItem,style:v(t),onClick:()=>x(t)},{children:[(0,s.jsx)("div",Object.assign({className:i.dayLabel},{children:(0,I.Z)(t,"E")}),void 0),(0,s.jsx)("div",Object.assign({className:i.dateLabel},{children:(0,I.Z)(t,"d")}),void 0),m(t)]}),t.getTime()))}n.push((0,s.jsxs)("div",Object.assign({className:i.monthContainer},{children:[(0,s.jsx)("span",Object.assign({className:i.monthYearLabel,style:g},{children:(0,I.Z)(p,r||"MMMM yyyy")}),void 0),(0,s.jsx)("div",Object.assign({className:i.daysContainer},{children:o}),void 0)]}),p.getTime())),o=[]}var a;return(0,s.jsx)("div",Object.assign({id:"container",className:i.dateListScrollable},{children:n}),void 0)})()},void 0)},A=({startDate:e,lastDate:t,selectDate:i,getSelectedDay:n,primaryColor:o,labelFormat:r})=>{const[l,c]=(0,a.useState)(null),d=o.replace(/[^\d,]/g,"").split(","),h={borderRadius:"0.7rem",background:`${o}`,color:Math.round((299*parseInt(d[0])+587*parseInt(d[1])+114*parseInt(d[2]))/1e3)>125?"black":"white"},g=e=>(0,Z.Z)(e,l)?h:null,u=E(),v=e=>{c(e),n&&n(e)};return(0,a.useEffect)((()=>{n&&n(i||e)}),[]),(0,a.useEffect)((()=>{i&&((0,Z.Z)(l,i)||(c(i),setTimeout((()=>{let e=document.getElementById("selected");e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}),20)))}),[i]),(0,s.jsx)(a.Fragment,{children:(()=>{const i=[];for(let o=0;o<=(0,O.Z)(t,e);o++){const t=(0,S.Z)((0,D.Z)(e,o));i.push((0,s.jsx)("div",Object.assign({id:(n=t,(0,Z.Z)(n,l)?"selected":""),className:u.monthContainer,style:g(t),onClick:()=>v(t)},{children:(0,s.jsx)("span",Object.assign({className:u.monthYearLabel},{children:(0,I.Z)(t,r||"MMMM yyyy")}),void 0)}),t.getTime()))}var n;return(0,s.jsx)("div",Object.assign({id:"container",className:u.dateListScrollable},{children:i}),void 0)})()},void 0)},P=e=>{const t=e.color?e.color.indexOf("rgb")>0?e.color:(i=e.color,(n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i))?"rgb("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+")":null):"rgb(54, 105, 238)";var i,n;const o=e.startDate||new Date,a=(0,C.Z)(o,e.days||90);let r={zIndex:2},l={background:t},c=T;"month"===e.type&&({zIndex:5},c=A,l={background:t});const d=E();return(0,s.jsx)("div",Object.assign({className:d.container},{children:(0,s.jsx)(c,Object.assign({},e,{primaryColor:t,startDate:o,lastDate:a}),void 0)}),void 0)};var F=i(34250),B=i(10646),M=i(88093);const H=i(53292),z=i(69711),R=()=>{const e=(0,u.T)(),{statusReportPerformancePerHour:t,reportPerformancePerHour:i}=(0,u.C)(v.Ig),{isSelectDay:r,isSelectNight:l}=(0,u.C)(v.Ig),{lenCycleDme:c,lenCyclePad:d,lenCycleStock:g,tonnePerTruck:y}=i.day;var C=new Date,Z=new Date(C.getTime()-2592e6);const{dateShift:O}=(0,M.R)(),[S,D]=(0,a.useState)(O),[I]=(0,B.l)(S);function N(){const t={dateStart:`${I}T00:00`,dateEnd:`${I}T00:00`};e((0,v.D2)(t))}(0,a.useEffect)((()=>{N()}),[S]),(0,a.useEffect)((()=>{O.getHours()>=7&&O.getHours()<19?e((0,v.Sv)(!0)):e((0,v.kQ)(!0))}),[]);const L=e=>{D(e)};return(0,a.useEffect)((()=>(setInterval((()=>{const e=new Date;0===e.getMinutes()&&(N(),L(e),console.log("set time"))}),3e4),()=>{})),[]),(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(n.Z,Object.assign({container:!0},{children:(0,s.jsx)(P,{startDate:Z,days:31,marked:[{}],selectDate:S,getSelectedDay:L,color:"#024e8c"},void 0)}),void 0),(0,s.jsxs)(n.Z,Object.assign({container:!0,direction:"row"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,lg:6},{children:(0,s.jsx)(o.Z,Object.assign({p:3},{children:(0,s.jsx)(h,Object.assign({title:"TONELAJE POR HORA (Tn/Hr)",icon:z},{children:(0,s.jsx)(m,{},void 0)}),void 0)}),void 0)}),void 0),(0,s.jsx)(n.Z,Object.assign({item:!0,lg:6},{children:(0,s.jsx)(o.Z,Object.assign({p:3},{children:(0,s.jsxs)(n.Z,Object.assign({container:!0,spacing:2},{children:[(0,s.jsxs)(n.Z,Object.assign({item:!0,container:!0,spacing:2,justifyContent:"space-between"},{children:[(0,s.jsx)(n.Z,Object.assign({item:!0,lg:6},{children:(0,s.jsx)(k,{onClick:function(){e((0,v.Sv)(!0)),e((0,v.kQ)(!1))},isSelect:r,shift:f.Shift.DAY,label:"DIA",lenCycleDme:c*y,lenCyclePad:d*y,lenCycleStock:g*y},void 0)}),void 0),(0,s.jsx)(n.Z,Object.assign({item:!0,lg:6},{children:(0,s.jsx)(k,{isSelect:l,onClick:function(){e((0,v.Sv)(!1)),e((0,v.kQ)(!0))},shift:f.Shift.NIGHT,label:"NOCHE",lenCycleDme:i.night.lenCycleDme*y,lenCyclePad:i.night.lenCyclePad*y,lenCycleStock:i.night.lenCycleStock*y},void 0)}),void 0)]}),void 0),(0,s.jsx)(n.Z,Object.assign({item:!0,lg:12},{children:(0,s.jsx)(h,Object.assign({title:"PRODUCCIÓN TOTAL POR DIA",icon:""},{children:(0,s.jsx)(b,{},void 0)}),void 0)}),void 0)]}),void 0)}),void 0)}),void 0),(0,s.jsx)(n.Z,Object.assign({item:!0,lg:12},{children:(0,s.jsx)(o.Z,Object.assign({p:3},{children:(0,s.jsx)(h,Object.assign({title:"RENDIMIENTO POR EXCAVADORA (Tn/Hr)",icon:H},{children:(0,s.jsx)(j,{},void 0)}),void 0)}),void 0)}),void 0)]}),void 0),(0,s.jsx)(F.Z,{visible:"done"===t,actionClick:N,Icon:x.Z,disabled:"done"!=t,color:"secondary",right:8,keyAction:"R"},void 0),(0,s.jsx)(F.Z,{visible:"done"===t,actionClick:function(){const t={dateStart:`${I}T00:00`,dateEnd:`${I}T00:00`};e((0,v.BF)(t))},Icon:p.Z,disabled:"done"!=t,color:"secondary",right:70},void 0)]},void 0)};var $=i(16281);function W(){return(0,s.jsxs)("div",{children:[(0,s.jsx)($.h,{title:"Dashboard",notificationPannel:!0},void 0),(0,s.jsx)(R,{},void 0)]},void 0)}},16281:(e,t,i)=>{"use strict";i.d(t,{h:()=>k});var s=i(85893),n=i(45258),o=i(28358),a=i(282),r=i(22318),l=i(43471),c=i(5977),d=i(55517),h=i(17812),g=i(96617),u=i(73637),v=i(79895),m=i(16575),x=i(51972),p=i(67294),j=i(73855),b=i(45855);const y=({title:e,content:t})=>(0,s.jsxs)("div",Object.assign({style:{paddingBottom:"8px",paddingTop:"8px"}},{children:[(0,s.jsxs)(r.Z,Object.assign({variant:"subtitle1"},{children:[(0,s.jsx)(m.Z,{style:{fontSize:"14px",marginRight:"4px"}},void 0),e]}),void 0),(0,s.jsx)(r.Z,Object.assign({variant:"body1"},{children:t}),void 0),(0,s.jsx)(d.Z,{},void 0)]}),void 0),f=({})=>{var e,t,i;const[n,o]=(0,p.useState)(null),[a,l]=(0,p.useState)(!1),{notificationsHeader:c}=(0,j.C)(b.Af),d=(0,j.T)();(0,p.useEffect)((()=>{d((0,b.pK)())}),[]);const m=a&&Boolean(n)?"transition-popper":void 0;return(0,s.jsxs)("div",Object.assign({style:{display:"flex",flexDirection:"row",alignItems:"center",width:"8%",marginRight:"4px"}},{children:["Notifications",(0,s.jsx)(h.Z,Object.assign({color:(null===(e=c.notificationsList)||void 0===e?void 0:e.length)>0?"primary":"inherit",onClick:e=>{o(e.currentTarget),l((e=>!e))}},{children:(0,s.jsxs)("div",Object.assign({style:{margin:"4px"}},{children:[(0,s.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{color:"white",zIndex:1,position:"absolute",justifyContent:"right",marginLeft:"18px"}},{children:(null===(t=c.notificationsList)||void 0===t?void 0:t.length)>0?null===(i=c.notificationsList)||void 0===i?void 0:i.length:""}),void 0),(0,s.jsx)(x.Z,{},void 0)]}),void 0)}),void 0),(0,s.jsx)("div",Object.assign({style:{zIndex:1}},{children:(0,s.jsx)(g.Z,Object.assign({id:m,open:a,anchorEl:n,transition:!0},{children:({TransitionProps:e})=>{var t,i,n;return(0,s.jsx)(u.Z,Object.assign({},e,{timeout:350},{children:(0,s.jsxs)(v.Z,Object.assign({elevation:3,style:{width:"300px",height:(null===(t=c.notificationsList)||void 0===t?void 0:t.length)>10?"87vh":"100%",padding:"8px",overflow:"scroll"}},{children:[0===(null===(i=c.notificationsList)||void 0===i?void 0:i.length)&&(0,s.jsx)(s.Fragment,{children:"Not Have a new Notification"},void 0),null===(n=c.notificationsList)||void 0===n?void 0:n.map(((e,t)=>(0,s.jsx)(y,{title:e.title,content:e.message},t)))]}),void 0)}),void 0)}}),void 0)}),void 0)]}),void 0)},k=({title:e,positionContainer:t,notificationPannel:i})=>{const d=t||"sticky",h=(0,c.k6)();return(0,s.jsx)(n.Z,Object.assign({position:d,color:"secondary",style:{display:"flex"},elevation:0},{children:(0,s.jsxs)("div",Object.assign({style:{display:"flex"}},{children:[(0,s.jsxs)(o.Z,Object.assign({style:{width:"90%"}},{children:[(0,s.jsx)(a.Z,{size:"small",startIcon:(0,s.jsx)(l.Z,{color:"action",style:{color:"#fff"}},void 0),onClick:()=>{h.goBack()}},void 0),(0,s.jsx)(r.Z,Object.assign({variant:"h6"},{children:e}),void 0)]}),void 0),i&&(0,s.jsx)(f,{},void 0)]}),void 0)}),void 0)}}}]);