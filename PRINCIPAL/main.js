document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.nav-hamburger');
    const dropdownMenu = document.getElementById('hamburger-dropdown');

    hamburger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});

