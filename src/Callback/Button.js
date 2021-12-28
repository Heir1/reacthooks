import React from 'react'

function Button({handleClick, bgColor, increment, children}) {
    const bg = `btn btn-${bgColor}`;
    console.log(`Button ${children}`)
    return <button className={bg} onClick={() => handleClick(increment)}>+ {increment} %</button>
}

export default React.memo(Button)
