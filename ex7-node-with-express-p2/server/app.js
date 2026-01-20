// app.js
var express = require("express");
const app = express();
const port = 3000;

const articles = require("../data/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/articles", (req, res) => {
  try {
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific article by ID [cite: 40]
app.get("/articles/:id", (req, res) => {
  try {
    // Get Id from URL
    const id = parseInt(req.params.id);
    // Find article with ID
    const article = articles.find((article) => article.id === id);

    // If the post is not found, 404 is returned
    if (!article) {
      return res.status(404).send("Article not found");
    }
    // If found, returns the article
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// POST a new article [cite: 44]
app.post("/articles", (req, res) => {
  // Create a new post from the data in req.body
  const newArticle = {
    id: articles.length + 1, // This is simply an example
    title: req.body.title,
    date: req.body.date,
    text: req.body.text
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// PUT (Update) an article [cite: 45]
app.put("/articles/:id", (req, res) => {
  // Find the article's index in the array
  const index = articles.findIndex(
    (article) => article.id === parseInt(req.params.id)
  );

  if (index === -1) return res.status(404).send("Article not found");

  // Updated article with new data from req.body
  articles[index] = {
    ...articles[index],
    ...req.body
  };
  res.json(articles[index]);
});

// DELETE an article [cite: 46]
app.delete("/articles/:id", (req, res) => {
  // Lưu ý: Trong ảnh là '/article/:id', nhưng để đồng bộ nên dùng '/articles/:id'
  const index = articles.findIndex(
    (article) => article.id === parseInt(req.params.id)
  );

  if (index === -1) return res.status(404).send("Article not found");

  // Remove posts from the array
  const deletedArticle = articles.splice(index, 1);
  res.status(204).json(deletedArticle);
});

// Start server [cite: 35]
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
