let perro={
    nombre:"sebastina",
    edad: 2,
    raza:"peruana",
    pais:"peru",
    sayInfo: function(){
        console.log(this);
    },
};

console.log(perro.sayInfo());

let computadora={
    marca:"acer",
    procesador:"intel",
    anio: 2020,
    getMarca: function(){
        return this.marca;
    },
    getAnio: function(){
        return this.anio;
    },
    getAllDetail: function(){
        return this.marca + this.procesador + this.anio;
    },
    setMarca:function(marca){
        this.marca=marca;
    },
};

console.log(computadora.getMarca());
console.log(computadora.setMarca("ibm"));
console.log(computadora.getMarca());

//////////////////////////////////////////////////////////////

let alumnos={
    nombres:[],
    setAlumno:function(nombre){
        this.nombres.push(nombre);
    },
    getAlumno:function(nombre){
        return this.nombres.find((el)=>el.nombre==nombre);
    },
};

alumnos.setAlumno(
    {
        nombre:"sebastian",
        apellido:"yabiku",
        edad:32,
        pais:"peru"
    },
);
alumnos.setAlumno(
    {
        nombre:"jose",
        apellido:"maroma",
        edad:34,
        pais:"peru"
    },
);
alumnos.setAlumno(
    {
        nombre:"mellisa",
        apellido:"caicho",
        edad:35,
        pais:"peru"
    },
);

console.log("alumno jose",alumnos.getAlumno("jose"));
console.log("alumno mellisa",alumnos.getAlumno("mellisa"));
console.log("alumnos",alumnos);

let firefox = new Object(); // es similiar que crear array de vacios del
firefox.nombre="firefox";
firefox.modelo="firefoxito";
firefox.marca="apple";firefox.numeroserie=1234;
firefox.getImnfo=function(){
    return "el nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}";
};

//constructor de objetos makeMobile
function makeMobile(props){
    this.nombre=props.nombre;    
    this.modelo=props.modelo;
    this.marca=props.marca;    
    this.numeroSerie=props.numeroSerie;
    this.procedencia=props.procedencia;
    this.getInfo= function(){
        return `el nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    };
}

let celularUno = new makeMobile(
    {
        nombre:"celularUno",
        modelo:"modeloUno",
        marca:"marcaUno",
        numeroSerie:"serieUno",
        procedencia: "chinaUno",
    }
);

console.log("celularUno",celularUno.getInfo());

let celularDos = new makeMobile(
    {
        nombre:"celularDos",
        modelo:"modeloDos",
        marca:"marcaDos",
        numeroSerie:"serieDos",
        procedencia: "chinaDos",
    }
);

console.log("celularDos",celularDos.getInfo());

/*
OBJETOS NATIVOS 
*/

// string
console.log("sebastian".length); // 9
console.log("sebastian".concat(" yabiku")); // sebastian yabiku
console.log("sebastian".includes("se")); // true
console.log("sebastian".endsWith("tian")); // true
console.log("sebastian".charAt(0).toUpperCase());

// array
const array = [0, 1, 2, 3, 4, 5]; // new Array(0, 1, 2, 3, 4, 5)
const array2 = [6, 7, 8, 9];

console.log(array.length); // 6
console.log(array.concat(array2)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array.push(20); // agrega al final del array
array.pop(); // elimina el ultimo del array
array.shift(); // elimina el primer elemento
array.unshift(400); // agrega al inicio

// splice
console.log(array);
array.splice(2, 3);
console.log(array);

const mascotas=[
    {
        name:"mascota uno",
        edad:1,
        raza:"uno",
        pais:"peru",
        sexo: "m",
    },
    {
        name:"mascota dos",
        edad:2,
        raza:"dos",
        pais:"peru",
        sexo: "h",
    },
    {
        name:"mascota tres",
        edad:3,
        raza:"tres",
        pais:"chile",
        sexo: "m",
    },
    {
        name:"mascota cuatro",
        edad:4,
        raza:"cuatro",
        pais:"ecuador",
        sexo: "h",
    },
];

//recorre como un for todo los elementos
mascotas.map((elemento) => console.log(elemento));

const copiaModificada=mascotas.map((elemento) => {
        return{
            //los ... copia los elementos a la nueva variable
            ...elemento,
            otraPropiedad:true,
        };
});

copiaModificada.map((elemento) => console.log(elemento));

//filter 
//forma larga para varios reglones
const mascotaHembra= mascotas.filter((mascota) =>{
    return mascota.sexo=="h";
});
//forma resumida si la condicional y return es una linea
const mascotaMacho= mascotas.filter((mascota) => mascota.sexo=="m");

console.log("mascotasHembra",mascotaHembra);
console.log("mascotasMacho",mascotaMacho);

//find
const nameMascotaUno= mascotas.find((mascota) => mascota.name=="mascota uno");

console.log("namaeMascotaUno",nameMascotaUno);

//findIndex
const mascotaIndex= mascotas.findIndex((mascota) => mascota.name=="mascota uno");

console.log("posicionMascotaUno",mascotaIndex);

//every
const mismoPais= mascotas.every((mascota) => mascota.pais=="peru");

console.log("mismoPais",mismoPais);

//some
const noSonMismoPais= mascotas.some((mascota) => mascota.pais=="peru");

console.log("noSonMismoPais",noSonMismoPais);
