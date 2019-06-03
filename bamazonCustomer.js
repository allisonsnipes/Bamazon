//require dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const Table = require("cli-table"); //manage table features with styling

//commands for program
var action = process.argv[2];//user action
var selection = process.argv.slice(3).join(" ")//user selection elimination of spacing

//set up sql connection for mysql and local server
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "nodeUser", //username
  password: '', //password
  database: "bamazon" //name of db
})

//being able to throw errors
connection.connect(function(err) {
  if (err) throw err
  console.log("connection working: " + connection.threadId);
})

//set up the function to display items for sale
//use the select * (all) from name of the table
function show() {
  //start first with the connection.query
  connection.query("SELECT * FROM bamazon", function (err, data){
    if (err) throw err

    var table = new Table({
      //set up table for data by placing its headers
      head: ["sku", "item", "department", "price", "stock"],
      //determine column widths
      colWidths: [10, 20, 15, 10, 10]
    })

    //table is an array so we can make a for loop for each new item we add to the table
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].sku, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
    }
    console.log(table.toString())
    restar()
  })
}

//switch case for user input
function commands(action, selection) {
  switch (action) {
    case "SKU": //prompt msg1
      sku(selection);
      break;
    case "PURCHASE"://prompt msg2
      buy(selection);
      break;
    default://error handling
    console.log("Please type of valid command of either SKU or PURCHASE. To select a product, or buy an item.");
    break;
  }
}
commands(action, selection);

//message to users
//prompt message to user for the sku they want to buy
function sku() {
  

}

//prompt message for how many units they want
function buy() {

}

//function to end program
function exit() {
  console.log("ending application")
  connection.end()//method to end program
}
