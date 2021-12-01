const restEndpoint = 'http://127.0.0.1:30600/getData';


const apiCall = async () => {
    const response = await fetch(restEndpoint);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let apiResponse = [];
    
    jsonResponse.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        if (String(key) !== '_id'){
        apiResponse.push(JSON.stringify(value));
      };}
    });
    console.log('API Response:' + apiResponse);
    return apiResponse;
  };


export default apiCall;