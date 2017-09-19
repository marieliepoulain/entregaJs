/*Elaboró: Mariel Yunuen Jaime Hernández/Fundamentos de la Programación/ICONOS*/
//Hola!
/*function hola() {
     var actualizarHola;
     }
     hola;
}
    actualizarHola();
    var intervaloDos = setInterval(actualizarHola, 5000);
    alert("¡Hola GossipGurl!.");*/


//Reloj
(function(){
  var actualizarHora = function(){
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
        pAMPM = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');

    var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;

    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    pMes.textContent = meses[mes];

    pYear.textContent = year;


    if(horas >= 12){
      //alert("¡Buenas Noches!");
      horas = horas - 12;
      ampm = 'PM';
      night.innerHTML ="¡Buenas Noches!";
      //alert("¡Buenas Noches!");
      //window.location.reload();
    }






    else{
        ampm = 'AM';
        morning.innerHTML ="¡Buenas Noches!";
        //alert("¡Buenos Días!")
        //window.location.reload();
    }

    if(horas == 0){
      horas = 12;
      };
      pHoras.textContent = horas;
      pAMPM.textContent = ampm;

      if(minutos < 10){minutos = "0" + minutos};
      if(segundos < 10){segundos = "0" + segundos};
      pMinutos.textContent = minutos;
      pSegundos.textContent = segundos;

    };




  actualizarHora();
  var intervalo = setInterval(actualizarHora, 1000);

}())
//Acaba Reloj

//Formulario
;
((d, c) => {
  const inputs = d.querySelectorAll('[required]'),
    preload = d.querySelector('.ContactForm-preload'),
    message = d.querySelector('.ContactForm-message')
  //c(inputs)

  inputs.forEach(input => {
    let span = d.createElement('span')

    span.id = input.name
    span.classList.add('ContactForm-error', 'u-hidden')
    span.textContent = `Dato incorrecto, escribe ${input.title}`
    input.insertAdjacentElement('afterend', span)

    //c(input.pattern, input.required)
    input.addEventListener('keyup', e => {
      if ( input.pattern ) {
        //c('El input tiene patrón')
        let regex = new RegExp( input.pattern )

        return ( !regex.exec( e.target.value ) )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      } else {
        //c('El input NO tiene patrón')
        return ( !e.target.value )
          ? d.getElementById(input.name).classList.add('is-active')
          : d.getElementById(input.name).classList.remove('is-active')
      }
    })
  })

  d.forms[0].addEventListener('submit', e => {
    //alert('Enviando Formulario')
    e.preventDefault()

    preload.classList.add('is-active')
    setTimeout(() => {
      preload.classList.remove('is-active')
      message.classList.add('is-active')
      d.forms[0].reset()

      setTimeout(() => {
        message.classList.remove('is-active')
      }, 3000)
    }, 2000)
  })
})(document, console.log);
//Acaba formulario
