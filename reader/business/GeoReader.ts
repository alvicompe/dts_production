import { TreeReader } from '../client/treeReader'
import UploadGeo from '../client/geo'
import { ValidationTree } from '../client/validationTree'

export class GeoReader {
  readFiles() {
    const tree = new ValidationTree()
    return tree.getValidatedTree()
  }

  async createGeo() {
    const tree = new TreeReader()
    let { geo, status, message, errors } = await tree.buildGeo()
    if (status) {
      const okUploadGeo = await UploadGeo(JSON.stringify(geo))
      message = okUploadGeo
        ? 'Successful creation'
        : 'Something went wrong in the creation'
    }
    return { status, message, errors }
  }
}
