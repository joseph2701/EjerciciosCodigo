const h1 = document.querySelector("H1");
// console.log(h1);


function modifyNode(nodo,colorx,fontsizex,backx,familyx){
    nodo.style.color = colorx;
    nodo.style.fontsize = fontsizex;
    nodo.style.background = backx;
    nodo.style.fontFamily=familyx;
}

modifyNode(document.querySelector("h1"),"red","30px","green","arial");
modifyNode(document.querySelector("h2"),"red","30px","green","arial");
modifyNode(document.querySelector("h3"),"red","30px","green","arial");
modifyNode(document.querySelector("h4"),"red","30px","green","arial");
modifyNode(document.querySelector("h5"),"red","30px","green","arial");
modifyNode(document.querySelector("h6"),"red","30px","green","arial");

	
(document).each(modifyNode(document.querySelector("h"),"red","30px","green","arial"));