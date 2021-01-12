const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    if (req.session.isNew) {
      const templateVars = {
        user: req.session["userName"]
      };
      res.render("login", templateVars);
    } else {
      res.redirect("/postings")
    }
  });

  router.post("/", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
      return db.query(`
      SELECT id, name, email, password, is_admin
      FROM users
      WHERE email = $1
    `, [email])
    .then(response => {
      if (response.rows[0]) {
        console.log("RESPONSE IS >>>>>", response.rows[0]);
        if (bcrypt.compareSync(password, response.rows[0].password)) {
          console.log("user match in database");
          let userName = response.rows[0].name;
          let userID = response.rows[0].id;
          let isAdmin = response.rows[0].is_admin;
          req.session["userName"] = userName;
          req.session["userID"] = userID;
          req.session["isAdmin"] = isAdmin
          res.redirect("/postings");
        }
        else {
          console.log("user not matched in database");
          res.redirect("/login");
        }
      } else {
        res.redirect("/login");
      }
      return response.rows[0] ? response.rows[0] : null;
    })
    .catch(e => {
      console.log("Reached here")
      response.send(e)
    });
  });

  return router;
};
