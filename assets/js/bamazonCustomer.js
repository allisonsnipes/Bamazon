//require dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const Table = require("cli-table"); //manage table features with styling

//set up sql connection for mysql and local server
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "nodeUser", //username
  password: '',
  database: "bamazon"
});
