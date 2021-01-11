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
    db.query(`SELECT *
    FROM messages
    ORDER BY conversation_id, time_sent;
    `)
      .then(data => {
        console.log(req.session)
        const templateVars = { user: req.session, messages: data.rows};
        console.log(templateVars)
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
