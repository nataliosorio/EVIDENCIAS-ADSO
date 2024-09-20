<?php
include('nomina.php');
include('control_Nomina.php');

$nomina = new Nomina();
$control = new controlNomina();

$nomina->setNombre('Nati');
$nombre = $nomina->getnombre();

$nomina->setDiasTrabajados(30);
$diasTrabajados = $nomina->getDiasTrabajados();

$nomina->setValorDia(1000);
$valorDia = $nomina->getValorDia();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
    <link rel="stylesheet" href="../../libreria/bootstrap/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
        <h1 class="text-center">NÓMINA</h1>
        <table class="table table-bordered border-primary table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Datos</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>
                        <?php 
                        echo $nombre; 
                        ?>
                    </td>
                </tr>
                <tr>
                    <td>Salario</td>
                    <td>
                        <?php echo $control->salario($diasTrabajados, $valorDia); ?>
                    </td>
                </tr>
                <tr>
                    <td>Salud</td>
                    <td>
                        <?php echo $control->salud(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Pensión</td>
                    <td>
                        <?php echo $control->pension(); ?>
                    </td>
                </tr>
                <tr>
                    <td>ARL</td>
                    <td>
                        <?php echo $control->arl(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Subsidio de Transporte</td>
                    <td>
                        <?php echo $control->subTraspor(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Retención</td>
                    <td>
                        <?php echo $control->retenciones(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Total a Pagar</td>
                    <td>
                        <?php echo $control->pagoTotal(); ?>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <script src="../../libreria/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>