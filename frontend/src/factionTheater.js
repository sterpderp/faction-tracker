import './App.css';
import factionElement from './factionElement';

//{factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}

function factionTheater(factions, theater) {
    return (
      <div className='theater-wrapper'>
        <div className='theater-name'><h1>:: Theater: {theater.slice(1, -1)}</h1></div>
        <div className='theater'>
          <div className='category'>
            <h2>:: Underworld</h2>
              {factionElement('Red Caps', 'II', 'W', '3')}
              {factionElement('Steel and Spirit', 'I', 'W', '2')}
              {factionElement('Knife\'s Edge', 'I', 'W', '3')}
              {factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}
          </div>
        </div>
      </div>
    );
}

export default factionTheater;