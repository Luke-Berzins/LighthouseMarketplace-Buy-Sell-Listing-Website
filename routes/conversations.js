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
    db.query(`SELECT messages.*, postings.*, name
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
          isAdmin: req.session["isAdmin"],
          userIdent: userID,
          messages: data.rows
        };
        res.render('conversations', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });


    router.post("/", (req, res) => {
      let user_id = req.session["userID"];
      let content = req.body["message"];
      let conversation_id = req.body["conversation_id"];
      let otherUser_id = req.body["otherUser_id"];
      return db.query(`
          INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent)
          VALUES
          ($1, $2, $3, $4, Now())
          ;`, [user_id, Number(otherUser_id), content, Number(conversation_id)])
        .then(resp => {
          console.log("MSG SENT SUCCESSFULLY!!!!");
          res.status(204).send();
        })
        .catch(e => res.send(e));
    });
  });
  return router;
};
