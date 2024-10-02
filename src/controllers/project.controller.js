const { model } = require("mongoose");
const { postCreateProjectService } = require("../services/project.service");
const { post } = require("../routes/api");

const postCreateProject = async (req, res) => {
    let results = await postCreateProjectService(req.body);
    return res.status(200).json({
        EC: 0,
        data: results
    })
}

module.exports = {
    postCreateProject,
}