
export function createButton(onclick,name,title = null) {
    let button = document.createElement("button");
    button.setAttribute("id", name);
    button.innerHTML = title;
    document.getElementById("app").appendChild(button);
    document.getElementById(name).onclick = onclick;
}
