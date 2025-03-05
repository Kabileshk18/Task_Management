const { DataTypes } = require('sequelize')
const path = require('path')
const { type } = require('os')
const { timeStamp } = require('console')
const sequelize = require(path.join(__dirname,'..','config','db.js'))
const User = require(path.join(__dirname,'User.js'))

const Task = sequelize.define('Task', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT
    },
    status : {
        type : DataTypes.ENUM('pending','in-progress','completed'),
        defaultValue : 'pending'
    },
    dueDate : {
        type : DataTypes.DATE,
        allowNull : false
    },
    userId : {
        type : DataTypes.INTEGER,
        references : {
            model : User,
            key : 'id'
        }
    }
}, {
    tableName : 'tasks', 
    timestamps : false
})

User.hasMany(Task, { foreignKey : 'userId' })
Task.belongsTo(User, { foreignKey : 'userId' })

module.exports = Task