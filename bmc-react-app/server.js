const express = require("express"); // imports express
const path = require("path"); // imports path

const app = express(); // creates express app

const port = process.env.PORT || 5000; // uses env port definition

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});