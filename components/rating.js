import React, { Component } from 'react'
import { miniRate } from '../redux/actions'
import { connect } from 'react-redux';
import './rating.css'


class RatingFilter extends Component {
    constructor(props){
        super(props);

    }

    render(){
        let stars = [];
        for (let i = 0; i < 5; i++){
            if (this.props.rate>i) {
                stars.push(<span onClick={()=>this.props.starfilter(i===0?i:i+1)} key={i}>★</span>);
            } else {
                stars.push(<span onClick={()=>this.props.starfilter(i+1)} key={i}>☆</span>)
            }
        }
        return(
    <div className="minrating">
        {stars}
    </div>

        )
    }
               
}
const mapStateToProps=state=>({
    rate:state.rating
})
const MapDispatchToProps = dispatch => ({
    starfilter: payload=> dispatch(miniRate(payload))
})
export default connect(mapStateToProps, MapDispatchToProps) (RatingFilter)