const { deleteTask } = require('../controllers/task.controller');
const Task = require('../models/task');
const aqp = require('api-query-params');

module.exports = {
    createTaskService: async (data) => {
        try {
            if (data.type == "EMPTY-TASK") {
                let result = await Task.create(data);
                return result;
            }
        } catch (error) {
            console.log(error)
            return null;
        }
    },

    getTasksService: async (queryString) => {
        try {
            let page = queryString.page
            let { filter, limit } = aqp(queryString);
            delete filter.page;
            let skip = (page - 1) * limit;
            let result = await Task.find(filter)
                .skip(skip)
                .limit(limit)
                .exec()
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },

    updateTaskService: async (data) => {
        // try {
        let result = await Task.updateOne({ _id: data.id }, { ...data })
        return result;
        // } catch (error) {
        //     console.log(error)
        //     return null;
        // }
    },

    deleteTaskService: async (id) => {
        try {
            let result = await Task.deleteById(id)
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}