const {Schema, model} = require('mongoose');

const user = new Schema({
    nome: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true,
        maxlength: 8
    },
    confirmarSenha:{
        type: String,
        required: false
    }
});

const ListaUser = model('Usuario', user);

module.exports = ListaUser;