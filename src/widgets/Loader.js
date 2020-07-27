import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div className="loader">
            <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;