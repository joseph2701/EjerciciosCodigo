
function ejemplo1(){    
    let edad=prompt("ingresa tu edad");

    if(edad>18){
        alert("Bienvenido al club");
    }else{
        alert("No eres Bienvenido");
    }
}


function ejemplo2(){     
    let saborHelado=prompt("Ingresa sabor de tu helado");

    if(saborHelado == "fresa"){
        alert("tu sabor es fresa");
    }else if(saborHelado == "mango" || saborHelado == "MANGO"){
        alert("tu sabor es mango");
    }else if(saborHelado == "chocolate"){
        alert("tu sabor es chocolate");
    }else{
        alert("No tenemos ese sabor");
    }
}

// ejemplo2();

function callAlert(type){
    return alert("Elejiste un " + type);
}

function ejemplo3(){
    let vehiculo=prompt("Porfavor elije tu tipo vehiculo(auto,moto,bicicleta,scooter)");

    switch(vehiculo){
        case "auto":{
            callAlert("auto");
            break;
        }
        
        case "moto":{ 
            callAlert("moto");
            break;
        }
        case "bicicleta":{
            callAlert("bicicleta");
            break;
        }
        
        case "scooter":{ 
            callAlert("scooter");
            break;
        }
        
        default:{ 
            ejemplo3();         
        }        
    }
    console.log("Se termino el juego");    
 }

// debugger;
// ejemplo3();


function ejemplo4(){
    const sexo=prompt("Ingresa tu sexo");
    sexo=="m" ? alert("Eres MAsculino"): alert("Eres femenino");
}

ejemplo4();



