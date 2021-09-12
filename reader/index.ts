import { Server, ServerCredentials } from "grpc";
import { GridServiceService } from "./proto/proto/grid_grpc_pb";
import { GridServer } from "./service/grid";
import { readFileSync } from "fs"
import { KeyCertPair } from "grpc"
import path from "path"


// const p = path.join(__dirname, "cert", "server.crt")
const rootCert = readFileSync(path.join(__dirname, "cert", "server.crt"));

// const channelCreds = grpc.credentials.createSsl(rootCert);
// const metaCallback = (_params, callback) => {
//     const meta = new grpc.Metadata();
//     meta.add('custom-auth-header', 'token');
//     callback(null, meta);
// }
// const callCreds = grpc.credentials.createFromMetadataGenerator(metaCallback);
// const combCreds = grpc.credentials.combineChannelCredentials(channelCreds, callCreds);
// const stub = new helloworld.Greeter('myservice.example.com', combCreds);
const keyCertPairs:Array<KeyCertPair> = [
    {
     private_key: readFileSync(path.join(__dirname, "cert", "server.key")),
     cert_chain: readFileSync(path.join(__dirname, "cert", "server.crt"))
    }
]


const server = new Server();
server.addService(GridServiceService, new GridServer());

const port = 9004;
const uri = `dts.pe:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createSsl(rootCert, keyCertPairs, false));
/*
server.bind(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createSsl({
     rootCerts: fs.readFileSync(
      path.join(certsDir, "Snazzy_Microservices.crt")
     ),
     keyCertPairs: [
      {
       privateKey: fs.readFileSync(
        path.join(
         certsDir,
         "server-certs",
         "login.services.widgets.inc.key"
        )
       ),
       certChain: fs.readFileSync(
        path.join(
         certsDir,
         "server-certs",
         "login.services.widgets.inc.crt"
        )
       )
      }
     ],
     checkClientCertificate: true
    })
   );
*/

// server.bind(uri, ServerCredentials.createInsecure());
server.start();
