let gfapDown = document.getElementById('gfapDown');

gfapDown.addEventListener('click', function() {
    localStorage.setItem('gfap', true);
    window.location.href = "https://enioaiello.github.io/admin-services/";
});