const { DataTypes } = require('sequelize')
const path = require('path')
const sequelize = require(path.join(__dirname,'..','config','db.js'))
const User = require(path.join(__dirname, 'User.js'))
const Task = require(path.join(__dirname, 'Task.js'))

const ActivityLog = sequelize.define('ActivityLog',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    taskId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Task,
            key : 'id'
        }
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : User,
            key : 'id'
        }
    },
    action : {
        type : DataTypes.STRING,
        allowNull : false
    },
    timestamp : {
        type : DataTypes.DATE,
        default : DataTypes.NOW
    }   
}, {
    tableName : 'activity_logs',
    timestamps : false
})

module.exports = ActivityLog


