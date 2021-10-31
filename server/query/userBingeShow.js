const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const insertSchema = Joi.object().keys({
  user_id: Joi.string().guid({ version: "uuidv4" }),
  status: Joi.string().required(),
  show_id: Joi.string().guid({ version: "uuidv4" }),
  episode_progress: Joi.number().required(),
  total_episodes: Joi.number().required(),
});

module.exports = {
  async insert(data) {
    const result = insertSchema.validate(data);
    if (result !== null) {
      return await db.query(
        `INSERT INTO user_binge_show (user_id, status, show_id, episode_progress, total_episodes, score) VALUES ('${data.user_id}','${data.status}', '${data.show_id}', '${data.episode_progress}', '${data.total_episodes}',  '0') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async isShowAlreadyAdded(data) {
    console.log("isShowAlreadyAdded: ", data);
    const response = await db.query(`select * from user_binge_show where user_id = '${data.userId}' and show_id = '${data.showId}'`);
    console.log("RESPONSE ", response.rows);
    let rows = response.rows;
    let row = rows.length > 0 ? { id_user_show: response.rows[0].id_user_show, status: response.rows[0].status } : null;
    console.log(row);
    return row;
  },
  async update(data) {
    const response = await db.query(
      `update user_binge_show set status = '${data.status}', episode_progress = '${data.episode_progress}' where id_user_show = '${data.id_user_show}'`
    );
    return response;
  },
  async getListByUserFilter(data) {
    console.log("REACHED DATA: ", data);
    let nullFilter = { userId: null, country: null, genre: null, yearStart: null, yearEnd: null, status: null };
    for (const [key, value] of Object.entries(data)) {
      if (value !== "") {
        nullFilter[key] = "'" + value + "'";
      }
    }
    console.log("NULL FILTER: ", nullFilter);
    const response = await db.query(`select * from display_list_all 
    where (${nullFilter.userId} = ${nullFilter.userId}) and
    (${nullFilter.country} is null or country = ${nullFilter.country}) and 
    (${nullFilter.genre} is null or genre = ${nullFilter.genre}) and 
    (${nullFilter.yearStart} is null or release_year >= ${nullFilter.yearStart}) and 
    (${nullFilter.yearEnd} is null or release_year <= ${nullFilter.yearStart}) and 
    (${nullFilter.status} is null or status = ${nullFilter.status})
    order by status DESC, title[1] ASC`);
    return response;
  },
};
