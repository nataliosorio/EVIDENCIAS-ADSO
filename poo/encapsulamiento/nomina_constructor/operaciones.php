<?php
include('numero.php'); 
class Operaciones{

    private $diasTrabajados;
    private $valorDia;
    public $salario;
    public $salud;
    public $pocentSalud = 0.12;
    public $pension;
    public $pocentpension = 0.16;
    public $arl;
    public $porcentarle = 0.052;
    public $salarioMinimo = 1300000;
    public $subsidioTransporte;
    public $retencion;
    public $sueldoTotal;


    public function __construct( Dato $diasTrabajados, Dato $valorDia){
        $this->diasTrabajados = $diasTrabajados;
        $this->valorDia = $valorDia;
    }


    public function salario(){
        $this->salario = $this->diasTrabajados->getValor() * $this->valorDia->getValor();
        return $this->salario;
    }

    public function salud(){
        $this->salud = $this->salario * $this->pocentSalud;
        return $this->salud;
    }

    public function pension(){
        $this->pension = $this->salario * $this->pocentpension;
        return $this->pension;
    }

    public function arl(){
        $this->arl = $this->salario * $this->porcentarle;
        return $this->arl;
    }

    public function subTraspor(){

        if($this->salario < 2* $this->salarioMinimo){
            $this->subsidioTransporte = 114000;
        }else{
            $this->subsidioTransporte = 0;
        }
        return $this->subsidioTransporte;
    }
    

    public function retenciones(){
        if($this->salario >= 4 * $this->salarioMinimo){
            $this->retencion = $this->salario* 0.04;
        }else{
            $this->retencion = 0;
        }
        return  $this->retencion;
    }


    public function pagoTotal(){
        $this->sueldoTotal = ($this->salario +$this->subsidioTransporte)-($this->salud + $this->pension + $this->arl + $this->retencion);
        return $this->sueldoTotal;
    }
}

?>