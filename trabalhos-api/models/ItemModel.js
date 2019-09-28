const ItemModel = (sequelize, DataTypes) => {
    const Trabalho = sequelize.define('Trabalho', {
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        orientador:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estudante3:{
            type: DataTypes.STRING,
            allowNull: true
        },
        area:{
            type: DataTypes.STRING,
            allowNull: false
           
        },
        dataSubmissao:{
            type: DataTypes.DATEONLY,
            allowNull: true
        }

    },{});
    return Trabalho;
};
module.exports = ItemModel;