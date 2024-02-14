const container = document.querySelector('.container');
const input = document.querySelector('[type="text"]');
const button = document.querySelector(".btn-add");
const ulVacio = document.querySelector('.li-container ul');
const emptyDiv = document.querySelector('.empty');
const tareas = []; 

button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue.length > 0) {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = inputValue;
        ulVacio.appendChild(nuevaTarea);
        input.value = '';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar tarea';
        emptyDiv.remove();
        tareas.push(inputValue)
        deleteButton.addEventListener('click', () => {
            nuevaTarea.remove();
            deleteButton.remove();
        });
        nuevaTarea.appendChild(deleteButton);
        if (tareas.length >= 1) {
            emptyDiv.remove();
        }
    }});