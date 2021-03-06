import React from 'react';
import './Header.css';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          query: '',
      }
  }
  
  handleChange = (event) => {    
    this.setState({
        query: event.target.value,
    })    
  }

  redirect() {
      if (this.state.query === "") {
        return <span></span>
        // return <Redirect to="/" />
      } else {
        return <Redirect to={`/search/${this.state.query}/1`} />
      }
  }

  render() {
    return (
      <div>
        <div className="header">
            <Link to="/"> <h1 className="header-logo">PopMovies </h1> </Link>
            <div className="header-search">
            <input placeholder="Search for movies..." value={this.state.query} onChange={this.handleChange}/>
            <Link to={`/search/${this.state.query}/1`}> <i className="fas fa-search" style={{fontSize: "1.25rem"}}></i> </Link>
            </div>
        </div>
        {this.redirect()}         
      </div>
    );
  }
}

export default Header;
