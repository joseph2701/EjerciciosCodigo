const button = document.querySelector("button");
const body = document.querySelector("body");

function ejemplo1(){
    button.onclick=function(){
        console.log("function!!!");
        // body.style.backgroundColor="yellow";
        console.log(window.getComputedStyle(body).backgroundColor);
    
            if(body.style.backgroundColor=="yellow"){
                body.style.backgroundColor="red";
            }else{
                body.style.backgroundColor="yellow";
            }
    };
}

//ejemplo1()

//classlist
//add= agrega clases
//remove = remueve clases
//toogle=agrega o quita
//contains= devuelve verdadero si la clase existe en el elemento
//replace= remplaza una clase
function ejemplo2(){
    button.onclick=function(){
        // body.classList.add(bgyellow);
        // body.classList.add(bgred);
        // body.classList.toogle("bgyellow");
        console.log(body.classList.contains("bgyellow"));

        //contains
        if(body.classList.contains("bgyellow")){
            body.classList.add("bgred");
            body.classList.remove("bgyellow");
        }else{
            body.classList.add("bgyellow");
            body.classList.remove("bgred");
        }

        body.classList.replace("clase-a-reemplazar","bgblue");
    };
}

// ejemplo2();

function ejemplo3(){
    button.onclick=function(){
        //crear elementos en js
        const article=document.createElement("article");
        article.innerHTML=`
        <h2>TITULO DE ARTICULO</h2>
        <p>Parrafo del articulos</p>
        <img src="https://picsum.photos/200/300">    
        `;
        console.log("%O",article);    
        //agrega lo creado en js al html body
        body.appendChild(article);
    }
}
ejemplo3();

