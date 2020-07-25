import React from 'react';
import {useParams} from 'react-router-dom';

const MoviePage = () => {
    console.log(useParams());
    return (
        <div>
            MoviePage
        </div>
    );
}

export default MoviePage;