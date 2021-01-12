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
    let userId = req.session.userID;
    db.query(`
    SELECT favorites.*, postings.* FROM favorites
    JOIN users ON favorites.user_id = users.id
    JOIN postings ON favorites.posting_id =  postings.id
    WHERE users.id = $1;
    `, [userId])
      .then(data => {
        const templateVars = {
          user: req.session["userName"],
          isAdmin: req.session["isAdmin"],
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
