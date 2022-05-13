import { TreeReader } from "../client/treeReader"
import UploadGeo from "../client/geo"
import { ValidationTree } from "../client/validationTree"
import { TreeBusiness } from "./TreeBusiness"
import { GridBusiness } from "./GridBusiness"
import {
  ChangesGeoNotificationResponse,
  NotificationDTS,
  AutomaticallyExecuteChangeTreeGeoResponse,
} from "../proto/proto/services/geo_reader.services_pb"

export class GeoReader {
  private notificationList = [] as any

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
    const response = new ChangesGeoNotificationResponse()
    const validationTree = new ValidationTree()

    let treeValidated = validationTree.getValidatedTree()
    if (!treeValidated.response) {
      this.getResponseChangeGeoNotification("Error when reading files")
    }

    let treeFile = validationTree.getValidatedTreeToCreate()
    if (treeValidated.response && !treeFile.response) {
      this.getResponseChangeGeoNotification(
        "Error when reading content from files"
      )
    }

    const treeBusiness = new TreeBusiness()
    const checkChange = await treeBusiness.checkChangeTreeGeo(
      treeValidated.tree,
      treeFile.tree
    )

    response.setStatus(true)
    if (checkChange.pathChange.length > 0) {
      this.getResponseChangeGeoNotification("There are changes in the files")
    }
    response.setNotificationsList(this.notificationList)
    return response
  }

  private getResponseChangeGeoNotification(message: string) {
    const notification = new NotificationDTS()
    notification.setTitle("DTS Configuration")
    notification.setMessage(message)
    this.notificationList.push(notification)
  }

  async automaticallyExecuteChangeTreeGeoAndUpdateGrid() {
    const response = new AutomaticallyExecuteChangeTreeGeoResponse()
    let createGeo = await this.createGeo()
    if (createGeo.status) {
      const gridBusiness = new GridBusiness()
      let updateGrid = await gridBusiness.updateGrid()
      if (updateGrid.getStatus()) {
        response.setStatus(true)
        response.setMessage("Success")
      } else {
        response.setStatus(false)
        response.setMessage("Failed")
      }
    } else {
      response.setStatus(false)
      response.setMessage("Failed")
    }
    return response
  }
}
