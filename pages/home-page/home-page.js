import { homePageBr } from "./../../languages/home-page/home-page-pt";

console.log(homePageBr);

// Opening a language menu
const languageClick = document.getElementById('language-click');
const languageUl = document.getElementById('language-ul');

languageClick.addEventListener('click', () => {
    if (languageUl.style.display === 'none' || languageUl.style.display === '') {
        languageUl.style.display = 'flex';
    } else {
        languageUl.style.display = 'none';
    }
});

// Opening a login/registration menu
const signClick = document.getElementById('sign-click');
const signUl = document.getElementById('sign-ul');

signClick.addEventListener('click', () => {
    if (signUl.style.display === 'none' || signUl.style.display === '') {
        signUl.style.display = 'flex';
    } else {
        signUl.style.display = 'none';
    }
});
