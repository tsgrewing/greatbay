var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
    // ​   inquirer questions for bid or post
    return inquirer.prompt({
        type: "checkbox",
        name: "option",
        message: "Would you like to post an item or bid on an item?",
        choices: ["post", "bid"]
    }).then(answers => {
        if (answers.option === "post") {
            postAuction();
        }
        else {
            bidAuction();
        }
    })

}

// function to handle posting new items up for auction
function postAuction() {
  // prompt for info about the item being put up for auction
   return inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What would you like to post?"
}, 
]).then(answers => {
    var query = connection.query("INSERT INTO auctions SET ?", {
        name: answers.name,
        bid: 0
    });
});
};

function bidAuction() {
  // query the database for all items being auctioned
   connection.query("SELECT * FROM auctions", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].idnew_table + " | " + res[i].name + " | " + res[i].bid);
    }
})
}