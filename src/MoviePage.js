import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from './redux/actions';

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
            <h1>Carregando</h1>
        );
    }
}

export default connect((state) => ({selectedMovie: state.selectedMovie, fetching: state.fetching}), ( { getMovie } ) )(MoviePage);