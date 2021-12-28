import React from 'react'

const Count = ({text, count, bgColor}) => {
    const progress = {width : `${count}%`}
    console.log(`Pourcentage ${text}`)
    return(
        <>
            <p className="h1">{count} %</p>
            <div className="progress">
                <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress}>
                </div>
            </div>
        </>
    )
}

export default React.memo(Count)
