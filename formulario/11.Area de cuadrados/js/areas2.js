
function areas(plado){
    let lado = plado;
    let area;
    area = lado*lado;
    return area;
}

function areaMayor(area1, area2, area3){
    
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

function areasCuadrados(){

    let ladoC1 = parseFloat(document.getElementById("lado1").value);
    let ladoC2 = parseFloat(document.getElementById("lado2").value);
    let ladoC3 = parseFloat(document.getElementById("lado3").value);

    if(ladoC1 && ladoC2 && ladoC3){
        let area1 = areas(ladoC1) 
        let area2 = areas(ladoC2) 
        let area3 = areas(ladoC3)
        let areaMayorr = areaMayor(area1, area2, area3) 


        document.getElementById("areafiguras2").innerHTML =  `El area del cuadrado 1 es: ${area1} <br>` +
                                                            `El area del cuadrado 2 es: ${area2} <br>` +
                                                            `El area del cuadrado 3 es: ${area3} <br>`+ areaMayorr

                                                
    }else{
        document.getElementById("areafiguras2").innerHTML = `Ingrese los datos pedidos`;
    }
    return false;     
}










    
       

        

    


