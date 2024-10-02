<?php

class Medidas{
    private $lado;

    public function __construct($lado = 0){
        $this->lado = $lado;
    }

    public function setMedida($lado){
        $this->lado = $lado;
    }

    public function getMedida(){
        return $this->lado;
    }
}

?>