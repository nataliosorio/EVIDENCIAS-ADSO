window.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('formNomina');
    const mostrar = document.getElementById('respuesta');


    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        let diasTrabajados = document.querySelector('.diasTrabajados').value;
        let valorDia = document.querySelector('.valorDia').value;


        const dataOperaciones = {
            diasTrabajados,
            valorDia
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
                <div class="col-12">Salario: ${oper.Salario}</div>
                <div class="col-12">Salud: ${oper.Salud}</div>
                <div class="col-12">Pension: ${oper.Pension}</div>
                <div class="col-12">Arl: ${oper.arl}</div>
                <div class="col-12">Subsidio de Transporte: ${oper.subTrasporte}</div>
                <div class="col-12">Retenciones: ${oper.Retenciones}</div>
                <div class="col-12">Pago total: ${oper.PagoTotal}</div>
                `;
            })

            mostrar.innerHTML = html;

        })
        .catch(error => {
            console.log(error)
        })


    })

})
