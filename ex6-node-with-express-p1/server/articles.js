var express = require("express");
const app = express();
const port = 3000;

// Import data from articles.js
// Lưu ý: Đảm bảo file articles.js nằm cùng thư mục
const articles = require("./articles");

// --- MIDDLEWARE ---
// Cài đặt middleware để parse dữ liệu từ body request (JSON và URL-encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// [Cite: 43]

// --- ROUTES ---

// 1. GET all articles
app.get("/articles", (req, res) => {
  // Trả về toàn bộ danh sách articles
  res.status(200).json(articles);
});
// [Cite: 39]

// 2. GET a specific article by ID
app.get("/articles/:id", (req, res) => {
  // Lấy ID từ URL và chuyển sang kiểu số nguyên
  const id = parseInt(req.params.id);

  // Tìm article có ID tương ứng
  const article = articles.find((article) => article.id === id);

  // Nếu không tìm thấy, trả về lỗi 404
  if (!article) {
    return res.status(404).send("Article not found");
  }
  // Nếu tìm thấy, trả về dữ liệu article
  res.status(200).json(article);
});
// [Cite: 40]

// 3. POST (Add) a new article
app.post("/articles", (req, res) => {
  // Tạo object article mới từ dữ liệu gửi lên trong req.body
  const newArticle = {
    id: articles.length + 1, // Tạo ID đơn giản (lưu ý: cách này chỉ dùng cho ví dụ học tập)
    title: req.body.title,
    date: req.body.date,
    text: req.body.text
  };

  articles.push(newArticle);
  res.status(201).json(newArticle);
});
// [Cite: 44]

// 4. PUT (Update) an article
app.put("/articles/:id", (req, res) => {
  // Tìm vị trí index của article trong mảng
  const index = articles.findIndex(
    (article) => article.id === parseInt(req.params.id)
  );

  // Nếu không tìm thấy (index là -1), trả về lỗi 404
  if (index === -1) return res.status(404).send("Article not found");

  // Cập nhật dữ liệu mới vào article tại vị trí index
  articles[index] = {
    ...articles[index], // Giữ lại các trường cũ
    ...req.body // Ghi đè các trường mới từ body
  };

  res.json(articles[index]);
});
// [Cite: 45]

// 5. DELETE an article
// Lưu ý: Trong tài liệu mẫu (source 46) đường dẫn là '/article/:id' (số ít),
// nhưng để nhất quán mình để là '/articles/:id'. Bạn có thể sửa lại nếu cần đúng hệt tài liệu.
app.delete("/article/:id", (req, res) => {
  const index = articles.findIndex(
    (article) => article.id === parseInt(req.params.id)
  );

  if (index === -1) return res.status(404).send("Article not found");

  // Xóa phần tử khỏi mảng
  const deletedArticle = articles.splice(index, 1);
  res.status(204).json(deletedArticle);
});
// [Cite: 46]

// --- SERVER START ---
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
