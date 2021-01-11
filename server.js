// load .env data into process.env
require('dotenv').config();
// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const registerRoutes = require("./routes/register");
const postingsRoutes = require("./routes/postings");
const conversationsRoutes = require("./routes/conversations");
const favoritesRoutes = require("./routes/favorites");
const messagesRoutes = require("./routes/messages");
const poolFactory = require('pg/lib/pool-factory');

// Mount all resource routes

app.use("/api/users", usersRoutes(db));
app.use("/", indexRoutes(db));
app.use("/api/postings", postingsRoutes(db));
app.use("/api/conversations", conversationsRoutes(db));
app.use("/api/favorites", favoritesRoutes(db));
app.use("/api/messages", messagesRoutes(db));
app.use("/postings", postingsRoutes(db));
app.use("/conversations", conversationsRoutes(db));
app.use("/favorites", favoritesRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/logout", logoutRoutes(db));
app.use("/register", registerRoutes(db));

app.listen(PORT, () => {
  console.log(`Lighthouse Marketplace listening on port ${PORT}`);
});
<<<<<<< HEAD

app.post("/register", (request, response) => {
  let name = request.body.name;
  let email = request.body.email;
  let password = bcrypt.hashSync(request.body.password, 12);
    return db.query(`
    INSERT INTO users (name, email, password)
    VALUES($1, $2, $3)
    RETURNING *;
  `, [name, email, password])
  .then(res => {
    console.log("USER ADDED SUCCESSFULLY!!!!")
    userID = res.rows[0].id;
    console.log("THE res.rows[0] is >>", res.rows[0]);
    request.session["userName"] = userName;
    response.redirect("/");
    return res.rows[0] ? res.rows[0] : null;
  })
  .catch(e => response.send(e));
})

app.post("/login", (request, response) => {
  let email = request.body.email;
  let password = request.body.password;
    return db.query(`
    SELECT id, name, email, password
    FROM users
    WHERE email = $1
  `, [email])
  .then(res => {
    console.log("Reached here!!!")
    console.log(res.rows[0]);
    if (res.rows[0]) {
      if (bcrypt.compareSync(password, res.rows[0].password)) {
        console.log("user match in database");
        let userID = res.rows[0].id;
        let userName = res.rows[0].name;
        request.session["userName"] = userName;
        request.session["userID"] = userID;
        response.redirect("/postings");
      }
      else {
        console.log("user not matched in database");
        response.redirect("/login");
      }
    } else {
      response.redirect("/login");
    }
    // return res.rows[0] ? res.rows[0] : null;
  })
  .catch(e => {
    console.log("Reached here")
    response.send(e)
  });
})

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});
=======
>>>>>>> 8f99c6f5a5577fe8926f86b9d9223f7a3358ac06
