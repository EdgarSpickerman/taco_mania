const tacos = require("../models/taco");

module.exports = {
  getAll: () => tacos.getTacos(),
}