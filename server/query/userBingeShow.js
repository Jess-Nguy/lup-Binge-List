const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const insertSchema = Joi.object().keys({
  user_id: Joi.string().required(),
  status: Joi.string().required(),
  show_id: Joi.string().required(),
});

module.exports = {
  async insert(data) {
    const result = insertSchema.validate(data);
    if (result !== null) {
      return await db.query(
        `INSERT INTO user_binge_show (user_id, status, show_id) VALUES ('${data.user_id}','${data.status}', '${data.show_id}') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
};
