<?php
include('operaciones.php');


$info = file_get_contents("php://input");
$dataDatos = json_decode($info, true);


$numeroUno = new Numero($dataDatos['numeroUno']);
$numeroDos = new Numero($dataDatos['numeroDos']);

$operaciones = new Operaciones($numeroUno, $numeroDos);


$dataOperaciones[] = [
    "Suma" => $operaciones->sumar(),
    "Resta" => $operaciones->restar(),
    "Multiplicacion" => $operaciones->multiplicar(),
    "Division" => $operaciones->dividir(),
];

header('Content-Type: application/json');
echo json_encode($dataOperaciones);

?>
    
