import React, {useReducer} from 'react'

const initialState = {
    countOne: 0,
    countTwo: 0
}

const reducer = (state, action) => {

    switch(action.type){
        case "increment":
            return {...state, countOne: state.countOne + action.value}
        case "decrement":
            return {...state, countOne: state.countOne - action.value}
        case "increment1":
            return {...state, countTwo: state.countTwo + action.value}
        case "decrement1":
            return {...state, countTwo: state.countTwo - action.value}
        case "reinitialiser":
            return initialState
        default:
            return state
    }
}

const Count = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <div align="left">
                <h1>{count.countOne}</h1>
                <button onClick={() => dispatch({type: "increment", value:1})}>+</button>
                <button onClick={() => dispatch({type: "decrement", value:1})}>-</button>
            </div>
            <div align="right">
                <h1>{count.countTwo}</h1>
                <button onClick={() => dispatch({type: "increment1", value:10})}>+</button>
                <button onClick={() => dispatch({type: "decrement1", value:10})}>-</button>
            </div>
            <button onClick={() => dispatch({type: "reinitialiser"})}>R</button>
        </>
    )
}

export default Count