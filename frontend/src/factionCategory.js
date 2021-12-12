import './App.css';
import factionElement from './factionElement';

function buildCategories(factions, theater, categories) {
    console.log(factions.allFactions)
    factions.allFactions.forEach(element => {
        for (let i = 0; i< factions.theaters.length; ++i) {
            for (const [key, value] of Object.entries(element)) {
                if (element.theater === theater.slice(1, -1)){
                categories.push(JSON.stringify(element.category));
                
            };}
        
        categories = [...new Set(categories)];
        console.log(categories)
        
        }
    }
    );
    
}

function factionCategory(factions, category) {
    return(
          <div className='category'>
            <h2>:: {category}</h2>
              {factionElement('Red Caps', 'II', 'W', '3')}
              {factionElement('Steel and Spirit', 'I', 'W', '2')}
              {factionElement('Knife\'s Edge', 'I', 'W', '3')}
              {factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}
          </div>
    );
}

export {factionCategory};
export {buildCategories};