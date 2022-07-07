const express = require("express");
const path = require("path");
const Router = require("./router/routes");

const app = express();
const port = 3000;
const host = "localhost";
app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views", "index.html"));
});

app.use("/todo", Router.router);

app.use((req, res) => {
  res.send("<h1 class='page-not-found'>404 Page not found</h1>");
});

app.listen(port, host, () => {
  console.log(`App is running at http://${host}:${port}`);
});
