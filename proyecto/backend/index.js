const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = 5000;

app.get("/getMyInfo", (req, res) => {
  res.json({
    name: "Fernanda",
    lastname: "Ramírez",
    socialMedia: {
      facebookUser: "aminespinoza10",
      instagramUser: "aminespinoza10",
      xUser: "aminespinoza",
      linkedin: "amin-espinoza",
      githubUser: "aminespinoza10",
    },
    blog: "https://frufru-landia.blogsport.com",
    author: "Fernanda Ramírez",
  });
});

app.listen(port, () => {
  console.log("Escuchando el port: " + port);
});
