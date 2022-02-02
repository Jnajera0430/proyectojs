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
    return (lado1 * 1) + (lado2 * 1)+ (base * 1) +" cm";
}

function Atriangulo(h,base){
    return (h*base)/2 + " cm²"
}

//console.log("Los lados de un triangulo miden: "+ ltriangulo1 + "cm "+ ltriangulo2 + "cm "+ btriangulo + "cm ")

function hTriangulo(lado1,base){
    const a = (lado1*lado1*1)-((base*base*1)/4);
    const result = Math.sqrt(a);
    return result;  

}
console.groupEnd();

//Interzccion con HTML

function calcularPcuadrado(){
    const input = document.getElementById("InputCuadrado");
    const lcuadrado = input.value;
    const perimetro = pcuadrado(lcuadrado);
    alert(perimetro);
}

function calcularAcuadrado(){
    const input = document.getElementById("InputCuadrado");
    const lcuadrado = input.value;
    const area = Acuadrado(lcuadrado);
    alert(area);
}

function calcularPtriangulo(){
    const input1 = document.getElementById("InputTriangulo1").value;
    const lado1 = input1;

    const input2= document.getElementById("InputTriangulo2").value;
    const lado2 = input2;

    const input3 = document.getElementById("InputTriangulo3").value;
    const base = input3;

    const perimetro = ptriangulo(lado1,lado2,base); 
    
    alert(perimetro);
}

function calcularAtriangulo(){
    const input4 = document.getElementById("InputTriangulobase");
    const base = input4.value;

    const input5 = document.getElementById("InputTriangulo2");
    const h = input5.value;

    const area = Atriangulo(h,base);

    alert(area);
}

function calcularHtriangulo(){
    const input6 = document.getElementById("InputTriangulo1").value;
    const input7 = document.getElementById("InputTriangulo2").value;
    const input8 = document.getElementById("InputTriangulo3").value;

    const lado1= input6;
    const lado2= input7;
    const base= input8;

    if(lado1 == lado2){
        const h = hTriangulo(lado1,base);
        alert(h);
    }else if(lado1 < lado2){
        const E = "No es un triangulo isosceles";
        alert(E);
    }

}