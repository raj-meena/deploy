const express = require("express");
const router = require("./routes/route");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>This is a server</h1>");
});

// Routes
app.use("/api/v1/app", router);

// App lister
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
