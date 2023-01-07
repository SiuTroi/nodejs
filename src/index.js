const { engine } = require('express-handlebars');
const express = require("express")
const morgan = require("morgan")
const path = require("path")

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

// HTTP logger
app.use(morgan("short"));

// Template engine
app.engine('hbs', engine({
  extname: "hbs" // config file extension
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resource/views"))


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
