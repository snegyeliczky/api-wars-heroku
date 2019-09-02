import {getPlanetByName,getPlanetResidents} from "./residents.js"


console.log("hello")
let showPlanet =document.getElementById("show_planets")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let modalContent = document.getElementById("modal-content")


function getPlanets(){
    return Promise.resolve(
    ).then(()=> {
        return fetch('https://swapi.co/api/planets')
    }).then((response) =>{
        return response.json()
    }).then((data)=>{
        return  data.results;
    })
};

export function showPlanets(){
    getPlanets().then((result)=>{
        let headers = ["name", "diameter", "climate", "terrain", "surface_water", "population","residents"];
        let tr = galaxy.insertRow()
        for (let header of headers){
                let th = document.createElement('th');
                th.textContent = header;
                tr.appendChild(th)
            }
        galaxy.appendChild(tr)
        for (let planet of result){
            let tr = galaxy.insertRow()
            for (let header of headers){
                let td = document.createElement('td');
                if (header==="residents"){
                    residents(td,header,planet)
                    tr.appendChild(td)
                } else {
                    td.textContent = planet[header];
                    tr.appendChild(td)
                }
            }
            galaxy.appendChild(tr)
        } showPlanet.style.visibility = 'hidden'

}
)};

function residents(td,header,planet){
        if (planet["residents"].length ===0){
            return td.textContent = "Unknown residents";
        } else {
            let btn = document.createElement("button")
            btn.textContent = planet["residents"].length + " resident(s)"
            btn.classList.add("getResidents")
            btn.setAttribute("type","button")
            btn.setAttribute("id",planet["name"])
            return td.appendChild(btn)
        }
}

export function addButtonClickListener(){
    document.body.addEventListener("click",function(event){
        if (event.target.className === "getResidents"){
            let id = event.target.id
            console.log(id)
            loadPlanetResident(id)
        }
    })
}

function loadPlanetResident(planetName){
    let residentsDates = ["name","height","mass","skin_color","hair_color","eye_color","birth_year","gender"]
    let table = document.createElement("table")
    table.setAttribute("id","residentsOfPlanet")
    table.setAttribute("class","table-striped")
     getPlanetByName(planetName).then((result)=>{
        for (let url of result){
            let tableRow = table.insertRow()
            getPlanetResidents(url).then((resident)=>{
                for (let data of residentsDates){
                    let tableData = document.createElement("td")
                    tableData.textContent=resident[data]
                    tableRow.appendChild(tableData)
                }
            table.appendChild(tableRow)
          })
        }
     });
    modalContent.appendChild(table)
    modal.style.display = "block";
}


span.onclick = function() {
    let tableChild = document.getElementById("residentsOfPlanet")
    if (tableChild!=null){
        modalContent.removeChild(tableChild)
    }
    let form = document.getElementById("loginForm")
    if (form != null){
        modalContent.removeChild(form)
    }
    modal.style.display = "none";
}
