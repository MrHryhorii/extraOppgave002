/**
 * @typedef {Object} Todo
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */


class TodoList {
    
    constructor() {
        /** @type {Array<Todo> | null} */
        this.todos = null;
    }
    
    /**
     * Fetch todos from the API
     * @returns {Promise<Array<Todo>>} A promise that resolves to an array of todos
     */
    fetchTodos() {
        return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(
                (/** @type {Array<Todo>} */ data) => {
                this.todos = data;
                resolve(data);
            })
            .catch(error => {
                this.todos = null;
                reject(error);
            });
        });
    }
}

const todoList = new TodoList();
