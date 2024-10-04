const { createTaskService, getTasksService,
    updateTaskService, deleteTaskService,
} = require('../services/task.service')

const createTask = async (req, res) => {
    let result = await createTaskService(req.body);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const getTasks = async (req, res) => {
    let result = await getTasksService(req.query);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const updateTask = async (req, res) => {
    let result = await updateTaskService(req.body);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const deleteTask = async (req, res) => {
    let result = await deleteTaskService(req.body.id);
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
}