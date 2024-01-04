import { taskList, createTaskTable } from "./appMission.js"


export default class TaskClass {
    constructor(_parent, _id, _name, _time) {
        this.parent = _parent;
        this.id = _id;
        this.name = _name;
        this.time = _time;
    }

    render = () => {
        let table = document.querySelector(this.parent);
        let newRow = document.createElement("div");
        newRow.className = "row my-2 rounded bg-secondary bg-opacity-10 ms-2 me-1 p-2";
    
        let taskNameCell = document.createElement("div");
        taskNameCell.className = "col-4 ";
        taskNameCell.textContent = this.name;
    
        let taskTimeCell = document.createElement("div");
        taskTimeCell.className = "col-4 ";
        taskTimeCell.textContent = this.time;
    
        let deleteBtnCell = document.createElement("div");
        deleteBtnCell.className = "col-2"; // Adjusted the column class to make space for both buttons
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.addEventListener("click", () => this.deleteTask());
        deleteBtnCell.append(deleteBtn);
    
        let editBtnCell = document.createElement("div");
        editBtnCell.className = "col-2"; // Adjusted the column class to make space for both buttons
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "btn btn-warning"; // Changed the button color to differentiate from delete button
        editBtn.addEventListener("click", () => this.editTask());
        editBtnCell.append(editBtn);
    
        newRow.append(taskNameCell);
        newRow.append(taskTimeCell);
        newRow.append(deleteBtnCell);
        newRow.append(editBtnCell);
    
        table.append(newRow);
    }
    

    deleteTask = () => {
        let confirmClear = confirm("Are you sure you want to delete the task?");
        let index = taskList.indexOf(this);
        if (confirmClear && index > -1) {
            taskList.splice(index, 1);
            createTaskTable();
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }
    }

    editTask = () => {
        // Assuming you have some way to collect new information for the task, for example, through prompts or a form
        let newName = prompt("Enter the new task name:", this.name);
        let newTime = prompt("Enter the new task time:", this.time);
    
        // Check if the user clicked cancel on the prompt
        if (newName === null || newTime === null) {
            return;
        }
        // Update the task properties with the new information
        this.name = newName;
        this.time = newTime;
    
        // Update the taskList
        let index = taskList.indexOf(this);
        if (index > -1) {
            taskList[index] = this;
            createTaskTable();
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }
    }
}
