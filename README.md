# CosmosDB (Gremlin API) on Azure Functions [WIP, unfinished]

CosmosDB (Gremlin API) on Azure Functions and Serverless Framework.

Gremlin commands are not finished, but if you want to just get started then this should get you well on your way.

The tech is listed a bit more below:

**Stack**

- [Serverless Framework](https://www.serverless.com)
- [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) + [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) for storing the function + [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/)
- [Webpack](https://webpack.js.org) for bundling and optimizing
- [Babel](https://babeljs.io) for transpiling files
- [Typescript](https://www.typescriptlang.org) so we can write better code

## Prerequisites

- Azure account
- Logged in to Azure through environment
- High enough credentials to create required resources
- **Recommended**: Serverless Framework installed on your system

## Install

Install dependencies with `npm install` or `yarn add`.

## Log in to Azure

1. `az account clear`
2. `az login`

Then set credentials as per instructions at [https://github.com/serverless/serverless-azure-functions#advanced-authentication](https://github.com/serverless/serverless-azure-functions#advanced-authentication).

## Development

Run `sls offline`. After a bit of building files and doing its magic, you get a prompt looking like:

```
Http Functions:

demoFunction: [GET] http://localhost:7071/demoFunction
```

Hit that URL and you're ready! It doesn't do auto-reloads though.

## References

- [How to manipulate a Gremlin Cosmos DB from inside a Node.js Azure Function](https://www.posten.io/blog/code/azure-functions-gremlin)
- [Diving into Gremlin queries in Azure Cosmos DB](https://towardsdatascience.com/diving-into-gremlin-queries-in-azure-cosmos-db-83eb1d7c6350)
- [Introduction to Gremlin API in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/graph-introduction)
- [Quickstart: Create, query, and traverse an Azure Cosmos DB graph database using the Gremlin console](https://docs.microsoft.com/en-us/azure/cosmos-db/create-graph-gremlin-console)
- [Quickstart: Build a Node.js application by using Azure Cosmos DB Gremlin API account](https://docs.microsoft.com/en-us/azure/cosmos-db/create-graph-nodejs)
- [Graph data modeling for Azure Cosmos DB Gremlin API](https://docs.microsoft.com/en-us/azure/cosmos-db/graph-modeling)
