// Opening a language menu
let languageOpen = false;
const languageClick = document.getElementById('language-click');
const languageUl = document.getElementById('language-ul');

languageUl.style.display = 'none';

languageClick.addEventListener('click', () => {
    if ((languageUl.style.display === 'none' || languageUl.style.display === '') && !languageOpen) {
        languageUl.style.display = 'flex';
        languageOpen = true;
        
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

// Logic of add recept modal
const buttonAddRecept = document.getElementById('add-recept');
const modalAddRecept = document.getElementById('modal-add-recept');
const closeRecept = document.querySelector('#modal-add-recept > div div:first-child img');

buttonAddRecept.addEventListener('click', () => {
    modalAddRecept.style.display = 'flex';
});

closeRecept.addEventListener('click', () => {
    modalAddRecept.style.display = 'none';
});

const recept = {
    title: '',
    items: [],
    howToPrepare: []
}

const buttonModal = document.getElementById('button-modal');
const dynamicContent = document.getElementById('input-recept');
const dynamicText = document.querySelector('#input-recept p');
const inputModal = document.querySelector('#input-recept input');
const modalDynamic = document.querySelector('#modal-add-recept div');

buttonModal.addEventListener('click', (e) => {
    if (inputModal.value.length !== 0) {
        recept.title = inputModal.value;

        dynamicContent.innerHTML = `
            <p>Quantos itens você deseja usar na sua receita?</p>

            <input type="number" id="second-input">
        `;

        buttonModal.remove();

        const secondButtonModal = document.createElement('button');
        secondButtonModal.textContent = 'Próximo passo';
        secondButtonModal.setAttribute("id", "second-button-modal");
        modalDynamic.appendChild(secondButtonModal);

        secondButtonModal.addEventListener('click', () => {
            const secondInput = document.getElementById('second-input');

            dynamicContent.innerText = '';

            dynamicContent.style.overflowY = 'scroll';
            dynamicContent.style.overflowX = 'none';
            dynamicContent.style.width = '95%';
            dynamicContent.style.margin = '2rem 0';
            dynamicContent.style.padding = '0.5rem 0';

            for (let i = 0; i < secondInput.value; i++) {
                dynamicContent.innerHTML += `
                    <div class="third-modal-infos">
                        <div>
                            <p>${i + 1}</p>

                            <input type="text" style="width: 70%;">
                        </div>

                        <div>
                            <p>Quantidade</p>

                            <input type="text" style="width: 70%;">
                        </div>
                    </div>
                `;
            }
        });   
    } else {
        e.preventDefault();
    }
});

// Dark theme
let darkMode = JSON.parse(localStorage.getItem("dark-mode"));
const logos = document.getElementsByClassName('logo');

if (darkMode) {
    document.body.classList.add("alternate-theme");

    document.getElementById('toggle-theme').setAttribute('src', './assets/images/icons/white-icons/light-mode-icon.png');
    signClick.setAttribute('src', './assets/images/icons/white-icons/sign-white-icon.png');
    closeRecept.setAttribute('src', './assets/images/icons/white-icons/close-white-icon.png');
        
    for (const logo of logos) {
        logo.setAttribute('src', './assets/images/logos/fitchef-logo-white.png');
    }
} else {
    document.body.classList.add("default-theme");

    document.body.classList.remove("alternate-theme");
    document.body.classList.add("default-theme");

    document.getElementById('toggle-theme').setAttribute('src', './assets/images/icons/green-icons/dark-mode-icon.png');
    signClick.setAttribute('src', './assets/images/icons/green-icons/sign-green-icon.png');
    closeRecept.setAttribute('src', './assets/images/icons/green-icons/close-green-icon.png');

    for (const logo of logos) {
        logo.setAttribute('src', './assets/images/logos/fitchef-logo-green.png');
    }
}

document.getElementById("toggle-theme").addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));

    if (darkMode) {
        document.body.classList.remove("default-theme");
        document.body.classList.add("alternate-theme");

        document.getElementById('toggle-theme').setAttribute('src', './assets/images/icons/white-icons/light-mode-icon.png');
        signClick.setAttribute('src', './assets/images/icons/white-icons/sign-white-icon.png');
        closeRecept.setAttribute('src', './assets/images/icons/white-icons/close-white-icon.png');
        
        for (const logo of logos) {
            logo.setAttribute('src', './assets/images/logos/fitchef-logo-white.png');
        }
    } else {
        document.body.classList.remove("alternate-theme");
        document.body.classList.add("default-theme");

        document.getElementById('toggle-theme').setAttribute('src', './assets/images/icons/green-icons/dark-mode-icon.png');
        signClick.setAttribute('src', './assets/images/icons/green-icons/sign-green-icon.png');
        closeRecept.setAttribute('src', './assets/images/icons/green-icons/close-green-icon.png');

        for (const logo of logos) {
            logo.setAttribute('src', './assets/images/logos/fitchef-logo-green.png');
        }
    }
});

