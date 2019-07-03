//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');
const returnButton = document.getElementById('return-button');


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

//BotonRegresar

const goBack = document.getElementById('return-button');

const goback = () => {
    hideSection('dataPokemon');
    showSection('PaginaInicio');
}

goBack.addEventListener("click", goback);



//Seccion Pokemones
const AllPokemon = document.getElementById('show-button');

const openPokedex = () => {
    hideSection('PaginaInicio');
    showSection('dataPokemon');
}

AllPokemon.addEventListener("click", openPokedex);



//Data

const baseData = POKEMON.pokemon;
const card = document.getElementById("dataPokemon");

const cardData = () => {
    let str = ''
    baseData.forEach(element => {
        str +=
            `<div class="Pokedex">
        <div class= "card">
        
        <p>Num. ${element.num}</p>
       
        <div class="img">
        <img src="${element.img}"></img>
        </div>
        
        <div class="info">
        <p>${element.name}</p>
        
         <p>${element.type}</p>
        </div>
        </div>
        </div>`

    });

    card.innerHTML = str
};
cardData()

//Filtro1-Por tipo