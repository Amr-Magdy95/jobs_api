require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// middleware
app.set("trust proxy", 1);
app.use(
  require("express-rate-limit")({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(require("helmet")());
app.use(require("cors")());
app.use(require("xss-clean")());

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/jobs", require("./middleware/auth"), require("./routes/jobs"));

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
