// routers/articleRouter.js
const express = require("express");
const router = express.Router();

// Logic xử lý POST /articles
router.post("/", async (req, res, next) => {
  try {
    const { title, date, text } = req.body;

    // Giả lập logic lưu bài viết và kiểm tra lỗi
    if (!title || !date || !text) {
      throw new Error("Missing required article fields");
    }

    // Nếu thành công
    res.status(201).json({ message: "Article saved successfully" });
  } catch (err) {
    // Đẩy lỗi sang middleware xử lý lỗi ở app.js
    next(err);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // Giả lập hành động xóa thành công và trả về text như trong tài liệu
  res.send(`Deleting article: ${id}`);
});

module.exports = router;
