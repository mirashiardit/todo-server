const express = require("express");
const cors = require("cors");

const app = express();

const todoRouter = require("./routes/todo.routes");

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.use("/todos", todoRouter);

app.listen(3002, () => {
  console.log("Server started listening on port 3002");
});

