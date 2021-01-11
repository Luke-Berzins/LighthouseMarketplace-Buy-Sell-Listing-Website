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
    db.query(`
      SELECT postings.*, users.name FROM postings
      JOIN users ON postings.user_id = users.id;
    `)
      .then(data => {
<<<<<<< HEAD
        console.log("test", data.rows)
        const templateVars = { postings: data.rows };
=======
        const templateVars = {
          user: req.session["userName"],
          postings: data.rows
        };
>>>>>>> a408a10c0c9dc8c170a3bf5322e387b305432f22
        res.render('postings', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};



