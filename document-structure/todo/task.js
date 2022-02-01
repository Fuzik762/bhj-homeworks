taskList = document.querySelector("#tasks__list");
addTask = document.querySelector("#tasks__add");
taskText = document.querySelector("#task__input");

addedTask = () => {
  taskList.innerHTML += `
  <div class="task">
    <div class="task__title">
    ${taskText.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
  `;
  removeTasks = taskList.querySelectorAll(".task__remove");
  removeTasks.forEach((element) => {
    element.addEventListener("click", (e) => {
      taskList.removeChild(e.target.closest(".task"));
      console.log(e.target.closest(".task"));
    });
  });
};

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskText.value !== "") {
    addedTask();
    if (e.key === "Enter") {
      addedTask();
    }
  }
});
