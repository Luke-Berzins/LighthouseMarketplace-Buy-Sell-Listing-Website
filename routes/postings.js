/*
 * All routes for Postings are defined here
 * Since this file is loaded in server.js into api/postings,
 *   these routes are mounted onto /postings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { response } = require('express');
const express = require('express');
const users = require('./users');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const searchTerm = req.query.searchpostings;
    const priceFilter = req.query.filterprice;
    let queryString = "";
    let queryParam = "";
    if (searchTerm) {
      queryParam = [`%${searchTerm}%`];
      queryString = `SELECT postings.* FROM postings
      WHERE LOWER(postings.title) LIKE LOWER($1)
      OR LOWER(postings.description) LIKE LOWER($1);`;
    } else if (priceFilter) {
      queryParam = [`${priceFilter}`];
      queryString = `SELECT postings.* FROM postings
      WHERE postings.price <= $1;`;
    } else {
      queryString = `
      SELECT postings.*, users.name FROM postings
      JOIN users ON postings.user_id = users.id;
    `;
    }
    db.query(queryString, queryParam)
      .then(data => {
        const templateVars = {
          user: req.session["userName"],
          isAdmin: req.session["isAdmin"],
          postings: data.rows
        };
        res.render('postings', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    let user_id = req.session.userID;
    let posting_id = Number(req.body.postingId);
    let actionToDo = req.body.actionToDo;
    let queryString = "";
    const values = [user_id, posting_id];
    if (actionToDo.includes("fas")) {
      queryString = `
      INSERT INTO favorites (user_id, posting_id)
      VALUES ($1, $2)
      ON CONFLICT DO NOTHING;`;
    } else {
      queryString = `
      DELETE FROM favorites
      WHERE user_id = $1 AND posting_id = $2;
      `;
    }
    return db.query(queryString, values)
      .then(result => {
        res.send("Success!");
      })
      .catch(err => {
        console.log("Error in query");
      });
  });
  return router;
};




