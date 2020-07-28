import React from 'react';
import './MovieCard.css';
import { IMAGE_URL } from '../../config';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const img = (path, title) => {
    return path !== null ? 
        <img className={`card-img `} src={`${IMAGE_URL}/w780${path}`} alt={title} ></img> 
    :   <span></span>;
}



class MovieCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        }
    }

    setCookie = (movieId, setLiked) => {
        const cookies = new Cookies();
        let result = cookies.get(movieId);        
        if (result === undefined) {
            cookies.set(movieId, "true", { path: '/' });
            this.setState({liked:true});
        } else {
            if (result === "true") { 
                cookies.set(movieId, "false", { path: '/' }) 
                this.setState({liked:false});
            } else {
                cookies.set(movieId, "true", { path: '/' }) 
                this.setState({liked:true});
            }            
        }    
    }
    
    componentDidMount() {
        this.setState({
            liked: this.getCookie(this.props.movie.id),
        })        
    }    

    getCookie = (movieId) => {
        const cookies = new Cookies();        
        let result = cookies.get(movieId);    
        if (result === undefined) {
            return false;
        } else {            
            return result === "true";
        }    
    }

    render() {
    
        let detailActive = this.props.detail ? "detail-active" : "";
        let isThereImg = this.props.movie.poster_path !== null;

        return (
            <div className={`movie-card-container ${detailActive}`}>
                <div className={`card bg-dark text-white movie-card ${detailActive} ${isThereImg ? "" : "detail"}`}>
                    <Link to={`/movie/${this.props.movie.id}`} >                
                            {img(this.props.movie.poster_path, this.props.movie.title)}
                            <div className="card-img-overlay">
                                
                                <h5 className={`card-title movie-card-title ${isThereImg ? "detail" : ""} `} > {this.props.movie.title} </h5> 
                                <p className={`card-text movie-card-text detail `} >{this.props.movie.overview}</p> 
                                {/* <span id="movie-year" className="card-text">{this.props.movie.release_date ? this.props.movie.release_date.split("-")[0] : ""} </span> */}
                                <span id="movie-rate"> {this.props.movie.vote_average === 0 ? "N/A" : this.props.movie.vote_average} </span>                
                            </div>
                    </Link>                    
                </div>     
                
                    <span className={`movie-heart empty ${ this.state.liked ? "liked" : ""}`} onClick={ () => {this.setCookie(this.props.movie.id)} }> <i className="fas fa-heart"></i> </span>
                    <span className={`movie-heart solid ${ this.state.liked ? "liked" : ""}`} onClick={ () => {this.setCookie(this.props.movie.id)} }> <i className="far fa-heart"></i> </span>                       
            </div>
        );
    }
}

export default MovieCard;