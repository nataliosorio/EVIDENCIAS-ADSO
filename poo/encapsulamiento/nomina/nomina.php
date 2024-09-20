<?php
class Nomina{
        private $diasTrabajados;
        private $valorDia;
        private $nombre;

        public function setnombre($nombre){
            $this->nombre = $nombre;
        }

        public function getnombre(){
            return $this->nombre;
        }

        public function setDiasTrabajados($diasTrabajados){
            $this->diasTrabajados = $diasTrabajados;
        }

        public function getDiasTrabajados(){
            return $this->diasTrabajados;
        }

        public function setValorDia($valorDia){
            $this->valorDia = $valorDia;
        }

        public function getValorDia(){
            return $this->valorDia;
        }
        
    }
?>