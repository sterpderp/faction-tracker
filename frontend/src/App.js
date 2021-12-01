// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import apiCall from './api';
import factionElement from './factionElement';
//import ReactDOM from  'react-dom';

function App() {
//  const restEndpoint = 'http://127.0.0.1:30600/getData';
//
//  const callRestApi = async () => {
//    const response = await fetch(restEndpoint);
//   let jsonResponse = await response.json();
//    console.log(jsonResponse);
//    let apiResponse = [];
//    
//    jsonResponse.forEach(element => {
//      for (const [key, value] of Object.entries(element)) {
//        if (String(key) != '_id'){
//        apiResponse.push(JSON.stringify(value));
//      };}
//    });
//    console.log('API Response:' + apiResponse);
//    return apiResponse;
//  };

  function RenderResult() {
      const [formattedResponse, setApiResponse] = useState('*** loading ***');
      
      useEffect(() => {
          apiCall().then(
              result => setApiResponse(result));
      },[]);
      return formattedResponse;
  };     
  
  let result = RenderResult();
  
  return (
    <div className='wrapper'>
      <div className='theater-wrapper'>
      <div className='theater-name'><h1>Theater: {result}</h1></div>
        <div className='theater'>
          <div className='category'>
            <h2>category</h2>
              {factionElement(null, 'House Fortemps', 'VI', 'S', '3', false, '')}
              {factionElement(null, 'House Guerrique', 'VI', 'S', '3', false, '')}
              {factionElement(null, 'House Hysode', 'VI', 'S', '3', false, '')}
              {factionElement(null, 'House Dzemael', 'VI', 'S', '3', false, '')}
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;
