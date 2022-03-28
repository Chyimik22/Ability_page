export default function () {
  function alert1() {
    alert("Avoide this page");
  }
  function yesOrNo() {
    let question_conf = confirm("You still want to be here?");
    if (question_conf) {
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
  const nline = document.createElement("br");

  let butt_alert1 = document.createElement("button");
  butt_alert1.setAttribute("id", "butt_alert1");
  butt_alert1.appendChild(document.createTextNode("Popup alert"));
  document.getElementById("app").appendChild(butt_alert1);
  document.getElementById("butt_alert1").onclick = function () {
    alert1();
  };

  document.getElementById("app").appendChild(nline.cloneNode(true));
  //document.getElementById("app").innerHTML = "<br>";
  //Do not work as expected, or it is clearing HTML before

  let butt_quest = document.createElement("button");
  butt_quest.setAttribute("id", "butt_quest");
  butt_quest.appendChild(document.createTextNode("Question"));
  document.getElementById("app").appendChild(butt_quest);
  document.getElementById("butt_quest").onclick = function () {
    question();
  };
  //document.getElementById("butt_quest").appendChild(nline);
  document.getElementById("app").appendChild(nline.cloneNode(true));

  let butt_yesOrNo = document.createElement("button");
  butt_yesOrNo.setAttribute("id", "butt_yesOrNo");
  butt_yesOrNo.appendChild(document.createTextNode("Yes Or No"));
  document.getElementById("app").appendChild(butt_yesOrNo);
  document.getElementById("butt_yesOrNo").onclick = function () {
    yesOrNo();
  };
}
