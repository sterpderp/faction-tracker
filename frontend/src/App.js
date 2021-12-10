import './App.css';
import React, { useState, useEffect }  from 'react';
import apiCall from './api';
import factionTheater from './factionTheater';

//import ReactDOM from  'react-dom';

function App() {

  function RenderResult() {
      const [formattedResponse, setApiResponse] = useState('*** loading ***');
      
      useEffect(() => {
          apiCall().then(
              result => setApiResponse(result));
      },[]);
      return formattedResponse;
  };     
  
  let result = RenderResult();
  console.log(result);
  console.log(result.allFactions[0].name)

  // const testFaction = new Faction('ButtsName', 'ButtsTheater', 'ButtsCategory', 'ButtsTier', 'ButtsHold', 'ButtsRep', 'ButtsNotes', true);
  // {factionElement(null, testFaction.name, testFaction.tier, testFaction.hold, testFaction.rep, testFaction.is_player, testFaction.notes)}
//{factionElement(null, result.allFactions[0].name, result.allFactions[0].tier, result.allFactions[0].hold, result.allFactions[0].rep, result.allFactions[0].notes)}
  return (
    <div className='wrapper'>
      {factionTheater(result)}
    </div>
  );

};

export default App;
