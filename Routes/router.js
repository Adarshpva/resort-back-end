// import express
const express =require('express')

// create router for express
const router = new express.Router()

// import controller
const userController=require('../Controller/userController')

// import conroller2
const detailController=require('../Controller/detailController')

// import multer upload confihuration
const upload = require('../multerConfig/storageConfig')

// route for register
router.post('/user/register',upload.single(''),userController.register)

router.get('/details/alldetails',detailController.getalldetails)

// export router
module.exports=router