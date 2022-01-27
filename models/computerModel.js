module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("computer", {
        id: {
            type: Sequelize.INTEGER,
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