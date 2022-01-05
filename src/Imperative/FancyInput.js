import React, {useState, useImperativeHandle, useRef} from 'react'

const FancyInput = React.forwardRef((props, ref) => {

    const inputRef = useRef();
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        focus: (date) => {
            if(count === 4){
                const colors = ["red", "blue", "orange", "green", "pink", "purple", "yellow"];

                const style = `4px solid ${colors[date]}`;
                inputRef.current.style.border = style;
            }
        },

        countMax: () => {
            if(count < 5) setCount(prevCount => prevCount+1)
        }
    }))
    return (
        <div>
            <h1>{count}</h1>
            <input ref={inputRef} type="text" /> 
        </div>
    )
})

export default FancyInput
