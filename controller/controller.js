const express = require("express");
const controller = require("../controller/controller");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("../models/todo");

const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: false });

const getAll = async function (req, res) {
  const getAll = await Todo.find();
  res.json(getAll);
};

const getSingle = async function(req, res) {
  const id = req.params.id;
  const find = await Todo.findById(id);
  if (find != null) {
    res.json(find);
  } else {
    res.json(find);
  }
}
const Post =  async function (req, res) {
  const setTodo = req.body.todo;
  const setCompleted = req.body.completed;
  const addTodo = await Todo.create({ todo: setTodo, completed: setCompleted });
  res.redirect("/");
}
const Update = async function (req, res) {
  const id = req.params.id;
  const setTodo = req.body.todo;
  const setCompleted = req.body.completed;
  const updateTodo = await Todo.updateOne(
    { _id: id },
    { $set: { todo: setTodo, completed: setCompleted } },
    { upsert: true }
  );
  res.json(updateTodo);
}

const Delete = async function(req, res) {
  const id = req.params.id;
  const deleted = await Todo.deleteOne({ _id: id });
  res.redirect("/");
}


const DeleteJson = async function(req, res) {
  const id = req.params.id;
  const deleted = await Todo.deleteOne({ _id: id });
  res.json(deleted);
}
module.exports = {
  getAll,
  getSingle,
  Post,
  Update,
  Delete,
  DeleteJson
};

