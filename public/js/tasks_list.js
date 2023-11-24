// const tasks = [
// 	{ name: "Third task", status: "to do" },
// 	{ name: "Second task", status: "to do" },
// 	{ name: "First task", status: "done" },
// ];

if (localStorage.hasOwnProperty("to_do_tasks")) {
	const tasks = JSON.parse(localStorage.getItem("to_do_tasks"));

	tasks.map((task) => {
		const tasks_list = document.getElementById("tasks_list");
		const newTask = document.createElement("li");
		newTask.innerText = task.name;

		if (task.status === "ready") newTask.classList.add("ready");

		const buttons = document.createElement("div");
		buttons.classList.add("buttons");

		const remove = document.createElement("button");
		remove.classList.add("remove");

		const complete = document.createElement("button");
		complete.classList.add("complete");

		buttons.appendChild(complete);
		buttons.appendChild(remove);

		newTask.appendChild(buttons);

		tasks_list.prepend(newTask); //reverse sort
		// tasks_list.appendChild(newTask);

		console.log(tasks_list);
	});
}
