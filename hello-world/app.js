// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    const x = (2 < 3 )?  1 : 0; //IDの存在性を確認する。
    const title_list=["ERROR_NOT_FOUND","AWS Lambda から、ReactのBlogに至るテストです。","Second Blog","third Blog"]
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            headers:{
                'Content-type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            'body': JSON.stringify({
                "id": 1617844570,
                "update": 20210408,
                "create": 20210408,
                "tags": [1,4,5],
                "title": title_list[x],
                "prevPost": null,
                "nextPost": null,
                "post":" $X_C = \\dfrac{1}{j \\omega C}$\n環境\nPython 3.8\nWindows10/MacOS Catalina\n\n---\n\n##PythonでもElectronみたいにWEBフロントでGUI実装をしたい。\nということを朝起きて思ったことはありませんか?\n\ntkinterもいいけど、私はHTMLでアプリケーションのレイアウトを構築したい!\nそんなあなたにEELというライブラリーがあります。\n\n### 作れるもの\n![スクリーンショット 2020-12-12 214757.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/163357/1792c30f-f58f-d974-c3ae-bdfec836f796.png)\n\n※こちらは作成途中の画面です。\n\nマークダウンと下にツイッターくらいの文字数を想定したミニメモがかけるようなアプリをつくりました。\n出力すると、指定したところに日付のディレクトリーを作成しその中にブログ記事のMDファイルが書かれると行った構成です。\n\n### EELの使い方\n\nライブラリーをインストールするコマンドは以下のようになってます。\n\n```\n$pip install eel\n```"
                // location: ret.data.trim()
            }),

        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
