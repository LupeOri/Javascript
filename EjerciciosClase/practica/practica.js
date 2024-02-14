const ol$$ = document.getElementById("chuck-jokes");
const baseUrl = "https://api.chucknorris.io/jokes/random";

const getJokes = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const joke = data.value;
        return joke;
    } catch (error) {
        console.log('No es posible mostrar el chiste:', error); 
    }
};

const jokesList = async () => {
    const jokesNumber = 10;
    try {
        for (let i = 0; i < jokesNumber; i++) {
            const aleatoryJoke = await getJokes(); 
            const li$$ = document.createElement('li');
            li$$.textContent = aleatoryJoke;
            ol$$.append(li$$);
        }
    } catch (error) {
        console.log('Error al obtener los chistes:', error);
    }
};

jokesList();