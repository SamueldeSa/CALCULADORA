function calcular(n1, n2) {
  n1 = parseFloat(document.getElementById("n1").value)
  n2 = parseFloat(document.getElementById("n2").value)

  selector = document.getElementById("selector").value
  
  switch (selector) {
    case '+':
        calculo = (n1 + n2)
        document.getElementById("resultado").innerHTML = ` O resultado da soma entre ${n1} + ${n2} é = ${calculo}`
        break

   case '-':
        calculo = (n1 - n2)
        document.getElementById("resultado").innerHTML = ` O resultado da subtração entre ${n1} - ${n2} é = ${calculo}`
  }
}