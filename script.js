// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const lessons = document.querySelectorAll('.lesson');

    // Add mouseover effect to lessons
    lessons.forEach(lesson => {
        lesson.addEventListener('mouseover', () => {
            lesson.classList.add('active');
        });

        lesson.addEventListener('mouseout', () => {
            lesson.classList.remove('active');
        });
    });

    // Scroll to section when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
