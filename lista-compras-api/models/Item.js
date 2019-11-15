const {Schema, model} = require('mongoose');

const esquema = new Schema({
    descricao: {
        type: String,
        required: true //obrigatorio 
    },
    unidade:{
        type: String,
        required: true
    }
});

const Item = model('Item', esquema); //sempre vai ser com a letra maiuscula e no singular

module.exports = Item;