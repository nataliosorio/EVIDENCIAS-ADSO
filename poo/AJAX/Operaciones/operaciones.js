window.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('formOperaciones');
    const mostrar = document.getElementById('respuesta');


    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        let numeroUno = document.querySelector('.numeroUno').value;
        let numeroDos = document.querySelector('.numeroDos').value;


        const dataOperaciones = {
            numeroUno,
            numeroDos
        }


        fetch('index.php',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataOperaciones)
        })

        .then(response => response.json())
        .then(data =>{
            let html = "";

            data.forEach(oper=>{
                html = `
                <div class="col-12">Suma: ${oper.Suma}</div>
                <div class="col-12">Resta: ${oper.Resta}</div>
                <div class="col-12">Multiplicacion: ${oper.Multiplicacion}</div>
                <div class="col-12">Division: ${oper.Division}</div>
                `;
            })

            mostrar.innerHTML = html;

        })
        .catch(error => {
            console.log(error)
        })


    })

})
