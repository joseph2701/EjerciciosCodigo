const button1 = document.querySelector(".js_button");
const button2 = document.querySelector(".js_button_1");

console.log("button: ",button1);
console.log("%O",button1);

const body=document.querySelector("body");

//registra evento click
function toggleMenu() {
    const menu = this.querySelector(".menu"); // atrapando el elemento menu
    if (menu.style.display == "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  // registrando un evento
  button1.onclick = toggleMenu;
  button2.onmouseover = toggleMenu;
  button2.onmouseout = toggleMenu;
  
  const button3 = document.querySelector(".js_button_3");
  button3.onclick = function () {
    button.style.backgroundColor = "purple";
  };