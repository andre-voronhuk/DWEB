 nome = prompt("Bem Vindo!\nInsira seu nome por favor")
 idade = prompt("Bem Vindo!\nInsira sua idade")

 function carregado() {


     elemento = document.getElementById("nome")
     elemento.innerHTML = nome

     elemento = document.getElementById("idade")
     elemento.innerHTML = idade


     if (idade < 18) {
         document.getElementById("maioridade").innerHTML = "não "
     }
 }

 function calcular() {
     n1 = document.getElementById("n1").value
     n2 = document.getElementById("n2").value
     resultado = document.getElementById("resultado")
     resultado.innerHTML = parseFloat(n1) + parseFloat(n2)
     document.getElementById("n1").value = ""
     document.getElementById("n2").value = ""


 }