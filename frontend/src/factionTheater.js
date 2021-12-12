import './App.css';
import buildCategories from './factionCategory';
import React from 'react';

//{factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}

class Theater extends React.Component {
  constructor(props) {
    super(props)
  };

  factionTheater(factions, theater) {
    let categories = [];  
    //let catResult = buildCategories(factions, theater, categories)
    //console.log(catResult)
      return (
        <div className='theater-wrapper' key={theater.slice(1, -1)+'-wrapper'}>
          <div className='theater-name' key={theater.slice(1, -1)+'-name'}><h1>:: Theater: {theater.slice(1, -1)}</h1></div>
          <div className='theater' key={theater.slice(1, -1)+'block'}>
            {buildCategories(factions, theater, categories)}
          </div>
        </div>
      );
  }
}

export default Theater;