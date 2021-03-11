const express = require("express");
const app = express();
app.use(express.static("./public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

app.get('/projects', (req, res) => {
    const projects = [
     {
    "title": "connect4",
    "directory": "connect4-new",
    "description": "a simple web version of 'connect four' game. Two colors, two players, four tokens in line needed to win"
  },

  {
    "title": "pane",
    "directory": "pane",
    "description": "dynamic, interactive and visually attractive element for every website"
  },

  {
    "title": "spiced website",
    "directory": "spiced-web",
    "description": "website for spiced academy"
  },

  {
    "title": "spotify",
    "directory": "spotify",
    "description": "a search engine for music artists and albums utilizing spotify's API"
  },

  {
    "title": "ticker",
    "directory": "ticker",
    "description": "another dynamic visual element useful for quick and simple content delivery"
  },

  {
    "title": "carousel",
    "directory": "mycarousel",
    "description": "visual element perfect for dynamic and interactive preview of selected photos"
  }
    ];
    // WE DO NOT USE RENDER ANY MORE!!!!
    res.json(projects);
}); 

app.listen(8080, () => console.log("peace mi bredda"));
