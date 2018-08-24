import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import NavTabs from "../../components/NavTabs";

class Home extends Component {
    state = {
        results: [],
        topic: ""
    };

    componentDidMount(){
        // this.findArticles();
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.topic) {
            this.findArticles(this.state.topic);
            // API.searchArticle({
            //   title: this.state.title,
            //   author: this.state.author,
            //   synopsis: this.state.synopsis
            // })
            //   .then(res => this.loadBooks())
            //   .catch(err => console.log(err));
        }
    }

    saveArticle = (article) => {
        let newArticle = {
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
        }
        // console.log(newArticle);
        API.saveArticle(newArticle)
    }

    findArticles = (topic) => {
        API.searchArticle(topic)
        // .then(function(searchResult) {
        //     console.log(searchResult);
        // })
        .then(results =>
            this.setState({
                results: [...this.state.results, ...results.data.response.docs]
            })
        ).catch(err => console.log(err))
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
                    <form>
                        <Input
                            value={this.state.topic}
                            onChange={this.handleInputChange}
                            name="topic"
                            placeholder="Enter a topic"
                        />
                        <FormBtn
                            disabled={!(this.state.topic)}
                            onClick={this.handleFormSubmit}
                        >
                            Search for articles
                        </FormBtn>
                    </form>
                </div>
                <div className="col-md-2">
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                <List>
                    {
                        this.state.results.map((article, i) => (
                        <div key={i}>
                        <ListItem
                            key={i}
                            title={article.headline.main}
                            date={article.pub_date}
                            url={article.web_url}
                        />
                        <FormBtn
                            key={article._id}
                            title={article.headline.main}
                            date={article.pub_date}
                            url={article.web_url}
                            onClick={() => this.saveArticle(article)}
                        >
                            Save article
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
  
export default Home;