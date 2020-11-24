

const $flagIdioma = document.querySelector('#flagIdioma')


// Menu Links
const $navAbout = document.querySelector('#navAbout')
const $navMe = document.querySelector('#navMe')
const $navSkills = document.querySelector('#navSkills')
const $navServices = document.querySelector('#navServices')
const $navExperience = document.querySelector('#navExperience')
const $navPortfolio = document.querySelector('#navPortfolio')
const $navContact = document.querySelector('#navContact')

const $btnDark = document.querySelector('#btnDark')
const $btnLanguage = document.querySelector('#btnLanguage')

// Modal Language
const $languageModalLabel = document.querySelector('#languageModalLabel')
const $infoTranslation = document.querySelector('#infoTranslation')

//Header
const $headerTitle = document.querySelector('#headerTitle')
const $headerDesc = document.querySelector('#headerDesc')

//Portfolio
const $portfolioTitle = document.querySelector('#portfolioTitle')
const $portfolioDesc = document.querySelector('#portfolioDesc')

const $pc = document.querySelector('#pc')
const $pp = document.querySelector('#pp')

const $descHabiens = document.querySelector('#descHabiens')
const $descCdv = document.querySelector('#descCdv')
const $descNeo = document.querySelector('#descNeo')
const $descTac = document.querySelector('#descTac')
const $descBlb = document.querySelector('#descBlb')

const $btnPortfolio = document.querySelectorAll('#btnPortfolio')


function traduccion() {

    $flagIdioma.src = 'https://www.flaticon.com/svg/static/icons/svg/197/197593.svg'

    //----------- Menu Links -----------
    $navAbout.innerHTML = `Sobre <i class="mdi mdi-chevron-down"></i>`;
    $navAbout.title = `Sobre`;

    $navMe.innerHTML = "Mi";
    $navMe.title = "Mi";

    $navSkills.innerHTML = "Skills";
    $navSkills.title = "Skills";

    $navServices.innerHTML = "Servicios";
    $navServices.title = "Servicios";

    $navExperience.innerHTML = "Experiencia";
    $navExperience.title = "Experiencia";

    $navPortfolio.innerHTML = "Portafolio";
    $navPortfolio.title = "Portafolio";
    
    $navContact.innerHTML = "Contacto";
    $navContact.title = "Contacto";

    $btnDark.title = "Modo oscuro";
    $btnLanguage.title = "Idioma";
    
    //----------- Modal Language -----------
    $languageModalLabel.innerHTML = "Seleccione el idioma";
    $infoTranslation.innerHTML = "La traducción al idioma seleccionado puede tener algunos errores. Ya estoy trabajando en eso."

    //----------- Header -----------
    $headerTitle.innerHTML = "Soy Guilherme Bathist.";
    $headerDesc.innerHTML = "Mi Website aún está en desarrollo, ¡pero puedes ver algunos de mis trabajos!";
    
    //----------- Portfolio -----------
    $portfolioTitle.innerHTML = `Portafolio<span>.</span>`;
    $portfolioDesc.innerHTML = "Mira algunos de mis trabajos y proyectos";

    $pc.title = "Proyecto comercial";
    $pp.title = "Proyecto personal";

    $descHabiens.innerHTML = "Design responsive para sitio web, backoffice y aplicación Android e IOS.";
    $descCdv.innerHTML = "Sistema Responsive para Web, Identidad Visual de Marca y Social Media.";
    $descNeo.innerHTML = "Proyecto personal de Landing Page para agencias de design y marketing.";
    $descTac.innerHTML = "Layout para Landing Page, Backoffice y Aplicación, y Redes Sociales.";
    $descBlb.innerHTML = "Ecommerce responsive para identidad visual web y de marca.";

    for (const key of $btnPortfolio) {
        key.innerHTML = "Para ver"
    }
    
}

