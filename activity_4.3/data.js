let apiEndpoint = https://data.cityofchicago.org/Administration-Finance/Current-Employee-Names-Salaries-and-Position-Title/xzkq-xp2w
    fetch(apiEndpoint)
    .then(response => { return response.json()})
    .then(json => console.log(json))
    .catch(err => alert(err))
