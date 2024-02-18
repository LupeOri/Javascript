const baseUrl = 'http://localhost:3000/diary';
const fetchUrl = async() => {
    try{
        const response = await fetch(baseUrl);
        const data = await response.json();
        const processedData = dataProcessor(data);
        createElements(processedData);
    } catch(error){
        console.log(error);
    }
};

function dataProcessor(data){
    return data.sort((a, b) => new Date(a.date) - new Date(b.date));
}
function createElements(processedData){
    for (const dataElement of processedData){
        const div$$ = document.createElement('div');
        const title$$ = document.createElement('h3');
        title$$.textContent = dataElement.title;
        const date$$ = document.createElement('h5');
        date$$.textContent = dataElement.date;
        const description$$ = document.createElement('p');
        description$$.textContent = dataElement.description;
        div$$.appendChild(title$$);
        div$$.appendChild(date$$);
        div$$.appendChild(description$$);
        document.body.appendChild(div$$);
        const button$$ = document.createElement('button');
        button$$.textContent = 'X'
        button$$.addEventListener('click', ()=>{
            div$$.remove();
            button$$.remove();
        })
        div$$.appendChild(button$$);

    }
}

fetchUrl();


