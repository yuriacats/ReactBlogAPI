// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});

exports.lambdaHandler =  async (event, context) => {
    const dynamo = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10',region:'ap-northeast-1'});
    const tableName = process.env["TableName"];
    //const ddb = new AWS.DynamoDB({apiVersion:"2012-08-10"});
    const path_id = event.pathParameters ? event.pathParameters['post_id'] : 1617844570;
    const params ={
        TableName : tableName,
        Key:{
            id: path_id
        }
    }
    try {
        const raw_data = await dynamo.get(params).promise();
        const result_data = raw_data["Item"]
            response = {
            'statusCode': 200,
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            'body': JSON.stringify({
                "id": result_data["id"],
                "update": result_data["update"],
                "create": result_data["create"],
                "tags": result_data["tags"] ,
                "title": result_data["title"],
                "prevPost": null,
                "nextPost": null,
                "post": result_data["post"]
            })
        }
        console.log(result_data);
    } catch (err) {
        console.log(err)
    }
    return response;

};

