const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString:
    process.env.CONNECTION ||
    "postgres://pesknufeycrpxe:d12599ab2adcfda2d509568ab447805fa24ba3affca11ac8f0d3d60ecccef8a5@ec2-3-233-100-43.compute-1.amazonaws.com:5432/dema24mn6r1t6r",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
