const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Time = sequelize.define("Time", {
        nome: Sequelize.STRING,
        dataFundacao: Sequelize.DATE,
        serie: Sequelize.STRING, 
        qtdTitulos: Sequelize.INTEGER,        
        /* Todos os Campos Exceto: ID, createdAt, updatedAt */
    })
    return Time;
}
