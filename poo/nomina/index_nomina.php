<?php
include('nomina.php');


$nomina = new Nomina();

$nombre = $nomina ->nombre("karol");
echo $nombre . " su sueldo es de: " . $nomina->salario(30,50000) . "<br>";

echo "Su salud es de: " . $nomina->salud() . "<br>";
echo "Su pensión es de: " . $nomina->pension() . "<br>";
echo "Su arl es de: " . $nomina->arl() . "<br>";
echo "Su subsidio de transporte corresponde a: " . $nomina->subTraspor() . "<br>";
echo "Se aplica una retención de: " . $nomina->retenciones() . "<br>";
echo $nombre . " su pago total es de: " . $nomina->pagoTotal() . "<br>";

?>