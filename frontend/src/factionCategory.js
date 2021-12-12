import './App.css';
import factionElement from './factionElement';

function buildCategories(factions, theater, categories) {
    let categoryBlock = [];
    let categoryList = [];
    factions.allFactions.forEach(element => {
        for (let i = 0; i< factions.theaters.length; ++i) {
            for (const [key, value] of Object.entries(element)) {
                if (element.theater === theater.slice(1, -1)){
                categories.push(JSON.stringify(element.category));
            };}
        }
    }
    );

    categoryList = [...new Set(categories)];

    for (let i = 0; i< categoryList.length; ++i) {
        categoryBlock.push(factionCategory(factions, theater, categoryList[i]));
    }

    return categoryBlock;
};

function addElements(factions, theater, category){
    let elementBlock = [];
    factions.allFactions.forEach(element => {
            if (element.theater === theater.slice(1, -1) && 
                element.category === category.slice(1, -1)) {
                    elementBlock.push(factionElement(
                        (JSON.stringify(element.name)).slice(1, -1),
                        (JSON.stringify(element.tier)).slice(1, -1),
                        (JSON.stringify(element.hold)).slice(1, -1),
                        (JSON.stringify(element.rep)).slice(1, -1)
                    ));
                    console.log('element: '+elementBlock);
                } 
        
    });
    return elementBlock;
};

function factionCategory(factions, theater, category) {
    return(
          <div className='category' key={theater.slice(1, -1)+'-'+category.slice(1, -1)}>
            <h2>:: {category.slice(1, -1)}</h2>
              {addElements(factions, theater, category)}
          </div>
    );
};

export default buildCategories;

//    {factionElement('Red Caps', 'II', 'W', '3')}
//    {factionElement('Steel and Spirit', 'I', 'W', '2')}
//   {factionElement('Knife\'s Edge', 'I', 'W', '3')}
//    {factionElement(factions.allFactions[0].name, factions.allFactions[0].tier, factions.allFactions[0].hold, factions.allFactions[0].rep)}

//let theaterBlock = [];
//    for (let e = 0; e< theaters.length; ++e) {
//      const t = new Theater()
//      theaterBlock.push(t.factionTheater(this.state, theaters[e]));
//    }   
//    return theaterBlock;



