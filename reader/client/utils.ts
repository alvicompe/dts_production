import { GeoServiceClient } from "../proto/proto/geo_grpc_pb"
import { GridServiceClient } from "../proto/proto/grid_grpc_pb"
import { TreeServiceClient } from "../proto/proto/tree_grpc_pb"
import { credentials } from "grpc"
import { readFileSync } from "fs"

// const port = 3000;
const cacert = readFileSync("./cert/server.crt")
const cert_chain = readFileSync("./cert/server.crt")
const private_key = readFileSync("./cert/server.key")

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQzOTA1MjQsInVzZXJuYW1lIjoiZGlzcGF0Y2hlciIsInJvbGUiOiJESVMifQ.b_qDF3c_MD9AJNAM8GcVB57hrQD3TvMtzRbP9DqYgbg"

function newChannelCredentials() {
  return credentials.combineChannelCredentials(
    // credentials.createSsl(cacert, private_key, cert_chain),
    // credentials.createFromMetadataGenerator((params, callback) => {
    //   const metadata = new Metadata()
    //   metadata.add('authorization', token)
    //   callback(null, metadata)
    // }),
    credentials.createInsecure()
  )
}

const cred = newChannelCredentials()

export const client = new GeoServiceClient(`dts.pe:9003`, cred, {
  "grpc.ssl_target_name_override": "dts.pe",
  "grpc.default_authority": "dts.pe",
})
console.log("client", client)

export const clientGrid = new GridServiceClient(`dts.pe:9003`, cred)
console.log("clientGrid", clientGrid)

export const clienTree = new TreeServiceClient(`dts.pe:9003`, cred)
console.log("clienTree", clienTree)

export const noop = () => {}
