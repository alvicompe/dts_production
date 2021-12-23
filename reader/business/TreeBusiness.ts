import { TreeClient } from "../client/treeClient"
import { Tree } from "../proto/proto/tree_pb"
import { envVariables } from "../common/environmentsVariables"

export class TreeBusiness {
  private response = {
    firstLoad: true,
    pathChange: [] as any,
    status: true,
  }

  async createTree(param: Tree) {
    try {
      const treeClient = new TreeClient()
      return await treeClient.createTree(param)
    } catch (e) {
      console.log(e)
      return { status: false, tree: undefined }
    }
  }

  async retrieveTree() {
    try {
      const treeClient = new TreeClient()
      return await treeClient.retrieveTree()
    } catch (e) {
      console.log(e)
      return { status: false, tree: undefined }
    }
  }

  async uploadTree(newTree: any, treeFiles: any) {
    const lastTree = await this.retrieveTree()
    if (lastTree.tree !== undefined) {
      await this.compareLastTreeWithNewTree(
        lastTree.tree,
        newTree,
        JSON.stringify(treeFiles),
        false
      )
      this.response.firstLoad = false

      this.response.pathChange = this.getPathChangeArrayString(
        this.response.pathChange
      )

      return this.response
    }

    const tree = new Tree()
    tree.setTree(newTree)
    tree.setFiles(JSON.stringify(treeFiles))
    await this.createTree(tree)

    return this.response
  }

  async checkTreeGeo(newTree: any, treeFiles: any) {
    const lastTree = await this.retrieveTree()
    if (lastTree.tree !== undefined) {
      await this.compareLastTreeWithNewTree(
        lastTree.tree,
        newTree,
        JSON.stringify(treeFiles),
        true
      )
      this.response.firstLoad = false

      return this.response
    }

    return this.response
  }

  async compareLastTreeWithNewTree(
    lastTree: any,
    newTree: string,
    treeFiles: any,
    isCheck: boolean
  ) {
    if (lastTree.tree !== newTree) {
      let filesLast = JSON.parse(lastTree.files)
      let treeFilesJSON = JSON.parse(treeFiles)
      this.getNewModifiedOrDeletedFiles(filesLast, treeFilesJSON)
      if (this.response.pathChange.length > 0) {
        if (!isCheck) {
          const tree = new Tree()
          tree.setTree(newTree)
          tree.setFiles(treeFiles)
          await this.createTree(tree)
        }
      }
    }
  }

  private getNewModifiedOrDeletedFiles(filesLast: any[], filesNew: any[]) {
    let filesLastArray = filesLast

    this.getFilesModified(filesNew, filesLast, filesLastArray)
    this.getFilesCreated(filesLastArray, filesLast)
    this.getFilesDeleted(filesLastArray, filesLast)
  }

  private getFilesDeleted(filesLastArray: any[], filesLast: any[]) {
    filesLastArray.forEach((file: any) => {
      let exist = filesLast.find((lastElement) => {
        if (lastElement.path === file.path) {
          return lastElement
        }
      })

      if (exist) {
        const findNewFile = this.response.pathChange.find(
          (item: any) => item.path == file.path
        )

        if (!findNewFile) {
          TreeBusiness.getNameDirectory(file)
          this.response.pathChange.push({
            path: file.path,
            file: file.name,
            directory: file.project,
            state: envVariables.STATE_FILE.deleted,
          })
        }
      }
    })
  }

  private getFilesCreated(filesLastArray: any[], filesLast: any[]) {
    this.response.pathChange.forEach((element: any) => {
      let exist = filesLastArray.find((file) => {
        if (file.path != element.path) {
          return element
        }
      })
      if (exist) {
        const findNewFile = filesLast.find(
          (item: any) => item.path == element.path
        )
        if (!findNewFile) {
          element.state = envVariables.STATE_FILE.created
        }
      }
    })
  }

  private getFilesModified(
    filesNew: any[],
    filesLast: any[],
    filesLastArray: any[]
  ) {
    filesNew.forEach((fileNewElement: any) => {
      let exist = filesLast.find((element, index) => {
        if (JSON.stringify(element) === JSON.stringify(fileNewElement)) {
          filesLastArray.splice(index, 1)
          return element
        }
      })

      if (!exist) {
        this.response.pathChange.push({
          path: fileNewElement.path,
          file: fileNewElement.name,
          directory: fileNewElement.project,
          state: envVariables.STATE_FILE.modified,
        })
      }
    })
  }

  private static getNameDirectory(file: any) {
    if (file.path.toLowerCase().includes("dme")) {
      file.directory = "dme"
    } else if (file.path.toLowerCase().includes("rutas")) {
      file.directory = "road"
    } else if (file.path.toLowerCase().includes("pad")) {
      file.directory = "pad"
    } else if (file.path.toLowerCase().includes("stock")) {
      file.directory = "stock"
    }
  }

  private getPathChangeArrayString(pathChange: any) {
    let pathChangeString: string[] = []
    pathChange.forEach((element: { path: string; directory: any }) => {
      if (!element.path.toLowerCase().includes("materials")) {
        TreeBusiness.getNameDirectory(element)
        pathChangeString.push(element.directory)
      }
    })
    return Array.from(new Set(pathChangeString))
  }
}
