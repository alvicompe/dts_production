"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[362],{92335:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var a=i(85893),s=i(41749),o=i(60395),n=i(67294),l=i(18463),d=i(94697),r=i(22318),c=i(79912),u=i(33901);const v=({title:e,icon:t,subheader:i,children:s,customStyle:o})=>(0,a.jsx)(l.Z,{children:o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{style:{color:"#0069AA"},title:(0,a.jsx)(r.Z,Object.assign({variant:"subtitle1",style:{textAlign:"center",fontSize:"0.875rem"}},{children:e})),subheader:i}),(0,a.jsx)(c.Z,{children:s})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{style:{color:"#0069AA"},avatar:(0,a.jsx)(u.Z,{variant:"square",src:t}),title:e,subheader:i}),(0,a.jsx)(c.Z,{children:s})]})});var h=i(90179),y=i(43856),m=i(56731);const g=({shift:e,lenCycleDme:t,lenCyclePad:i,lenCycleStock:o,label:d,onClick:c,isSelect:u})=>{const[v,h]=(0,n.useState)(""),[y,g]=(0,n.useState)(0),x=(new Date).getHours();return(0,n.useEffect)((()=>{e!=m.Shift.DAY&&x>=7&&x<19&&h("rgb(75 75 75 / 20%)"),e!=m.Shift.NIGHT&&x>=18&&h("rgb(75 75 75 / 20%)"),g(1==u?5:0)}),[c]),(0,a.jsx)(l.Z,Object.assign({onClick:c,style:{flex:"auto"},elevation:y},{children:(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0},{children:(0,a.jsxs)(r.Z,Object.assign({style:{color:"#0069AA"},gutterBottom:!0,variant:"h6",component:"h2"},{children:[d," "]}))})),(0,a.jsxs)(s.Z,Object.assign({container:!0,item:!0,spacing:2,justifyContent:"space-around"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#FF0808"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Mineral"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:i}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#F1C012"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Stock"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:o}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#069B15"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Desmonte"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:t}))]}))]}))]}))}))};var x=i(73855),b=i(4650),p=i(38062),j=i(41120),C=i(35117),O=i(8920),Z=i(76211),k=i(33758),A=i(868);const S=(0,j.Z)((e=>(0,C.Z)({fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}})));function f({actionClick:e,Icon:t,visible:i,disabled:s,right:o,color:l,keyAction:d,title:r=""}){const c=S(),u=(0,O.Z)();(0,n.useEffect)((()=>{const t=t=>{console.log(t.key),t.key&&(t.key!==(null==d?void 0:d.toUpperCase())&&t.key!==(null==d?void 0:d.toLocaleLowerCase())&&t.key!==d||e())};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[]);const v={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen};return(0,a.jsx)(Z.Z,Object.assign({in:i,timeout:v,unmountOnExit:!0},{children:(0,a.jsx)(k.Z,Object.assign({disabled:s,onClick:e,className:c.fab,style:{right:o},size:"small",color:l||"primary"},{children:(0,a.jsx)(A.ZP,Object.assign({title:r},{children:(0,a.jsx)(t,{})}))}))}))}var F=i(10646),N=i(88093),L=i(47229),w=i(71768);const P=e=>{const{categorie:t,series:i,op:a,label:s}=e,{id:o}=a;return{stateChart:{series:[{name:s,data:i}],options:{colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},grid:{show:!1},chart:{id:"bar-"+o,stacked:!0,toolbar:{show:!1},zoom:{enabled:!1}},labels:t,xaxis:{categories:t,title:{text:"Dias"},labels:{show:!0}},yaxis:{title:{text:s},labels:{show:!1},min:0,max:100},tooltip:{shared:!1,y:{formatter:function(e){return e+" %"}}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},D=e=>{const{value:t,op:i}=e,{id:a}=i;return{stateChart:{series:[t],options:{colors:["#191970","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},chart:{id:"bar-"+a,stacked:!0,toolbar:{show:!1},offsetY:-20,sparkline:{enabled:!0}},tooltip:{shared:!1,y:{formatter:function(e){return e+" %"}}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.3,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},T=e=>{const{value:t,op:i}=e,{id:a}=i;return{stateChart:{series:[t],options:{colors:["#191970","#F1C012","#069B15","#191970"],dataLabels:{enabled:!1},chart:{id:"bar-"+a,stacked:!1,toolbar:{show:!1},offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px",formatter:function(e){return e+" Tn/h"}}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.3,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},I=()=>{const{days:e,seriesMechAvailability:t,seriesUtilization:i,seriesProductivity:o,todayMechacalAvailability:l,todayUtilization:d,todayProductivity:c}=(()=>{const{dataReport:e}=(0,x.C)(w.vs),{isSelectDay:t,isSelectNight:i}=(0,x.C)(b.Ig),[a,s]=(0,n.useState)([]),[o,l]=(0,n.useState)([]),[d,r]=(0,n.useState)([]),[c,u]=(0,n.useState)([]),[v,h]=(0,n.useState)(0),[y,m]=(0,n.useState)(0),[g,p]=(0,n.useState)(0);return(0,n.useEffect)((()=>{var a,o,n,d,c,v,y,g,x,b,j,C,O,Z,k,A,S,f,F,N,L,w,P,D,T,I,z,E;t&&(s(null===(o=null===(a=null==e?void 0:e.day)||void 0===a?void 0:a.truck)||void 0===o?void 0:o.labelDaysReportList),l(null===(d=null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.truck)||void 0===d?void 0:d.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(v=null===(c=null==e?void 0:e.day)||void 0===c?void 0:c.truck)||void 0===v?void 0:v.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(g=null===(y=null==e?void 0:e.day)||void 0===y?void 0:y.truck)||void 0===g?void 0:g.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(b=null===(x=null==e?void 0:e.day)||void 0===x?void 0:x.truck)||void 0===b?void 0:b.todayMechanicalAvailability.toFixed(1))),m(Number(null===(C=null===(j=null==e?void 0:e.day)||void 0===j?void 0:j.truck)||void 0===C?void 0:C.todayUtilization.toFixed(1))),p(Number(null===(Z=null===(O=null==e?void 0:e.day)||void 0===O?void 0:O.truck)||void 0===Z?void 0:Z.todayProductivity.toFixed(1)))),i&&(s(null===(A=null===(k=null==e?void 0:e.night)||void 0===k?void 0:k.truck)||void 0===A?void 0:A.labelDaysReportList),l(null===(f=null===(S=null==e?void 0:e.night)||void 0===S?void 0:S.truck)||void 0===f?void 0:f.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(N=null===(F=null==e?void 0:e.night)||void 0===F?void 0:F.truck)||void 0===N?void 0:N.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(w=null===(L=null==e?void 0:e.night)||void 0===L?void 0:L.truck)||void 0===w?void 0:w.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(D=null===(P=null==e?void 0:e.night)||void 0===P?void 0:P.truck)||void 0===D?void 0:D.todayMechanicalAvailability.toFixed(1))),m(Number(null===(I=null===(T=null==e?void 0:e.night)||void 0===T?void 0:T.truck)||void 0===I?void 0:I.todayUtilization.toFixed(1))),p(Number(null===(E=null===(z=null==e?void 0:e.night)||void 0===z?void 0:z.truck)||void 0===E?void 0:E.todayProductivity.toFixed(1))))}),[t,i,e]),{days:a,seriesMechAvailability:o,seriesUtilization:d,seriesProductivity:c,todayMechacalAvailability:v,todayUtilization:y,todayProductivity:g}})(),u=P({categorie:e,series:t,op:{id:"loadMechAvailability"},label:"Disp. Mecánica"}),v=P({categorie:e,series:i,op:{id:"loadUtilization"},label:"Utilización"}),h=P({categorie:e,series:o,op:{id:"loadDisponibility"},label:"Productividad"}),y=D({value:l,op:{id:"AvailabilityToday"}}),m=D({value:d,op:{id:"UtilizationToday"}}),g=T({value:c,op:{id:"ProductivityToday"}});return(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12,spacing:0},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:u.stateChart.options,series:u.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:y.stateChart.options,series:y.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:v.stateChart.options,series:v.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:m.stateChart.options,series:m.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:h.stateChart.options,series:h.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:g.stateChart.options,series:g.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]}))]}))},z=()=>{const{days:e,seriesMechAvailability:t,seriesUtilization:i,seriesProductivity:o,todayMechacalAvailability:l,todayUtilization:d,todayProductivity:c}=(()=>{const{dataReport:e}=(0,x.C)(w.vs),{isSelectDay:t,isSelectNight:i}=(0,x.C)(b.Ig),[a,s]=(0,n.useState)([]),[o,l]=(0,n.useState)([]),[d,r]=(0,n.useState)([]),[c,u]=(0,n.useState)([]),[v,h]=(0,n.useState)(0),[y,m]=(0,n.useState)(0),[g,p]=(0,n.useState)(0);return(0,n.useEffect)((()=>{var a,o,n,d,c,v,y,g,x,b,j,C,O,Z,k,A,S,f,F,N,L,w,P,D,T,I,z,E;t&&(s(null===(o=null===(a=null==e?void 0:e.day)||void 0===a?void 0:a.excavator)||void 0===o?void 0:o.labelDaysReportList),l(null===(d=null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.excavator)||void 0===d?void 0:d.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(v=null===(c=null==e?void 0:e.day)||void 0===c?void 0:c.excavator)||void 0===v?void 0:v.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(g=null===(y=null==e?void 0:e.day)||void 0===y?void 0:y.excavator)||void 0===g?void 0:g.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(b=null===(x=null==e?void 0:e.day)||void 0===x?void 0:x.excavator)||void 0===b?void 0:b.todayMechanicalAvailability.toFixed(1))),m(Number(null===(C=null===(j=null==e?void 0:e.day)||void 0===j?void 0:j.excavator)||void 0===C?void 0:C.todayUtilization.toFixed(1))),p(Number(null===(Z=null===(O=null==e?void 0:e.day)||void 0===O?void 0:O.excavator)||void 0===Z?void 0:Z.todayProductivity.toFixed(1)))),i&&(s(null===(A=null===(k=null==e?void 0:e.night)||void 0===k?void 0:k.excavator)||void 0===A?void 0:A.labelDaysReportList),l(null===(f=null===(S=null==e?void 0:e.night)||void 0===S?void 0:S.excavator)||void 0===f?void 0:f.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(N=null===(F=null==e?void 0:e.night)||void 0===F?void 0:F.excavator)||void 0===N?void 0:N.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(w=null===(L=null==e?void 0:e.night)||void 0===L?void 0:L.excavator)||void 0===w?void 0:w.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(D=null===(P=null==e?void 0:e.night)||void 0===P?void 0:P.excavator)||void 0===D?void 0:D.todayMechanicalAvailability.toFixed(1))),m(Number(null===(I=null===(T=null==e?void 0:e.night)||void 0===T?void 0:T.excavator)||void 0===I?void 0:I.todayUtilization.toFixed(1))),p(Number(null===(E=null===(z=null==e?void 0:e.night)||void 0===z?void 0:z.excavator)||void 0===E?void 0:E.todayProductivity.toFixed(1))))}),[t,i,e]),{days:a,seriesMechAvailability:o,seriesUtilization:d,seriesProductivity:c,todayMechacalAvailability:v,todayUtilization:y,todayProductivity:g}})(),u=P({categorie:e,series:t,op:{id:"HaulageMechAvailability"},label:"Disp. Mecánica"}),v=P({categorie:e,series:i,op:{id:"HaulageUtilization"},label:"Utilización"}),h=P({categorie:e,series:o,op:{id:"HaulageProductivity"},label:"Productividad"}),y=D({value:l,op:{id:"HaulageMechAvailabilityToday"}}),m=D({value:d,op:{id:"HaulageUtilizationToday"}}),g=T({value:c,op:{id:"HaulageProductivityToday"}});return(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12,spacing:0},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:u.stateChart.options,series:u.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:y.stateChart.options,series:y.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:v.stateChart.options,series:v.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:m.stateChart.options,series:m.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:h.stateChart.options,series:h.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:g.stateChart.options,series:g.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]}))]}))};function E(){return new Date}const M=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,x.C)(b.Ig),[s,o]=(0,n.useState)([]),[l,d]=(0,n.useState)([]),[r,c]=(0,n.useState)([]),[u,v]=(0,n.useState)([]),[h,y]=(0,n.useState)([]);(0,n.useEffect)((()=>{(new Date).getHours(),t&&(o(e.day.hourList),d(e.day.padList),c(e.day.stockList),v(e.day.dmeList),y(e.day.lenTruckList)),i&&(o(e.night.hourList),d(e.night.padList),c(e.night.stockList),v(e.night.dmeList),y(e.night.lenTruckList))}),[e,t,i]);const m=(e=>{const{categorie:t,pad:i,stock:a,dme:s,trucks:o,op:n}=e,{id:l,padName:d,stockName:r,dmeName:c,trucksName:u}=n;return{stateChart:{series:[{name:d,type:"column",data:i},{name:r,type:"column",data:a},{name:c,type:"column",data:s},{name:u,type:"line",data:o}],options:{colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},chart:{id:"bar-"+l,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},labels:t,xaxis:{title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],legend:{position:"bottom",markers:{radius:0}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:s,pad:l,stock:r,dme:u,trucks:h,op:{id:"Toneladas",padName:"MINERAL",stockName:"STOCK",dmeName:"DESMONTE",trucksName:"CAMIONES"}});return(0,a.jsx)(L.Z,{options:m.stateChart.options,series:m.stateChart.series,type:"line",height:"413"})},H=()=>{const{reportPerformancePerHour:e}=(0,x.C)(b.Ig),{tonnePerTruck:t}=e.day,i=(e=>{const{pad:t,stock:i,dme:a,goalPad:s,goalStock:o,goalDme:n,op:l}=e,{id:d,name:r}=l;return{stateChart:{series:[{name:"MINERAL",data:[{x:"",y:t,goals:[{name:"META",value:s,strokeWidth:5,strokeColor:"#191970"}]}]},{name:"STOCK",data:[{x:"",y:i,goals:[{name:"META",value:o,strokeWidth:5,strokeColor:"#191970"}]}]},{name:"DESMONTE",data:[{x:"",y:a,goals:[{name:"META",value:n,strokeWidth:5,strokeColor:"#191970"}]}]}],options:{chart:{id:"bar-"+d,height:350},plotOptions:{bar:{columnWidth:"60%",horizontal:!0}},colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0,formatter:function(e,t){console.log("opt",t);const i=t.w.config.series[t.seriesIndex].data[t.dataPointIndex].goals;return i&&i.length?`${t.w.config.series[t.seriesIndex].name} ${e} / ${i[0].value} `:e}},tooltip:{shared:!1,y:{formatter:function(e){return e+" Toneladas"}}},yaxis:{title:{text:"Toneladas"}},xaxis:{title:{text:"Toneladas"},labels:{formatter:function(e){return e+"Tn"}}},legend:{position:"bottom"}}}}})({pad:e.day.lenCyclePad*t+e.night.lenCyclePad*t,stock:e.day.lenCycleStock*t+e.night.lenCycleStock*t,dme:e.day.lenCycleDme*t+e.night.lenCycleDme*t,goalPad:0,goalStock:0,goalDme:0,op:{id:"producction",name:"PRODUCCION"}});return(0,a.jsx)(L.Z,{options:i.stateChart.options,series:i.stateChart.series,type:"bar",height:"282"})},U=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,x.C)(b.Ig),[s,o]=(0,n.useState)([]),[l,d]=(0,n.useState)([]);(0,n.useEffect)((()=>{t&&(o(e.day.hourList),d(e.day.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList}))))),i&&(o(e.night.hourList),d(e.night.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList})))))}),[e,t,i]);const r=(e=>{const{categorie:t,op:i,seriesEx:a}=e,{id:s}=i;return{stateChart:{series:a,options:{colors:["#DB0A5B","#FF6322","#FFBB04","#2ECC71","#00B0FF","#BC50FA","#68E1FF","#754B10","#003F63","#FFA700","#64732F","#D94625"],chart:{id:"bar-"+s,height:350},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:t,title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],tooltip:{shared:!1,y:{formatter:function(e){return e+" Toneladas"}}},fill:{opacity:1},legend:{position:"bottom",offsetY:10}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:s,seriesEx:l,op:{id:"excavator"}});return(0,a.jsx)(L.Z,{options:r.stateChart.options,series:r.stateChart.series,type:"bar",height:"413"})},B=()=>{const{days:e,seriesMechAvailability:t,seriesUtilization:i,seriesProductivity:o,todayMechacalAvailability:l,todayUtilization:d,todayProductivity:c}=(()=>{const{dataReport:e}=(0,x.C)(w.vs),{isSelectDay:t,isSelectNight:i}=(0,x.C)(b.Ig),[a,s]=(0,n.useState)([]),[o,l]=(0,n.useState)([]),[d,r]=(0,n.useState)([]),[c,u]=(0,n.useState)([]),[v,h]=(0,n.useState)(0),[y,m]=(0,n.useState)(0),[g,p]=(0,n.useState)(0);return(0,n.useEffect)((()=>{var a,o,n,d,c,v,y,g,x,b,j,C,O,Z,k,A,S,f,F,N,L,w,P,D,T,I,z,E;t&&(s(null===(o=null===(a=null==e?void 0:e.day)||void 0===a?void 0:a.yellowmachinery)||void 0===o?void 0:o.labelDaysReportList),l(null===(d=null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.yellowmachinery)||void 0===d?void 0:d.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(v=null===(c=null==e?void 0:e.day)||void 0===c?void 0:c.yellowmachinery)||void 0===v?void 0:v.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(g=null===(y=null==e?void 0:e.day)||void 0===y?void 0:y.yellowmachinery)||void 0===g?void 0:g.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(b=null===(x=null==e?void 0:e.day)||void 0===x?void 0:x.yellowmachinery)||void 0===b?void 0:b.todayMechanicalAvailability.toFixed(1))),m(Number(null===(C=null===(j=null==e?void 0:e.day)||void 0===j?void 0:j.yellowmachinery)||void 0===C?void 0:C.todayUtilization.toFixed(1))),p(Number(null===(Z=null===(O=null==e?void 0:e.day)||void 0===O?void 0:O.yellowmachinery)||void 0===Z?void 0:Z.todayProductivity.toFixed(1)))),i&&(s(null===(A=null===(k=null==e?void 0:e.night)||void 0===k?void 0:k.yellowmachinery)||void 0===A?void 0:A.labelDaysReportList),l(null===(f=null===(S=null==e?void 0:e.night)||void 0===S?void 0:S.yellowmachinery)||void 0===f?void 0:f.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),r(null===(N=null===(F=null==e?void 0:e.night)||void 0===F?void 0:F.yellowmachinery)||void 0===N?void 0:N.utilizationList.map((e=>Number(e.toFixed(1))))),u(null===(w=null===(L=null==e?void 0:e.night)||void 0===L?void 0:L.yellowmachinery)||void 0===w?void 0:w.productivityList.map((e=>Number(e.toFixed(1))))),h(Number(null===(D=null===(P=null==e?void 0:e.night)||void 0===P?void 0:P.yellowmachinery)||void 0===D?void 0:D.todayMechanicalAvailability.toFixed(1))),m(Number(null===(I=null===(T=null==e?void 0:e.night)||void 0===T?void 0:T.yellowmachinery)||void 0===I?void 0:I.todayUtilization.toFixed(1))),p(Number(null===(E=null===(z=null==e?void 0:e.night)||void 0===z?void 0:z.yellowmachinery)||void 0===E?void 0:E.todayProductivity.toFixed(1))))}),[t,i,e]),{days:a,seriesMechAvailability:o,seriesUtilization:d,seriesProductivity:c,todayMechacalAvailability:v,todayUtilization:y,todayProductivity:g}})(),u=P({categorie:e,series:t,op:{id:"YellowmachineryMechAvailability"},label:"Disp. Mecánica"}),v=P({categorie:e,series:i,op:{id:"YellowmachineryUtilization"},label:"Utilización"}),h=(P({categorie:e,series:o,op:{id:"YellowmachineryDisponibility"},label:"Productividad"}),D({value:l,op:{id:"AvailabilityToday"}})),y=D({value:d,op:{id:"UtilizationToday"}});return T({value:c,op:{id:"ProductivityToday"}}),(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12,spacing:0},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:u.stateChart.options,series:u.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:h.stateChart.options,series:h.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(L.Z,{options:v.stateChart.options,series:v.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(L.Z,{options:y.stateChart.options,series:y.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Hoy"}))]}))]}))]}))},R=i(53292),Y=i(69711),G=()=>{const e=(0,x.T)(),{statusReportPerformancePerHour:t,reportPerformancePerHour:i}=(0,x.C)(b.Ig),{isSelectDay:l,isSelectNight:d}=(0,x.C)(b.Ig),{lenCycleDme:r,lenCyclePad:c,lenCycleStock:u,tonnePerTruck:j}=i.day;var C=new Date,O=new Date(C.getTime()-26784e5);const[Z]=(0,N.R)(),[k,A]=(()=>{const[e,t]=(0,n.useState)(E().getMinutes()),[i,a]=(0,n.useState)(E().getHours());return(0,n.useEffect)((()=>{setInterval((()=>{t(E().getMinutes()),a(E().getHours())}),6e4)}),[]),[e,i]})(),[S,L]=(0,n.useState)(Z),[P]=(0,F.l)(S);function D(){const t={dateStart:`${P}T00:00`,dateEnd:`${P}T00:00`};e((0,b.D2)(t)),e((0,w.X4)(t))}(0,n.useEffect)((()=>{D()}),[S,k]),(0,n.useEffect)((()=>{const e=new Date;Z.getHours()>=7&&Z.getHours()<19?(T(e),G()):$()}),[A]);const T=e=>{L(e)};function G(){e((0,b.Sv)(!0)),e((0,b.kQ)(!1))}function $(){e((0,b.Sv)(!1)),e((0,b.kQ)(!0))}return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"row"},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(p.M,{startDate:O,days:31,marked:[{}],selectDate:S,getSelectedDay:T,color:"#024e8c"})})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsx)(v,Object.assign({title:"TONELAJE POR HORA (Tn/Hr)",icon:Y},{children:(0,a.jsx)(M,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsxs)(s.Z,Object.assign({container:!0,spacing:2},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,spacing:2},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:6,xs:12},{children:(0,a.jsx)(g,{onClick:G,isSelect:l,shift:m.Shift.DAY,label:"TURNO DIA",lenCycleDme:r*j,lenCyclePad:c*j,lenCycleStock:u*j})})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:6,xs:12},{children:(0,a.jsx)(g,{isSelect:d,onClick:$,shift:m.Shift.NIGHT,label:"TURNO NOCHE",lenCycleDme:i.night.lenCycleDme*j,lenCyclePad:i.night.lenCyclePad*j,lenCycleStock:i.night.lenCycleStock*j})}))]})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(v,Object.assign({title:"PRODUCCIÓN TOTAL POR DIA",icon:""},{children:(0,a.jsx)(H,{})}))}))]}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsx)(v,Object.assign({title:"RENDIMIENTO POR EXCAVADORA (Tn/Hr)",icon:R},{children:(0,a.jsx)(U,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsx)(v,Object.assign({title:"KPI DE VOLQUETES",icon:Y},{children:(0,a.jsx)(I,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsx)(v,Object.assign({title:"KPI DE EXCAVADORAS",icon:R},{children:(0,a.jsx)(z,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(o.Z,Object.assign({p:3},{children:(0,a.jsx)(v,Object.assign({title:"KPI DE LINEA AMARILLA",icon:R},{children:(0,a.jsx)(B,{})}))}))}))]})),(0,a.jsx)(f,{visible:"done"===t,actionClick:D,Icon:h.Z,disabled:"done"!=t,color:"secondary",right:8,keyAction:"R"}),(0,a.jsx)(f,{visible:"done"===t,actionClick:function(){const t={dateStart:`${P}T00:00`,dateEnd:`${P}T00:00`};e((0,b.BF)(t))},Icon:y.Z,disabled:"done"!=t,color:"secondary",right:70})]})};var $=i(49521);function W(){return(0,a.jsxs)("div",{children:[(0,a.jsx)($.h,{title:"Dashboard"}),(0,a.jsx)("div",Object.assign({style:{marginTop:"60px"}},{children:(0,a.jsx)(G,{})}))]})}}}]);