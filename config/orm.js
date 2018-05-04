const conn = require("./connection").user;

const query = (statement, options) => {
  return new Promise((resolve, reject) => {
    conn.query(statement, options, (err, qryData) => {
      err ? reject(err) : resolve(qryData);
    })
  })
}

module.exports = {
  selectAll: (tblName) => {
    const statement = "select * from ??";
    const opts = [tblName];
    return query(statement, opts);
  },
  insertOne: (tblName,data)=>{
    const statement = 'insert into ?? set ?';
    const opts = [tblName,data];
    return query(statement, opts);
  },
  updateOne: () => "",
}