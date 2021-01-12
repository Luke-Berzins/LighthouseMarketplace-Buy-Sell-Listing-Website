/*
 * All routes for Postings are defined here
 * Since this file is loaded in server.js into api/postings,
 *   these routes are mounted onto /postings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const users = require('./users');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
      SELECT postings.*, users.name FROM postings
      JOIN users ON postings.user_id = users.id
    `)
      .then(data => {
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




