// 
const diets = document.getElementsByClassName('diets-items');

for (const diet of diets) {
    diet.addEventListener('click', () => {
        localStorage.setItem("diet", diet.getAttribute('id'));
    });
}
