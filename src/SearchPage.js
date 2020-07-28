import React from 'react';
import { connect } from 'react-redux';
import {searchMovie, eraseSearchResult} from './redux/actions';
import Loader from './widgets/Loader';
import './SearchPage.css';
import MovieCard from './widgets/MovieCard';
import Pagination from './widgets/Pagination';
import { Redirect } from 'react-router-dom';
import Error from './widgets/Error';
import { NO_RESULTS } from './widgets/ErrorConstants';

class SearchPage extends React.Component {
    
    componentDidMount() {        
        this.props.eraseSearchResult();
        this.props.searchMovie(this.props.match.params.query, this.props.match.params.pageNumber);    
    }

    componentDidUpdate(nextProps) {           
        if (this.props.match.params.query !== nextProps.match.params.query ||
            this.props.match.params.pageNumber !== nextProps.match.params.pageNumber) {          
            this.props.eraseSearchResult();
            this.props.searchMovie(this.props.match.params.query, this.props.match.params.pageNumber);    
        }          
    }

    render() {                
        if (this.props.fetching) {
            return (
                <div>
                    <Loader />
                </div>
            );
        } else {
            if (this.props.pageQtt === 0) {
                return (
                    <Error type={NO_RESULTS} />
                )
            } else {                
                if (Number(this.props.match.params.pageNumber) <= this.props.pageQtt) {
                    return (
                        <div className="search-page mb-5">
                            <div className="container">
                                <h2>{this.props.resultQtt} results were found...</h2>
                                <h4 className="text-right"> Page {this.props.match.params.pageNumber} of {this.props.pageQtt} </h4>
                                <div className="row">
                                    {this.props.result.map( (obj, i) => {
                                        return (
                                            <div key={i} className="col-lg-2 col-sm-3 col-6 mb-5" style={{height: "250px"}}>
                                                <MovieCard movie={obj} /> 
                                            </div>                                                   
                                        );
                                    })}
                                </div>                    
                                <Pagination pageNumber={this.props.match.params.pageNumber} totalPages={ (this.props.pageQtt) } baseLink={`/search/${this.props.match.params.query}`}/>              
                            </div>
                        </div>            
                    );
                } else {
                    return (<Redirect to={`/search/${this.props.match.params.query}/1`}></Redirect >);
                }
            }
        }
        
    }
}

export default connect( (state) => ({result: state.searchResult, fetching: state.fetching, resultQtt: state.searchResultQtt, pageQtt: state.searchPageQtt}), { searchMovie, eraseSearchResult } )(SearchPage);