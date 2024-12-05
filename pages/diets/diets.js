// 
const diets = document.getElementsByClassName('diets-items');

for (const diet of diets) {
    diet.addEventListener('click', () => {
        localStorage.setItem("diet", diet.getAttribute('id'));
    });
}

// Dark theme
let darkMode = JSON.parse(localStorage.getItem("dark-mode"));
const logos = document.getElementsByClassName('logo');

if (darkMode) {
    document.body.classList.add("alternate-theme");

    document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/white-icons/light-mode-icon.png');
    signClick.setAttribute('src', './../../assets/images/icons/white-icons/sign-white-icon.png');
        
    for (const logo of logos) {
        logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-white.png');
    }
} else {
    document.body.classList.add("default-theme");

    document.body.classList.remove("alternate-theme");
    document.body.classList.add("default-theme");

    document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/green-icons/dark-mode-icon.png');
    signClick.setAttribute('src', './../../assets/images/icons/green-icons/sign-green-icon.png');

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
        signClick.setAttribute('src', './assets/images/icons/white-icons/sign-white-icon.png');
        
        for (const logo of logos) {
            logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-white.png');
        }
    } else {
        document.body.classList.remove("alternate-theme");
        document.body.classList.add("default-theme");

        document.getElementById('toggle-theme').setAttribute('src', './../../assets/images/icons/green-icons/dark-mode-icon.png');
        signClick.setAttribute('src', './../../assets/images/icons/green-icons/sign-green-icon.png');

        for (const logo of logos) {
            logo.setAttribute('src', './../../assets/images/logos/fitchef-logo-green.png');
        }
    }
});