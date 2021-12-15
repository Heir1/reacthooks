import React, {useState} from "react";
import {v1 as uuid} from "uuid"
import AddToDoForm from "./AddToDoForm";

const Todo = () => {
    const [todos, setTodos] = useState([
        {id:1, todo: "Achetez du lait"},
        {id:2, todo: "Achetez du pain"},
        {id:3, todo: "Achetez du fromage"}
    ])

    const [warning , setWarning] = useState(false);

    const myTodos = todos.map(todo => {
        return(
            <li key={todo.id} className="list-group-item">
                {todo.todo}
            </li>
        )
    })

    const addNewToDo = (newToDO) => {
        if(newToDO !== ""){
            setTodos([...todos,{
                id : uuid(),
                todo: newToDO
            }])
            warning && setWarning(false)
        }
        else{
            setWarning(true);
        }
    }

    const alert = warning && <div className="alert alert-danger mt-4" role="alert">Veuillez renseigner un todo</div>

    return(
        <div>         
            <h1 className="text-center">{todos.length} {todos.length > 1 ? "TO-DOS" : "TO-DO"}</h1>
            <ul className="list-group">
                {myTodos}
            </ul>
            {alert}
            <AddToDoForm addNewToDo={addNewToDo} />
        </div>
    )
}

export default Todo;