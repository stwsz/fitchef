// Imports
import validator from "https://cdn.skypack.dev/validator";

// Item search validation
const searchItem = document.getElementById('search-item');
const inputSearchItem = document.getElementById('input-search-item');
const errorText = document.getElementById('error-text');

searchItem.addEventListener('click', (e) => {
    const value = inputSearchItem.value.trim();

    if (!validator.isEmpty(value)) {
        inputSearchItem.classList.remove('error-input');
        errorText.style.display = 'none';
        localStorage.setItem("searched-item", JSON.stringify(value));
    } else {
        e.preventDefault();
        inputSearchItem.classList.add('error-input');
        errorText.style.display = 'block';
    }
});