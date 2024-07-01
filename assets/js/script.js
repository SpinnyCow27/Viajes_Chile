// PERMITE CLICKEAR LAS IMAGENES PARA DESAPARECERLAS Y LUEGO UN BOTON PARA APARECERLAS DE VUELTA
$(document).ready(function() {
    $('#Destacados .card-title').click(function() {
        $(this).closest('.card').toggle();
        if ($('.card:hidden').length > 0) {
            $('#showAllCards').show();
        } else {
            $('#showAllCards').hide();
        }
    });
    
    $('#showAllCards').click(function() {
        $('.card:hidden').toggle();
        $(this).hide();
    });

    if ($('.card:hidden').length === 0) {
        $('#showAllCards').hide();
    }
});


// PERMITE ABRIR EL MODAL DESDE EL BOTON CON DICHO ID
$(document).ready(function() {
    $('#openModalBtn').click(function() {
        $('#myModal').modal('show');
    });
});

// INGRESO DE TOOLTIP
$(document).ready(function() {
    // Activar tooltips
    $('[data-toggle="tooltip"]').tooltip();
});



