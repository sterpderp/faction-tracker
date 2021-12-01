// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }  from 'react';
import apiCall from './api';
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
      <div className='theater'>
        <h1>Theater: {result}</h1>
        <div className='category'>
          <h2>category</h2>
            <div className='faction'>factionName</div>
        </div>
      </div>
    </div>
  );

};

export default App;
