var DxfParser = require('dxf-parser');
var fs = require('fs');
var path = require('path');

console.log(DxfParser);
var INPUT = path.join(__dirname, '../geo/2021/celdas', 'test.dxf')
var OUTPUT = path.join(__dirname, '../json/celdas', 'test.json')
// var OUTPUT = path.join(__dirname, '../json/celdas')


var fileStream = fs.createReadStream(INPUT, { encoding: 'utf8' });

var parser = new DxfParser();
parser.parseStream(fileStream, function (err, dxf) {
    if (err) return console.error(err.stack);
    fs.writeFileSync(OUTPUT, JSON.stringify(dxf, null, 3));
    console.log('Done writing output to ' + OUTPUT);
});