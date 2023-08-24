import './App.css';
// import React, { Component } from 'react'
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');


  return (
    <>
    <Router>
        {/* <Navbar onSearch={handleSearch}/> */}
        <div>
          <LoadingBar
            height = '3'
            color='#f11946'
            progress={progress}
          />
        </div>
        <Navbar setSearchKeyword={setSearchKeyword}/>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology"/>}></Route>  
          <Route exact path={`/${searchKeyword}`} element={<News setProgress={setProgress} apiKey={apiKey} key={`/${searchKeyword}`} pageSize={6} keyWord={searchKeyword}/>}></Route>  
        </Routes>
    </Router>
    </>
  )
}

// export default class App extends Component {
//   // constructor() {
//   //   super();
//   //   state = {
//   //     searchQuery: '',
//   //   };
//   // }

//   // handleSearch = (text) => {
//   //   setState({ searchQuery: text });
//   // };
//   apiKey = process.env.REACT_APP_NEWS_API;
//   state = {
//     progress : 0
//   }

//   setProgress=(progress)=>{
//     setState({progress : progress})
//   }

//   render() {
//     return (
//       <Router>
//         {/* <Navbar onSearch={handleSearch}/> */}
//         <div>
//           <LoadingBar
//             height = '3'
//             color='#f11946'
//             progress={state.progress}
//             // onLoaderFinished={() => setProgress(0)}
//           />
//         </div>
//         <Navbar/>
//         <Routes>
//           {/* Below will not not work as not remounrted.Will think if link is already mounted then why to mount again.
//           Hence we pass a unique key to differentiate that these all are different. */}
          
//           {/* <Route exact path="/" element={<News setProgress={setProgress} pageSize={6} country="in" category="general"/>}></Route>
//           <Route exact path="/Business" element={<News setProgress={setProgress} pageSize={6} country="in" category="business"/>}></Route>
//           <Route exact path="/Entertainment" element={<News setProgress={setProgress} pageSize={6} country="in" category="entertainment"/>}></Route>
//           <Route exact path="/Health" element={<News setProgress={setProgress} pageSize={6} country="in" category="health"/>}></Route>
//           <Route exact path="/Science" element={<News setProgress={setProgress} pageSize={6} country="in" category="science"/>}></Route>
//           <Route exact path="/Sports" element={<News setProgress={setProgress} pageSize={6} country="in" category="sports"/>}></Route>
//           <Route exact path="/Technology" element={<News setProgress={setProgress} pageSize={6} country="in" category="technology"/>}></Route>     */}


//           <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>}></Route>
//           <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business"/>}></Route>
//           <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
//           <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health"/>}></Route>
//           <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science"/>}></Route>
//           <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports"/>}></Route>
//           <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology"/>}></Route>  
//           {/* <Route exact path="/Searched" element={<News setProgress={setProgress} apiKey={apiKey} key="search" pageSize={6} searchQuery={state.searchQuery}/>}></Route>   */}
//         </Routes>
//     </Router>
//     )
//   }
// }

