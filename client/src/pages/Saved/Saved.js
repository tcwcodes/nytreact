import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { FormBtn } from "../../components/Form";
import NavTabs from "../../components/NavTabs";

class Saved extends Component {

    state = {
        savedArticles: []
    }

    componentDidMount(){
        this.loadArticles()
    };

    loadArticles = () => {
        API.getArticles()
        .then(savedArticles =>
            this.setState({
                savedArticles: [...this.state.savedArticles, ...savedArticles.data]
            })
        ).catch(err => console.log(err))
    };

    deleteArticle = (article) => {
        let articleID = article._id;
        alert("This button will someday delete the article with the ID " + articleID + ", but it is not ready yet. This article has been saved forever.");
        API.deleteArticle(articleID);
    };

    render() {
      return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <NavTabs />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="jumbotron text-center">New York Times Article Search</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                <List>
                    {
                        this.state.savedArticles.map((article, i) => (
                        <div key={i}>
                        <ListItem
                            key={i}
                            title={article.title}
                            date={article.date}
                            url={article.url}
                        />
                        <FormBtn
                            key={article._id}
                            title={article.title}
                            date={article.date}
                            url={article.url}
                            onClick={() => this.deleteArticle(article)}
                        >
                            Delete article
                        </FormBtn>
                        </div>
                    ))}
                </List>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
      );
    }

}
  
export default Saved;