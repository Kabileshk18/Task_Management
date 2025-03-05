const express = require('express')
const path = require('path')
const router = express.Router()
const { createTask, getAllTasks, getUserTasks, deleteTask, assignTask } = require(path.join(__dirname,'..','controllers','taskController.js'))
const { authenticateUser, authorizeRole } = require(path.join(__dirname,'..','middlewares','authMiddleware.js'))

router.post('/create', authenticateUser, createTask)
router.get('/getAllTasks', authenticateUser, authorizeRole('admin'), getAllTasks)
router.get('/getUserTasks', authenticateUser, getUserTasks)
router.post('/assignTask', authenticateUser, authorizeRole('admin'), assignTask)
router.delete('/deleteTask/:id', authenticateUser, authorizeRole('admin'), deleteTask)


module.exports = router
