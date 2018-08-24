import axios from "axios";

export default {
    searchArticle: function(searchTerm) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3324bfc0231542e9aac9feb70e837b12&q=" + searchTerm);
    },
    saveArticle: function(articleData) {
        // console.log(articleData)
        return axios.post("/api/articles", articleData);
    },
    getArticles: function() {
        return axios.get("/api/articles")
    },
    deleteArticle: function(articleID) {
        return axios.get("/api/articles/:id");
    }
};