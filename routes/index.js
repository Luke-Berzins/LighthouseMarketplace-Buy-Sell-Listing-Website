const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const templateVars = {
      user: req.session["userName"],
      isAdmin: req.session["isAdmin"]
    };
    if (req.session.userName) {
      res.redirect("/postings");
    } else {
      res.render("index", templateVars);
    }
  });
  return router;
};
