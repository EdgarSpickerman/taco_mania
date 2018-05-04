const router = require("express").Router();

router
  .get("/", (req, res, next) => {
    res.render("index.handlebars")
  })

module.exports = router;