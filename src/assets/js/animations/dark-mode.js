const $html = document.querySelector('html')
const $btnDarkMode = document.querySelector('#btn-dark-mode')

function darkMode(initializing) {

    if (initializing) {

        $html.classList.toggle('dark-mode')

        $btnDarkMode.classList.toggle('mdi-lightbulb-on-outline')
        $btnDarkMode.classList.add('mdi-lightbulb-off-outline')

    } else {

        $html.classList.toggle('dark-mode')

        $btnDarkMode.classList.toggle('mdi-lightbulb-on-outline')
        $btnDarkMode.classList.add('mdi-lightbulb-off-outline')

        if ($html.classList.contains('dark-mode')) {
            localStorage['dark-mode'] = 'on'
        } else {
            localStorage['dark-mode'] = 'off'
        }
    }
}

function checkDarkMode() {
    if (localStorage['dark-mode'] == 'on') {
        darkMode(true)
    }
}

checkDarkMode()