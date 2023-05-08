const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ working: true });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
