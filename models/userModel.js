module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {  //!user нужно указывать в ед числе(даже если таблица в бд называется users)
        id: {
            type: Sequelize.INTEGER,//! все это по типу синтаксису mysql. Тут оно чуть по другмоу преобразовано
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.INTEGER,
        },
        password: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        role:{
            type: Sequelize.STRING
        }
    });
    return User

}