import React from 'react';
import './Error.css';
import { NO_RESULTS, PAGE_NOT_FOUND, INTERNAL_ERROR } from './ErrorConstants';

const Error = (props) => {
    let imagePath = "";
    let errorMessage = "";
    switch(props.type) {
        case NO_RESULTS:
            imagePath = `/error_imgs/${NO_RESULTS}.svg`;
            errorMessage = "No results were found";
            break;
        case PAGE_NOT_FOUND:
            imagePath = `/error_imgs/${PAGE_NOT_FOUND}.svg`;
            errorMessage = "Page not found...";
            break;
        case INTERNAL_ERROR:
            imagePath = `/error_imgs/${INTERNAL_ERROR}.svg`;
            errorMessage = "Something went wrong... Check your internet";
            break;
        default:
            imagePath = "";            
            errorMessage = "No results were found";
    }

    return (
        <div className="error">
            <div className="error-container">
                <img className="error-img" src={imagePath} alt={errorMessage}></img>                            
            </div>        
            <div className="mt-5">
                <h1 className="text-center">{errorMessage}</h1>
            </div>
        </div>
    );
}

export default Error;