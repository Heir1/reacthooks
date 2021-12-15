import React, {useState} from "react";

const FunctionState = () => {

    const [counter, setCounter] = useState(0);
    
    // const addOne = () => {
    //     setCounter(prevCounter => prevCounter+1)
    // }

    return(
        <div>
            <h3><p>Function State : {counter} </p></h3>
            <button onClick={() => setCounter(prevCounter => prevCounter+1)}>+</button>
            {/* <button onClick={addOne}>+</button> */}
        </div>
    )
}

export default FunctionState;