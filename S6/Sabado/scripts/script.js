
function replacechild(){
    const container=document.querySelector("#replace"); //padre contenedor
    const h1=document.querySelector("#replace h1"); //elem a ser reemplazado
    const h2=document.createElement("h2");  //eleme que reemplazara    
    h2.textContent="HOLA MUuuNDO H2 REMPLAZADO"; //dando contenido a h2
    container.replaceChild(h2,h1);  //reemplazamdo    
}
// replacechild();

function clonenode(){
    const container=document.querySelector("#replace"); //padre contenedor
    const h1=document.querySelector("#replace h1"); //elem a ser reemplazado
    let clone=h1.cloneNode(true);
    container.appendChild(clone);
}
// clonenode();

function insertbefore(){
    const container=document.querySelector("#replace"); //padre contenedor
    const h1=document.querySelector("#replace h1"); //elem a ser reemplazado
    const h2=document.createElement("h2");  //eleme que reemplazara    
    h2.textContent="Texto de h2 before";
    container.insertBefore(h2,h1);   
}
insertbefore();

function insertafter(){        
    const h1=document.querySelector("#replace h1"); //elem a ser reemplazado
    const h2=document.createElement("h2");  //eleme que reemplazara    
    h2.textContent="Texto de h2 after";
    h1.parentNode.insertBefore(h2,h1.nextSibling);
}
insertafter();
