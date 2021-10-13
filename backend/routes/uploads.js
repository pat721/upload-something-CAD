const express = require('express')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const { PrismaClient } = require('@prisma/client')
const uploadsController = require('../controllers/uploads')

const prisma = new PrismaClient()
var router = express.Router()

const uploadDirectory = __dirname + '/../public/user_uploads/';

router.use(fileUpload());

router.post('/uploads', uploadsController.newUpload);
router.get('/uploads/:uploadFileName', uploadsController.getSingleUpload);
router.get('/uploads', uploadsController.getAllUploads);
router.delete('/uploads/delete/:uploadFileName', uploadsController.deleteSingleUpload);




module.exports = router

