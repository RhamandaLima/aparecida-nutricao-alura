var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
}

if(altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
}


var imc = peso / (altura * altura); // 100/2.2*2.2= 100/4 = 25
tdImc.textContent = imc;