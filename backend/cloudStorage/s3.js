const S3 = require('aws-sdk/clients/s3')

//require('dotenv').config();
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_DEFAULT_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const uploadFile = (file) => {

    const uploadParams = {
        Bucket: bucketName,
        Body: file.data,
        Key: file.name
    }
    return s3.upload(uploadParams).promise()
}


const deleteFile = (fileName) => {

    const fileParams = {
        Bucket: bucketName,
        Key: fileName
    }
    return s3.deleteObject(fileParams).promise()
}

const downloadFile = (fileName) => {

    const downloadParams = {
        Bucket: bucketName,
        Key: fileName
    }
    return s3.getObject(downloadParams).createReadStream()
}



module.exports = {
    uploadFile,
    deleteFile,
    downloadFile
}