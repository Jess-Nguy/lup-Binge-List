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
});

module.exports = {
  async fetchById(id) {
    console.log("INSIDE with Id: ", id);
    const userResponse = await db.query(`SELECT * FROM users WHERE id_user = '${id}'`);
    return userResponse;
  },
  async findByEmail(email) {
    const userResponse = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
    return userResponse;
  },
  async fetchBanners() {
    const banners = await db.query(`Select distinct banners from users`);
    return banners;
  },
  async updateBanners(data) {
    const checkUserRole = await db.query(`select role_id from users where id_user = '${data.id}'`);
    if (checkUserRole.rows[0].role_id == 1) {
      const adminUpdateBanners = await db.query(`update users set banners = array['${data.banners[0]}','${data.banners[1]}','${data.banners[2]}']`);
      return adminUpdateBanners;
    } else {
      return Promise.reject("This users is not an Admin and cannot change banners.");
    }
  },
  async updateByGoogleId(id, user) {
    const result = schema.validate(user);

    if (result !== null) {
      return await db.query(
        `UPDATE users SET username='${user.username}', email='${user.email}', profile_image='${user.profile_image}' WHERE google_id = '${user.google_id}' RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async updateByUserId(user) {
    const result = schema.validate(user);
    if (result !== null) {
      return await db.query(
        `UPDATE users SET username='${user.username}', time_zone='${user.timezone}' WHERE id_user = '${user.id_user}' RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async insert(user) {
    const result = schema.validate(user);
    if (result !== null) {
      return await db.query(
        `INSERT INTO users (username, email, google_id, time_zone, profile_image) VALUES ('${user.username}','${user.email}','${user.google_id}','${user.time_zone}','${user.profile_image}') RETURNING *`
      );
    } else {
      return Promise.reject(result.error);
    }
  },
  async fetchUserByFilter(user) {
    let nullUser = {
      idUser: null,
      email: null,
      googleId: null,
      username: null,
      roleId: null,
      timezone: null,
    };
    for (const [key, value] of Object.entries(user)) {
      if (value !== "") {
        if (key == "username") {
          nullUser[key] = "'%" + value + "%'";
        } else {
          nullUser[key] = "'" + value + "'";
        }
      }
    }

    const response = await db.query(
      `select *,
        (select count(*) from users) as total
        from users where 
        (${nullUser.idUser} is null or id_user = ${nullUser.idUser}) and 
        (${nullUser.email} is null or email = ${nullUser.email}) and
        (${nullUser.googleId} is null or google_id = ${nullUser.googleId}) and
        (${nullUser.username} is null or username ilike ${nullUser.username}) and 
        (${nullUser.roleId} is null or role_id = ${nullUser.roleId}) and 
        (${nullUser.timezone} is null or time_zone = ${nullUser.timezone})
        offset ${user.offset} limit ${user.limit}`
    );
    return response;
  },
};
