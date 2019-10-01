const Sequelize = require('sequelize');
const TrabalhoModels = require('../models/trabalho'); // pasta  Models
const dbConfig = require('./config');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect
});

const Trabalho = TrabalhoModels(conexao, Sequelize);

conexao
    .sync({ alter: true })
    .then(() => console.log('Sequelize -> BD e tabelas criados'));

const db = { Trabalho };

module.exports = db;