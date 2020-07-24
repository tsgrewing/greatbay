var mysql = require("mysql");
var inquirer = require("inquirer");
​
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
​
  // Your port; if not 3306
  port: 3306,
​
  // Your username
  user: "root",
​
  // Your password
  password: "",
  database: "greatBay_DB"
});
​
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
​
// function which prompts the user for what action they should take
function start() {
​
}
​
// function to handle posting new items up for auction
function postAuction() {
  // prompt for info about the item being put up for auction
​
}
​
function bidAuction() {
  // query the database for all items being auctioned
​
}