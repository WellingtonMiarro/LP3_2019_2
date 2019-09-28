const Sequelize = require('sequelize');

const dbConfig = require('./config');
const TrabalhoModel = require('../models/TrabalhoModel');
const ItemModel = require('../models/ItemModel');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password,{
        host: config.host,
        dialect: config.dialect
    }   
);


const Trabalho = TrabalhoModel(conexao, Sequelize); 
const Item = ItemModel(conexao, Sequelize);

conexao.sync({alter: true}).then(()=> console.log('BD Conectado e sincronizado!'));

const db = { Trabalho, Item };

module.exports = db;
