const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        user: req.session["userName"]
      };
      res.render("create", templateVars);
  });
  return router;
};
router.post("/create", (req, res) => {
  const userId = req.session["userID"];
  const queryString = `
  INSERT INTO postings (image_photo_url, title, price, description, street, city, province, post_code, country)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING *;`;
  const values = [image, title, price, description, street, city, province, postal_code, country];
    return db.query(queryString, values)
    .then(res => {
      res.redirect("/");
      return res.rows[0];
    })
    .catch(err => {
      return console.log('query error:', err);
    })
  });
