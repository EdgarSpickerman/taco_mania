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
  .put("/tacos/:id", (req, res, next) => {
    const {id,...devoured } = req.body;
    tacoController.update(id, devoured)
      .then(data => res.json(data))
      .catch(err => res.json(err))
  })

module.exports = router;