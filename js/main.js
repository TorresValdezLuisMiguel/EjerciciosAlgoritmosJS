// 1.- solicitar 3 numeros (entre el 1 y 100) y definir cual es el mayor

// 2.- solicitar 3 numeros (entre el 1 y 100) y definir cual es el menor

// 3.- Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

// 4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

// 5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

// 6.- Elabora un algoritmo para leer un número y determinar si es par o impar

// let num1=parseFloat(prompt("Dame el primer número (entre 1 y 100): ",""));
// let num2=parseFloat(prompt("Dame el segundo número (entre 1 y 100): ",""));
// let num3=parseFloat(prompt("Dame el tercer número (entre 1 y 100): ",""));
// let num4=parseInt(prompt("Dame el número entero (entre 100 y 200) para saber si es multiplo de 3:",""));
// let num5=parseFloat(prompt("Dame el primer número para comprobar si uno es la suma de los otros: ",""));
// let num6=parseFloat(prompt("Dame el segundo número para comprobar si uno es la suma de los otros: ",""));
// let num7=parseFloat(prompt("Dame el tercer número para comprobar si uno es la suma de los otros: ",""));
// let num8=parseFloat(prompt("Dame el número para saber si es par o impar: ",""));
// let num9=parseFloat(prompt())
// no funcionaba conversión directa en la comparación por alguna razón
// num1=parseFloat(num1);
// num2=parseFloat(num2);
// num3=parseFloat(num3);
// para verificar que si transforma a numeros(int)
// console.log(num1);
// console.log(num2);
// console.log(num3);

// 1.-
// if((num1>100)||(num1<0)||(num2>100)||(num2<0)||(num3>100)||(num3<0)){
//     alert("Uno o mas números no estan dentro del rango")
// }else if((num1>=num2)&&(num1>=num3)){
//     alert(num1+" es el número mas grandede de "+num1+", "+num2+", "+num3)
// }else if((num2>=num1)&&(num2>=num3)){
//     alert(num2+" es el número mas grande de "+num1+", "+num2+", "+num3)
// }else{
//     alert(num3+" es el número mas grande de "+num1+", "+num2+", "+num3)
// }

// 2.-

// if((num1>100)||(num1<0)||(num2>100)||(num2<0)||(num3>100)||(num3<0)){
//     alert("Uno o mas números no estan dentro del rango")
// }else if((num1<=num2)&&(num1<=num3)){
//     alert(num1+" es el menor número de "+num1+", "+num2+", "+num3)
// }else if((num2<=num1)&&(num2<=num3)){
//     alert(num2+" es el menor número de "+num1+", "+num2+", "+num3)
// }else{
//     alert(num3+" es el menor número de "+num1+", "+num2+", "+num3)
// }

// 3.-

function Adivinar(){
    let superior=100;
    let inferior=0;

    let noEncontrado = true;

    while(noEncontrado){
        let mid = parseInt(inferior + ((superior-inferior)/2));
        if(((superior-inferior)/2)<1){
            noEncontrado=false;
            alert("Tu número es el "+ (parseInt(mid)+1));
            break;
        }
        let res = confirm("Tu número es menor o igual a "+ mid);
        if(res){
            superior=mid;
        }else{
            inferior =mid;
        }
}
}

Adivinar();

// 4.-

// if (num4>200||num4<100){
//     alert("Número "+num4+" es invalido")
// }else if(num4%3==0){
//     alert("Número "+num4+" es multiplo de 3")
// }else{
//     alert("Número "+num4+" no es multiplo de 3")
// }

// 5.-

// if(num5==(num6+num7)){
//     alert("El número "+num5+" es la suma de "+num6+" y " +num7+".")
// }else if(num6==(num5+num7)){
//     alert("El número "+num6+" es la suma de "+num5+" y " +num7+".")
// }else if(num7==(num5+num6)){
//     alert("El número "+num7+" es la suma de "+num5+" y " +num6+".")
// }else{
//     alert("Ningun numero es la suma de los otros dos")
// }

// 6.-
// if(num8%2==0){
//     alert("Número "+num8+" es par")
// }else{
//     alert("Número "+num8+" es impar")
// }