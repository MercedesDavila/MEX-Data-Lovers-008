// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


//const example = () => {
//return 'example';
//};

//window.example = example;


// Filter A-Z Y  Z-A
// Función para ordenar los pokemones por nombre 

const sorData = (dataPokemon, sortBy, sortOrder) => {
    let pokemonOrder = [];
    switch (sortOrder) {
        case 'ASC': //  Ordenar de manera ascedente 
            if (sortBy === 'name') {
                pokemonOrder = dataPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
            }
            break;

        case 'DESC': // Ordenar de manera descendente
            if (sortBy === 'name') {
                pokemonOrder = dataPokemon.sort((a, b) => (a.name < b.name ? 1 : -1));
            }
            break;

    }
    return pokemonOrder;
};

window.sorData = sorData;