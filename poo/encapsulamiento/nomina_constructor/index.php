<?php
include('operaciones.php');

$diasTrabajados = new Dato(8);
$valorDia = new Dato(30000);

$nomina = new Operaciones($diasTrabajados, $valorDia);

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
                    <td>Salario</td>
                    <td>
                        <?php echo $nomina->salario(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Salud</td>
                    <td>
                        <?php echo $nomina->salud(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Pensión</td>
                    <td>
                        <?php echo $nomina->pension(); ?>
                    </td>
                </tr>
                <tr>
                    <td>ARL</td>
                    <td>
                        <?php echo $nomina->arl(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Subsidio de Transporte</td>
                    <td>
                        <?php echo $nomina->subTraspor(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Retención</td>
                    <td>
                        <?php echo $nomina->retenciones(); ?>
                    </td>
                </tr>
                <tr>
                    <td>Total a Pagar</td>
                    <td>
                        <?php echo $nomina->pagoTotal(); ?>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <script src="../../libreria/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>