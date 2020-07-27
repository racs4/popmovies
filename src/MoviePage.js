import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from './redux/actions';
import Loader from './widgets/Loader';

class MoviePage extends React.Component {

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }
    
    render() {        
        console.log(this.props);
        
        return !this.props.fetching ? 
         (
            <div>
                <h1> {this.props.selectedMovie.title} </h1>
            </div>
        ) 
        : 
        (
            <div> <Loader /> </div>
        );
    }
}

export default connect((state) => ({selectedMovie: state.selectedMovie, fetching: state.fetching}), ( { getMovie } ) )(MoviePage);