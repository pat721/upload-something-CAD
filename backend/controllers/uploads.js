const express = require('express')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const uploadDirectory = __dirname + '/../public/user_uploads/';

const newUpload = async (req, res) => {
  let uploadedFile
  let description
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  uploadedFile = req.files.fileName
  description = req.body.description
  uploadPath = uploadDirectory + uploadedFile.name

  uploadedFile.mv(uploadPath, function (err) { // Use the mv() method to place the file somewhere on your server
    if (err)
      return res.status(500).send(err)
  });

  const upload = await prisma.upload.create({
    data: {
      description: description,
      fileName: uploadedFile.name,
      fileSize: uploadedFile.size,
      mimeType: uploadedFile.mimetype
    },
  })

  res.status(201).send('File has been successfully uploaded.')
};

const getSingleUpload = (req, res) => {
  const file = uploadDirectory + req.params.uploadFileName

  if (fs.existsSync(file)) {
    res.download(file) // Set disposition and send it.  
  } else {
    res.status(404).send('404: Resource not found');
  }

};

const getAllUploads = async (req, res) => {
  const uploads = await prisma.upload.findMany({})
  res.json(uploads)
};


const deleteSingleUpload = async (req, res) => {
  const uploadFileName = req.params.uploadFileName
  const file = uploadDirectory + uploadFileName

  if (fs.existsSync(file)) {

    const upload = await prisma.upload.deleteMany({
      where: {
        fileName: uploadFileName
      }
    })

    fs.rmSync(file, {
      force: true,
    });

    res.status(200).send('Success');
  } else {
    res.status(404).send('404: Resource not found');
  }

};

module.exports = {
    newUpload,
    getSingleUpload,
    getAllUploads,
    deleteSingleUpload
}