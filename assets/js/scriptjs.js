// SE PREPARA LA INMERSION DEL TOOLTIP PARA LUEGO OCUPARLO
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// ESTE ES PARA OCUPAR EL MODAL
document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    openModalBtn.addEventListener('click', function() {
        myModal.show();
    });

    myModal._element.addEventListener('click', function(event) {
        if (event.target === this) {
            myModal.hide();
        }
    });
});