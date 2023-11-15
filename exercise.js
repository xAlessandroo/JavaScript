async function getTodoList(){
    const link = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(link);
    const data = await response.json()
    console.log(data);
}

getTodoList()