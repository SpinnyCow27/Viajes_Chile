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