const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
  title: Joi.array().items(Joi.string()).required(),
  native_title: Joi.string(),
  romanization: Joi.string(),
  release_date: Joi.date().raw(),
  completed_date: Joi.date().raw(),
  country: Joi.string(),
  genre: Joi.string().required(),
  company: Joi.string(),
  relations1: Joi.string().guid({ version: "uuidv4" }),
  relations2: Joi.string().guid({ version: "uuidv4" }),
  relations3: Joi.string().guid({ version: "uuidv4" }),
  main_character: Joi.string().guid({ version: "uuidv4" }),
  side_character1: Joi.string().guid({ version: "uuidv4" }),
  side_character2: Joi.string().guid({ version: "uuidv4" }),
  show_image: Joi.string(),
  main_character_actor: Joi.string().guid({ version: "uuidv4" }),
  side_character_actor1: Joi.string().guid({ version: "uuidv4" }),
  side_character_actor2: Joi.string().guid({ version: "uuidv4" }),
  seasons: Joi.number(),
  episodes: Joi.number(),
  synopsis: Joi.string(),
  added_at: Joi.date().raw(),
  updated_at: Joi.date().raw(),
});

const showId = Joi.object().keys({
  id_show: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = {
  async fetchall() {
    const results = await db.query(`SELECT * FROM shows`);
    return results.rows;
  },
  //   async fetchById() {
  //     const results = await db.query(`SELECT * FROM show_request WHERE processed_by IS NULL`);
  //     return results.rows;
  //   },
  //   async fetchFilterSearch() {
  //     const results = await db.query(`SELECT * FROM show_request WHERE processed_by IS NULL`);
  //     return results.rows;
  //   },
  async delete(id) {
    const result = showId.validate(id);
    if (result !== null) {
      return await db.query(`DELETE from shows where id_show = '${id.id_show}' RETURNING *`);
    } else {
      return Promise.reject(result.error);
    }
  },
  async insert(show) {
    const result = schema.validate(show);
    if (result !== null) {
      return await db.query(
        `INSERT INTO shows (
            title,
            native_title,
            romanization,
            release_date,
            completed_date,
            country,
            genre,
            company,
            main_character,
            side_character1,
            side_character2,
            show_image,
            relations1,
            relations2,
            relations3,
            main_character_actor,
            side_character_actor1,
            side_character_actor2,
            main_character_image,
            side_character_image1,
            side_character_image2,
            seasons,
            episodes,
            synopsis,
            comments,
            added_at,
            updated_at,
            ) VALUES (
            '${show.title}',
            '${show.native_title}',
            '${show.romanization}',
            '${show.release_date}',
            '${show.completed_date}',
            '${show.country}',
            '${show.genre}',
            '${show.company}',
            '${show.relations1}',
            '${show.relations2}',
            '${show.relations3}',
            '${show.main_character}',
            '${show.side_character1}',
            '${show.side_character2}',
            '${show.show_image}',
            '${show.main_character_actor}',
            '${show.side_character_actor1}',
            '${show.side_character_actor2}',
            '${show.seasons}',
            '${show.episodes}',
            '${show.synopsis}',
            '${show.added_at}',
            '${show.updated_at}) RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async update(show) {
    const id = show.id;
    const idResult = showId.validate(id);
    const result = schema.validate(show);

    if (result !== null) {
      return await db.query(
        `UPDATE show SET 
        title='${show.title}', 
        native_title='${show.native_title}', 
        romanization='${show.romanization}',
        release_date='${show.release_date}',
        completed_date='${show.completed_date}',
        country='${show.country}',
        genre='${show.genre}',
        company='${show.company}',
        relation1='${show.relations1}',
        relation2='${show.relations2}',
        relation3='${show.relations3}',
        main_character='${show.main_character}',
        side_character1='${show.side_character1}',
        side_character2='${show.side_character2}',
        show_image='${show.show_image}',
        main_character_actor='${show.main_character_actor}',
        side_character_actor1='${show.side_character_actor1}',
        side_character_actor2='${show.side_character_actor2}',
        seasons='${show.seasons}',
        episodes='${show.episodes}',
        synopsis='${show.synopsis}',
        added_at='${show.added_at}',
        updated_at='${show.updated_at}',
        WHERE id_show = '${id}' RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
};
