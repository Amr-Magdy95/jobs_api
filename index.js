require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/jobs", require("./routes/jobs"));

// error handler and 404
app.use(require("./middleware/notFound"));
app.use(require("./middleware/errorHandler"));

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    console.log("Connecting to the DB...");
    await require("mongoose").connect(process.env.MONGO_URI);
    console.log("Connected to the DB...");
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
