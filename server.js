const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{

  res.render("index");

})

app.get("/about", (req, res)=>{

  res.render("about");

})

app.get("/contact", (req, res)=>{

  res.render("contact");

})

app.get("/projects", (req, res)=>{

  res.render("projects");

})

app.get("/resume", (req, res)=>{

  res.render("resume");

})

app.listen(PORT, ()=>{
  console.log(`Server is runnning on port ${PORT}`);
})
