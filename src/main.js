const dataPokemon = window.POKEMON.pokemon;

//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');
// const returnButton = document.getElementById('return-button');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');



//Function that hide section with id
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};


//Functionability for help button and close button
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions);

//Return button

const goBack = document.getElementById('return-button');

const goback = () => {
    hideSection('dataPokemon');
    hideSection('Pokedex');

    hideSection('sorta-z');
    hideSection('filtermenu');
    showSection('PaginaInicio');
};

goBack.addEventListener("click", goback);



//Pokedex section
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');

    showSection('filtermenu');
    showSection('dataPokemon');
    showSection('Pokedex');
};

AllPokemon.addEventListener("click", openPokedex);



// Show data HTMl //
//Data

const baseData = window.POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = (baseData) => {
    let str = '';
    baseData.forEach(element => {
        str +=
            `<div class="Pokedex">
        <div class= "card">
        
        <p1>ID.${element.num}</p1>
       
        <div class="img">
        <img src="${element.img}"></img>
        </div>
        
        <div class="info">
        <p>${element.name}</p>
        
         <p2>Tipo:${element.type}</p2>
        </div>
        </div>
        </div>`;

    });

    card.innerHTML = str;
};
cardData(baseData);


// sección para segundo filtro por tipo de pokémon //

// const button = document.getElementsByClassName('buttonType'); //Esta variable se manda llamar por la clase que tiene cada uno de los botones//
// console.log(button);

// const targetPok = (event) => {
//     const pokeId = event.target.id; //Como todos los botones tienen la misma clase, lo que hace ésta función es buscar el id del tipo de pokémon que el usuario quiere buscar//
//     const typesPok = baseData.filter((el) => el.type.find(tipo => tipo === pokeId)); //el=elemento que irá recorriendo y/o buscando dentro del arreglo 'type' el valor de 'Grass'//
//     if (pokeId == 'return') {
//         cardData(baseData);
//     } else {

//         console.log(typesPok);
//         cardData(typesPok);
//     }
// };

// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', targetPok); //Lo que hace el for es que de todos los botones que tengan esta clase, buscará el id//

// }






//Filter by type 

const button = document.getElementsByClassName('buttonType'); //Esta variable se manda llamar por la clase que tiene cada uno de los botones//
console.log(button);
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        //const targetPok = (event) => {
        const pokeId = event.target.id; //Como todos los botones tienen la misma clase, lo que hace ésta función es buscar el id del tipo de pokémon que el usuario quiere buscar//
        const typesPok = baseData.filter((el) => el.type.find(tipo => tipo === pokeId)); //el=elemento que irá recorriendo y/o buscando dentro del arreglo 'type' el valor de 'Grass'//
        if (pokeId == 'return') {
            cardData(baseData);
        } else {

            console.log(typesPok);
            cardData(typesPok);
        }
    });
}

// Filter A-Z Z-A//


orderNameAsc.addEventListener('click', () => { /*  Ordenado ascendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'ASC'));
});
orderNameDes.addEventListener('click', () => { /* Ordenado descendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'DESC'));
});