import './App.css';
import buildCategories from './factionCategory';
import React from 'react';
import Masonry from "../node_modules/react-responsive-masonry"

class Theater extends React.Component {

  factionTheater(factions, theater) {
    let categories = [];  
      return (
        <div className='theater-wrapper' key={theater.slice(1, -1)+'-wrapper'}>
          <div className='theater-name' key={theater.slice(1, -1)+'-name'}><h1>:: Theater: {theater.slice(1, -1)}</h1></div>
          <div className='grid' key={theater.slice(1, -1)+'block'}>
            <Masonry columnsCount={3}>
            {buildCategories(factions, theater, categories)}
            </Masonry>
          </div>
        </div>
      );
  }
}

export default Theater;