const mongoose = require("mongoose");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
<<<<<<< HEAD
const path = require("path");
require("dotenv").config()
=======
>>>>>>> parent of e9d99c8... hopefully deployed
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const db = require("./models");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
// Static
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
 }

// app.use(express.static("client/build"));

=======
>>>>>>> parent of e9d99c8... hopefully deployed
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

<<<<<<< HEAD
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"))
// })

=======
>>>>>>> parent of e9d99c8... hopefully deployed
app.listen(PORT, function() {
    console.log(`You are listening on Port ${PORT}`);
});