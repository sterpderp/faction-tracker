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
    let result = [];
    jsonResponse.forEach(item => {
      result.push([[item['faction']],
      [item['theater']],
      [item['category']]]);
    })
    return (result);
  };

function RenderResult() {
    const [apiResponse, setApiResponse] = useState('*** loading ***');
    
    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);
    console.log(apiResponse);
    return apiResponse;
};     
   let apiResponse = RenderResult();
   // const theater = ('Theater: ' + jsonResponse.0.[0]);
   while (apiResponse === '*** loading ***'){
     continue;
   }  
   let boxRender =  apiResponse.forEach(item => {
    <div className='wrapper'>;
    <div className='theater'>;
      <h1>Theater: {item[1]}</h1>;
      <div className='category'>;
        <h2>category: {item[2]}</h2>;
          <div className='faction'>factionName {item[0]}</div>;
      </div>;
    </div>;
  </div>;
    })
   
   return (
      boxRender
);

};

export default App;
