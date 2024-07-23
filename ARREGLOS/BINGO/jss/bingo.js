
/**
 * BINGO
 * Autor: Natalia osorio
 * Miercoles 8 de Mayo 2024
 */

let bingo = [];
let letraO = [];
let letraB=[];
let letraI = [];
let letraN = [];
let letraG = [];
let cantidadImpares=[];
let cantidadPares=[];
let iteracion1;
let iteracion2;
let tabla;
let contador =0;

//Sacar el bingo 

for(iteracion1=0; iteracion1<5; iteracion1++){  
    let interno =[];
    for(iteracion2=0; iteracion2<5; iteracion2++){  
        contador =contador+1;
        tabla = contador*3;
        interno.push(tabla);

    }
    bingo.push(interno);
}
console.log(bingo);
   
//Obtener los numeros pares e impares del bingo

for(iteracion1=0; iteracion1<5; iteracion1++){
    for(iteracion2=0; iteracion2<5; iteracion2++){
        if(bingo[iteracion1][iteracion2]%2==0){  
            cantidadPares.push(bingo[iteracion1][iteracion2]);
        }
        else{
            cantidadImpares.push(bingo[iteracion1][iteracion2]);
        }
    }
}
console.log("Pares: ",cantidadPares);
console.log("Impares: ",cantidadImpares);


//Letra B

for(iteracion1=0; iteracion1<5; iteracion1++){ 
    letraB.push(bingo[iteracion1][0])
}
console.log("Letra B: "+letraB);


//Letra I

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraI.push(bingo[iteracion1][1])
}
console.log("Letra I: "+letraI);

//Letra N

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraN.push(bingo[iteracion1][2])
}
console.log("Letra N: "+letraN);

//Letra G

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraG.push(bingo[iteracion1][3])
}
console.log("Letra G: "+letraG);

//Letra 0

for(iteracion1=0; iteracion1<5; iteracion1++){
    letraO.push(bingo[iteracion1][4])
}
console.log("Letra O: "+letraO);


//equis1 
let equis =[];

for(iteracion1=0; iteracion1<3; iteracion1++){
    equis.push(bingo[iteracion1][iteracion1+1]);
}
    for(iteracion2=0; iteracion2<3; iteracion2++){
        equis.push(bingo[iteracion2][4-(iteracion2+1)]);
  
}
console.log("X 1: "+equis);


//Equis 2

let equis2 =[];

for(iteracion1=0; iteracion1<3; iteracion1++){
    equis2.push(bingo[iteracion1+2][iteracion1]);
}
    for(iteracion2=0; iteracion2<3; iteracion2++){
        equis2.push(bingo[iteracion2+2][4-(iteracion2+2)]);
  
}
console.log("X 2: "+equis2);

//Equis 3

let equis3 =[];

for(iteracion1=0; iteracion1<3; iteracion1++){
    equis3.push(bingo[iteracion1+2][iteracion1+2]);
}
    for(iteracion2=0; iteracion2<3; iteracion2++){
        equis3.push(bingo[iteracion2+2][4-iteracion2]);
  
}
console.log("X 3: "+equis3);



// x grande
let xgrande = [];
for(iteracion1=0; iteracion1<5; iteracion1++){
    xgrande.push(bingo[iteracion1][iteracion1]);
}
    for(iteracion2=0; iteracion2<5; iteracion2++){
        xgrande.push(bingo[iteracion2][4-iteracion2]);
  
}
console.log("X GRANDE: "+xgrande);
 
