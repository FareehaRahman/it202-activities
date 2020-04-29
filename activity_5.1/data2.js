let apiEndpoint = "https://api.nasa.gov/";

fetch(apiEndpoint)
.then(response => { 
    return response.json()} )
.then(json => console.log(json))
.catch(err => alert(err))
