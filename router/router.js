const express = require("express");
const controller = require("../controller/controller");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("../models/todo");

const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const db = "TodoApp";

mongoose.connect(`mongodb://localhost:27017/${db}`, (err, success) => {
  if (success) {
    console.log(`Connected To ${db} MongoDB Database`);
  }
});

router.use("public", express.static(path.join(__dirname, "../public")));
router.use(jsonParser);
router.use(urlParser);

router.get("/", controller.getAll);

router.get("/:id", controller.getSingle);

router.post("/", urlParser, controller.Post);

router.patch("/:id", urlParser, controller.Update);

router.get("/delete/:id", controller.Delete);

router.delete("/:id", controller.DeleteJson);



router.use((req, res) => {
  res.send("<h1>404 to TODO App</h1>");
});

module.exports = {
  router,
};
