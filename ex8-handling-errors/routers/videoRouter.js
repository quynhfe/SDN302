// routers/videoRouter.js
const express = require("express");
const router = express.Router();

// Logic xử lý POST /videos
router.post("/", async (req, res, next) => {
  try {
    const { title, duration } = req.body;

    // Kiểm tra lỗi giả lập cho video
    if (!title || !duration) {
      throw new Error("Missing required video fields");
    }

    res.status(201).json({ message: "Video saved successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
