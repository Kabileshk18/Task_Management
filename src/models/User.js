const { DataTypes } = require('sequelize')
const path = require('path')
const sequelize = require(path.join(__dirname,'..','config','db.js'))

const User = sequelize.define('User', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        alloeNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    role : {
        type : DataTypes.ENUM('admin', 'user'),
        defaultValue : 'user'
    }
}, {
    tableName : 'users',
    timestamps : false
})

module.exports = User