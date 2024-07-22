/**
 * BINGO EN HTML
 * Autor: Natalia osorio
 * Viernes 12 de julio 2024
 */


document.addEventListener(`DOMContentLoaded`, function(){
    let bingo = [];           
    let iteracion1;        
    let iteracion2;       
    let interno = [];
    let contador = 0;           
    let resultado; 
    let printCard1 = ``;           
    let print1 = ``;
    let printCard2 = ``;
    let print2 = ``;
    let printCard3 = ``;
    let print3 = ``;
    let printCard4 = ``;
    let print4 = ``;
    let printCard5 = ``;
    let print5 = ``;
    let printCard6 = ``;
    let print6 = ``;
    let printCard9 = ``;
    let print9 = ``;
    let printCard10 = ``;
    let print10 = ``;
    let printCard11 = ``;
    let print11 = ``;
    let printCard12 = ``;
    let print12 = ``;

    // generar la matriz del bingo
    for(iteracion1 = 0;iteracion1<5; iteracion1++){         
        interno = [];                                       
        for(iteracion2 = 0; iteracion2<5; iteracion2++){    
            contador =contador+1;           
            resultado = contador * 3;
            interno.push(resultado);
        }
        bingo.push(interno) 
    }

     // bingo en html

     for(iteracion1 = 0;iteracion1< bingo.length;iteracion1++){
        print1 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for(iteracion2 = 0; iteracion2<5; iteracion2++){
            resultado = bingo[iteracion1][iteracion2];

            print1 += `<div class="col-2 letter-container">`;
            print1 += `<h6 class="card-title">${resultado}</h6>`;
            print1 += `</div>`;

            if (iteracion2 === 4) {
                print1 += `<div><br></div>`;
            }
           
        }
        print1 +=
        `</div>
        </div>
        </div>`
    }

    printCard1 += `
    <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
        ${print1}
    </div>`;
    
    // letra b 
    let letraB = [];
    for(iteracion1=0; iteracion1<5; iteracion1++){ 
        letraB.push(bingo[iteracion1][0])
    }

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        print2 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            resultado = bingo[iteracion1][iteracion2];
            let resaltar = false;
    
            
            if (letraB.includes(resultado)) {
                resaltar = true;
            }
    
            print2 += `<div class="col-2 letter-container">`;
            if (resaltar) {
                print2 += `<h6 class="card-title resaltar">${resultado}</h6>`;
            } else {
                print2 += `<h6 class="card-title">${resultado}</h6>`;
            }
            print2 += `</div>`;
    
            if (iteracion2 === 4) {
                print2 += `<div><br></div>`;
            }
        }
        print2 +=
        `</div>
        </div>
        </div>`
    }

    printCard2 += `
   <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
        ${print2}
    </div>`;

    // letra i 

    let letraI = [];
    for(iteracion1=0; iteracion1<5; iteracion1++){ 
        letraI.push(bingo[iteracion1][1])
    }

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        print3 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            resultado = bingo[iteracion1][iteracion2];
            let resaltar = false;
    
            
            if (letraI.includes(resultado)) {
                resaltar = true;
            }
    
            print3 += `<div class="col-2 letter-container">`;
            if (resaltar) {
                print3 += `<h6 class="card-title resaltar">${resultado}</h6>`;
            } else {
                print3 += `<h6 class="card-title">${resultado}</h6>`;
            }
            print3 += `</div>`;
    
            if (iteracion2 === 4) {
                print3 += `<div><br></div>`;
            }
        }
        print3 +=
        `</div>
        </div>
        </div>`
    }

    printCard3 += `
   <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
        ${print3}
    </div>`;


    // letra n 

    let letraN = [];
    for(iteracion1=0; iteracion1<5; iteracion1++){ 
        letraN.push(bingo[iteracion1][2])
    }

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        print4 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            resultado = bingo[iteracion1][iteracion2];
            let resaltar = false;
    
            
            if (letraN.includes(resultado)) {
                resaltar = true;
            }
    
            print4 += `<div class="col-2 letter-container">`;
            if (resaltar) {
                print4 += `<h6 class="card-title resaltar">${resultado}</h6>`;
            } else {
                print4 += `<h6 class="card-title">${resultado}</h6>`;
            }
            print4 += `</div>`;
    
            if (iteracion2 === 4) {
                print4 += `<div><br></div>`;
            }
        }
        print4 +=
        `</div>
        </div>
        </div>`
    }

    printCard4 += `
    <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
        ${print4}
    </div>`;

    // letra g 

    let letraG = [];
    for(iteracion1=0; iteracion1<5; iteracion1++){ 
        letraG.push(bingo[iteracion1][3])
    }

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        print5 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            resultado = bingo[iteracion1][iteracion2];
            let resaltar = false;
    
            
            if (letraG.includes(resultado)) {
                resaltar = true;
            }
    
            print5 += `<div class="col-2 letter-container">`;
            if (resaltar) {
                print5 += `<h6 class="card-title resaltar">${resultado}</h6>`;
            } else {
                print5 += `<h6 class="card-title">${resultado}</h6>`;
            }
            print5 += `</div>`;
    
            if (iteracion2 === 4) {
                print5 += `<div><br></div>`;
            }
        }
        print5 +=
        `</div>
        </div>
        </div>`
    }

    printCard5 += `
    <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
       ${print5}
    </div>`;

    // letra o 

    let letraO = [];
    for(iteracion1=0; iteracion1<5; iteracion1++){ 
        letraO.push(bingo[iteracion1][4])
    }

    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        print6 +=
        `<div class="row">
            <div class="col-12">
                <div class="row centered-row">`
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            resultado = bingo[iteracion1][iteracion2];
            let resaltar = false;
    
            
            if (letraO.includes(resultado)) {
                resaltar = true;
            }
    
            print6 += `<div class="col-2 letter-container">`;
            if (resaltar) {
                print6 += `<h6 class="card-title resaltar">${resultado}</h6>`;
            } else {
                print6 += `<h6 class="card-title">${resultado}</h6>`;
            }
            print6 += `</div>`;
    
            if (iteracion2 === 4) {
                print6 += `<div><br></div>`;
            }
        }
        print6 +=
        `</div>
        </div>
        </div>`
    }

    printCard6 += `
    <div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
       ${print6}
    </div>`;


