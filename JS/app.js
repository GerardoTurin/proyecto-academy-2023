

//! Volver al inicio de la pagina al recargar.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};




//! Menu responsive

const menu = document.querySelector('.icono-nav');
const nav = document.querySelector('nav');

menu.addEventListener('click', function () {
    nav.classList.toggle('responsive');
});






//! Ocultar menu al hacer click en un link

const selecionarLink = () => {
    const links = document.querySelectorAll('.links a');

    // Agregar el evento de clic a cada enlace
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            // Quitar la clase "active" de todos los enlaces
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }
            // Agregar la clase "active" al enlace seleccionado
            this.classList.add("active");
        });


        links.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('responsive');
            });
        });


    };
};
selecionarLink();





//! Scroll suave

const scrollSuave = () => {
    const links = document.querySelectorAll('.links a');
    const portfolioLink = document.querySelector('#inicio a');
    links.forEach((link) => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            const seccion = document.querySelector(evt.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    portfolioLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        const seccion = document.querySelector(evt.target.attributes.href.value);
        seccion.scrollIntoView({
            behavior: 'smooth',
        });
    });
};
scrollSuave();




//! Enviar formulario

const form = document.querySelector("form");
const submitBtn = document.querySelector(".btn-enviar");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.reset(); // Resetea el formulario
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.textContent = "Mensaje enviado!";
    submitBtn.style.display = "none"; // Oculta el botón de enviar
    form.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
        submitBtn.style.display = "block";
    }, 2000);
});






//! reset progress - scroll


const skills = document.querySelector('#skills');
const elementIds = ['html', 'sass', 'bootstrap', 'javascript', 'nodejs', 'react', 'mongo', 'mysql'];

const toggleClasses = (add) => {
    elementIds.forEach((id, index) => {
        document.querySelector(`#${id}`).classList[add ? 'add' : 'remove'](`barra-progreso${index + 1}`);
    });
};

const detectarScroll = () => {
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    toggleClasses(distancia_skills <= 200);
};

const detectarScroll2 = () => {
    const distancia_skills = window.innerHeight + skills.getBoundingClientRect().top;
    toggleClasses(distancia_skills >= 200);
};

window.addEventListener('scroll', () => {
    const previusScroll = 0;
    const skillPosition = skills.getBoundingClientRect().top;

    if (skillPosition > previusScroll) {
        detectarScroll();
    } else {
        detectarScroll2();
    }

});




//! Descargar CV

const downloadBtn = document.querySelector('#download-cv');


const downloadCV = () => {
    const link = document.createElement('a');
    link.click();
};
downloadBtn.addEventListener('click', downloadCV);























