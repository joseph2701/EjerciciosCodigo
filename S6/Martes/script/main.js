const h1 = document.querySelector(".H1");
console.log("%O",h1);

const h2 = document.querySelector("h2");
console.log("%O",h2);

const h3 = document.querySelector("h3");
console.log("%O",h3);

//ATRAPA TODOS LOS ELEMENTOS P
const parrafos=document.querySelectorAll("p");
console.log("%O",parrafos);

for (let i=0;i<parrafos.length;i++){
    console.log(parrafos[i])
}

parrafos.forEach((parafo)=> {
    console.log("parrafo: º",parrafos)
})

//ELEMENTOS DEL FORMULARIO
const input=document.querySelector("input");
console.log(input,input.value);

const select=document.querySelector("select");
console.log(select,select.value);

//ELEM LINK
const a = document.querySelector("a");
console.log(a);
console.log("%O",a);
a.href="https://google.com";
a.id="idAgregado";
a.innerHTML="TEXTO LINK MODIFICADO";
a.style.textDecoration="none";a.style.color="orange";
