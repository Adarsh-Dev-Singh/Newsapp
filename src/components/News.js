import React, { Component } from 'react';
import NewsPart from './NewsPart';
import Loading from './Loading';
import Proptypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    Country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    Country: Proptypes.string,
    pageSize: Proptypes.number,
    category: Proptypes.string
  }
  capitlizeText = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitlizeText(this.props.category)} - Desi News App`
  }
  async newsReload() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: false });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      loading: false
    })
  }

  async componentDidMount() {
    this.newsReload();
  }
  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  //   // this.setState({page:this.state.page - 1});
  //   // this.newsReload()

  // }
  // handleNextClick = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     })
  //   }
  //   // this.setState({page:this.state.page + 1});
  //   // this.newsReload()
  // }
  render() {
    return (

      <>
        <h2 className='text-center' style={{ margin: '10px' }}>Top <i>{this.capitlizeText(this.props.category)}</i> Headlines </h2>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">

            <div className='row'>
              {this.state.articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsPart alt={element.source.name} url={element.url} title={element.title} imageUrl={element.urlToImage} description={element.description} publishedAt={element.publishedAt} Author={element.author} name={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>	&#x21DA; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next 	&#x21DB;</button>
        </div> */}
      </>
    )
  }
}

export default News