const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoute"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
