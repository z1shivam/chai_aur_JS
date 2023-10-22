arr = [];
console.log("Welcome to the todo app! \n Select the option you want:");
console.log("1. View Todo\n2. Add Todo\n3.Remove Todo")

const removeTodo = () => {

}

const addTodo = () => {
    

}

const viewTodo = () => {
    if (arr.length == 0) console.log("No todos in the list");
    else {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(`date: ${element.date}`);
            console.log(element.todo);
            console.log(" ")
        }
    }
}
