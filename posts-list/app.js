let response;
const AWS = require('aws-sdk');
AWS.config.update({region:'ap-northeast-1'});

exports.lambdaHandler = async(event,context) =>{
    const dynamo = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10',region:'ap-northeast-1'});
    const tableName = process.env["TableName"];
    const params ={
        TableName : tableName
    }
    const ogpimg = 'https://pbs.twimg.com/profile_images/1350697036442525699/06iWzIJO_400x400.png'
    const tags = [1,3]
    try{
        const raw_data = await dynamo.scan(params).promise();
        console.log(raw_data);
        const raw_data_count = raw_data["Count"];
        const result_dataset = []
        for (let i=0;i<raw_data_count;i++){
            const data = raw_data["Items"][i];
            if(!data["publish"]){
                continue
            }
            const result_data ={
                'title': data["title"],
                'id':data["id"],
                'ogpimg':ogpimg,
                'tags':tags,
                'date':data["update"]
            }
            result_dataset.push(result_data);
        }
        const response_base = result_dataset;
        console.log(response_base);
        response ={
            'statusCode': 200,
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            'body':JSON.stringify({
                response_base
            })
        }

    }
    catch (err){
        console.log(err)
    }
    return response;
}
