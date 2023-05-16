# TiDB Cloud Data Service Guide

This guide provides comprehensive instructions on how to utilize TiDB Cloud Data Service for building a simple dashboard app.

- [Data Service Documentation](https://docs.pingcap.com/tidbcloud/data-service-overview)

## Quick Start

### Step 1: Sign in to TiDB Cloud and Create a Free Serverless Cluster

Access the TiDB Cloud website and sign in using your Google or GitHub account. Proceed by clicking the "Create Cluster" button and selecting the "Serverless" option. This will generate a free cluster that automatically scales based on your usage.

### Step 2: Explore the Sample Data's `sold_car_orders` Table

TiDB Cloud includes a sample dataset that contains a table named `sold_car_orders`. This table stores information about car orders. We will utilize this table to construct your dashboard app.

### Step 3: Open Data Service and Create an Endpoint

The **Data Service** feature of TiDB Cloud simplifies the process of exposing your data externally. To create an endpoint, follow these steps:
1. In the "Data Service" tab, create a DataApp.
2. Click on the "Create Endpoint" button.
3. Assign a name to your endpoint.
4. Select the table you wish to expose.

For endpoint protection, you need to generate a pair of API Keys for authentication.

### Step 4: Configure the Endpoint Properties

In the "Properties" section, you can configure the following settings:
- Endpoint Path: This URL path is used to access the endpoint.
- Endpoint URL: This represents the full URL of your endpoint.
- Request Method: Specify the SQL query to execute when the endpoint is accessed.
- Timeout: Determine the format of the data returned by the endpoint.

### Step 5: Utilize AI for SQL Query Assistance

If you are unsure how to write an SQL query, you can leverage AI assistance. Click on the "AI" button and provide a description of the query's purpose. The AI will generate the corresponding SQL query for you.

### Step 6: Run the SQL Query and Verify the Result

Once you have configured the endpoint, execute the SQL query to view the results. Click on the "Run" button and switch to the "Results" tab to examine the outcome.

### Step 7: Deploy the Endpoint

Upon satisfaction with the results, proceed to deploy the endpoint. Click on the "Deploy" button and navigate to the "Deployed" tab to confirm the deployment.

### Step 8: Create a Next.js Project for Fetching the Endpoint

With the deployed endpoint, you can create a Next.js project to fetch the data. Next.js is a React framework that simplifies web application development.

To create a Next.js project, execute the following command:

```sh
npx create-next-app@latest
```

Then, navigate to your app directory and modify the pages/index.js file. Place your API keys in the .env file, which will be excluded by Git to prevent accidental exposure.

```
TIDBCLOUD_DATA_SERVICE_PUBLIC_KEY=PUBLIC_KEY
TIDBCLOUD_DATA_SERVICE_PRIVATE_KEY=PRIVATE_KEY
TIDBCLOUD_DATA_SERVICE_HOST=https://us-east-1.data.tidbcloud.com/api/v1beta/app/dataapi-xxxxxx/endpoint/v1
```

Once the setup is complete, employ the with-digest-fetch library to fetch the API using your API keys.

```js
import DigestFetch from "with-digest-fetch";

const client = new DigestFetch(
  process.env.TIDBCLOUD_DATA_SERVICE_PUBLIC_KEY!,
  process.env.TIDBCLOUD_DATA_SERVICE_PRIVATE_KEY!
);
client.fetch(...)
```

### Step 9: Utilize Chart.js to Visualize Data in Charts

For elegant data visualization, we will utilize the Chart.js library. Chart.js is an open-source JavaScript library that simplifies the creation of beautiful charts.

To create a line chart, follow these steps:

1. Fetch the API data.
1. Provide the chart options, data, and labels to the Line component.

```js
const { data: orderByBrandYearData } = useSWR();
const options = ...
const labels = ...
const datasets = [...]

<Line options={options} data={{ labels, datasets }}>
```

Feel free to create additional APIs and incorporate more charts into your application.

### Step 10: Deploy to Vercel
Once your development is complete, push your code to GitHub. Visit vercel.com, import your code, and follow the provided instructions. Vercel will automatically deploy your application within minutes!
