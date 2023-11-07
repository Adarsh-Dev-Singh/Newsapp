import React, { Component } from 'react';
import NewsPart from './NewsPart';
export class News extends Component {
  articles = []
  constructor(){
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles : [],
      loading: false,
      page : 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2a8790ce7fb14b2ca018b8db815a134f&page=1&pageSize=20" ;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles});
  }
  handlePreviousClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a8790ce7fb14b2ca018b8db815a134f&page=${this.state.page - 1}&pageSize=20` ;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page - 1,
      articles : parsedData.articles
    })
    
  }
  handleNextClick = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a8790ce7fb14b2ca018b8db815a134f&page=${this.state.page + 1}&pageSize=20` ;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page + 1,
      articles : parsedData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return  <div key={element.url} className="col-md-4">
            <NewsPart alt={element.source.name} url={element.url}  title={element.title} imageUrl={element.urlToImage} description={element.description}/>
          </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>	&#x21DA; Previous</button>
        <button disabled={this.state.page>=2} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next 	&#x21DB;</button>
        </div>
      </div>
    )
  }
}

export default News