import { TreeReader } from "../client/treeReader"
import UploadGeo from "../client/geo"
import { ValidationTree } from "../client/validationTree"
import { TreeBusiness } from "./TreeBusiness"
import {
  ChangeFile,
  CheckChangesTreeGeoResponse,
} from "../proto/proto/geo-reader_pb"

export class GeoReader {
  async readFiles() {
    const validationTree = new ValidationTree()
    let { tree, response, errors } = validationTree.getValidatedTree()
    return { tree, response, errors }
  }

  async checkChangeGeoGrid() {
    const validationTree = new ValidationTree()
    let treeValidated = validationTree.getValidatedTree()

    if (!treeValidated.response) {
      return { status: false, firstLoad: false, pathChange: [] }
    }

    let treeFile = validationTree.getValidatedTreeToCreate()
    const treeBusiness = new TreeBusiness()

    if (!treeFile.response) {
      return { status: false, firstLoad: false, pathChange: [] }
    }

    const { status, firstLoad, pathChange } = await treeBusiness.uploadTree(
      treeValidated.tree,
      treeFile.tree
    )
    return { status, firstLoad, pathChange }
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

  async checkChangeTreeGeo() {
    const response = new CheckChangesTreeGeoResponse()
    const validationTree = new ValidationTree()
    let treeValidated = validationTree.getValidatedTree()
    if (!treeValidated.response) {
      response.setStatus(false)
      response.setMessage("Error when reading files")
      return response
    }

    let treeFile = validationTree.getValidatedTreeToCreate()
    const treeBusiness = new TreeBusiness()

    if (!treeFile.response) {
      response.setStatus(false)
      response.setMessage("Error when reading content from files")
      return response
    }

    const { status, firstLoad, pathChange } = await treeBusiness.checkTreeGeo(
      treeValidated.tree,
      treeFile.tree
    )

    let parserPathFile: ChangeFile[] = []

    pathChange.forEach((element: any) => {
      const changeFile = new ChangeFile()
      changeFile.setDirectory(element.directory)
      changeFile.setFile(element.file)
      changeFile.setPath(element.path)
      changeFile.setState(element.state)
      parserPathFile.push(changeFile)
    })

    response.setStatus(status)
    response.setFirstload(firstLoad)
    response.setMessage("Success")
    response.setChangefilesList(parserPathFile)
    return response
  }
}
