export default function () {
  function alert1() {
    alert("Avoide this page");
  }
  function yesORno() {
    if (confirm("You still want to be here?")) {
      alert("I am so proud of you");
    } else {
      alert("You better to get out");
    }
  }

  function question() {
    const name = prompt("SAY YOUR NAME");
    if (name) {
      //var name changes to what user write and its no more prompt
      alert("Hi " + name);
    } else {
      //alert(`You have canseled my request and her what i got insted ${name}`);
      alert("You have canseled my request and her what i got insted " + name);
    }
  }

  let butt_alert1 = document.createElement("button");
  butt_alert1.setAttribute("id", "alert1");
  butt_alert1.appendChild(document.createTextNode("Popup alert"));
  document.getElementById("app").appendChild(butt_alert1); //it's need to apear in app
  document.getElementById("alert1").onclick = function () {
    alert1();
  };
  //return "";
}
