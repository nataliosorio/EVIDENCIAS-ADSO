<?php
include('figuras.php'); 
class Operaciones{
    private $baseRec;
    private $alturaRec;
    private $baseTri;
    private $alturaTri;
    private $lado;


    public $areaRectangulo;
    public $areaTriangulo;
    public $areaCuadrado;


    public function __construct( Medidas $baseRec, Medidas $alturaRec, Medidas $baseTri, Medidas $alturaTri, Medidas $lado){
        $this->baseRec = $baseRec;
        $this->alturaRec = $alturaRec;
        $this->baseTri = $baseTri;
        $this->alturaTri = $alturaTri;
        $this->lado = $lado;

    }

    public function areaRectangulo() {
        $this->areaRectangulo = $this->baseRec->getMedida() * $this->alturaRec->getMedida();
        return $this->areaRectangulo;
    }

    public function areaTriangulo() {
        $this->areaTriangulo = $this->baseTri->getMedida() * $this->alturaTri->getMedida() /2;
        return $this->areaTriangulo;
    }

    public function areaCuadrado() {
        $this->areaCuadrado = $this->lado->getMedida() * $this->lado->getMedida();
        return $this->areaCuadrado;
    }
  
   
}

?>