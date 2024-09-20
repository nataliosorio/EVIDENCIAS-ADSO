<?php


class controlNomina{
        private $diasTrabajados;
        private $valorDia;
        private $salario;
        private $salud;
        private $pocentSalud = 0.12;
        private $pension;
        private $pocentpension = 0.16;
        private $arl;
        private $porcentarle = 0.052;
        private $salarioMinimo = 1300000;
        private $subsidioTransporte;
        private $retencion;
        private $sueldoTotal;



        public function salario($diasTrabajados, $valorDia){
            $this->diasTrabajados = $diasTrabajados;
            $this->valorDia = $valorDia;
            $this->salario = $this->diasTrabajados * $this->valorDia;
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