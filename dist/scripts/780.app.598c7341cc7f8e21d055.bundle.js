(self.webpackChunkdts_hytera=self.webpackChunkdts_hytera||[]).push([[780],{3534:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var o=t(5893),n=t(7294),s=t(4880);const i=t(6158);i.accessToken=s.c3;const p=({dragRotate:e,map:r,pitch:t,bearing:s,mapContainer:p,lng:a,lat:c,zoom:u,setLng:l,setLat:b,setZoom:d,setLoad:T,style:k})=>((0,n.useEffect)((()=>{console.log("map.current",r.current,s),r.current||(p&&(r.current=new i.Map({container:p.current,style:k,center:[a,c],pitch:t,bearing:s,zoom:u,maxBounds:[[-78.2747922,-7.6626779],[-78.1305246,-7.5534415]],antialias:!0,dragRotate:e})),console.log("inianco"))}),[r,p]),(0,n.useEffect)((()=>{r.current&&(r.current.addControl(new i.FullscreenControl,"bottom-left"),r.current.addControl(new i.NavigationControl,"bottom-left"),r.current.on("move",(()=>{d(r.current.getZoom().toFixed(2))})),r.current.on("load",(()=>{T(!0)})))}),[r]),(0,n.useEffect)((()=>{r.current&&r.current.setBearing(s)}),[s]),(0,o.jsx)("div",{ref:p,style:{flex:1,height:"100vh",width:"100%"},className:"map-container"},void 0))},94:(e,r,t)=>{"use strict";t.d(r,{r:()=>u});var o=t(4880),n=t(2784);const{Truck:s,TruckRequest:i}=t(3779),p=new n.TruckServiceClient(`${o.$s}:${o.Vs}`,null,null),a=new s,c=new i,u=()=>{const e={authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzODk4MDUsInVzZXJuYW1lIjoiZGlzcGF0Y2hlciIsInJvbGUiOiJESVMifQ.IIKVGiv1ve4AST9EdQ1XjujDWDG3qCHzF57knK7A1Y8"};return c.setTruck(a),new Promise(((r,t)=>{p.retrieveTrucks(c,e,((e,o)=>{if(e)console.log("error message trucks get",e.message),500===e.code?r([]):t(e);else{const e=o.toObject();r(e.trucksList?e.trucksList:[])}}))}))}},1367:(e,r,t)=>{var o=t(3019),n=o,s=Function("return this")();n.exportSymbol("proto.pb.Contractor",null,s),n.exportSymbol("proto.pb.ContractorRequest",null,s),n.exportSymbol("proto.pb.ContractorResponse",null,s),n.exportSymbol("proto.pb.ContractorsResponse",null,s),proto.pb.Contractor=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.Contractor,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.Contractor.displayName="proto.pb.Contractor"),proto.pb.ContractorRequest=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.ContractorRequest,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.ContractorRequest.displayName="proto.pb.ContractorRequest"),proto.pb.ContractorResponse=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.ContractorResponse,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.ContractorResponse.displayName="proto.pb.ContractorResponse"),proto.pb.ContractorsResponse=function(e){o.Message.initialize(this,e,0,-1,proto.pb.ContractorsResponse.repeatedFields_,null)},n.inherits(proto.pb.ContractorsResponse,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.ContractorsResponse.displayName="proto.pb.ContractorsResponse"),o.Message.GENERATE_TO_OBJECT&&(proto.pb.Contractor.prototype.toObject=function(e){return proto.pb.Contractor.toObject(e,this)},proto.pb.Contractor.toObject=function(e,r){var t={id:o.Message.getFieldWithDefault(r,1,""),name:o.Message.getFieldWithDefault(r,2,""),description:o.Message.getFieldWithDefault(r,3,"")};return e&&(t.$jspbMessageInstance=r),t}),proto.pb.Contractor.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.Contractor;return proto.pb.Contractor.deserializeBinaryFromReader(t,r)},proto.pb.Contractor.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=r.readString();e.setId(t);break;case 2:t=r.readString(),e.setName(t);break;case 3:t=r.readString(),e.setDescription(t);break;default:r.skipField()}return e},proto.pb.Contractor.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.Contractor.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.Contractor.serializeBinaryToWriter=function(e,r){var t=void 0;(t=e.getId()).length>0&&r.writeString(1,t),(t=e.getName()).length>0&&r.writeString(2,t),(t=e.getDescription()).length>0&&r.writeString(3,t)},proto.pb.Contractor.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,"")},proto.pb.Contractor.prototype.setId=function(e){return o.Message.setProto3StringField(this,1,e)},proto.pb.Contractor.prototype.getName=function(){return o.Message.getFieldWithDefault(this,2,"")},proto.pb.Contractor.prototype.setName=function(e){return o.Message.setProto3StringField(this,2,e)},proto.pb.Contractor.prototype.getDescription=function(){return o.Message.getFieldWithDefault(this,3,"")},proto.pb.Contractor.prototype.setDescription=function(e){return o.Message.setProto3StringField(this,3,e)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.ContractorRequest.prototype.toObject=function(e){return proto.pb.ContractorRequest.toObject(e,this)},proto.pb.ContractorRequest.toObject=function(e,r){var t,o={contractor:(t=r.getContractor())&&proto.pb.Contractor.toObject(e,t)};return e&&(o.$jspbMessageInstance=r),o}),proto.pb.ContractorRequest.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.ContractorRequest;return proto.pb.ContractorRequest.deserializeBinaryFromReader(t,r)},proto.pb.ContractorRequest.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Contractor;r.readMessage(t,proto.pb.Contractor.deserializeBinaryFromReader),e.setContractor(t);break;default:r.skipField()}return e},proto.pb.ContractorRequest.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.ContractorRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.ContractorRequest.serializeBinaryToWriter=function(e,r){var t;null!=(t=e.getContractor())&&r.writeMessage(1,t,proto.pb.Contractor.serializeBinaryToWriter)},proto.pb.ContractorRequest.prototype.getContractor=function(){return o.Message.getWrapperField(this,proto.pb.Contractor,1)},proto.pb.ContractorRequest.prototype.setContractor=function(e){return o.Message.setWrapperField(this,1,e)},proto.pb.ContractorRequest.prototype.clearContractor=function(){return this.setContractor(void 0)},proto.pb.ContractorRequest.prototype.hasContractor=function(){return null!=o.Message.getField(this,1)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.ContractorResponse.prototype.toObject=function(e){return proto.pb.ContractorResponse.toObject(e,this)},proto.pb.ContractorResponse.toObject=function(e,r){var t,o={contractor:(t=r.getContractor())&&proto.pb.Contractor.toObject(e,t)};return e&&(o.$jspbMessageInstance=r),o}),proto.pb.ContractorResponse.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.ContractorResponse;return proto.pb.ContractorResponse.deserializeBinaryFromReader(t,r)},proto.pb.ContractorResponse.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Contractor;r.readMessage(t,proto.pb.Contractor.deserializeBinaryFromReader),e.setContractor(t);break;default:r.skipField()}return e},proto.pb.ContractorResponse.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.ContractorResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.ContractorResponse.serializeBinaryToWriter=function(e,r){var t;null!=(t=e.getContractor())&&r.writeMessage(1,t,proto.pb.Contractor.serializeBinaryToWriter)},proto.pb.ContractorResponse.prototype.getContractor=function(){return o.Message.getWrapperField(this,proto.pb.Contractor,1)},proto.pb.ContractorResponse.prototype.setContractor=function(e){return o.Message.setWrapperField(this,1,e)},proto.pb.ContractorResponse.prototype.clearContractor=function(){return this.setContractor(void 0)},proto.pb.ContractorResponse.prototype.hasContractor=function(){return null!=o.Message.getField(this,1)},proto.pb.ContractorsResponse.repeatedFields_=[1],o.Message.GENERATE_TO_OBJECT&&(proto.pb.ContractorsResponse.prototype.toObject=function(e){return proto.pb.ContractorsResponse.toObject(e,this)},proto.pb.ContractorsResponse.toObject=function(e,r){var t={contractorsList:o.Message.toObjectList(r.getContractorsList(),proto.pb.Contractor.toObject,e)};return e&&(t.$jspbMessageInstance=r),t}),proto.pb.ContractorsResponse.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.ContractorsResponse;return proto.pb.ContractorsResponse.deserializeBinaryFromReader(t,r)},proto.pb.ContractorsResponse.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Contractor;r.readMessage(t,proto.pb.Contractor.deserializeBinaryFromReader),e.addContractors(t);break;default:r.skipField()}return e},proto.pb.ContractorsResponse.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.ContractorsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.ContractorsResponse.serializeBinaryToWriter=function(e,r){var t;(t=e.getContractorsList()).length>0&&r.writeRepeatedMessage(1,t,proto.pb.Contractor.serializeBinaryToWriter)},proto.pb.ContractorsResponse.prototype.getContractorsList=function(){return o.Message.getRepeatedWrapperField(this,proto.pb.Contractor,1)},proto.pb.ContractorsResponse.prototype.setContractorsList=function(e){return o.Message.setRepeatedWrapperField(this,1,e)},proto.pb.ContractorsResponse.prototype.addContractors=function(e,r){return o.Message.addToRepeatedWrapperField(this,1,e,proto.pb.Contractor,r)},proto.pb.ContractorsResponse.prototype.clearContractorsList=function(){return this.setContractorsList([])},n.object.extend(r,proto.pb)},2784:(e,r,t)=>{const o={};o.web=t(3040),t(1367);const n={};n.pb=t(3779),n.pb.TruckServiceClient=function(e,r,t){t||(t={}),t.format="text",this.client_=new o.web.GrpcWebClientBase(t),this.hostname_=e},n.pb.TruckServicePromiseClient=function(e,r,t){t||(t={}),t.format="text",this.client_=new o.web.GrpcWebClientBase(t),this.hostname_=e};const s=new o.web.MethodDescriptor("/pb.TruckService/CreateTruck",o.web.MethodType.UNARY,n.pb.TruckRequest,n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary);new o.web.AbstractClientBase.MethodInfo(n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary),n.pb.TruckServiceClient.prototype.createTruck=function(e,r,t){return this.client_.rpcCall(this.hostname_+"/pb.TruckService/CreateTruck",e,r||{},s,t)},n.pb.TruckServicePromiseClient.prototype.createTruck=function(e,r){return this.client_.unaryCall(this.hostname_+"/pb.TruckService/CreateTruck",e,r||{},s)};const i=new o.web.MethodDescriptor("/pb.TruckService/RetrieveTruck",o.web.MethodType.UNARY,n.pb.TruckRequest,n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary);new o.web.AbstractClientBase.MethodInfo(n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary),n.pb.TruckServiceClient.prototype.retrieveTruck=function(e,r,t){return this.client_.rpcCall(this.hostname_+"/pb.TruckService/RetrieveTruck",e,r||{},i,t)},n.pb.TruckServicePromiseClient.prototype.retrieveTruck=function(e,r){return this.client_.unaryCall(this.hostname_+"/pb.TruckService/RetrieveTruck",e,r||{},i)};const p=new o.web.MethodDescriptor("/pb.TruckService/RetrieveTrucks",o.web.MethodType.UNARY,n.pb.TruckRequest,n.pb.TrucksResponse,(function(e){return e.serializeBinary()}),n.pb.TrucksResponse.deserializeBinary);new o.web.AbstractClientBase.MethodInfo(n.pb.TrucksResponse,(function(e){return e.serializeBinary()}),n.pb.TrucksResponse.deserializeBinary),n.pb.TruckServiceClient.prototype.retrieveTrucks=function(e,r,t){return this.client_.rpcCall(this.hostname_+"/pb.TruckService/RetrieveTrucks",e,r||{},p,t)},n.pb.TruckServicePromiseClient.prototype.retrieveTrucks=function(e,r){return this.client_.unaryCall(this.hostname_+"/pb.TruckService/RetrieveTrucks",e,r||{},p)};const a=new o.web.MethodDescriptor("/pb.TruckService/UpdateTruck",o.web.MethodType.UNARY,n.pb.TruckRequest,n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary);new o.web.AbstractClientBase.MethodInfo(n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary),n.pb.TruckServiceClient.prototype.updateTruck=function(e,r,t){return this.client_.rpcCall(this.hostname_+"/pb.TruckService/UpdateTruck",e,r||{},a,t)},n.pb.TruckServicePromiseClient.prototype.updateTruck=function(e,r){return this.client_.unaryCall(this.hostname_+"/pb.TruckService/UpdateTruck",e,r||{},a)};const c=new o.web.MethodDescriptor("/pb.TruckService/DeleteTruck",o.web.MethodType.UNARY,n.pb.TruckRequest,n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary);new o.web.AbstractClientBase.MethodInfo(n.pb.TruckResponse,(function(e){return e.serializeBinary()}),n.pb.TruckResponse.deserializeBinary),n.pb.TruckServiceClient.prototype.deleteTruck=function(e,r,t){return this.client_.rpcCall(this.hostname_+"/pb.TruckService/DeleteTruck",e,r||{},c,t)},n.pb.TruckServicePromiseClient.prototype.deleteTruck=function(e,r){return this.client_.unaryCall(this.hostname_+"/pb.TruckService/DeleteTruck",e,r||{},c)},e.exports=n.pb},3779:(e,r,t)=>{var o=t(3019),n=o,s=Function("return this")(),i=t(1367);n.object.extend(proto,i),n.exportSymbol("proto.pb.Truck",null,s),n.exportSymbol("proto.pb.TruckRequest",null,s),n.exportSymbol("proto.pb.TruckResponse",null,s),n.exportSymbol("proto.pb.TrucksResponse",null,s),proto.pb.Truck=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.Truck,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.Truck.displayName="proto.pb.Truck"),proto.pb.TruckRequest=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.TruckRequest,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.TruckRequest.displayName="proto.pb.TruckRequest"),proto.pb.TruckResponse=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.pb.TruckResponse,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.TruckResponse.displayName="proto.pb.TruckResponse"),proto.pb.TrucksResponse=function(e){o.Message.initialize(this,e,0,-1,proto.pb.TrucksResponse.repeatedFields_,null)},n.inherits(proto.pb.TrucksResponse,o.Message),n.DEBUG&&!COMPILED&&(proto.pb.TrucksResponse.displayName="proto.pb.TrucksResponse"),o.Message.GENERATE_TO_OBJECT&&(proto.pb.Truck.prototype.toObject=function(e){return proto.pb.Truck.toObject(e,this)},proto.pb.Truck.toObject=function(e,r){var t,n={id:o.Message.getFieldWithDefault(r,1,""),deviceId:o.Message.getFieldWithDefault(r,2,""),deviceAlias:o.Message.getFieldWithDefault(r,3,""),deviceInterval:o.Message.getFieldWithDefault(r,4,0),description:o.Message.getFieldWithDefault(r,5,""),plate:o.Message.getFieldWithDefault(r,6,""),contractor:(t=r.getContractor())&&i.Contractor.toObject(e,t)};return e&&(n.$jspbMessageInstance=r),n}),proto.pb.Truck.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.Truck;return proto.pb.Truck.deserializeBinaryFromReader(t,r)},proto.pb.Truck.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=r.readString();e.setId(t);break;case 2:t=r.readString(),e.setDeviceId(t);break;case 3:t=r.readString(),e.setDeviceAlias(t);break;case 4:t=r.readUint32(),e.setDeviceInterval(t);break;case 5:t=r.readString(),e.setDescription(t);break;case 6:t=r.readString(),e.setPlate(t);break;case 7:t=new i.Contractor,r.readMessage(t,i.Contractor.deserializeBinaryFromReader),e.setContractor(t);break;default:r.skipField()}return e},proto.pb.Truck.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.Truck.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.Truck.serializeBinaryToWriter=function(e,r){var t=void 0;(t=e.getId()).length>0&&r.writeString(1,t),(t=e.getDeviceId()).length>0&&r.writeString(2,t),(t=e.getDeviceAlias()).length>0&&r.writeString(3,t),0!==(t=e.getDeviceInterval())&&r.writeUint32(4,t),(t=e.getDescription()).length>0&&r.writeString(5,t),(t=e.getPlate()).length>0&&r.writeString(6,t),null!=(t=e.getContractor())&&r.writeMessage(7,t,i.Contractor.serializeBinaryToWriter)},proto.pb.Truck.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,"")},proto.pb.Truck.prototype.setId=function(e){return o.Message.setProto3StringField(this,1,e)},proto.pb.Truck.prototype.getDeviceId=function(){return o.Message.getFieldWithDefault(this,2,"")},proto.pb.Truck.prototype.setDeviceId=function(e){return o.Message.setProto3StringField(this,2,e)},proto.pb.Truck.prototype.getDeviceAlias=function(){return o.Message.getFieldWithDefault(this,3,"")},proto.pb.Truck.prototype.setDeviceAlias=function(e){return o.Message.setProto3StringField(this,3,e)},proto.pb.Truck.prototype.getDeviceInterval=function(){return o.Message.getFieldWithDefault(this,4,0)},proto.pb.Truck.prototype.setDeviceInterval=function(e){return o.Message.setProto3IntField(this,4,e)},proto.pb.Truck.prototype.getDescription=function(){return o.Message.getFieldWithDefault(this,5,"")},proto.pb.Truck.prototype.setDescription=function(e){return o.Message.setProto3StringField(this,5,e)},proto.pb.Truck.prototype.getPlate=function(){return o.Message.getFieldWithDefault(this,6,"")},proto.pb.Truck.prototype.setPlate=function(e){return o.Message.setProto3StringField(this,6,e)},proto.pb.Truck.prototype.getContractor=function(){return o.Message.getWrapperField(this,i.Contractor,7)},proto.pb.Truck.prototype.setContractor=function(e){return o.Message.setWrapperField(this,7,e)},proto.pb.Truck.prototype.clearContractor=function(){return this.setContractor(void 0)},proto.pb.Truck.prototype.hasContractor=function(){return null!=o.Message.getField(this,7)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.TruckRequest.prototype.toObject=function(e){return proto.pb.TruckRequest.toObject(e,this)},proto.pb.TruckRequest.toObject=function(e,r){var t,o={truck:(t=r.getTruck())&&proto.pb.Truck.toObject(e,t)};return e&&(o.$jspbMessageInstance=r),o}),proto.pb.TruckRequest.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.TruckRequest;return proto.pb.TruckRequest.deserializeBinaryFromReader(t,r)},proto.pb.TruckRequest.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Truck;r.readMessage(t,proto.pb.Truck.deserializeBinaryFromReader),e.setTruck(t);break;default:r.skipField()}return e},proto.pb.TruckRequest.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.TruckRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.TruckRequest.serializeBinaryToWriter=function(e,r){var t;null!=(t=e.getTruck())&&r.writeMessage(1,t,proto.pb.Truck.serializeBinaryToWriter)},proto.pb.TruckRequest.prototype.getTruck=function(){return o.Message.getWrapperField(this,proto.pb.Truck,1)},proto.pb.TruckRequest.prototype.setTruck=function(e){return o.Message.setWrapperField(this,1,e)},proto.pb.TruckRequest.prototype.clearTruck=function(){return this.setTruck(void 0)},proto.pb.TruckRequest.prototype.hasTruck=function(){return null!=o.Message.getField(this,1)},o.Message.GENERATE_TO_OBJECT&&(proto.pb.TruckResponse.prototype.toObject=function(e){return proto.pb.TruckResponse.toObject(e,this)},proto.pb.TruckResponse.toObject=function(e,r){var t,o={truck:(t=r.getTruck())&&proto.pb.Truck.toObject(e,t)};return e&&(o.$jspbMessageInstance=r),o}),proto.pb.TruckResponse.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.TruckResponse;return proto.pb.TruckResponse.deserializeBinaryFromReader(t,r)},proto.pb.TruckResponse.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Truck;r.readMessage(t,proto.pb.Truck.deserializeBinaryFromReader),e.setTruck(t);break;default:r.skipField()}return e},proto.pb.TruckResponse.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.TruckResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.TruckResponse.serializeBinaryToWriter=function(e,r){var t;null!=(t=e.getTruck())&&r.writeMessage(1,t,proto.pb.Truck.serializeBinaryToWriter)},proto.pb.TruckResponse.prototype.getTruck=function(){return o.Message.getWrapperField(this,proto.pb.Truck,1)},proto.pb.TruckResponse.prototype.setTruck=function(e){return o.Message.setWrapperField(this,1,e)},proto.pb.TruckResponse.prototype.clearTruck=function(){return this.setTruck(void 0)},proto.pb.TruckResponse.prototype.hasTruck=function(){return null!=o.Message.getField(this,1)},proto.pb.TrucksResponse.repeatedFields_=[1],o.Message.GENERATE_TO_OBJECT&&(proto.pb.TrucksResponse.prototype.toObject=function(e){return proto.pb.TrucksResponse.toObject(e,this)},proto.pb.TrucksResponse.toObject=function(e,r){var t={trucksList:o.Message.toObjectList(r.getTrucksList(),proto.pb.Truck.toObject,e)};return e&&(t.$jspbMessageInstance=r),t}),proto.pb.TrucksResponse.deserializeBinary=function(e){var r=new o.BinaryReader(e),t=new proto.pb.TrucksResponse;return proto.pb.TrucksResponse.deserializeBinaryFromReader(t,r)},proto.pb.TrucksResponse.deserializeBinaryFromReader=function(e,r){for(;r.nextField()&&!r.isEndGroup();)switch(r.getFieldNumber()){case 1:var t=new proto.pb.Truck;r.readMessage(t,proto.pb.Truck.deserializeBinaryFromReader),e.addTrucks(t);break;default:r.skipField()}return e},proto.pb.TrucksResponse.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.pb.TrucksResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.pb.TrucksResponse.serializeBinaryToWriter=function(e,r){var t;(t=e.getTrucksList()).length>0&&r.writeRepeatedMessage(1,t,proto.pb.Truck.serializeBinaryToWriter)},proto.pb.TrucksResponse.prototype.getTrucksList=function(){return o.Message.getRepeatedWrapperField(this,proto.pb.Truck,1)},proto.pb.TrucksResponse.prototype.setTrucksList=function(e){return o.Message.setRepeatedWrapperField(this,1,e)},proto.pb.TrucksResponse.prototype.addTrucks=function(e,r){return o.Message.addToRepeatedWrapperField(this,1,e,proto.pb.Truck,r)},proto.pb.TrucksResponse.prototype.clearTrucksList=function(){return this.setTrucksList([])},n.object.extend(r,proto.pb)}}]);