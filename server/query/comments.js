const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
  user_id: Joi.string().guid({ version: "uuidv4" }).required(),
  show_id: Joi.string().guid({ version: "uuidv4" }).required(),
  profile_url: Joi.string(),
  username: Joi.string(),
  comment: Joi.string(),
  flag: Joi.boolean(),
});

module.exports = {
  async fetchByShow(id) {
    console.log("FETCH COMMENTS: ", id);
    const results = await db.query(`SELECT * FROM comments WHERE show_id = '${id}' ORDER BY created_at ASC`);
    return results;
  },
  async delete(id) {
    return await db.query(`DELETE from comments where id_comment = '${id}'`);
  },
  async insert(data) {
    const result = schema.validate(data);
    if (result !== null) {
      return await db.query(
        `INSERT INTO comments (user_id, show_id, profile_url, username, comment, flag) VALUES ('${data.user_id}', '${data.show_id}', '${data.profile_url}', '${data.username}', '${data.comment}', ${data.flag}) returning id_comment`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async update(data) {
    return await db.query(`UPDATE comments SET comment='${data.comment}', flag=${data.flag} WHERE id_comment='${data.id_comment}'`);
  },
};
