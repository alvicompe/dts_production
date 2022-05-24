"use strict";(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[362],{13903:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var a=i(85893),s=i(41749),n=i(17142),o=i(67294),l=i(18463),d=i(94697),r=i(22318),c=i(79912),u=i(33901);const h=({title:e,icon:t,subheader:i,children:s,customStyle:n})=>(0,a.jsx)(l.Z,{children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{style:{color:"#0069AA"},title:(0,a.jsx)(r.Z,Object.assign({variant:"subtitle1",style:{textAlign:"center",fontSize:"0.875rem"}},{children:e})),subheader:i}),(0,a.jsx)(c.Z,{children:s})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{style:{color:"#0069AA"},avatar:(0,a.jsx)(u.Z,{variant:"square",src:t}),title:e,subheader:i}),(0,a.jsx)(c.Z,{children:s})]})});var g=i(47229),m=i(73855),v=i(4650);const x=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,m.C)(v.Ig),[s,n]=(0,o.useState)([]),[l,d]=(0,o.useState)([]),[r,c]=(0,o.useState)([]),[u,h]=(0,o.useState)([]),[x,b]=(0,o.useState)([]);(0,o.useEffect)((()=>{(new Date).getHours(),t&&(n(e.day.hourList),d(e.day.padList),c(e.day.stockList),h(e.day.dmeList),b(e.day.lenTruckList)),i&&(n(e.night.hourList),d(e.night.padList),c(e.night.stockList),h(e.night.dmeList),b(e.night.lenTruckList))}),[e,t,i]);const p=(e=>{const{categorie:t,pad:i,stock:a,dme:s,trucks:n,op:o}=e,{id:l,padName:d,stockName:r,dmeName:c,trucksName:u}=o;return{stateChart:{series:[{name:d,type:"column",data:i},{name:r,type:"column",data:a},{name:c,type:"column",data:s},{name:u,type:"line",data:n}],options:{colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},chart:{id:"bar-"+l,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},labels:t,xaxis:{title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],legend:{position:"top",offsetY:10}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:s,pad:l,stock:r,dme:u,trucks:x,op:{id:"Toneladas",padName:"MINERAL",stockName:"STOCK",dmeName:"DESMONTE",trucksName:"CAMIONES"}});return(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{options:p.stateChart.options,series:p.stateChart.series,type:"line",height:"413"})})};var b=i(90179),p=i(43856);const y=()=>{const{reportPerformancePerHour:e,isSelectDay:t,isSelectNight:i}=(0,m.C)(v.Ig),[s,n]=(0,o.useState)([]),[l,d]=(0,o.useState)([]);(0,o.useEffect)((()=>{t&&(n(e.day.hourList),d(e.day.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList}))))),i&&(n(e.night.hourList),d(e.night.excavatorValueCycleList.map((e=>({name:e.deviceAlias,data:e.valueList})))))}),[e,t,i]);const r=(e=>{const{categorie:t,op:i,seriesEx:a}=e,{id:s}=i;return{stateChart:{series:a,options:{colors:["#DB0A5B","#FF6322","#FFBB04","#2ECC71","#00B0FF","#BC50FA","#68E1FF","#754B10","#003F63","#FFA700","#64732F","#D94625"],chart:{id:"bar-"+s,height:350},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:t,title:{text:"Horas"}},yaxis:[{title:{text:"Toneladas"}}],tooltip:{shared:!1,y:{formatter:function(e){return e+" Toneladas"}}},fill:{opacity:1},legend:{position:"top",offsetY:10}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}})({categorie:s,seriesEx:l,op:{id:"excavator"}});return(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{options:r.stateChart.options,series:r.stateChart.series,type:"bar",height:"413"})})},j=()=>{const{reportPerformancePerHour:e}=(0,m.C)(v.Ig),{tonnePerTruck:t}=e.day,i=(e=>{const{pad:t,stock:i,dme:a,goalPad:s,goalStock:n,goalDme:o,op:l}=e,{id:d,padName:r,stockName:c,dmeName:u}=l;return{stateChart:{series:[{name:"Actual",data:[{x:r,y:t,goals:[{name:c,value:s,strokeWidth:5,strokeColor:"#008000"}]},{x:c,y:i,goals:[{name:"META",value:n,strokeWidth:5,strokeColor:"#008000"}]},{x:u,y:a,goals:[{name:"META",value:o,strokeWidth:5,strokeColor:"#008000"}]}]}],options:{chart:{id:"bar-"+d,height:350},plotOptions:{bar:{columnWidth:"60%",horizontal:!0}},colors:["#000"],dataLabels:{enabled:!0,formatter:function(e,t){const i=t.w.config.series[t.seriesIndex].data[t.dataPointIndex].goals;return i&&i.length?`${e} / ${i[0].value}`:e}},legend:{show:!0,showForSingleSeries:!0,customLegendItems:["PRODUCCION","META"],markers:{fillColors:["#000","#008000"]}}}}}})({pad:e.day.lenCyclePad*t+e.night.lenCyclePad*t,stock:e.day.lenCycleStock*t+e.night.lenCycleStock*t,dme:e.day.lenCycleDme*t+e.night.lenCycleDme*t,goalPad:0,goalStock:0,goalDme:0,op:{id:"producction",padName:"MINERAL",stockName:"STOCK",dmeName:"DESMONTE"}});return(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{options:i.stateChart.options,series:i.stateChart.series,type:"bar",height:"282"})})};var C=i(56731);const O=({shift:e,lenCycleDme:t,lenCyclePad:i,lenCycleStock:n,label:d,onClick:c,isSelect:u})=>{const[h,g]=(0,o.useState)(""),[m,v]=(0,o.useState)(0),x=(new Date).getHours();return(0,o.useEffect)((()=>{e!=C.Shift.DAY&&x>=7&&x<19&&g("rgb(75 75 75 / 20%)"),e!=C.Shift.NIGHT&&x>=18&&g("rgb(75 75 75 / 20%)"),v(1==u?5:0)}),[c]),(0,a.jsx)(l.Z,Object.assign({onClick:c,style:{flex:"auto"},elevation:m},{children:(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column",alignItems:"center"},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0},{children:(0,a.jsxs)(r.Z,Object.assign({style:{color:"#0069AA"},gutterBottom:!0,variant:"h6",component:"h2"},{children:[d," "]}))})),(0,a.jsxs)(s.Z,Object.assign({container:!0,item:!0,spacing:2,justifyContent:"space-around"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#069B15"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Desmonte"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:t}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#F1C012"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Stock"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:n}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0},{children:[(0,a.jsx)(r.Z,Object.assign({style:{color:"#FF0808"},gutterBottom:!0,variant:"h6",component:"h2"},{children:"Mineral"})),(0,a.jsx)(r.Z,Object.assign({gutterBottom:!0,variant:"h6",component:"h2"},{children:i}))]}))]}))]}))}))};var Z=i(38062),f=i(41120),S=i(35117),k=i(8920),A=i(76211),N=i(33758),F=i(868);const L=(0,f.Z)((e=>(0,S.Z)({fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}})));function D({actionClick:e,Icon:t,visible:i,disabled:s,right:n,color:l,keyAction:d,title:r=""}){const c=L(),u=(0,k.Z)();(0,o.useEffect)((()=>{const t=t=>{console.log(t.key),t.key&&(t.key!==(null==d?void 0:d.toUpperCase())&&t.key!==(null==d?void 0:d.toLocaleLowerCase())&&t.key!==d||e())};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[]);const h={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen};return(0,a.jsx)(A.Z,Object.assign({in:i,timeout:h,unmountOnExit:!0},{children:(0,a.jsx)(N.Z,Object.assign({disabled:s,onClick:e,className:c.fab,style:{right:n},size:"small",color:l||"primary"},{children:(0,a.jsx)(F.ZP,Object.assign({title:r},{children:(0,a.jsx)(t,{})}))}))}))}var T=i(10646),w=i(88093),P=i(71768);const I=e=>{const{categorie:t,series:i,op:a,label:s}=e,{id:n}=a;return{stateChart:{series:[{name:s,data:i}],options:{colors:["#FF0808","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},grid:{show:!1},chart:{id:"bar-"+n,stacked:!0,toolbar:{show:!1},zoom:{enabled:!1}},labels:t,xaxis:{categories:t,title:{text:""},labels:{show:!0}},yaxis:{title:{text:s},labels:{show:!1},min:0,max:100}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},E=e=>{const{value:t,op:i}=e,{id:a}=i;return{stateChart:{series:[t],options:{colors:["#191970","#F1C012","#069B15","#191970"],dataLabels:{enabled:!0},chart:{id:"bar-"+a,stacked:!0,toolbar:{show:!1},offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.3,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},B=e=>{const{value:t,op:i}=e,{id:a}=i;return{stateChart:{series:[t],options:{colors:["#191970","#F1C012","#069B15","#191970"],dataLabels:{enabled:!1},chart:{id:"bar-"+a,stacked:!1,toolbar:{show:!1},offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px",formatter:function(e){return e+" Tn/h"}}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.3,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}}}},H=()=>{const{status:e,dataReport:t}=(0,m.C)(P.vs),{isSelectDay:i,isSelectNight:n}=(0,m.C)(v.Ig),[l,d]=(0,o.useState)([]),[c,u]=(0,o.useState)([]),[h,x]=(0,o.useState)([]),[b,p]=(0,o.useState)([]),[y,j]=(0,o.useState)(0),[C,O]=(0,o.useState)(0),[Z,f]=(0,o.useState)(0);(0,o.useEffect)((()=>{var e,a,s,o,l,r,c,h,g,m,v,b,y,C,Z,S,k,A,N,F,L,D,T,w,P,I,E,B;i&&(d(null===(a=null===(e=null==t?void 0:t.day)||void 0===e?void 0:e.load)||void 0===a?void 0:a.labelDaysReportList.map((e=>Number(e).toFixed(1)))),u(null===(o=null===(s=null==t?void 0:t.day)||void 0===s?void 0:s.load)||void 0===o?void 0:o.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),x(null===(r=null===(l=null==t?void 0:t.day)||void 0===l?void 0:l.load)||void 0===r?void 0:r.utilizationList.map((e=>Number(e.toFixed(1))))),p(null===(h=null===(c=null==t?void 0:t.day)||void 0===c?void 0:c.load)||void 0===h?void 0:h.productivityList.map((e=>Number(e.toFixed(1))))),j(Number(null===(m=null===(g=null==t?void 0:t.day)||void 0===g?void 0:g.load)||void 0===m?void 0:m.todayMechanicalAvailability.toFixed(1))),O(Number(null===(b=null===(v=null==t?void 0:t.day)||void 0===v?void 0:v.load)||void 0===b?void 0:b.todayUtilization.toFixed(1))),f(Number(null===(C=null===(y=null==t?void 0:t.day)||void 0===y?void 0:y.load)||void 0===C?void 0:C.todayProductivity.toFixed(1)))),n&&(d(null===(S=null===(Z=null==t?void 0:t.night)||void 0===Z?void 0:Z.load)||void 0===S?void 0:S.labelDaysReportList.map((e=>Number(e).toFixed(1)))),u(null===(A=null===(k=null==t?void 0:t.night)||void 0===k?void 0:k.load)||void 0===A?void 0:A.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),x(null===(F=null===(N=null==t?void 0:t.night)||void 0===N?void 0:N.load)||void 0===F?void 0:F.utilizationList.map((e=>Number(e.toFixed(1))))),p(null===(D=null===(L=null==t?void 0:t.night)||void 0===L?void 0:L.load)||void 0===D?void 0:D.productivityList.map((e=>Number(e.toFixed(1))))),j(Number(null===(w=null===(T=null==t?void 0:t.night)||void 0===T?void 0:T.load)||void 0===w?void 0:w.todayMechanicalAvailability.toFixed(1))),O(Number(null===(I=null===(P=null==t?void 0:t.night)||void 0===P?void 0:P.load)||void 0===I?void 0:I.todayUtilization.toFixed(1))),f(Number(null===(B=null===(E=null==t?void 0:t.night)||void 0===E?void 0:E.load)||void 0===B?void 0:B.todayProductivity.toFixed(1))))}),[i,n,t]);const S=I({categorie:l,series:c,op:{id:"loadMechAvailability"},label:"Disp. Mecánica"}),k=I({categorie:l,series:h,op:{id:"loadUtilization"},label:"Utilización"}),A=I({categorie:l,series:b,op:{id:"loadDisponibility"},label:"Productividad"}),N=E({value:y,op:{id:"AvailabilityToday"}}),F=E({value:C,op:{id:"UtilizationToday"}}),L=B({value:Z,op:{id:"ProductivityToday"}});return(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12,spacing:0},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:S.stateChart.options,series:S.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:N.stateChart.options,series:N.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:k.stateChart.options,series:k.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:F.stateChart.options,series:F.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:A.stateChart.options,series:A.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:L.stateChart.options,series:L.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]}))]}))},z=()=>{const{dataReport:e}=(0,m.C)(P.vs),{isSelectDay:t,isSelectNight:i}=(0,m.C)(v.Ig),[n,l]=(0,o.useState)([]),[d,c]=(0,o.useState)([]),[u,h]=(0,o.useState)([]),[x,b]=(0,o.useState)([]),[p,y]=(0,o.useState)(0),[j,C]=(0,o.useState)(0),[O,Z]=(0,o.useState)(0);(0,o.useEffect)((()=>{var a,s,n,o,d,r,u,g,m,v,x,p,j,O,f,S,k,A,N,F,L,D,T,w,P,I,E,B;t&&(l(null===(s=null===(a=null==e?void 0:e.day)||void 0===a?void 0:a.haulage)||void 0===s?void 0:s.labelDaysReportList.map((e=>Number(e).toFixed(1)))),c(null===(o=null===(n=null==e?void 0:e.day)||void 0===n?void 0:n.haulage)||void 0===o?void 0:o.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),h(null===(r=null===(d=null==e?void 0:e.day)||void 0===d?void 0:d.haulage)||void 0===r?void 0:r.utilizationList.map((e=>Number(e.toFixed(1))))),b(null===(g=null===(u=null==e?void 0:e.day)||void 0===u?void 0:u.haulage)||void 0===g?void 0:g.productivityList.map((e=>Number(e.toFixed(1))))),y(Number(null===(v=null===(m=null==e?void 0:e.day)||void 0===m?void 0:m.haulage)||void 0===v?void 0:v.todayMechanicalAvailability.toFixed(1))),C(Number(null===(p=null===(x=null==e?void 0:e.day)||void 0===x?void 0:x.haulage)||void 0===p?void 0:p.todayUtilization.toFixed(1))),Z(Number(null===(O=null===(j=null==e?void 0:e.day)||void 0===j?void 0:j.haulage)||void 0===O?void 0:O.todayProductivity.toFixed(1)))),i&&(l(null===(S=null===(f=null==e?void 0:e.night)||void 0===f?void 0:f.haulage)||void 0===S?void 0:S.labelDaysReportList.map((e=>Number(e).toFixed(1)))),c(null===(A=null===(k=null==e?void 0:e.night)||void 0===k?void 0:k.haulage)||void 0===A?void 0:A.mechanicalAvailabilityList.map((e=>Number(e.toFixed(1))))),h(null===(F=null===(N=null==e?void 0:e.night)||void 0===N?void 0:N.haulage)||void 0===F?void 0:F.utilizationList.map((e=>Number(e.toFixed(1))))),b(null===(D=null===(L=null==e?void 0:e.night)||void 0===L?void 0:L.haulage)||void 0===D?void 0:D.productivityList.map((e=>Number(e.toFixed(1))))),y(Number(null===(w=null===(T=null==e?void 0:e.night)||void 0===T?void 0:T.haulage)||void 0===w?void 0:w.todayMechanicalAvailability.toFixed(1))),C(Number(null===(I=null===(P=null==e?void 0:e.night)||void 0===P?void 0:P.haulage)||void 0===I?void 0:I.todayUtilization.toFixed(1))),Z(Number(null===(B=null===(E=null==e?void 0:e.night)||void 0===E?void 0:E.haulage)||void 0===B?void 0:B.todayProductivity.toFixed(1))))}),[t,i,e]);const f=I({categorie:n,series:d,op:{id:"HaulageMechAvailability"},label:"Disp. Mecánica"}),S=I({categorie:n,series:u,op:{id:"HaulageUtilization"},label:"Utilización"}),k=I({categorie:n,series:x,op:{id:"HaulageProductivity"},label:"Productividad"}),A=E({value:p,op:{id:"HaulageMechAvailabilityToday"}}),N=E({value:j,op:{id:"HaulageUtilizationToday"}}),F=B({value:O,op:{id:"HaulageProductivityToday"}});return(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"column"},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12,spacing:0},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:f.stateChart.options,series:f.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:A.stateChart.options,series:A.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:S.stateChart.options,series:S.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:N.stateChart.options,series:N.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]})),(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,direction:"row",alignItems:"center",xl:12,md:12,xs:12},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,md:8,xs:8},{children:(0,a.jsx)(g.Z,{options:k.stateChart.options,series:k.stateChart.series,type:"line",height:"150"})})),(0,a.jsxs)(s.Z,Object.assign({item:!0,md:4,xs:4},{children:[(0,a.jsx)(g.Z,{options:F.stateChart.options,series:F.stateChart.series,type:"radialBar",height:"195"}),(0,a.jsx)(r.Z,Object.assign({variant:"subtitle2",style:{textAlign:"center"}},{children:"Today"}))]}))]}))]}))};function M(){return new Date}const R=i(53292),U=i(69711),G=()=>{const e=(0,m.T)(),{statusReportPerformancePerHour:t,reportPerformancePerHour:i}=(0,m.C)(v.Ig),{isSelectDay:l,isSelectNight:d}=(0,m.C)(v.Ig),{lenCycleDme:r,lenCyclePad:c,lenCycleStock:u,tonnePerTruck:g}=i.day;var f=new Date,S=new Date(f.getTime()-26784e5);const[k]=(0,w.R)(),[A,N]=(()=>{const[e,t]=(0,o.useState)(M().getMinutes()),[i,a]=(0,o.useState)(M().getHours());return(0,o.useEffect)((()=>{setInterval((()=>{t(M().getMinutes()),a(M().getHours())}),6e4)}),[]),[e,i]})(),[F,L]=(0,o.useState)(k),[I]=(0,T.l)(F);function E(){const t={dateStart:`${I}T00:00`,dateEnd:`${I}T00:00`};e((0,v.D2)(t)),e((0,P.X4)(t))}console.log("date",F),console.log("minutes",A),(0,o.useEffect)((()=>{E()}),[F,A]),(0,o.useEffect)((()=>{const e=new Date;k.getHours()>=7&&k.getHours()<19?(B(e),G()):Y()}),[N]);const B=e=>{L(e)};function G(){e((0,v.Sv)(!0)),e((0,v.kQ)(!1))}function Y(){e((0,v.Sv)(!1)),e((0,v.kQ)(!0))}return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsxs)(s.Z,Object.assign({container:!0,direction:"row"},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(Z.M,{startDate:S,days:31,marked:[{}],selectDate:F,getSelectedDay:B,color:"#024e8c"})})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(n.Z,Object.assign({p:3},{children:(0,a.jsx)(h,Object.assign({title:"TONELAJE POR HORA (Tn/Hr)",icon:U},{children:(0,a.jsx)(x,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(n.Z,Object.assign({p:3},{children:(0,a.jsxs)(s.Z,Object.assign({container:!0,spacing:2},{children:[(0,a.jsxs)(s.Z,Object.assign({item:!0,container:!0,spacing:2},{children:[(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:6,xs:12},{children:(0,a.jsx)(O,{onClick:G,isSelect:l,shift:C.Shift.DAY,label:"DIA",lenCycleDme:r*g,lenCyclePad:c*g,lenCycleStock:u*g})})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:6,xs:12},{children:(0,a.jsx)(O,{isSelect:d,onClick:Y,shift:C.Shift.NIGHT,label:"NOCHE",lenCycleDme:i.night.lenCycleDme*g,lenCyclePad:i.night.lenCyclePad*g,lenCycleStock:i.night.lenCycleStock*g})}))]})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(h,Object.assign({title:"PRODUCCIÓN TOTAL POR DIA",icon:""},{children:(0,a.jsx)(j,{})}))}))]}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:12,md:12,xs:12},{children:(0,a.jsx)(n.Z,Object.assign({p:3},{children:(0,a.jsx)(h,Object.assign({title:"RENDIMIENTO POR EXCAVADORA (Tn/Hr)",icon:R},{children:(0,a.jsx)(y,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(n.Z,Object.assign({p:3},{children:(0,a.jsx)(h,Object.assign({title:"ACARREO",icon:U},{children:(0,a.jsx)(z,{})}))}))})),(0,a.jsx)(s.Z,Object.assign({item:!0,lg:6,md:12,xs:12},{children:(0,a.jsx)(n.Z,Object.assign({p:3},{children:(0,a.jsx)(h,Object.assign({title:"CARGUIO",icon:R},{children:(0,a.jsx)(H,{})}))}))}))]})),(0,a.jsx)(D,{visible:"done"===t,actionClick:E,Icon:b.Z,disabled:"done"!=t,color:"secondary",right:8,keyAction:"R"}),(0,a.jsx)(D,{visible:"done"===t,actionClick:function(){const t={dateStart:`${I}T00:00`,dateEnd:`${I}T00:00`};e((0,v.BF)(t))},Icon:p.Z,disabled:"done"!=t,color:"secondary",right:70})]})};var Y=i(49521);function W(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(Y.h,{title:"Dashboard"}),(0,a.jsx)("div",Object.assign({style:{marginTop:"60px"}},{children:(0,a.jsx)(G,{})}))]})}}}]);