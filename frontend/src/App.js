// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import apiCall from './api';
import factionElement from './factionElement';
import Faction from './classes/Faction';
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

  // const testFaction = new Faction('ButtsName', 'ButtsTheater', 'ButtsCategory', 'ButtsTier', 'ButtsHold', 'ButtsRep', 'ButtsNotes', true);
  // {factionElement(null, testFaction.name, testFaction.tier, testFaction.hold, testFaction.rep, testFaction.is_player, testFaction.notes)}

  return (
    <div className='wrapper'>
      <div className='theater-wrapper'>
      <div className='theater-name'><h1>:: Theater: Ishgard</h1></div>
        <div className='theater'>
          <div className='category'>
            <h2>:: Underworld</h2>
              {factionElement(null, 'Red Caps', 'II', 'W', '3', false, '')}
              {factionElement(null, 'Steel and Spirit', 'I', 'W', '2', false, '')}
              {factionElement(null, 'Knife\'s Edge', 'I', 'W', '3', false, '')}
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;
