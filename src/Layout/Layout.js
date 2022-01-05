import React, {useState, useEffect, useLayoutEffect} from 'react'

const Layout = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Je suis dans useEffect")
    }, [count]);

    useLayoutEffect(() => {
        console.log("Je suis dans useLayoutEffect")
    }, [count]);

    console.log("Render")

    return (
        <div>
            <h2>{count}</h2> 
            <button onClick={() => setCount(prevCount => prevCount+1)} >+1</button>      
        </div>
    )
}

export default Layout
