/*
 * Filename: complexCode.js
 * Description: This code is a sophisticated and elaborate implementation of a task management system.
 * It includes features like task creation, manipulation, completion, and reporting.
 */

// Define the Task class
class Task {
  constructor(id, title, description, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  complete() {
    this.completed = true;
  }

  toString() {
    return `${this.title} - Due: ${this.dueDate}`;
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title, description, dueDate) {
    const task = new Task(this.nextId, title, description, dueDate, false);
    this.tasks.push(task);
    this.nextId++;
  }

  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.complete();
    }
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  toString() {
    let output = '';
    for (const task of this.tasks) {
      output += `${task}\n`;
    }
    return output;
  }
}

// Usage example
const taskManager = new TaskManager();

// Add some tasks
taskManager.addTask('Task 1', 'Description 1', '2022-01-01');
taskManager.addTask('Task 2', 'Description 2', '2022-02-01');
taskManager.addTask('Task 3', 'Description 3', '2022-03-01');

// Complete a task
taskManager.completeTask(2);

// Display all tasks
console.log(taskManager.toString());

// Display completed tasks
console.log(taskManager.getCompletedTasks());

// Display pending tasks
console.log(taskManager.getPendingTasks());

// Delete a task
taskManager.deleteTask(1);

// Display remaining tasks
console.log(taskManager.toString());

// Clear all tasks
taskManager.tasks = [];

// Display empty task manager
console.log(taskManager.toString());
