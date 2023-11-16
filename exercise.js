async function getTodoList(){
    const link = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(link);
    const data = await response.json()
    return data;
}

getTodoList()
.then ((val) => console.log(val))
.catch ((err) => console.error(err))