let equis = [];

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    equis.push(bingo[iteracion1][iteracion1]);
}


for ( iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    equis.push(bingo[iteracion2][4 - iteracion2]);
}

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    print9 +=
    `<div class="row">
        <div class="col-12">
            <div class="row centered-row">`
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        resultado = bingo[iteracion1][iteracion2];

        print9 += `<div class="col-2 letter-container">`;

        if (equis.includes(resultado)) {
            print9 += `<h6 class="card-title resaltar">${resultado}</h6>`;
        }else{
            print9 += `<h6 class="card-title">${resultado}</h6>`;
        }
        print9 += `</div>`;

        if (iteracion2 === 4) {
            print9 += `<div><br></div>`;
        }
    }
    print9 +=
    `</div>
    </div>
    </div>`
}

printCard9 = `
<div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
   ${print9}
</div>`;

//  1 x 

            let equis2 = [];

            for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
                equis2.push(bingo[iteracion1][iteracion1+1]);
            }
            
            for ( iteracion2 = 0; iteracion2 < 3; iteracion2++) {
                equis2.push(bingo[iteracion2][4-(iteracion2+1)]);
            }
            
            for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
                print10 +=
                `<div class="row">
                    <div class="col-12">
                        <div class="row centered-row">`
                for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                    resultado = bingo[iteracion1][iteracion2];
                
                    print10 += `<div class="col-2 letter-container">`;

                if (equis2.includes(resultado)) {
                    print10 += `<h6 class="card-title resaltar">${resultado}</h6>`;
                }else{
                    print10 += `<h6 class="card-title">${resultado}</h6>`;
                }
                    print10 += `</div>`;
    
                if (iteracion2 === 4) {
                    print10 += `<div><br></div>`;
                }
        }
        print10 +=
        `</div>
        </div>
        </div>`
    }
printCard10 = `
<div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
    ${print10}
</div>`;

// x 2 

let equis3 = [];

for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    equis3.push(bingo[iteracion1+2][iteracion1]);
}

for ( iteracion2 = 0; iteracion2 < 3; iteracion2++) {
    equis3.push(bingo[iteracion2+2][4-(iteracion2+2)]);
}

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    print11 +=
    `<div class="row">
        <div class="col-12">
            <div class="row centered-row">`
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        resultado = bingo[iteracion1][iteracion2];

        print11 += `<div class="col-2 letter-container">`;
        if (equis3.includes(resultado)){
            print11 += `<h6 class="card-title resaltar">${resultado}</h6>`;
        }else{
            print11 += `<h6 class="card-title">${resultado}</h6>`;
        }
        print11 += `</div>`;

        if (iteracion2 === 4) {
            print11 += `<div><br></div>`;
        }
    }
    print11 +=
    `</div>
    </div>
    </div>`
}
printCard11 = `
<div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
${print11}
</div>`;

// x 3

let equis4 = [];

for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    equis4.push(bingo[iteracion1+2][iteracion1+2]);
}

for ( iteracion2 = 0; iteracion2 < 3; iteracion2++) {
    equis4.push(bingo[iteracion2+2][4-iteracion2]);
}

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    print12 +=
    `<div class="row">
        <div class="col-12">
            <div class="row centered-row">`
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        resultado = bingo[iteracion1][iteracion2];

        print12 += `<div class="col-2 letter-container">`;

        if (equis4.includes(resultado)) {
            print12 += `<h6 class="card-title resaltar">${resultado}</h6>`;
        }else{
            print12 += `<h6 class="card-title">${resultado}</h6>`;
        }
        print12 += `</div>`;

        if (iteracion2 === 4) {
            print12 += `<div><br></div>`;
        }
    }
    print12 +=
    `</div>
    </div>
    </div>`
}
printCard12 = `
<div class="card-header">BINGO STAR</div>
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="row centered-row">
                    <div class="col-2">
                        <h5 class="card-letras">B</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">I</h5>
                    </div>
                    <div class="col-2 ">
                        <h5 class="card-letras">N</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">G</h5>
                    </div>
                    <div class="col-2">
                        <h5 class="card-letras">O</h5>
                    </div>
                </div>
            </div>
        </div>
${print12}
</div>`;

    document.getElementById(`bingo`).innerHTML = printCard1;
    document.getElementById(`bingo2`).innerHTML = printCard2;
    document.getElementById(`bingo3`).innerHTML = printCard3;
    document.getElementById(`bingo4`).innerHTML = printCard4;
    document.getElementById(`bingo5`).innerHTML = printCard5;
    document.getElementById(`bingo6`).innerHTML = printCard6;
    document.getElementById(`bingo9`).innerHTML = printCard9;
    document.getElementById(`bingo10`).innerHTML = printCard10;
    document.getElementById(`bingo11`).innerHTML = printCard11;
    document.getElementById(`bingo12`).innerHTML = printCard12;
})

 