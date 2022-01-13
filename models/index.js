const Sequelize = require("sequelize");
const sequelize = new Sequelize('nodedb', 'root', '123qwe', {
    dialect: 'mysql',
    host: 'localhost',
    define:{
        timestamps: false
    }
});

db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require('./userModel')(sequelize,Sequelize);
module.exports = db;