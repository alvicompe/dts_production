import { BuildTree } from "../business/BuildTree"
import { envVariables } from "../common/environmentsVariables"
import { MessageError } from "../proto/proto/services/geo_reader.services_pb"

export class ValidationTree {
  private STATE_FOLDER_NAME: { [folderName: string]: number } = {
    materials: 0,
    dme: 0,
    pad: 0,
    rutas: 0,
    stock: 0,
    tajo: 0,
  }
  private response: boolean = true
  private errors = [] as any
  private pathErrors: string[] = [] as any

  getValidatedTree() {
    const buildTree = new BuildTree()
    let string_tree: string
    const tree = buildTree.getTreeForSight(envVariables.ROOT_PATH)

    // Validation files
    this.getValidationTreeChildren(tree.children)
    this.addErrorDirectories()
    this.errors.length > 0 ? (tree.status = false) : (tree.status = true)

    // Convert json to string
    string_tree = JSON.stringify(tree)
    
    return { tree: string_tree, response: this.response, errors: this.errors }
  }

  addErrorDirectories() {
    let fileNotExists = Object.keys(this.STATE_FOLDER_NAME).filter(
      (el) => this.STATE_FOLDER_NAME[el] === 0
    )

    // Add message errors
    fileNotExists.forEach((file) => {
      const messageError = new MessageError()
      messageError.setPath(file.toUpperCase())
      messageError.setMessage("No directory exists")
      this.errors.push(messageError)
    })

    if (fileNotExists.length > 0) {
      this.response = false
    }
  }

  getValidatedTreeToCreate() {
    const buildTree = new BuildTree()
    const tree = buildTree.getTreeForSight(envVariables.ROOT_PATH)
    this.getValidationTreeChildren(tree.children)
    const treeInline = buildTree.getTreeToSave(envVariables.ROOT_PATH)

    return { tree: treeInline, response: this.response }
  }

  private getValidationTreeChildren(childrenTree: any) {
    for (let index in childrenTree) {
      if (childrenTree[index] === undefined) {
        continue
      }

      if (childrenTree[index].children === undefined) {
        continue
      }

      if (childrenTree[index].path.search(/\w.*.d*[-| ]d*.*/i) != -1) {
        this.validateDirectoryContent(childrenTree[index])
      } else {
        this.validateDirectoryName(childrenTree[index])
      }

      this.getValidationTreeChildren(childrenTree[index].children)

      if (childrenTree[index].type == "directory") {
        this.validateDirectories(childrenTree[index].path)
      }

      const isPath = this.checkPathAvailability(
        this.pathErrors,
        childrenTree[index].path
      )

      if (isPath) {
        childrenTree[index].status = false
      }

      if (childrenTree[index].status === undefined) {
        childrenTree[index].status = true
      }
    }
  }

  private validateDirectoryName(tree: any) {
    const isInclude = tree.path
      .toLowerCase()
      .includes(envVariables.FOLDER_NAME.pit.toLowerCase())

    if (isInclude && tree.name.length > 4) {
      const messageError = new MessageError()
      messageError.setPath(tree.path)
      messageError.setMessage(`Incorrect format, it must have 4 digits.`)
      this.errors.push(messageError)

      tree.status = false
      this.response = false
      this.pathErrors.push(tree.path)
    }
  }

  private checkPathAvailability(pathErrors: any[], path: any) {
    return pathErrors.some((error) => error.includes(path))
  }

  private validateDirectoryContent(directory: any) {
    const pitSearch = new RegExp(`${envVariables.FOLDER_NAME.pit}`, "i")

    if (directory.path.search(pitSearch) != -1) {
      this.validateFiles(directory, true)
    } else {
      this.validateFiles(directory)
    }

    if (directory.status === undefined) {
      directory.status = true
    } else {
      this.pathErrors.push(directory.path)
    }
  }

  private validateDirectories(path: string): void {
    const values = Object.values(envVariables.FOLDER_NAME)
    const value: any = values.find((value) => {
      return path.toLowerCase().includes(value.toLowerCase())
    })

    this.STATE_FOLDER_NAME[value] = 1
  }

  private validateFiles(directory: any, isPid = false) {
    const fileExtensionCSV: string = ".csv"
    const fileExtensionDXF: string = ".dxf"
    let countCSV: number = 0
    let countDXF: number = 0

    directory.children.forEach((children: any) => {
      if (children.path.toLowerCase().search(/\.dxf$/) != -1) {
        countDXF += 1
      }
      if (children.path.toLowerCase().search(/\.csv$/) != -1) {
        countCSV += 1
      }

      ;((countCSV && isPid) || countDXF) > 1
        ? (children.status = false)
        : (children.status = true)
    })

    if (countCSV == 0) {
      this.messageError(false, fileExtensionCSV, directory)
    }

    if (countDXF == 0 && isPid) {
      this.messageError(false, fileExtensionDXF, directory)
    }

    if (countCSV > 1 && isPid) {
      this.messageError(true, fileExtensionCSV, directory)
    }

    if (countDXF > 1) {
      this.messageError(true, fileExtensionDXF, directory)
    }
  }

  private messageError(
    isDuplicated: boolean,
    fileExtension: string,
    directory: any
  ) {
    let message: string
    isDuplicated
      ? (message = `Duplicated files with extension`)
      : (message = `Missing file with extension`)

    this.response = false
    directory.status = false

    const messageError = new MessageError()
    messageError.setPath(directory.path)
    messageError.setMessage(`${message} ${fileExtension}`)
    this.errors.push(messageError)
  }
}
