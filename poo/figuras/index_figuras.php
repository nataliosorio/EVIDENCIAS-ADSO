<?php
include('figuras.php');

$figuras = new figurasGeometricas();


echo "Area del cuadrado: " . $figuras->areaCuadrado(2) ."<br>";

echo "Area del rectangulo: " . $figuras->areaRectangulo(3,2) ."<br>";

echo "Area del triangulo: " . $figuras->areaTriangulo(3,2) ."<br>"; 

?>