import { TreeReader } from "../client/treeReader"
import UploadGeo from "../client/geo"
import { ValidationTree } from "../client/validationTree"

// import { TreeBusiness } from "./TreeBusiness"

export class GeoReader {
  async readFiles() {
    const validationTree = new ValidationTree()
    let { tree, response, errors } = validationTree.getValidatedTree()
    // let treeFile = validationTree.getValidatedTreeToCreate()
    // const treeBusiness = new TreeBusiness()
    // if (treeFile.response) {
    //   await treeBusiness.uploadTree(tree, treeFile.tree)
    // }

    return { tree, response, errors }
  }

  async createGeo() {
    const tree = new TreeReader()
    let { geo, status, message, errors } = await tree.buildGeo()
    if (status) {
      const okUploadGeo = await UploadGeo(JSON.stringify(geo))
      message = okUploadGeo
        ? "Successful creation"
        : "Something went wrong in the creation"
    }
    return { status, message, errors }
  }
}
