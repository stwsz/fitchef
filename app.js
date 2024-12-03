// Opening a language menu
let languageOpen = false;
const languageClick = document.getElementById('language-click');
const languageUl = document.getElementById('language-ul');

languageUl.style.display = 'none';

languageClick.addEventListener('click', () => {
    if ((languageUl.style.display === 'none' || languageUl.style.display === '') && !languageOpen) {
        languageUl.style.display = 'flex';
        languageOpen = true;
        
        // Close the sign menu if it's open
        if (signOpen) {
            signUl.style.display = 'none';
            signOpen = false;
        }
    } else {
        languageUl.style.display = 'none';
        languageOpen = false;
    }
});

// Opening a login/registration menu
let signOpen = false;
const signClick = document.getElementById('sign-click');
const signUl = document.getElementById('sign-ul');

signUl.style.display = 'none';

signClick.addEventListener('click', () => {
    if ((signUl.style.display === 'none' || signUl.style.display === '') && !signOpen) {
        signUl.style.display = 'flex';
        signOpen = true;

        if (languageOpen) {
            languageUl.style.display = 'none';
            languageOpen = false;
        }
    } else {
        signUl.style.display = 'none';
        signOpen = false;
    }
});