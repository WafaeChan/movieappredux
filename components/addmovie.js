import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions';
import './addmovie.css'


class PlusMovie extends Component {
    state = { 
    visible: false,
    title:"",
    poster:"",
    rate:""

    
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    render() {
        return (
            <div className="movieformcontainer">
                <Button type="primary" onClick={this.showModal}>
          Add Movie
        </Button>
        <Modal 
         
          visible={this.state.visible}
          onOk={()=>{this.props.add({title:this.state.title, poster: this.state.poster, rate: this.state.rate, id: Date.now()});this.handleOk()}}
          onCancel={this.handleCancel}
          className="movieform"
        >
         <input type="text" placeholder="Add movie name" value={this.state.title} name="title" onChange={this.handleChange}/>
         <input type="text" placeholder="Add poster" value={this.state.poster} name="poster" onChange={this.handleChange}/>
         <input type="text" placeholder="Add rate" value={this.state.rate} name="rate" onChange={this.handleChange}/>





        </Modal>
            </div>
        )
    }
}

const MapDispatchToProps = dispatch => ({
    add: payload=> dispatch(addMovie(payload))
})

export default connect(null, MapDispatchToProps) (PlusMovie)