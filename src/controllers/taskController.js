const bcrypt = require('bcryptjs')
const path = require('path')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const User = require(path.join(__dirname,'..','models','User.js'))
const Task = require(path.join(__dirname,'..','models','Task.js'))

const createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const task = await Task.create({ title, description, dueDate, userId: req.user.id });
        res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ include: User });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.user.id } });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        await task.destroy();
        return res.json({ message: "Task deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const assignTask = async (req, res) => {
    try {
        const { userId, taskId} = req.body
        if(!userId || !taskId){
            return res.status(400).json({error:"All fields required"})
        }
        const useravail = await User.findByPk(userId)
        if(!useravail){
            return res.status(400).json({message:"No such user found"})
        }
        const taskavail = await Task.findByPk(taskId)
        if(!taskavail){
            return res.status(400).json({message:"No such task found"})
        }
        taskavail.userId = userId
        await taskavail.save()
        return res.status(200).json({message:"Task assigned successfully", taskavail})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = { createTask, getAllTasks, getUserTasks, deleteTask, assignTask }