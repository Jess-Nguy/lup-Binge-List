const db = require("../connection/pg");
const express = require("express");
const router = express.Router();

module.exports = {
  async fetchGenreCounts(id) {
    let nullId = null;
    if (id !== "") {
      nullId = `'${id}'`;
    }
    const response = await db.query(`
        SELECT 
        count(case when genre='Drama' then 1 end) as total_drama,
        count(case when genre='Sci-Fi'then 1 end) as total_sci_fi,
        count(case when genre='Fantasy' then 1 end) as total_fantasy,
        count(case when genre='Action' then 1 end) as total_action,
        count(case when genre='Adventure' then 1 end) as total_adventure,
        count(case when genre='Mystery' then 1 end) as total_mystery,
        count(case when genre='Thriller' then 1 end) as total_thriller,
        count(case when genre='Horror' then 1 end) as total_horror,
        count(case when genre='Comedy' then 1 end) as total_comedy,
        count(case when genre='Crime' then 1 end) as total_crime,
        count(case when genre='Romance' then 1 end) as total_romance,
        count(case when genre='Family' then 1 end) as total_family,
        count(case when genre='History' then 1 end) as total_history,
        count(case when genre='War' then 1 end) as total_war,
        count(case when genre='Animation' then 1 end) as total_animation,
        count(case when genre='Music' then 1 end) as total_music,
        count(*) as total_genre
        FROM display_list_all dla WHERE (${nullId} is null or user_id = ${nullId})`);
    return response;
  },
  async fetchScoreCounts(id) {
    let nullId = null;
    if (id !== "") {
      nullId = `'${id}'`;
    }
    const response = await db.query(`
        SELECT 
        count(case when score=1 then 1 end) as total_ones,
        count(case when score=2 then 1 end) as total_two,
        count(case when score=3 then 1 end) as total_three,
        count(case when score=4 then 1 end) as total_four,
        count(case when score=5 then 1 end) as total_five,
        count(case when score=6 then 1 end) as total_six,
        count(case when score=7 then 1 end) as total_seven,
        count(case when score=8 then 1 end) as total_eight,
        count(case when score=9 then 1 end) as total_nine,
        count(case when score=10 then 1 end) as total_ten,
        count(*) as total_num_score
        from display_list_all dla where (${nullId} is null or user_id = ${nullId}) and dla.score > 0`);
    return response;
  },
  async fetchStatusCounts(id) {
    let nullId = null;
    if (id !== "") {
      nullId = `'${id}'`;
    }
    const response = await db.query(`
        SELECT
        count(case when status='paused' then 1 end) as total_paused,
        count(case when status='planned' then 1 end) as total_planned,
        count(case when status='completed' then 1 end) as total_completed,
        count(case when status='watching' then 1 end) as total_watching,
        count(case when status='dropped' then 1 end) as total_dropped,
        count(*) as total_status
        from display_list_all dla where (${nullId} is null or user_id = ${nullId}) and status <> '';`);
    return response;
  },
};
