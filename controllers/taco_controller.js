const tacos = require("../models/taco");

module.exports = {
  getAll: () => tacos.getTacos(),
  make: (data) => tacos.makeTaco(data),
  update: (id,data)=>tacos.updateTaco(id,data),
}