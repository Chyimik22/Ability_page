import imports from './imports';

export default function (settings) {
  let ul = document.createElement("ul");
  settings.menuItems.forEach((item) => {
    let a = document.createElement("a");
    a.setAttribute("class", "menu-item");
    a.setAttribute("data-item-name", item.name);
    a.setAttribute("href", "#");
    a.appendChild(document.createTextNode(item.menuName));
    let li = document.createElement("li");
    li.appendChild(a);
    ul.appendChild(li);
  });

  document.getElementById("menu").appendChild(ul);

  const menuItems = document.getElementsByClassName("menu-item");
  if (menuItems.length) {
    for (const menuItem of menuItems) {
      menuItem.addEventListener("click", (e) => {
        e.preventDefault();
          imports[e.target.dataset.itemName]
          .then((module) => {
            let button = document.createElement("button");
            button.setAttribute("class", "back");
            button.appendChild(document.createTextNode("Back"));
            document.getElementById("menu").innerHTML = "";
            document.getElementById("menu").appendChild(button);
            module.default();

            const backButtons = document.getElementsByClassName("back");
            if (backButtons.length) {
              for (const button of backButtons) {
                button.addEventListener("click", (e) => {
                  document.location.href = "";
                });
              }
            }
          })
          .catch((err) => {
            document.getElementById("app").innerHTML = err.message;
          });
      });
    }
  }
}
