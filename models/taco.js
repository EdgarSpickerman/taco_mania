const orm = require("../config/orm");

module.exports = {
  getTacos: () => orm.selectAll('tacos'),
  makeTaco: (data) => orm.insertOne("tacos", data),
  updateTaco: (id, data) => orm.updateOne("tacos",id, data),
}