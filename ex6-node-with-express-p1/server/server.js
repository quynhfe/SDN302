const express = require("express");
const data = require("../data/data.json");
const app = express();
app.use(express.json());

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Port is running on port 3000");
});

app.post("/update", (req, res) => {
  const newData = req.body;

  res.json({
    message: "The data has been updated",
    data: newData
  });
});
