const restEndpoint = 'http://127.0.0.1:30600/getData';


const apiCall = async () => {
    const response = await fetch(restEndpoint);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    
    let allFactions = [];
    
    // List unique theaters
    //jsonResponse.forEach(element => {
    //  for (const [key, value] of Object.entries(element)) {
    //    if (String(key) == 'theater'){
    //    theaters.push(JSON.stringify(value));
    //  };}
    //});
    //theaters = [...new Set(theaters)];

    for(var i = 0; i < jsonResponse.length; i++){
        let oneFaction = [];    
        oneFaction.push(String(jsonResponse[i]['faction']));
        oneFaction.push(String(jsonResponse[i]['theater']));
        oneFaction.push(String(jsonResponse[i]['category']));
        oneFaction.push(String(jsonResponse[i]['tier']));
        oneFaction.push(String(jsonResponse[i]['hold']));
        oneFaction.push(String(jsonResponse[i]['rep']));
        oneFaction.push(String(jsonResponse[i]['notes']));
        oneFaction.push(String(jsonResponse[i]['is_player']));
        allFactions.push(oneFaction);
            
    };
    console.log(allFactions)
    return allFactions;

    //return String(jsonResponse[0]['theater']);
  };


export default apiCall;