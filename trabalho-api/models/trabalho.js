'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trabalho = sequelize.define('Trabalho', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orientador: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estudante1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estudante2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estudante3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
        len:["CET","CAE","MDIS","CHCSA","CBS","FIC"] 
      },
    dataSubimissao: DataTypes.DATE
  }, 
  {});
  Trabalho.associate = function (models) {
    
  };
  return Trabalho;
};