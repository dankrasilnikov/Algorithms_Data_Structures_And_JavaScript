const taskManager = {
    name: 'John',
    tasks: [],
    addTask(task) {
        this.tasks.push(task);
    },
    executeTasks() {
        this.tasks.forEach((task) => {
            task.apply(this, ['1', '2', '3']);
        });
    }
};
// Ожидаемый результат: "Arrow task" и "Task for John" (при правильном контексте для regularTask)

function testFunction(arg1, arg2, arg3) {
    console.log(arg1,arg2,arg3, this.name);
}

taskManager.addTask(testFunction);


taskManager.executeTasks();
