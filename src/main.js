//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');
const returnButton = document.getElementById('return-button');
const orderNameAsc = document.getElementById('ordsname-a');
const orderNameDes = document.getElementById('ordsname-d');
const dataPokemon = window.POKEMON.pokemon;


//Function that hide section with id
const hideSection = (id) => {
        document.getElementById(id).classList.add('hide');
    }
    //Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
}


//Functionability for help button and close button
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions)

//Return button

const goBack = document.getElementById('return-button');

const goback = () => {
    hideSection('dataPokemon');
    hideSection('tipos-Pokemon');
    hideSection('sorta-z');
    showSection('PaginaInicio');
}

goBack.addEventListener("click", goback);



//Pokedex section
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');
    hideSection('type-pokemon');
    showSection('tipos-Pokemon');
    showSection('sorta-z');
    showSection('dataPokemon');
    showSection('Pokedex');
}

AllPokemon.addEventListener("click", openPokedex);



// Show data HTMl //
//Data

const baseData = POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = () => {
    let str = ''
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
        </div>`

    });

    card.innerHTML = str
};
cardData(baseData)

// Filter A-Z Z-A//


orderNameAsc.addEventListener('click', () => { /*  Ordenado ascendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'ASC'));
});
orderNameDes.addEventListener('click', () => { /* Ordenado descendente por nombre*/
    cardData(sorData(dataPokemon, 'name', 'DESC'));
});



// sección para segundo filtro por tipo de pokémon //