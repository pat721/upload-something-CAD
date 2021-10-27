const AWS = require('aws-sdk');

//require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY

})
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "upload_something_metadata";


const addOrUpdateMetadata = async (metaData) => {

    const params = {
        TableName: TABLE_NAME,
        Item: metaData
    }

    return await dynamoClient.put(params).promise();
}


const getAllMetadata = async () => {
    const params = {
        TableName: TABLE_NAME
    }
    const allMetadata = await dynamoClient.scan(params).promise();
    return allMetadata;
}


const deleteMetadataForName = async (name) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: name
        }
    }
    return await dynamoClient.delete(params).promise();
}

module.exports = {
    getAllMetadata,
    addOrUpdateMetadata,
    deleteMetadataForName
}