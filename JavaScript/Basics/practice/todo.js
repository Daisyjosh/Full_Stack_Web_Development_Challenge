let Todo = [];
let user_input = prompt("Enter Your Choice");
while (user_input){
    if(user_input === "quit")
    {
        console.log("You are quiting!!");
        break;
    }
    else if(user_input.toLowerCase() === "list")
    {
        console.log("-------------------------");
        for(let i = 0; i < Todo.length; i++)
        {
            console.log(i,Todo[i]);
        }
        console.log("-------------------------")
    }
    else if(user_input === "add")
    {
        let task = prompt("Enter the task: ");
        Todo.push(task);
        console.log("Task Added..!!")
    }
    else if(user_input === "delete")
    {
        let index = prompt("Enter the index to delete the task: ");
        Todo.splice(index,1);
        console.log("Task deleted...!!")
    }

    user_input = prompt("Enter you choice: ")

}


