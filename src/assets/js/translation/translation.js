

function translation() {

    $flagIdioma.src = 'https://www.flaticon.com/svg/static/icons/svg/197/197484.svg'

    //----------- Menu Links -----------
    $navAbout.innerHTML = `About <i class="mdi mdi-chevron-down"></i>`;
    $navAbout.title = 'About';

    $navMe.innerHTML = "Me";
    $navMe.title = "Me";

    $navSkills.innerHTML = "Skills";
    $navSkills.title = "Skills";

    $navServices.innerHTML = "Services";
    $navServices.title = "Services";

    $navExperience.innerHTML = "Experience";
    $navExperience.title = "Experience";

    $navPortfolio.innerHTML = "Portfolio";
    $navPortfolio.title = "Portfolio";

    $navContact.innerHTML = "Contact";
    $navContact.title = "Contact";

    $btnDark.title = "Dark Mode";
    $btnLanguage.title = "Language";


    //----------- Modal Language -----------
    $languageModalLabel.innerHTML = "Select Language";
    $infoTranslation.innerHTML = "Translation to the selected language may have some errors. I'm already working on it."

    //----------- Header -----------
    $headerTitle.innerHTML = `I'm Guilherme Bathist<span>.</span>`;
    $headerDesc.innerHTML = "My website is still under development, but you can check out some of my work!";$btnHeader.innerHTML = "See more";

    //----------- Portfolio -----------
    $portfolioTitle.innerHTML = `Portfolio<span>.</span>`;
    $portfolioDesc.innerHTML = "Check out some of my works and projects";

    $pc.title = "Commercial project";
    $pp.title = "Personal project";

    $descHabiens.innerHTML = "Responsive design for Website, Backoffice and Android and IOS Application.";
    $descCdv.innerHTML = "Responsive system for Web, Brand Visual Identity and Social Media.";
    $descNeo.innerHTML = "Personal Landing Page project for Design and Marketing Agencies.";
    $descTac.innerHTML = "Layout for Landing Page, Backoffice and App, and Social Media.";
    $descBlb.innerHTML = "Responsive Ecommerce for Web and Brand Visual Identity.";
    
    for (const key of $btnPortfolio) {
        key.innerHTML = "Preview"
    }

}