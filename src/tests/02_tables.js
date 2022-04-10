import {createButton, test} from "../services/htmlElements.js";

export default function () {
    document.getElementById("app").innerHTML = "To see more check console<br>";
    const result = document.createElement("div");
    result.setAttribute("id", "result");
    document.getElementById("app").append(result);
    let table = [];

    function createInputField() {
        let input = document.createElement("input");
        input.setAttribute("id", "input",
            "type", "text",
            "name", "input",
            "placeholder", "Your data");
        document.getElementById("app").appendChild(input);
    }

    function createAddButton() {
        let button = document.createElement("button");
        let input = document.getElementById("input");
        button.setAttribute("id", "add_button",
            "type", "button",
            "name", "button");
        button.innerHTML = "Add";
        document.getElementById("app").appendChild(button);
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                button.click();
                input.value = "";
            }
        });
        document.getElementById("add_button").onclick = function () {
            if (input.value !== "") {
                table.push(input.value);
                console.log(table);
                input.value = "";
            }
        };
    }


    function createShowTableButton() {
        let button = document.createElement("button");
        button.setAttribute("id", "showTableButton",
            "type", "button",
            "name", "button",
            "onclick", "getValue()");
        button.innerHTML = "Show Table";
        document.getElementById("app").appendChild(button);
        //document.getElementById("result").textContent = table.join(", ");
        //document.getElementById("result").innerHTML = table.join(", ");
        document.getElementById("showTableButton").onclick = function () {
            document.getElementById("result").innerHTML = table.join(", ");
        };
    }

    // function createClearButton() {
    //     let button = document.createElement("button");
    //     button.setAttribute("id", "clearButton",
    //         "type", "button",
    //         "name", "button",
    //         "onclick", "getValue()");
    //     button.innerHTML = "Clear Table";
    //     document.getElementById("app").appendChild(button);
    //     document.getElementById("clearButton").onclick = function () {
    //         table = [];
    //     };
    //}


    createInputField();
    createAddButton();
    createShowTableButton();
    //createClearButton();
    createButton(function () {
        table = [];
        document.getElementById("result").innerHTML = "";
    }, "clearTableButton", "Clear Table");

}
