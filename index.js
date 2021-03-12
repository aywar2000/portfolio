const express = require("express");
const app = express();
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

app.get("/projects", (req, res) => {
  const projects = [
    {
      id: 1,
      title: "connect4",
      directory: "connect4-new",
      description:
        "a simple web version of 'connect four' game. Two colors, two players, four tokens in line needed to win",
    },

    {
      id: 2,
      title: "pane",
      directory: "pane",
      description:
        "dynamic, interactive and visually attractive element for every website",
    },

    {
      id: 3,
      title: "spiced website",
      directory: "spiced-web",
      description: "website for spiced academy",
    },

    {
      id: 4,
      title: "spotify",
      directory: "spotify",
      description:
        "a search engine for music artists and albums utilizing spotify's API",
    },
  ];
  // WE DO NOT USE RENDER ANY MORE!!!!
  res.json(projects);
  console.log("projects", projects);
});

app.listen(8080, () => console.log("peace mi bredda"));
