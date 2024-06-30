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



$(document).ready(function() {
    $('#openModalBtn').click(function() {
        $('#myModal').modal('show');
    });
});





