const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        user: req.session["userName"],
        isAdmin: req.session["isAdmin"]
      };
      res.render("index", templateVars);
  });
  return router;
};
