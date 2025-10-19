$(document).ready(function() {

    $('.reservar-btn').on('click', function() {
        const movieTitle = $(this).data('movie');

        $('#pelicula-seleccionada').val(movieTitle);

        $('#reservaModal').modal('show');
    });


    $('#reservaForm').on('submit', function(e) {
        e.preventDefault();

        const pelicula = $('#pelicula-seleccionada').val();
        const horario = $('#horario').val();
        const asientos = $('#cantidad-asientos').val();

        if (!horario || !asientos) {
            alert('Por favor, completa todos los campos de la reserva.');
            return; 
        }

        $('#reservaModal').modal('hide');

        $('#confirmacion-pelicula').text(pelicula);
        $('#confirmacion-horario').text(horario);
        $('#confirmacion-asientos').text(asientos);

        $('#confirmacionModal').modal('show');
        
        $('#reservaForm')[0].reset();
    });

});