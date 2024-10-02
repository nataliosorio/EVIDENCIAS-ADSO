<?php
include('control_figuras.php');

$info = file_get_contents("php://input");
$dataDatos = json_decode($info, true);

$baseRec = new Medidas($dataDatos['baseRec']);
$alturaRec = new Medidas($dataDatos['alturaRec']);
$baseTri = new Medidas($dataDatos['baseTri']);
$alturaTri = new Medidas($dataDatos['alturaTri']);
$lado = new Medidas($dataDatos['lado']);

$operaciones = new Operaciones($baseRec, $alturaRec, $baseTri, $alturaTri, $lado);


$dataOperaciones[] = [
    "AreaRec" => $operaciones->areaRectangulo(),
    "AreaTri" => $operaciones->areaTriangulo(),
    "AreaCua" => $operaciones->areaCuadrado(),

];

header('Content-Type: application/json');
echo json_encode($dataOperaciones);


?>
