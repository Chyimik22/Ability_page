import {createButton} from "../services/htmlElements.js";

export default function () {
    document.getElementById("app").innerHTML = "To see more check console <br>";
    const result = document.createElement("div");
    result.setAttribute("id", "result");
    document.getElementById("app").append(result);
    let table = [];
    let input = document.createElement("input");
    input.setAttribute("id", "input",
        "type", "text",
        "placeholder", "Enter data");
    document.getElementById("app").append(input);

    createButton(function () {
        if (input.value !== "") {
            table.push(input.value);
            console.log(table);
            input.value = "";
        }
    }, "addButton", "Add");

    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addButton.click();
            input.value = "";
        }
    });

    createButton(function () {
        document.getElementById("result").innerHTML = table.join(", ");
    }, "showTableButton", "Show Table");

    createButton(function () {
        table = [];
        document.getElementById("result").innerHTML = "";
    }, "clearTableButton", "Clear Table");

}
