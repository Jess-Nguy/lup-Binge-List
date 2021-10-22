const db = require("../connection/pg");
const express = require("express");
const router = express.Router();

module.exports = {
  async fetchByIdDropdown(id) {
    const characterResponse = await db.query(`SELECT * FROM display_characters WHERE id_character = '${id}'`);
    return characterResponse;
  },
  async fetchAllDropdown() {
    const characterResponse = await db.query("SELECT * FROM display_characters");
    return characterResponse;
  },
};
