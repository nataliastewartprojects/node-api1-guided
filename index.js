//import express from "express";// ES2015 modulues
const express = require("express"); // CommonJs modules
const server = express();
const shortid = require("shortid");

server.use(express.json()); // <-- teaches express how to read JSON from body

//change const for let
let users = [{ name: "Maryam" }, { name: "Charlie" }, { name: "John" }];

//show a list of users

server.get("/users", (req, res) => {
  res.status(200).json(users);
});

//add a user
server.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(users);
});

//remove a user
server.delete("/users/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  users = users.filter((u) => u.name.toLowerCase() !== name);

  res.status(204).end();
});

//testing server
server.get("/hello", (req, res) => {
  res.send("hello WEB 32!!!");
});

//---------- accounts
const accounts = [
  { name: "Natalia", id: shortid.generate() },
  { name: " Maria", id: shortid.generate() },
  { name: "Jonas", id: shortid.generate() },
];

server.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

server.post("/accounts", (req, res) => {
  const account = req.body;
  account.id = shortid.generate();
  accounts.push(account);
  res.status(201).json(accounts);
});

const port = 8000;
server.listen(port, () => console.log("server is running.."));
