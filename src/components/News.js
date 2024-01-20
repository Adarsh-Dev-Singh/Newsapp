import React, {useState , useEffect} from 'react';
import NewsPart from './NewsPart';
import Loading from './Loading';
import Proptypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0) 

 const capitlizeText = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const newsReload =  async() =>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setloading(true)
    props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false) 
    props.setProgress(100)
  }
 const  fetchMoreData = async () => {
   let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1 }&pageSize=${props.pageSize}`;
   setpage(page+1)
   let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    // this.setState({
    //   page: page + 1,
    //   articles: articles.concat(parsedData.articles),
    //   loading: false
    // })
  }
useEffect(() => {
  
  document.title = `${capitlizeText(props.category)} - Desi News App`
  newsReload()
}, [])

  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     page: page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  //   // this.setState({page:page - 1});
  //   // this.newsReload()

  // }
  // handleNextClick = async () => {
  //   if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();

  //     this.setState({
  //       page: page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     })
  //   }
  //   // this.setState({page:page + 1});
  //   // this.newsReload()
  // }
    return (

      <>
        <h2 className='text-center' style={{ margin: '10px' }}>Top <i>{capitlizeText(props.category)}</i> Headlines </h2>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container">

            <div className='row'>
              {articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsPart alt={element.source.name} url={element.url} title={element.title} imageUrl={element.urlToImage} description={element.description} publishedAt={element.publishedAt} Author={element.author} name={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>	&#x21DA; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next 	&#x21DB;</button>
        </div> */}
      </>
    )
}

News.defaultProps = {
  Country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  Country: Proptypes.string,
  pageSize: Proptypes.number,
  category: Proptypes.string
}

export default News