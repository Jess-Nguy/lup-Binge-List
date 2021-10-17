const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
  type: Joi.string().required(),
  show_id1: Joi.string().required(),
  show_id1: Joi.string().required(),
});

module.exports = {
  async fetchall() {
    const results = await db.query(`SELECT * FROM show_releations`);
    return results.rows;
  },
  async delete(id) {
    if (result !== null) {
      return await db.query(`DELETE from show_releations where id_show_relations = '${id}' RETURNING *`);
    } else {
      return Promise.reject(result.error);
    }
  },
  async insert(showReleations) {
    const result = schema.validate(showReleations);
    if (result !== null) {
      return await db.query(
        `INSERT INTO show_relations (
            type, 
            show_id1, 
            show_id2, 
            ) VALUES (
            '${showReleations.type}',
            '${showReleations.show_id1}',
            '${showReleations.show_id2}') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
};
