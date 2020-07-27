import React from 'react';
import { connect } from 'react-redux';
import {searchMovie} from './redux/actions';
import Loader from './widgets/Loader';
import './SearchPage.css';
import MovieCard from './widgets/MovieCard';

class SearchPage extends React.Component {
    
    componentDidMount() {
        this.props.searchMovie(this.props.match.params.query);
        console.log(this.props.match.params.query);
    }

    componentDidUpdate(nextProps) {
        if (this.props.match.params.query !== nextProps.match.params.query) {
            this.props.searchMovie(this.props.match.params.query);
        }          
        console.log(this.props);
    }

    render() {        
        console.log(this.props);
        return this.props.fetching ?
        (
            <div>
                <Loader />
            </div>
        )
        :
        (   
            <div className="search-page mb-5">
                <div className="container">
                    <h2>{this.props.resultQtt} results were found...</h2>
                    <div className="row">
                        {this.props.result.map( (obj, i) => {
                            return (
                                <div key={i} className="col-2 mt-5">
                                    <MovieCard movie={obj} /> 
                                </div>                                                   
                            );
                        })}
                    </div>
                </div>
            </div>
        )
        ;
    }
}

export default connect( (state) => ({result: state.searchResult, fetching: state.fetching, resultQtt: state.searchResultQtt}), { searchMovie } )(SearchPage);