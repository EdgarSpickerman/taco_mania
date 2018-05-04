const router = require("express").Router();
const tacoController = require("./controllers/taco_controller");

const showView = (data, res, template) => {
  const dataObject = {}
  dataObject.results = data
  res.render(template, dataObject);
}

router
  .get("/", (req, res, next) => {
    tacoController.getAll()
      .then(data => showView(data, res, "index.handlebars"))
      .catch(err => console.log(err))
  })

module.exports = router;