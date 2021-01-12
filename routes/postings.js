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
    console.log("THE SEARCH TERM IS", searchTerm);
    let queryString = "";
    let queryParam = "";
    if (searchTerm) {
      queryParam = [`%${searchTerm}%`];
      queryString = `SELECT postings.* FROM postings
      WHERE LOWER(postings.title) LIKE LOWER($1)
      OR LOWER(postings.description) LIKE LOWER($1);`
    } else {
      queryString = `
      SELECT postings.*, users.name FROM postings
      JOIN users ON postings.user_id = users.id
    `
    }
    db.query(queryString, queryParam)
      .then(data => {
        console.log("hellooooo", data.rows)
        const templateVars = {
          user: req.session["userName"],
          isAdmin: req.session["isAdmin"],
          postings: data.rows
        };
        res.render('postings', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    console.log("STRANGE")
    let user_id = req.session.userID;
    let posting_id = Number(req.body.postingId);
    const queryString = `
    INSERT INTO favorites (user_id, posting_id)
    VALUES
    ($1, $2)
    ;` ;
    const values = [user_id, posting_id];
      return db.query(queryString, values)
      .then(result => {
        res.send("Success!")
      })
      .catch(err => {
        return console.log('query error:', err);
      })
    });
  return router;
};




