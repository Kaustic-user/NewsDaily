// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    props.setSearchKeyword(searchText);
    setSearchText('');
  }

  const handleInputChange = (event) =>{
    setSearchText(event.target.value);
  }

  const handleKeyPress=(event)=>{
    if(event.key==='Enter'){
      handleSearch();
    }
  };

    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark navshadow">
        <div className="container-fluid">
            <Link className="navbar-brand navbarType" to="#">NewsDaily</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
            </ul>
            </div>
        </div>

          <form className="d-flex" role="search">
            <input className="form-control" style={{width : '284.6px'}} type="text" onKeyDown={handleKeyPress} onChange={handleInputChange} value={searchText} placeholder="Search Keyword"/>  
            <Link to={searchText===''?"/":`/${searchText}`}>
              <button className="btn mx-3 btn-success" type="button" onClick={handleSearch}>Search</button>
            </Link> 
          </form> 
        </nav>
      </div>
    )
}

// export class Navbar extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     searchInput: '',
//   //   };
//   // }

//   // handleInputChange=(event)=>{
//   //   this.setState({searchInput : event.target.value});
//   // }

//   // handleSearchSubmit = (event) => {
//   //   event.preventDefault();
//   //   this.props.onSearch(this.state.searchText);
//   // };

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//             <Link className=" navType" to="#">NewsMonkey</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
//                 <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
//             </ul>
//             </div>
//         </div>
//           {/* <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
//             <input className="form-control me-2" style={{width : '284.6px'}} type="search" onChange={this.handleInputChange} value={this.state.searchInput} placeholder="Search Keyword" aria-label="Search"/>  
//             <Link to="/Searched">
//               <button className="btn mx-2 btn-success" type="submit">Search</button>
//             </Link> 
//           </form>  */}
//         </nav>
//       </div>
//     )
//   }
// }

// export default Navbar