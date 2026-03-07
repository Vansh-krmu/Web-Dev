const userEmailInput = document.getElementById("userEmail");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

/* -------------------------
   STORAGE FUNCTIONS
-------------------------- */

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* -------------------------
   EMAIL FUNCTION
-------------------------- */

function sendEmailReminder(taskText) {

    const userEmail = userEmailInput.value.trim();

    if (userEmail === "") {
        alert("Please enter your email first.");
        return;
    }

    const templateParams = {
        task_name: taskText,
        message: `Reminder: Don't forget to complete this task → ${taskText}`,
        to_email: userEmail
    };

    emailjs.send(
        "service_zcm68la",
        "template_ay9nxkx",
        templateParams
    )
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
    })
    .catch(function(error) {
        console.error("Email failed to send:", error);
    });
}
/* -------------------------
   LOAD TASKS ON START
-------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => {
        const li = createTaskElement(task.text, task.completed);
        taskList.appendChild(li);
    });
    updateStats();
});

/* -------------------------
   CREATE TASK ELEMENT
-------------------------- */

function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    if (completed) li.classList.add("completed");

    const left = document.createElement("div");
    left.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
        updateStats();
        updateStorageFromDOM();
    });

    left.appendChild(checkbox);
    left.appendChild(span);

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");

    editBtn.addEventListener("click", function () {
        const newText = prompt("Edit task:", span.textContent);
        if (newText && newText.trim() !== "") {
            span.textContent = newText.trim();
            updateStorageFromDOM();
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateStats();
        updateStorageFromDOM();
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(actions);

    return li;
}

/* -------------------------
   ADD NEW TASK
-------------------------- */

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = createTaskElement(text);
    taskList.appendChild(li);

    // Send email when task is added
    sendEmailReminder(text);

    taskInput.value = "";
    updateStats();
    updateStorageFromDOM();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

/* -------------------------
   UPDATE STORAGE FROM DOM
-------------------------- */

function updateStorageFromDOM() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    saveTasksToStorage(tasks);
}

/* -------------------------
   UPDATE STATS
-------------------------- */

function updateStats() {
    const tasks = taskList.querySelectorAll("li");
    const completed = taskList.querySelectorAll(".completed");

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed.length;
    pendingTasks.textContent = tasks.length - completed.length;
}

/* -------------------------
   EXPORT TASKS
-------------------------- */

const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", function () {
    const tasks = localStorage.getItem("tasks");

    const blob = new Blob([tasks], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    a.click();

    URL.revokeObjectURL(url);
});