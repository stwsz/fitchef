// Pick up searched item
const storedItem = JSON.parse(localStorage.getItem('searched-item'));
const textItem = document.getElementById('text-item');

document.title = `Receitas com ${storedItem}`;

const textSplit = storedItem.split('');
const storedItemCapitalized = textSplit[0].toUpperCase() + textSplit.slice(1).join('');

if (storedItem[storedItem.length - 1].toLowerCase() === 's') {
    textItem.innerHTML = `<span>${storedItemCapitalized}</span> estão presentes nas seguintes receitas:`;
} else {
    textItem.innerHTML = `<span>${storedItemCapitalized}</span> está presente nas seguintes receitas:`;
}


