const Project = require("../models/project");
const aqp = require('api-query-params');
const { updateCustomerService } = require("./customer.service");

module.exports = {
    postCreateProjectService: async (data) => {
        try {
            if (data.type === "EMPTY-PROJECT") {
                let result = await Project.create(data);
                return result;
            }
            if (data.type === "ADD-USERS") {
                let myProject = await Project.findById(data.projectId).exec();
                for (let i = 0; i < data.usersArr.length; i++) {
                    if (!myProject.usersInfor.includes(data.usersArr[i])) {
                        myProject.usersInfor.push(data.usersArr[i]);
                    }
                }
                let newResult = await myProject.save();
                return newResult;
            }
            if (data.type == "REMOVE-USERS") {
                let myProject = await Project.findById(data.projectId).exec();
                for (let i = 0; i < data.usersArr.length; i++) {
                    if (myProject.usersInfor.includes(data.usersArr[i])) {
                        myProject.usersInfor.pull(data.usersArr[i]);
                    }
                }
                let newResult = await myProject.save();
                return newResult;
            }
            if (data.type == "ADD-TASKS") {
                let myProject = await Project.findById(data.projectId).exec();
                for (let i = 0; i < data.taskArr.length; i++) {
                    if (!myProject.task.includes(data.taskArr[i])) {
                        myProject.task.push(data.taskArr[i]);
                    }
                }
                let newResult = await myProject.save();
                return newResult;
            }
            return null;
        } catch (error) {
            console.log(error)
            return null;
        }
    },

    getProjectsService: async (queryString) => {
        try {
            const page = queryString.page;
            const { filter, limit, population } = aqp(queryString);
            delete filter.page;
            let offset = (page - 1) * limit;
            result = await Project.find(filter)
                .populate(population)
                .skip(offset)
                .limit(limit)
                .exec();
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },

    updateProjectService: async (data) => {
        try {
            let result = await Project.updateOne({ _id: data.id }, { ...data });
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },

    deleteProjectService: async (id) => {
        try {
            let result = await Project.deleteById(id);
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}

