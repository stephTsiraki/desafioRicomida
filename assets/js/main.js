//2. 

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// 3. 
//$(selector).click(function)

$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
  });

// 4. 

$(document).ready(function () {
  $("h3").on("dblclick", function () {
    $(this).css({
      color: "red",
    });
  });
});

//Los titulos "PREPARACIÓN" e "INGREDIENTES" son los únicos elementos <h3>

//Syntax: $(selector).on(event,childSelector,data,function,map)

/* Alternativamente, usando selectores de clases:
$(".preparacion").on("dblclick", function () {
    $(this).css({
      color: "red"
    });
  });
  $(".ingredientes").on("dblclick", function () {
    $(this).css({
      color: "red"
    });
  });
*/

/* 5. (Entendí que el contenido se refiere al texto en las cards) */

$(document).ready(function () {
  $(".card-title").on("click", function () {
    $(".card-text").toggle();
  });
});
