const mongoose = require("mongoose");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const db = require("./models");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// app.get("/populate", (req, res) => {
//     db.Article.create({ title: "test title 2", date: "test date 2", url: "test url 2" })
//     .then(function(dbArticle){
//         res.json(dbArticle);
//     });
// });

app.post("/api/articles", (req, res) => {
    console.log(req.body);
    db.Article.create(req.body)
    .then(dbArticle => res.json(dbArticle))
});

app.get("/api/articles", (req, res) => {
    db.Article.find({})
    .then(dbArticle => res.json(dbArticle))
});

app.post("/api/delete", (req, res) => {
    console.log(req.params.id);
    // db.Article.remove({title: {(req.body)}})
    // .then(dbArticle => res.json(dbArticle))
});

app.get("/api/test", (req, res) => {
    res.send("Yay");
});

app.listen(PORT, function() {
    console.log(`You are listening on Port ${PORT}`);
});