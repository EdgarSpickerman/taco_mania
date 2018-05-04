const orm = require("../config/orm");

module.exports = {
  getTacos: () => orm.selectAll('tacos'),
}