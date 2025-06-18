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
        //renderPage();
    }
}

function prevPage(){
    if (page > 1) 
    {
        page--;
        //renderPage();
    }
}