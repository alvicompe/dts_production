(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[231],{6231:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var o=r(5893),i=r(7812),a=r(2318),s=r(3557),n=r(7294),p=r(1120),d=r(5258),l=r(4096),c=r(1423),u=r(46),b=r(7623),g=r(5875),h=r(1201),f=r(743),y=r(4566),j=r(2285),v=r(8463),S=r(1749),R=r(282),G=r(2663),m=r(6083),M=r(9525),x=r(7212),O=r(6856),q=r(3681),F=r(4880),B=r(3040),L=r(5376);const P=new class{constructor(e,t,r){this.methodInfoCreateGrid=new B.AbstractClientBase.MethodInfo(L.GridResponse,(e=>e.serializeBinary()),L.GridResponse.deserializeBinary),r||(r={}),t||(t={}),r.format="text",this.client_=new B.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r}createGrid(e,t,r){return void 0!==r?this.client_.rpcCall(this.hostname_+"/pb.GridService/CreateGrid",e,t||{},this.methodInfoCreateGrid,r):this.client_.unaryCall(this.hostname_+"/pb.GridService/CreateGrid",e,t||{},this.methodInfoCreateGrid)}}(`${F.$s}:${F.Vs}`,null,null);var z=r(8657);const W=(0,p.Z)((e=>(0,b.Z)({root:{width:"90vh%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}))),w=n.forwardRef((function(e,t){return(0,o.jsx)(j.Z,Object.assign({direction:"up",ref:t},e),void 0)}));function D(){const e=W(),[t,r]=n.useState(!1),[i,s]=(0,n.useState)(!1),[p,d]=(0,n.useState)(""),[l,c]=n.useState(!1),b=()=>{c(!1)};return(0,o.jsx)(v.Z,Object.assign({className:e.root},{children:(0,o.jsxs)(g.Z,Object.assign({expanded:"panel1"===t,onChange:("panel1",(e,t)=>{r(!!t&&"panel1")})},{children:[(0,o.jsxs)(f.Z,Object.assign({expandIcon:(0,o.jsx)(y.Z,{},void 0),"aria-controls":"panel1bh-content",id:"panel1bh-header"},{children:[(0,o.jsx)(a.Z,Object.assign({className:e.heading},{children:"Cargar Grid"}),void 0),(0,o.jsx)(a.Z,Object.assign({className:e.secondaryHeading},{children:"Actualización de Grid DTS hytera"}),void 0)]}),void 0),(0,o.jsx)(h.Z,{children:(0,o.jsxs)(S.Z,Object.assign({container:!0,alignItems:"center"},{children:[(0,o.jsx)(R.Z,Object.assign({variant:"contained",color:"primary",disabled:i,style:{margin:"40px",width:"200px",textAlign:"center"},onClick:()=>{c(!0)}},{children:"Actualizar Data"}),void 0),(0,o.jsxs)(G.Z,Object.assign({open:l,TransitionComponent:w,keepMounted:!0,onClose:b},{children:[(0,o.jsx)(m.Z,{children:(0,o.jsx)(a.Z,Object.assign({align:"center",style:{fontSize:16}},{children:"¿Está seguro?"}),void 0)},void 0),(0,o.jsx)(M.Z,{children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)("strong",{children:"Tenga en consideración lo siguiente:"},void 0),"- Las unidades(volquetes y excavadoras)"," ",(0,o.jsx)("strong",{children:" no deben estar en operación."},void 0)," ",(0,o.jsx)("br",{},void 0),"- La generación de Grillas solo se debe realizar cuando hay actualización de archivos como: polígonos en TAJO, celdas en DME, PAD, Stocks, o en rutas. ",(0,o.jsx)("br",{},void 0),"- Esta operación puede durar varios minutos. Se recomienda consultar con soporte de DTS si es conveniente realizar esta operación."]},void 0)},void 0),(0,o.jsxs)(O.Z,{children:[(0,o.jsx)(R.Z,Object.assign({variant:"contained",onClick:b},{children:"Cancelar"}),void 0),(0,o.jsx)(R.Z,Object.assign({variant:"contained",color:"primary",onClick:()=>{((e,t)=>{const r={authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzODk4MDUsInVzZXJuYW1lIjoiZGlzcGF0Y2hlciIsInJvbGUiOiJESVMifQ.IIKVGiv1ve4AST9EdQ1XjujDWDG3qCHzF57knK7A1Y8"},o=new L.GridRequest;o.setRead(!0),e(!0),new Promise(((i,a)=>{P.createGrid(o,r,((r,o)=>{e(!1),null!==r?(console.log("err",r),t(r.message)):(console.log("createGrid",o),console.log(o.getDone()),o.getDone()?t(""):t("Error al Generar Grids"))}))}))})(s,d),c(!1)}},{children:"Actualizar"}),void 0)]},void 0)]}),void 0),p&&(0,o.jsx)(z.Z,Object.assign({severity:"error"},{children:p}),void 0),i&&(0,o.jsx)(u.Z,{children:(0,o.jsx)(q.Z,{},void 0)},void 0)]}),void 0)},void 0)]}),void 0)}),void 0)}function k(e){const{children:t,value:r,index:i}=e,a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]])}return r}(e,["children","value","index"]);return(0,o.jsx)("div",Object.assign({role:"tabpanel",hidden:r!==i,id:`vertical-tabpanel-${i}`,"aria-labelledby":`vertical-tab-${i}`},a,{children:r===i&&(0,o.jsx)(u.Z,Object.assign({p:3},{children:(0,o.jsx)(o.Fragment,{children:t},void 0)}),void 0)}),void 0)}const T=(0,p.Z)((e=>({root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:"100vh",width:"100%",textAlign:"left"},tabs:{borderRight:`1px solid ${e.palette.divider}`,textAlign:"left"},detail:{width:"100%",padding:1}})));function C(){const e=T(),[t,r]=n.useState(0);return(0,o.jsxs)("div",Object.assign({className:e.root},{children:[(0,o.jsx)(l.Z,Object.assign({orientation:"vertical",variant:"scrollable",value:t,onChange:(e,t)=>{r(t)},"aria-label":"Vertical tabs example",className:e.tabs},{children:(0,o.jsx)(c.Z,Object.assign({label:"Generar Grid"},(0,{id:"vertical-tab-0","aria-controls":"vertical-tabpanel-0"})),void 0)}),void 0),(0,o.jsx)(v.Z,Object.assign({className:e.detail},{children:(0,o.jsx)(k,Object.assign({value:t,index:0},{children:(0,o.jsx)("div",Object.assign({style:{width:"100%"}},{children:(0,o.jsx)(D,{},void 0)}),void 0)}),void 0)}),void 0)]}),void 0)}function Z(e){const{children:t,value:r,index:i}=e,a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]])}return r}(e,["children","value","index"]);return(0,o.jsx)("div",Object.assign({role:"tabpanel",hidden:r!==i,id:`scrollable-auto-tabpanel-${i}`,"aria-labelledby":`scrollable-auto-tab-${i}`},a,{children:r===i&&(0,o.jsx)(u.Z,Object.assign({p:3},{children:(0,o.jsx)(o.Fragment,{children:t},void 0)}),void 0)}),void 0)}const E=(0,p.Z)((e=>({root:{width:"100%",backgroundColor:e.palette.background.paper}})));function I(){const e=E(),[t,r]=n.useState(0);return(0,o.jsxs)("div",Object.assign({className:e.root},{children:[(0,o.jsx)(d.Z,Object.assign({position:"static",color:"default"},{children:(0,o.jsx)(l.Z,Object.assign({value:t,onChange:(e,t)=>{r(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},{children:(0,o.jsx)(c.Z,Object.assign({label:"Generales"},(0,{id:"scrollable-auto-tab-0","aria-controls":"scrollable-auto-tabpanel-0"})),void 0)}),void 0)}),void 0),(0,o.jsx)(Z,Object.assign({value:t,index:0},{children:(0,o.jsx)(C,{},void 0)}),void 0)]}),void 0)}const N=()=>{const[e,t]=(0,n.useState)(null);return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Z,Object.assign({size:"small",onClick:()=>t(void 0)},{children:(0,o.jsx)(s.Z,{fontSize:"small"},void 0)}),void 0),(0,o.jsx)(a.Z,Object.assign({align:"center",variant:"h6",gutterBottom:!0},{children:"Settings DTS"}),void 0),(0,o.jsx)(I,{},void 0)]},void 0)},_=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(N,{},void 0)},void 0)},5376:(e,t,r)=>{var o=r(3019),i=o,a=Function("return this")(),s=r(3362);i.object.extend(proto,s);var n=r(4016);i.object.extend(proto,n);var p=r(3112);i.object.extend(proto,p);var d=r(2733);i.object.extend(proto,d);var l=r(8060);i.object.extend(proto,l);var c=r(6928);i.object.extend(proto,c);var u=r(5631);i.object.extend(proto,u),i.exportSymbol("proto.pb.Grid",null,a),i.exportSymbol("proto.pb.GridRequest",null,a),i.exportSymbol("proto.pb.GridResponse",null,a),i.exportSymbol("proto.pb.Square",null,a),proto.pb.Square=function(e){o.Message.initialize(this,e,0,-1,proto.pb.Square.repeatedFields_,null)},i.inherits(proto.pb.Square,o.Message),i.DEBUG&&!COMPILED&&(proto.pb.Square.displayName="proto.pb.Square"),proto.pb.Grid=function(e){o.Message.initialize(this,e,0,-1,proto.pb.Grid.repeatedFields_,null)},i.inherits(proto.pb.Grid,o.Message),i.DEBUG&&!COMPILED&&(proto.pb.Grid.displayName="proto.pb.Grid"),proto.pb.GridRequest=function(e){o.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.pb.GridRequest,o.Message),i.DEBUG&&!COMPILED&&(proto.pb.GridRequest.displayName="proto.pb.GridRequest"),proto.pb.GridResponse=function(e){o.Message.initialize(this,e,0,-1,null,null)},i.inherits(proto.pb.GridResponse,o.Message),i.DEBUG&&!COMPILED&&(proto.pb.GridResponse.displayName="proto.pb.GridResponse"),proto.pb.Square.repeatedFields_=[4,5,6,7,8,9,10,11],o.Message.GENERATE_TO_OBJECT&&(proto.pb.Square.prototype.toObject=function(e){return proto.pb.Square.toObject(e,this)},proto.pb.Square.toObject=function(e,t){var r={id:o.Message.getFieldWithDefault(t,1,""),name:o.Message.getFieldWithDefault(t,2,""),altitude:o.Message.getFloatingPointFieldWithDefault(t,3,0),segmentList:o.Message.toObjectList(t.getSegmentList(),s.Point.toObject,e),pointList:o.Message.toObjectList(t.getPointList(),s.Point.toObject,e),geofenceList:o.Message.toObjectList(t.getGeofenceList(),n.Geofence.toObject,e),roadList:o.Message.toObjectList(t.getRoadList(),p.Road.toObject,e),pitList:o.Message.toObjectList(t.getPitList(),d.Pit.toObject,e),padList:o.Message.toObjectList(t.getPadList(),l.Pad.toObject,e),stockList:o.Message.toObjectList(t.getStockList(),c.Stock.toObject,e),dmeList:o.Message.toObjectList(t.getDmeList(),u.Dme.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}),proto.pb.Square.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.pb.Square;return proto.pb.Square.deserializeBinaryFromReader(r,t)},proto.pb.Square.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=t.readString();e.setId(r);break;case 2:r=t.readString(),e.setName(r);break;case 3:r=t.readDouble(),e.setAltitude(r);break;case 4:r=new s.Point,t.readMessage(r,s.Point.deserializeBinaryFromReader),e.addSegment(r);break;case 5:r=new s.Point,t.readMessage(r,s.Point.deserializeBinaryFromReader),e.addPoint(r);break;case 6:r=new n.Geofence,t.readMessage(r,n.Geofence.deserializeBinaryFromReader),e.addGeofence(r);break;case 7:r=new p.Road,t.readMessage(r,p.Road.deserializeBinaryFromReader),e.addRoad(r);break;case 8:r=new d.Pit,t.readMessage(r,d.Pit.deserializeBinaryFromReader),e.addPit(r);break;case 9:r=new l.Pad,t.readMessage(r,l.Pad.deserializeBinaryFromReader),e.addPad(r);break;case 10:r=new c.Stock,t.readMessage(r,c.Stock.deserializeBinaryFromReader),e.addStock(r);break;case 11:r=new u.Dme,t.readMessage(r,u.Dme.deserializeBinaryFromReader),e.addDme(r);break;default:t.skipField()}return e},proto.pb.Square.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.Square.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.Square.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getId()).length>0&&t.writeString(1,r),(r=e.getName()).length>0&&t.writeString(2,r),0!==(r=e.getAltitude())&&t.writeDouble(3,r),(r=e.getSegmentList()).length>0&&t.writeRepeatedMessage(4,r,s.Point.serializeBinaryToWriter),(r=e.getPointList()).length>0&&t.writeRepeatedMessage(5,r,s.Point.serializeBinaryToWriter),(r=e.getGeofenceList()).length>0&&t.writeRepeatedMessage(6,r,n.Geofence.serializeBinaryToWriter),(r=e.getRoadList()).length>0&&t.writeRepeatedMessage(7,r,p.Road.serializeBinaryToWriter),(r=e.getPitList()).length>0&&t.writeRepeatedMessage(8,r,d.Pit.serializeBinaryToWriter),(r=e.getPadList()).length>0&&t.writeRepeatedMessage(9,r,l.Pad.serializeBinaryToWriter),(r=e.getStockList()).length>0&&t.writeRepeatedMessage(10,r,c.Stock.serializeBinaryToWriter),(r=e.getDmeList()).length>0&&t.writeRepeatedMessage(11,r,u.Dme.serializeBinaryToWriter)},proto.pb.Square.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,"")},proto.pb.Square.prototype.setId=function(e){return o.Message.setProto3StringField(this,1,e)},proto.pb.Square.prototype.getName=function(){return o.Message.getFieldWithDefault(this,2,"")},proto.pb.Square.prototype.setName=function(e){return o.Message.setProto3StringField(this,2,e)},proto.pb.Square.prototype.getAltitude=function(){return o.Message.getFloatingPointFieldWithDefault(this,3,0)},proto.pb.Square.prototype.setAltitude=function(e){return o.Message.setProto3FloatField(this,3,e)},proto.pb.Square.prototype.getSegmentList=function(){return o.Message.getRepeatedWrapperField(this,s.Point,4)},proto.pb.Square.prototype.setSegmentList=function(e){return o.Message.setRepeatedWrapperField(this,4,e)},proto.pb.Square.prototype.addSegment=function(e,t){return o.Message.addToRepeatedWrapperField(this,4,e,proto.pb.Point,t)},proto.pb.Square.prototype.clearSegmentList=function(){return this.setSegmentList([])},proto.pb.Square.prototype.getPointList=function(){return o.Message.getRepeatedWrapperField(this,s.Point,5)},proto.pb.Square.prototype.setPointList=function(e){return o.Message.setRepeatedWrapperField(this,5,e)},proto.pb.Square.prototype.addPoint=function(e,t){return o.Message.addToRepeatedWrapperField(this,5,e,proto.pb.Point,t)},proto.pb.Square.prototype.clearPointList=function(){return this.setPointList([])},proto.pb.Square.prototype.getGeofenceList=function(){return o.Message.getRepeatedWrapperField(this,n.Geofence,6)},proto.pb.Square.prototype.setGeofenceList=function(e){return o.Message.setRepeatedWrapperField(this,6,e)},proto.pb.Square.prototype.addGeofence=function(e,t){return o.Message.addToRepeatedWrapperField(this,6,e,proto.pb.Geofence,t)},proto.pb.Square.prototype.clearGeofenceList=function(){return this.setGeofenceList([])},proto.pb.Square.prototype.getRoadList=function(){return o.Message.getRepeatedWrapperField(this,p.Road,7)},proto.pb.Square.prototype.setRoadList=function(e){return o.Message.setRepeatedWrapperField(this,7,e)},proto.pb.Square.prototype.addRoad=function(e,t){return o.Message.addToRepeatedWrapperField(this,7,e,proto.pb.Road,t)},proto.pb.Square.prototype.clearRoadList=function(){return this.setRoadList([])},proto.pb.Square.prototype.getPitList=function(){return o.Message.getRepeatedWrapperField(this,d.Pit,8)},proto.pb.Square.prototype.setPitList=function(e){return o.Message.setRepeatedWrapperField(this,8,e)},proto.pb.Square.prototype.addPit=function(e,t){return o.Message.addToRepeatedWrapperField(this,8,e,proto.pb.Pit,t)},proto.pb.Square.prototype.clearPitList=function(){return this.setPitList([])},proto.pb.Square.prototype.getPadList=function(){return o.Message.getRepeatedWrapperField(this,l.Pad,9)},proto.pb.Square.prototype.setPadList=function(e){return o.Message.setRepeatedWrapperField(this,9,e)},proto.pb.Square.prototype.addPad=function(e,t){return o.Message.addToRepeatedWrapperField(this,9,e,proto.pb.Pad,t)},proto.pb.Square.prototype.clearPadList=function(){return this.setPadList([])},proto.pb.Square.prototype.getStockList=function(){return o.Message.getRepeatedWrapperField(this,c.Stock,10)},proto.pb.Square.prototype.setStockList=function(e){return o.Message.setRepeatedWrapperField(this,10,e)},proto.pb.Square.prototype.addStock=function(e,t){return o.Message.addToRepeatedWrapperField(this,10,e,proto.pb.Stock,t)},proto.pb.Square.prototype.clearStockList=function(){return this.setStockList([])},proto.pb.Square.prototype.getDmeList=function(){return o.Message.getRepeatedWrapperField(this,u.Dme,11)},proto.pb.Square.prototype.setDmeList=function(e){return o.Message.setRepeatedWrapperField(this,11,e)},proto.pb.Square.prototype.addDme=function(e,t){return o.Message.addToRepeatedWrapperField(this,11,e,proto.pb.Dme,t)},proto.pb.Square.prototype.clearDmeList=function(){return this.setDmeList([])},proto.pb.Grid.repeatedFields_=[1],o.Message.GENERATE_TO_OBJECT&&(proto.pb.Grid.prototype.toObject=function(e){return proto.pb.Grid.toObject(e,this)},proto.pb.Grid.toObject=function(e,t){var r={squareList:o.Message.toObjectList(t.getSquareList(),proto.pb.Square.toObject,e),color:o.Message.getFieldWithDefault(t,2,0)};return e&&(r.$jspbMessageInstance=t),r}),proto.pb.Grid.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.pb.Grid;return proto.pb.Grid.deserializeBinaryFromReader(r,t)},proto.pb.Grid.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var r=new proto.pb.Square;t.readMessage(r,proto.pb.Square.deserializeBinaryFromReader),e.addSquare(r);break;case 2:r=t.readInt32(),e.setColor(r);break;default:t.skipField()}return e},proto.pb.Grid.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.Grid.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.Grid.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getSquareList()).length>0&&t.writeRepeatedMessage(1,r,proto.pb.Square.serializeBinaryToWriter),0!==(r=e.getColor())&&t.writeInt32(2,r)},proto.pb.Grid.prototype.getSquareList=function(){return o.Message.getRepeatedWrapperField(this,proto.pb.Square,1)},proto.pb.Grid.prototype.setSquareList=function(e){return o.Message.setRepeatedWrapperField(this,1,e)},proto.pb.Grid.prototype.addSquare=function(e,t){return o.Message.addToRepeatedWrapperField(this,1,e,proto.pb.Square,t)},proto.pb.Grid.prototype.clearSquareList=function(){return this.setSquareList([])},proto.pb.Grid.prototype.getColor=function(){return o.Message.getFieldWithDefault(this,2,0)},proto.pb.Grid.prototype.setColor=function(e){return o.Message.setProto3IntField(this,2,e)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.GridRequest.prototype.toObject=function(e){return proto.pb.GridRequest.toObject(e,this)},proto.pb.GridRequest.toObject=function(e,t){var r={read:o.Message.getBooleanFieldWithDefault(t,1,!1)};return e&&(r.$jspbMessageInstance=t),r}),proto.pb.GridRequest.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.pb.GridRequest;return proto.pb.GridRequest.deserializeBinaryFromReader(r,t)},proto.pb.GridRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var r=t.readBool();e.setRead(r)}else t.skipField();return e},proto.pb.GridRequest.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.GridRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.GridRequest.serializeBinaryToWriter=function(e,t){var r;(r=e.getRead())&&t.writeBool(1,r)},proto.pb.GridRequest.prototype.getRead=function(){return o.Message.getBooleanFieldWithDefault(this,1,!1)},proto.pb.GridRequest.prototype.setRead=function(e){return o.Message.setProto3BooleanField(this,1,e)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.GridResponse.prototype.toObject=function(e){return proto.pb.GridResponse.toObject(e,this)},proto.pb.GridResponse.toObject=function(e,t){var r={done:o.Message.getBooleanFieldWithDefault(t,1,!1)};return e&&(r.$jspbMessageInstance=t),r}),proto.pb.GridResponse.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.pb.GridResponse;return proto.pb.GridResponse.deserializeBinaryFromReader(r,t)},proto.pb.GridResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)if(1===t.getFieldNumber()){var r=t.readBool();e.setDone(r)}else t.skipField();return e},proto.pb.GridResponse.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.GridResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.GridResponse.serializeBinaryToWriter=function(e,t){var r;(r=e.getDone())&&t.writeBool(1,r)},proto.pb.GridResponse.prototype.getDone=function(){return o.Message.getBooleanFieldWithDefault(this,1,!1)},proto.pb.GridResponse.prototype.setDone=function(e){return o.Message.setProto3BooleanField(this,1,e)},i.object.extend(t,proto.pb)}}]);