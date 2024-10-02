window.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('formFiguras');
    const mostrar = document.getElementById('respuesta');


    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        let baseRec = document.querySelector('.baseRec').value;
        let alturaRec = document.querySelector('.alturaRec').value;
        let baseTri = document.querySelector('.baseTri').value;
        let alturaTri = document.querySelector('.alturaTri').value;
        let lado = document.querySelector('.lado').value;

        const dataOperaciones = {
            baseRec,
            alturaRec,
            baseTri,
            alturaTri,
            lado
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
                <div class="col-12">Area del rectangulo: ${oper.AreaRec}</div>
                <div class="col-12">Area del triangulo: ${oper.AreaTri}</div>
                <div class="col-12">Area del cuadrado: ${oper.AreaCua}</div>
                `;
            })

            mostrar.innerHTML = html;

        })
        .catch(error => {
            console.log(error)
        })


    })

})



