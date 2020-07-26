import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends React.Component {

  
  render() {
    return (
      <div>App</div>
    );
  }
}

export default connect((state) => ({movies: state.movies, fetching: state.fetching}))(App);
