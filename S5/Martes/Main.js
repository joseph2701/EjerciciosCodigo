console.log("Hola Mundo");


let nombreVariable=10;
let edad=35;
let nombre= "Joseph"
let sexo="m";

nombrevariable="cambiar el valor";
console.log("nombrevariable",nombrevariable);

nombrevariable="modificado denuevo";
console.log("nombrevariable",nombrevariable);


const PI=3.14
const URL="https://www.google.com/";
console.log("PI",PI);

let dataunico=Symbol("123456");
let varobjeto={
nombre2:"Joseph",
sexo2:"m",
nacionalidad2:"peruana",
};


console.log('////////')
console.log('nombre:',typeof nombre)
console.log('sexo:',typeof sexo)
console.log('nacionalidad:',typeof varobjeto.nacionalidad2)



console.log(parseInt("7.23"));          //numbre
console.log(parseFloat("3.14"));        //numbre
console.log(typeof Number("3.54"))      //numbre

console.log(String ("3.15"));           //string

let numberData=10.56;
console.log(numberData.toString());


let numero1= prompt("Ingresa un numero");2

let numero2= prompt("Ingresa otro numero");

console.log("Sumando:" , (Number(numero1) + Number(numero2)));
alert("Sumando:" +  (Number(numero1) + Number(numero2)));
