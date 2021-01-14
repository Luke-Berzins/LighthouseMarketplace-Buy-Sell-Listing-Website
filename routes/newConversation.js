const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

  });

  router.post("/", (req, res) => {
    console.log("heeeeere", req.body);
    let sender_id = req.session["userID"];
    let receiver_id = req.body["receiver_id"];
    let posting_id = req.body["posting_id"];
    return db.query(`
          INSERT INTO conversations (seller_id, buyer_id, posting_id)
          VALUES
          ($1, $2, $3)
          RETURNING *
          ;`, [Number(receiver_id), Number(sender_id), Number(posting_id)])
      .then(response => {
        console.log("000000", response.rows);
        console.log("000000", req.body);
        let sender_id = req.session["userID"];
        let newMessage = req.body["newMessage"];
        let receiver_id = req.body["receiver_id"];
        return db.query(`
          INSERT INTO messages (sender_id, receiver_id, content, conversation_id, time_sent)
          VALUES
          ($1, $2, $3, $4, Now())
          ;`, [sender_id, Number(receiver_id), newMessage, response.rows[0]["id"]])
        })
        .then(resp => {
          console.log("MSG SENT SUCCESSFULLY!!!!");
          res.status(204).send();
        })
        .catch(e => res.send(e));


  });
  return router;
};
