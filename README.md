# TiDB Cloud Data Service Guide

This is a comprehensive guide about how to use TiDB Cloud Data Service to build a simple dashboard app.

See here for more documentation, https://docs.pingcap.com/tidbcloud/data-service-overview

## Sign in with TiDB Cloud and create a free serverless cluster

Go to the TiDB Cloud website and sign in with your Google/GitHub account. Then, click on the "Create Cluster" button and select the "Serverless" option. This will create a free cluster that will automatically scale up and down based on your usage.

## Explore the `sold_car_orders` table in the sample data

TiDB Cloud comes with a sample dataset that includes a table called `sold_car_orders`. This table contains information about car orders that have been placed. We'll be using this table to build your dashboard app.

## Open Data Service to create an endpoint

**Data Service** is a feature of TiDB Cloud that allows you to easily expose your data to the outside world. To create an endpoint, we first create a DataApp in the "Data Service" tab, then click on the "Create Endpoint" button. Give your endpoint a name and then select the table that you want to expose.

To protect your endpoints, you'll also need to create a pair of API Keys for authentication.

## Configure the endpoint properties

In the "Properties" section, you can configure the following settings:

- Endpoint Path: This is the URL path that will be used to access the endpoint.
- Endpoint URL: This is the full URL of your endpoint.
- Request Method: This is the SQL query that will be executed when the endpoint is accessed.
- Timeout: This is the format of the data that will be returned by the endpoint. 5. Use the AI to help you write the SQL

If you're not sure how to write the SQL query, you can use AI to help you. Click on the "AI" button and then type in a description of what you want the query to do. The AI will then generate a SQL query for you.

## Run the SQL and check the result

Once you've configured the endpoint, you can run the SQL query to see the results. Click on the "Run" button and then click on the "Results" tab to see the results.

## Deploy the endpoint

Once you're satisfied with the results, you can deploy the endpoint. Click on the "Deploy" button and then click on the "Deployed" tab to see the deployed endpoint.

## Create a Next.js project to fetch the endpoint

Now that you have an endpoint deployed, you can create a Next.js project to fetch the data. Next.js is a React framework that makes it easy to create web applications.

To create a Next.js project, run the following command:

```sh
npx create-next-app@latest
```

Next, open your app directory and edit the pages/index.js file. Put your API keys in the .env file, they will be ignored by git so you don't worry about leaking it accidentally.

```
TIDBCLOUD_DATA_SERVICE_PUBLIC_KEY=PUBLIC_KEY
TIDBCLOUD_DATA_SERVICE_PRIVATE_KEY=PRIVATE_KEY
TIDBCLOUD_DATA_SERVICE_HOST=https://us-east-1.data.tidbcloud.com/api/v1beta/app/dataapi-xxxxxx/endpoint/v1
```

Once it's ready, you can use the `with-digest-fetch` library to fetch the API with your API keys.

```js
import DigestFetch from "with-digest-fetch";

const client = new DigestFetch(
  process.env.TIDBCLOUD_DATA_SERVICE_PUBLIC_KEY!,
  process.env.TIDBCLOUD_DATA_SERVICE_PRIVATE_KEY!
);
client.fetch(...)
```

## Use Chart.js to display the data in a beautiful chart

We'll be using the Chart.js library for beautiful data visualization. Chart.js is a simple and flexible open-source JavaScript library that makes it easy to create beautiful charts.

To create a line chart, you first fetch the API, then pass the chart options and your data to the `Line` component:

```js
const { data: orderByBrandYearData } = useSWR();
const options = ...
const labels = ...
const datasets = [...]

<Line options={options} data={{ labels, datasets }}>
```

Now you can create more APIs and keep adding more charts to your app.

## Deploy to Vercel

After you've finished building, you can push your code to GitHub, and go to vercel.com to import it, follow the instruction there it will automatically deploy your app in a couple of minutes!
