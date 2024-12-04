//
const vegetarian = {
    title: 'Dieta Vegetariana',
    breakfast: [
        '1 copo de suco de laranja natural ou água com limão',
        '2 fatias de pão integral com pasta de abacate',
        '1 porção de frutas frescas',
        '1 colher de sopa de sementes de chia ou linhaça'
    ],
    lunch: [
        'Salada colorida com folhas verdes, tomate, cenoura ralada, beterraba e sementes de girassol',
        '1 concha de feijão preto ou lentilha',
        '1 porção de arroz integral ou quinoa',
        'Legumes assados',
        'Tofu grelhado ou grão-de-bico assado como fonte de proteína'
    ],
    dinner: [
        'Sopa de abóbora com gengibre, acompanhada de torradas integrais',
        'Salada de quinoa com vegetais cozidos no vapor',
        '1 fatia de pão integral com guacamole ou patê de grão-de-bico'
    ],
    snack: [
        '1 iogurte vegetal',
        '1 punhado de oleaginosas',
        '1 smoothie feito com leite vegetal, banana, cacau em pó e aveia',
        '1 xícara de chá'
    ]
}
const vegan = {
    title: 'Dieta Vegana',
    breakfast: [
        '1 copo de suco de laranja natural ou água com limão',
        '2 fatias de pão integral com pasta de abacate ou homus',
        '1 porção de frutas frescas, como melancia ou morango',
        '1 colher de sopa de sementes de chia ou linhaça'
    ],
    lunch: [
        'Salada colorida com folhas verdes, tomate, cenoura ralada, beterraba e abacate',
        '1 concha de grão-de-bico ou feijão preto',
        '1 porção de arroz integral ou quinoa',
        'Legumes grelhados ou assados',
        'Tofu grelhado ou almôndega vegana'
    ],
    dinner: [
        'Sopa de abóbora com gengibre e torradas integrais',
        'Salada de quinoa com vegetais assados',
        '1 fatia de pão integral com guacamole'
    ],
    snack: [
        '1 iogurte vegetal, como de coco ou amêndoa',
        '1 punhado de castanhas ou amêndoas',
        '1 smoothie feito com leite vegetal, banana e espinafre',
        '1 xícara de chá'
    ]
};
const noLactose = {
    title: 'Dieta Sem Lactose',
    breakfast: [
        '1 copo de suco verde com couve, limão e maçã',
        '1 fatia de pão integral com geleia sem açúcar ou margarina sem lactose',
        '1 porção de frutas frescas, como uvas ou kiwi',
        '1 colher de sopa de aveia misturada com água ou bebida vegetal'
    ],
    lunch: [
        'Salada com folhas verdes, pepino, tomate e cenoura',
        '1 concha de feijão ou ervilha cozida',
        '1 porção de arroz branco ou batata-doce',
        'Legumes cozidos no vapor, como brócolis e couve-flor',
        'Frango grelhado ou peixe assado como fonte de proteína'
    ],
    dinner: [
        'Creme de abóbora com croutons integrais',
        'Omelete de claras com vegetais',
        '1 fatia de pão integral com patê de grão-de-bico ou margarina sem lactose'
    ],
    snack: [
        '1 iogurte sem lactose ou bebida vegetal',
        '1 punhado de amendoim ou castanha-de-caju',
        '1 fatia de bolo sem lactose, como bolo de cenoura',
        '1 xícara de chá de ervas'
    ]
};
const noGluten = {
    title: 'Dieta Sem Glúten',
    breakfast: [
        '1 copo de suco de melancia com hortelã',
        '2 tapiocas recheadas com pasta de amendoim ou guacamole',
        '1 porção de frutas frescas, como abacaxi ou manga',
        '1 colher de sopa de sementes de chia hidratadas em leite vegetal'
    ],
    lunch: [
        'Salada com folhas verdes, tomate, cenoura e abobrinha grelhada',
        '1 porção de arroz integral ou quinoa',
        '1 concha de feijão ou lentilha',
        'Legumes assados, como batata-doce e abóbora',
        'Peixe grelhado ou tofu defumado'
    ],
    dinner: [
        'Sopa de batata-baroa com alho-poró e croutons sem glúten',
        'Salada de grãos, como quinoa com vegetais assados',
        '1 fatia de pão sem glúten com homus ou patê de grão-de-bico'
    ],
    snack: [
        '1 iogurte vegetal ou sem glúten',
        '1 punhado de castanhas-do-pará ou nozes',
        '1 smoothie feito com leite de coco, frutas vermelhas e aveia sem glúten',
        '1 xícara de chá de gengibre ou hortelã'
    ]
};
const lowCarb = {
    title: 'Dieta Low-Carb',
    breakfast: [
        '1 café preto ou chá verde sem açúcar',
        '2 ovos mexidos com azeite e espinafre',
        '1 fatia de abacate com um fio de azeite e sal',
        '1 punhado de castanhas ou amêndoas'
    ],
    lunch: [
        'Salada verde com rúcula, alface, pepino, tomate cereja e abacate',
        '1 filé de frango grelhado ou salmão assado',
        'Legumes no vapor, como brócolis e couve-flor, temperados com azeite e alho',
        '1 porção de purê de couve-flor como substituto do arroz ou batata'
    ],
    dinner: [
        'Sopa de couve-flor ou brócolis com frango desfiado',
        'Omelete recheada com queijo low-carb e cogumelos',
        'Salada de folhas verdes com nozes e azeite'
    ],
    snack: [
        '1 fatia de queijo ou queijo cottage low-carb',
        '1 ovo cozido com temperos a gosto',
        '1 fatia de abacate com limão e pimenta',
        '1 xícara de chá de camomila ou erva-cidreira'
    ]
};

