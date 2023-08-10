import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';

import {
    Aws,
    aws_sns,
    aws_sns_subscriptions,
} from "aws-cdk-lib";
import {
    Cors,
    Deployment,
    EndpointType,
    LambdaIntegration,
    MethodLoggingLevel,
    RestApi,
    LambdaRestApi,
    Stage
} from "aws-cdk-lib/aws-apigateway";

import * as path from 'path';


export class frontApiStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const sns_topic = new aws_sns.Topic(this, 'Topic', {
            displayName: "Notification-" + Aws.STACK_NAME,
        });

        // const queue = new sqs.Queue(this, 'sqs-queue', {
        //   });

        // sns_topic.addSubscription(new subs.SqsSubscription(queue));

        // const mgmt_rest_api = new RestApi(this, 'api', {
        //     restApiName: Aws.STACK_NAME + ': api',
        //     description: Aws.STACK_NAME + ': api',
        //     deploy: false,
        //     cloudWatchRole: true,
        //     defaultCorsPreflightOptions: {
        //         allowHeaders: [
        //             'Content-Type',
        //             'X-Amz-Date',
        //             'Authorization',
        //             'X-Api-Key',
        //         ],
        //         allowMethods: ['POST', 'OPTION'],
        //         allowCredentials: true,
        //         allowOrigins: Cors.ALL_ORIGINS,
        //     },
        //     endpointConfiguration: {
        //         types: [EndpointType.REGIONAL],
        //     },
        // });


        // const invokeUrl = `https://${mgmt_rest_api.restApiId}.execute-api.${Aws.REGION}.amazonaws.com.cn/prod`

        const lambdaFunction = new lambda.Function(this, 'MyLambda', {
            code: lambda.Code.fromAsset(path.join(__dirname, 'assets')),
            handler: 'app.lambda_handler',
            runtime: lambda.Runtime.PYTHON_3_9,
          });

        const api = new LambdaRestApi(this, 'myapi', {
            handler: lambdaFunction,
            proxy: false
        });
        const items = api.root.addResource('items');
        items.addMethod('GET');  // GET /items
        items.addMethod('POST'); // POST /items
    



        // const deployment = new Deployment(this, 'deployment', {
        //     api: mgmt_rest_api,
        // });

        // const deploymentStage = new Stage(this, 'prod', {
        //     stageName: "prod",
        //     deployment: deployment,
        //     dataTraceEnabled: true,
        //     loggingLevel: MethodLoggingLevel.INFO,
        // });

        // const api_explprer_resource = mgmt_rest_api.root.addResource('test');
        // const proxy = api_explprer_resource.addProxy({
        //     anyMethod: true,
        //     defaultIntegration: new LambdaIntegration(lambdaFunction, {proxy: true}),
        // });
        // const api_explorer_get = api_explprer_resource.addMethod('GET',
        //     new LambdaIntegration(lambdaFunction, {proxy: true}),
        // );

        
    }
}
