
export function getPlanetByName(planetName){
return fetch('https://swapi.co/api/planets')
.then((response)=>{
    return response.json()
}).then((data)=> {
    let planets = data.results
    for(let planet of planets){
        if (planet["name"]===planetName)
            return planet.residents
    }
    })};

export function getPlanetResidents(url){
return fetch(url)
.then((response)=>{
    return response.json()
}).then((data)=> {
    return data

    })};


