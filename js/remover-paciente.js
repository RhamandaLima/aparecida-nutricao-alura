var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.remove();
})

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log("fui clicado pelo duplo click");
//        this.remove();
//   });
//})