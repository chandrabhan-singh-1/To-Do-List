const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const mainDiv = document.querySelector(".main");

const tasks = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];

const showAllTasks = () => {
  tasks.forEach((obj, i) => {
    const tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("id", "task");

    const divTag = document.createElement("div");
    tasksDiv.append(divTag);

    const pTag = document.createElement("p");
    pTag.innerText = obj.title;
    divTag.append(pTag);

    const spanTag = document.createElement("span");
    spanTag.innerText = obj.description;
    divTag.append(spanTag);

    const iTag = document.createElement("i");
    iTag.setAttribute("class", "iTag fa-regular fa-trash-can");
    tasksDiv.append(iTag);

    mainDiv.append(tasksDiv);

    iTag2.addEventListener("click", () => {
      removeTasks();
      tasks.splice(i, 1);
      console.log(tasks);
      localStorage.setItem("taskList", JSON.stringify(tasks));
      showAllTasks();
    });
  });
};

form.addEventListener("submit", (e) => {
  // console.log(tasks);
  // e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("taskList", JSON.stringify(tasks));

  showAllTasks();
});

const removeTasks = () => {
  tasks.forEach(() => {
    const tasksDiv = document.getElementById("task");
    tasksDiv.remove();
  });
};

showAllTasks();
