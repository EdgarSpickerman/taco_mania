require("dotenv").config();
const express = require("express");
const exphbr = require("express-handlebars");
const bodyParser = require("body-parser");
const routes = require("./routes");
const port = process.env.PORT || 3000;
const webSuccess = port=>{
  console.log(`Server is running on http://localhost:${port}`);
}

const webServer = express();

webServer
  .engine("handlebars",exphbr({defaultLayout: "main"}))
  .set("view engine","handlebars")
  .use(bodyParser.urlencoded({extended:false}))
  .use(routes)
  .use((req,res,next)=>res.sendStatus(404))
  .use((err,req,res,next)=>res.sendStatus(500))
  .listen(port,webSuccess(port))