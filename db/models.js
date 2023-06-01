/**
 * Created by shivanggupta on 01/04/23.
 */

const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT
});

const User = db.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING(25),
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
})

db.sync({force: process.env.FORCE}).then(() => {
    console.log("Database Configured");
})

module.exports = {
    db,
    models: {
        User
    }
};
