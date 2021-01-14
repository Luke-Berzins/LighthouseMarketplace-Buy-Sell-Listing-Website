const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

  });

  router.post("/", (req, res) => {
    let actionToDo = req.body.actionToDo;
    let setDbValue = actionToDo == "Mark as Sold" ? false : true;
    let postingId = Number(req.body.postingId);
    let queryParams = [setDbValue, postingId];
    let queryString = `
    UPDATE postings
    SET available = $1
    WHERE postings.id = $2`;
    return db.query(queryString, queryParams)
      .then(result => {
        res.send("DB updated successfully.");
      })
      .catch(err => {
        return console.log('query error:', err);
      });
  });
  return router;
};
