<?php
class figurasGeometricas{
        public $area;

        public function areaCuadrado($lado){
            $this->area = $lado * $lado;
            return  $this->area;
        }

        public function areaRectangulo($base, $altura){
            $this->area = $base * $altura;
            return $this->area;
        }

        public function areaTriangulo($base, $altura){
            $this->area = ($base * $altura) /2;
            return  $this->area;
        }


    }
?>