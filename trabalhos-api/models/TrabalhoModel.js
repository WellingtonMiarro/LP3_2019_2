const TrabalhoModel = (sequelize, DataTypes) => {
    const Trabalho = sequelize.define('Trabalho', {
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{});
    return Trabalho;
};
module.exports = TrabalhoModel;