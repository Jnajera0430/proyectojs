//Calculos del cuadrado
console.group("Cuadrado");
//const lcuadrado = 5;

//console.log("El lado del cuadrado es de: " + lcuadrado);
function pcuadrado(lcuadrado) {
    return lcuadrado * 4 +" cm";
} 

function Acuadrado(lcuadrado){
   return lcuadrado * lcuadrado + " cm²";
}  

//console.log("El área del cuadrado es igual a: " + Acuadrado + "cm²");
console.groupEnd();

//Calculos del trianulo
console.group("Triangulo");
//const ltriangulo1 = 6;
//const ltriangulo2 = 6;
//const btriangulo = 4;

function ptriangulo(lado1,lado2,base){
    return lado1 + lado2 + base + " cm";
}

function Atriangulo(h,base){
    return (h*base)/2 + " cm²"
}

//console.log("Los lados de un triangulo miden: "+ ltriangulo1 + "cm "+ ltriangulo2 + "cm "+ btriangulo + "cm ")

console.groupEnd();