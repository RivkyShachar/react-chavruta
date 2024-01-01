import Task from "./taskClass.js"

let taskList = [
    { id: "0", name: "GYM", parent: "#task_table", time: "10:15" },
    { id: "1", name: "Breakfast", parent: "#task_table", time: "12:00" },
];

let counter = taskList.length;

window.onload = () => {
    declareEvents();
    let storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList == null) {

        localStorage.setItem("taskList", JSON.stringify(taskList));
    } else {
        let parsedTaskList = JSON.parse(storedTaskList);
        taskList = parsedTaskList.map(item => new Task(item.parent, item.id, item.name, item.time));

    }
    createTaskTable();
};

const declareEvents = () => {
    let addTaskBtn = document.querySelector("#add_task_btn");
    let clearAllTaskBtn = document.querySelector("#clear_all_task_btn");
    addTaskBtn.addEventListener("click", onAddTask);
    clearAllTaskBtn.addEventListener("click", onClearAllTask);

}

const createTaskTable = () => {
    let table = document.querySelector("#task_table");
    table.innerHTML = "";
    let orderedList = _.sortBy(taskList, ['time']);
    orderedList.forEach((task) => {
        task.render();
    })
}


const onAddTask = () => {
    let nameInput = document.querySelector("#task_name_input");
    let timeInput = document.querySelector("#task_time_input");
    let taskName = nameInput.value.trim();
    let taskTime = timeInput.value.trim(); // Trim to remove leading/trailing spaces
    console.log(taskName);
    console.log(taskTime);

    // Validate taskTime using the isValidTime function
    if (taskName === '' || !isValidTime(taskTime)) {
        alert('Please enter both a valid task name and time.');
        return;
    }

    let task = new Task("#task_table", counter++, taskName, taskTime);
    taskList.push(task);
    createTaskTable();

    localStorage.setItem("taskList", JSON.stringify(taskList));

    nameInput.value = '';
    timeInput.value = '';
}

const onClearAllTask = () => {
    let confirmClear = confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
        taskList = [];
        localStorage.removeItem("taskList");
        createTaskTable();
    }
}
const isValidTime = (time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
}

export { taskList, createTaskTable, isValidTime };