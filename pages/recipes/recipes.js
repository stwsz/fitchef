// Logic of choosing an item
const items = document.getElementsByClassName('itens');

for (const item of items) {
    item.addEventListener('click', () => {
        localStorage.setItem("searched-item", JSON.stringify(item.getAttribute('id')));
    })
}

// Dark theme
let darkMode = JSON.parse(localStorage.getItem("dark-mode"));
const logos = document.getElementsByClassName('logo');
const iconLogin = document.getElementById('icon-login');
const iconRegister = document.getElementById('icon-register');

if (darkMode) {
    document.body.classList.add("alternate-theme");

    document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/white-icons/light-mode-icon.png');
    document.getElementById('sign-click').setAttribute('src', './../../assets/images/icons/white-icons/sign-white-icon.png');
    iconLogin.setAttribute('src', './../../assets/images/icons/white-icons/login-white-icon.png');
    iconRegister.setAttribute('src', './../../assets/images/icons/white-icons/register-white-icon.png');
        
    for (const logo of logos) {
        logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-white.png');
    }

    
} else {
    document.body.classList.add("default-theme");

    document.body.classList.remove("alternate-theme");
    document.body.classList.add("default-theme");

    document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/green-icons/dark-mode-icon.png');
    document.getElementById('sign-click').setAttribute('src', './../../assets/images/icons/green-icons/sign-green-icon.png');
    iconLogin.setAttribute('src', './../../assets/images/icons/green-icons/login-green-icon.png');
    iconRegister.setAttribute('src', './../../assets/images/icons/green-icons/register-green-icon.png');

    for (const logo of logos) {
        logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-green.png');
    }
}

document.getElementById("toggle-theme").addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));

    if (darkMode) {
        document.body.classList.remove("default-theme");
        document.body.classList.add("alternate-theme");

        document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/white-icons/light-mode-icon.png');
        document.getElementById('sign-click').setAttribute('src', './../../assets/images/icons/white-icons/sign-white-icon.png');
        iconLogin.setAttribute('src', './../../assets/images/icons/white-icons/login-white-icon.png');
        iconRegister.setAttribute('src', './../../assets/images/icons/white-icons/register-white-icon.png');

        
        for (const logo of logos) {
            logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-white.png');
        }
    } else {
        document.body.classList.remove("alternate-theme");
        document.body.classList.add("default-theme");

        document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/green-icons/dark-mode-icon.png');
        document.getElementById('sign-click').setAttribute('src', './../../assets/images/icons/green-icons/sign-green-icon.png');
        iconLogin.setAttribute('src', './../../assets/images/icons/green-icons/login-green-icon.png');
        iconRegister.setAttribute('src', './../../assets/images/icons/green-icons/register-green-icon.png');

        for (const logo of logos) {
            logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-green.png');
        }
    }
});