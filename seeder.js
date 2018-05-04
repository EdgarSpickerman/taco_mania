require("dotenv").config();
const fs = require("fs");
const seedConn = require("./config/connection").seed;
const schema = './db/schema.sql';
const seeds = "./db/seeds.sql";


const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => err ? reject(err) : resolve(data))
  })
}

const toSqlStatement = (string) => {
  const invalidStatements = [""]
  return string.split(";")
    .filter(statement => !invalidStatements.includes(statement))
}

const executeStatements = (listOfStatements) => {
  listOfStatements.forEach(statement => {
    seedConn.query(statement, (err, data) => {
      if (err) throw err;
    })
  });
}

Promise.all([
    readFile(schema).then(fileData => toSqlStatement(fileData)),
    readFile(seeds).then(fileData => toSqlStatement(fileData)),
  ])
  .then(data => [...data[0], ...data[1]])
  .then(data => executeStatements(data))
  .then(()=>seedConn.end())
  .catch(err => console.log("AN Error occured"))