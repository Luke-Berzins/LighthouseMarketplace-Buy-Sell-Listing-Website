/*
 * All routes for Conversations are defined here
 * Since this file is loaded in server.js into api/conversations,
 *   these routes are mounted onto /conversations
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM conversations;`)
      .then(data => {
        const templateVars = { conversations: data.rows};
        res.render('conversations', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
