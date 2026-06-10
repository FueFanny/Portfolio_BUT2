document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {entry.target.classList.add("visible");}
    });
}, {threshold: 0.15});
sections.forEach(section => {
    observer.observe(section);
});

const footer = document.querySelector("footer");
footer.innerHTML =
    `Portfolio BUT2 Informatique – Alice Chevalier INF2-FI B © ${new Date().getFullYear()}`;