const body$$ = document.querySelector('body');
const baseUrl = 'https://api.thecatapi.com/v1/images/search';
const button$$ = document.createElement('button');

button$$.textContent = 'Call a cat';
button$$.addEventListener('click', () => {
    fetchCatImage();
});

function fetchCatImage() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => mostrarImagenes(data))
        .catch(error => console.log(error));
}

function mostrarImagenes(data) {
    const imgCat = data[0].url;
    const img$$ = document.createElement('img');
    img$$.src = imgCat;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        body$$.removeChild(img$$);
        body$$.removeChild(deleteButton);
    });

    body$$.appendChild(img$$);
    body$$.appendChild(deleteButton);
}

body$$.appendChild(button$$);

const baseUrlDos = 'https://api.nationalize.io/?name=lupe';

function fetchMoviesImages() {
    fetch(baseUrlDos)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
fetchMoviesImages();




    




