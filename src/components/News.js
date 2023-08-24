// import React, { Component } from 'react'
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatePage = async () => {
    props.setProgress(10);
    let url;
    if(props.keyWord==''){
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    }
    else{
      url = `https://newsapi.org/v2/everything?q=${props.keyWord}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    } 
    setLoading("true");
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - NewsDaily`;
    updatePage();
    // eslint-disable
  }, [])
  

  const fetchMore = async () => {
    let url;
    if(props.keyWord==''){
      url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    }
    else{
      url = `https://newsapi.org/v2/everything?q=${props.keyWord}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    } 
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
  }

  return (
      <>
        <h2 className="text-center mt-3 heading" style={{ paddingTop: "60px" }}>
          Top Headlines
        </h2>

        {props.category !== "general" && (
          <h2 className="text-center categ">
            {capitalizeFirstLetter(props.category)}
          </h2>
        )}

        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={articles.length < totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title} // ? element.title.slice(0, 45) : ""
                      description={
                        element.description
                          // ? element.description.slice(0, 88)
                          // : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://imgeng.jagran.com/images/2023/jun/microsoft-bing-india-top-316808776645771686718498826.jpg"
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author ? element.author : "Unknown"}
                      sourceName={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
              <button disabled={page<=1} type="button" className="btn btn-dark mx-2" onClick={handlePrevious}><span>&#8592;</span>Previous</button>
              <button disabled={page+1 > Math.ceil(totalArticles/props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={handleNext}><span>&#8594;</span>Next</button>
            </div> */}
      </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  setProgress: 0,
  keyWord : ''
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  keyWord : PropTypes.string
};

// export class News extends Component {
//   static defaultProps = {
//     country : 'in',
//     pageSize : 6,
//     category : 'general',
//     setProgress : 0
//     // searchQuery : ''
//   }

//   static propTypes={
//     country : PropTypes.string,
//     pageSize : PropTypes.number,
//     category : PropTypes.string,
//     // searchQuery : PropTypes.string
//   }

//   capitalizeFirstLetter=(string)=>{
//     return string.charAt(0).toUpperCase()+string.slice(1);
//   }

//   constructor(props){
//     super(props);
//     console.log("hello");
//     this.state = {
//       articles : [],
//       loading : false,
//       page : 1,
//       totalArticles : 0
//     }
//     document.title=`${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//   }

//   // async componentDidUpdate(prevProps) {
//   //   if (prevProps.searchQuery!== props.searchQuery ) {
//   //       await this.updateNews();
//   //   }
//   // }

//   updatePage = async()=>{
//     props.setProgress(10);
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // if(props.searchQuery===''){
//     //   url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8f8c09e9c52a4d21bd1e8357e1852c52&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // }
//     // else{
//     //   url=`https://newsapi.org/v2/top-headlines?q=${props.searchQuery}&country=${props.country}&category=${props.category}&apiKey=8f8c09e9c52a4d21bd1e8357e1852c52&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // }
//     this.setState({loading : true});
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(60);
//     console.log(parsedData);
//     this.setState({
//       articles : parsedData.articles,
//       totalArticles : parsedData.totalResults,
//       loading : false,
//     });
//     props.setProgress(100);
//   }

//   async componentDidMount(){  //a lifecycle method ..runs after render()
//     this.updatePage();
//   }

//   // handleNext = async ()=>{
//   //   this.setState({
//   //     page : this.state.page + 1
//   //   })
//   //   this.updatePage();
//   // }

//   // handlePrevious = async ()=>{
//   //   this.setState({
//   //     page : this.state.page - 1
//   //   })
//   //   this.updatePage();
//   // }

//   fetchMore = async ()=>{
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//     this.setState({
//       page : this.state.page + 1
//     })
//     // if(props.searchQuery===''){
//     //   url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8f8c09e9c52a4d21bd1e8357e1852c52&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // }
//     // else{
//     //   url=`https://newsapi.org/v2/top-headlines?q=${props.searchQuery}&country=${props.country}&category=${props.category}&apiKey=8f8c09e9c52a4d21bd1e8357e1852c52&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // }
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles : this.state.articles.concat(parsedData.articles),

//     });

//   }

//   // reverseDate=(dateString)=>{
//   //   dateString = dateString.slice(0,10);
//   //   let newDate;
//   //   newDate=dateString.substring(8,10)+dateString.substring(4,7)+'-'+dateString.substring(0,4);
//   //   return newDate;
//   // }
//   // and call this 'date={this.reverseDate(element.publishedAt)}'

//   // or use gmt string in newsitem

//   render() {
//     return (
//       <div>
//         <>
//           <h2 className="text-center mt-3 heading">Top Headlines</h2>

//           {props.category!=='general' && <h2 className="text-center categ">{this.capitalizeFirstLetter(props.category)}</h2>}

//           {/* {this.state.loading && <Spinner/>} */}
//           {/* <div className="row my-4">
//           {!this.state.loading && this.state.articles.map((element)=>{
//             return <div key={element.url} className="col-md-4">
//               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
//               imageUrl={element.urlToImage?element.urlToImage:"https://imgeng.jagran.com/images/2023/jun/microsoft-bing-india-top-316808776645771686718498826.jpg"}
//               newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"}  sourceName={element.source.name}/>
//             </div>
//           })} */}
//           {this.state.loading && <Spinner/>}
//           <InfiniteScroll
//             dataLength={this.state.articles.length} //This is important field to render the next data
//             next={this.fetchMore}
//             hasMore={this.state.articles.length < this.state.totalArticles}
//             loader={<Spinner/>}
//           >

//             <div className="container">
//               <div className="row my-4">
//                 {this.state.articles.map((element)=>{
//                   return <div key={element.url} className="col-md-4">
//                     <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
//                     imageUrl={element.urlToImage?element.urlToImage:"https://imgeng.jagran.com/images/2023/jun/microsoft-bing-india-top-316808776645771686718498826.jpg"}
//                     newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"}  sourceName={element.source.name}/>
//                   </div>
//                 })}
//               </div>
//             </div>

//           </InfiniteScroll>

//           {/* <div className="d-flex justify-content-between">
//             <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious}><span>&#8592;</span>Previous</button>
//             <button disabled={this.state.page+1 > Math.ceil(this.state.totalArticles/props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={this.handleNext}><span>&#8594;</span>Next</button>
//           </div> */}
//         </>
//       </div>
//     )
//   }
// }

// export default News
