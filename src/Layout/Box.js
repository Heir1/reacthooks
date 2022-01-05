import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import Content from "./Content";

const Box = () => {
    
    const [height, setHeight] = useState(100);
    const boxRef = useRef(null);
    const timeRef = useRef(0);
    
    useLayoutEffect(() => {
        // console.log(boxRef.current.getBoundingClientRect().height)
        // console.log(boxRef.current.offsetHeight)
        if(boxRef.current.offsetHeight < 150){
            setHeight(prevHeight => prevHeight + 150);

            console.log(`Attente: ${performance.now() - timeRef.current}`)
        }
    }, [height])

    timeRef.current = performance.now();

    const boxStyle = {
        width: '400px',
        height: `${height}px`,
        margin: '0 auto',
        background : height > 100 ? 'green' : 'black'
    }
    return (
        <div ref={boxRef} style={boxStyle}>
            {`Height: ${height}`}
            <Content/>        
        </div>
    )
}

export default Box
