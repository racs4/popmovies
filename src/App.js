import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getMovies } from './redux/actions';
import { IMAGE_URL } from './config';
import MovieCard from './widgets/MovieCard/MovieCard';
import MovieSpotLight from './widgets/MovieSpotlight/MovieSpotlight';
import Loader from './widgets/Loader/Loader';
import { Link } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getMovies();
  }
  
  render() {    
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
            <div data-interval="7000" className="carousel-item active" style={{backgroundImage: `url(${IMAGE_URL}/original${this.props.movies[0].poster_path})`}}>              
              <Link to={`/movie/${this.props.movies[0].id}`}>
                <div className="carousel-caption">
                <h1> {this.props.movies[0].title }</h1>
                <p className="d-none d-md-block"> {this.props.movies[0].overview} </p>                
                </div>
              </Link>
            </div>
            <div data-interval="7000" className="carousel-item" style={{backgroundImage: `url(${IMAGE_URL}/original${this.props.movies[1].poster_path})`}}>              
              <Link to={`/movie/${this.props.movies[1].id}`}>
                <div className="carousel-caption">
                <h1> {this.props.movies[1].title }</h1>
                <p className="d-none d-md-block"> {this.props.movies[1].overview} </p>                
                </div>
              </Link>
            </div>
            <div data-interval="7000" className="carousel-item" style={{backgroundImage: `url(${IMAGE_URL}/original${this.props.movies[2].poster_path})`}}>              
              <Link to={`/movie/${this.props.movies[2].id}`}>
                <div className="carousel-caption">
                <h1> {this.props.movies[2].title }</h1>
                <p className="d-none d-md-block"> {this.props.movies[2].overview} </p>                
                </div>
              </Link>
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
                  <div key={i} className="col-lg-3 col-sm-6 col-6 mt-5">
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
                    <div key={i} className="col-lg-2 col-sm-3 col-6 mt-5">
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
      <div> <Loader /> </div>
    );
  }
}

export default connect((state) => ({movies: state.movies, fetching: state.fetching}), { getMovies })(App);
