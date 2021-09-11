const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString:
    process.env.CONNECTION ||
    "postgres://wfqpgoyrmnighy:07705bf4cf49d1f1fe526c1759a8bad616132c7768e0d68a5c909a0a7a210a35@ec2-44-198-100-81.compute-1.amazonaws.com:5432/d9kep4quq6lfcc",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
