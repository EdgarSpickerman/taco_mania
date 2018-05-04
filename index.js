const express = require("express");
const routes = require("./routes");
const port = process.env.PORT || 3000;
const webSuccess = port=>{
  console.log(`Server is running on http://localhost:${port}`);
}

const webServer = express();

webServer
  .use(routes)
  .use((req,res,next)=>res.sendStatus(404))
  .use((err,req,res,next)=>res.sendStatus(500))
  .listen(port,webSuccess(port))