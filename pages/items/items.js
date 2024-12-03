// 
const items = document.getElementsByClassName('itens');

for (const item of items) {
    item.addEventListener('click', () => {
        localStorage.setItem("searched-item", JSON.stringify(item.getAttribute('id')));
    })
}