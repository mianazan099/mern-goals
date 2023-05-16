const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/goals", require("./routes/goalRoute"));
app.use("/api/users", require("./routes/userRoute"));

// Serve the Front-end
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/build/index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("You are in development mode"));
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
