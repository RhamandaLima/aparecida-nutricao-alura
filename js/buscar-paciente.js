var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
    console.log("buscando paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send()
});