const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

  });

  router.post("/", (req, res) => {
    let postingId = Number(req.body.postingId);
    let queryParams = [postingId];
    let queryString = `
    DELETE FROM postings
    WHERE postings.id = $1;`;
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
