//ejercicio 01

function propietiesButton() {
  console.log(this.dataset);  
  this.style.color=this.dataset.color;
  this.style.backgroundColor=this.dataset.colorBg;
  this.textContent=this.dataset.text;
}

const botones = document.querySelectorAll("button");
botones.forEach((boton) =>{
  console.log("boton",boton);
  boton.onclick=propietiesButton;
})

