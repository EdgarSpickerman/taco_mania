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
      .catch(err => next(err))
  })
  .post("/", (req, res, next) => {
    tacoController.make(req.body)
      .then(() => res.redirect("/"))
      .catch(err => next(err))
  })

module.exports = router;