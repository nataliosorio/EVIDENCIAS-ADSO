/**
 * Funcion Area de 3 cuadrados
 * Autor: Natalia osorio
 * jueves 11 de abril de 2024
 */

//con parametros

function areas(plado){
    let lado = plado;
    let area;
    area = lado*lado;
    return area;
}

function areaMayor(parea1, parea2, parea3){
    let area1 = parea1;
    let area2 = parea2;
    let area3 = parea3;

    if(area1==area2 && area1==area3 && area3==area2){
        return "las tres areas son iguales " 
    }else{
        if(area1>area2 && area1>area3){
            return "El area 1 es mayor"
        }else{
            if(area2>area1 && area2>area3){
                return "El area 2 es mayor"
            }else{
                return "El area 3 es mayor"
            }
        }
    }
}

    

// como expresion 

const areasExp = function(plado){
    let lado = plado;
    let area;
    area = lado*lado;
    return area;
}

const areasMayorExp = function(parea1, parea2, parea3){
    let area1 = parea1;
    let area2 = parea2;
    let area3 = parea3;

    if(area1==area2 && area1==area3 && area3==area2){
        return "las tres areas son iguales " 
    }else{
        if(area1>area2 && area1>area3){
            return "El area 1 es mayor"
        }else{
            if(area2>area1 && area2>area3){
                return "El area 2 es mayor"
            }else{
                return "El area 3 es mayor"
            }
        }
    }
}