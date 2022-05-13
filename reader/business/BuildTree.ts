const dirTree = require("directory-tree")

export class BuildTree {
  getTreeToSave(pathRoot: string) {
    const arrayFiles: any[] = []
    dirTree(
      `./${pathRoot}/`,
      {
        extensions: /\.csv$|\.dxf/,
        exclude: /\w.*[-_][a-qA-Qs-zS-Z][_]?[a-zA-Z]?.csv$|\w.*[rR][_].csv$/,
        attributes: ["type", "extension", "ctime", "birthtime", "mtime"],
        normalizePath: true,
      },
      (item: any) => {
        let projects = item.path.split("/")
        arrayFiles.push({
          path: item.path,
          type: item.type,
          name: item.name,
          extension: item.extension,
          ctime: item.ctime,
          mtime: item.mtime,
          birthtime: item.birthtime,
          project: projects[projects.length - 2],
        })
      },
      null
    )
    return arrayFiles
  }

  getTreeForSight(pathRoot: string) {
    return dirTree(
      `./${pathRoot}/`,
      {
        extensions: /\.csv$|\.dxf/,
        exclude: /\w.*[-_][a-qA-Qs-zS-Z][_]?[a-zA-Z]?.csv$|\w.*[rR][_].csv$/, // View course Regex
        attributes: ["type", "status", "ctime", "mtime"],
      },
      null,
      null
    )
  }
}