//
const chosedDiet = localStorage.getItem("diet");

const titleDiet = document.getElementById('title-diet');

const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const snack = document.getElementById('snack');



if (chosedDiet === 'vegetarian') {
    titleDiet.innerText = `${vegetarian.title}`;
    document.title = `${vegetarian.title} - FitChef`;
    
    vegetarian.breakfast.forEach((itemDiet) => {
        let breakfastItem = document.createElement('li');
        breakfastItem.innerText = `${itemDiet}`;

        breakfast.appendChild(breakfastItem);
    });

    vegetarian.lunch.forEach((itemDiet) => {
        let lunchItem = document.createElement('li');
        lunchItem.innerText = `${itemDiet}`;

        lunch.appendChild(lunchItem);
    });

    vegetarian.dinner.forEach((itemDiet) => {
        let dinnerItem = document.createElement('li');
        dinnerItem.innerText = `${itemDiet}`;

        dinner.appendChild(dinnerItem);
    });

    vegetarian.snack.forEach((itemDiet) => {
        let snackItem = document.createElement('li');
        snackItem.innerText = `${itemDiet}`;

        snack.appendChild(snackItem);
    });
} else if (chosedDiet === 'vegan') {
    titleDiet.innerText = `${vegan.title}`;
    document.title = `${vegan.title} - FitChef`;

    vegan.breakfast.forEach((itemDiet) => {
        let breakfastItem = document.createElement('li');
        breakfastItem.innerText = `${itemDiet}`;

        breakfast.appendChild(breakfastItem);
    });

    vegan.lunch.forEach((itemDiet) => {
        let lunchItem = document.createElement('li');
        lunchItem.innerText = `${itemDiet}`;

        lunch.appendChild(lunchItem);
    });

    vegan.dinner.forEach((itemDiet) => {
        let dinnerItem = document.createElement('li');
        dinnerItem.innerText = `${itemDiet}`;

        dinner.appendChild(dinnerItem);
    });

    vegan.snack.forEach((itemDiet) => {
        let snackItem = document.createElement('li');
        snackItem.innerText = `${itemDiet}`;

        snack.appendChild(snackItem);
    });
} else if (chosedDiet === 'no-lactose') {
    titleDiet.innerText = `${noLactose.title}`;
    document.title = `${noLactose.title} - FitChef`;

    noLactose.breakfast.forEach((itemDiet) => {
        let breakfastItem = document.createElement('li');
        breakfastItem.innerText = `${itemDiet}`;

        breakfast.appendChild(breakfastItem);
    });

    noLactose.lunch.forEach((itemDiet) => {
        let lunchItem = document.createElement('li');
        lunchItem.innerText = `${itemDiet}`;

        lunch.appendChild(lunchItem);
    });

    noLactose.dinner.forEach((itemDiet) => {
        let dinnerItem = document.createElement('li');
        dinnerItem.innerText = `${itemDiet}`;

        dinner.appendChild(dinnerItem);
    });

    noLactose.snack.forEach((itemDiet) => {
        let snackItem = document.createElement('li');
        snackItem.innerText = `${itemDiet}`;

        snack.appendChild(snackItem);
    });
} else if (chosedDiet === 'no-gluten') {
    titleDiet.innerText = `${noGluten.title}`;
    document.title = `${noGluten.title} - FitChef`;

    noGluten.breakfast.forEach((itemDiet) => {
        let breakfastItem = document.createElement('li');
        breakfastItem.innerText = `${itemDiet}`;

        breakfast.appendChild(breakfastItem);
    });

    noGluten.lunch.forEach((itemDiet) => {
        let lunchItem = document.createElement('li');
        lunchItem.innerText = `${itemDiet}`;

        lunch.appendChild(lunchItem);
    });

    noGluten.dinner.forEach((itemDiet) => {
        let dinnerItem = document.createElement('li');
        dinnerItem.innerText = `${itemDiet}`;

        dinner.appendChild(dinnerItem);
    });

    noGluten.snack.forEach((itemDiet) => {
        let snackItem = document.createElement('li');
        snackItem.innerText = `${itemDiet}`;

        snack.appendChild(snackItem);
    });
} else {
    titleDiet.innerText = `${lowCarb.title}`;
    document.title = `${lowCarb.title} - FitChef`;

    lowCarb.breakfast.forEach((itemDiet) => {
        let breakfastItem = document.createElement('li');
        breakfastItem.innerText = `${itemDiet}`;

        breakfast.appendChild(breakfastItem);
    });

    lowCarb.lunch.forEach((itemDiet) => {
        let lunchItem = document.createElement('li');
        lunchItem.innerText = `${itemDiet}`;

        lunch.appendChild(lunchItem);
    });

    lowCarb.dinner.forEach((itemDiet) => {
        let dinnerItem = document.createElement('li');
        dinnerItem.innerText = `${itemDiet}`;

        dinner.appendChild(dinnerItem);
    });

    lowCarb.snack.forEach((itemDiet) => {
        let snackItem = document.createElement('li');
        snackItem.innerText = `${itemDiet}`;

        snack.appendChild(snackItem);
    });
}


