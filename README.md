# Serverless TODO App

## Generel info

This project for the Udacity Cloud Devoleper Nanodegree. Where we implement a serverless backend using [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) and [Serverless framework](https://www.serverless.com/framework/docs/) to an existing todo application developed with [Reactjs](https://reactjs.org/docs/getting-started.html).

This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image. Each user only has access to TODO items that he/she has created.

## Technologies

- nodejs
- aws
- serverless
- react
- Auth0

## Setup

### Installation requirments

- If you don't have Nodejs installed yet. you'll need to [download Node.js](https://nodejs.org/en/download/) to be able to use this application.
- install serverless framework to enable you to use the backend code on your aws lambda. make sure to [configuring your AWS credentials](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/) to allow the framework to make changes on your aws account.
- Clone this repo and install the dependencies by running `npm i` for the frontend and backend projects

### Run the application

### Backend

- To deploy an application run the following command:

```bash
   sls deploy -v
```

### Frontend

To run a client application first edit the client/src/config.ts file to set correct parameters. And then run the following command:

```bash
   npm run start
```
