<?php
include('operaciones.php');

$numeroUno = new Numero(8);
$numeroDos = new Numero(1);

$operaciones = new Operaciones($numeroUno, $numeroDos);

?>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>operaciones</title>
    <link rel="stylesheet" href="../../libreria/bootstrap/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
        <h1 class="text-center">Resultados de Operaciones</h1>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Suma </td>
                    <td><?php echo  $operaciones->sumar().'<br>' ; ?></td>
                </tr>
                <tr>
                    <td>Resta </td>
                    <td><?php echo $operaciones->restar().'<br>'; ?></td>
                </tr>
                <tr>
                    <td>Multiplicación </td>
                    <td><?php echo $operaciones->multiplicar().'<br>'; ?></td>
                </tr>
                <tr>
                    <td>División </td>
                    <td><?php echo  $operaciones->dividir().'<br>'; ?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

