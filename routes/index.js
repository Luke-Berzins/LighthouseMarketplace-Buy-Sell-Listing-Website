const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        user: req.session["userName"]
      };
      console.log("THE TEMPLATE VARIABLES ARE >>>", templateVars);
      res.render("index", templateVars);
  });
  return router;
};
