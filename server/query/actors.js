const db = require("../connection/pg");
const express = require("express");
const router = express.Router();

module.exports = {
  async fetchByIdDropdown(id) {
    const actorResponse = await db.query(`SELECT * FROM display_actors WHERE id_character = '${id}'`);
    return actorResponse;
  },
  async fetchAllDropdown() {
    const actorResponse = await db.query("SELECT * FROM display_actors");
    return actorResponse;
  },
};
