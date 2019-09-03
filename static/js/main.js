import {showPlanets,addButtonClickListener} from "./planets.js";
import {logIn} from "./logIn.js";


let showPlanet =document.getElementById("show_planets")
showPlanet.addEventListener("click",firstCall)

let logInButton = document.getElementById("login")
logInButton.addEventListener("click",logInUser)


function firstCall(){
    showPlanets()
    addButtonClickListener()
};

function logInUser(){
    logIn()
}