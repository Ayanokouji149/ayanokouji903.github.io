$(document).ready(function(){
      // Al cargar la página, ocultamos las cortinas
      $('.left-curtain').css('width', '0%');
      $('.right-curtain').css('width', '0%');
    
      $('.rosa').click(function(){
        var elemento = document.getElementById("rosa");
        elemento.style.display = "none";
        
        var elemento = document.getElementById("Rosa");
        elemento.style.display = "none";
          // Hacer visible la carta con una animación ondulante
        $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
          $(this).css('transform', 'scale(' + scale + ')');
        }}); // Animación de ondulación
      });
    });

