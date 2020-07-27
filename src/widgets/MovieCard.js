import React from 'react';
import './MovieCard.css';
import { IMAGE_URL } from '../config';

const MovieCard = (props) => {
    let detailActive = props.detail ? "detail-active" : "";
    return (
        <div className={`card bg-dark text-white movie-card ${detailActive}`}>
            <img className={`card-img `} src={`${IMAGE_URL}/w780${props.movie.poster_path}`} alt={props.movie.title} ></img>
            <div className="card-img-overlay">
                <h5 className={`card-title movie-card-title detail `} > {props.movie.title} </h5> 
                <p className={`card-text movie-card-text detail `} >{props.movie.overview}</p> 
                <span id="movie-year" className="card-text">{props.movie.release_date.split("-")[0]} </span>
                <span id="movie-rate"> {props.movie.vote_average} </span>                
            </div>
        </div>
    );
}

export default MovieCard;