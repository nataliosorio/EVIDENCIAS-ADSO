<?php


class controlOperaciones{
    private $numeroUno;
    private $numeroDos;
    private $suma;
    private $resta;
    private $multiplicacion;
    private $division;

    public function sumar($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->suma = $this->numeroUno + $this->numeroDos;
        return $this->suma;
    }

    public function restar($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->resta = $this->numeroUno - $this->numeroDos;
        return $this->resta;
    }
    public function multiplicar($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->multiplicacion = $this->numeroUno * $this->numeroDos;
        return $this->multiplicacion;
    }

    public function dividir($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->division = $this->numeroUno / $this->numeroDos;
        return $this->division;
    }
}

?>