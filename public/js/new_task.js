import { update_task } from "../../modules/update_task.js";
import { delete_task } from "../../modules/delete_task.js";

document.getElementById("task").addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		// console.log("Enter was pressed");
		const task = document.getElementById("task").value;
		if (task) {
			// console.log(task);
			addNewTask(task);
			document.getElementById("task").value = "";
		}
	}
});

// function _addNewTask(task) {
// 	let tasks;

// 	if (localStorage.hasOwnProperty("to_do_tasks")) {
// 		tasks = JSON.parse(localStorage.getItem("to_do_tasks"));
// 		tasks.push({ name: task, status: "to do" });
// 	} else {
// 		tasks = [{ name: task, status: "to do" }];
// 	}
// 	localStorage.setItem("to_do_tasks", JSON.stringify(tasks));

// 	const tasks_list = document.getElementById("tasks_list");
// 	const newTask = document.createElement("li");
// 	newTask.innerText = task;

// 	const buttons = document.createElement("div");
// 	buttons.classList.add("buttons");

// 	const complete = document.createElement("button");
// 	complete.classList.add("complete");

// 	const remove = document.createElement("button");
// 	remove.classList.add("remove");

// 	buttons.appendChild(remove);
// 	buttons.appendChild(complete);
// 	newTask.appendChild(buttons);
// 	tasks_list.prepend(newTask);
// }

function addNewTask(task) {
	new Promise((resolve) => {
		//synchronic read from database
		let tasks;

		if (localStorage.hasOwnProperty("to_do_tasks")) {
			tasks = JSON.parse(localStorage.getItem("to_do_tasks"));
			tasks.push({ name: task, status: "to do" });
			resolve(tasks);
		} else {
			tasks = [
				{
					name: task,
					status: "to do",
				},
			];
			resolve(tasks);
		}
	}).then((tasks) => {
		localStorage.setItem("to_do_tasks", JSON.stringify(tasks));

		const tasks_list = document.getElementById("tasks_list");
		const newTask = document.createElement("li");
		newTask.innerText = task;

		const buttons = document.createElement("div");
		buttons.classList.add("buttons");

		const complete = document.createElement("button");
		complete.classList.add("complete");
		complete.addEventListener("click", function () {
			update_task(this.parentNode.parentNode);
		});

		const remove = document.createElement("button");
		remove.classList.add("remove");
		remove.addEventListener("click", function () {
			delete_task(this.parentNode.parentNode);
		});

		buttons.appendChild(complete);
		buttons.appendChild(remove);
		newTask.appendChild(buttons);
		tasks_list.prepend(newTask);
	});
}
