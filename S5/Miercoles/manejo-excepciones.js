function ejemplo1(){

    function suma(a,b){
        if(arguments.length >2){
            throw console.error("too many arguments");
        }
        
         return a+b;
    }

    console.log(suma(2,3));
    console.log(suma(2,3,4));
}

// ejemplo1();

function ejemplo2(){    
    let message="";
    const nombre2 = prompt("Ingresa tu nombre: ");
    try{        
        if(nombre2.length<6){ throw "SHORT";}
        if(nombre2.length>10){ throw "LONG";}

        message="El nombre " + nombre2 + " es correcto";
    }catch(error){
        if(error == "SHORT"){
            message="El nombre " + nombre2 + " es muy corto";
        }
        if(error == "LONG"){
            message="El nombre " + nombre2 + " es muy largo";
        }
    }
    finally{
        console.log(message);
    }
    
}

ejemplo2();