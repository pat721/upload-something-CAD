const {addOrUpdateMetadata, getAllMetadata, deleteMetadataForName} = require('../database/dynamo')
const { uploadFile, deleteFile, downloadFile } = require('../cloudStorage/s3')

const newUpload = async (req, res) => {
    let uploadedFile
    let description

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.')
    }

    uploadedFile = req.files.fileName
    description = req.body.description

    const uploadResult = await uploadFile(req.files.fileName)
    //TODO if uploadResult...

    addOrUpdateMetadata({
        "id": uploadedFile.name,
        "description": description,
        "fileName": uploadedFile.name,
        "fileSize": uploadedFile.size,
        "mimeType": uploadedFile.mimetype,
        "createdAt": Date.now().toString()
    })

    res.status(201).send('File has been successfully uploaded.')
};

const getSingleUpload = (req, res) => {

    let fileName = req.params.uploadFileName;
    res.attachment(fileName)
    let file = downloadFile(req.params.uploadFileName)
    file.pipe(res)

};

const getAllUploads = async (req, res) => {
    const uploads = await getAllMetadata()
    res.json(uploads.Items)
};


const deleteSingleUpload = async (req, res) => {
    const uploadFileName = req.params.uploadFileName

    deleteFile(uploadFileName)
    await deleteMetadataForName(uploadFileName)
    res.status(200).send('Success');
}

module.exports = {
    newUpload,
    getSingleUpload,
    getAllUploads,
    deleteSingleUpload
}