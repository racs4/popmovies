import React from 'react';
import { connect } from 'react-redux';
import { getMovie, eraseMovie } from './redux/actions';
import Loader from './widgets/Loader';
import './MoviePage.css';
import { IMAGE_URL } from './config';
import MovieCard from './widgets/MovieCard';
import Error from './widgets/Error';
import { INTERNAL_ERROR } from './widgets/ErrorConstants';

const genres = (genres) => {
    return genres ? 
        (<p> 
            Genres: {genres.map( obj => obj.name + ', ' ).reduce((a,b) => a + b, "").slice(0,-2)}
        </p>)
    : null;
}

const conversor = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

class MoviePage extends React.Component {

    componentDidMount() {        
        this.props.getMovie(this.props.match.params.id);
        window.scrollTo(0, 0);
    }    

    componentWillUnmount() {
        this.props.eraseMovie();
    }

    componentDidUpdate(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.props.eraseMovie();
            this.props.getMovie(this.props.match.params.id);
            window.scrollTo(0, 0);
        }        
    }

    render() {                
        
        return this.props.error ? <Error type={INTERNAL_ERROR} /> :
        Object.entries(this.props.selectedMovie).length !== 0 ? 
         (
            <div className="movie-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <img className="card-img movie-img" src={`${IMAGE_URL}/w780${this.props.selectedMovie.poster_path}`} alt={this.props.selectedMovie.title} ></img>                             
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <h1> {this.props.selectedMovie.title} </h1>    
                            <p> {this.props.selectedMovie.overview} </p>
                            <p> Released in: {this.props.selectedMovie.release_date}</p>
                            <p> Revenue: {conversor(this.props.selectedMovie.revenue)}</p>
                            <p> Budget: {conversor(this.props.selectedMovie.budget)}</p>
                            <p> Status: {this.props.selectedMovie.status}</p>                            
                            {genres(this.props.selectedMovie.genres)}
                            <p> Rating: <span className="movie-rate" > {this.props.selectedMovie.vote_average} </span> </p>
                            <a href={this.props.selectedMovie.homepage}> <p> Official Website </p> </a>
                        </div>
                    </div> 
                        <div className="similar-movies mt-5 mb-5">
                            <h1> Similar movies </h1>
                            <div className="row">
                            { this.props.selectedMovie.similar.results.slice(0,4).map( (obj, i) => {
                                return (
                                    <div key={i} className="col-lg-3 col-sm-3 col-6 mt-5">
                                        <MovieCard movie={obj} detail={true} />
                                    </div>
                                );
                            }) } 
                            </div>                            
                        </div>

                        <div className="similar-movies mt-5 mb-5">
                            <h1> Because you've searched "{this.props.selectedMovie.title}" </h1>
                            <div className="row">
                            { this.props.selectedMovie.recommendations.results.slice(0,4).map( (obj, i) => {
                                return (
                                    <div key={i} className="col-lg-3 col-sm-3 col-6 mt-5">
                                        <MovieCard movie={obj} detail={true} />
                                    </div>
                                );
                            }) } 
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

export default connect((state) => ({error: state.error, selectedMovie: state.selectedMovie, fetching: state.fetching}), ( { getMovie, eraseMovie } ) )(MoviePage);