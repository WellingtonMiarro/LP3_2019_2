const excelToJson = require('convert-excel-to-json');

let json = excelToJson({
    sourceFile: 'filmes.xlsx', //lista.xlsx arquivo do Excel  
    columnToKey:{
        A:'titulo',
        B:'ano',
        C:'direcao',
        D:'sinopse',
        E:'nota',
        F:'genero'
    }
});
json = json['Página1'].slice(1,json.length)
console.log(json)