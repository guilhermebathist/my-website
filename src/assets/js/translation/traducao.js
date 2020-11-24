

function traducao() {

    $flagIdioma.src = 'https://www.flaticon.com/svg/static/icons/svg/197/197386.svg'

    //----------- Menu Links -----------
    $navAbout.innerHTML = `Sobre <i class="mdi mdi-chevron-down"></i>`;
    $navAbout.title = `Sobre`;

    $navMe.innerHTML = "Mim";
    $navMe.title = "Mim";

    $navSkills.innerHTML = "Skills";
    $navSkills.title = "Skills";

    $navServices.innerHTML = "Serviços";
    $navServices.title = "Serviços";

    $navExperience.innerHTML = "Experiência";
    $navExperience.title = "Experiência";

    $navPortfolio.innerHTML = "Portfólio";
    $navPortfolio.title = "Portfólio";

    $navContact.innerHTML = "Contato";
    $navContact.title = "Contato";


    $btnDark.title = "Modo escuro";
    $btnLanguage.title = "Idioma";

    //----------- Modal Language -----------
    $languageModalLabel.innerHTML = "Selecionar idioma";
    $infoTranslation.innerHTML = "A tradução para o idioma selecionado pode haver alguns erros. Eu já estou trabalhando nisso."

    //----------- Header -----------
    $headerTitle.innerHTML = "Eu sou Guilherme Bathist.";
    $headerDesc.innerHTML = "Meu Website ainda está em desenvolvimento, mas você já pode conferir um pouco do meu trabalho!";

    //----------- Portfolio -----------
    $portfolioTitle.innerHTML = `Portfólio<span>.</span>`;
    $portfolioDesc.innerHTML = "Confira alguns dos meus trabalhos e projetos";

    $pc.title = "Projeto Comercial";
    $pp.title = "Proeto Pessoal";

    $descHabiens.innerHTML = "Projeto responsivo para Site, Backoffice e Aplicativo Android e IOS.";
    $descCdv.innerHTML = "Sistema responsivo para Web, Identidade Visual da Marca e Social Media.";
    $descNeo.innerHTML = "Projeto pessoal de Landing Page para Agências de Design e Marketing.";
    $descTac.innerHTML = "Layout para Landing Page, Backoffice e Aplicativo, e Social Midia.";
    $descBlb.innerHTML = "Ecommerce responsivo para Web e Identidade Visual da Marca.";
    
    for (const key of $btnPortfolio) {
        key.innerHTML = "Visualizar"
    }
    
}