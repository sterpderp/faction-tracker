import './App.css';
import {factionCategory, buildCategories} from './factionCategory';
import React from 'react';

//{factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}

class Theater extends React.Component {
  constructor(props) {
    super(props)
  };

  factionTheater(factions, theater) {
    let categories = [];  
    let catResult = buildCategories(factions, theater, categories)
    console.log(catResult)
      return (
        <div className='theater-wrapper'>
          <div className='theater-name'><h1>:: Theater: {theater.slice(1, -1)}</h1></div>
          <div className='theater'>
            {factionCategory(factions, 'Butts')}
          </div>
        </div>
      );
  }
}

export default Theater;