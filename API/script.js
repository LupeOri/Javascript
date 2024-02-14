const main$$ = document.querySelector(".main");
// console.log(main$$);
const getCharacters = async () => {
  //  fetch("https://starwars-server.vercel.app/characters")
  //  .then((response)=>response.json())
  //  .then((results)=> console.log(results))
  try {
    const response = await fetch(
      "https://starwars-server.vercel.app/characters"
    );
    const results = await response.json();
    // const {data} = await response.json();

    // console.log(data);
    return results.data.characters;
  } catch (error) {
    console.log(error);
  }
};
const mapCharacters = (charactersSinMapear) => {
  // console.log("funcion map",charactersSinMapear);
  // const charactersMapeados = charactersSinMapear.map((character)=> ({
  //    nombre: character.name,
  //    imagen: character.image,
  //    rol: character.role
  // }))
  // return charactersMapeados

  return charactersSinMapear.map((character) => ({
    nombre: character.name,
    imagen: character.image,
    rol: character.role,
  }));
};
const drawCharacters = (characters) => {
   main$$.innerHTML = "";
  // console.log("funcion draw",characters);
  for (const character of characters) {
    // console.log(character);
    // let characterDiv$$ = document.createElement("div")
    // characterDiv$$.className="main__div"
    // main$$.appendChild(characterDiv$$);

    // let h2$$ = document.createElement("h2")
    // h2$$.textContent = character.nombre
    // characterDiv$$.appendChild(h2$$)

    // let img$$ = document.createElement("img")
    // img$$.setAttribute("src", character.imagen)
    // img$$.setAttribute("alt", character.nombre)
    // characterDiv$$.appendChild(img$$)

    // let p$$ = document.createElement("p")
    // p$$.textContent= character.rol
    // characterDiv$$.appendChild(p$$)

    let characterDiv$$ = document.createElement("div");
    characterDiv$$.className = "main__div";
    characterDiv$$.innerHTML = `
    <h3>${character.nombre}</h3>
    <img src="${character.imagen}" alt="${character.nombre}">
    <p>${character.rol}</p>
    `;
    main$$.appendChild(characterDiv$$);
  }
};
const drawInput = (characters) => {
  // console.log("funcion draw",characters);
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () => {
    searchCharacters(input$$.value, characters);
  });
};
const searchCharacters = (filtro, arraySinFiltrar) => {
    // console.log("search",filtro,searchCharacters);
  let filteredCharacters = arraySinFiltrar.filter((character) =>
    character.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  drawCharacters(filteredCharacters)
  
};
const init = async () => {
  // primero le digo que espero a mi peticion que es digamos la linea importante
  const characters = await getCharacters();
  //   console.log("funcion init",characters);
  //  segundo mapeo mis personajes pasandole a la funcion nuestros characters de la linea 24
  const charactersMapeados = mapCharacters(characters);
  //   console.log("funcion init despues del map", charactersMapeados);
  // tercer lugar vamos a llamar a mi funcion pintar y le pasaremos por parametro lo que queremos que pinte
  drawCharacters(charactersMapeados);
  //   vamos a llamar la funcion draw input que me coge mi input, y va a coger a mis character mapeados que es lo que utilizara luego para filtrar
  drawInput(charactersMapeados);
};
init();
