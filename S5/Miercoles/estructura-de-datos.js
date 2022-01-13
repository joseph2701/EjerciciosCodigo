function ejemplo1() {
    let nombre="Joseph";

    let nombres=["Joseph","Jose","Martha","Elisabeth"];
    let numeros=[1,2,3,4,5,6,7,8,9,10];
    let anidados=["edificio uno", ["departamento","departamento uno"]];
    let mezclados=[1,"Joseph",true];
    console.log("nombre: ",nombre);
    console.log("nombres: ",nombres);
    console.log("numeros: ",numeros);
    console.log("anidados: ",anidados);
    console.log("mezclados: ",mezclados);
    console.log("numeros[0]: ",numeros[0]);
    console.log("anidados[1][0]: ",anidados[1][0]);

    nombres[0]="Joseph Modificado"
    console.log("nombres[0]: ",nombres[0]);

    anidados[1][0]= "departamento modificado";
    console.log("anidados[1][0]: ",anidados[1][0]);

}

// ejemplo1()

function ejemplo2(){
    let alumno={
        grado:5,
        edad:34,
        sexo:"femenino",
        nombre:"Anita",
        apellido:"Salazar",
        nacionalidad:"Peruana",
        name_hermanos:["jose","melisa","hector"],
    };

    let computadora = {
        marca:"acer",
        año:1995,
        etiqueta:"f0f0f0",
        procesador:"pentium",        
    };

    let celular={
        marca:"iphone",
        tamaño:"x1",
        pulgadas:20,
        nuevo:false,
    };

    console.log(alumno.grado);
    console.log(alumno.name_hermanos);
    console.log(celular.marca);


    const celulares=[
        {
            marca:"iphone",
            tamaño:"x1",
            pulgadas:20,
            nuevo:false,
        },
        {
            marca:"android",
            tamaño:"x1",
            pulgadas:20,
            nuevo:false,
        },
        {
            marca:"windows",
            tamaño:"x1",
            pulgadas:20,
            nuevo:false,
        },

    ]

    console.log(celulares);
    console.log(celulares[0]);

    celulares[0].marca="iphone modificado";
    console.log(celulares[0].marca);
}
ejemplo2();