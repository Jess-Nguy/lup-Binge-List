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
  side_character1_actor: Joi.string().guid({ version: "uuidv4" }),
  side_character2_actor: Joi.string().guid({ version: "uuidv4" }),
  seasons: Joi.number(),
  episodes: Joi.number(),
  synopsis: Joi.string(),
});

const showId = Joi.object().keys({
  id_show: Joi.string().guid({ version: "uuidv4" }).required(),
});

module.exports = {
  async fetchall() {
    // not in use.
    const results = await db.query(`SELECT * FROM shows`);
    return results.rows;
  },
  async fetchShowDropdown() {
    const results = await db.query(`select id_show, title[1], title as title_synonyms from shows`);
    return results.rows;
  },
  async fetchById(id) {
    //  not in use.
    // let id = idArray.length === 0 ? "" : "'" + idArray.join("','") + "'";
    console.log("FETCH BY ID: ", id);
    const results = await db.query(`SELECT * FROM display_shows WHERE id_show = '${id}'`);
    return results;
  },
  async fetchDisplayShows() {
    const results = await db.query(`SELECT * FROM display_shows`);
    return results;
  },
  //   async fetchFilterSearch() {
  //     const results = await db.query(`SELECT * FROM show_request WHERE processed_by IS NULL`);
  //     return results.rows;
  //   },
  async delete(id) {
    const result = showId.validate(id);
    if (result !== null) {
      return await db.query(`DELETE from shows where id_show = '${id}'`);
    } else {
      return Promise.reject(result.error);
    }
  },
  async insert(show) {
    const result = schema.validate(show);
    if (result !== null) {
      console.log("DB QUERY POST");
      let titles = show.title;
      titles = titles.length === 0 ? "" : "'" + titles.join("','") + "'";
      let nullShow = {
        title: `ARRAY [${titles}]`,
        native_title: null,
        romanization: null,
        release_date: null,
        completed_date: null,
        country: null,
        genre: null,
        company: null,
        main_character: "00000000-0000-0000-0000-000000000000",
        side_character1: "00000000-0000-0000-0000-000000000000",
        side_character2: "00000000-0000-0000-0000-000000000000",
        show_image: null,
        main_character_actor: "00000000-0000-0000-0000-000000000000",
        side_character1_actor: "00000000-0000-0000-0000-000000000000",
        side_character2_actor: "00000000-0000-0000-0000-000000000000",
        seasons: 0,
        episodes: 0,
      };
      for (const [key, value] of Object.entries(show)) {
        if (key !== "title") {
          if (value !== "") {
            nullShow[key] = "'" + value + "'";
          }
        }
      }

      const insertQuery = `INSERT INTO shows (
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
            main_character_actor,
            side_character1_actor,
            side_character2_actor,
            seasons,
            episodes,
            synopsis
            ) VALUES (
            ARRAY [${titles}],
            ${nullShow.native_title},
            ${nullShow.romanization},
            ${nullShow.release_date},
            ${nullShow.completed_date},
            '${show.country}',
            '${show.genre}',
            ${nullShow.company},
            ${nullShow.main_character},
            ${nullShow.side_character1},
            ${nullShow.side_character2},
            ${nullShow.show_image},
            ${nullShow.main_character_actor},
            ${nullShow.side_character1_actor},
            ${nullShow.side_character2_actor},
            ${nullShow.seasons},
            ${nullShow.episodes},
            ${nullShow.synopsis}) RETURNING id_show`;
      console.log("QUERY: ", insertQuery);
      const id = await db.query(insertQuery);
      console.log("id_show: ", id.rows);
      return id.rows;
    } else {
      return Promise.reject(result.error);
    }
  },
  async showBrowseFilter(browseFilter) {
    let nullFilter = { country: null, genre: null, airingStatus: null, yearStart: null, yearEnd: null, searchText: null };
    for (const [key, value] of Object.entries(browseFilter)) {
      if (value !== "") {
        if (key == "searchText") {
          nullFilter[key] = "'%" + value + "%'";
        } else {
          nullFilter[key] = "'" + value + "'";
        }
      }
    }

    const filterQuery = `select * from display_shows where (${nullFilter.country} is null or country = ${nullFilter.country}) and
      (${nullFilter.genre} is null or genre = ${nullFilter.genre}) and
      (${nullFilter.airingStatus} is null or airing_status = ${nullFilter.airingStatus}) and
      (${nullFilter.yearStart} is null or release_year >= ${nullFilter.yearStart}) and
      (${nullFilter.yearEnd} is null or release_year <= ${nullFilter.yearEnd}) and
      (${nullFilter.searchText} is null or title::text ilike ${nullFilter.searchText})`;

    return await db.query(filterQuery);
  },
  async update(show) {
    const id = show.id;
    // const idResult = showId.validate(id);
    // const result = schema.validate(show);
    console.log("SHOW QUERY: ", show);
    // if (result !== null) {
    let titles = show.title;
    titles = titles.length === 0 ? "" : "'" + titles.join("','") + "'";

    let nullShow = {
      title: `ARRAY [${titles}]`,
      native_title: null,
      romanization: null,
      release_date: null,
      completed_date: null,
      country: null,
      genre: null,
      company: null,
      main_character: "00000000-0000-0000-0000-000000000000",
      side_character1: "00000000-0000-0000-0000-000000000000",
      side_character2: "00000000-0000-0000-0000-000000000000",
      show_image: null,
      main_character_actor: "00000000-0000-0000-0000-000000000000",
      side_character1_actor: "00000000-0000-0000-0000-000000000000",
      side_character2_actor: "00000000-0000-0000-0000-000000000000",
      seasons: 0,
      episodes: 0,
    };
    for (const [key, value] of Object.entries(show)) {
      if (key !== "title") {
        if (value !== "") {
          nullShow[key] = "'" + value + "'";
        }
      }
    }

    const updateQuery = `UPDATE shows SET 
        title=ARRAY [${titles}], 
        native_title=${nullShow.native_title},
        romanization=${nullShow.romanization},
        release_date=${nullShow.release_date},
        completed_date=${nullShow.completed_date},
        country='${show.country}',
        genre='${show.genre}',
        company=${nullShow.company},
        main_character=${nullShow.main_character},
        side_character1=${nullShow.side_character1},
        side_character2=${nullShow.side_character2},
        show_image=${nullShow.show_image},
        main_character_actor=${nullShow.main_character_actor},
        side_character1_actor=${nullShow.side_character1_actor},
        side_character2_actor=${nullShow.side_character2_actor},
        seasons=${nullShow.seasons},
        episodes=${nullShow.episodes},
        synopsis=${nullShow.synopsis},
        updated_at=now()
        WHERE id_show = '${id}' RETURNING *`;
    console.log("UPDATE ", updateQuery);
    return await db.query(updateQuery);
    // } else {
    //   return Promise.reject(result.error);
    // }
  },
};
