document.getElementById('night-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
});

document.querySelector('.main-button').addEventListener('click', function() {
    alert('Essa função esta em Beta');
});

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-150px';
    }
});