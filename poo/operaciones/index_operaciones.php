<?php
include('operaciones.php');

$operaciones = new Operaciones();

echo "Suma: " . $operaciones->sumar(5,2) . "<br>";
echo "Resta: " . $operaciones->restar(3,3) . "<br>";
echo "Multiplicación: " . $operaciones->multiplicar(3,2) . "<br>";
echo "División: " . $operaciones->dividir(6,2) . "<br>";

?>