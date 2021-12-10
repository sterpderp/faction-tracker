import Faction from './classes/Faction';

const restEndpoint = 'http://127.0.0.1:30600/getData';



const apiCall = async () => {
    const response = await fetch(restEndpoint);
    let jsonResponse = await response.json();
    
    let allFactions = [];
    let theaters = [];

    for(var i = 0; i < jsonResponse.length; i++){
        
        const _Faction = new Faction(
          String(jsonResponse[i]['faction']),
          String(jsonResponse[i]['theater']),
          String(jsonResponse[i]['category']),
          String(jsonResponse[i]['tier']),
          String(jsonResponse[i]['hold']),
          String(jsonResponse[i]['rep']),
          String(jsonResponse[i]['notes'])
        );
        allFactions.push(_Faction);
    };

    // List unique theaters
    allFactions.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        if (String(key) === 'theater'){
        theaters.push(JSON.stringify(value));
      };}
    });
    theaters = [...new Set(theaters)];

    return {
      allFactions,
      theaters
    };

    
  };


export default apiCall;