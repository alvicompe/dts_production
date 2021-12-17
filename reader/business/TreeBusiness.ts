import { TreeClient } from "../client/treeClient"
import { Tree } from "../proto/proto/tree_pb"
import { envVariables } from "../common/environmentsVariables"

export class TreeBusiness {
  private response = {
    firstLoad: true,
    pathChange: [] as any,
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
        JSON.stringify(treeFiles)
      )
      this.response.firstLoad = false
      return this.response
    }

    const tree = new Tree()
    tree.setTree(newTree)
    tree.setFiles(JSON.stringify(treeFiles))
    await this.createTree(tree)

    return this.response
  }

  async compareLastTreeWithNewTree(
    lastTree: any,
    newTree: string,
    treeFiles: any
  ) {
    if (lastTree.tree !== newTree) {
      let filesLast = JSON.parse(lastTree.files)
      let treeFilesJSON = JSON.parse(treeFiles)
      this.getNewModifiedOrDeletedFiles(filesLast, treeFilesJSON)
      if (this.response.pathChange.length > 0) {
        const tree = new Tree()
        tree.setTree(newTree)
        tree.setFiles(treeFiles)
        await this.createTree(tree)
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
          this.response.pathChange.push({
            path: file.path,
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
          state: envVariables.STATE_FILE.modified,
        })
      }
    })
  }
}
