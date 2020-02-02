import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { addMovie, editMovie } from '../redux/actions';


class Edit extends Component {
    state = { 
    visible: false,
    title:this.props.mymovie.title,
    poster:this.props.mymovie.poster,
    rate:this.props.mymovie.rate
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
    setMovie=(id)=>{
        let tab={
            title:this.state.title,
             poster: this.state.poster,
              rate: this.state.rate,
           
        }
        this.props.edit(tab,id)

    }
    render() {
        return (
            <div className="movieformcontainer">
                <Button type="primary" className="editmovie" onClick={this.showModal}>
          Edit Movie
        </Button>
        <Modal 
         
          visible={this.state.visible}
          onOk={()=>{this.setMovie(this.props.mymovie.id);this.handleOk()}}
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
    add: payload=> dispatch(addMovie(payload)),
    edit: (movie,id)=> dispatch(editMovie(movie,id))
})

export default connect(null, MapDispatchToProps) (Edit)