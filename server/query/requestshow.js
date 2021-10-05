const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
  requested_by: Joi.string().guid({ version: "uuidv4" }).required(),
  show_title: Joi.string().email().required(),
  release_date: Joi.date().raw().required(),
  genre: Joi.string().required(),
  seasons: Joi.number(),
  number_episodes: Joi.number(),
  note: Joi.string(),
  processed_by: Joi.string().guid({ version: "uuidv4" }),
});

const requestId = Joi.object().keys({
  request_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = {
  async fetchall() {
    const results = await db.query(`SELECT * FROM show_request`);
    return results.rows;
  },
  async fetchUnprocessed() {
    const results = await db.query(`SELECT * FROM show_request WHERE processed_by IS NULL`);
    return results.rows;
  },
  async delete(id) {
    const result = requestId.validate(id);
    if (result !== null) {
      return await db.query(`DELETE from show_request where request_id = '${id.request_id}' RETURNING *`);
    } else {
      return Promise.reject(result.error);
    }
  },
  async insert(showRequest) {
    const result = schema.validate(showRequest);
    if (result !== null) {
      return await db.query(
        `INSERT INTO show_request (
            requested_by, 
            show_title, 
            country, 
            release_date, 
            genre, 
            seasons, 
            number_episodes, 
            note) VALUES (
            '${showRequest.requested_by}',
            '${showRequest.show_title}',
            '${showRequest.country}',
            '${showRequest.release_date}',
            '${showRequest.genre}',
            '${showRequest.seasons}',
            '${showRequest.number_episodes}',
            '${showRequest.note}') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
};
