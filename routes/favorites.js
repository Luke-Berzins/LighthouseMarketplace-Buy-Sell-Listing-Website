/*
 * All routes for Favorites are defined here
 * Since this file is loaded in server.js into api/favorites,
 *   these routes are mounted onto /favorites
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT * FROM favorites
    JOIN postings ON favorites.user_id = postings.user_id
    JOIN users ON postings.user_id = postings.user_id;
  `)
      .then(data => {
        const templateVars = {
          user: req.session["userName"],
          favorites: data.rows
        };
        res.render('favorites', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
