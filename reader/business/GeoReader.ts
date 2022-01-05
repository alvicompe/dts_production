import { TreeReader } from "../client/treeReader"
import UploadGeo from "../client/geo"
import { ValidationTree } from "../client/validationTree"
import { TreeBusiness } from "./TreeBusiness"
import {
  AutomaticallyExecuteChangeTreeGeoResponse,
  ChangesGeoNotificationResponse,
  NotificationDTS,
} from "../proto/proto/geo-reader_pb"
import { GridBusiness } from "./GridBusiness"

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
    const response = new ChangesGeoNotificationResponse()
    const validationTree = new ValidationTree()

    let treeValidated = validationTree.getValidatedTree()
    if (!treeValidated.response) {
      GeoReader.getResponseChangeGeoNotification(
        response,
        "Error when reading files"
      )
      return response
    }

    let treeFile = validationTree.getValidatedTreeToCreate()
    const treeBusiness = new TreeBusiness()

    if (!treeFile.response) {
      GeoReader.getResponseChangeGeoNotification(
        response,
        "Error when reading content from files"
      )
      return response
    }

    const checkChange = await treeBusiness.checkChangeTreeGeo(
      treeValidated.tree,
      treeFile.tree
    )

    response.setStatus(checkChange.status)
    if (checkChange.pathChange.length > 0) {
      GeoReader.getResponseChangeGeoNotification(
        response,
        "There are changes in the files"
      )
    }

    return response
  }

  private static getResponseChangeGeoNotification(
    response: ChangesGeoNotificationResponse,
    message: string
  ) {
    const notification = new NotificationDTS()
    const notificationList = []
    notification.setTitle("DTS Configuration")
    notification.setMessage(message)
    notificationList.push(notification)
    response.setNotificationsList(notificationList)
  }

  async automaticallyExecuteChangeTreeGeoAndUpdateGrid() {
    const response = new AutomaticallyExecuteChangeTreeGeoResponse()
    let createGeo = await this.createGeo()
    console.log(createGeo.status, "😀")
    if (createGeo.status) {
      const gridBusiness = new GridBusiness()
      let updateGrid = await gridBusiness.updateGrid()
      console.log(updateGrid.getStatus(), "😁")
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
