import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SearchBox extends Component {

    constructor(props){
        super(props);
        this.state = {
          searchValue : '',
        }
    }

    handleSearchChange = async(event) => {
        this.setState({searchValue : event.target.value })
    };

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state.searchValue);
        this.props.onSearchSubmit(this.state.searchValue);
    }; 



  render() {
    return (
      <div>
        <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
          <input className="form-control me-2" style={{width : '284.6px'}} type="text" onChange={this.handleSearchChange} value={this.state.searchValue} placeholder="Search Keyword" aria-label="Search"/>  
          <Link to="/Searched">
            <button className="btn mx-2 btn-success" type="submit">Search</button>
          </Link> 
        </form>  
      </div>
    )
  }
}

export default SearchBox