const baseUrl = 'http://localhost:3000/characters';
const divCharacters = document.querySelector('[data-function="characters"]');
const avatarsSelected = [];

const getData = async () =>{
    const response = await fetch(url);
    if (!response.ok){
       throw new Error('Error al obtener los datos');
    }
    return response.json();
 }

 function selectingAvatars(){
    const personajes = getData(baseUrl); 
    for (let personaje of personajes){
        const avatarDiv = document.createElement('div');
        const avatarName = document.createElement('p');
        avatarName.textContent = personaje.name;
        const img = document.createElement('img');
        img.src = personaje.name;
        img.alt = personaje.id;
        const estadistics = document.createElement('p');
        estadistics.textContent = personaje.demage.join(", ");
        avatarDiv.appendChild(avatarName);
        avatarDiv.appendChild(img);
        avatarDiv.appendChild(estadistics);

        avatarDiv.addEventListener('click', ()=>{
            if(avatarsSelected.length <= 1 && !avatarsSelected.includes(personaje)){
                avatarsSelected.push(personaje);
            }
            if(avatarsSelected.length === 2){
                const startMsj = document.createElement('p');
                startMsj.className = 'startMsj';
                startMsj.textContent = 'Ya tienes tus dos Avatars, es hora de comenzar! Presiona START aqui abajo ↓';
                document.body.appendChild(startMsj);
            }
        }) 
        const startButton = document.createElement('button').textContent('START GAME').addEventListener('click', ()=>{

        })
    }
}