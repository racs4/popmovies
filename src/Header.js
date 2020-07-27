import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
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
        return <Redirect to="/" />
      } else {
        return <Redirect to={`/search/${this.state.query}`} />
      }
  }

  render() {
    return (
      <div>
        <div className="header">
            <Link to="/"> <h1 className="header-logo">PopMovies </h1> </Link>
            <div className="header-search">
            <input placeholder="Busque por filmes..." value={this.state.query} onChange={this.handleChange}/>
            <Link to={`/search/${this.state.query}`}> <i className="fas fa-search" style={{fontSize: "1.25rem"}}></i> </Link>
            </div>
        </div>
        {this.redirect()}         
      </div>
    );
  }
}

export default Header;
