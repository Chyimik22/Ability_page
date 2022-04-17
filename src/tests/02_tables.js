import {createButton, addDiv, newLine, setTimeOut} from "../services/htmlElements.js";

export default function () {
    addDiv("info");
    addDiv("inputField");
    addDiv("buttons");
    addDiv("result");
    let table = [];
    document.getElementById("info").innerHTML = "To see more check console <br>";

    let input = document.createElement("input");
    input.setAttribute("id", "input",
        "type", "text",
        "placeholder", "Enter data");
    document.getElementById("inputField").append(input);

    createButton(function () {
        if (input.value !== "") {
            table.push(input.value);
            console.log(table);
            input.value = "";
        }
    }, "addButton", "Add", "buttons");

    input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addButton.click();
            input.value = "";
        }
    });

    createButton(function () {
        document.getElementById("result").innerHTML = table.join(", ");
    }, "showTableButton", "Show Table", "buttons");

    createButton(function () {
        table = [];
        document.getElementById("result").innerHTML = "Table is empty";
        console.log("Table is empty");
        setTimeOut("result", 3000);
    }, "clearTableButton", "Clear Table", "buttons");

    newLine("buttons");

    createButton(function () {
        table.sort(function(a, b) {
            return a.localeCompare( b);
        });
        document.getElementById("result").innerHTML = table.join(", ");
    }, "sortTableButton", "Sort Table", "buttons");

    createButton(function () {
        table.shift();
    }, "deleteFirstItem", "Delete first item", "buttons");
    createButton(function (){
        table.pop();
    }, "deleteLastItem", "Delete last item", "buttons");
}
