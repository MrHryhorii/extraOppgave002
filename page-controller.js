var page = 1;
const page_size = 10;



function getPageData(array, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
}

function resetPage(){
    page = 1;
}

function nextPage(){
    const totalPages = Math.ceil(todoList.todos.length / page_size);

    if (page < totalPages) 
    {
        page++;
        renderPage();
    }
}

function prevPage(){
    if (page > 1) 
    {
        page--;
        renderPage();
    }
}

function renderPage(){
    const pageData = getPageData(todoList.todos, page, page_size);
    //
    clearBodyElement();
    // Create Table
    const h1 = document.createElement("h1");
    h1.innerText = "To-Do list";
    document.body.appendChild(h1);
    //
    const todo_table = document.createElement("table");
    //
    const todo_tr = document.createElement("tr");
    todo_table.appendChild(todo_tr);
    //
    const todo_th_id = document.createElement("th");
    todo_th_id.innerText = "id";
    todo_tr.appendChild(todo_th_id);
    //
    const todo_th_userId = document.createElement("th");
    todo_th_userId.innerText = "userId";
    todo_tr.appendChild(todo_th_userId);
    //
    const todo_th_title = document.createElement("th");
    todo_th_title.innerText = "title";
    todo_tr.appendChild(todo_th_title);
    //
    const todo_th_completed = document.createElement("th");
    todo_th_completed.innerText = "completed";
    todo_tr.appendChild(todo_th_completed);
    //
    document.body.appendChild(todo_table);

    // For every todo-entry, we do something
    // Fill table
    for (const todo of pageData) {

        console.log(todo);
        // ... Add the todo-entry to the DOM here!
        const table_row = document.createElement("tr");
        todo_table.appendChild(table_row);
        //
        const todo_td_id = document.createElement("td");
        todo_td_id.classList.add("id-td");
        todo_td_id.innerText = todo.id;
        table_row.appendChild(todo_td_id);
        //
        const todo_td_userId = document.createElement("td");
        todo_td_userId.classList.add("userId-td");
        todo_td_userId.innerText = todo.userId;
        table_row.appendChild(todo_td_userId);
        //
        const todo_td_title = document.createElement("td");
        todo_td_title.classList.add("title-td");
        todo_td_title.innerText = todo.title;
        table_row.appendChild(todo_td_title);
        //
        const todo_td_completed = document.createElement("td");
        todo_td_completed.classList.add("completed-td");
        todo_td_completed.innerText = todo.completed;
        table_row.appendChild(todo_td_completed);

    }
    // Create buttons
    const controls = document.createElement("div");
    controls.classList.add("controls");
    //
    const btn_prev = document.createElement("button");
    btn_prev.innerText = "Prev";
    btn_prev.onclick = () => {
        prevPage();
    }
    controls.appendChild(btn_prev);
    //
    const page_show = document.createElement("p");
    page_show.innerText = page;
    controls.appendChild(page_show);
    //
    const btn_next = document.createElement("button");
    btn_next.innerText = "Next";
    btn_next.onclick = () => {
        nextPage();
    }
    controls.appendChild(btn_next);
    //
    document.body.appendChild(controls);

}