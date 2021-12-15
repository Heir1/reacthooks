import React,{useState} from "react";

const AddToDoForm = ({addNewToDo}) => {
    
    const [addToDo, setAddToDo] = useState("");

    const handleTodo = (e) => {
        e.preventDefault();
        addNewToDo(addToDo);
        setAddToDo("");
    }

    return(
       <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo </label>
                    <input className="form-control mt-3" value={addToDo} type="text" onChange={(e) => setAddToDo(e.target.value)} />
                    <input className="btn btn-success mt-3" type="submit"/>
                </div>
            </div>
       </form>
    )
}

export default AddToDoForm;