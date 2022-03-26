import "./styles.css";
import settings from "./settings.js";
import app from "./app";
//if (module.hot) { module.hot.accept(function () { location.reload(); }); }
docReady(function() {
    // DOM is loaded and ready for manipulation here
    app(settings);

});

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}