
export function createButton(onclick,name,title = null,id = "app") {
    let button = document.createElement("button");
    button.setAttribute("id", name);
    button.innerHTML = title;
    document.getElementById(id).appendChild(button);
    document.getElementById(name).onclick = onclick;
}
export function addDiv(divId) {
    let div = document.createElement("div");
    div.setAttribute("id", divId);
    document.getElementById("app").append(div);
}
export function newLine(divId) {
    let br = document.createElement("br");
    document.getElementById(divId).append(br);
}
export function setTimeOut(id,time) {
    setTimeout(function () {
        document.getElementById(id).innerHTML = "";
    }, time);
}
