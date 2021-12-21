import React, {useState} from 'react'
import FunctionDisplayKey from './FunctionDisplayKey'
// import ClassDisplayKey from './ClassDisplayKey'

function Container() {
    const [show, setShow] = useState(true)
    
    return (
        <div align="center">
            <button onClick={() => setShow(!show)}>{show ? "Remove" : "Display"}</button>
            {
                show && <FunctionDisplayKey/>
            }
        </div>
    )
}

export default Container
