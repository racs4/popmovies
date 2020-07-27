import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getMovies } from './redux/actions';
import { IMAGE_URL } from './config';
import MovieCard from './widgets/MovieCard';
import MovieSpotLight from './widgets/MovieSpotlight';

class App extends React.Component {

  componentDidMount() {
    this.props.getMovies();
  }
  
  render() {
    console.log(this.props.movies);    
    return (this.props.movies.length !== 0) ? 
     (      
      <div>
        <div className="carousel-wrapper">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div data-interval="7000" className="carousel-item active" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg)"}}>              
              <div className="carousel-caption d-none d-md-block">
                <h1> {this.props.movies[0].title }</h1>
                <p> {this.props.movies[0].overview} </p>
              </div>
            </div>
            <div data-interval="7000" className="carousel-item" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg)"}}>              
              <div className="carousel-caption d-none d-md-block">
                <h1> {this.props.movies[1].title }</h1>
                <p> {this.props.movies[1].overview} </p>
              </div>
            </div>
            <div data-interval="7000" className="carousel-item" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg)"}}>              
              <div className="carousel-caption d-none d-md-block">
                <h1> {this.props.movies[2].title }</h1>
                <p> {this.props.movies[2].overview} </p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      <div className="pop-movies container mb-5">        
        
        {/* POPULAR MOVIES */}
        <div className="mt-5 mb-5">
          <h1>Popular movies</h1>
          <div className="row pb-5">          
            {this.props.movies.slice(3,7).map( (obj, i) => {
                return (
                  <div key={i} className="col-lg-3 col-sm-12 mt-5">
                    <MovieCard movie={obj} detail={true}/>                  
                  </div>
                );
            })}          
          </div>
        </div>
        
        {/* SUCCESS */}
        <div className="mt-5">
          <h1 className="text-right">Success</h1>
          <div className="row mt-5">
            <div className="col-12">
              <MovieSpotLight movie={this.props.movies[7]} />
            </div>
          </div>
        </div>
        
        {/* SEE MORE */}
        <div className="mt-5">
          <h1>See more...</h1>        
          <div className="row">                      
            {this.props.movies.slice(8).map( (obj, i) => {
                  return (
                    <div key={i} className="col-lg-2 col-sm-12 mt-5">
                      <MovieCard movie={obj} />                  
                    </div>
                  );
              })}
          </div>
        </div>
      </div>    
      </div>  
    )
    :
    (
      <div>Carregando</div>
    );
  }
}

export default connect((state) => ({movies: state.movies, fetching: state.fetching}), { getMovies })(App);
