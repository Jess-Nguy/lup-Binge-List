const db = require("../connection/pg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

const schema = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  google_id: Joi.string().required(),
  time_zone: Joi.string().required(),
  profile_image: Joi.string().uri({
    scheme: [/https/],
  }),
  role: Joi.string(),
});

module.exports = {
  findByEmail(email) {
    const userResponse = db.query(`SELECT * FROM users WHERE email = '${email}'`);
    return userResponse;
    // return db("users").where("email", email).first();
  },
  update(id, user) {
    const result = schema.validate(user);
    if (result !== null) {
      return db.query(
        `UPDATE users SET username='${user.username}', email='${user.email}', profile_image='${user.profile_image}' WHERE google_id = '${user.google_id}' RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  insert(user) {
    const result = schema.validate(user);
    if (result !== null) {
      return db.query(
        `INSERT INTO users (username, email, google_id, time_zone, profile_image, role) VALUES ('${user.username}','${user.email}','${user.google_id}','${user.time_zone}','${user.profile_image}','${user.role}') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
};
