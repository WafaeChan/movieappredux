import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/moviecard'
import './movielist.css'

class MovieList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movielist">
                {this.props.movies.filter((e,i)=>(e.title.toUpperCase().includes(this.props.search.toUpperCase())&&(e.rate>=this.props.rating))).map(el =>
                <MovieCard mymovie={el}/>
                )}
            </div>
        )
    }
}


const MapStateToProps = state => ({
    movies: state.movies,
    search: state.search,
    rating: state.rating
})

export default connect(MapStateToProps)(MovieList)