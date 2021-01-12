const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        user: req.session["userName"]
      };
      res.render("create", templateVars);
  });

  router.post("/", (req, res) => {
    const userName = req.session["userName"];
    let image = req.body.image;
    let title = req.body.title;
    let price = req.body.price;
    let description = req.body.description;
    let street = req.body.street;
    let city = req.body.city;
    let province = req.body.province;
    let post_code = req.body.post_code;
    let country = req.body.country;
    const queryString = `
    INSERT INTO postings (image_photo_url, title, price, description, street, city, province, post_code, country)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;`;
    const values = [image, title, price, description, street, city, province, post_code, country];
      return db.query(queryString, values)
      .then(response => {
        res.redirect("/postingss");
        return res.rows[0];
      })
      .catch(err => {
        return console.log('query error:', err);
      })
    });
  return router;
};

