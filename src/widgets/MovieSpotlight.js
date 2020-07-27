import React from 'react';
import './MovieSpotlight.css';
import { IMAGE_URL } from '../config';
import { Link } from 'react-router-dom';

const MovieSpotlight = (props) => {
    return (
        <div className="card mb-3 bg-dark">
            <div className="row no-gutters">
            <div className="col-md-4">
            <img src={`${IMAGE_URL}/w780${props.movie.poster_path}`} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h2 className="card-title spotlight-title">{props.movie.title}</h2>
                <p className="card-text spotlight-text"> {props.movie.overview} </p>
                <p className="card-text"> <Link to={`/movie/${props.movie.id}`}> <span> See more </span></Link> </p>
                <p className="card-text spotlight-text text-right"><small className="text-muted">Released in {props.movie.release_date}</small></p>
                <span className="spotlight-rate"> {props.movie.vote_average} </span>
            </div>
            </div>
            </div>
        </div>
    );
}

export default MovieSpotlight;