alert("hello");
let todo = [];
function handleAdd()
{
    const text = document.getElementById("input").value
    console.log(text);
    if (!text)
    {
        alert("type something!");
        return;
    }
    const payLoad = {
        title: text,
        status: false
    }
    todo.push(payLoad);
    localStorage.setItem("todos", JSON.stringify(todo));
    const container = document.getElementById("task");
    displayTodos(todo, container);
}


function displayTodos(todos, container)
{
    let ul = document.createElement("ul");
    container.innerHTML = "";
    for (let i = 0; i < todos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = `${todos[i].title} -${todos[i].status}`;
        ul.append(li)
    }
    container.append(ul);
}

function handleLoad()
{
    const data = JSON.parse(localStorage.getItem("todos"));
    const container = document.getElementById("task");
    if (data)
    {
        todo = data;
        displayTodos(data, container);
        }
}

window.addEventListener("load", function ()
{
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", handleAdd);
    const removeBtn = document.getElementById("remove");
    removeBtn.addEventListener("click", handleRemove);
    handleLoad();
})

function handleRemove()
{
    todo = [];
    localStorage.setItem("todos", JSON.stringify(todo));
    const container = document.getElementById("task");
    container.innerHTML = "";
}