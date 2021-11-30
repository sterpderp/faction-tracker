// import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect }  from 'react';
//import ReactDOM from  'react-dom';

function App() {
  const restEndpoint = 'http://127.0.0.1:30600/getData';

  const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse[0]['theater'];
  };

function RenderResult() {
    const [apiResponse, setApiResponse] = useState('*** loading ***');
    
    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);
    return apiResponse;
};     
    let apiResponse = RenderResult();
   // const theater = ('Theater: ' + jsonResponse.0.[0]);
    return (
      <div className='wrapper'>
      <div className='theater'>
        <h1>Theater: {apiResponse}</h1>
        <div className='category'>
          <h2>category</h2>
            <div className='faction'>factionName</div>
        </div>
      </div>
    </div>
);

};

export default App;
