let tasks = [
    { id: 1, description: "Terminar el informe para la reunión de equipo.", priority: "Alta" },
    { id: 2, description: "Llamar al electricista para arreglar la luz en la cocina.", priority: "Media" },
    { id: 3, description: "Practicar guitarra el tiempo necesario.", priority: "Baja" }
];

displayTasks();

function getPriorityClass(priority) {
    switch (priority) {
        case "Alta":
            return "high";
        case "Media":
            return "medium";
        case "Baja":
            return "low";
        default:
            return "";
    }
}

function addTask() {
    const descriptionInput = document.getElementById("taskDescription");
    const prioritySelect = document.getElementById("taskPriority");

    const description = descriptionInput.value.trim();
    const priority = prioritySelect.value;

    if (description && priority !== "Seleccione" && isValidPriority(priority)) {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            priority: priority,
        };
        tasks.push(newTask);
        displayTasks();

        descriptionInput.value = "";
        prioritySelect.value = "Seleccione";
    } else {
        alert("Por favor, ingrese una descripción válida y seleccione una prioridad.");
    }
}

function isValidPriority(priority) {
    return priority === "Alta" || priority === "Media" || priority === "Baja";
}

function displayTasks() {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = "";

    tasks.forEach(task => {
        const listItem = document.createElement("li");

        const taskButton = document.createElement("button");
        taskButton.className = `button-link ${getPriorityClass(task.priority)}`;
        taskButton.innerHTML = `
            <span>${task.description} - Prioridad: ${task.priority}</span>
        `;

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.className = "button-link edit-button";
        editButton.onclick = () => editTask(task.id);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10006;"; // Símbolo X
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => deleteTask(task.id);

        listItem.appendChild(taskButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        tasksList.appendChild(listItem);
    });
}



function editTask(id) {
    const task = tasks.find(t => t.id === id);

    const listItem = document.querySelector(`#tasks-list li:nth-child(${id})`);
    const taskButton = listItem.querySelector('button');
    const editButtons = listItem.querySelector('.edit-buttons');

    const editDescriptionInput = document.createElement("input");
    editDescriptionInput.type = "text";
    editDescriptionInput.value = task.description;
    editDescriptionInput.className = "task-input";

    const editPrioritySelect = document.createElement("select");
    editPrioritySelect.className = "task-input";

    const priorityOptions = ["Seleccione", "Alta", "Media", "Baja"];

    priorityOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        editPrioritySelect.appendChild(optionElement);

        if (option === task.priority) {
            optionElement.selected = true;
        }
    });

    const saveButton = document.createElement("button");
    saveButton.innerText = "Guardar";
    saveButton.className = "button-link edit-button";
    saveButton.onclick = () => saveEditedTask(id);

    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "&#10006;"; // Símbolo X
    cancelButton.className = "delete-button";
    cancelButton.onclick = () => cancelEdit(id);

    listItem.innerHTML = ""; 

    listItem.appendChild(editDescriptionInput);
    listItem.appendChild(editPrioritySelect);
    listItem.appendChild(saveButton);
    listItem.appendChild(cancelButton);

    const spanElement = document.createElement("span");
    spanElement.innerHTML = `${task.description} - Prioridad: ${task.priority}`;

    taskButton.appendChild(spanElement);
}

function saveEditedTask(id) {
    const task = tasks.find(t => t.id === id);

    const editDescriptionInput = document.querySelector(`#tasks-list li:nth-child(${id}) input[type="text"]`);
    const editPrioritySelect = document.querySelector(`#tasks-list li:nth-child(${id}) select`);

    const newDescription = editDescriptionInput.value.trim();
    const newPriority = editPrioritySelect.value;

    if (newDescription && newPriority !== "Seleccione" && isValidPriority(newPriority)) {
        task.description = newDescription;
        task.priority = newPriority;
        displayTasks();
    } else {
        alert("Por favor, ingrese una descripción válida y seleccione una prioridad.");
    }
}


function cancelEdit(id) {
    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}