const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoute"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
