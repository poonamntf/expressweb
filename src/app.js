
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const port = process.env.PORT || 8080;

//public static path
//console.log(path.join(__dirname, "../public"));
const static_path=path.join(__dirname, "../public");
const templates_path=path.join(__dirname, "../templates/views");
const partial_path =path.join(__dirname,"../templates/partials");

//set engine
app.set('view engine', 'hbs');
app.set('views', templates_path);
app.use(express.static(static_path));
hbs.registerPartials(partial_path);
//routing
app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error",{errorpage:"Oops! Page not Found"});
});
app.listen(port , ()=>{
    console.log(`listenning to the port at ${port}`);
});


