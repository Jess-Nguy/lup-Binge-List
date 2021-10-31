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
  score: Joi.number().required(),
  rewatch: Joi.number().required(),
  favourite: Joi.boolean().required(),
});

module.exports = {
  async insert(data) {
    const result = insertSchema.validate(data);
    if (result !== null) {
      return await db.query(
        `INSERT INTO user_binge_show (user_id, status, show_id, episode_progress, total_episodes, score, rewatch, favourite) VALUES ('${data.user_id}','${data.status}', '${data.show_id}', '${data.episode_progress}', '${data.total_episodes}', '${data.score}', '${data.rewatch}', '${data.favourite}') RETURNING *`
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
    let row =
      rows.length > 0
        ? {
            id_user_show: response.rows[0].id_user_show,
            status: response.rows[0].status,
            score: response.rows[0].score,
            rewatch: response.rows[0].rewatch,
            favourite: response.rows[0].favourite,
            start_date: response.rows[0].start_date,
            end_date: response.rows[0].end_date,
            note: response.rows[0].note,
          }
        : null;
    console.log(row);
    return row;
  },
  async update(data) {
    const start_date = data.start_date == null ? data.start_date : "'" + data.start_date + "'";
    const end_date = data.end_date == null ? data.end_date : "'" + data.end_date + "'";
    const response = await db.query(
      `update user_binge_show set favourite = ${data.favourite}, status = '${data.status}', score  = '${data.score}', episode_progress = '${data.episode_progress}', start_date  = ${start_date}, end_date  = ${end_date}, rewatch  = '${data.rewatch}', note  = '${data.note}' where id_user_show = '${data.id_user_show}'`
    );
    return response;
  },
  async getListByUserFilter(data) {
    console.log("REACHED DATA: ", data);
    let nullFilter = { userId: null, country: null, genre: null, yearStart: null, yearEnd: null, status: null };
    for (const [key, value] of Object.entries(data)) {
      if (value == "false" || value == "true") {
        nullFilter[key] = value;
      } else if (value !== "") {
        nullFilter[key] = "'" + value + "'";
      }
    }
    console.log("getListByUserFilter NULL FILTER: ", nullFilter);
    const response = await db.query(`select * from display_list_all 
    where (${nullFilter.userId} = user_id) and
    (${nullFilter.country} is null or country = ${nullFilter.country}) and 
    (${nullFilter.genre} is null or genre = ${nullFilter.genre}) and 
    (${nullFilter.yearStart} is null or release_year >= ${nullFilter.yearStart}) and 
    (${nullFilter.yearEnd} is null or release_year <= ${nullFilter.yearStart}) and 
    (${nullFilter.status} is null or status = ${nullFilter.status}) and
    (${data.favourite}::bool is false or favourite = true)
    order by title[1] ASC`);
    return response;
  },
  async delete(id) {
    const response = await db.query(`DELETE FROM user_binge_show WHERE id_user_show = '${id}'`);
    return response;
  },
};
