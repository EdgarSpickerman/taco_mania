const router = require("express").Router();
const tacoController = require("./controllers/taco_controller");

router
  .get("/", (req, res, next) => {
    tacoController.getAll()
      .then(queryResults => {
        res.render("index.handlebars", {results: queryResults})
      })
      .catch(err => console.log(err))
  })

module.exports = router;