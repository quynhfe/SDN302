// app.js
const express = require("express");
const app = express();
const port = 3000;

// Import các router
const articleRouter = require("./routers/articleRouter");
const videoRouter = require("./routers/videoRouter");

// Middleware parse JSON
app.use(express.json());

// Sử dụng các router
app.use("/articles", articleRouter);
app.use("/videos", videoRouter);

// --- Error-handling Middleware ---
// Hàm này phải đặt sau cùng, nhận 4 tham số (err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log lỗi để debug

  // Gửi thông báo lỗi chung về cho client
  res.status(500).json({ error: "An error occurred, please try again later." });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
