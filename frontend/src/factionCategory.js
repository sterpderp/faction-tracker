import './App.css';
import factionElement from './factionElement';
import Example from './modal.js'


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
                        element.name,
                        element.tier,
                        element.hold,
                        element.rep,
                        element.key
                    ));
                } 
    });
    return elementBlock;
};

function factionCategory(factions, theater, category) {
    return(
          <div className='grid-item' key={theater.slice(1, -1)+'-'+category.slice(1, -1)}>
            <div className='category-head'><div className='category-name'>:: {category.slice(1, -1)}</div><div className='edit-button'><Example /></div></div>
              {addElements(factions, theater, category)}
              
          </div>
    );
};

export default buildCategories;