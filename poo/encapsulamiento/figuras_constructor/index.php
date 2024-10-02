<?php
include('control_figuras.php');

$baseRec = new Medidas(5);
$alturaRec = new Medidas(4);
$baseTri = new Medidas(2);
$alturaTri = new Medidas(3);
$lado = new Medidas(3);

$operaciones = new Operaciones($baseRec, $alturaRec, $baseTri, $alturaTri, $lado);

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
                    <td>Area del rectangulo </td>
                    <td><?php echo  $operaciones->areaRectangulo().'<br>' ; ?></td>
                </tr>
                <tr>
                    <td>Triangulo </td>
                    <td><?php echo $operaciones->areaTriangulo().'<br>'; ?></td>
                </tr>
                <tr>
                    <td>Cuadrado </td>
                    <td><?php echo $operaciones->areaCuadrado().'<br>'; ?></td>
                </tr>
                
            </tbody>
        </table>
    </div>
</body>
</html>