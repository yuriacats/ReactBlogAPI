// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});

exports.lambdaHandler =  async (event, context) => {
    const dynamo = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10',region:'ap-northeast-1'});
    const tableName = process.env["TableName"];
    const ddb = new AWS.DynamoDB({apiVersion:"2012-08-10"});
    const params ={
        TableName : tableName,
        Item:{
            id:Date.now(),
            create:20210516,
            update:20210516,
            nextPost:null,
            prevPost:null,
            tags:[],
            post:"this is Test Post"
        }
    }
    try{
        const data = await dynamo.put(params).promise();
        console.log(data)
    }catch(err){
        console.log(err)
    }


};
