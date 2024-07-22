/**
 * Funcion Calcular 3 notas
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

// con parametros

function porcNotas(pnota, pporc){
    let nota = pnota;
    let porc = pporc;
    let result;
    result = nota * porc;
    return result;
    }
   
    function suma(pnota1, pnota2, pnota3){
        let nota1 = pnota1
        let nota2 = pnota2
        let nota3 = pnota3
        let sumar;
        sumar= nota1+nota2+nota3;
        
        if(sumar>4.5){
            return "Es una nota superior";
        }else{
            if(sumar<4.5 && sumar>3.5){
                return "Es una nota buena";
            }else{
                if(sumar<3.5 && sumar>3.0){
                    return "Es una nota media";
                }else{
                    return "Es una nota mala";
                }
            }
        }
    }

// como Expresion
    
const porcExp = function(pnota, pporc){
    let nota = pnota;
    let porc = pporc;
    let result;
    result = nota * porc;
    return result;
}

    const sumaExp = function(pnota1, pnota2, pnota3){
        let nota1 = pnota1
        let nota2 = pnota2
        let nota3 = pnota3
        let sumar;
        sumar= nota1+nota2+nota3;
        if(sumar>4.5){
            return "Es una nota superior";
        }else{
            if(sumar<4.5 && sumar>3.5){
                return "Es una nota buena";
            }else{
                if(sumar<3.5 && sumar>3.0){
                    return "Es una nota media";
                }else{
                    return "Es una nota mala";
                }
            }
        }
}
