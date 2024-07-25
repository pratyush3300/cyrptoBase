document.addEventListener("DOMContentLoaded", function() {

    var scrollUpButton = document.getElementById('scrollUpButton');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollUpButton.style.display = 'block';
        } else {
            scrollUpButton.style.display = 'none';
        }
    });
    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
