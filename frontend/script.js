const API_URL = "http://localhost:5000/api/tasks";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Fetch tasks on load
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span 
        style="cursor:pointer; text-decoration:${task.status === "Completed" ? "line-through" : "none"}"
        onclick="toggleStatus('${task._id}', '${task.status}')"
      >
        ${task.title} - ${task.status}
      </span>
      <button onclick="deleteTask('${task._id}')">❌</button>
    `;

    taskList.appendChild(li);
  });
}


// Add task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  taskForm.reset();
  fetchTasks();
});

// Delete task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

fetchTasks();

// Toggle task status
async function toggleStatus(id, currentStatus) {
  const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: newStatus })
  });

  fetchTasks();
}
