<?php
include('operaciones.php');
include('control_operaciones.php');

$operaciones = new Operaciones();
$control = new controlOperaciones();

$operaciones->setNumeroUno(5);
$numerouno = $operaciones->getNumeroUno();

$operaciones->setNumeroDos(2);
$numeroDos = $operaciones->getNumeroDos();

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
                    <td>Suma (<?php echo $numerouno . " + " . $numeroDos; ?>)</td>
                    <td><?php echo $control->sumar($numerouno, $numeroDos); ?></td>
                </tr>
                <tr>
                    <td>Resta (<?php echo $numerouno . " - " . $numeroDos; ?>)</td>
                    <td><?php echo $control->restar($numerouno, $numeroDos); ?></td>
                </tr>
                <tr>
                    <td>Multiplicación (<?php echo $numerouno . " * " . $numeroDos; ?>)</td>
                    <td><?php echo $control->multiplicar($numerouno, $numeroDos); ?></td>
                </tr>
                <tr>
                    <td>División (<?php echo $numerouno . " / " . $numeroDos; ?>)</td>
                    <td><?php echo $control->dividir($numerouno, $numeroDos); ?></td>
                </tr>
            </tbody>
        </table>
    </div>
    
        <script src="../../libreria/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>