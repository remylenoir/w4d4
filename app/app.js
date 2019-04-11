const express = require("express");
const app = express();

// Init the HBS
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ironhacker",
    bool: Math.round(Math.random())
  });
});

// Passing an array
app.get("/games", (req, res) => {
  res.render("games", {
    gamesList: ["Counter-Strike", "BF3", "Sims", "Street Fighter"],
    consolesObj: {
      Sony: "PS4",
      Nintendo: "Switch",
      Microsoft: "Xbox One"
    },
    country: {
      JP: "Japan",
      FR: "France",
      DE: "Germany"
    }
  });
});

app.listen(3000);
