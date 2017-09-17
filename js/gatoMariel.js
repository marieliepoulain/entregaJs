/*Elaboró: Mariel Yunuen Jaime Hernández/Fundamentos de la Programación/ICONOS*/

/*var miArreglo = new Array ("Mariel",28,true);
console.log(miArreglo);
console.log(miArreglo[0]);*/

var orden = 1;
var queOrden;
var arregloKitty = new Array(9);
var celda = document.getElementsByClassName("kitty");



function wonPlayer(letra)
{
  if(
    (arregloKitty[0]==letra && arregloKitty[1]==letra && arregloKitty[2]==letra)||
    (arregloKitty[3]==letra && arregloKitty[4]==letra && arregloKitty[5]==letra)||
    (arregloKitty[6]==letra && arregloKitty[7]==letra && arregloKitty[8]==letra)||
    (arregloKitty[0]==letra && arregloKitty[3]==letra && arregloKitty[6]==letra)||
    (arregloKitty[1]==letra && arregloKitty[4]==letra && arregloKitty[7]==letra)||
    (arregloKitty[2]==letra && arregloKitty[5]==letra && arregloKitty[8]==letra)||
    (arregloKitty[0]==letra && arregloKitty[4]==letra && arregloKitty[8]==letra)||
    (arregloKitty[2]==letra && arregloKitty[4]==letra && arregloKitty[6]==letra)    
  )
  {
    alert("Jugador"+letra+"Gana");
    window.location.reload();
  }
}

function kitty(evento)
{
  //alert("Miau Miau");
  //alert(evento.target.id);
  var celda= evento.target.id;
  var idCelda = evento.target.id;
  //alert(idCelda);
  //alert(idCelda.lenght);
  var ordenAMarcar = idCelda[1]-1;
  //alert(ordenAMarcar);

  queOrden = orden%2;

  if(queOrden!=0)
  {
    celda.innerHTML = "X";
    arregloKitty[ordenAMarcar] = "X";
    wonPlayer("X");
  }
  else if(queOrden == 0)
  {
    celda.innerHTML = "O";
    arregloKitty[ordenAMarcar] = "O";
    wonPlayer("O");
    //arregloKitty[ordenAMarcar-1] = O;
  }

  console.log(orden,queOrden,arregloKitty);

  if(orden==9)
  {
    alert("¡Empate!");
    window.location.reload();
  }

  else
  {
    orden++;
  }

}
function cargarArchivo()
{
  var n=0;

  while(n<celda.length)
  {
    /*console.log(n,celdas[n]);*/
    celda[n].addEventListener("click",kitty);
    n++;
  }
}


window.addEventListener("load",cargarArchivo);
