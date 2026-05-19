// Smooth Scrolling

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Shadow on Scroll

window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.7)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    }
});