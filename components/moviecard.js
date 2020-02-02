import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteMovie } from '../redux/actions';
import Edit from './editmovie'
import './moviecard.css'


class MovieCard extends Component {
    constructor(props){
        super(props)
    }

    RatingStar = count => {
                let stars = [];
                for (let i = 0; i < 5; i++) {
                  if (i < count) {
                    stars.push(<span key={i}>★</span>);
                  } else {
                    stars.push(<span key={i}>☆</span>);
                  }
                }
                return <span className='movieRating'>{stars}</span>;
              };

    render() {
        return (
            <div className="moviecard">
                            <img className="poster" src={this.props.mymovie.poster}></img>
                            <p className="title">{this.props.mymovie.title}</p>
                            <div className="rate">{this.RatingStar(this.props.mymovie.rate)}</div>
                            <div className="deledit"><button className="deletemovie" onClick={()=>this.props.delete(this.props.mymovie.id)}>Delete</button>
                            <Edit mymovie={this.props.mymovie}/></div>

                      
            </div>
        )
    }
}

const MapDispatchToProps=dispatch=>({
    delete: payload=>dispatch(deleteMovie(payload))
})

export default connect(null, MapDispatchToProps) (MovieCard)