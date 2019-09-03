export function logIn() {
    
    let modal = document.getElementById("myModal")
    let modalContent = document.getElementById("modal-content")

    let form = document.createElement("form");
    form.setAttribute("method","post")
    form.setAttribute("action","/login")
    form.setAttribute("id","loginForm")

    let inputName = document.createElement("input")
    inputName.setAttribute("name","username")
    inputName.setAttribute("placeholder","Username")

    let password = document.createElement("input")
    password.setAttribute("name","password")
    password.setAttribute("placeholder","Password")

    let loginButton = document.createElement("button")
    loginButton.setAttribute("type","submit")
    loginButton.textContent = "LOGIN"

    form.appendChild(inputName);
    form.appendChild(password)
    form.appendChild(loginButton)
    modalContent.appendChild(form)
    modal.style.display = "block"
}