
const express = require('express')
const router =express.Router()
const userController = require('../Controller/userController')
const projectController = require("../Controller/projectController")
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
// route for request
router.post('/register',userController.register)
// router for login
router.post('/login',userController.login)
// add project
router.post('/add-project',jwtMiddleware,multerConfig.single("projectImage"),projectController.addProjects)
// getHome Project
router.get('/home-projects',projectController.getHomeProjects)
// get all Projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)
// get user projects
router.get("/user-projects",jwtMiddleware,projectController.getUserProjects)
// edit a project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)
// delete a project
router.delete('/project/delete/:pid',jwtMiddleware,projectController.removeProject)
// update the userprofile
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)
module.exports = router;