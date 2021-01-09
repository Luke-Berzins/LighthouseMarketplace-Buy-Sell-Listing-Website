/*
 * All routes for Postings are defined here
 * Since this file is loaded in server.js into api/postings,
 *   these routes are mounted onto /postings
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM postings;`)
      .then(data => {
        const postings = data.rows;
        res.json({ postings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
