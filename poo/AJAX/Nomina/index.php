<?php
include('operaciones.php');

$info = file_get_contents("php://input");
$dataDatos = json_decode($info, true);


$diasTrabajados = new Dato($dataDatos['diasTrabajados']);
$valorDia = new Dato($dataDatos['valorDia']);


$nomina = new Operaciones($diasTrabajados, $valorDia);


$dataOperaciones[] = [
    "Salario" => $nomina->salario(),
    "Salud" => $nomina->salud(),
    "Pension" => $nomina->pension(),
    "arl" => $nomina->arl(),  
    "subTrasporte" => $nomina->subTraspor(),
    "Retenciones" => $nomina->retenciones(),
    "PagoTotal" => $nomina->pagoTotal(),

];

header('Content-Type: application/json');
echo json_encode($dataOperaciones);

?>
