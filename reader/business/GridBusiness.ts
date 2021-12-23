import { GeoReader } from "./GeoReader"
import {
  GridResponse,
  UpdateGridRequest,
  UpdateGridResponse,
} from "../proto/proto/grid_pb"
import GridClient from "../client/gridClient"

export class GridBusiness {
  async createGrid() {
    const createGridResponse = new GridResponse()
    const clientGrid = new GridClient()
    try {
      const doneCreateResponse = await clientGrid.createGrid()
      createGridResponse.setDone(doneCreateResponse)
    } catch (err) {
      createGridResponse.setDone(false)
    }
    return createGridResponse
  }

  // TODO: refactor amount of lines in the method updateGrid()
  async updateGrid() {
    const geoReader = new GeoReader()
    const response = new UpdateGridResponse()
    const { status, firstLoad, pathChange } =
      await geoReader.checkChangeGeoGrid()

    if (!status) {
      response.setStatus(false)
      response.setMessage("Error when reading files")
      return response
    }

    const clientGrid = new GridClient()

    if (firstLoad) {
      try {
        const doneCreateResponse = await clientGrid.createGrid()
        if (doneCreateResponse) {
          response.setStatus(doneCreateResponse)
          response.setMessage("Success creating zones")
        } else {
          response.setStatus(doneCreateResponse)
          response.setMessage("Something went wrong creating zones")
        }
      } catch (err) {
        response.setStatus(false)
        response.setMessage("Error when reading files")
      }
    } else {
      if (pathChange.length > 0) {
        const updateGridRequest = new UpdateGridRequest()
        updateGridRequest.setPathchangeList(pathChange)
        try {
          const doneUpdateResponse = await clientGrid.updateGrid(
            updateGridRequest
          )
          if (doneUpdateResponse.getStatus()) {
            response.setStatus(doneUpdateResponse.getStatus())
            response.setMessage(doneUpdateResponse.getMessage())
          } else {
            response.setStatus(doneUpdateResponse.getStatus())
            response.setMessage("Something went wrong updating zones")
          }
        } catch (e) {
          response.setStatus(false)
          response.setMessage("Error when reading files")
        }
      } else {
        response.setStatus(false)
        response.setMessage("Not changes yet")
      }
    }
    return response
  }
}
