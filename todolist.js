const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        const newTask = document.createElement("li");
        newTask.className = "task-item";
        newTask.innerHTML = `
            <input type="checkbox">
            <label>${input.value.trim()}</label>
        `;
        list.appendChild(newTask);
        input.value = "";
    }
});

list.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentNode.classList.toggle("completed");
    }
});