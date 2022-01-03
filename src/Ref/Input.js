import React, {useRef, useState, useEffect} from 'react'

function Input() {
    // const usernameRef = useRef(null)
    // console.log(usernameRef);
    // const [name, setName] = useState(null)

    // const handleSubmit = () => {
    //     setName(usernameRef.current.value);
    // }

    const [count, setCount] = useState(0);

    const setIntervalRef = useRef();

    useEffect(() => {
        setIntervalRef.current = setInterval(() => {
            setCount(prevCount => {
                return prevCount + 1
            })   
        }, 1000);
    }, []);

    const stopIncremrnt = () => {
        clearInterval(setIntervalRef.current)
    }

    return (
        <>
            <h1>{count}</h1>
            {/* <h2>{name}</h2>
            <input ref={usernameRef} type="text" /> 
            <button onClick={handleSubmit} >Valider</button>        */}
            <button onClick={stopIncremrnt} >Stop</button>
        </>
    )
}

export default Input;
