const { model } = require("mongoose");
const {
    postCreateProjectService,
    getProjectsService,
    updateProjectService,
    deleteProjectService
} = require("../services/project.service");
const { post } = require("../routes/api");

const postCreateProject = async (req, res) => {
    let results = await postCreateProjectService(req.body);
    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const getProjects = async (req, res) => {
    let results = await getProjectsService(req.query);
    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const updateProject = async (req, res) => {
    let results = await updateProjectService(req.body);
    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const deleteProject = async (req, res) => {
    let results = await deleteProjectService(req.body.id);
    return res.status(200).json({
        EC: 0,
        data: results
    })
}

module.exports = {
    postCreateProject,
    getProjects,
    updateProject,
    deleteProject
}