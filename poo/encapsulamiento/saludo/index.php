<?php
    include('saludo_encapsulamiento.php'); 

    $saludar = new saludo();

    $saludar->setSaludar('Hola mundo');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
</head>
<body>
    <?php

    echo $saludar->getSaludar();

    ?>
</body>
</html>