import React from 'react'
import './searchbar.css'
import { connect } from 'react-redux';
import { searchMovie } from '../redux/actions';



class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

   
    render(){
        return(
            <div >
                <div>
                <input className="searchbar"  placeholder=" ⌕ Find movies" onChange={(event)=>this.props.searchMovie(event.target.value)}></input>
                </div>
            </div>
        )
    }
}


const MapDispatchToProps=dispatch=>({
    searchMovie: payload=>dispatch(searchMovie(payload))
})
export default connect(null, MapDispatchToProps) (SearchBar)