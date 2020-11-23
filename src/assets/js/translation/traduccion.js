

const $flagIdioma = document.querySelector('#flagIdioma')


// Menu Links
const $navAbout = document.querySelector('#navAbout')
const $navMe = document.querySelector('#navMe')
const $navSkills = document.querySelector('#navSkills')
const $navServices = document.querySelector('#navServices')
const $navExperience = document.querySelector('#navExperience')
const $navPortfolio = document.querySelector('#navPortfolio')
const $navContact = document.querySelector('#navContact')

// Modal Language
const $languageModalLabel = document.querySelector('#languageModalLabel')
const $infoTranslation = document.querySelector('#infoTranslation')

//Header
const $headerTitle = document.querySelector('#headerTitle')
const $headerDesc = document.querySelector('#headerDesc')


function traduccion() {

    $flagIdioma.src = 'https://www.flaticon.com/svg/static/icons/svg/197/197593.svg'

    //Menu Links
    $navAbout.innerHTML = `Sobre <i class="mdi mdi-chevron-down"></i>`;
    $navMe.innerHTML = "Mi";
    $navSkills.innerHTML = "Skills";
    $navServices.innerHTML = "Servicios";
    $navExperience.innerHTML = "Experiencia";
    $navPortfolio.innerHTML = "Portafolio";
    $navContact.innerHTML = "Contacto";
    
    //Modal Language
    $infoTranslation.innerHTML = "La traducción al idioma seleccionado puede tener algunos errores. Ya estoy trabajando en eso."

    // Header
    $headerTitle.innerHTML = "Soy Guilherme Bathist.";
    $headerDesc.innerHTML = "Mi Website aún está en desarrollo, ¡pero puedes ver algunos de mis trabajos!";
    
}

