const express = require('express')
const fileUpload = require('express-fileupload')
const uploadsController = require('../controllers/uploads')

var router = express.Router()

router.use(fileUpload());

router.post('/uploads', uploadsController.newUpload);
router.get('/uploads/:uploadFileName', uploadsController.getSingleUpload);
router.get('/uploads', uploadsController.getAllUploads);
router.delete('/uploads/delete/:uploadFileName', uploadsController.deleteSingleUpload);

module.exports = router

