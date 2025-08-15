const bodyy = document.getElementById('body');
const sec = document.createElement('section');
const div_card1 = document.createElement('div');
const div_card2 = document.createElement('div');
const mainn = document.createElement('div');
const div_2 = document.createElement('div');
const div_3 = document.createElement('div');
const heading = document.createElement('h1');
const inputt = document.createElement('input');
const list = document.createElement('ul');
const btn = document.createElement("button");
div_card1.classList = "container py-5 h-100";"card rounded-3";"row d-flex justify-content-center align-items-center h-100";"col col-lg-8 col-xl-6";
div_card2.className = "card-body p-4 cardd";
div_card1.style.width = "450px";
div_card2.style.backgroundColor = '#341c8c';
div_card2.style.borderRadius = "20px";
// sec.style.backgroundColor = '#657ebe';
sec.className = "vh-100";
bodyy.classList = "fst-italic";"fs-1";

mainn.className = "d-flex align-items-center justify-content-center";
mainn.id = "div1";

div_2.className = "d-flex align-items-center justify-content-center";
div_3.className = "d-flex align-items-center justify-content-center";

heading.innerHTML = `TO DO LIST <i class="bi bi-check2-all"></i> `;
heading.style.fontSize = '50px';
heading.className = "me-2 heaad";

inputt.type = "text";
inputt.placeholder = "Let's Get Our Tasks Done <3";
inputt.id = "input1";
inputt.className = "input_task";

list.classList = "task_list";"list-group rounded-0";

btn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
btn.className = "btn";


bodyy.appendChild(sec);
sec.appendChild(div_card1);
div_card1.appendChild(div_card2);
div_card2.appendChild(mainn);
div_card2.appendChild(div_2);
div_card2.appendChild(div_3);
mainn.appendChild(heading);
div_2.appendChild(inputt);
div_2.appendChild(btn);
div_3.appendChild(list);


function add() {
    const input_index = document.querySelector('#input1');
    const list_index = document.querySelector('.task_list');
    const task = input_index.value;
    if (task !== "") {
        const list_item = document.createElement('input');
        const item = document.createElement('li');
        const content = document.createElement('label');
        const del = document.createElement('button');
        list_item.type = "checkbox";
        list_item.className = "list-group-item border-0 d-flex align-items-center ps-0 ";
        list_item.onchange = updateStorage;
        
        item.className = "list-group-item border-0 d-flex align-items-center ps-0";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.padding = "5px 10px";
        item.style.borderBottom = "1px solid #ddd";
        
        content.textContent = task;
        content.style.marginLeft = "8px";
        content.className="fs-3 conten";
        
        del.style.marginLeft = "auto";
        del.style.background = "transparent";
        del.style.border = "none";
        del.style.color = "white";
        del.style.cursor = "pointer";
        del.innerHTML = `<i class="bi bi-x-lg"></i>`;

        del.onclick = function() {
            item.remove();
            updateStorage();
        };

        item.appendChild(list_item);
        item.appendChild(content);
        list_index.appendChild(item);
        item.appendChild(del);
        input_index.value = "";
        updateStorage();
    }
}

btn.onclick = add;

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function updateStorage() {
    const listItems = document.querySelectorAll('.task_list li');
    const tasks = [];
    listItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');
        tasks.push({
            text: label.textContent,
            done: checkbox.checked
        });
    });
    saveTasks(tasks);
}

function loadTasksOnStart() {
    const tasks = getTasks();
    const list_index = document.querySelector('.task_list');
    tasks.forEach(task => {
        const list_item = document.createElement('input');
        const item = document.createElement('li');
        const content = document.createElement('label');
        const del = document.createElement('button');
        
        list_item.type = "checkbox";
        list_item.className = "list-group-item border-0 d-flex align-items-center ps-0";
        list_item.checked = task.done;
        list_item.onchange = updateStorage;
        
        item.className = "list-group-item border-0 d-flex align-items-center ps-0";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.padding = "5px 10px";
        item.style.borderBottom = "1px solid #ddd";
        
        content.textContent = task.text;
        content.style.marginLeft = "8px";
        content.className="fs-3 conten";
        
        del.style.marginLeft = "auto";
        del.style.background = "transparent";
        del.style.border = "none";
        del.style.color = "white";
        del.style.cursor = "pointer";
        del.innerHTML = `<i class="bi bi-x-lg"></i>`;
        del.onclick = function() {
            item.remove();
            updateStorage();
        };

        item.appendChild(list_item);
        item.appendChild(content);
        item.appendChild(del);
        list_index.appendChild(item);
    });
}

window.onload = loadTasksOnStart;