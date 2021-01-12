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
    let userID = req.session["userID"];
    db.query(`SELECT messages.*, postings.*
    FROM messages
    JOIN conversations on conversations.id = conversation_id
    JOIN users on sender_id = users.id
    JOIN postings on posting_id = postings.id
    WHERE users.id = $1
    OR receiver_id = $1
    ORDER BY conversation_id, time_sent;
    `, [userID])
      .then(data => {
        const templateVars = {
        user: req.session["userName"],
        userIdent: userID,
        messages: data.rows
      };
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
