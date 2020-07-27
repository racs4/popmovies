import React from 'react';
import { connect } from 'react-redux';
import {searchMovie} from './redux/actions';
import Loader from './widgets/Loader';

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
        return this.props.fetching ?
        (
            <div>
                <Loader />
            </div>
        )
        :
        (
            <div>
                <ul>
                    {this.props.result.map( (obj, i) => {
                        return (<li key={i}> {obj.title} </li>);
                    })}
                </ul>
            </div>
        )
        ;
    }
}

export default connect( (state) => ({result: state.searchResult, fetching: state.fetching}), { searchMovie } )(SearchPage);