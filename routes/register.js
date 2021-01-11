const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    if (req.session.isNew) {
      const templateVars = {
        user: req.session["userName"]
      };
      res.render("register", templateVars);
    } else {
      res.redirect("/postings")
    }
  });

  router.post("/", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 12);
      return db.query(`
      INSERT INTO users (name, email, password)
      VALUES($1, $2, $3)
      RETURNING *;
    `, [name, email, password])
    .then(response => {
      console.log("USER ADDED SUCCESSFULLY!!!!")
      let userName = response.rows[0].name;
      req.session["userName"] = userName;
      res.redirect("/");
      return response.rows[0] ? response.rows[0] : null;
    })
    .catch(e => response.send(e));
  });

  return router;
};
