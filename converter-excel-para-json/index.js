const excelToJson = require('convert-excel-to-json');

let json = excelToJson({
    sourceFile: 'lista.xlsx', //lista.xlsx arquivo do Excel  
    columnToKey:{
        A:'unidade',
        B:'descricao'
    }
});
json = json['Página1'].slice(1,json.length)
console.log(json)