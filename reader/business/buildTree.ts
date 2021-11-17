const PATH = require('path');
const dirTree = require('directory-tree');


export class BuildTree {
     getTree() {
         const arrayFiles: any[] = []
         dirTree('./geo/',
             {
                 extensions: /\.csv$|\.dxf/,
                 exclude: /\w.*[-_][a-qA-Qs-zS-Z][_]?[a-zA-Z]?.csv$|\w.*[rR][_].csv$/,
                 attributes: ["type"],
                 normalizePath: true
             },
             (item: any) => arrayFiles.push(item),
             null)
        return arrayFiles
    }
}
