import './App.css';
import React from 'react';
import apiCall from './api';
import factionTheater from './factionTheater';

class App extends React.Component {

  state = {};

  constructor(props) {
    super(props)
    apiCall().then(result =>
      this.setState(result));
  };

  buildTheaters(theaters) {
    let theaterBlock = [];
    for (let e = 0; e< theaters.length; ++e) {
      theaterBlock.push(factionTheater(this.state, theaters[e]));
    }   
    return theaterBlock;
  };

  render() {
    if (Object.keys(this.state).length === 0) {
      return <div className='wrapper' style={{color: '#ffffff'}}>*** loading ***</div>
    }else{
    console.log(':::Retrieved '+Object.keys(this.state.allFactions).length+' records:::')
    return (
      <div className='wrapper'>
        {this.buildTheaters(this.state.theaters)}
      </div>
    )
  }
  };
}

export default App;
