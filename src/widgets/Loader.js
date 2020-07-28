import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div className="loader">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;