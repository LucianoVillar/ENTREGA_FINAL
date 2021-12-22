const express = require("express");

const app = express();
const path = require("path");
const port = process.env.PORT || 3000
const routes = require("./routes/index");

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");


// middlewares

// routes
app.use(routes);


// static files

// listening the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
