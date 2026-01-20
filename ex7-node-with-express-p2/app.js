const express = require("express");
const app = express();
const port = 3000;

// Import routers
const articleRouter = require("./routes/articleRouter");
const videoRouter = require("./routes/videoRouter"); // <-- Thêm dòng này

// Use routers
app.use("/articles", articleRouter);
app.use("/videos", videoRouter); // <-- Thêm dòng này

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
