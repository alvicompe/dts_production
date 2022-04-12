import { clienTree } from "./utils"
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb"
import { Tree } from "../proto/proto/entities/tree_pb"
import {
  CreateTreeRequest,
  RetrieveTreeByIdRequest,
} from "../proto/proto/services/tree.services_pb"

export class TreeClient {
  createTree(tree: Tree) {
    return new Promise<any>((resolve, reject) => {
      const request = new CreateTreeRequest()
      request.setTree(tree)
      clienTree.createTree(request, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve({
            status: res.getStatus(),
            tree: res.getTree(),
          })
        }
      })
    })
  }

  retrieveTree() {
    return new Promise<any>((resolve, reject) => {
      const request = new google_protobuf_empty_pb.Empty()
      clienTree.retrieveTree(request, (err, res) => {
        if (err) {
          reject(err)
        } else {
          const tree = { ...res.toObject() }
          resolve({
            status: tree.status,
            tree: tree.tree,
          })
        }
      })
    })
  }

  retrieveTreeById(param: string) {
    return new Promise<any>((resolve, reject) => {
      const request = new RetrieveTreeByIdRequest()
      request.setId(param)
      clienTree.retrieveTreeByID(request, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve({
            status: res.getStatus(),
            tree: res.getTree(),
          })
        }
      })
    })
  }
}