import React, { Component } from 'react'
import './App.css';
import MovieList from './components/movielist';
import RatingFilter from '../src/components/rating'
import PlusMovie from '../src/components/addmovie'
import SearchBar from './components/searchbar';




class App extends  Component {
  constructor(props){
    super(props);
    this.state={
      search:'',
      rating:'',
    }
    
    }
  
  render(){
    return (
    <div className="App">
      <div className="header">
         <SearchBar />
         <RatingFilter/>
      </div>
      <div className="moviesection">
      <div className="mymovielist">
                <MovieList />
        </div>
        <div className="addmovie">
        <PlusMovie />
        </div>
        </div>
      
    </div>
  );
  }
  
}

export default App;
