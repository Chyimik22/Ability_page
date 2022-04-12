import {createButton,addDiv,newLine} from "../services/htmlElements";

export default function () {
    addDiv("info");
    addDiv("buttons");

    createButton(function () {
        alert("Avoid this page");
    }, "alert1", "Popup Alert", "buttons");

    newLine("buttons");

    createButton(function () {
        if (confirm("You still want to be here?")) {
            alert("I am so proud of you");
        } else {
            alert("You better to get out");
        }
    }, "yesOrNo", "Question", "buttons");

    newLine("buttons");

    createButton(function () {
        const name = prompt("SAY YOUR NAME");
        if (name) {
            alert("Hi " + name);
        } else {
            alert("You have canceled my request and her what i got instead " + name);
        }
    }, "greeting", "Greeting", "buttons");

}
