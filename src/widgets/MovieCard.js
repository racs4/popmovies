import React from 'react';
import './MovieCard.css';
import { IMAGE_URL } from '../config';
import { Link } from 'react-router-dom';

const img = (path, title) => {
    return path !== null ? 
        <img className={`card-img `} src={`${IMAGE_URL}/w780${path}`} alt={title} ></img> 
    :   <span></span>;
}


const MovieCard = (props) => {
    let detailActive = props.detail ? "detail-active" : "";
    let isThereImg = props.movie.poster_path !== null;
    return (
        <Link to={`/movie/${props.movie.id}`} >
            <div className={`card bg-dark text-white movie-card ${detailActive} ${isThereImg ? "" : "detail"}`}>
                {img(props.movie.poster_path, props.movie.title)}
                <div className="card-img-overlay">
                    <h5 className={`card-title movie-card-title ${isThereImg ? "detail" : ""} `} > {props.movie.title} </h5> 
                    <p className={`card-text movie-card-text detail `} >{props.movie.overview}</p> 
                    <span id="movie-year" className="card-text">{props.movie.release_date ? props.movie.release_date.split("-")[0] : ""} </span>
                    <span id="movie-rate"> {props.movie.vote_average === 0 ? "N/A" : props.movie.vote_average} </span>                
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;