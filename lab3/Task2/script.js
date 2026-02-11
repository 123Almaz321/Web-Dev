const taskList = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const inp = document.getElementById("newInput");

function addTask() {
    const taskList = document.getElementById("list");
    const inp = document.getElementById("newInput");

    if (inp.value.trim() == "") return;

    const li = document.createElement('li');
    li.className = 'task-item'; 

    li.innerHTML = `
        <input type="checkbox" onchange="toggleDone(this)">
        <span>${inp.value}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Del</button>
    `;

    taskList.appendChild(li);
    inp.value = "";
}

function toggleDone(checkbox) {
    const parent = checkbox.parentElement;
    if (checkbox.checked) {
        parent.classList.add('done');
    } else {
        parent.classList.remove('done');
    }
}