const sdk = require("node-appwrite");
require("dotenv").config();

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.VITE_APPWRITE_PROJECT_ID)
  .setKey(process.env.VITE_APPWRITE_API_KEY);

const databases = new sdk.Databases(client);

module.exports = { client, databases };
